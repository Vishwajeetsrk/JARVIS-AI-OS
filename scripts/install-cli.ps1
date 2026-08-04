#Requires -Version 5.1
<#
.SYNOPSIS
    Jarvis AI OS — CLI Installer for Windows (PowerShell)

.DESCRIPTION
    Installs the Jarvis CLI globally via npm.
    Supports: Windows 10/11 (x64)
    Requires: Node.js 18+ and npm

.USAGE
    irm 'https://jarvisaios.com/cli/install.ps1' | iex

.NOTES
    Maintainer: Vishwajeet — vishwajeetsrk@gmail.com
#>

# --- Banner ---
$banner = @"

       _____                      _                   _____   ____
      |  __ \                    | |                 / ____| / __ \
      | |__) |__ _ __ ___  _ __  | |_  ___  _ __    | |  __ | |  | |
      |  ___// _ \ '__/ __|| '_ \ | __|/ _ \| '_ \   | | |_ || |  | |
      | |   |  __/ |  \__ \| |_) || |_|  __/| | | |  | |__| || |__| |
      |_|    \___|_|  |___/| .__/  \__|\___||_| |_|   \_____| \____/
                            | |
                            |_|

"@

Write-Host $banner -ForegroundColor Cyan
Write-Host "  One Brain. Many Shells." -ForegroundColor Blue
Write-Host ""

# --- Helpers ---
function Write-Info    { param($msg) Write-Host "  --> " -NoNewline -ForegroundColor Blue; Write-Host $msg }
function Write-OK      { param($msg) Write-Host "  ✓ " -NoNewline -ForegroundColor Green;  Write-Host $msg }
function Write-Warn    { param($msg) Write-Host "  ! " -NoNewline -ForegroundColor Yellow; Write-Host $msg }
function Write-Err     { param($msg) Write-Host "  ✗ " -NoNewline -ForegroundColor Red;    Write-Host $msg }

# --- Check Node.js ---
Write-Info "Checking for Node.js..."
$node = Get-Command node -ErrorAction SilentlyContinue
if (-not $node) {
    Write-Err "Node.js is not installed."
    Write-Host ""
    Write-Host "  Install Node.js from: https://nodejs.org/" -ForegroundColor White
    Write-Host "  We recommend Node.js 20+ (LTS)." -ForegroundColor Gray
    Write-Host ""
    Write-Host "  winget install OpenJS.NodeJS.LTS" -ForegroundColor Cyan
    Write-Host ""
    exit 1
}

$nodeVersion = (node -v) -replace 'v' -split '\.' | Select-Object -First 1
if ([int]$nodeVersion -lt 18) {
    Write-Err "Node.js 18+ is required (found v$((node -v) -replace 'v'))"
    Write-Host "  Upgrade from: https://nodejs.org/" -ForegroundColor White
    exit 1
}
Write-OK "Node.js v$(node -v)"

# --- Check npm ---
Write-Info "Checking for npm..."
$npm = Get-Command npm -ErrorAction SilentlyContinue
if (-not $npm) {
    Write-Err "npm is not installed."
    Write-Host "  Install from: https://www.npmjs.com/get-npm" -ForegroundColor White
    exit 1
}
Write-OK "npm v$(npm -v)"

# --- Install Jarvis CLI ---
Write-Host ""
Write-Info "Installing Jarvis CLI globally..."
Write-Host ""

try {
    npm install -g @jarvis-ai/cli 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-OK "Jarvis CLI installed successfully!"
    } else {
        throw "npm install failed"
    }
} catch {
    Write-Warn "Global install failed. Trying with elevated privileges..."
    try {
        Start-Process powershell -ArgumentList "-Command", "npm install -g @jarvis-ai/cli" -Verb RunAs -Wait
        Write-OK "Jarvis CLI installed with admin privileges!"
    } catch {
        Write-Err "Installation failed. Try manually:"
        Write-Host "  npm install -g @jarvis-ai/cli" -ForegroundColor Cyan
        exit 1
    }
}

# --- Refresh PATH ---
Write-Info "Refreshing PATH..."
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")

# --- Verify ---
Write-Host ""
Write-Info "Verifying installation..."

$jarvis = Get-Command jarvis -ErrorAction SilentlyContinue
if ($jarvis) {
    $version = try { jarvis --version 2>$null } catch { "installed" }
    Write-OK "Jarvis CLI $version is ready!"
} else {
    Write-Warn "CLI installed but 'jarvis' not in PATH."
    Write-Host "  Try opening a new terminal window." -ForegroundColor Gray
    Write-Host "  Or run: npx jarvis --version" -ForegroundColor Cyan
}

# --- Next Steps ---
Write-Host ""
Write-Host "  ★ Installation complete!" -ForegroundColor Green
Write-Host ""
Write-Host "  Quick start:" -ForegroundColor White
Write-Host "    " -NoNewline; Write-Host "jarvis init my-project" -ForegroundColor Cyan -NoNewline; Write-Host "      Create a new project"
Write-Host "    " -NoNewline; Write-Host "jarvis chat" -ForegroundColor Cyan -NoNewline; Write-Host "                 Chat with Jarvis in terminal"
Write-Host "    " -NoNewline; Write-Host "jarvis run ""build an API""" -ForegroundColor Cyan -NoNewline; Write-Host "   Run agent on a task"
Write-Host "    " -NoNewline; Write-Host "jarvis status" -ForegroundColor Cyan -NoNewline; Write-Host "              Check system status"
Write-Host "    " -NoNewline; Write-Host "jarvis --help" -ForegroundColor Cyan -NoNewline; Write-Host "              Show all commands"
Write-Host ""
Write-Host "  Documentation: " -NoNewline; Write-Host "https://jarvisaios.com/docs/cli" -ForegroundColor Cyan
Write-Host "  Community:      " -NoNewline; Write-Host "https://discord.gg/jarvis-ai" -ForegroundColor Cyan
Write-Host ""
