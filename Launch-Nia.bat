@echo off
title Nia 3D AI Companion & Operating System
cd /d "d:\Team of Vishwajeet"
echo ============================================================
echo   Launching Nia 3D AI Companion & Personal AI OS
echo   3D Model: Nai.vrm (VRM 1.0)
echo   Target URL: http://localhost:8080/console
echo ============================================================
echo.

:: Check if server is already running on port 8080
powershell -Command "try { $r = Invoke-WebRequest -Uri 'http://localhost:8080/api/health' -TimeoutSec 1 -UseBasicParsing; exit 0 } catch { exit 1 }"
if %ERRORLEVEL% EQU 0 (
    echo [INFO] Nia server is already active on port 8080.
    start http://localhost:8080/console
    exit /b 0
)

echo [INFO] Starting development server on port 8080...
start "" http://localhost:8080/console
npm run dev
