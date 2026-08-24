@echo off
title Nia AI Companion Launcher
cd /d "%~dp0"

:: 1. Check if Nia server is already active on 8080
powershell -Command "try { $r = Invoke-WebRequest -Uri 'http://localhost:8080/' -TimeoutSec 1 -UseBasicParsing; exit 0 } catch { exit 1 }"
if %ERRORLEVEL% NEQ 0 (
    echo Starting Nia desktop engine in background...
    powershell -Command "Start-Process -FilePath 'npm.cmd' -ArgumentList 'run dev' -WorkingDirectory '%~dp0' -WindowStyle Hidden"
    timeout /t 3 /nobreak >nul
)

:: 2. Launch Standalone Native Window (App Mode - No Browser Tabs, No URL bar)
echo Launching Nia 3D Desktop Companion...
start msedge.exe --app="http://localhost:8080/companion" --window-size=380,580 --window-position=100,200

:: 3. Exit launcher automatically
exit 0
