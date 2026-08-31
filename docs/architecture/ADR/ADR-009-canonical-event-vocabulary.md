# ADR-009: Canonical Event Vocabulary & Unified Event Bus

## Status
**Adopted** (2026-08-31)

## Context
Various UI components (ApexWorld 3D orb, PortfolioOverlay, ContentStudio, ProjectLauncher, MissionLog) communicated via ad-hoc strings and disconnected polling intervals.

## Decision
1. All subsystem events in JARVIS must conform to the canonical event vocabulary defined in `EVENT-CONTRACT.md`:
   - System Lifecycle: `SYSTEM_INITIALIZED`, `HEARTBEAT`, `TELEMETRY_RECORDED`
   - Task Execution: `TASK_CREATED`, `TASK_STARTED`, `TASK_STEP_EXECUTED`, `TASK_COMPLETED`, `TASK_FAILED`
   - Tool & Connector: `TOOL_EXECUTION_REQUESTED`, `TOOL_EXECUTION_COMPLETED`, `CONNECTOR_STATUS_CHANGED`
   - Approval Gate: `APPROVAL_REQUESTED`, `APPROVAL_GRANTED`, `APPROVAL_DENIED`
   - UI Modals: `OPEN_UI_STUDIO`, `OPEN_PROJECT_LAUNCHER`, `OPEN_CONNECTORS_MANAGER`, `OPEN_CONTENT_STUDIO`, `OPEN_AGENCY_OS`
2. Every UI panel is an observer/subscriber to the event bus, maintaining zero proprietary state logic.

## Consequences
- **Positive**: Strict type safety across the entire event bus.
- **Positive**: Instant bi-directional synchronization between 3D visuals, Mission Log, and floating modals.
