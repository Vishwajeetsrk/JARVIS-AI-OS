#!/usr/bin/env bash
# sync-memory.sh — makes ~/.agent-memory persistent across sessions/machines/environments
# by backing it with a private git repo. Run this and the "automatic" learning
# loop actually closes: pull what past sessions learned, push what this one learned.
#
# One-time setup:
#   1. Create a private repo, e.g. github.com/<you>/agent-memory
#   2. Edit REPO_URL below to point to it
#   3. chmod +x sync-memory.sh
#
# Usage:
#   ./sync-memory.sh pull                 <- run at the START of any build session
#   ./sync-memory.sh push "what changed"  <- run at the END of any build session

set -e
MEMORY_DIR="$HOME/.agent-memory"
REPO_URL="git@github.com:YOUR_USERNAME/agent-memory.git"   # <-- set this once

case "$1" in
  pull)
    if [ -d "$MEMORY_DIR/.git" ]; then
      echo "Pulling latest memory..."
      cd "$MEMORY_DIR" && git pull --rebase
    elif [ -d "$MEMORY_DIR" ]; then
      echo "⚠️  $MEMORY_DIR exists but isn't a git repo yet."
      echo "    Move its contents aside, then run: git clone $REPO_URL $MEMORY_DIR"
    else
      echo "Cloning memory repo for the first time..."
      git clone "$REPO_URL" "$MEMORY_DIR"
    fi
    ;;
  push)
    cd "$MEMORY_DIR"
    git add -A
    if git diff --cached --quiet; then
      echo "Nothing new to log this session."
    else
      git commit -m "${2:-memory update $(date -u +%Y-%m-%dT%H:%M:%SZ)}"
      git push
      echo "✅ Logged this session's mistakes/decisions to the memory repo."
    fi
    ;;
  *)
    echo "Usage: $0 {pull|push \"commit message\"}"
    exit 1
    ;;
esac
