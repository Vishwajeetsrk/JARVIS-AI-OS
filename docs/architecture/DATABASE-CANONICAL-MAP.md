# DATABASE CANONICAL MAP — JARVIS AI OS V4

> **Status**: APPROVED  
> **Database**: Supabase PostgreSQL + `pgvector`  
> **Security Policy**: Server-side secrets, RLS enforced across all tables

---

## 1. Table Ownership & Domain Map

| Table Name | Canonical Domain | Owner Service | Consumers | Duplicate Of? | Status | RLS Protected |
|---|---|---|---|---|:---:|:---:|
| `profiles` / `users` | `identity` | Auth Engine | All services | None | 🟢 Keep | Yes |
| `projects` | `projects` | Context Engine | UI, Task Runtime | None | 🟢 Keep | Yes |
| `project_phases` | `projects` | Task Runtime | Mission Log | None | 🟢 Keep | Yes |
| `project_logs` | `projects` | Audit Engine | Timeline | None | 🟢 Keep | Yes |
| `conversations` | `conversations` | AI Gateway | Chat UI | None | 🟢 Keep | Yes |
| `messages` | `conversations` | AI Gateway | Chat UI | None | 🟢 Keep | Yes |
| `tasks` | `tasks` | Task Runtime | Mission Log, Orchestrator | None | 🟢 Keep | Yes |
| `task_steps` | `tasks` | Task Runtime | Mission Log, Agents | None | 🟢 Keep | Yes |
| `tool_runs` | `tools` | Tool Registry | Audit Engine | None | 🟢 Keep | Yes |
| `connections` | `connectors` | Connector Registry | GitHub, Salesforce, etc. | None | 🟢 Keep | Yes |
| `memories` | `memories` | Memory Engine (pgvector) | Context Engine | `desktop_memories` (Merge target) | 🟢 Keep | Yes |
| `desktop_memories` | `memories` | Desktop Bridge | Local Sync | Merge into `memories` with `scope='desktop'` | 🟠 Merge | Yes |
| `user_settings` | `identity` | User Settings Service | UI Theme, Toggles | None | 🟢 Keep | Yes |
| `cron_jobs` | `workflows` | Orchestrator / Cron | Ops Agent | None | 🟢 Keep | Yes |
| `activity_logs` | `audit` | Event System | System Health, UI | None | 🟢 Keep | Yes |
| `approvals` | `approvals` | Policy Engine | UI Approval Modal | (New table in V4 migration) | 🟡 Target | Yes |

---

## 2. Target Schema Domains for V4 Consolidation

1. **`identity`**: User profile, preferences, organization memberships.
2. **`projects`**: Project metadata, lifecycle phases, repository bindings (Wardelio, JARVIS, etc.).
3. **`conversations`**: Thread history, multi-modal message attachments, active personas.
4. **`tasks` & `task_runs`**: Canonical execution jobs, step progress, token & cost metrics.
5. **`tools` & `tool_runs`**: Tool invocation audit trail, execution durations, errors.
6. **`connectors` & `connector_accounts`**: OAuth connections, scopes, sync timestamps.
7. **`memories`**: Vector-embedded facts (`pgvector`), global/project/user scopes.
8. **`workflows` & `cron_jobs`**: Scheduled automation tasks (e.g. daily 9 AM Salesforce sync).
9. **`approvals`**: Human-in-the-loop pending approval tokens for high-risk tools.
10. **`audit` & `events`**: Immutable event stream for system observability and telemetry.

---

## 3. Migration Invariants

- **DO NOT DROP EXISTING TABLES**: Preserve all 14 existing migrations.
- **RLS ENFORCEMENT**: Every table must have `ALTER TABLE ... ENABLE ROW LEVEL SECURITY;` with policies tied to `auth.uid() = user_id`.
- **NO SERVICE ROLE KEY IN CLIENT BROWSER**: Frontend uses `NEXT_PUBLIC_SUPABASE_ANON_KEY` with RLS. Background jobs and CLI scripts use the secure `SUPABASE_SERVICE_ROLE_KEY` exclusively on the server.
