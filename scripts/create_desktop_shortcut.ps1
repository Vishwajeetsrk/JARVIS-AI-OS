$WshShell = New-Object -ComObject WScript.Shell
$DesktopPath = [System.Environment]::GetFolderPath('Desktop')
$ShortcutPath = Join-Path $DesktopPath "JARVIS AI OS.lnk"

$Shortcut = $WshShell.CreateShortcut($ShortcutPath)
$Shortcut.TargetPath = "msedge.exe"
$Shortcut.Arguments = "--app=http://localhost:8080/console --window-size=1440,900"
$Shortcut.Description = "JARVIS AI OS - Autonomous Personal AI OS and Voice Assistant"
$Shortcut.Save()

Write-Host "[+] Successfully created JARVIS AI OS desktop app shortcut on your Windows Desktop!" -ForegroundColor Green
Write-Host "[+] Shortcut path: $ShortcutPath" -ForegroundColor Cyan
