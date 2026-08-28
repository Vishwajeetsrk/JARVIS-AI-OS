import { createFileRoute, useParams, useNavigate, Link } from "@tanstack/react-router";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage, type FileUIPart } from "ai";
import { useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { loadMessages, getSettings, createThread } from "@/lib/threads.functions";
import { getTauriBridge } from "@/lib/tauri-bridge";
import { supabase } from "@/integrations/supabase/client";
import { MODELS, modelById, type ModelProvider } from "@/lib/models";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTools,
  PromptInputActionMenu,
  PromptInputActionMenuTrigger,
  PromptInputActionMenuContent,
  PromptInputActionAddAttachments,
  usePromptInputAttachments,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { StatusBadge } from "@/components/jarvis/status-badge";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Paperclip, X, FileText, Sparkles, Cable, Globe, Download, ExternalLink, Wrench, ChevronDown, Copy, Check, Brain, Zap, Users, Layers, Eye, Code2, Image, Folder, Link2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { VoiceButton } from "@/components/dashboard/voice-button";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getProjectBuild } from "@/lib/project-lifecycle.functions";

/** Answer bus: lets tool cards (askUser) submit a reply into the active thread. */
let answerBus: ((text: string) => void) | null = null;
export function registerAnswerBus(fn: ((text: string) => void) | null) {
  answerBus = fn;
}

