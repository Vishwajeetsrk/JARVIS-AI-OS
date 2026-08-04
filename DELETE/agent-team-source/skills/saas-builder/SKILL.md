---
name: saas-builder
description: The core build skill for taking a validated SaaS idea to a working V1 — PRD, architecture, database schema, UI design system selection, and deployment, following the Golden Flow (idea to UI to backend to orchestration to deploy) with security baked in throughout. Trigger this whenever the user wants to build, architect, or scaffold a SaaS product or app (Learnify AI, AgencyOS, DreamSync, SkillForge, or any new build), asks for a PRD, system architecture, database schema, or wants to pick a UI design system. Should generally run after ceo-agent has given a GO decision.
---

# SaaS Builder — Golden Flow

Idea → UI → Backend → Orchestration → Deploy. This skill owns the actual build, once ceo-agent has validated the idea and team-agent has sequenced the work.

## Memory protocol (always first)

Read `~/.agent-memory/global/mistakes-log.md` filtered to `architecture`, `security`, `api-design`, `deployment`, plus `stack-notes.md`, before proposing any stack or schema. Don't re-propose an approach that's already logged as a past mistake.

## Phase 1 — PRD

Short and concrete, not a novel:
- Problem, target user, niche (inherited from ceo-agent's Decision Brief — don't re-litigate here)
- Core user flows (3-7 max for V1)
- Explicit out-of-scope list — as important as what's in scope
- Success metric for V1 (one number, not a wishlist)

## Phase 2 — Architecture & schema

Default stack (override only with a logged reason in `decisions-log.md`): Next.js 15 App Router + TypeScript + Tailwind + Postgres (Supabase unless project needs dictate otherwise). See `stack-notes.md` for current standing preferences.

Schema design rules:
- Every table gets row-level security policy considered explicitly, not left as a TODO.
- Foreign keys and cascade behavior decided up front, not discovered via a bug.
- Avoid over-fetching by design: API/query shapes should match client needs, not just mirror tables — check this against `api-design` mistake-log entries.

## Phase 3 — Security baseline (non-negotiable, every build)

- Rate limiting on all public endpoints and auth flows (login spam prevention).
- No secrets in frontend code, ever — env vars, server-side only. Grep the client bundle for known secret prefixes before calling a build done.
- Input validation and sanitization on every input surface: SQL injection, XSS, command injection, unsafe file uploads.
- This baseline gets a real pass from test-agent before ship — saas-builder implements it, test-agent verifies it independently.

## Phase 4 — UI / design system

Pick the system that fits the product's positioning, don't default to one style out of habit:
- **Neo-Brutalism** — bold, high-contrast, playful edtech (Learnify AI mascot-driven UI)
- **Glassmorphism** — layered, modern SaaS dashboards
- **Fintech UI** — AgencyOS-style client/invoicing tools, trust-signaling
- **Acid Brutalism / Neon Velocity** — youth-facing, high-energy brand moments
- **Blueprint / DevTools UI** — technical/developer-facing tools
- **Claymorphism / Cinematic** — softer consumer products, landing pages

Pull component/animation inspiration from Vapi.ai, Aceternity UI, Magic UI, LottieFiles, Rive (see research-resources skill for the full free-resource list — don't re-derive that list here). Check with **design-agent** first for existing brand tokens/components before building new ones from scratch.

## Phase 5 — Orchestration & deploy

Follow the 2026 AI SaaS building system: Claude Code for execution, Google Stitch for UI generation, Antigravity for orchestration across the pipeline. Hand the actual deploy, CI/CD, and rollback plan to **devops-agent** rather than treating deploy as saas-builder's own last step — deploy path (Vercel/Netlify/etc.) and free-tier limits get logged to `stack-notes.md` there.

## Phase 6 — Legal & docs baseline

Every build ships with: privacy policy, terms of use, GDPR/DPDP compliance basics, and license clarity if any open-source components are used — hand this off explicitly to legal-agent rather than skipping it. README.md follows Vishwajeet's standard template (badges, star history, deployment instructions, license, personal links).

## Close-out

Post-flight memory log: any architecture/security/deployment decision worth remembering goes into `decisions-log.md` or `pattern-library.md`; any mistake caught (by test-agent or otherwise) goes into `mistakes-log.md` with a concrete prevention rule. Hand off to team-agent to update PROJECT_STATE.
