import { createServerFn } from "@tanstack/react-start";

export interface AnalyticsSummary {
  totalTokensUsed: number;
  totalCostUsd: number;
  tokensThisMonth: number;
  costThisMonth: number;
  activeAgentsCount: number;
  totalAutomationsRun: number;
  averageVoiceLatencyMs: number;
  taskSuccessRatePercent: number;
  selfHealedErrorsCount: number;
  channelIngestion: {
    emailsScanned: number;
    slackMessagesParsed: number;
    calendarEventsManaged: number;
    codePRsGenerated: number;
  };
  botWorkloads: {
    botId: string;
    botName: string;
    avatar: string;
    tasksCount: number;
    tokensUsed: number;
    costUsd: number;
    sharePercent: number;
  }[];
  recentExecutionLogs: {
    id: string;
    timestamp: string;
    botName: string;
    action: string;
    tokens: number;
    latencyMs: number;
    status: "success" | "recovered" | "running";
  }[];
}

const SAMPLE_ANALYTICS: AnalyticsSummary = {
  totalTokensUsed: 14_820_450,
  totalCostUsd: 28.45,
  tokensThisMonth: 4_210_800,
  costThisMonth: 8.64,
  activeAgentsCount: 8,
  totalAutomationsRun: 1_988,
  averageVoiceLatencyMs: 395,
  taskSuccessRatePercent: 99.4,
  selfHealedErrorsCount: 42,
  channelIngestion: {
    emailsScanned: 1_420,
    slackMessagesParsed: 3_890,
    calendarEventsManaged: 184,
    codePRsGenerated: 68,
  },
  botWorkloads: [
    {
      botId: "chief-of-staff",
      botName: "Chief of Staff",
      avatar: "👔",
      tasksCount: 640,
      tokensUsed: 4_800_000,
      costUsd: 9.6,
      sharePercent: 32,
    },
    {
      botId: "sales-outbound",
      botName: "Sales Outbound",
      avatar: "🎯",
      tasksCount: 540,
      tokensUsed: 3_900_000,
      costUsd: 7.8,
      sharePercent: 26,
    },
    {
      botId: "product-performance",
      botName: "Product Performance",
      avatar: "📊",
      tasksCount: 405,
      tokensUsed: 2_600_000,
      costUsd: 5.2,
      sharePercent: 18,
    },
    {
      botId: "paid-media",
      botName: "Paid Media",
      avatar: "📈",
      tasksCount: 312,
      tokensUsed: 1_800_000,
      costUsd: 3.6,
      sharePercent: 12,
    },
    {
      botId: "bug-reproduction",
      botName: "Bug Reproduction",
      avatar: "🐛",
      tasksCount: 142,
      tokensUsed: 1_720_450,
      costUsd: 2.25,
      sharePercent: 12,
    },
  ],
  recentExecutionLogs: [
    {
      id: "log-1",
      timestamp: "Just now",
      botName: "Chief of Staff",
      action: "Morning Executive Briefing compiled & delivered",
      tokens: 3420,
      latencyMs: 380,
      status: "success",
    },
    {
      id: "log-2",
      timestamp: "4m ago",
      botName: "Bug Reproduction",
      action: "Scaffolded Playwright repro test for Sentry #4021",
      tokens: 8150,
      latencyMs: 1450,
      status: "success",
    },
    {
      id: "log-3",
      timestamp: "12m ago",
      botName: "Sales Outbound",
      action: "Enriched 25 Series A SaaS accounts from Apollo",
      tokens: 6200,
      latencyMs: 820,
      status: "success",
    },
    {
      id: "log-4",
      timestamp: "28m ago",
      botName: "Paid Media",
      action: "Reallocated $450 budget from Meta ad set #4 to Google Ads",
      tokens: 2400,
      latencyMs: 640,
      status: "recovered",
    },
    {
      id: "log-5",
      timestamp: "45m ago",
      botName: "Expense Manager",
      action: "Extracted invoice line items from AWS Billing PDF",
      tokens: 4100,
      latencyMs: 910,
      status: "success",
    },
  ],
};

export const getAnalyticsSummaryFn = createServerFn({ method: "GET" }).handler(async () => {
  return SAMPLE_ANALYTICS;
});
