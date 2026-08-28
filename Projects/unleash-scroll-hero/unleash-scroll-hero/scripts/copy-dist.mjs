import { cpSync, readdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(root, "..");
const dist = join(projectRoot, "dist");

for (const name of readdirSync(dist)) {
  const src = join(dist, name);
  const dest = join(projectRoot, name);
  cpSync(src, dest, { recursive: true, force: true });
}

rmSync(dist, { recursive: true, force: true });
