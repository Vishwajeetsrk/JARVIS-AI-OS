# TRD — Technical Requirements Document
## Vishwajeet's AI Operating System (Agent Team + Orchestration Layer)

### 1. Architecture overview

```
┌─────────────────────────────────────────────────────────────────┐
│  REASONING / SKILL LAYER  (Phase 0 — done, runs inside Claude)   │
│  ceo-agent · team-agent · saas-builder · research-resources       │
│  design-agent · ai-agent · ml-agent · test-agent · legal-agent    │
│  seo-agent · devops-agent · memory-agent                         │
└───────────────────────────────┬───────────────────────────────────┘
                                 │ reads/writes
┌───────────────────────────────▼───────────────────────────────────┐
│  MEMORY LAYER  (Phase 0 — done, plain markdown, git-syncable)     │
│  ~/.agent-memory/global/{mistakes,decisions,pattern-library,      │
│  stack-notes}.md   +   <project>/.agent-memory/{brief,status}.md  │
└───────────────────────────────┬───────────────────────────────────┘
                                 │ invoked by
┌───────────────────────────────▼───────────────────────────────────┐
│  ORCHESTRATION LAYER  (Phase 1)                                   │
│  Mastra (TypeScript) — agents, typed tools, graph workflows,      │
│  evals; runs scheduled/triggered flows outside a live chat session │
└─────────┬───────────────────────────────────────────┬─────────────┘
          │                                           │
┌─────────▼─────────┐                       ┌─────────▼─────────┐
│ AUTOMATION LAYER   │                       │ EXECUTION LAYER    │
│ (Phase 1)          │                       │ (Phase 2)          │
│ n8n — business-ops │                       │ OpenHands — sandboxed│
│ workflows (invoices,│                      │ autonomous coding,  │
│ reminders, notifs)  │                      │ Docker-isolated,    │
│                     │                       │ test-gated by       │
│                     │                       │ test-agent           │
└─────────┬───────────┘                       └─────────┬─────────┘
          │                                              │
┌─────────▼──────────────────────────────────────────────▼─────────┐
│  MCP / TOOL CONNECT LAYER (already available where noted)         │
│  Figma · Canva · Webflow · Netlify · Vercel · Slack · Gmail ·      │
│  Google Drive/Calendar · Supabase · Airtable · ClickUp · Razorpay  │
└─────────────────────────────────────────────────────────────────┘
```

### 2. Tool selection — the 8 referenced repositories, evaluated

| Repo | What it is | Verdict for this system | Rationale |
|---|---|---|---|
| `mastra-ai/mastra` | TypeScript agent framework: agents, typed tools, graph workflows, RAG, evals; Vercel AI SDK model routing | **Adopt — Phase 1 core orchestrator** | Only TS-native option in the list; matches Next.js/Vercel stack exactly, zero context-switch, v1.0 shipped Jan 2026, YC-backed, deploys to Vercel/Netlify/Cloudflare natively |
| `n8n-io/n8n` | Visual workflow automation, huge integration library, self-hostable | **Adopt — Phase 1 automation glue** | Already used successfully (Razorpay reconciliation); best fit for "if X then Y" business-ops tasks that don't need agent reasoning |
| `OpenHands/OpenHands` | Sandboxed autonomous coding agent — writes code, runs terminal, opens PRs | **Adopt — Phase 2, supervised** | 80k+ stars, MIT, actively developed (2026); best for well-specified, test-gated tasks per independent review — not a replacement for test-agent's review |
| `langchain-ai/langgraph` | Low-level graph-based agent orchestration | **Evaluate later (Phase 3)** | Powerful but lower-level than Mastra for the same job; adopt only if Mastra's workflow graphs genuinely hit a ceiling |
| `crewAIInc/crewAI` | Role-based multi-agent "crews" | **Evaluate later (Phase 3)** | Closest conceptual match to the org-chart metaphor, but Python-first — real context switch from the TS stack; worth it only if the role-based runtime pattern earns its keep over Mastra's agents |
| `ag2ai/ag2` | Community-maintained AutoGen fork, conversation-driven multi-agent, MCP support | **Evaluate later (Phase 3)** | Actively developed (v1.0 rewrite 2026), good for conversation/debate-style multi-agent patterns specifically; Python-only |
| `agno-agi/agno` | Full "AgentOS" runtime — agents, memory, knowledge, 100+ integrations, own control-plane UI, deployable anywhere | **Evaluate later (Phase 3)** | Most complete platform of the four alternatives; genuinely strong if a real internal dashboard is ever wanted, but Python-based and a bigger platform commitment than a solo pre-revenue operation needs yet |
| `TransformerOptimus/SuperAGI` | Autonomous agent framework with GUI | **Do not adopt** | Confirmed stalled as of 2026 — company pivoted, known security vulnerabilities unaddressed, no active development. Included here only to close the loop on the reference, not as a live option |

