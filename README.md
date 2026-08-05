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

> **A persistent-memory AI Operating System** — chat, 30+ specialized agents, 150 design systems, 68 open-source repos, voice, and a real-time dashboard. **Runs free** on Google Gemini + Groq cloud models.

[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Vercel](https://img.shields.io/badge/Live%20Console-Vercel-black.svg)](https://jarvisaios.vercel.app)
[![Supabase](https://img.shields.io/badge/Supabase-BaaS-3FCF8E?logo=supabase)](https://supabase.com)

---

## What is JARVIS AI OS?

Normal AI chatbots **forget everything** when the chat ends. Jarvis doesn't.

Jarvis is a **persistent-memory AI operating system**: it remembers your decisions, mistakes, and architecture choices in a permanent memory bank, so every conversation starts where the last one ended. One brain, many front doors — **Web Console**, **Voice**, **Terminal CLI**, and a **Desktop bridge** all talk to the same brain.

**Live site:** https://jarvisaios.vercel.app

---

## Available Interfaces

Jarvis is available as a web application, desktop application, and command-line tool:

### Jarvis IDE (Desktop Application)

The standalone desktop application is available for:
- **macOS** (Apple Silicon + Intel)
- **Windows** (x64)
- **Linux** (x64, AppImage + deb)

### Jarvis CLI

Command-line interface for integrating Jarvis into your development workflows and automation scripts.

For detailed information on both interfaces, visit [jarvisaios.com](https://jarvisaios.com)

---

## Download & Install

### IDE: Download the Desktop Application

**Download Jarvis IDE** directly from [jarvisaios.com/download](https://jarvisaios.com/download)

| Platform | Link |
|---|---|
| macOS (Apple Silicon) | [Download .dmg](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/releases/latest/download/Jarvis-IDE-mac-arm64.dmg) |
| macOS (Intel) | [Download .dmg](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/releases/latest/download/Jarvis-IDE-mac-x64.dmg) |
| Windows (x64) | [Download .exe](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/releases/latest/download/Jarvis-IDE-windows-x64.exe) |
| Linux (x64) | [Download .AppImage](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/releases/latest/download/Jarvis-IDE-linux-x64.AppImage) |

### CLI: Install in Your Terminal

**Prompt to code to deployment in your terminal.** Unleash custom agents in a highly interactive terminal experience. Build features in complex codebases. Automate workflows in seconds. Analyze errors and trace bugs with precision.

**Install on macOS, Linux, or Windows:**

#### Windows (PowerShell)

```powershell
irm 'https://jarvisaios.com/cli/install.ps1' | iex
```

#### macOS / Linux

```bash
curl -fsSL https://jarvisaios.com/cli/install.sh | bash
```

#### npm (All Platforms)

```bash
npm install -g @jarvis-ai/cli
```

**Verify installation:**

```bash
jarvis --version
jarvis --help
```

**Quick start with CLI:**

```bash
# Start a new project
jarvis init my-project

# Chat with Jarvis in your terminal
jarvis chat

# Run agent on a task
jarvis run "build a REST API with auth"

# Check system status
jarvis status
```

---

## Getting Started

Get started with Jarvis by following our comprehensive **[first project guide](https://jarvisaios.com/docs/getting-started/first-project/)**. This hands-on tutorial walks you through Jarvis's essential features.

**What you'll learn:**

- Setting up steering files for project-specific guidance
- Creating and managing specs for structured development
- Configuring hooks to automate your workflow
- Connecting MCP servers for external integrations

### One-Click Migration

Import your VS Code setup including extensions and settings during the initial setup process.

---

## Documentation

**[📚 View Documentation →](https://jarvisaios.com/docs/)**

- [Installation Guide](docs/setup/INSTALLATION.md) — Full install guide for Desktop, CLI, and Development Environment
- [Getting Started](https://jarvisaios.com/docs/getting-started) — Installation and first project setup for IDE and CLI
- [IDE Guide](https://jarvisaios.com/docs/ide) — Desktop application features and workflows
- [CLI Guide](https://jarvisaios.com/docs/cli) — Command-line interface usage and automation
- [Agent Guide](https://jarvisaios.com/docs/agents) — Spec-driven development with AI agents
- [API Reference](https://jarvisaios.com/docs/api) — API documentation for integrations

---

## Project Structure — What's Inside

### 1. Website (Live: jarvisaios.vercel.app)

A TanStack Start SPA with two areas:

**Public pages** — `Home (/)`, `How It Works`, `Projects`, `Skills`, `Auth` (Google OAuth + email/password via Supabase)

**Console (`/console` — requires login):**

| Page | What it does |
|---|---|
| **Dashboard** (new) | Live activity feed, 8 stat cards, quick command + voice, real RSS news, recent projects |
| **Chat** | Mastra multi-agent chat with tool calling, streaming, file attachments, memory |
| **Projects** | Project manager + per-project pages |
| **Design Systems** | 150 brand design systems + detail pages |
| **Templates** | Reusable project templates + detail pages |
| **Roadmaps & Learnify** | 91 developer roadmaps (AI Agents, System Design, DevOps, Web) with AI tutoring |
| **Skills / Plugins / Tools** | Enable the agent skills, plugins, and tools Jarvis can use |
| **Connectors** | Slack, Figma, Gmail, Notion, GitHub, and more |
| **GitHub** | Live repo stats from your connected GitHub |
| **Settings** | Profile, memory, and model preferences |

**API routes:**

| Route | Purpose |
|---|---|
| `/api/chat` | AI chat streaming (Gemini / Groq / OpenRouter) |
| `/api/roadmaps` | Developer roadmaps catalog & module details |
| `/api/transcribe` | Speech-to-text (Groq Whisper) |
| `/api/speak` | Text-to-speech |
| `/api/vision` | Screen/image analysis |
| `/api/news` | Real tech/AI news from RSS (no API key) |
| `/api/desktop/{system,screenshot}` | Desktop system info & screenshots |
| `/api/design-systems/*` | Design system data |

### 2. Jarvis Local (runs on your laptop/PC)

| Tool | How to run | What it does |
|---|---|---|
| **CLI** | `npm run jarvis` (or `jarvis.bat` / `jarvis.ps1`) | System status, hardware detect, project report, memory bank check |
| **Desktop Voice Bridge** | `npm run bridge` | Zero-dependency Windows bridge: system info, screenshots, app launching |
| **Express daemon** | `npm run daemon` | Local server (port 7456) serving design systems from `data/` |
| **Mastra engine** | `npm run dev:mastra` | The AI agent engine — 19 tools (memory, code runner, docx/pptx/xlsx, reports, golden-flow workflow) |

### 3. Content & Asset Libraries

| Folder | Contents |
|---|---|
| `skills/` | 433 skill files (30-agent skill system, mirrored to `~/.agent-memory/`) |
| `GitHub Repo/` | 68 open-source repos across 10 tiers + `CATALOG.md` |
| `Projects/` | 48 project templates |
| `assets/` | Design system assets |
| `data/` | 819 files — design-system manifests |
| `supabase/migrations/` | Database schema + row-level security (RLS) |

### 4. Ops & Infrastructure

- `docker-compose.yml` — n8n, OpenHands, PostgreSQL, Redis
- Vercel deployment config (`vercel.json`, `.vercel/`)
- `.mcp.json` — Supabase / Stitch / Chrome DevTools MCP servers
- Env-driven API keys — Google Gemini, Groq, OpenRouter (**all free tiers**)

---

## Quick Start — Run It in 4 Steps

### Prerequisites
- **Node.js 20+** (we recommend 22+)
- **npm** (comes with Node)
- (Optional) a free **Supabase** project for auth + database
- (Optional) free API keys — see step 2

### Step 1 — Install

```bash
# clone the repo (or copy this folder)
git clone https://github.com/Vishwajeetsrk/JARVIS-AI-OS.git
cd JARVIS-AI-OS

# install dependencies
npm install --legacy-peer-deps
```

### Step 2 — Environment

```bash
cp .env.example .env
```

Open `.env` and fill in the keys:

| Key | Where to get it | Required? |
|---|---|---|
| `GEMINI_API_KEY` / `GOOGLE_GENERATIVE_AI_API_KEY` | https://aistudio.google.com/apikey (free) | Yes — main AI model |
| `GROQ_API_KEY` | https://console.groq.com (free) | Yes — STT/TTS + fallback model |
| `SUPABASE_URL` + `SUPABASE_PUBLISHABLE_KEY` | your Supabase project → Project Settings → API | Yes — auth + database |

> **No Supabase yet?** Sign up at https://supabase.com, create a project, then copy the URL + anon/publishable key into `.env`. Run the SQL in `supabase/migrations/` in the **SQL Editor** to create the tables.

### Step 3 — Start the website

```bash
npm run dev
```

Open **http://localhost:8080** in your browser.

### Step 4 — (Optional) Start the AI engine + daemon

```bash
# website + AI agents + daemon all at once
npm run dev:all

# or individually:
npm run dev:mastra   # AI agents
npm run daemon       # design-systems daemon (port 7456)
```

> **Tip:** The workspace contains huge unrelated folders (e.g. `GitHub Repo/` has ~590k files). They're excluded from the Vite file watcher so `npm run dev` stays fast — don't remove those exclusions in `vite.config.ts`.

---

## Common Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start the website only |
| `npm run dev:mastra` | Start the AI agent engine only |
| `npm run dev:all` | Start website + agents + daemon |
| `npm run build` | Build for production |
| `npm run typecheck` | Type-check the code |
| `npm run test` | Run tests |
| `npm run jarvis` | Jarvis CLI — system + project status |
| `npm run bridge` | Desktop voice/system bridge |
| `npm run daemon` | Design-systems daemon (port 7456) |

---

## Tech Stack (summary)

- **Frontend:** React 19, TanStack Start + Router, TanStack Query, Vite 7, Tailwind CSS v4, shadcn/ui + Radix, Motion, Lucide, Recharts, Sonner
- **AI:** Vercel AI SDK, Google Gemini (free), Groq (free), OpenRouter, Mastra multi-agent engine, Streamdown, docx / pptxgenjs / exceljs
- **Backend:** Supabase (PostgreSQL, Auth, Realtime), Vercel SSR, Docker Compose (n8n, OpenHands, Postgres, Redis), Node.js / Bun
- **Tools:** Git/GitHub, Playwright, Stitch, PowerShell, Docker

---

## Auth & Security

- **Supabase Auth** — Google OAuth + email/password
- **Protected routes** — every `/console/*` page requires login
- **Server-side JWT verification** — all server functions validate tokens
- **Row Level Security** — every table has per-user policies
- **Zero secret leaks** — all API keys stay in `.env` (git-ignored)
- Found a vulnerability? Email **vishwajeetsrk@gmail.com** or see [SECURITY.md](SECURITY.md).

---

## License

MIT License

---

## Code of Conduct

This project has adopted the [Jarvis AI OS Code of Conduct](CODE_OF_CONDUCT.md). For more information see the [Code of Conduct FAQ](https://www.contributor-covenant.org/faq) or contact **vishwajeetsrk@gmail.com** with any additional questions or comments.

---

## Support

For additional support:
- Join our community [Discord server](https://discord.gg/jarvis-ai) for quick help and discussions with other developers
- For security issues, please email **vishwajeetsrk@gmail.com** — do NOT create a public GitHub issue
- For general questions, open a [GitHub Discussion](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/discussions)

---

**Maintainer:** Vishwajeet — vishwajeetsrk@gmail.com
