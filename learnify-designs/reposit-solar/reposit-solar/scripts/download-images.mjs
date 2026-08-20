import { cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(root, "..");
const imagesDir = join(projectRoot, "public", "images");

const IMAGES = [
  {
    filename: "hero-light.webp",
    url: "https://res.cloudinary.com/dsdhxhhqh/image/upload/f_webp/v1778837456/hf_20260515_092045_b654224c-4741-458f-8596-fa5bfeffabbc_1_oyfhme.jpg",
  },
  {
    filename: "hero-dark.webp",
    url: "https://res.cloudinary.com/dsdhxhhqh/image/upload/f_webp/v1778837447/hf_20260515_092102_24e30358-d694-4b70-8a56-a4f0887cf8ae_1_ry5dvs.jpg",
  },
];

mkdirSync(imagesDir, { recursive: true });

for (const { filename, url } of IMAGES) {
  const dest = join(imagesDir, filename);
  if (existsSync(dest)) {
    console.log(`✓ ${filename} (cached)`);
    continue;
  }
  console.log(`↓ ${filename}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${filename}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  console.log(`✓ ${filename}`);
}

console.log("Hero images ready.");
