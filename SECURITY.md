# Security Policy

## Supported Versions

We actively release security patches and updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 4.x     | :white_check_mark: |
| 3.x     | :white_check_mark: |
| < 3.0   | :x:                |

---

## Reporting a Vulnerability

The safety and security of **JARVIS AI OS** users and their private workspaces is our highest priority.

If you discover a security vulnerability, **please DO NOT open a public GitHub issue**. Instead, report it privately:

1. **GitHub Security Advisory**: Go to the repository's [Security Tab](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/security/advisories) and click **"Report a vulnerability"**.
2. **Direct Email**: Send details to **vishwajeet@jarvis-ai.org**.

Please include:
* Description of the vulnerability and attack vector.
* Step-by-step instructions or proof-of-concept (PoC).
* Any suggested remediations or patches.

### Our Response Commitment
* **Initial Response**: Within 24 hours.
* **Triage & Validation**: Within 72 hours.
* **Patch & Disclosure**: Coordinated disclosure within 14 days of fix deployment.

---

## Security Principles & Sandboxing
* **Zero Client Exposure**: Database service role keys, connector OAuth secrets, and AI provider tokens are strictly executed within encrypted server runtime functions (`src/lib/connectors.server.ts`).
* **Path Validation**: Execution commands and file operations strictly prevent path traversal outside designated workspace bounds.
* **Row-Level Security (RLS)**: Enforced across all 15 Supabase cloud database tables.