### 3. Data & memory architecture

- **Phase 0 (current):** plain markdown files, human-readable, git-syncable, zero infra. Sufficient for the mistake/decision/pattern volume of a solo operation.
- **Phase 1 addition:** Mastra workflows read/write the same markdown files directly (no format migration needed) — Mastra's own memory primitives are used only for in-session agent state, not as a replacement for the cross-project memory bank.
- **Phase 3 trigger for a real database:** if/when the mistakes-log or pattern-library grows large enough that simple grep/read-through stops being fast enough to use in a pre-flight check (a concrete, testable threshold — not a guess), migrate to Postgres + a lightweight vector index (e.g. pgvector, since Supabase already provides this natively) rather than standing up a separate vector DB service.

### 4. Security & NFRs

- **Secrets:** every layer (Mastra, n8n, OpenHands) gets its own scoped, server-side-only credentials — never share one all-access key across the orchestrator and the automation layer. This is the same non-negotiable from saas-builder's security baseline, applied to the AI-OS's own infrastructure.
- **Rate limiting / cost control:** Mastra flows and any scheduled job must have an explicit usage cap (max runs/day, max tokens/run) — an unattended scheduled agent is exactly the failure mode that produces a surprise API bill.
- **Sandboxing:** OpenHands runs only in its documented Docker-sandboxed mode — never given direct unsandboxed access to production credentials or databases.
- **Review gate:** test-agent's security/QA checklist applies to code produced by OpenHands identically to code written by hand — no exception path for "the AI wrote it."
- **Free-tier limits:** n8n self-hosted, Mastra's free deploy tiers, and Supabase's free tier all have real caps — each gets a `stack-notes.md` entry with the actual limit before being relied upon for a production automation.

### 5. Testing strategy

- **Skill layer (Phase 0):** already validated — each SKILL.md passes structural validation; behavioral correctness is checked by using them on real projects and logging results to memory.
- **Orchestration layer (Phase 1):** Mastra's built-in evals used to check agent output quality before a flow is trusted to run unattended; a flow must pass its evals for at least one full manual run before being scheduled.
- **Automation layer (Phase 1):** each n8n workflow tested against both the happy path and a deliberately malformed trigger input before going live.
- **Execution layer (Phase 2):** every OpenHands-produced change goes through test-agent's full checklist (rate limiting, secrets, injection/XSS, and the specific feature's test plan) before merge — same bar as any human-written PR, no lighter touch.

### 6. Deployment plan

- Mastra deploys alongside existing products on the same Vercel account/team, isolated by project, following devops-agent's environment-promotion discipline (dev → staging → prod, even for solo work).
- n8n self-hosted (free tier viable at current scale); document the actual hosting choice and its limits in `stack-notes.md` once decided, rather than assuming a specific host now.
- OpenHands run locally or in a low-cost self-hosted container for Phase 2 — no need for its cloud/enterprise tier at this stage.

### 7. Risks (technical, complementing BRD's business risks)

| Risk | Mitigation |
|---|---|
| Agent-framework churn (this exact evaluation caught AG2's 2024→2026 rewrite and SuperAGI's 2026 stall) | Re-verify any Phase 3 tool's current maintenance status via live search before adopting — never assume framework state from training data, per this document's own research process |
| Mastra is comparatively young (v1.0 Jan 2026) vs. LangGraph/CrewAI's longer track record | Phase 1 scope is intentionally narrow (one orchestrated flow) so a framework swap, if ever needed, is cheap |
| Unattended scheduled agents silently misbehaving (cost spike, bad output repeated on a cron) | Usage caps + evals gate (Section 4–5) before anything runs unattended |
| OpenHands producing plausible-but-wrong code on ambiguous tasks | Scope Phase 2 tasks to well-specified, test-gated work only, per PRD FR-14/15 |

### 9. Addendum — evaluating the "JARVIS OS" proposal (Letta, Browser Use, LlamaIndex, Ollama, Whisper/Piper, vision, office/data tools, 50-agent org chart)

A third source document proposed a larger stack and a 50-agent org chart. Verified each new tool against current (2026) state before judging it — the same discipline this TRD already applies to the original 8 repos, since assuming a framework's status from training data is exactly the kind of mistake this project's memory system exists to prevent.

