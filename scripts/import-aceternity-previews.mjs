// Import Aceternity template previews from C:\Users\vishw\Downloads\Porject
// into public/preset-sites/<slug>/ as live static views.
// - Strips analytics/tracker scripts (PostHog, aceternity analytics, tlt-cdn)
// - Removes dead /_next/static references (chunks not shipped in download)
// - Keeps styles.css (relative) + external image CDNs (assets.aceternity.com)
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, readdirSync, statSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const SRC = "C:\\Users\\vishw\\Downloads\\Porject";
const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "preset-sites");

// Domains to strip (trackers / analytics)
const TRACKER_HOSTS = ["posthog.com", "analytics.aceternity.com", "tlt-cdn.com", "files.tlt-cdn", "googletagmanager.com", "google-analytics.com"];
const TRACKER_INLINE = ["posthog", "_paq", "tlt(", "tlt."];

function findIndexHtml(dir, acc = []) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return acc; }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) findIndexHtml(p, acc);
    else if (e.name === "index.html") acc.push(p);
  }
  return acc;
}

function isTracker(url) {
  return TRACKER_HOSTS.some((h) => url.includes(h)) || url.startsWith("/_next/");
}

function sanitize(html) {
  let out = html;
  // Remove <script ... src="URL" ...> where URL is a tracker or dead /_next/ ref
  out = out.replace(/<script\b[^>]*\bsrc=["']([^"']*)["'][^>]*>/gi, (m, url) =>
    isTracker(url) ? "" : m
  );
  // Remove <link ... href="URL" ...> where URL is a tracker or dead /_next/ ref
  out = out.replace(/<link\b[^>]*\bhref=["']([^"']*)["'][^>]*>/gi, (m, url) =>
    isTracker(url) ? "" : m
  );
  // Remove inline tracker scripts (posthog init, tlt, etc.)
  out = out.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (m) =>
    TRACKER_INLINE.some((t) => m.toLowerCase().includes(t)) ? "" : m
  );
  return out;
}

function slugify(name) {
  return name
    .replace(/\[[^\]]*\]/g, "")              // drop [Blog] etc
    .replace(/\.full\.page/gi, "")
    .replace(/template-preview-aceternity-ui/gi, "")
    .replace(/aceternity-ui/gi, "")
    .replace(/template-preview/gi, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function main() {
  const tops = readdirSync(SRC, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name).sort();
  const catalog = [];
  for (const top of tops) {
    const topDir = join(SRC, top);
    const all = findIndexHtml(topDir);
    if (!all.length) { console.log(`! no index.html in ${top}`); continue; }
    // pick the main page: fewest path segments
    all.sort((a, b) => a.split("\\").length - b.split("\\").length);
    const mainHtml = all[0];
    // sibling dir containing index.html
    const siteDir = dirname(mainHtml);
    const files = readdirSync(siteDir);
    const baseName = siteDir.split("\\").pop();
    let slug = "aceternity-" + slugify(baseName);
    // ensure uniqueness
    let uniq = slug, i = 2;
    while (catalog.some((c) => c.slug === uniq)) { uniq = slug + "-" + i; i++; }
    slug = uniq;
    const dest = join(OUT, slug);
    rmSync(dest, { recursive: true, force: true });
    mkdirSync(dest, { recursive: true });
    // copy all files in siteDir (index.html, styles.css, any assets)
    for (const f of files) {
      const fp = join(siteDir, f);
      if (statSync(fp).isFile()) {
        if (f === "index.html") {
          const raw = readFileSync(fp, "utf8");
          const clean = sanitize(raw, fp);
          writeFileSync(join(dest, "index.html"), clean, "utf8");
        } else {
          copyFileSync(fp, join(dest, f));
        }
      }
    }
    // also copy nested relative asset folders if any (e.g. assets/)
    for (const f of files) {
      const fp = join(siteDir, f);
      if (statSync(fp).isDirectory()) {
        copyDir(fp, join(dest, f));
      }
    }
    const finalHtml = readFileSync(join(dest, "index.html"), "utf8");
    const title = finalHtml.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() || slug;
    const desc = finalHtml.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)?.[1]
      || finalHtml.match(/<meta\s+name=["']og:description["']\s+content=["']([^"']*)["']/i)?.[1]
      || `Aceternity UI template preview — ${title}.`;
    catalog.push({ slug, title, description: desc, category: "Aceternity UI Template", source: baseName, files: readdirSync(dest) });
    console.log(`+ ${slug}  (${title})  files: ${readdirSync(dest).join(", ")}`);
  }
  writeFileSync(join(dirname(fileURLToPath(import.meta.url)), "..", "src", "lib", "aceternity-catalog.json"), JSON.stringify({ importedAt: new Date().toISOString(), count: catalog.length, sites: catalog }, null, 2), "utf8");
  console.log(`\nDone. ${catalog.length} Aceternity previews imported.`);
}

function copyDir(src, dest) {
  mkdirSync(dest, { recursive: true });
  for (const e of readdirSync(src, { withFileTypes: true })) {
    const s = join(src, e.name), d = join(dest, e.name);
    if (e.isDirectory()) copyDir(s, d);
    else copyFileSync(s, d);
  }
}

main();
