# Security Policy & Audit Protocols — Vishwajeet AI Operating System

## Security Architecture Principles

1. **Zero Secret Hardcoding**: No API keys, database connection strings, or private tokens are permitted in source code. All secrets are stored in environment variables and validated via Zod schemas.
2. **Mandatory QA Gate**: No code commit or feature pull-request reaches production without explicit sign-off from `test-agent`.
3. **Sandboxed Code Execution**: Autonomous tools (OpenHands, local scripts) operate exclusively inside isolated Docker environments with restricted network privileges.
4. **Input Sanitization**: Every user input string processed by multi-agent tools is sanitized to prevent prompt injection, SQL injection, and command injection attacks.
5. **Rate Limiting Baseline**: All public API routes and n8n webhook handlers enforce rate-limiting via KV stores.

---

## Vulnerability Reporting Procedure
If you discover a security vulnerability, log it immediately to `~/.agent-memory/global/mistakes-log.md` with a prevention rule and notify `test-agent`.
