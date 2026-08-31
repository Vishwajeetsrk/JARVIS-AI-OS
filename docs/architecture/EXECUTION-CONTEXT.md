# EXECUTION CONTEXT CONTRACT — JARVIS AI OS V4

> The ExecutionContext is the single most important object in the entire JARVIS codebase.
> Every AI request, agent invocation, and tool call must carry one.

---

## Definition

```typescript
/**
 * ExecutionContext
 *
 * Canonical context object injected into every JARVIS AI request.
 * Built by the Context Engine. Never constructed ad-hoc in components.
 */
export interface ExecutionContext {
  // Identity
  userId: string
  organizationId?: string

  // Active workspace
  projectId?: string
  projectName?: string

  // Conversation
  conversationId: string
  sessionId: string

  // Repository context (when working with code)
  repository?: {
    provider: "github"
    owner: string
    name: string
    branch?: string
    fullName: string  // e.g. "Vishwajeetsrk/JARVIS-AI-OS"
  }

  // Editor context (when working with files)
  activeFile?: string
  selectedContent?: string
  cursorLine?: number

  // Agent context
  agentId?: string
  agentName?: string

  // Memory
  memoryScope: string[]          // Which memory namespaces to read
  recentMemories?: Memory[]      // Pre-fetched relevant memories

  // Permissions
  availableTools: string[]       // Tool IDs this execution may use
  permissions: string[]          // Permission tokens granted
  approvalRequired: boolean      // Whether human approval is needed

  // Runtime metadata
  taskId?: string                // If part of an active task
  taskRunId?: string
  parentStepId?: string

  // Timestamps
  createdAt: string              // ISO 8601
  expiresAt?: string             // Context TTL
}
```

---

## Builder Pattern

The Context Engine builds ExecutionContext from available signals:

```typescript
// lib/context/buildContext.ts

export async function buildExecutionContext(
  userId: string,
  input: {
    conversationId: string
    agentId?: string
    projectId?: string
    repository?: RepositoryRef
    activeFile?: string
    selectedContent?: string
  }
): Promise<ExecutionContext> {
  // 1. Load user permissions from Supabase
  const permissions = await loadUserPermissions(userId)

  // 2. Resolve active project
  const project = input.projectId
    ? await loadProject(input.projectId)
    : await resolveActiveProject(userId)

  // 3. Fetch relevant memories (vector search)
  const memories = await fetchRelevantMemories(userId, project?.id)

  // 4. Determine available tools for this agent
  const tools = await resolveAgentTools(input.agentId, permissions)

  // 5. Determine if approval is required
  const approvalRequired = tools.some(t => t.riskLevel === "high" || t.riskLevel === "critical")

  return {
    userId,
    conversationId: input.conversationId,
    sessionId: generateSessionId(),
    projectId: project?.id,
    projectName: project?.name,
    repository: input.repository,
    activeFile: input.activeFile,
    selectedContent: input.selectedContent,
    agentId: input.agentId,
    memoryScope: [userId, project?.id].filter(Boolean) as string[],
    recentMemories: memories,
    availableTools: tools.map(t => t.id),
    permissions,
    approvalRequired,
    createdAt: new Date().toISOString(),
  }
}
```

---

## Usage Rules

1. **Never construct ExecutionContext manually in a component.**
   Always call `buildExecutionContext()` from `lib/context/`.

2. **Every tool invocation must receive the ExecutionContext.**
   Tools use it to enforce permissions and scope side effects.

3. **Every agent invocation must receive the ExecutionContext.**
   Agents use it to scope memory reads and tool access.

4. **The Context Engine is the single source of truth for "what is the user doing right now."**

---

## Context Signals Hierarchy

```
ExecutionContext.projectId
  └── resolves active project files, memory, tools

ExecutionContext.repository
  └── enables GitHub connector tools (read/write/PR)

ExecutionContext.activeFile + selectedContent
  └── enables code-aware agent actions

ExecutionContext.agentId
  └── scopes available tools to agent's allowedTools[]

ExecutionContext.permissions[]
  └── gates all tool and connector access via Policy Engine
```

---

## Integration with UI

```typescript
// In AgentCockpit.tsx (example)
// WRONG — do not do this:
const response = await fetch("/api/chat", { body: JSON.stringify({ message }) })

// CORRECT:
const ctx = await buildExecutionContext(userId, {
  conversationId,
  agentId: selectedAgent.id,
  projectId: activeProject?.id,
})
const response = await gatewayClient.send(message, ctx)
```
