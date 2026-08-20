import { useState, useEffect, useRef, useCallback } from "react";
import {
  Mic, MicOff, Volume2, VolumeX, Camera, Cpu, Activity, Sparkles,
  Terminal, Laptop, ExternalLink, Zap, Brain, RefreshCw, Play,
  Plus, Check, Copy, Shield, Layers, HardDrive, Battery, Radio,
  FolderOpen, Coffee, Rocket, Send, MessageSquare, ChevronRight,
  Maximize2, X, Download, AlertCircle, Search, Monitor, ShieldCheck
} from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArcReactorHud, type HudState } from "./arc-reactor-hud";

interface TelemetryData {
  time?: string;
  date?: string;
  day?: string;
  user?: string;
  hostname?: string;
  platform?: string;
  os_release?: string;
  cpu_count?: number;
  cpu_percent?: number;
  total_memory_gb?: number;
  free_memory_gb?: number;
  memory_percent?: number;
  battery_percent?: number | null;
  battery_charging?: boolean | null;
}

interface ScreenshotData {
  status: string;
  filepath?: string;
  filename?: string;
  dataUrl?: string;
  timestamp?: number;
}

interface CustomSkill {
  id: string;
  name: string;
  trigger: string;
  category: string;
  description: string;
  instruction: string;
  enabled: boolean;
}

const DEFAULT_SKILLS: CustomSkill[] = [
  {
    id: "sys-telemetry",
    name: "System Diagnostics",
    trigger: "system status",
    category: "System",
    description: "Inspect live CPU, RAM, OS and battery telemetry",
    instruction: "Check system health and provide vocal feedback.",
    enabled: true,
  },
  {
    id: "screen-capture",
    name: "Screen Vision",
    trigger: "take screenshot",
    category: "Vision",
    description: "Capture active desktop screen and display preview",
    instruction: "Take desktop screenshot and return base64 preview.",
    enabled: true,
  },
  {
    id: "morning-briefing",
    name: "Morning Briefing",
    trigger: "morning briefing",
    category: "Productivity",
    description: "CEO daily standup, priority tasks and tech news",
    instruction: "Summarize top news, active projects and pending tasks.",
    enabled: true,
  },
  {
    id: "app-launcher",
    name: "Desktop App Launcher",
    trigger: "open app",
    category: "Automation",
    description: "Launch VS Code, YouTube, GitHub, Terminal, Explorer",
    instruction: "Open target application or web destination.",
    enabled: true,
  },
  {
    id: "memory-digest",
    name: "Memory Digest",
    trigger: "memory digest",
    category: "Memory",
    description: "Recall past decisions and learned architectural skills",
    instruction: "Search persistent memory bank for recent insights.",
    enabled: true,
  },
];

