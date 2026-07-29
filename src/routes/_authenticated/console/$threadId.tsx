import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage, type FileUIPart } from "ai";
import { useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { loadMessages, getSettings } from "@/lib/threads.functions";
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
  PromptInputActionAddAttachments,
  usePromptInputAttachments,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { StatusBadge } from "@/components/jarvis/status-badge";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Paperclip, X, FileText, Sparkles, Cable, Globe } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/_authenticated/console/$threadId")({
  validateSearch: (s) => z.object({ seed: z.string().optional() }).parse(s),
  component: ThreadView,
});

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
  const { seed } = Route.useSearch();
  const loadFn = useServerFn(loadMessages);
  const settingsFn = useServerFn(getSettings);
  const seededRef = useRef(false);

  const { data: settings } = useQuery({ queryKey: ["settings"], queryFn: () => settingsFn({}) });
  const [model, setModel] = useState<string>(MODELS[0].id);
  useEffect(() => {
    if (settings?.default_model && MODELS.some((m) => m.id === settings.default_model)) {
      setModel(settings.default_model);
    }
  }, [settings?.default_model]);

  const { data: initial = [], isLoading } = useQuery({
    queryKey: ["messages", threadId],
    queryFn: () => loadFn({ data: { threadId } }),
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
        body: () => ({ model, threadId }),
      }),
    [model, threadId],
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
    sendMessage({ text: seed });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seed, isLoading]);

  const busy = status === "submitted" || status === "streaming";

  const handleSubmit = (msg: { text: string; files: FileUIPart[] }) => {
    const text = msg.text.trim();
    if ((!text && msg.files.length === 0) || busy) return;
    sendMessage({
      text: text || (msg.files.length ? "(attached files)" : ""),
      files: msg.files,
    });
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
            {(["gemini", "groq"] as ModelProvider[]).map((provider) => (
              <>
                <div key={provider} className="px-2 py-1 text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono">
                  {provider === "gemini" ? "✦ Google Gemini (Free)" : "⚡ Groq (Free)"}
                </div>
                {MODELS.filter((m) => m.provider === provider).map((m) => (
                  <SelectItem key={m.id} value={m.id}>
                    <span className="flex items-center gap-2">
                      <span className="text-primary">{m.icon}</span>
                      {m.label}
                    </span>
                  </SelectItem>
                ))}
              </>
            ))}
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
                    return null;
                  })}
                </MessageContent>
              </Message>
            ))}
            {status === "submitted" && (
              <Message from="assistant">
                <MessageContent>
                  <Shimmer>Thinking…</Shimmer>
                </MessageContent>
              </Message>
            )}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
      </div>

      <div className="mx-auto w-full max-w-3xl p-4">
        <PromptInput onSubmit={handleSubmit} multiple accept="image/*,application/pdf,text/*,.md,.json,.csv">
          <AttachmentStrip />
          <PromptInputTextarea placeholder="Ask Jarvis…" autoFocus />
          <PromptInputFooter>
            <PromptInputTools className="flex-wrap gap-1.5">
              <PromptInputActionAddAttachments>
                <Paperclip className="h-4 w-4" />
                <span className="hidden sm:inline">Attach</span>
              </PromptInputActionAddAttachments>
              <ComposerChips />
            </PromptInputTools>
            <PromptInputSubmit status={status} />
          </PromptInputFooter>
        </PromptInput>
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
