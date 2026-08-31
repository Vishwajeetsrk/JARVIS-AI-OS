# Security Policy — JARVIS AI OS

## Supported Versions

We actively maintain and provide security patches for the following releases:

| Version | Supported |
|---|:---:|
| **4.x (APEX)** | 🟢 Supported (Active) |
| **3.x** | 🟡 Security Fixes Only |
| **< 3.0** | 🔴 End of Life |

---

## Reporting a Vulnerability

The safety of **JARVIS AI OS** users, private workspaces, API keys, and database integrity is our top priority.

If you identify any security issue or vulnerability, **please DO NOT open a public GitHub issue**. Instead, report it responsibly via one of the following channels:

1. **GitHub Security Advisory**: Go to [Security Advisories](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/security/advisories) and click **"Report a vulnerability"**.
2. **Direct Email**: Send encrypted or detailed reports to **vishwajeetsrk@gmail.com**.

### Information to Include
- Detailed description of the vulnerability and potential attack vectors.
- Step-by-step reproduction steps or a minimal proof-of-concept (PoC).
- Affected component(s) (e.g. `/api/os`, `/api/connectors`, `/api/chat`).
- Suggested remediation or patch (if available).

### Response SLA
- **Initial Acknowledgment**: Within 24 hours.
- **Triage & Risk Assessment**: Within 48 hours.
- **Remediation & Patch Release**: Within 7 business days.

---

## Security Architecture & Invariant Rules

JARVIS AI OS enforces several layers of defense-in-depth:

### 1. Level 6 Human Approval Gate
All high-risk, destructive, or external dispatch actions require explicit user confirmation before execution:
- Automated job submissions and resume dispatches.
- External email sending via the Email Agent.
- Database write/delete operations outside designated sandbox namespaces.

### 2. Server-Side Secret Isolation
- All API keys (Google Gemini, Groq, OpenRouter, GitHub Token, Salesforce credentials) and Supabase Service Role keys are executed strictly in server-side Next.js route handlers (`app/api/`).
- Zero API credentials or sensitive tokens are ever exposed to the client-side JavaScript bundle.

### 3. Sandboxed PC Device Bridge
- Local shell execution via `/api/os` enforces working directory boundaries within the active workspace.
- Destructive root-level commands (`format`, `rmdir /s /q c:\`, `del /f /s /q c:\`) are strictly intercepted and rejected.

### 4. Database Row-Level Security (RLS)
- All 15 Supabase database tables enforce granular PostgreSQL Row-Level Security policies to prevent unauthorized data access.
