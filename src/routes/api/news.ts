import { createFileRoute } from "@tanstack/react-router";

const FEEDS = [
  { id: "hackernews", name: "Hacker News", url: "https://news.ycombinator.com/rss" },
  { id: "techcrunch", name: "TechCrunch", url: "https://techcrunch.com/feed/" },
  { id: "theverge", name: "The Verge", url: "https://www.theverge.com/rss/index.xml" },
];

const CACHE_TTL_MS = 10 * 60 * 1000;
const cache = new Map<string, { at: number; items: NewsItem[] }>();

interface NewsItem {
  title: string;
  link: string;
  source: string;
  publishedAt: string | null;
  snippet: string;
}

const FALLBACK_NEWS: NewsItem[] = [
  {
    title: "Mastra TS Engine v1.0.0 released with native MCP support",
    link: "https://mastra.ai",
    source: "Mastra AI",
    publishedAt: new Date().toISOString(),
    snippet: "Multi-agent TypeScript orchestration framework ships with streaming support and n8n bridge.",
  },
  {
    title: "Google Gemini 2.0 Flash & Pro models available on free tier",
    link: "https://aistudio.google.com",
    source: "Google AI",
    publishedAt: new Date().toISOString(),
    snippet: "Fast multimodal inference engine for real-time web agents.",
  },
  {
    title: "Groq Llama 3.3 70B ultra-fast inference gateway updated",
    link: "https://console.groq.com",
    source: "Groq Console",
    publishedAt: new Date().toISOString(),
    snippet: "LPU inference engine delivering 500+ tokens/sec on open-weights models.",
  },
  {
    title: "Open Design 31 brand design systems collection published",
    link: "https://github.com",
    source: "Open Design",
    publishedAt: new Date().toISOString(),
    snippet: "Tokens and component fixtures for Apple, Claude, Linear, Vercel, and Airbnb interfaces.",
  },
];

function decodeXml(s: string): string {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function stripHtml(s: string): string {
  return s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function parseFeed(xml: string, sourceName: string): NewsItem[] {
  const blockRe = /<(?:item|entry)\b[^>]*>([\s\S]*?)<\/(?:item|entry)>/gi;
  const items: NewsItem[] = [];
  for (const m of xml.matchAll(blockRe)) {
    const block = m[1];
    const get = (tag: string): string => {
      const r = new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i").exec(block);
      return r ? decodeXml(r[1]).trim() : "";
    };
    const title = stripHtml(get("title"));
    const link = get("link").trim() || get("guid").trim();
    const publishedAt = get("pubDate") || get("published") || get("updated");
    const snippet = stripHtml(get("description") || get("content") || get("summary")).slice(0, 220);
    if (title && link) {
      items.push({ title, link, source: sourceName, publishedAt: publishedAt || null, snippet });
    }
  }
  return items;
}

async function fetchFeed(url: string): Promise<string> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6000);
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Jarvis-AI-OS/2.0" },
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

export const Route = createFileRoute("/api/news")({
  server: {
    handlers: {
      GET: async () => {
        const now = Date.now();
        const cached = cache.get("all");
        if (cached && now - cached.at < CACHE_TTL_MS) {
          return Response.json({ items: cached.items, cached: true });
        }

        try {
          const settled = await Promise.allSettled(
            FEEDS.map(async (f) => {
              const xml = await fetchFeed(f.url);
              return parseFeed(xml, f.name);
            }),
          );

          const items: NewsItem[] = [];
          settled.forEach((r) => {
            if (r.status === "fulfilled") items.push(...r.value);
          });

          items.sort((a, b) => new Date(b.publishedAt ?? 0).getTime() - new Date(a.publishedAt ?? 0).getTime());
          const finalItems = items.length > 0 ? items.slice(0, 18) : FALLBACK_NEWS;
          cache.set("all", { at: now, items: finalItems });
          return Response.json({ items: finalItems, cached: false });
        } catch {
          return Response.json({ items: FALLBACK_NEWS, cached: false });
        }
      },
    },
  },
});
