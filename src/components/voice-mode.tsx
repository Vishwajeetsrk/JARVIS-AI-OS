/**
 * VoiceMode — Next-Gen 3D Holographic Visual Feedback Component for JARVIS AI OS
 * Powered by ArcReactorHud 3D Canvas visualizer, real-time audio reactivity,
 * wake-word detection, screen vision, and conversational status.
 */

"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Mic, MicOff, Monitor, Loader2, Volume2, AlertCircle, Sparkles, Cpu, Radio, Zap } from "lucide-react";
import { useVoiceAssistant, type AssistantState } from "./voice-assistant";
import { ArcReactorHud, type HudState } from "./jarvis/arc-reactor-hud";

const STATE_CONFIG: Record<
  AssistantState,
  { label: string; hudState: HudState; color: string; icon: typeof Mic }
> = {
  idle: {
    label: "STANDBY",
    hudState: "idle",
    color: "text-muted-foreground",
    icon: MicOff,
  },
  listening: {
    label: "ONLINE — LISTENING",
    hudState: "listening",
    color: "text-emerald-400",
    icon: Mic,
  },
  processing: {
    label: "ANALYZING & RESEARCHING",
    hudState: "thinking",
    color: "text-amber-400",
    icon: Loader2,
  },
  speaking: {
    label: "TRANSMITTING VOCAL FEEDBACK",
    hudState: "speaking",
    color: "text-sky-400",
    icon: Volume2,
  },
  error: {
    label: "SYSTEM FAULT DETECTED",
    hudState: "error",
    color: "text-red-400",
    icon: AlertCircle,
  },
};

export interface VoiceModeProps {
  className?: string;
  onCommand?: (text: string) => void;
}

export function VoiceMode({ className, onCommand }: VoiceModeProps) {
  const {
    state,
    transcribedText,
    assistantResponse,
    wakeWord,
    error,
    startListening,
    stopListening,
    captureAndAnalyze,
    isEnabled,
  } = useVoiceAssistant();

  const config = STATE_CONFIG[state];

  return (
    <div className={cn("flex flex-col items-center gap-6 p-6 rounded-3xl border border-primary/20 bg-background/95 backdrop-blur-xl shadow-2xl relative overflow-hidden", className)}>
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#00e5ff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="w-full flex items-center justify-between border-b border-border/40 pb-3 z-10">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-primary font-semibold">
            JARVIS CORE // MK-85
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className={cn("text-xs font-mono font-medium tracking-wider", config.color)}>
            {config.label}
          </span>
        </div>
      </div>

      {/* 3D Arc Reactor Holographic HUD */}
      <div className="relative z-10 cursor-pointer my-2" onClick={isEnabled ? stopListening : startListening}>
        <ArcReactorHud
          state={config.hudState}
          size={240}
          audioLevel={state === "listening" ? 0.45 : state === "speaking" ? 0.75 : 0.15}
          statusText={config.label}
        />
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-3 z-10">
        <button
          onClick={isEnabled ? stopListening : startListening}
          className={cn(
            "flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-lg",
            isEnabled
              ? "bg-red-500/20 text-red-400 border border-red-500/40 hover:bg-red-500/30"
              : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/30"
          )}
        >
          {isEnabled ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          {isEnabled ? "Deactivate Mic" : "Engage Voice Mode"}
        </button>

        {isEnabled && (
          <button
            onClick={captureAndAnalyze}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card/80 hover:bg-accent text-foreground text-sm transition-colors"
            title="Inspect current screen context with Gemini Vision"
          >
            <Monitor className="w-4 h-4 text-primary" />
            <span>Screen Vision</span>
          </button>
        )}
      </div>

      {/* Real-time Transcription Feed */}
      {transcribedText && (
        <div className="w-full max-w-lg p-4 rounded-2xl border border-border bg-card/60 backdrop-blur-md text-sm z-10 animate-fade-in">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <Radio className="w-3.5 h-3.5 text-primary" />
              <span>TRANSCRIBED AUDIO</span>
            </div>
            {wakeWord?.isWakeWord && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                WAKE WORD: "{wakeWord.matchedWord}"
              </span>
            )}
          </div>
          <p className="text-foreground font-medium">{transcribedText}</p>
        </div>
      )}

      {/* Assistant Voice Response Feedback */}
      {assistantResponse && (
        <div className="w-full max-w-lg p-4 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-md text-sm z-10 animate-fade-in">
          <div className="flex items-center gap-2 text-xs font-mono text-primary mb-1.5">
            <Volume2 className="w-3.5 h-3.5" />
            <span>JARVIS RESPONSE</span>
          </div>
          <p className="text-foreground">{assistantResponse}</p>
        </div>
      )}

      {/* Error Notice */}
      {error && (
        <div className="w-full max-w-lg p-3 rounded-xl border border-destructive/30 bg-destructive/10 text-xs flex items-center gap-2 text-destructive z-10">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Footer Wake Word Hint */}
      {isEnabled && state === "listening" && !transcribedText && (
        <div className="text-center text-xs text-muted-foreground font-mono z-10">
          Tip: Speak naturally or say <span className="text-primary font-semibold">"Hey Jarvis"</span> followed by any command.
        </div>
      )}
    </div>
  );
}

export function VoiceModeCompact({ className }: { className?: string }) {
  const { state, isEnabled, startListening, stopListening } = useVoiceAssistant();
  const config = STATE_CONFIG[state];
  const Icon = config.icon;

  return (
    <button
      onClick={isEnabled ? stopListening : startListening}
      className={cn(
        "relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md",
        isEnabled
          ? "bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500/30"
          : "bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20",
        className
      )}
      title={isEnabled ? "Disable Voice Engine" : "Activate Jarvis Voice Engine"}
    >
      <Icon className={cn("w-4 h-4", state === "processing" && "animate-spin")} />
      {isEnabled && (
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
      )}
    </button>
  );
}
