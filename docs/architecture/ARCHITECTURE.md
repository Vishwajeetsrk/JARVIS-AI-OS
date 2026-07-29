# System Architecture — Agent Team Skills

## Overview

A prompting/workflow framework consisting of 12 specialized AI agent skills that work as an orchestrated team. Each skill is a set of instructions that shapes how an AI approaches a specific domain.

---

## Architecture Layers

```
+----------------------------------------------------+
|                  CONNECT-PROMPT.md                  |
|         (Orchestration layer - entry prompt)        |
+---------------------------+------------------------+
                            |
         +------------------+------------------+
         |                                     |
+--------v--------+                +-----------v-----------+
|   CEO Agent     |                |   Memory Agent        |
|  (Validation,   |                |  (Cross-project       |
|   Routing)      |                |   learning system)    |
+--------+--------+                +-----------+-----------+
         |                                     |
         |  Routing (per Golden Flow)          |  Pre-flight checks
         |                                     |  Post-flight logs
         v                                     |
+----------------------------------------------v----+
|              Specialist Agents                    |
|                                                    |
|  +------------+  +------------+  +------------+   |
|  |SaaS Builder|  |Design Agent|  | AI Agent   |   |
|  +------------+  +------------+  +------------+   |
|  +------------+  +------------+  +------------+   |
|  |Test Agent  |  |Legal Agent |  | SEO Agent  |   |
|  +------------+  +------------+  +------------+   |
|  +------------+  +------------+  +------------+   |
|  |DevOps Agent|  |ML Agent    |  |Research    |   |
|  +------------+  +------------+  +------------+   |
+----------------------------------------------------+
```

---

## File Structure

```
Agent-Team-Skills/
├── README.md                      <- Entry point (this file)
├── CONNECT-PROMPT.md              <- Universal orchestration prompt
├── DESIGN-CONNECT-PROMPT.md       <- Design-specific creative prompt
├── SETUP.md                       <- Setup instructions
├── ARCHITECTURE.md                <- This file
├── .gitignore
│
├── .claude/skills/                <- Claude Code compatible structure
│   ├── ceo-agent/SKILL.md
│   ├── team-agent/SKILL.md
│   ├── saas-builder/SKILL.md
│   ├── research-resources/SKILL.md
│   ├── design-agent/SKILL.md
│   ├── ai-agent/SKILL.md
│   ├── ml-agent/SKILL.md
│   ├── test-agent/SKILL.md
│   ├── legal-agent/SKILL.md
│   ├── seo-agent/SKILL.md
│   ├── devops-agent/SKILL.md
│   └── memory-agent/
│       ├── SKILL.md
│       ├── templates/
│       └── scripts/
│           └── sync-memory.sh
│
├── skills/                       <- Individual .skill files (for web upload)
│   ├── ceo-agent.skill
│   ├── team-agent.skill
│   ├── saas-builder.skill
│   ├── ... (12 total)
│
├── memory-sync/                  <- Memory synchronization tools
│   └── sync-memory.sh
│
├── main-cli.sh                   <- CLI entry point
└── launch-dashboard.ps1          <- Quick UI launcher
```

---

## Memory System Design

```
+------------------+          +-------------------+
| Global Memory    |          | Project Memory    |
| (~/.agent-memory/|          | (<project>/.agent-|
|  global/)        |          |  memory/)         |
+------------------+          +-------------------+
| mistakes-log.md  |          | PROJECT_BRIEF.md  |
| decisions-log.md |          | status.md         |
| pattern-library  |          | mistakes.md       |
|   .md            |          | decisions.md      |
| stack-notes.md   |          |                   |
+------------------+          +-------------------+
         |                            |
         +---------+  +---------------+
                   |  |
            +------v--v------+
            |  Git Sync     |
            |  (Private     |
            |   repo)       |
            +---------------+
```

### Data Flow
1. **Pre-flight**: Agent reads `global/mistakes-log.md` filtered by category
2. **Work**: Agent executes its domain logic
3. **Post-flight**: Agent writes new entries to appropriate log files
4. **Sync**: `sync-memory.sh` pushes changes to private git repo

---

## Agent Interaction Protocol

Every agent follows this contract:

```
1. RECEIVE task from CEO or user
2. READ memory (pre-flight) for relevant past entries
3. SURFACE findings to user
4. EXECUTE domain work
5. WRITE memory (post-flight) with new learnings
6. HANDOFF to next agent in Golden Flow
```

---

## Design Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Skill format | Markdown frontmatter | Universal, parseable by any AI |
| Memory storage | Plain markdown files | Greppable, diffable, no tooling needed |
| Persistence | Git-backed | Works across sessions & devices |
| Entry point | CONNECT-PROMPT.md | Single paste, triggers full flow |
| No autonomy | Instruction-based | Works with any AI, no platform lock-in |

---

## Security Model

- No secrets stored in skills or memory
- Test-agent verifies every build independently
- Memory only logs facts, never credentials
- Rate limiting and input validation required on all builds
