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
import { Paperclip, X, FileText, Sparkles, Cable, Globe, Download, ExternalLink, Wrench, ChevronDown, Copy, Check, Brain, Zap, Users, Layers, Eye, Code2 } from "lucide-react";
import { z } from "zod";
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
    <div className="flex h-full flex-col">
      <header className="flex items-center justify-between border-b border-border bg-surface/60 px-6 py-3">
        <div className="flex items-center gap-3">
          <StatusBadge status={busy ? "processing" : "ready"} />
          <span className="text-mono-xs">Thread {threadId.slice(0, 8)}</span>
        </div>
        <Select value={model} onValueChange={setModel}>
          <SelectTrigger className="h-8 w-[220px] text-xs">
            <SelectValue>
              <span className="flex items-center gap-2">
                <span className="text-primary">{current.icon}</span>
                {current.label}
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
                  <div className="px-2 py-1 text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono">
                    {titles[provider]}
                  </div>
                  {provModels.map((m) => (
                    <SelectItem key={m.id} value={m.id}>
                      <span className="flex items-center gap-2">
                        <span className="text-primary">{m.icon}</span>
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
              <div className="py-16 text-center text-sm text-muted-foreground">
                Send a message to begin.
              </div>
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
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="mx-auto w-full max-w-3xl px-4">
                <div className="flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/30 via-blue-950/20 to-indigo-950/30 p-4 backdrop-blur">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20">
                    <Brain className="h-5 w-5 text-cyan-400" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-white">Thinking</span>
                      <span className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.span key={i} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        ))}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400">Gathering context · selecting best model · planning steps</p>
                  </div>
                  <div className="hidden items-center gap-1 text-[10px] font-mono text-cyan-300/70 sm:flex">
                    <Zap className="h-3 w-3" /> Gemini Flash 2.0
                  </div>
                </div>
              </motion.div>
            )}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
        {busy && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto w-full max-w-3xl px-4 pt-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-3">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1">
                  {["CEO", "Plan", "Build"].map((a, i) => (
                    <motion.div key={a} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }} className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-zinc-900 bg-gradient-to-br from-violet-500 to-indigo-600 text-[8px] font-bold text-white">
                      {a[0]}
                    </motion.div>
                  ))}
                </div>
                <div className="flex-1">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                    <motion.div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" initial={{ width: "15%" }} animate={{ width: ["15%", "65%", "35%", "85%"] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
                  </div>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                    {status === "streaming" ? "streaming reply…" : "agents working — planner · builder · reviewer"}
                  </p>
                </div>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}>
                  <Layers className="h-4 w-4 text-zinc-500" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
        {/* Task completion: live view + code + how AI worked + 5 suggested prompts */}
        {!busy && messages.length > 2 && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mx-auto w-full max-w-3xl px-4 pt-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <h3 className="text-sm font-semibold text-white">Task completed — live view · code · how it worked</h3>
                <span className="ml-auto rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-400">Gemini Flash 2.0</span>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <a href="/preset-sites/aceternity-ai-saas/" target="_blank" rel="noreferrer" className="group rounded-xl border border-zinc-800 bg-zinc-900 p-3 hover:border-zinc-700">
                  <div className="flex items-center gap-2 text-xs font-medium text-white"><Eye className="h-3.5 w-3.5" /> Live view</div>
                  <div className="mt-2 aspect-video overflow-hidden rounded-lg border border-zinc-800 bg-black">
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-sky-500/20 to-indigo-600/20 text-[10px] text-zinc-400">Preview</div>
                  </div>
                  <div className="mt-2 text-[11px] text-zinc-500">Open <span className="text-sky-400">/preset-sites/…</span> <ExternalLink className="ml-1 inline h-3 w-3" /></div>
                </a>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-white"><Code2 className="h-3.5 w-3.5" /> Code</div>
                  <div className="mt-2 rounded-lg bg-black p-2 font-mono text-[10px] leading-relaxed text-zinc-300">
                    <div className="text-sky-400">export default function Page()</div>
                    <div>{"{"} return &lt;div className="hero"&gt;…&lt;/div&gt; {"}"}</div>
                  </div>
                  <div className="mt-2 flex gap-1.5">
                    <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-400">SEO ✓</span>
                    <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-400">Legal ✓</span>
                    <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-400">Security ✓</span>
                  </div>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-white"><Brain className="h-3.5 w-3.5" /> How AI worked</div>
                  <ol className="mt-2 space-y-1 text-[11px] text-zinc-400">
                    <li className="flex gap-1.5"><span className="text-emerald-400">1.</span> Selected <span className="text-white">Gemini Flash 2.0</span> (best for website)</li>
                    <li className="flex gap-1.5"><span className="text-emerald-400">2.</span> Generated design tokens + layout</li>
                    <li className="flex gap-1.5"><span className="text-emerald-400">3.</span> Built & verified · deployed</li>
                    <li className="flex gap-1.5"><span className="text-emerald-400">4.</span> Checked API / Deploy / GitHub</li>
                  </ol>
                  <div className="mt-2 flex gap-1">
                    <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">API ✓</span>
                    <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">Deploy ✓</span>
                    <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">GitHub ✓</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-xs font-medium text-zinc-300">5 suggested next steps</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[
                    "Deploy to Vercel and push to GitHub",
                    "Add SEO meta + OG images and check Legal pages",
                    "Improve UI with aurora + shimmer animations",
                    "Add API integration and test with real data",
                    "Export as ZIP and share live link",
                  ].map((p) => (
                    <button key={p} onClick={() => handleSubmit({ text: p, files: [] })} className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300 hover:bg-zinc-700 hover:text-white">
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mx-auto w-full max-w-3xl p-4">
        <TooltipProvider>
          <PromptInput onSubmit={handleSubmit} multiple accept="image/*,application/pdf,text/*,.md,.json,.csv">
          <AttachmentStrip />
          <PromptInputTextarea placeholder="Ask Jarvis…" autoFocus />
          <PromptInputFooter>
            <PromptInputTools className="flex-wrap gap-1.5">
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger tooltip="Add photos or files">
                  <Paperclip className="h-4 w-4" />
                  <span className="hidden sm:inline">Attach</span>
                </PromptInputActionMenuTrigger>
                <PromptInputActionMenuContent>
                  <PromptInputActionAddAttachments label="Add photos or files" />
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

function ComposerChips() {
  const settingsFn = useServerFn(getSettings);
  const { data: settings } = useQuery({ queryKey: ["settings"], queryFn: () => settingsFn({}) });
  const [webSearch, setWebSearch] = useState(false);

  const skills = ((settings?.enabled_skills as string[] | undefined) ?? []).length;
  const connectors = ((settings?.enabled_connectors as string[] | undefined) ?? []).length;

  return (
    <>
      <Link
        to="/console/skills"
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground hover:border-primary/40 hover:text-foreground"
      >
        <Sparkles className="h-3.5 w-3.5 text-primary" />
        <span>Skills</span>
        <span className="rounded-full bg-primary/15 px-1.5 text-[10px] font-medium text-primary">{skills}</span>
      </Link>
      <Link
        to="/console/connectors"
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground hover:border-primary/40 hover:text-foreground"
      >
        <Cable className="h-3.5 w-3.5 text-primary" />
        <span>MCP</span>
        <span className="rounded-full bg-primary/15 px-1.5 text-[10px] font-medium text-primary">{connectors}</span>
      </Link>
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
