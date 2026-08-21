// Add the Aceternity UI design system to learnify-designs.json and enrich the
// aceternity-catalog.json "learn & remember" artifact with tokens + motion inventory.
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const designsPath = join(ROOT, "src", "lib", "learnify-designs.json");
const catalogPath = join(ROOT, "src", "lib", "aceternity-catalog.json");

const designs = JSON.parse(readFileSync(designsPath, "utf8").replace(/^﻿/, ""));

const entry = {
  id: "aceternity-ui",
  name: "Aceternity UI",
  category: "Animation-First Marketing & SaaS",
  theme: "dark",
  colors: {
    background: "#09090b",
    foreground: "#fafafa",
    card: "#0a0a0b",
    primary: "#fafafa",
    secondary: "#27272a",
    muted: "#a1a1aa",
    accent: "#27272a",
    border: "#27272a",
  },
  fonts: ["Inter", "Geist Mono", "Laila"],
  components: [
    "hero",
    "navbar",
    "bento-grid",
    "marquee",
    "card-hover",
    "spotlight",
    "aurora-background",
    "meteor",
    "grid-background",
    "glowing-button",
    "testimonials",
    "pricing-table",
    "feature-section",
    "cta",
    "footer",
  ],
  pattern:
    "Dark neutral-zinc base (#09090b) with high-contrast white type and vivid gradient accents (blue #0099ff, purple #59168b, teal #00bb7f, amber #f99c00, pink #ff6568). Signature motion: aurora, meteor shower, spotlight, marquee, animated grid, shimmer, radar-spin, cell-ripple. shadcn-style CSS tokens + Tailwind utilities; class='dark' dual-theme.",
  tailwind: { radius: "8px", darkMode: "class" },
  sourceFiles: [
    "aceternity-catalog.json",
    "public/preset-sites/aceternity-*/index.html",
  ],
};

const exists = designs.designSystems.some((d) => d.id === "aceternity-ui");
if (!exists) designs.designSystems.push(entry);
designs.meta = designs.meta || {};
designs.meta.lastExtended = new Date().toISOString();
writeFileSync(designsPath, JSON.stringify(designs, null, 2) + "\n", "utf8");
console.log(`learnify-designs.json: added aceternity-ui (total ${designs.designSystems.length} systems).`);

// ---- Enrich the learn & remember catalog ----
const catalog = JSON.parse(readFileSync(catalogPath, "utf8"));
catalog.designSystemId = "aceternity-ui";
catalog.designTokens = {
  theme: "dark (dual via class='dark')",
  base: { background: "#09090b", surface: "#0a0a0b", foreground: "#fafafa", muted: "#a1a1aa", border: "#27272a" },
  accents: { blue: "#0099ff", purple: "#59168b", teal: "#00bb7f", amber: "#f99c00", pink: "#ff6568" },
  fonts: ["Inter", "Geist Mono", "Laila"],
  radius: "8px",
  shadows: "soft glows + blurred gradient blobs",
};
catalog.animationInventory = {
  animateTokens: ["aurora", "cell-ripple", "fifth", "first", "fourth", "meteor-effect", "move", "ping", "pulse", "scroll", "second", "spin", "spotlight", "third"],
  keyframes: ["aurora", "meteor", "moveInCircle", "moveVertical", "moveHorizontal", "spotlight", "marquee", "shimmer", "radar-spin", "cell-ripple", "ping", "pulse", "spin", "fade-in", "accordion-down", "swipe-out-*"],
  signatureComponents: [
    "Aurora background (animated multi-color blurred blobs)",
    "Meteor shower (diagonal falling streaks)",
    "Spotlight (radial light following pointer)",
    "Animated grid background (cell-ripple on hover)",
    "Marquee (infinite horizontal scroll of logos/cards)",
    "Bento grid (asymmetric feature layout)",
    "Glowing / gradient-border buttons",
    "3D tilt cards, card hover lift + spotlight",
    "Sticky navbar with blur + active section highlight",
    "Scroll-reveal sections (fade/slide in)",
  ],
};
catalog.learnedAt = new Date().toISOString();
writeFileSync(catalogPath, JSON.stringify(catalog, null, 2) + "\n", "utf8");
console.log(`aceternity-catalog.json enriched with tokens + animation inventory.`);
