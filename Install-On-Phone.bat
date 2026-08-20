@echo off
setlocal
echo ==========================================================
echo        JARVIS AI OS -- INSTALL APK ON ANDROID PHONE
echo ==========================================================
echo.

set ADB="C:\Users\vishw\AppData\Local\Android\Sdk\platform-tools\adb.exe"
set APK="d:\Team of Vishwajeet\android\app\build\outputs\apk\debug\app-debug.apk"

if not exist %ADB% (
    set ADB=adb
)

echo [*] Checking connected Android devices...
%ADB% devices
echo.

if exist %APK% (
    echo [*] Installing JARVIS APK on your phone...
    %ADB% install -r %APK%
    echo.
    echo [OK] Done! Open JARVIS on your phone.
) else (
    echo [!] APK not built yet. Building now...
    powershell -ExecutionPolicy Bypass -File "%~dp0scripts\build_android_apk.ps1"
)

pause
