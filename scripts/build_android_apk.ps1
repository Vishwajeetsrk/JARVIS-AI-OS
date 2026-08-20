# JARVIS AI OS -- Android Mobile Companion Builder Script
$ErrorActionPreference = "Continue"

Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host "       JARVIS AI OS -- ANDROID MOBILE COMPANION BUILDER          " -ForegroundColor Yellow
Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host ""

# Find ADB path
$adbPaths = @(
    "$env:LOCALAPPDATA\Android\Sdk\platform-tools\adb.exe",
    "C:\Users\vishw\AppData\Local\Android\Sdk\platform-tools\adb.exe"
)

$adbExe = "adb"
foreach ($p in $adbPaths) {
    if (Test-Path $p) {
        $adbExe = $p
        $env:PATH += ";$env:LOCALAPPDATA\Android\Sdk\platform-tools"
        break
    }
}

Write-Host "[1/4] Building production web bundle..." -ForegroundColor Cyan
npm run build

Write-Host ""
Write-Host "[2/4] Syncing Android Capacitor platform..." -ForegroundColor Cyan
npx cap sync android

Write-Host ""
Write-Host "[3/4] Building Debug APK via Gradle..." -ForegroundColor Cyan
if (Test-Path "android\gradlew.bat") {
    Push-Location "android"
    .\gradlew.bat assembleDebug
    Pop-Location
    
    $apkPath = "android\app\build\outputs\apk\debug\app-debug.apk"
    if (Test-Path $apkPath) {
        Write-Host ""
        Write-Host "[OK] SUCCESS! Android APK generated at:" -ForegroundColor Green
        Write-Host "    $apkPath" -ForegroundColor White
        Write-Host ""
        Write-Host "[4/4] Attempting automatic phone installation via ADB..." -ForegroundColor Cyan
        try {
            & $adbExe devices
            & $adbExe install -r $apkPath
            Write-Host "[OK] Installed JARVIS APK on connected Android device!" -ForegroundColor Green
        } catch {
            Write-Host "[!] Phone not connected via USB or USB Debugging not enabled." -ForegroundColor Yellow
            Write-Host "    You can copy $apkPath directly to your phone to install." -ForegroundColor Gray
        }
    }
} else {
    Write-Host "[*] Opening project in Android Studio..." -ForegroundColor Yellow
    npx cap open android
}

Write-Host ""
Write-Host "=================================================================" -ForegroundColor Cyan
