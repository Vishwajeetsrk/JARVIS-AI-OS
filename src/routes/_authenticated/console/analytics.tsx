import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  AnalyticsSummary,
  getAnalyticsSummaryFn,
} from "@/lib/analytics.functions";

export const Route = createFileRoute("/_authenticated/console/analytics")({
  loader: async () => {
    return await getAnalyticsSummaryFn();
  },
  component: AnalyticsPage,
});

function AnalyticsPage() {
  const data = Route.useLoaderData();
  const [analytics, setAnalytics] = useState<AnalyticsSummary>(data);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Live Intelligence
              </span>
              <span className="text-xs text-slate-400">
                Shared Usage & Cost Attribution Across 8 Bots
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Shared Usage Analytics & Control Center
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Real-time token utilization, cost per bot persona, sub-second voice latency metrics, and self-healing task telemetry.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Real-time Ingestion Stream
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              Total Tokens Used
            </span>
            <div className="text-2xl sm:text-3xl font-black text-white">
              {(analytics.totalTokensUsed / 1_000_000).toFixed(2)}M
            </div>
            <p className="text-[11px] text-emerald-400">
              {(analytics.tokensThisMonth / 1_000_000).toFixed(2)}M consumed this month
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              Total LLM & API Cost
            </span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">
              ${analytics.totalCostUsd.toFixed(2)}
            </div>
            <p className="text-[11px] text-slate-400">
              ${analytics.costThisMonth.toFixed(2)} billed in current cycle
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              Average Voice Latency
            </span>
            <div className="text-2xl sm:text-3xl font-black text-violet-400">
              {analytics.averageVoiceLatencyMs}ms
            </div>
            <p className="text-[11px] text-emerald-400">
              Sub-second (&lt;500ms target achieved)
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              Task Success & Self-Healing
            </span>
            <div className="text-2xl sm:text-3xl font-black text-blue-400">
              {analytics.taskSuccessRatePercent}%
            </div>
            <p className="text-[11px] text-slate-400">
              {analytics.selfHealedErrorsCount} errors autonomously recovered
            </p>
          </div>
        </div>

        {/* Ingestion & Workload Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Multi-Channel Ingestion */}
          <div className="lg:col-span-1 p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>📡</span> Multi-Channel Ingestion
            </h3>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-400">Slack Messages Processed</span>
                <span className="text-sm font-bold text-white">
                  {analytics.channelIngestion.slackMessagesParsed.toLocaleString()}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-400">Emails & Invoices Scanned</span>
                <span className="text-sm font-bold text-white">
                  {analytics.channelIngestion.emailsScanned.toLocaleString()}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-400">Calendar Events Coordinated</span>
                <span className="text-sm font-bold text-white">
                  {analytics.channelIngestion.calendarEventsManaged.toLocaleString()}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-400">Code PRs & Repros Scaffolded</span>
                <span className="text-sm font-bold text-white">
                  {analytics.channelIngestion.codePRsGenerated.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Bot Workload Distribution */}
          <div className="lg:col-span-2 p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>🤖</span> Cost & Token Share by Bot Persona
            </h3>
            <div className="space-y-3">
              {analytics.botWorkloads.map((bot) => (
                <div key={bot.botId} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <span>{bot.avatar}</span>
                      <span>{bot.botName}</span>
                    </span>
                    <span className="text-slate-400">
                      ${bot.costUsd.toFixed(2)} • {(bot.tokensUsed / 1_000_000).toFixed(2)}M tokens ({bot.sharePercent}%)
                    </span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                      style={{ width: `${bot.sharePercent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real-time Execution Logs */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <span>⚡</span> Recent Autonomous Execution Logs
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="pb-3 font-semibold">Bot Persona</th>
                  <th className="pb-3 font-semibold">Action Executed</th>
                  <th className="pb-3 font-semibold">Tokens</th>
                  <th className="pb-3 font-semibold">Latency</th>
                  <th className="pb-3 font-semibold">Status</th>
                  <th className="pb-3 font-semibold text-right">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {analytics.recentExecutionLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-white/[0.02]">
                    <td className="py-3 font-semibold text-white">{log.botName}</td>
                    <td className="py-3 text-slate-300">{log.action}</td>
                    <td className="py-3 font-mono text-slate-400">{log.tokens.toLocaleString()}</td>
                    <td className="py-3 font-mono text-slate-400">{log.latencyMs}ms</td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          log.status === "success"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        }`}
                      >
                        {log.status}
                      </span>
                    </td>
                    <td className="py-3 text-right text-slate-500">{log.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
