# ✦ JARVIS AI OS — One Brain. Many Shells.

```
       _____                      _                   _____   ____  
      |  __ \                    | |                 / ____| / __ \ 
      | |__) |__ _ __ ___  _ __  | |_  ___  _ __    | |  __ | |  | |
      |  ___// _ \ '__/ __|| '_ \ | __|/ _ \| '_ \   | | |_ || |  | |
      | |   |  __/ |  \__ \| |_) || |_|  __/| | | |  | |__| || |__| |
      |_|    \___|_|  |___/| .__/  \__|\___||_| |_|   \_____| \____/ 
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
```

---

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

```
                  ┌───────────────────────────────────────────────────┐
                  │                 JARVIS SINGLE BRAIN               │
                  │  - Mastra AI Engine (src/mastra)                  │
                  │  - Persistent Memory Bank (~/.agent-memory/)      │
                  │  - 30 Master Skills (skills/*)                    │
                  │  - Governance Registries (registries/*.json)      │
                  └─────────────────────────┬─────────────────────────┘
                                            │
        ┌───────────────────┬───────────────┴───────────────┬───────────────────┐
        ▼                   ▼                               ▼                   ▼
 🖳 WEB CONSOLE       💬 VOICE & CHAT                 💻 TERMINAL CLI     🖥 DESKTOP OS
 jarvis console      /api/chat + /api/transcribe      scripts/jarvis.ts   desktop-voice-bridge.py
 TanStack SPA        Groq Whisper / Orpheus TTS       Mastra TS CLI       Python + Win32
```

---

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
