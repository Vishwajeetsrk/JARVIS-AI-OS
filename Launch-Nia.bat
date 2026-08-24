@echo off
title Nia 3D AI Companion (Native Desktop App)
cd /d "%~dp0"
echo ============================================================
echo   Launching Nia 3D AI Companion (Native Desktop App)
echo   Engine: Tauri 2.0 Native Windows Application
echo   3D Model: Nia (Nai.vrm - Transparent Window, No Browser)
echo ============================================================
echo.

:: Launch Native Tauri Desktop Application
npm run tauri:dev

exit /b 0
