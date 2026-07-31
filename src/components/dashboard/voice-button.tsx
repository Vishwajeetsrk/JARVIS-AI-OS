import { useRef, useState } from "react";
import { Mic, Square } from "lucide-react";

export function useVoiceTranscription() {
  const [recording, setRecording] = useState(false);
  const [busy, setBusy] = useState(false);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const start = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      recorder.onstop = () => stream.getTracks().forEach((t) => t.stop());
      recorder.start();
      recorderRef.current = recorder;
      setRecording(true);
      return null;
    } catch {
      return "Microphone unavailable — allow mic access and try again.";
    }
  };

  const stop = async (): Promise<string | null> => {
    const recorder = recorderRef.current;
    if (!recorder) return null;
    setRecording(false);
    setBusy(true);
    try {
      const text = await new Promise<string>((resolve, reject) => {
        recorder.onstop = async () => {
          const blob = new Blob(chunksRef.current, { type: "audio/webm" });
          try {
            const form = new FormData();
            form.append("file", blob, "voice.webm");
            const res = await fetch("/api/transcribe", { method: "POST", body: form });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = (await res.json()) as { text?: string };
            resolve(data.text ?? "");
          } catch (err) {
            reject(err);
          }
        };
        recorder.stop();
      });
      return text || null;
    } catch {
      return null;
    } finally {
      setBusy(false);
      recorderRef.current = null;
    }
  };

  return { recording, busy, start, stop };
}

export function VoiceButton({
  onTranscribed,
  className,
}: {
  onTranscribed: (text: string) => void;
  className?: string;
}) {
  const { recording, busy, start, stop } = useVoiceTranscription();

  const handleClick = async () => {
    if (recording) {
      const text = await stop();
      if (text) onTranscribed(text);
    } else {
      await start();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={busy}
      aria-label={recording ? "Stop recording" : "Talk to Jarvis"}
      className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-xs transition-colors ${
        recording
          ? "border-destructive/50 bg-destructive/10 text-destructive"
          : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
      } ${className ?? ""}`}
    >
      {recording ? <Square className="h-3.5 w-3.5 fill-current" /> : <Mic className="h-3.5 w-3.5" />}
      {recording ? "Listening…" : "Talk"}
    </button>
  );
}
