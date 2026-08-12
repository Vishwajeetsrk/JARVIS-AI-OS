import json
import os
import shutil
import subprocess
import sys
import tempfile
import threading
import urllib.request
import urllib.error
import zipfile
from pathlib import Path
from typing import Callable, Optional

GITHUB_REPO_URL = "https://github.com/titechprabhasolutions/JARVIS-AI---Lite"
GITHUB_API_URL = "https://api.github.com/repos/titechprabhasolutions/JARVIS-AI---Lite/commits/main"
GITHUB_ZIP_URL = "https://github.com/titechprabhasolutions/JARVIS-AI---Lite/archive/refs/heads/main.zip"


class AutoUpdater:
    def __init__(self, base_dir: Path, startup_log: Optional[Callable[[str], None]] = None):
        self.base_dir = Path(base_dir)
        self.startup_log = startup_log or (lambda message: None)
        self.state_file = self.base_dir / ".updater_state.json"

    def _log(self, message: str) -> None:
        self.startup_log(message)
        print(f"[UPDATER] {message}")

    def _read_state(self) -> dict:
        try:
            if self.state_file.exists():
                return json.loads(self.state_file.read_text(encoding="utf-8"))
        except Exception:
            pass
        return {}

    def _write_state(self, commit_sha: str) -> None:
        try:
            self.state_file.write_text(
                json.dumps({"commit_sha": commit_sha}, indent=2),
                encoding="utf-8",
            )
        except Exception:
            pass

    def _get_local_commit(self) -> Optional[str]:
        try:
            git_dir = self.base_dir / ".git"
            if git_dir.exists():
                result = subprocess.run(
                    ["git", "rev-parse", "HEAD"],
                    cwd=self.base_dir,
                    capture_output=True,
                    text=True,
                    check=False,
                )
                if result.returncode == 0 and result.stdout.strip():
                    return result.stdout.strip()
        except Exception:
            pass

        state = self._read_state()
        return state.get("commit_sha")

    def _get_latest_commit(self) -> Optional[str]:
        req = urllib.request.Request(
            GITHUB_API_URL,
            headers={
                "Accept": "application/vnd.github+json",
                "User-Agent": "JARVISAI-Updater",
            },
        )
        with urllib.request.urlopen(req, timeout=15) as response:
            payload = json.loads(response.read().decode("utf-8"))
            return payload.get("sha")

    def should_update(self) -> bool:
        if os.environ.get("JARVIS_SKIP_UPDATE", "").lower() in {"1", "true", "yes"}:
            self._log("update check skipped by environment")
            return False

        try:
            latest_sha = self._get_latest_commit()
            local_sha = self._get_local_commit()
            if not latest_sha:
                return False
            if not local_sha:
                self._write_state(latest_sha)
                return False
            return local_sha != latest_sha
        except Exception as exc:
            self._log(f"update check failed: {exc}")
            return False

    def apply_update(self) -> bool:
        if not self.should_update():
            return False

        self._log(f"updating from {GITHUB_REPO_URL}")
        try:
            with tempfile.TemporaryDirectory(prefix="JARVIS-update-", dir=str(self.base_dir)) as temp_dir:
                archive_path = Path(temp_dir) / "repo.zip"
                self._log("downloading latest source snapshot")
                urllib.request.urlretrieve(GITHUB_ZIP_URL, archive_path)

                with zipfile.ZipFile(archive_path, "r") as archive:
                    archive.extractall(temp_dir)

                extracted_root = Path(temp_dir)
                repo_dir = None
                for candidate in extracted_root.iterdir():
                    if candidate.is_dir() and candidate.name.startswith("JARVIS-AI---Lite"):
                        repo_dir = candidate
                        break

                if repo_dir is None:
                    raise RuntimeError("downloaded archive did not contain a repository folder")

                preserve_dirs = {"config", "downloads", "memory", ".git", "build", "dist", "__pycache__"}
                for path in repo_dir.rglob("*"):
                    if path.is_dir():
                        continue
                    rel_path = path.relative_to(repo_dir)
                    parts = rel_path.parts
                    if not parts:
                        continue
                    if parts[0] in preserve_dirs:
                        continue
                    destination = self.base_dir / rel_path
                    destination.parent.mkdir(parents=True, exist_ok=True)
                    shutil.copy2(path, destination)

                latest_sha = self._get_latest_commit()
                if latest_sha:
                    self._write_state(latest_sha)
                self._log("update downloaded and applied")
                return True
        except Exception as exc:
            self._log(f"update failed: {exc}")
            return False

    def run_in_background(self, restart_after_update: bool = True) -> threading.Thread:
        def worker() -> None:
            try:
                if self.apply_update():
                    self._log("restart scheduled")
                    if restart_after_update:
                        restart_cmd = [sys.executable, str(self.base_dir / "main.py")]
                        subprocess.Popen(restart_cmd, cwd=str(self.base_dir), close_fds=True)
                        os._exit(0)
            except Exception as exc:
                self._log(f"background update thread failed: {exc}")

        thread = threading.Thread(target=worker, daemon=True)
        thread.start()
        return thread
