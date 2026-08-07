import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { resolveChatModel } from "@/lib/ai-providers";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { executeShell } from "@/mastra/tools/shell-executor";
import { createDocx } from "@/mastra/tools/docx-creator";
import { createPptx } from "@/mastra/tools/pptx-creator";
import { createXlsx } from "@/mastra/tools/xlsx-creator";
import { createReport } from "@/mastra/tools/report-creator";
import { executeCode } from "@/mastra/tools/code-runner";
import { listDesignSystems, getDesignSystem, getProjectSite, listProjectSites } from "@/lib/design-systems";
import { getSteeringForContext } from "@/lib/steering";

const DEFAULT_MODEL = "gemini-flash-latest";

const BASE_SYSTEM = `You are Jarvis — an AI operating system built for Vishwajeet.
You coordinate 32 specialized agents (ceo-agent, planner, saas-builder, designer,
researcher, writer, test-agent, reviewer, deployer, sre, memory-keeper,
governance, growth, ops, billing, connector, voice, coworker, open-design, docx-master, xlsx-engine, pdf-pro, pptx-deck).
Speak in a calm, precise, senior-engineer register. Prefer concrete steps,
short paragraphs, and code blocks when helpful. If the user attaches files,
reference them explicitly.

CAPABILITIES:
- Documents: createWordDocument (.docx), createPresentation (.pptx), createSpreadsheet (.xlsx), createReport (.md/.html), createPdf via createReport when available. After creating a file, tell the user the download chip appears above their message.
- Web: webSearch performs live web searches (no key needed). Use it for current events, research, and anything you are unsure about. youtubeSearch / youtubeOpen open YouTube in the user's browser.
- Markets: getStockQuote fetches live stock/crypto quotes and trends from Yahoo Finance.
- Coding: runCode executes a code snippet; executeShell runs shell commands (both require the user to have them enabled).
- Design: listDesignSystems / getDesignSystem return brand-grade design systems and live project sites; use them to apply consistent design.
- Actions that open the user's browser (YouTube, any URL) work through openUrl/youtubeSearch — when you use them, mention that a tab was opened.
- Memory: recallMemory searches past conversations. saveSkill lets you persist reusable knowledge after a complex task.
- Connectors: when the user has connected providers (GitHub, Slack, Notion, Google Calendar, Gmail, Zapier, Brave, ElevenLabs...), their tools become available automatically.
- Plans: roadmap returns structured learning paths; for building software, plan the architecture, then write code with runCode / create the files, and explain how to run them.`;

// ---------- helpers ----------

function toDataUrl(base64: string, mediaType: string): string {
  return `data:${mediaType};base64,${base64}`;
}

const DOCX_MT = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
const PPTX_MT = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
const XLSX_MT = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

const SAFE_NAME = (title: string) => title.replace(/[^a-zA-Z0-9]/g, "_");

function clientAction(type: string, payload: Record<string, unknown>, message: string) {
  return { ok: true, message, __jarvis_action__: { type, ...payload } };
}

