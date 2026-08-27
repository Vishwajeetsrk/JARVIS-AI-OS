import { createServerFn } from "@tanstack/react-start";
import fs from "node:fs";
import path from "node:path";

export interface BotPersona {
  id: string;
  name: string;
  role: string;
  avatar: string;
  tagline: string;
  description: string;
  color: string;
  badge?: string;
  status: "idle" | "running" | "scheduled";
  activeTasksCount: number;
  completedTasksCount: number;
  integrations: string[];
  systemPrompt: string;
  sampleRoutines: string[];
}

export interface ChiefOfStaffItem {
  id: string;
  category: "email" | "slack" | "calendar" | "blocker" | "followup";
  title: string;
  summary: string;
  source: string;
  time: string;
  priority: "high" | "medium" | "low";
  actionRequired: boolean;
  actionPrompt: string;
}

const DEFAULT_BOTS: BotPersona[] = [
  {
    id: "chief-of-staff",
    name: "Chief of Staff",
    role: "Always-On Autonomous Executive Assistant",
    avatar: "👔",
    tagline: "Scans Slack, email, calendar, and notes to surface what's new and prioritize tasks.",
    description:
      "Your executive orchestrator. Aggregates multi-channel communications, flags dropped threads, schedules follow-ups, and prepares daily morning briefings.",
    color: "#e87a3a",
    badge: "Always On",
    status: "running",
    activeTasksCount: 4,
    completedTasksCount: 184,
    integrations: ["Gmail", "Google Calendar", "Slack", "Notion", "Linear"],
    systemPrompt:
      "You are the Chief of Staff agent. You coordinate communication across all channels, extract key action items, and ensure zero dropped balls.",
    sampleRoutines: [
      "Daily Morning Executive Briefing at 8:00 AM",
      "Scan Slack for unaddressed customer questions every 30m",
      "Draft weekly sync agenda from Linear and Notion updates",
    ],
  },
  {
    id: "sales-outbound",
    name: "Sales Outbound",
    role: "Autonomous Prospecting & Sequencing Agent",
    avatar: "🎯",
    tagline: "Discovers target accounts, enriches contacts, and runs hyper-personalized outreach.",
    description:
      "Automates ICP discovery, drafts tailored outreach sequences, tracks email deliverability, and books meetings directly on your calendar.",
    color: "#3b82f6",
    badge: "Lead Hunter",
    status: "scheduled",
    activeTasksCount: 12,
    completedTasksCount: 540,
    integrations: ["Apollo", "Clearbit", "Gmail", "HubSpot", "LinkedIn"],
    systemPrompt:
      "You are the Sales Outbound bot. You research companies, craft relevant high-converting cold outreach, and handle initial reply qualification.",
    sampleRoutines: [
      "Enrich 50 new ICP accounts daily from target industry filters",
      "Send follow-up sequences for prospects with >2 email opens",
      "Sync qualified demo requests into HubSpot CRM",
    ],
  },
  {
    id: "talent-scout",
    name: "Talent Scout",
    role: "AI Recruitment & Technical Screening Agent",
    avatar: "🕵️",
    tagline: "Sources top 1% engineering talent, analyzes GitHub portfolios, and schedules interviews.",
    description:
      "Scours developer communities and LinkedIn for specialized technical profiles, evaluates code samples, and coordinates initial technical screens.",
    color: "#a855f7",
    status: "idle",
    activeTasksCount: 0,
    completedTasksCount: 89,
    integrations: ["LinkedIn Recruiter", "GitHub", "Greenhouse", "Resend"],
    systemPrompt:
      "You are the Talent Scout agent. You find top tier engineers, review repository quality, and facilitate frictionless candidate onboarding.",
    sampleRoutines: [
      "Daily scan of GitHub trending contributors in AI/Distributed Systems",
      "Screen incoming resumes against required technical rubric",
      "Send personalized outreach to matched senior architects",
    ],
  },
  {
    id: "paid-media",
    name: "Paid Media",
    role: "Autonomous Ad Campaign & ROAS Optimizer",
    avatar: "📈",
    tagline: "Monitors Meta/Google/TikTok ad spend, pauses low ROAS creatives, and shifts budget.",
    description:
      "Tracks real-time conversion value, runs automated A/B headline tests, and alerts the team when CAC deviates from target thresholds.",
    color: "#10b981",
    status: "scheduled",
    activeTasksCount: 2,
    completedTasksCount: 312,
    integrations: ["Google Ads", "Meta Ads", "TikTok Ads", "GA4", "Stripe"],
    systemPrompt:
      "You are the Paid Media optimization bot. You maximize ROAS by shifting ad spend to top-performing creatives and analyzing CAC trends.",
    sampleRoutines: [
      "Hourly ROAS check across active Meta and Google ad sets",
      "Pause ad creatives with CTR < 0.8% and spend > $100",
      "Daily spend and conversion summary report to Slack #marketing",
    ],
  },
  {
    id: "expense-manager",
    name: "Expense Manager",
    role: "Automated Bookkeeping & Anomaly Detection",
    avatar: "💳",
    tagline: "Reconciles invoices, extracts receipt OCR data, and detects unused SaaS licenses.",
    description:
      "Processes incoming PDF receipts from Gmail, categorizes line items into your accounting ledger, and flags duplicate or anomalous charges.",
    color: "#f59e0b",
    status: "idle",
    activeTasksCount: 0,
    completedTasksCount: 220,
    integrations: ["QuickBooks", "Xero", "Stripe", "Plaid", "Gmail"],
    systemPrompt:
      "You are the Expense Manager bot. You ensure precise accounting reconciliation and alert executives to wasteful recurring subscriptions.",
    sampleRoutines: [
      "Auto-extract receipt data from incoming billing emails",
      "Monthly SaaS subscription audit to flag inactive seats",
      "Export categorized monthly transaction report in XLSX format",
    ],
  },
  {
    id: "product-performance",
    name: "Product Performance",
    role: "User Funnel & Feature Analytics Engine",
    avatar: "📊",
    tagline: "Analyzes onboarding funnels, calculates feature retention, and predicts churn risks.",
    description:
      "Continuously queries analytics streams to surface drop-off points, telemetry anomalies, and behavioral cohorts with highest lifetime value.",
    color: "#06b6d4",
    status: "running",
    activeTasksCount: 3,
    completedTasksCount: 405,
    integrations: ["PostHog", "Mixpanel", "Amplitude", "Sentry"],
    systemPrompt:
      "You are the Product Performance bot. You find bottlenecks in user conversion funnels and provide data-backed UX recommendations.",
    sampleRoutines: [
      "Daily onboarding funnel drop-off calculation",
      "Weekly power-user feature correlation analysis",
      "Alert Slack #product when signup conversion drops >10%",
    ],
  },
  {
    id: "bug-reproduction",
    name: "Bug Reproduction",
    role: "Automated E2E Playwright Repro & AST Fixer",
    avatar: "🐛",
    tagline: "Ingests Sentry crash logs, writes Playwright repro scripts, and drafts code PRs.",
    description:
      "Reads error stack traces, spawns a headless browser to replicate the bug sequence, verifies the failure, and generates the fix in Monaco.",
    color: "#ef4444",
    badge: "AST Fixer",
    status: "running",
    activeTasksCount: 1,
    completedTasksCount: 142,
    integrations: ["Sentry", "Playwright", "GitHub Issues", "Vitest"],
    systemPrompt:
      "You are the Bug Reproduction bot. You isolate reproducible test cases from error reports and propose verified code fixes.",
    sampleRoutines: [
      "Monitor Sentry for new unhandled exceptions with high impact",
      "Scaffold automated Playwright reproduction test for reported bugs",
      "Run local test suite to verify proposed AST patch",
    ],
  },
  {
    id: "account-health",
    name: "Account Health",
    role: "Client Retention & Executive QBR Generator",
    avatar: "🛡️",
    tagline: "Tracks enterprise account sentiment, usage drops, and generates QBR slide decks.",
    description:
      "Aggregates support tickets, meeting notes, and product usage into a holistic health score, warning account managers before renewals.",
    color: "#8b5cf6",
    status: "idle",
    activeTasksCount: 0,
    completedTasksCount: 96,
    integrations: ["Salesforce", "Zendesk", "Intercom", "Vitally"],
    systemPrompt:
      "You are the Account Health bot. You identify at-risk enterprise accounts and generate comprehensive Quarterly Business Review presentations.",
    sampleRoutines: [
      "Calculate weekly composite health scores for Top 50 clients",
      "Alert Account Executive if client usage drops >25% week-over-week",
      "Auto-generate 10-slide QBR deck in PPTX format prior to client sync",
    ],
  },
];

