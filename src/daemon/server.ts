import express from "express";
import { join } from "path";
import { existsSync, readFileSync, readdirSync } from "fs";
import { fileURLToPath } from "url";

const __dirname = join(fileURLToPath(import.meta.url), "..");
const DATA_DIR = join(process.cwd(), "data");
const PUBLIC_DIR = join(process.cwd(), "public");
const PORT = parseInt(process.env.DAEMON_PORT || "7456", 10);
const HOST = process.env.DAEMON_HOST || "127.0.0.1";

const app = express();

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/api/design-systems", (_req, res) => {
  const entries = readdirSync(DATA_DIR, { withFileTypes: true });
  const systems = [];
  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith("_")) continue;
    const manifestPath = join(DATA_DIR, entry.name, "manifest.json");
    if (!existsSync(manifestPath)) continue;
    try {
      const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
      systems.push({
        id: manifest.id,
        name: manifest.name,
        category: manifest.category,
        description: manifest.description,
      });
    } catch { /* skip */ }
  }
  res.json(systems.sort((a: any, b: any) => a.name.localeCompare(b.name)));
});

app.get("/api/design-systems/:id", (req, res) => {
  const { id } = req.params;
  const manifestPath = join(DATA_DIR, id, "manifest.json");
  if (!existsSync(manifestPath)) {
    return res.status(404).json({ error: "Design system not found" });
  }
  const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
  const read = (file: string) => {
    try { return readFileSync(join(DATA_DIR, id, file), "utf-8"); }
    catch { return ""; }
  };
  res.json({
    id: manifest.id,
    name: manifest.name,
    category: manifest.category,
    description: manifest.description,
    tokens: read(manifest.files.tokens),
    components: read(manifest.files.components),
    usage: read(manifest.usage),
    design: read(manifest.files.design),
  });
});

app.get("/api/design-systems/:id/preview", (req, res) => {
  const { id } = req.params;
  const manifestPath = join(DATA_DIR, id, "manifest.json");
  if (!existsSync(manifestPath)) {
    return res.status(404).send("Design system not found");
  }
  const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
  const tokens = (() => {
    try { return readFileSync(join(DATA_DIR, id, manifest.files.tokens), "utf-8"); }
    catch { return ""; }
  })();
  const components = (() => {
    try { return readFileSync(join(DATA_DIR, id, manifest.files.components), "utf-8"); }
    catch { return ""; }
  })();
  const html = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>${manifest.name} preview</title><style>${tokens}body{background:var(--bg);color:var(--fg);font-family:var(--font-body);padding:2rem;max-width:1200px;margin:0 auto}section{border:1px solid var(--border);border-radius:12px;padding:1.5rem;margin-bottom:2rem;background:var(--surface)}h2{font-size:1.25rem;margin:0 0 1rem;color:var(--fg)}button{background:var(--accent);color:var(--accent-on);border:none;padding:8px 16px;border-radius:8px;cursor:pointer}</style></head><body>${components}</body></html>`;
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.send(html);
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, timestamp: Date.now() });
});

app.use("/assets", express.static(join(PUBLIC_DIR, "assets")));

app.listen(PORT, HOST, () => {
  console.log(`[daemon] JARVIS Design Daemon running on http://${HOST}:${PORT}`);
  console.log(`[daemon] Data dir: ${DATA_DIR}`);
});
