import { cpSync, readdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

for (const name of readdirSync(dist)) {
  const src = join(dist, name);
  const dest = join(root, name);
  cpSync(src, dest, { recursive: true, force: true });
}

rmSync(dist, { recursive: true, force: true });
