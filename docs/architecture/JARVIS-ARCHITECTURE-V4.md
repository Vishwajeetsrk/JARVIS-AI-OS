# JARVIS APEX-UI — Architecture V4 (Canonical)

> **Status**: LOCKED — Do not add features until this contract is stable.
> **Version**: 4.0.0 | **Owner**: Vishwajeet Srk | **Last Updated**: 2026-08-31

---

## 1. Product Identity (Source of Truth)

```
JARVIS_VERSION        = 4.0.0
PRODUCT_NAME          = JARVIS AI OS
PACKAGE_NAME          = jarvis-ai-os
ARCHITECTURE_VERSION  = V4-APEX
BUILD_CHANNEL         = stable
RUNTIME               = Next.js 15 / React 19 / Supabase
```

> ⚠️ package.json currently says "apex-ui v1.0.0". Update to "jarvis-ai-os v4.0.0" before next production release.

---

## 2. The Canonical Execution Path

Every user request flows through ONE path — no exceptions:

```
User Intent
    │
    ▼
┌──────────────┐
│  AI GATEWAY  │  ← Single entry point for all AI requests
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│  CONTEXT ENGINE  │  ← Enriches with ExecutionContext + Memory
└──────┬───────────┘
       │
       ▼
┌──────────────────────┐
│    TASK RUNTIME      │  ← Creates Task → TaskRun → TaskSteps
└──────┬───────────────┘
       │
       ▼
┌──────────────┐
│ ORCHESTRATOR │  ← Routes to correct agent(s)
└──────┬───────┘
       │
   ┌───┴────────────────┐
   ▼          ▼         ▼
AGENTS      TOOLS   CONNECTORS
   │          │         │
   └──────────┼─────────┘
              ▼
       POLICY ENGINE
              │
       APPROVAL GATE
              │
          EXECUTION
              │
       ┌──────▼──────┐
       │ EVENT SYSTEM │
       └──────┬───────┘
              │
   ┌──────────┼──────────┐
   ▼          ▼          ▼
Database   Realtime    Audit
```

---

## 3. System Layer Ownership

| Layer | Component | Status |
|---|---|---|
| Frontend Shell | Next.js / React 19 / Three.js (`app/`) | 🟢 Active |
| AI Gateway | Gemini / Groq / OpenRouter (`app/api/chat/`) | 🟠 Needs unification |
| Context Engine | ExecutionContext builder (`lib/context/`) | 🔴 Not yet created |
| Task Runtime | Task / TaskRun / TaskStep (`lib/runtime/`) | 🔴 Not yet created |
| Orchestrator | Agent routing logic (`lib/orchestrator/`) | 🔴 Not yet created |
| Agents | 18 specialist profiles (`lib/agents/`) | 🟠 Exists in components |
| Tools | Unified tool registry (`lib/tools/`) | 🔴 Not yet canonical |
| Connectors | GitHub, Salesforce, etc. (`lib/connectors/`) | 🟠 Partial |
| Policy Engine | Permission + approval (`lib/policy/`) | 🟠 Partial (Supabase RLS) |
| Event System | Canonical event bus (`lib/events/`) | 🔴 Not yet created |
| Memory Engine | Supabase + pgvector (`lib/memory/`) | 🟠 Partial |
| Database | Supabase 15 tables + RLS (`supabase/`) | 🟢 Active |
| Voice Pipeline | Web Speech API + TTS | 🟠 Needs runtime connection |
| 3D / Nia | Three.js particle orb + avatar | 🟢 Keep; connect to events |
| Desktop Bridge | Tauri Rust (`src-tauri/`) | 🟡 Optional |

---

## 4. The 18-Agent Architecture (Shared Runtime Model)

Agents are PROFILES, NOT separate applications. All 18 share one runtime.

```
JARVIS ORCHESTRATOR
    ┌──────────────┼───────────────┐
    ▼              ▼               ▼
Agent Profile  Agent Profile  Agent Profile
 (Finance)      (Developer)    (Researcher)
    └──────────────┼───────────────┘
                   ▼
            Shared Runtime
                   │
        ┌──────────┼───────────┐
        ▼          ▼           ▼
      Tools     Memory      Context
```

Each Agent Profile contains ONLY:
- id / name / description
- instructions (system prompt)
- skills[] — what it can do
- allowedTools[] — which tools it may invoke
- modelPolicy — which AI model(s) to use
- memoryScope — what memories it can read/write
- permissions[] — what actions it may approve

---

## 5. UI = Views of the Runtime (Not Independent Systems)

| UI Component | Must NOT | Must |
|---|---|---|
| AgentCockpit.tsx | Own AI execution logic | Call Task Runtime |
| ApexCore3D.jsx | Maintain own AI state | Subscribe to Runtime Events |
| MissionLog.tsx | Own its own task system | Read Task Runtime |
| GithubProjectsPanel.tsx | Own repository state model | Read GitHub Connector |
| VoicePipeline.tsx | Own AI decision-making | Emit/subscribe to Event Bus |
| ReasoningWeb.jsx | Own agent graph state | Subscribe to Runtime Events |

---

## 6. System Health Monitor

```typescript
type SystemHealth = {
  frontend:      "healthy" | "degraded" | "offline"
  database:      "healthy" | "degraded" | "offline"
  aiGateway:     "healthy" | "degraded" | "offline"
  agentRuntime:  "healthy" | "degraded" | "offline"
  github:        "connected" | "disconnected" | "error"
  realtime:      "healthy" | "degraded" | "offline"
  voice:         "healthy" | "degraded" | "offline"
  desktopBridge: "healthy" | "degraded" | "offline"
}
```

---

## 7. What is Frozen Until Architecture is Stable

| Action | Status |
|---|---|
| Add new bots / agents | FROZEN |
| Add new AI provider | FROZEN |
| Add new dashboard panels | FROZEN |
| New database tables without schema review | FROZEN |
| Migrate from Next.js | FROZEN |
| Fix bugs in existing components | ALLOWED |
| Create runtime contracts | PRIORITY |
| Map existing systems to canonical domains | PRIORITY |
