$WshShell = New-Object -ComObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut('C:\Users\ravit\OneDrive\Desktop\JARVIS Ai - Premium.lnk')
$Shortcut.TargetPath = 'D:\TiTech Prabha Solution\JARVIS AI\JARVIS AI\JARVIS AI - Lite\.venv\Scripts\python.exe'
$Shortcut.Arguments = '"D:\TiTech Prabha Solution\JARVIS AI\JARVIS AI\JARVIS AI - Lite\main.py"'
$Shortcut.WorkingDirectory = 'D:\TiTech Prabha Solution\JARVIS AI\JARVIS AI\JARVIS AI - Lite'
$Shortcut.WindowStyle = 7
$Shortcut.Description = 'Launch JARVIS Ai - Premium'
if ('D:\TiTech Prabha Solution\JARVIS AI\JARVIS AI\JARVIS AI - Lite\assets\JARVIS_Lite_Logo.ico') { $Shortcut.IconLocation = 'D:\TiTech Prabha Solution\JARVIS AI\JARVIS AI\JARVIS AI - Lite\assets\JARVIS_Lite_Logo.ico,0' }
$Shortcut.Save()