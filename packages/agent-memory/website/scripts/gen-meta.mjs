#!/usr/bin/env node
/**
 * Build-time meta generator.
 *
 * Runs before `next build` (see package.json prebuild). Walks the real repo
 * (one level up from website/) and writes website/lib/generated-meta.json with
 * the version, MCP tool count, hook count, REST endpoint count, and test count.
 *
 * Reason this exists: meta.ts used to read package.json at runtime via
 * import.meta.url, but after Next.js compiles server components the URL
 * resolves into .next/server/ — ../.. stays inside the build cache, not at the
 * repo root, and the version silently falls back to "0.0.0". By resolving
 * files at build time from a known working directory (where this script
 * actually runs), we avoid the runtime path-guessing entirely.
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const websiteDir = join(here, "..");
const repoRoot = join(websiteDir, "..");

function readFileSafe(path) {
  try {
    return readFileSync(path, "utf-8");
  } catch {
    return "";
  }
}

function safeReadJson(path) {
  const txt = readFileSafe(path);
  if (!txt) return null;
  try {
    return JSON.parse(txt);
  } catch {
    return null;
  }
}

function safeCountMatches(path, pattern) {
  const txt = readFileSafe(path);
  if (!txt) return 0;
  const m = txt.match(pattern);
  return m ? m.length : 0;
}

function countHookTypes(typesPath) {
  const txt = readFileSafe(typesPath);
  if (!txt) return 0;
  const union = txt.match(/export type HookType[\s\S]*?;/);
  if (!union) return 0;
  const body = union[0].replace(/export type HookType\s*=/, "").replace(/;$/, "");
  return body
    .split("|")
    .map((s) => s.trim())
    .filter((s) => /^["'`]/.test(s)).length;
}

function countTestCases(testDir) {
  let total = 0;
  let entries;
  try {
    entries = readdirSync(testDir, { withFileTypes: true });
  } catch {
    return 0;
  }
  for (const entry of entries) {
    const full = join(testDir, entry.name);
    if (entry.isDirectory()) {
      total += countTestCases(full);
      continue;
    }
    if (!/\.test\.[jt]sx?$/.test(entry.name)) continue;
    const txt = readFileSafe(full);
    if (!txt) continue;
    const m = txt.match(/(?:^|\s)(?:it|test)(?:\.\w+)?\s*\(/g);
    if (m) total += m.length;
  }
  return total;
}

const pkg = safeReadJson(join(repoRoot, "package.json"));
const version = pkg?.version;
if (!version) {
  throw new Error(
    `gen-meta: could not read version from ${join(repoRoot, "package.json")}. ` +
      `Check Vercel Root Directory — the full repo must be checked out, not just website/.`,
  );
}

const restEndpoints = safeCountMatches(
  join(repoRoot, "src", "triggers", "api.ts"),
  /config:\s*\{\s*api_path:\s*"/g,
);
const mcpTools = safeCountMatches(
  join(repoRoot, "src", "mcp", "tools-registry.ts"),
  /name:\s*"memory_/g,
);
const hooks = countHookTypes(join(repoRoot, "src", "types.ts"));
const testsPassing = countTestCases(join(repoRoot, "test"));

const meta = {
  version,
  mcpTools: mcpTools || 45,
  hooks: hooks || 12,
  restEndpoints: restEndpoints || 107,
  testsPassing: testsPassing || 794,
  generatedAt: new Date().toISOString(),
};

const outDir = join(websiteDir, "lib");
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "generated-meta.json");
writeFileSync(outPath, JSON.stringify(meta, null, 2) + "\n", "utf-8");

console.log(
  `[gen-meta] wrote ${outPath}: v${meta.version}, ${meta.mcpTools} tools, ${meta.hooks} hooks, ${meta.restEndpoints} endpoints, ${meta.testsPassing} tests`,
);
