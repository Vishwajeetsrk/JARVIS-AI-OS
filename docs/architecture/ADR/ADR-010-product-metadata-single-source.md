# ADR-010: Product & Version Metadata Source of Truth

## Status
**Adopted** (2026-08-31)

## Context
Inconsistencies occurred where `package.json` had outdated naming while `README.md` and UI badges had v4.0.0.

## Decision
1. `docs/architecture/PRODUCT-METADATA.md` is designated as the **single source of truth** for all product naming, versions, and release tiers.
2. All packages (`package.json`, `desktop/`, `cli/`, `packages/agent-memory/`), UI badges, and GitHub metadata must synchronize with `PRODUCT-METADATA.md`:
   - Product Name: `JARVIS AI OS`
   - Platform Name: `NEXORA APEX`
   - Package Name: `jarvis-ai-os`
   - Version: `4.0.0`
   - Architecture: `4.0.0`
   - Release Tier: `Production / Stable`

## Consequences
- **Positive**: Eliminates version drift across documentation, UI headers, and build artifacts.
