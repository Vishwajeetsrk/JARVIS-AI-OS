/**
 * VoiceAssistantButton — floating pill that shows the assistant state and
 * toggles always-on listening (wake word "hey Jarvis").
 */

import { useVoiceAssistant } from "@/components/voice-assistant";
import { Mic, MicOff, Loader2, Volume2 } from "lucide-react";

export function VoiceAssistantButton() {
  const { state, isEnabled, setEnabled } = useVoiceAssistant();

  const stateLabel =
    state === "listening"
      ? "Listening — say “Hey Jarvis”"
      : state === "processing"
        ? "Processing…"
        : state === "speaking"
          ? "Speaking…"
          : state === "error"
            ? "Mic error"
            : "Voice off";

  const dotClass =
    state === "listening"
      ? "bg-emerald-500 animate-pulse"
      : state === "processing"
        ? "bg-amber-400 animate-pulse"
        : state === "speaking"
          ? "bg-sky-400 animate-pulse"
          : state === "error"
            ? "bg-red-500"
            : "bg-muted-foreground/40";

  return (
    <button
      onClick={() => setEnabled(!isEnabled)}
      title={isEnabled ? "Turn off always-on voice" : "Turn on always-on voice (wake word: “Hey Jarvis”)"}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-medium shadow-lg backdrop-blur transition-all hover:scale-[1.02] ${
        isEnabled
          ? "border-emerald-500/40 bg-emerald-500/10 text-foreground"
          : "border-border bg-surface/80 text-muted-foreground hover:border-primary/40 hover:text-foreground"
      }`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className={`absolute inline-flex h-full w-full rounded-full ${dotClass}`} />
      </span>
      {state === "processing" ? (
        <Loader2 className="h-4 w-4 animate-spin text-amber-400" />
      ) : state === "speaking" ? (
        <Volume2 className="h-4 w-4 text-sky-400" />
      ) : isEnabled ? (
        <Mic className="h-4 w-4 text-emerald-400" />
      ) : (
        <MicOff className="h-4 w-4" />
      )}
      <span className="hidden sm:inline">{stateLabel}</span>
    </button>
  );
}
