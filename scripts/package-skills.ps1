$root = "d:\Team of Vishwajeet"
$dist = Join-Path $root "assets\skills-dist"

if (-not (Test-Path $dist)) {
  New-Item -ItemType Directory -Force -Path $dist | Out-Null
}

$skillsToPackage = @(
  "design-agent",
  "frontend-design",
  "algorithmic-art",
  "mcp-builder",
  "morning",
  "skill-creator"
)

foreach ($s in $skillsToPackage) {
  $srcDir = Join-Path $root "agent-team-source\skills\$s"
  if (Test-Path $srcDir) {
    $tempZip = Join-Path $root "$s.zip"
    $rootSkill = Join-Path $root "$s.skill"
    $distSkill = Join-Path $dist "$s.skill"

    if (Test-Path $tempZip) { Remove-Item $tempZip -Force }
    if (Test-Path $rootSkill) { Remove-Item $rootSkill -Force }
    if (Test-Path $distSkill) { Remove-Item $distSkill -Force }

    Write-Host "Compressing $s to zip..."
    Compress-Archive -Path "$srcDir\*" -DestinationPath $tempZip -Force
    Copy-Item -Path $tempZip -Destination $rootSkill -Force
    Copy-Item -Path $tempZip -Destination $distSkill -Force
    Remove-Item -Path $tempZip -Force
    Write-Host "Successfully created $s.skill in root and assets/skills-dist/"
  }
}

Write-Host "All skills successfully created and packaged."
