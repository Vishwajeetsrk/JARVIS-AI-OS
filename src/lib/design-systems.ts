import type {
  DesignSystemDetail,
  DesignSystemManifest,
  DesignSystemSummary,
} from "./design-system-types";

import * as fs from "node:fs";
import * as path from "node:path";
import { PRESET_SITES } from "./preset-sites.desc";

// -------- Learnify AI Design Systems (from learnify-designs.json) --------

interface LearnifyDesign {
  id: string;
  name: string;
  category: string;
  theme?: string;
  colors?: Record<string, string>;
  fonts?: string[];
  components?: string[];
  pattern?: string;
}

interface LearnifyJson {
  meta: { totalProjects: number; description: string };
  designSystems: LearnifyDesign[];
}

function readLearnifyJson(): LearnifyDesign[] {
  try {
    const p = path.resolve(process.cwd(), "src", "lib", "learnify-designs.json");
    if (!fs.existsSync(p)) return [];
    const raw: LearnifyJson = JSON.parse(fs.readFileSync(p, "utf-8"));
    return raw.designSystems ?? [];
  } catch {
    return [];
  }
}

const LEARNIFY_CATEGORY_MAP: Record<string, string> = {
  "Enterprise AI Platform": "Technology",
  "AI Video Generation": "Bold & Experimental",
  "AI SaaS": "Technology",
  "Marketing Agency": "Professional & Corporate",
  "DeFi / Web3": "Bold & Experimental",
  "Crypto/DeFi": "Bold & Experimental",
  "Luxury Consumer": "Luxury & Premium",
  "Fashion & Retail": "Artistic & Creative",
  "Creative Agency": "Artistic & Creative",
  "Cybersecurity": "Dark & Edgy",
  "Logistics": "Professional & Corporate",
  "Solar / CleanTech": "Nature & Organic",
  "SaaS Dashboard": "Technology",
  "Real Estate": "Professional & Corporate",
  "E-commerce": "Playful & Colorful",
  "Biotech / MedTech": "Nature & Organic",
  "Social / Community": "Playful & Colorful",
  "Portfolio": "Minimal & Clean",
};

export function listLearnifyDesigns(): DesignSystemSummary[] {
  const designs = readLearnifyJson();
  const presetSet = new Set(PRESET_SITES.map((s) => s.name));

  return designs.map((d) => {
    const mappedCategory = LEARNIFY_CATEGORY_MAP[d.category] ?? d.category;
    const previewUrl = presetSet.has(d.id) ? `/preset-sites/${d.id}/` : undefined;

    return {
      id: `learnify-${d.id}`,
      name: d.name,
      category: mappedCategory,
      description: d.pattern
        ? `${d.category} · ${d.pattern}`
        : `${d.category} design system with ${d.theme ?? "custom"} theme.`,
      tokenCount: Object.keys(d.colors ?? {}).length * 4 || 32,
      componentCount: (d.components?.length ?? 6) * 2,
      kind: previewUrl ? "site" : "system",
      previewUrl,
    } satisfies DesignSystemSummary;
  }).sort((a, b) => a.name.localeCompare(b.name));
}

