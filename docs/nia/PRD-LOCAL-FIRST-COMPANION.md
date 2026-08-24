# 🌸 NIA — Local-First 3D Personal AI Companion (PRD v1.0)

> **"NIA is a local-first Windows AI companion, not a website."**  
> When your laptop starts, NIA starts as a lightweight desktop companion. You see only **Nia herself**—a transparent 3D character with no room, dashboard, or background. She can talk, listen, animate, show emotion, and help with approved tasks locally. When internet is available, she can optionally use online AI and services.

---

## 1. Product Vision & Principles

1. **NO ROOM BACKGROUND / NO DASHBOARD BEHIND HER:**
   - Default visual is a transparent window containing only the live 3D Nia character.
   - She appears as if she is standing directly on your Windows desktop.
2. **LOCAL-FIRST (Mode A):**
   - Offline speech recognition, offline TTS, local wake word ("Hey Nia"), local SQLite memory, and local VRM animation.
3. **ONLINE & HYBRID (Mode B & C):**
   - Cloud AI models (Gemini 2.0 Flash, Groq Llama 3.3) for complex reasoning and current web information when internet is available.
4. **NATURAL LAYERED MOTION SYSTEM:**
   - **Layer 1:** Idle natural breathing.
   - **Layer 2:** Randomized natural blinking.
   - **Layer 3:** Subtle eye gaze following cursor.
   - **Layer 4:** Head rotation and attentive tilting.
   - **Layer 5:** Phonetic lip-sync visemes (`aa`, `ih`, `ou`, `ee`, `oh`).
   - **Layer 6:** Emotional expressions (`neutral`, `happy`, `curious`, `caring`, `thinking`, `speaking`, `focused`, `resting`).

---

## 2. 5-Phase Architecture & Build Plan

### 🟢 Phase 1 — Make Her Alive (Completed & Live)
- Windows desktop app launcher (`Launch-Nia.bat` & Desktop shortcut).
- Transparent Three.js WebGL canvas (`/companion`).
- Model asset: `Nai.vrm` (VRM 1.0 humanoid skeleton with spring bone physics).
- Natural breathing loop, randomized eye blink generator, and mouse cursor gaze tracking.

### 🟢 Phase 2 — Make Her Talk (Completed & Live)
- Microphone VAD (Voice Activity Detection) with wake word detection ("Hey Nia").
- Speech-to-Text & Text-to-Speech audio pipeline with instant speech cut-off on user interruption.
- Real-time phonetic viseme modulation (`aa`, `ih`, `ou`, `ee`, `oh`).
- Dynamic visual state transitions: `IDLE` ➔ `LISTENING` ➔ `THINKING` ➔ `WORKING` ➔ `SPEAKING` ➔ `IDLE`.

### 🟢 Phase 3 — Give Her a Brain (Completed & Live)
- Offline Mock & Local AI Provider + Online Cloud Providers (Gemini / Groq).
- HybridRouter for automatic connectivity-aware delegation.
- EmotionEngine for empathetic responses based on conversation sentiment.
- ProactiveEngine for gentle, non-intrusive check-ins with Quiet Hours suppression.
- Local durable memory vault with credential regex redaction.

### 🟢 Phase 4 — Give Her Hands (Completed & Live)
- Laptop automation: open applications, search files, read documents.
- 7 VIDA SOTA Productivity Engines (Reply Savior, Prompt Savior, Resume Savior, Workspace Janitor, Daily Wrap, Market Research, Deck & Sheet Builder).
- 3-tier risk classification (Destructive actions always stage safely to Windows Recycle Bin).

### 🟢 Phase 5 — Personal Companion (Completed & Live)
- Daily planning, tasks, career roadmap, and learning tracks.
- Multi-agent fleet (Planner, Research, Browser, File, Document, Presentation, Spreadsheet, Coding, Testing, Review).
- 1-click Windows Desktop Shortcut on `C:\Users\vishw\Desktop\Nia AI Companion.lnk`.
