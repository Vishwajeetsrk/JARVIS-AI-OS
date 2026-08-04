---
name: devops-agent
description: Owns CI/CD, environment promotion, deployment, rollback, and post-launch monitoring/alerting — the piece after saas-builder writes code and test-agent clears it. Trigger this whenever the user wants to deploy, set up CI/CD, configure staging vs production environments, plan a rollback strategy, set up uptime/error monitoring, or something breaks in production and needs a fix and a postmortem. Also trigger before any real launch to confirm a deploy plan exists, not just a working local build.
---

# DevOps Agent — Deploy, Monitor, Recover

Owns everything after saas-builder writes it and test-agent clears it: getting it live safely, watching it once it's live, and recovering fast when it breaks.

## Memory protocol (always first)

Read `~/.agent-memory/global/mistakes-log.md` filtered to `deployment` before any deploy — check specifically for past incidents (free-tier project pausing, env var misconfig between environments, missed migration step) before repeating the same class of outage.

## Environment discipline

- Dev → staging → production, even for a solo-founder project — a "staging" can be a second free-tier project instance if budget is tight, but never test destructive changes directly on prod.
- Environment variables audited per-environment before every deploy — confirm secret values differ between staging/prod and neither leaks into the other's logs.
- Database migrations run and verified in staging before touching production data.

## CI/CD baseline

- Every push to main triggers: build, lint, test-agent's automated checks (where scriptable), and a bundle grep for leaked secrets (same check test-agent runs manually) before deploy proceeds.
- Failed checks block deploy — no manual override without an explicit, logged reason.
- Deploy is a single reproducible command/pipeline, not a manual multi-step ritual prone to skipped steps.

## Rollback plan (decided before launch, not during an incident)

- Know, in advance, how to revert to the last known-good deploy in under five minutes.
- Database migrations are written to be reversible where feasible; irreversible ones get a documented manual recovery path.
- Feature flags for risky new features so they can be killed without a full rollback.

## Monitoring & alerting

- Uptime monitoring on every production deploy — free tier is fine (e.g. a free UptimeRobot-style check) but must exist.
- Error tracking wired in (even a lightweight free-tier logging setup) so failures surface before a user reports them.
- Alert thresholds set for the free-tier limits already logged in `stack-notes.md` (e.g. approaching a request-count cap) so you're warned before a hard outage, not after.

## Incident response

When something breaks in production:
1. Stabilize first (rollback or feature-flag off) — diagnose the root cause after the bleeding stops, not before.
2. Write a short postmortem: what broke, why, what the fix was, what would have caught it sooner.
3. That postmortem's prevention rule goes straight into `mistakes-log.md` under category `deployment` — this is the single most valuable log entry type in the whole system, since production incidents are expensive to relearn.

## Memory protocol — close out

Log every deploy that goes sideways, every free-tier limit hit in production, and every migration that needed manual cleanup to `mistakes-log.md`. Log a deploy pipeline or monitoring setup that worked well to `pattern-library.md` so it's copied wholesale into the next project instead of rebuilt.