export function getLearnifyDesign(fullId: string): (DesignSystemDetail | ProjectSiteDetail) & { raw?: LearnifyDesign } | null {
  const id = fullId.replace(/^learnify-/, "");
  const designs = readLearnifyJson();
  const d = designs.find((x) => x.id === id);
  if (!d) return null;
  const summary = listLearnifyDesigns().find((s) => s.id === fullId);
  if (!summary) return null;

  // Build CSS tokens from colors & fonts
  const colorTokens = Object.entries(d.colors ?? {})
    .map(([k, v]) => `  --${k}: ${v};`)
    .join("\n");
  const fontTokens = (d.fonts ?? [])
    .map((f, i) => `  --font-${i === 0 ? "heading" : "body"}: '${f}', sans-serif;`)
    .join("\n");

  const cssTokens = `:root {\n${colorTokens}\n${fontTokens}\n  --radius: 0.5rem;\n}`;

  // Build preview HTML snippet
  const componentsList = (d.components ?? ["hero", "navbar", "features", "cta", "footer"])
    .map((comp) => `  <section class="p-6 my-4 rounded-xl border border-border bg-card">\n    <h3 class="text-lg font-bold">${comp.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}</h3>\n    <p class="text-muted-foreground text-sm mt-1">Component pattern: ${d.pattern ?? "Modern UI"}</p>\n  </section>`)
    .join("\n\n");

  const componentsHtml = `<div class="p-8 space-y-6 bg-background text-foreground font-sans min-h-screen">\n  <header class="border-b border-border pb-4">\n    <h1 class="text-3xl font-extrabold tracking-tight">${d.name}</h1>\n    <p class="text-muted-foreground">${d.category} · ${d.pattern ?? "Modern Component Library"}</p>\n  </header>\n\n${componentsList}\n</div>`;

  if (summary.previewUrl) {
    return {
      ...summary,
      kind: "site",
      previewUrl: summary.previewUrl,
      source: componentsHtml,
      raw: d,
    };
  }

  return {
    ...summary,
    kind: "system",
    manifest: {
      schemaVersion: "1.0.0",
      id: fullId,
      name: d.name,
      category: summary.category,
      description: summary.description,
      source: { type: "learnify-ai", origin: "Learnify Design Engine" },
      files: {
        design: "",
        tokens: "tokens.css",
        designTokens: "design-tokens.json",
        tailwind: "tailwind.config.js",
        components: "components.html",
      },
      usage: `Design system for ${d.name} (${d.category}). Apply the CSS variables or Tailwind tokens to your project.`,
      componentsManifest: "",
      importMode: "token-injection",
    },
    tokens: cssTokens,
    designTokens: (d.colors ?? {}) as Record<string, unknown>,
    tailwind: `module.exports = {\n  darkMode: ["class"],\n  theme: {\n    extend: {\n      colors: ${JSON.stringify(d.colors ?? {}, null, 6)}\n    }\n  }\n};`,
    components: componentsHtml,
    usage: `### ${d.name} Usage Guide\n\n- **Category**: ${d.category}\n- **Pattern**: ${d.pattern ?? "Modern Clean UI"}\n- **Fonts**: ${(d.fonts ?? ["Inter"]).join(", ")}\n- **Theme**: ${d.theme ?? "Dark"}\n\nUse this system in your JARVIS projects or command prompts by referencing \`${d.name}\`.`,
    design: "",
    raw: d,
  };
}

function readFileSafe(id: string, rel: string): string {
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
  try {
    const targetDir = path.resolve(process.cwd(), "data", id);
    if (fs.existsSync(targetDir)) {
      return fs.readdirSync(targetDir);
    }
  } catch {}
  return [];
}

function systemIds(): string[] {
  const ids = new Set<string>();
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
  return matches ? matches.length : 30;
}

function parseComponentCount(html: string): number {
  const matches = html.match(/<section[\s>]/g);
  return matches ? matches.length : 8;
}

