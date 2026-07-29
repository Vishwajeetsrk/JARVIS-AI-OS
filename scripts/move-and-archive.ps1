$root = "d:\Team of Vishwajeet"

# Ensure target directories exist
$promptsDir = Join-Path $root "prompts"
$scriptsDir = Join-Path $root "scripts"
$archiveDir = Join-Path $root "archive"
$brandDir   = Join-Path $root "brand"

foreach ($dir in @($promptsDir, $scriptsDir, $archiveDir, $brandDir)) {
  if (-not (Test-Path $dir)) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
  }
}

# STEP 1: MOVE CONNECT PROMPTS & SCRIPTS
$connectPrompt = Join-Path $root "CONNECT-PROMPT.md"
if (Test-Path $connectPrompt) {
  Copy-Item -Path $connectPrompt -Destination (Join-Path $promptsDir "CONNECT-PROMPT.md") -Force
}

$designConnectPrompt = Join-Path $root "DESIGN-CONNECT-PROMPT.md"
if (Test-Path $designConnectPrompt) {
  Copy-Item -Path $designConnectPrompt -Destination (Join-Path $promptsDir "DESIGN-CONNECT-PROMPT.md") -Force
}

$ats = Join-Path $root "Agent-Team-Skills"
if (Test-Path $ats) {
  $scriptFiles = @("_write.ps1", "launch-dashboard.ps1", "setup-remote-memory.ps1", "main-cli.sh")
  foreach ($sf in $scriptFiles) {
    $srcFile = Join-Path $ats $sf
    if (Test-Path $srcFile) {
      Write-Host "Moving $sf to scripts/..."
      Move-Item -Path $srcFile -Destination $scriptsDir -Force
    }
  }

  # STEP 2: ARCHIVE LEGACY DASHBOARD & MEMORY-SYNC
  $dashDir = Join-Path $ats "dashboard"
  if (Test-Path $dashDir) {
    Write-Host "Archiving legacy dashboard to archive/..."
    Move-Item -Path $dashDir -Destination (Join-Path $archiveDir "legacy-dashboard") -Force
  }

  $memSyncDir = Join-Path $ats "memory-sync"
  if (Test-Path $memSyncDir) {
    Write-Host "Archiving legacy memory-sync to archive/..."
    Move-Item -Path $memSyncDir -Destination (Join-Path $archiveDir "legacy-memory-sync") -Force
  }
}

Write-Host "MOVE and ARCHIVE steps completed successfully."
