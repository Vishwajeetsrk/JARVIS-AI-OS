# 🧠 Vida AI OS — 4-Tier Memory Vault

Vida's memory architecture stores durable facts, project state, and daily reflections without storing sensitive credentials.

```
+-------------------------------------------------------------------------+
|                         TIER 1: SESSION MEMORY                          |
| In-memory sliding window of active conversation turns (Short-Term).     |
+-------------------------------------------------------------------------+
                                     │
                                     ▼
+-------------------------------------------------------------------------+
|                         TIER 2: DAILY JOURNAL                           |
| 24-hour transient cache for daily notes, active tasks, and standup wrap. |
+-------------------------------------------------------------------------+
                                     │
                                     ▼
+-------------------------------------------------------------------------+
|                         TIER 3: PROJECT STATE                           |
| Structured repository milestones, architecture decisions, and deliverables.
+-------------------------------------------------------------------------+
                                     │
                                     ▼
+-------------------------------------------------------------------------+
|                         TIER 4: LONG-TERM VAULT                         |
| Durable knowledge graph: user preferences, confirmed facts, and skills.  |
+-------------------------------------------------------------------------+
```

## Security & Sanitization
- **Credential Redaction:** Automatically strips API keys, tokens, and passwords using regex before storing.
- **Explicit Consent:** Only confirmed decisions and approved notes are persisted to long-term memory.
- **User Control:** Users can inspect, export, or clear memory tiers at any time via the console.