const DEFAULT_CHIEF_ITEMS: ChiefOfStaffItem[] = [
  {
    id: "cos-1",
    category: "email",
    title: "Contract Review: Apex Global Tier 1 Agreement",
    summary: "Apex Global Legal sent back redlines on Section 4 (SLA Guarantees). They requested 99.95% uptime instead of 99.9%.",
    source: "Gmail (legal@apexglobal.com)",
    time: "25m ago",
    priority: "high",
    actionRequired: true,
    actionPrompt: "Draft an executive reply accepting the 99.95% SLA with standard exclusions and update the legal agreement doc.",
  },
  {
    id: "cos-2",
    category: "calendar",
    title: "Upcoming: Product Roadmap Review with Engineering Leads",
    summary: "Today at 4:30 PM. 3 team leads have uploaded their Q4 RFC proposals in Notion. 1 agenda item still pending.",
    source: "Google Calendar",
    time: "In 2 hours",
    priority: "medium",
    actionRequired: false,
    actionPrompt: "Summarize the 3 Notion RFC documents into a 1-page executive briefing before the 4:30 PM meeting.",
  },
  {
    id: "cos-3",
    category: "blocker",
    title: "Dropped Thread: Stripe Webhook Re-verification",
    summary: "Stripe compliance requested business address re-verification 3 days ago. No response sent yet.",
    source: "Stripe Notification / Email",
    time: "3 days ago",
    priority: "high",
    actionRequired: true,
    actionPrompt: "Review Stripe verification requirements and draft the submission email with attached certificate.",
  },
  {
    id: "cos-4",
    category: "slack",
    title: "Customer Escalation: High Latency in EU-West Gateway",
    summary: "Mark from Enterprise Support flagged 3 EU customers experiencing >1.2s response times on the WebSocket voice stream.",
    source: "Slack (#incident-eu)",
    time: "1 hour ago",
    priority: "high",
    actionRequired: true,
    actionPrompt: "Query EU-West server logs, check regional CPU utilization, and post status update to #incident-eu.",
  },
];

