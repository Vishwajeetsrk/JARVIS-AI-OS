@echo off
title Nia 3D AI Companion (Local-First Windows Desktop App)
cd /d "d:\Team of Vishwajeet"
echo ============================================================
echo   Launching Nia 3D AI Companion (Local-First Windows App)
echo   3D Character: Nia (Nai.vrm - Transparent Rendering)
echo   Companion View: http://localhost:8080/companion
echo   Command Console: http://localhost:8080/console
echo ============================================================
echo.

:: Check if server is already running on port 8080
powershell -Command "try { $r = Invoke-WebRequest -Uri 'http://localhost:8080/api/health' -TimeoutSec 1 -UseBasicParsing; exit 0 } catch { exit 1 }"
if %ERRORLEVEL% EQU 0 (
    echo [INFO] Nia local runtime is already active on port 8080.
    start "" http://localhost:8080/companion
    exit /b 0
)

echo [INFO] Starting Nia local runtime on port 8080...
start "" http://localhost:8080/companion
npm run dev
