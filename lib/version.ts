/**
 * JARVIS AI OS — Canonical Release & Version Metadata
 *
 * Single Source of Truth for product metadata across UI, CLI, and documentation.
 */

export const JARVIS_METADATA = {
  PRODUCT_NAME: "JARVIS AI OS",
  PRODUCT_CODENAME: "APEX",
  JARVIS_VERSION: "4.0.0",
  ARCHITECTURE_VERSION: "V4-CANONICAL",
  BUILD_CHANNEL: "stable" as const,
  RELEASE_DATE: "2026-08-31",
  AUTHOR: "Vishwajeet Srk",
  HOMEPAGE: "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
  DESCRIPTION: "Autonomous AI Operating System with 3D WebGL Constellation, 18 Specialist Agents, and Multi-Tier Task Runtime.",
} as const;

export type JarvisMetadata = typeof JARVIS_METADATA;
