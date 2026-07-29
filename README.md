# ✦ Jarvis AI OS — One Brain. Many Shells.

> **Persistent-memory AI Operating System powered by 31 specialized agent skills, Mastra TS engine, and $0 recurring free cloud models.**

[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)
[![Status: Production Ready](https://img.shields.io/badge/Status-Production%20Ready-sage.svg)](#)
[![TypeScript: 100%](https://img.shields.io/badge/TypeScript-100%25-blue.svg)](#)
[![Build: Passed](https://img.shields.io/badge/Build-Passing-brightgreen.svg)](#)

---

## 🚀 What is Jarvis AI OS?

**Jarvis** is a meta-operating system designed for developers, founders, and engineers. It solves the **#1 problem in AI development: session amnesia.**

Instead of starting every chat from scratch, Jarvis maintains a **single persistent memory bank** (`~/.agent-memory/global/`) that records every decision, architecture design, and mistake ever logged.

Whether you access Jarvis via the **Web Console**, **Desktop OS Voice Assistant**, **Terminal CLI**, or **REST API**, you interact with the exact same brain, context, and agent team.

---

## 🎯 What Problem Does Jarvis Solve?

| Problem | Traditional LLM / AI Chat | Jarvis AI OS Solution |
|---|---|---|
| **Session Amnesia** | Context disappears when chat ends | **Persistent Memory Bank**: Every project decision & mistake indexed forever |
| **Tool Fragmentation** | Separate tools for search, design, code, test | **31 Unified Agent Skills**: CEO, SaaS Builder, Open-Design (32 systems), SRE, Test Agent |
| **Expensive API Costs** | Paid subscriptions for every model | **$0 Recurring Baseline**: Google Gemini 2.5 (1M context free) + Groq Llama 3.3 70B (free) |
| **Single Surface Only** | Chat UI only or IDE plugin only | **One Brain, 5 Front Doors**: Web App, Voice STT/TTS, Terminal CLI, Desktop OS, Marketing Site |

---

## 🏛️ Master System Architecture

```
                  ┌───────────────────────────────────────────────────┐
                  │                 JARVIS SINGLE BRAIN               │
                  │  - Mastra AI Engine (src/mastra)                  │
                  │  - Persistent Memory Bank (~/.agent-memory/)      │
                  │  - 31 Master Skills (skills/*)                    │
                  │  - Governance Registries (registries/*.json)      │
                  └─────────────────────────┬─────────────────────────┘
                                            │
        ┌───────────────────┬───────────────┴───────────────┬───────────────────┐
        ▼                   ▼                               ▼                   ▼
 🖳 WEB CONSOLE       💬 VOICE & CHAT                 💻 TERMINAL CLI     🖥 DESKTOP OS
 jarvis console      /api/chat + /api/transcribe      scripts/jarvis.ts   desktop-voice-bridge.py
 http://localhost:8080 /api/speak                     Mastra TS CLI       PowerShell + Windows OS
```

---

## 🤖 Unified 31 Skills Roster

All skills are consolidated under [`skills/`](file:///D:/Team%20of%20Vishwajeet/skills/) and mirrored globally:

- **Executive & Orchestration**: `ceo-agent`, `planner`, `team-agent`, `memory-agent`
- **Engineering & Build**: `saas-builder`, `devops-agent`, `test-agent`, `reviewer`, `sre`
- **Design & Creative**: `open-design` *(32 systems: Claude, Apple, Arc, Bento, Brutalism)*, `frontend-design`, `algorithmic-art`, `canvas-design`, `theme-factory`, `web-artifacts-builder`
- **Research & Strategy**: `research-resources`, `seo-agent`, `legal-agent`, `ml-agent`, `ai-agent`
- **Operations & Systems**: `workspace-agent`, `mcp-builder`, `skill-creator`, `webapp-testing`, `voice`, `coworker`, `docx`, `pdf`, `pptx`, `xlsx`

---

## ⚡ Quickstart Guide — How to Run

### 1. Prerequisites
- Node.js >= 20.0
- Python 3.10+ (for Desktop OS bridge)
- Free Google Gemini key ([aistudio.google.com/apikey](https://aistudio.google.com/apikey))
- Free Groq key ([console.groq.com](https://console.groq.com))

### 2. Installation & Setup
```bash
# Clone the repository
git clone https://github.com/Vishwajeetsrk/jarvis-console.git
cd "jarvis console"

# Install dependencies
npm install

# Start the web app console
npm run dev
```

### 3. Run Surface Interfaces

#### 🖳 Web App Console
Open **`http://localhost:8080/`** in your browser.

#### 💻 Terminal CLI Mode
```bash
npx tsx scripts/jarvis.ts status
```

#### 🖥 Desktop OS Automation Bridge
```bash
# Take Windows screenshot
python scripts/desktop-voice-bridge.py screenshot

# Query Windows date, time, and user
python scripts/desktop-voice-bridge.py system
```

---

## 🤝 Contributing Guidelines

We welcome contributions! To contribute to Jarvis AI OS:

1. **Fork the Repository**: `https://github.com/Vishwajeetsrk/jarvis-console`
2. **Create a Feature Branch**: `git checkout -b feature/my-new-skill`
3. **Run Type Checks**:
   ```bash
   cd "jarvis console"
   npx tsc --noEmit
   ```
4. **Commit & Push**: Maintain clear commit messages.
5. **Open a Pull Request**: Explain what feature or skill your PR adds.

---

## 🛡️ Security & Privacy Policy

- **Zero Secret Leaks**: API keys (`GEMINI_API_KEY`, `GROQ_API_KEY`, `SUPABASE_SECRET_KEY`) are loaded from `.env` and never committed to source control.
- **Local Data Privacy**: Desktop screenshots and local memory banks reside in `~/.agent-memory/` on your host machine.
- **Vulnerability Reporting**: Report security issues directly to security@vishwajeet.dev.

---

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for complete terms.
