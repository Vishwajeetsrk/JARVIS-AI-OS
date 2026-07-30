#!/usr/bin/env pwsh
<#
.SYNOPSIS
  Desktop OS Automation Bridge — runs from any directory.
.DESCRIPTION
  Passes all arguments to scripts/desktop-voice-bridge.py via python.
#>
$ProjectRoot = Split-Path -Parent $PSCommandPath
& "python" (Join-Path $ProjectRoot "scripts\desktop-voice-bridge.py") @args
