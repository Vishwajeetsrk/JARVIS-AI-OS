from __future__ import annotations

import json
import os
import re
import shutil
import socket
import subprocess
import sys
import time
import threading
import urllib.request
import webbrowser
from pathlib import Path
from typing import Any


BASE_DIR = Path(__file__).resolve().parent.parent
SETTINGS_PATH = BASE_DIR / "config" / "app_settings.json"
API_CONFIG_PATH = BASE_DIR / "config" / "api_keys.json"

DEFAULT_THEME = {
    "bg": "#071018",
    "bg_alt": "#0c1520",
    "surface": "#111b28",
    "surface_alt": "#162233",
    "text": "#f6f8fc",
    "muted": "#9ca9b8",
    "accent": "#62d0ff",
    "accent_2": "#8b5cf6",
    "accent_3": "#22c55e",
    "border": "rgba(255,255,255,0.08)",
}

PAGE_TYPES = ("marketing", "app", "portfolio", "saas", "content")
LAYOUT_MODES = ("split", "editorial", "command_center", "gallery", "minimal", "article")


def _load_json(path: Path, fallback: dict[str, Any] | None = None) -> dict[str, Any]:
    try:
        if path.exists():
            data = json.loads(path.read_text(encoding="utf-8"))
            if isinstance(data, dict):
                return data
    except Exception:
        pass
    return dict(fallback or {})


def _get_api_key() -> str:
    data = _load_json(API_CONFIG_PATH)
    return str(data.get("gemini_api_key", "")).strip()


def _safe_slug(text: str, default: str = "website") -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", (text or "").lower()).strip("-")
    return slug or default


def _sanitize_text(text: str, default: str = "") -> str:
    cleaned = re.sub(r"\s+", " ", (text or "").strip())
    return cleaned or default


