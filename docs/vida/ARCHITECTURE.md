# 🏛️ Vida AI OS — Master Architecture

```
+-----------------------------------------------------------------------------------+
|                                 USER INTERFACE                                    |
|  +---------------------------+  +--------------------------+  +----------------+  |
|  | 3D VRM AVATAR (Nia/Nai)   |  | COMMAND CONSOLE (Chat)   |  | VIDA SOTA HUB  |  |
|  | Three.js • VRMC_vrm 1.0   |  | Streaming Responses      |  | 7 Tools Suite  |  |
|  | Viseme Lip-Sync (aa-oh)   |  | Speech Synthesis Audio   |  | 1-Click Export |  |
|  +---------------------------+  +--------------------------+  +----------------+  |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
+-----------------------------------------------------------------------------------+
|                           AGENT ORCHESTRATION ENGINE                              |
|  +─────────────────────────────────────────────────────────────────────────────+  |
|  | Intent Classifier ➔ Planner Agent ➔ Tool Selector ➔ Action Verification     |  |
|  +─────────────────────────────────────────────────────────────────────────────+  |
|                                                                                   |
|  10 SPECIALIZED AGENTS:                                                           |
|  • Planner     • Research    • Browser     • File       • Document                |
|  • Presentation• Spreadsheet • Coding      • Testing    • Review                  |
+-----------------------------------------------------------------------------------+
                                         │
                    ┌────────────────────┴────────────────────┐
                    ▼                                         ▼
+---------------------------------------+ +---------------------------------------+
|          SECURITY & ACTIONS           | |          4-TIER MEMORY VAULT          |
| • Level 1: Low Risk (Immediate)       | | • Tier 1: Session Memory (In-Memory)  |
| • Level 2: Medium Risk (Confirmation) | | • Tier 2: Daily Journal (24-Hour TTL) |
| • Level 3: Destructive (Recycle Bin)  | | • Tier 3: Project State (Milestones)  |
| • Path Traversal & Leak Guard         | | • Tier 4: Long-Term Knowledge Graph   |
+---------------------------------------+ +---------------------------------------+
                    │                                         │
                    └────────────────────┬────────────────────┘
                                         ▼
+-----------------------------------------------------------------------------------+
|                              LOCAL & CLOUD ADAPTERS                               |
|  +------------------+  +-------------------+  +--------------------------------+  |
|  | AI Providers     |  | Local System      |  | Multimedia & External Engines  |  |
|  | Gemini 2.0 Flash |  | Windows Desktop   |  | MoneyPrinterTurbo (Short-Video)|  |
|  | Groq Llama 3.3   |  | PowerShell / Node |  | Wan2.2 (Diffusion Transformer) |  |
|  | Local Mock Mode  |  | Tauri 2.0 Bridge  |  | Learnify 2.0 (Generative A2UI) |  |
|  +------------------+  +-------------------+  +--------------------------------+  |
+-----------------------------------------------------------------------------------+
```

## System Layers

1. **Presentation Layer:**
   - Client-side WebGL canvas with `@pixiv/three-vrm`.
   - Continuous Web Speech Recognition with "Hey Nia" / "Hey Vida" wake words.
   - Glassmorphic Tailwind UI with responsive split-screen layouts.

2. **Core Agent Layer:**
   - Multi-agent coordination with step budgeting, timeout guards, and cancellation tokens.
   - 7 SOTA productivity tools with dry-run safety and clipboard bindings.

3. **Memory & Security Layer:**
   - Multi-partition memory store with automated credential regex sanitization.
   - Action risk classifier enforcing approval boundaries.
