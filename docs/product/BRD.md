# BRD — Business Requirements Document
## Vishwajeet's AI Operating System (Agent Team + Orchestration Layer)

### 1. Purpose

Define the business justification, scope, stakeholders, and success measures for extending the existing 12-agent Claude skill system into a lightly-automated personal AI operating system that accelerates delivery across Learnify AI, AgencyOS, DreamSync, SkillForge, and freelance client work.

### 2. Business problem

- Solo founder + freelancer + full-time BCA student running 4 parallel products plus client work — time is the binding constraint, not ideas.
- Repeated work across projects: the same security checks, the same design-system decisions, the same legal boilerplate, the same SEO setup, re-derived from scratch each time.
- No persistent memory across projects until Phase 0 (already solved) — mistakes made on one project weren't systematically preventing repeats on the next.
- Manual, repetitive business-ops work (invoicing, reminders, status updates) that doesn't require judgment but currently takes real time.

### 3. Business objectives

| Objective | Measure |
|---|---|
| Reduce repeat mistakes across projects | Every logged mistake has a prevention rule; zero repeat incidents of the same logged category within 2 projects of the fix |
| Reduce time-to-V1 for new features/products | Track actual vs. Phase-0-baseline time for a comparable feature, target meaningful reduction by end of Phase 1 |
| Automate business-ops busywork | At least one real invoicing/reminder/status workflow running unattended by end of Phase 1 |
| Free up time for exam-priority weeks | AI-OS must be able to run scheduled/automated tasks without Vishwajeet actively present |
| Keep cost near zero | Stay on free/open-source tooling; the only recurring cost should be Claude API usage and any infra already in use (Vercel/Supabase free tiers) |

### 4. Stakeholders

- **Primary user & sole decision-maker:** Vishwajeet (founder, developer, designer, student)
- **Indirect stakeholders:** Learnify AI end users (students/educators), AgencyOS end users (Indian freelancers/agencies), Power Fitness Club and other freelance clients — none of whom interact with the AI-OS directly; they only feel its effects through faster, more consistent delivery.
- **No team, no investors, no board** at this stage — every "approval" step in this document is Vishwajeet approving his own ceo-agent's decision brief.

### 5. Scope

**In scope:**
- Extending the existing 12 Claude skills with a real orchestration layer (Phase 1: Mastra) and business-ops automation (Phase 1: n8n)
- Autonomous coding assistance for well-specified tasks (Phase 2: OpenHands)
- Continued growth of the shared memory bank, brand/component library, and free-resource directory
- Evaluation (not commitment) of LangGraph, CrewAI, AG2, agno for future phases

**Out of scope (see Master Plan for full reasoning):**
- Fully autonomous app-store publishing
- Fully autonomous outreach/lead generation at scale
- Autonomous payment collection beyond Razorpay's own account-level APIs
- Unreviewed legal document issuance
- A from-scratch 40–60 agent build (explicitly rejected as disproportionate to a solo operation's current stage)
- Voice interface (noted in source material as a nice-to-have; not justified until the text/chat interface is fully leveraged)

### 6. Assumptions

- Vishwajeet continues to have access to Claude (claude.ai / Claude Code) as the reasoning layer throughout.
- Free tiers of Vercel, Supabase, n8n (self-hosted), and Mastra's deploy targets remain viable at current usage levels; any free-tier limitation hit gets logged per the memory-agent protocol rather than silently worked around.
- BCA coursework and exam calendar take priority over AI-OS build time during exam weeks — the plan is sequenced assuming interrupted, not continuous, development time.

### 7. Constraints

- Solo developer — every phase must be completable by one person without a team.
- Budget ≈ ₹0 recurring beyond existing tool usage; Claude API usage is the one variable cost, and Phase 1/2 designs must include usage caps to avoid surprise cost (see TRD security/NFR section).
- Time — realistic weekly hours available for AI-OS build work must be estimated honestly by team-agent before each phase's task breakdown, accounting for BCA VI Semester obligations.

### 8. Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Building the AI-OS becomes a procrastination vector from shipping actual products | Medium-High | High | Every phase deliverable is tied to a concrete product outcome (e.g. Phase 1's automation target is a real AgencyOS workflow, not an abstract demo) |
| Over-scoping to the full 40–60 agent vision before revenue justifies it | Medium | High | Master Plan explicitly rejects this; ceo-agent's Clarity Framework gate applies to AI-OS features too, not just product features |
| Free-tier infra breaks silently in production | Medium | Medium | devops-agent + memory-agent's `stack-notes.md` protocol already covers this |
| OpenHands produces incorrect/unsafe code unsupervised | Medium | High | test-agent's independent review is mandatory before merge, no exceptions, per saas-builder/test-agent skill contracts |
| Framework churn (the AI agent framework space moves fast — AG2's 2024→2026 rewrite, SuperAGI's 2026 stall are both examples from this exact evaluation) | High | Medium | Phase 3 tools are evaluate-only, re-checked against current state before adoption, never assumed stable from memory |

### 9. Success criteria (go/no-go for each phase)

- **Phase 1 success:** one real automated business-ops workflow running unattended for 30 days without a manual rescue; Mastra orchestrator successfully runs the ceo-agent→saas-builder→test-agent flow outside a live chat session at least once.
- **Phase 2 success:** OpenHands has completed at least 3 well-specified, test-gated tasks with test-agent sign-off, with net time saved outweighing setup/review overhead.
- **Phase 3 gate:** do not start until Phase 1 and 2 are both stable in production for at least one full month.