def _html(text: Any) -> str:
    return (
        str(text or "")
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def _extract_text(response) -> str:
    text = getattr(response, "text", "") or ""
    if text.strip():
        return text.strip()
    try:
        parts: list[str] = []
        for candidate in getattr(response, "candidates", []) or []:
            content = getattr(candidate, "content", None)
            if not content:
                continue
            for part in getattr(content, "parts", []) or []:
                part_text = getattr(part, "text", None)
                if part_text:
                    parts.append(part_text)
        return "".join(parts).strip()
    except Exception:
        return ""


def _parse_json_blob(text: str) -> dict[str, Any]:
    raw = (text or "").strip()
    raw = re.sub(r"^```(?:json)?", "", raw).strip()
    raw = re.sub(r"```$", "", raw).strip()
    try:
        return json.loads(raw)
    except Exception:
        match = re.search(r"\{.*\}", raw, re.DOTALL)
        if match:
            return json.loads(match.group(0))
        raise


def _load_settings() -> dict[str, Any]:
    return _load_json(SETTINGS_PATH)


def _selected_workspace(parameters: dict[str, Any]) -> Path | None:
    settings = _load_settings()
    configured = str(settings.get("developer_mode_workspace", "") or "").strip()
    requested = str(
        parameters.get("workspace_path")
        or parameters.get("output_dir")
        or parameters.get("project_dir")
        or ""
    ).strip()
    raw = configured or requested
    if not raw:
        return None
    path = Path(raw).expanduser()
    if path.is_file():
        path = path.parent
    path.mkdir(parents=True, exist_ok=True)
    return path


def _resolve_project_dir(parameters: dict[str, Any]) -> Path:
    workspace = _selected_workspace(parameters)
    if workspace is None:
        raise ValueError("Developer mode needs a selected workspace folder first.")

    site_name = _sanitize_text(
        str(parameters.get("site_name") or parameters.get("title") or "Website"),
        "Website",
    )
    project_dir = workspace / _safe_slug(site_name)
    project_dir.mkdir(parents=True, exist_ok=True)
    return project_dir


def _is_app_like(text: str) -> bool:
    low = (text or "").lower()
    return any(token in low for token in (
        "app", "dashboard", "studio", "workspace", "portal", "admin",
        "control panel", "saas", "platform", "tool", "builder", "system",
    ))


def _is_calculator_request(text: str) -> bool:
    low = (text or "").lower()
    return any(token in low for token in (
        "calculator",
        "calc",
        "simple calculator",
        "math calculator",
        "html calculator",
    ))


def _is_content_request(text: str) -> bool:
    low = (text or "").lower()
    return any(token in low for token in (
        "article",
        "blog",
        "news",
        "essay",
        "guide",
        "write about",
        "explainer",
        "editorial",
        "magazine",
        "feature",
        "culture",
        "heritage",
        "history",
        "travel",
        "informational",
        "long-form",
    ))


def _choose_layout_mode(text: str) -> str:
    low = (text or "").lower()
    if any(token in low for token in ("calculator", "calc")):
        return "minimal"
    if _is_content_request(low):
        return "article"
    if any(token in low for token in ("portfolio", "gallery", "photography", "showcase", "case study")):
        return "gallery"
    if any(token in low for token in ("dashboard", "studio", "workspace", "control panel", "admin", "saas", "platform")):
        return "command_center"
    if any(token in low for token in ("luxury", "editorial", "brand", "agency", "premium", "high-end")):
        return "editorial"
    if any(token in low for token in ("store", "shop", "product", "service", "landing", "marketing", "business")):
        return "split"
    return "split"


def _build_section_plan(site_name: str, brief: str, project_type: str, layout_mode: str) -> list[dict[str, Any]]:
    project_text = f"{site_name} {brief}".lower()

    if project_type == "calculator" or layout_mode == "minimal":
        return [
            {"type": "calculator", "title": "Calculator", "subtitle": "Simple, fast, and easy to edit."},
            {"type": "feature_grid", "title": "What it includes", "items": [
                {"title": "Basic operations", "description": "Add, subtract, multiply, and divide."},
                {"title": "Keyboard support", "description": "Use your keyboard as well as the buttons."},
                {"title": "Clean source", "description": "Plain HTML, CSS, and JavaScript files."},
            ]},
        ]

    if layout_mode == "article" or project_type == "content":
        return [
            {"type": "marquee", "title": "Reading lanes", "items": [
                {"label": "History"},
                {"label": "Culture"},
                {"label": "Cuisine"},
                {"label": "Languages"},
                {"label": "Festivals"},
                {"label": "Modern life"},
            ]},
            {"type": "article_cards", "title": "Core chapters", "subtitle": "A guided article layout that reads like a feature story.", "items": [
                {"title": "A living civilization", "description": "Open with the long view: continuity, scale, and the way old traditions still shape everyday life."},
                {"title": "Many regions, one country", "description": "Show how landscapes, languages, and local customs change from state to state while staying connected."},
                {"title": "Food as memory", "description": "Use cuisine as a way to explain trade, migration, seasonality, and shared family rituals."},
                {"title": "Festivals and public rhythm", "description": "Highlight how celebrations, markets, and religious events structure the year."},
                {"title": "Art, craft, and architecture", "description": "Feature textiles, carving, music, dance, monuments, and the makers behind them."},
                {"title": "Modern India", "description": "Close with cities, youth culture, technology, and how heritage keeps evolving rather than standing still."},
            ]},
            {"type": "stats", "title": "Quick facts", "items": [
                {"value": "28+", "label": "states and union territories"},
                {"value": "22", "label": "official languages"},
                {"value": "365", "label": "days of culture in motion"},
            ]},
            {"type": "timeline", "title": "Reading flow", "items": [
                {"title": "Start broad", "description": "Introduce geography, scale, and identity."},
                {"title": "Move through chapters", "description": "Culture, food, faith, language, and art."},
                {"title": "End with the present", "description": "Show how the story continues today."},
            ]},
            {"type": "cta", "title": "Keep exploring", "subtitle": "Invite readers to continue or jump into the source files.", "cta": {"label": "Read More", "href": "#chapters"}},
        ]

    if layout_mode == "gallery":
        return [
            {"type": "showcase", "title": "Selected work", "items": [
                {"title": "Hero visual system", "description": "Large imagery and bold type."},
                {"title": "Feature gallery", "description": "Cards that present the product clearly."},
                {"title": "Conversion panel", "description": "A clean CTA area to drive action."},
            ]},
            {"type": "feature_grid", "title": "Why it works", "items": [
                {"title": "Visual rhythm", "description": "The page alternates scale and spacing."},
                {"title": "Clear narrative", "description": "Every section pushes the story forward."},
                {"title": "Fast editing", "description": "Everything stays in plain HTML/CSS/JS."},
            ]},
            {"type": "testimonials", "title": "Proof", "items": [
                {"quote": "Beautiful, focused, and ready to publish.", "name": "Creative Lead", "role": "Portfolio Review"},
                {"quote": "Feels premium without being noisy.", "name": "Client", "role": "Feedback"},
            ]},
            {"type": "contact", "title": "Contact", "subtitle": "Invite visitors to get in touch or book a call.", "cta": {"label": "Book a Call", "href": "#top"}},
        ]

    if layout_mode == "command_center" or project_type == "app":
        return [
            {"type": "workspace", "title": "Workspace", "subtitle": "A dashboard-style layout with live panels.", "panels": [
                {"label": "Projects", "value": "12 active"},
                {"label": "Tasks", "value": "4 running"},
                {"label": "Build status", "value": "Ready"},
                {"label": "Preview", "value": "Local host"},
            ], "activity": [
                "Scaffold created in the selected workspace.",
                "Code opened in VS Code.",
                "Preview launched in Chrome.",
            ]},
            {"type": "feature_grid", "title": "Core capabilities", "items": [
                {"title": "Command center feel", "description": "Great for studios, tools, and SaaS apps."},
                {"title": "Compact dashboards", "description": "Built around metrics and active panels."},
                {"title": "Reusable components", "description": "A cleaner codebase for future pages."},
            ]},
            {"type": "pricing", "title": "Plans", "items": [
                {"title": "Starter", "description": "Lightweight and easy to launch."},
                {"title": "Pro", "description": "Full product presentation."},
                {"title": "Studio", "description": "Workspace-grade experience."},
            ]},
            {"type": "faq", "title": "FAQ", "items": [
                {"question": "Can I edit the code?", "answer": "Yes, every file is plain source code."},
                {"question": "Can it grow into a full app?", "answer": "Yes, the layout is ready for more pages and views."},
            ]},
        ]

    if layout_mode == "editorial":
        return [
            {"type": "marquee", "title": "Highlights", "items": [
                {"label": "Premium layout"},
                {"label": "Strong typography"},
                {"label": "Focused CTA"},
                {"label": "Fast preview"},
            ]},
            {"type": "stats", "title": "Signals", "items": [
                {"value": "01", "label": "Clear narrative"},
                {"value": "02", "label": "Responsive composition"},
                {"value": "03", "label": "Ready to ship"},
            ]},
            {"type": "feature_grid", "title": "Capabilities", "items": [
                {"title": "Editorial tone", "description": "Feels intentional and premium."},
                {"title": "Flexible structure", "description": "The site can lean visual or informational."},
                {"title": "Plain source files", "description": "Easy to inspect and maintain."},
            ]},
            {"type": "timeline", "title": "Build flow", "items": [
                {"title": "Brief", "description": "Translate the idea into structure."},
                {"title": "Compose", "description": "Choose the right layout and sections."},
                {"title": "Refine", "description": "Polish the details and launch locally."},
            ]},
            {"type": "cta", "title": "Ready to launch", "subtitle": "A clean and focused site that stays to the point.", "cta": {"label": "Open Preview", "href": "#top"}},
        ]

    return [
        {"type": "stats", "title": "Quick signals", "items": [
            {"value": "01", "label": "Launch-ready layout"},
            {"value": "02", "label": "Responsive sections"},
            {"value": "03", "label": "Clean source files"},
        ]},
        {"type": "feature_grid", "title": "Focused features", "items": [
            {"title": "Strong hierarchy", "description": "Guides the visitor without visual clutter."},
            {"title": "Fast review cycle", "description": "Easy to open in VS Code and edit immediately."},
            {"title": "Local preview", "description": "Built to run directly on your machine."},
        ]},
        {"type": "showcase", "title": "Showcase", "items": [
            {"title": "Original composition", "description": "Sections are assembled from the brief."},
            {"title": "Clean source", "description": "Plain files and reusable components."},
            {"title": "Fast iteration", "description": "Open, edit, refresh, repeat."},
        ]},
        {"type": "timeline", "title": "Workflow", "items": [
            {"title": "Brief", "description": "Capture the idea and the goal."},
            {"title": "Build", "description": "Write the HTML, CSS, and JavaScript."},
            {"title": "Preview", "description": "Open the result in VS Code and Chrome."},
        ]},
        {"type": "faq", "title": "Questions", "items": [
            {"question": "Can I edit the files?", "answer": "Yes. They are plain HTML, CSS, and JavaScript."},
            {"question": "Where is the output?", "answer": "Inside the selected developer workspace folder."},
        ]},
    ]


def _gemini_client():
    from google import genai

    api_key = _get_api_key()
    if not api_key:
        raise RuntimeError("gemini_api_key is missing in config/api_keys.json")
    return genai.Client(api_key=api_key)


def _normalize_theme(theme: dict[str, Any] | None, accent: str | None = None) -> dict[str, str]:
    merged = dict(DEFAULT_THEME)
    if isinstance(theme, dict):
        for key, value in theme.items():
            if value is not None:
                merged[key] = str(value)
    if accent:
        merged["accent"] = accent if accent.startswith("#") else merged["accent"]
    return merged


def _fallback_spec(parameters: dict[str, Any]) -> dict[str, Any]:
    brief = _sanitize_text(
        str(parameters.get("brief") or parameters.get("description") or ""),
        "A polished modern website.",
    )
    site_name = _sanitize_text(
        str(parameters.get("site_name") or parameters.get("title") or "JARVIS Project"),
        "JARVIS Project",
    )
    calc_request = _is_calculator_request(f"{site_name} {brief}")
    layout_mode = _choose_layout_mode(f"{site_name} {brief}")
    project_type = "calculator" if calc_request else (
        "content" if _is_content_request(f"{site_name} {brief}") else ("app" if _is_app_like(f"{site_name} {brief}") else "marketing")
    )
    theme = _normalize_theme(
        {
            "accent": "#62d0ff",
            "accent_2": "#8b5cf6",
            "accent_3": "#22c55e",
        }
    )

    pages = [
        {
            "slug": "index",
            "title": site_name,
            "layout_mode": layout_mode,
            "hero": {
                "eyebrow": "Built with JARVIS",
                "title": site_name,
                "subtitle": "A fresh build composed from your brief.",
                "primary_cta": "Open Preview",
                "secondary_cta": "View Sections",
            },
            "sections": _build_section_plan(site_name, brief, project_type, layout_mode),
        }
    ]

    if project_type == "app":
        pages[0]["hero"] = {
            "eyebrow": "Built with JARVIS",
            "title": site_name,
            "subtitle": "A dashboard-like experience with live workspace panels.",
            "primary_cta": "Open Workspace",
            "secondary_cta": "Explore Features",
        }
    elif project_type == "content" or layout_mode == "article":
        pages[0]["hero"] = {
            "eyebrow": "Feature article",
            "title": site_name,
            "subtitle": "A readable long-form layout with chapters, facts, and side notes.",
            "primary_cta": "Jump to Chapters",
            "secondary_cta": "Read the Facts",
        }

    return {
        "project_name": _safe_slug(site_name),
        "site_name": site_name,
        "tagline": brief,
        "project_type": project_type,
        "layout_mode": layout_mode,
        "theme": theme,
        "pages": pages,
        "notes": [
            "Generated as plain HTML, CSS, and JavaScript.",
            "All files are inside the selected workspace.",
        ],
    }


def _generate_spec(parameters: dict[str, Any]) -> dict[str, Any]:
    brief = _sanitize_text(
        str(parameters.get("brief") or parameters.get("description") or parameters.get("prompt") or ""),
        "",
    )
    site_name = _sanitize_text(
        str(parameters.get("site_name") or parameters.get("title") or "JARVIS Project"),
        "JARVIS Project",
    )
    if not brief:
        return _fallback_spec(parameters)

    if _is_calculator_request(f"{site_name} {brief}"):
        return _fallback_spec(
            {
                **parameters,
                "site_name": site_name or "Calculator",
                "title": site_name or "Calculator",
                "description": brief,
            }
        )

    prompt = f"""
Create a structured JSON spec for a website project generator.

Rules:
- Return only valid JSON.
- Keep the project practical and premium.
- Stay concise. No markdown, no commentary.
- Prefer a single focused experience, but include multiple pages if useful.
- Choose a distinct layout mode that fits the brief. Do not reuse the same section order every time.
- Pick one layout mode from: split, editorial, command_center, gallery, minimal, article.
- The site should feel composed from the brief, not copied from a starter template.
- If the brief sounds like an app or dashboard, use an app-like layout.

Schema:
{{
  "project_name": "snake_case",
  "site_name": "string",
  "tagline": "string",
  "project_type": "marketing|app|portfolio|saas|content",
  "layout_mode": "split|editorial|command_center|gallery|minimal|article",
  "theme": {{
    "bg": "#RRGGBB",
    "bg_alt": "#RRGGBB",
    "surface": "#RRGGBB",
    "surface_alt": "#RRGGBB",
    "text": "#RRGGBB",
    "muted": "#RRGGBB",
    "accent": "#RRGGBB",
    "accent_2": "#RRGGBB",
    "accent_3": "#RRGGBB",
    "border": "rgba(...)"
  }},
  "pages": [
    {{
      "slug": "index",
      "title": "string",
      "hero": {{
        "eyebrow": "string",
        "title": "string",
        "subtitle": "string",
        "primary_cta": "string",
        "secondary_cta": "string"
      }},
      "sections": [
        {{
          "type": "stats|feature_grid|timeline|testimonials|faq|pricing|cta|workspace|showcase|contact",
          "title": "string",
          "subtitle": "string",
          "items": [{{}}],
          "panels": [{{}}],
          "activity": ["string"]
        }}
      ]
    }}
  ],
  "notes": ["string"]
}}

Project name: {site_name}
Brief: {brief}
"""

    result: dict[str, Any] = {}
    error: list[BaseException] = []

    def _worker() -> None:
        try:
            client = _gemini_client()
            response = client.models.generate_content(
                model="gemini-2.5-flash",
                contents=prompt,
                config={"temperature": 0.7},
            )
            spec = _parse_json_blob(_extract_text(response))
            if isinstance(spec, dict):
                result["spec"] = spec
            else:
                error.append(RuntimeError("AI returned an invalid spec"))
        except BaseException as exc:
            error.append(exc)

    thread = threading.Thread(target=_worker, daemon=True)
    thread.start()
    thread.join(timeout=12)

    if thread.is_alive() or "spec" not in result:
        return _fallback_spec(parameters)

    spec = result["spec"]
    try:
        if not isinstance(spec, dict):
            return _fallback_spec(parameters)
        spec.setdefault("project_name", _safe_slug(site_name))
        spec.setdefault("site_name", site_name)
        spec.setdefault("tagline", brief)
        spec["project_type"] = spec.get("project_type") if spec.get("project_type") in PAGE_TYPES else (
            "content" if _is_content_request(f"{site_name} {brief}") else ("app" if _is_app_like(f"{site_name} {brief}") else "marketing")
        )
        spec.setdefault("layout_mode", _choose_layout_mode(f"{site_name} {brief}"))
        if spec["layout_mode"] not in LAYOUT_MODES:
            spec["layout_mode"] = _choose_layout_mode(f"{site_name} {brief}")
        if _is_content_request(f"{site_name} {brief}"):
            spec["layout_mode"] = "article"
        spec["theme"] = _normalize_theme(spec.get("theme") if isinstance(spec.get("theme"), dict) else None)
        pages = spec.get("pages")
        if not isinstance(pages, list) or not pages:
            return _fallback_spec(parameters)
        normalized_pages = []
        for idx, page in enumerate(pages):
            if not isinstance(page, dict):
                continue
            normalized_pages.append(_normalize_page(page, site_name, brief, idx))
        if not normalized_pages:
            return _fallback_spec(parameters)
        for page in normalized_pages:
            page.setdefault("layout_mode", spec.get("layout_mode", _choose_layout_mode(f"{site_name} {brief}")))
            if _is_content_request(f"{site_name} {brief}"):
                page["layout_mode"] = "article"
        spec["pages"] = normalized_pages
        notes = spec.get("notes")
        spec["notes"] = notes if isinstance(notes, list) else []
        return spec
    except Exception:
        return _fallback_spec(parameters)


def _stringify_bundle_content(value: Any) -> str:
    if isinstance(value, str):
        return value
    if isinstance(value, (dict, list)):
        return json.dumps(value, indent=2, ensure_ascii=False)
    if value is None:
        return ""
    return str(value)


def _infer_site_title(text: str, fallback: str = "Website") -> str:
    low = (text or "").lower()
    if "calculator" in low or "calc" in low:
        return "Calculator"
    if "grocery" in low or "groccer" in low or "groceries" in low:
        return "Groceries List Maker"
    if "todo" in low or "to-do" in low or "task" in low:
        return "Task Manager"
    if "article" in low or "blog" in low:
        cleaned = re.sub(r"^(create|make|build|design|generate)\s+(me\s+)?(a\s+)?", "", text, flags=re.I)
        cleaned = re.sub(r"\b(website|site|webpage|page)\b", "", cleaned, flags=re.I)
        cleaned = re.sub(r"\s+", " ", cleaned).strip(" :-")
        return _sanitize_text(cleaned.title(), fallback)
    cleaned = re.sub(
        r"^(create|make|build|design|generate)\s+(me\s+)?(a\s+|an\s+)?(simple\s+|new\s+|modern\s+|professional\s+|good\s+)?",
        "",
        text,
        flags=re.I,
    )
    cleaned = re.sub(r"\b(website|site|web app|webapp|webpage)\b", "", cleaned, flags=re.I)
    cleaned = re.sub(r"\b(for|about|on|with|using|to)\b", " ", cleaned, flags=re.I)
    cleaned = re.sub(r"\s+", " ", cleaned).strip(" :-")
    if len(cleaned) > 60:
        cleaned = " ".join(cleaned.split()[:8])
    if cleaned:
        return _sanitize_text(cleaned.title(), fallback)
    return fallback


def _detect_site_kind(text: str) -> str:
    low = (text or "").lower()
    if any(token in low for token in ("calculator", "calc")):
        return "calculator"
    if any(token in low for token in ("grocery", "groccer", "groceries", "shopping list", "shopping cart")):
        return "groceries"
    if any(token in low for token in ("article", "blog", "news", "editorial", "magazine", "essay", "culture", "history", "guide")):
        return "article"
    if any(token in low for token in ("todo", "to-do", "task", "planner", "tracker")):
        return "todo"
    if any(token in low for token in ("portfolio", "showcase", "case study", "photography")):
        return "portfolio"
    return "generic"


def _parse_code_bundle_text(text: str) -> dict[str, str]:
    files: dict[str, str] = {}
    pattern = re.compile(
        r"FILE:\s*(?P<name>[^\n]+)\s*\n```(?:[a-zA-Z0-9_-]+)?\n(?P<body>.*?)\n```",
        re.DOTALL | re.IGNORECASE,
    )
    for match in pattern.finditer(text or ""):
        name = _sanitize_text(match.group("name"), "").strip()
        body = match.group("body")
        if name:
            files[name] = body.strip("\n")
    return files


def _fallback_code_bundle(parameters: dict[str, Any]) -> dict[str, Any]:
    brief = _sanitize_text(
        str(parameters.get("brief") or parameters.get("description") or parameters.get("prompt") or ""),
        "A polished modern website.",
    )
    site_name = _sanitize_text(
        str(parameters.get("site_name") or parameters.get("title") or "Website"),
        "Website",
    )
    title = _infer_site_title(brief or site_name, site_name)
    kind = _detect_site_kind(f"{site_name} {brief}")
    project_name = _safe_slug(title)

    if kind in {"groceries", "todo"}:
        html = f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{_html(title)}</title>
  <meta name="description" content="A fast list builder with add, complete, and remove actions." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <main class="page">
    <section class="hero">
      <p class="eyebrow">Interactive list app</p>
      <h1>{_html(title)}</h1>
      <p class="lead">Add groceries, mark them done, remove items, and keep the list stored locally.</p>
      <div class="stats">
        <div><strong data-stat-total>0</strong><span>items</span></div>
        <div><strong data-stat-left>0</strong><span>remaining</span></div>
        <div><strong data-stat-done>0</strong><span>done</span></div>
      </div>
    </section>

    <section class="controls">
      <input id="itemInput" type="text" placeholder="Add milk, rice, fruit..." />
      <button id="addItemBtn">Add</button>
    </section>

    <section class="filters" aria-label="Filters">
      <button class="filter active" data-filter="all">All</button>
      <button class="filter" data-filter="active">Active</button>
      <button class="filter" data-filter="done">Done</button>
    </section>

    <section class="list-shell">
      <ul id="groceryList" class="grocery-list"></ul>
      <div class="empty-state" id="emptyState">No items yet. Add your first grocery.</div>
      <button id="clearDoneBtn" class="secondary">Clear completed</button>
    </section>
  </main>
  <script src="script.js"></script>
</body>
</html>
"""
        css = """
:root {
  color-scheme: dark;
  --bg: #071018;
  --surface: #101b29;
  --surface-2: #152131;
  --text: #f5f7fb;
  --muted: #9ca9b8;
  --accent: #5de1d8;
  --accent-2: #8b5cf6;
  --danger: #ff6b6b;
  --border: rgba(255,255,255,0.08);
}
* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, system-ui, sans-serif;
  background:
    radial-gradient(circle at top left, rgba(93,225,216,0.16), transparent 28%),
    linear-gradient(180deg, var(--bg), #0c1520);
  color: var(--text);
}
.page {
  width: min(920px, calc(100% - 32px));
  margin: 0 auto;
  padding: 44px 0 60px;
}
.hero, .controls, .filters, .list-shell, .item {
  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
  border: 1px solid var(--border);
  border-radius: 22px;
}
.hero { padding: 32px; }
.eyebrow {
  margin: 0 0 10px;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: .18em;
  font-size: .76rem;
}
h1 { margin: 0 0 10px; font-size: clamp(2.5rem, 6vw, 4.8rem); line-height: .95; }
.lead { color: var(--muted); max-width: 55ch; margin: 0; }
.stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 22px; }
.stats div { padding: 14px; background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 18px; }
.stats strong { display: block; font-size: 1.6rem; }
.stats span { color: var(--muted); font-size: .88rem; }
.controls {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  padding: 16px;
  margin-top: 18px;
}
.controls input {
  width: 100%;
  border: 1px solid var(--border);
  background: rgba(0,0,0,.2);
  color: var(--text);
  border-radius: 14px;
  padding: 0 16px;
  min-height: 50px;
  outline: none;
}
.controls button, .filters button, .secondary {
  min-height: 50px;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 0 16px;
  background: rgba(255,255,255,0.04);
  color: var(--text);
  cursor: pointer;
  font-weight: 600;
}
.controls button {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #031019;
  border: none;
}
.filters {
  display: flex;
  gap: 10px;
  padding: 12px;
  margin-top: 14px;
  flex-wrap: wrap;
}
.filters button.active { background: rgba(93,225,216,0.14); border-color: rgba(93,225,216,0.3); }
.list-shell { padding: 16px; margin-top: 14px; }
.grocery-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
.item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  padding: 14px 16px;
  align-items: center;
}
.item.done .label { text-decoration: line-through; color: var(--muted); }
.label { font-size: 1.02rem; }
.meta { color: var(--muted); font-size: .84rem; }
.icon-btn {
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.04);
  color: var(--text);
  width: 42px;
  height: 42px;
  border-radius: 12px;
  cursor: pointer;
}
.empty-state { color: var(--muted); padding: 18px 6px 8px; display: none; }
.empty-state.show { display: block; }
.secondary { margin-top: 14px; width: 100%; }
@media (max-width: 700px) {
  .stats, .controls { grid-template-columns: 1fr; }
  .item { grid-template-columns: auto 1fr; }
  .item .icon-btn:last-child { grid-column: 1 / -1; width: 100%; }
}
"""
        js = """
