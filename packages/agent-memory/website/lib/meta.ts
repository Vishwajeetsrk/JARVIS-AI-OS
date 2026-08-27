import "server-only";
import generated from "./generated-meta.json" with { type: "json" };

export interface ProjectMeta {
  version: string;
  mcpTools: number;
  hooks: number;
  restEndpoints: number;
  testsPassing: number;
}

// Values are baked at build time by scripts/gen-meta.mjs (see package.json
// prebuild). Runtime file lookups via import.meta.url break after Next.js
// moves server components into .next/server/ — `../..` from there stays
// inside the build cache, not at the repo root, and version silently falls
// back to "0.0.0". Static JSON import sidesteps that entirely.
export function getProjectMeta(): ProjectMeta {
  return {
    version: generated.version,
    mcpTools: generated.mcpTools,
    hooks: generated.hooks,
    restEndpoints: generated.restEndpoints,
    testsPassing: generated.testsPassing,
  };
}