export function listDesignSystems(): DesignSystemSummary[] {
  const systems: DesignSystemSummary[] = [];

  for (const id of systemIds()) {
    if (id.startsWith("_")) continue;

    const manifest = getManifest(id);
    if (!manifest) continue;

    try {
      const tokens = manifest.files?.tokens ? readFileSafe(id, manifest.files.tokens) : "";
      const components = manifest.files?.components ? readFileSafe(id, manifest.files.components) : "";

      systems.push({
        id: manifest.id,
        name: manifest.name,
        category: manifest.category,
        description: manifest.description,
        tokenCount: tokens ? parseTokenCount(tokens) : 40,
        componentCount: components ? parseComponentCount(components) : 10,
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
    const tokens = manifest.files?.tokens ? readFileSafe(id, manifest.files.tokens) : "";
    const designTokens = manifest.files?.designTokens
      ? JSON.parse(readFileSafe(id, manifest.files.designTokens) || "{}")
      : {};
    const tailwind = manifest.files?.tailwind ? readFileSafe(id, manifest.files.tailwind) : "";
    const components = manifest.files?.components ? readFileSafe(id, manifest.files.components) : "";
    const usage = manifest.usage ? readFileSafe(id, manifest.usage) : "";

    return {
      id: manifest.id,
      name: manifest.name,
      category: manifest.category,
      description: manifest.description,
      tokenCount: tokens ? parseTokenCount(tokens) : 40,
      componentCount: components ? parseComponentCount(components) : 10,
      manifest,
      tokens,
      designTokens: designTokens as Record<string, unknown>,
      tailwind,
      components,
      usage,
      design: manifest.files?.design ? readFileSafe(id, manifest.files.design) : "",
    };
  } catch {
    return null;
  }
}

export interface ProjectSiteDetail extends DesignSystemSummary {
  kind: "site";
  previewUrl: string;
  source: string;
}

// Canonical project key mapping & alias resolution
const PROJECT_ALIASES: Record<string, string> = {
  "aceternity-minimalist-portfolio": "aceternity-minimal-portfolio",
  "viskey-vida": "vida-sota-cases",
  "woblo-vanguard": "woblo-superdesign",
  "cinematic-stream": "cinematic-cloud",
  "velorix": "velorah",
};

export function normalizeProjectKey(id: string): string {
  const raw = id.replace(/^(site-|learnify-)/, "").toLowerCase();
  return PROJECT_ALIASES[raw] ?? raw;
}

export function listUnifiedDesignProjects(): DesignSystemSummary[] {
  const map = new Map<string, DesignSystemSummary>();

  // 1. Ingest base Design Systems from data/
  for (const ds of listDesignSystems()) {
    const key = normalizeProjectKey(ds.id);
    map.set(key, { ...ds, id: key });
  }

  // 2. Ingest & merge Live Preset Sites from public/preset-sites/
  for (const site of listProjectSites()) {
    const rawKey = site.id.replace(/^site-/, "");
    const key = normalizeProjectKey(rawKey);

    const existing = map.get(key);
    if (existing) {
      // Merge live site preview into existing design system
      map.set(key, {
        ...existing,
        kind: "site",
        previewUrl: site.previewUrl,
        componentCount: Math.max(existing.componentCount, site.componentCount),
      });
    } else {
      map.set(key, {
        ...site,
        id: key,
      });
    }
  }

  // 3. Ingest & merge Learnify Designs
  for (const learnify of listLearnifyDesigns()) {
    const rawKey = learnify.id.replace(/^learnify-/, "");
    const key = normalizeProjectKey(rawKey);

    const existing = map.get(key);
    if (existing) {
      // Enhance category and description if learnify has richer categorization
      map.set(key, {
        ...existing,
        category: existing.category === "Project Sites" ? learnify.category : existing.category,
        description: existing.description.length < learnify.description.length ? learnify.description : existing.description,
        previewUrl: existing.previewUrl || learnify.previewUrl,
        kind: (existing.previewUrl || learnify.previewUrl) ? "site" : existing.kind,
      });
    } else {
      map.set(key, {
        ...learnify,
        id: key,
      });
    }
  }

  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export function getUnifiedProjectDetail(id: string): (DesignSystemDetail | ProjectSiteDetail) & { raw?: LearnifyDesign } | null {
  const canonicalKey = normalizeProjectKey(id);

  // Try direct design system lookup first
  const dsDetail = getDesignSystem(canonicalKey);
  const siteDetail = getProjectSite(canonicalKey);
  const learnifyDetail = getLearnifyDesign(canonicalKey);

  if (siteDetail && dsDetail) {
    // Merged site + design system tokens
    return {
      ...dsDetail,
      kind: "site",
      previewUrl: siteDetail.previewUrl,
      source: siteDetail.source || dsDetail.components,
    };
  }

  if (siteDetail) return siteDetail;
  if (dsDetail) return dsDetail;
  if (learnifyDetail) return learnifyDetail;

  // Fallback to legacy lookups
  if (id.startsWith("learnify-")) {
    return getLearnifyDesign(id);
  }
  if (id.startsWith("site-")) {
    return getProjectSite(id);
  }

  return null;
}

export function listProjectSites(): DesignSystemSummary[] {
  const sites: DesignSystemSummary[] = PRESET_SITES.map((site) => {
    const formattedName = site.name
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    return {
      id: `site-${site.name}`,
      name: formattedName,
      category: "Project Sites",
      description: `Live static site for ${formattedName}, built from its project source and served as a ready-to-remix page.`,
      tokenCount: 40,
      componentCount: site.fileCount || 10,
      kind: "site",
      previewUrl: site.path,
    };
  });

  return sites.sort((a, b) => a.name.localeCompare(b.name));
}

export function getProjectSite(id: string): ProjectSiteDetail | null {
  const name = id.replace(/^site-/, "");
  const preset = PRESET_SITES.find((s) => s.name === name);
  if (!preset) return null;

  let html = "";
  try {
    const p = path.resolve(process.cwd(), "public", "preset-sites", name, "index.html");
    if (fs.existsSync(p)) {
      html = fs.readFileSync(p, "utf-8");
    }
  } catch {}

  const formattedName = name
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const title = html ? (html.match(/<title>([^<]*)<\/title>/i)?.[1]?.replace(/&amp;/g, "&")?.trim() ?? formattedName) : formattedName;
  const description = html
    ? (html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] ??
       html.match(/<meta\s+name="og:description"\s+content="([^"]*)"/i)?.[1] ??
       `Live static site for ${formattedName}, built from its project source and served as a ready-to-remix page.`)
    : `Live static site for ${formattedName}, built from its project source and served as a ready-to-remix page.`;

  return {
    id: `site-${name}`,
    name: title,
    category: "Project Sites",
    description,
    tokenCount: 40,
    componentCount: preset.fileCount || 10,
    kind: "site",
    previewUrl: `/preset-sites/${name}/`,
    source: html,
  };
}
