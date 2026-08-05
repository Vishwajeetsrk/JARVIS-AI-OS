# Jarvis AI OS — CLI Installer for Windows (PowerShell)
# Installs Jarvis CLI from the GitHub repository.
# Requires: Node.js 18+ and npm

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "  Jarvis AI OS — CLI Installer" -ForegroundColor Cyan
Write-Host ""

# Check Node.js
try {
    $nodeVersion = (node -v) -replace 'v','' -split '\.' | Select-Object -First 1
    if ([int]$nodeVersion -lt 18) {
        Write-Host "[X] Node.js 18+ required (found v$((node -v).Trim()))" -ForegroundColor Red
        exit 1
    }
    Write-Host "[OK] Node.js $(node -v)" -ForegroundColor Green
} catch {
    Write-Host "[X] Node.js is not installed. Install from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Check npm
try { npm -v | Out-Null } catch {
    Write-Host "[X] npm is not installed" -ForegroundColor Red
    exit 1
}

# Clone or update repo
$repoUrl = "https://github.com/Vishwajeetsrk/JARVIS-AI-OS.git"
$installDir = if ($env:JARVIS_INSTALL_DIR) { $env:JARVIS_INSTALL_DIR } else { "$env:USERPROFILE\.jarvis-cli" }

Write-Host "[..] Cloning Jarvis AI OS..." -ForegroundColor Blue
if (Test-Path $installDir) {
    Write-Host "[!!] Updating existing install at $installDir" -ForegroundColor Yellow
    Set-Location $installDir; git pull --quiet
} else {
    git clone --depth 1 $repoUrl $installDir --quiet
}

Write-Host "[..] Installing dependencies..." -ForegroundColor Blue
Set-Location $installDir
npm install --legacy-peer-deps --quiet 2>$null

# Create wrapper script
$binDir = if ($env:JARVIS_BIN_DIR) { $env:JARVIS_BIN_DIR } else { "$env:USERPROFILE\.local\bin" }
New-Item -ItemType Directory -Path $binDir -Force | Out-Null

$wrapperContent = @"
@echo off
cd /d "$installDir"
npx tsx cli/index.ts %*
"@

Set-Content -Path "$binDir\jarvis.bat" -Value $wrapperContent

Write-Host "[OK] Jarvis CLI installed to $binDir\jarvis.bat" -ForegroundColor Green

# Check PATH
$pathDirs = $env:PATH -split ';'
if ($pathDirs -notcontains $binDir) {
    Write-Host "[!!] $binDir is not in your PATH" -ForegroundColor Yellow
    Write-Host "  Add it to your PATH or run:" -ForegroundColor Yellow
    Write-Host "    `$env:PATH = `"$binDir;`$env:PATH`"" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "[OK] Installation complete!" -ForegroundColor Green
Write-Host ""
Write-Host "  Quick start:"
Write-Host "    jarvis init           Initialize .jarvis/ config" -ForegroundColor Cyan
Write-Host "    jarvis status         Show project status" -ForegroundColor Cyan
Write-Host "    jarvis specs list     List all specs" -ForegroundColor Cyan
Write-Host "    jarvis hooks list     List registered hooks" -ForegroundColor Cyan
Write-Host "    jarvis --help         Show all commands" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Source: https://github.com/Vishwajeetsrk/JARVIS-AI-OS"
Write-Host ""
