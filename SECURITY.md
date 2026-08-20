# Security Policy

## Supported Versions

We actively provide security patches and updates for the following versions:

| Version | Supported          |
| :--- | :--- |
| 2.6.x   | :white_check_mark: |
| 2.5.x   | :white_check_mark: |
| < 2.5   | :x:                |

---

## 🔒 Reporting a Vulnerability

We take the security and privacy of **JARVIS AI OS** users seriously. If you discover a security vulnerability, please follow responsible disclosure guidelines:

1. **Do NOT open a public issue.**
2. Send an email with full details, reproduction steps, and proof of concept to **security@jarvisaios.dev** or contact the maintainers privately via GitHub Security Advisories.
3. We will acknowledge receipt within 48 hours and provide a timeline for a patch.

---

## 🛡️ Core Security & Privacy Principles

1. **Local-First Data Isolation**:
   - User identity, personal notes, custom configurations, and API keys remain stored **strictly on the user's local device** in `data/` and `.env`.
   - JARVIS never transmits private credentials or local memory to unauthorized third-party telemetry servers.

2. **Non-Destructive Storage Intelligence**:
   - The Laptop Storage & Safe Cleanup Agent enforces a strict confirmation gate and **never deletes user files permanently by default**; all operations move candidate files safely to the OS Recycle Bin.

3. **Audio & Video Guard**:
   - Microphones and cameras are never silently activated in the background. The visual HUD always displays live status (`🎤 ON`, `📷 ON`, `● REC`).
