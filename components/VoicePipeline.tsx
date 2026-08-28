"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, MicOff, Volume2, VolumeX, Sparkles, Terminal, Activity, CheckCircle, Zap, Radio } from "lucide-react";

export interface VoicePipelineProps {
  onStateChange?: (state: "idle" | "thinking" | "speaking") => void;
  onTranscript?: (text: string) => void;
}

export default function VoicePipeline({ onStateChange, onTranscript }: VoicePipelineProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [statusMessage, setStatusMessage] = useState("Voice Pipeline Standby (Tap to Speak)");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recog = new SpeechRecognition();
      recog.continuous = true;
      recog.interimResults = true;
      recog.lang = "en-US";

      recog.onstart = () => {
        setIsListening(true);
        setStatusMessage("Listening... Speak your command");
        onStateChange?.("thinking");
      };

      recog.onresult = async (event: any) => {
        let current = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcriptPiece = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            handleVoiceCommand(transcriptPiece);
          } else {
            current += transcriptPiece;
          }
        }
        setTranscript(current);
      };

      recog.onerror = (err: any) => {
        console.warn("Speech recognition error:", err);
        setStatusMessage(`Mic error: ${err.error || "unknown"}`);
        setIsListening(false);
        onStateChange?.("idle");
      };

      recog.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recog;
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Web Speech API is not supported in this browser. Please use Chrome, Edge, or Safari.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      setStatusMessage("Voice Standby");
      onStateChange?.("idle");
    } else {
      try {
        recognitionRef.current.start();
      } catch (e) {
        recognitionRef.current.stop();
        setTimeout(() => recognitionRef.current.start(), 200);
      }
    }
  };

  const handleVoiceCommand = async (cmd: string) => {
    const clean = cmd.trim();
    if (!clean) return;

    setTranscript(clean);
    onTranscript?.(clean);
    setStatusMessage(`Processing: "${clean}"`);
    onStateChange?.("thinking");

    const lower = clean.toLowerCase();

    // Check for Device / App Launch commands
    let targetApp = "";
    if (lower.includes("open code") || lower.includes("open vscode") || lower.includes("launch vs code")) targetApp = "vscode";
    else if (lower.includes("open terminal") || lower.includes("launch powershell") || lower.includes("open command")) targetApp = "terminal";
    else if (lower.includes("open chrome") || lower.includes("launch browser")) targetApp = "chrome";
    else if (lower.includes("open explorer") || lower.includes("open files")) targetApp = "explorer";
    else if (lower.includes("open slack")) targetApp = "slack";
    else if (lower.includes("open discord")) targetApp = "discord";
    else if (lower.includes("open calc") || lower.includes("open calculator")) targetApp = "calculator";

    if (targetApp) {
      try {
        const res = await fetch("/api/os", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "launch_app", appName: targetApp }),
        });
        const d = await res.json();
        const msg = d.message || `Launched ${targetApp}`;
        speak(msg);
        setStatusMessage(msg);
        return;
      } catch (e) {
        console.warn("OS launch error:", e);
      }
    }

    // Default: Route command to AI Router
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: clean,
          model: "gemini-2.0-flash",
          systemPrompt: "You are the JARVIS Autonomous AI Voice Companion. Give concise, authoritative, sub-2-sentence verbal replies.",
        }),
      });

      const data = await res.json();
      const reply = data.reply || "Command executed.";
      setStatusMessage(reply);
      speak(reply);
    } catch (err: any) {
      setStatusMessage("Failed to process command.");
      onStateChange?.("idle");
    }
  };

  const speak = (text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      onStateChange?.("idle");
      return;
    }

    window.speechSynthesis.cancel();
    const clean = text.replace(/[*#`_\[\]]/g, "").slice(0, 200);
    const utter = new SpeechSynthesisUtterance(clean);
    utter.rate = 1.05;
    utter.pitch = 1.0;

    utter.onstart = () => {
      setIsSpeaking(true);
      onStateChange?.("speaking");
    };

    utter.onend = () => {
      setIsSpeaking(false);
      onStateChange?.("idle");
    };

    window.speechSynthesis.speak(utter);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: "clamp(16px, 3vw, 40px)",
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      {/* Live Voice Status Pill */}
      <div
        style={{
          background: "rgba(5, 12, 26, 0.88)",
          backdropFilter: "blur(18px)",
          border: `1px solid ${isListening ? "#00e5ff" : "rgba(0, 229, 255, 0.25)"}`,
          borderRadius: 22,
          padding: "8px 16px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          boxShadow: isListening ? "0 0 28px rgba(0, 229, 255, 0.4)" : "0 0 14px rgba(0,0,0,0.5)",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          maxWidth: 340,
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: isListening ? "#00e5ff" : isSpeaking ? "#10b981" : "rgba(255,255,255,0.45)",
            boxShadow: isListening ? "0 0 12px #00e5ff" : isSpeaking ? "0 0 12px #10b981" : "none",
          }}
        />
        <span
          style={{
            fontSize: 11.5,
            fontWeight: 500,
            color: "rgba(240, 237, 232, 0.9)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontFamily: "var(--font-mono)",
          }}
        >
          {statusMessage}
        </span>
      </div>

      {/* Mic Trigger Button */}
      <button
        onClick={toggleListening}
        aria-label="Toggle Real-Time Voice Pipeline"
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: isListening
            ? "radial-gradient(circle, #00e5ff 0%, #0284c7 100%)"
            : "rgba(6, 16, 32, 0.85)",
          border: `1px solid ${isListening ? "#00e5ff" : "rgba(0, 229, 255, 0.4)"}`,
          color: isListening ? "#02050b" : "#00e5ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: isListening ? "0 0 30px #00e5ff" : "0 0 18px rgba(0, 229, 255, 0.2)",
          backdropFilter: "blur(16px)",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow = "0 0 32px rgba(0, 229, 255, 0.45)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = isListening ? "0 0 30px #00e5ff" : "0 0 18px rgba(0, 229, 255, 0.2)";
        }}
      >
        {isListening ? <Mic size={22} className="animate-pulse" /> : <Mic size={20} />}
      </button>
    </div>
  );
}
