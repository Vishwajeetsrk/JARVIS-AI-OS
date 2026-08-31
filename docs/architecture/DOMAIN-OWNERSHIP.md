# DOMAIN OWNERSHIP MAP — JARVIS AI OS V4

> Every subsystem must have exactly ONE owner domain. This file is the source of truth.

---

## Frontend Domain

**Owner**: `app/` + `components/`
**Consumers**: End user (browser)

| File | Responsibility | Status |
|---|---|---|
| `app/page.tsx` | Root page — composes all surfaces | 🟢 Canonical |
| `app/layout.tsx` | Global layout + metadata | 🟢 Canonical |
| `app/globals.css` | Global design tokens + z-index hierarchy | 🟢 Canonical |
| `components/AgentCockpit.tsx` | Agent conversation UI surface | 🟠 Needs runtime binding |
| `components/ApexCore3D.jsx` | 3D particle orb visual layer | 🟢 Keep stable |
| `components/ApexWorld.tsx` | Three.js canvas compositor | 🟢 Keep stable |
| `components/ReasoningWeb.jsx` | Reasoning constellation graph | 🟠 Needs event subscription |
| `components/MissionLog.tsx` | Task/mission tracking UI | 🟠 Needs Task Runtime binding |
| `components/VoicePipeline.tsx` | Voice input/output surface | 🟠 Needs event bus connection |
| `components/GithubProjectsPanel.tsx` | GitHub repo viewer | 🟠 Needs GitHub Connector binding |
| `components/GrowthCenter.tsx` | Learning / growth dashboard | 🟢 UI only — OK |
| `components/CyberResume.tsx` | Resume / credentials viewer | 🟢 UI only — OK |
| `components/WorkspaceProjectsPanel.tsx` | Project management CRUD | 🟢 UI only — OK |

---

## AI Gateway Domain

**Owner**: `app/api/chat/` → `lib/gateway/`
**Consumers**: Task Runtime, Agent Cockpit

Responsible for:
- Routing AI requests to correct provider (Gemini, Groq, OpenRouter)
- Applying rate limits + cost tracking
- Streaming responses back to caller
- Provider fallback chain

Current state: Multiple ad-hoc API calls scattered in components.
Target state: Single `GatewayClient` class in `lib/gateway/`.

---

## Context Engine Domain

**Owner**: `lib/context/` (TO BE CREATED)
**Consumers**: Task Runtime, AI Gateway, Agents

Responsible for:
- Building `ExecutionContext` for every request
- Resolving active project / repository / file / selection
- Injecting relevant memory into context
- Scoping permissions based on agent + action

---

## Task Runtime Domain

**Owner**: `lib/runtime/` (TO BE CREATED)
**Consumers**: Orchestrator, Mission Log UI, Event System

Responsible for:
- Creating and managing `Task` objects
- Tracking `TaskRun` → `TaskStep` lifecycle
- Persisting task state to Supabase
- Emitting canonical task events

---

## Agent Domain

**Owner**: `lib/agents/` (TO BE CREATED from existing `AgentCockpit.tsx` logic)
**Consumers**: Orchestrator

Responsible for:
- Storing 18 agent profiles (not implementations, just profiles)
- Selecting agent(s) for a given task
- Agent versioning

Current 18 agents (profiles only):
Finance | Sales | CRM | Operations | Developer | Marketing |
Chief of Staff | Researcher | Strategist | Editor | Memory |
Design | Calendar | Email | Engineering | GitHub | Voice | System

---

## Tool Registry Domain

**Owner**: `lib/tools/` (TO BE CREATED)
**Consumers**: Agents (via Orchestrator), Policy Engine

Every tool must conform to:
```typescript
interface Tool {
  id: string
  name: string
  description: string
  inputSchema: JSONSchema
  outputSchema: JSONSchema
  permissions: string[]
  riskLevel: "low" | "medium" | "high" | "critical"
  timeout: number
  executor: (input: unknown, ctx: ExecutionContext) => Promise<unknown>
}
```

Existing tools to migrate into registry:
- Web search
- GitHub read/write
- File system read
- Supabase query
- Calendar read/write
- Email compose/send
- Salesforce data loader
- Code execution (sandboxed)
- Voice synthesis

---

## Connector Registry Domain

**Owner**: `lib/connectors/` (partial — expand from existing)
**Consumers**: Tools, Agents

| Connector | Status | Notes |
|---|---|---|
| GitHub | 🟠 Partial | `GithubProjectsPanel.tsx` reads directly — needs abstraction |
| Salesforce | 🟠 Partial | Referenced in WORKSPACE_AUDIT |
| Supabase | 🟢 Active | Core database connector |
| Google (Calendar/Gmail) | 🔴 Planned | Not implemented |
| Razorpay | 🟠 Office workflow | Referenced in reconciliation module |
| OpenRouter/Groq | 🟠 Active | Used in AgentCockpit — needs gateway |

---

## Memory Domain

**Owner**: `lib/memory/` → Supabase `memories` table
**Consumers**: Context Engine, Agents

Memory types:
- Short-term: Active conversation window
- Long-term: Supabase `memories` table (pgvector)
- Project-scoped: Per-project notes and context
- Global: Cross-project learned patterns

---

## Event System Domain

**Owner**: `lib/events/` (TO BE CREATED)
**Consumers**: All UI surfaces, Task Runtime, Agents

All UI derives state from events. Canonical events defined in `EVENT-CONTRACT.md`.

---

## Database Domain

**Owner**: `supabase/` + `lib/db/`
**Consumers**: Task Runtime, Memory Engine, Connector Registry

14 migrations exist. See `DATABASE-CANONICAL-MAP.md` for full table ownership.

---

## Policy / Permission Domain

**Owner**: `lib/policy/` + Supabase RLS
**Consumers**: Tool Registry, Connector Registry, Approval Gate

Security principle: Preserve existing RLS across all 15 Supabase tables. Never bypass RLS in server-side code.

---

## Voice Domain

**Owner**: `components/VoicePipeline.tsx` → connects to Event System
**Consumers**: Nia / 3D layer, Agent Cockpit

Voice pipeline must:
- Emit `voice.listening` / `voice.processing` / `voice.speaking` events
- Route recognized speech through AI Gateway (not directly to model)
- Subscribe to agent responses to synthesize speech output

---

## 3D / Nia Domain

**Owner**: `components/ApexCore3D.jsx` + `Nia/`
**Consumers**: Event System (read-only subscriber)

Nia must NOT own AI logic. She subscribes to Runtime Events:
```
JARVIS thinking  → Nia shows "thinking" animation
JARVIS listening → Nia shows "listening" waveform
JARVIS executing → Nia shows "working" state
JARVIS speaking  → Nia shows "speaking" lip-sync
```

---

## Desktop Bridge Domain

**Owner**: `src-tauri/` (Rust — isolated)
**Consumers**: OS Bridge module only

Status: OPTIONAL. Web PWA + BAT launcher currently provides full functionality.
Do NOT rewrite Tauri. Keep it isolated and stable.
