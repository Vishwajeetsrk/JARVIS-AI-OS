import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BotPersona,
  ChiefOfStaffItem,
  getBotFleetFn,
  triggerBotActionFn,
} from "@/lib/bot-fleet.functions";

export const Route = createFileRoute("/_authenticated/console/fleet")({
  loader: async () => {
    return await getBotFleetFn();
  },
  component: BotFleetPage,
});

function BotFleetPage() {
  const data = Route.useLoaderData();
  const navigate = useNavigate();
  const [bots, setBots] = useState<BotPersona[]>(data.bots);
  const [chiefItems, setChiefItems] = useState<ChiefOfStaffItem[]>(data.chiefItems);
  const [selectedBot, setSelectedBot] = useState<BotPersona>(data.bots[0]);
  const [activeTab, setActiveTab] = useState<"fleet" | "chief-of-staff">("chief-of-staff");
  const [isPending, startTransition] = useTransition();
  const [actionSuccessMsg, setActionSuccessMsg] = useState<string | null>(null);

  const handleTriggerRoutine = (botId: string, routineName: string) => {
    startTransition(async () => {
      try {
        const res = await triggerBotActionFn({
          data: { botId, action: routineName },
        });
        setActionSuccessMsg(res.message);
        setTimeout(() => setActionSuccessMsg(null), 4000);
        // Refresh local task count
        setBots((prev) =>
          prev.map((b) => (b.id === botId ? { ...b, completedTasksCount: b.completedTasksCount + 1 } : b))
        );
      } catch (err: any) {
        alert(err.message || "Failed to trigger routine");
      }
    });
  };

  const handleDispatchToChat = (bot: BotPersona, prompt?: string) => {
    const querySeed = prompt || `Hello ${bot.name}, please run an initial scan of your active tasks.`;
    navigate({
      to: "/console",
      search: { seed: `@${bot.id} ${querySeed}` } as any,
    });
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20">
                Autonomous Workforce
              </span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                8 Specialized Personas Active
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Autonomous Bot Fleet
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Give each bot a job. Manage your Chief of Staff, Sales Hunter, Ad Optimizer, Recruiter, and Bookkeeper.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab("chief-of-staff")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "chief-of-staff"
                  ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              👔 Chief of Staff Feed
            </button>
            <button
              onClick={() => setActiveTab("fleet")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "fleet"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              🤖 All 8 Bots ({bots.length})
            </button>
          </div>
        </div>

        {/* Action toast */}
        <AnimatePresence>
          {actionSuccessMsg && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <span>⚡</span>
                <span>{actionSuccessMsg}</span>
              </div>
              <span className="text-xs text-emerald-400/80">Executing asynchronously</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto">
        {activeTab === "chief-of-staff" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chief of Staff Focus Card */}
            <div className="lg:col-span-1 rounded-2xl bg-gradient-to-b from-orange-500/10 via-white/[0.02] to-transparent p-6 border border-orange-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 text-8xl font-black">
                👔
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-2xl">
                  👔
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Chief of Staff</h3>
                  <p className="text-xs text-orange-400 font-medium">Always-On Executive Orchestrator</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Scans Slack, email, calendar, and meeting notes to surface what's new and maps directly to your top priorities.
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Communication Channels</span>
                  <span className="text-white font-semibold">Gmail, Slack, Outlook</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Task Management</span>
                  <span className="text-white font-semibold">Notion, Linear, GitHub</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Active Scanning Frequency</span>
                  <span className="text-emerald-400 font-semibold">Every 15 minutes</span>
                </div>
              </div>

              <button
                onClick={() =>
                  handleDispatchToChat(
                    bots[0],
                    "Please give me my comprehensive Morning Executive Briefing across Slack, Gmail, and Calendar."
                  )
                }
                className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold text-sm shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>🎙️</span>
                <span>Ask for Daily Briefing</span>
              </button>
            </div>

            {/* Live Actionable Digest */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>⚡</span> Live Priority Digest ({chiefItems.length} items flagged)
                </h3>
                <span className="text-xs text-slate-400">Auto-synced across 5 tools</span>
              </div>

              <div className="space-y-3">
                {chiefItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                              item.priority === "high"
                                ? "bg-red-500/10 text-red-400 border border-red-500/20"
                                : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                            }`}
                          >
                            {item.priority} priority
                          </span>
                          <span className="text-xs text-slate-400">{item.source}</span>
                          <span className="text-xs text-slate-500">• {item.time}</span>
                        </div>
                        <h4 className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">{item.summary}</p>
                      </div>

                      <button
                        onClick={() =>
                          handleDispatchToChat(bots[0], item.actionPrompt)
                        }
                        className="px-3 py-2 rounded-lg bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 text-xs font-semibold border border-orange-500/30 shrink-0 transition-all flex items-center gap-1.5"
                      >
                        <span>Resolve</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* All 8 Bots Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {bots.map((bot) => (
              <div
                key={bot.id}
                className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 flex flex-col justify-between transition-all group relative overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl border"
                      style={{
                        backgroundColor: `${bot.color}15`,
                        borderColor: `${bot.color}40`,
                      }}
                    >
                      {bot.avatar}
                    </div>
                    {bot.badge && (
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                        style={{
                          backgroundColor: `${bot.color}20`,
                          color: bot.color,
                          border: `1px solid ${bot.color}40`,
                        }}
                      >
                        {bot.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                      {bot.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1">{bot.tagline}</p>
                  </div>

                  <div className="pt-2 border-t border-white/5 space-y-1.5">
                    <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                      Connected Tools:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {bot.integrations.map((tool) => (
                        <span
                          key={tool}
                          className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] text-slate-300 border border-white/5"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    <span className="text-white font-bold">{bot.completedTasksCount}</span> completed
                  </div>
                  <button
                    onClick={() => handleDispatchToChat(bot)}
                    className="px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 text-xs font-semibold border border-blue-500/30 transition-all flex items-center gap-1"
                  >
                    <span>Dispatch</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
