#!/usr/bin/env bash
# Jarvis AI OS — CLI Installer for macOS / Linux
# Usage: curl -fsSL https://jarvisaios.com/cli/install.sh | bash
#
# Installs the Jarvis CLI globally via npm.
# Supports: macOS (ARM/Intel), Linux (x64/arm64)
# Requires: Node.js 18+ and npm

set -euo pipefail

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Symbols
CHECK="✓"
CROSS="✗"
ARROW="→"
STAR="★"

print_banner() {
    echo -e "${CYAN}"
    cat << 'EOF'
       _____                      _                   _____   ____
      |  __ \                    | |                 / ____| / __ \
      | |__) |__ _ __ ___  _ __  | |_  ___  _ __    | |  __ | |  | |
      |  ___// _ \ '__/ __|| '_ \ | __|/ _ \| '_ \   | | |_ || |  | |
      | |   |  __/ |  \__ \| |_) || |_|  __/| | | |  | |__| || |__| |
      |_|    \___|_|  |___/| .__/  \__|\___||_| |_|   \_____| \____/
                            | |
                            |_|
EOF
    echo -e "${NC}"
    echo -e "${BLUE}  One Brain. Many Shells.${NC}"
    echo ""
}

log_info() {
    echo -e "${BLUE}${ARROW} ${NC}$1"
}

log_success() {
    echo -e "${GREEN}${CHECK} ${NC}$1"
}

log_warn() {
    echo -e "${YELLOW}! ${NC}$1"
}

log_error() {
    echo -e "${RED}${CROSS} ${NC}$1"
}

check_node() {
    if ! command -v node &> /dev/null; then
        log_error "Node.js is not installed."
        echo ""
        echo "  Install Node.js from: https://nodejs.org/"
        echo "  We recommend Node.js 20+ (LTS)."
        echo ""
        echo "  On macOS (Homebrew):"
        echo "    brew install node"
        echo ""
        echo "  On Ubuntu/Debian:"
        echo "    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -"
        echo "    sudo apt-get install -y nodejs"
        echo ""
        exit 1
    fi

    local node_version
    node_version=$(node -v | sed 's/v//' | cut -d. -f1)
    if [ "$node_version" -lt 18 ]; then
        log_error "Node.js 18+ is required (found v$(node -v | sed 's/v//'))"
        echo "  Upgrade from: https://nodejs.org/"
        exit 1
    fi

    log_success "Node.js $(node -v) detected"
}

check_npm() {
    if ! command -v npm &> /dev/null; then
        log_error "npm is not installed."
        echo "  Install npm: https://www.npmjs.com/get-npm"
        exit 1
    fi

    log_success "npm $(npm -v) detected"
}

install_jarvis() {
    echo ""
    log_info "Installing Jarvis CLI globally..."
    echo ""

    if npm install -g @jarvis-ai/cli 2>/dev/null; then
        log_success "Jarvis CLI installed successfully!"
    else
        log_warn "Global install failed. Trying with sudo..."
        if sudo npm install -g @jarvis-ai/cli; then
            log_success "Jarvis CLI installed with sudo!"
        else
            log_error "Installation failed. Try manually:"
            echo "  npm install -g @jarvis-ai/cli"
            exit 1
        fi
    fi
}

verify_install() {
    echo ""
    log_info "Verifying installation..."

    if command -v jarvis &> /dev/null; then
        local version
        version=$(jarvis --version 2>/dev/null || echo "installed")
        log_success "Jarvis CLI ${version} is ready!"
    else
        log_warn "CLI installed but 'jarvis' command not in PATH."
        echo "  Try opening a new terminal window."
        echo "  Or run: npx jarvis --version"
    fi
}

print_next_steps() {
    echo ""
    echo -e "${GREEN}${STAR} Installation complete!${NC}"
    echo ""
    echo "  Quick start:"
    echo -e "    ${CYAN}jarvis init my-project${NC}      Create a new project"
    echo -e "    ${CYAN}jarvis chat${NC}                 Chat with Jarvis in terminal"
    echo -e "    ${CYAN}jarvis run \"build an API\"${NC}   Run agent on a task"
    echo -e "    ${CYAN}jarvis status${NC}              Check system status"
    echo -e "    ${CYAN}jarvis --help${NC}              Show all commands"
    echo ""
    echo "  Documentation: https://jarvisaios.com/docs/cli"
    echo "  Community:      https://discord.gg/jarvis-ai"
    echo ""
}

main() {
    print_banner
    check_node
    check_npm
    install_jarvis
    verify_install
    print_next_steps
}

main "$@"
