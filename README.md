# JARVIS AI OS — One Brain. Many Shells.

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
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Vercel](https://img.shields.io/badge/Live%20Console-Vercel-black.svg)](https://jarvisaios.vercel.app)
[![Supabase](https://img.shields.io/badge/Supabase-BaaS-3FCF8E?logo=supabase)](https://supabase.com)
[![GitHub Repos](https://img.shields.io/badge/Open%20Source-68%20Repos-blue.svg)](GitHub%20Repo/CATALOG.md)

---

## Live Site

| Surface | URL | Description |
|---|---|---|
| **Jarvis Console** | https://jarvisaios.vercel.app | TanStack SPA with auth, chat, 30 agents |
| **GitHub** | https://github.com/Vishwajeetsrk/JARVIS-AI-OS | Main repository |

---

## What is Jarvis AI OS?

**Jarvis** is a meta-operating system engineered for software architects, founders, and developers. It solves the **#1 fundamental flaw in modern AI tools: Session Amnesia.**

Standard AI tools lose context the moment a chat ends or a window is closed. **Jarvis maintains a single, unified memory bank** (`~/.agent-memory/global/`) that records every architecture decision, code standard, and past mistake.

Whether you talk to Jarvis via the **Web Console**, **Voice Assistant**, **Terminal CLI**, or **Desktop OS Bridge**, you interact with the exact same brain, context, and 30-agent team.

---

## What Problem Does Jarvis Solve?

```
TRADITIONAL AI CHATS                           JARVIS AI OS SYSTEM
┌─────────────────────────┐                   ┌─────────────────────────┐
│ Session 1: Build App    │                   │   PERMANENT MEMORY BANK │
│   ↳ Learns DB schema    │                   │   (~/.agent-memory/)    │
├─────────────────────────┤                   ├─────────────────────────┤
│ Session 2: Add Auth     │     VS            │  ✓ Schema remembered    │
│   X Forgot DB schema!   │                   │  ✓ Auth stack remembered│
│   X Repeats mistakes    │                   │  ✓ Zero repeated errors │
└─────────────────────────┘                   └─────────────────────────┘
```

| Problem | Traditional AI Assistant | Jarvis AI OS Solution |
|---|---|---|
| **Session Amnesia** | Context lost when session ends | **Persistent Memory Bank**: Every decision, bug, & architecture decision indexed forever |
| **Tool Fragmentation** | Separate apps for code, search, design | **30 Unified Agent Skills**: CEO, SaaS Builder, Open-Design, SRE, Test Agent |
| **Expensive Subscriptions** | $20-$200/month recurring fees | **$0 Recurring Baseline**: Google Gemini 2.5 (1M context free) + Groq Llama 3.3 70B (free) |
| **Single Surface Only** | Only web UI or only IDE extension | **One Brain, 5 Front Doors**: Web App, Voice STT/TTS, Terminal CLI, Desktop OS, Marketing Site |

---

## Repository Structure

```
D:\Team of Vishwajeet/
├── jarvis console/          TanStack SPA (deployed to Vercel)
│   ├── src/routes/
│   │   ├── index.tsx              Landing page with interactive shell
│   │   ├── auth.tsx               Sign-in page (Google OAuth + email)
│   │   └── _authenticated/console/ Protected agent console
│   └── package.json
│
├── Agent-Team-Skills/       30-agent skill system
│   ├── .claude/skills/      30 agent skill definitions
│   ├── design-systems/      150 brand design systems
│   └── projects/            Live templates (Vite + React)
│
├── GitHub Repo/             68 open-source repos (10 tiers)
│   ├── CATALOG.md           Full catalog of all 68 repos
│   └── Tier-0-Foundation/ through Tier-10-MCP-Servers/
│
├── Projects/                48 project templates
├── skills/                  30 master agent skills (mirrored to ~/.agent-memory/)
├── scripts/                 CLI, sync, and build scripts
├── src/                     Mastra TS engine
├── public/                  Static shell demo
└── README.md                This file
```

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
        v                   v                               v                   v
  WEB CONSOLE          VOICE & CHAT                    TERMINAL CLI        DESKTOP OS
  jarvis console      /api/chat + /api/transcribe      scripts/jarvis.ts   desktop-voice-bridge.py
  TanStack SPA        Groq Whisper / Orpheus TTS       Mastra TS CLI       Python + Win32
```

---

## Features

### AI Chat with Tool Calling
- **10 agent tools** wired directly into the chat — memory (read/write/search), hardware detection, cost tracking, project reports, documentation, PR audits, SEO generation, framework evaluation
- **Web search toggle** — enables real-time web search via Tavily/Brave API
- **Voice input** — microphone button records audio, transcribes via Groq Whisper, and sends as text
- **Model selection** — Google Gemini (free) and Groq (free) models, with auto-fallback
- **File attachments** — images, PDFs, markdown, code files

### Persistent Memory
- **File-based memory** — `~/.agent-memory/global/` stores decisions, mistakes, patterns, and stack notes as markdown
- **Vector memory search** — Supabase pgvector enables semantic search across past entries
- **Auto-titling** — threads are automatically named from the first user message

### Agent System
- **7 Mastra agents** — CEO, Team, SaaS Builder, Design, Test, DevOps, Memory
- **11 Mastra tools** — including memory, hardware detection, cost tracking, documentation, PR security audit, SEO generator, framework evaluation
- **Golden Flow workflow** — 6-step pipeline from validation to deployment
- **30 agent skills** — executive, engineering, design, research, operations

### Authentication & Storage
- **Supabase Auth** — Google OAuth + email/password
- **Supabase Database** — threads, messages, projects, user_settings, memory_entries tables
- **Row Level Security** — all tables protected with per-user policies

### Voice & Desktop
- **Voice input** — microphone recording → Groq Whisper transcription
- **Text-to-speech** — Groq Orpheus TTS API endpoint
- **Desktop automation** — Python bridge for system info, screenshots, app launching

---

---

## Tech Stack

### Languages
| Language | Usage |
|---|---|
| **TypeScript** | Primary language — web app, agents, CLI |
| **Python** | Desktop automation bridge, skill scripts |
| **SQL** | Supabase PostgreSQL schema, RLS policies |

### Frontend
| Technology | Purpose |
|---|---|
| **React 19** | UI component library |
| **TanStack React Router + Start** | SSR/SSG meta-framework with file-based routing |
| **TanStack React Query** | Server-state management & caching |
| **Vite 5** | Build tool & dev server |
| **Tailwind CSS v4** | Utility-first CSS framework |
| **Radix UI Primitives** | Accessible, headless UI components (dialog, dropdown, popover, select, tabs, tooltip, etc.) |
| **shadcn/ui** | Component library (Radix + Tailwind) |
| **Motion (Framer Motion)** | Declarative animations |
| **Lucide React** | Icon library |
| **Recharts** | Charts & data visualization |
| **Sonner** | Toast notifications |
| **Vaul** | Drawer/sheet component |
| **cmdk** | Command palette search |
| **Embla Carousel** | Touch carousel |
| **React Hook Form + Zod** | Form validation |

### AI & Agents
| Technology | Purpose |
|---|---|
| **Vercel AI SDK** | Unified LLM streaming, chat, tool calling |
| **Google Gemini (free)** | Primary LLM — chat, reasoning, vision |
| **Groq Cloud (free)** | Llama 3.3 70B, Whisper STT, Orpheus TTS |
| **OpenRouter (free)** | Auto-fallback across open models |
| **Ollama** | Local LLM inference (offline/private) |
| **Mastra AI (@mastra/core)** | Multi-agent orchestration — 7 agents, workflows, tools |
| **Streamdown** | Streaming markdown renderer with CJK/code/math/Mermaid |

### Backend & Infrastructure
| Technology | Purpose |
|---|---|
| **Supabase** | PostgreSQL, Auth (Google OAuth + email), Storage, Realtime |
| **Vercel** | Deployment — SSR via TanStack Start |
| **Docker Compose** | Self-hosted services (n8n, OpenHands, PostgreSQL, Redis) |
| **n8n** | Workflow automation (invoicing, QA, alerts) |
| **OpenHands** | AI coding sandbox (Docker) |
| **Node.js / Bun** | JavaScript runtimes |
| **Redis** | Cache & message broker |

### MCP Servers (Model Context Protocol)
| Tool | Purpose |
|---|---|
| **Supabase MCP** | Database management & debugging |
| **Stitch MCP** | UI component generation |
| **Chrome DevTools MCP** | Browser testing & Lighthouse audits |
| **Firebase MCP** | Backend integration |
| **Postman MCP** | API testing & collections |

### Integrations & Connectors
| Service | Purpose |
|---|---|
| **Slack** | Communication & workflows |
| **Figma** | Design system connector |
| **Google Calendar** | Scheduling & events |
| **Gmail** | Email |
| **Notion** | Documentation |
| **Cloudflare** | Workers, DNS, R2 |
| **Razorpay** | Payment processing |
| **Brave Search** | Web search plugin |
| **Wolfram Alpha** | Computational knowledge |
| **ElevenLabs** | Text-to-speech |
| **Guardrails AI** | PII detection & policy filtering |
| **Playwright** | E2E browser automation |

### Development Tools
| Tool | Purpose |
|---|---|
| **Git / GitHub** | Version control, CI/CD |
| **PowerShell** | Windows CLI & automation |
| **Docker** | Container runtime |
| **RabbitMQ** | Message queuing (agent communication bus) |
| **Stitch** | Design-to-code generation |
| **PostgreSQL 16** | Relational database |

---

## Quickstart Guide

### 1. Prerequisites
- Node.js >= 20.0
- Python 3.10+ (for Desktop OS automation)
- Free Google Gemini Key (https://aistudio.google.com/apikey)
- Free Groq Key (https://console.groq.com)

### 2. Setup & Installation
```bash
# Clone the repository
git clone https://github.com/Vishwajeetsrk/JARVIS-AI-OS.git
cd JARVIS-AI-OS

# Copy environment file and fill in your keys
cp .env.example .env

# Install dependencies
npm install

# Start the web app console
npm run dev
```

### 3. Launching Surfaces

#### Web App Console
Open **`http://localhost:5173`** in your web browser.

#### Terminal CLI Mode
```bash
# From project root — npm scripts
npm run jarvis:status

# From ANY directory — batch wrappers (add repo to PATH for permanent use)
"D:\Team of Vishwajeet\jarvis.bat" status

# Permanent setup: add repo to PATH
.\setup-cli.ps1          # Run once, then just: jarvis status
```

#### Desktop OS Automation Bridge
```bash
# From project root — npm scripts
npm run bridge:system      # System status
npm run bridge:screenshot   # Screen capture
npm run bridge:launch -- "youtube"  # App launcher

# From ANY directory
"D:\Team of Vishwajeet\bridge.bat" system
```

---

## 68 Open-Source Repos — 10-Tier Architecture

The `GitHub Repo/` directory indexes 68 open-source repositories across 10 tiers:

| Tier | Directory | Technologies |
|---|---|---|
| 0 | Foundation | Docker, Electron, Tauri, FastAPI |
| 1 | AI Brain | Mastra, LangGraph, CrewAI, LiteLLM |
| 2 | AI Developer | OpenHands, Continue, Aider, Roo Code |
| 3 | Memory | Letta, Mem0, Graphiti |
| 4 | Browser Research | Playwright, Selenium, Pandoc |
| 5 | Automation | n8n, Activepieces |
| 6 | Databases | PostgreSQL, Supabase, Qdrant, DuckDB |
| 7 | Voice | Whisper, Piper, LiveKit |
| 8 | Vision & Creative | ComfyUI, Open Design, Excalidraw |
| 9 | Monitoring & Security | Grafana, Prometheus, Trivy, K8s |
| 10 | MCP Servers | MCP, vLLM, Ollama, Llama.cpp, Next.js |

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

## Security & Privacy Policy

- **Zero Secret Leaks**: All API credentials are kept inside `.env` files protected by `.gitignore`.
- **Local Data Control**: Screen captures and local memory banks reside in `~/.agent-memory/` on your host machine.
- **Reporting Vulnerabilities**: Report via GitHub Security Advisory or email vishwajeetsrk@gmail.com. See [SECURITY.md](SECURITY.md).

---

## License

MIT License
