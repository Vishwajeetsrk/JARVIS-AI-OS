import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { formatDistanceToNowStrict } from "date-fns";
import { Send, Wrench, MessageSquare, Sparkles, Bot, AlertTriangle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { listActivity, listMessages, type ActivityRow } from "@/lib/dashboard.functions";

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

export function ActivityFeed() {
  const listFn = useServerFn(listActivity);
  const fallbackFn = useServerFn(listMessages);
  const [items, setItems] = useState<FeedItem[]>([]);
  const [fellBack, setFellBack] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { data: initial, isError } = useQuery({
    queryKey: ["activity"],
    queryFn: () => listFn({}),
    retry: false,
  });

  useEffect(() => {
    if (initial) setItems((initial as unknown as FeedItem[]).slice(0, 60));
  }, [initial]);

  // Fallback if the agent_activity table isn't deployed yet (old messages only).
  useEffect(() => {
    if (!isError) return;
    setFellBack(true);
    fallbackFn({}).then((rows) => {
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
    }).catch(() => setError("Could not load activity."));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  // Real-time: append new activity rows as they land.
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
            setItems((prev) => {
              const next = [row, ...prev.filter((i) => i.id !== row.id)];
              return next.slice(0, 60);
            });
          },
        )
        .subscribe();
    })();

    return () => {
      mounted = false;
      channel?.unsubscribe();
    };
  }, []);

  const grouped = useMemo(() => {
    // Show today's date heading then "earlier"
    return items;
  }, [items]);

  if (error) {
    return (
      <div className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-xs text-destructive">
        <AlertTriangle className="h-4 w-4" /> {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {items.length === 0 && (
        <div className="py-8 text-center text-xs text-muted-foreground">
          No activity yet — say something to Jarvis and it will stream in live.
        </div>
      )}
      <ul className="space-y-1">
        {grouped.map((item) => {
          const Icon = iconFor(item.kind);
          return (
            <li key={item.id} className="group flex gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-surface/70">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-background text-muted-foreground">
                <Icon className="h-3.5 w-3.5" />
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
      {fellBack && (
        <p className="px-2 pb-1 pt-2 text-[10px] text-muted-foreground/50">
          Showing recent messages (activity table not deployed yet).
        </p>
      )}
    </div>
  );
}
