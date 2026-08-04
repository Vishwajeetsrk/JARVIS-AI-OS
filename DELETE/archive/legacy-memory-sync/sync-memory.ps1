# sync-memory.ps1 -- Memory Sync for Windows
# Pull at START, push at END of every AI session
# Works locally or with a Git repo for cross-machine sync

param(
    [Parameter(Position=0)]
    [ValidateSet("pull","push","init")]
    [string]$Command,
    [Parameter(Position=1, ValueFromRemainingArguments)]
    [string]$Message
)

$ErrorActionPreference = "Stop"
$syncDir = "$env:USERPROFILE\.agent-memory"
$repoDir = "$syncDir\repo"
$globalDir = "$syncDir\global"
$repoUrl = ""  # Set to a Git repo URL for cross-machine sync

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$templatesDir = "$scriptDir\..\.claude\skills\memory-agent\templates"

function Initialize-Memory {
    Write-Host ">>> Initializing memory system..." -ForegroundColor Cyan

    New-Item -ItemType Directory -Path $globalDir -Force | Out-Null

    $templateFiles = @(
        "global-mistakes-log.md",
        "global-decisions-log.md",
        "global-pattern-library.md",
        "global-stack-notes.md"
    )

    $seeded = $false
    foreach ($file in $templateFiles) {
        $target = "$globalDir\$file"
        $source = "$templatesDir\$file"
        if (-not (Test-Path $target) -and (Test-Path $source)) {
            Copy-Item $source $target
            $seeded = $true
        }
    }

    if ($seeded) {
        Write-Host "  Templates seeded." -ForegroundColor Green
    }

    if ($repoUrl -and (Get-Command git -ErrorAction SilentlyContinue)) {
        if (-not (Test-Path $repoDir)) {
            git clone $repoUrl $repoDir 2>$null
            if (Test-Path "$repoDir\global") {
                Copy-Item "$repoDir\global\*" $globalDir -Force
                Write-Host "  Remote repo cloned." -ForegroundColor Green
            }
        }
    }

    $fileCount = (Get-ChildItem $globalDir -File).Count
    Write-Host ">>> Memory ready. $fileCount log files in $globalDir" -ForegroundColor Green
}

function Pull-Memory {
    Write-Host ">>> Pulling memory state..." -ForegroundColor Cyan

    New-Item -ItemType Directory -Path $globalDir -Force | Out-Null

    $repoAvailable = $false
    if ($repoUrl -and (Test-Path $repoDir)) {
        Push-Location $repoDir
        git pull 2>$null
        if (Test-Path "$repoDir\global") {
            Copy-Item "$repoDir\global\*" $globalDir -Force
        }
        $repoAvailable = $true
        Pop-Location
    }

    $fileCount = (Get-ChildItem $globalDir -File).Count
    if ($repoAvailable) {
        Write-Host ">>> Memory pulled from remote. $fileCount files synced." -ForegroundColor Green
    } else {
        Write-Host ">>> Local memory loaded. $fileCount files in $globalDir" -ForegroundColor Yellow
        if (-not $repoUrl) {
            Write-Host "    No remote repo configured. Cross-machine sync disabled." -ForegroundColor DarkYellow
            Write-Host "    Set `$repoUrl in this script to enable." -ForegroundColor DarkYellow
        }
    }
}

function Push-Memory {
    $commitMsg = "Auto-sync $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    if ($Message) { $commitMsg = $Message }

    Write-Host ">>> Pushing memory state..." -ForegroundColor Cyan

    New-Item -ItemType Directory -Path $globalDir -Force | Out-Null

    # Copy project files if they exist
    $projBrief = "$scriptDir\..\.agent-memory\PROJECT_BRIEF.md"
    $statusFile = "$scriptDir\..\.agent-memory\status.md"
    if (Test-Path $projBrief) { Copy-Item $projBrief $globalDir -Force }
    if (Test-Path $statusFile) { Copy-Item $statusFile $globalDir -Force }

    if ($repoUrl -and (Test-Path $repoDir)) {
        New-Item -ItemType Directory -Path "$repoDir\global" -Force | Out-Null
        Copy-Item "$globalDir\*" "$repoDir\global\" -Force

        Push-Location $repoDir
        git add -A

        $dirty = $true
        $null = git diff --cached --quiet 2>$null
        if ($LASTEXITCODE -eq 0) { $dirty = $false }

        if ($dirty) {
            git commit -m $commitMsg
            git push 2>$null
            if ($LASTEXITCODE -eq 0) {
                Write-Host ">>> Memory pushed: $commitMsg" -ForegroundColor Green
            } else {
                Write-Host ">>> Commit saved locally (push failed)" -ForegroundColor Yellow
            }
        } else {
            Write-Host ">>> No changes to push." -ForegroundColor Yellow
        }
        Pop-Location
    } else {
        Write-Host ">>> Memory saved locally at $globalDir" -ForegroundColor Green
        if (-not $repoUrl) {
            Write-Host "    No remote repo configured. Set `$repoUrl for cross-machine sync." -ForegroundColor DarkYellow
        }
    }

    $fileCount = (Get-ChildItem $globalDir -File).Count
    Write-Host "    $fileCount log files active." -ForegroundColor Cyan
}

# Main
switch ($Command) {
    "init"  { Initialize-Memory }
    "pull"  { Pull-Memory }
    "push"  { Push-Memory }
    default {
        Write-Host "Usage: .\sync-memory.ps1 <command>" -ForegroundColor Cyan
        Write-Host "  init  - First-time setup (seeds templates, clones remote if configured)"
        Write-Host "  pull  - Load latest memory before starting work"
        Write-Host "  push  - Save memory with all changes since last push"
        Write-Host ""
        Write-Host "Recommendation for setup:" -ForegroundColor Yellow
        Write-Host "  1. Create a private GitHub repo (e.g. agent-memory)" -ForegroundColor Yellow
        Write-Host "  2. Set `$repoUrl in this script to your repo URL" -ForegroundColor Yellow
        Write-Host "  3. Run: .\sync-memory.ps1 init" -ForegroundColor Yellow
    }
}
