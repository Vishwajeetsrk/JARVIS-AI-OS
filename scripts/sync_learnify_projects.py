import os
import shutil
import json
import re
from pathlib import Path

source_dir = Path(r"C:\Users\vishw\Music\Learnify AI\Projects")
target_sites_dir = Path(r"d:\Team of Vishwajeet\public\preset-sites")
target_data_dir = Path(r"d:\Team of Vishwajeet\data")
target_sites_dir.mkdir(parents=True, exist_ok=True)
target_data_dir.mkdir(parents=True, exist_ok=True)

print(f"Syncing from: {source_dir}")
print(f"Syncing to: {target_sites_dir}")

preset_list = []

# List all subdirectories
for proj_dir in sorted(source_dir.iterdir()):
    if not proj_dir.is_dir():
        continue
    
    proj_id = proj_dir.name.lower().replace("_", "-")
    if proj_id == "mindloop-fixed":
        continue # Skip duplicate
    
    dest_site = target_sites_dir / proj_id
    dest_site.mkdir(parents=True, exist_ok=True)

    # Find index.html inside proj_dir or subfolder
    html_files = list(proj_dir.glob("**/index.html"))
    if not html_files:
        continue
    
    src_html = html_files[0]
    html_parent = src_html.parent
    
    # Copy all files from html_parent to dest_site
    for item in html_parent.iterdir():
        if item.name.startswith(".") or item.name in ["node_modules", "dist", ".git"]:
            continue
        dest_item = dest_site / item.name
        if item.is_dir():
            shutil.copytree(item, dest_item, dirs_exist_ok=True)
        else:
            shutil.copy2(item, dest_item)

    # Also copy TSX / JSX files if in src/
    src_folder = proj_dir / "src"
    if src_folder.exists() and src_folder.is_dir():
        dest_src = dest_site / "src"
        shutil.copytree(src_folder, dest_src, dirs_exist_ok=True)

    # Read HTML title or derive name
    html_content = (dest_site / "index.html").read_text(encoding="utf-8", errors="ignore")
    title_match = re.search(r"<title>(.*?)</title>", html_content, re.IGNORECASE)
    display_name = title_match.group(1).split("—")[0].split("-")[0].strip() if title_match else proj_id.replace("-", " ").title()
    if not display_name or len(display_name) > 30:
        display_name = proj_id.replace("-", " ").title()

    # Category inference
    cat = "SaaS"
    if any(k in proj_id for k in ["nike", "beauty", "realty", "shop", "commerce"]):
        cat = "E-Commerce & Retail"
    elif any(k in proj_id for k in ["defi", "crypto", "usd", "epoch", "web3", "vault"]):
        cat = "Web3 & Fintech"
    elif any(k in proj_id for k in ["stream", "cloud", "media", "toon", "viral"]):
        cat = "Media & Entertainment"
    elif any(k in proj_id for k in ["ai", "cognit", "stellar", "mind", "power", "lumina"]):
        cat = "AI & Intelligence"
    elif any(k in proj_id for k in ["geo", "logistics", "machine", "auto", "ecovolt", "solar"]):
        cat = "Industrial & Logistics"
    elif any(k in proj_id for k in ["guard", "secur", "protect"]):
        cat = "Cybersecurity"

    # Count files
    copied_files = [f for f in dest_site.glob("**/*") if f.is_file()]

    preset_list.append({
        "name": proj_id,
        "displayName": display_name,
        "category": cat,
        "path": f"/preset-sites/{proj_id}/",
        "hasSource": True,
        "fileCount": len(copied_files)
    })

    # Create manifest for design-systems
    manifest = {
        "id": proj_id,
        "name": display_name,
        "category": cat,
        "description": f"Luxury {cat} design system and full interactive site with responsive layouts, typography, and micro-animations.",
        "previewUrl": f"/preset-sites/{proj_id}/",
        "color": "#06B6D4" if "ai" in proj_id else "#F59E0B" if "nike" in proj_id or "solar" in proj_id else "#8B5CF6",
        "tags": [cat, "Tailwind CSS", "React 19", "Framer Motion", "Luxury UI"]
    }
    manifest_file = target_data_dir / proj_id / "manifest.json"
    manifest_file.parent.mkdir(parents=True, exist_ok=True)
    manifest_file.write_text(json.dumps(manifest, indent=2), encoding="utf-8")

print(f"Successfully copied and synced {len(preset_list)} complete design systems!")

# Write updated preset-sites.json
preset_json_file = Path(r"d:\Team of Vishwajeet\src\lib\preset-sites.json")
preset_json_file.write_text(json.dumps(preset_list, indent=2), encoding="utf-8")
print(f"Updated {preset_json_file} with {len(preset_list)} entries.")
