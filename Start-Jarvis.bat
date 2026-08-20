@echo off
setlocal EnableExtensions EnableDelayedExpansion

title JARVIS AI OS - Master Real-Time Launcher
cd /d "%~dp0"

cls
echo ===============================================================================
echo.
echo        JJJJJJ    AAAA    RRRRRR   VV      VV  IIIIII   SSSSSS
echo            JJ   AA  AA   RR   RR  VV      VV    II    SS
echo            JJ  AAAAAA   RRRRRR    VV    VV     II     SSSSSS
echo        JJ  JJ  AA    AA  RR  RR     VV  VV      II         SS
echo         JJJJ   AA    AA  RR   RR     VVVV     IIIIII   SSSSSS
echo.
echo                    AI OPERATING SYSTEM  ^|  v2.5.6
echo                One Brain. Many Shells. Voice + Screen HUD.
echo ===============================================================================
echo.

:: Step 1: Verify Environment
echo [*] Checking runtime environment...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [!] ERROR: Node.js is not installed or not in PATH.
    echo     Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

where python >nul 2>nul
if %errorlevel% neq 0 (
    echo [!] Warning: Python not found in global PATH. Using Node.js runtime.
)

:: Step 2: Synchronize API Keys from .env to desktop/config/api_keys.json
echo [*] Synchronizing AI keys and database configurations...
node -e "const fs=require('fs');const p=require('path');try{const env=fs.readFileSync('.env','utf8');const gemini=env.match(/GEMINI_API_KEY=(.*)/)?.[1]?.trim()||'';const groq=env.match(/GROQ_API_KEY=(.*)/)?.[1]?.trim()||'';const subUrl=env.match(/SUPABASE_URL=\"?(.*?)\"?$/m)?.[1]?.trim()||'';const subKey=env.match(/SUPABASE_PUBLISHABLE_KEY=\"?(.*?)\"?$/m)?.[1]?.trim()||'';const cfg={gemini_api_key:gemini,groq_api_key:groq,openrouter_api_key:'',supabase_url:subUrl,supabase_anon_key:subKey,os_system:'windows'};fs.mkdirSync('desktop/config',{recursive:true});fs.writeFileSync('desktop/config/api_keys.json',JSON.stringify(cfg,null,2));console.log('    ✓ Synced keys: Google Gemini 2.0 + Groq Whisper/Llama 3.3 + Supabase');}catch(e){console.log('    ! Config sync warning:',e.message);}"

:: Step 3: Run quick hardware & memory bank check
echo [*] Initializing Jarvis Core & Memory Bank...
npx tsx scripts/jarvis.ts status

echo.
echo ===============================================================================
echo  [+] STARTING JARVIS REAL-TIME SCREEN HUD & VOICE COMMAND SERVER
echo      - Web Console & Voice HUD: http://localhost:8080/console
echo      - Voice Engine: Groq Whisper STT + Speech Synthesis
echo      - Desktop Bridge: Screen Vision + App Launcher + Hardware Telemetry
echo ===============================================================================
echo.

:: Step 4: Open Browser Dashboard in 3 seconds in parallel
start "" powershell -NoProfile -Command "Start-Sleep -Seconds 3; Start-Process 'http://localhost:8080/console'"

:: Step 5: Launch Dev Server
npm run dev

pause
