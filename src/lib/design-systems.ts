// Bundles the contents of ./data at build time via Vite's import.meta.glob so
// the design systems are available inside the serverless function (no fs access).
import type {
  DesignSystemDetail,
  DesignSystemManifest,
  DesignSystemSummary,
} from "./design-system-types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rawFiles = import.meta.glob("../../data/**/*", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

// import.meta.glob keys are relative to this file: "../../data/<system>/<file>"
function readFileSafe(id: string, rel: string): string {
  const key = `../../data/${id}/${rel}`;
  return rawFiles[key] ?? "";
}

/** Read a design-system file by id + relative path (for templates/preview routes). */
export function readDesignSystemFile(id: string, rel: string): string {
  const safe = rel.replace(/\\/g, "/").replace(/\.\./g, "").replace(/^\/+/, "");
  return readFileSafe(id, safe);
}

/** List files that exist under a design system dir (used by the templates API). */
export function listDesignSystemFiles(id: string): string[] {
  const prefix = `../../data/${id}/`;
  return Object.keys(rawFiles)
    .filter((k) => k.startsWith(prefix))
    .map((k) => k.slice(prefix.length));
}

function systemIds(): string[] {
  const ids = new Set<string>();
  for (const key of Object.keys(rawFiles)) {
    const m = key.match(/^\.\.\/\.\.\/data\/([^/]+)\/manifest\.json$/);
    if (m) ids.add(m[1]);
  }
  return [...ids];
}

function getManifest(id: string): DesignSystemManifest | null {
  const raw = readFileSafe(id, "manifest.json");
  if (!raw) return null;
  try {
    return JSON.parse(raw) as DesignSystemManifest;
  } catch {
    return null;
  }
}

function parseTokenCount(css: string): number {
  const matches = css.match(/--[\w-]+/g);
  return matches ? matches.length : 0;
}

function parseComponentCount(html: string): number {
  const matches = html.match(/<section[\s>]/g);
  return matches ? matches.length : 0;
}

export function listDesignSystems(): DesignSystemSummary[] {
  const systems: DesignSystemSummary[] = [];

  for (const id of systemIds()) {
    if (id.startsWith("_")) continue;

    const manifest = getManifest(id);
    if (!manifest) continue;

    try {
      const tokens = readFileSafe(id, manifest.files.tokens);
      const components = readFileSafe(id, manifest.files.components);

      systems.push({
        id: manifest.id,
        name: manifest.name,
        category: manifest.category,
        description: manifest.description,
        tokenCount: parseTokenCount(tokens),
        componentCount: parseComponentCount(components),
      });
    } catch {
      continue;
    }
  }

  return systems.sort((a, b) => a.name.localeCompare(b.name));
}

export function getDesignSystem(id: string): DesignSystemDetail | null {
  const manifest = getManifest(id);
  if (!manifest) return null;

  try {
    const tokens = readFileSafe(id, manifest.files.tokens);
    const designTokens = JSON.parse(readFileSafe(id, manifest.files.designTokens) || "{}");
    const tailwind = readFileSafe(id, manifest.files.tailwind);
    const components = readFileSafe(id, manifest.files.components);
    const usage = readFileSafe(id, manifest.usage);

    return {
      id: manifest.id,
      name: manifest.name,
      category: manifest.category,
      description: manifest.description,
      tokenCount: parseTokenCount(tokens),
      componentCount: parseComponentCount(components),
      manifest,
      tokens,
      designTokens: designTokens as Record<string, unknown>,
      tailwind,
      components,
      usage,
      design: readFileSafe(id, manifest.files.design),
    };
  } catch {
    return null;
  }
}
