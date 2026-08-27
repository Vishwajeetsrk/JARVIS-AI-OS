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
      { title: "Jarvis — Evening thoughts" },
      { name: "description", content: "Jarvis AI OS · Chat with your autonomous OS. Dashboard + live projects." },
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
      {/* Tab switcher — Chat ↔ Dashboard (restores old dashboard) */}
      <div className="flex items-center justify-center border-b border-zinc-800/40 bg-[#09090b] px-4 py-2">
        <div className="flex rounded-full border border-zinc-800 bg-zinc-900 p-1 text-xs">
          <button
            onClick={() => setTab("chat")}
            className={`rounded-full px-4 py-1.5 font-medium transition-colors ${tab === "chat" ? "bg-white text-zinc-900" : "text-zinc-400 hover:text-zinc-200"}`}
          >
            Chat
          </button>
          <button
            onClick={() => setTab("dashboard")}
            className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 font-medium transition-colors ${tab === "dashboard" ? "bg-white text-zinc-900" : "text-zinc-400 hover:text-zinc-200"}`}
          >
            <LayoutDashboard className="h-3.5 w-3.5" /> Dashboard
          </button>
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
      // Cowork hint: prefix task so backend knows it's agentic deliverable vs chat Q&A
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
            className={`mt-8 w-full rounded-[28px] border bg-[#1a1a1d] p-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all ${focused ? "border-zinc-700 ring-1 ring-zinc-700/50" : "border-zinc-800"}`}
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder={mode === "cowork" ? "Describe a task to delegate…" : "How can I help you today?"}
              className="min-h-[44px] w-full resize-none bg-transparent px-3 py-3 text-[15px] leading-6 text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
              style={{ fieldSizing: "content" } as any}
            />
            <div className="mt-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200 transition-colors" aria-label="Add">
                  <Plus className="h-4 w-4" />
                </button>
                <div className="flex items-center rounded-full border border-zinc-800 bg-zinc-900 p-1 text-xs">
                  <button onClick={() => setMode("chat")} className={`rounded-full px-3 py-1 font-medium transition-colors ${mode === "chat" ? "bg-zinc-700 text-white" : "text-zinc-400 hover:text-zinc-200"}`}>Chat</button>
                  <button onClick={() => setMode("cowork")} className={`rounded-full px-3 py-1 font-medium transition-colors ${mode === "cowork" ? "bg-zinc-700 text-white" : "text-zinc-400 hover:text-zinc-200"}`}>Cowork</button>
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
                <button className="hidden h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 sm:flex" aria-label="Mic"><Mic className="h-4 w-4" /></button>
                <button className="hidden h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 sm:flex" aria-label="Voice"><AudioLines className="h-4 w-4" /></button>
                <button onClick={handleSend} disabled={!input.trim() || mCreate.isPending} className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1f9d6b] text-white hover:bg-[#1a8a5e] disabled:opacity-40 disabled:cursor-not-allowed transition-colors" aria-label="Send"><Sparkles className="h-4 w-4" /></button>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.35 }} className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <Pill icon={GraduationCap} label="Learn" to="/console/roadmaps" />
            <Pill icon={Code2} label="Code" to="/console/skills" />
            <Pill icon={HardDrive} label="From Drive" color="text-[#4285f4]" />
            <Pill icon={CalendarDays} label="From Calendar" color="text-[#34a853]" />
            <Pill icon={Mail} label="From Gmail" color="text-[#ea4335]" />
          </motion.div>

          <p className="mt-2 text-[11px] text-zinc-600">{mode === "cowork" ? "Cowork runs agentic — multi-step, file access, deliverables." : "Chat is conversational — quick Q&A, no file edits."}</p>
        </motion.div>

        {/* Showcase: live view + code + recreation — bridges to design systems */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-2 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400"><Palette className="h-3.5 w-3.5" /> Featured — live view · code · recreation</h3>
            <Link to="/design" className="text-xs text-sky-400 hover:underline">All 27 systems →</Link>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px] font-medium text-zinc-500">Live preview — {previewDevice}</span>
            <div className="flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900 p-1">
              <button onClick={() => setPreviewDevice("desktop")} className={`rounded-full p-1.5 ${previewDevice === "desktop" ? "bg-white text-zinc-900" : "text-zinc-500 hover:text-zinc-300"}`} title="Desktop"><Monitor className="h-3.5 w-3.5" /></button>
              <button onClick={() => setPreviewDevice("tablet")} className={`rounded-full p-1.5 ${previewDevice === "tablet" ? "bg-white text-zinc-900" : "text-zinc-500 hover:text-zinc-300"}`} title="Tablet"><Tablet className="h-3.5 w-3.5" /></button>
              <button onClick={() => setPreviewDevice("mobile")} className={`rounded-full p-1.5 ${previewDevice === "mobile" ? "bg-white text-zinc-900" : "text-zinc-500 hover:text-zinc-300"}`} title="Mobile"><Smartphone className="h-3.5 w-3.5" /></button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { slug: "aceternity-ai-saas", title: "Aceternity AI SaaS", accent: "from-sky-500/20 to-blue-600/10" },
              { slug: "aceternity-nodus-agent", title: "Nodus Agent", accent: "from-purple-500/20 to-violet-600/10" },
              { slug: "aceternity-productized-agency", title: "Productized Agency", accent: "from-emerald-500/20 to-teal-600/10" },
              { slug: "aceternity-simplistic-saas", title: "Simplistic SaaS", accent: "from-amber-500/20 to-orange-600/10" },
              { slug: "aceternity-cryptgen-marketing", title: "Cryptgen Marketing", accent: "from-cyan-500/20 to-teal-600/10" },
              { slug: "aceternity-playful-marketing", title: "Playful Marketing", accent: "from-pink-500/20 to-rose-600/10" },
            ].map((p) => (
              <PreviewCard key={p.slug} p={p} previewDevice={previewDevice} onShowCode={handleShowCode} />
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <Link to="/console/design" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white">
              <Eye className="h-4 w-4" /> View all 67 live sites · code · recreation
            </Link>
          </div>
          <Dialog open={!!codeSite} onOpenChange={(o) => !o && setCodeSite(null)}>
            <DialogContent className="max-h-[80vh] max-w-3xl overflow-hidden bg-zinc-950">
              <DialogHeader><DialogTitle className="text-white">Code — {codeSite}</DialogTitle></DialogHeader>
              <div className="relative">
                <button onClick={() => { navigator.clipboard.writeText(codeContent); setCopied(true); setTimeout(() => setCopied(false), 1500); }} className="absolute right-2 top-2 inline-flex items-center gap-1 rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-300 hover:bg-zinc-700">
                  {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />} {copied ? "Copied" : "Copy"}
                </button>
                <pre className="max-h-[60vh] overflow-auto rounded-lg bg-black p-4 font-mono text-xs text-zinc-300">{codeContent}</pre>
              </div>
            </DialogContent>
          </Dialog>
          <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-zinc-500">
            <Link to="/console/design" className="inline-flex items-center gap-1 hover:text-zinc-300"><ExternalLink className="h-3 w-3" /> All 67 live sites</Link>
            <span>·</span>
            <Link to="/console/projects" className="hover:text-zinc-300">Projects</Link>
            <span>·</span>
            <span className="text-zinc-600">Recreation uses same design tokens via Learnify</span>
          </div>
        </motion.div>

        <div className="py-4 text-center text-[11px] text-zinc-600">Jarvis can make mistakes. Verify important info. · <Link to="/how-it-works" className="underline decoration-zinc-700 underline-offset-4 hover:text-zinc-400">How Jarvis works</Link></div>
      </div>
    </div>
  );
}

