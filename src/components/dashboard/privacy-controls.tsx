import { useState, useEffect } from "react";
import {
  Shield, Lock, Mic, Video, Brain, Bell, Download, Trash2, Edit3,
  Eye, Check, ShieldAlert, Cpu, Sparkles, ExternalLink, Settings2
} from "lucide-react";
import { toast } from "sonner";
import {
  unifiedMemory,
  type UserPreferences,
  type UnifiedMemorySnapshot,
} from "@/lib/orchestrator/unified-memory";

export function PrivacyControls() {
  const [prefs, setPrefs] = useState<UserPreferences>({
    voiceRate: 160,
    voiceVolume: 1.0,
    voiceGender: "female",
    wakeWords: ["hey nisha", "nisha", "hey jarvis", "jarvis"],
    proactiveLevel: "balanced",
    cameraPermission: "off",
    microphoneMode: "wake_word",
    memorySavingMode: "auto_save",
    activeCompanionView: "avatar",
  });

  const [memoryModalOpen, setMemoryModalOpen] = useState(false);
  const [memoryData, setMemoryData] = useState<UnifiedMemorySnapshot | null>(null);

  useEffect(() => {
    const snap = unifiedMemory.getSnapshot();
    setPrefs(snap.preferences);
    setMemoryData(snap);
  }, []);

  const handleUpdate = (updates: Partial<UserPreferences>) => {
    const updated = unifiedMemory.updatePreferences(updates);
    setPrefs({ ...updated });
    toast.success("Privacy & Permission settings saved");
  };

  const handleExportMemory = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(memoryData, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `jarvis_unified_memory_${Date.now()}.json`);
    dlAnchor.click();
    toast.success("Memory archive downloaded");
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-base font-semibold text-foreground">
              Privacy, Hardware Permissions & Memory Governance
            </h3>
            <p className="text-xs text-muted-foreground">
              Explicit user consent controls for Microphone, Camera, Memory persistence, and Proactive Check-ins
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setMemoryData(unifiedMemory.getSnapshot());
            setMemoryModalOpen(true);
          }}
          className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:border-primary/50"
        >
          <Brain className="h-4 w-4 text-primary" />
          Inspect & Manage Memories
        </button>
      </div>

      {/* Control Matrix Grid */}
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* 1. Camera Control */}
        <div className="rounded-xl border border-border bg-surface p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <Video className="h-4 w-4 text-cyan-400" /> Camera Permission
            </div>
            <span
              className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold uppercase ${
                prefs.cameraPermission === "off" ? "bg-red-500/10 text-red-400 border border-red-500/30" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
              }`}
            >
              {prefs.cameraPermission}
            </span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Requires explicit user activation. Never streams without visual indicator.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            <button
              onClick={() => handleUpdate({ cameraPermission: "off" })}
              className={`rounded-lg border px-2 py-1 text-xs font-medium transition-all ${
                prefs.cameraPermission === "off" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground"
              }`}
            >
              OFF
            </button>
            <button
              onClick={() => handleUpdate({ cameraPermission: "on_app_open" })}
              className={`rounded-lg border px-2 py-1 text-xs font-medium transition-all ${
                prefs.cameraPermission === "on_app_open" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground"
              }`}
            >
              ON WHILE OPEN
            </button>
          </div>
        </div>

        {/* 2. Microphone Mode */}
        <div className="rounded-xl border border-border bg-surface p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <Mic className="h-4 w-4 text-purple-400" /> Microphone Input
            </div>
            <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-purple-300">
              {prefs.microphoneMode === "wake_word" ? "WAKE WORD" : "PUSH TO TALK"}
            </span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Protected with Echo Guard to prevent self-hearing speaker loops.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            <button
              onClick={() => handleUpdate({ microphoneMode: "wake_word" })}
              className={`rounded-lg border px-2 py-1 text-xs font-medium transition-all ${
                prefs.microphoneMode === "wake_word" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground"
              }`}
            >
              WAKE WORD
            </button>
            <button
              onClick={() => handleUpdate({ microphoneMode: "push_to_talk" })}
              className={`rounded-lg border px-2 py-1 text-xs font-medium transition-all ${
                prefs.microphoneMode === "push_to_talk" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground"
              }`}
            >
              PUSH TO TALK
            </button>
          </div>
        </div>

        {/* 3. Memory Saving Mode */}
        <div className="rounded-xl border border-border bg-surface p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <Brain className="h-4 w-4 text-amber-400" /> Memory Policy
            </div>
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-300">
              {prefs.memorySavingMode === "auto_save" ? "AUTO-SAVE" : "ASK FIRST"}
            </span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Distinguishes facts from inferences. Never stores speculative assumptions.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            <button
              onClick={() => handleUpdate({ memorySavingMode: "auto_save" })}
              className={`rounded-lg border px-2 py-1 text-xs font-medium transition-all ${
                prefs.memorySavingMode === "auto_save" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground"
              }`}
            >
              AUTO-SAVE
            </button>
            <button
              onClick={() => handleUpdate({ memorySavingMode: "ask_before_saving" })}
              className={`rounded-lg border px-2 py-1 text-xs font-medium transition-all ${
                prefs.memorySavingMode === "ask_before_saving" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground"
              }`}
            >
              ASK BEFORE SAVE
            </button>
          </div>
        </div>

        {/* 4. Proactive Check-in Level */}
        <div className="rounded-xl border border-border bg-surface p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <Bell className="h-4 w-4 text-emerald-400" /> Proactive Level
            </div>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase text-emerald-300">
              {prefs.proactiveLevel}
            </span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Low-pressure check-ins. Never guilt trips or emotional manipulation.
          </p>
          <div className="mt-3 grid grid-cols-4 gap-1 text-[10px]">
            {(["off", "quiet", "balanced", "active"] as UserPreferences["proactiveLevel"][]).map((lvl) => (
              <button
                key={lvl}
                onClick={() => handleUpdate({ proactiveLevel: lvl })}
                className={`rounded-lg border px-1.5 py-1 font-semibold uppercase transition-all ${
                  prefs.proactiveLevel === lvl ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground"
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Memory Inspector Modal */}
      {memoryModalOpen && memoryData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
          <div className="flex max-h-[85vh] w-full max-w-3xl flex-col rounded-2xl border border-border bg-card shadow-2xl">
            <div className="flex items-center justify-between border-b border-border p-4">
              <div className="flex items-center gap-2 font-display text-base font-semibold text-foreground">
                <Brain className="h-5 w-5 text-primary" />
                Persistent Unified Memory Bank
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleExportMemory}
                  className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-medium text-foreground hover:border-primary/50"
                >
                  <Download className="h-3.5 w-3.5" /> Export JSON
                </button>
                <button
                  onClick={() => setMemoryModalOpen(false)}
                  className="rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="overflow-y-auto p-5 space-y-4 text-xs font-mono">
              <div className="rounded-xl border border-border bg-surface p-3">
                <div className="font-bold text-primary mb-1">1. IDENTITY MEMORY:</div>
                <pre className="text-muted-foreground whitespace-pre-wrap">{JSON.stringify(memoryData.identity, null, 2)}</pre>
              </div>

              <div className="rounded-xl border border-border bg-surface p-3">
                <div className="font-bold text-emerald-400 mb-1">2. ACTIVE PROJECTS:</div>
                <pre className="text-muted-foreground whitespace-pre-wrap">{JSON.stringify(memoryData.projects, null, 2)}</pre>
              </div>

              <div className="rounded-xl border border-border bg-surface p-3">
                <div className="font-bold text-cyan-400 mb-1">3. LEARNING EVIDENCE:</div>
                <pre className="text-muted-foreground whitespace-pre-wrap">{JSON.stringify(memoryData.learning, null, 2)}</pre>
              </div>

              <div className="rounded-xl border border-border bg-surface p-3">
                <div className="font-bold text-purple-400 mb-1">4. EPISODIC MILESTONES:</div>
                <pre className="text-muted-foreground whitespace-pre-wrap">{JSON.stringify(memoryData.episodic, null, 2)}</pre>
              </div>

              <div className="rounded-xl border border-border bg-surface p-3">
                <div className="font-bold text-amber-400 mb-1">5. EMOTIONAL & BEHAVIORAL OBSERVATIONS:</div>
                <pre className="text-muted-foreground whitespace-pre-wrap">{JSON.stringify(memoryData.observations, null, 2)}</pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
