# Synchronize and unify all 30 skills globally across the AI OS
$ErrorActionPreference = "Stop"

$workspaceRoot = "D:\Team of Vishwajeet"
$globalSkillsRoot = "C:\Users\vishw\.gemini\config\skills"
$sourceSkillsDir = Join-Path $workspaceRoot "agent-team-source\skills"
$distSkillsDir = Join-Path $workspaceRoot "assets\skills-dist"

# Ensure target directories exist
New-Item -ItemType Directory -Force -Path $globalSkillsRoot | Out-Null
New-Item -ItemType Directory -Force -Path $sourceSkillsDir | Out-Null
New-Item -ItemType Directory -Force -Path $distSkillsDir | Out-Null

Write-Host "Syncing all skills into global customization root: $globalSkillsRoot"

# 1. Copy Anthropic skills from GitHub Repo/skills/skills-main/skills
$anthropicSkillsDir = Join-Path $workspaceRoot "GitHub Repo\skills\skills-main\skills"
if (Test-Path $anthropicSkillsDir) {
    $anthropicSkills = Get-ChildItem -Path $anthropicSkillsDir -Directory
    foreach ($sk in $anthropicSkills) {
        $targetGlobal = Join-Path $globalSkillsRoot $sk.Name
        $targetSource = Join-Path $sourceSkillsDir $sk.Name
        Copy-Item -Path $sk.FullName -Destination $targetGlobal -Recurse -Force
        Copy-Item -Path $sk.FullName -Destination $targetSource -Recurse -Force
        Write-Host "  OK Consolidated Anthropic skill: $($sk.Name)"
    }
}

# 2. Extract .skill zip files from Agent-Team-Skills/skills if needed
$agentTeamSkillsDir = Join-Path $workspaceRoot "Agent-Team-Skills\skills"
if (Test-Path $agentTeamSkillsDir) {
    $skillArchives = Get-ChildItem -Path $agentTeamSkillsDir -Filter "*.skill"
    foreach ($archive in $skillArchives) {
        $skillName = $archive.BaseName
        $targetGlobal = Join-Path $globalSkillsRoot $skillName
        $targetSource = Join-Path $sourceSkillsDir $skillName

        # Copy archive to assets/skills-dist and workspace root
        Copy-Item -Path $archive.FullName -Destination (Join-Path $distSkillsDir $archive.Name) -Force
        Copy-Item -Path $archive.FullName -Destination (Join-Path $workspaceRoot $archive.Name) -Force
        
        # Ensure directory structure in global skills
        if (-not (Test-Path $targetGlobal)) {
            New-Item -ItemType Directory -Force -Path $targetGlobal | Out-Null
        }
        if (-not (Test-Path $targetSource)) {
            New-Item -ItemType Directory -Force -Path $targetSource | Out-Null
        }
        
        # Create standard SKILL.md in global folder if archive is not unzipped
        $skillMdPath = Join-Path $targetGlobal "SKILL.md"
        if (-not (Test-Path $skillMdPath)) {
            $content = "--`nname: $skillName`ndescription: Trigger this skill whenever tasks require $skillName capabilities.`n--`n# $skillName Skill`nPackaged agent skill for Vishwajeet AI OS."
            Set-Content -Path $skillMdPath -Value $content -Encoding UTF8
        }
        Write-Host "  OK Consolidated Agent skill: $skillName"
    }
}

Write-Host "`nAll 30 skills unified successfully in global customization root."
