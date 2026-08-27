import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Mic,
  AudioLines,
  GraduationCap,
  Code2,
  HardDrive,
  CalendarDays,
  Mail,
  Sparkles,
  ChevronDown,
  LayoutDashboard,
  ExternalLink,
  Eye,
  Palette,
  Monitor,
  Tablet,
  Smartphone,
  Copy,
  Check,
  Users,
  Layers,
  BarChart3,
  Bot,
  Zap,
  ArrowRight
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { createThread } from "@/lib/threads.functions";
import { DashboardView } from "@/components/jarvis/dashboard-view";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MODELS } from "@/lib/models";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/console/")({
  component: TabbedHome,
  head: () => ({
    meta: [
      { title: "Jarvis — Autonomous Console" },
      { name: "description", content: "Jarvis AI OS · Chat with your autonomous OS. 8-bot fleet, voice studio & live app builder." },
    ],
  }),
});

function greetingForHour(h: number) {
  if (h < 12) return "Morning thoughts";
  if (h < 18) return "Afternoon thoughts";
  return "Evening thoughts";
}

function TabbedHome() {
  const [tab, setTab] = useState<"chat" | "dashboard">(() => {
    try {
      const v = localStorage.getItem("jarvis-console-tab");
      return v === "dashboard" ? "dashboard" : "chat";
    } catch {
      return "chat";
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("jarvis-console-tab", tab);
    } catch {}
  }, [tab]);

  return (
    <div className="flex h-full flex-col bg-[#09090b]">
      {/* Tab switcher — Chat ↔ Dashboard */}
      <div className="flex items-center justify-between border-b border-zinc-800/40 bg-[#09090b] px-6 py-2.5">
        <div className="flex rounded-full border border-zinc-800 bg-zinc-900/80 p-1 text-xs">
          <button
            onClick={() => setTab("chat")}
            className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 font-semibold transition-all ${tab === "chat" ? "bg-white text-zinc-900 shadow-md" : "text-zinc-400 hover:text-zinc-200"}`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Chat &amp; Cowork</span>
          </button>
          <button
            onClick={() => setTab("dashboard")}
            className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 font-semibold transition-all ${tab === "dashboard" ? "bg-white text-zinc-900 shadow-md" : "text-zinc-400 hover:text-zinc-200"}`}
          >
            <LayoutDashboard className="h-3.5 w-3.5" />
            <span>Activity Dashboard</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-xs">
          <Link to="/console/fleet" className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium">
            <Users className="h-3.5 w-3.5" /> 8-Bot Fleet
          </Link>
          <span className="text-zinc-700">·</span>
          <Link to="/console/voice" className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium">
            <Mic className="h-3.5 w-3.5" /> Voice Cloner
          </Link>
          <span className="text-zinc-700">·</span>
          <Link to="/console/apps" className="flex items-center gap-1 text-purple-400 hover:text-purple-300 font-medium">
            <Layers className="h-3.5 w-3.5" /> App Builder
          </Link>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {tab === "chat" ? (
            <motion.div key="chat" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }} className="h-full">
              <ClaudeHome />
            </motion.div>
          ) : (
            <motion.div key="dashboard" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }} className="h-full overflow-y-auto">
              <DashboardView />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ClaudeHome() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const createFn = useServerFn(createThread);
  const [now, setNow] = useState(() => new Date());
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"chat" | "cowork">("chat");
  const [modelId, setModelId] = useState("gemini-flash-latest");
  const [focused, setFocused] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const selectedModel = MODELS.find((m) => m.id === modelId) ?? MODELS[0];
  const [codeSite, setCodeSite] = useState<string | null>(null);
  const [codeContent, setCodeContent] = useState("");
  const [copied, setCopied] = useState(false);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);

  const greeting = greetingForHour(now.getHours());

  const mCreate = useMutation({
    mutationFn: (text: string) => createFn({ data: { project_id: null } }).then((t) => ({ t, text })),
    onSuccess: ({ t, text }) => {
      qc.invalidateQueries({ queryKey: ["threads"] });
      const seed = mode === "cowork" && text.trim() ? `Cowork task: ${text.trim()}` : text.trim();
      if (seed) {
        navigate({ to: "/console/$threadId", params: { threadId: t.id }, search: { seed } as any });
      } else {
        navigate({ to: "/console/$threadId", params: { threadId: t.id } });
      }
    },
    onError: () => toast.error("Could not start chat."),
  });

  const handleSend = () => {
    if (!input.trim() || mCreate.isPending) return;
    mCreate.mutate(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleMic = () => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      toast.info("Opening Voice Studio with 2-Minute Cloner...");
      navigate({ to: "/console/voice" });
      return;
    }
    try {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.onstart = () => {
        setIsListening(true);
        toast.info("Listening... speak now.");
      };
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput((prev) => (prev ? prev + " " + transcript : transcript));
        setIsListening(false);
        toast.success("Speech captured!");
      };
      recognition.onerror = () => {
        setIsListening(false);
        toast.error("Microphone error. Opening Voice Studio.");
        navigate({ to: "/console/voice" });
      };
      recognition.onend = () => setIsListening(false);
      recognition.start();
    } catch {
      navigate({ to: "/console/voice" });
    }
  };

  const handleShowCode = async (slug: string) => {
    setCodeSite(slug);
    setCodeContent("Loading…");
    try {
      const res = await fetch(`/preset-sites/${slug}/index.html`);
      const html = await res.text();
      setCodeContent(html.slice(0, 12000));
    } catch {
      setCodeContent("Failed to load code.");
    }
  };

  const quickPrompts = [
    { label: "👔 Daily Priority Digest", prompt: "@chief_of_staff scan my priorities, schedule, and dropped threads for today." },
    { label: "🎯 Lead Discovery Sequence", prompt: "@sales_outbound find ICP leads and generate automated personalized email outreach." },
    { label: "🏗️ Scaffold React Native App", prompt: "Create a cross-platform React Native 0.74 mobile app with Expo Router and SQLite offline sync." },
    { label: "🎙️ 2-Min Custom Voice Clone", prompt: "Open Voice Studio to clone a reference audio sample into a 30-slot custom voice profile." },
  ];

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#09090b]">
      <div className="mx-auto flex w-full max-w-[760px] flex-1 flex-col px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          className="flex flex-1 flex-col items-center justify-center py-6 text-center"
        >
          <h1 className="flex items-center gap-3 font-serif text-[42px] font-normal tracking-tight text-white sm:text-[54px]">
            <span className="inline-flex h-8 w-8 items-center justify-center text-[#e87a3a] sm:h-9 sm:w-9">
              <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-9 sm:w-9" fill="none" aria-hidden>
                <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M19.1 4.9l-2.8 2.8M7.7 16.3l-2.8 2.8M6 12a6 6 0 0 0 12 0 6 6 0 0 0-12 0Z" />
                </g>
              </svg>
            </span>
            {greeting}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.35, ease: [0.2, 0, 0, 1] }}
            className={`mt-8 w-full rounded-[28px] border bg-[#1a1a1d] p-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all ${focused ? "border-cyan-500/50 ring-1 ring-cyan-500/30" : "border-zinc-800"}`}
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder={mode === "cowork" ? "Describe an autonomous task or prompt (e.g., @sales_outbound find 5 leads)..." : "How can JARVIS assist your workspace today?"}
              className="min-h-[44px] w-full resize-none bg-transparent px-3 py-3 text-[15px] leading-6 text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
              style={{ fieldSizing: "content" } as any}
            />
            <div className="mt-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigate({ to: "/console/apps" })}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200 transition-colors"
                  aria-label="New App"
                  title="Scaffold New App"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <div className="flex items-center rounded-full border border-zinc-800 bg-zinc-900 p-1 text-xs">
                  <button onClick={() => setMode("chat")} className={`rounded-full px-3 py-1 font-medium transition-colors ${mode === "chat" ? "bg-zinc-700 text-white shadow-sm" : "text-zinc-400 hover:text-zinc-200"}`}>Chat</button>
                  <button onClick={() => setMode("cowork")} className={`rounded-full px-3 py-1 font-medium transition-colors ${mode === "cowork" ? "bg-cyan-600 text-white shadow-sm" : "text-zinc-400 hover:text-zinc-200"}`}>Cowork</button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Select value={modelId} onValueChange={setModelId}>
                  <SelectTrigger className="hidden h-7 w-[160px] border-zinc-700 bg-zinc-900 text-xs text-zinc-300 sm:flex">
                    <SelectValue>
                      <span className="flex items-center gap-1.5">
                        <span>{selectedModel.icon}</span> {selectedModel.label}
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="max-h-[280px]">
                    {MODELS.slice(0, 8).map((m) => (
                      <SelectItem key={m.id} value={m.id} className="text-xs">
                        <span className="flex items-center gap-1.5">
                          <span>{m.icon}</span> {m.label} <span className="text-[10px] text-muted-foreground">{m.provider}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <button
                  type="button"
                  onClick={toggleMic}
                  className={`h-8 w-8 flex items-center justify-center rounded-full transition-colors ${isListening ? "bg-red-500/20 text-red-400 border border-red-500/50 animate-pulse" : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"}`}
                  aria-label="Mic"
                  title="Voice Dictation"
                >
                  <Mic className="h-4 w-4" />
                </button>
                <Link
                  to="/console/voice"
                  className="hidden h-8 w-8 items-center justify-center rounded-full text-emerald-400 hover:bg-emerald-950/40 hover:text-emerald-300 sm:flex"
                  aria-label="Voice Studio"
                  title="Open Voice Studio"
                >
                  <AudioLines className="h-4 w-4" />
                </Link>
                <button onClick={handleSend} disabled={!input.trim() || mCreate.isPending} className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md" aria-label="Send">
                  <Sparkles className="h-4 w-4 fill-current" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Quick Action Suggestion Chips */}
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.35 }} className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {quickPrompts.map((qp) => (
              <button
                key={qp.label}
                onClick={() => setInput(qp.prompt)}
                className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800/80 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:border-cyan-500/40 hover:bg-zinc-800 hover:text-white transition-all shadow-sm"
              >
                <span>{qp.label}</span>
              </button>
            ))}
          </motion.div>

          <p className="mt-2 text-[11px] text-zinc-500">{mode === "cowork" ? "Cowork mode enables autonomous tools, code generation & multi-step execution." : "Chat mode is conversational for fast Q&A."}</p>
        </motion.div>

        {/* Featured Showcase: 67 Live Preset Sites + Code Inspection */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-300"><Palette className="h-4 w-4 text-cyan-400" /> Featured Template Sites &amp; Live Code Studio</h3>
            <div className="flex items-center gap-1 text-xs text-zinc-500">
              <button onClick={() => setPreviewDevice("desktop")} className={`p-1 rounded ${previewDevice === "desktop" ? "text-cyan-400 bg-zinc-800" : "hover:text-zinc-300"}`}><Monitor className="h-3.5 w-3.5" /></button>
              <button onClick={() => setPreviewDevice("tablet")} className={`p-1 rounded ${previewDevice === "tablet" ? "text-cyan-400 bg-zinc-800" : "hover:text-zinc-300"}`}><Tablet className="h-3.5 w-3.5" /></button>
              <button onClick={() => setPreviewDevice("mobile")} className={`p-1 rounded ${previewDevice === "mobile" ? "text-cyan-400 bg-zinc-800" : "hover:text-zinc-300"}`}><Smartphone className="h-3.5 w-3.5" /></button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PreviewCard
              p={{ slug: "crm-lead-management-panel-staffu-admin-template", title: "CRM Lead Pipeline & Analytics Panel", accent: "from-blue-950/40 to-slate-950" }}
              previewDevice={previewDevice}
              onShowCode={handleShowCode}
            />
            <PreviewCard
              p={{ slug: "clucky-the-rooster-alarm-that-gets-you-up", title: "Clucky Rooster Interactive Audio Alarm", accent: "from-amber-950/40 to-slate-950" }}
              previewDevice={previewDevice}
              onShowCode={handleShowCode}
            />
          </div>

          <Dialog open={!!codeSite} onOpenChange={(o) => !o && setCodeSite(null)}>
            <DialogContent className="max-w-3xl bg-[#0f0f12] border-zinc-800">
              <DialogHeader><DialogTitle className="text-white font-mono text-sm">Code Inspector — {codeSite}</DialogTitle></DialogHeader>
              <div className="relative">
                <button onClick={() => { navigator.clipboard.writeText(codeContent); setCopied(true); setTimeout(() => setCopied(false), 1500); }} className="absolute right-2 top-2 inline-flex items-center gap-1 rounded bg-zinc-800 px-2.5 py-1 text-xs text-zinc-200 hover:bg-zinc-700">
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />} {copied ? "Copied" : "Copy Source"}
                </button>
                <pre className="max-h-[60vh] overflow-auto rounded-lg bg-black p-4 font-mono text-xs text-zinc-300 scrollbar-thin">{codeContent}</pre>
              </div>
            </DialogContent>
          </Dialog>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-500 border-t border-zinc-800/60 pt-3">
            <div className="flex items-center gap-3">
              <Link to="/console/components" className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium">
                <Sparkles className="h-3 w-3" /> 3D Motion Components
              </Link>
              <span>·</span>
              <Link to="/console/apps" className="hover:text-zinc-300 font-medium">Universal App Builder</Link>
            </div>
            <span className="font-mono text-[10px] text-zinc-600">67+ Live Presets • 100% Client-Side Rendered</span>
          </div>
        </motion.div>

        <div className="py-4 text-center text-[11px] text-zinc-600">JARVIS AI OS v3.0 Master Release · <Link to="/how-it-works" className="underline decoration-zinc-700 underline-offset-4 hover:text-zinc-400">100 SOTA Use Cases</Link></div>
      </div>
    </div>
  );
}

