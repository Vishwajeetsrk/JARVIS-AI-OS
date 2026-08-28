import { cpSync, existsSync, readdirSync, rmSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(projectRoot, "dist");

if (!existsSync(dist)) {
  console.error("dist/ not found — run vite build first");
  process.exit(1);
}

for (const name of readdirSync(dist)) {
  if (name === "index.html") {
    cpSync(join(dist, name), join(projectRoot, name));
    continue;
  }
  const dest = join(projectRoot, name);
  if (existsSync(dest)) {
    rmSync(dest, { recursive: true, force: true });
  }
  cpSync(join(dist, name), dest, { recursive: true });
}

console.log("Copied dist/ → preset root for static hosting");
