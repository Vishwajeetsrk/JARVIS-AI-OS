# CONNECTOR CONTRACT — JARVIS AI OS V4

> **Status**: CANONICAL SPECIFICATION  
> **Package**: `lib/connectors/`  
> **Applies to**: External Integrations (GitHub, Supabase, Salesforce, Google, Desktop)

---

## 1. Unified Connector Interface

No external service integration may be written ad-hoc inside UI components or API routes. Everything connects via the canonical `Connector` interface:

```typescript
export type ConnectorStatus = "connected" | "disconnected" | "syncing" | "error" | "expired";

export interface ConnectorAccount {
  id: string;                         // UUID
  userId: string;
  connectorId: string;                // e.g. "github", "salesforce"
  accountIdentifier: string;          // e.g. "Vishwajeetsrk" or "org-rootbridge"
  encryptedCredentialsRef: string;    // Secure server-side vault reference
  scopes: string[];
  status: ConnectorStatus;
  lastSyncedAt?: string;
  expiresAt?: string;
}

export interface ConnectorHealth {
  healthy: boolean;
  latencyMs: number;
  message?: string;
  rateLimitRemaining?: number;
  rateLimitReset?: string;
}

export interface Connector<TConfig = Record<string, unknown>, TClient = unknown> {
  id: string;                         // "github", "salesforce", "supabase", "google"
  name: string;
  version: string;
  description: string;
  authType: "oauth2" | "apiKey" | "bearerToken" | "serviceAccount";

  initialize(account: ConnectorAccount, config?: TConfig): Promise<void>;
  disconnect(accountId: string): Promise<void>;
  healthCheck(accountId: string): Promise<ConnectorHealth>;
  getClient(accountId: string): Promise<TClient>;
  sync?(accountId: string, scope?: string): Promise<{ recordsSynced: number }>;
}
```

---

## 2. Core Connectors Specification

### 1. GitHub Connector (`lib/connectors/github/`)
- **Owner**: Developer / Engineering personas
- **Capabilities**: Repository inspection, issue reading/writing, branch creation, commit push, PR creation, CI workflow status polling.
- **Reference Implementation**: First end-to-end integration for JARVIS self-healing coding workflows.

### 2. Salesforce Connector (`lib/connectors/salesforce/`)
- **Owner**: Operations / CRM personas
- **Capabilities**: Contact/Lead lookup by email/phone, Account linking, Donation Opportunity insertion, PAN record updating.
- **Use Case**: Powers the 7-step Razorpay-to-Salesforce daily office reconciliation workflow.

### 3. Supabase Connector (`lib/connectors/supabase/`)
- **Owner**: Core Runtime / Database
- **Capabilities**: Authenticated user session management, RLS-enforced database queries, Realtime subscriptions, vector similarity search via `pgvector`.

### 4. Local OS Bridge Connector (`lib/connectors/desktop/`)
- **Owner**: System persona / Tauri Bridge
- **Capabilities**: Local workspace folder status, terminal shell execution (sandboxed), local device control, offline Ollama model querying.

---

## 3. Security & Secret Invariants

1. **Zero Client-Side Secrets**: Access tokens, API keys, and refresh tokens are stored ONLY in server-side encrypted storage or environment variables with Supabase RLS protections.
2. **Scoping**: Connectors operate only with the minimum required OAuth scopes or token capabilities.
3. **Audit Logging**: Every write operation through a connector generates an entry in the canonical audit log and emits `connector.syncing` / `connector.error` events.
