# JARVIS AI OS - Automated Ollama Local AI Setup Script
$ErrorActionPreference = "SilentlyContinue"

Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host "         JARVIS AI OS -- OFFLINE LOCAL AI SETUP                  " -ForegroundColor Yellow
Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host ""

$ollamaCmd = Get-Command "ollama" -ErrorAction SilentlyContinue

if ($ollamaCmd) {
    Write-Host "[OK] Ollama is already installed on your system!" -ForegroundColor Green
} else {
    Write-Host "[*] Ollama not found. Downloading OllamaSetup.exe for Windows..." -ForegroundColor Yellow
    $installerUrl = "https://ollama.com/download/OllamaSetup.exe"
    $installerPath = "$env:TEMP\OllamaSetup.exe"
    
    try {
        [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
        Invoke-WebRequest -Uri $installerUrl -OutFile $installerPath -UseBasicParsing
        Write-Host "[*] Running Ollama installer. Please click Install in the window that appears..." -ForegroundColor Cyan
        Start-Process -FilePath $installerPath -Wait
        Write-Host "[OK] Ollama installer completed." -ForegroundColor Green
    } catch {
        Write-Host "[!] Could not auto-download. Please install manually from https://ollama.com/download" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "[*] Starting local Ollama service in background..." -ForegroundColor Cyan
Start-Process -FilePath "ollama" -ArgumentList "serve" -WindowStyle Hidden -ErrorAction SilentlyContinue
Start-Sleep -Seconds 3

Write-Host ""
Write-Host "[*] Downloading lightweight local AI model: llama3..." -ForegroundColor Yellow
Write-Host "    (This enables 100% offline smart voice & chat on your laptop)" -ForegroundColor Gray
Write-Host ""

try {
    & ollama pull llama3
    Write-Host ""
    Write-Host "[OK] Local AI Setup Complete! JARVIS can now run 100% offline." -ForegroundColor Green
} catch {
    Write-Host "[!] Could not pull llama3. Run: ollama pull llama3" -ForegroundColor Yellow
}

Write-Host "=================================================================" -ForegroundColor Cyan