function Pill({ icon: Icon, label, color, to }: { icon: typeof GraduationCap; label: string; color?: string; to?: string }) {
  const cls = "inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 transition-colors";
  const inner = <><Icon className={`h-3.5 w-3.5 ${color ?? "text-zinc-400"}`} /> {label}</>;
  const content = to ? <Link to={to} className={cls}>{inner}</Link> : <button className={cls}>{inner}</button>;
  return <motion.div whileHover={{ scale: 1.05, y: -1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>{content}</motion.div>;
}

/** Lazy iframe — only loads when user hovers the card, preventing browser freeze on mount */
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
  const h = previewDevice === "mobile" ? 320 : previewDevice === "tablet" ? 280 : 240;
  return (
    <div
      className={`flex flex-col rounded-xl border border-zinc-800 bg-gradient-to-b p-3 ${p.accent} hover:border-zinc-700 transition-colors`}
      onMouseEnter={() => setActive(true)}
    >
      <div className="text-sm font-medium text-white">{p.title}</div>
      <div className="mt-1 text-[11px] text-zinc-400">/preset-sites/{p.slug}/</div>
      <div
        className={`mt-3 overflow-hidden rounded-xl border border-zinc-700 bg-black shadow-lg ${
          previewDevice === "mobile" ? "mx-auto max-w-[360px]" : previewDevice === "tablet" ? "mx-auto max-w-[600px]" : "w-full"
        }`}
        style={{ height: h }}
      >
        {active ? (
          <iframe src={`/preset-sites/${p.slug}/`} title={p.title} className="h-full w-full border-0" />
        ) : (
          <div className="flex h-full items-center justify-center gap-2 text-[11px] text-zinc-500">
            <Eye className="h-3.5 w-3.5" /> hover to preview
          </div>
        )}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <a href={`/preset-sites/${p.slug}/`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-zinc-900 hover:bg-zinc-100"><Eye className="h-3 w-3" /> Live</a>
        <button onClick={() => onShowCode(p.slug)} className="inline-flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-[11px] font-medium text-zinc-200 hover:bg-zinc-700"><Code2 className="h-3 w-3" /> Code</button>
        <Link to="/design" className="inline-flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-[11px] font-medium text-zinc-300 hover:bg-zinc-800"><Sparkles className="h-3 w-3" /> Recreate</Link>
      </div>
    </div>
  );
}
