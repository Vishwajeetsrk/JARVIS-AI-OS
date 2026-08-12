from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from typing import Any

from actions.dev_agent import dev_agent
from actions.website_builder import website_builder


BASE_DIR = Path(__file__).resolve().parent.parent
SETTINGS_PATH = BASE_DIR / "config" / "app_settings.json"


def _load_settings() -> dict[str, Any]:
    try:
        if SETTINGS_PATH.exists():
            data = json.loads(SETTINGS_PATH.read_text(encoding="utf-8"))
            if isinstance(data, dict):
                return data
    except Exception:
        pass
    return {}


def _selected_workspace(parameters: dict[str, Any]) -> str:
    settings = _load_settings()
    configured = str(settings.get("developer_mode_workspace", "") or "").strip()
    if configured:
        return configured
    return str(
        parameters.get("workspace_path")
        or parameters.get("project_dir")
        or parameters.get("output_dir")
        or ""
    ).strip()


def _looks_like_website_request(text: str) -> bool:
    low = (text or "").lower()
    tokens = (
        "website",
        "landing page",
        "homepage",
        "home page",
        "web page",
        "portfolio",
        "product site",
        "business site",
        "marketing site",
        "site",
        "web app",
        "frontend",
        "ui",
    )
    return any(token in low for token in tokens)


def _looks_like_calculator_request(text: str) -> bool:
    low = (text or "").lower()
    return any(token in low for token in (
        "calculator",
        "calc",
        "simple calculator",
        "math calculator",
        "html calculator",
    ))


def run_developer_mode_request(parameters: dict[str, Any], speak=None) -> str:
    params = dict(parameters or {})
    description = str(params.get("description") or "").strip()
    workspace = _selected_workspace(params)

    if not workspace:
        return "Developer mode needs a selected workspace folder first."

    params["workspace_path"] = workspace
    params["output_dir"] = workspace

    if _looks_like_website_request(description) or _looks_like_calculator_request(description):
        if _looks_like_calculator_request(description):
            params.setdefault("site_name", params.get("title") or "Calculator")
            params.setdefault("brief", description)
            params["project_type"] = "calculator"
        else:
            params.setdefault("site_name", params.get("title") or "Website")
            params.setdefault("brief", description)
        return website_builder(params, player=None)

    params.setdefault("language", params.get("language") or "python")
    params.setdefault("project_name", params.get("project_name") or "JARVIS_project")
    return dev_agent(params, player=None, speak=speak)
