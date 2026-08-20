// Copies each built project under Projects/ into public/preset-sites/<name>/ so
// they are deployed as static sites at /preset-sites/<name>/.
// Also generates src/lib/preset-sites.json manifest consumed by the server fn.
import { mkdir, readdir, copyFile, writeFile, stat, readFile } from "node:fs/promises";
import { join, dirname } from "node:path";

const ROOT = process.cwd();
const PROJECTS = join(ROOT, "Projects");
const OUT = join(ROOT, "public", "preset-sites");

const STATIC_EXTS = new Set([
  ".html", ".js", ".mjs", ".css", ".json",
  ".svg", ".png", ".jpg", ".jpeg", ".webp", ".gif", ".ico", ".avif",
  ".woff", ".woff2", ".ttf", ".otf", ".eot",
  ".mp4", ".webm", ".mp3", ".wav", ".ogg", ".pdf", ".txt", ".xml",
]);

// Projects to skip (non-website projects, e.g. mobile apps).
const EXCLUDE_DIRS = new Set(["wardelio"]);

const EXCLUDE_FILES = new Set([
  "index.source.html", "package-lock.json", "package.json", "pnpm-lock.yaml",
  "yarn.lock", "tsconfig.json", "tsconfig.node.json", "tsconfig.app.json",
  "postcss.config.js", "tailwind.config.js", "vite.config.ts", "vite.config.js",
  "vitest.config.ts", "eslint.config.js", ".gitignore", ".npmrc", "README.md",
  "favicon.ico", "vite.svg",
]);

async function listStaticFiles(dir) {
  const files = [];
  const walk = async (d) => {
    const entries = await readdir(d, { withFileTypes: true });
    for (const e of entries) {
      const full = join(d, e.name);
      if (e.isDirectory()) {
        if (e.name === "node_modules" || e.name === ".git" || e.name === "src" || e.name === "scripts") continue;
        await walk(full);
      } else if (STATIC_EXTS.has("." + e.name.split(".").pop().toLowerCase()) && !EXCLUDE_FILES.has(e.name)) {
        files.push(full);
      }
    }
  };
  await walk(dir);
  return files;
}

async function main() {
  const projectDirs = (await readdir(PROJECTS, { withFileTypes: true }))
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();

  const manifest = [];
  let copied = 0;
  let totalBytes = 0;

  for (const name of projectDirs) {
    if (EXCLUDE_DIRS.has(name)) {
      console.log(`SKIP ${name}: excluded project`);
      continue;
    }
    // A project may live at Projects/<name>/<name>/... (double nested) or directly.
    const rootCandidates = [
      join(PROJECTS, name),
      join(PROJECTS, name, name),
      ...(await (async () => {
        const one = join(PROJECTS, name);
        const inner = (await readdir(one, { withFileTypes: true }).catch(() => [])).filter((e) => e.isDirectory());
        return inner.map((e) => join(one, e.name)).filter((p) => p !== join(one, "node_modules"));
      })()),
    ];

    let sourceRoot = null;
    for (const c of rootCandidates) {
      try {
        const st = await stat(c);
        if (st.isDirectory()) {
          const html = join(c, "index.html");
          const has = await readdir(c).then((l) => l.includes("index.html")).catch(() => false);
          if (has) { sourceRoot = c; break; }
        }
      } catch { /* skip */ }
    }

    if (!sourceRoot) {
      console.log(`SKIP ${name}: no index.html found`);
      continue;
    }

    const dest = join(OUT, name);
    const files = await listStaticFiles(sourceRoot);
    if (files.length === 0) {
      console.log(`SKIP ${name}: no static files`);
      continue;
    }

    for (const f of files) {
      const rel = f.slice(sourceRoot.length).replace(/^[\\/]+/, "");
      const target = join(dest, rel);
      await mkdir(dirname(target), { recursive: true });
      await copyFile(f, target);
      const s = await stat(f);
      totalBytes += s.size;
      copied++;
    }

    manifest.push({ name, path: `/preset-sites/${name}/`, hasSource: true, fileCount: files.length });
    console.log(`OK ${name}: ${files.length} files`);
  }

  const manifestOut = join(ROOT, "src", "lib", "preset-sites.json");
  await writeFile(manifestOut, JSON.stringify(manifest, null, 2) + "\n", "utf8");

  // Shared assets referenced by preset index.html files.
  const sharedOut = join(OUT, "_shared");
  await mkdir(sharedOut, { recursive: true });
  const navFix = join(sharedOut, "preset-nav-fix.js");
  const navFixExists = await readFile(navFix, "utf8").catch(() => null);
  await writeFile(
    navFix,
    navFixExists ??
      `// Auto-generated stub for preset nav fix. Kept as a no-op so preset sites render without 404s.\n` +
        `(() => { document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener("click", (e) => { const id = link.getAttribute("href").slice(1); const t = document.getElementById(id); if (t && t.scrollIntoView) { e.preventDefault(); t.scrollIntoView({ behavior: "smooth", block: "start" }); } })); })();\n`,
    "utf8"
  );
  const sectionsCss = join(sharedOut, "preset-sections.css");
  const sectionsCssExists = await readFile(sectionsCss, "utf8").catch(() => null);
  await writeFile(sectionsCss, sectionsCssExists ?? `/* Auto-generated stub for shared preset sections styles. */\n`, "utf8");

  const descOut = join(ROOT, "src", "lib", "preset-sites.desc.ts");
  await writeFile(
    descOut,
    `// Auto-generated by scripts/build-preset-sites.mjs — do not edit by hand.\n` +
      `export interface PresetSite { name: string; path: string; hasSource: boolean; fileCount: number; }\n` +
      `export const PRESET_SITES: PresetSite[] = ${JSON.stringify(manifest)};\n`,
    "utf8"
  );

  console.log(`\nCopied ${copied} files, ${(totalBytes / 1024 / 1024).toFixed(1)} MB into public/preset-sites`);
  console.log(`Manifest: ${manifest.length} projects -> src/lib/preset-sites.json`);
}

main().catch((e) => { console.error(e); process.exit(1); });
