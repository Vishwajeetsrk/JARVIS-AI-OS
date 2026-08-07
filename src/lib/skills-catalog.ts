// Bundles every SKILL.md under ./skills at build time via Vite's import.meta.glob
// so the full skill catalog is available inside the serverless function (no fs access).
import type { SkillMeta } from "@/lib/skills";

const rawFiles = import.meta.glob("../../skills/**/SKILL.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string): { name?: string; description?: string } {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(raw);
  if (!m) return {};
  const meta: Record<string, string> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { name: meta.name, description: meta.description };
}

function entries(): { name: string; category: string; description: string; raw: string }[] {
  const out: { name: string; category: string; description: string; raw: string }[] = [];
  for (const [key, raw] of Object.entries(rawFiles)) {
    // Keys look like: ../../skills/<category>/SKILL.md
    const m = key.match(/^\.\.\/\.\.\/skills\/([^/]+)\/SKILL\.md$/);
    if (!m) continue;
    const category = m[1];
    if (category.startsWith(".")) continue;
    const { name, description } = parseFrontmatter(raw);
    if (!name) continue;
    out.push({ name, category, description: description ?? "", raw });
  }
  return out;
}

/** All shipped skills (17 Anthropic + Jarvis's own), read-only catalog entries. */
export function listShippedSkills(): SkillMeta[] {
  return entries()
    .map((e) => ({
      name: e.name,
      description: e.description,
      category: e.category,
      path: `skills/${e.category}/${e.name}/SKILL.md`,
      updatedAt: "",
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/** Full SKILL.md contents for a shipped skill, or null if unknown. */
export function getShippedSkillContent(name: string): string | null {
  const e = entries().find((x) => x.name === name);
  return e ? e.raw : null;
}
