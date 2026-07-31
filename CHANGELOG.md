# Changelog
All notable changes to this project will be documented in this file.

## [2.3.0] - 2026-07-31
- **Summary**: Real-time Jarvis Console dashboard — live activity feed (Supabase Realtime + `agent_activity` table), 8 stat cards, quick command with voice, real RSS news panel (HN/TechCrunch/The Verge/MIT Tech Review), recent projects, realtime sidebar.
- **Highlights**:
  - Live activity feed auto-appends on every chat message and agent tool call.
  - `/api/news` server route — entity-safe RSS aggregation, 10-min cache, no API keys.
  - New components in `src/components/dashboard/` (stat-cards, activity-feed, news-panel, quick-command, voice-button, project-cards).
  - Migration `20260731120000_dashboard_activity.sql` for the activity table + RLS + realtime publication.
  - README rewritten as a beginner-friendly, step-by-step run guide.
- **Author**: ai-agent

## [2.2.0] - 2026-07-29
- **Summary**: Deployed PR Security Audit Gate, Technical SEO Generator, and Multi-Agent Framework Evaluator.
- **Author**: ceo-agent & test-agent

## [2.1.0] - 2026-07-29
- **Summary**: Deployed Horizon 2 milestones: OpenHands Docker Sandbox Runner & AgencyOS Razorpay Billing Webhooks.
- **Author**: ceo-agent & devops-agent

## [2.0.0] - 2026-07-28
- **Summary**: Deployed 10/10 Enterprise Governance layer, registries, knowledge graph, auto-PM, and auto-docs tooling.
- **Author**: ceo-agent & saas-builder
