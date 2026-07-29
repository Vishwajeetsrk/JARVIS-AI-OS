#!/bin/bash
# main-cli.sh — Agent Team Skills CLI Entry Point

VERSION="1.0.0"

case "${1:-}" in
    setup)
        echo "=== Agent Team Skills Setup ==="
        echo "Project: ${2:-Unnamed Project}"
        mkdir -p ".agent-memory"
        cp -r "$(dirname "$0")/.claude/skills/memory-agent/templates/"* ".agent-memory/" 2>/dev/null
        echo "Done. Project initialized at .agent-memory/"
        echo ""
        echo "Next: Paste CONNECT-PROMPT.md in your AI session."
        ;;

    memory-pull)
        bash "$(dirname "$0")/memory-sync/sync-memory.sh" pull
        ;;

    memory-push)
        shift
        bash "$(dirname "$0")/memory-sync/sync-memory.sh" push "$*"
        ;;

    status)
        echo "=== Agent Team Skills Status ==="
        echo "Version: $VERSION"
        echo "Skills: $(ls -d "$(dirname "$0")/.claude/skills/"*/ 2>/dev/null | wc -l) loaded"
        echo "Memory: $([ -d "$HOME/.agent-memory/global" ] && echo 'active' || echo 'not set up')"
        ;;

    help|--help|-h)
        echo "Agent Team Skills CLI v$VERSION"
        echo ""
        echo "Commands:"
        echo "  setup [name]    — Initialize a new project"
        echo "  memory-pull     — Pull latest memory from git"
        echo "  memory-push     — Push memory to git"
        echo "  status          — Show system status"
        echo "  help            — Show this help"
        ;;

    *)
        echo "Agent Team Skills v$VERSION"
        echo "Usage: main-cli.sh [setup|memory-pull|memory-push|status|help]"
        ;;
esac
