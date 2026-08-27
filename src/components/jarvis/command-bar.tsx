import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic, MicOff, Send, Sparkles, X, ChevronUp,
  Search, Plus, Zap, BookOpen, Terminal, Folder,
  ArrowRight, Loader2,
} from "lucide-react";
import { toast } from "sonner";

// ── Types ──────────────────────────────────────────────────────────────────────
interface SlashCommand {
  cmd: string;
  label: string;
  description: string;
  icon: React.ElementType;
  action: (nav: ReturnType<typeof useNavigate>, arg?: string) => void;
}

interface CommandBarProps {
  onSubmit?: (text: string, mode: "chat" | "voice") => Promise<void> | void;
  placeholder?: string;
  className?: string;
}

// ── Slash Commands Registry ────────────────────────────────────────────────────
const SLASH_COMMANDS: SlashCommand[] = [
  {
    cmd: "/new",
    label: "New Chat",
    description: "Start a fresh conversation",
    icon: Plus,
    action: (nav) => nav({ to: "/console" }),
  },
  {
    cmd: "/open",
    label: "Open Project",
    description: "Go to a project by name",
    icon: Folder,
    action: (nav, arg) =>
      nav({ to: "/console/projects/$projectId", params: { projectId: arg || "wardelio" } }),
  },
  {
    cmd: "/design",
    label: "Design Gallery",
    description: "Browse design templates",
    icon: Sparkles,
    action: (nav) => nav({ to: "/console/design" }),
  },
  {
    cmd: "/recall",
    label: "Recall Memory",
    description: "Search your memory history",
    icon: BookOpen,
    action: (nav) => nav({ to: "/console" }),
  },
  {
    cmd: "/tools",
    label: "Tools",
    description: "Run a Mastra tool directly",
    icon: Terminal,
    action: (nav) => nav({ to: "/console/tools" }),
  },
  {
    cmd: "/run",
    label: "Run Command",
    description: "Execute a shell command",
    icon: Zap,
    action: (nav) => nav({ to: "/console/tools" }),
  },
  {
    cmd: "/search",
    label: "Search",
    description: "Search across all projects and chats",
    icon: Search,
    action: (nav) => nav({ to: "/console" }),
  },
];

// ── Voice hook ─────────────────────────────────────────────────────────────────
function useVoiceInput(onResult: (text: string) => void) {
  const [listening, setListening] = useState(false);
  const [supported] = useState(() => typeof window !== "undefined" && "webkitSpeechRecognition" in window);
  const recognitionRef = useRef<any>(null);

  const start = useCallback(() => {
    if (!supported) { toast.error("Voice not supported in this browser"); return; }
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    const rec = new SpeechRecognition();
    rec.continuous = false;
    rec.interimResults = false;
    rec.lang = "en-US";
    rec.onstart = () => setListening(true);
    rec.onend = () => setListening(false);
    rec.onerror = (e: any) => { setListening(false); if (e.error !== "aborted") toast.error("Voice error: " + e.error); };
    rec.onresult = (e: any) => {
      const transcript = Array.from(e.results as any[]).map((r: any) => r[0].transcript).join(" ").trim();
      if (transcript) onResult(transcript);
    };
    recognitionRef.current = rec;
    rec.start();
  }, [supported, onResult]);

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
    setListening(false);
  }, []);

  const toggle = useCallback(() => {
    if (listening) stop(); else start();
  }, [listening, start, stop]);

  return { listening, toggle, supported };
}

// ── Intent Router ──────────────────────────────────────────────────────────────
function detectIntent(text: string): "navigation" | "search" | "tool" | "chat" {
  const t = text.toLowerCase();
  if (/^(go to|open|navigate|show me|take me to|switch to)/i.test(t)) return "navigation";
  if (/^(search|find|look for|recall|remember)/i.test(t)) return "search";
  if (/^(run|execute|build|deploy|test|create file|delete)/i.test(t)) return "tool";
  return "chat";
}

