# 🌸 NIA Desktop Application & Screen-Roaming Companion

## 1. Desktop Roaming & Freedom to Walk System

Nia can now run as a **native floating desktop companion** on your laptop with complete freedom to walk, explore, and interact across your screen!

### 🚶‍♀️ Kinematic States & Wandering Behavior
- **File:** [`src/lib/avatar/desktop-wander-controller.ts`](file:///d:/Team%20of%20Vishwajeet/src/lib/avatar/desktop-wander-controller.ts)
- **Behaviors:**
  - **Walking Across Screen:** Nia steps and sways her hips left and right along the bottom of your screen / taskbar.
  - **Screen Boundary Sensing:** When she reaches either edge of your screen (5% to 92%), she smoothly pivots and walks in the other direction.
  - **Looking Around & Pausing:** She stops periodically to turn toward your mouse cursor, look around curiously, and blink.
  - **Sitting & Resting:** She can sit down on your taskbar and swing her legs happily.
  - **Waving:** Waves her hand at you when she notices you looking at her.
  - **Interactive Drag & Drop:** Click and drag Nia to place her anywhere on your monitor.

---

## 2. Always-On Voice & Speech Pipeline

- **File:** [`src/lib/voice/continuous-voice-engine.ts`](file:///d:/Team%20of%20Vishwajeet/src/lib/voice/continuous-voice-engine.ts)
- **Features:**
  - Hands-free background listening loop with automatic recovery.
  - Floating speech bubbles above Nia's head displaying live subtitles.
  - Real-time phonetic visemes (`aa`, `ih`, `ou`, `ee`, `oh`) modulating her mouth as she speaks.
  - Instant interruption cut-off when you start talking.

---

## 3. Dedicated Routes & Windows

1. **In-Page Floating Roaming Mode:**
   - Toggle **"Walk on Laptop"** in the 3D Avatar Viewport at [`http://localhost:8080/console`](file:///d:/Team%20of%20Vishwajeet/src/components/jarvis/vrm-avatar-viewer.tsx) to spawn Nia walking over your desktop.
2. **Dedicated Transparent Floating Window:**
   - Open [`http://localhost:8080/companion`](file:///d:/Team%20of%20Vishwajeet/src/routes/companion.tsx) or click the **Popout Window** icon to run Nia in a floating, borderless companion window.
3. **Tauri Standalone Desktop App:**
   - Configured in [`src-tauri/tauri.conf.json`](file:///d:/Team%20of%20Vishwajeet/src-tauri/tauri.conf.json) for native Windows executable bundling (`npm run tauri:dev` / `npm run tauri:build`).
