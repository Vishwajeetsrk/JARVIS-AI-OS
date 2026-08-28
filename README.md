<div align="center">

# ⚡ JARVIS AI OS — Autonomous Personal Intelligence Operating System
### *Embodied 3D AI Companion • APEX Constellation Brain • 8-Bot Fleet • Real-Time Voice Studio • Universal App Builder • PC Device Bridge*

![JARVIS AI OS Hero Banner](public/jarvis-hero-banner.svg)

[![Release: v4.0.0](https://img.shields.io/badge/Release-v4.0.0_APEX-blue?style=for-the-badge&logo=rocket)](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg?style=for-the-badge)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Next.js 15](https://img.shields.io/badge/Next.js-15.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Supabase Cloud](https://img.shields.io/badge/Database-Supabase_PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com)
[![Three.js](https://img.shields.io/badge/Three.js-R3F_Particle_Core-black?style=for-the-badge&logo=three.js)](https://threejs.org)
[![Google Gemini](https://img.shields.io/badge/AI_Engine-Gemini_2.0_Flash-4285F4?style=for-the-badge&logo=google)](https://ai.google.dev/)
[![Groq LPU](https://img.shields.io/badge/LPU_Engine-Groq_Llama_3.3_70B-orange?style=for-the-badge&logo=fastapi)](https://groq.com)
[![GitHub Stars](https://img.shields.io/github/stars/Vishwajeetsrk/JARVIS-AI-OS?style=for-the-badge&logo=github)](https://github.com/Vishwajeetsrk/JARVIS-AI-OS)

---

### [📖 README](https://github.com/Vishwajeetsrk/JARVIS-AI-OS#readme) • [🤝 Code of Conduct](CODE_OF_CONDUCT.md) • [🚀 Contributing](CONTRIBUTING.md) • [📜 MIT License](LICENSE) • [🛡️ Security Policy](SECURITY.md) • [📦 Releases](RELEASE.md)

---

### [🌐 Live APEX Platform](http://localhost:3001) • [💻 Local Console](http://localhost:8080/console) • [📚 Interactive Docs & Blog](http://localhost:8080/blog) • [🤖 Autonomous Fleet](http://localhost:8080/console/fleet) • [🎙️ Voice Studio](http://localhost:8080/console/voice) • [🏗️ App Builder](http://localhost:8080/console/apps) • [📊 Usage Analytics](http://localhost:8080/console/analytics)

</div>

---

## 🌌 What is JARVIS AI OS?

Traditional AI chatbots **forget everything** the moment you close the tab. **JARVIS AI OS** does not.

**JARVIS AI OS** is an **autonomous, persistent-memory AI Operating System** that operates across **Desktop, Laptop, Mobile, Web, and Cloud**. It bridges natural language intent with real-world execution: designing, coding, testing, and deploying **Full Stack Web Apps, Mobile Apps, 3D Canvas Visuals, Chrome Extensions, and Cloud Automations**, while controlling local PC applications via direct OS daemon bridge.

```mermaid
graph TD
    User([User: Voice / Chat / Mobile / PC Bridge]) --> APEX[APEX 3D Orb & Reasoning Constellation]
    
    subgraph Core_OS_Engines [JARVIS AI OS Core Engines]
        APEX --> Router[Multi-Model AI Router: Gemini 2.0 Flash / Groq LLaMA 3.3 / DeepSeek R1]
        Router --> ChiefOfStaff[Chief of Staff Coordinator]
        ChiefOfStaff --> MemoryEngine[4-Tier Neural Memory: Working / Episodic / Semantic / Procedural]
        ChiefOfStaff --> AgentConstellation[18-Node Specialized Agent Constellation]
        ChiefOfStaff --> AppForge[Universal App Builder: Full-Stack / Mobile / Web / Extension]
        ChiefOfStaff --> VoiceEngine[Real-Time Hybrid Voice & Speech Engine]
        ChiefOfStaff --> OSBridge[PC & Laptop OS Device Bridge: CLI / Apps / Files]
    end

    subgraph Cloud_And_Connectors [Connectors & Database]
        OSBridge --> LocalApps[VS Code / Chrome / Terminal / Slack / Discord]
        Router --> MCP[MCP Servers: GitHub / Postgres / Supabase / Notion / Linear]
        VoiceEngine --> Whisper[Groq Whisper STT + Speech Synthesis]
        AgentConstellation --> CloudDB[(Supabase Cloud 15-Table PostgreSQL)]
    end
```

---

## 🚀 Key Master Features (v4.0.0)

### 🪐 1. APEX-UI 3D Orb & Reasoning Constellation (`http://localhost:3001`)
* **3D Particle Orb Core (`ApexCore3D` & `ApexHeroOrb`)**: Real-time WebGL particle core reacting to autonomous states (`idle` → `listening` → `thinking` → `speaking`).
* **18-Node Reasoning Constellation (`ReasoningWeb`)**: High-contrast circuit traces and glowing agent nodes for Chief of Staff, Memory, Strategist, Researcher, Finance, Engineering, Design, Sales, Ops, and more.
* **Interactive Agent Cockpits**: Click any agent node to launch a focused AI cockpit with real-time prompt streaming, one-click action triggers, model selector, and speech synthesis.

### 💻 2. PC & Laptop OS Device Bridge (`/api/os`)
* **1-Click Application Launcher**: Instantly launch local desktop applications (VS Code, Windows Terminal, Google Chrome, File Explorer, Slack, Discord).
* **PowerShell & Terminal Execution**: Execute terminal commands directly from voice or chat with sandboxed security guardrails.
* **File System Operations**: Read, inspect, and write workspace files autonomously.

### 🎙️ 3. Real-Time Hybrid Voice Pipeline (`components/VoicePipeline.tsx`)
* **Zero-Latency Speech-to-Text**: Continuous browser speech recognition with cloud Groq Whisper-large-v3 fallback.
* **Multi-Accent Neural Speech Synthesis**: Realistic voice output with natural prosody and cadence.
* **Hands-Free Action Execution**: Say *"Open VS Code"* or *"Launch Terminal"* or *"Summarize today's priorities"* for instantaneous execution.

### 🏗️ 4. Universal Project Workspace (`/console/projects`)
* **Multi-Tab Architecture**: Overview, Live Preview, Monaco Editor, Builds, Analysis, Deploy, Database, Plugins, and GitHub Sync.
* **Direct GitHub Integration**: Synchronize, create repositories, and push project code directly to `github.com/Vishwajeetsrk` in one click.

### 🤖 5. 8-Bot Autonomous Fleet & Org Chart (`/console/fleet`, `/console/agents`)
* **Executive Chief of Staff**: Scans multi-channel updates (Slack, Gmail, Calendar) to produce morning executive briefings.
* **24-Agent Org Chart Hierarchy**: Visual team breakdown with active run tracking, cost attribution, and heartbeat automation.

### 📊 6. Real-Time Telemetry & Shared Analytics (`/console/analytics`)
* **Live Token & Cost Attribution**: Real-time tracking of token consumption across Gemini, Groq, and OpenRouter.
* **Sub-Second Voice Latency Metrics**: Real-time latency tracking achieving sub-400ms benchmarks.
* **Multi-Channel Ingestion Feed**: Telemetry tracking Slack messages, emails, calendar events, and code PRs.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies |
| :--- | :--- |
| **Frontend Platform** | Next.js 15.3, React 19, Three.js, React Three Fiber, TanStack Start, Tailwind CSS |
| **Aesthetics & UI** | OKLCH Color Palette, Aceternity UI, Glassmorphic Surfaces, Lucide Icons |
| **AI Engines** | Google Gemini 2.0 Flash, Groq LPU (LLaMA 3.3 70B), OpenRouter (DeepSeek R1, Claude 3.5) |
| **Speech & Audio** | Web Speech API, Groq Whisper-large-v3, SpeechSynthesis, Web Audio API |
| **Database & Cloud** | Supabase Cloud (15 PostgreSQL Tables), Row-Level Security, Edge Functions |
| **Desktop Bridge** | Node.js child_process daemon, PowerShell 7, MCP Standard (JSON-RPC) |

---

## ⚡ Quick Start & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Vishwajeetsrk/JARVIS-AI-OS.git
cd JARVIS-AI-OS
```

### 2. Configure Environment Variables
Create `.env.local` or `.env` in the root directory:
```ini
# Supabase Cloud
SUPABASE_URL="https://tupgfxqkefgntrpgakxk.supabase.co"
SUPABASE_PUBLISHABLE_KEY="sb_publishable_xS9EjiYb3cjZQ_hVKWvPWg_wF9SKZML"
SUPABASE_SERVICE_ROLE_KEY="your_service_role_key"

# AI Model Providers
GEMINI_API_KEY="your_gemini_api_key"
GROQ_API_KEY="your_groq_api_key"
OPENROUTER_API_KEY="your_openrouter_api_key"
```

### 3. Install Dependencies & Launch
```bash
# Launch APEX-UI Flagship Platform (Port 3001)
cd APEX-UI
npm install
npm run dev

# Or Launch Full Console (Port 8080)
npm run dev
```

Open **`http://localhost:3001`** for the APEX Constellation Platform or **`http://localhost:8080/console`** for the Full Console.

---

## 🤝 Community & Support

* **Creator & Lead Architect**: [Vishwajeet (@Vishwajeetsrk)](https://github.com/Vishwajeetsrk)
* **GitHub Issues**: [github.com/Vishwajeetsrk/JARVIS-AI-OS/issues](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/issues)
* **License**: [MIT License](LICENSE)

<div align="center">
<b>Built with ⚡ by Vishwajeet and the Open Source AI Community</b>
</div>
