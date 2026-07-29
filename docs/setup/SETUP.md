# Setup Guide — Agent Team Skills

## Prerequisites

- Git installed
- Any AI tool (Claude Code, claude.ai, Antigravity, Open Code, etc.)

---

## 1. Quick Install

```bash
git clone https://github.com/Vishwajeetsrk/Agent-Team-Skills.git
cd Agent-Team-Skills
```

---

## 2. Memory System Setup (One-Time)

Memory is what makes this system powerful — it prevents repeat mistakes across ALL your projects.

### 2a. Create Global Memory Directory

```bash
mkdir -p ~/.agent-memory/global
cp -r .claude/skills/memory-agent/templates/* ~/.agent-memory/global/
```

### 2b. Create Private Memory Sync Repo (for cross-session persistence)

```bash
# Create a private repo on GitHub (e.g., agent-memory)
# Then:
git clone https://github.com/YOUR_USERNAME/agent-memory.git ~/.agent-memory/repo
cp ~/.agent-memory/global/* ~/.agent-memory/repo/global/
cd ~/.agent-memory/repo
git add -A
git commit -m "Initial memory setup"
git push
```

### 2c. Configure Sync Script

Edit `memory-sync/sync-memory.sh` and set your `REPO_URL`:

```bash
REPO_URL="https://github.com/YOUR_USERNAME/agent-memory.git"
```

---

## 3. Integration by Platform

### Claude Code

```bash
# Inside your project
mkdir -p .claude/skills
git clone https://github.com/Vishwajeetsrk/Agent-Team-Skills.git /tmp/agent-skills
cp -r /tmp/agent-skills/.claude/skills/* .claude/skills/
rm -rf /tmp/agent-skills

# Paste CONNECT-PROMPT.md at session start
```

### claude.ai

1. Download `.skill` files from the `skills/` folder
2. Upload each to your Claude profile under Custom Skills
3. Paste `CONNECT-PROMPT.md` as the first message

### Antigravity / Open Code / Other

1. Load skills from `.claude/skills/` directory
2. Paste `CONNECT-PROMPT.md` as system prompt
3. Ensure file system access for `~/.agent-memory/`

---

## 4. Daily Ritual

```bash
# START every session
bash memory-sync/sync-memory.sh pull

# ... work with the agent team ...

# END every session
bash memory-sync/sync-memory.sh push "what was done"
```

---

## 5. First Project

```bash
# Via CLI
bash main-cli.sh setup "Your Project Name"

# Or paste CONNECT-PROMPT.md and tell your AI:
# "I want to build <project name>"
```

---

## 6. Visual Dashboard

```powershell
# Windows
.\launch-dashboard.ps1
# Opens a simple UI to manage skills and view memory
```

For dashboard source, see the `ui-dashboard/` reference in ARCHITECTURE.md.
