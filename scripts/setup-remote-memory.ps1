# setup-remote-memory.ps1 — Connect local memory to a GitHub repo
# Run this after creating the remote repo on GitHub
# Usage: .\setup-remote-memory.ps1 https://github.com/Vishwajeetsrk/agent-memory.git

param(
    [Parameter(Mandatory=$true)]
    [string]$RepoUrl
)

$ErrorActionPreference = "Stop"
$repoDir = "$env:USERPROFILE\.agent-memory\repo"

if (-not (Test-Path $repoDir)) {
    Write-Host "Local memory repo not found at $repoDir" -ForegroundColor Red
    Write-Host "Run memory-sync\sync-memory.ps1 init first" -ForegroundColor Yellow
    exit 1
}

Write-Host ">>> Connecting local memory to: $RepoUrl" -ForegroundColor Cyan

Push-Location $repoDir
try {
    git remote add origin $RepoUrl
    git push -u origin main
    Write-Host ">>> Memory repo connected and pushed!" -ForegroundColor Green

    # Update sync scripts with the repo URL
    $psScript = "D:\Team of Vishwajeet\Agent-Team-Skills\memory-sync\sync-memory.ps1"
    $shScript = "D:\Team of Vishwajeet\Agent-Team-Skills\memory-sync\sync-memory.sh"

    if (Test-Path $psScript) {
        $content = Get-Content $psScript -Raw
        $content = $content -replace '\$repoUrl = ""', "`$repoUrl = `"$RepoUrl`""
        Set-Content $psScript $content -Encoding utf8
        Write-Host "  Updated sync-memory.ps1" -ForegroundColor Green
    }
    if (Test-Path $shScript) {
        $content = Get-Content $shScript -Raw
        $content = $content -replace 'REPO_URL=""', "REPO_URL=`"$RepoUrl`""
        Set-Content $shScript $content -Encoding utf8
        Write-Host "  Updated sync-memory.sh" -ForegroundColor Green
    }

    # Update memory-agent SKILL.md
    $skillFile = "D:\Team of Vishwajeet\Agent-Team-Skills\.claude\skills\memory-agent\SKILL.md"
    if (Test-Path $skillFile) {
        $content = Get-Content $skillFile -Raw
        $oldUrl = [regex]::Escape("github.com/Vishwajeetsrk/agent-memory")
        $newUrl = $RepoUrl -replace 'https://github.com/', 'github.com/'
        $content = $content -replace $oldUrl, $newUrl
        Set-Content $skillFile $content -Encoding utf8
        Write-Host "  Updated memory-agent SKILL.md" -ForegroundColor Green
    }

    Write-Host ""
    Write-Host "Cross-machine memory is now active." -ForegroundColor Cyan
    Write-Host "Run at START of every session: .\memory-sync\sync-memory.ps1 pull" -ForegroundColor Cyan
    Write-Host "Run at END of every session:   .\memory-sync\sync-memory.ps1 push" -ForegroundColor Cyan
}
finally {
    Pop-Location
}
