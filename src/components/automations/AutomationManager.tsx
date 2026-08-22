import React, { useState } from "react";
import { Clock, ShieldCheck, Play, Bot, AlertTriangle, CheckCircle2, Pause, Plus } from "lucide-react";
import { automationScheduler, ScheduledAutomation } from "@/lib/automations/automation-scheduler";
import { agentSystem, AgentTask } from "@/lib/agents/agent-system";

export function AutomationManager() {
  const [automations, setAutomations] = useState<ScheduledAutomation[]>(() =>
    automationScheduler.getAutomations()
  );
  const agentRoster = agentSystem.getAgentRoster();

  const handleToggle = (id: string) => {
    automationScheduler.toggleAutomation(id);
    setAutomations([...automationScheduler.getAutomations()]);
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 text-slate-100 backdrop-blur-md shadow-2xl space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Automations & Agent Fleet</h2>
            <p className="text-xs text-slate-400">Scheduled routines, multi-agent delegates, and safe background workflows.</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
          Scheduled Workflows ({automations.length})
        </div>

        <div className="space-y-2">
          {automations.map((auto) => (
            <div
              key={auto.id}
              className="flex items-center justify-between p-3.5 bg-slate-950/60 border border-slate-800 rounded-lg"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm text-white">{auto.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono uppercase">
                    {auto.schedule} {auto.timeOfDay ? `@ ${auto.timeOfDay}` : ""}
                  </span>
                  {auto.requiresConfirmation && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      Requires Approval
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400">{auto.actionSummary}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleToggle(auto.id)}
                  className={`px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    auto.enabled
                      ? "bg-emerald-600/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-600/30"
                      : "bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700"
                  }`}
                >
                  {auto.enabled ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                  {auto.enabled ? "Active" : "Paused"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-800/80 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-400">
            10 Specialized Agents Roster
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {agentRoster.map((agent) => (
              <div
                key={agent.role}
                className="p-3 bg-slate-950/40 border border-slate-800/80 rounded-lg space-y-1.5"
              >
                <div className="flex items-center gap-2 font-medium text-xs text-white">
                  <Bot className="w-3.5 h-3.5 text-purple-400" />
                  <span>{agent.role} Agent</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">{agent.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