// ── Main Component ─────────────────────────────────────────────────────────────
export function CommandBar({ onSubmit, placeholder, className = "" }: CommandBarProps) {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [suggestions, setSuggestions] = useState<SlashCommand[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);

  // ── Slash command matching ───────────────────────────────────────────────────
  useEffect(() => {
    if (value.startsWith("/")) {
      const query = value.slice(1).toLowerCase();
      const matches = SLASH_COMMANDS.filter(
        (c) => c.cmd.slice(1).startsWith(query) || c.label.toLowerCase().includes(query)
      );
      setSuggestions(matches);
      setSelectedSuggestion(0);
    } else {
      setSuggestions([]);
    }
  }, [value]);

  // ── Global keyboard shortcut: Cmd+K ─────────────────────────────────────────
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setExpanded(true);
      }
      if (e.key === "Escape") {
        setValue("");
        setSuggestions([]);
        setExpanded(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // ── Submit ───────────────────────────────────────────────────────────────────
  const handleSubmit = async (text: string, mode: "chat" | "voice" = "chat") => {
    if (!text.trim()) return;

    // Slash command execute
    if (text.startsWith("/")) {
      const parts = text.split(" ");
      const cmd = parts[0];
      const arg = parts.slice(1).join(" ");
      const matched = SLASH_COMMANDS.find((c) => c.cmd === cmd);
      if (matched) {
        matched.action(navigate, arg);
        setValue("");
        setSuggestions([]);
        return;
      }
    }

    // Intent detection
    const intent = detectIntent(text);
    if (intent === "navigation") {
      const t = text.toLowerCase();
      if (t.includes("project")) navigate({ to: "/console/projects" });
      else if (t.includes("design")) navigate({ to: "/console/design" });
      else if (t.includes("tool")) navigate({ to: "/console/tools" });
      else if (t.includes("setting")) navigate({ to: "/console/settings" });
      else if (t.includes("agent")) navigate({ to: "/console/agents" });
      else if (t.includes("dashboard") || t.includes("home")) navigate({ to: "/console" });
      setValue("");
      return;
    }

    // Delegate to parent (AI chat)
    if (onSubmit) {
      setLoading(true);
      try {
        await onSubmit(text, mode);
      } finally {
        setLoading(false);
      }
    } else {
      // Default: create new chat thread and navigate
      navigate({ to: "/console" });
      toast.info(`Sending: "${text.slice(0, 40)}${text.length > 40 ? "…" : ""}"`);
    }
    setValue("");
  };

  // ── Voice result handler ─────────────────────────────────────────────────────
  const onVoiceResult = useCallback((text: string) => {
    setValue(text);
    toast.success(`Heard: "${text.slice(0, 50)}"`);
    handleSubmit(text, "voice");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { listening, toggle: toggleVoice, supported: voiceSupported } = useVoiceInput(onVoiceResult);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (suggestions.length > 0) {
      if (e.key === "ArrowDown") { e.preventDefault(); setSelectedSuggestion((s) => (s + 1) % suggestions.length); }
      if (e.key === "ArrowUp") { e.preventDefault(); setSelectedSuggestion((s) => (s - 1 + suggestions.length) % suggestions.length); }
      if (e.key === "Tab" || e.key === "Enter") {
        e.preventDefault();
        const sug = suggestions[selectedSuggestion];
        if (e.key === "Tab") { setValue(sug.cmd + " "); }
        else { sug.action(navigate); setValue(""); setSuggestions([]); }
        return;
      }
    }
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(value);
    }
  };

  const quickActions = [
    { label: "/new-project", icon: Plus },
    { label: "/recall", icon: BookOpen },
    { label: "/run tests", icon: Terminal },
    { label: "/search", icon: Search },
  ];

  return (
    <div className={`relative ${className}`}>
      {/* Slash command suggestions */}
      <AnimatePresence>
        {suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute bottom-full mb-2 left-0 right-0 rounded-xl border border-white/10 bg-[#0f1318]/95 backdrop-blur-xl shadow-2xl overflow-hidden z-50"
          >
            {suggestions.map((s, i) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.cmd}
                  onClick={() => { s.action(navigate); setValue(""); setSuggestions([]); }}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                    i === selectedSuggestion ? "bg-cyan-500/10 text-cyan-300" : "text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0 text-cyan-400" />
                  <div>
                    <div className="text-[13px] font-medium">{s.cmd}</div>
                    <div className="text-[11px] text-zinc-500">{s.description}</div>
                  </div>
                  {i === selectedSuggestion && <ArrowRight className="ml-auto h-3.5 w-3.5 text-zinc-500" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main bar */}
      <div
        className={`flex flex-col gap-0 rounded-2xl border transition-all duration-200 ${
          expanded || listening
            ? "border-cyan-500/40 bg-[#0f1318] shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            : "border-white/[0.07] bg-[#0f1318]/80 backdrop-blur-md"
        }`}
      >
        {/* Input row */}
        <div className="flex items-center gap-2 px-4 py-3">
          {/* Voice indicator */}
          <AnimatePresence>
            {listening && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex items-center gap-1"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="h-3 w-0.5 rounded-full bg-cyan-400"
                    animate={{ scaleY: [1, 2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex-1 relative">
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => { setValue(e.target.value); setExpanded(true); }}
              onFocus={() => setExpanded(true)}
              onBlur={() => { if (!value) setExpanded(false); }}
              onKeyDown={handleKeyDown}
              placeholder={
                listening
                  ? "Listening… speak your command"
                  : placeholder ?? "Speak or type anything… (Ctrl+K)"
              }
              className="w-full bg-transparent text-[14px] text-zinc-100 placeholder-zinc-500 outline-none"
              aria-label="JARVIS command bar"
              id="jarvis-command-bar-input"
            />
          </div>

          <div className="flex items-center gap-1">
            {value && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => { setValue(""); setSuggestions([]); }}
                className="rounded-full p-1 text-zinc-500 hover:text-zinc-300"
                aria-label="Clear"
              >
                <X className="h-4 w-4" />
              </motion.button>
            )}

            {voiceSupported && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleVoice}
                className={`rounded-full p-2 transition-all ${
                  listening
                    ? "bg-red-500/20 text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.4)]"
                    : "text-zinc-500 hover:bg-cyan-500/10 hover:text-cyan-400"
                }`}
                aria-label={listening ? "Stop listening" : "Start voice input"}
              >
                {listening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </motion.button>
            )}

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleSubmit(value)}
              disabled={!value.trim() || loading}
              className={`rounded-full p-2 transition-all ${
                value.trim() && !loading
                  ? "bg-cyan-500 text-[#080b10] shadow-[0_0_14px_rgba(6,182,212,0.4)] hover:bg-cyan-400"
                  : "bg-white/5 text-zinc-600"
              }`}
              aria-label="Send"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </motion.button>
          </div>
        </div>

        {/* Quick actions row */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/[0.06]"
            >
              <div className="flex items-center gap-2 overflow-x-auto px-4 py-2 scrollbar-none">
                <span className="shrink-0 text-[11px] text-zinc-600">Quick:</span>
                {quickActions.map((a) => {
                  const Icon = a.icon;
                  return (
                    <button
                      key={a.label}
                      onClick={() => { setValue(a.label); inputRef.current?.focus(); }}
                      className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.04] px-3 py-1 text-[11px] text-zinc-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:text-cyan-300 transition-colors"
                    >
                      <Icon className="h-3 w-3" />
                      {a.label}
                    </button>
                  );
                })}
                <button
                  onClick={() => setExpanded(false)}
                  className="ml-auto shrink-0 rounded-full p-1 text-zinc-600 hover:text-zinc-400"
                  aria-label="Collapse"
                >
                  <ChevronUp className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
