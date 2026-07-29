$root = "d:\Team of Vishwajeet"
$dist = Join-Path $root "assets\skills-dist"

$skills = @("design-agent", "frontend-design", "algorithmic-art")
foreach ($s in $skills) {
  $distFile = Join-Path $dist "$s.skill"
  $rootFile = Join-Path $root "$s.skill"

  if (Test-Path $distFile) {
    Copy-Item -Path $distFile -Destination $rootFile -Force
    Write-Host "Copied $s.skill to root workspace."
  }
}
