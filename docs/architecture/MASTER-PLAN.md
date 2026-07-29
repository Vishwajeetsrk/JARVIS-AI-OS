# Master Plan — Vishwajeet's AI Operating System

## Reality check first, because it matters more than the excitement

The two documents you shared both arrive at the same honest conclusion, and it's worth stating plainly before anything else: **a 40–60 agent "AI company" is a multi-year, multi-person engineering program, not a weekend build.** The second document even estimates 2,000–5,000+ pages of documentation for the full vision. That's not a reason to abandon the idea — it's a reason to sequence it so you get real value in month 1, not just after month 18.

You already have a real head start that neither source document knew about: **the 12-agent Claude skill system already built in this conversation** (ceo-agent, team-agent, saas-builder, research-resources, design-agent, ai-agent, ml-agent, test-agent, legal-agent, seo-agent, devops-agent, memory-agent) plus its cross-project memory bank. That system *is* Phase 0 of this plan — a working "AI Executive Team" that runs today, for free, inside Claude. Everything below builds on it rather than replacing it.

The honest constraint to plan around: you are a solo BCA student running Learnify AI, AgencyOS, DreamSync, SkillForge, and client work in parallel, around an exam calendar. The single biggest risk to this whole plan is **building the AI-OS instead of shipping the products it's supposed to help you ship.** Every phase below is scoped so the AI-OS pays for its own build time by making Learnify AI (your flagship) ship faster, not slower.

## What "done" looks like at each horizon

| Horizon | What exists | What it replaces |
|---|---|---|
| **Now (Phase 0, already built)** | 12 Claude skills + markdown memory bank | Nothing — pure upgrade, zero cost, zero infra |
| **+4–6 weeks (Phase 1)** | A real orchestrator (Mastra) running outside chat, wired to n8n for business-ops automation | Manual repetition of the same prompts every session |
| **+2–3 months (Phase 2)** | OpenHands wired in for autonomous, test-gated coding tasks | You hand-typing every line of well-specified, boring code |
| **+6 months (Phase 3, evaluate-only)** | A decision, not a build: whether LangGraph/CrewAI/AG2/agno earn a place, based on real friction hit in Phase 1–2 | Guessing which framework you need before you've felt a real limit |
| **Ongoing, never "done"** | Memory bank growing, brand/component library growing, department prompts refined | Relearning the same mistakes across Learnify AI / AgencyOS / DreamSync / SkillForge |

## Phase 0 — already built (the skill layer)

12 SKILL.md files + a shared `~/.agent-memory/` folder. This is the "org chart" from both source documents, mapped onto Claude skills instead of a from-scratch multi-agent codebase:

- Executive: **ceo-agent** (priorities, go/no-go), **team-agent** (PM)
- Build: **saas-builder** (PRD→architecture→security→UI→deploy), **ai-agent**, **ml-agent**
- Creative: **design-agent** (brand, website/app, 3D, SVG, motion, effects, video, free tools)
- Quality & ops: **test-agent**, **devops-agent**
- Growth & compliance: **seo-agent**, **legal-agent**
- Research: **research-resources**
- Memory: **memory-agent** — the piece that makes the whole thing cumulative instead of stateless

This already covers Executive, Engineering-adjacent (via saas-builder/ai-agent/ml-agent), Design, QA, DevOps, SEO, Legal, and Research from the source org charts. What it does **not** yet do: run unattended (it needs you or Claude Code present to act), connect to business tools (email, CRM, invoicing) automatically, or execute long autonomous coding tasks without supervision. That's what Phases 1–2 add.

## Phase 1 — real orchestration + business-ops automation (recommended first build)

**Orchestrator: Mastra** (`mastra-ai/mastra`). Chosen over LangGraph/CrewAI/AG2/agno for one deciding reason: it's **TypeScript**, and your entire stack (Next.js 15, Supabase, Vercel) already is too — zero context-switch, and Mastra deploys natively to Vercel/Netlify/Cloudflare. It gives you agents, typed tools, graph-based workflows, and evals as first-class primitives, and it's no longer pre-1.0 experimental (v1.0 shipped January 2026, YC-backed, real production users).

What it's for in Phase 1: turning the *prompted* ceo-agent → saas-builder → test-agent flow into something that can run as an actual scheduled/triggered service — e.g. a nightly job that checks all four projects' health, or a webhook that kicks off a research pass when a competitor's pricing page changes.