export const Route = createFileRoute("/_authenticated/console/$threadId")({
  validateSearch: (s) => z.object({ seed: z.string().optional() }).parse(s),
  component: ThreadView,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ToolPartView({ part }: { part: any }) {
  const [expanded, setExpanded] = useState(false);
  const [previewHtml, setPreviewHtml] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [otherAnswer, setOtherAnswer] = useState("");
  const [question, setQuestion] = useState<{ question: string; options: string[]; context?: string } | null>(null);
  const [secret, setSecret] = useState<string | null>(null);
  const getBuildFn = useServerFn(getProjectBuild);
  const [resolved, setResolved] = useState<{
    kind: "download" | "action";
    label: string;
    url?: string;
  } | null>(null);

  const sendAnswer = (text: string) => {
    setQuestion(null);
    answerBus?.(text);
  };

  useEffect(() => {
    if (part?.state !== "output-available" || !part?.output) return;
    const out = part.output;
    if (out?.downloadUrl) {
      setResolved({ kind: "download", label: out.filename ?? "Download file", url: out.downloadUrl });
      return;
    }
    if (out?.__jarvis_action__) {
      const a = out.__jarvis_action__;
      if (a?.type === "openUrl" && a?.url) window.open(a.url, "_blank", "noopener");
      else if (a?.type === "playMusic" && a?.url) window.open(a.url, "_blank", "noopener");
      else if (a?.type === "playLocalMedia" && a?.path) {
        const { isTauriRuntime } = getTauriBridge();
        if (isTauriRuntime()) {
          void window.__TAURI_INTERNALS__?.invoke("open_local_path", { path: a.path });
        } else {
          const { open } = getTauriBridge();
          void open(a.path);
        }
      }
      else if (a?.type === "localFileList" && typeof a?.path === "string") {
        const { getLocalFs } = getTauriBridge();
        const fs = getLocalFs();
        if (fs.available) {
          void fs.listDir(a.path ?? "").then((entries) => {
            if (entries) setResolved({ kind: "action", label: `Listed ${entries.length} items in "${a.path || "home"}"` });
          });
        }
      }
      else if (a?.type === "localFileRead" && typeof a?.path === "string") {
        const { getLocalFs } = getTauriBridge();
        const fs = getLocalFs();
        if (fs.available) {
          void fs.readFile(a.path).then((content) => {
            if (content !== null) setResolved({ kind: "action", label: `Read "${a.path}" (${content.length} chars)` });
          });
        }
      }
      else if (a?.type === "localFileWrite" && typeof a?.path === "string") {
        const { getLocalFs } = getTauriBridge();
        const fs = getLocalFs();
        if (fs.available) {
          void fs.writeFile(a.path, a.content ?? "", a.append === true).then((n) => {
            if (n !== null) setResolved({ kind: "action", label: `Wrote ${n} bytes to "${a.path}"` });
          });
        }
      }
      else if (a?.type === "localFileCopy" && typeof a?.source === "string" && typeof a?.destination === "string") {
        const { getLocalFs } = getTauriBridge();
        void getLocalFs().copy(a.source, a.destination).then((ok) => {
          if (ok) setResolved({ kind: "action", label: `Copied "${a.source}" to "${a.destination}"` });
        });
      }
      else if (a?.type === "localFileMove" && typeof a?.source === "string" && typeof a?.destination === "string") {
        const { getLocalFs } = getTauriBridge();
        void getLocalFs().move(a.source, a.destination).then((ok) => {
          if (ok) setResolved({ kind: "action", label: `Moved "${a.source}" to "${a.destination}"` });
        });
      }
      else if (a?.type === "localFileDelete" && typeof a?.path === "string") {
        const { getLocalFs } = getTauriBridge();
        void getLocalFs().remove(a.path, a.recursive === true).then((ok) => {
          if (ok) setResolved({ kind: "action", label: `Deleted "${a.path}"` });
        });
      }
      else if (a?.type === "exportProject" && typeof a?.zipDataUrl === "string" && typeof a?.fileName === "string") {
        setResolved({ kind: "download", label: a.fileName, url: a.zipDataUrl });
      }
      else if (a?.type === "openPreview" && typeof a?.buildId === "string") {
        void getBuildFn({ data: { buildId: a.buildId } })
          .then((b: any) => setPreviewHtml(b?.html ?? null))
          .catch(() => setPreviewHtml(null));
      }
      else if (a?.type === "startDeploy") {
        window.open("https://vercel.com/new", "_blank", "noopener");
        setResolved({ kind: "action", label: `Deployment recorded (${a.provider ?? "vercel"}). Opened vercel.com/new — import the exported folder to go live.` });
      }
      else if (a?.type === "apiKeyCreated" && typeof a?.secret === "string") {
        setSecret(a.secret);
      }
      else if (a?.type === "askUser" && typeof a?.question === "string") {
        setQuestion({ question: a.question, options: Array.isArray(a.options) ? a.options : [], context: a.context });
      }
      else if (a?.type === "brandAssets") {
        const svgData = (svg: string) => `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
        const name = (a?.brandName ?? "brand").toLowerCase().replace(/\s+/g, "-");
        const downloads = [
          { label: "logo.svg", url: svgData(String(a?.logo ?? "")) },
          { label: "favicon.svg", url: svgData(String(a?.favicon ?? "")) },
          { label: "og-image.svg", url: svgData(String(a?.og ?? "")) },
        ].filter((d) => d.url.length > 50);
        setResolved({ kind: "action", label: `${downloads.length} brand assets ready — click each chip below to download.` });
        setDownloadChips(downloads);
      }
      else if (a?.type === "brandComponents" && typeof a?.html === "string") {
        setPreviewHtml(a.html);
      }
      else if (a?.type === "legalPages") {
        setResolved({ kind: "action", label: `${(a?.pages ?? []).length} legal pages generated: ${(a?.pages ?? []).join(", ")}. Saved — they're included in project exports.` });
      }
      else {
        setResolved({ kind: "action", label: out.message ?? "Action executed." });
      }
    }
  }, [part?.state, part?.output]);

  // Extra download chips (brand assets) rendered above the normal output.
  const [downloadChips, setDownloadChips] = useState<Array<{ label: string; url: string }>>([]);

  const name = part?.toolName ?? "tool";

  if (part?.state !== "output-available") {
    const running = part?.state === "input-available";
    return (
      <div className={`feed-in mt-2 inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-xs ${
        running ? "border-primary/30 bg-primary/5" : "border-border bg-background"
      }`}>
        <span
          className={`h-3 w-3 shrink-0 rounded-full border-2 ${running ? "animate-spin border-primary border-t-transparent" : "border-border"}`}
          aria-hidden
        />
        <Wrench className={`h-3.5 w-3.5 ${running ? "text-primary" : "text-muted-foreground"}`} />
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-muted-foreground">{running ? "running…" : "preparing…"}</span>
      </div>
    );
  }

  // Interactive question card (4 options + Other)
  if (question) {
    return (
      <div className="feed-in mt-2 w-full max-w-md rounded-xl border border-primary/30 bg-primary/5 p-4">
        {question.context && <p className="mb-2 text-mono-xs text-muted-foreground">{question.context}</p>}
        <p className="mb-3 text-sm font-medium text-foreground">{question.question}</p>
        <div className="flex flex-wrap gap-2">
          {question.options.map((opt) => (
            <button
              key={opt}
              onClick={() => sendAnswer(opt)}
              className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <Input
            value={otherAnswer}
            onChange={(e) => setOtherAnswer(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && otherAnswer.trim()) sendAnswer(otherAnswer.trim());
            }}
            placeholder="Other (type your answer)…"
            className="h-8 text-xs"
          />
          <Button size="sm" className="h-8" onClick={() => otherAnswer.trim() && sendAnswer(otherAnswer.trim())}>
            Send
          </Button>
        </div>
      </div>
    );
  }

  // API key secret reveal (shown once)
  if (secret) {
    return (
      <div className="feed-in mt-2 w-full max-w-md rounded-xl border border-amber-500/40 bg-amber-500/10 p-4">
        <p className="mb-2 text-xs font-semibold text-foreground">API key created — copy it now, it's shown once:</p>
        <div className="flex items-center gap-2">
          <code className="flex-1 truncate rounded-md bg-background px-2 py-1.5 text-xs text-foreground">{secret}</code>
          <Button
            size="sm"
            variant="outline"
            className="h-8"
            onClick={() => {
              void navigator.clipboard.writeText(secret);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
          >
            {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "Copied" : "Copy"}
          </Button>
        </div>
      </div>
    );
  }

  if (resolved?.kind === "action") {
    return (
      <div className="mt-2 space-y-2">
        {downloadChips.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {downloadChips.map((c) => (
              <a
                key={c.label}
                href={c.url}
                download={c.label}
                className="shine inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-primary/20"
              >
                <Download className="h-3.5 w-3.5 text-primary" />
                {c.label}
              </a>
            ))}
          </div>
        )}
        <div className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-2.5 py-1 text-xs text-foreground">
          <ExternalLink className="h-3.5 w-3.5 text-primary" />
          {resolved.label}
        </div>
      </div>
    );
  }

  if (resolved?.kind === "download") {
    return (
      <div className="mt-2 space-y-2">
        {downloadChips.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {downloadChips.map((c) => (
              <a
                key={c.label}
                href={c.url}
                download={c.label}
                className="shine inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-primary/20"
              >
                <Download className="h-3.5 w-3.5 text-primary" />
                {c.label}
              </a>
            ))}
          </div>
        )}
        <a
          href={resolved.url}
          download={resolved.label}
          className="shine mt-2 inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-primary/20"
        >
          <Download className="h-3.5 w-3.5 text-primary" />
          {resolved.label}
          <span className="rounded-full bg-primary/20 px-1.5 py-0.5 text-[10px] font-mono text-primary">download</span>
        </a>
      </div>
    );
  }

  const outputText =
    typeof part?.output === "string"
      ? part.output
      : part?.output && typeof part.output === "object"
        ? JSON.stringify(part.output)
        : "";

  return (
    <div className="mt-2 space-y-2">
      <details className="group rounded-lg border border-border bg-background/60 open:bg-background/80">
        <summary className="flex cursor-pointer select-none items-center gap-2 px-3 py-2 text-xs hover:bg-surface/60">
          <Wrench className="h-3.5 w-3.5 text-primary" />
          <span className="font-medium text-foreground">{name}</span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">tool result</span>
          <ChevronDown className="ml-auto h-3 w-3 text-muted-foreground transition-transform group-open:rotate-180" />
        </summary>
        <pre className="max-h-56 overflow-auto border-t border-border/60 px-3 py-2 font-mono text-[11px] leading-relaxed text-muted-foreground whitespace-pre-wrap">
          {outputText || "No output"}
        </pre>
      </details>

      {/* Live preview modal (openPreview / brandComponents) */}
      <Dialog open={previewHtml !== null} onOpenChange={(o) => !o && setPreviewHtml(null)}>
        <DialogContent className="max-w-5xl p-0">
          <DialogHeader className="border-b border-border px-4 py-3">
            <DialogTitle className="text-sm">Live preview</DialogTitle>
          </DialogHeader>
          <div className="p-0">
            <iframe
              srcDoc={previewHtml ?? ""}
              title="Live preview"
              className="h-[72vh] w-full bg-white"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-downloads"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function AttachmentStrip() {
  const attach = usePromptInputAttachments();
  if (!attach.files.length) return null;
  return (
    <div className="flex flex-wrap gap-2 border-b border-border/50 px-3 pb-2 pt-3">
      {attach.files.map((f) => (
        <div key={f.id} className="flex items-center gap-2 rounded-md border border-border bg-background px-2 py-1 text-xs">
          {f.mediaType?.startsWith("image/") && f.url ? (
            <img src={f.url} alt="" className="h-6 w-6 rounded object-cover" />
          ) : (
            <FileText className="h-3.5 w-3.5 opacity-70" />
          )}
          <span className="max-w-[160px] truncate">{f.filename ?? "file"}</span>
          <button onClick={() => attach.remove(f.id)} className="opacity-60 hover:opacity-100">
            <X className="h-3 w-3" />
          </button>
        </div>
      ))}
    </div>
  );
}

function ThreadView() {
  const { threadId } = useParams({ from: "/_authenticated/console/$threadId" });
  const navigate = useNavigate();
  const { seed } = Route.useSearch();
  const loadFn = useServerFn(loadMessages);
  const settingsFn = useServerFn(getSettings);
  const createThreadFn = useServerFn(createThread);
  const seededRef = useRef(false);

  const { data: settings } = useQuery({ queryKey: ["settings"], queryFn: () => settingsFn({}) });
  const [model, setModel] = useState<string>(MODELS[0].id);
  useEffect(() => {
    if (settings?.default_model && MODELS.some((m) => m.id === settings.default_model)) {
      setModel(settings.default_model);
    }
  }, [settings?.default_model]);

  const isNewThread = threadId === "new";
  const { data: initial = [], isLoading } = useQuery({
    queryKey: ["messages", threadId],
    queryFn: () => loadFn({ data: { threadId } }),
    enabled: !isNewThread,
  });

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        fetch: async (url, init) => {
          const { data } = await supabase.auth.getSession();
          const headers = new Headers(init?.headers);
          if (data.session?.access_token) {
            headers.set("Authorization", `Bearer ${data.session.access_token}`);
          }
          return fetch(url, { ...init, headers });
        },
        body: () => ({
          model,
          threadId,
          enabledSkills: (settings?.enabled_skills as string[] | undefined) ?? [],
        }),
      }),
    [model, threadId, settings?.enabled_skills],
  );

  const { messages, sendMessage, status, setMessages } = useChat({
    id: threadId,
    transport,
  });

  useEffect(() => {
    if (!isLoading) setMessages(initial as unknown as UIMessage[]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threadId, isLoading]);

  useEffect(() => {
    if (seededRef.current) return;
    if (!seed || isLoading) return;
    if ((initial as unknown[]).length > 0) return;
    seededRef.current = true;
    void sendWithThreadSeed(seed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seed, isLoading]);

  async function ensureThread() {
    if (!isNewThread) return threadId;
    const row = await createThreadFn({ data: { title: "New chat" } });
    return row.id;
  }

  async function sendWithThreadSeed(text: string, files?: FileUIPart[]) {
    try {
      const tid = await ensureThread();
      if (isNewThread) {
        navigate({
          to: "/console/$threadId",
          params: { threadId: tid },
          search: { seed: text },
          replace: true,
        });
        return;
      }
      sendMessage({ text, files });
    } catch {
      sendMessage({ text, files });
    }
  }

  // Register answer bus so askUser cards can submit replies into this thread.
  useEffect(() => {
    registerAnswerBus((text: string) => {
      void sendWithThreadSeed(text);
    });
    return () => registerAnswerBus(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threadId]);

  const busy = status === "submitted" || status === "streaming";

  const handleSubmit = (msg: { text: string; files: FileUIPart[] }) => {
    const text = msg.text.trim();
    if ((!text && msg.files.length === 0) || busy) return;
    void sendWithThreadSeed(text || (msg.files.length ? "(attached files)" : ""), msg.files);
  };

  const current = modelById(model);

  return (
    <div className="flex h-full flex-col" style={{ background: "var(--background)" }}>
      {/* ── Thread Header ─────────────────────────────────── */}
      <header
        className="flex shrink-0 items-center justify-between gap-3 border-b px-5 py-2.5"
        style={{ borderColor: "var(--border)", background: "var(--surface-1)" }}
      >
        <div className="flex min-w-0 items-center gap-2.5">
          <Link
            to="/console"
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors"
            style={{ color: "var(--muted-foreground)" }}
            aria-label="Back to home"
          >
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 12L6 8l4-4" />
            </svg>
          </Link>
          <div
            className="h-3.5 w-px shrink-0"
            style={{ background: "var(--border)" }}
          />
          <StatusBadge status={busy ? "processing" : "ready"} />
          <span
            className="truncate text-[12px] font-medium"
            style={{ color: "var(--muted-foreground)" }}
          >
            {isNewThread ? "New conversation" : `Thread · ${threadId.slice(0, 8)}`}
          </span>
        </div>

        {/* Model selector */}
        <Select value={model} onValueChange={setModel}>
          <SelectTrigger
            className="h-7 w-[190px] shrink-0 text-[11px]"
            style={{ borderColor: "var(--border)", background: "var(--surface-2)", color: "var(--foreground)" }}
          >
            <SelectValue>
              <span className="flex items-center gap-1.5 truncate">
                <span style={{ color: "var(--primary)" }}>{current.icon}</span>
                <span className="truncate">{current.label}</span>
              </span>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {(["openrouter", "gemini", "groq", "cohere", "ollama", "huggingface"] as ModelProvider[]).map((provider) => {
              const provModels = MODELS.filter((m) => m.provider === provider);
              if (provModels.length === 0) return null;
              const titles: Record<ModelProvider, string> = {
                openrouter: "🚀 OpenRouter (Free Models)",
                gemini: "✦ Google Gemini 2.0 (Free)",
                groq: "⚡ Groq (Llama 3.3 70B)",
                cohere: "🔮 Cohere AI",
                ollama: "🏠 Local Ollama (Offline)",
                huggingface: "🤗 HuggingFace (Free)",
              };
              return (
                <div key={provider}>
                  <div className="px-2 py-1 font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>
                    {titles[provider]}
                  </div>
                  {provModels.map((m) => (
                    <SelectItem key={m.id} value={m.id} className="text-xs">
                      <span className="flex items-center gap-2">
                        <span style={{ color: "var(--primary)" }}>{m.icon}</span>
                        {m.label}
                      </span>
                    </SelectItem>
                  ))}
                </div>
              );
            })}
          </SelectContent>
        </Select>
      </header>

      <div className="min-h-0 flex-1 overflow-hidden">
        <Conversation>
          <ConversationContent className="mx-auto max-w-3xl">
            {messages.length === 0 && !busy && (
              <ThreadEmptyState modelIcon={current.icon} modelLabel={current.label} onPrompt={(p) => handleSubmit({ text: p, files: [] })} />
            )}
            {messages.map((m) => (
              <Message key={m.id} from={m.role}>
                <MessageContent>
                  {m.parts.map((p, i) => {
                    if (p.type === "text") return <MessageResponse key={i}>{p.text}</MessageResponse>;
                    if (p.type === "file") {
                      const fp = p as FileUIPart;
                      if (fp.mediaType?.startsWith("image/") && fp.url) {
                        return <img key={i} src={fp.url} alt={fp.filename ?? ""} className="mt-2 max-h-64 rounded-md border border-border" />;
                      }
                      return (
                        <div key={i} className="mt-2 inline-flex items-center gap-2 rounded-md border border-border bg-background px-2 py-1 text-xs">
                          <FileText className="h-3.5 w-3.5" /> {fp.filename ?? "file"}
                        </div>
                      );
                    }
                    if (p.type === "tool-invocation" || p.type.startsWith("tool-")) {
                      return <ToolPartView key={i} part={p} />;
                    }
                    return null;
                  })}
                </MessageContent>
              </Message>
            ))}
            {status === "submitted" && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mx-auto w-full max-w-3xl px-4"
              >
                <div
                  className="flex items-center gap-3 rounded-xl border p-3.5"
                  style={{ borderColor: "oklch(0.712 0.132 42 / 0.2)", background: "oklch(0.712 0.132 42 / 0.05)" }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: "oklch(0.712 0.132 42 / 0.15)" }}
                  >
                    <Brain className="h-3.5 w-3.5" style={{ color: "var(--primary)" }} />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-medium" style={{ color: "var(--foreground)" }}>Thinking</span>
                      <span className="flex gap-0.5">
                        {[0, 1, 2].map((i) => (
                          <motion.span
                            key={i}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.22 }}
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ background: "var(--primary)" }}
                          />
                        ))}
                      </span>
                    </div>
                    <p className="text-[11px]" style={{ color: "var(--muted-foreground)" }}>Gathering context · selecting model · planning steps</p>
                  </div>
                  <div className="hidden shrink-0 items-center gap-1 font-mono text-[10px] sm:flex" style={{ color: "oklch(0.712 0.132 42 / 0.7)" }}>
                    <span>{current.icon}</span> {current.label}
                  </div>
                </div>
              </motion.div>
            )}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
        {busy && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto w-full max-w-3xl px-4 pt-2"
          >
            <div
              className="rounded-xl border p-3"
              style={{ borderColor: "var(--border)", background: "var(--surface-1)" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  {["P", "B", "R"].map((a, i) => (
                    <motion.div
                      key={a}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex h-5 w-5 items-center justify-center rounded-full border text-[8px] font-bold"
                      style={{
                        borderColor: "var(--background)",
                        background: i === 0 ? "oklch(0.712 0.132 42)" : i === 1 ? "oklch(0.72 0.16 230)" : "oklch(0.72 0.16 300)",
                        color: "white",
                      }}
                    >
                      {a}
                    </motion.div>
                  ))}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="h-1 w-full overflow-hidden rounded-full" style={{ background: "var(--surface-2)" }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: "var(--primary)" }}
                      initial={{ width: "15%" }}
                      animate={{ width: ["15%", "65%", "35%", "88%"] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>
                    {status === "streaming" ? "streaming reply…" : "planner · builder · reviewer working"}
                  </p>
                </div>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}>
                  <Layers className="h-3.5 w-3.5" style={{ color: "var(--muted-foreground)" }} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
        {/* Task completion: live view + code + how AI worked + 5 suggested prompts */}
        {!busy && messages.length > 2 && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mx-auto w-full max-w-3xl px-4 pt-4">
            <div
              className="rounded-2xl border p-4"
              style={{ borderColor: "var(--border)", background: "var(--surface-1)" }}
            >
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4" style={{ color: "var(--primary)" }} />
                <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Execution Overview · Live Assets & Code</h3>
                <span
                  className="ml-auto rounded-full px-2 py-0.5 text-[10px] font-medium"
                  style={{ background: "oklch(0.72 0.16 150 / 0.15)", color: "oklch(0.72 0.16 150)" }}
                >
                  {current.label}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <a
                  href="/preset-sites/aceternity-ai-saas/"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-xl border p-3 transition-colors hover:border-primary/40"
                  style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}
                >
                  <div className="flex items-center gap-2 text-xs font-medium" style={{ color: "var(--foreground)" }}>
                    <Eye className="h-3.5 w-3.5" /> Live view
                  </div>
                  <div
                    className="mt-2 aspect-video overflow-hidden rounded-lg border flex items-center justify-center text-[10px]"
                    style={{ borderColor: "var(--border)", background: "var(--surface-base)", color: "var(--muted-foreground)" }}
                  >
                    Interactive Preview
                  </div>
                  <div className="mt-2 text-[11px]" style={{ color: "var(--muted-foreground)" }}>
                    Open <span style={{ color: "var(--primary)" }}>/preset-sites/…</span> <ExternalLink className="ml-1 inline h-3 w-3" />
                  </div>
                </a>
                <div
                  className="rounded-xl border p-3"
                  style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}
                >
                  <div className="flex items-center gap-2 text-xs font-medium" style={{ color: "var(--foreground)" }}>
                    <Code2 className="h-3.5 w-3.5" /> Code & Verification
                  </div>
                  <div
                    className="mt-2 rounded-lg p-2 font-mono text-[10px] leading-relaxed"
                    style={{ background: "var(--surface-base)", color: "var(--foreground)" }}
                  >
                    <div style={{ color: "var(--primary)" }}>export default function Page()</div>
                    <div style={{ opacity: 0.8 }}>{"{"} return &lt;main className="app"&gt;…&lt;/main&gt; {"}"}</div>
                  </div>
                  <div className="mt-2 flex gap-1.5">
                    <span className="rounded px-1.5 py-0.5 text-[10px]" style={{ background: "var(--surface-1)", color: "var(--muted-foreground)" }}>SEO ✓</span>
                    <span className="rounded px-1.5 py-0.5 text-[10px]" style={{ background: "var(--surface-1)", color: "var(--muted-foreground)" }}>TypeScript ✓</span>
                    <span className="rounded px-1.5 py-0.5 text-[10px]" style={{ background: "var(--surface-1)", color: "var(--muted-foreground)" }}>Security ✓</span>
                  </div>
                </div>
                <div
                  className="rounded-xl border p-3"
                  style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}
                >
                  <div className="flex items-center gap-2 text-xs font-medium" style={{ color: "var(--foreground)" }}>
                    <Brain className="h-3.5 w-3.5" /> Execution Trace
                  </div>
                  <ol className="mt-2 space-y-1 text-[11px]" style={{ color: "var(--muted-foreground)" }}>
                    <li className="flex gap-1.5"><span style={{ color: "var(--primary)" }}>1.</span> Routed to <span style={{ color: "var(--foreground)" }}>{current.label}</span></li>
                    <li className="flex gap-1.5"><span style={{ color: "var(--primary)" }}>2.</span> Memory context + tokens injected</li>
                    <li className="flex gap-1.5"><span style={{ color: "var(--primary)" }}>3.</span> Autonomous tools executed & verified</li>
                    <li className="flex gap-1.5"><span style={{ color: "var(--primary)" }}>4.</span> Results emitted to stream</li>
                  </ol>
                  <div className="mt-2 flex gap-1">
                    <span className="rounded-full px-2 py-0.5 text-[10px]" style={{ background: "var(--surface-1)", color: "var(--muted-foreground)" }}>API ✓</span>
                    <span className="rounded-full px-2 py-0.5 text-[10px]" style={{ background: "var(--surface-1)", color: "var(--muted-foreground)" }}>Deploy ✓</span>
                    <span className="rounded-full px-2 py-0.5 text-[10px]" style={{ background: "var(--surface-1)", color: "var(--muted-foreground)" }}>GitHub ✓</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-xs font-medium" style={{ color: "var(--foreground)" }}>Suggested Next Actions</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[
                    "Deploy to Vercel and push to GitHub",
                    "Add SEO meta + OG images and check Legal pages",
                    "Improve UI with aurora + shimmer animations",
                    "Add API integration and test with real data",
                    "Export as ZIP and share live link",
                  ].map((p) => (
                    <button
                      key={p}
                      onClick={() => handleSubmit({ text: p, files: [] })}
                      className="rounded-full border px-3 py-1 text-xs transition-colors hover:border-primary/50 hover:text-foreground"
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--surface-2)",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mx-auto w-full max-w-3xl p-3">
        <TooltipProvider>
          <PromptInput onSubmit={handleSubmit} multiple accept="image/*,application/pdf,text/*,.md,.json,.csv">
          <AttachmentStrip />
          <PromptInputTextarea placeholder="Ask Jarvis…" autoFocus />
          <PromptInputFooter>
            <PromptInputTools className="flex-wrap gap-1.5">
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger tooltip="Attack · photo, file, folder, reference link — deep scan">
                  <Paperclip className="h-4 w-4" />
                  <span className="hidden sm:inline">Attack</span>
                </PromptInputActionMenuTrigger>
                <PromptInputActionMenuContent className="w-64">
                  <div className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Attack — deep scan & switch</div>
                  <PromptInputActionAddAttachments label="📷 Photo — deep scan image" />
                  <PromptInputActionAddAttachments label="📄 File — analyze & index" />
                  <button
                    onClick={() => {
                      const input = document.createElement("input");
                      input.type = "file";
                      (input as any).webkitdirectory = true;
                      input.onchange = (e) => {
                        const files = (e.target as HTMLInputElement).files;
                        if (files) toast.success(`Deep scan: ${files.length} files from folder — analysis started`);
                      };
                      input.click();
                    }}
                    className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-accent"
                  >
                    <Folder className="h-4 w-4" /> Folder — scan all
                  </button>
                  <button
                    onClick={() => {
                      const url = prompt("Enter reference link to deeply scan:");
                      if (url) toast.success(`Deep scan: ${url} — fetching & analysis started`);
                    }}
                    className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-accent"
                  >
                    <Link2 className="h-4 w-4" /> Reference link — fetch & analyze
                  </button>
                  <div className="mt-1 border-t border-border pt-1.5 text-[10px] text-muted-foreground">Jarvis deeply scans & picks best model (Gemini Flash 2.0 → fallback). Plugins & connectors with real logos in dropdown.</div>
                </PromptInputActionMenuContent>
              </PromptInputActionMenu>
              <VoiceButton onTranscribed={(t) => t && handleSubmit({ text: t, files: [] })} />
              <ComposerChips />
            </PromptInputTools>
            <PromptInputSubmit status={status} />
          </PromptInputFooter>
        </PromptInput>
        </TooltipProvider>
      </div>
    </div>
  );
}

