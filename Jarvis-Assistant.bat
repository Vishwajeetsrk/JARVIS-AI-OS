@echo off
title JARVIS AI OS - Native Desktop Personal Voice Assistant
cd /d "%~dp0"
cls

echo ===============================================================================
echo        JJJJJJ    AAAA    RRRRRR   VV      VV  IIIIII   SSSSSS
echo            JJ   AA  AA   RR   RR  VV      VV    II    SS     
echo            JJ  AAAAAA   RRRRRR    VV    VV     II     SSSSSS 
echo        JJ  JJ  AA    AA  RR  RR     VV  VV      II         SS
echo         JJJJ   AA    AA  RR   RR     VVVV     IIIIII   SSSSSS
echo.
echo           NATIVE DESKTOP PERSONAL ASSISTANT (NO BROWSER NEEDED)
echo             Wake Words: "Hey Jarvis" / "Hey Nisha" / Custom
echo ===============================================================================
echo.
echo [*] Initializing Windows Laptop Voice Engine...
python scripts/jarvis_desktop_assistant.py

pause
