# 💻 Vida AI OS — Windows Installation & Run Guide

## 1. Quick Launch (Development / Web Mode)

### Prerequisites
- Windows 11 or Windows 10 (64-bit)
- Node.js v20.x or higher

### Launch with 1-Click
1. Double-click **`Launch-Nia.bat`** in `D:\Team of Vishwajeet`.
2. Or create a desktop shortcut with:
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\Install-Nia-Desktop-Shortcut.ps1
   ```
3. Open [http://localhost:8080/console](http://localhost:8080/console).

---

## 2. Packaging Standalone Windows `.exe` (Tauri 2.0)

### Prerequisites
- Rust & Cargo (verified `rustc 1.97+`)
- Microsoft C++ Build Tools

### Build Command
```powershell
npm run tauri:build
```

The compiled NSIS installer will be located in:
```text
src-tauri/target/release/bundle/nsis/Jarvis AI OS_2.7.0_x64-setup.exe
```