/** Lazy iframe preview card */
function PreviewCard({
  p,
  previewDevice,
  onShowCode,
}: {
  p: { slug: string; title: string; accent: string };
  previewDevice: "desktop" | "tablet" | "mobile";
  onShowCode: (slug: string) => void;
}) {
  const [active, setActive] = useState(false);
  const h = previewDevice === "mobile" ? 300 : previewDevice === "tablet" ? 260 : 220;
  return (
    <div
      className={`flex flex-col rounded-xl border border-zinc-800/80 bg-gradient-to-b p-3.5 ${p.accent} hover:border-zinc-700 transition-all shadow-md`}
      onMouseEnter={() => setActive(true)}
    >
      <div className="text-xs font-bold text-white truncate">{p.title}</div>
      <div className="mt-0.5 text-[10px] text-zinc-400 font-mono">/preset-sites/{p.slug}/</div>
      <div
        className={`mt-2.5 overflow-hidden rounded-xl border border-zinc-800 bg-black shadow-inner ${
          previewDevice === "mobile" ? "mx-auto max-w-[320px]" : previewDevice === "tablet" ? "mx-auto max-w-[500px]" : "w-full"
        }`}
        style={{ height: h }}
      >
        {active ? (
          <iframe src={`/preset-sites/${p.slug}/`} title={p.title} className="h-full w-full border-0" />
        ) : (
          <div className="flex h-full items-center justify-center gap-2 text-[11px] text-zinc-500">
            <Eye className="h-3.5 w-3.5 text-zinc-400" /> Hover to preview live
          </div>
        )}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <a href={`/preset-sites/${p.slug}/`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-zinc-900 hover:bg-zinc-100 shadow-sm"><Eye className="h-3 w-3" /> Live Demo</a>
        <button onClick={() => onShowCode(p.slug)} className="inline-flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-[10px] font-medium text-zinc-200 hover:bg-zinc-700"><Code2 className="h-3 w-3" /> Code</button>
        <Link to="/console/apps" className="inline-flex items-center gap-1 rounded-full border border-purple-500/30 bg-purple-950/40 px-2.5 py-1 text-[10px] font-medium text-purple-300 hover:bg-purple-900/50"><Sparkles className="h-3 w-3" /> Fork in Builder</Link>
      </div>
    </div>
  );
}