const STORAGE_KEY = 'JARVIS.groceries.items';
const input = document.getElementById('itemInput');
const addButton = document.getElementById('addItemBtn');
const list = document.getElementById('groceryList');
const empty = document.getElementById('emptyState');
const clearDone = document.getElementById('clearDoneBtn');
const statTotal = document.querySelector('[data-stat-total]');
const statLeft = document.querySelector('[data-stat-left]');
const statDone = document.querySelector('[data-stat-done]');
const filters = Array.from(document.querySelectorAll('[data-filter]'));

let items = loadItems();
let activeFilter = 'all';

function loadItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveItems() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function render() {
  const visible = items.filter((item) => activeFilter === 'all' || (activeFilter === 'active' ? !item.done : item.done));
  list.innerHTML = visible.map((item) => `
    <li class="item ${item.done ? 'done' : ''}" data-id="${item.id}">
      <input type="checkbox" ${item.done ? 'checked' : ''} aria-label="Mark ${escapeHtml(item.text)} complete" />
      <div>
        <div class="label">${escapeHtml(item.text)}</div>
        <div class="meta">${new Date(item.createdAt).toLocaleDateString()}</div>
      </div>
      <button class="icon-btn" data-action="delete" aria-label="Delete ${escapeHtml(item.text)}">×</button>
    </li>
  `).join('');
  const total = items.length;
  const done = items.filter((item) => item.done).length;
  statTotal.textContent = String(total);
  statDone.textContent = String(done);
  statLeft.textContent = String(total - done);
  empty.classList.toggle('show', items.length === 0);
  saveItems();
}

function addItem() {
  const text = input.value.trim();
  if (!text) return;
  items.unshift({
    id: String(Date.now()) + Math.random().toString(36).slice(2, 7),
    text,
    done: false,
    createdAt: new Date().toISOString(),
  });
  input.value = '';
  render();
}

addButton.addEventListener('click', addItem);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') addItem();
});

list.addEventListener('click', (event) => {
  const row = event.target.closest('.item');
  if (!row) return;
  const item = items.find((entry) => entry.id === row.dataset.id);
  if (!item) return;
  if (event.target.matches('input[type="checkbox"]')) {
    item.done = event.target.checked;
    render();
    return;
  }
  if (event.target.dataset.action === 'delete') {
    items = items.filter((entry) => entry.id !== item.id);
    render();
  }
});

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    activeFilter = button.dataset.filter || 'all';
    render();
  });
});

clearDone.addEventListener('click', () => {
  items = items.filter((item) => !item.done);
  render();
});

