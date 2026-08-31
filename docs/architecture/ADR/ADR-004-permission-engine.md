# ADR-004: Centralized Permission Engine & Policy Gating

## Status
**Adopted** (2026-08-31)

## Context
As JARVIS gains agency to run shell commands, interact with databases, push commits to GitHub, and automate Salesforce donations, autonomous operations without fine-grained permissions present severe operational and security risks.

## Decision
1. Implement a hierarchical permission model:
   `User -> Organization -> Project -> Agent -> Tool -> Action`
2. Every request is verified against the `ExecutionContext.permissions` tokens before tool or connector dispatch.
3. Risky actions trigger an asynchronous `Approval` record in Supabase and notify the user via the UI/Notification event bus.
4. Database access strictly preserves Supabase Row Level Security (RLS) across all tables; service role bypass is prohibited in normal application flows.

## Consequences
- **Positive**: Strict protection against unauthorized data access, unintended commits, or unwanted external communications.
- **Positive**: Full auditability for every agent action.
- **Trade-off**: Requires user interaction to approve high-risk steps when running unattended workflows.
