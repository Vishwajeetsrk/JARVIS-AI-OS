@echo off
title Nia 3D AI Companion (Standalone Desktop App)
cd /d "%~dp0"
echo ============================================================
echo   Launching Nia 3D AI Companion (Standalone Windows App)
echo   3D Model: Nia (Nai.vrm - Transparent Desktop Companion)
echo ============================================================
echo.

:: 1. Launch Vite local server in background if not already active
powershell -Command "try { $r = Invoke-WebRequest -Uri 'http://localhost:8080/' -TimeoutSec 1 -UseBasicParsing; exit 0 } catch { exit 1 }"
if %ERRORLEVEL% NEQ 0 (
    echo [INFO] Starting Nia desktop background engine...
    start /B npm run dev
    timeout /t 3 /nobreak >nul
)

:: 2. Launch Standalone Native Window (App Mode - No Browser Tabs, No URL bar)
echo [INFO] Launching Nia Standalone Desktop Application Window...
start msedge.exe --app="http://localhost:8080/companion" --window-size=380,580 --window-position=100,200

exit /b 0