**Automation glue: n8n.** You already have hands-on experience with it (the Razorpay-to-Salesforce reconciliation automation). Use it for the boring, high-value connective tissue the org charts call "Finance," "Communication," and parts of "Sales/Support": invoice reminders, form-to-CRM syncs, notification routing — anything that's "when X happens, do Y" rather than something needing judgment. Self-host it free; don't rebuild what n8n already does well as custom code.

**Deliverable at end of Phase 1:** one real automated workflow running in production (pick the highest-value candidate — likely AgencyOS invoicing/reminders, since that's closest to revenue) plus Mastra scaffolding ready to add the next one.

## Phase 2 — autonomous coding for well-specified tasks

**Tool: OpenHands** (`OpenHands/OpenHands`, MIT, 80k+ stars, actively developed). Runs in a sandboxed Docker environment and can write code, run terminal commands, browse docs, and open pull requests end-to-end for a given task. The honest caveat from independent review, worth internalizing before relying on it: it's genuinely good at **well-specified, test-gated tasks**, and not a substitute for review on ambiguous or judgment-heavy work.

Use it for: implementing a clearly-specced feature from a saas-builder PRD, fixing a well-reproduced bug from test-agent's triage, or churning through repetitive migration work across Learnify AI / AgencyOS / DreamSync — always with test-agent's security checklist as the gate before merge, never as a bypass of it.

## Phase 3 — evaluate, don't default to

Only revisit these once Phase 1–2 friction actually justifies it, and pick based on the *specific* limit hit, not on novelty:

- **LangGraph** — if Mastra's workflow graphs become too limiting for genuinely complex conditional branching, LangGraph gives lower-level control (at the cost of more code and a Python/JS split from your stack).
- **CrewAI** — if you want the "named roles collaborating" pattern to be a runtime reality rather than a prompted metaphor, CrewAI is the most direct match to the org-chart mental model — but it's Python-first, a real context switch from Mastra/Next.js.
- **AG2** (`ag2ai/ag2`) — actively developed (v1.0 rewrite shipped 2026, MCP support added), good for conversation-driven multi-agent research/debate patterns specifically. Python-only.
- **agno** (`agno-agi/agno`) — the most "batteries-included" of the four: full AgentOS runtime, 100+ integrations, memory/knowledge built in, its own control-plane UI. Worth a serious look if you ever want a real internal dashboard rather than chat-only — but it's a bigger platform commitment, Python-based, and arguably more than a solo operation needs before revenue justifies it.
- **SuperAGI** (`TransformerOptimus/SuperAGI`) — **do not use.** Independent 2026 review confirms the project has stalled, the company has pivoted, and known security issues are unaddressed. Listed here only to close the loop on the repo you referenced, not as a recommendation.

## What stays permanently out of scope (per both source documents, and correctly so)

- Fully autonomous app-store publishing (requires human approval steps + your developer credentials by platform design)
- Fully autonomous client outreach/lead-gen at scale (anti-spam law + platform ToS constraints — automate the CRM/reminder side, keep outreach human-reviewed)
- Autonomous payment collection beyond what Razorpay's own APIs support under your account
- Legal documents shipped without your (or a lawyer's) review — legal-agent drafts, it never signs off alone
- A 40–60 agent build-it-all-at-once program — explicitly rejected in favor of the phased plan above

## Immediate next action

Pick **one** Phase 1 deliverable — the single automated workflow that would save the most real time this month — and scope it with ceo-agent before writing any Mastra/n8n code. See the BRD/PRD/TRD for the structured version of this plan.

## Note on further tool proposals

A third planning document proposed a larger "JARVIS OS" stack (Letta, Browser Use, LlamaIndex, Ollama, voice/vision tools, and a 50-agent org chart). See **TRD Section 9** for the verified, tool-by-tool verdict — the short version: almost all of it is either already covered by the 12 existing skills at a different granularity, or genuinely useful but premature (defer until a concrete need exists), with one low-cost exception (Browser Use) worth adding opportunistically in Phase 1. Any future "we should also add X" proposal should go through this same verify-before-adopt process rather than being taken at face value — frameworks in this space change fast enough that a 2024 (or even a January 2026) description can already be wrong by July.
