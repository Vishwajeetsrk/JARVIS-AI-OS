@echo off
node "%~dp0scripts\patch-vite-runner.mjs" >nul 2>&1
npx tsx "%~dp0cli\index.ts" %*
