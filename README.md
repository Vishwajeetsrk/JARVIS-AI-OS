# ✦ JARVIS AI OS — One Brain. Many Shells.

```
       _____                      _                   _____   ____  
      |  __ \                    | |                 / ____| / __ \ 
      | |__) |__ _ __ ___  _ __  | |_  ___  _ __    | |  __ | |  | |
      |  ___// _ \ '__/ __|| '_ \ | __|/ _ \| '_ \   | | |_ || |  | |
      | |   |  __/ |  \__ \| |_) || |_|  __/| | | |  | |__| || |__| |
      |_|    \___|_|  |___/| .__/  \__|\___||_| |_|   \_____| \____/ 
<<<<<<< HEAD
                            | |                                      
                            |_|                                      
```

> **Persistent-memory AI Operating System — 30 specialized agents, 150 design systems, 10-tier open-source stack, and $0 free cloud models.**

[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)
[![Vercel](https://img.shields.io/badge/Live%20Console-Vercel-black.svg)](https://jarvis-ai-os-kappa.vercel.app)
[![Agent Dashboard](https://img.shields.io/badge/Agent%20Dashboard-Vercel-coral.svg)](https://agent-team-skills.vercel.app)
[![GitHub Repos](https://img.shields.io/badge/Open%20Source-68%20Repos-blue.svg)](GitHub%20Repo/CATALOG.md)

---

## Live Sites

| Surface | URL | Description |
|---|---|---|
| **Jarvis Console** | https://jarvis-ai-os-kappa.vercel.app | TanStack SPA with auth, chat, 30 agents |
| **Agent Dashboard** | https://agent-team-skills.vercel.app | 19-agent visual dashboard, 150 design systems, 46 templates |
| **GitHub** | https://github.com/Vishwajeetsrk/JARVIS-AI-OS | Main repository |

---

## Repository Structure

```
D:\Team of Vishwajeet/
├── jarvis console/          ← TanStack SPA (deployed to Vercel)
│   ├── src/routes/
│   │   ├── index.tsx              Landing page with interactive shell
│   │   ├── auth.tsx               Sign-in page (Google OAuth + email)
│   │   └── _authenticated/console/ Protected agent console
│   └── package.json
│
├── Agent-Team-Skills/       ← 19-agent skill system + unified dashboard
│   ├── index.html           Visual dashboard (all sections)
│   ├── .claude/skills/      19 agent skill definitions
│   ├── design-systems/      150 brand design systems
│   └── projects/            46 live templates (Vite + React)
│
├── GitHub Repo/             ← 68 open-source repos (10 tiers)
│   ├── CATALOG.md           Full catalog of all 68 repos
│   ├── Tier-0-Foundation/   Docker, Electron, Tauri, FastAPI
│   ├── Tier-1-AI-Brain/     Mastra, LangGraph, CrewAI, LiteLLM
│   ├── Tier-2-AI-Developer/ OpenHands, Continue, Aider, Roo Code
│   ├── Tier-3-Memory/       Letta, Mem0, Graphiti
│   ├── Tier-4-Browser-Research/ Playwright, Selenium, Pandoc
│   ├── Tier-5-Automation/   n8n, Activepieces
│   ├── Tier-6-Databases/    PostgreSQL, Supabase, Qdrant, DuckDB
│   ├── Tier-7-Voice/        Whisper, Piper, LiveKit
│   ├── Tier-8-Vision-Creative/ ComfyUI, Open Design, Excalidraw
│   ├── Tier-9-Monitoring-Security/ Grafana, Prometheus, Trivy, K8s
│   ├── Tier-10-MCP-Servers/ MCP, vLLM, Ollama, Llama.cpp, Next.js
│   ├── open-design/         Open Design System (150 brand systems)
│   ├── skills/              Anthropic official skills repository
│   └── claude-code/         Claude Code plugins
│
├── Projects/                ← 48 project templates
│   ├── acreage-nike/ ... zenith-realty/
│   ├── jarvis-shell/        Jarvis desktop shell
│   └── mindloop/, mindloop_fixed/
│
├── skills/                  ← 30 master agent skills (mirrored to ~/.agent-memory/)
├── scripts/                 ← CLI, sync, and build scripts
├── src/                     ← Mastra TS engine
├── public/                  ← Static shell demo
└── README.md                ← This file
```

---

## How to Run Everything

### Prerequisites
- Node.js >= 20.0
- Python 3.10+ (Desktop automation)
- Free Gemini key: https://aistudio.google.com/apikey
- Free Groq key: https://console.groq.com
- Supabase project for auth

### 1. Web Console (TanStack SPA)
```bash
cd "jarvis console"
npm install --legacy-peer-deps
npm run dev
```
Open http://localhost:5173

### 2. Mastra TS Backend
```bash
npm install
npm run dev
```
Open http://localhost:8080

### 3. Agent Team Dashboard
```bash
start Agent-Team-Skills/index.html
```
Or: https://agent-team-skills.vercel.app

### 4. Terminal CLI
```bash
npx tsx scripts/jarvis.ts status
```

### 5. Desktop OS Bridge
```bash
python scripts/desktop-voice-bridge.py system
python scripts/desktop-voice-bridge.py screenshot
python scripts/desktop-voice-bridge.py launch "youtube"
=======
                           | |                                      
                           |_|                                      
```

> **Persistent-memory AI Operating System powered by 31 specialized agent skills, Mastra TS engine, and $0 recurring free cloud models.**

[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)
[![Status: Production Ready](https://img.shields.io/badge/Status-Production%20Ready-sage.svg)](#)
[![TypeScript: 100%](https://img.shields.io/badge/TypeScript-100%25-blue.svg)](#)
[![Build: Passing](https://img.shields.io/badge/Build-Passing-brightgreen.svg)](#)
[![UI: Claude Terracotta](https://img.shields.io/badge/Design-Claude%20Terracotta-D97757.svg)](#)

---

## 🚀 What is Jarvis AI OS?

**Jarvis** is a meta-operating system engineered for software architects, founders, and developers. It solves the **#1 fundamental flaw in modern AI tools: Session Amnesia.**

Standard AI tools lose context the moment a chat ends or a window is closed. **Jarvis maintains a single, unified memory bank** (`~/.agent-memory/global/`) that records every architecture decision, code standard, and past mistake.

Whether you talk to Jarvis via the **Web Console**, **Voice Assistant**, **Terminal CLI**, or **Desktop OS Bridge**, you interact with the exact same brain, context, and 31-agent team.

---

## 🎯 What Problem Does Jarvis Solve?

```
TRADITIONAL AI CHATS                           JARVIS AI OS SYSTEM
┌─────────────────────────┐                   ┌─────────────────────────┐
│ Session 1: Build App    │                   │   PERMANENT MEMORY BANK │
│   ↳ Learns DB schema    │                   │   (~/.agent-memory/)    │
├─────────────────────────┤                   ├─────────────────────────┤
│ Session 2: Add Auth     │     VS            │  ✓ Schema remembered    │
│   ❌ Forgot DB schema!  │                   │  ✓ Auth stack remembered│
│   ❌ Repeats mistakes   │                   │  ✓ Zero repeated errors │
└─────────────────────────┘                   └─────────────────────────┘
```

| Problem | Traditional AI Assistant | Jarvis AI OS Solution |
|---|---|---|
| **Session Amnesia** | Context lost when session ends | **Persistent Memory Bank**: Every decision, bug, & architecture decision indexed forever |
| **Tool Fragmentation** | Separate apps for code, search, design | **31 Unified Agent Skills**: CEO, SaaS Builder, Open-Design (32 systems), SRE, Test Agent |
| **Expensive Subscriptions** | $20-$200/month recurring fees | **$0 Recurring Baseline**: Google Gemini 2.5 (1M context free) + Groq Llama 3.3 70B (free) |
| **Single Surface Only** | Only web UI or only IDE extension | **One Brain, 5 Front Doors**: Web App, Voice STT/TTS, Terminal CLI, Desktop OS, Marketing Site |

---

## 🖥 Live Demo & CLI Execution Output

### 1. Terminal CLI Mode (`scripts/jarvis.ts`)
```powershell
npx tsx scripts/jarvis.ts status
```
**Actual System Output**:
```text
==================================================
  JARVIS COMMAND LINE INTERFACE (CLI) v2.2
==================================================

[System Hardware & Execution Mode]
- Platform: win32
- CPU Cores: 8
- Free Memory: 3.7 GB / 15.8 GB (77% used)
- Recommended Execution Mode: HYBRID_FREE_CLOUD ($0 Recurring Baseline)

[Active $0 Free Cloud API Providers]
  ✓ Google Gemini 2.0 Flash (Free Tier)
  ✓ Groq Llama 3.3 70B (Free Tier)
  ✓ OpenRouter Free Auto Fallback

[Project Manager Status]
- Project: AI-OS Core
- Progress: 100% (30/30 tasks completed)
- Status: ON_TRACK

[Memory Bank Check]
- Global Mistakes Log: 1372 chars (Loaded & Active)
```

### 2. Desktop OS Automation Bridge (`scripts/desktop-voice-bridge.py`)
```powershell
# Query System Time, Date, and Active Windows User
python scripts/desktop-voice-bridge.py system
# Output: {"time": "06:00:45 PM", "date": "2026-07-29", "day": "Wednesday", "user": "vishw"}

# Capture High-Resolution Windows Display Screenshot
python scripts/desktop-voice-bridge.py screenshot
# Output: {"status": "success", "filepath": "C:\\Users\\vishw\\Pictures\\jarvis_screenshot_1785328220.png"}
>>>>>>> c180c704013614778035850211fc5ac00e4f705b
```

---

<<<<<<< HEAD
## 68 Open-Source Repos — 10-Tier Architecture

The `GitHub Repo/` directory indexes 68 open-source repositories across 10 tiers:

| Tier | Directory | Technologies |
|---|---|---|
| 0 | Foundation | Docker, Moby, Buildx, Compose, Electron, Tauri, FastAPI |
| 1 | AI Brain | Mastra, LangGraph, LangChain, CrewAI, AG2, LiteLLM, Open WebUI, LlamaIndex, Haystack |
| 2 | AI Developer | OpenHands, Continue, Aider, Roo Code, Cline |
| 3 | Memory | Letta, Mem0, Graphiti |
| 4 | Browser Research | Browser Use, Playwright, Selenium, MarkItDown, Pandoc |
| 5 | Automation | n8n, Activepieces |
| 6 | Databases | PostgreSQL, Redis, Qdrant, Supabase, DuckDB, Polars, Payload, Sealos |
| 7 | Voice | Whisper, Piper, LiveKit |
| 8 | Vision & Creative | ComfyUI, InvokeAI, WebUI, Open Design (150 systems), Penpot, Excalidraw, tldraw, Instatic |
| 9 | Monitoring & Security | Grafana, Prometheus, Loki, Uptime Kuma, Semgrep, Gitleaks, Trivy, Helm, Kubernetes |
| 10 | MCP Servers | MCP Protocol, vLLM, Ollama, Llama.cpp, Arrow, Next.js |

See [GitHub Repo/CATALOG.md](GitHub%20Repo/CATALOG.md) for the full catalog.

---

## Auth System

Powered by **Supabase Auth**:
- **Google OAuth** — one-click sign-in
- **Email/password** — sign-up with email confirmation
- **Protected routes** — all `/console/*` routes require auth
- **Server-side JWT verification** — all server functions validate tokens

Config: `jarvis console/src/integrations/supabase/`

---

## Architecture — "One Brain, 5 Shells"
=======
## 🏛️ Master Architecture — "One Brain, 5 Shells"
>>>>>>> c180c704013614778035850211fc5ac00e4f705b

```
                  ┌───────────────────────────────────────────────────┐
                  │                 JARVIS SINGLE BRAIN               │
                  │  - Mastra AI Engine (src/mastra)                  │
                  │  - Persistent Memory Bank (~/.agent-memory/)      │
<<<<<<< HEAD
                  │  - 30 Master Skills (skills/*)                    │
=======
                  │  - 31 Master Skills (skills/*)                    │
>>>>>>> c180c704013614778035850211fc5ac00e4f705b
                  │  - Governance Registries (registries/*.json)      │
                  └─────────────────────────┬─────────────────────────┘
                                            │
        ┌───────────────────┬───────────────┴───────────────┬───────────────────┐
        ▼                   ▼                               ▼                   ▼
 🖳 WEB CONSOLE       💬 VOICE & CHAT                 💻 TERMINAL CLI     🖥 DESKTOP OS
 jarvis console      /api/chat + /api/transcribe      scripts/jarvis.ts   desktop-voice-bridge.py
<<<<<<< HEAD
 TanStack SPA        Groq Whisper / Orpheus TTS       Mastra TS CLI       Python + Win32
=======
 http://localhost:8080 /api/speak                     Mastra TS CLI       PowerShell + Windows OS
>>>>>>> c180c704013614778035850211fc5ac00e4f705b
```

---

<<<<<<< HEAD
## License

MIT License

---

## Links

| Resource | URL |
|---|---|
| Live Console | https://jarvis-ai-os-kappa.vercel.app |
| Agent Dashboard | https://agent-team-skills.vercel.app |
| GitHub | https://github.com/Vishwajeetsrk/JARVIS-AI-OS |
| Author | Vishwajeet |
=======
## 🤖 Unified 31 Master Agent Skills Roster

All skills reside in [`skills/`](file:///D:/Team%20of%20Vishwajeet/skills/) and mirror globally:

### 👑 Executive & Planning
- `ceo-agent`: Validates ideas, sets project scope, and makes go/no-go decisions.
- `planner`: Creates ordered task sequences with acceptance criteria and deadlines.
- `team-agent`: Coordinates agent handoffs and multi-step execution.
- `memory-agent`: Curates global memory bank and logs architecture decisions.

### 🛠️ Engineering & DevOps
- `saas-builder`: Ships SaaS features end-to-end (PRD → Schema → Security → UI → Deploy).
- `devops-agent`: Manages preview, staging, and production CI/CD deployments.
- `test-agent`: Independent security & QA review (injection, secrets, RLS policy validation).
- `reviewer`: Code diff reviews, regression checks, and standard enforcement.
- `sre`: Sets up uptime monitoring, logging, and automated postmortems.

### 🎨 Design & Visual Creative
- `open-design`: 32+ pre-built design systems (*Claude Terracotta, Apple, Arc, Airbnb, Bento, Brutalism, Claymorphism, Cohere, Coinbase*).
- `frontend-design`: Distinctive visual identity, OKLCH token creation, and micro-animations.
- `algorithmic-art`: Generative p5.js flow fields, particle systems, and canvas art.
- `canvas-design`: Poster, diagram, and layout composition.
- `theme-factory`: Artifact theme engine for docs, slides, and web applications.
- `web-artifacts-builder`: Multi-component React + Tailwind UI builder.

### 🔬 Research & Operations
- `research-resources`: Real-time market, competitor, and technology research.
- `seo-agent`: Keyword strategy, on-page optimization, and technical SEO.
- `legal-agent`: Open-source license verification and compliance audits.
- `ml-agent`: Machine learning pipeline configuration and model benchmarks.
- `ai-agent`: Model selection, prompt tuning, and token cost optimization.
- `workspace-agent`: Indexing and organizing local workspace projects.

---

## ⚡ Quickstart Guide — How to Run & Use

### 1. Prerequisites
- Node.js >= 20.0
- Python 3.10+ (for Desktop OS automation)
- Free Google Gemini Key ([aistudio.google.com/apikey](https://aistudio.google.com/apikey))
- Free Groq Key ([console.groq.com](https://console.groq.com))

### 2. Setup & Installation
```bash
# Clone the repository
git clone https://github.com/Vishwajeetsrk/jarvis-console.git
cd "jarvis console"

# Install dependencies
npm install

# Start the web app console
npm run dev
```

### 3. Launching Surfaces

#### 🖳 Web App Console
Open **`http://localhost:8080/`** in your web browser.

#### 💻 Terminal CLI Mode
```bash
npx tsx scripts/jarvis.ts status
```

#### 🖥 Desktop OS Automation Bridge
```bash
# System status query
python scripts/desktop-voice-bridge.py system

# Screen capture
python scripts/desktop-voice-bridge.py screenshot

# App launcher (YouTube, Google, GitHub)
python scripts/desktop-voice-bridge.py launch "youtube"
```

---

## 🤝 Contributing Guidelines

We welcome community contributions to expand Jarvis AI OS:

1. **Fork the Repository**: `https://github.com/Vishwajeetsrk/jarvis-console`
2. **Create a Branch**: `git checkout -b feature/new-skill-or-tool`
3. **Run Verification**:
   ```bash
   cd "jarvis console"
   npx tsc --noEmit
   ```
4. **Submit a Pull Request**: Provide a detailed summary of your changes.

---

## 🛡️ Security & Privacy Policy

- **Zero Secret Leaks**: All API credentials (`GEMINI_API_KEY`, `GROQ_API_KEY`, `SUPABASE_SECRET_KEY`) are kept strictly inside `.env` files protected by `.gitignore`.
- **Local Data Control**: Screen captures and local memory banks reside in `~/.agent-memory/` on your host machine.
- **Reporting Vulnerabilities**: Report security issues directly to security@vishwajeet.dev.

---

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for complete terms.
>>>>>>> c180c704013614778035850211fc5ac00e4f705b
