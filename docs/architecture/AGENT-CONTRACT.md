# AGENT CONTRACT — JARVIS AI OS V4

> **Status**: CANONICAL SPECIFICATION  
> **Package**: `lib/agents/`  
> **Applies to**: 18 Specialist Agent Personas, Agent Profiles, Orchestration

---

## 1. Unified Agent Profile Model

An agent is NOT an independent codebase or microservice. An agent is a declarative **Profile** executing on the shared JARVIS runtime:

```
Agent = Profile + Instructions + Skills + Allowed Tools + Model Policy + Memory Scope + Permissions
```

---

## 2. Type Definition

```typescript
export type ModelTier = "fast" | "reasoning" | "coding" | "local" | "creative";

export interface ModelPolicy {
  preferredModel: string;             // e.g. "gemini-2.5-flash", "claude-3-7-sonnet", "llama3:8b"
  fallbackModels: string[];
  maxTokens: number;
  temperature: number;
  systemPromptModifier?: string;
}

export interface AgentProfile {
  id: string;                         // e.g. "agent_developer"
  name: string;                       // e.g. "Developer Agent"
  role: string;                       // Short one-liner
  description: string;
  category: "engineering" | "operations" | "creative" | "management" | "research";
  avatar: string;                     // Icon or 3D asset ref
  color: string;                      // Hex code for UI constellation
  
  instructions: string;               // Core system prompt
  skills: string[];                   // Domain skill identifiers
  allowedTools: string[];             // Whitelist of Tool IDs
  modelPolicy: ModelPolicy;           // LLM routing rules
  memoryScope: ("global" | "project" | "workspace" | "user")[];
  requiredPermissions: string[];      // Permissions required to act
  canInitiateTasks: boolean;
  canApproveDelegation: boolean;
}
```

---

## 3. The 18 Canonical Agent Personas

All 18 agents share the same runtime, tool registry, memory engine, and event bus:

| # | Agent ID | Name | Core Domain | Key Tools | Default Model Tier |
|---|---|---|---|---|---|
| 1 | `agent_ceo` | Chief of Staff | Task orchestration, delegation, user alignment | task.create, task.delegate | `reasoning` |
| 2 | `agent_developer` | Developer | Full-stack coding, debugging, refactoring | fs.read, fs.write, git.diff | `coding` |
| 3 | `agent_engineering`| Engineering Architect | System design, ADR authoring, architecture review | fs.read, diagram.generate | `reasoning` |
| 4 | `agent_github` | GitHub Specialist | Branch management, PR reviews, CI monitoring | github.* | `coding` |
| 5 | `agent_ops` | Operations | Workflow automation, Salesforce sync, cron jobs | salesforce.*, cron.* | `fast` |
| 6 | `agent_crm` | CRM & Donor Mgr | Lead/Contact deduplication, record matching | salesforce.match_donor | `fast` |
| 7 | `agent_finance` | Finance | Donation reconciliation, payment tracking, stats | razorpay.get_payments | `fast` |
| 8 | `agent_sales` | Sales & Growth | Outreach copy, pipeline management | email.compose | `creative` |
| 9 | `agent_researcher` | Researcher | Web search, documentation synthesis, competitive intel | web.search, web.scrape | `reasoning` |
| 10| `agent_strategist` | Strategist | Product roadmapping, market positioning | memory.query | `reasoning` |
| 11| `agent_marketing` | Marketing | Content planning, social media campaigns | social.post_draft | `creative` |
| 12| `agent_editor` | Editor & Polish | Grammar, documentation quality, brand tone | text.analyze | `creative` |
| 13| `agent_design` | Design System | UI/UX tokens, Three.js shaders, Tailwind themes | ui.generate_token | `creative` |
| 14| `agent_memory` | Memory & Knowledge| Knowledge base updates, semantic recall | memory.upsert, memory.query | `fast` |
| 15| `agent_calendar` | Calendar | Schedule management, reminders, agenda prep | calendar.* | `fast` |
| 16| `agent_email` | Email Agent | Inbox triage, draft responses, approval requests | email.read, email.draft | `fast` |
| 17| `agent_voice` | Voice Specialist | Real-time speech understanding, TTS inflections | voice.synthesize | `local`/`fast` |
| 18| `agent_system` | System Monitor | Health checks, telemetry, desktop bridge, security | system.health, os.metrics | `fast` |

---

## 4. Execution Invariant

An agent does NOT call LLMs directly. It submits an `AgentPrompt` to the `Orchestrator`, which enriches it with the `ExecutionContext` and dispatches it through the `AI Gateway`. All side effects pass through the `ToolRegistry` and `PolicyEngine`.
