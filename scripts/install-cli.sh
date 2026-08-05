#!/usr/bin/env bash
# Jarvis AI OS — CLI Installer for macOS / Linux
# Installs Jarvis CLI from the GitHub repository.
# Requires: Node.js 18+ and npm

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

CHECK="✓"
CROSS="✗"
ARROW="→"

log_info()    { echo -e "${BLUE}${ARROW} ${NC}$1"; }
log_success() { echo -e "${GREEN}${CHECK} ${NC}$1"; }
log_warn()    { echo -e "${YELLOW}! ${NC}$1"; }
log_error()   { echo -e "${RED}${CROSS} ${NC}$1"; }

echo -e "${CYAN}"
echo "  Jarvis AI OS — CLI Installer"
echo -e "${NC}"

# Check Node.js
if ! command -v node &> /dev/null; then
    log_error "Node.js is not installed. Install from https://nodejs.org/ (v20+)"
    exit 1
fi

NODE_VERSION=$(node -v | sed 's/v//' | cut -d. -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    log_error "Node.js 18+ required (found v$(node -v | sed 's/v//'))"
    exit 1
fi
log_success "Node.js $(node -v)"

# Check npm
if ! command -v npm &> /dev/null; then
    log_error "npm is not installed"
    exit 1
fi

# Install globally from GitHub
REPO_URL="https://github.com/Vishwajeetsrk/JARVIS-AI-OS.git"
INSTALL_DIR="${JARVIS_INSTALL_DIR:-$HOME/.jarvis-cli}"

log_info "Cloning Jarvis AI OS..."
if [ -d "$INSTALL_DIR" ]; then
    log_warn "Updating existing install at $INSTALL_DIR"
    cd "$INSTALL_DIR" && git pull --quiet
else
    git clone --depth 1 "$REPO_URL" "$INSTALL_DIR" --quiet
fi

log_info "Installing dependencies..."
cd "$INSTALL_DIR" && npm install --legacy-peer-deps --quiet 2>/dev/null

# Create wrapper script
BIN_DIR="${JARVIS_BIN_DIR:-$HOME/.local/bin}"
mkdir -p "$BIN_DIR"

cat > "$BIN_DIR/jarvis" << WRAPPER
#!/usr/bin/env bash
cd "$INSTALL_DIR" && npx tsx cli/index.ts "\$@"
WRAPPER
chmod +x "$BIN_DIR/jarvis"

log_success "Jarvis CLI installed to $BIN_DIR/jarvis"

# Check if in PATH
if [[ ":$PATH:" != *":$BIN_DIR:"* ]]; then
    log_warn "$BIN_DIR is not in your PATH"
    echo "  Add this to your shell profile:"
    echo "    export PATH=\"\$HOME/.local/bin:\$PATH\""
    echo ""
fi

echo ""
log_success "Installation complete!"
echo ""
echo "  Quick start:"
echo -e "    ${CYAN}jarvis init${NC}              Initialize .jarvis/ config"
echo -e "    ${CYAN}jarvis status${NC}            Show project status"
echo -e "    ${CYAN}jarvis specs list${NC}        List all specs"
echo -e "    ${CYAN}jarvis hooks list${NC}        List registered hooks"
echo -e "    ${CYAN}jarvis --help${NC}            Show all commands"
echo ""
echo "  Source: https://github.com/Vishwajeetsrk/JARVIS-AI-OS"
echo ""
