# JARVIS AI OS - Windows Auto-Start Installation Script
$ErrorActionPreference = "Continue"

Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host "       JARVIS AI OS -- WINDOWS AUTO-START INSTALLER              " -ForegroundColor Yellow
Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host ""

$startupFolder = [Environment]::GetFolderPath("Startup")
$shortcutPath = Join-Path $startupFolder "JARVIS_AI_OS.lnk"
$vbsPath = "d:\Team of Vishwajeet\scripts\jarvis_startup_service.vbs"

Write-Host "[1/2] Creating Windows Startup Shortcut in:" -ForegroundColor Cyan
Write-Host "    $shortcutPath" -ForegroundColor White

try {
    $WshShell = New-Object -ComObject WScript.Shell
    $Shortcut = $WshShell.CreateShortcut($shortcutPath)
    $Shortcut.TargetPath = "wscript.exe"
    $Shortcut.Arguments = "`"$vbsPath`""
    $Shortcut.WorkingDirectory = "d:\Team of Vishwajeet"
    $Shortcut.Description = "JARVIS AI OS - Automatic Background Service on Windows Startup"
    $Shortcut.WindowStyle = 7 # Minimized
    $Shortcut.Save()
    Write-Host "[OK] Startup Shortcut successfully created!" -ForegroundColor Green
} catch {
    Write-Host "[!] Could not create shortcut: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "[2/2] Registering User Login Run Registry Key..." -ForegroundColor Cyan
try {
    $regKey = "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run"
    $regVal = "wscript.exe `"$vbsPath`""
    Set-ItemProperty -Path $regKey -Name "JARVIS_AI_OS" -Value $regVal -Force
    Write-Host "[OK] Windows Registry Run key configured!" -ForegroundColor Green
} catch {
    Write-Host "[!] Registry warning: $_" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host " [SUCCESS] JARVIS AI OS will now automatically start every time   " -ForegroundColor Green
Write-Host "           you turn on or log into your laptop!                 " -ForegroundColor Green
Write-Host "=================================================================" -ForegroundColor Cyan