const FLEET_STORAGE_PATH = path.join(process.cwd(), "data", ".bot-fleet.json");

function loadBotFleetData(): { bots: BotPersona[]; chiefItems: ChiefOfStaffItem[] } {
  try {
    if (fs.existsSync(FLEET_STORAGE_PATH)) {
      return JSON.parse(fs.readFileSync(FLEET_STORAGE_PATH, "utf-8"));
    }
  } catch {}
  return { bots: DEFAULT_BOTS, chiefItems: DEFAULT_CHIEF_ITEMS };
}

export const getBotFleetFn = createServerFn({ method: "GET" }).handler(async () => {
  return loadBotFleetData();
});

export const triggerBotActionFn = createServerFn({ method: "POST" })
  .validator((d: { botId: string; action: string; prompt?: string }) => d)
  .handler(async ({ data }) => {
    const fleet = loadBotFleetData();
    const bot = fleet.bots.find((b) => b.id === data.botId);
    if (!bot) throw new Error("Bot persona not found");

    // Increment completed tasks
    bot.completedTasksCount += 1;
    bot.status = "running";

    try {
      if (!fs.existsSync(path.dirname(FLEET_STORAGE_PATH))) {
        fs.mkdirSync(path.dirname(FLEET_STORAGE_PATH), { recursive: true });
      }
      fs.writeFileSync(FLEET_STORAGE_PATH, JSON.stringify(fleet, null, 2), "utf-8");
    } catch {}

    return {
      success: true,
      botName: bot.name,
      message: `Action dispatched to ${bot.name}: ${data.action}`,
      timestamp: new Date().toISOString(),
    };
  });
