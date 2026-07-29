$base = "d:\Team of Vishwajeet\GitHub Repo"

$tiers = @(
  "Tier-0-Foundation",
  "Tier-1-AI-Brain",
  "Tier-2-AI-Developer",
  "Tier-3-Memory",
  "Tier-4-Browser-Research",
  "Tier-5-Automation",
  "Tier-6-Databases",
  "Tier-7-Voice",
  "Tier-8-Vision-Creative",
  "Tier-9-Monitoring-Security",
  "Tier-10-MCP-Servers"
)

foreach ($t in $tiers) {
  $targetPath = Join-Path $base $t
  if (-not (Test-Path $targetPath)) {
    New-Item -ItemType Directory -Force -Path $targetPath | Out-Null
  }
}

$mapping = [ordered]@{
  "Tier-0-Foundation" = @("buildx-master", "cli-master", "moby-master", "compose-main", "electron-main", "tauri-dev", "fastapi-master");
  "Tier-1-AI-Brain" = @("mastra-main", "langgraph-main", "langchain-master", "crewAI-main", "ag2-main", "litellm-litellm_internal_staging", "open-webui-main", "llama_index-main", "haystack-main");
  "Tier-2-AI-Developer" = @("OpenHands-main", "continue-main", "aider-main", "Roo-Code-main", "cline-main");
  "Tier-3-Memory" = @("letta-main", "mem0-main", "graphiti-main");
  "Tier-4-Browser-Research" = @("browser-use-main", "playwright-main", "selenium-trunk", "markitdown-main", "pandoc-main");
  "Tier-5-Automation" = @("n8n-master", "activepieces-main");
  "Tier-6-Databases" = @("postgres-master", "redis-unstable", "qdrant-master", "supabase-master", "duckdb-main", "polars-main", "payload-main", "sealos-main");
  "Tier-7-Voice" = @("whisper-main", "piper-master", "livekit-master");
  "Tier-8-Vision-Creative" = @("ComfyUI-master", "InvokeAI-main", "stable-diffusion-webui-master", "open-design-main", "penpot-develop", "excalidraw-master", "tldraw-main", "Instatic-main");
  "Tier-9-Monitoring-Security" = @("grafana-main", "prometheus-main", "loki-main", "uptime-kuma-master", "semgrep-develop", "gitleaks-master", "trivy-main", "helm-main", "kubernetes-master");
  "Tier-10-MCP-Servers" = @("modelcontextprotocol-main", "awesome-mcp-servers-main", "servers-main", "vllm-main", "ollama-main", "llama.cpp-master", "core-master", "arrow-main", "next.js-canary")
}

foreach ($tier in $mapping.Keys) {
  $dest = Join-Path $base $tier
  foreach ($repo in $mapping[$tier]) {
    $src = Join-Path $base $repo
    if (Test-Path $src) {
      Write-Host "Moving $repo to $tier..."
      Move-Item -Path $src -Destination $dest -Force
    }
  }
}

Write-Host "All 68 repositories organized successfully into 10 Tiers."
