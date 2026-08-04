# Stack Notes

Standing preferences and constraints that apply across projects unless a project explicitly overrides them. saas-builder and other agents should read this before proposing a stack.

---

## Defaults
- Framework: Next.js 15 (App Router) + TypeScript + Tailwind, unless project needs dictate otherwise.
- Design systems: Neo-Brutalism / Glassmorphism preferred; Acid Brutalism, Fintech UI, Blueprint, DevTools UI, Claymorphism, Neon Velocity, Cinematic available per-context — see saas-builder skill.
- Free/low-cost tooling preferred, validated against free-for.dev, with explicit warnings on free-tier limits before relying on them in production.
- Security-first by default: rate limiting, no frontend secrets, strict input validation on every build — non-negotiable, see test-agent skill.
- Payments: Razorpay (India-first). Automation: Zapier where it beats a bespoke integration.
- Build system: Claude Code (execution) + Google Stitch (UI) + Antigravity (orchestration), Golden Flow idea → UI → backend → orchestration → deploy.

## Known free-tier gotchas (fill in as discovered)
<!-- e.g. "Supabase free tier pauses projects after 7 days inactivity — add a keepalive ping before demoing to investors." -->