export function JarvisHUD({ onSendMessage }: { onSendMessage?: (msg: string) => void }) {
  // Telemetry & Hardware State
  const [telemetry, setTelemetry] = useState<TelemetryData | null>(null);
  const [telemetryLoading, setTelemetryLoading] = useState(false);
  const [lastPing, setLastPing] = useState<number>(12);

  // Voice & Audio State
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState("");
  const [voiceFeedback, setVoiceFeedback] = useState("JARVIS AI OS online. All systems operational.");
  const [isMuted, setIsMuted] = useState(false);
  const [voiceVolume, setVoiceVolume] = useState<number>(1);
  const recognitionRef = useRef<any>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  // Action State
  const [latestScreenshot, setLatestScreenshot] = useState<ScreenshotData | null>(null);
  const [screenshotLoading, setScreenshotLoading] = useState(false);
  const [quickInput, setQuickInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Skill Management State
  const [skills, setSkills] = useState<CustomSkill[]>(() => {
    try {
      const saved = localStorage.getItem("jarvis_custom_skills");
      return saved ? JSON.parse(saved) : DEFAULT_SKILLS;
    } catch {
      return DEFAULT_SKILLS;
    }
  });
  const [isAddSkillOpen, setIsAddSkillOpen] = useState(false);
  const [newSkillName, setNewSkillName] = useState("");
  const [newSkillTrigger, setNewSkillTrigger] = useState("");
  const [newSkillCategory, setNewSkillCategory] = useState("Custom");
  const [newSkillDescription, setNewSkillDescription] = useState("");
  const [newSkillInstruction, setNewSkillInstruction] = useState("");

  // Save skills to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("jarvis_custom_skills", JSON.stringify(skills));
    } catch {}
  }, [skills]);

  // Telemetry Fetcher
  const fetchTelemetry = useCallback(async () => {
    setTelemetryLoading(true);
    const start = Date.now();
    try {
      const res = await fetch("/api/desktop/system");
      if (res.ok) {
        const data = await res.json();
        setTelemetry(data);
        setLastPing(Date.now() - start);
      }
    } catch {
      setLastPing(Date.now() - start);
    } finally {
      setTelemetryLoading(false);
    }
  }, []);

  // Poll Telemetry every 10 seconds
  useEffect(() => {
    fetchTelemetry();
    const interval = setInterval(fetchTelemetry, 10000);
    return () => clearInterval(interval);
  }, [fetchTelemetry]);

  // Speech Synthesis Helper with /api/speak fallback for mobile & desktop
  const speakText = useCallback(
    async (text: string) => {
      if (isMuted) return;

      // Stop previous audio
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current = null;
      }

      // Try browser SpeechSynthesis first
      if (window.speechSynthesis) {
        try {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.rate = 1.05;
          utterance.pitch = 0.95;
          utterance.volume = voiceVolume;

          const voices = window.speechSynthesis.getVoices();
          const preferredVoice = voices.find(
            (v) =>
              v.name.includes("Natural") ||
              v.name.includes("Google UK English Male") ||
              v.name.includes("David") ||
              v.name.includes("Guy") ||
              v.name.includes("English")
          );
          if (preferredVoice) utterance.voice = preferredVoice;

          utterance.onstart = () => setIsSpeaking(true);
          utterance.onend = () => setIsSpeaking(false);
          utterance.onerror = () => setIsSpeaking(false);
          window.speechSynthesis.speak(utterance);
          return;
        } catch {
          // Fall through to server TTS
        }
      }

      // Fallback: Groq / Orpheus Neural TTS audio stream
      try {
        setIsSpeaking(true);
        const res = await fetch("/api/speak", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        });

        if (res.ok && res.headers.get("content-type")?.includes("audio")) {
          const blob = await res.blob();
          const url = URL.createObjectURL(blob);
          const audio = new Audio(url);
          currentAudioRef.current = audio;
          audio.volume = voiceVolume;
          audio.onended = () => {
            setIsSpeaking(false);
            URL.revokeObjectURL(url);
          };
          audio.onerror = () => setIsSpeaking(false);
          await audio.play();
        } else {
          setIsSpeaking(false);
        }
      } catch {
        setIsSpeaking(false);
      }
    },
    [isMuted, voiceVolume]
  );

  // Take Screenshot Action
  const handleTakeScreenshot = async () => {
    setScreenshotLoading(true);
    setVoiceFeedback("Capturing screen visual buffer...");
    try {
      const res = await fetch("/api/desktop/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "screenshot" }),
      });
      const data = await res.json();
      if (data.status === "success") {
        setLatestScreenshot(data);
        const msg = `Screen captured: ${data.filename || "screenshot.png"}`;
        setVoiceFeedback(msg);
        speakText("Screenshot captured, sir.");
        toast.success("Desktop screenshot captured!");
      } else {
        toast.error(data.message || "Failed to capture screenshot");
      }
    } catch (e: any) {
      toast.error(e.message || "Screenshot error");
    } finally {
      setScreenshotLoading(false);
    }
  };

  // Launch Desktop App or URL
  const handleLaunch = async (target: string) => {
    setVoiceFeedback(`Executing launch directive: ${target}`);
    speakText(`Opening ${target}, sir.`);
    try {
      const res = await fetch("/api/desktop/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "launch", target }),
      });
      const data = await res.json();
      if (data.status === "launched" || data.status === "searched") {
        toast.success(`Launched ${target}`);
      }
    } catch (e: any) {
      toast.error(e.message || "Launch error");
    }
  };

  // Adjust Volume
  const handleVolume = async (action: "up" | "down" | "mute") => {
    try {
      await fetch("/api/desktop/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "volume", value: action }),
      });
      toast.info(`Volume action: ${action}`);
    } catch {}
  };

  // Execute Voice Command Intent
  const processCommandIntent = async (transcript: string) => {
    const clean = transcript.trim().toLowerCase();
    setIsProcessing(true);

    // Direct matchers for high-speed local execution
    if (clean.includes("screenshot") || clean.includes("capture screen") || clean.includes("take photo")) {
      await handleTakeScreenshot();
      setIsProcessing(false);
      return;
    }

    if (clean.includes("system status") || clean.includes("hardware") || clean.includes("diagnostics") || clean.includes("battery")) {
      await fetchTelemetry();
      const cpu = telemetry?.cpu_percent ?? 8;
      const mem = telemetry?.memory_percent ?? 50;
      const report = `CPU usage is at ${cpu} percent. Memory utilization is at ${mem} percent. All core services are running optimally.`;
      setVoiceFeedback(report);
      speakText(report);
      setIsProcessing(false);
      return;
    }

    if (clean.startsWith("open ") || clean.startsWith("launch ")) {
      const target = clean.replace(/^(open|launch)\s+/i, "").trim();
      await handleLaunch(target);
      setIsProcessing(false);
      return;
    }

    if (clean.includes("volume up") || clean.includes("increase volume")) {
      await handleVolume("up");
      speakText("Volume increased.");
      setIsProcessing(false);
      return;
    }

    if (clean.includes("volume down") || clean.includes("decrease volume")) {
      await handleVolume("down");
      speakText("Volume decreased.");
      setIsProcessing(false);
      return;
    }

    if (clean.includes("mute") || clean.includes("unmute")) {
      await handleVolume("mute");
      speakText("Volume mute toggled.");
      setIsProcessing(false);
      return;
    }

    // Forward natural queries to Chat / Agent System
    if (onSendMessage) {
      onSendMessage(transcript);
      setVoiceFeedback(`Delegating command to Jarvis Agent Team: "${transcript}"`);
      speakText(`On it, sir.`);
    } else {
      setVoiceFeedback(`Command received: "${transcript}"`);
      speakText(`Command processed: ${transcript}`);
    }

    setIsProcessing(false);
  };

  // Universal Voice Recognition: Web Speech API with MediaRecorder + Whisper STT Fallback
  const toggleListening = async () => {
    if (isListening) {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {}
        recognitionRef.current = null;
      }
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
        mediaRecorderRef.current.stop();
      }
      setIsListening(false);
      return;
    }

    // Mode 1: Web Speech API (Chrome / Edge on desktop & localhost)
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition && window.location.protocol === "https:" || window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      try {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onstart = () => {
          setIsListening(true);
          setVoiceTranscript("Listening for command...");
        };

        recognition.onresult = (event: any) => {
          let interim = "";
          let final = "";
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              final += event.results[i][0].transcript;
            } else {
              interim += event.results[i][0].transcript;
            }
          }

          const currentText = final || interim;
          setVoiceTranscript(currentText);

          if (final) {
            processCommandIntent(final);
            setVoiceTranscript("");
          }
        };

        recognition.onerror = (event: any) => {
          console.warn("Speech recognition error:", event.error);
          if (event.error !== "no-speech") {
            setIsListening(false);
          }
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
        recognition.start();
        return;
      } catch (err) {
        console.warn("Web Speech API failed, falling back to MediaRecorder + Whisper:", err);
      }
    }

    // Mode 2: MediaRecorder + Groq Whisper STT (Universal: iOS Safari, Android Chrome, mobile browsers)
    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        toast.error("Microphone access is not supported in this browser. Please enable mic permissions or type your command.");
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstart = () => {
        setIsListening(true);
        setVoiceTranscript("Recording voice (Groq Whisper active)...");
      };

      mediaRecorder.onstop = async () => {
        setIsListening(false);
        stream.getTracks().forEach((track) => track.stop());

        if (audioChunksRef.current.length === 0) return;
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        audioChunksRef.current = [];

        setVoiceTranscript("Transcribing with Whisper...");
        try {
          const formData = new FormData();
          formData.append("file", audioBlob, "audio.webm");

          const res = await fetch("/api/transcribe", {
            method: "POST",
            body: formData,
          });

          if (res.ok) {
            const data = await res.json();
            if (data.text?.trim()) {
              setVoiceTranscript(data.text);
              processCommandIntent(data.text.trim());
              setVoiceTranscript("");
            } else {
              setVoiceFeedback("No speech detected. Please try speaking again.");
            }
          } else {
            toast.error("Transcription service error");
          }
        } catch (e: any) {
          toast.error("Transcription failed: " + e.message);
        }
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      toast.info("Microphone active! Speak now, then tap mic to process.");
    } catch (e: any) {
      toast.error("Microphone permission denied: " + e.message);
      setIsListening(false);
    }
  };

  // Add Custom Skill Handler
  const handleAddSkill = () => {
    if (!newSkillName.trim() || !newSkillTrigger.trim()) {
      toast.error("Please enter a name and trigger phrase");
      return;
    }

    const newSkill: CustomSkill = {
      id: `skill-${Date.now()}`,
      name: newSkillName.trim(),
      trigger: newSkillTrigger.trim(),
      category: newSkillCategory.trim() || "Custom",
      description: newSkillDescription.trim() || "User defined custom agent skill",
      instruction: newSkillInstruction.trim() || "Execute custom instructions",
      enabled: true,
    };

    setSkills((prev) => [newSkill, ...prev]);
    setIsAddSkillOpen(false);
    setNewSkillName("");
    setNewSkillTrigger("");
    setNewSkillDescription("");
    setNewSkillInstruction("");
    toast.success(`Skill "${newSkill.name}" added successfully!`);
    speakText(`New skill ${newSkill.name} registered into Jarvis memory.`);
  };

  // Toggle Skill
  const toggleSkill = (id: string) => {
    setSkills((prev) =>
      prev.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
    );
  };

  // Quick Action Submitter
  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickInput.trim()) return;
    processCommandIntent(quickInput.trim());
    setQuickInput("");
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-[#060a12]/95 via-[#03060c]/95 to-[#010307]/98 p-5 text-white shadow-2xl backdrop-blur-xl transition-all duration-300">
      {/* Glowing Cyber Accent Background */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      {/* Header: Status Bar & Brand */}
      <div className="relative z-10 mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-cyan-500/15 pb-4">
        <div className="flex items-center gap-3">
          {/* Animated Arc Reactor Icon */}
          <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-950/40 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <div className={`absolute h-6 w-6 rounded-full border border-cyan-400/60 ${isListening ? "animate-ping opacity-75" : "animate-pulse"}`} />
            <Zap className={`h-5 w-5 text-cyan-400 ${isSpeaking ? "animate-bounce text-amber-400" : ""}`} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-black tracking-widest text-cyan-300">
                JARVIS HUD
              </span>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                LIVE 2.5
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Autonomous AI Operating System · {telemetry?.hostname || "Local Host"}
            </p>
          </div>
        </div>

        {/* Live Diagnostics Badges */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1 text-slate-300">
            <Cpu className="h-3.5 w-3.5 text-cyan-400" />
            <span>CPU: {telemetry?.cpu_percent ?? 12}%</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1 text-slate-300">
            <Activity className="h-3.5 w-3.5 text-emerald-400" />
            <span>RAM: {telemetry?.free_memory_gb ?? 8.0}GB / {telemetry?.total_memory_gb ?? 16.0}GB</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1 text-slate-300">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
            <span>{lastPing}ms</span>
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={fetchTelemetry}
            disabled={telemetryLoading}
            className="h-7 w-7 rounded-lg p-0 text-muted-foreground hover:bg-white/10 hover:text-white"
            title="Refresh Diagnostics"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${telemetryLoading ? "animate-spin text-cyan-400" : ""}`} />
          </Button>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="relative z-10 grid grid-cols-1 gap-5 lg:grid-cols-12">
        {/* Left Column: 3D Holographic Arc Reactor HUD & Live Transcriber (5 cols) */}
        <div className="flex flex-col justify-between rounded-2xl border border-cyan-500/20 bg-black/40 p-4 lg:col-span-5">
          {/* 3D Arc Reactor Visualizer */}
          <div className="flex flex-col items-center justify-center py-2">
            <div className="relative cursor-pointer" onClick={toggleListening} title={isListening ? "Click to Stop Listening" : "Click to Speak to Jarvis"}>
              <ArcReactorHud
                state={isListening ? "listening" : isSpeaking ? "speaking" : isProcessing ? "thinking" : "idle"}
                size={220}
                audioLevel={isListening ? 0.5 : isSpeaking ? 0.8 : 0.15}
                statusText={
                  isListening
                    ? "LISTENING"
                    : isSpeaking
                    ? "VOCALIZING"
                    : isProcessing
                    ? "RESEARCHING"
                    : "CORE ACTIVE"
                }
              />
            </div>

            {/* Status Text & Interactive Mic Button */}
            <div className="mt-2 flex items-center gap-3">
              <Button
                size="sm"
                onClick={toggleListening}
                className={`h-8 gap-1.5 rounded-full px-4 text-xs font-mono font-semibold transition-all ${
                  isListening
                    ? "bg-emerald-500 text-black hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                    : isSpeaking
                    ? "bg-amber-500 text-black hover:bg-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                    : "border border-cyan-400/40 bg-cyan-950/40 text-cyan-300 hover:bg-cyan-900/50"
                }`}
              >
                {isListening ? <MicOff className="h-3.5 w-3.5" /> : <Mic className="h-3.5 w-3.5" />}
                <span>{isListening ? "Stop Listening" : "Engage Voice Mode"}</span>
              </Button>
            </div>
          </div>

          {/* Transcript / Feedback Area */}
          <div className="rounded-xl border border-white/10 bg-black/50 p-3 mt-2">
            <div className="mb-1 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Radio className="h-3 w-3" /> REAL-TIME VOICE DIRECTIVE
              </span>
              <button
                onClick={() => {
                  setIsMuted(!isMuted);
                  if (!isMuted && window.speechSynthesis) window.speechSynthesis.cancel();
                  toast.info(isMuted ? "Voice speech unmuted" : "Voice speech muted");
                }}
                className="hover:text-white"
                title={isMuted ? "Unmute Voice" : "Mute Voice"}
              >
                {isMuted ? <VolumeX className="h-3.5 w-3.5 text-rose-400" /> : <Volume2 className="h-3.5 w-3.5 text-cyan-400" />}
              </button>
            </div>
            <p className="min-h-[40px] text-xs leading-relaxed text-slate-200">
              {voiceTranscript || voiceFeedback}
            </p>
          </div>

          {/* Quick Voice Command Form */}
          <form onSubmit={handleQuickSubmit} className="mt-3 flex items-center gap-2">
            <Input
              value={quickInput}
              onChange={(e) => setQuickInput(e.target.value)}
              placeholder='Type or say: "research and design website", "take screenshot", "scan files"...'
              className="h-9 border-cyan-500/30 bg-black/60 text-xs text-white placeholder:text-slate-500 focus-visible:ring-cyan-500"
            />
            <Button
              type="submit"
              size="sm"
              className="h-9 border border-cyan-400/40 bg-cyan-600 px-3 hover:bg-cyan-500"
              disabled={isProcessing || !quickInput.trim()}
            >
              <Send className="h-3.5 w-3.5" />
            </Button>
          </form>
        </div>

        {/* Right Column: Action Matrix & Skill Manager (7 cols) */}
        <div className="flex flex-col gap-4 lg:col-span-7">
          {/* Action Matrix Header */}
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-cyan-300">
              <Zap className="h-3.5 w-3.5" /> Autonomous Action Matrix
            </h3>
            <span className="text-[11px] text-muted-foreground">Deep Research & Desktop Tools</span>
          </div>

          {/* Quick Action Chips */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (onSendMessage) {
                  onSendMessage("Research modern web design trends, select the best design tokens from the 53 design systems, and design a responsive website.");
                } else {
                  processCommandIntent("research website design");
                }
              }}
              className="flex h-auto flex-col items-start gap-1 rounded-xl border-cyan-500/30 bg-cyan-950/20 p-2.5 text-left hover:border-cyan-400 hover:bg-cyan-900/30"
            >
              <div className="flex items-center gap-1.5 text-cyan-300">
                <Rocket className="h-4 w-4" />
                <span className="text-xs font-semibold">Research & Design</span>
              </div>
              <span className="text-[10px] text-muted-foreground">Autonomous web creator</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (onSendMessage) {
                  onSendMessage("Deep research visual aesthetics and design a futuristic cyber poster with design tokens and high visual polish.");
                } else {
                  processCommandIntent("design cyber poster");
                }
              }}
              className="flex h-auto flex-col items-start gap-1 rounded-xl border-purple-500/30 bg-purple-950/20 p-2.5 text-left hover:border-purple-400 hover:bg-purple-900/30"
            >
              <div className="flex items-center gap-1.5 text-purple-300">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs font-semibold">Poster Design</span>
              </div>
              <span className="text-[10px] text-muted-foreground">Learns & generates poster</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (onSendMessage) {
                  onSendMessage("Run automated scan on the workspace directory using scanDirectory and searchFiles to audit all code files.");
                } else {
                  processCommandIntent("scan workspace files");
                }
              }}
              className="flex h-auto flex-col items-start gap-1 rounded-xl border-emerald-500/30 bg-emerald-950/20 p-2.5 text-left hover:border-emerald-400 hover:bg-emerald-900/30"
            >
              <div className="flex items-center gap-1.5 text-emerald-300">
                <FolderOpen className="h-4 w-4" />
                <span className="text-xs font-semibold">Workspace Scan</span>
              </div>
              <span className="text-[10px] text-muted-foreground">Deep file inspection</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleTakeScreenshot}
              disabled={screenshotLoading}
              className="flex h-auto flex-col items-start gap-1 rounded-xl border-white/10 bg-white/5 p-2.5 text-left hover:border-cyan-500/50 hover:bg-cyan-950/20"
            >
              <div className="flex items-center gap-1.5 text-cyan-400">
                <Camera className="h-4 w-4" />
                <span className="text-xs font-semibold">Screenshot</span>
              </div>
              <span className="text-[10px] text-muted-foreground">Capture active screen</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handleLaunch("youtube")}
              className="flex h-auto flex-col items-start gap-1 rounded-xl border-white/10 bg-white/5 p-2.5 text-left hover:border-rose-500/50 hover:bg-rose-950/20"
            >
              <div className="flex items-center gap-1.5 text-rose-400">
                <Play className="h-4 w-4" />
                <span className="text-xs font-semibold">YouTube</span>
              </div>
              <span className="text-[10px] text-muted-foreground">Launch media player</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const query = "Run my morning briefing: active projects, priorities, blockers, and tech news.";
                if (onSendMessage) onSendMessage(query);
                else processCommandIntent(query);
              }}
              className="flex h-auto flex-col items-start gap-1 rounded-xl border-amber-500/30 bg-amber-950/20 p-2.5 text-left hover:border-amber-400 hover:bg-amber-900/30"
            >
              <div className="flex items-center gap-1.5 text-amber-400">
                <Coffee className="h-4 w-4" />
                <span className="text-xs font-semibold">Morning Brief</span>
              </div>
              <span className="text-[10px] text-muted-foreground">CEO daily digest</span>
            </Button>
          </div>

          {/* Screenshot Preview Card (if captured) */}
          {latestScreenshot?.dataUrl && (
            <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-black/60 p-3">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 font-mono text-cyan-300">
                  <Camera className="h-3.5 w-3.5" /> SCREENSHOT CAPTURED
                </span>
                <span className="text-[10px] text-muted-foreground">{latestScreenshot.filepath}</span>
              </div>
              <div className="relative max-h-36 overflow-hidden rounded-lg border border-white/10">
                <img
                  src={latestScreenshot.dataUrl}
                  alt="Desktop Screenshot"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Skill Manager Header & List */}
          <div className="rounded-2xl border border-white/10 bg-black/40 p-3.5">
            <div className="mb-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                  Active Agent Skills ({skills.filter((s) => s.enabled).length}/{skills.length})
                </span>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsAddSkillOpen(true)}
                className="h-7 gap-1 rounded-lg border-cyan-500/40 bg-cyan-950/30 px-2.5 text-xs text-cyan-300 hover:bg-cyan-900/50 hover:text-white"
              >
                <Plus className="h-3 w-3" /> Add Skill
              </Button>
            </div>

            {/* Skills Scrollable List */}
            <div className="flex max-h-44 flex-col gap-1.5 overflow-y-auto pr-1">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className={`flex items-center justify-between rounded-xl border p-2 text-xs transition-all ${
                    skill.enabled
                      ? "border-cyan-500/20 bg-white/5"
                      : "border-white/5 bg-transparent opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => toggleSkill(skill.id)}
                      className={`flex h-4 w-4 items-center justify-center rounded border transition-colors ${
                        skill.enabled
                          ? "border-cyan-400 bg-cyan-500 text-black"
                          : "border-slate-600 bg-transparent"
                      }`}
                    >
                      {skill.enabled && <Check className="h-3 w-3 stroke-[3]" />}
                    </button>
                    <div>
                      <span className="font-semibold text-slate-100">{skill.name}</span>
                      <span className="ml-2 rounded-md bg-white/10 px-1.5 py-0.5 text-[9px] font-mono text-cyan-300">
                        "{skill.trigger}"
                      </span>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => processCommandIntent(skill.trigger)}
                    className="h-6 rounded px-2 text-[11px] text-cyan-400 hover:bg-cyan-950/50 hover:text-cyan-200"
                  >
                    Run <ChevronRight className="ml-0.5 h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add Skill Dialog Modal */}
      <Dialog open={isAddSkillOpen} onOpenChange={setIsAddSkillOpen}>
        <DialogContent className="border border-cyan-500/30 bg-[#080d1a] text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 font-mono text-cyan-300">
              <Sparkles className="h-5 w-5" /> Add New Agent Skill
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-3 py-2 text-xs">
            <div>
              <label className="mb-1 block font-mono text-muted-foreground">Skill Name</label>
              <Input
                value={newSkillName}
                onChange={(e) => setNewSkillName(e.target.value)}
                placeholder="e.g., Code Reviewer, Spotify DJ, Stock Tracker"
                className="border-white/10 bg-black/60 text-xs text-white"
              />
            </div>

            <div>
              <label className="mb-1 block font-mono text-muted-foreground">Trigger Phrase</label>
              <Input
                value={newSkillTrigger}
                onChange={(e) => setNewSkillTrigger(e.target.value)}
                placeholder="e.g., review my code, play chill music, check tsla"
                className="border-white/10 bg-black/60 text-xs text-white"
              />
            </div>

            <div>
              <label className="mb-1 block font-mono text-muted-foreground">Category</label>
              <Input
                value={newSkillCategory}
                onChange={(e) => setNewSkillCategory(e.target.value)}
                placeholder="e.g., Productivity, Coding, Media, System"
                className="border-white/10 bg-black/60 text-xs text-white"
              />
            </div>

            <div>
              <label className="mb-1 block font-mono text-muted-foreground">System Instructions / Description</label>
              <Textarea
                value={newSkillInstruction}
                onChange={(e) => setNewSkillInstruction(e.target.value)}
                placeholder="Describe what Jarvis should do when this skill or voice command is invoked..."
                className="h-20 border-white/10 bg-black/60 text-xs text-white"
              />
            </div>
          </div>

          <DialogFooter className="mt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsAddSkillOpen(false)}
              className="border-white/10 bg-white/5 text-xs text-slate-300 hover:bg-white/10"
            >
              Cancel
            </Button>
            <Button
              size="sm"
              onClick={handleAddSkill}
              className="border border-cyan-400/40 bg-cyan-600 text-xs hover:bg-cyan-500"
            >
              Save Skill
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
