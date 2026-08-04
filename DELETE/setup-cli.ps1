#!/usr/bin/env pwsh
<#
.SYNOPSIS
  Adds Jarvis CLI to your PATH so you can run `jarvis` and `bridge` from anywhere.
#>
$RepoRoot = Split-Path -Parent $PSCommandPath
$UserPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($UserPath -split ";" -contains $RepoRoot) {
  Write-Host "Jarvis CLI already in PATH." -ForegroundColor Green
} else {
  [Environment]::SetEnvironmentVariable("Path", "$UserPath;$RepoRoot", "User")
  Write-Host "Added '$RepoRoot' to user PATH." -ForegroundColor Green
  Write-Host "Restart your terminal, then run: jarvis status" -ForegroundColor Cyan
}
