# PRD — Product Requirements Document
## Vishwajeet's AI Operating System (Agent Team + Orchestration Layer)

### 1. Product summary

A layered system: (1) the already-built 12-skill Claude "Agent Team" as the reasoning/prompt layer, (2) a real orchestrator (Mastra) that can run flows outside a live chat session, (3) n8n for business-ops automation, (4) OpenHands for supervised autonomous coding, all sharing one persistent memory bank. The "product" is Vishwajeet's own workflow — there is no external end-user of the AI-OS itself.

### 2. User (single persona)

**Vishwajeet** — solo founder/developer/designer/student. Needs: faster, more consistent delivery across parallel projects; less repeated manual work; a system that gets smarter about his specific stack and mistakes over time, not a generic assistant that starts fresh every session.

### 3. User stories

**Executive / orchestration**
- As Vishwajeet, I want to describe a new idea in one message and have it validated, prioritized against my current projects, and routed to the right build steps, so I don't have to manually re-derive the Golden Flow every time.
- As Vishwajeet, I want a scheduled/triggered flow (not just a live chat session) to check project health or run a research pass, so useful work happens even when I'm not actively prompting.

**Build**
- As Vishwajeet, I want a well-specified feature or bug to be implementable by an autonomous coding agent, gated by an independent security/QA check, so I spend my time on judgment calls instead of repetitive implementation.
- As Vishwajeet, I want the design system, brand tokens, and reusable components to be checked and reused automatically before anything new gets built from scratch.

**Operations**
- As Vishwajeet, I want invoicing reminders, form submissions, and routine notifications for AgencyOS/client work to run automatically, so I'm not manually tracking them.
- As Vishwajeet, I want a deploy to go through CI checks (security grep, tests) automatically before it reaches production, with a known rollback path if it breaks.

**Memory**
- As Vishwajeet, I want any mistake made on one project to be surfaced automatically the next time a similar situation comes up on any project, so I never debug the same class of bug twice.
- As Vishwajeet, I want to know, before adopting any new tool, whether it's actually still maintained and fits my stack — not have that assumed from stale training data.

### 4. Functional requirements

| ID | Requirement | Priority (MoSCoW) | Phase |
|---|---|---|---|
| FR-1 | ceo-agent validates and routes any new idea/request via Clarity Framework | Must | 0 (done) |
| FR-2 | team-agent maintains a per-project status file, resumable across sessions | Must | 0 (done) |
| FR-3 | saas-builder produces PRD→architecture→security→UI per the Golden Flow | Must | 0 (done) |
| FR-4 | design-agent covers brand, website/app, 3D, SVG, motion, effects, video, free tools | Must | 0 (done) |
| FR-5 | test-agent independently verifies security/QA before any ship | Must | 0 (done) |
| FR-6 | legal-agent produces baseline privacy/ToS/GDPR-DPDP drafts | Should | 0 (done) |
| FR-7 | seo-agent covers on-page/technical SEO | Should | 0 (done) |
| FR-8 | devops-agent owns CI/CD, deploy, rollback, monitoring | Must | 0 (done) |
| FR-9 | ai-agent/ml-agent own LLM and classical ML feature work respectively | Must | 0 (done) |
| FR-10 | memory-agent's shared mistakes/decisions/pattern/stack-notes logs, read before and written after every specialist task | Must | 0 (done) |
| FR-11 | Mastra orchestrator can execute the ceo-agent→saas-builder→test-agent flow as a service, not only inside a live chat | Must | 1 |
| FR-12 | At least one n8n workflow automates a real business-ops task (invoicing/reminders/notifications) unattended | Must | 1 |
| FR-13 | Scheduled/triggered flows (cron or webhook) can kick off a research-resources or devops-agent check without manual prompting | Should | 1 |
| FR-14 | OpenHands can autonomously implement a well-specified, test-gated task and open it for review | Must | 2 |
| FR-15 | test-agent's checklist is a hard gate on any OpenHands-produced change before merge | Must | 2 |
| FR-16 | A documented, current evaluation (not adoption) of LangGraph/CrewAI/AG2/agno exists before any Phase 3 tool is adopted | Should | 3 |

### 5. Non-functional requirements (summary — full detail in TRD)

- **Cost:** near-zero recurring cost outside existing infra + metered Claude API usage, with usage caps.
- **Security:** every build (including AI-OS automations themselves) follows the same security baseline as any product: no frontend secrets, rate limiting, input validation, independent test-agent review.
- **Resilience:** free-tier limitations must be known and logged before relied upon in production; devops-agent monitoring covers the AI-OS's own automations, not just product deploys.
- **Maintainability:** solo-developer-operable — no component of this system should require a team to keep running.

### 6. Out of scope (product-level)

Same list as BRD Section 5 — repeated here so product decisions don't quietly reintroduce it: no unattended app-store publishing, no unattended outreach/lead-gen at scale, no unattended payment collection beyond Razorpay's own APIs, no unreviewed legal documents, no full 40–60 agent build, no voice interface yet.

### 7. Roadmap (mirrors Master Plan)

- **Phase 0 — done.** 12 skills + memory bank.
- **Phase 1 — 4–6 weeks.** Mastra orchestrator + one n8n business-ops workflow live.
- **Phase 2 — 2–3 months.** OpenHands wired in for supervised autonomous coding.
- **Phase 3 — 6+ months, evaluate-only.** Revisit LangGraph/CrewAI/AG2/agno only against real friction; SuperAGI excluded (stalled project, unaddressed security issues as of 2026).

### 8. Acceptance criteria (Phase 1, the next concrete milestone)

- [ ] Mastra project scaffolded in the existing monorepo/stack, deployed to the same Vercel account as current products
- [ ] One end-to-end flow (ceo-agent validation → saas-builder task breakdown → test-agent checklist) runnable via a Mastra workflow, not only via manual chat prompting
- [ ] One n8n workflow live in production for a real AgencyOS or client business-ops task, running unattended for 30 days
- [ ] Both logged in `~/.agent-memory/global/decisions-log.md` and `pattern-library.md` per the memory-agent protocol
