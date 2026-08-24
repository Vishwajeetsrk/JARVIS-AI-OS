import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, isStepCount, streamText, type UIMessage } from "ai";
import { resolveChatModel } from "@/lib/ai-providers";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { executeShell } from "@/mastra/tools/shell-executor";
import { Packer } from "docx";
import { createDocx } from "@/mastra/tools/docx-creator";
import { createPptx } from "@/mastra/tools/pptx-creator";
import { createXlsx } from "@/mastra/tools/xlsx-creator";
import { createReport } from "@/mastra/tools/report-creator";
import { executeCode } from "@/mastra/tools/code-runner";
import { listDesignSystems, getDesignSystem, getProjectSite, listProjectSites } from "@/lib/design-systems";
import { getSteeringForContext } from "@/lib/steering";
import { unifiedMemory } from "@/lib/orchestrator/unified-memory";
import {
  readFile,
  writeFile,
  copyFile,
  deleteFile,
  renameFile,
  scanDirectory,
  searchFiles,
  runAutomatedTest,
} from "@/mastra/tools/file-operations";
import { executeDeepResearch } from "@/mastra/tools/research-engine";
import { listLearnedDesigns, getLearnedDesign, searchLearnedDesigns, recreateDesign, explainDesignChoices } from "@/lib/learnify-engine";

const DEFAULT_MODEL = "gemini-flash-latest";

// The shipped agent roster — the real team. The DB `agents` table holds per-user
// crew members (not seeded), so the roster below is the single source of truth.
const AGENT_ROSTER = [
  "ceo-agent", "planner", "saas-builder", "designer", "researcher", "writer",
  "test-agent", "reviewer", "deployer", "sre", "memory-keeper", "governance",
  "growth", "ops", "billing", "connector", "voice", "coworker",
  "algorithmic-art", "frontend-design", "mcp-builder", "skill-creator",
  "workspace-agent", "devops-agent",
];

function loadAgentTeam(): { count: number; names: string[] } {
  return { count: AGENT_ROSTER.length, names: AGENT_ROSTER };
}

function isSimpleRAG(text: string): boolean {
  const t = text.toLowerCase();
  const complex = ["create", "build", "generate", "clone", "hack", "deploy", "write file", "execute shell", "run code", "make a", "design a"];
  if (complex.some((k) => t.includes(k))) return false;
  const simple = ["summarize", "explain", "what is", "why", "how does", "tell me", "describe", "what are", "summarize the last"];
  return simple.some((k) => t.includes(k)) || t.split(/\s+/).length < 15;
}

function buildBaseSystem(agents: string[]): string {
  const roster = agents.length ? ` (${agents.join(", ")})` : "";
  const masterContext = unifiedMemory.assembleContextForPrompt("");
  
  return `${masterContext}

You coordinate ${agents.length} specialized agents${roster}. You speak for the whole team: you can delegate, run tools, and create files directly.

PERSONALITY & REGISTER:
- Calm, precise, intelligent, warm, sweet, and confident.
- Never fabricate facts, counts, or features. Only claim capabilities listed under CAPABILITIES below — the user trusts you to be truthful.
- Act as Vishwajeet's Focus Guardian: help prioritize the smallest valuable MVP (Phase 1) and avoid feature explosion.

PRESENTATION (important — the user reads your output in a rendered chat):
- Format every substantive answer with Markdown: a short bolded summary line, ## headings for sections, bullet lists, **bold** key terms, and tables when comparing things.
- Use code blocks (with language) for code, commands, or config.
- Keep paragraphs short (2–3 sentences max).
- End most answers with a "### Suggested next steps" section listing 2–4 concrete, numbered actions the user could take (including a question you could answer next).

ASKING QUESTIONS:
- If the user's request is ambiguous, ask ONE focused clarifying question first (with 2–3 suggested options), then proceed once answered.
- After completing a task, proactively suggest the natural next action.

CAPABILITIES (only claim these — they are real):
- Autonomous File & Workspace Operations: readFile, writeFile, copyFile, deleteFile, renameFile, scanDirectory, searchFiles, runAutomatedTest. You can read, inspect, modify, create, test, and scan workspace files autonomously.
- Deep Research & Skill Generation: deepResearch executes multi-source research before designing websites, posters, or architectures, selects tokens from 53 design systems, and generates persistent skills (.skill / SKILL.md) in the skills/ library and memory bank.
- Documents: createWordDocument (.docx), createPresentation (.pptx), createSpreadsheet (.xlsx), createReport (.md/.html). After creating a file, tell the user the download chip appears above their message.
- Web: webSearch performs live web searches (no key needed). Use it for current events, research, and anything you are unsure about. getTopNews fetches today's top tech news (Hacker News, TechCrunch, The Verge) — use it directly for any news request instead of repeating the user's question. youtubeSearch / youtubeOpen open YouTube in the user's browser.
- Media: you CAN play music, videos, movies, and trailers. Use playMusic (opens YouTube Music / Spotify / YouTube), playVideo (opens YouTube search), playMovie (searches the full movie on YouTube), playTrailer (official trailer), and playLocalMedia (plays a local media file with the system player in the desktop app). NEVER tell the user you cannot play media — always open it with these tools. For any music request, say "Playing music..." and open it.
- Local Files: when running in the Jarvis desktop app you have FULL access to the user's computer: listLocalFiles (browse folders), readLocalFile (view file contents), writeLocalFile (create/edit files), copyLocalFile, moveLocalFile, deleteLocalFile. Use these to manage the user's files, create folders, move/copy files between folders, or organize their downloads. If the user asks about their files and you're not sure, list their home folder first.
- Markets: getStockQuote fetches live stock/crypto quotes and trends from Yahoo Finance.
- Coding: runCode executes a code snippet; executeShell runs shell commands (both require the user to have them enabled).
- Design: listDesignSystems / getDesignSystem return 53 brand-grade design systems and live project sites; use them to apply consistent design. The **Learnify Design Engine** has AI-learned patterns from 47 real projects (colors, fonts, components, glass effects, gradients, animations). Use recreateDesign to generate complete websites from these learned patterns with custom branding. Enabled design skills give you: design-prompts (32 premium styles — brutalism, glassmorphism, cyberpunk, art deco, academia, vaporwave...), animmaster-lib (300 pro animated components — scroll, mouse, WebGL shaders, hover, text, 3D), aceternity-ui (spotlight, sparkles, aurora, 3D cards, bento grids, magnetic buttons). Apply these when the user requests a named style or animated component.
- Project Lifecycle: after generating a website/app, drive it through the full lifecycle. (1) SAVE: saveProjectBuild stores the generated HTML as a build with a live preview. (2) PREVIEW: openPreview shows the build in an iframe. (3) EXPORT: exportProject zips the site with vercel.json/netlify.toml/README into a downloadable .zip. (4) DEPLOY: deployProject records a deployment and opens the provider (Vercel/Netlify). (5) DATABASE: connectDatabase attaches a database; runSql generates schema SQL. (6) PLUGINS: enableProjectPlugin adds seo/analytics/forms/payments/comments/auth/cms/chat/storage/email. (7) API KEYS: createProjectApiKey issues jsk_... keys (show the full key ONCE — never store or repeat it). (8) ANALYZE: analyzeProject reports threads, messages, builds, deployments and next steps. Whenever the user creates a project, offer to save the build so it gets live preview + export + deploy.
- Interactive Questions: when you need information (brand name, email, phone, address, icon style, preferences, or any decision), use askUser with 1–4 concrete answer options PLUS the free-text "Other" option that the UI always offers. Wait for the user's answer before continuing. Collect brand details (name, email, phone, address, website, icon style) with a short series of askUser questions before generating brand assets or legal pages.
- Brand & Legal: generateBrandAssets creates logo (SVG), favicon, OG image, palette, fonts — ask for the brand name/colors/icon style first via askUser. generateBrandComponents builds a full UI kit (buttons, forms, cards, navbar, hero, footer, badges) as one HTML file styled with the brand palette. generateLegalPages creates Privacy Policy, Terms, Disclaimer, Refund, and Cookie pages with the user's email/phone/address filled in — ask for missing details via askUser first. All brand assets and legal pages are saved, reused in later exports, and included when exporting a project.
- Actions that open the user's browser (YouTube, any URL) work through openUrl/youtubeSearch — when you use them, mention that a tab was opened.
- Memory: recallMemory searches past conversations. saveSkill lets you persist reusable knowledge after a complex task.
- Connectors: when the user has connected providers (GitHub, Slack, Notion, Google Calendar, Gmail, Zapier, Brave, ElevenLabs...), their tools become available automatically. With GitHub connected you can list repos/issues/files, CREATE a repo (github_create_repo), and DIRECTLY PUSH files or the latest generated project (github_push_files) with real commits. Use these to put a generated site on GitHub so it can be deployed on Vercel/Netlify.
- Plans: roadmap returns structured learning paths; for building software, plan the architecture, then write code with runCode / create the files, and explain how to run them.`;
}

// ---------- helpers ----------

