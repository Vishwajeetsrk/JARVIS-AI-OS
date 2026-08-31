# ADR-001: Unified Task & Agent Runtime

## Status
**Adopted** (2026-08-31)

## Context
The JARVIS repository expanded rapidly with multiple feature directories (`src`, `src-tauri`, `desktop`, `cli`, `plugins`, `components`, etc.) and UI-level invocations. Multiple components were creating their own AI prompts, state variables, and task lifecycles independently (e.g. `AgentCockpit.tsx`, `MissionLog.tsx`, `VoicePipeline.tsx`). This risked fragmentation and duplicate sources of truth.

## Decision
1. All AI execution in JARVIS will proceed through a single canonical path:
   `AI Gateway -> Context Engine -> Task Runtime -> Orchestrator -> (Agents, Tools, Connectors) -> Policy Engine -> Event System`.
2. The 18 specialized agents will NOT be built as 18 separate apps or services. They are declarative `AgentProfiles` sharing a single execution engine, memory system, tool registry, and event bus.
3. Every UI surface (3D Orb, Mission Log, Agent Cockpit, Nia, Voice) is an observer/subscriber to the runtime event bus, not an owner of business logic.

## Consequences
- **Positive**: Single source of truth for task states, token tracking, error handling, and auditability.
- **Positive**: 18 agents can collaborate seamlessly without inter-process IPC overhead.
- **Trade-off**: Requires migrating existing component-level `fetch("/api/chat")` calls to dispatch through the canonical runtime.
