# cloud_sync.py — optional bridge between the Jarvis desktop app and the
# Jarvis web brain (Supabase): shared memories, chat threads, crew presence,
# and activity feed. Everything is best-effort: if config is missing or a call
# fails, the desktop keeps working normally. Never raises into the app.
import json
import threading
from datetime import date, datetime, timezone
from pathlib import Path
from typing import Any

try:
    import requests
except Exception:  # pragma: no cover
    requests = None


def get_base_dir():
    import sys
    if getattr(sys, "frozen", False):
        return Path(sys.executable).parent
    return Path(__file__).resolve().parent


CONFIG_PATH = get_base_dir() / "config" / "jarvis_cloud.json"
MEMORY_FILE = get_base_dir() / "memory" / "long_term.json"

# Thread title used on the web side for desktop conversations.
THREAD_TITLE_PREFIX = "Jarvis Desktop — "


def load_cloud_config() -> dict[str, Any] | None:
    """Read config/jarvis_cloud.json; returns None when not configured."""
    try:
        if not CONFIG_PATH.exists():
            return None
        data = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
        required = ("supabase_url", "anon_key", "email", "password")
        if not all(data.get(k) for k in required):
            return None
        return data
    except Exception:
        return None


class CloudSync:
    """Thin Supabase client for the desktop → web brain bridge."""

    def __init__(self, config: dict[str, Any]):
        self._url = str(config["supabase_url"]).rstrip("/")
        self._anon = str(config["anon_key"])
        self._email = str(config["email"])
        self._password = str(config["password"])
        self._token: str | None = None
        self._user_id: str | None = None
        self._lock = threading.Lock()
        self.voice_enabled = True
        self.wake_word_enabled = True
        self.auto_learn_enabled = True

    # ------------------------------------------------------------------ auth
    def login(self) -> bool:
        if requests is None:
            return False
        try:
            r = requests.post(
                f"{self._url}/auth/v1/token?grant_type=password",
                json={"email": self._email, "password": self._password},
                headers={"apikey": self._anon},
                timeout=15,
            )
            if r.status_code != 200:
                return False
            body = r.json()
            self._token = body.get("access_token")
            self._user_id = (body.get("user") or {}).get("id")
            return bool(self._token)
        except Exception:
            return False

    def _headers(self) -> dict[str, str]:
        headers = {"apikey": self._anon, "content-type": "application/json"}
        if self._token:
            headers["Authorization"] = f"Bearer {self._token}"
        return headers

    def _get(self, path: str, params: dict[str, Any] | None = None) -> list[dict[str, Any]] | None:
        if requests is None:
            return None
        try:
            r = requests.get(f"{self._url}{path}", headers=self._headers(), params=params, timeout=15)
            if r.status_code != 200:
                return None
            return r.json()
        except Exception:
            return None

    def _post(self, path: str, body: dict[str, Any], headers: dict[str, str] | None = None) -> dict[str, Any] | None:
        if requests is None:
            return None
        try:
            r = requests.post(f"{self._url}{path}", json=body, headers={**self._headers(), **(headers or {})}, timeout=15)
            if r.status_code not in (200, 201):
                return None
            return r.json()
        except Exception:
            return None

    # --------------------------------------------------------------- settings
    def read_settings(self) -> dict[str, Any]:
        """Pull the web-side capability toggles so the desktop honors them."""
        if not self._token or not self._user_id:
            return {}
        rows = self._get(
            "/rest/v1/user_settings",
            params={"select": "voice_enabled,wake_word_enabled,auto_learn_enabled", "user_id": f"eq.{self._user_id}"},
        ) or []
        if rows:
            row = rows[0]
            self.voice_enabled = bool(row.get("voice_enabled", True))
            self.wake_word_enabled = bool(row.get("wake_word_enabled", True))
            self.auto_learn_enabled = bool(row.get("auto_learn_enabled", True))
        return {
            "voice_enabled": self.voice_enabled,
            "wake_word_enabled": self.wake_word_enabled,
            "auto_learn_enabled": self.auto_learn_enabled,
        }

    # ---------------------------------------------------------------- memory
    def _memory_entries(self) -> list[dict[str, Any]]:
        try:
            if not MEMORY_FILE.exists():
                return []
            data = json.loads(MEMORY_FILE.read_text(encoding="utf-8")) or {}
            entries: list[dict[str, Any]] = []
            for category, values in data.items():
                if not isinstance(values, dict):
                    continue
                for key, item in values.items():
                    if not isinstance(item, dict):
                        continue
                    entries.append({
                        "category": category,
                        "key": key,
                        "value": str(item.get("value", ""))[:1000],
                        "updated": str(item.get("updated", date.today().isoformat())),
                        "source": "desktop",
                    })
            return entries
        except Exception:
            return []

    def sync_memory(self) -> int:
        """Upsert local long-term memory into the web brain."""
        if not self._token or not self._user_id:
            return 0
        entries = self._memory_entries()
        if not entries:
            return 0
        upserted = 0
        for entry in entries:
            body = {**entry, "user_id": self._user_id}
            ok = self._post(
                "/rest/v1/memories",
                body,
                headers={
                    "Prefer": "resolution=merge-duplicates,return=minimal",
                    "on_conflict": "user_id,category,key",
                },
            )
            if ok is not None:
                upserted += 1
        return upserted

    # ---------------------------------------------------------------- threads
    def _today_thread_id(self) -> str | None:
        title = f"{THREAD_TITLE_PREFIX}{date.today().isoformat()}"
        rows = self._get(
            "/rest/v1/threads",
            params={
                "select": "id",
                "user_id": f"eq.{self._user_id}",
                "title": f"eq.{title}",
                "order": "updated_at.desc",
                "limit": "1",
            },
        )
        if rows:
            return rows[0].get("id")
        created = self._post(
            "/rest/v1/threads",
            {"user_id": self._user_id, "title": title},
            headers={"Prefer": "return=representation"},
        )
        if isinstance(created, list) and created:
            return created[0].get("id")
        if isinstance(created, dict):
            return created.get("id")
        return None

    def push_turn(self, user_text: str, assistant_text: str) -> None:
        """Mirror a desktop conversation turn into the web chat thread."""
        if not self._token or not self._user_id:
            return
        if not (user_text or "").strip():
            return
        thread_id = self._today_thread_id()
        if not thread_id:
            return
        now = datetime.now(timezone.utc).isoformat()
        self._post("/rest/v1/messages", {
            "thread_id": thread_id,
            "user_id": self._user_id,
            "role": "user",
            "parts": [{"type": "text", "text": user_text.strip()}],
            "created_at": now,
        })
        if (assistant_text or "").strip():
            self._post("/rest/v1/messages", {
                "thread_id": thread_id,
                "user_id": self._user_id,
                "role": "assistant",
                "parts": [{"type": "text", "text": assistant_text.strip()}],
            })

    # ------------------------------------------------------------------ crew
    def ensure_crew_presence(self) -> None:
        """Register the desktop machine as a crew member in the web org chart."""
        if not self._token or not self._user_id:
            return
        rows = self._get(
            "/rest/v1/agents",
            params={"select": "id", "user_id": f"eq.{self._user_id}", "name": "eq.desktop-agent"},
        )
        if rows:
            return
        self._post("/rest/v1/agents", {
            "user_id": self._user_id,
            "name": "desktop-agent",
            "role": "desktop",
            "title": "Desktop Agent",
            "color": "#0EA5E9",
            "description": "The Jarvis desktop app on this PC — voice, automation, and local tools.",
            "status": "active",
        })

    # ------------------------------------------------------------------ feed
    def report_activity(self, title: str, detail: str | None = None) -> None:
        if not self._token or not self._user_id:
            return
        self._post("/rest/v1/agent_activity", {
            "user_id": self._user_id,
            "kind": "desktop",
            "title": title[:200],
            "detail": (detail or "")[:800],
        })

    # --------------------------------------------------------------- startup
    def startup(self) -> None:
        """Best-effort full sync run at app start (own thread)."""
        if not self.login():
            return
        try:
            self.read_settings()
        except Exception:
            pass
        try:
            self.sync_memory()
        except Exception:
            pass
        try:
            self.ensure_crew_presence()
        except Exception:
            pass
        try:
            self.report_activity("Desktop online", "Jarvis desktop app started and connected.")
        except Exception:
            pass

    def sync_turn(self, user_text: str, assistant_text: str) -> None:
        if not self._token or not self._user_id:
            return
        try:
            if self.auto_learn_enabled:
                self.sync_memory()
        except Exception:
            pass
        try:
            self.push_turn(user_text, assistant_text)
        except Exception:
            pass


def make_cloud_sync() -> CloudSync | None:
    """Factory used by main.py; returns None when not configured."""
    config = load_cloud_config()
    if not config:
        return None
    return CloudSync(config)
