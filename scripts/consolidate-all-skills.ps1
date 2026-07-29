# Master Skill Consolidation Script
# Places ALL skills into one primary master directory: D:\Team of Vishwajeet\skills\
# Also mirrors to global C:\Users\vishw\.gemini\config\skills\ for universal AI access.

$ErrorActionPreference = "Stop"

$workspaceRoot = "D:\Team of Vishwajeet"
$masterSkillsDir = Join-Path $workspaceRoot "skills"
$globalSkillsDir = "C:\Users\vishw\.gemini\config\skills"
$assetsDistDir = Join-Path $workspaceRoot "assets\skills-dist"

# Ensure target directories exist
New-Item -ItemType Directory -Force -Path $masterSkillsDir | Out-Null
New-Item -ItemType Directory -Force -Path $globalSkillsDir | Out-Null
New-Item -ItemType Directory -Force -Path $assetsDistDir | Out-Null

Write-Host "Consolidating all skills into master directory: $masterSkillsDir"

# 1. Sync Anthropic skills from GitHub Repo/skills/skills-main/skills
$anthropicSkillsDir = Join-Path $workspaceRoot "GitHub Repo\skills\skills-main\skills"
if (Test-Path $anthropicSkillsDir) {
    Get-ChildItem -Path $anthropicSkillsDir -Directory | ForEach-Object {
        Copy-Item -Path $_.FullName -Destination (Join-Path $masterSkillsDir $_.Name) -Recurse -Force
        Copy-Item -Path $_.FullName -Destination (Join-Path $globalSkillsDir $_.Name) -Recurse -Force
        Write-Host "  OK Unified skill: $($_.Name)"
    }
}

# 2. Sync Custom Agent skills from Agent-Team-Skills/skills
$agentSkillsDir = Join-Path $workspaceRoot "Agent-Team-Skills\skills"
if (Test-Path $agentSkillsDir) {
    Get-ChildItem -Path $agentSkillsDir -Filter "*.skill" | ForEach-Object {
        $skillName = $_.BaseName
        $masterTarget = Join-Path $masterSkillsDir $skillName
        $globalTarget = Join-Path $globalSkillsDir $skillName
        
        New-Item -ItemType Directory -Force -Path $masterTarget | Out-Null
        New-Item -ItemType Directory -Force -Path $globalTarget | Out-Null
        
        # Copy archive to master root and dist
        Copy-Item -Path $_.FullName -Destination (Join-Path $masterSkillsDir $_.Name) -Force
        Copy-Item -Path $_.FullName -Destination (Join-Path $assetsDistDir $_.Name) -Force
        Copy-Item -Path $_.FullName -Destination (Join-Path $workspaceRoot $_.Name) -Force
        
        # Ensure SKILL.md exists
        $skillMdMaster = Join-Path $masterTarget "SKILL.md"
        $skillMdGlobal = Join-Path $globalTarget "SKILL.md"
        $mdContent = "--`nname: $skillName`ndescription: $skillName skill for Jarvis AI OS.`n--`n# $skillName Skill`nPackaged agent skill for Vishwajeet AI OS."
        
        Set-Content -Path $skillMdMaster -Value $mdContent -Encoding UTF8
        Set-Content -Path $skillMdGlobal -Value $mdContent -Encoding UTF8
        
        Write-Host "  OK Unified agent skill: $skillName"
    }
}

# 3. Add open-design skill from GitHub Repo/open-design
$openDesignSrc = Join-Path $workspaceRoot "GitHub Repo\open-design"
if (Test-Path $openDesignSrc) {
    $openDesignTarget = Join-Path $masterSkillsDir "open-design"
    $openDesignGlobal = Join-Path $globalSkillsDir "open-design"
    
    New-Item -ItemType Directory -Force -Path $openDesignTarget | Out-Null
    New-Item -ItemType Directory -Force -Path $openDesignGlobal | Out-Null
    
    $odContent = "--`nname: open-design`ndescription: Open-design system engine providing 32+ design systems (Claude, Apple, Arc, Airbnb, Bento, Brutalism, Claymorphism, Cohere).`n--`n# open-design Skill`n32+ pre-built design systems and UI component specs for Jarvis AI OS."
    Set-Content -Path (Join-Path $openDesignTarget "SKILL.md") -Value $odContent -Encoding UTF8
    Set-Content -Path (Join-Path $openDesignGlobal "SKILL.md") -Value $odContent -Encoding UTF8
    
    Write-Host "  OK Unified open-design skill"
}

Write-Host "Master Skill Consolidation Complete. All skills present in: $masterSkillsDir"
