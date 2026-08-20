# JARVIS AI OS - Laptop Storage & System Health Scanner
$ErrorActionPreference = "SilentlyContinue"

Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host "       JARVIS AI OS -- LAPTOP HEALTH & STORAGE SCANNER           " -ForegroundColor Yellow
Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host ""

# 1. Disk Drive Analysis
$drives = Get-CimInstance Win32_LogicalDisk | Where-Object { $_.DriveType -eq 3 } | ForEach-Object {
    [PSCustomObject]@{
        Drive = $_.DeviceID
        TotalGB = [math]::Round($_.Size / 1GB, 2)
        FreeGB = [math]::Round($_.FreeSpace / 1GB, 2)
        UsedGB = [math]::Round(($_.Size - $_.FreeSpace) / 1GB, 2)
        PercentFree = [math]::Round(($_.FreeSpace / $_.Size) * 100, 1)
    }
}

Write-Host "[1/4] Major Drives Storage:" -ForegroundColor Cyan
foreach ($d in $drives) {
    Write-Host "    $($d.Drive) Total: $($d.TotalGB) GB | Used: $($d.UsedGB) GB | Free: $($d.FreeGB) GB ($($d.PercentFree)% free)" -ForegroundColor White
}

# 2. Temporary Storage Analysis
$tempPath = [System.IO.Path]::GetTempPath()
$tempSize = 0
if (Test-Path $tempPath) {
    $tempFiles = Get-ChildItem -Path $tempPath -Recurse -File -ErrorAction SilentlyContinue
    $tempSize = ($tempFiles | Measure-Object -Property Length -Sum).Sum / 1GB
}
Write-Host ""
Write-Host "[2/4] Temporary & Cache Files:" -ForegroundColor Cyan
Write-Host "    Location: $tempPath" -ForegroundColor Gray
Write-Host "    Recoverable Size: $([math]::Round($tempSize, 2)) GB (Safe to clean)" -ForegroundColor Green

# 3. Downloads Analysis
$downloadsPath = [System.IO.Path]::Combine($env:USERPROFILE, "Downloads")
$downloadsSize = 0
$largeDownloads = @()
if (Test-Path $downloadsPath) {
    $dlFiles = Get-ChildItem -Path $downloadsPath -File -ErrorAction SilentlyContinue
    $downloadsSize = ($dlFiles | Measure-Object -Property Length -Sum).Sum / 1GB
    $largeDownloads = $dlFiles | Where-Object { $_.Length -gt 100MB } | Sort-Object Length -Descending | Select-Object -First 5
}
Write-Host ""
Write-Host "[3/4] Downloads Folder:" -ForegroundColor Cyan
Write-Host "    Total Downloads Size: $([math]::Round($downloadsSize, 2)) GB" -ForegroundColor White
if ($largeDownloads.Count -gt 0) {
    Write-Host "    Top Large Files in Downloads for Review:" -ForegroundColor Yellow
    foreach ($f in $largeDownloads) {
        Write-Host "      • $($f.Name) ($([math]::Round($f.Length / 1MB, 1)) MB)" -ForegroundColor Gray
    }
}

# 4. Startup Applications
$startupItems = Get-CimInstance Win32_StartupCommand | Select-Object Name, Command, Location | Select-Object -First 5
Write-Host ""
Write-Host "[4/4] Startup Applications Detected: $($startupItems.Count)" -ForegroundColor Cyan
foreach ($s in $startupItems) {
    Write-Host "    • $($s.Name) - $($s.Location)" -ForegroundColor Gray
}

Write-Host ""
Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host " [OK] Safe Scan Complete! Full breakdown available on Console.   " -ForegroundColor Green
Write-Host "=================================================================" -ForegroundColor Cyan
