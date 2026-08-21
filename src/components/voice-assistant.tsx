/**
 * VoiceAssistant — Main orchestrator component for the voice assistant loop.
 *
 * Ties together: ContinuousRecorder → Wake Word Detection → Whisper STT →
 * AI Chat → TTS Response → back to listening.
 *
 * Usage:
 *   <VoiceAssistant onCommand={(text) => handleCommand(text)} />
 */

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ContinuousRecorder, type RecorderState } from "./continuous-recorder";
import { checkWakeWord, type WakeWordResult } from "@/hooks/use-wake-word";

// ============================================================================
// Types
// ============================================================================

export type AssistantState =
  | "idle"        // Not listening
  | "listening"   // Always-on mic active, waiting for wake word
  | "processing"  // Transcribing / AI processing
  | "speaking"    // TTS playing response
  | "error";      // Something went wrong

export interface VoiceAssistantContext {
  /** Current state of the assistant */
  state: AssistantState;
  /** Recorder state */
  recorderState: RecorderState;
  /** Last transcribed text */
  transcribedText: string;
  /** Last AI response */
  assistantResponse: string;
  /** Last wake word detection result */
  wakeWord: WakeWordResult | null;
  /** Error message if state is error */
  error: string | null;
  /** Start listening (activate always-on mic) */
  startListening: () => Promise<void>;
  /** Stop listening (deactivate mic) */
  stopListening: () => void;
  /** Send a text command directly (skip voice) */
  sendCommand: (text: string) => Promise<void>;
  /** Take a screenshot and analyze it */
  captureAndAnalyze: () => Promise<void>;
  /** Whether voice mode is enabled */
  isEnabled: boolean;
  /** Enable/disable voice mode */
  setEnabled: (enabled: boolean) => void;
}

// ============================================================================
// Context
// ============================================================================

const VoiceAssistantContext = createContext<VoiceAssistantContext | null>(null);

export function useVoiceAssistant(): VoiceAssistantContext {
  const ctx = useContext(VoiceAssistantContext);
  if (!ctx) throw new Error("useVoiceAssistant must be used within VoiceAssistantProvider");
  return ctx;
}

// ============================================================================
// Provider
// ============================================================================

export interface VoiceAssistantProviderProps {
  children: ReactNode;
  /** Called when a voice/text command is received */
  onCommand: (text: string) => Promise<void>;
  /** Whether voice mode is enabled by default */
  defaultEnabled?: boolean;
}

