# Agent Team Skills — Agent Entry Point

Read this file first before doing anything in this repository. This is the single source of truth for how this agent team works, how to use it, and where everything lives.

---

## What This Is

A collection of 19 specialized AI agent skills that work as an orchestrated team — including 6 Web3 agents for blockchain, smart contracts, NFTs, trading, news, and security. Each skill is a markdown file that tells the AI how to approach a specific domain. The memory system ensures knowledge persists across all projects.

---

## Quick Start

```bash
# 1. Set up memory (one time):
#    macOS/Linux: bash memory-sync/sync-memory.sh init
#    Windows:     .\memory-sync\sync-memory.ps1 init

# 2. (Optional) Connect to remote repo for cross-machine sync:
#    First create github.com/<you>/agent-memory, then:
#    .\setup-remote-memory.ps1 https://github.com/<you>/agent-memory.git

# 3. Pull latest memory (start of every session):
#    bash memory-sync/sync-memory.sh pull

# 4. Open the dashboard or paste CONNECT-PROMPT.md into your AI session
```

---

## Repository Structure

```
./
├── AGENTS.md                          ← This file — read first
├── README.md                          ← Project overview
├── SETUP.md                           ← Complete setup guide
├── ARCHITECTURE.md                    ← System design
├── CONNECT-PROMPT.md                  ← Universal entry prompt (paste this)
├── DESIGN-CONNECT-PROMPT.md           ← Design-specific creative prompt
│
├── .claude/skills/                    ← 19 Agent Skills (for Claude Code / any AI)
│   ├── ceo-agent/SKILL.md             ←   Validates ideas, makes go/no-go calls
│   ├── team-agent/SKILL.md            ←   Task breakdown, project coordination
│   ├── saas-builder/SKILL.md          ←   Golden Flow build: PRD -> architecture -> UI
│   ├── research-resources/SKILL.md    ←   Market/competitor/tech research
│   ├── design-agent/SKILL.md          ←   Brand, components, 3D, motion, video
│   ├── ai-agent/SKILL.md              ←   LLM integration, prompt design
│   ├── ml-agent/SKILL.md              ←   Classical ML, data pipelines
│   ├── test-agent/SKILL.md            ←   Security & QA review
│   ├── legal-agent/SKILL.md           ←   Privacy policy, ToS, compliance
│   ├── seo-agent/SKILL.md             ←   Keyword strategy, SEO
│   ├── devops-agent/SKILL.md          ←   CI/CD, deploy, monitoring
│   ├── memory-agent/                  ←   Cross-project memory system
│   │   ├── SKILL.md
│   │   ├── templates/                 ←   Memory templates
│   │   └── scripts/sync-memory.sh     ←   Memory sync script
│   │
│   ├── web3-agent/SKILL.md            ←   On-chain intelligence & crypto research
│   ├── smart-contract-agent/SKILL.md  ←   Solidity gen, audit, deploy
│   ├── nft-agent/SKILL.md             ←   Generative art & on-chain minting
│   ├── trading-agent/SKILL.md         ←   Technical analysis & chart patterns
│   ├── crypto-news-agent/SKILL.md     ←   Automated news & trend scanning
│   ├── security-agent/SKILL.md        ←   Web3 phishing, risk scoring, CryptoGuard
│   └── landing-page-agent/SKILL.md    ←   7-question conversion framework for pages
│
├── projects/                          ← Example projects built by the agent team
│   └── learnify-ai/                   ←   Full landing page with 7Q framework
│
├── design-systems/                    ← 90 Brand design systems
│   ├── default/                       ←   Neutral modern starter
│   ├── linear-app/                    ←   Dark-mode-first productivity
│   ├── neobrutalism/                  ←   Bold, high-contrast
│   ├── glassmorphism/                 ←   Frosted glass modern
│   ├── minimal/                       ←   Clean, minimal
│   ├── stripe/                        ←   Fintech SaaS
│   ├── vercel/                        ←   Developer tools
│   ├── claude/                        ←   AI-centric
│   ├── shadcn/                        ←   Component-based
│   ├── supabase/                      ←   Open-source SaaS
│   ├── apple/                         ←   Apple design language
│   ├── openai/                        ←   OpenAI brand
│   ├── github/                        ←   GitHub design
│   ├── shopify/                       ←   Shopify design
│   ├── spotify/                       ←   Spotify design
│   ├── notion/                        ←   Notion style
│   ├── discord/                       ←   Discord design
│   ├── framer/                        ←   Framer design
│   ├── cursor/                        ←   Cursor IDE design
│   ├── figma/                         ←   Figma design
│   │
│   ├── airbnb/                        ←   Travel/hospitality
│   ├── coinbase/                      ←   Web3/crypto
│   ├── duolingo/                      ←   Gamified education
│   ├── hashicorp/                     ←   DevOps/infrastructure
│   ├── nike/                          ←   Sportswear/retail
│   ├── nvidia/                        ←   GPU/AI
│   ├── perplexity/                    ←   AI search
│   ├── slack/                         ←   Workplace communication
│   ├── tesla/                         ←   Automotive/energy
│   ├── zapier/                        ←   Automation
│   │
│   ├── meta/                          ←   Social
│   ├── uber/                          ←   Transport
│   ├── ibm/                           ←   Enterprise
│   ├── starbucks/                     ←   Coffee
│   ├── pinterest/                     ←   Visual discovery
│   ├── canva/                         ←   Design platform
│   ├── miro/                          ←   Collaboration
│   ├── sentry/                        ←   Monitoring
│   ├── intercom/                      ←   Customer comms
│   ├── mongodb/                       ←   Database
│   ├── posthog/                       ←   Product analytics
│   ├── sanity/                        ←   Content platform
│   ├── resend/                        ←   Email
│   ├── elevenlabs/                    ←   Voice AI
│   ├── mistral-ai/                    ←   LLM platform
│   ├── huggingface/                   ←   ML community
│   ├── replicate/                     ←   Cloud ML
│   ├── warp/                          ←   Terminal
│   ├── loom/                          ←   Video messaging
│   ├── raycast/                       ←   Productivity
│   ├── binance/                       ←   Crypto exchange
│   ├── kraken/                        ←   Crypto exchange
│   ├── revolut/                       ←   Fintech
│   ├── mastercard/                    ←   Payments
│   ├── bmw/                           ←   Automotive
│   ├── playstation/                   ←   Gaming
│   ├── superhuman/                    ←   Email client
│   ├── expo/                          ←   React Native
│   ├── webflow/                       ←   Web builder
│   └── clickhouse/                    ←   Analytics DB
│
├── skills/                            ← 12 .skill files (for claude.ai upload)
│
├── dashboard/                         ← Visual customer dashboard (open index.html)
├── .github/workflows/deploy-dashboard.yml  ← Auto-deploys to GitHub Pages
├── index.html                         ← Redirects to dashboard/ (for Pages root)
├── memory-sync/
│   ├── sync-memory.sh                 ← Memory persistence script (macOS/Linux)
│   └── sync-memory.ps1               ← Memory persistence script (Windows)
├── setup-remote-memory.ps1            ← One-command remote setup (run after creating repo)
├── main-cli.sh                        ← CLI entry point
└── launch-dashboard.ps1               ← Windows dashboard launcher
```