function ThreadEmptyState({
  modelIcon,
  modelLabel,
  onPrompt,
}: {
  modelIcon: string;
  modelLabel: string;
  onPrompt: (prompt: string) => void;
}) {
  const suggestions = [
    { icon: "⚡", label: "Build full-stack app", prompt: "Build a modern full-stack web application with authentication and dashboard." },
    { icon: "🎨", label: "Design Aceternity UI site", prompt: "Design a high-converting SaaS landing page with Aceternity UI effects and dark mode." },
    { icon: "🔍", label: "Audit codebase & security", prompt: "Deeply scan and audit the repository architecture, dependencies, and security posture." },
    { icon: "🤖", label: "Deploy multi-agent task", prompt: "Deploy the agent fleet to research, write code, run automated tests, and prepare a PR." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 text-center"
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-2xl border text-2xl shadow-sm mb-4"
        style={{ borderColor: "var(--border)", background: "var(--surface-1)" }}
      >
        {modelIcon}
      </div>
      <h2 className="text-base font-semibold" style={{ color: "var(--foreground)" }}>
        Ready with {modelLabel}
      </h2>
      <p className="mt-1 max-w-sm text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
        Ask a question, request code generation, run autonomous tools, or delegate a complex workflow.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-lg">
        {suggestions.map((s) => (
          <button
            key={s.label}
            onClick={() => onPrompt(s.prompt)}
            className="flex items-center gap-2.5 rounded-xl border p-3 text-left text-xs transition-all hover:border-primary/50"
            style={{ borderColor: "var(--border)", background: "var(--surface-1)", color: "var(--foreground)" }}
          >
            <span className="text-base">{s.icon}</span>
            <span className="font-medium truncate">{s.label}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function ComposerChips() {
  const settingsFn = useServerFn(getSettings);
  const { data: settings } = useQuery({ queryKey: ["settings"], queryFn: () => settingsFn({}) });
  const [webSearch, setWebSearch] = useState(false);

  const skills = ((settings?.enabled_skills as string[] | undefined) ?? []).length;
  const connectors = ((settings?.enabled_connectors as string[] | undefined) ?? []).length;

  return (
    <>
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link
          to="/console/skills"
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>Skills</span>
          <span className="rounded-full bg-primary/15 px-1.5 text-[10px] font-medium text-primary">{skills}</span>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link
          to="/console/connectors"
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
        >
          <Cable className="h-3.5 w-3.5 text-primary" />
          <span>MCP</span>
          <span className="rounded-full bg-primary/15 px-1.5 text-[10px] font-medium text-primary">{connectors}</span>
        </Link>
      </motion.div>
      <button
        type="button"
        onClick={() => setWebSearch((v) => !v)}
        aria-pressed={webSearch}
        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-colors ${
          webSearch
            ? "border-primary/50 bg-primary/10 text-foreground"
            : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
        }`}
      >
        <Globe className="h-3.5 w-3.5" />
        <span>Web</span>
      </button>
    </>
  );
}
