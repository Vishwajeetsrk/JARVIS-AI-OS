import { readFileSync, readdirSync, existsSync } from "fs";
import { join } from "path";

const DATA_DIR = join(process.cwd(), "data");

export interface DesignSystemManifest {
  schemaVersion: string;
  id: string;
  name: string;
  category: string;
  description: string;
  source: { type: string; origin: string };
  files: {
    design: string;
    tokens: string;
    designTokens: string;
    tailwind: string;
    components: string;
  };
  usage: string;
  componentsManifest: string;
  importMode: string;
}

export interface DesignSystemSummary {
  id: string;
  name: string;
  category: string;
  description: string;
  tokenCount: number;
  componentCount: number;
}

export interface DesignSystemDetail extends DesignSystemSummary {
  manifest: DesignSystemManifest;
  tokens: string;
  designTokens: Record<string, unknown>;
  tailwind: string;
  components: string;
  usage: string;
  design: string;
}

function parseTokenCount(css: string): number {
  const matches = css.match(/--[\w-]+/g);
  return matches ? matches.length : 0;
}

function parseComponentCount(html: string): number {
  const matches = html.match(/<section[\s>]/g);
  return matches ? matches.length : 0;
}

function readFileSafe(path: string): string {
  try {
    return readFileSync(path, "utf-8");
  } catch {
    return "";
  }
}

export function listDesignSystems(): DesignSystemSummary[] {
  const entries = readdirSync(DATA_DIR, { withFileTypes: true });
  const systems: DesignSystemSummary[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith("_")) continue;

    const manifestPath = join(DATA_DIR, entry.name, "manifest.json");
    if (!existsSync(manifestPath)) continue;

    try {
      const manifest: DesignSystemManifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
      const tokens = readFileSafe(join(DATA_DIR, entry.name, manifest.files.tokens));
      const components = readFileSafe(join(DATA_DIR, entry.name, manifest.files.components));

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
  const manifestPath = join(DATA_DIR, id, "manifest.json");
  if (!existsSync(manifestPath)) return null;

  try {
    const manifest: DesignSystemManifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
    const tokens = readFileSafe(join(DATA_DIR, id, manifest.files.tokens));
    const designTokens = JSON.parse(readFileSafe(join(DATA_DIR, id, manifest.files.designTokens)) || "{}");
    const tailwind = readFileSafe(join(DATA_DIR, id, manifest.files.tailwind));
    const components = readFileSafe(join(DATA_DIR, id, manifest.files.components));
    const usage = readFileSafe(join(DATA_DIR, id, manifest.usage));

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
      design: readFileSafe(join(DATA_DIR, id, manifest.files.design)),
    };
  } catch {
    return null;
  }
}
