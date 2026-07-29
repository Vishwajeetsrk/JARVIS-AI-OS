$src = "d:\Team of Vishwajeet\agent-team-source\skills\design-agent"
$tempZip = "d:\Team of Vishwajeet\design-agent.zip"
$rootSkill = "d:\Team of Vishwajeet\design-agent.skill"
$distSkill = "d:\Team of Vishwajeet\assets\skills-dist\design-agent.skill"

if (Test-Path $tempZip) { Remove-Item $tempZip -Force }
Compress-Archive -Path "$src\*" -DestinationPath $tempZip -Force
Copy-Item -Path $tempZip -Destination $rootSkill -Force
Copy-Item -Path $tempZip -Destination $distSkill -Force
Remove-Item -Path $tempZip -Force
Write-Host "design-agent.skill successfully created."
