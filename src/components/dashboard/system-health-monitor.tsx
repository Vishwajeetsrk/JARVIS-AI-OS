import { useState, useEffect } from "react";
import { SystemHealthEngine, type SystemDiagnosticReport, type SubsystemHealth } from "@/lib/orchestrator/system-health";
import { AgentTeamManager, type AgentDescriptor } from "@/lib/agents/agent-team";
import {
  Activity, ShieldCheck, Cpu, HardDrive, Wifi, Radio,
  Users, CheckCircle2, AlertTriangle, RefreshCw, Layers, Sparkles
} from "lucide-react";
import { toast } from "sonner";

export function SystemHealthMonitor() {
  const [report, setReport] = useState<SystemDiagnosticReport | null>(null);
  const [agents, setAgents] = useState<AgentDescriptor[]>(AgentTeamManager.getAgents());
  const [activeTab, setActiveTab] = useState<"subsystems" | "agents">("subsystems");
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    SystemHealthEngine.checkHealth().then(setReport);
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    const newReport = await SystemHealthEngine.checkHealth();
    setReport(newReport);
    setAgents(AgentTeamManager.getAgents());
    setIsRefreshing(false);
    toast.success("System diagnostics & agent status updated!");
  };

  if (!report) return null;

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-lg lg:p-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
            <Activity className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-lg font-bold text-foreground">
                JARVIS Health & Autonomous Agent Center
              </h3>
              <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SYSTEM {report.overallStatus}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Windows Auto-Start, Subsystem Health Diagnostics & 9 Specialized Autonomous Agents
            </p>
          </div>
        </div>

        {/* View Switcher & Refresh */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-xl border border-border bg-surface p-1 text-xs">
            <button
              onClick={() => setActiveTab("subsystems")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium transition-all ${
                activeTab === "subsystems"
                  ? "bg-primary text-primary-foreground font-bold shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Cpu className="h-3.5 w-3.5" /> Subsystems ({report.subsystems.length})
            </button>
            <button
              onClick={() => setActiveTab("agents")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium transition-all ${
                activeTab === "agents"
                  ? "bg-purple-500 text-white font-bold shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Users className="h-3.5 w-3.5" /> Agent Team ({agents.length})
            </button>
          </div>

          <button
            onClick={handleRefresh}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-border bg-surface text-muted-foreground hover:text-foreground transition-colors"
            title="Refresh Diagnostics"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin text-primary" : ""}`} />
          </button>
        </div>
      </div>

      {/* Auto-Start Status Banner */}
      <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-3 text-xs text-slate-300">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 font-bold text-emerald-400">
            <ShieldCheck className="h-4 w-4" /> Windows Auto-Start is Active
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">Startup File: %APPDATA%\Startup\JARVIS_AI_OS.lnk</span>
        </div>
        <p className="mt-1 text-slate-400">
          JARVIS automatically boots in the background when you turn on your laptop or log into Windows.
        </p>
      </div>

      {/* View 1: Subsystem Diagnostics */}
      {activeTab === "subsystems" && (
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {report.subsystems.map((sub, idx) => (
            <div key={idx} className="flex flex-col justify-between rounded-xl border border-border bg-surface p-3.5 transition-all hover:border-emerald-500/30">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-muted-foreground">{sub.category}</span>
                  <span className="flex items-center gap-1 font-mono text-[10px] font-bold text-emerald-400">
                    <CheckCircle2 className="h-3 w-3" /> Healthy
                  </span>
                </div>
                <h5 className="mt-1 font-display text-xs font-bold text-foreground">{sub.name}</h5>
                <p className="mt-1 text-[11px] text-slate-400 leading-relaxed">{sub.details}</p>
              </div>
              {sub.latencyMs && (
                <div className="mt-3 border-t border-border/40 pt-1.5 font-mono text-[10px] text-muted-foreground">
                  Latency: <span className="text-emerald-400 font-semibold">{sub.latencyMs}ms</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* View 2: Autonomous Agent Team */}
      {activeTab === "agents" && (
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((ag) => (
            <div key={ag.id} className="flex flex-col justify-between rounded-xl border border-border bg-surface p-4 transition-all hover:border-purple-500/40">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-purple-400 font-semibold">{ag.name}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[9px] font-bold ${
                      ag.status === "active"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-slate-500/20 text-slate-400"
                    }`}
                  >
                    {ag.status.toUpperCase()}
                  </span>
                </div>

                <h5 className="mt-1 text-xs font-semibold text-white">{ag.role}</h5>

                <div className="mt-2.5 space-y-1 text-[11px] text-slate-400">
                  {ag.responsibilities.slice(0, 2).map((res, i) => (
                    <div key={i} className="flex items-start gap-1">
                      <span className="text-primary">•</span>
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-1 border-t border-border/40 pt-2">
                {ag.capabilities.map((cap, i) => (
                  <span key={i} className="rounded bg-card px-1.5 py-0.5 font-mono text-[9px] text-slate-300">
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
