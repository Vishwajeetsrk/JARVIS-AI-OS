# Master Product Roadmap

## Horizon 0 — Reasoning Layer Baseline (COMPLETED)
- [x] **12 Specialized Claude Skills**: `ceo-agent`, `team-agent`, `saas-builder`, `research-resources`, `design-agent`, `ai-agent`, `ml-agent`, `test-agent`, `legal-agent`, `seo-agent`, `devops-agent`, `memory-agent`.
- [x] **Global Memory Architecture**: Persistent file-based memory bank in `~/.agent-memory/global/` (`mistakes-log.md`, `decisions-log.md`, `pattern-library.md`, `stack-notes.md`).

---

## Horizon 1 — Mastra TS Orchestration Engine & Registries (COMPLETED)
- [x] **Mastra TS Orchestrator Engine**: `src/mastra/index.ts`, `agents/index.ts`, `workflows/golden-flow.ts`.
- [x] **5 Enterprise Governance Pillars**:
  - AI Model Registry (`registries/ai.json`)
  - MCP Server Registry (`registries/mcp.json`)
  - Tool Registry (`registries/tools.json`)
  - External API Registry (`registries/apis.json`)
  - Feature Registry (`registries/features.json`)
  - Decision Engine (`registries/decisions.json`)
  - Relational Knowledge Graph (`knowledge/graph.json`)
- [x] **Hardware & Cost Observability Tools**: `hardware-detector.ts`, `cost-tracker.ts`, `auto-docs.ts`, `auto-pm.ts`.
- [x] **Repository Reorganization**: Standard taxonomy (`docs/`, `src/`, `registries/`, `prompts/`, `assets/skills-dist/`).

---

## Horizon 2 — Sandboxed Autonomous Coding (ACTIVE)
- [ ] **OpenHands Docker Sandbox**: Isolated container runner for automated feature implementation.
- [ ] **Test-Gated PR Pipeline**: Automated GitHub PR reviews enforcing `test-agent` security sign-off.
- [ ] **n8n Billing Automation**: Live Razorpay reconciliation webhooks for AgencyOS.

---

## Horizon 3 — Multi-Framework Evaluation (FUTURE EVALUATION)
- [ ] **LangGraph & agno Audits**: Empirical evaluation of multi-agent state machines and administrative UI dashboards.