render();
"""
    elif kind == "calculator":
        html = f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{_html(title)}</title>
  <meta name="description" content="A clean calculator you can use instantly." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <main class="page calculator-page">
    <section class="hero">
      <p class="eyebrow">Interactive tool</p>
      <h1>{_html(title)}</h1>
      <p class="lead">A responsive calculator with keyboard support and clear button states.</p>
    </section>
    <section class="calculator-shell" data-calculator>
      <div class="calculator-display">
        <div class="calculator-history" data-calc-history>Ready</div>
        <div class="calculator-value" data-calc-display>0</div>
      </div>
      <div class="calculator-actions">
        <button type="button" class="calc-key calc-clear" data-calc-key="clear">AC</button>
        <button type="button" class="calc-key" data-calc-key="sign">+/-</button>
        <button type="button" class="calc-key" data-calc-key="percent">%</button>
        <button type="button" class="calc-key calc-op" data-calc-key="/">÷</button>
        <button type="button" class="calc-key" data-calc-key="7">7</button>
        <button type="button" class="calc-key" data-calc-key="8">8</button>
        <button type="button" class="calc-key" data-calc-key="9">9</button>
        <button type="button" class="calc-key calc-op" data-calc-key="*">×</button>
        <button type="button" class="calc-key" data-calc-key="4">4</button>
        <button type="button" class="calc-key" data-calc-key="5">5</button>
        <button type="button" class="calc-key" data-calc-key="6">6</button>
        <button type="button" class="calc-key calc-op" data-calc-key="-">−</button>
        <button type="button" class="calc-key" data-calc-key="1">1</button>
        <button type="button" class="calc-key" data-calc-key="2">2</button>
        <button type="button" class="calc-key" data-calc-key="3">3</button>
        <button type="button" class="calc-key calc-op" data-calc-key="+">+</button>
        <button type="button" class="calc-key calc-zero" data-calc-key="0">0</button>
        <button type="button" class="calc-key" data-calc-key=".">.</button>
        <button type="button" class="calc-key calc-equals" data-calc-key="equals">=</button>
      </div>
    </section>
  </main>
  <script src="script.js"></script>
</body>
</html>
"""
        css = """
:root {
  color-scheme: dark;
  --bg: #061018;
  --panel: #0d1722;
  --panel-2: #121d2b;
  --text: #f5f7fb;
  --muted: #9ca9b8;
  --accent: #62d0ff;
  --border: rgba(255,255,255,0.08);
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, system-ui, sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(98,208,255,0.14), transparent 28%),
    linear-gradient(180deg, var(--bg), #0b1420);
}
a { color: inherit; text-decoration: none; }
.page {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  padding: 48px 0 64px;
}
.hero, .card {
  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0,0,0,.28);
}
.hero {
  padding: 36px;
}
.eyebrow {
  color: var(--accent);
  letter-spacing: .18em;
  text-transform: uppercase;
  font-size: .75rem;
  margin: 0 0 12px;
}
h1 {
  margin: 0 0 14px;
  font-size: clamp(2.8rem, 8vw, 5.4rem);
  line-height: .94;
}
.lead, .card p {
  color: var(--muted);
}
.lead {
  max-width: 60ch;
  font-size: 1.08rem;
}
.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 24px;
}
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 18px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.03);
}
.primary {
  background: linear-gradient(135deg, var(--accent), #8b5cf6);
  color: #02111a;
  font-weight: 700;
}
.content-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 20px;
}
.card {
  padding: 22px;
}
.card h2 {
  margin-top: 0;
}
@media (max-width: 900px) {
  .content-grid { grid-template-columns: 1fr; }
}
"""
        js = """
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
"""
    elif kind == "article":
        html = f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{_html(title)}</title>
  <meta name="description" content="{_html(brief)}" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <main class="page article-page">
    <article class="article-hero">
      <p class="eyebrow">Feature article</p>
      <h1>{_html(title)}</h1>
      <p class="lead">{_html(brief)}</p>
    </article>
    <section class="article-grid">
      <section class="article-body">
        <h2>Introduction</h2>
        <p>Write the opening as a strong lead that explains the topic in plain language.</p>
        <h2>Key sections</h2>
        <p>Break the story into culture, history, food, and modern life so it reads like a real article.</p>
      </section>
      <aside class="article-sidebar">
        <div class="note-card"><strong>Quick fact</strong><span>Use real facts, statistics, or context relevant to the topic.</span></div>
        <div class="note-card"><strong>Related</strong><span>Add side notes, callouts, or references that guide the reader.</span></div>
      </aside>
    </section>
  </main>
</body>
</html>
"""
        css = """