---

## How to Use This Repository

### Option A: Claude Code
```bash
# Clone into your project
git clone https://github.com/Vishwajeetsrk/Agent-Team-Skills.git .claude/skills/
# Or copy specific skills:
cp -r path/to/Agent-Team-Skills/.claude/skills/* .claude/skills/
# Set up memory:
cp -r .claude/skills/memory-agent/templates/* ~/.agent-memory/global/
# Paste CONNECT-PROMPT.md at session start
```

### Option B: Any AI (Antigravity, Open Code, etc.)
1. Paste `CONNECT-PROMPT.md` as system instructions
2. Load individual skills from `.claude/skills/<agent>/SKILL.md`
3. Reference design systems from `design-systems/<brand>/DESIGN.md`
4. Set up memory sync for persistence

### Option C: Visual Dashboard
Open `dashboard/index.html` in any browser or run `.\launch-dashboard.ps1` (Windows) to:
- Browse all 19 agents with descriptions
- Preview 30 design systems
- Generate a custom CONNECT-PROMPT with selected agents
- Follow the quick-start guide

### Option D: claude.ai Web
1. Upload `.skill` files from `skills/` folder to your profile
2. Paste `CONNECT-PROMPT.md` at conversation start

---

## The Golden Flow

Every project follows this order:

```
idea → ceo-agent (validate) → research-resources (market check)
→ [web3-agent if blockchain/crypto] → [smart-contract-agent if contracts needed]
→ [nft-agent if NFT surface] → [trading-agent if DeFi/trading]
→ team-agent (plan) → saas-builder (PRD -> architecture -> security -> UI)
→ [ai-agent/ml-agent if needed] → [design-agent for brand tokens]
→ [crypto-news-agent if news/content] → [security-agent for Web3 threat check]
→ test-agent (QA) → legal-agent (compliance) → seo-agent (launch SEO)
→ devops-agent (deploy) → memory-agent (log learnings)
```

**Never skip:** test-agent, devops-agent rollback check, memory-agent post-flight log.

---

## Memory Protocol (Non-Negotiable)

### Pre-Flight (BEFORE starting work)
Read `~/.agent-memory/global/mistakes-log.md` filtered to your category. Surface relevant past mistakes out loud.

### Post-Flight (AFTER finishing work)
Write new entries to:
- `mistakes-log.md` — any mistake or near-miss
- `decisions-log.md` — non-obvious choices and rationale
- `pattern-library.md` — anything worth reusing

### Sync Commands
```bash
bash memory-sync/sync-memory.sh pull   # Start of session
bash memory-sync/sync-memory.sh push   # End of session
```

---

## Design Systems

30 brand design systems available at `design-systems/<brand>/`. Each contains:
- `DESIGN.md` — Complete brand spec (color, typography, spacing, components)
- `design-tokens.json` — Structured CSS tokens
- `tokens.css` — CSS variables ready to use
- `USAGE.md` — How agents should use this system

**How agents use them:** Before building any UI, read the relevant `DESIGN.md` and apply its tokens. Let the design system shape the output, not default assumptions.

---

## Reference Projects

47 production-quality landing page templates available at:
`C:\Users\vishw\Music\Learnify AI\Projects\`

These are reference outputs for the design-agent. Use them as inspiration, not as copy-paste source.

---

## Architecture Decision Records

All architectural decisions, tool choices, and stack preferences are documented in:
- `ARCHITECTURE.md` — System design
- `~/.agent-memory/global/decisions-log.md` — Per-decision rationale
- `~/.agent-memory/global/stack-notes.md` — Standing preferences

Before proposing a new stack or tool, check `stack-notes.md` for existing preferences and `decisions-log.md` for past reasoning.
