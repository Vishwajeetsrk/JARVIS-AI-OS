// Plugin registry (claude-code / claude-plugins .claude-plugin manifest format).
// Bundles every plugins/<name>/.claude-plugin/plugin.json at build time via
// import.meta.glob so the registry works inside the serverless function.
export interface PluginManifest {
  name: string;
  description: string;
  version: string;
  author?: string;
  license?: string;
  installed: boolean;
}

const rawFiles = import.meta.glob("../../plugins/**/.claude-plugin/plugin.json", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

type ParsedAuthor = string | { name?: string; email?: string };

function parseManifest(raw: string): Omit<PluginManifest, "installed"> | null {
  try {
    const parsed = JSON.parse(raw) as {
      "claude-plugin"?: Omit<PluginManifest, "installed">;
      name?: string;
      description?: string;
      version?: string;
      author?: ParsedAuthor;
      license?: string;
    };
    const m = parsed["claude-plugin"] ?? parsed;
    if (!m || !m.name) return null;
    const author =
      typeof m.author === "string"
        ? m.author
        : typeof m.author === "object" && m.author?.name
          ? m.author.name
          : undefined;
    return {
      name: m.name,
      description: m.description ?? "",
      version: m.version ?? "0.0.0",
      author,
      license: m.license,
    };
  } catch {
    return null;
  }
}

export function listPlugins(): PluginManifest[] {
  const out: PluginManifest[] = [];
  for (const [key, raw] of Object.entries(rawFiles)) {
    const m = key.match(/^\.\.\/\.\.\/plugins\/([^/]+)\/\.claude-plugin\/plugin\.json$/);
    if (!m) continue;
    const manifest = parseManifest(raw);
    if (!manifest) continue;
    out.push({ ...manifest, installed: true });
  }
  return out.sort((a, b) => a.name.localeCompare(b.name));
}
