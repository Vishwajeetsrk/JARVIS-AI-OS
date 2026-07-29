# Move root .skill files to assets/skills-dist to keep root clean
$workspaceRoot = "D:\Team of Vishwajeet"
$skillsDir = Join-Path $workspaceRoot "skills"
$distDir = Join-Path $workspaceRoot "assets\skills-dist"
$globalSkillsDir = "C:\Users\vishw\.gemini\config\skills"

New-Item -ItemType Directory -Force -Path $skillsDir | Out-Null
New-Item -ItemType Directory -Force -Path $distDir | Out-Null
New-Item -ItemType Directory -Force -Path $globalSkillsDir | Out-Null

Get-ChildItem -Path $workspaceRoot -Filter "*.skill" | ForEach-Object {
    $skillName = $_.BaseName
    $destArchive = Join-Path $distDir $_.Name
    Move-Item -Path $_.FullName -Destination $destArchive -Force
    
    $targetDir = Join-Path $skillsDir $skillName
    $targetGlobal = Join-Path $globalSkillsDir $skillName
    
    if (-not (Test-Path $targetDir)) {
        New-Item -ItemType Directory -Force -Path $targetDir | Out-Null
    }
    if (-not (Test-Path $targetGlobal)) {
        New-Item -ItemType Directory -Force -Path $targetGlobal | Out-Null
    }
    
    $skillMdMaster = Join-Path $targetDir "SKILL.md"
    $skillMdGlobal = Join-Path $targetGlobal "SKILL.md"
    
    if (-not (Test-Path $skillMdMaster)) {
        $mdContent = "--`nname: $skillName`ndescription: $skillName skill for Jarvis AI OS.`n--`n# $skillName Skill`nAgent skill for Vishwajeet AI OS."
        Set-Content -Path $skillMdMaster -Value $mdContent -Encoding UTF8
    }
    if (-not (Test-Path $skillMdGlobal)) {
        $mdContent = "--`nname: $skillName`ndescription: $skillName skill for Jarvis AI OS.`n--`n# $skillName Skill`nAgent skill for Vishwajeet AI OS."
        Set-Content -Path $skillMdGlobal -Value $mdContent -Encoding UTF8
    }
    
    Write-Host "Moved $($_.Name) -> assets/skills-dist/ and verified in skills/$skillName"
}

Write-Host "Root directory cleaned. All skills organized inside D:\Team of Vishwajeet\skills\"
