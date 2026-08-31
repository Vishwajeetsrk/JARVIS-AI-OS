# ADR-008: Project-Specific Agent Instructions and Context Scoping

## Status
**Adopted** (2026-08-31)

## Context
Sub-projects in the repository (e.g., `Projects/ai-talk-radio/agent/AGENTS.md`, `Projects/ai-data-analyst/agent/AGENTS.md`) contain specialized agent personas. Treating every project agent as a global background daemon would cause resource saturation and unbounded event loops.

## Decision
1. Project-level `AGENTS.md` files are **project-scoped context extensions**, NOT global background processes.
2. When JARVIS operates on a specific project, the runtime executes:
   ```text
   Global JARVIS Agent + Project AGENTS.md Instructions + Project Context = Scoped Execution
   ```
3. Project agents do not maintain separate global task runners or memory tables; they operate within the primary ExecutionContext with bounded project permissions.

## Consequences
- **Positive**: High scalability across dozens of sub-projects without background memory footprint.
- **Positive**: Projects maintain domain-specific guidelines without polluting the global agent roster.
