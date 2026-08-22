# 🌸 NIA AI — EMBODIED 3D COMPANION & PERSONAL AI OPERATING SYSTEM
## Master Blueprint, Technical Architecture & SOTA Implementation Plan

---

### Executive Overview & Vision
**Nia** is an embodied real-time 3D AI companion and personal operating system engineered for Windows. She combines an interactive **VRM 3D avatar** with real-time **voice & speech visemes**, **6-layer procedural animation**, **multi-agent reasoning cores**, and **safe laptop automation**, fully benchmarked against the **10 SOTA use cases from VIDA (`https://vida.app/zh-CN/sotacases/`)**.

```
                           ┌────────────────────────────────────────┐
                           │            NIA DESKTOP APP             │
                           │    (React 19 + Three.js + Tauri)       │
                           └──────────────────┬─────────────────────┘
                                              │
                    ┌─────────────────────────┼─────────────────────────┐
                    ▼                         ▼                         ▼
            ┌───────────────┐         ┌───────────────┐         ┌───────────────┐
            │   3D AVATAR   │         │ VOICE & SPEECH│         │ DASHBOARD & UI│
            │   (@pixiv/    │         │ (WebSpeech /  │         │ (Console, HUD,│
            │  three-vrm)   │         │  Whisper STT) │         │  Task Studio) │
            └───────┬───────┘         └───────┬───────┘         └───────┬───────┘
                    │                         │                         │
                    └─────────────────────────┼─────────────────────────┘
                                              ▼
                           ┌────────────────────────────────────────┐
                           │              NIA AI CORE               │
                           │  (Mastra + LLM Router + Orchestrator)  │
                           └──────────────────┬─────────────────────┘
                                              │
                    ┌─────────────────────────┼─────────────────────────┐
                    ▼                         ▼                         ▼
            ┌───────────────┐         ┌───────────────┐         ┌───────────────┐
            │ MEMORY SYSTEM │         │ SPECIALIZED   │         │  PLANNER &    │
            │ (Session/Daily│         │    AGENTS     │         │ EMOTION STATE │
            │  Project/Long)│         │  (24 Engines) │         │    ENGINE     │
            └───────┬───────┘         └───────┬───────┘         └───────┬───────┘
                    │                         │                         │
                    └─────────────────────────┼─────────────────────────┘
                                              ▼
                           ┌────────────────────────────────────────┐
                           │         TOOL & SECURITY LAYER          │
                           │ (4-Tier Permissions: READ/SUGGEST/EXEC)│
                           └──────────────────┬─────────────────────┘
                                              │
                    ┌─────────────────────────┼─────────────────────────┐
                    ▼                         ▼                         ▼
            ┌───────────────┐         ┌───────────────┐         ┌───────────────┐
            │ FILE SYSTEM   │         │ CODING AGENT  │         │ LAPTOP AUTO   │
            │ (Safe Cleanup,│         │ (Scan, Debug, │         │ (App Launch,  │
            │  Duplicates)  │         │  Refactor)    │         │  PowerShell)  │
            └───────────────┘         └───────────────┘         └───────────────┘
```

---

## Part 1: SOTA Benchmark Matrix (Vida SOTA Cases Integration)

Nia implements and elevates the **10 Core SOTA Capabilities** pioneered by Vida:

| SOTA Use Case | Engine Module | Description & Implementation |
|---|---|---|
| **1. 回复救星 (Reply Rescue)** | `ReplyRescueAgent` | Ingests conversational threads, tone requirements, and generates one-click polished responses. |
| **2. 提示词救星 (Prompt Rescue)** | `PromptOptimizer` | Automatically refines raw/vague user prompts into production-grade multi-step prompts. |
| **3. 简历救星 (Resume Rescue)** | `CareerResumeAgent` | Transforms career experience into 98/100 ATS-score resumes and tailored cover letters. |
| **4. 工作区整理 (Workspace Cleanup)** | `WorkspaceJanitor` | Scans Desktop, Downloads, and Temp folders; provides visual preview before moving to Recycle Bin. |
| **5. 每日复盘 (Daily Wrap)** | `DailyWrapAgent` | End-of-day autonomous synthesis of code commits, tasks completed, and tomorrow's top 5 priorities. |
| **6. 投资研究 (Investment Research)** | `MarketAnalystAgent` | Synthesizes market signals, SEC/company filings, and financial metrics into structured reports. |
| **7. 市场研究 (Market Research)** | `MarketTrendAgent` | Scans industry benchmarks, competitors, and customer feedback into executive briefs. |
| **8. 产品研究 (Product Research)** | `ProductStrategist` | Analyzes competitor feature sets, user pain points, and drafts detailed PRDs. |
| **9. 演示文稿生成 (Deck Builder)** | `PptxDeckGenerator` | Converts outlines and markdown documents directly into styled PowerPoint `.pptx` decks. |
| **10. 电子表格生成 (Sheet Builder)** | `ExcelSheetBuilder` | Cleans raw CSV/JSON data into formatted, formula-driven `.xlsx` spreadsheets. |

---