async function duckDuckGoSearch(query: string, limit = 8): Promise<Array<{ title: string; url: string; snippet: string }>> {
  const res = await fetch(
    `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`,
    { headers: { "user-agent": "Mozilla/5.0 (JarvisAIOs/2.0)" } },
  );
  if (!res.ok) throw new Error(`Search failed (${res.status})`);
  const html = await res.text();
  const results: Array<{ title: string; url: string; snippet: string }> = [];
  const linkRe = /<a[^>]*class="result__a"[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g;
  const snippetRe = /<a[^>]*class="result__snippet"[^>]*>([\s\S]*?)<\/a>/g;
  let m: RegExpExecArray | null;
  const links: string[] = [];
  while ((m = linkRe.exec(html)) && links.length < limit) {
    const href = m[1].replace(/&amp;/g, "&");
    const title = m[2].replace(/<[^>]+>/g, "").trim();
    let url = href;
    try {
      const u = new URL(href, "https://duckduckgo.com");
      if (u.searchParams.get("uddg")) url = decodeURIComponent(u.searchParams.get("uddg")!);
    } catch {}
    links.push(url);
    results.push({ title, url, snippet: "" });
  }
  const snippets: string[] = [];
  while ((m = snippetRe.exec(html)) && snippets.length < limit) {
    snippets.push(m[1].replace(/<[^>]+>/g, "").trim());
  }
  results.forEach((r, i) => {
    r.snippet = snippets[i] ?? "";
  });
  return results.filter((r) => r.title);
}

interface UserSettingsRow {
  enabled_skills?: string[] | null;
  enabled_tools?: string[] | null;
  enabled_connectors?: string[] | null;
  enabled_plugins?: string[] | null;
  docx_enabled?: boolean | null;
  pptx_enabled?: boolean | null;
  xlsx_enabled?: boolean | null;
  code_execution_enabled?: boolean | null;
  shell_execution_enabled?: boolean | null;
  auto_learn_enabled?: boolean | null;
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as {
            messages?: UIMessage[];
            model?: string;
            threadId?: string;
            enabledSkills?: string[];
          };

          if (!Array.isArray(body.messages)) {
            return new Response("messages required", { status: 400 });
          }
          const requestMessages = body.messages.map((m) => {
            const anyMsg = m as any;
            if (anyMsg.parts) return anyMsg as UIMessage;
            const content = anyMsg.content;
            const parts = Array.isArray(content)
              ? content.map((c: any) =>
                  c?.type === "text"
                    ? { type: "text" as const, text: c.text ?? "" }
                    : c?.type === "image"
                      ? { type: "file" as const, mediaType: c.mediaType ?? "image/png", data: c.data }
                      : c,
                )
              : typeof content === "string"
                ? [{ type: "text" as const, text: content }]
                : [];
            return { ...anyMsg, parts };
          });

          if (requestMessages.length === 0) {
            return new Response("messages must not be empty", { status: 400 });
          }

          if (requestMessages.length > 100) {
            return new Response("messages limit exceeded (max 100)", { status: 400 });
          }

          const auth = request.headers.get("authorization") ?? "";
          const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
          let userId: string | null = null;
          let userClient: any = null;
          if (token) {
            try {
              const url = process.env.SUPABASE_URL!;
              const anon = process.env.SUPABASE_PUBLISHABLE_KEY!;
              const client = createClient(url, anon, {
                auth: { persistSession: false, autoRefreshToken: false },
                global: { headers: { Authorization: `Bearer ${token}`, apikey: anon } },
              });
              const { data } = await client.auth.getUser(token);
              userId = data.user?.id ?? null;
              userClient = client;
            } catch {}
          }

          // Load the user's settings to gate tools + inject enabled skills.
          let settings: UserSettingsRow = {};
          if (userId && userClient) {
            try {
              const { data } = await userClient
                .from("user_settings")
                .select("*")
                .eq("user_id", userId)
                .maybeSingle();
              if (data) settings = data as UserSettingsRow;
            } catch {}
          }
          const enabledSkills = body.enabledSkills?.length
            ? body.enabledSkills
            : (settings.enabled_skills ?? []);
          const codeEnabled = settings.code_execution_enabled !== false;
          const shellEnabled = settings.shell_execution_enabled !== false;
          const docxEnabled = settings.docx_enabled !== false;
          const pptxEnabled = settings.pptx_enabled !== false;
          const xlsxEnabled = settings.xlsx_enabled !== false;

          const requestedModel = body.model ?? DEFAULT_MODEL;
          const resolved = await resolveChatModel(requestedModel);
          const aiModel = resolved.model;

          // Cross-session memory recall: pull relevant past context for this turn.
          let system = BASE_SYSTEM;
          if (userId) {
            const lastUser = [...requestMessages].reverse().find((m) => m.role === "user");
            const userText = lastUser
              ? (Array.isArray((lastUser as any).parts)
                  ? (lastUser as any).parts
                      .map((p: any) => (p?.type === "text" ? p.text : ""))
                      .join(" ")
                  : "")
              : "";
            if (userText.split(/\s+/).length >= 3) {
              try {
                const { recall, recallToPrompt } = await import("@/lib/recall");
                const hits = await recall(userId, userText, 3);
                system = system + recallToPrompt(hits);
              } catch {}
            }
          }

          // Inject enabled skill contents into the system prompt.
          if (enabledSkills.length > 0) {
            try {
              const { getShippedSkillContent } = await import("@/lib/skills-catalog");
              const parts: string[] = [];
              for (const skill of enabledSkills.slice(0, 12)) {
                const content = getShippedSkillContent(skill);
                if (content) parts.push(content.slice(0, 4000));
              }
              if (parts.length) {
                system +=
                  "\n\n=== ENABLED SKILLS (follow these workflows when relevant) ===\n" +
                  parts.join("\n\n---\n\n") +
                  "\n=== END ENABLED SKILLS ===";
              }
            } catch {}
          }

          try {
            const steeringContext = getSteeringForContext();
            if (steeringContext) system = system + steeringContext;
          } catch {}

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const tools: any = {
            // ----- Documents, decks, sheets, reports (files are delivered to the chat) -----
            createWordDocument: {
              description:
                "Create a Word document (.docx). Sections: heading, paragraph, list, table, pageBreak. Use when the user asks for a document, report as Word, letter, resume, proposal, etc.",
              parameters: z.object({
                title: z.string(),
                author: z.string().optional(),
                sections: z.array(z.any()),
                orientation: z.enum(["portrait", "landscape"]).optional(),
              }),
              execute: async (args: { title: string; author?: string; sections: any[]; orientation?: "portrait" | "landscape" }) => {
                if (!docxEnabled) return { error: "Word documents are disabled in Settings → Model & Tools." };
                const blob = await createDocx(args);
                const base64 = Buffer.from(await blob.arrayBuffer()).toString("base64");
                const filename = `${SAFE_NAME(args.title)}.docx`;
                return {
                  ok: true,
                  filename,
                  mediaType: DOCX_MT,
                  downloadUrl: toDataUrl(base64, DOCX_MT),
                  size: blob.size,
                  message: `Created ${filename}. Tell the user to click the download chip above.`,
                };
              },
            },
            createPresentation: {
              description:
                "Create a PowerPoint presentation (.pptx) with slides (title, titleContent, twoColumn, sectionHeader, blank). Use for decks, pitches, slideshows.",
              parameters: z.object({
                title: z.string(),
                author: z.string().optional(),
                slides: z.array(z.any()),
                defaultBgColor: z.string().optional(),
                defaultTextColor: z.string().optional(),
                size: z.enum(["16:9", "4:3"]).optional(),
              }),
              execute: async (args: { title: string; author?: string; slides: any[]; defaultBgColor?: string; defaultTextColor?: string; size?: "16:9" | "4:3" }) => {
                if (!pptxEnabled) return { error: "Presentations are disabled in Settings → Model & Tools." };
                const pptx = await createPptx(args);
                const base64 = (await pptx.write({ outputType: "base64" })) as unknown as string;
                const filename = `${SAFE_NAME(args.title)}.pptx`;
                return {
                  ok: true,
                  filename,
                  mediaType: PPTX_MT,
                  downloadUrl: toDataUrl(base64, PPTX_MT),
                  size: Math.ceil((base64.length * 3) / 4),
                  message: `Created ${filename} with ${args.slides.length} slides. Tell the user to click the download chip above.`,
                };
              },
            },
            createSpreadsheet: {
              description:
                "Create an Excel workbook (.xlsx) with sheets, headers, and rows. Use for budgets, trackers, datasets, inventories, schedules.",
              parameters: z.object({
                title: z.string(),
                author: z.string().optional(),
                sheets: z.array(z.any()),
              }),
              execute: async (args: { title: string; author?: string; sheets: any[] }) => {
                if (!xlsxEnabled) return { error: "Spreadsheets are disabled in Settings → Model & Tools." };
                const workbook = await createXlsx(args);
                const buffer = Buffer.from((await workbook.xlsx.writeBuffer()) as unknown as Uint8Array);
                const filename = `${SAFE_NAME(args.title)}.xlsx`;
                return {
                  ok: true,
                  filename,
                  mediaType: XLSX_MT,
                  downloadUrl: toDataUrl(buffer.toString("base64"), XLSX_MT),
                  size: buffer.length,
                  message: `Created ${filename} with ${args.sheets.length} sheet(s). Tell the user to click the download chip above.`,
                };
              },
            },
            createReport: {
              description:
                "Generate a structured report as Markdown, HTML, or plain text. Use for status reports, research summaries, project docs.",
              parameters: z.object({
                title: z.string(),
                type: z.enum(["status", "project", "analysis", "meeting", "custom"]).default("custom"),
                sections: z.array(z.any()),
                summary: z.string().optional(),
                metrics: z.record(z.string(), z.union([z.string(), z.number()])).optional(),
                recommendations: z.array(z.string()).optional(),
                format: z.enum(["markdown", "html", "text"]).default("markdown"),
              }),
              execute: async (args: {
                title: string;
                type?: string;
                sections: any[];
                summary?: string;
                metrics?: Record<string, string | number>;
                recommendations?: string[];
                format?: string;
              }) => {
                const fmt = args.format === "text" ? "markdown" : args.format ?? "markdown";
                const { content, filename, format } = await createReport({
                  title: args.title,
                  type: (args.type ?? "custom") as any,
                  sections: args.sections,
                  summary: args.summary,
                  metrics: args.metrics,
                  recommendations: args.recommendations,
                  format: fmt as any,
                });
                const mediaType = format === "html" ? "text/html" : "text/markdown";
                const base64 = Buffer.from(content, "utf-8").toString("base64");
                return {
                  ok: true,
                  filename,
                  mediaType,
                  downloadUrl: toDataUrl(base64, mediaType),
                  size: content.length,
                  message: `Created ${filename}. Tell the user to click the download chip above.`,
                };
              },
            },

            // ----- Web & research -----
            webSearch: {
              description:
                "Perform a live web search and return top results with titles, URLs, and snippets. Use for current events, research, fact-checking, finding docs/sources.",
              parameters: z.object({ query: z.string(), limit: z.number().min(1).max(10).optional() }),
              execute: async ({ query, limit }: { query: string; limit?: number }) => {
                try {
                  const results = await duckDuckGoSearch(query, limit ?? 8);
                  if (results.length === 0) return { error: "No results found. Try a different query." };
                  return { query, count: results.length, results };
                } catch (e) {
                  return { error: e instanceof Error ? e.message : "Search failed" };
                }
              },
            },
            getStockQuote: {
              description:
                "Get a live stock/crypto quote and recent trend from Yahoo Finance. Use when the user asks about a stock, ticker, price, market, or crypto.",
              parameters: z.object({ symbol: z.string().describe("e.g. AAPL, TSLA, BTC-USD, ^GSPC") }),
              execute: async ({ symbol }: { symbol: string }) => {
                try {
                  const res = await fetch(
                    `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=1mo`,
                    { headers: { "user-agent": "Mozilla/5.0 (JarvisAIOs/2.0)" } },
                  );
                  if (!res.ok) return { error: `Unknown symbol "${symbol}"` };
                  const json = (await res.json()) as any;
                  const meta = json?.chart?.result?.[0]?.meta;
                  const closes = json?.chart?.result?.[0]?.indicators?.quote?.[0]?.close ?? [];
                  const timestamps = json?.chart?.result?.[0]?.timestamp ?? [];
                  if (!meta) return { error: `Unknown symbol "${symbol}"` };
                  const price = meta.regularMarketPrice;
                  const prev = meta.chartPreviousClose ?? meta.previousClose;
                  const change = prev ? price - prev : 0;
                  const changePct = prev ? (change / prev) * 100 : 0;
                  const last14 = closes.filter((c: number | null) => c != null).slice(-14);
                  const trend =
                    last14.length > 1 && last14[last14.length - 1] > last14[0]
                      ? "up"
                      : last14.length > 1 && last14[last14.length - 1] < last14[0]
                        ? "down"
                        : "flat";
                  const high = Math.max(...last14, price);
                  const low = Math.min(...last14, price);
                  return {
                    symbol: symbol.toUpperCase(),
                    name: meta.shortName ?? meta.longName ?? symbol,
                    currency: meta.currency,
                    price,
                    change: Math.round(change * 100) / 100,
                    changePercent: Math.round(changePct * 100) / 100,
                    dayHigh: meta.regularMarketDayHigh,
                    dayLow: meta.regularMarketDayLow,
                    volume: meta.regularMarketVolume,
                    trend,
                    monthHigh: Math.round(high * 100) / 100,
                    monthLow: Math.round(low * 100) / 100,
                    lastUpdated: new Date(meta.regularMarketTime * 1000).toISOString(),
                  };
                } catch (e) {
                  return { error: e instanceof Error ? e.message : "Quote lookup failed" };
                }
              },
            },

            // ----- Browser actions (open tabs on the user's machine) -----
            youtubeSearch: {
              description:
                "Open a YouTube search in the user's browser for the given query. Use when the user asks to open YouTube, search YouTube, or watch something.",
              parameters: z.object({ query: z.string() }),
              execute: async ({ query }: { query: string }) =>
                clientAction(
                  "openUrl",
                  { url: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}` },
                  `Opened YouTube search for "${query}" in a new tab.`,
                ),
            },
            youtubeOpen: {
              description: "Open YouTube home in the user's browser.",
              parameters: z.object({}),
              execute: async () =>
                clientAction("openUrl", { url: "https://www.youtube.com" }, "Opened YouTube in a new tab."),
            },
            openUrl: {
              description:
                "Open any URL in the user's browser. Use when the user asks to open a website, app, or link.",
              parameters: z.object({ url: z.string() }),
              execute: async ({ url }: { url: string }) => {
                const safe = /^https?:\/\//i.test(url) ? url : `https://${url}`;
                return clientAction("openUrl", { url: safe }, `Opened ${safe} in a new tab.`);
              },
            },

            // ----- Coding & shell -----
            runCode: {
              description:
                "Execute a code snippet (javascript, typescript, python, shell) and return stdout/stderr. Requires a signed-in session.",
              parameters: z.object({ code: z.string(), language: z.enum(["javascript", "typescript", "python", "shell"]) }),
              execute: async (args: { code: string; language: any }) => {
                if (!userId) return { error: "Sign in to use code execution" };
                if (!codeEnabled) return { error: "Code execution is disabled in Settings → Model & Tools." };
                return await executeCode(args);
              },
            },
            executeShell: {
              description:
                "Execute a shell command. Requires a signed-in session. Use carefully — commands run on the server.",
              parameters: z.object({ command: z.string(), workingDirectory: z.string().optional() }),
              execute: async ({ command, workingDirectory }: { command: string; workingDirectory?: string }) => {
                if (!userId) return { error: "Sign in to use shell execution" };
                if (!shellEnabled) return { error: "Shell execution is disabled in Settings → Model & Tools." };
                return await executeShell({ command, workingDirectory });
              },
            },

            // ----- Design systems -----
            listDesignSystems: {
              description: "List available brand design systems and live project sites.",
              parameters: z.object({}),
              execute: async () => {
                const systems = listDesignSystems();
                const sites = listProjectSites();
                const list = [...systems, ...sites]
                  .map((s) => ({ id: s.id, name: s.name, category: s.category, kind: (s as any).kind ?? "system" }))
                  .slice(0, 80);
                return { count: list.length, systems: list };
              },
            },
            getDesignSystem: {
              description: "Get full details (tokens, components, usage) of a design system or project site.",
              parameters: z.object({ id: z.string() }),
              execute: async ({ id }: { id: string }) => {
                const site = getProjectSite(id);
                if (site) {
                  return { name: site.name, category: site.category, kind: "site", previewUrl: site.previewUrl, description: site.description };
                }
                const ds = getDesignSystem(id);
                if (!ds) return { error: `Design system "${id}" not found` };
                return { name: ds.name, category: ds.category, tokens: ds.tokens, components: ds.components };
              },
            },

            // ----- Memory & skills -----
            recallMemory: {
              description:
                "Search Jarvis's memory of the user's past conversations for relevant context. Use when the user references something they worked on before, or asks 'what did we decide/do about X'.",
              parameters: z.object({ query: z.string(), limit: z.number().min(1).max(10).optional() }),
              execute: async ({ query, limit }: { query: string; limit?: number }) => {
                if (!userId) return { error: "Not authenticated" };
                const { recall } = await import("@/lib/recall");
                const hits = await recall(userId, query, limit ?? 5);
                return hits.map((h) => ({ date: h.createdAt, role: h.role, text: h.text.slice(0, 400) }));
              },
            },
            saveSkill: {
              description:
                "Author a reusable SKILL.md skill after a complex task (5+ tool calls), fixing a tricky error, or discovering a non-trivial workflow. Action 'create' writes a new skill; 'patch' fixes an existing one; 'delete' removes one. Keep the name lowercase with dashes and the description a single short sentence.",
              parameters: z.object({
                action: z.enum(["create", "patch", "delete"]),
                name: z.string(),
                category: z.string().optional(),
                description: z.string().optional(),
                content: z.string().optional(),
                oldString: z.string().optional(),
                newString: z.string().optional(),
              }),
              execute: async (args: {
                action: string;
                name: string;
                category?: string;
                description?: string;
                content?: string;
                oldString?: string;
                newString?: string;
              }) => {
                const { createSkill, patchSkill, deleteSkill } = await import("@/lib/skills");
                try {
                  if (args.action === "create") {
                    if (!args.description || !args.content) return { error: "description and content required for create" };
                    const s = await createSkill({
                      name: args.name,
                      category: args.category ?? "learned",
                      description: args.description,
                      content: args.content,
                    });
                    return { ok: true, skill: s };
                  }
                  if (args.action === "patch") {
                    if (!args.oldString || !args.newString) return { error: "oldString and newString required for patch" };
                    const s = await patchSkill({ name: args.name, oldString: args.oldString, newString: args.newString });
                    return { ok: true, skill: s };
                  }
                  if (args.action === "delete") {
                    await deleteSkill(args.name);
                    return { ok: true };
                  }
                  return { error: "Unknown action" };
                } catch (e) {
                  return { error: e instanceof Error ? e.message : String(e) };
                }
              },
            },
            roadmap: {
              description:
                "Return a structured learning path for becoming an engineer or building a skill (ai-engineer, frontend, backend, devops). Use when the user asks how to learn something or start a career path.",
              parameters: z.object({ path: z.enum(["ai-engineer", "frontend", "backend", "devops"]) }),
              execute: async ({ path }: { path: string }) => {
                const { roadmapById } = await import("@/lib/roadmap");
                const r = roadmapById(path);
                if (!r) return { error: `No roadmap "${path}"` };
                return r;
              },
            },
            calculator: {
              description: "Evaluate a precise arithmetic expression. Use for any numeric computation.",
              parameters: z.object({ expression: z.string() }),
              execute: async ({ expression }: { expression: string }) => {
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
            },
            currentTime: {
              description: "Get the current UTC date and time.",
              parameters: z.object({ timeZone: z.string().optional() }),
              execute: async ({ timeZone }: { timeZone?: string }) => {
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
            },
          };

          // Add connector-backed tools (GitHub, Slack, Notion, GCal, Gmail, Zapier, Brave...) from verified credentials.
          if (userId) {
            try {
              const { loadCredentials, buildTools } = await import("@/lib/chat-tools.server");
              const creds = await loadCredentials(userId);
              const extra = buildTools(creds, { webSearch: false });
              for (const [name, def] of Object.entries(extra)) {
                if (name === "calculator" || name === "current_time") continue;
                if (!(name in tools)) tools[name] = def;
              }
            } catch {}
          }

          const result = streamText({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            model: aiModel as any,
            system,
            messages: await convertToModelMessages(requestMessages),
            tools: tools as any,
            toolChoice: "auto",
          });

          const streamResponse = result.toUIMessageStreamResponse({
            originalMessages: requestMessages,
            onFinish: async ({ messages }) => {
              if (!userId || !body.threadId) return;
              try {
                const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
                const rows: Array<{ thread_id: string; user_id: string; role: string; parts: any }> = [];

                // The user's message always comes from the original request. The
                // SDK's final messages only contain tool-turn assistant parts, so
                // never rely on message index position for the user side.
                const lastUser = [...requestMessages].reverse().find((m) => m.role === "user");
                if (lastUser) {
                  rows.push({ thread_id: body.threadId, user_id: userId, role: "user", parts: (lastUser as any).parts ?? [] });
                }

                const last = messages[messages.length - 1];
                if (last && last.role === "assistant") {
                  rows.push({ thread_id: body.threadId, user_id: userId, role: "assistant", parts: last.parts ?? [] });
                }
                if (rows.length) {
                  const inserted = await supabaseAdmin.from("messages").insert(rows).select("id, parts");
                  // Fire-and-forget: embed each new message for future cross-session recall.
                  if (!inserted.error && inserted.data?.length) {
                    for (const row of inserted.data) {
                      const { embedText, partsToText } = await import("@/lib/embeddings");
                      const text = partsToText(row.parts);
                      if (!text) continue;
                      embedText(text).then((embedding) => {
                        if (!embedding) return;
                        return supabaseAdmin.from("messages").update({ embedding }).eq("id", row.id);
                      });
                    }
                  }
                }
              } catch (e) {
                console.error("[jarvis.onFinish]", e);
              }
            },
          });

          // Tag the response with the model that actually served it so the UI can
          // show local-mode vs. cloud-fallback.
          try {
            streamResponse.headers.set("x-jarvis-model", resolved.modelId);
            streamResponse.headers.set("x-jarvis-provider", resolved.provider);
            if (resolved.usedFallback) streamResponse.headers.set("x-jarvis-fallback", "1");
          } catch {}
          return streamResponse;
        } catch (err) {
          console.error("[chat.error]", err);
          return new Response(JSON.stringify({ error: String(err) }), {
            status: 500,
            headers: { "content-type": "application/json" },
          });
        }
      },
    },
  },
});
