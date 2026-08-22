# ── Nia AI Companion Desktop Shortcut Installer ──────────────────────────
$wscript = New-Object -ComObject WScript.Shell
$desktopPath = [System.Environment]::GetFolderPath('Desktop')
$shortcutPath = Join-Path $desktopPath "Nia AI Companion.lnk"

$targetPath = "d:\Team of Vishwajeet\Launch-Nia.bat"
$workingDir = "d:\Team of Vishwajeet"

$shortcut = $wscript.CreateShortcut($shortcutPath)
$shortcut.TargetPath = $targetPath
$shortcut.WorkingDirectory = $workingDir
$shortcut.Description = "Launch Nia 3D AI Companion & Operating System"
$shortcut.IconLocation = "d:\Team of Vishwajeet\public\favicon.ico,0"
$shortcut.Save()

Write-Host "============================================================" -ForegroundColor Cyan
Write-Host " [SUCCESS] Nia AI Companion Desktop Shortcut Created!" -ForegroundColor Green
Write-Host " Location: $shortcutPath" -ForegroundColor White
Write-Host " Double-click the shortcut on your desktop anytime to launch Nia." -ForegroundColor Yellow
Write-Host "============================================================" -ForegroundColor Cyan
