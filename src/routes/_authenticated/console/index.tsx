import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { motion } from "framer-motion";
import {
  Mic, AudioLines, Code2, Sparkles, Eye, Palette, Monitor, Tablet,
  Smartphone, Copy, Check, Layers, BarChart3, Bot, ArrowRight, Folder,
  GitBranch, ChevronRight
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { createThread } from "@/lib/threads.functions";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MODELS } from "@/lib/models";
import { toast } from "sonner";


export const Route = createFileRoute("/_authenticated/console/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Home — JARVIS AI OS" },
      { name: "description", content: "JARVIS AI OS · Intelligent command center for AI-powered work." },
    ],
  }),
});

function greetingForHour(h: number) {
  if (h < 5)  return "Good night";
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

// ── Quick action chips ────────────────────────────────────────────────────
const QUICK_ACTIONS = [
  {
    label: "Daily Digest",
    icon: "☀️",
    prompt: "@chief_of_staff scan my priorities, schedule, and dropped threads for today.",
  },
  {
    label: "Scaffold App",
    icon: "🏗️",
    prompt: "Create a cross-platform React Native app with Expo Router and offline sync.",
  },
  {
    label: "Lead Discovery",
    icon: "🎯",
    prompt: "@sales_outbound find ICP leads and generate personalized outreach sequences.",
  },
  {
    label: "Voice Clone",
    icon: "🎙️",
    prompt: "Open Voice Studio to clone a reference audio into a custom voice profile.",
  },
  {
    label: "Code Review",
    icon: "🔍",
    prompt: "Review my latest code changes for bugs, security issues, and improvements.",
  },
];

// ── Feature shortcuts (the 6-card grid replacing the busy old dashboard) ──
const FEATURE_CARDS = [
  {
    to: "/console/projects",
    icon: Folder,
    label: "Projects",
    description: "Active workspaces",
    color: "var(--color-intelligence)",
    accent: "oklch(0.712 0.132 42 / 0.1)",
  },
  {
    to: "/console/fleet",
    icon: Bot,
    label: "Bot Fleet",
    description: "8 autonomous agents",
    color: "var(--color-info)",
    accent: "oklch(0.72 0.16 230 / 0.1)",
    badge: "LIVE",
  },
  {
    to: "/console/voice",
    icon: Mic,
    label: "Voice Studio",
    description: "Clone & synthesize",
    color: "var(--color-success)",
    accent: "oklch(0.681 0.128 145 / 0.1)",
  },
  {
    to: "/console/apps",
    icon: Layers,
    label: "App Builder",
    description: "Scaffold & deploy",
    color: "var(--color-creative)",
    accent: "oklch(0.72 0.16 300 / 0.1)",
  },
  {
    to: "/console/github",
    icon: GitBranch,
    label: "GitHub",
    description: "Repos & automation",
    color: "var(--color-warning)",
    accent: "oklch(0.771 0.145 68 / 0.1)",
  },
  {
    to: "/console/analytics",
    icon: BarChart3,
    label: "Analytics",
    description: "Usage & costs",
    color: "var(--color-intelligence)",
    accent: "oklch(0.712 0.132 42 / 0.08)",
    badge: "LIVE",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
function HomePage() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const createFn = useServerFn(createThread);
  const [now, setNow] = useState(() => new Date());
  const [input, setInput] = useState("");
  const [modelId, setModelId] = useState("gemini-flash-latest");
  const [focused, setFocused] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [codeSite, setCodeSite] = useState<string | null>(null);
  const [codeContent, setCodeContent] = useState("");
  const [copied, setCopied] = useState(false);

  const selectedModel = MODELS.find((m) => m.id === modelId) ?? MODELS[0];

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);

  const mCreate = useMutation({
    mutationFn: (text: string) => createFn({ data: { project_id: null } }).then((t) => ({ t, text })),
    onSuccess: ({ t, text }) => {
      qc.invalidateQueries({ queryKey: ["threads"] });
      if (text.trim()) {
        navigate({ to: "/console/$threadId", params: { threadId: t.id }, search: { seed: text.trim() } as any });
      } else {
        navigate({ to: "/console/$threadId", params: { threadId: t.id } });
      }
    },
    onError: () => toast.error("Could not start conversation."),
  });

  const handleSend = () => {
    if (mCreate.isPending) return;
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
      navigate({ to: "/console/voice" });
      return;
    }
    try {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.onstart = () => { setIsListening(true); toast.info("Listening…"); };
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput((prev) => (prev ? prev + " " + transcript : transcript));
        setIsListening(false);
        toast.success("Captured!");
      };
      recognition.onerror = () => { setIsListening(false); navigate({ to: "/console/voice" }); };
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

  const hour = now.getHours();
  const greeting = greetingForHour(hour);
  const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const dateStr = now.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" });

  return (
    <div className="flex h-full flex-col overflow-y-auto scrollbar-jarvis" style={{ background: "var(--background)" }}>
      <div className="mx-auto flex w-full max-w-[780px] flex-1 flex-col px-6 py-8 gap-8">

        {/* ── Greeting ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          className="pt-4"
        >
          <h1 className="home-greeting">
            {greeting}, <em>Vishwajeet</em>
          </h1>
          <p className="mt-1 text-[13px]" style={{ color: "var(--muted-foreground)" }}>
            {dateStr} · {timeStr}
          </p>
        </motion.div>

        {/* ── AI Composer ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.35, ease: [0.2, 0, 0, 1] }}
        >
          <div
            className="composer-wrap"
            style={focused ? { borderColor: "oklch(0.712 0.132 42 / 0.5)", boxShadow: "0 0 0 3px oklch(0.712 0.132 42 / 0.08)" } : {}}
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="Ask JARVIS anything, or describe a task…"
              className="min-h-[52px] w-full resize-none bg-transparent px-4 py-4 text-[15px] leading-6 text-foreground placeholder:text-muted-foreground focus:outline-none"
              style={{ fieldSizing: "content" } as any}
            />
            {/* Composer toolbar */}
            <div className="flex items-center justify-between gap-2 px-3 pb-3">
              <div className="flex items-center gap-2">
                {/* Voice */}
                <button
                  type="button"
                  onClick={toggleMic}
                  className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                    isListening
                      ? "bg-destructive/20 text-destructive border border-destructive/40 animate-pulse"
                      : "text-muted-foreground hover:bg-surface-1 hover:text-foreground"
                  }`}
                  aria-label="Voice input"
                  title="Voice input"
                >
                  <Mic className="h-3.5 w-3.5" />
                </button>
                {/* Voice Studio shortcut */}
                <Link
                  to="/console/voice"
                  className="hidden sm:flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Voice Studio"
                >
                  <AudioLines className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="flex items-center gap-2">
                {/* Model selector */}
                <Select value={modelId} onValueChange={setModelId}>
                  <SelectTrigger
                    className="hidden h-7 w-[156px] border-[var(--border)] bg-[var(--surface-1)] text-[12px] text-muted-foreground sm:flex"
                  >
                    <SelectValue>
                      <span className="flex items-center gap-1.5 truncate">
                        <span>{selectedModel.icon}</span>
                        <span className="truncate">{selectedModel.label}</span>
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="max-h-[280px]">
                    {MODELS.slice(0, 10).map((m) => (
                      <SelectItem key={m.id} value={m.id} className="text-xs">
                        <span className="flex items-center gap-1.5">
                          <span>{m.icon}</span>
                          <span>{m.label}</span>
                          <span className="text-[10px] text-muted-foreground">{m.provider}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Send */}
                <button
                  onClick={handleSend}
                  disabled={mCreate.isPending}
                  className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[13px] font-semibold transition-colors disabled:opacity-40"
                  style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                  aria-label="Send"
                >
                  {mCreate.isPending ? (
                    <span className="flex gap-0.5">
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-current" />
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-current" />
                      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-current" />
                    </span>
                  ) : (
                    <>
                      <Sparkles className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Send</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Quick action chips */}
          <div className="mt-3 flex flex-wrap gap-2">
            {QUICK_ACTIONS.map((qa) => (
              <motion.button
                key={qa.label}
                whileTap={{ scale: 0.96 }}
                onClick={() => setInput(qa.prompt)}
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface-1)",
                  color: "var(--muted-foreground)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
                  (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.712 0.132 42 / 0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--muted-foreground)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                }}
              >
                <span>{qa.icon}</span>
                <span>{qa.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ── Feature Cards Grid ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.35 }}
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[11px] font-mono font-bold uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>
              Quick Access
            </h2>
            <Link
              to="/console/projects"
              className="flex items-center gap-1 text-[12px] transition-colors hover:opacity-80"
              style={{ color: "var(--primary)" }}
            >
              View all <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {FEATURE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <Link key={card.to} to={card.to}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="project-card flex flex-col gap-3 p-4 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-lg"
                        style={{ background: card.accent }}
                      >
                        <Icon className="h-4 w-4" style={{ color: card.color }} />
                      </div>
                      {card.badge && (
                        <span className="badge-pill badge-live">{card.badge}</span>
                      )}
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold" style={{ color: "var(--foreground)" }}>
                        {card.label}
                      </div>
                      <div className="text-[11px]" style={{ color: "var(--muted-foreground)" }}>
                        {card.description}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* ── Template Preview ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.35 }}
          className="rounded-2xl border p-5"
          style={{ borderColor: "var(--border)", background: "var(--surface-1)" }}
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-[13px] font-semibold" style={{ color: "var(--foreground)" }}>
              <Palette className="h-3.5 w-3.5" style={{ color: "var(--primary)" }} />
              Live Template Previews
            </h2>
            <div className="flex items-center gap-0.5 rounded-lg border p-0.5" style={{ borderColor: "var(--border)" }}>
              {(["desktop", "tablet", "mobile"] as const).map((d) => {
                const DIcon = d === "desktop" ? Monitor : d === "tablet" ? Tablet : Smartphone;
                return (
                  <button
                    key={d}
                    onClick={() => setPreviewDevice(d)}
                    className="rounded p-1.5 transition-colors"
                    style={{
                      background: previewDevice === d ? "var(--surface-2)" : "transparent",
                      color: previewDevice === d ? "var(--primary)" : "var(--muted-foreground)",
                    }}
                  >
                    <DIcon className="h-3.5 w-3.5" />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <PreviewCard
              p={{ slug: "crm-lead-management-panel-staffu-admin-template", title: "CRM Lead Pipeline", accent: "oklch(0.72 0.16 230 / 0.08)" }}
              previewDevice={previewDevice}
              onShowCode={handleShowCode}
            />
            <PreviewCard
              p={{ slug: "clucky-the-rooster-alarm-that-gets-you-up", title: "Clucky Rooster Alarm", accent: "oklch(0.771 0.145 68 / 0.08)" }}
              previewDevice={previewDevice}
              onShowCode={handleShowCode}
            />
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px]" style={{ color: "var(--muted-foreground)" }}>
            <span>67+ Live Preset Sites</span>
            <Link to="/console/apps" className="flex items-center gap-1 transition-colors hover:opacity-80" style={{ color: "var(--primary)" }}>
              Open App Builder <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="pb-4 text-center text-[11px]" style={{ color: "var(--muted-foreground)" }}>
          JARVIS AI OS v3.0 ·{" "}
          <Link to="/how-it-works" className="underline decoration-current/30 underline-offset-4 hover:opacity-80">
            100 SOTA Use Cases
          </Link>
        </div>
      </div>

      {/* Code Inspector Dialog */}
      <Dialog open={!!codeSite} onOpenChange={(o) => !o && setCodeSite(null)}>
        <DialogContent className="max-w-3xl" style={{ background: "var(--surface-1)", borderColor: "var(--border)" }}>
          <DialogHeader>
            <DialogTitle className="font-mono text-sm">Code Inspector — {codeSite}</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <button
              onClick={() => { navigator.clipboard.writeText(codeContent); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
              className="absolute right-2 top-2 inline-flex items-center gap-1 rounded px-2.5 py-1 text-xs transition-colors"
              style={{ background: "var(--surface-2)", color: "var(--foreground)" }}
            >
              {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied" : "Copy"}
            </button>
            <pre
              className="scrollbar-jarvis max-h-[60vh] overflow-auto rounded-lg p-4 font-mono text-xs"
              style={{ background: "var(--background)", color: "var(--foreground)" }}
            >
              {codeContent}
            </pre>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ── Preview card component ─────────────────────────────────────────────────
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
  const h = previewDevice === "mobile" ? 280 : previewDevice === "tablet" ? 240 : 200;

  return (
    <div
      className="flex flex-col rounded-xl border p-3 transition-colors"
      style={{ background: p.accent, borderColor: "var(--border)" }}
      onMouseEnter={() => setActive(true)}
    >
      <div className="text-[12px] font-semibold truncate" style={{ color: "var(--foreground)" }}>{p.title}</div>
      <div className="mt-0.5 text-[10px] font-mono" style={{ color: "var(--muted-foreground)" }}>
        /preset-sites/{p.slug}/
      </div>
      <div
        className="mt-2.5 overflow-hidden rounded-lg border"
        style={{
          height: h,
          borderColor: "var(--border)",
          background: "var(--background)",
          ...(previewDevice === "mobile" ? { maxWidth: 280, margin: "0 auto" } : {}),
        }}
      >
        {active ? (
          <iframe src={`/preset-sites/${p.slug}/`} title={p.title} className="h-full w-full border-0" />
        ) : (
          <div className="flex h-full items-center justify-center gap-2 text-[11px]" style={{ color: "var(--muted-foreground)" }}>
            <Eye className="h-3.5 w-3.5" /> Hover to preview
          </div>
        )}
      </div>
      <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
        <a
          href={`/preset-sites/${p.slug}/`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold transition-colors"
          style={{ background: "var(--foreground)", color: "var(--background)" }}
        >
          <Eye className="h-3 w-3" /> Live Demo
        </a>
        <button
          onClick={() => onShowCode(p.slug)}
          className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-medium transition-colors"
          style={{ borderColor: "var(--border)", background: "var(--surface-2)", color: "var(--foreground)" }}
        >
          <Code2 className="h-3 w-3" /> Code
        </button>
        <Link
          to="/console/apps"
          className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-medium transition-colors"
          style={{ borderColor: "oklch(0.712 0.132 42 / 0.4)", background: "oklch(0.712 0.132 42 / 0.1)", color: "var(--primary)" }}
        >
          <Sparkles className="h-3 w-3" /> Fork
        </Link>
      </div>
    </div>
  );
}
