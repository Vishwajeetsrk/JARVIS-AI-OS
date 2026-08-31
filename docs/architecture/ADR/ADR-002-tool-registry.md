# ADR-002: Canonical Tool Registry & Interface

## Status
**Adopted** (2026-08-31)

## Context
Various tools existed in disparate formats across the project (VIDA skills, local shell scripts, MCP tools, and React component helper functions). Without a standardized schema, validating inputs, enforcing timeouts, tracking execution duration, and preventing risky actions was brittle.

## Decision
1. Standardize all tools under the `Tool` interface (`TOOL-CONTRACT.md`), requiring:
   - Unique tool ID
   - JSON Schema parameters
   - Risk level categorization (`low`, `medium`, `high`, `critical`)
   - Explicit required permissions
   - Execution signature taking `(input, ctx: ExecutionContext)`
2. All tool calls must be registered into a central `ToolRegistry`.
3. High-risk and critical actions (e.g. destructive file edits, external email sends, code pushes) must halt execution for human approval before invocation.

## Consequences
- **Positive**: LLMs receive strictly formatted tool definitions.
- **Positive**: Safety gates are uniformly enforced across every interface (Web, CLI, Voice, Desktop).
- **Trade-off**: All new tools must define a formal parameter schema.