## Part 2: 3D VRM Avatar Architecture & Controllers

Nia’s embodied visual presence is powered by modular, decoupled TypeScript controllers:

```
                  ┌─────────────────────────────────────┐
                  │            AvatarManager            │
                  │   (Model Loading, Lifecycles, GLB)  │
                  └──────────────────┬──────────────────┘
                                     │
       ┌──────────────┬──────────────┼──────────────┬──────────────┐
       ▼              ▼              ▼              ▼              ▼
┌──────────────┐┌──────────────┐┌──────────────┐┌──────────────┐┌──────────────┐
│  Animation   ││  Expression  ││   LipSync    ││ EyeTracking  ││ Performance  │
│  Controller  ││  Controller  ││  Controller  ││  Controller  ││  Controller  │
│(Idle, Walk,  ││(Joy, Caring, ││(Visemes A, I,││(Gaze Tracking││ (Lite, Std,  │
│ Wave, Nod)   ││Surprise, Cat)││  U, E, O)    ││ + Blinking)  ││  High Modes) │
└──────────────┘└──────────────┘└──────────────┘└──────────────┘└──────────────┘
```

### 1. Six-Layer Procedural Animation Blender
- **Layer 1 (Base Idle):** Continuous harmonic chest breathing + pelvic micro-balance oscillations.
- **Layer 2 (Head Posture):** Smooth Slerp head tilt toward active mouse/interaction vector.
- **Layer 3 (Gaze & Blinking):** Procedural saccades (micro eye jumps) + randomized natural blink interval (2.5s - 6.5s).
- **Layer 4 (Speech Visemes):** Audio-frequency FFT analysis driving VRM morph targets (`aa`, `ih`, `ou`, `ee`, `oh`).
- **Layer 5 (Emotion Morphs):** Smooth parameter blending across 12 emotional states with non-snapping 400ms lerp.
- **Layer 6 (Gestures):** Contextual conversational hand gestures (listening nod, thinking chin-touch, happy wave).

---

## Part 3: Voice & Conversational Pipeline

```
USER ("Hey Nia")
      │
      ▼
🎤 [WakeWord Engine] ──(Detected)──► 👁️ Avatar switches to LISTENING State (attentive tilt)
      │
      ▼
🗣️ [Speech Recognition] ──────────► 📝 Text Transcribed
      │
      ▼
🧠 [Nia Cognitive Router]
      ├─ Intent Classification
      ├─ Memory Retrieval (Session + Daily + Project + Long-Term)
      ├─ Agent Execution (Coding, Files, Planning, Research)
      └─ Response Synthesis + Emotion Selection
      │
      ▼
🔊 [Text-to-Speech Engine] ───────► 👄 Real-time Viseme Lip-Sync (A, I, U, E, O)
      │
      ▼
⚡ [Interruption Guard] ───────────► If user speaks while Nia talks, abort speech instantly and listen.
```

---

## Part 4: 4-Tier Security & Permission Governance

Every action executed by Nia follows strict zero-trust sandbox rules:

1. **Level 1 (READ ONLY):** Scan directory, inspect code, read log files, check system telemetry. *(Executed automatically)*
2. **Level 2 (SUGGEST):** Propose code refactoring, outline task schedules, suggest email drafts. *(Displayed in UI)*
3. **Level 3 (CONFIRM):** Delete redundant temp files, apply Git branch commits, run bash build scripts. *(Requires 1-Click User Approval)*
4. **Level 4 (CRITICAL / RESTRICTED):** Permanent file deletion, financial transactions, credential changes. *(Explicit modal confirmation with full diff / dry-run preview)*

---

## Part 5: Complete Roadmap & MVP Delivery

### 🚀 Phase 1 (Current Milestone — MVP Ready):
- [x] **Deep VRoid Inspection:** Verified `Nia V1 model.vroid` (8.68 MB, 50 textures, 646 morphs).
- [x] **Safe Checksum Backup:** Created `D:\Team of Vishwajeet\Nia\source\Nia V1 model.vroid`.
- [x] **3D VRM Engine Ready:** `@pixiv/three-vrm` + Three.js canvas in `VRMAvatarViewer`.
- [x] **SSR Timeout Resolved:** Dev server fixed and running at `http://localhost:8080/`.
- [x] **Interactive Controls:** Blinking, breathing, walking, talking visemes, mouse eye-tracking, and emotion presets active.

### 🌟 Phase 2 (VRM Export & Direct Load):
- [ ] Export `Nia-V1.vrm` from VRoid Studio 2.14 into `D:\Team of Vishwajeet\public\vrm\nia-v1.vrm`.
- [ ] Direct one-click load into the companion interface.

### 🧠 Phase 3 (Cognitive Agents & Vida 10 SOTA Cases):
- [ ] Implement `ReplyRescueAgent`, `PromptOptimizer`, `WorkspaceJanitor`, and `DailyWrapAgent`.
- [ ] Local SQLite persistent memory storage with encryption.
- [ ] Offline local voice bridge using Piper / Sherpa-ONNX / WebSpeech API.
