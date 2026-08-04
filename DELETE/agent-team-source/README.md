# Vishwajeet's Agent Team

Ten Claude skills that work as one team: a CEO that validates and routes, specialists that build, and a shared memory system so **no project ever repeats a mistake another project already made.**

## The team

| Agent | Job |
|---|---|
| **ceo-agent** | Validates ideas (Clarity Framework / FoundersDB), makes go/no-go calls, routes work to the right agent, prioritizes across parallel projects |
| **team-agent** | Turns a decision into a sequenced task plan, tracks project status, coordinates handoffs |
| **saas-builder** | The Golden Flow build itself: PRD → architecture/schema → security baseline → UI/design system → orchestration → deploy |
| **research-resources** | Real-time market/competitor/tech research + curated free tools, UI/UX inspiration, icons/SVG/3D assets |
| **test-agent** | Independent security & QA review — rate limiting, secrets, injection/XSS, webhook signatures, bug triage |
| **seo-agent** | Keyword strategy, on-page and technical SEO for launches |
| **legal-agent** | Privacy policy, ToS, GDPR/DPDP basics, license & trademark checks (not a substitute for a lawyer) |
| **ai-agent** | LLM/Claude API integration, prompt design, AI safety guardrails |
| **ml-agent** | Classical ML — model selection, data pipelines, evaluation |
| **design-agent** | Brand identity consistency + reusable component/design-token library across projects |
| **devops-agent** | CI/CD, environment promotion, deploy, rollback, monitoring, incident postmortems |
| **memory-agent** | The system all the others plug into — see below. This is the one that makes "learn and don't repeat mistakes" actually real. |

## How they work together (Golden Flow)

```
idea
  │
  ▼
ceo-agent          — validate, go/no-go, route
  │
  ▼
research-resources — market check (if needed)
  │
  ▼
team-agent         — task breakdown, PROJECT_STATE
  │
  ▼
saas-builder       — PRD → architecture → security → UI
  │        │
  │        ▼
  │   ai-agent / ml-agent (if the product has AI/ML surface)
  │        │
  │        ▼
  │   design-agent (brand tokens/components before UI build)
  │
  ▼
test-agent         — independent security/QA sign-off
  │
  ▼
legal-agent        — privacy/ToS/compliance
  │
  ▼
seo-agent          — launch SEO
  │
  ▼
devops-agent       — CI/CD, deploy, rollback plan, monitoring
  │
  ▼
memory-agent       — log what was learned, close the loop
```

Not every project touches every agent — ceo-agent decides the subset. **test-agent and the memory-agent log are never skipped.**

## The memory system — why this actually prevents repeat mistakes

Every agent reads a shared, persistent memory bank **before** starting work and writes to it **after** finishing:

```
~/.agent-memory/global/          <- survives across every project you ever build
  mistakes-log.md                <- the important one — see below
  decisions-log.md
  pattern-library.md
  stack-notes.md

<project>/.agent-memory/         <- local to one project
  PROJECT_BRIEF.md
  status.md
```

Concretely: the first time saas-builder ships a payment webhook without verifying its signature and test-agent catches it, that becomes a dated entry in `mistakes-log.md` with a one-line prevention rule. The next time *any* project touches a webhook — Learnify AI, AgencyOS, a client project, six months from now — the pre-flight check surfaces that entry before any code is written. Nothing relies on you (or Claude) remembering; it's a file on disk that every skill is instructed to actually read.

This only works if the discipline is followed: **read before starting, write before finishing, every time.** Each skill's SKILL.md says so explicitly.

## Installing

Each folder in `skills/` is a complete, valid skill (`SKILL.md` with proper frontmatter). Two ways to use them:

1. **Claude.ai** — the packaged `.skill` files can be uploaded directly; if your workspace allows custom skills, you'll see a **Save skill** option that installs it into your profile.
2. **Claude Code** — copy the `skills/<agent-name>/` folders into your project's `.claude/skills/` (or wherever your Claude Code skill path is configured). They'll be picked up automatically based on their descriptions.

**First-time setup for the memory system:** copy the contents of `skills/memory-agent/templates/` into `~/.agent-memory/global/` once, so the log files exist before the first pre-flight check runs.

**Persistence across sessions — read this part.** In Claude Code on your own machine, `~/.agent-memory/` just sits on disk and survives naturally between sessions. On claude.ai, the filesystem resets between conversations, so anything written there disappears unless it's backed by something external. `skills/memory-agent/scripts/sync-memory.sh` handles this with a private git repo: `pull` at the start of a session, `push` at the end. Set it up once (point `REPO_URL` at your own private repo) and the same memory bank stays in sync whether you're in Claude Code, claude.ai, or a second machine. Skip this step and memory is session-local only — worth knowing rather than assuming it carried over.

## A note on scope

This is a prompting/workflow framework, not literal autonomous agents that run independently — each "agent" is a skill that shapes how Claude approaches that part of the work when you (or another skill) invoke it. The orchestration above (CEO routes → specialists build → memory logs) is a process Claude follows within a conversation or Claude Code session, not a background multi-process system. It's designed that way on purpose: the memory files are the actual persistent state; the skills are the discipline for using them consistently.
