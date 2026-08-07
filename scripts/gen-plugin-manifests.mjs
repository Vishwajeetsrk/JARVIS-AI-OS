// Generate minimal plugin.json manifests for official plugins lacking one.
import { readFileSync, readdirSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const src = "D:\\Team of Vishwajeet\\DELETE\\GitHub Repo\\claude-plugins-official\\claude-plugins-official-main\\plugins";
const dst = "D:\\Team of Vishwajeet\\plugins";

function cleanDesc(s) {
  return s
    .replace(/[*\[\]`]/g, "")
    .replace(/"/g, "'")
    .trim()
    .slice(0, 200);
}

const missing = readdirSync(src).filter((p) => {
  return !existsSync(join(src, p, ".claude-plugin", "plugin.json")) && existsSync(join(src, p, "README.md"));
});

for (const p of missing) {
  let desc = "";
  const rd = join(src, p, "README.md");
  if (existsSync(rd)) {
    const line = readFileSync(rd, "utf8")
      .split(/\r?\n/)
      .map((l) => l.trim())
      .find((l) => l && !l.startsWith("#") && !l.startsWith("```") && !l.startsWith(">"));
    if (line) desc = cleanDesc(line);
  }
  if (!desc) desc = `Official Claude Code plugin: ${p}`;
  mkdirSync(join(dst, p, ".claude-plugin"), { recursive: true });
  const json = `{\n  "name": "${p}",\n  "description": "${desc}",\n  "author": {\n    "name": "Anthropic"\n  }\n}\n`;
  writeFileSync(join(dst, p, ".claude-plugin", "plugin.json"), json, "utf8");
  if (existsSync(rd)) copyFileSync(rd, join(dst, p, "README.md"));
  console.log(`generated ${p}: ${desc}`);
}