export function VoiceAssistantProvider({
  children,
  onCommand,
  defaultEnabled = false,
}: VoiceAssistantProviderProps) {
  const [state, setState] = useState<AssistantState>("idle");
  const [recorderState, setRecorderState] = useState<RecorderState>("idle");
  const [transcribedText, setTranscribedText] = useState("");
  const [assistantResponse, setAssistantResponse] = useState("");
  const [wakeWord, setWakeWord] = useState<WakeWordResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isEnabled, setIsEnabled] = useState(defaultEnabled);

  const recorderRef = useRef<ContinuousRecorder | null>(null);
  const isProcessingRef = useRef(false);

  // Transcribe audio via Whisper STT
  const transcribe = useCallback(async (audioBlob: Blob): Promise<string | null> => {
    try {
      const formData = new FormData();
      formData.append("file", audioBlob, "audio.wav");

      const response = await fetch("/api/transcribe", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Transcription failed");
      }

      const data = await response.json();
      return data.text || null;
    } catch (err) {
      console.error("Transcription error:", err);
      return null;
    }
  }, []);

  // Speak text via TTS
  const speak = useCallback(async (text: string): Promise<void> => {
    try {
      setState("speaking");

      const response = await fetch("/api/speak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        console.error("TTS request failed");
        return;
      }

      // Check if response is audio or JSON
      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("audio")) {
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);

        await new Promise<void>((resolve, reject) => {
          audio.onended = () => {
            URL.revokeObjectURL(audioUrl);
            resolve();
          };
          audio.onerror = (e) => {
            URL.revokeObjectURL(audioUrl);
            reject(e);
          };
          audio.play().catch(reject);
        });
      } else {
        // TTS not available, just show text
        const data = await response.json();
        setAssistantResponse(data.text || text);
        // Wait a bit to simulate speaking
        await new Promise((r) => setTimeout(r, Math.min(text.length * 50, 5000)));
      }
    } catch (err) {
      console.error("TTS error:", err);
    }
  }, []);

  // Handle speech chunk from recorder
  const handleSpeechChunk = useCallback(
    async (audioBlob: Blob) => {
      if (isProcessingRef.current) return;
      isProcessingRef.current = true;

      try {
        setState("processing");
        setRecorderState("processing");

        // Transcribe
        const text = await transcribe(audioBlob);
        if (!text || text.trim().length === 0) {
          setState("listening");
          setRecorderState("listening");
          return;
        }

        setTranscribedText(text);

        // Check for wake word — if wake word is required but not present, stay listening
        const wakeResult = checkWakeWord(text);
        setWakeWord(wakeResult);

        // If no command after wake word (e.g. just "Hey Jarvis"), keep listening
        let command = text.trim();
        if (wakeResult.isWakeWord) {
          command = wakeResult.command.trim();
          if (!command) {
            setState("listening");
            setRecorderState("listening");
            await speak("Yes?");
            return;
          }
        }

        // Always process the command — wake word is optional for reply
        // (keeps voice working even if user doesn't say "Hey Jarvis")
        setAssistantResponse("");
        await onCommand(command);
        // Speak acknowledgment; if TTS fails we still show text
        try {
          await speak(`Processing: ${command.slice(0, 80)}`);
        } catch {
          // Fallback: show text response even if TTS fails
          setAssistantResponse(`Processing: ${command.slice(0, 80)}`);
          await new Promise((r) => setTimeout(r, 800));
        }

        setState("listening");
        setRecorderState("listening");
      } catch (err) {
        console.error("Speech processing error:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
        setState("error");
        // Auto-recover to listening after error
        setTimeout(() => {
          setState("listening");
          setRecorderState("listening");
        }, 1200);
      } finally {
        isProcessingRef.current = false;
      }
    },
    [transcribe, speak, onCommand]
  );

  // Start listening
  const startListening = useCallback(async () => {
    try {
      setError(null);

      const recorder = new ContinuousRecorder({
        onSpeechChunk: handleSpeechChunk,
        speechThreshold: 0.02,
        silenceDuration: 1500,
        maxChunkDuration: 30000,
      });

      await recorder.start();
      recorderRef.current = recorder;
      setRecorderState("listening");
      setState("listening");
      setIsEnabled(true);
    } catch (err) {
      console.error("Failed to start recorder:", err);
      setError(err instanceof Error ? err.message : "Failed to access microphone");
      setState("error");
    }
  }, [handleSpeechChunk]);

  // Stop listening
  const stopListening = useCallback(() => {
    if (recorderRef.current) {
      recorderRef.current.stop();
      recorderRef.current = null;
    }
    setRecorderState("idle");
    setState("idle");
    setIsEnabled(false);
  }, []);

  // Send text command directly
  const sendCommand = useCallback(
    async (text: string) => {
      setState("processing");
      setTranscribedText(text);
      try {
        await onCommand(text);
        setState("listening");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Command failed");
        setState("error");
      }
    },
    [onCommand]
  );

  // Capture and analyze screenshot
  const captureAndAnalyze = useCallback(async () => {
    try {
      setState("processing");

      // Use browser screenshot API
      if (!navigator.mediaDevices?.getDisplayMedia) {
        throw new Error("Screen capture not supported");
      }

      const stream = await navigator.mediaDevices.getDisplayMedia({
        audio: false,
        video: true,
      });

      const video = document.createElement("video");
      video.muted = true;
      video.playsInline = true;
      video.srcObject = stream;
      await video.play();

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Failed to get canvas context");

      ctx.drawImage(video, 0, 0);

      // Stop stream
      for (const track of stream.getTracks()) {
        track.stop();
      }
      video.pause();
      video.srcObject = null;

      // Convert to base64
      const dataUrl = canvas.toDataURL("image/png");

      // Send to vision API
      const response = await fetch("/api/vision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: dataUrl,
          prompt: "Describe what you see on this screen in detail. If there's code, analyze it. If there's an error, explain it.",
        }),
      });

      if (!response.ok) {
        throw new Error("Vision analysis failed");
      }

      const data = await response.json();
      setAssistantResponse(data.analysis);
      setTranscribedText("[Screenshot captured]");
      setState("listening");
    } catch (err) {
      console.error("Screenshot error:", err);
      setError(err instanceof Error ? err.message : "Screenshot failed");
      setState("error");
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (recorderRef.current) {
        recorderRef.current.stop();
      }
    };
  }, []);

  const value = useMemo<VoiceAssistantContext>(
    () => ({
      state,
      recorderState,
      transcribedText,
      assistantResponse,
      wakeWord,
      error,
      startListening,
      stopListening,
      sendCommand,
      captureAndAnalyze,
      isEnabled,
      setEnabled: (enabled: boolean) => {
        if (enabled) {
          startListening();
        } else {
          stopListening();
        }
      },
    }),
    [
      state,
      recorderState,
      transcribedText,
      assistantResponse,
      wakeWord,
      error,
      startListening,
      stopListening,
      sendCommand,
      captureAndAnalyze,
      isEnabled,
    ]
  );

  return (
    <VoiceAssistantContext.Provider value={value}>
      {children}
    </VoiceAssistantContext.Provider>
  );
}
