---
name: memory-agent
description: The cross-project memory system for Vishwajeet's agent team. MUST be consulted at the START of every new project or major feature (to surface past mistakes before they repeat) and at the END of every project or debugging session (to log new mistakes, decisions, and reusable patterns). Trigger this whenever the user starts a new build, says "remember this", "don't repeat this mistake", "what went wrong last time", "log this decision", finishes a project, fixes a bug, or asks "have I hit this before". Every other agent (ceo-agent, team-agent, saas-builder, test-agent, ai-agent, ml-agent, seo-agent, legal-agent, research-resources) depends on this skill to read and write shared memory — always run its pre-flight check before those skills do real work.
---

# Memory Agent — Cross-Project Learning System

The single job of this skill: make sure **no mistake is ever made twice** and **no good decision is ever re-derived from scratch**. It is the shared long-term memory that every other agent in the team reads from and writes to.

Everything else in the agent team is disposable per-project. This is not — it accumulates forever across all of Vishwajeet's projects (Learnify AI, AgencyOS, DreamSync, SkillForge, client work, everything).

## Where memory lives

Two tiers, both plain markdown so they're greppable, diffable, and readable without tooling:

```
~/.agent-memory/global/              <- persists across ALL projects, all repos
  mistakes-log.md                    <- the most important file in the whole system
  decisions-log.md
  pattern-library.md
  stack-notes.md

<project-root>/.agent-memory/        <- local to this one project
  PROJECT_BRIEF.md
  mistakes.md
  decisions.md
  status.md
```

If `~/.agent-memory/global/` doesn't exist yet in the current environment, create it on first use from the templates bundled with this skill (`templates/`). If working in a sandboxed environment where `~/.agent-memory` isn't reachable or won't persist between sessions, fall back to `<project-root>/.agent-memory/` only, and tell Vishwajeet plainly that cross-project memory won't carry over this time — don't silently pretend it did.

## The two non-negotiable protocols

### 1. Pre-flight check (run BEFORE any real work starts)

Before ceo-agent greenlights anything, before saas-builder writes a PRD, before ai-agent wires an API, before test-agent signs off — read `global/mistakes-log.md` and filter for entries matching the current project's domain/stack/category. Surface anything relevant in plain language:

> "Heads up — last time we built a Razorpay webhook handler (AgencyOS, March), we shipped without verifying the webhook signature and it took a live incident to catch. Confirming we're validating signatures this time before we go further."

This is not optional busywork — skipping it is exactly how mistakes repeat. If the log is empty or nothing matches, say so briefly and move on.

### 2. Post-flight log (run AFTER a project, feature, or debugging session)

Before closing out work, write new entries for:
- Any mistake made or bug found (even ones caught before shipping — near-misses count)
- Any non-obvious decision and why it was made (so it isn't re-litigated next time)
- Any pattern/snippet/approach that worked well and is worth reusing

Append-only. Never delete or rewrite old entries — if something is superseded, add a new entry noting the update and reference the old one.

## Entry format (mistakes-log.md)

```markdown
## [YYYY-MM-DD] <short title>
- **Project:** <name>
- **Category:** security | architecture | business-validation | deployment | api-design | ui-ux | legal | seo | ai-ml | process
- **Severity:** critical | high | medium | low
- **What happened:** <1-3 sentences, concrete>
- **Root cause:** <why it actually happened, not just the symptom>
- **Fix applied:** <what resolved it>
- **Prevention rule:** <the one-line rule to check for next time — this is the part that gets surfaced in pre-flight checks>
```

## Entry format (decisions-log.md)

```markdown
## [YYYY-MM-DD] <decision>
- **Project:** <name>
- **Context:** <what problem forced this decision>
- **Chosen:** <what was decided>
- **Rejected alternatives:** <what else was considered and why it lost>
- **Revisit if:** <the condition under which this decision should be re-examined>
```

## Entry format (pattern-library.md)

```markdown
## <pattern name>
- **Use when:** <situation>
- **Approach:** <short description or reference to where the code/template lives>
- **Why it works:** <1-2 sentences>
```

## Categorization discipline

Use the fixed category list above, consistently, so pre-flight filtering actually works. If unsure which category, pick the closer one and add a second tag rather than inventing a new category. Common recurring categories for Vishwajeet's work, based on project history: security (secrets in frontend, missing rate limiting, unvalidated input), business-validation (building before checking for proven revenue/paying users per the Clarity Framework), deployment (free-tier limits hit in production, env var misconfig), api-design (over-fetching, unversioned breaking changes).

## What NOT to log here

- Anything containing real secrets, API keys, tokens, passwords, or customer PII — log the *fact* of the mistake ("hardcoded API key in frontend bundle"), never the actual secret value.
- Vague feelings ("this was hard") without a concrete, checkable prevention rule — if it can't be turned into a one-line check, it doesn't earn an entry.

## How other agents should reference this skill

Each specialist skill's SKILL.md should contain a short "Memory protocol" section pointing back here rather than duplicating this logic. When acting as any specialist agent, always do the pre-flight read and the post-flight write yourself using the file paths above — this skill defines the contract, it doesn't run as a separate process.

## Bundled templates

`templates/` contains blank starter files for `global/mistakes-log.md`, `global/decisions-log.md`, `global/pattern-library.md`, `global/stack-notes.md`, and the per-project `PROJECT_BRIEF.md` / `status.md`. Copy these in on first setup of a new machine or new project rather than writing structure from scratch.

## Making this persist across sessions and environments (important)

This memory system only works if `~/.agent-memory/` actually survives between sessions. That's automatic in Claude Code on your own machine (the disk just persists). It is **not** automatic on claude.ai — that environment's filesystem resets between conversations, so anything written there is lost unless it's backed by something external.

`scripts/sync-memory.sh` closes that gap using a private git repo as the source of truth:
- Run `sync-memory.sh pull` at the **start** of any session that will use this agent team — before the pre-flight check, so it's reading the latest state.
- Run `sync-memory.sh push "short summary"` at the **end** — this is what turns the post-flight log into something the *next* session (in any environment) will actually see.

One-time setup: create a small private repo (e.g. `github.com/<you>/agent-memory`), point `REPO_URL` in the script at it, run `pull` once to clone it into `~/.agent-memory`. After that, pull/push is the entire ritual — in Claude Code, in claude.ai's bash tool, or on a second machine, all reading and writing the same repo. Without this step, treat memory as session-local and say so plainly rather than assuming it carried over.
