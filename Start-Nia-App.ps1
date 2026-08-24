# ── Nia AI Companion — Native Desktop Application Launcher ─────────────────
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host " Launching Nia 3D AI Companion (Native Desktop App)" -ForegroundColor Green
Write-Host " Engine: Tauri 2.0 Native Windows Application" -ForegroundColor White
Write-Host " 3D Avatar: Nia (Nai.vrm - Transparent Window, No Browser)" -ForegroundColor White
Write-Host "============================================================" -ForegroundColor Cyan

Set-Location "d:\Team of Vishwajeet"

# Launch Native Tauri Desktop Application
npm run tauri:dev
