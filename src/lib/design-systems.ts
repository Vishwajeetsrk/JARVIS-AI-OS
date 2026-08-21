// Bundles the contents of ./data at build time via Vite's import.meta.glob so
// the design systems are available inside the serverless function (no fs access).
import type {
  DesignSystemDetail,
  DesignSystemManifest,
  DesignSystemSummary,
} from "./design-system-types";

import * as fs from "node:fs";
import * as path from "node:path";

const rawFiles: Record<string, string> = (import.meta as any).glob("../../data/**/*", { query: "?raw", import: "default", eager: true });
const siteHtml: Record<string, string> = (import.meta as any).glob("../../public/preset-sites/*/index.html", { query: "?raw", import: "default", eager: true });

function readFileSafe(id: string, rel: string): string {
  const key = `../../data/${id}/${rel}`;
  if (rawFiles[key]) return rawFiles[key];

  try {
    const filePath = path.resolve(process.cwd(), "data", id, rel);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf-8");
    }
  } catch {}
  return "";
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
  if (ids.size === 0) {
    try {
      const dataDir = path.resolve(process.cwd(), "data");
      if (fs.existsSync(dataDir)) {
        const entries = fs.readdirSync(dataDir, { withFileTypes: true });
        for (const entry of entries) {
          if (entry.isDirectory() && fs.existsSync(path.join(dataDir, entry.name, "manifest.json"))) {
            ids.add(entry.name);
          }
        }
      }
    } catch {}
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

// -------- Project sites (live static sites served from /preset-sites/<name>/) --------

export interface ProjectSiteDetail extends DesignSystemSummary {
  kind: "site";
  previewUrl: string;
  source: string;
}

function siteIdFromKey(key: string): string | null {
  const m = key.match(/^\.\.\/\.\.\/public\/preset-sites\/([^/]+)\/index\.html$/);
  if (!m || m[1] === "_shared") return null;
  return m[1];
}

function siteMeta(html: string, name: string): { title: string; description: string } {
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() ?? name;
  const description =
    html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] ??
    html.match(/<meta\s+name="og:description"\s+content="([^"]*)"/i)?.[1] ??
    `Live static site for ${name}, built from its project source and served as a ready-to-remix page.`;
  return { title, description };
}

function siteCounts(html: string): { tokens: number; components: number } {
  const tokens = (html.match(/--[\w-]+/g) ?? []).length;
  const components = (html.match(/<section[\s>]/g) ?? []).length;
  return { tokens, components };
}

export function listProjectSites(): DesignSystemSummary[] {
  const sites: DesignSystemSummary[] = [];
  for (const key of Object.keys(siteHtml)) {
    const name = siteIdFromKey(key);
    if (!name) continue;
    const html = siteHtml[key] ?? "";
    const { title, description } = siteMeta(html, name);
    const { tokens, components } = siteCounts(html);
    sites.push({
      id: `site-${name}`,
      name: title,
      category: "Project Sites",
      description,
      tokenCount: tokens,
      componentCount: components,
      kind: "site",
      previewUrl: `/preset-sites/${name}/`,
    });
  }
  return sites.sort((a, b) => a.name.localeCompare(b.name));
}

export function getProjectSite(id: string): ProjectSiteDetail | null {
  const name = id.replace(/^site-/, "");
  const key = `../../public/preset-sites/${name}/index.html`;
  const html = siteHtml[key];
  if (!html) return null;
  const { title, description } = siteMeta(html, name);
  const { tokens, components } = siteCounts(html);
  return {
    id: `site-${name}`,
    name: title,
    category: "Project Sites",
    description,
    tokenCount: tokens,
    componentCount: components,
    kind: "site",
    previewUrl: `/preset-sites/${name}/`,
    source: html,
  };
}
