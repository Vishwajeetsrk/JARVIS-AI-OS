# ADR-005: Canonical ExecutionContext as Universal Request Envelope

## Status
**Adopted** (2026-08-31)

## Context
AI requests across different panels were passing ad-hoc parameters (sometimes just a raw text prompt, sometimes user IDs, sometimes missing project identifiers). This caused AI models to lose track of whether the user was working on Wardelio Mobile App, JARVIS AI OS, or the Salesforce sync task, resulting in hallucinations and lack of context awareness.

## Decision
1. Establish `ExecutionContext` (`EXECUTION-CONTEXT.md`) as the canonical envelope for all AI interactions.
2. Every request is enriched with:
   - User & Project context
   - Active repository, branch, and active file
   - Target agent persona
   - Pre-fetched relevant memories (vector semantic search)
   - Permitted tools whitelist
3. Components do not construct this context manually; they request it from `lib/context/buildContext.ts`.

## Consequences
- **Positive**: Consistent, intelligent AI responses that know exactly what repository, project, and tools are in scope.
- **Positive**: Zero fragmentation between chat, voice, CLI, and mission log.
- **Trade-off**: Requires context resolution latency (fetching memories and permissions) before sending prompts to LLM providers.
