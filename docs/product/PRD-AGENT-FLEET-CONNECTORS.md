# PRD — 18-Agent Fleet, Connectors & Plugins Manager

> **Status**: APPROVED  
> **Target Release**: JARVIS AI OS v4.0.0  
> **Author**: Vishwajeet Srk  

---

## 1. Executive Summary

JARVIS APEX v4.0.0 features an 18-agent fleet of specialized AI personas executing on a unified Task Runtime. This PRD establishes the operational contracts, reasoning engines, interactive confirmation workflows, and the unified Connectors & Plugins Manager for API credential management and live connectivity diagnostics.

---

## 2. The 18 Specialized AI Personas

1. **Chief of Staff**: Executive daily briefing, task delegation, blocker escalation.
2. **Developer / Coding Agent**: TypeScript/React coding, bug isolation, unit testing.
3. **Engineering Architect**: System architecture, microservice design, ADR creation.
4. **GitHub Specialist**: Git branching, commit logs, PR descriptions, CI monitoring.
5. **Operations (Ops)**: Cloud deployments, Supabase migrations, automation cron jobs.
6. **Salesforce / CRM**: 7-step Razorpay reconciliation, Lead/Account matching, Opportunity tracking.
7. **Finance / Cost Guard**: Token spend attribution, API cost optimization, monthly forecasts.
8. **Sales Outbound**: ICP prospecting, personalized B2B outreach, pipeline follow-ups.
9. **Researcher**: Deep web and academic synthesis, documentation extraction.
10. **Product Strategist**: Feature roadmaps, competitive positioning, value proposition.
11. **Marketing & Growth**: Developer launch threads, SEO strategy, newsletter copy.
12. **Technical Editor**: Grammar, changelog refinement, documentation polish.
13. **Design System & 3D**: Three.js shaders, Tailwind CSS design tokens, responsive UX.
14. **Memory Vault**: Supabase pgvector semantic recall, user preference management.
15. **Calendar & Scheduling**: Meeting agendas, scheduling reminders, calendar triage.
16. **Email Agent**: Interactive email composer with human approval gates.
17. **Voice Specialist**: Natural speech understanding, TTS audio synthesis.
18. **System Health Monitor**: Telemetry tracking, error log alerts, desktop bridge.

---

## 3. Interactive Input & Confirmation Gate Protocol

When an agent executes an external or high-impact action:
- **Email Generation**: Displays recipient, subject, and drafted body, requesting confirmation before dispatching.
- **Salesforce Reconciler**: Prompts for date range and Razorpay file confirmation before inserting records.
- **Missing API Keys**: Clean interactive modal prompting for Gemini, Groq, OpenRouter, or GitHub keys with 1-click test buttons.

---

## 4. Connectors & Plugins Manager

A dedicated modal in JARVIS that provides:
- **API Key Inputs & Vault**: Save keys for Gemini, Groq, OpenRouter, GitHub, Salesforce, Supabase.
- **1-Click Live Connectivity Tests**: Pings each provider endpoint and displays latency in milliseconds.
- **Plugin Registry Status**: Shows active plugin extensions and contributed tools.
