# TOOL CONTRACT — JARVIS AI OS V4

> **Status**: CANONICAL SPECIFICATION  
> **Package**: `lib/tools/`  
> **Applies to**: Built-in Tools, MCP Tools, GitHub Tools, Local Shell Tools, Plugin Tools

---

## 1. The Unified Tool Interface

All tools in JARVIS — whether local filesystem scripts, remote API calls, MCP servers, or browser tools — MUST conform to this single interface:

```typescript
import { ExecutionContext } from "../context/types";

export type RiskLevel = "low" | "medium" | "high" | "critical";

export interface ToolParameterSchema {
  type: "object";
  properties: Record<string, {
    type: string;
    description: string;
    enum?: string[];
    default?: unknown;
  }>;
  required?: string[];
}

export interface ToolResult<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
  metadata?: {
    durationMs: number;
    bytesProcessed?: number;
    recordsAffected?: number;
  };
}

export interface Tool<TInput = Record<string, unknown>, TOutput = unknown> {
  id: string;                         // e.g. "github.create_pull_request"
  name: string;                       // Human-friendly title
  category: "file" | "git" | "web" | "database" | "os" | "communication" | "ai";
  description: string;                // Detailed description for LLM tool calling
  parameters: ToolParameterSchema;    // JSON Schema for input validation
  requiredPermissions: string[];      // Permissions required in ExecutionContext
  riskLevel: RiskLevel;               // Governs approval gating
  timeoutMs: number;                  // Maximum execution duration (default: 30000)
  idempotent: boolean;                // Whether retrying is safe without side effects

  execute: (input: TInput, ctx: ExecutionContext) => Promise<ToolResult<TOutput>>;
}
```

---

## 2. Risk Levels & Safety Invariants

| Risk Level | Description | Behavior | Examples |
|---|---|---|---|
| `low` | Read-only actions with zero persistent side effects | Runs immediately | Read file, search web, fetch issue list, query database view |
| `medium` | Low-impact writes or reversible changes | Auto-logs audit, runs with notice | Create branch, write scratch note, update draft task |
| `high` | Significant state mutations or external communications | **Requires Human Approval** | Send email, push commit, execute SQL DDL/DML, Salesforce sync |
| `critical` | Irreversible, destructive, or financial operations | **Requires Explicit Multi-Step Confirm** | Delete branch/table, deploy production build, charge card |

---

## 3. Tool Registry Architecture

```typescript
export interface ToolRegistry {
  register(tool: Tool): void;
  unregister(toolId: string): void;
  get(toolId: string): Tool | undefined;
  listAvailable(ctx: ExecutionContext): Tool[];
  execute(toolId: string, input: unknown, ctx: ExecutionContext): Promise<ToolResult>;
}
```

### Execution Flow:
1. **Permission Check**: Registry compares `tool.requiredPermissions` against `ctx.permissions`. If unauthorized, rejects with `ERR_PERMISSION_DENIED`.
2. **Input Validation**: Validates `input` against `tool.parameters` schema.
3. **Approval Gate Check**: If `tool.riskLevel === "high" | "critical"` and action hasn't been approved in task context, creates `Approval` and suspends task.
4. **Execution & Timeout**: Executes within `AbortController` bounded by `tool.timeoutMs`.
5. **Event Emission**: Emits `tool.started` and `tool.completed` / `tool.failed` to Event Bus.
