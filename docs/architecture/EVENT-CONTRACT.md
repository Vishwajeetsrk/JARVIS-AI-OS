# EVENT CONTRACT — JARVIS AI OS V4

> All UI state derives from events. Components are event subscribers, not owners of AI state.
> One event vocabulary. Many visual surfaces.

---

## Architecture

```
3D Orb       ←┐
Agent HUD    ←┤
Chat         ←┤── JARVIS EVENT BUS
Mission Log  ←┤
Nia/Avatar   ←┤
Voice UI     ←┤
Notifications←┘
```

---

## Canonical Event Types

### Task Lifecycle Events

```typescript
"task.created"           // A new task was registered
"task.started"           // Task execution has begun
"task.planning"          // Planner agent is creating a plan
"task.waiting_approval"  // Task needs human approval before proceeding
"task.executing"         // Active tool/connector execution in progress
"task.validating"        // Output is being validated
"task.completed"         // Task finished successfully
"task.failed"            // Task failed (see error payload)
"task.cancelled"         // Task was cancelled by user
```

### Agent Events

```typescript
"agent.started"          // An agent began processing
"agent.thinking"         // Agent is reasoning (show thinking animation)
"agent.completed"        // Agent finished its work
"agent.failed"           // Agent encountered an error
"agent.handoff"          // Agent handed off to another agent
```

### Tool Events

```typescript
"tool.started"           // A tool invocation started
"tool.completed"         // A tool returned a result
"tool.failed"            // A tool raised an error
"tool.approval_needed"   // High-risk tool waiting for user approval
```

### Connector Events

```typescript
"connector.connected"    // A connector established its connection
"connector.disconnected" // A connector lost its connection
"connector.error"        // Connector operation failed
"connector.syncing"      // Connector is syncing data
```

### Approval Events

```typescript
"approval.requested"     // Human approval is needed
"approval.approved"      // User approved the action
"approval.rejected"      // User rejected the action
"approval.timeout"       // Approval window expired
```

### GitHub Events

```typescript
"github.branch.created"       // A new branch was created
"github.commit.created"       // A commit was pushed
"github.pull_request.created" // A PR was opened
"github.pr.merged"            // A PR was merged
"github.build.success"        // CI build passed
"github.build.failed"         // CI build failed
```

### Voice Events

```typescript
"voice.listening"        // Microphone is active, awaiting input
"voice.processing"       // Speech is being transcribed/processed
"voice.speaking"         // JARVIS is speaking a response
"voice.interrupted"      // Voice output was interrupted by user
"voice.error"            // Voice pipeline error
```

### System Events

```typescript
"system.health_changed"  // A health status changed
"system.memory_saved"    // A new memory was stored
"system.context_updated" // Active ExecutionContext changed
"system.ready"           // JARVIS runtime is fully initialized
```

---

## Event Payload Schema

```typescript
interface JarvisEvent<T = unknown> {
  id: string              // Unique event ID (UUID)
  type: JarvisEventType   // One of the canonical types above
  payload: T              // Type-safe payload per event type
  taskId?: string         // Associated task (if any)
  agentId?: string        // Associated agent (if any)
  userId: string          // Always present
  timestamp: string       // ISO 8601
  source: "runtime" | "connector" | "agent" | "tool" | "user" | "system"
}
```

---

## Example Event Payloads

```typescript
// task.created
{
  type: "task.created",
  payload: {
    taskId: "task_abc123",
    title: "Fix Razorpay reconciliation data mismatch",
    agentId: "agent_developer",
    projectId: "proj_jarvis_os"
  }
}

// voice.listening
{
  type: "voice.listening",
  payload: {
    wakeWord: "Hey JARVIS",
    language: "en-IN"
  }
}

// approval.requested
{
  type: "approval.requested",
  payload: {
    action: "Create pull request: Fix Tile type error",
    tool: "github.create_pr",
    riskLevel: "medium",
    diff: "...",
    expiresAt: "2026-08-31T20:00:00Z"
  }
}
```

---

## Nia / 3D Orb State Machine

The 3D orb and Nia avatar must subscribe to events and map them to visual states:

```
Event                         → Nia / Orb State
─────────────────────────────────────────────────
system.ready                  → idle (pulse slow)
voice.listening               → listening (waveform active)
voice.processing              → thinking (constellation spin)
agent.thinking                → thinking (constellation spin)
task.executing                → working (orb bright, fast pulse)
tool.approval_needed          → waiting (amber pulse)
voice.speaking                → speaking (lip-sync / waveform)
task.completed                → complete (green pulse, fade to idle)
task.failed / agent.failed    → error (red flash, return to idle)
```

---

## Event Bus Implementation Target

```typescript
// lib/events/eventBus.ts

class JarvisEventBus {
  emit<T>(event: JarvisEvent<T>): void
  on(type: JarvisEventType, handler: EventHandler): Unsubscribe
  onAny(handler: EventHandler): Unsubscribe
  history(limit?: number): JarvisEvent[]
}

export const eventBus = new JarvisEventBus()
```

All UI components subscribe via:
```typescript
useEffect(() => {
  return eventBus.on("task.executing", (event) => {
    setOrbState("working")
  })
}, [])
```
