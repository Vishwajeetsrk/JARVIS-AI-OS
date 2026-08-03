// Plugin registry (claude-code / claude-plugins .claude-plugin manifest format).
// Discovers plugin manifests from plugins/<name>/.claude-plugin/plugin.json.
import { promises as fs } from "node:fs";
import path from "node:path";

const PLUGINS_ROOT = process.env.PLUGINS_ROOT || path.join(process.cwd(), "plugins");

export interface PluginManifest {
  name: string;
  description: string;
  version: string;
  author?: string;
  license?: string;
  installed: boolean;
}

export async function listPlugins(): Promise<PluginManifest[]> {
  const out: PluginManifest[] = [];
  let dirs: string[];
  try {
    dirs = await fs.readdir(PLUGINS_ROOT);
  } catch {
    return out;
  }
  for (const dir of dirs) {
    if (dir.startsWith(".")) continue;
    const file = path.join(PLUGINS_ROOT, dir, ".claude-plugin", "plugin.json");
    let raw: string;
    try {
      raw = await fs.readFile(file, "utf-8");
    } catch {
      continue;
    }
    try {
      const parsed = JSON.parse(raw) as { "claude-plugin"?: PluginManifest; name?: string; description?: string; version?: string; author?: string; license?: string };
      const m = parsed["claude-plugin"] ?? parsed;
      if (!m || !m.name) continue;
      out.push({
        name: m.name,
        description: m.description ?? "",
        version: m.version ?? "0.0.0",
        author: m.author,
        license: m.license,
        installed: true,
      });
    } catch {
      continue;
    }
  }
  return out.sort((a, b) => a.name.localeCompare(b.name));
}