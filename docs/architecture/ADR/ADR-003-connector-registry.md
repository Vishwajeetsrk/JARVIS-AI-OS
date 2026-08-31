# ADR-003: Unified Connector Registry & Secret Isolation

## Status
**Adopted** (2026-08-31)

## Context
Integrations with third-party systems (GitHub, Salesforce, Supabase, Google, Razorpay) were being referenced across UI components with inconsistent credential storage and error handling. Exposing API tokens or service keys to the browser violates security best practices.

## Decision
1. Isolate all third-party integrations into canonical `Connector` modules (`CONNECTOR-CONTRACT.md`).
2. Keep all sensitive API credentials server-side, protected by Supabase RLS and server environment variables.
3. Every connector must expose standardized `healthCheck`, `initialize`, `getClient`, and `disconnect` methods.
4. GitHub is established as the primary reference connector for self-healing code automation.

## Consequences
- **Positive**: Eliminates credential exposure to the frontend.
- **Positive**: Uniform health checks can be reported to the `SystemHealth` monitor.
- **Trade-off**: Requires server-side proxying or API route handlers for third-party operations.
