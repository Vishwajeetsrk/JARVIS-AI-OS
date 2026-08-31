# ADR-007: Adoption of packages/agent-memory as Canonical Memory Layer

## Status
**Adopted** (2026-08-31)

## Context
Multiple directories attempted to store memory, including mock state arrays, temporary scratch files, and fragmented SQLite/JSON tables. The workspace already contained a dedicated, enterprise-grade `packages/agent-memory` package.

## Decision
1. `packages/agent-memory` is established as the **sole canonical memory engine** for JARVIS AI OS.
2. Developers and agents are prohibited from creating competing memory engines (`src/lib/memory`, `packages/neural-memory`, etc.).
3. The canonical memory hierarchy is strictly enforced:
   - **Working Memory**: In-flight task scratchpad and conversational session state.
   - **Episodic Memory**: History of completed task executions, agent decisions, and tool outputs.
   - **Semantic Memory**: Supabase Vector / pgvector embeddings of project documentation and codebase context.
   - **Procedural Memory**: Reusable multi-step agent workflow recipes and tool sequence graphs.
4. `packages/agent-memory` connects directly to Supabase cloud PostgreSQL for persistence across sessions.

## Consequences
- **Positive**: Eliminates memory fragmentation and prevents conflicting agent recall states.
- **Positive**: Leverages existing robust TypeScript types and test suites in `packages/agent-memory`.