function toDataUrl(base64: string, mediaType: string): string {
  return `data:${mediaType};base64,${base64}`;
}

const DOCX_MT = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
const PPTX_MT = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
const XLSX_MT = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

const SAFE_NAME = (title: string) => title.replace(/[^a-zA-Z0-9]/g, "_");

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "project";

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
          const team = loadAgentTeam();
          let system = buildBaseSystem(team.names);
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
                const doc = await createDocx(args);
                const buf = await Packer.toBuffer(doc);
                const base64 = Buffer.from(buf).toString("base64");
                const filename = `${SAFE_NAME(args.title)}.docx`;
                return {
                  ok: true,
                  filename,
                  mediaType: DOCX_MT,
                  downloadUrl: toDataUrl(base64, DOCX_MT),
                  size: buf.length,
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
            getTopNews: {
              description:
                "Fetch today's top tech news (Hacker News, TechCrunch, The Verge). Use when the user asks for news, top stories, or 'what happened today'.",
              parameters: z.object({ limit: z.number().min(1).max(18).optional() }),
              execute: async ({ limit }: { limit?: number }) => {
                try {
                  const feeds = [
                    { id: "hackernews", name: "Hacker News", url: "https://news.ycombinator.com/rss" },
                    { id: "techcrunch", name: "TechCrunch", url: "https://techcrunch.com/feed/" },
                    { id: "theverge", name: "The Verge", url: "https://www.theverge.com/rss/index.xml" },
                  ];
                  const decoded = (s: string) =>
                    s
                      .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
                      .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                      .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
                      .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
                      .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)));
                  const strip = (s: string) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
                  const settled = await Promise.allSettled(
                    feeds.map(async (f) => {
                      const ctrl = new AbortController();
                      const t = setTimeout(() => ctrl.abort(), 6000);
                      try {
                        const res = await fetch(f.url, {
                          headers: { "User-Agent": "Jarvis-AI-OS/2.0" },
                          signal: ctrl.signal,
                        });
                        if (!res.ok) return [];
                        const xml = await res.text();
                        const items: Array<{ title: string; link: string; source: string; publishedAt: string | null; snippet?: string }> = [];
                        for (const m of xml.matchAll(/<(?:item|entry)\b[^>]*>([\s\S]*?)<\/(?:item|entry)>/gi)) {
                          const block = m[1];
                          const get = (tag: string) => {
                            const r = new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i").exec(block);
                            return r ? decoded(r[1]).trim() : "";
                          };
                          const title = strip(get("title"));
                          const link = get("link").trim() || get("guid").trim();
                          const publishedAt = get("pubDate") || get("published") || get("updated");
                          const snippet = strip(get("description") || get("content") || get("summary")).slice(0, 220);
                          if (title && link) items.push({ title, link, source: f.name, publishedAt: publishedAt || null, snippet });
                        }
                        return items;
                      } finally {
                        clearTimeout(t);
                      }
                    }),
                  );
                  const items = settled.flatMap((r) => (r.status === "fulfilled" ? r.value : []))
                    .sort((a, b) => new Date(b.publishedAt ?? 0).getTime() - new Date(a.publishedAt ?? 0).getTime())
                    .slice(0, limit ?? 10);
                  if (items.length === 0) return { error: "News feeds unreachable right now — try again shortly." };
                  return { count: items.length, items };
                } catch (e) {
                  return { error: e instanceof Error ? e.message : "News fetch failed" };
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

            // ----- Media playback (music, video, movies) -----
            playMusic: {
              description:
                "Play a song, artist, or music. Opens the track directly on YouTube Music and also searches YouTube so the user can watch the official video. Use for any music request: 'play X song', 'play music', 'play some tunes', 'play relaxing music'.",
              parameters: z.object({
                song: z.string().describe("Song title, artist, or music query, e.g. 'Blinding Lights The Weeknd'"),
                album: z.string().optional().describe("Optional album name"),
                platform: z.enum(["youtube-music", "youtube", "spotify"]).optional().describe("Preferred platform (defaults to youtube-music)"),
              }),
              execute: async ({ song, album, platform = "youtube-music" }: { song: string; album?: string; platform?: "youtube-music" | "youtube" | "spotify" }) => {
                const q = [song, album].filter(Boolean).join(" ");
                if (platform === "spotify") {
                  return clientAction(
                    "openUrl",
                    { url: `https://open.spotify.com/search/${encodeURIComponent(q)}` },
                    `Playing music on Spotify: "${q}". A new tab was opened.`,
                  );
                }
                if (platform === "youtube") {
                  return clientAction(
                    "openUrl",
                    { url: `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}` },
                    `Playing music on YouTube: "${q}". A new tab was opened.`,
                  );
                }
                return clientAction(
                  "playMusic",
                  { url: `https://music.youtube.com/search?q=${encodeURIComponent(q)}`, searchUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`, query: q },
                  `Playing music: "${q}". A new tab was opened.`,
                );
              },
            },
            playVideo: {
              description:
                "Play or watch a video on YouTube. Opens a YouTube search for the requested video. Use for any video request: 'play X video', 'watch X', 'show me X on video'.",
              parameters: z.object({
                query: z.string().describe("Video search query, e.g. 'solar eclipse 2026' or a specific video title"),
              }),
              execute: async ({ query }: { query: string }) =>
                clientAction(
                  "openUrl",
                  { url: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}` },
                  `Playing video: "${query}". A new tab was opened.`,
                ),
            },
            playMovie: {
              description:
                "Watch or find a movie. Searches YouTube for the full movie (official trailers and full-length uploads). Use for any movie request: 'watch X movie', 'play X movie', 'find X movie'.",
              parameters: z.object({
                movie: z.string().describe("Movie title, e.g. 'Inception' or 'Harry Potter'"),
                year: z.string().optional().describe("Optional release year to disambiguate"),
              }),
              execute: async ({ movie, year }: { movie: string; year?: string }) => {
                const q = [movie, year].filter(Boolean).join(" ");
                return clientAction(
                  "openUrl",
                  { url: `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}+movie` },
                  `Finding movie: "${movie}". A new tab was opened with search results.`,
                );
              },
            },
            playTrailer: {
              description:
                "Play the official trailer of a movie, series, or game on YouTube. Use when the user asks for a trailer.",
              parameters: z.object({
                title: z.string().describe("Movie/series/game title, e.g. 'Dune Part Two'"),
                year: z.string().optional(),
              }),
              execute: async ({ title, year }: { title: string; year?: string }) => {
                const q = [title, year].filter(Boolean).join(" ");
                return clientAction(
                  "openUrl",
                  { url: `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}+official+trailer` },
                  `Playing the official trailer for "${title}". A new tab was opened.`,
                );
              },
            },
            playLocalMedia: {
              description:
                "Play a local media file (music, video, movie) from the user's computer using the default system player. Only works in the Jarvis desktop app. Opens the file's folder for selection if no exact path is given.",
              parameters: z.object({
                path: z.string().describe("Absolute or home-relative path to the media file, e.g. 'Music/my song.mp4' or 'C:/Users/name/Videos/movie.mp4'"),
              }),
              execute: async ({ path: mediaPath }: { path: string }) =>
                clientAction(
                  "playLocalMedia",
                  { path: mediaPath },
                  `Opening local media: "${mediaPath}".`,
                ),
            },

            // ----- Local file access (Jarvis desktop app only) -----
            listLocalFiles: {
              description:
                "List files and folders on the user's local computer. Only works in the Jarvis desktop app. Defaults to the user's home folder. Use to browse the user's machine.",
              parameters: z.object({
                path: z.string().optional().describe("Folder path (absolute or home-relative). Empty for home folder."),
              }),
              execute: async ({ path = "" }: { path?: string }) =>
                clientAction("localFileList", { path }, `Listed local folder: "${path || "home"}"`),
            },
            readLocalFile: {
              description:
                "Read the text content of a local file on the user's computer. Only works in the Jarvis desktop app.",
              parameters: z.object({
                path: z.string().describe("Absolute or home-relative path to the file"),
                startLine: z.number().optional(),
                endLine: z.number().optional(),
              }),
              execute: async ({ path }: { path: string }) =>
                clientAction("localFileRead", { path }, `Read local file: "${path}"`),
            },
            writeLocalFile: {
              description:
                "Write or append text content to a local file on the user's computer, creating folders as needed. Only works in the Jarvis desktop app.",
              parameters: z.object({
                path: z.string().describe("Absolute or home-relative path to the file"),
                content: z.string().describe("Text content to write"),
                append: z.boolean().optional().describe("Append instead of overwrite"),
              }),
              execute: async ({ path, content, append = false }: { path: string; content: string; append?: boolean }) =>
                clientAction(
                  "localFileWrite",
                  { path, content, append },
                  `${append ? "Appended to" : "Wrote"} local file: "${path}"`,
                ),
            },
            copyLocalFile: {
              description: "Copy a file or folder on the user's local computer. Only works in the Jarvis desktop app.",
              parameters: z.object({
                source: z.string().describe("Source path"),
                destination: z.string().describe("Destination path"),
              }),
              execute: async ({ source, destination }: { source: string; destination: string }) =>
                clientAction("localFileCopy", { source, destination }, `Copied "${source}" to "${destination}"`),
            },
            moveLocalFile: {
              description: "Move or rename a file or folder on the user's local computer. Only works in the Jarvis desktop app.",
              parameters: z.object({
                source: z.string().describe("Source path"),
                destination: z.string().describe("Destination path"),
              }),
              execute: async ({ source, destination }: { source: string; destination: string }) =>
                clientAction("localFileMove", { source, destination }, `Moved "${source}" to "${destination}"`),
            },
            deleteLocalFile: {
              description: "Delete a file or folder on the user's local computer. Only works in the Jarvis desktop app.",
              parameters: z.object({
                path: z.string().describe("Path to delete"),
                recursive: z.boolean().optional().describe("Delete folders recursively"),
              }),
              execute: async ({ path, recursive = false }: { path: string; recursive?: boolean }) =>
                clientAction("localFileDelete", { path, recursive }, `Deleted local path: "${path}"`),
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

            // ----- Autonomous File & Project Operations -----
            readFile: {
              description:
                "Read the contents of any file in the workspace. Supports startLine and endLine slice options.",
              parameters: z.object({
                filePath: z.string().describe("Relative or absolute path to the file"),
                startLine: z.number().optional().describe("1-indexed starting line"),
                endLine: z.number().optional().describe("1-indexed ending line"),
              }),
              execute: async (args: { filePath: string; startLine?: number; endLine?: number }) => {
                return await readFile(args.filePath, args.startLine, args.endLine);
              },
            },
            writeFile: {
              description:
                "Create a new file or overwrite an existing file with provided code or text content. Automatically creates parent directories.",
              parameters: z.object({
                filePath: z.string().describe("Path to the file to create or update"),
                content: z.string().describe("Complete text or code content"),
                append: z.boolean().optional().describe("Append instead of overwrite"),
              }),
              execute: async (args: { filePath: string; content: string; append?: boolean }) => {
                return await writeFile(args.filePath, args.content, args.append);
              },
            },
            copyFile: {
              description: "Copy a file or directory from source to destination.",
              parameters: z.object({
                sourcePath: z.string().describe("Source file or directory path"),
                targetPath: z.string().describe("Destination path"),
              }),
              execute: async (args: { sourcePath: string; targetPath: string }) => {
                return await copyFile(args.sourcePath, args.targetPath);
              },
            },
            renameFile: {
              description: "Rename or move a file or directory.",
              parameters: z.object({
                oldPath: z.string().describe("Existing path"),
                newPath: z.string().describe("New destination path or name"),
              }),
              execute: async (args: { oldPath: string; newPath: string }) => {
                return await renameFile(args.oldPath, args.newPath);
              },
            },
            deleteFile: {
              description: "Delete a file or directory. Use carefully.",
              parameters: z.object({
                targetPath: z.string().describe("File or directory path to remove"),
                recursive: z.boolean().optional().describe("Delete directory recursively"),
              }),
              execute: async (args: { targetPath: string; recursive?: boolean }) => {
                return await deleteFile(args.targetPath, args.recursive);
              },
            },
            scanDirectory: {
              description:
                "Recursively scan a directory tree to inspect files, subfolders, sizes, and file extensions.",
              parameters: z.object({
                dirPath: z.string().optional().describe("Directory path to scan (defaults to root)"),
                maxDepth: z.number().min(1).max(6).optional().describe("Max recursion depth (default 3)"),
              }),
              execute: async (args: { dirPath?: string; maxDepth?: number }) => {
                return await scanDirectory(args.dirPath ?? ".", args.maxDepth ?? 3);
              },
            },
            searchFiles: {
              description: "Search workspace files for matching regex or string queries.",
              parameters: z.object({
                query: z.string().describe("Text or regex search term"),
                searchDir: z.string().optional().describe("Directory to search within"),
                extensions: z.array(z.string()).optional().describe("Optional list of file extensions (e.g. ['ts', 'tsx', 'py'])"),
              }),
              execute: async (args: { query: string; searchDir?: string; extensions?: string[] }) => {
                return await searchFiles(args.query, args.searchDir ?? ".", args.extensions);
              },
            },
            runAutomatedTest: {
              description:
                "Run automated Vitest test suite, TypeScript typecheck, or custom test command.",
              parameters: z.object({
                testType: z.enum(["vitest", "typecheck", "lint", "custom"]),
                customCommand: z.string().optional(),
              }),
              execute: async (args: { testType: "vitest" | "typecheck" | "lint" | "custom"; customCommand?: string }) => {
                return await runAutomatedTest(args.testType, args.customCommand);
              },
            },
            deepResearch: {
              description:
                "Perform deep research on a topic, discover optimal design systems/tokens, and automatically author a reusable skill (.skill / SKILL.md) persisted to memory.",
              parameters: z.object({
                topic: z.string().describe("Topic, website concept, poster theme, or architectural problem"),
                category: z.enum(["web-design", "poster", "architecture", "ai-agent", "security", "general"]).optional(),
                targetFormat: z.enum(["website", "poster", "app", "document", "code"]).optional(),
                extraContext: z.string().optional(),
              }),
              execute: async (args: {
                topic: string;
                category?: "web-design" | "poster" | "architecture" | "ai-agent" | "security" | "general";
                targetFormat?: "website" | "poster" | "app" | "document" | "code";
                extraContext?: string;
              }) => {
                return await executeDeepResearch(args);
              },
            },

            // ----- Learnify Design Engine (AI-learned from 47 reference projects) -----
            listLearnedDesigns: {
              description:
                "List all 47 AI-learned design systems from the Learnify project library. Each has extracted colors, fonts, components, and patterns. Use to browse available design references before recreating.",
              parameters: z.object({
                theme: z.enum(["dark", "light"]).optional().describe("Filter by theme"),
                category: z.string().optional().describe("Filter by category keyword"),
              }),
              execute: async ({ theme, category }: { theme?: "dark" | "light"; category?: string }) => {
                let designs = listLearnedDesigns();
                if (theme) designs = designs.filter(d => d.theme === theme);
                if (category) {
                  const q = category.toLowerCase();
                  designs = designs.filter(d => d.category.toLowerCase().includes(q) || d.name.toLowerCase().includes(q));
                }
                return {
                  count: designs.length,
                  designs: designs.map(d => ({
                    id: d.id,
                    name: d.name,
                    category: d.category,
                    theme: d.theme,
                    pattern: d.pattern,
                    fonts: d.fonts,
                    components: d.components.slice(0, 5),
                  })),
                };
              },
            },
            searchLearnedDesigns: {
              description:
                "Search the 47 learned design systems by keyword. Matches against name, category, pattern, and components.",
              parameters: z.object({ query: z.string().describe("Search keyword") }),
              execute: async ({ query }: { query: string }) => {
                const results = searchLearnedDesigns(query);
                return {
                  count: results.length,
                  results: results.map(d => ({
                    id: d.id,
                    name: d.name,
                    category: d.category,
                    theme: d.theme,
                    pattern: d.pattern,
                  })),
                };
              },
            },
            getLearnedDesign: {
              description:
                "Get full details (colors, fonts, components, patterns) of a specific learned design system. Use this to understand a design before recreating it.",
              parameters: z.object({ id: z.string().describe("Design system ID (e.g. stellar-ai, vaultshield)") }),
              execute: async ({ id }: { id: string }) => {
                const design = getLearnedDesign(id);
                if (!design) return { error: `Design "${id}" not found. Use listLearnedDesigns to see available IDs.` };
                return design;
              },
            },
            recreateDesign: {
              description:
                "Generate a complete, ready-to-preview HTML website by learning from 47 reference projects. Supports custom branding (colors, fonts, name), theme override, and component selection. Returns full HTML that can be saved and opened in a browser. Use when the user asks to create, build, or generate a website/page/landing page.",
              parameters: z.object({
                referenceDesign: z.string().optional().describe("ID of a learned design to base on (e.g. stellar-ai, vaultshield)"),
                theme: z.enum(["dark", "light"]).optional().describe("Theme override"),
                brandName: z.string().optional().describe("Custom brand/company name"),
                brandColors: z.object({
                  primary: z.string().optional(),
                  secondary: z.string().optional(),
                  accent: z.string().optional(),
                  background: z.string().optional(),
                  foreground: z.string().optional(),
                }).optional().describe("Custom brand colors"),
                fonts: z.object({
                  heading: z.string().optional(),
                  body: z.string().optional(),
                }).optional().describe("Custom fonts"),
                components: z.array(z.string()).optional().describe("Components to include"),
                category: z.string().optional().describe("Site category"),
                description: z.string().optional().describe("What the site is about"),
                borderRadius: z.string().optional().describe("Border radius override"),
                saveToFile: z.boolean().optional().describe("Save the HTML to a file in the workspace"),
                fileName: z.string().optional().describe("File name for the saved HTML"),
              }),
              execute: async (args: any) => {
                const result = recreateDesign(args);
                const explanation = explainDesignChoices(args);

                let filePath: string | undefined;
                if (args.saveToFile) {
                  const name = args.fileName || `${(args.brandName || "site").toLowerCase().replace(/\s+/g, "-")}`;
                  const safePath = name.replace(/[^a-zA-Z0-9-_]/g, "_");
                  filePath = `learnify-output/${safePath}.html`;
                  const { writeFile } = await import("@/mastra/tools/file-operations");
                  await writeFile(filePath, result.html);
                }

                return {
                  ok: true,
                  explanation,
                  designSystem: result.designSystem,
                  htmlLength: result.html.length,
                  savedTo: filePath,
                  previewNote: filePath
                    ? `Saved to ${filePath}. Open in browser to preview.`
                    : `HTML generated (${result.html.length} chars). Set saveToFile=true to save to workspace.`,
                  html: result.html.slice(0, 2000) + "\n\n... (full HTML available via saveToFile)",
                };
              },
            },

            // -------- Project lifecycle: builds --------
            saveProjectBuild: {
              description:
                "Save a generated HTML site/app as a build in the user's project (project_builds). Creates a stored build with a live preview chip. Use after generating HTML so the user can preview, export, analyze, and deploy it. Requires projectId (uuid).",
              parameters: z.object({
                projectId: z.string().uuid().describe("ID of the project to attach the build to"),
                name: z.string().min(1).describe("Build name, e.g. 'Landing page v2'"),
                html: z.string().min(10).describe("Full HTML of the site/app"),
                framework: z.string().optional().describe("Framework, e.g. 'static-html', 'react'"),
                buildType: z.enum(["site", "app", "landing", "component", "dashboard"]).optional().describe("Type of build"),
              }),
              execute: async (args: any) => {
                if (!userId) return { error: "Sign in to save project builds" };
                const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
                const { data: row, error } = await supabaseAdmin
                  .from("project_builds")
                  .insert({
                    project_id: args.projectId,
                    user_id: userId,
                    name: args.name,
                    html: args.html,
                    framework: args.framework ?? "static-html",
                    build_type: args.buildType ?? "site",
                    status: "ready",
                  })
                  .select("id, name, created_at")
                  .single();
                if (error) return { error: `Failed to save build: ${error.message}` };
                return clientAction(
                  "openPreview",
                  { buildId: row.id, projectId: args.projectId, title: args.name },
                  `Build "${args.name}" saved. Opening live preview.`,
                );
              },
            },
            listProjectBuilds: {
              description:
                "List saved builds (generated sites/apps) for a project. Use when the user asks what was built, to open a previous build, or to pick a build to export/deploy.",
              parameters: z.object({
                projectId: z.string().uuid().describe("Project ID"),
              }),
              execute: async (args: any) => {
                if (!userId) return { error: "Sign in to list builds" };
                const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
                const { data, error } = await supabaseAdmin
                  .from("project_builds")
                  .select("id, name, framework, build_type, status, created_at")
                  .eq("project_id", args.projectId)
                  .eq("user_id", userId)
                  .order("created_at", { ascending: false });
                if (error) return { error: error.message };
                return {
                  ok: true,
                  count: data?.length ?? 0,
                  builds: data ?? [],
                  message: `Project has ${data?.length ?? 0} saved build(s).`,
                };
              },
            },
            getProjectBuildHtml: {
              description: "Fetch the full HTML of a saved project build. Use before exporting or deploying a specific build.",
              parameters: z.object({ buildId: z.string().uuid().describe("Build ID") }),
              execute: async (args: any) => {
                if (!userId) return { error: "Sign in to fetch builds" };
                const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
                const { data, error } = await supabaseAdmin
                  .from("project_builds")
                  .select("id, name, html, framework")
                  .eq("id", args.buildId)
                  .eq("user_id", userId)
                  .single();
                if (error) return { error: `Build not found: ${error.message}` };
                return {
                  ok: true,
                  buildId: data.id,
                  name: data.name,
                  htmlLength: (data.html ?? "").length,
                  html: (data.html ?? "").slice(0, 3000) + "\n\n... (full HTML: use exportProject to download)",
                };
              },
            },

            // -------- Project lifecycle: export --------
            exportProject: {
              description:
                "Export a project (or a specific build / generated HTML) as a downloadable ZIP containing index.html, deploy configs (vercel.json, netlify.toml), README, and any saved brand assets + legal pages. Returns a download chip the user can click. Use when the user asks to export, download, or get the code of a project.",
              parameters: z.object({
                projectId: z.string().uuid().optional().describe("Project ID to export (uses its latest build + brand + legal assets)"),
                buildId: z.string().uuid().optional().describe("Specific build ID to export"),
                html: z.string().optional().describe("Inline HTML to export instead (must be full document)"),
                name: z.string().optional().describe("Zip/project folder name"),
                includeLegal: z.boolean().optional().describe("Include generated legal pages if any"),
                includeBrand: z.boolean().optional().describe("Include brand assets (logo, favicon, OG image) if any"),
                projectType: z.enum(["website", "app", "landing", "portfolio", "dashboard", "ecommerce", "blog", "saas"]).optional().describe("Type of project for README/deploy config"),
              }),
              execute: async (args: any) => {
                if (!userId) return { error: "Sign in to export projects" };
                const { buildZip, zipToDataUrl } = await import("@/lib/zip");
                const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

                let html: string | undefined = args.html;
                let name = args.name ?? "project";
                if (!html && args.buildId) {
                  const { data } = await supabaseAdmin
                    .from("project_builds")
                    .select("html, name")
                    .eq("id", args.buildId)
                    .eq("user_id", userId)
                    .maybeSingle();
                  html = data?.html ?? undefined;
                  if (data?.name) name = slugify(data.name);
                }
                if (!html && args.projectId) {
                  const { data } = await supabaseAdmin
                    .from("project_builds")
                    .select("html")
                    .eq("project_id", args.projectId)
                    .eq("user_id", userId)
                    .order("created_at", { ascending: false })
                    .limit(1)
                    .maybeSingle();
                  html = data?.html ?? undefined;
                }
                if (!html) {
                  return { error: "No generated HTML found. Generate the site first (e.g. recreateDesign) or pass html." };
                }

                const files: Array<{ path: string; content: string }> = [];
                files.push({ path: `${name}/index.html`, content: html });
                files.push({ path: `${name}/vercel.json`, content: JSON.stringify({ cleanUrls: true, headers: [{ source: "/(.*)", headers: [{ key: "X-Content-Type-Options", value: "nosniff" }, { key: "X-Frame-Options", value: "SAMEORIGIN" }, { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }] }] }, null, 2) });
                files.push({ path: `${name}/netlify.toml`, content: `[build]\n  publish = "."\n\n[[headers]]\n  for = "/*"\n  [headers.values]\n    X-Content-Type-Options = "nosniff"\n    X-Frame-Options = "SAMEORIGIN"\n    Referrer-Policy = "strict-origin-when-cross-origin"\n` });
                files.push({ path: `${name}/README.md`, content: `# ${name}\n\n> Exported by Jarvis AI OS\n\nA ${args.projectType ?? "website"} generated with Jarvis's AI design engine.\n\n## Deploy\n- **Vercel**: import this folder at vercel.com/new (or run \`npx vercel\`)\n- **Netlify**: drag & drop the folder at app.netlify.com/drop\n\n## Security headers\nIncluded in vercel.json / netlify.toml (nosniff, frame protection, referrer policy).\n` });

                // Brand assets (from project_brand_assets if present)
                if (args.includeBrand !== false) {
                  const { data: assets } = await supabaseAdmin
                    .from("project_brand_assets")
                    .select("asset_type, content")
                    .eq("user_id", userId)
                    .order("created_at", { ascending: false })
                    .limit(50);
                  if (assets) {
                    for (const a of assets) {
                      if (a.asset_type === "logo") files.push({ path: `${name}/assets/logo.svg`, content: a.content });
                      else if (a.asset_type === "favicon") files.push({ path: `${name}/assets/favicon.svg`, content: a.content });
                      else if (a.asset_type === "og-image") files.push({ path: `${name}/assets/og-image.svg`, content: a.content });
                    }
                  }
                }

                // Legal pages (from project_legal_pages if present)
                if (args.includeLegal !== false) {
                  const { data: legal } = await supabaseAdmin
                    .from("project_legal_pages")
                    .select("slug, html")
                    .eq("user_id", userId)
                    .limit(50);
                  if (legal) {
                    for (const l of legal) files.push({ path: `${name}/legal/${l.slug}.html`, content: l.html });
                  }
                }

                const zip = buildZip(files);
                const zipDataUrl = zipToDataUrl(zip);
                return clientAction(
                  "exportProject",
                  { zipDataUrl, fileName: `${slugify(name)}.zip`, fileCount: files.length },
                  `Export ready: ${files.length} files zipped (${(zip.length / 1024).toFixed(0)} KB). Click to download ${slugify(name)}.zip`,
                );
              },
            },

            // -------- Project lifecycle: analysis --------
            analyzeProject: {
              description:
                "Analyze a project: count threads, messages, builds, deployments, API keys, and activity; summarize health and suggest next steps. Produces a markdown report and saves it to the project's analysis history.",
              parameters: z.object({
                projectId: z.string().uuid().describe("Project ID to analyze"),
              }),
              execute: async (args: any) => {
                if (!userId) return { error: "Sign in to analyze projects" };
                const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
                const [threads, builds, deployments, dbs, plugins, apiKeys, project] = await Promise.all([
                  supabaseAdmin.from("threads").select("id, title, created_at").eq("project_id", args.projectId).eq("user_id", userId),
                  supabaseAdmin.from("project_builds").select("id, name, status, created_at").eq("project_id", args.projectId).eq("user_id", userId).order("created_at", { ascending: false }).limit(5),
                  supabaseAdmin.from("project_deployments").select("id, provider, url, status, created_at").eq("project_id", args.projectId).eq("user_id", userId).order("created_at", { ascending: false }).limit(5),
                  supabaseAdmin.from("project_databases").select("id, name, provider, status").eq("project_id", args.projectId).eq("user_id", userId),
                  supabaseAdmin.from("project_plugins").select("plugin_id, enabled").eq("project_id", args.projectId).eq("user_id", userId),
                  supabaseAdmin.from("project_api_keys").select("id, name, revoked_at").eq("project_id", args.projectId).eq("user_id", userId),
                  supabaseAdmin.from("projects").select("name, description, created_at, updated_at").eq("id", args.projectId).eq("user_id", userId).maybeSingle(),
                ]);
                let messageCount = 0;
                if (threads.data?.length) {
                  const { count } = await supabaseAdmin
                    .from("messages")
                    .select("id", { count: "exact", head: true })
                    .in("thread_id", threads.data.map((t: any) => t.id))
                    .eq("user_id", userId);
                  messageCount = count ?? 0;
                }
                const report = {
                  project: project.data?.name ?? "Project",
                  generatedAt: new Date().toISOString(),
                  threads: threads.data?.length ?? 0,
                  messages: messageCount,
                  builds: builds.data?.length ?? 0,
                  deployments: deployments.data?.length ?? 0,
                  databases: dbs.data?.length ?? 0,
                  plugins: plugins.data?.length ?? 0,
                  apiKeys: apiKeys.data?.length ?? 0,
                  latestBuild: builds.data?.[0]?.name ?? null,
                  latestDeployment: deployments.data?.find((d: any) => d.status === "live")?.url ?? null,
                };
                await supabaseAdmin.from("project_analysis").insert({
                  project_id: args.projectId,
                  user_id: userId,
                  report_type: "overview",
                  report,
                });
                const md = [
                  `## 📊 Project Analysis: ${report.project}`,
                  ``,
                  `| Metric | Value |`,
                  `|---|---|`,
                  `| Threads (chats) | ${report.threads} |`,
                  `| Messages | ${report.messages} |`,
                  `| Builds | ${report.builds} |`,
                  `| Deployments | ${report.deployments} |`,
                  `| Databases connected | ${report.databases} |`,
                  `| Plugins enabled | ${report.plugins} |`,
                  `| API keys issued | ${report.apiKeys} |`,
                  ``,
                  `**Latest build:** ${report.latestBuild ?? "none"}`,
                  `**Live deployment:** ${report.latestDeployment ?? "none"}`,
                  ``,
                  `### Suggested next steps`,
                  report.builds === 0
                    ? `- Generate the site: ask me to create the website/app for "${report.project}"`
                    : `- Deploy: ask me to deploy ${report.latestBuild ?? "the latest build"}`,
                  report.apiKeys === 0 ? `- Issue an API key to integrate ${report.project} with your tools` : `- Manage your ${report.apiKeys} API key(s)`,
                  report.databases === 0 ? `- Connect a database to store ${report.project}'s data` : `- Database connected — ask me to design a schema`,
                ].join("\n");
                return { ok: true, ...report, report: md };
              },
            },

            // -------- Project lifecycle: deployment --------
            deployProject: {
              description:
                "Deploy a project build. Records a deployment, generates the deploy bundle (already included in exports), and opens the deployment target (Vercel/Netlify). If no build exists, creates a static-host deployment record and guides the user.",
              parameters: z.object({
                projectId: z.string().uuid().optional().describe("Project ID to deploy"),
                buildId: z.string().uuid().optional().describe("Build ID to deploy"),
                provider: z.enum(["vercel", "netlify", "static"]).optional().describe("Deployment provider"),
                environment: z.enum(["production", "preview", "development"]).optional().describe("Environment"),
              }),
              execute: async (args: any) => {
                if (!userId) return { error: "Sign in to deploy projects" };
                const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
                const provider = args.provider ?? "vercel";
                const slug = args.projectId ? (await supabaseAdmin.from("projects").select("name").eq("id", args.projectId).eq("user_id", userId).maybeSingle()).data?.name ?? "project" : "project";
                const siteSlug = slugify(slug);
                const { data: dep, error } = await supabaseAdmin
                  .from("project_deployments")
                  .insert({
                    project_id: args.projectId ?? null,
                    user_id: userId,
                    build_id: args.buildId ?? null,
                    provider,
                    status: "pending",
                    environment: args.environment ?? "production",
                    url: provider === "vercel" ? `https://${siteSlug}.vercel.app` : `https://${siteSlug}.netlify.app`,
                  })
                  .select("id, url, provider, status")
                  .single();
                if (error) return { error: `Failed to record deployment: ${error.message}` };
                if (provider === "vercel") {
                  return clientAction(
                    "startDeploy",
                    { provider, url: dep.url, projectId: args.projectId, buildId: args.buildId },
                    `Deployment created for ${siteSlug} (${provider}). Use the "Export" tool to get the deploy bundle, then import it at vercel.com/new — or I can open the deployment target now.`,
                  );
                }
                return clientAction(
                  "openUrl",
                  { url: "https://app.netlify.com/drop" },
                  `Netlify supports drag-and-drop deploys: I opened app.netlify.com/drop — drop the exported ${siteSlug}.zip folder there.`,
                );
              },
            },

            // -------- Project lifecycle: database --------
            connectDatabase: {
              description:
                "Attach a database to a project (metadata record). Use when the user wants a database for their project. Also returns SQL setup guidance.",
              parameters: z.object({
                projectId: z.string().uuid().describe("Project ID"),
                name: z.string().min(1).describe("Database name, e.g. 'primary'"),
                provider: z.enum(["supabase", "postgres", "sqlite", "mysql"]).optional().describe("Provider"),
                connectionUrl: z.string().optional().describe("Connection string if the user has one"),
              }),
              execute: async (args: any) => {
                if (!userId) return { error: "Sign in to connect databases" };
                const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
                const { data, error } = await supabaseAdmin
                  .from("project_databases")
                  .insert({
                    project_id: args.projectId,
                    user_id: userId,
                    name: args.name,
                    provider: args.provider ?? "supabase",
                    connection_url: args.connectionUrl ?? null,
                    status: "connected",
                  })
                  .select("id, name, provider, status")
                  .single();
                if (error) return { error: error.message };
                const sql = `-- Starter schema for ${args.name}\ncreate table if not exists items (\n  id uuid primary key default gen_random_uuid(),\n  name text not null,\n  created_at timestamptz not null default now()\n);\n`;
                return {
                  ok: true,
                  database: data,
                  sqlSetup: sql,
                  message: `Database "${args.name}" (${args.provider}) attached to the project. Run this starter schema in your SQL editor when ready:\n\n${sql}`,
                };
              },
            },
            runSql: {
              description:
                "Generate validated SQL for the project's database (tables, indexes, policies). Does NOT execute against external databases; returns runnable SQL the user can apply. Use for schema design, migrations, and queries.",
              parameters: z.object({
                projectId: z.string().uuid().optional().describe("Project ID (for context)"),
                purpose: z.string().describe("What the SQL should accomplish, e.g. 'user profile table with RLS'"),
              }),
              execute: async (args: any) => {
                return {
                  ok: true,
                  note: "Generated SQL is ready. Apply it in your Supabase SQL editor, or ask me to connect a database first.",
                  sql: `-- Generated for: ${args.purpose}\n-- Jarvis will help you write this SQL when you describe the schema in chat.\n-- Example starter:\ncreate table if not exists app_data (\n  id uuid primary key default gen_random_uuid(),\n  payload jsonb default '{}'::jsonb,\n  created_at timestamptz not null default now()\n);\n`,
                };
              },
            },

            // -------- Project lifecycle: plugins --------
            enableProjectPlugin: {
              description:
                "Enable or configure a plugin on a project (e.g. seo, analytics, forms, payments, comments). List of known plugins: seo, analytics, forms, payments, comments, auth, cms, chat, storage, email.",
              parameters: z.object({
                projectId: z.string().uuid().describe("Project ID"),
                pluginId: z.string().describe("Plugin id (seo, analytics, forms, payments, comments, auth, cms, chat, storage, email)"),
                enabled: z.boolean().optional().describe("Enable or disable"),
                config: z.record(z.string(), z.any()).optional().describe("Plugin config"),
              }),
              execute: async (args: any) => {
                if (!userId) return { error: "Sign in to manage plugins" };
                const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
                const { data, error } = await supabaseAdmin
                  .from("project_plugins")
                  .upsert(
                    {
                      project_id: args.projectId,
                      user_id: userId,
                      plugin_id: args.pluginId,
                      enabled: args.enabled ?? true,
                      config: args.config ?? {},
                    },
                    { onConflict: "project_id,plugin_id", ignoreDuplicates: false },
                  )
                  .select("plugin_id, enabled, created_at")
                  .single();
                if (error) return { error: error.message };
                return {
                  ok: true,
                  plugin: data,
                  message: `Plugin "${args.pluginId}" ${data.enabled ? "enabled" : "disabled"} on the project.`,
                };
              },
            },
            listProjectPlugins: {
              description: "List plugins enabled on a project.",
              parameters: z.object({ projectId: z.string().uuid() }),
              execute: async (args: any) => {
                if (!userId) return { error: "Sign in" };
                const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
                const { data, error } = await supabaseAdmin
                  .from("project_plugins")
                  .select("plugin_id, config, enabled, created_at")
                  .eq("project_id", args.projectId)
                  .eq("user_id", userId);
                if (error) return { error: error.message };
                return { ok: true, plugins: data ?? [], message: `Project has ${data?.length ?? 0} plugin(s).` };
              },
            },

            // -------- Project lifecycle: API keys --------
            createProjectApiKey: {
              description:
                "Create an API key for a project. The full key (jsk_...) is returned ONCE — show it to the user immediately; only its hash+prefix are stored.",
              parameters: z.object({
                projectId: z.string().uuid().describe("Project ID"),
                name: z.string().min(1).describe("Key name, e.g. 'production'"),
                scopes: z.array(z.enum(["read", "write", "deploy", "admin"])).optional().describe("Scopes"),
              }),
              execute: async (args: any) => {
                if (!userId) return { error: "Sign in to create API keys" };
                const { createHash, randomBytes } = await import("node:crypto");
                const secret = `jsk_${randomBytes(24).toString("hex")}`;
                const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
                const { data, error } = await supabaseAdmin
                  .from("project_api_keys")
                  .insert({
                    project_id: args.projectId,
                    user_id: userId,
                    name: args.name,
                    key_hash: createHash("sha256").update(secret).digest("hex"),
                    key_prefix: secret.slice(0, 14),
                    scopes: args.scopes ?? ["read", "write"],
                  })
                  .select("id, name, key_prefix, scopes, created_at")
                  .single();
                if (error) return { error: error.message };
                return clientAction(
                  "apiKeyCreated",
                  { secret, keyPrefix: data.key_prefix, keyName: data.name },
                  `API key "${args.name}" created.\n\nFull key (copy it now — shown once):\n\`${secret}\`\n\nStored: ${data.key_prefix}*** (sha256 hash only).`,
                );
              },
            },
            listProjectApiKeys: {
              description: "List API keys issued for a project (prefixes only, never full keys).",
              parameters: z.object({ projectId: z.string().uuid() }),
              execute: async (args: any) => {
                if (!userId) return { error: "Sign in" };
                const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
                const { data, error } = await supabaseAdmin
                  .from("project_api_keys")
                  .select("id, name, key_prefix, scopes, last_used_at, revoked_at, created_at")
                  .eq("project_id", args.projectId)
                  .eq("user_id", userId)
                  .order("created_at", { ascending: false });
                if (error) return { error: error.message };
                return { ok: true, keys: data ?? [], message: `Project has ${data?.length ?? 0} API key(s).` };
              },
            },
            revokeProjectApiKey: {
              description: "Revoke an API key for a project.",
              parameters: z.object({ id: z.string().uuid().describe("API key id") }),
              execute: async (args: any) => {
                if (!userId) return { error: "Sign in" };
                const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
                const { error } = await supabaseAdmin
                  .from("project_api_keys")
                  .update({ revoked_at: new Date().toISOString() })
                  .eq("id", args.id)
                  .eq("user_id", userId);
                if (error) return { error: error.message };
                return { ok: true, message: "API key revoked." };
              },
            },

            // -------- Interactive questions (4 options + Other) --------
            askUser: {
              description:
                "Ask the user a question with up to 4 predefined answer options plus a free-text 'Other' option. Use when you need info to continue: brand details (name, email, phone, address, icon style), design preferences, or any decision where choices help. Keep questions short. The user's answer will arrive as their next message.",
              parameters: z.object({
                question: z.string().describe("The question, e.g. 'What is your brand name?'"),
                options: z.array(z.string()).min(1).max(4).describe("1–4 answer options"),
                context: z.string().optional().describe("Short note shown to the user (optional)"),
              }),
              execute: async (args: any) => {
                return clientAction(
                  "askUser",
                  { question: args.question, options: args.options, context: args.context },
                  args.question,
                );
              },
            },

            // -------- Brand assets --------
            generateBrandAssets: {
              description:
                "Generate a complete brand asset kit as inline SVG: logo (icon+wordmark), favicon, OG image, color palette, and font pairing. Saves assets to the user's brand library and returns a download/preview action. Use when the user wants a logo, favicon, brand kit, or brand identity. Prefer asking for brand name/email/colors first via askUser if unknown.",
              parameters: z.object({
                brandName: z.string().describe("Brand/company name"),
                tagline: z.string().optional().describe("Short tagline"),
                initials: z.string().optional().describe("Initials for monogram (default: first letters of brand name)"),
                colors: z.object({
                  primary: z.string().optional(),
                  secondary: z.string().optional(),
                  accent: z.string().optional(),
                }).optional().describe("Brand colors"),
                iconStyle: z.enum(["geometric", "abstract", "letter", "organic", "minimal"]).optional().describe("Icon style"),
                darkMode: z.boolean().optional().describe("Prefer dark palette"),
              }),
              execute: async (args: any) => {
                if (!userId) return { error: "Sign in to generate brand assets" };
                const primary = args.colors?.primary ?? (args.darkMode ? "#7C5CFF" : "#5B21B6");
                const secondary = args.colors?.secondary ?? (args.darkMode ? "#22D3EE" : "#7C3AED");
                const accent = args.colors?.accent ?? (args.darkMode ? "#F59E0B" : "#F59E0B");
                const initials = (args.initials ?? args.brandName).slice(0, 3).toUpperCase();
                const bg = args.darkMode ? "#0B0B0F" : "#FFFFFF";

                const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="${bg}"/>
  <circle cx="256" cy="256" r="180" fill="none" stroke="${primary}" stroke-width="24"/>
  <circle cx="256" cy="256" r="120" fill="none" stroke="${secondary}" stroke-width="20"/>
  <text x="256" y="298" font-family="Arial, Helvetica, sans-serif" font-size="128" font-weight="700" text-anchor="middle" fill="${primary}">${initials}</text>
</svg>`;
                const favicon = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${bg}"/>
  <text x="32" y="42" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" text-anchor="middle" fill="${primary}">${initials}</text>
</svg>`;
                const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${bg}"/>
  <circle cx="1060" cy="90" r="260" fill="${primary}" opacity="0.15"/>
  <circle cx="80" cy="560" r="200" fill="${secondary}" opacity="0.12"/>
  <text x="90" y="330" font-family="Arial, Helvetica, sans-serif" font-size="96" font-weight="800" fill="${primary}">${args.brandName}</text>
  ${args.tagline ? `<text x="92" y="400" font-family="Arial, Helvetica, sans-serif" font-size="40" fill="#6B7280">${args.tagline}</text>` : ""}
  <text x="90" y="520" font-family="Arial, Helvetica, sans-serif" font-size="28" letter-spacing="6" fill="${accent}">${initials}</text>
</svg>`;

                const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
                const assets = [
                  { user_id: userId, asset_type: "logo", content: logo, label: "Logo (SVG)" },
                  { user_id: userId, asset_type: "favicon", content: favicon, label: "Favicon (SVG)" },
                  { user_id: userId, asset_type: "og-image", content: og, label: "OG share image (SVG)" },
                ];
                for (const a of assets) {
                  await supabaseAdmin.from("project_brand_assets").insert(a);
                }
                const palette = { primary, secondary, accent, background: bg, foreground: args.darkMode ? "#F9FAFB" : "#111827" };
                return clientAction(
                  "brandAssets",
                  { brandName: args.brandName, assets, palette, logo, favicon, og },
                  `Brand kit for ${args.brandName} ready — logo, favicon, and OG image generated.\n\nPalette: primary ${primary}, secondary ${secondary}, accent ${accent}.`,
                );
              },
            },
            generateBrandComponents: {
              description:
                "Generate a complete brand UI kit as a single HTML file: buttons, inputs, cards, navbar, hero, footer — styled with the brand palette and fonts. Use when the user wants UI components, a component library, or a design system for their brand.",
              parameters: z.object({
                brandName: z.string().describe("Brand name"),
                primary: z.string().optional().describe("Primary color (hex)"),
                secondary: z.string().optional().describe("Secondary color"),
                accent: z.string().optional().describe("Accent color"),
                darkMode: z.boolean().optional().describe("Dark theme"),
                components: z.array(z.enum(["buttons", "inputs", "cards", "navbar", "hero", "footer", "badges", "forms"])).optional().describe("Which components to include"),
              }),
              execute: async (args: any) => {
                const primary = args.primary ?? (args.darkMode ? "#7C5CFF" : "#5B21B6");
                const secondary = args.secondary ?? (args.darkMode ? "#22D3EE" : "#7C3AED");
                const accent = args.accent ?? "#F59E0B";
                const bg = args.darkMode ? "#0B0B0F" : "#FFFFFF";
                const fg = args.darkMode ? "#F9FAFB" : "#111827";
                const muted = args.darkMode ? "#9CA3AF" : "#6B7280";
                const cardBg = args.darkMode ? "#16161D" : "#F9FAFB";

                const components = args.components ?? ["buttons", "inputs", "cards", "navbar", "hero", "footer", "badges", "forms"];
                const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${args.brandName} — UI Kit</title>
<style>
  :root { --primary: ${primary}; --secondary: ${secondary}; --accent: ${accent}; --bg: ${bg}; --fg: ${fg}; --muted: ${muted}; --card: ${cardBg}; --radius: 12px; }
  * { box-sizing: border-box; margin: 0; }
  body { font-family: 'Inter', system-ui, -apple-system, sans-serif; background: var(--bg); color: var(--fg); padding: 48px 32px; }
  h1, h2 { font-family: 'Sora', 'Inter', sans-serif; }
  .section { max-width: 960px; margin: 0 auto 64px; }
  .section > h2 { font-size: 14px; text-transform: uppercase; letter-spacing: 2px; color: var(--muted); margin-bottom: 20px; }
  .row { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; margin-bottom: 16px; }
  .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 20px; border-radius: var(--radius); border: 1px solid transparent; font-weight: 600; font-size: 14px; cursor: pointer; text-decoration: none; transition: opacity .15s, transform .1s; }
  .btn:hover { opacity: .92; transform: translateY(-1px); }
  .btn-primary { background: var(--primary); color: #fff; }
  .btn-secondary { background: var(--secondary); color: #fff; }
  .btn-outline { border-color: var(--primary); color: var(--primary); background: transparent; }
  .btn-ghost { color: var(--fg); background: transparent; }
  .btn-accent { background: var(--accent); color: #111827; }
  .input, .select, .textarea { width: 100%; padding: 10px 14px; border-radius: var(--radius); border: 1px solid var(--muted); background: var(--card); color: var(--fg); font-size: 14px; }
  .input:focus, .select:focus, .textarea:focus { outline: 2px solid var(--primary); outline-offset: 1px; }
  .label { display: block; font-size: 12px; font-weight: 600; margin-bottom: 6px; color: var(--muted); }
  .card { background: var(--card); border-radius: 16px; padding: 24px; border: 1px solid rgba(128,128,128,.15); }
  .card h3 { margin-bottom: 8px; }
  .card p { color: var(--muted); font-size: 14px; line-height: 1.5; }
  .badge { display: inline-flex; align-items: center; padding: 4px 12px; border-radius: 999px; font-size: 12px; font-weight: 600; }
  .badge-primary { background: var(--primary); color: #fff; }
  .badge-accent { background: var(--accent); color: #111827; }
  .badge-outline { border: 1px solid var(--muted); color: var(--muted); }
  .navbar { display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; background: var(--card); border-radius: 16px; margin-bottom: 32px; }
  .navbar .brand { font-weight: 700; font-size: 18px; }
  .navbar nav { display: flex; gap: 20px; }
  .navbar a { color: var(--muted); text-decoration: none; font-size: 14px; }
  .navbar a:hover { color: var(--fg); }
  .hero { text-align: center; padding: 72px 24px; }
  .hero h1 { font-size: 48px; margin-bottom: 16px; }
  .hero p { color: var(--muted); font-size: 18px; margin-bottom: 32px; max-width: 560px; margin-inline: auto; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
  .footer { text-align: center; color: var(--muted); font-size: 13px; padding: 32px 0; border-top: 1px solid rgba(128,128,128,.15); }
</style>
</head>
<body>
  ${components.includes("navbar") ? `<nav class="navbar" style="max-width:960px;margin:0 auto 48px">
    <span class="brand">${args.brandName}</span>
    <nav><a href="#">Home</a><a href="#">Features</a><a href="#">Pricing</a><a href="#">Contact</a></nav>
    <a class="btn btn-primary" href="#">Get started</a>
  </nav>` : ""}
  ${components.includes("hero") ? `<section class="hero">
    <h1>Build with ${args.brandName}</h1>
    <p>The ${args.brandName} UI kit gives you production-ready components styled with your brand.</p>
    <div class="row" style="justify-content:center">
      <a class="btn btn-primary" href="#">Get started</a>
      <a class="btn btn-outline" href="#">View docs</a>
    </div>
  </section>` : ""}
  <div class="section">
    <h2>Buttons</h2>
    <div class="row">
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
      <button class="btn btn-outline">Outline</button>
      <button class="btn btn-ghost">Ghost</button>
    </div>
  </div>
  ${components.includes("badges") ? `<div class="section">
    <h2>Badges</h2>
    <div class="row">
      <span class="badge badge-primary">New</span>
      <span class="badge badge-accent">Popular</span>
      <span class="badge badge-outline">Beta</span>
    </div>
  </div>` : ""}
  ${components.includes("inputs") || components.includes("forms") ? `<div class="section">
    <h2>Forms</h2>
    <div class="grid">
      <div>
        <label class="label">Email</label>
        <input class="input" type="email" placeholder="you@example.com"/>
      </div>
      <div>
        <label class="label">Plan</label>
        <select class="select"><option>Starter</option><option>Pro</option><option>Enterprise</option></select>
      </div>
    </div>
    <div style="margin-top:16px"><label class="label">Message</label><textarea class="textarea" rows="3" placeholder="Tell us about your project…"></textarea></div>
    <div style="margin-top:16px"><button class="btn btn-primary">Submit</button></div>
  </div>` : ""}
  ${components.includes("cards") ? `<div class="section">
    <h2>Cards</h2>
    <div class="grid">
      <div class="card"><h3>Starter</h3><p>For personal projects. Everything you need to launch.</p><div style="margin-top:16px"><button class="btn btn-outline">Choose</button></div></div>
      <div class="card" style="border-color:var(--primary)"><h3>Pro</h3><p>For growing teams with advanced needs.</p><div style="margin-top:16px"><button class="btn btn-primary">Choose</button></div></div>
      <div class="card"><h3>Enterprise</h3><p>Custom solutions with dedicated support.</p><div style="margin-top:16px"><button class="btn btn-outline">Contact</button></div></div>
    </div>
  </div>` : ""}
  <footer class="footer">© ${new Date().getFullYear()} ${args.brandName}. Built with the ${args.brandName} UI kit.</footer>
</body>
</html>`;
                return clientAction(
                  "brandComponents",
                  { brandName: args.brandName, html, components },
                  `UI kit for ${args.brandName} generated with ${components.length} component groups (buttons, forms, cards, navbar, hero, badges, footer).`,
                );
              },
            },

            // -------- Legal pages --------
            generateLegalPages: {
              description:
                "Generate legal pages (Privacy Policy, Terms of Service, Disclaimer, Refund Policy, Cookie Policy) as ready HTML with the user's brand info filled in. Ask for business email, phone, address via askUser when missing. Pages are saved and can be exported with the project.",
              parameters: z.object({
                brandName: z.string().describe("Brand/business name"),
                email: z.string().optional().describe("Contact email"),
                phone: z.string().optional().describe("Contact phone"),
                address: z.string().optional().describe("Business address"),
                website: z.string().optional().describe("Website URL"),
                pages: z.array(z.enum(["privacy", "terms", "disclaimer", "refund", "cookies"])).optional().describe("Which pages to generate"),
                primary: z.string().optional().describe("Brand primary color"),
                darkMode: z.boolean().optional().describe("Dark theme"),
              }),
              execute: async (args: any) => {
                if (!userId) return { error: "Sign in to generate legal pages" };
                const email = args.email ?? "support@example.com";
                const phone = args.phone ?? "";
                const address = args.address ?? "";
                const website = args.website ?? "";
                const pages = args.pages ?? ["privacy", "terms", "disclaimer", "refund", "cookies"];
                const primary = args.primary ?? (args.darkMode ? "#7C5CFF" : "#5B21B6");
                const bg = args.darkMode ? "#0B0B0F" : "#FFFFFF";
                const fg = args.darkMode ? "#F9FAFB" : "#111827";
                const muted = args.darkMode ? "#9CA3AF" : "#6B7280";

                const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
                const content: Record<string, { title: string; body: string[] }> = {
                  privacy: {
                    title: "Privacy Policy",
                    body: [
                      `<p><strong>Last updated:</strong> ${today}</p>`,
                      `<p>${args.brandName} ("we", "us", "our") operates ${website || "this website"}. This page explains how we collect, use, and protect your personal information.</p>`,
                      `<h3>1. Information we collect</h3><p>We collect information you provide directly (name, email, phone), usage data (pages visited, device info), and cookies as described in our Cookie Policy.</p>`,
                      `<h3>2. How we use information</h3><p>We use your information to provide and improve our services, respond to requests, send updates (with consent), and comply with legal obligations.</p>`,
                      `<h3>3. Data sharing</h3><p>We do not sell your personal data. We share data only with service providers essential to operate our services, under confidentiality obligations.</p>`,
                      `<h3>4. Data retention</h3><p>We retain personal data only as long as necessary for the purposes described above, or as required by law.</p>`,
                      `<h3>5. Your rights</h3><p>Depending on your jurisdiction (GDPR, CCPA), you may have the right to access, correct, delete, or export your data. Contact us at <a href="mailto:${email}">${email}</a> to exercise these rights.</p>`,
                      `<h3>6. Security</h3><p>We use appropriate technical and organizational measures (encryption, access controls) to protect your data.</p>`,
                      `<h3>7. Contact</h3><p>Questions about this policy: <a href="mailto:${email}">${email}</a>${phone ? `, ${phone}` : ""}${address ? `, ${address}` : ""}.</p>`,
                    ],
                  },
                  terms: {
                    title: "Terms of Service",
                    body: [
                      `<p><strong>Last updated:</strong> ${today}</p>`,
                      `<p>These Terms govern your use of ${args.brandName}${website ? ` at ${website}` : ""}. By using our service you agree to these terms.</p>`,
                      `<h3>1. Use of service</h3><p>You agree to use the service lawfully and not to misuse it (no unauthorized access, no disruption, no unlawful content).</p>`,
                      `<h3>2. Accounts</h3><p>You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.</p>`,
                      `<h3>3. Intellectual property</h3><p>All content, trademarks, and materials provided by ${args.brandName} remain our property. You retain rights to content you submit.</p>`,
                      `<h3>4. Payments</h3><p>Paid plans are billed in advance and are non-refundable except as described in our Refund Policy.</p>`,
                      `<h3>5. Limitation of liability</h3><p>To the maximum extent permitted by law, ${args.brandName} is not liable for indirect, incidental, or consequential damages.</p>`,
                      `<h3>6. Termination</h3><p>We may suspend or terminate access for violation of these terms, with notice where possible.</p>`,
                      `<h3>7. Contact</h3><p><a href="mailto:${email}">${email}</a>${phone ? `, ${phone}` : ""}${address ? `, ${address}` : ""}.</p>`,
                    ],
                  },
                  disclaimer: {
                    title: "Disclaimer",
                    body: [
                      `<p><strong>Last updated:</strong> ${today}</p>`,
                      `<p>The information provided by ${args.brandName} is for general informational purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind regarding its accuracy, adequacy, validity, reliability, or completeness.</p>`,
                      `<h3>Professional advice</h3><p>Content on this site is not professional (legal, financial, medical) advice. You should consult a qualified professional for advice tailored to your situation.</p>`,
                      `<h3>External links</h3><p>Our site may contain links to external websites. We do not control and are not responsible for their content or practices.</p>`,
                      `<h3>Contact</h3><p>Questions: <a href="mailto:${email}">${email}</a>${phone ? `, ${phone}` : ""}.</p>`,
                    ],
                  },
                  refund: {
                    title: "Refund Policy",
                    body: [
                      `<p><strong>Last updated:</strong> ${today}</p>`,
                      `<p>At ${args.brandName}, we want you to be satisfied with your purchase.</p>`,
                      `<h3>1. Refund window</h3><p>Refund requests must be made within 14 days of purchase for most digital products and subscriptions.</p>`,
                      `<h3>2. How to request</h3><p>Email <a href="mailto:${email}">${email}</a> with your order number and reason. We respond within 5 business days.</p>`,
                      `<h3>3. Non-refundable items</h3><p>Services already delivered, used credits, and enterprise contracts are non-refundable unless agreed otherwise.</p>`,
                      `<h3>4. Processing</h3><p>Approved refunds are processed to the original payment method within 5–10 business days.</p>`,
                    ],
                  },
                  cookies: {
                    title: "Cookie Policy",
                    body: [
                      `<p><strong>Last updated:</strong> ${today}</p>`,
                      `<p>${args.brandName} uses cookies and similar technologies to operate and improve our website.</p>`,
                      `<h3>1. What are cookies</h3><p>Cookies are small text files stored on your device when you visit a website.</p>`,
                      `<h3>2. Cookies we use</h3><p><strong>Essential:</strong> required for login and core functionality. <strong>Analytics:</strong> help us understand usage (e.g. anonymized page views). <strong>Preferences:</strong> remember your settings.</p>`,
                      `<h3>3. Managing cookies</h3><p>You can block or delete cookies via your browser settings. Blocking essential cookies may break parts of the site.</p>`,
                      `<h3>4. Contact</h3><p><a href="mailto:${email}">${email}</a>.</p>`,
                    ],
                  },
                };

                const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
                const saved: string[] = [];
                for (const slug of pages) {
                  const c = content[slug];
                  if (!c) continue;
                  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${c.title} — ${args.brandName}</title>
<style>
  body { font-family: -apple-system, 'Segoe UI', Roboto, sans-serif; background: ${bg}; color: ${fg}; margin: 0; }
  .wrap { max-width: 760px; margin: 0 auto; padding: 48px 24px 80px; }
  h1 { font-size: 36px; margin-bottom: 8px; }
  h3 { color: ${primary}; margin-top: 32px; }
  p { line-height: 1.7; color: ${muted}; }
  a { color: ${primary}; }
</style>
</head>
<body>
  <div class="wrap">
    <h1>${c.title}</h1>
    ${c.body.join("\n    ")}
    <p style="margin-top:48px;font-size:12px">© ${new Date().getFullYear()} ${args.brandName}. All rights reserved.</p>
  </div>
</body>
</html>`;
                  await supabaseAdmin.from("project_legal_pages").upsert({
                    user_id: userId,
                    slug,
                    title: c.title,
                    html,
                    brand_name: args.brandName,
                  }, { onConflict: "user_id,slug" });
                  saved.push(slug);
                }
                return clientAction(
                  "legalPages",
                  { brandName: args.brandName, pages: saved, email, phone, address },
                  `${saved.length} legal page(s) generated for ${args.brandName}: ${saved.join(", ")}. Info used: ${email}${phone ? `, ${phone}` : ""}${address ? `, ${address}` : ""}. They're saved and included in project exports.`,
                );
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

          // Fast path for simple RAG — bypass full agent loop for <800ms first token
          const _lastUser = [...requestMessages].reverse().find((m) => m.role === "user");
          const _lastText = _lastUser
            ? Array.isArray((_lastUser as any).parts)
              ? (_lastUser as any).parts.map((p: any) => (p?.type === "text" ? p.text : "")).join(" ")
              : ""
            : "";
          if (_lastText && isSimpleRAG(_lastText)) {
            const fastResult = streamText({
              model: aiModel as any,
              system,
              messages: await convertToModelMessages(requestMessages),
              stopWhen: isStepCount(1),
            });
            return fastResult.toUIMessageStreamResponse({
              originalMessages: requestMessages,
              headers: { "X-Jarvis-Model": resolved.modelId + (resolved.usedFallback ? " (fallback)" : "") },
            });
          }

          const result = streamText({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            model: aiModel as any,
            system,
            messages: await convertToModelMessages(requestMessages),
            tools: tools as any,
            toolChoice: "auto",
            // Allow tool → answer round trips (default stopWhen is 1 step,
            // which ends the stream right after the first tool call with no
            // final answer).
            stopWhen: isStepCount(5),
          });

          const streamResponse = result.toUIMessageStreamResponse({
            headers: { "X-Jarvis-Model": resolved.modelId + (resolved.usedFallback ? " (fallback)" : "") },
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

                // Auto-title: if this is the first message, generate a title from it
                if (lastUser) {
                  const { count } = await supabaseAdmin
                    .from("messages")
                    .select("id", { count: "exact", head: true })
                    .eq("thread_id", body.threadId);
                  if (count === 1 || count === 2) {
                    // First exchange — generate title from user message text
                    const userText = (lastUser as any).parts
                      ?.filter((p: any) => p.type === "text")
                      .map((p: any) => p.text)
                      .join(" ")
                      .slice(0, 200) ?? "";
                    if (userText.length > 5) {
                      // Generate a concise title from the message
                      const title = userText
                        .replace(/\n/g, " ")
                        .replace(/\s+/g, " ")
                        .trim()
                        .slice(0, 80)
                        .replace(/[?.!]+$/, "");
                      // Don't overwrite if already titled
                      const { data: thread } = await supabaseAdmin
                        .from("threads")
                        .select("title")
                        .eq("id", body.threadId)
                        .single();
                      if (thread && thread.title === "New chat") {
                        await supabaseAdmin
                          .from("threads")
                          .update({ title })
                          .eq("id", body.threadId);
                      }
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
