#!/bin/bash
# Memory Sync Script — pull at START, push at END of every session
# Works locally without a remote repo, or with a Git repo for cross-machine sync
# Windows users: use sync-memory.ps1 instead

# Set REPO_URL to a private git repo for cross-session persistence:
REPO_URL=""

SYNC_DIR="$HOME/.agent-memory"
REPO_DIR="$SYNC_DIR/repo"
TEMPLATES_DIR="$(cd "$(dirname "$0")/../.claude/skills/memory-agent/templates" && pwd)"

pull_memory() {
    echo ">>> Pulling memory state..."
    mkdir -p "$SYNC_DIR/global"

    if [ -n "$REPO_URL" ] && [ -d "$REPO_DIR" ]; then
        cd "$REPO_DIR" && git pull 2>/dev/null
        if [ -d "$REPO_DIR/global" ]; then
            cp -r "$REPO_DIR/global/"* "$SYNC_DIR/global/" 2>/dev/null
        fi
        echo ">>> Memory pulled from remote."
    else
        echo ">>> Local mode — no remote repo configured."
        echo "    Set REPO_URL in this script for cross-machine sync."
    fi

    local count=$(ls "$SYNC_DIR/global" 2>/dev/null | wc -l)
    echo "    $count files in $SYNC_DIR/global"
}

push_memory() {
    local msg="${1:-Auto-sync $(date '+%Y-%m-%d %H:%M')}"
    echo ">>> Pushing memory state..."
    mkdir -p "$SYNC_DIR/global"

    # Copy local project brief/status if they exist
    local script_dir="$(cd "$(dirname "$0")" && pwd)"
    [ -f "$script_dir/../.agent-memory/PROJECT_BRIEF.md" ] && cp "$script_dir/../.agent-memory/PROJECT_BRIEF.md" "$SYNC_DIR/global/"
    [ -f "$script_dir/../.agent-memory/status.md" ] && cp "$script_dir/../.agent-memory/status.md" "$SYNC_DIR/global/"

    if [ -n "$REPO_URL" ] && [ -d "$REPO_DIR" ]; then
        mkdir -p "$REPO_DIR/global"
        cp -r "$SYNC_DIR/global/"* "$REPO_DIR/global/" 2>/dev/null
        cd "$REPO_DIR" || exit 1
        git add -A
        git diff --cached --quiet || git commit -m "$msg"
        git push 2>/dev/null && echo ">>> Memory pushed: $msg" || echo ">>> Commit saved locally (push failed)"
    else
        echo ">>> Memory saved locally at $SYNC_DIR/global"
        echo "    Set REPO_URL in this script for cross-machine sync."
    fi

    local count=$(ls "$SYNC_DIR/global" 2>/dev/null | wc -l)
    echo "    $count log files active."
}

init_memory() {
    echo ">>> Initializing memory system..."
    mkdir -p "$SYNC_DIR/global"

    local count=0
    for f in global-mistakes-log.md global-decisions-log.md global-pattern-library.md global-stack-notes.md; do
        if [ ! -f "$SYNC_DIR/global/$f" ] && [ -f "$TEMPLATES_DIR/$f" ]; then
            cp "$TEMPLATES_DIR/$f" "$SYNC_DIR/global/$f"
            count=$((count + 1))
        fi
    done
    echo "    $count templates seeded."

    if [ -n "$REPO_URL" ]; then
        if [ ! -d "$REPO_DIR" ]; then
            git clone "$REPO_URL" "$REPO_DIR" 2>/dev/null
            if [ -d "$REPO_DIR/global" ]; then
                cp -r "$REPO_DIR/global/"* "$SYNC_DIR/global/" 2>/dev/null
            fi
        fi
    fi

    local fcount=$(ls "$SYNC_DIR/global" 2>/dev/null | wc -l)
    echo ">>> Memory ready. $fcount files in $SYNC_DIR/global"
}

case "${1:-}" in
    init)  init_memory ;;
    pull)  pull_memory ;;
    push)  shift; push_memory "$*" ;;
    *)
        echo "Usage: sync-memory.sh init|pull|push [message]"
        echo "  init  — First-time setup (seeds templates, clones remote if configured)"
        echo "  pull  — Load latest memory before starting work"
        echo "  push  — Save memory with optional commit message"
        ;;
esac
