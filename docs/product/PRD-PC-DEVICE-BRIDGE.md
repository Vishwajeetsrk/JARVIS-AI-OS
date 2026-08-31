# PRD — PC Device Bridge & Hardware Telemetry

> **Status**: APPROVED  
> **Target Release**: JARVIS AI OS v4.0.0  
> **Author**: Vishwajeet Srk  

---

## 1. Executive Summary

The PC Device Bridge connects the web-based JARVIS UI to the host Windows PC operating system. It provides real-time system telemetry, 1-click application launching, safe CLI command execution, and automated diagnostic health checks.

---

## 2. Key Capabilities

### 1. 1-Click Windows Application Launchers
- **VS Code**: `code .` in the active project directory.
- **Windows Terminal / PowerShell**: `start wt` or `start powershell`.
- **Google Chrome**: `start chrome`.
- **File Explorer**: `explorer .` opening the active project folder.
- **System Utilities**: Calculator (`calc`), Notepad (`notepad`).

### 2. Live System Telemetry
- Host OS Platform & Architecture (`win32 x64`).
- Active Node.js runtime version (`v24.20.0`).
- Daemon process uptime & status.
- Workspace memory and active ports monitoring.

### 3. Safe PowerShell / CLI Execution Engine
- Execution bounds: 15-second timeout, sandboxed cwd within workspace.
- Built-in safety filters against destructive root operations (`format`, `del /f /s /q c:\`).
- Syntax-highlighted output window with 1-click copy.
- Pre-built diagnostic shortcuts:
  - `git status` — Check repository working tree
  - `node -v && npm -v` — Verify runtime environment
  - `ping 8.8.8.8` — Test network connectivity
  - `tasklist | findstr node` — Inspect active Node processes

---

## 3. Security & Error Handling

- All requests pass through `/api/os` server-side route handler with strict input validation.
- Clear user-facing error notices if an application executable is not present on the host PATH.
