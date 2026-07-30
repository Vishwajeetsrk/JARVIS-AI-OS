/**
 * VoiceMode — Visual feedback component for the voice assistant.
 *
 * Shows: pulsing mic icon, state indicator, screen capture button,
 * transcribed text, and assistant response.
 */

"use client";

import { cn } from "@/lib/utils";
import { Mic, MicOff, Monitor, Loader2, Volume2, AlertCircle, X } from "lucide-react";
import { useVoiceAssistant, type AssistantState } from "./voice-assistant";

// ============================================================================
// State indicators
// ============================================================================

const STATE_CONFIG: Record<
  AssistantState,
  { label: string; color: string; icon: typeof Mic; pulse: boolean }
> = {
  idle: {
    label: "Voice Off",
    color: "bg-gray-500",
    icon: MicOff,
    pulse: false,
  },
  listening: {
    label: "Listening...",
    color: "bg-green-500",
    icon: Mic,
    pulse: true,
  },
  processing: {
    label: "Processing...",
    color: "bg-yellow-500",
    icon: Loader2,
    pulse: false,
  },
  speaking: {
    label: "Speaking...",
    color: "bg-blue-500",
    icon: Volume2,
    pulse: true,
  },
  error: {
    label: "Error",
    color: "bg-red-500",
    icon: AlertCircle,
    pulse: false,
  },
};

// ============================================================================
// Main Component
// ============================================================================

export interface VoiceModeProps {
  /** Additional CSS classes */
  className?: string;
  /** Called when a voice command is received */
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
  const Icon = config.icon;

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      {/* Main mic button */}
      <div className="relative">
        {/* Pulse animation */}
        {config.pulse && (
          <div
            className={cn(
              "absolute inset-0 rounded-full animate-ping opacity-75",
              config.color
            )}
          />
        )}

        {/* Mic button */}
        <button
          onClick={isEnabled ? stopListening : startListening}
          className={cn(
            "relative z-10 w-16 h-16 rounded-full flex items-center justify-center",
            "transition-all duration-200 shadow-lg",
            "hover:scale-105 active:scale-95",
            isEnabled ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600",
            state === "processing" && "bg-yellow-500 hover:bg-yellow-600",
            state === "speaking" && "bg-blue-500 hover:bg-blue-600",
            state === "error" && "bg-red-500 hover:bg-red-600"
          )}
          title={isEnabled ? "Stop listening" : "Start listening"}
        >
          <Icon
            className={cn(
              "w-8 h-8 text-white",
              state === "processing" && "animate-spin"
            )}
          />
        </button>
      </div>

      {/* State label */}
      <div className="flex items-center gap-2">
        <div className={cn("w-2 h-2 rounded-full", config.color)} />
        <span className="text-sm font-medium text-muted-foreground">
          {config.label}
        </span>
      </div>

      {/* Screenshot button */}
      {isEnabled && state === "listening" && (
        <button
          onClick={captureAndAnalyze}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg",
            "bg-secondary hover:bg-secondary/80 text-secondary-foreground",
            "transition-colors text-sm"
          )}
        >
          <Monitor className="w-4 h-4" />
          Capture Screen
        </button>
      )}

      {/* Transcribed text */}
      {transcribedText && (
        <div className="w-full max-w-md p-3 rounded-lg bg-muted text-sm">
          <div className="flex items-center gap-2 mb-1">
            <Mic className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">You said:</span>
          </div>
          <p className="text-foreground">{transcribedText}</p>
          {wakeWord?.isWakeWord && wakeWord.matchedWord && (
            <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-green-500/20 text-green-600 rounded">
              Wake word: "{wakeWord.matchedWord}"
            </span>
          )}
        </div>
      )}

      {/* Assistant response */}
      {assistantResponse && (
        <div className="w-full max-w-md p-3 rounded-lg bg-primary/10 text-sm">
          <div className="flex items-center gap-2 mb-1">
            <Volume2 className="w-3 h-3 text-primary" />
            <span className="text-xs text-muted-foreground">Jarvis:</span>
          </div>
          <p className="text-foreground">{assistantResponse}</p>
        </div>
      )}

      {/* Error display */}
      {error && (
        <div className="w-full max-w-md p-3 rounded-lg bg-destructive/10 text-sm flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
          <p className="text-destructive">{error}</p>
        </div>
      )}

      {/* Instructions */}
      {isEnabled && state === "listening" && !transcribedText && (
        <p className="text-xs text-muted-foreground text-center max-w-xs">
          Say "Hey Jarvis" followed by your command.
          <br />
          Example: "Hey Jarvis, open YouTube"
        </p>
      )}
    </div>
  );
}

// ============================================================================
// Compact version for sidebar/toolbar
// ============================================================================

export function VoiceModeCompact({ className }: { className?: string }) {
  const { state, isEnabled, startListening, stopListening } = useVoiceAssistant();
  const config = STATE_CONFIG[state];
  const Icon = config.icon;

  return (
    <button
      onClick={isEnabled ? stopListening : startListening}
      className={cn(
        "relative w-10 h-10 rounded-full flex items-center justify-center",
        "transition-all duration-200",
        isEnabled
          ? "bg-red-500 hover:bg-red-600 text-white"
          : "bg-secondary hover:bg-secondary/80 text-secondary-foreground",
        className
      )}
      title={isEnabled ? "Disable voice" : "Enable voice"}
    >
      {config.pulse && (
        <div
          className={cn(
            "absolute inset-0 rounded-full animate-ping opacity-50",
            config.color
          )}
        />
      )}
      <Icon className={cn("w-5 h-5 relative z-10", state === "processing" && "animate-spin")} />
    </button>
  );
}
