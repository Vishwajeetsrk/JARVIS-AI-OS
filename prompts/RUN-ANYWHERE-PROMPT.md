# RUN-ANYWHERE-PROMPT — Multi-Surface Architecture & Memory Sync

Act as `devops-agent` + `team-agent` together. Plan how Jarvis runs across four surfaces — website, desktop, terminal, local — under one overriding rule:

## The Overriding Rule

**One brain, many shells.** The 13 skills (`ceo-agent`, `saas-builder`, `design-agent`, etc.), the memory bank (`~/.agent-memory/global/`), and the Mastra TS orchestration layer are the **single source of truth**. Website, desktop, terminal, and local are access points to that one brain, never four separate reimplementations.

---

## Four Surfaces Strategy

| Surface | Actual Access Point | Strategy & Cost |
|---|---|---|
| **Website** | `claude.ai` / Custom Next.js Front End | **Zero-build default**: `claude.ai` is already a website surface. Build custom Next.js UI only when required for branding/demos. |
| **Desktop** | `Claude Desktop` / Tauri App Wrapper | **Zero-build default**: `Claude Desktop` gives chat, Cowork, and Code. Tauri wrapper reserved for Phase 3+ custom client branding. |
| **Terminal** | `Claude Code` / `jarvis` CLI Script | **Zero-build default**: `Claude Code` is the terminal surface. Mastra TS exposes `scripts/jarvis.ts` for quick terminal checks. |
| **Local** | Local Filesystem & Self-Hosted Services | `~/.agent-memory/global/` synced via Git (`sync-memory.sh`). Self-hosted n8n & Mastra TS local dev environments. |

---

## Mandatory Memory Sync Rule

Whichever surface you're in, it MUST read and write the *same* `~/.agent-memory/` files backed by a private Git repository via `sync-memory.sh`. Pull at start, push at finish.
