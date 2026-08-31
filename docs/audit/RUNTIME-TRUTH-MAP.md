# JARVIS V4 — Runtime Truth Map

**Document Version:** 4.0.0  
**Author:** Vishwajeet Srk & Open Source JARVIS AI Community  
**Status:** Canonical Source of Truth  
**Target Milestone:** JARVIS V4 Consolidation & Vertical Slice Execution  

---

## 1. Executive Summary & Architectural Axiom

JARVIS AI OS has evolved past the exploratory prototype phase into an ecosystem with existing high-grade subsystems: `packages/agent-memory`, 18 APEX core agents, 40+ skills, connectors, and full-stack UI engines.

This document serves as the **Runtime Truth Map** to eliminate duplicate implementations, clearly separate responsibilities, and enforce single canonical ownership across the entire system.

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                              JARVIS AI OS V4                                │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                               ┌───────▼────────┐
                               │   AI GATEWAY   │ (Unified Model Router)
                               └───────┬────────┘
                                       │
                               ┌───────▼────────┐
                               │  TASK RUNTIME  │ (ExecutionContext Orchestrator)
                               └───────┬────────┘
                                       │
                 ┌─────────────────────┼─────────────────────┐
                 ▼                     ▼                     ▼
          ┌─────────────┐       ┌─────────────┐       ┌─────────────┐
          │   AGENTS    │       │    TOOLS    │       │ CONNECTORS  │
          │ (Personas & │       │ (Executable │       │ (External   │
          │  Policies)  │       │ Operations) │       │ Adapters)   │
          └──────┬──────┘       └──────┬──────┘       └──────┬──────┘
                 └─────────────────────┼─────────────────────┘
                                       │
                               ┌───────▼────────┐
                               │ CANONICAL MEM  │ (packages/agent-memory)
                               └───────┬────────┘
                                       │
                               ┌───────▼────────┐
                               │ POLICY & GATE  │ (Level 6 Human-in-the-Loop)
                               └───────┬────────┘
                                       │
                               ┌───────▼────────┐
                               │  EVENT BUS &   │ (Canonical Event Dispatcher)
                               │  MISSION LOG   │
                               └────────────────┘
