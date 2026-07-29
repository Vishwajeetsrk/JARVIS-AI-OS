# Project Overview — Vishwajeet AI Operating System (AI-OS)

## Executive Summary
Vishwajeet's **AI Operating System (AI-OS)** is a production-grade multi-agent software engineering engine. It operates through a dual-layer architecture combining:
1. **Layer 1 (Phase 0)**: In-conversation prompted reasoning layer powered by 13 specialized Claude skills and a persistent global memory bank (`~/.agent-memory/global/`).
2. **Layer 2 (Phase 1-2)**: Mastra TS background orchestration, automated n8n business webhooks, and sandboxed Docker container execution (OpenHands).

---

## 13 Specialized Agent Skills
1. **ceo-agent**: Ideas validation (Clarity Framework / FoundersDB), go/no-go calls, Golden Flow routing.
2. **team-agent**: Sequenced task plans, velocity tracking, handoff management.
3. **saas-builder**: Full-stack SaaS building (PRD, TRD, architecture, security, UI, orchestration).
4. **research-resources**: Competitor research, free UI/UX tools, SVG & 3D assets.
5. **test-agent**: Independent security & QA review (secrets, Zod sanitization, OWASP checklist).
6. **seo-agent**: Technical SEO, sitemap.xml, robots.txt, and JSON-LD schema generation.
7. **legal-agent**: Privacy policy, ToS, GDPR/DPDP, and license audits.
8. **ai-agent**: LLM / Claude API integration, prompt design, AI safety guardrails.
9. **ml-agent**: Classical ML, data pipelines, model evaluation metrics.
10. **design-agent**: Brand identity consistency, design token library, app shell design.
11. **devops-agent**: CI/CD pipelines, Vercel deployments, monitoring, rollback snapshots.
12. **workspace-agent**: File & folder housekeeping, safe 4-bucket classification, brand asset organization.
13. **memory-agent**: Shared persistent memory management (`global-mistakes-log.md`, `global-decisions-log.md`).

---

## Golden Flow Sequence
`ceo-agent` ──> `research-resources` ──> `team-agent` ──> `saas-builder` (with `ai-agent`/`ml-agent` & `design-agent`) ──> `test-agent` ──> `legal-agent` ──> `seo-agent` ──> `devops-agent` ──> `memory-agent`.

---

## Seven Standalone Prompts Catalog
- [prompts/CONNECT-PROMPT.md](file:///d:/Team%20of%20Vishwajeet/prompts/CONNECT-PROMPT.md)
- [prompts/DESIGN-CONNECT-PROMPT.md](file:///d:/Team%20of%20Vishwajeet/prompts/DESIGN-CONNECT-PROMPT.md)
- [prompts/ORGANIZE-PROMPT.md](file:///d:/Team%20of%20Vishwajeet/prompts/ORGANIZE-PROMPT.md)
- [prompts/INTERFACE-DESIGN-PROMPT.md](file:///d:/Team%20of%20Vishwajeet/prompts/INTERFACE-DESIGN-PROMPT.md)
- [prompts/MANAGE-JARVIS-PROMPT.md](file:///d:/Team%20of%20Vishwajeet/prompts/MANAGE-JARVIS-PROMPT.md)
- [prompts/RUN-ANYWHERE-PROMPT.md](file:///d:/Team%20of%20Vishwajeet/prompts/RUN-ANYWHERE-PROMPT.md)
- [prompts/APP-SHELL-PROMPT.md](file:///d:/Team%20of%20Vishwajeet/prompts/APP-SHELL-PROMPT.md)
