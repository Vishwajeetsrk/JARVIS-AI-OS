import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { homedir } from "node:os";

const WORKSPACE_STEERING = join(process.cwd(), ".jarvis", "steering");
const GLOBAL_STEERING = join(homedir(), ".jarvis", "steering");

export type SteeringInclusion = "always" | "fileMatch" | "manual" | "auto";

export interface SteeringFile {
  path: string;
  relativePath: string;
  scope: "workspace" | "global";
  inclusion: SteeringInclusion;
  fileMatchPattern?: string | string[];
  name: string;
  description?: string;
  body: string;
  lastModified: string;
}

function parseSteeringFile(filePath: string, scope: "workspace" | "global"): SteeringFile | null {
  if (!existsSync(filePath)) return null;

  const content = readFileSync(filePath, "utf-8");
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);

  let inclusion: SteeringInclusion = "always";
  let fileMatchPattern: string | string[] | undefined;
  let description: string | undefined;
  let body = content;

  if (match) {
    const frontmatter = match[1];
    body = match[2];

    const inclusionMatch = frontmatter.match(/inclusion:\s*(always|fileMatch|manual|auto)/);
    if (inclusionMatch) inclusion = inclusionMatch[1] as SteeringInclusion;

    const patternMatch = frontmatter.match(/fileMatchPattern:\s*"([^"]+)"/);
    if (patternMatch) fileMatchPattern = patternMatch[1];

    const descMatch = frontmatter.match(/description:\s*"([^"]+)"/);
    if (descMatch) description = descMatch[1];
  }

  const name = filePath.split(/[\\/]/).pop()?.replace(".md", "") || "";
  let lastModified = new Date().toISOString();
  try {
    lastModified = statSync(filePath).mtime.toISOString();
  } catch {}

  return {
    path: filePath,
    relativePath: relative(process.cwd(), filePath),
    scope,
    inclusion,
    fileMatchPattern,
    name,
    description,
    body,
    lastModified,
  };
}

export function loadAllSteering(): SteeringFile[] {
  const files: SteeringFile[] = [];

  if (existsSync(WORKSPACE_STEERING)) {
    const entries = readdirSync(WORKSPACE_STEERING).filter((f) => f.endsWith(".md"));
    for (const entry of entries) {
      const file = parseSteeringFile(join(WORKSPACE_STEERING, entry), "workspace");
      if (file) files.push(file);
    }
  }

  if (existsSync(GLOBAL_STEERING)) {
    const entries = readdirSync(GLOBAL_STEERING).filter((f) => f.endsWith(".md"));
    for (const entry of entries) {
      const file = parseSteeringFile(join(GLOBAL_STEERING, entry), "global");
      if (file) files.push(file);
    }
  }

  return files;
}

export function getSteeringForContext(filePath?: string): string {
  const allSteering = loadAllSteering();
  const sections: string[] = [];

  for (const steering of allSteering) {
    if (steering.inclusion === "always") {
      sections.push(`### ${steering.name}\n${steering.body}`);
      continue;
    }

    if (steering.inclusion === "fileMatch" && filePath && steering.fileMatchPattern) {
      const patterns = Array.isArray(steering.fileMatchPattern)
        ? steering.fileMatchPattern
        : [steering.fileMatchPattern];

      const matches = patterns.some((pattern) => {
        const regex = new RegExp(pattern.replace(/\*/g, ".*"));
        return regex.test(filePath);
      });

      if (matches) {
        sections.push(`### ${steering.name}\n${steering.body}`);
      }
    }
  }

  return sections.length > 0 ? `\n\n## Project Steering\n\n${sections.join("\n\n")}` : "";
}

export function createSteeringFile(
  name: string,
  inclusion: SteeringInclusion,
  content?: string,
): { success: boolean; error?: string; path?: string } {
  if (!existsSync(WORKSPACE_STEERING)) {
    const { mkdirSync } = require("node:fs");
    mkdirSync(WORKSPACE_STEERING, { recursive: true });
  }

  const filePath = join(WORKSPACE_STEERING, `${name}.md`);
  if (existsSync(filePath)) {
    return { success: false, error: `Steering file "${name}" already exists` };
  }

  const fileContent = content || `---\ninclusion: ${inclusion}\n---\n\n# ${name}\n\n[Add your guidance here]\n`;

  const { writeFileSync } = require("node:fs");
  writeFileSync(filePath, fileContent);

  return { success: true, path: filePath };
}

export function listSteeringFiles(): SteeringFile[] {
  return loadAllSteering();
}
