# 🔒 Vida AI OS — Security & Permission Architecture

Vida operates under a strict, non-destructive security model designed for desktop safety.

## Permission Classification

### 🟢 Level 1: Low Risk (Immediate Execution)
Can execute autonomously without confirmation dialogs:
- Web search and public documentation lookup.
- Reading text explicitly provided in chat.
- Generating draft replies, prompts, code snippets, and summaries.
- Rendering 3D avatar animations and local speech audio.

### 🟡 Level 2: Medium Risk (Confirmation Required)
Displays a confirmation prompt before executing:
- Reading a local user file or folder.
- Creating a new document (`.docx`, `.pptx`, `.xlsx`, `.md`).
- Copying or moving files within approved workspace folders.
- Opening a desktop application.

### 🔴 Level 3: High / Destructive Risk (Explicit Modal Approval)
Strictly requires explicit confirmation and displays exact targets:
- Deleting files (staged safely to Windows Recycle Bin; never permanent).
- Running arbitrary terminal scripts.
- Modifying system configurations or credentials.
- Sending emails or publishing live web content.

## Safety Invariants
1. **Zero Secret Leaks:** API keys and credentials are never stored in client-side code or emitted in public chat logs.
2. **Safe Workspace Scope:** Scans only user-selected folders (`Downloads`, `Temp`, or approved project repos).
3. **No Automatic Network Spam:** Never sends automated emails or external requests without explicit click-to-send approval.
