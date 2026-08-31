# PLUGIN CONTRACT — JARVIS AI OS V4

> **Status**: CANONICAL SPECIFICATION  
> **Package**: `lib/plugins/`  
> **Applies to**: Extension Packs, Third-party Skills, Custom Automations

---

## 1. Plugin Philosophy

Plugins allow expanding JARVIS with domain-specific skills, tools, and UI widgets without modifying the core runtime.

A Plugin is NEVER a separate application. It is a declarative bundle containing:
- **Manifest**: Metadata, declared permissions, required environment keys
- **Tools**: Exported tools implementing `Tool` from `TOOL-CONTRACT.md`
- **Agent Extensions**: Custom skills or instructions attached to existing agent profiles
- **Event Hooks**: Event listeners responding to canonical events

---

## 2. Canonical Plugin Manifest (`plugin.json`)

```json
{
  "id": "plugin-salesforce-reconciler",
  "name": "Salesforce Donation Reconciler",
  "version": "1.0.0",
  "author": "Vishwajeet Srk",
  "description": "Automated 7-step Razorpay to Salesforce donation reconciliation",
  "entrypoint": "dist/index.js",
  "permissions": [
    "connectors:salesforce:read",
    "connectors:salesforce:write",
    "email:send",
    "tasks:create"
  ],
  "requiredConnectors": ["salesforce"],
  "contributes": {
    "tools": [
      {
        "id": "salesforce.reconcile_daily_donations",
        "name": "Reconcile Daily Donations",
        "riskLevel": "high"
      }
    ],
    "skills": [
      {
        "targetAgent": "agent_ops",
        "skillFile": "skills/donation-reconciliation.md"
      }
    ]
  }
}
```

---

## 3. Plugin Lifecycle

```
[Installed] ──► [Validated] ──► [Loaded] ──► [Active] ──► [Disabled]
                     │             │            │
                     ▼             ▼            ▼
               Error/Invalid  Sandbox Init  Shutdown
```

1. **Manifest Validation**: Schema check, permission authorization by user.
2. **Registration**: Exported tools are registered into the canonical `ToolRegistry`.
3. **Execution Isolation**: Plugin code executes within worker isolation or sandboxed scope; network and disk access are restricted to declared permissions.
4. **Clean Teardown**: On disable or update, all registered tools, hooks, and listeners are cleanly deregistered without restarting the JARVIS runtime.
