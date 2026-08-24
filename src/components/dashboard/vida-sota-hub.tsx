import React, { useState } from "react";
import { MessageSquare, Wand2, FileText, Trash2, Calendar, TrendingUp, Presentation, Sparkles, Settings, ShieldCheck, FileSpreadsheet, Download } from "lucide-react";
import { ReplyRescue } from "@/components/tools/ReplyRescue";
import { PromptRescue } from "@/components/tools/PromptRescue";
import { ResumeRescue } from "@/components/tools/ResumeRescue";
import { WorkspaceCleanup } from "@/components/tools/WorkspaceCleanup";
import { DailyWrap } from "@/components/tools/DailyWrap";
import { MarketResearch } from "@/components/tools/MarketResearch";
import { DeckSheetBuilder } from "@/components/tools/DeckSheetBuilder";
import { VidaSettingsModal } from "@/components/dashboard/vida-settings-modal";

export function VidaSotaHub() {
  const [activeTab, setActiveTab] = useState<
    "reply" | "prompt" | "resume" | "cleanup" | "wrap" | "research" | "deck"
  >("reply");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const tools = [
    { id: "reply" as const, name: "Reply Rescue", icon: MessageSquare, color: "text-pink-400 border-pink-500/30" },
    { id: "prompt" as const, name: "Prompt Rescue", icon: Wand2, color: "text-indigo-400 border-indigo-500/30" },
    { id: "resume" as const, name: "Resume Rescue", icon: FileText, color: "text-teal-400 border-teal-500/30" },
    { id: "cleanup" as const, name: "Workspace Cleanup", icon: Trash2, color: "text-amber-400 border-amber-500/30" },
    { id: "wrap" as const, name: "Daily Wrap", icon: Calendar, color: "text-emerald-400 border-emerald-500/30" },
    { id: "research" as const, name: "Market Research", icon: TrendingUp, color: "text-cyan-400 border-cyan-500/30" },
    { id: "deck" as const, name: "Deck & Sheet Builder", icon: Presentation, color: "text-violet-400 border-violet-500/30" },
  ];

  return (
    <>
      <section className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-md shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-500/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center gap-2">
                VIDA SOTA Autonomous Tool Suite
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono lowercase">
                  7 active tools
                </span>
              </h2>
              <p className="text-xs text-muted-foreground">Modular, type-safe agent workflows with dry-run safety and 1-click exports.</p>
            </div>
          </div>

          {/* Data Control & Settings Button */}
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white hover:border-slate-500 transition-all shadow-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Data Control &amp; Settings</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {tools.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all whitespace-nowrap ${
                activeTab === t.id
                  ? "bg-slate-900 border-primary text-foreground shadow-sm"
                  : "bg-background/40 border-border text-muted-foreground hover:border-border hover:text-foreground"
              }`}
            >
              <t.icon className={`w-3.5 h-3.5 ${activeTab === t.id ? t.color.split(" ")[0] : ""}`} />
              <span>{t.name}</span>
            </button>
          ))}
        </div>

        {/* Active Tool View */}
        <div className="mt-3">
          {activeTab === "reply" && <ReplyRescue />}
          {activeTab === "prompt" && <PromptRescue />}
          {activeTab === "resume" && <ResumeRescue />}
          {activeTab === "cleanup" && <WorkspaceCleanup />}
          {activeTab === "wrap" && <DailyWrap />}
          {activeTab === "research" && <MarketResearch />}
          {activeTab === "deck" && <DeckSheetBuilder />}
        </div>
      </section>

      {/* Vida Settings & Data Control Modal */}
      <VidaSettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  );
}
