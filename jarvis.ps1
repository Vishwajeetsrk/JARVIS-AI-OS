#!/usr/bin/env pwsh
<#
.SYNOPSIS
  Jarvis CLI — runs from any directory.
.DESCRIPTION
  Passes all arguments to scripts/jarvis.ts via tsx.
#>
$ProjectRoot = Split-Path -Parent $PSCommandPath
& "npx" "--prefix" $ProjectRoot "tsx" (Join-Path $ProjectRoot "scripts\jarvis.ts") @args
