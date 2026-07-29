# launch-dashboard.ps1 — Agent Team Dashboard Launcher
# Opens the visual web dashboard and checks system status

$repoPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$dashboardPath = Join-Path $repoPath "dashboard" "index.html"

Write-Host "=== Agent Team Dashboard ===" -ForegroundColor Cyan
Write-Host ""

# Check for hosted URL
$hostedUrl = "https://vishwajeetsrk.github.io/Agent-Team-Skills"
Write-Host "Hosted dashboard (when deployed):" -ForegroundColor Cyan
Write-Host "  $hostedUrl" -ForegroundColor Green
Write-Host ""

# Open local dashboard
if (Test-Path $dashboardPath) {
    Write-Host "Opening local dashboard..." -ForegroundColor Green
    try {
        Start-Process $dashboardPath
    }
    catch {
        Write-Host "Open this file manually: $dashboardPath" -ForegroundColor Yellow
    }
} else {
    Write-Host "Dashboard not found at: $dashboardPath" -ForegroundColor Red
}

# Check memory
Write-Host ""
Write-Host "System Status:" -ForegroundColor Cyan
$memoryPath = "$env:USERPROFILE\.agent-memory\global"
if (Test-Path $memoryPath) {
    $fileCount = (Get-ChildItem -Path $memoryPath -File).Count
    Write-Host "  [$(Get-CheckMark 'green')] Memory: $fileCount log files at ~\.agent-memory\global\" -ForegroundColor Green
} else {
    Write-Host "  [ ] Memory: Not initialized" -ForegroundColor Yellow
    Write-Host "       Run: .\memory-sync\sync-memory.ps1 init" -ForegroundColor Yellow
}

# Check remote memory
$memRepoPath = "$env:USERPROFILE\.agent-memory\repo"
if (Test-Path "$memRepoPath\.git") {
    Push-Location $memRepoPath
    $remoteUrl = git remote get-url origin 2>$null
    Pop-Location
    if ($remoteUrl) {
        Write-Host "  [$(Get-CheckMark 'green')] Remote memory: $remoteUrl" -ForegroundColor Green
    } else {
        Write-Host "  [ ] Remote memory: Local only (no remote configured)" -ForegroundColor Yellow
        Write-Host "       Run: .\setup-remote-memory.ps1 <repo-url>" -ForegroundColor Yellow
    }
}

# Check GitHub Pages
$pagesBranch = git -C $repoPath branch --list gh-pages 2>$null
if ($pagesBranch) {
    Write-Host "  [$(Get-CheckMark 'green')] GitHub Pages: gh-pages branch exists" -ForegroundColor Green
} else {
    Write-Host "  [ ] GitHub Pages: Not deployed" -ForegroundColor Yellow
    Write-Host "       Push to enable: The .github/workflows/deploy-dashboard.yml will deploy on next push" -ForegroundColor Yellow
    Write-Host "       Then enable Pages in repo Settings > Pages > Source: GitHub Actions" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Quick links:" -ForegroundColor Cyan
Write-Host "  Dashboard:   $dashboardPath" -ForegroundColor White
Write-Host "  Memory pull: .\memory-sync\sync-memory.ps1 pull" -ForegroundColor White
Write-Host "  Memory push: .\memory-sync\sync-memory.ps1 push" -ForegroundColor White
Write-Host "  GitHub:      https://github.com/Vishwajeetsrk/Agent-Team-Skills" -ForegroundColor White
Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

function Get-CheckMark {
    param([string]$Color)
    return "$([char]0x2713)"
}