body { margin: 0; font-family: Inter, system-ui, sans-serif; background: #08111a; color: #f5f7fb; }
.page { width: min(1100px, calc(100% - 32px)); margin: 0 auto; padding: 48px 0 64px; }
.article-hero, .article-body, .article-sidebar, .note-card { background: #101b29; border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; }
.article-hero { padding: 36px; margin-bottom: 20px; }
.eyebrow { color: #62d0ff; text-transform: uppercase; letter-spacing: .18em; font-size: .76rem; }
h1 { font-size: clamp(2.8rem, 7vw, 5rem); line-height: .95; margin: 0 0 12px; }
.lead { color: #a6b2c2; max-width: 60ch; }
.article-grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 18px; }
.article-body, .article-sidebar { padding: 24px; }
.note-card { padding: 18px; margin-bottom: 14px; }
@media (max-width: 900px) { .article-grid { grid-template-columns: 1fr; } }
"""
        js = """
console.log('Article site ready');
"""
    else:
        html = f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{_html(title)}</title>
  <meta name="description" content="{_html(brief)}" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <main class="page">
    <section class="hero">
      <p class="eyebrow">Generated site</p>
      <h1>{_html(title)}</h1>
      <p class="lead">{_html(brief)}</p>
    </section>
    <section class="content-grid">
      <article class="card"><h2>Fresh layout</h2><p>Built directly from the brief.</p></article>
      <article class="card"><h2>Editable code</h2><p>Plain HTML, CSS, and JavaScript files.</p></article>
      <article class="card"><h2>Local preview</h2><p>Served from the selected workspace.</p></article>
    </section>
  </main>
  <script src="script.js"></script>
</body>
</html>
"""
        css = """
body { margin: 0; font-family: Inter, system-ui, sans-serif; background: #08111a; color: #f5f7fb; }
.page { width: min(1100px, calc(100% - 32px)); margin: 0 auto; padding: 48px 0 64px; }
.hero, .card { background: #101b29; border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; }
.hero { padding: 36px; }
.eyebrow { color: #62d0ff; text-transform: uppercase; letter-spacing: .18em; font-size: .76rem; }
h1 { font-size: clamp(2.8rem, 7vw, 5rem); line-height: .95; margin: 0 0 12px; }
.lead { color: #a6b2c2; max-width: 60ch; }
.content-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin-top: 18px; }
.card { padding: 22px; }
@media (max-width: 900px) { .content-grid { grid-template-columns: 1fr; } }
"""
        js = """
console.log('Site ready');
"""
    return {
        "project_name": project_name,
        "site_name": title,
        "files": {
            "index.html": html,
            "styles.css": css,
            "script.js": js,
            "site-data.json": json.dumps(
                {
                    "project_name": project_name,
                    "site_name": title,
                    "tagline": brief,
                    "notes": ["Generated directly as source files."],
                },
                indent=2,
                ensure_ascii=False,
            ),
            "README.md": f"""# {title}

Generated directly from the brief.

## Open
- VS Code: open the project folder
- Preview: local server started automatically

## Files
- `index.html`
- `styles.css`
- `script.js`
- `site-data.json`
""",
        },
    }


def _generate_code_bundle(parameters: dict[str, Any]) -> dict[str, Any]:
    brief = _sanitize_text(
        str(parameters.get("brief") or parameters.get("description") or parameters.get("prompt") or ""),
        "",
    )
    site_name = _sanitize_text(
        str(parameters.get("site_name") or parameters.get("title") or "Website"),
        "Website",
    )
    title = _infer_site_title(brief or site_name, site_name)
    kind = _detect_site_kind(f"{site_name} {brief}")
    if not brief:
        return _fallback_code_bundle(parameters)

    prompt = f"""
You are a senior frontend engineer. Create a fresh website from scratch and return only file outputs.

Hard rules:
- Do not mention JARVIS, Codex, or any assistant branding in the site content.
- Do not use a starter template or placeholder filler.
- Make the site feel specific to the brief.
- Use semantic HTML, responsive CSS, and working JavaScript.
- If the brief is for a tool or app, include real interactive behavior.
- If the brief is for an article or editorial site, make it read like a magazine piece.
- If the brief is for a grocery or checklist app, include add/remove/complete behavior and localStorage.
- Write only the files below, nothing else.

Output format:
FILE: index.html
```html
...full html...
```
FILE: styles.css
```css
...full css...
```
FILE: script.js
```javascript
...full js...
```
FILE: site-data.json
```json
...json...
```
FILE: README.md
```md
...readme...
```

The code must be complete and ready to open.

Brief: {brief}
Site name: {title}
Kind: {kind}
"""

    result: dict[str, Any] = {}

    def _worker() -> None:
        try:
            client = _gemini_client()
            response = client.models.generate_content(
                model="gemini-2.5-flash",
                contents=prompt,
                config={"temperature": 0.7},
            )
            text = _extract_text(response)
            files = _parse_code_bundle_text(text)
            if files:
                result["bundle"] = {
                    "project_name": _safe_slug(title),
                    "site_name": title,
                    "files": files,
                }
                return
            payload = None
            try:
                payload = _parse_json_blob(text)
            except Exception:
                payload = None
            if isinstance(payload, dict):
                result["bundle"] = payload
        except Exception:
            return

    thread = threading.Thread(target=_worker, daemon=True)
    thread.start()
    thread.join(timeout=45)

    bundle = result.get("bundle")
    if thread.is_alive() or not isinstance(bundle, dict):
        return _fallback_code_bundle(parameters)

    files = bundle.get("files")
    if not isinstance(files, dict) or not files:
        return _fallback_code_bundle(parameters)

    normalized_files: dict[str, str] = {}
    for name, content in files.items():
        if not isinstance(name, str):
            continue
        normalized_files[name.strip()] = _stringify_bundle_content(content)

    if "index.html" not in normalized_files:
        return _fallback_code_bundle(parameters)

    project_name = _sanitize_text(str(bundle.get("project_name") or _safe_slug(site_name)), _safe_slug(site_name))
    site_title = _sanitize_text(str(bundle.get("site_name") or site_name), site_name)
    normalized_files.setdefault(
        "site-data.json",
        json.dumps(
            {
                "project_name": project_name,
                "site_name": site_title,
                "tagline": brief,
                "notes": ["Generated directly as source files."],
            },
            indent=2,
            ensure_ascii=False,
        ),
    )
    normalized_files.setdefault(
        "README.md",
        f"""# {site_title}

Generated directly from the brief.
""",
    )
    normalized_files.setdefault("styles.css", "")
    normalized_files.setdefault("script.js", "")

    return {
        "project_name": project_name,
        "site_name": site_title,
        "files": normalized_files,
    }


def _normalize_item_list(items: Any) -> list[dict[str, str]]:
    if not isinstance(items, list):
        return []
    normalized: list[dict[str, str]] = []
    for item in items:
        if isinstance(item, dict):
            normalized.append({
                "title": _sanitize_text(str(item.get("title") or item.get("name") or item.get("question") or "Item"), "Item"),
                "description": _sanitize_text(str(item.get("description") or item.get("answer") or item.get("subtitle") or ""), ""),
                "value": _sanitize_text(str(item.get("value") or ""), ""),
                "label": _sanitize_text(str(item.get("label") or ""), ""),
                "quote": _sanitize_text(str(item.get("quote") or ""), ""),
                "name": _sanitize_text(str(item.get("name") or ""), ""),
                "role": _sanitize_text(str(item.get("role") or ""), ""),
                "question": _sanitize_text(str(item.get("question") or ""), ""),
                "answer": _sanitize_text(str(item.get("answer") or ""), ""),
            })
        else:
            normalized.append({"title": _sanitize_text(str(item), "Item"), "description": ""})
    return normalized


def _normalize_page(page: dict[str, Any], site_name: str, brief: str, idx: int) -> dict[str, Any]:
    slug = _safe_slug(str(page.get("slug") or ("index" if idx == 0 else f"page-{idx + 1}")))
    title = _sanitize_text(str(page.get("title") or site_name), site_name)
    layout_mode = str(page.get("layout_mode") or _choose_layout_mode(f"{site_name} {brief}")).strip()
    hero = page.get("hero") if isinstance(page.get("hero"), dict) else {}
    normalized_sections = []
    for section in page.get("sections") if isinstance(page.get("sections"), list) else []:
        if isinstance(section, dict):
            normalized_sections.append({
                "type": _safe_slug(str(section.get("type") or "feature_grid"), "feature_grid").replace("-", "_"),
                "title": _sanitize_text(str(section.get("title") or ""), ""),
                "subtitle": _sanitize_text(str(section.get("subtitle") or ""), ""),
                "items": section.get("items") if isinstance(section.get("items"), list) else [],
                "panels": section.get("panels") if isinstance(section.get("panels"), list) else [],
                "activity": section.get("activity") if isinstance(section.get("activity"), list) else [],
                "cta": section.get("cta") if isinstance(section.get("cta"), dict) else {},
                "id": _safe_slug(str(section.get("id") or ""), "") if section.get("id") else "",
            })
    if not normalized_sections:
        normalized_sections = _fallback_spec({"site_name": site_name, "description": brief})["pages"][0]["sections"]
    hero_data = {
        "eyebrow": _sanitize_text(str(hero.get("eyebrow") or ("Built with JARVIS" if idx == 0 else "Project Page")), "Built with JARVIS"),
        "title": _sanitize_text(str(hero.get("title") or title), title),
        "subtitle": _sanitize_text(str(hero.get("subtitle") or brief), brief),
        "primary_cta": _sanitize_text(str(hero.get("primary_cta") or "Get Started"), "Get Started"),
        "secondary_cta": _sanitize_text(str(hero.get("secondary_cta") or "View Details"), "View Details"),
    }
    return {
        "slug": slug,
        "title": title,
        "layout_mode": layout_mode if layout_mode in LAYOUT_MODES else _choose_layout_mode(f"{site_name} {brief}"),
        "hero": hero_data,
        "sections": normalized_sections,
    }


def _render_nav(pages: list[dict[str, Any]], active_slug: str) -> str:
    links = []
    for page in pages:
        href = "index.html" if page["slug"] == "index" else f'{page["slug"]}.html'
        cls = "active" if page["slug"] == active_slug else ""
        links.append(f'<a class="{cls}" href="{_html(href)}">{_html(page["title"])}</a>')
    return "\n".join(links)


def _render_stats(section: dict[str, Any]) -> str:
    items = _normalize_item_list(section.get("items"))
    cards = items or [
        {"value": "01", "label": "Launch-ready layout"},
        {"value": "02", "label": "Responsive sections"},
        {"value": "03", "label": "Clean source files"},
    ]
    return "".join(
        f'<article class="stat-card"><strong>{_html(card.get("value") or f"0{idx + 1}")}</strong><span>{_html(card.get("label") or "Metric")}</span></article>'
        for idx, card in enumerate(cards)
    )


def _render_feature_grid(section: dict[str, Any]) -> str:
    items = _normalize_item_list(section.get("items"))
    if not items:
        items = [
            {"title": "Strong hierarchy", "description": "Clear content blocks that are easy to scan."},
            {"title": "Fast review cycle", "description": "Open in VS Code and adjust immediately."},
            {"title": "Local preview", "description": "Served on your machine for instant testing."},
        ]
    return "".join(
        f'<article class="feature-card"><div class="feature-index">{idx + 1:02d}</div><h3>{_html(item.get("title"))}</h3><p>{_html(item.get("description"))}</p></article>'
        for idx, item in enumerate(items)
    )


def _render_timeline(section: dict[str, Any]) -> str:
    items = _normalize_item_list(section.get("items"))
    if not items:
        items = [
            {"title": "Brief", "description": "Capture the idea and the goal."},
            {"title": "Build", "description": "Write the HTML, CSS, and JavaScript."},
            {"title": "Preview", "description": "Open the result in VS Code and Chrome."},
        ]
    return "".join(
        f'<article class="step-card"><span class="step-badge">{idx + 1:02d}</span><h3>{_html(item.get("title"))}</h3><p>{_html(item.get("description"))}</p></article>'
        for idx, item in enumerate(items)
    )


def _render_testimonials(section: dict[str, Any]) -> str:
    items = _normalize_item_list(section.get("items"))
    if not items:
        items = [
            {"quote": "It feels launch-ready.", "name": "Product Team", "role": "Review"},
        ]
    return "".join(
        f'<article class="testimonial-card"><p>"{_html(item.get("quote") or item.get("description") or "It feels launch-ready.")}"</p><div><strong>{_html(item.get("name") or "Team")}</strong><span>{_html(item.get("role") or "Review")}</span></div></article>'
        for item in items
    )


def _render_faq(section: dict[str, Any]) -> str:
    items = _normalize_item_list(section.get("items"))
    if not items:
        items = [
            {"question": "Can I edit the files?", "answer": "Yes. They are plain HTML, CSS, and JavaScript."},
            {"question": "Where is the output?", "answer": "Inside the selected developer workspace folder."},
        ]
    return "".join(
        f'<details class="faq-item"><summary>{_html(item.get("question") or item.get("title"))}</summary><p>{_html(item.get("answer") or item.get("description"))}</p></details>'
        for item in items
    )


def _render_pricing(section: dict[str, Any]) -> str:
    items = _normalize_item_list(section.get("items"))
    if not items:
        items = [
            {"title": "Starter", "description": "A compact launch-ready build."},
            {"title": "Pro", "description": "A polished multi-section experience."},
            {"title": "Studio", "description": "A workspace-grade product presentation."},
        ]
    return "".join(
        f'<article class="pricing-card"><h3>{_html(item.get("title"))}</h3><p>{_html(item.get("description"))}</p></article>'
        for item in items
    )


def _render_workspace(section: dict[str, Any]) -> str:
    panels = _normalize_item_list(section.get("panels"))
    if not panels:
        panels = [
            {"title": "Projects", "value": "12 active"},
            {"title": "Tasks", "value": "4 running"},
            {"title": "Build", "value": "Ready"},
            {"title": "Preview", "value": "Local host"},
        ]
    activity = [str(item) for item in section.get("activity") or []]
    activity_html = "".join(f"<li>{_html(entry)}</li>" for entry in activity) or "<li>Workspace created.</li><li>Code opened in VS Code.</li><li>Preview launched in Chrome.</li>"
    panel_html = "".join(
        f'<article class="workspace-metric"><span>{_html(item.get("title") or item.get("label"))}</span><strong>{_html(item.get("value") or item.get("description"))}</strong></article>'
        for item in panels
    )
    return f"""
      <div class="workspace-shell">
        <aside class="workspace-sidebar">
          <div class="sidebar-brand">JARVIS Workspace</div>
          <div class="sidebar-note">{_html(section.get("subtitle") or "Dashboard-style layout with live panels.")}</div>
        </aside>
        <div class="workspace-main">
          <div class="workspace-grid">{panel_html}</div>
          <div class="workspace-activity">
            <h3>Activity</h3>
            <ul>{activity_html}</ul>
          </div>
        </div>
      </div>
    """


def _render_callout(section: dict[str, Any]) -> str:
    title = section.get("title") or "Ready to ship"
    subtitle = section.get("subtitle") or "Everything stays inside the selected workspace."
    cta = section.get("cta") if isinstance(section.get("cta"), dict) else {}
    button = _sanitize_text(str(cta.get("label") or "Open Workspace"), "Open Workspace")
    href = _sanitize_text(str(cta.get("href") or "#top"), "#top")
    return f"""
      <div class="callout">
        <div>
          <h3>{_html(title)}</h3>
          <p>{_html(subtitle)}</p>
        </div>
        <a class="btn btn-primary" href="{_html(href)}">{_html(button)}</a>
      </div>
    """


def _render_showcase(section: dict[str, Any]) -> str:
    items = _normalize_item_list(section.get("items"))
    if not items:
        items = [
            {"title": "Source-first output", "description": "Files are written in a reusable structure."},
            {"title": "Fast preview", "description": "A local server makes review immediate."},
            {"title": "Direct editing", "description": "Open the project in VS Code right away."},
        ]
    cards = "".join(
        f'<article class="showcase-card"><h3>{_html(item.get("title"))}</h3><p>{_html(item.get("description"))}</p></article>'
        for item in items
    )
    return f'<div class="showcase-grid">{cards}</div>'


def _render_article_cards(section: dict[str, Any]) -> str:
    items = _normalize_item_list(section.get("items"))
    if not items:
        items = [
            {"title": "Opening context", "description": "Set up the topic with a clear, grounded introduction."},
            {"title": "Key chapter", "description": "Move through the article with one idea per section."},
        ]
    cards = "".join(
        f'<article class="article-card"><span class="article-kicker">{idx + 1:02d}</span><h3>{_html(item.get("title"))}</h3><p>{_html(item.get("description"))}</p></article>'
        for idx, item in enumerate(items)
    )
    return f'<div class="article-grid">{cards}</div>'


def _render_marquee(section: dict[str, Any]) -> str:
    items = _normalize_item_list(section.get("items"))
    if not items:
        items = [
            {"label": "Original layout"},
            {"label": "Fresh composition"},
            {"label": "Workspace-ready"},
            {"label": "Edit in VS Code"},
        ]
    content = "".join(f'<span>{_html(item.get("label") or item.get("title"))}</span>' for item in items)
    return f'<div class="marquee"><div class="marquee-track">{content}{content}</div></div>'


def _render_calculator(section: dict[str, Any]) -> str:
    return """
      <div class="calculator-shell" data-calculator>
        <div class="calculator-display">
          <div class="calculator-history" data-calc-history>Ready</div>
          <div class="calculator-value" data-calc-display>0</div>
        </div>
        <div class="calculator-actions">
          <button type="button" class="calc-key calc-clear" data-calc-key="clear">AC</button>
          <button type="button" class="calc-key" data-calc-key="sign">+/-</button>
          <button type="button" class="calc-key" data-calc-key="percent">%</button>
          <button type="button" class="calc-key calc-op" data-calc-key="/">Ã·</button>
          <button type="button" class="calc-key" data-calc-key="7">7</button>
          <button type="button" class="calc-key" data-calc-key="8">8</button>
          <button type="button" class="calc-key" data-calc-key="9">9</button>
          <button type="button" class="calc-key calc-op" data-calc-key="*">Ã—</button>
          <button type="button" class="calc-key" data-calc-key="4">4</button>
          <button type="button" class="calc-key" data-calc-key="5">5</button>
          <button type="button" class="calc-key" data-calc-key="6">6</button>
          <button type="button" class="calc-key calc-op" data-calc-key="-">âˆ’</button>
          <button type="button" class="calc-key" data-calc-key="1">1</button>
          <button type="button" class="calc-key" data-calc-key="2">2</button>
          <button type="button" class="calc-key" data-calc-key="3">3</button>
          <button type="button" class="calc-key calc-op" data-calc-key="+">+</button>
          <button type="button" class="calc-key calc-zero" data-calc-key="0">0</button>
          <button type="button" class="calc-key" data-calc-key=".">.</button>
          <button type="button" class="calc-key calc-equals" data-calc-key="equals">=</button>
        </div>
      </div>
    """


def _render_section(section: dict[str, Any]) -> str:
    section_type = str(section.get("type") or "feature_grid")
    title = section.get("title")
    subtitle = section.get("subtitle")
    body = ""
    if section_type == "stats":
        body = _render_stats(section)
    elif section_type in {"feature_grid", "features", "cards"}:
        body = _render_feature_grid(section)
    elif section_type in {"timeline", "process"}:
        body = _render_timeline(section)
    elif section_type == "testimonials":
        body = _render_testimonials(section)
    elif section_type == "faq":
        body = _render_faq(section)
    elif section_type == "pricing":
        body = _render_pricing(section)
    elif section_type == "workspace":
        body = _render_workspace(section)
    elif section_type == "showcase":
        body = _render_showcase(section)
    elif section_type == "article_cards":
        body = _render_article_cards(section)
    elif section_type == "marquee":
        body = _render_marquee(section)
    elif section_type == "calculator":
        body = _render_calculator(section)
    elif section_type == "cta":
        body = _render_callout(section)
    elif section_type == "contact":
        body = _render_callout(section)
    else:
        body = _render_feature_grid(section)

    title_html = f'<div class="section-head"><p>{_html(title)}</p><h2>{_html(subtitle or "")}</h2></div>' if title or subtitle else ""
    section_id = _sanitize_text(str(section.get("id") or ""), "") or _safe_slug(str(section_type), section_type)
    return f'<section class="section reveal" id="{_html(section_id)}">{title_html}{body}</section>'


def _render_page_html(spec: dict[str, Any], page: dict[str, Any], pages: list[dict[str, Any]]) -> str:
    nav_html = _render_nav(pages, page["slug"])
    sections_html = "".join(_render_section(section) for section in page.get("sections", []))
    hero = page.get("hero") or {}
    theme = spec.get("theme") or DEFAULT_THEME
    title = page.get("title") or spec.get("site_name") or "Website"
    tagline = spec.get("tagline") or ""
    project_type = str(spec.get("project_type") or "").lower()
    layout_mode = str(page.get("layout_mode") or spec.get("layout_mode") or _choose_layout_mode(f"{title} {tagline}")).strip()
    is_article = layout_mode == "article" or project_type == "content"
    primary_target = "#calculator" if project_type == "calculator" else ("#chapters" if is_article else "#features")
    secondary_target = "#highlights" if is_article else ("#proof" if project_type != "calculator" else "#calculator")
    hero_aside = ""

    if project_type == "calculator":
        hero_aside = """
      <aside class="hero-panel">
        <div class="panel-head">
          <span>Calculator</span>
          <span>Live</span>
        </div>
        <div class="panel-grid">
          <article class="stat-card"><strong>0</strong><span>Always ready</span></article>
          <article class="stat-card"><strong>+</strong><span>Keyboard support</span></article>
          <article class="stat-card"><strong>=</strong><span>Instant results</span></article>
        </div>
      </aside>
"""
    elif is_article:
        hero_aside = """
      <aside class="hero-panel hero-article-panel">
        <div class="panel-head">
          <span>Reading Guide</span>
          <span>Long form</span>
        </div>
        <div class="panel-grid article-panel-grid">
          <article class="stat-card"><strong>01</strong><span>History</span></article>
          <article class="stat-card"><strong>02</strong><span>Culture</span></article>
          <article class="stat-card"><strong>03</strong><span>Modern life</span></article>
        </div>
      </aside>
"""
    elif layout_mode == "command_center":
        hero_aside = """
      <aside class="hero-panel hero-command-panel">
        <div class="panel-head">
          <span>Status</span>
          <span>Online</span>
        </div>
        <div class="panel-grid">
          <article class="workspace-metric"><span>Build</span><strong>Ready</strong></article>
          <article class="workspace-metric"><span>Preview</span><strong>Running</strong></article>
          <article class="workspace-metric"><span>Mode</span><strong>Command Center</strong></article>
        </div>
      </aside>
"""
    elif layout_mode == "gallery":
        hero_aside = """
      <aside class="hero-panel hero-gallery-panel">
        <div class="showcase-grid">
          <article class="showcase-card"><h3>Hero</h3><p>Large visuals and bold type.</p></article>
          <article class="showcase-card"><h3>Work</h3><p>Curated highlights and studies.</p></article>
        </div>
      </aside>
"""
    else:
        hero_stats = _render_stats({
            "items": [
                {"value": "A1", "label": "Structured output"},
                {"value": "B2", "label": "Editable files"},
                {"value": "C3", "label": "Chrome preview"},
            ]
        })
        hero_aside = f"""
      <aside class="hero-panel hero-{layout_mode}">
        <div class="panel-head">
          <span>Workspace Build</span>
          <span>Local Preview</span>
        </div>
        <div class="panel-grid">
          {hero_stats}
        </div>
      </aside>
"""

    if is_article:
        return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="{_html(theme.get("accent", DEFAULT_THEME["accent"]))}" />
  <title>{_html(title)}</title>
  <meta name="description" content="{_html(tagline)}" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>
<body id="top">
  <div class="bg-orb orb-one"></div>
  <div class="bg-orb orb-two"></div>
  <header class="topbar">
    <div class="brand">
      <span class="brand-mark"></span>
      <div>
        <strong>{_html(spec.get("site_name") or "Website")}</strong>
        <span>{_html(tagline or "Generated with JARVIS")}</span>
      </div>
    </div>
    <button class="nav-toggle" type="button" aria-label="Toggle navigation">Menu</button>
    <nav class="nav">{nav_html}</nav>
  </header>

  <main class="layout-{_html(layout_mode)} layout-article">
    <section class="hero hero--article reveal">
      <div class="hero-copy hero-copy-article">
        <p class="eyebrow">{_html(hero.get("eyebrow") or "Feature article")}</p>
        <h1>{_html(hero.get("title") or title)}</h1>
        <p class="lead">{_html(hero.get("subtitle") or tagline)}</p>
        <div class="article-meta">
          <span>Long-form editorial</span>
          <span>Built for reading</span>
          <span>Source code included</span>
        </div>
        <div class="hero-actions">
          <a class="btn btn-primary" href="{_html(primary_target)}">{_html(hero.get("primary_cta") or "Jump to Chapters")}</a>
          <a class="btn btn-secondary" href="{_html(secondary_target)}">{_html(hero.get("secondary_cta") or "Read the Facts")}</a>
        </div>
      </div>
      {hero_aside}
    </section>

    <section id="highlights" class="section reveal">
      <div class="section-head">
        <p>Perspective</p>
        <h2>A reading-first structure with facts, chapters, and a clear narrative.</h2>
      </div>
      <div class="feature-grid article-intro-grid">
        {_render_feature_grid({"items": [
            {"title": "Readable pacing", "description": "Breaks the story into a scan-friendly rhythm."},
            {"title": "Article voice", "description": "Feels like a real editorial page, not a product landing page."},
            {"title": "Edit in place", "description": "Everything is plain HTML, CSS, and JavaScript."},
        ]})}
      </div>
    </section>

    <section id="chapters" class="section reveal">
      {sections_html}
    </section>
  </main>

  <footer class="footer reveal">
    <div>
      <strong>{_html(spec.get("site_name") or "Website")}</strong>
      <p>{_html(tagline or "Generated with JARVIS")}</p>
    </div>
    <a class="btn btn-secondary" href="#top">Back to top</a>
  </footer>

  <script src="script.js"></script>
</body>
</html>
"""

    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="{_html(theme.get("accent", DEFAULT_THEME["accent"]))}" />
  <title>{_html(title)}</title>
  <meta name="description" content="{_html(tagline)}" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>
<body id="top">
  <div class="bg-orb orb-one"></div>
  <div class="bg-orb orb-two"></div>
  <header class="topbar">
    <div class="brand">
      <span class="brand-mark"></span>
      <div>
        <strong>{_html(spec.get("site_name") or "Website")}</strong>
        <span>{_html(tagline or "Generated with JARVIS")}</span>
      </div>
    </div>
    <button class="nav-toggle" type="button" aria-label="Toggle navigation">Menu</button>
    <nav class="nav">{nav_html}</nav>
  </header>

  <main class="layout-{_html(layout_mode)}">
    <section class="hero hero--{_html(layout_mode)} reveal">
      <div class="hero-copy">
        <p class="eyebrow">{_html(hero.get("eyebrow") or "Built with JARVIS")}</p>
        <h1>{_html(hero.get("title") or title)}</h1>
        <p class="lead">{_html(hero.get("subtitle") or tagline)}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="{_html(primary_target)}">{_html(hero.get("primary_cta") or "Get Started")}</a>
          <a class="btn btn-secondary" href="{_html(secondary_target)}">{_html(hero.get("secondary_cta") or "View Features")}</a>
        </div>
      </div>
      {hero_aside}
    </section>

    <section id="features" class="section reveal">
      <div class="section-head">
        <p>Structure</p>
        <h2>Clear sections, reusable files, and a strong first impression.</h2>
      </div>
      <div class="feature-grid">
        {_render_feature_grid({"items": [
            {"title": "Codex-like flow", "description": "Plan, generate, write, preview, and iterate in one workspace."},
            {"title": "Multi-page support", "description": "Build a single landing page or a small site with more than one page."},
            {"title": "Source files first", "description": "The project is written as real code, not a dead mockup."},
        ]})}
      </div>
    </section>

    {sections_html}
  </main>

  <footer class="footer reveal">
    <div>
      <strong>{_html(spec.get("site_name") or "Website")}</strong>
      <p>{_html(tagline or "Generated with JARVIS")}</p>
    </div>
    <a class="btn btn-secondary" href="#top">Back to top</a>
  </footer>

  <script src="script.js"></script>
</body>
</html>
"""


def _render_css(spec: dict[str, Any]) -> str:
    theme = spec.get("theme") or DEFAULT_THEME
    return f"""
:root {{
  --bg: {theme.get("bg", DEFAULT_THEME["bg"])};
  --bg-alt: {theme.get("bg_alt", DEFAULT_THEME["bg_alt"])};
  --surface: {theme.get("surface", DEFAULT_THEME["surface"])};
  --surface-alt: {theme.get("surface_alt", DEFAULT_THEME["surface_alt"])};
  --text: {theme.get("text", DEFAULT_THEME["text"])};
  --muted: {theme.get("muted", DEFAULT_THEME["muted"])};
  --accent: {theme.get("accent", DEFAULT_THEME["accent"])};
  --accent-2: {theme.get("accent_2", DEFAULT_THEME["accent_2"])};
  --accent-3: {theme.get("accent_3", DEFAULT_THEME["accent_3"])};
  --border: {theme.get("border", DEFAULT_THEME["border"])};
  --shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
}}

* {{
  box-sizing: border-box;
}}

html {{
  scroll-behavior: smooth;
}}

body {{
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(98, 208, 255, 0.14), transparent 26%),
    radial-gradient(circle at top right, rgba(139, 92, 246, 0.12), transparent 22%),
    linear-gradient(180deg, var(--bg), var(--bg-alt));
  color: var(--text);
  font-family: "Space Grotesk", "Segoe UI", sans-serif;
  line-height: 1.5;
  overflow-x: hidden;
}}

a {{
  color: inherit;
  text-decoration: none;
}}

.bg-orb {{
  position: fixed;
  inset: auto;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  filter: blur(32px);
  opacity: 0.22;
  pointer-events: none;
  z-index: 0;
}}

.orb-one {{
  top: -140px;
  right: -120px;
  background: rgba(98, 208, 255, 0.45);
}}

.orb-two {{
  bottom: 10%;
  left: -160px;
  background: rgba(139, 92, 246, 0.36);
}}

.topbar,
main,
.footer {{
  position: relative;
  z-index: 1;
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}}

.topbar {{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 0 10px;
}}

.brand {{
  display: flex;
  align-items: center;
  gap: 14px;
}}

.brand-mark {{
  width: 18px;
  height: 18px;
  border-radius: 6px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  box-shadow: 0 0 24px rgba(98, 208, 255, 0.4);
}}

.brand strong {{
  display: block;
  font-size: 1rem;
}}

.brand span {{
  color: var(--muted);
  font-size: 0.85rem;
}}

.nav {{
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  color: var(--muted);
}}

.nav a {{
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid transparent;
}}

.nav a.active,
.nav a:hover {{
  color: var(--text);
  border-color: var(--border);
  background: rgba(255, 255, 255, 0.04);
}}

.nav-toggle {{
  display: none;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  border-radius: 999px;
  padding: 10px 14px;
}}

.hero {{
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 28px;
  align-items: stretch;
  padding: 64px 0 36px;
}}

.hero--editorial {{
  grid-template-columns: 1.3fr 0.7fr;
}}

.hero--gallery {{
  grid-template-columns: 1fr;
}}

.hero--command_center {{
  grid-template-columns: 1fr 0.95fr;
}}

.hero--article {{
  grid-template-columns: 1.2fr 0.8fr;
  align-items: start;
}}

.hero-copy,
.hero-panel,
.feature-card,
.step-card,
.testimonial-card,
.faq-item,
.footer,
.pricing-card,
.showcase-card,
.workspace-shell,
.callout {{
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03));
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  backdrop-filter: blur(14px);
}}

.hero-copy {{
  border-radius: 28px;
  padding: 38px;
}}

.hero-copy-article {{
  padding-bottom: 32px;
}}

.eyebrow {{
  margin: 0 0 12px;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.76rem;
}}

h1,
h2,
h3,
p {{
  margin-top: 0;
}}

h1 {{
  font-size: clamp(3rem, 8vw, 5.6rem);
  line-height: 0.92;
  margin-bottom: 18px;
  max-width: 10ch;
}}

.lead {{
  color: var(--muted);
  font-size: 1.08rem;
  max-width: 56ch;
  margin-bottom: 26px;
}}

.article-meta {{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 22px;
}}

.article-meta span {{
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 8px 12px;
  color: var(--muted);
  background: rgba(255, 255, 255, 0.03);
}}

.hero-actions {{
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}}

.btn {{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 18px;
  border-radius: 14px;
  border: 1px solid var(--border);
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
}}

.btn:hover {{
  transform: translateY(-1px);
}}

.btn-primary {{
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #02111a;
  font-weight: 700;
}}

.btn-secondary {{
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
}}

.hero-panel {{
  border-radius: 28px;
  padding: 22px;
  display: grid;
  gap: 18px;
}}

.hero-article-panel {{
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03)),
    radial-gradient(circle at top left, rgba(98, 208, 255, 0.08), transparent 40%);
}}

.panel-head {{
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: 0.9rem;
}}

.panel-grid {{
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 12px;
}}

.stat-card {{
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 16px 18px;
}}

.stat-card strong {{
  display: block;
  font-size: 2rem;
  margin-bottom: 4px;
}}

.stat-card span {{
  color: var(--muted);
}}

.section {{
  padding: 24px 0 12px;
}}

.section-head {{
  margin-bottom: 20px;
}}

.section-head p {{
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  margin-bottom: 10px;
}}

.section-head h2 {{
  font-size: clamp(1.6rem, 4vw, 2.5rem);
  margin: 0;
  max-width: 18ch;
}}

.feature-grid,
.steps-grid,
.testimonial-grid,
.faq-grid,
.pricing-grid,
.showcase-grid {{
  display: grid;
  gap: 16px;
}}

.feature-grid {{
  grid-template-columns: repeat(3, minmax(0, 1fr));
}}

.article-intro-grid {{
  grid-template-columns: repeat(3, minmax(0, 1fr));
}}

.steps-grid {{
  grid-template-columns: repeat(3, minmax(0, 1fr));
}}

.testimonial-grid,
.pricing-grid,
.showcase-grid {{
  grid-template-columns: repeat(2, minmax(0, 1fr));
}}

.marquee {{
  overflow: hidden;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  padding: 12px 0;
  margin-bottom: 18px;
}}

.marquee-track {{
  display: inline-flex;
  gap: 32px;
  white-space: nowrap;
  animation: marquee-scroll 24s linear infinite;
}}

.marquee-track span {{
  padding: 0 10px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.76rem;
}}

.feature-card,
.step-card,
.testimonial-card,
.faq-item,
.pricing-card,
.showcase-card {{
  border-radius: 24px;
  padding: 22px;
}}

.article-grid {{
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}}

.article-card {{
  border-radius: 24px;
  padding: 24px;
  border: 1px solid var(--border);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03));
  box-shadow: var(--shadow);
}}

.article-kicker {{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;
  min-height: 42px;
  border-radius: 999px;
  margin-bottom: 16px;
  background: rgba(98, 208, 255, 0.12);
  color: var(--accent);
  border: 1px solid rgba(98, 208, 255, 0.22);
  font-weight: 700;
}}

.article-card h3 {{
  margin-bottom: 10px;
  max-width: 18ch;
}}

.article-card p {{
  color: var(--muted);
  margin-bottom: 0;
}}

.feature-index,
.step-badge {{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;
  min-height: 42px;
  border-radius: 999px;
  background: rgba(98, 208, 255, 0.12);
  color: var(--accent);
  border: 1px solid rgba(98, 208, 255, 0.22);
  margin-bottom: 18px;
  font-weight: 700;
}}

.feature-card h3,
.step-card h3,
.pricing-card h3,
.showcase-card h3 {{
  margin-bottom: 10px;
}}

.feature-card p,
.step-card p,
.testimonial-card p,
.faq-item p,
.pricing-card p,
.showcase-card p,
.footer p,
.workspace-shell p {{
  color: var(--muted);
  margin-bottom: 0;
}}

.testimonial-card p {{
  font-size: 1.05rem;
  min-height: 80px;
}}

.testimonial-card div {{
  margin-top: 18px;
}}

.testimonial-card strong {{
  display: block;
}}

.testimonial-card span {{
  color: var(--muted);
  font-size: 0.9rem;
}}

.faq-item summary {{
  list-style: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.05rem;
}}

.faq-item summary::-webkit-details-marker {{
  display: none;
}}

.faq-item p {{
  margin-top: 12px;
}}

.workspace-shell {{
  border-radius: 24px;
  padding: 18px;
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 18px;
}}

.article-panel-grid {{
  grid-template-columns: repeat(3, minmax(0, 1fr));
}}

.workspace-sidebar {{
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 18px;
  background: rgba(255, 255, 255, 0.03);
}}

.sidebar-brand {{
  font-weight: 700;
  margin-bottom: 12px;
}}

.sidebar-note {{
  color: var(--muted);
}}

.workspace-main {{
  display: grid;
  gap: 16px;
}}

.workspace-grid {{
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}}

.workspace-metric {{
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.03);
}}

.workspace-metric span {{
  display: block;
  color: var(--muted);
  font-size: 0.82rem;
  margin-bottom: 6px;
}}

.workspace-metric strong {{
  font-size: 1.05rem;
}}

.workspace-activity {{
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 18px;
  background: rgba(255, 255, 255, 0.03);
}}

.workspace-activity ul {{
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
}}

.callout {{
  border-radius: 24px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}}

@keyframes marquee-scroll {{
  from {{ transform: translateX(0); }}
  to {{ transform: translateX(-50%); }}
}}

.calculator-shell {{
  width: min(520px, 100%);
  margin: 0 auto;
  border-radius: 28px;
  padding: 22px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow);
}}

.calculator-display {{
  padding: 20px;
  border-radius: 22px;
  background: rgba(2, 8, 14, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 16px;
}}

.calculator-history {{
  color: var(--muted);
  font-size: 0.88rem;
  min-height: 1.2em;
  text-align: right;
  margin-bottom: 8px;
  overflow-wrap: anywhere;
}}

.calculator-value {{
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  text-align: right;
  font-weight: 700;
  letter-spacing: -0.04em;
  overflow-wrap: anywhere;
}}

.calculator-actions {{
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}}

.calc-key {{
  min-height: 64px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease, border-color 160ms ease;
}}

.calc-key:hover {{
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.08);
}}

.calc-op {{
  background: rgba(98, 208, 255, 0.12);
  color: var(--accent);
}}

.calc-clear {{
  background: rgba(255, 99, 132, 0.12);
  color: #ff8fab;
}}

.calc-equals {{
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #041018;
  grid-column: span 2;
}}

.calc-zero {{
  grid-column: span 2;
}}

.footer {{
  margin: 38px auto 28px;
  padding: 22px 24px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}}

.reveal {{
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 600ms ease, transform 600ms ease;
}}

.reveal.visible {{
  opacity: 1;
  transform: translateY(0);
}}

@media (max-width: 1080px) {{
  .feature-grid,
  .article-intro-grid,
  .steps-grid,
  .workspace-grid,
  .testimonial-grid,
  .pricing-grid,
  .showcase-grid,
  .article-grid,
  .article-panel-grid {{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }}

  .workspace-shell {{
    grid-template-columns: 1fr;
  }}
}}

@media (max-width: 980px) {{
  .hero {{
    grid-template-columns: 1fr;
  }}

  .hero--article {{
    grid-template-columns: 1fr;
  }}

  h1 {{
    max-width: none;
  }}
}}

@media (max-width: 760px) {{
  .topbar {{
    flex-wrap: wrap;
  }}

  .nav-toggle {{
    display: inline-flex;
  }}

  .nav {{
    display: none;
    width: 100%;
    padding: 12px 0 0;
  }}

  .nav.open {{
    display: flex;
  }}

  .feature-grid,
  .article-intro-grid,
  .steps-grid,
  .workspace-grid,
  .testimonial-grid,
  .pricing-grid,
  .showcase-grid,
  .article-grid,
  .article-panel-grid {{
    grid-template-columns: 1fr;
  }}

  .hero-copy,
  .hero-panel,
  .feature-card,
  .step-card,
  .testimonial-card,
  .faq-item,
  .pricing-card,
  .showcase-card,
  .calculator-shell,
  .footer,
  .callout {{
    border-radius: 22px;
  }}

  .hero-copy {{
    padding: 24px;
  }}

  .footer,
  .callout {{
    flex-direction: column;
    align-items: flex-start;
  }}
}}
"""


def _render_js() -> str:
    return """
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach((link) => {
  if ((link.getAttribute('href') || '').endsWith(currentPage)) {
    link.classList.add('active');
  }
});

const calc = document.querySelector('[data-calculator]');
if (calc) {
  const display = calc.querySelector('[data-calc-display]');
  const history = calc.querySelector('[data-calc-history]');
  const keys = calc.querySelectorAll('[data-calc-key]');
  let current = '0';
  let previous = null;
  let operator = null;
  let resetNext = false;

  const formatValue = (value) => {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) return 'Error';
    if (Number.isInteger(numeric)) return String(numeric);
    return String(Number(numeric.toFixed(10)));
  };

  const updateDisplay = () => {
    display.textContent = current;
    if (history) {
      if (operator && previous !== null) {
        history.textContent = `${previous} ${operator} ${resetNext ? '' : current}`;
      } else {
        history.textContent = 'Ready';
      }
    }
  };

  const apply = () => {
    const a = Number(previous);
    const b = Number(current);
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
      current = 'Error';
      previous = null;
      operator = null;
      resetNext = true;
      updateDisplay();
      return;
    }
    let result = 0;
    switch (operator) {
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case '*': result = a * b; break;
      case '/': result = b === 0 ? NaN : a / b; break;
      default: result = b; break;
    }
    current = formatValue(result);
    previous = null;
    operator = null;
    resetNext = true;
    updateDisplay();
  };

  const inputDigit = (digit) => {
    if (current === 'Error') {
      current = '0';
    }
    if (resetNext) {
      current = digit;
      resetNext = false;
    } else if (current === '0') {
      current = digit;
    } else {
      current += digit;
    }
    updateDisplay();
  };

  const inputDot = () => {
    if (resetNext) {
      current = '0.';
      resetNext = false;
    } else if (!current.includes('.')) {
      current += '.';
    }
    updateDisplay();
  };

  const setOperator = (nextOperator) => {
    if (current === 'Error') return;
    if (previous !== null && operator && !resetNext) {
      apply();
    }
    previous = current;
    operator = nextOperator;
    resetNext = true;
    updateDisplay();
  };

  const handleKey = (key) => {
    if (/^[0-9]$/.test(key)) {
      inputDigit(key);
      return;
    }
    if (key === '.') {
      inputDot();
      return;
    }
    if (['+', '-', '*', '/'].includes(key)) {
      setOperator(key);
      return;
    }
    if (key === 'Enter' || key === '=') {
      if (previous !== null && operator) apply();
      return;
    }
    if (key === 'Backspace') {
      if (resetNext) return;
      current = current.length > 1 ? current.slice(0, -1) : '0';
      updateDisplay();
      return;
    }
    if (key === 'Escape') {
      current = '0';
      previous = null;
      operator = null;
      resetNext = false;
      updateDisplay();
      return;
    }
    if (key === '%') {
      current = formatValue(Number(current) / 100);
      updateDisplay();
      return;
    }
    if (key === 'sign') {
      current = current.startsWith('-') ? current.slice(1) : `-${current}`;
      updateDisplay();
    }
  };

  keys.forEach((key) => {
    key.addEventListener('click', () => {
      const value = key.getAttribute('data-calc-key') || '';
      if (value === 'clear') {
        current = '0';
        previous = null;
        operator = null;
        resetNext = false;
        updateDisplay();
        return;
      }
      if (value === 'sign') {
        handleKey('sign');
        return;
      }
      if (value === 'percent') {
        handleKey('%');
        return;
      }
      if (value === 'equals') {
        handleKey('=');
        return;
      }
      if (['+', '-', '*', '/'].includes(value)) {
        setOperator(value);
        return;
      }
      if (value === '.') {
        inputDot();
        return;
      }
      inputDigit(value);
    });
  });

  window.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/^[0-9]$/.test(key) || ['+', '-', '*', '/', '.', 'Enter', '=', 'Backspace', 'Escape', '%'].includes(key)) {
      event.preventDefault();
      handleKey(key);
    }
  });

  updateDisplay();
}
"""


def _render_manifest(spec: dict[str, Any]) -> dict[str, Any]:
    return {
        "project_name": spec.get("project_name"),
        "site_name": spec.get("site_name"),
        "tagline": spec.get("tagline"),
        "project_type": spec.get("project_type"),
        "pages": [
            {"slug": page.get("slug"), "title": page.get("title")}
            for page in spec.get("pages", [])
        ],
        "notes": spec.get("notes", []),
    }


def _render_readme(spec: dict[str, Any], port: int) -> str:
    page_names = "\n".join(f"- `{page.get('slug')}.html`" if page.get("slug") != "index" else "- `index.html`" for page in spec.get("pages", []))
    return f"""# {spec.get("site_name") or "Website"}

Generated by JARVIS AI.

## Open
- Source files: VS Code
- Preview: http://127.0.0.1:{port}

## Files
- `index.html`
- `styles.css`
- `script.js`
- `site-data.json`
{page_names}
"""


def _write_file(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def _find_free_port(start: int = 8787, end: int = 8899) -> int:
    for port in range(start, end + 1):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            try:
                sock.bind(("127.0.0.1", port))
                return port
            except OSError:
                continue
    raise RuntimeError("No free local port available for preview.")


def _find_executable(candidates: list[str]) -> str | None:
    for candidate in candidates:
        resolved = shutil.which(candidate)
        if resolved:
            return resolved
        path = Path(candidate)
        if path.exists():
            return str(path)
    return None


def _open_vscode(project_dir: Path) -> bool:
    candidates = [
        "code",
        "code.cmd",
        rf"C:\Users\{Path.home().name}\AppData\Local\Programs\Microsoft VS Code\bin\code.cmd",
        r"C:\Program Files\Microsoft VS Code\bin\code.cmd",
        r"C:\Program Files (x86)\Microsoft VS Code\bin\code.cmd",
    ]
    executable = _find_executable(candidates)
    if not executable:
        return False
    try:
        use_shell = executable.lower().endswith((".cmd", ".bat"))
        subprocess.Popen(
            [executable, str(project_dir)],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            shell=use_shell,
        )
        return True
    except Exception:
        return False


def _open_chrome(url: str) -> bool:
    candidates = []
    if os.name == "nt":
        candidates.extend([
            "chrome.exe",
            r"C:\Program Files\Google\Chrome\Application\chrome.exe",
            r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
        ])
    elif sys.platform == "darwin":
        candidates.extend([
            "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
            "google-chrome",
        ])
    else:
        candidates.extend(["google-chrome", "google-chrome-stable", "chromium", "chromium-browser"])

    executable = _find_executable(candidates)
    if executable:
        try:
            subprocess.Popen([executable, url], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, shell=False)
            return True
        except Exception:
            pass

    try:
        webbrowser.open(url)
        return True
    except Exception:
        return False


def _start_preview_server(project_dir: Path, port: int) -> subprocess.Popen[Any]:
    return subprocess.Popen(
        [sys.executable, "-m", "http.server", str(port), "--bind", "127.0.0.1"],
        cwd=str(project_dir),
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )


def _wait_for_port(port: int, timeout: float = 10.0) -> bool:
    deadline = time.time() + timeout
    while time.time() < deadline:
        try:
            with socket.create_connection(("127.0.0.1", port), timeout=0.5):
                return True
        except OSError:
            time.sleep(0.25)
    return False


def website_builder(parameters: dict[str, Any], player=None) -> str:
    params = parameters or {}
    if not _get_api_key():
        return "Gemini API key is missing."

    try:
        project_dir = _resolve_project_dir(params)
    except Exception as exc:
        return str(exc)

    if player:
        try:
            player.write_log(f"[WebsiteBuilder] Writing project into {project_dir}")
        except Exception:
            pass

    bundle = _generate_code_bundle(params)
    files = bundle.get("files") if isinstance(bundle.get("files"), dict) else {}
    if not files:
        return "Website files could not be generated."

    for relative_name, content in files.items():
        if not isinstance(relative_name, str):
            continue
        _write_file(project_dir / relative_name, _stringify_bundle_content(content))

    port = _find_free_port()
    if "README.md" not in files:
        site_title = _sanitize_text(str(bundle.get("site_name") or params.get("site_name") or params.get("title") or "Website"), "Website")
        _write_file(project_dir / "README.md", f"# {site_title}\n\nGenerated directly from the brief.\n")
    if "site-data.json" not in files:
        site_title = _sanitize_text(str(bundle.get("site_name") or params.get("site_name") or params.get("title") or "Website"), "Website")
        project_name = _sanitize_text(str(bundle.get("project_name") or _safe_slug(site_title)), _safe_slug(site_title))
        _write_file(
            project_dir / "site-data.json",
            json.dumps(
                {
                    "project_name": project_name,
                    "site_name": site_title,
                    "notes": ["Generated directly as source files."],
                },
                indent=2,
                ensure_ascii=False,
            ),
        )

    server = _start_preview_server(project_dir, port)
    if not _wait_for_port(port, timeout=10.0):
        try:
            server.terminate()
        except Exception:
            pass
        return f"Website files were created in {project_dir}, but the local preview server did not start."

    url = f"http://127.0.0.1:{port}"
    vscode_ok = _open_vscode(project_dir)
    chrome_ok = _open_chrome(url)

    try:
        urllib.request.urlopen(url, timeout=2).read(1)
    except Exception:
        pass

    if player:
        try:
            player.write_log(f"[WebsiteBuilder] Preview ready at {url}")
        except Exception:
            pass

    opened = []
    opened.append("VS Code" if vscode_ok else "VS Code not found")
    opened.append("Chrome" if chrome_ok else "browser fallback")
    return f"Website built in {project_dir}. Opened in {', '.join(opened)} at {url}."
