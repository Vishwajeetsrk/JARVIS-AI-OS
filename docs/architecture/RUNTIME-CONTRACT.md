# RUNTIME CONTRACT — JARVIS AI OS V4

> **Status**: CANONICAL SPECIFICATION  
> **Package**: `lib/runtime/`  
> **Applies to**: Task Engine, Orchestrator, Worker Queue, Approval Gate, Mission Log

---

## 1. Core Abstractions

JARVIS operates on 5 canonical runtime primitives:

```
Task (What needs to be done)
  └── TaskRun (Execution instance of a task)
        └── TaskStep (Individual phase or sub-action)
              └── ToolRun (Specific tool execution with inputs/outputs)
                    └── Approval (Optional human gate before high-risk execution)
```

---

## 2. Type Definitions

```typescript
export type TaskStatus = 
  | "created"
  | "planning"
  | "waiting_approval"
  | "running"
  | "validating"
  | "completed"
  | "failed"
  | "cancelled";

export type StepStatus = 
  | "pending"
  | "running"
  | "waiting_approval"
  | "completed"
  | "failed"
  | "skipped";

export interface Task {
  id: string;                         // UUID
  userId: string;
  projectId?: string;
  conversationId?: string;
  title: string;
  description?: string;
  priority: "low" | "medium" | "high" | "urgent";
  status: TaskStatus;
  primaryAgentId: string;             // Responsible persona
  collaboratorAgentIds: string[];     // Supporting personas
  context: Record<string, unknown>;   // Serialized ExecutionContext snapshot
  activeRunId?: string;
  createdAt: string;                  // ISO 8601
  updatedAt: string;
  completedAt?: string;
}

export interface TaskRun {
  id: string;
  taskId: string;
  runIndex: number;
  status: TaskStatus;
  startedAt: string;
  endedAt?: string;
  error?: {
    code: string;
    message: string;
    stack?: string;
  };
  metrics: {
    totalTokens: number;
    promptTokens: number;
    completionTokens: number;
    durationMs: number;
    costUsd: number;
  };
}

export interface TaskStep {
  id: string;
  runId: string;
  stepNumber: number;
  name: string;
  description?: string;
  agentId: string;
  status: StepStatus;
  input: Record<string, unknown>;
  output?: Record<string, unknown>;
  approvalId?: string;
  startedAt?: string;
  completedAt?: string;
}

export interface ToolRun {
  id: string;
  stepId: string;
  toolId: string;
  input: Record<string, unknown>;
  output?: Record<string, unknown>;
  error?: string;
  durationMs: number;
  riskLevel: "low" | "medium" | "high" | "critical";
  executedAt: string;
}

export interface Approval {
  id: string;
  taskId: string;
  stepId?: string;
  action: string;
  requestedBy: string;               // Agent ID
  riskLevel: "medium" | "high" | "critical";
  diffPreview?: string;
  status: "pending" | "approved" | "rejected" | "timed_out";
  decidedBy?: string;                // User ID
  decidedAt?: string;
  expiresAt: string;
}
```

---

## 3. Canonical Task Lifecycle & State Machine

```
[Created] ──► [Planning] ──► [Needs Approval?]
                                 │
                   ┌─────────────┴────────────┐
                   ▼                          ▼
               YES (High Risk)             NO (Safe)
                   │                          │
           [Waiting Approval]                 │
                   │                          │
           ┌───────┴────────┐                 │
        Approved        Rejected              │
           │                │                 │
           ▼                ▼                 │
       [Running] ◄──────────┼─────────────────┘
           │                │
           ▼                ▼
      [Validating]     [Cancelled]
           │
     ┌─────┴──────┐
     ▼            ▼
[Completed]    [Failed]
```

### Invariants:
1. **No direct tool execution without TaskStep**: Every side effect is logged as a `ToolRun` under a `TaskStep`.
2. **Approval Gate Enforcement**: If `Tool.riskLevel` is `high` or `critical`, the runtime halts step execution, transitions task to `waiting_approval`, emits `approval.requested`, and waits for user decision.
3. **Event Emission**: Every state transition automatically emits the corresponding event to the JARVIS Event Bus (`task.started`, `task.completed`, etc.).

---

## 4. Orchestrator Handoff Protocol

When multi-agent collaboration is needed (e.g. Planner -> Developer -> Reviewer):

1. **Step Delegation**: Orchestrator assigns `TaskStep.agentId` to the specialist.
2. **Context Passing**: The specialist receives the shared `ExecutionContext` + previous steps' outputs.
3. **Handoff Event**: Emit `agent.handoff` with `{ fromAgentId, toAgentId, reason, stepId }`.
4. **Result Verification**: Reviewer agent runs validation before task reaches `completed`.
