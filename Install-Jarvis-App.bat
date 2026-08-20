@echo off
title JARVIS AI OS — Desktop App Installer
color 0b
echo ======================================================================
echo             JARVIS AI OS — NATIVE DESKTOP APP INSTALLER
echo ======================================================================
echo.
echo [*] Creating Desktop App Shortcut on your Windows Desktop...
echo.

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\create_desktop_shortcut.ps1"

echo ======================================================================
echo  [+] INSTALLATION COMPLETE!
echo  [+] You now have "JARVIS AI OS" directly on your Desktop.
echo  [+] Click it anytime to open JARVIS as a standalone native app!
echo ======================================================================
echo.
pause
