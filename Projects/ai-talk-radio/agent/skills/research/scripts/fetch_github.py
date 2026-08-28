#!/usr/bin/env python3
# Copyright 2026 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""Fetch GitHub repository activity for AI Talk Radio research.

Usage:
    python3 fetch_github.py --repo googleapis/python-genai --workspace ./workspace
    python3 fetch_github.py --repo https://github.com/google/generative-ai-python --workspace ./workspace

Output:
    {workspace}/data/research/github.md
"""

import argparse
import json
import os
import re
import time
import urllib.request
from datetime import datetime

API_BASE = "https://api.github.com"
HEADERS = {"User-Agent": "AI-Radio/1.0", "Accept": "application/vnd.github.v3+json"}


def fetch_json(url):
    """Fetch JSON from a URL with GitHub API headers."""
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as resp:
        return json.loads(resp.read().decode())


def parse_repo(repo_input):
    """Parse 'owner/repo' from various input formats."""
    # Strip trailing slashes and .git
    repo_input = repo_input.rstrip("/").removesuffix(".git")

    # Full URL: https://github.com/owner/repo
    match = re.match(r"https?://github\.com/([^/]+/[^/]+)", repo_input)
    if match:
        return match.group(1)

    # Short form: owner/repo
    if "/" in repo_input and not repo_input.startswith("http"):
        return repo_input

    raise ValueError(f"Cannot parse repo from: {repo_input}. Use 'owner/repo' or a GitHub URL.")


def fetch_readme(owner_repo):
    """Fetch and decode the README."""
    try:
        data = fetch_json(f"{API_BASE}/repos/{owner_repo}/readme")
        import base64
        return base64.b64decode(data.get("content", "")).decode("utf-8", errors="replace")
    except Exception as e:
        print(f"  ⚠ Could not fetch README: {e}")
        return None


def fetch_releases(owner_repo, limit=5):
    """Fetch recent releases."""
    try:
        return fetch_json(f"{API_BASE}/repos/{owner_repo}/releases?per_page={limit}")
    except Exception as e:
        print(f"  ⚠ Could not fetch releases: {e}")
        return []


def fetch_repo_tree(owner_repo, default_branch="main"):
    """Fetch the repository directory structure."""
    try:
        data = fetch_json(f"{API_BASE}/repos/{owner_repo}/git/trees/{default_branch}?recursive=1")
        tree = data.get("tree", [])

        # Filter out deep node_modules, .git, etc. to keep it manageable
        paths = []
        for item in tree:
            path = item.get("path", "")
            if any(ignore in path for ignore in [".git/", "node_modules/", "venv/", "__pycache__/"]):
                continue

            # Only include directories and common code files to keep the list concise
            if item.get("type") == "tree" or path.endswith((".py", ".js", ".ts", ".tsx", ".jsx", ".md", ".json", ".yml", ".yaml", ".html", ".css", ".rs", ".go", ".java", ".cpp", ".c", ".h", ".rb", ".php", ".swift", ".kt", ".scala")):
                paths.append(path)

        # Sort by depth (number of slashes) to prioritize top-level files and shallow directories
        paths.sort(key=lambda p: (p.count("/"), p))

        return paths[:200] # Limit to 200 paths to avoid massive outputs
    except Exception as e:
        print(f"  ⚠ Could not fetch repo tree: {e}")
        return []


def fetch_repo_info(owner_repo):
    """Fetch basic repo metadata."""
    try:
        return fetch_json(f"{API_BASE}/repos/{owner_repo}")
    except Exception as e:
        print(f"  ⚠ Could not fetch repo info: {e}")
        return {}


def main():
    parser = argparse.ArgumentParser(description="Fetch GitHub repo activity for AI Talk Radio")
    parser.add_argument("--repo", required=True, help="GitHub repo (owner/repo or full URL)")
    parser.add_argument("--workspace", default="workspace", help="Workspace directory")
    parser.add_argument("--releases", type=int, default=5, help="Number of releases to fetch")
    args = parser.parse_args()

    owner_repo = parse_repo(args.repo)
    out_dir = os.path.join(args.workspace, "data", "research")
    os.makedirs(out_dir, exist_ok=True)

    print(f"=== AI Talk Radio Research: GitHub Deep Dive ===")
    print(f"Repository: {owner_repo}\n")

    # Repo info
    print("Fetching repo info...")
    info = fetch_repo_info(owner_repo)
    time.sleep(0.5)

    # README
    print("Fetching README...")
    readme = fetch_readme(owner_repo)
    time.sleep(0.5)

    # Releases
    print(f"Fetching recent releases (up to {args.releases})...")
    releases = fetch_releases(owner_repo, args.releases)
    time.sleep(0.5)

    # Repo Tree
    print("Fetching repository structure...")
    default_branch = info.get("default_branch", "main") if info else "main"
    tree_paths = fetch_repo_tree(owner_repo, default_branch)

    # Build markdown
    lines = [f"# GitHub Deep Dive: {owner_repo} — {datetime.now().strftime('%B %d, %Y')}\n"]
    lines.append("This research focuses on understanding the repository's purpose, how it works, and its codebase structure to provide an informative and helpful overview.\n")

    # Repo overview
    if info:
        lines.append("## Repository Overview\n")
        lines.append(f"- **Name**: {info.get('full_name', owner_repo)}")
        lines.append(f"- **Description**: {info.get('description', 'N/A')}")
        lines.append(f"- **Stars**: {info.get('stargazers_count', 0):,}")
        lines.append(f"- **Forks**: {info.get('forks_count', 0):,}")
        lines.append(f"- **Language**: {info.get('language', 'N/A')}")
        lines.append(f"- **License**: {info.get('license', {}).get('name', 'N/A') if info.get('license') else 'N/A'}")
        lines.append(f"- **URL**: https://github.com/{owner_repo}\n")

    # README summary (first 3000 chars to get more context)
    if readme:
        lines.append("## README (excerpt)\n")
        lines.append(readme[:3000])
        if len(readme) > 3000:
            lines.append(f"\n*(truncated — {len(readme)} chars total)*")
        lines.append("")

    # Releases
    if releases:
        lines.append(f"## Recent Releases ({len(releases)})\n")
        lines.append("When discussing releases in the script, be specific about *when* they happened (e.g., 'just last week', 'back in March') and mention the specific version number or tag if relevant to the features being discussed.\n")
        for rel in releases:
            tag = rel.get("tag_name", "?")
            name = rel.get("name", tag)
            date = rel.get("published_at", "")[:10]
            body = (rel.get("body") or "")[:600]
            lines.append(f"### {name} ({tag}) — {date}\n")
            if body:
                lines.append(body)
                if len(rel.get("body", "")) > 600:
                    lines.append("*(truncated)*")
            lines.append("")
    else:
        lines.append("## Releases\n\n*(No releases found)*\n")

    # Repository Structure
    if tree_paths:
        lines.append("## Codebase Structure\n")
        lines.append("Here is an overview of the key files and directories in the repository to understand how it is organized:\n")
        lines.append("```text")
        for path in tree_paths:
            lines.append(path)
        if len(tree_paths) == 200:
            lines.append("... (truncated)")
        lines.append("```\n")

    lines.append("---\n")

    out_path = os.path.join(out_dir, "github.md")
    with open(out_path, "w") as f:
        f.write("\n".join(lines))

    print(f"\n✅ Research saved to {out_path}")
    print(f"   Releases: {len(releases)} | Files indexed: {len(tree_paths)}")


if __name__ == "__main__":
    main()