```

---

## 2. Canonical Classification Matrix

Every AI-related artifact in the repository is classified into exactly one canonical category:

| Class | Definition | Primary Location | Execution Mechanism |
|---|---|---|---|
| **JARVIS Runtime** | The core production engine that coordinates execution, context, routing, and approvals. | `app/api/`, `lib/runtime/` | Next.js Server / Edge Runtime |
| **Canonical Memory** | Unified working, episodic, semantic, and procedural memory layer. | `packages/agent-memory/`, Supabase PostgreSQL | `packages/agent-memory/src/` |
| **Agent Definitions** | System personas, capability bindings, prompt blueprints, and risk tiers. | `lib/agents/`, `docs/architecture/AGENTS.md` | Injected into ExecutionContext |
| **Skills** | Reusable knowledge packages, reasoning patterns, and workflow guides. | `skills/`, `.agents/skills/` | Loaded on-demand as context/prompts |
| **Tools** | Executable functions that perform computational operations. | `lib/tools/`, `cli/`, `desktop/` | Invoked with validated schemas |
| **Connectors** | External protocol and API adapters (GitHub, Supabase, Google, Stripe/Razorpay). | `lib/connectors/`, `components/ConnectorsManager.tsx` | Authenticated API Clients |
| **Project Agents** | Scoped agent personas specific to sub-projects (e.g. Talk Radio, Data Analyst). | `Projects/*/agent/AGENTS.md` | Scoped within project context only |

---

## 3. Subsystem Deep-Dive & Domain Ownership

### 3.1 AI Gateway & Model Router
- **Canonical Location:** `app/api/chat/route.ts`, `lib/ai/`
- **Current Implementations:** Multi-provider fallback router (Anthropic Claude 3.7 Sonnet, OpenAI GPT-4o, Google Gemini 2.5 Flash, Groq/Llama 3.3 70B, Ollama Local).
- **Consumers:** Interactive Chat HUD, Autonomous Agent Dispatcher, Video Script Generator, Mission Log Auto-Executor.
- **Database Tables:** `chat_messages`, `agent_executions`, `token_attribution`.
- **Environment Variables:** `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `GEMINI_API_KEY`, `GROQ_API_KEY`.
- **Decision:** **CANONICAL.** Unify all AI requests through this single gateway; reject ad-hoc client-side LLM calls.

---

### 3.2 Memory Layer
- **Canonical Location:** `packages/agent-memory/` + Supabase PostgreSQL
- **Inventory Findings:** `packages/agent-memory` is a complete TypeScript package containing:
  - Working Memory (scratchpad, execution graph, session state)
  - Episodic Memory (past agent executions, mission outcomes)
  - Semantic Memory (vector embeddings, document indexes)
  - Procedural Memory (reusable workflow graph recipes)
- **Duplicate Implementations Identified:** Local JSON cache files in `data/`, in-memory mock states in UI components.
- **Decision:** **ADOPT `packages/agent-memory` as CANONICAL.** Do not build new memory packages. Connect `packages/agent-memory` directly to Supabase cloud tables.

---

### 3.3 Agent Roster & Orchestration
- **Canonical Location:** `lib/agents/`, `docs/architecture/AGENTS.md`
- **18 Core APEX Agents:**
  1. Chief of Staff (Autonomous Orchestrator)
  2. Memory Agent (Knowledge & Memory Vault)
  3. Strategist (System Architect)
  4. Researcher (Deep Web & Analysis)
  5. Finance (Usage & Token Attribution)
  6. Editor (Quality Assurance & Safety Gate)
  7. Sales (Prospecting & Pipeline)
  8. Marketing (Content & Social Strategy)
  9. Ops (DevOps, CI/CD & Cloud)
  10. Social (Developer Evangelism)
  11. Engineering (Full-Stack Architecture)
  12. Design (UI/UX & Creative Technology)
  13. Developer (Autonomous Code Refactoring & Tests)
  14. Analytics (Telemetry & Performance)
  15. CRM (Client State & Pipeline Store)
  16. Calendar (Scheduling & Task Sense)
  17. Email (Inbox Dispatcher)
  18. Drive (Document & Artifact Vault)
- **Decision:** Agents are **configurations and policy sets** executed by the Task Runtime, NOT independent detached applications.

---

### 3.4 Project-Scoped Agents Boundary
- **Locations:** `Projects/ai-talk-radio/agent/AGENTS.md`, `Projects/ai-data-analyst/agent/AGENTS.md`
- **Boundary Decision:** These instructions define project-specific behavior when JARVIS operates inside those repositories. They do NOT poll or run as global daemon processes.
- **Rule:** `Global JARVIS Agent + Project Instructions + Project Context = Scoped Execution`.

---

### 3.5 Skills vs. Tools Distinction
- **Skills (`skills/`, `.agents/skills/`):** Reusable knowledge documentation (e.g. `aceternity-ui`, `fastapi-expert`, `react-expert`, `devops-engineer`, `security-reviewer`). Injected into LLM context when relevant.
- **Tools (`lib/tools/`, Native CLI):** Executable TypeScript / Python functions with strict JSON schemas, input validation, and execution sandboxes (e.g. `git.commit`, `fs.writeFile`, `http.request`, `db.query`).

---

### 3.6 Connectors & Cloud Integrations
- **Canonical Location:** `lib/connectors/`, `components/ConnectorsManager.tsx`, `app/api/connectors/route.ts`
- **Supported Integrations:**
  - **GitHub:** Repositories, PRs, Issues, Actions (`GITHUB_TOKEN`)
  - **Supabase:** PostgreSQL database, Auth, RLS, Storage (`NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`)
  - **Google Cloud / Workspace:** BigQuery, Drive, Calendar, Gmail
  - **Salesforce & Razorpay:** Enterprise CRM & Payment reconciliation
  - **Social Media:** YouTube Data API, Twitter API, LinkedIn, Instagram Graph API
- **Decision:** All credentials stored in Supabase with RLS; UI managed via `ConnectorsManager.tsx`.

---

### 3.7 UI & Visual Interaction Modes
- **Primary Dashboard:** `app/page.tsx`
  - **Mode 1: APEX 3D Orb & Agent Constellation** (`components/ApexWorld.tsx`)
  - **Mode 2: Workspace Console** (`components/ProjectLauncher.tsx`)
  - **Mode 3: UI Component Studio (50+ Components)** (`components/UIComponentStudio.tsx`)
  - **Mode 4: Video & Content Studio** (`components/ContentStudio.tsx`)
  - **Mode 5: Client Finder & Agency OS** (`components/ClientAgencyOS.tsx`)
  - **Mode 6: Career OS 2.0** (`components/CareerOS.tsx`)
  - **Mode 7: Mission Log & Live Telemetry** (`components/MissionLog.tsx`)

---

## 4. Subsystem Audit Summary Matrix

| Subsystem | Exists | Production Imported | Execution Ready | Action Required |
|---|:---:|:---:|:---:|---|
| **AI Gateway** | ✅ | ✅ | ✅ | Standardize error telemetry and fallback chaining |
| **Agent Memory** (`packages/agent-memory`) | ✅ | ✅ | ✅ | Bind directly to Supabase vector store tables |
| **18 APEX Agents** | ✅ | ✅ | ✅ | Enforce Level 6 approval gates before write actions |
| **Managed Agent Skills** | ✅ | ✅ | ✅ | Keep indexed in `.agents/skills/` |
| **UI Component Studio** | ✅ | ✅ | ✅ | Live with 50+ components, code copy & skill export |
| **Video & Content Studio** | ✅ | ✅ | ✅ | Live with canvas renderer & multi-platform metadata |
| **Connectors Manager** | ✅ | ✅ | ✅ | Live with encrypted key management & test ping |
| **Mission Log** | ✅ | ✅ | ✅ | Live with real-time Supabase persistence |
| **Product Metadata** | ⚠️ | ⚠️ | ⚠️ | Sync `package.json` with `PRODUCT-METADATA.md` (P0) |
