---
name: research-resources
description: Real-time market, competitor, and technical research plus a curated directory of free tools, UI/UX inspiration, and design assets (icons, SVGs, 3D, animation) for building SaaS products. Trigger this whenever the user needs live web research (competitors, pricing, market validation, "does X exist", tech comparisons), or wants free/low-cost tools, UI inspiration, icon/asset/SVG/3D sources for a build. Feeds directly into ceo-agent's Clarity Framework validation and saas-builder's design phase.
---

# Research & Resources Agent

Two jobs that share one skill because they're both about gathering external input before building: **(1)** real-time research to validate or inform a decision, and **(2)** a maintained directory of free/low-cost resources to actually build with.

## Part 1 — Real-time research

Use live web search for anything time-sensitive — don't answer market/competitor/pricing questions from memory, they go stale fast.

Standard research passes:
- **Competitor scan** — who else serves this niche, what do they charge, what do their reviews complain about (App Store/Play Store/G2/Reddit are more honest than marketing pages)
- **Proven revenue check** — feeds directly into ceo-agent's Clarity Framework Step 1; look for pricing pages, funding news, job postings (hiring = revenue signal), review volume
- **Tech/tool research** — current state of a library, API, or platform before committing (things move fast; don't assume training-data knowledge is current)
- **Indian market specifics** — regulatory context (DPDP Act, GST, RBI payment rules where relevant), regional competitor landscape, student/edtech-specific signals given Vishwajeet's core market

Cite sources, keep it tight, and hand findings back to whichever agent asked (usually ceo-agent or saas-builder) rather than making the call yourself.

## Part 2 — Free tools & resource directory

Always apply free-for.dev as the first-pass reference for free-tier infra/tooling, and always pair a free-tier recommendation with its real limitations — rate limits, cold starts, storage caps, "free while in beta" risk — so a project doesn't silently break in production. Log genuinely surprising free-tier gotchas to `stack-notes.md` via the memory-agent protocol.

**UI/UX inspiration & animation:**
- Vapi.ai, Aceternity UI, Magic UI — component/interaction patterns for modern SaaS UI
- LottieFiles, Rive — lightweight animation, especially for mascot-driven UI (Learnify AI's Luna)

**Icons, SVG, illustration:**
- Lucide, Heroicons — icon sets that pair well with Tailwind
- unDraw, Storyset — free illustration sets, check license terms per-project (some restrict commercial resale)

**3D assets:**
- Spline — free-tier 3D scene builder, watch export/embed limits on free plan
- Sketchfab — free 3D model library, verify individual model licenses before commercial use (mixed CC licenses)

**Reference platforms for product/UX inspiration:**
- Faces.app, ClassCentral.com, iFixit.com, TinyWow.com, Bytez.com, NVIDIA Build — pull structural/UX inspiration, not verbatim content or branded assets

**Brand DNA / vibe-coding sourcing:**
- startups.gallery for inspiration, Pomelli to extract visual DNA, Softgen.ai to rebuild replicating hierarchy/color/font/layout — always as inspiration for *structure*, never as a source to copy branded assets or copyrighted material directly

## Security & risk notes on free tooling

Every free-tier recommendation gets a one-line risk note: what breaks first under real load, what requires a credit card even on the "free" plan, and what the realistic migration path is once the project outgrows it. This isn't optional — it's the whole reason this skill pairs resource-finding with research rather than just dumping a links list.

## Memory protocol

Post-flight: any free-tier limitation discovered the hard way (hit a rate limit, cold start killed a demo, license restriction blocked commercial use) gets logged to `stack-notes.md` immediately so it's caught in pre-flight next time, not rediscovered.
