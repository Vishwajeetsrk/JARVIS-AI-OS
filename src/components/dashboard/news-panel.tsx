import { useEffect, useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import { ExternalLink, Newspaper, RefreshCw } from "lucide-react";

interface NewsItem {
  title: string;
  link: string;
  source: string;
  publishedAt: string | null;
  snippet: string;
}

function parseWhen(value: string | null): Date | null {
  if (!value) return null;
  const t = Date.parse(value);
  return Number.isNaN(t) ? null : new Date(t);
}

export function NewsPanel() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  const load = async () => {
    setLoading(true);
    setFailed(false);
    try {
      const res = await fetch("/api/news");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as { items: NewsItem[] };
      setItems(data.items ?? []);
    } catch {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    const t = setInterval(load, 10 * 60 * 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-1 pb-2">
        <button
          onClick={load}
          disabled={loading}
          className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground hover:text-foreground"
        >
          <RefreshCw className={`h-3 w-3 ${loading ? "animate-spin" : ""}`} /> Refresh
        </button>
        <span className="font-mono text-[10px] uppercase text-muted-foreground/50">RSS · auto</span>
      </div>

      {loading && items.length === 0 && (
        <div className="space-y-3 py-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse space-y-1.5">
              <div className="h-3 w-3/4 rounded bg-border/60" />
              <div className="h-2.5 w-full rounded bg-border/40" />
              <div className="h-2.5 w-1/2 rounded bg-border/40" />
            </div>
          ))}
        </div>
      )}

      {failed && items.length === 0 && (
        <p className="py-6 text-center text-xs text-muted-foreground">
          Could not fetch news right now. Check your connection and refresh.
        </p>
      )}

      <ul className="space-y-1">
        {items.map((item, i) => {
          const when = parseWhen(item.publishedAt);
          return (
            <li key={`${item.link}-${i}`}>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group flex gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-surface/70"
              >
                <Newspaper className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-xs font-medium leading-snug text-foreground group-hover:text-primary">
                    {item.title}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 font-mono text-[10px] uppercase text-muted-foreground/50">
                    <span className="truncate">{item.source}</span>
                    {when ? (
                      <>
                        <span>·</span>
                        <span className="shrink-0">{formatDistanceToNowStrict(when, { addSuffix: true })}</span>
                      </>
                    ) : null}
                    <ExternalLink className="ml-auto h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
