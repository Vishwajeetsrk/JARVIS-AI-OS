// Skill manager (hermes-style self-improving skills).
// Learned skills are authored as SKILL.md files under skills/<category>/<name>/,
// matching the agentskills.io / Claude skill format used across this repo.
import { promises as fs } from "node:fs";
import path from "node:path";

const SKILLS_ROOT = process.env.SKILLS_ROOT || path.join(process.cwd(), "skills");

const NAME_RE = /^[a-z0-9][a-z0-9._-]*$/;
const MAX_DESCRIPTION = 1024;
const MAX_CONTENT = 100_000;

export interface SkillMeta {
  name: string;
  description: string;
  category: string;
  path: string;
  updatedAt: string;
}

function parseFrontmatter(raw: string): { name?: string; description?: string; body: string } {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
  if (!m) return { body: raw };
  const meta: Record<string, string> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { name: meta.name, description: meta.description, body: raw.slice(m[1][0] ? m[0].length : m[0].length) };
}

export async function listSkills(): Promise<SkillMeta[]> {
  const out: SkillMeta[] = [];
  let categories: string[];
  try {
    categories = await fs.readdir(SKILLS_ROOT);
  } catch {
    return out;
  }
  for (const category of categories) {
    if (category.startsWith(".")) continue;
    const catDir = path.join(SKILLS_ROOT, category);
    let names: string[];
    try {
      names = await fs.readdir(catDir);
    } catch {
      continue;
    }
    for (const name of names) {
      const file = path.join(catDir, name, "SKILL.md");
      let raw: string;
      try {
        raw = await fs.readFile(file, "utf-8");
      } catch {
        continue;
      }
      const { name: skillName, description } = parseFrontmatter(raw);
      const stat = await fs.stat(file).catch(() => null);
      out.push({
        name: skillName ?? name,
        description: description ?? "",
        category,
        path: file,
        updatedAt: stat ? stat.mtime.toISOString() : "",
      });
    }
  }
  return out.sort((a, b) => a.name.localeCompare(b.name));
}

function toMarkdown(name: string, description: string, body: string): string {
  const cleanBody = body.trim();
  return `---
name: ${name}
description: ${description}
---

${cleanBody}
`;
}

export async function createSkill(input: {
  name: string;
  category: string;
  description: string;
  content: string;
}): Promise<SkillMeta> {
  const name = input.name.trim().toLowerCase();
  const category = (input.category.trim().toLowerCase() || "learned");
  const description = input.description.trim().slice(0, MAX_DESCRIPTION);
  if (!NAME_RE.test(name)) throw new Error(`Invalid skill name "${name}". Use lowercase letters, digits, dots, dashes or underscores.`);
  if (!description) throw new Error("A description is required.");
  const content = input.content.trim();
  if (!content) throw new Error("Skill content is required.");
  if (content.length > MAX_CONTENT) throw new Error("Skill content too large.");

  const dir = path.join(SKILLS_ROOT, category, name);
  await fs.mkdir(dir, { recursive: true });
  const file = path.join(dir, "SKILL.md");
  await fs.writeFile(file, toMarkdown(name, description, content), "utf-8");
  return { name, description, category, path: file, updatedAt: new Date().toISOString() };
}

export async function patchSkill(input: {
  name: string;
  oldString: string;
  newString: string;
}): Promise<SkillMeta> {
  const found = (await listSkills()).find((s) => s.name === input.name);
  if (!found) throw new Error(`Skill "${input.name}" not found.`);
  let raw = await fs.readFile(found.path, "utf-8");
  if (!raw.includes(input.oldString)) throw new Error("old_string not found in skill.");
  raw = raw.replace(input.oldString, input.newString);
  await fs.writeFile(found.path, raw, "utf-8");
  return { ...found, updatedAt: new Date().toISOString() };
}

export async function deleteSkill(name: string): Promise<{ ok: boolean }> {
  const found = (await listSkills()).find((s) => s.name === name);
  if (!found) throw new Error(`Skill "${name}" not found.`);
  await fs.rm(path.dirname(found.path), { recursive: true, force: true });
  return { ok: true };
}
