# ── Nia AI Companion — Native Desktop App Launcher (PowerShell) ──────────────
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host " Launching Nia 3D AI Companion (Standalone Desktop App)" -ForegroundColor Green
Write-Host " 3D Avatar: Nia (Nai.vrm - Transparent Rendering)" -ForegroundColor White
Write-Host "============================================================" -ForegroundColor Cyan

Set-Location "d:\Team of Vishwajeet"

# 1. Check local background service
$isAlive = $false
try {
    $r = Invoke-WebRequest -Uri "http://localhost:8080/" -TimeoutSec 1 -UseBasicParsing -ErrorAction SilentlyContinue
    if ($r.StatusCode -eq 200) { $isAlive = $true }
} catch {}

if (-not $isAlive) {
    Write-Host "[INFO] Starting background local engine..." -ForegroundColor Yellow
    Start-Process -FilePath "cmd.exe" -ArgumentList "/c npm run dev" -WindowStyle Hidden
    Start-Sleep -Seconds 3
}

# 2. Launch Native App Window (No Browser Chrome, Standalone Floating Window)
Write-Host "[INFO] Opening standalone desktop companion window..." -ForegroundColor Cyan
Start-Process "msedge.exe" -ArgumentList "--app=http://localhost:8080/companion --window-size=380,580 --window-position=100,200"

Write-Host "[SUCCESS] Nia is now running on your desktop!" -ForegroundColor Green
