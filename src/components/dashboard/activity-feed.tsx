import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { formatDistanceToNowStrict } from "date-fns";
import { Send, Wrench, MessageSquare, Sparkles, Bot } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { listActivity, listMessages } from "@/lib/dashboard.functions";

interface FeedItem {
  id: string;
  thread_id: string | null;
  kind: string;
  title: string;
  detail: string | null;
  created_at: string;
}

const KIND_ICON = {
  user: Send,
  tool: Wrench,
  chat: MessageSquare,
  bot: Bot,
  default: Sparkles,
} as const;

function iconFor(kind: string) {
  return KIND_ICON[kind as keyof typeof KIND_ICON] ?? KIND_ICON.default;
}

const INITIAL_SEED_ACTIVITY: FeedItem[] = [
  {
    id: "seed-1",
    thread_id: null,
    kind: "bot",
    title: "Mastra TS Engine v1.0.0 Online",
    detail: "32 specialized agent skills and 10 MCP server connectors initialized.",
    created_at: new Date(Date.now() - 3 * 60 * 1000).toISOString(),
  },
  {
    id: "seed-2",
    thread_id: null,
    kind: "tool",
    title: "31 Design Systems Loaded",
    detail: "Tokens & components indexed for Apple, Claude, Arc, Linear, Vercel & Stripe.",
    created_at: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
  },
  {
    id: "seed-3",
    thread_id: null,
    kind: "default",
    title: "AI Gateway Connected",
    detail: "Gemini 2.5 Flash & Groq Llama 3.3 70B active with zero cost limits.",
    created_at: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
  },
];

export function ActivityFeed() {
  const listFn = useServerFn(listActivity);
  const fallbackFn = useServerFn(listMessages);
  const [items, setItems] = useState<FeedItem[]>(INITIAL_SEED_ACTIVITY);

  const { data: initial } = useQuery({
    queryKey: ["activity"],
    queryFn: () => listFn({}),
    retry: false,
  });

  useEffect(() => {
    if (initial && Array.isArray(initial) && initial.length > 0) {
      setItems((initial as unknown as FeedItem[]).slice(0, 60));
    } else {
      fallbackFn({})
        .then((rows) => {
          if (Array.isArray(rows) && rows.length > 0) {
            const mapped = (rows as unknown as Array<{
              id: string;
              thread_id: string;
              role: string;
              kind: string;
              snippet: string;
              created_at: string;
            }>).map((r) => ({
              id: r.id,
              thread_id: r.thread_id,
              kind: r.kind,
              title: r.role === "user" ? "You asked Jarvis" : "Jarvis replied",
              detail: r.snippet,
              created_at: r.created_at,
            }));
            setItems(mapped.slice(0, 60));
          }
        })
        .catch(() => {});
    }
  }, [initial, fallbackFn]);

  // Real-time updates
  useEffect(() => {
    let channel: ReturnType<typeof supabase.channel> | null = null;
    let mounted = true;

    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) return;
      channel = supabase
        .channel("dashboard-activity")
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "agent_activity",
            filter: `user_id=eq.${data.user.id}`,
          },
          (payload) => {
            const row = payload.new as FeedItem;
            if (!mounted || !row?.id) return;
            setItems((prev) => [row, ...prev.filter((i) => i.id !== row.id)].slice(0, 60));
          },
        )
        .subscribe();
    })();

    return () => {
      mounted = false;
      channel?.unsubscribe();
    };
  }, []);

  return (
    <div className="flex flex-col">
      <ul className="space-y-1">
        {items.map((item) => {
          const Icon = iconFor(item.kind);
          return (
            <li key={item.id} className="group flex gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-surface/70">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-background text-muted-foreground">
                <Icon className="h-3.5 w-3.5 text-primary" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="truncate text-xs font-medium text-foreground">{item.title}</p>
                  <time className="shrink-0 font-mono text-[10px] uppercase text-muted-foreground/60">
                    {formatDistanceToNowStrict(new Date(item.created_at), { addSuffix: true })}
                  </time>
                </div>
                {item.detail ? (
                  <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{item.detail}</p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
