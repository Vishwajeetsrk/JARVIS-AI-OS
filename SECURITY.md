<div align="center">
  <img src="public/logo.png" alt="JARVIS AI OS Logo" width="380" />

  # 🛡️ Security Policy & Threat Model
  ### JARVIS AI OS · Defense-in-Depth Security Invariants

  [![Security](https://img.shields.io/badge/Security-Strict_Isolation-10b981?style=for-the-badge&logo=shield)](SECURITY.md)
  [![Gate](https://img.shields.io/badge/Human_Gate-Level_6_HITL-f59e0b?style=for-the-badge)](docs/architecture/ADR/ADR-004-permission-engine.md)
  [![RLS](https://img.shields.io/badge/Database-PostgreSQL_RLS-00e5ff?style=for-the-badge&logo=postgresql)](supabase/migrations/)
</div>

---

## 🔒 Supported Versions

We actively provide security patches and dependency updates for:

| Version | Supported | Security SLA |
|---|:---:|:---:|
| **4.x (APEX)** | 🟢 Active Support | < 48 Hours Triage |
| **3.x** | 🟡 Critical Fixes Only | < 7 Days |
| **< 3.0** | 🔴 End of Life | Unsupported |

---

## 🚨 Reporting a Vulnerability

The security of our users' personal data, workspace credentials, and server environments is paramount.

If you identify any security issue, **please do NOT report it via public GitHub issues**. Instead:

1. 🔒 **GitHub Confidential Advisory**: [Report a Security Vulnerability](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/security/advisories/new)
2. 📧 **Direct Lead Email**: [vishwajeetsrk@gmail.com](mailto:vishwajeetsrk@gmail.com)

### What to Include:
- Detailed description of the attack vector or vulnerability.
- Minimal proof of concept (PoC) or reproduction steps.
- Affected component(s) (e.g. `/api/chat`, `/api/connectors`, `/api/os`).

---

## 🏛️ Security Architecture & Invariants

### 1. 🛡️ Level 6 Human-in-the-Loop Gate
Destructive or external actions (submitting job applications, external emails, code pushes, database drops) are gated behind an interactive Level 6 approval dialog.

### 2. 🔐 Server-Side Secret Isolation
All API keys (Gemini, Groq, OpenRouter, GitHub, Salesforce) and database service roles are isolated inside server-side Next.js route handlers. Zero sensitive tokens are bundled in client JavaScript.

### 3. 🗄️ Row-Level Security (RLS)
Every database table in Supabase PostgreSQL enforces strict Row-Level Security policies to prevent unauthorized data access or leaks.
