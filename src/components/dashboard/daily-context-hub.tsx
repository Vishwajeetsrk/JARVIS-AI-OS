import { useState, useEffect } from "react";
import {
  contextModeManager,
  type JarvisContextMode,
  CONTEXT_MODES,
} from "@/lib/orchestrator/context-modes";
import {
  DailyPlannerEngine,
  type DailySchedulePlan,
} from "@/lib/orchestrator/daily-planner";
import {
  Briefcase, GraduationCap, Dumbbell, DollarSign, Target, Sparkles,
  CheckCircle2, Circle, Clock, Flame, ShieldAlert, Cpu, ArrowRight,
  Sun, Moon, Zap, RefreshCw, Check
} from "lucide-react";
import { toast } from "sonner";

export function DailyContextHub() {
  const [activeMode, setActiveMode] = useState<JarvisContextMode>("build");
  const [isOnline, setIsOnline] = useState(true);
  const [plan, setPlan] = useState<DailySchedulePlan>(DailyPlannerEngine.generate12PMPlan());
  const [completedPillars, setCompletedPillars] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const unsub = contextModeManager.subscribe((mode) => setActiveMode(mode));
    // Check network online status
    const updateOnline = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", updateOnline);
    window.addEventListener("offline", updateOnline);
    return () => {
      unsub();
      window.removeEventListener("online", updateOnline);
      window.removeEventListener("offline", updateOnline);
    };
  }, []);

  const handleSwitchMode = (mode: JarvisContextMode) => {
    contextModeManager.setMode(mode);
    toast.success(`Switched to ${CONTEXT_MODES[mode].name}`);
  };

  const togglePillar = (title: string) => {
    setCompletedPillars((prev) => {
      const updated = { ...prev, [title]: !prev[title] };
      toast.success(updated[title] ? "Pillar task completed!" : "Moved back to pending");
      return updated;
    });
  };

  const currentModeConfig = CONTEXT_MODES[activeMode];

  return (
    <div className="flex flex-col gap-6">
      {/* 1. Context Switcher Bar & Hybrid Local / Online Status */}
      <div className="rounded-2xl border border-border bg-card p-4 shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-sm font-bold text-foreground">
                  Active Context: {currentModeConfig.name}
                </span>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold uppercase ${
                    isOnline
                      ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                      : "border border-amber-500/30 bg-amber-500/10 text-amber-400"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${isOnline ? "bg-emerald-400 animate-ping" : "bg-amber-400"}`} />
                  {isOnline ? "🟢 Online AI + Agents" : "🟡 Local Mode Active"}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{currentModeConfig.tagline}</p>
            </div>
          </div>

          {/* Context Switching Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {(Object.keys(CONTEXT_MODES) as JarvisContextMode[]).map((m) => {
              const cfg = CONTEXT_MODES[m];
              const isSelected = activeMode === m;
              return (
                <button
                  key={m}
                  onClick={() => handleSwitchMode(m)}
                  className={`flex items-center gap-1 rounded-xl px-2.5 py-1 text-xs font-semibold transition-all ${
                    isSelected
                      ? "border border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                      : "border border-border bg-surface text-muted-foreground hover:border-border hover:text-foreground"
                  }`}
                >
                  {m === "focus" && <Flame className="h-3 w-3" />}
                  {m === "work" && <Briefcase className="h-3 w-3" />}
                  {m === "learn" && <GraduationCap className="h-3 w-3" />}
                  {m === "build" && <Zap className="h-3 w-3" />}
                  {m === "business" && <DollarSign className="h-3 w-3" />}
                  {m === "gym" && <Dumbbell className="h-3 w-3" />}
                  {m === "review" && <Moon className="h-3 w-3" />}
                  {cfg.name.replace(" Mode", "")}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. 12:00 PM Daily Planning Matrix (5 Pillars) */}
        <div className="mt-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3">
            <div>
              <h4 className="font-display text-sm font-bold text-foreground flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-cyan-400" /> Today's 12:00 PM Focused Schedule ({plan.dateStr})
              </h4>
              <p className="text-xs text-muted-foreground">{plan.focusRule}</p>
            </div>
            <button
              onClick={() => {
                setPlan(DailyPlannerEngine.generate12PMPlan());
                toast.success("Regenerated 12:00 PM daily schedule");
              }}
              className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground"
            >
              <RefreshCw className="h-3 w-3" /> Refresh Plan
            </button>
          </div>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
            {plan.pillars.map((item) => {
              const isDone = completedPillars[item.title];
              return (
                <div
                  key={item.pillar}
                  onClick={() => togglePillar(item.title)}
                  className={`group relative flex cursor-pointer flex-col justify-between rounded-xl border p-3.5 transition-all ${
                    isDone
                      ? "border-emerald-500/40 bg-emerald-950/20 opacity-75"
                      : "border-border bg-surface hover:border-primary/50 hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider text-primary">
                        {item.pillar === "Work" && <Briefcase className="h-3 w-3" />}
                        {item.pillar === "Learning" && <GraduationCap className="h-3 w-3" />}
                        {item.pillar === "Project" && <Zap className="h-3 w-3" />}
                        {item.pillar === "Gym" && <Dumbbell className="h-3 w-3 text-amber-400" />}
                        {item.pillar === "Side Income" && <DollarSign className="h-3 w-3 text-emerald-400" />}
                        {item.pillar}
                      </span>
                      {isDone ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Circle className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </div>

                    <p className={`mt-2.5 text-xs leading-relaxed font-medium ${isDone ? "line-through text-muted-foreground" : "text-foreground"}`}>
                      {item.title}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-border/40 pt-2 text-[10px] text-muted-foreground">
                    <span>⏱️ {item.durationMinutes} mins</span>
                    <span className={`font-semibold ${item.priority === "High" ? "text-amber-400" : "text-slate-400"}`}>
                      {item.priority} Priority
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
