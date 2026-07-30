import { tool, type ToolSet } from "ai";
import { z } from "zod";
import { braveSearch, githubFetch, wolframAnswer, zapierTrigger } from "@/lib/connectors.server";

type Creds = Record<string, string>;

/** Loads the signed-in user's verified connector credentials. */
export async function loadCredentials(userId: string | null): Promise<Creds> {
  if (!userId) return {};
  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data } = await supabaseAdmin
      .from("connections")
      .select("provider, access_token, status")
      .eq("user_id", userId)
      .eq("status", "connected");
    const creds: Creds = {};
    for (const row of data ?? []) {
      if (row.access_token) creds[row.provider] = row.access_token;
      else creds[row.provider] = "local";
    }
    return creds;
  } catch {
    return {};
  }
}

/** Builds the in-thread tool set from native tools + connected providers. */
export function buildTools(creds: Creds, opts: { webSearch?: boolean } = {}): ToolSet {
  const tools: ToolSet = {
    calculator: tool({
      description: "Evaluate a precise arithmetic expression. Use for any numeric computation.",
      inputSchema: z.object({ expression: z.string().describe("e.g. (1234*17)/3 + 2**8") }),
      execute: async ({ expression }) => {
        if (!/^[0-9+\-*/%.()eE\s,]*$/.test(expression.replace(/\*\*/g, ""))) {
          return { error: "Only plain arithmetic expressions are allowed." };
        }
        try {
          // eslint-disable-next-line no-new-func
          const value = Function(`"use strict"; return (${expression});`)();
          return { expression, value };
        } catch (e) {
          return { error: e instanceof Error ? e.message : "Invalid expression" };
        }
      },
    }),

    current_time: tool({
      description: "Get the current UTC date and time.",
      inputSchema: z.object({ timeZone: z.string().optional() }),
      execute: async ({ timeZone }) => {
        const now = new Date();
        return {
          iso: now.toISOString(),
          formatted: new Intl.DateTimeFormat("en-GB", {
            dateStyle: "full",
            timeStyle: "short",
            timeZone: timeZone || "UTC",
          }).format(now),
        };
      },
    }),
  };

  if (creds["brave-search"] && opts.webSearch !== false) {
    tools.web_search = tool({
      description: "Search the live web with Brave and return titles, URLs and snippets. Cite the URLs you use.",
      inputSchema: z.object({ query: z.string(), count: z.number().min(1).max(10).default(5) }),
      execute: async ({ query, count }) => {
        try {
          return { results: await braveSearch(creds["brave-search"], query, count) };
        } catch (e) {
          return { error: e instanceof Error ? e.message : "Search failed" };
        }
      },
    });
  }

  if (creds.wolfram) {
    tools.wolfram_alpha = tool({
      description: "Ask Wolfram Alpha for computational, scientific or unit-conversion answers.",
      inputSchema: z.object({ query: z.string() }),
      execute: async ({ query }) => {
        try {
          return { answer: await wolframAnswer(creds.wolfram, query) };
        } catch (e) {
          return { error: e instanceof Error ? e.message : "Wolfram failed" };
        }
      },
    });
  }

  if (creds.github) {
    const gh = creds.github;
    tools.github_list_repos = tool({
      description: "List the user's GitHub repositories, most recently updated first.",
      inputSchema: z.object({ limit: z.number().min(1).max(50).default(10) }),
      execute: async ({ limit }) => {
        try {
          const repos = await githubFetch<Array<{ full_name: string; description: string | null; html_url: string; open_issues_count: number; language: string | null }>>(
            gh, `/user/repos?per_page=${limit}&sort=updated`,
          );
          return { repos: repos.map((r) => ({ repo: r.full_name, description: r.description, url: r.html_url, openIssues: r.open_issues_count, language: r.language })) };
        } catch (e) {
          return { error: e instanceof Error ? e.message : "GitHub failed" };
        }
      },
    });
    tools.github_list_issues = tool({
      description: "List open issues or pull requests for a repository (owner/name).",
      inputSchema: z.object({ repo: z.string().describe("owner/name"), state: z.enum(["open", "closed", "all"]).default("open") }),
      execute: async ({ repo, state }) => {
        try {
          const issues = await githubFetch<Array<{ number: number; title: string; state: string; html_url: string; pull_request?: unknown }>>(
            gh, `/repos/${repo}/issues?state=${state}&per_page=20`,
          );
          return { issues: issues.map((i) => ({ number: i.number, title: i.title, state: i.state, url: i.html_url, isPR: !!i.pull_request })) };
        } catch (e) {
          return { error: e instanceof Error ? e.message : "GitHub failed" };
        }
      },
    });
    tools.github_read_file = tool({
      description: "Read a file from a GitHub repository.",
      inputSchema: z.object({ repo: z.string(), path: z.string(), ref: z.string().optional() }),
      execute: async ({ repo, path, ref }) => {
        try {
          const q = ref ? `?ref=${encodeURIComponent(ref)}` : "";
          const file = await githubFetch<{ content?: string; encoding?: string; name: string }>(gh, `/repos/${repo}/contents/${path}${q}`);
          const content = file.content && file.encoding === "base64" ? atob(file.content.replace(/\n/g, "")) : "";
          return { name: file.name, content: content.slice(0, 20000) };
        } catch (e) {
          return { error: e instanceof Error ? e.message : "GitHub failed" };
        }
      },
    });
  }

  if (creds.slack) {
    tools.slack_post_message = tool({
      description: "Post a message to a Slack channel the bot is a member of.",
      inputSchema: z.object({ channel: z.string().describe("Channel ID or #name"), text: z.string() }),
      execute: async ({ channel, text }) => {
        const r = await fetch("https://slack.com/api/chat.postMessage", {
          method: "POST",
          headers: { Authorization: `Bearer ${creds.slack}`, "Content-Type": "application/json" },
          body: JSON.stringify({ channel, text }),
        });
        const d = (await r.json()) as { ok?: boolean; error?: string; ts?: string };
        return d.ok ? { ok: true, ts: d.ts } : { error: d.error ?? `Slack failed (${r.status})` };
      },
    });
  }

  if (creds.notion) {
    tools.notion_search = tool({
      description: "Search Notion pages and databases shared with the integration.",
      inputSchema: z.object({ query: z.string() }),
      execute: async ({ query }) => {
        const r = await fetch("https://api.notion.com/v1/search", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${creds.notion}`,
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query, page_size: 10 }),
        });
        if (!r.ok) return { error: `Notion failed (${r.status})` };
        const d = (await r.json()) as { results?: Array<{ id: string; url?: string; object: string }> };
        return { results: (d.results ?? []).map((x) => ({ id: x.id, url: x.url, type: x.object })) };
      },
    });
  }

  if (creds.gcal) {
    tools.calendar_upcoming = tool({
      description: "List upcoming Google Calendar events for the primary calendar.",
      inputSchema: z.object({ maxResults: z.number().min(1).max(25).default(10) }),
      execute: async ({ maxResults }) => {
        const now = new Date().toISOString();
        const r = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${now}&singleEvents=true&orderBy=startTime&maxResults=${maxResults}`,
          { headers: { Authorization: `Bearer ${creds.gcal}` } },
        );
        if (!r.ok) return { error: `Google Calendar failed (${r.status})` };
        const d = (await r.json()) as { items?: Array<{ summary?: string; start?: { dateTime?: string; date?: string } }> };
        return { events: (d.items ?? []).map((e) => ({ title: e.summary, start: e.start?.dateTime ?? e.start?.date })) };
      },
    });
  }

  if (creds.gmail) {
    tools.gmail_recent = tool({
      description: "List recent Gmail message subjects and senders.",
      inputSchema: z.object({ query: z.string().default("in:inbox"), maxResults: z.number().min(1).max(15).default(8) }),
      execute: async ({ query, maxResults }) => {
        const list = await fetch(
          `https://gmail.googleapis.com/gmail/v1/users/me/messages?q=${encodeURIComponent(query)}&maxResults=${maxResults}`,
          { headers: { Authorization: `Bearer ${creds.gmail}` } },
        );
        if (!list.ok) return { error: `Gmail failed (${list.status})` };
        const d = (await list.json()) as { messages?: Array<{ id: string }> };
        const out: Array<{ from?: string; subject?: string }> = [];
        for (const m of (d.messages ?? []).slice(0, maxResults)) {
          const r = await fetch(
            `https://gmail.googleapis.com/gmail/v1/users/me/messages/${m.id}?format=metadata&metadataHeaders=From&metadataHeaders=Subject`,
            { headers: { Authorization: `Bearer ${creds.gmail}` } },
          );
          if (!r.ok) continue;
          const msg = (await r.json()) as { payload?: { headers?: Array<{ name: string; value: string }> } };
          const h = msg.payload?.headers ?? [];
          out.push({
            from: h.find((x) => x.name === "From")?.value,
            subject: h.find((x) => x.name === "Subject")?.value,
          });
        }
        return { messages: out };
      },
    });
  }

  if (creds.zapier) {
    tools.zapier_trigger = tool({
      description: "Trigger the user's Zapier Catch Hook with a JSON payload to run an automation.",
      inputSchema: z.object({ payload: z.record(z.string(), z.any()) }),
      execute: async ({ payload }) => {
        try {
          return await zapierTrigger(creds.zapier, payload);
        } catch (e) {
          return { error: e instanceof Error ? e.message : "Zapier failed" };
        }
      },
    });
  }

  if (creds.cloudflare) {
    tools.cloudflare_zones = tool({
      description: "List Cloudflare zones (domains) on the account.",
      inputSchema: z.object({}),
      execute: async () => {
        const r = await fetch("https://api.cloudflare.com/client/v4/zones?per_page=20", {
          headers: { Authorization: `Bearer ${creds.cloudflare}` },
        });
        if (!r.ok) return { error: `Cloudflare failed (${r.status})` };
        const d = (await r.json()) as { result?: Array<{ name: string; status: string }> };
        return { zones: (d.result ?? []).map((z) => ({ name: z.name, status: z.status })) };
      },
    });
  }

  return tools;
}
