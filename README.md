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

> **A persistent-memory AI Operating System** — chat, 24 specialized agents, 53 design systems, voice, and a real-time dashboard. **Runs free** on Google Gemini + Groq cloud models.

[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Vercel](https://img.shields.io/badge/Live%20Demo-Vercel-black.svg)](https://jarvisaios.vercel.app)
[![Supabase](https://img.shields.io/badge/Supabase-BaaS-3FCF8E?logo=supabase)](https://supabase.com)
[![Release](https://img.shields.io/github/v/release/Vishwajeetsrk/JARVIS-AI-OS?label=Desktop%20App&logo=github)](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/releases/latest)

---

## Live Demo

**Try Jarvis now — no install required:** [jarvisaios.vercel.app](https://jarvisaios.vercel.app)

Sign in with Google or email/password (free Supabase auth). All features work in the browser.

---

## What is JARVIS AI OS?

Normal AI chatbots **forget everything** when the chat ends. Jarvis doesn't.

Jarvis is a **persistent-memory AI operating system**: it remembers your decisions, mistakes, and architecture choices in a permanent memory bank, so every conversation starts where the last one ended. One brain, many front doors — **Web Console**, **Voice**, and a **Local CLI** all talk to the same brain.

---

## Available Interfaces

### 1. Web Console (Live)

The full application runs in your browser — no install needed.

- **Live site:** [jarvisaios.vercel.app](https://jarvisaios.vercel.app)
- Features: Chat with agents, project management, 53 design systems, voice, memory recall, skills, hooks, specs

### 2. Local Development Server

Run the full Jarvis stack on your machine:

| Tool | Command | What it does |
|---|---|---|
| **Web Console** | `npm run dev` | Website at http://localhost:8080 |
| **AI Agents** | `npm run dev:mastra` | Mastra multi-agent engine with 19+ tools |
| **Daemon** | `npm run daemon` | Design-systems server on port 7456 |
| **All at once** | `npm run dev:all` | Website + agents + daemon |
| **CLI** | `npm run jarvis` | System status, hardware detect, memory bank |
| **Voice Bridge** | `npm run bridge` | Desktop system info, screenshots, app launching |

### 3. Desktop App

Tauri 2-based desktop shell for macOS, Windows, and Linux. It opens the live Jarvis console in a native window — sign in and everything works. Requires an internet connection.

**Download the latest installer from [GitHub Releases](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/releases/latest):**

| Platform | Format |
|---|---|
| **macOS** (Apple Silicon + Intel) | `.dmg` |
| **Windows** (x64) | `.exe` / `.msi` |
| **Linux** (x64) | `.AppImage` / `.deb` / `.rpm` |

Or build it yourself (requires the Rust toolchain):

```bash
npm run tauri:build
```

See [Tauri setup docs](https://v2.tauri.app/start/prerequisites/) for Rust installation.

---

## Quick Start — Run Locally

### Prerequisites

- **Node.js 20+** (we recommend 22+)
- **npm** (comes with Node)
- (Optional) a free **Supabase** project for auth + database
- (Optional) free API keys — see step 2

### Step 1 — Clone & Install

```bash
git clone https://github.com/Vishwajeetsrk/JARVIS-AI-OS.git
cd JARVIS-AI-OS
npm install --legacy-peer-deps
```

### Step 2 — Environment

```bash
cp .env.example .env
```

Open `.env` and fill in the keys:

| Key | Where to get it | Required? |
|---|---|---|
| `GEMINI_API_KEY` | https://aistudio.google.com/apikey (free) | Yes — main AI model |
| `GROQ_API_KEY` | https://console.groq.com (free) | Yes — STT/TTS + fallback |
| `SUPABASE_URL` | Supabase dashboard → Project Settings → API | Yes — auth + database |
| `SUPABASE_PUBLISHABLE_KEY` | Same as above (the `anon` / `publishable` key) | Yes — auth + database |

> **No Supabase yet?** Sign up free at [supabase.com](https://supabase.com), create a project, copy the URL + anon key into `.env`. Run the SQL in `supabase/migrations/` in the **SQL Editor** to create tables.

### Step 3 — Start

```bash
npm run dev
```

Open **http://localhost:8080** in your browser.

### Step 4 — (Optional) Full Stack

```bash
npm run dev:all    # website + AI agents + daemon
```

---

## CLI Usage

The CLI is included in the repo — run it via `npm run jarvis` or directly:

```bash
# System status
npm run jarvis

# Or with tsx directly
npx tsx cli/index.ts --help
npx tsx cli/index.ts status
npx tsx cli/index.ts init
npx tsx cli/index.ts specs list
npx tsx cli/index.ts hooks list
npx tsx cli/index.ts steering list
```

### CLI Commands

| Command | Description |
|---|---|
| `jarvis init` | Initialize `.jarvis/` config directory |
| `jarvis status` | Show project status |
| `jarvis config get <key>` | Get a config value |
| `jarvis config set <key> <value>` | Set a config value |
| `jarvis specs list` | List all specs |
| `jarvis specs show <name>` | Show spec details |
| `jarvis specs create <name>` | Create a new spec |
| `jarvis hooks list` | List registered hooks |
| `jarvis steering list` | List steering files |
| `jarvis memory <query>` | Search cross-session memory |
| `jarvis run <name>` | Run a hook or workflow |
| `jarvis update` | Check for updates |

---

## What's Inside

### Web Console Pages (at /console — requires login)

| Page | What it does |
|---|---|
| **Dashboard** | Live activity feed, stat cards, quick command + voice, RSS news |
| **Chat** | Multi-agent chat with tool calling, streaming, file attachments, memory recall |
| **Projects** | Project manager + per-project pages |
| **Design Systems** | 53 brand design systems + detail pages |
| **Templates** | Reusable project templates |
| **Roadmaps** | 91 developer roadmaps (AI, System Design, DevOps, Web) |
| **Skills** | Agent skills management — create, enable, disable |
| **Plugins** | Plugin marketplace — browse, install, configure |
| **Hooks** | Workflow automation — register hooks on file changes |
| **Specs** | Spec-driven development — requirements, design, tasks |
| **Steering** | Project guidance files injected into AI context |
| **Connectors** | Slack, Figma, Gmail, Notion, GitHub integrations |
| **Settings** | Profile, memory, model preferences |

### API Routes

| Route | Purpose |
|---|---|
| `/api/chat` | AI chat streaming (Gemini / Groq) |
| `/api/roadmaps` | Developer roadmaps catalog |
| `/api/transcribe` | Speech-to-text (Groq Whisper) |
| `/api/speak` | Text-to-speech |
| `/api/vision` | Screen/image analysis |
| `/api/news` | Real tech/AI news from RSS (no API key needed) |
| `/api/design-systems/*` | Design system data |

### Local Tools

| Tool | Command | What it does |
|---|---|---|
| **CLI** | `npm run jarvis` | System status, project report, memory check |
| **Daemon** | `npm run daemon` | Local server (port 7456) |
| **Mastra Engine** | `npm run dev:mastra` | 19+ AI tools (memory, code runner, docs, reports) |
| **Voice Bridge** | `npm run bridge` | Desktop system info, screenshots |

### Project Structure

| Folder | Contents |
|---|---|
| `src/` | Application source — routes, components, lib, mastra |
| `.jarvis/` | Specs, hooks, steering config (created by `jarvis init`) |
| `cli/` | CLI entry point (Commander.js) |
| `src-tauri/` | Desktop app shell (Tauri + Rust) |
| `supabase/migrations/` | Database schema + RLS policies |
| `skills/` | 433 agent skill files |
| `plugins/` | 45 plugin manifests |
| `data/` | 819 design-system manifest files |
| `Projects/` | 48 project templates |
| `scripts/` | Install scripts, utilities |

---

## Tech Stack

- **Frontend:** React 19, TanStack Start + Router, Vite 7, Tailwind CSS v4, shadcn/ui + Radix, Motion, Lucide, Recharts
- **AI:** Vercel AI SDK, Google Gemini (free), Groq (free), Mastra multi-agent engine
- **Backend:** Supabase (PostgreSQL + pgvector, Auth, Realtime), Node.js
- **Desktop:** Tauri 2 (Rust) — macOS, Windows, Linux
- **CLI:** Commander.js
- **PWA:** vite-plugin-pwa with workbox

---

## Design Language & Motion

Jarvis uses a custom motion language tuned for "snap" — fast acceleration, instant settle, no floaty easing:

- **Motion tokens** — `--ease-snap: cubic-bezier(0.2, 0, 0, 1)` (UI default), `--ease-settle: cubic-bezier(0.16, 1, 0.3, 1)` (entrances), with a quick / base / slow cadence of `160ms / 280ms / 450ms`.
- **Card choreography** — cards lift 2px with a terracotta border tint on hover, buttons lift + glow, arrows slide 3px, and the hero screenshot slow-zooms (`group-hover:scale-102`).
- **Status language** — blinking status pips with pulse rings, a scanline sweep while health probes are in flight, and stat counters that slot-settle to their final value.
- **Accessibility** — a global `prefers-reduced-motion` kill switch disables all animation for users who ask for it, and every interactive element gets a visible `:focus-visible` outline.

---

## Auth & Security

- **Supabase Auth** — Google OAuth + email/password (with a visible show/hide password toggle)
- **Protected routes** — every `/console/*` page requires login
- **Server-side JWT verification** — all server functions validate tokens
- **Row Level Security** — every table has per-user policies
- **No hardcoded secrets** — all API keys in `.env` (git-ignored)
- Found a vulnerability? Email **vishwajeetsrk@gmail.com**

---

## License

MIT License — see [LICENSE](LICENSE) for details.

---

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to its terms.

---

## Support

- **Issues:** [GitHub Issues](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/issues)
- **Discussions:** [GitHub Discussions](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/discussions)
- **Security:** Email **vishwajeetsrk@gmail.com** — do NOT create public issues

---

**Maintainer:** Vishwajeet — vishwajeetsrk@gmail.com
