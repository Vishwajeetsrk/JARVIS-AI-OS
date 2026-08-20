# 📋 JARVIS AI OS — Comprehensive Workspace & Repository Audit

This audit documents all core applications, sub-repositories, design systems, and integration components within Vishwajeet's environment.

---

## 🏛️ 1. Core Architecture Repositories

| Repository / Module | Purpose | Language & Stack | Status | JARVIS Integration Recommendation |
| :--- | :--- | :--- | :---: | :--- |
| **JARVIS AI OS (Root)** | Autonomous Personal AI Operating System | TypeScript, React 19, TanStack Start, Mastra TS | 🟢 Active | **Core OS Hub** (Multi-tier memory, 7 context modes, 3D avatar, 12 PM planner). |
| **Python Voice Assistant** (`scripts/jarvis_desktop_assistant.py`) | Native Windows voice loop with Echo Guard & wake word | Python 3.10+, PyAudio, SpeechRecognition, Pyttsx3 | 🟢 Active | **Core Voice Engine** (Runs in background, connects to local Ollama & web). |
| **Three.js VRM Viewer** (`src/components/jarvis/vrm-avatar-viewer.tsx`) | 3D VRoid companion avatar with eye tracking & lip-sync | TypeScript, WebGL, `@pixiv/three-vrm`, Three.js | 🟢 Active | **Visual AI Companion** (Renders 3D humanoid character with 60fps animations). |
| **Wardelio Mobile App** (`C:\Users\vishw\OneDrive\Desktop\Wardelio`) | Mobile style & wardrobe companion (150+ screens) | React, Vite, Capacitor (Android/iOS), Tailwind | 🟢 Integrated | **Personal Project Hub** (Tracked under Builder Mode & CLI launcher). |
| **53 Design Systems & Presets** (`Projects/*`) | High-conversion UI themes & templates for digital product sales | HTML5, CSS3, React, Tailwind CSS | 🟢 Packaged | **Side-Income Digital Assets** (Serves as product template library). |
| **Salesforce Sync Module** (`src/lib/integrations/salesforce-client.ts`) | Razorpay-to-Salesforce 7-step reconciliation & email generator | TypeScript, Node.js, Python | 🟢 Active | **Office Work Mode** (Automates daily donation reconciliation & update emails). |

---

## 🧩 2. Repository Evaluation & Strategy Matrix

| Component | Purpose | Integrate? | Priority | Risk | Action |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Mastra TS** | Multi-Agent Orchestration | **YES** | 🔴 HIGH | LOW | Used as official AI agent engine with 19+ tools. |
| **Ollama Local AI** | 100% Offline LLMs (Llama 3, Mistral) | **YES** | 🔴 HIGH | LOW | Fallback engine when internet is disconnected. |
| **Capacitor Android** | Mobile APK generation & WiFi bridge | **YES** | 🟡 MED | LOW | Packaged with `Install-On-Phone.bat`. |
| **Supabase + pgvector** | Cloud Postgres & semantic vector memory | **YES** | 🟡 MED | LOW | Stores long-term memory embeddings. |
| **n8n Workflow Bridge** | External automation webhooks | **YES** | 🟢 NORMAL | LOW | Bridges CRM and invoice workflows. |
| **Tauri Desktop** (`src-tauri/`) | Rust native window wrapper | **OPTIONAL** | 🟢 LOW | MED | Kept isolated; web PWA & BAT launcher currently provide zero-friction startup. |

---

## 🛡️ 3. Safety & Backup Principle
No functional code is deleted or overwritten. All modules use strict TypeScript interfaces, and Git version control tracks every milestone.