| Addition proposed | Current state (verified) | Verdict |
|---|---|---|
| **Letta** (long-term memory platform, formerly MemGPT) | Actively developed, 23k+ stars, Apache-2.0 core, self-hostable, TypeScript SDK available | **Legitimate Phase 3+ option** for the memory layer specifically — an alternative to the "Postgres + pgvector once the markdown log outgrows itself" trigger already in Section 3. Not needed until that trigger is actually hit. One caution: Letta Code's agents can rewrite their own prompts/skills/harness over time — treat that capability as opt-in and reviewed, consistent with this project's stance that no automation self-modifies without a human approval step. |
| **Browser Use** | Actively developed, 107k+ stars, MIT, installs directly as a Claude Code skill with zero extra infra | **Adopt opportunistically, low cost.** Unlike most additions here, this has near-zero integration cost — it's a skill install, not a new service. Genuinely useful for research-resources (real competitor/pricing page interaction beyond static search) and test-agent (cross-browser checks). Reasonable to add in Phase 1 rather than deferring to Phase 3. |
| **LlamaIndex** (RAG) | Mature, stable, well-established | **Defer — no adoption without a concrete need.** Only relevant once there's an actual knowledge base to query (e.g. Learnify AI course content search). Adding a RAG framework speculatively, before that need exists, repeats the exact over-scoping mistake this Master Plan already rejects. |
| **Firecrawl** | Active, free tier available | **Defer, revisit if research-resources needs deep site crawling** beyond what web search already covers — low priority. |
| **Ollama** (local models) | Stable, well-established | **Not needed now.** Local models trade cost/privacy for capability; Claude API usage is already the accepted cost model per the BRD. Revisit only if API cost becomes a real constraint. |
| **Whisper / Piper** (voice) | Stable | **Out of scope**, unchanged from the Master Plan's existing position — no voice interface until the text/chat interface is fully leveraged. |
| **Florence-2 / OpenCV** (vision) | Stable | **Out of scope** — no product in the current portfolio has a concrete vision-processing need. |
| **LibreOffice+Python, Pandas+DuckDB** (office/data) | Stable | **Defer** — relevant only if a specific need appears (e.g. AgencyOS invoice/analytics work); don't build the pipeline before the need is concrete. |
| **Qdrant, Redis** | Stable | Same status as noted in Section 3 — only needed alongside a real RAG/heavy-memory build, not before. |
| **Continue.dev, Aider** (coding agents) | Both actively maintained | **Skip — redundant.** Claude Code already fills this role; adding a second interactive coding assistant doesn't add capability, just maintenance surface. |
| **Daily self-improvement scheduler** (auto-find new tools/repos, propose upgrades, sandbox-test, ask approval) | N/A — proposed workflow, not a tool | **Sound idea, wrong priority order.** The proposed approval-gated design (never auto-install without human sign-off) is the right shape — but it's a meaningful engineering project on its own. The lightweight version of this already exists: periodically ask research-resources to re-verify the framework landscape (exactly what produced this addendum). Formalizing it into an unattended scheduled job is reasonable only after Phase 1–2 are stable, not before. |
| **50-agent org chart** | N/A | **Already covered — it's the same 12 skills at finer granularity, not a gap.** See mapping below. |

**Org-chart mapping (50 roles → 12 existing skills + Phase 1 automation), so nothing is mistaken for a real gap:**

- UI/UX/3D/Animation/Graphic Designer, Video Editor → **design-agent** (Sections 1–8 already cover all of these)
- CTO, Backend, Frontend, Android, iOS, AI Engineer, Data Scientist/Analyst, ML Engineer → **saas-builder, ai-agent, ml-agent**
- Security, QA, Testing → **test-agent**
- DevOps, Cloud Manager, Deployment Manager, Monitoring, GitHub Manager → **devops-agent**
- Product Manager, Project Manager → **ceo-agent, team-agent**
- SEO → **seo-agent**
- Legal Drafts → **legal-agent**
- Research, Documentation → **research-resources**
- Memory Manager, Knowledge Manager, Learning Manager → **memory-agent**
- Marketing, Sales, CRM, Customer Support, Email Manager, Finance, Invoice, Accounting, HR, Recruitment, Content Writer, Copywriter, Translator, Voice Assistant, Meeting Assistant, MCP Manager, API Manager, Personal Assistant → **not separate skills; these are Phase 1 n8n automation workflows** (business-ops glue) or ad-hoc Claude conversations — building each as its own "agent" would be 20+ more skill files for jobs that are fundamentally "when X happens, do Y," which is exactly n8n's job, not a new reasoning skill's.

The practical takeaway: the 50-agent list isn't a to-do list of missing capability — it's the same system, sliced 4x finer. Re-slicing it back to 50 files would add maintenance overhead without adding capability.

### 10. Open technical decisions (resolve during Phase 1 kickoff, not before)

- Exact n8n hosting target (Railway/Render/self-managed VPS) — decide against actual current free-tier terms at build time, not from this document's assumptions.
- Which single AgencyOS/client workflow is the Phase 1 automation target — a business decision (BRD/PRD) that determines the technical build, not the reverse.
