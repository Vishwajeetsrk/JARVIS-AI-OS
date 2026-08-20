# JARVIS AI OS - Master Cross-Device Real-Time Launcher
$Host.UI.RawUI.WindowTitle = "JARVIS AI OS - Real-Time Voice & HUD Command Server"
Set-Location -Path $PSScriptRoot

Clear-Host
Write-Host "===============================================================================" -ForegroundColor Cyan
Write-Host "       JJJJJJ    AAAA    RRRRRR   VV      VV  IIIIII   SSSSSS" -ForegroundColor Cyan
Write-Host "           JJ   AA  AA   RR   RR  VV      VV    II    SS     " -ForegroundColor Cyan
Write-Host "           JJ  AAAAAA   RRRRRR    VV    VV     II     SSSSSS " -ForegroundColor Cyan
Write-Host "       JJ  JJ  AA    AA  RR  RR     VV  VV      II         SS" -ForegroundColor Cyan
Write-Host "        JJJJ   AA    AA  RR   RR     VVVV     IIIIII   SSSSSS" -ForegroundColor Cyan
Write-Host ""
Write-Host "                   AI OPERATING SYSTEM  |  v2.5.6" -ForegroundColor Cyan
Write-Host "             One Brain. Many Shells. Cross-Device Voice + HUD." -ForegroundColor Cyan
Write-Host "===============================================================================" -ForegroundColor Cyan
Write-Host ""

# Check Node.js
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "[!] ERROR: Node.js is not installed or not in PATH." -ForegroundColor Red
    Read-Host "Press Enter to exit..."
    exit 1
}

# Sync config from .env to desktop/config/api_keys.json
Write-Host "[*] Synchronizing AI keys and database configurations..." -ForegroundColor Yellow
if (Test-Path ".env") {
    $envContent = Get-Content ".env" -Raw
    $gemini = if ($envContent -match 'GEMINI_API_KEY=(.*)') { $matches[1].Trim() } else { "" }
    $groq = if ($envContent -match 'GROQ_API_KEY=(.*)') { $matches[1].Trim() } else { "" }
    $subUrl = if ($envContent -match 'SUPABASE_URL="?(.*?)"?$') { $matches[1].Trim() } else { "" }
    $subKey = if ($envContent -match 'SUPABASE_PUBLISHABLE_KEY="?(.*?)"?$') { $matches[1].Trim() } else { "" }

    $cfg = @{
        gemini_api_key = $gemini
        groq_api_key = $groq
        openrouter_api_key = ""
        supabase_url = $subUrl
        supabase_anon_key = $subKey
        os_system = "windows"
    } | ConvertTo-Json

    New-Item -ItemType Directory -Force -Path "desktop/config" | Out-Null
    Set-Content -Path "desktop/config/api_keys.json" -Value $cfg -Encoding UTF8
    Write-Host "    [v] Synced keys: Google Gemini + Groq Whisper/Llama 3.3 + Supabase" -ForegroundColor Green
}

# Get Local Network IP for Phone / Laptop access
$localIp = "127.0.0.1"
try {
    $ipObj = Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue | Where-Object { 
        $_.IPAddress -notlike "127.*" -and $_.IPAddress -notlike "169.254.*" -and $_.InterfaceAlias -notlike "*Loopback*"
    } | Select-Object -First 1
    if ($ipObj) {
        $localIp = $ipObj.IPAddress
    }
} catch {}

Write-Host ""
Write-Host "===============================================================================" -ForegroundColor Green
Write-Host " [+] JARVIS REAL-TIME SERVER STARTING (CROSS-DEVICE READY)" -ForegroundColor Green
Write-Host "     - Local PC (Console & 3D HUD): http://localhost:8080/console" -ForegroundColor Cyan
Write-Host "     - Mobile / Laptop (Same Wi-Fi): http://$($localIp):8080/console" -ForegroundColor Cyan
Write-Host "     - Install PWA: Open on Phone/Laptop and tap 'Install / Add to Home Screen'" -ForegroundColor Yellow
Write-Host "     - Voice Engine: Whisper STT + Audio Reactive 3D Arc Reactor HUD" -ForegroundColor Cyan
Write-Host "     - Autonomous Suite: Deep Research + File Ops + 53 Design Systems" -ForegroundColor Cyan
Write-Host "===============================================================================" -ForegroundColor Green
Write-Host ""

# Auto open browser on local PC
Start-Job -ScriptBlock {
    Start-Sleep -Seconds 3
    Start-Process "http://localhost:8080/console"
} | Out-Null

# Start server with cross-device host binding
npm run dev
