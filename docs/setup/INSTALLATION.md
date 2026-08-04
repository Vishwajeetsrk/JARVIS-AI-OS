# Installation Guide

Complete guide to installing Jarvis AI OS — Desktop IDE, CLI, and Development Environment.

## Quick Install (CLI)

### Windows (PowerShell)

```powershell
irm 'https://jarvisaios.com/cli/install.ps1' | iex
```

### macOS / Linux

```bash
curl -fsSL https://jarvisaios.com/cli/install.sh | bash
```

### npm (All Platforms)

```bash
npm install -g @jarvis-ai/cli
```

**Verify installation:**

```bash
jarvis --version
jarvis --help
```

---

## Desktop IDE

### Download

| Platform | Link | Size |
|---|---|---|
| macOS (Apple Silicon) | [Download .dmg](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/releases/latest/download/Jarvis-IDE-mac-arm64.dmg) | ~120 MB |
| macOS (Intel) | [Download .dmg](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/releases/latest/download/Jarvis-IDE-mac-x64.dmg) | ~120 MB |
| Windows (x64) | [Download .exe](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/releases/latest/download/Jarvis-IDE-windows-x64.exe) | ~100 MB |
| Linux (x64) | [Download .AppImage](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/releases/latest/download/Jarvis-IDE-linux-x64.AppImage) | ~100 MB |

### System Requirements

- **OS:** macOS 12+, Windows 10+, Ubuntu 20.04+
- **RAM:** 4 GB minimum, 8 GB recommended
- **Disk:** 500 MB free space
- **Network:** Internet connection for AI features (free API keys required)

### One-Click Migration

Import your VS Code setup including extensions and settings during the initial setup process.

---

## Development Environment

### Prerequisites

- **Node.js 20+** (we recommend 22+)
- **npm** (comes with Node)
- (Optional) a free **Supabase** project for auth + database
- (Optional) free API keys — see step 2

### Step 1 — Install

```bash
# clone the repo
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

---

## CLI Commands

| Command | What it does |
|---|---|
| `jarvis init [name]` | Create a new Jarvis project |
| `jarvis chat` | Chat with Jarvis in your terminal |
| `jarvis run "task"` | Run agent on a task |
| `jarvis status` | Check system status |
| `jarvis config` | Configure API keys and settings |
| `jarvis skills` | List available agent skills |
| `jarvis memory` | View and manage memory |
| `jarvis --help` | Show all commands |

---

## Troubleshooting

### CLI not found after install

```bash
# Refresh your shell
source ~/.bashrc   # Linux
source ~/.zshrc    # macOS

# Or use npx
npx jarvis --version
```

### Permission denied (macOS/Linux)

```bash
sudo npm install -g @jarvis-ai/cli
```

### Node.js version too old

```bash
# Install Node.js 20+ from https://nodejs.org/
# Or use nvm:
nvm install 20
nvm use 20
```

### Port already in use

```bash
# Kill process on port 8080
lsof -ti:8080 | xargs kill -9   # macOS/Linux
netstat -ano | findstr :8080     # Windows (then kill the PID)
```

---

## Community & Support

- **Documentation:** https://jarvisaios.com/docs
- **Discord:** https://discord.gg/jarvis-ai
- **GitHub Issues:** https://github.com/Vishwajeetsrk/JARVIS-AI-OS/issues
- **Security:** vishwajeetsrk@gmail.com (do NOT create public issues)

---

**Maintainer:** Vishwajeet — vishwajeetsrk@gmail.com
