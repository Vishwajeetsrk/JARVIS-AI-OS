# Installation Guide

Complete guide to installing Jarvis AI OS — CLI, Desktop, and Development Environment.

## Option 1: Use the Live Demo (No Install)

The fastest way to try Jarvis — open in your browser:

**[jarvisaios.vercel.app](https://jarvisaios.vercel.app)**

Sign in with Google or email/password. All features work in the browser.

---

## Option 2: Run Locally (Development)

### Prerequisites

- **Node.js 20+** (we recommend 22+)
- **npm** (comes with Node)
- (Optional) Free API keys for AI features

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/Vishwajeetsrk/JARVIS-AI-OS.git
cd JARVIS-AI-OS

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Set up environment
cp .env.example .env
# Edit .env with your API keys (see below)

# 4. Start the server
npm run dev
```

Open **http://localhost:8080** in your browser.

### Environment Variables

| Key | Where to get it | Required? |
|---|---|---|
| `GEMINI_API_KEY` | https://aistudio.google.com/apikey (free) | Yes — main AI model |
| `GROQ_API_KEY` | https://console.groq.com (free) | Yes — STT/TTS + fallback |
| `SUPABASE_URL` | Supabase dashboard → Project Settings → API | Yes — auth + database |
| `SUPABASE_PUBLISHABLE_KEY` | Same page (the `anon` key) | Yes — auth + database |

### Optional: Full Stack (AI Agents + Daemon)

```bash
# Start everything at once
npm run dev:all

# Or individually:
npm run dev:mastra   # AI agents
npm run daemon       # Design-systems server (port 7456)
```

---

## Option 3: CLI (From Source)

The CLI runs from the cloned repo — no npm publish needed.

### Install from GitHub

#### macOS / Linux

```bash
git clone --depth 1 https://github.com/Vishwajeetsrk/JARVIS-AI-OS.git ~/.jarvis-cli
cd ~/.jarvis-cli && npm install --legacy-peer-deps

# Add to PATH
echo 'alias jarvis="npx tsx ~/.jarvis-cli/cli/index.ts"' >> ~/.bashrc
source ~/.bashrc
```

#### Windows (PowerShell)

```powershell
git clone --depth 1 https://github.com/Vishwajeetsrk/JARVIS-AI-OS.git "$env:USERPROFILE\.jarvis-cli"
cd "$env:USERPROFILE\.jarvis-cli"; npm install --legacy-peer-deps

# Create alias
function jarvis { npx tsx "$env:USERPROFILE\.jarvis-cli\cli\index.ts" @args }
```

### Verify

```bash
jarvis --version
jarvis --help
jarvis status
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

## Option 4: Desktop App (In Development)

The desktop app uses Tauri 2 (Rust + Web). To build it:

### Prerequisites

- **Rust toolchain:** https://rustup.rs/
- **System dependencies:**
  - **macOS:** Xcode Command Line Tools
  - **Linux:** `sudo apt install libgtk-3-dev libwebkit2gtk-4.1-dev libappindicator3-dev librsvg2-dev`
  - **Windows:** Microsoft Visual C++ Build Tools

### Build

```bash
npm install --legacy-peer-deps
npm run tauri:build
```

Output: Platform-specific installers in `src-tauri/target/release/bundle/`.

---

## Troubleshooting

### "npm install" fails with peer dependency errors

```bash
npm install --legacy-peer-deps
```

### Port 8080 already in use

```bash
# Kill the process using the port
npx kill-port 8080
# Or use a different port
npm run dev -- --port 3000
```

### Missing API keys

All AI features require free API keys. See [Environment Variables](#environment-variables) above.

### Database errors

You need a Supabase project with the schema applied. Run the SQL in `supabase/migrations/` in the Supabase SQL Editor.

---

## What's Included

After installation, you have access to:

- **Web Console** — Full application at http://localhost:8080
- **30+ AI Agents** — Via Mastra multi-agent engine
- **150 Design Systems** — Accessible via CLI and web
- **Persistent Memory** — Cross-session recall via pgvector
- **Specs System** — Spec-driven development workflow
- **Hooks** — File change automation
- **Steering** — Project guidance injected into AI context
- **Voice** — Speech-to-text and text-to-speech
