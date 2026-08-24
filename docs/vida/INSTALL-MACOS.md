# 🍎 Vida AI OS — macOS Installation & Run Guide

## 1. Quick Launch (Web / Node Mode)

### Prerequisites
- macOS Sonoma / Sequoia (Apple Silicon M1/M2/M3/M4 or Intel)
- Node.js v20.x or higher

### Launch Command
```bash
git clone https://github.com/Vishwajeetsrk/JARVIS-AI-OS.git
cd JARVIS-AI-OS
npm install
npm run dev
```

Navigate to: `http://localhost:8080/console`.

---

## 2. Packaging Standalone macOS `.dmg` (Tauri 2.0)

### Prerequisites
- Xcode Command Line Tools (`xcode-select --install`)
- Rust & Cargo (`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`)

### Build Command
```bash
npm run tauri:build
```

The universal `.dmg` bundle will be created at:
```text
src-tauri/target/release/bundle/dmg/Jarvis AI OS_2.7.0_universal.dmg
```
