@echo off
setlocal enabledelayedexpansion

cd /d "d:\Team of Vishwajeet"

:: 1. Check if Node / Web server is already running on port 8080
netstat -ano | findstr :8080 >nul 2>&1
if errorlevel 1 (
    start "" /b npm run dev
)

:: 2. Wait 3 seconds for server initialization
timeout /t 3 /nobreak >nul 2>&1

:: 3. Check if Python assistant is already running
tasklist /fi "imagename eq python.exe" 2>nul | findstr /i "python" >nul 2>&1
if errorlevel 1 (
    start "" /b npm run assistant
)

:: 4. Open Desktop Console in browser window
start http://localhost:8080/console

exit /b 0
