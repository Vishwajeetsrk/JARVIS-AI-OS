@echo off
setlocal
echo ==========================================================
echo       JARVIS AI OS -- ENABLE WINDOWS AUTO-START
echo ==========================================================
echo.
echo [*] Installing JARVIS AI OS into your Windows Startup folder...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\enable_windows_autostart.ps1"
echo.
pause
