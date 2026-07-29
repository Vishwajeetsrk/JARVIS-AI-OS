import { createFileRoute } from "@tanstack/react-router";
import { google } from "@ai-sdk/google";
import { createGroq } from "@ai-sdk/groq";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createClient } from "@supabase/supabase-js";

// ── Free provider setup ─────────────────────────────────────────────────────
// Primary:  Google Gemini  → https://aistudio.google.com/apikey  (GEMINI_API_KEY)
// Fallback: Groq           → https://console.groq.com            (GROQ_API_KEY)
//   - Includes: Llama 3.3 70B, GPT-OSS 120B, Qwen 3.6, compound (web search)
// Offline:  Ollama         → http://localhost:11434              (no key needed)

const GROQ_MODELS = new Set([
  "llama-3.3-70b-versatile",
  "llama-3.1-8b-instant",
  "openai/gpt-oss-120b",
  "openai/gpt-oss-20b",
  "qwen/qwen3.6-27b",
  "groq/compound",
  "groq/compound-mini",
]);

const GEMINI_MODELS = new Set([
  "gemini-2.5-flash",
  "gemini-2.5-pro",
  "gemini-2.0-flash",
  "gemini-1.5-flash",
  "gemini-1.5-pro",
]);

const OLLAMA_MODELS = new Set([
  "ollama/llama3.3",
  "ollama/mistral",
]);

const DEFAULT_MODEL = "gemini-2.5-flash";

// ── Default Jarvis system prompt ────────────────────────────────────────────
const BASE_SYSTEM = `You are Jarvis — an AI operating system built for Vishwajeet.
You coordinate 18 specialized agents (ceo-agent, planner, saas-builder, designer,
researcher, writer, test-agent, reviewer, deployer, sre, memory-keeper,
governance, growth, ops, billing, connector, voice, coworker).
Speak in a calm, precise, senior-engineer register. Prefer concrete steps,
short paragraphs, and code blocks when helpful. If the user attaches files,
reference them explicitly. If you would delegate a task, say which agent
you would assign and why.`;

// Skill descriptions injected when the user enables them
const SKILL_DESCRIPTIONS: Record<string, string> = {
  "ceo-agent":          "Validate ideas, make go/no-go calls, route work to the right agent.",
  "planner":            "Create ordered task plans with acceptance criteria and deadlines.",
  "saas-builder":       "Build SaaS features end-to-end: PRD → schema → security → UI → deploy.",
  "designer":           "Generate visual identity, design tokens, and component specs.",
  "researcher":         "Deep real-time market, competitor, and technical research.",
  "writer":             "Write copy, PRDs, docs, changelogs, and email campaigns.",
  "test-agent":         "Run security, QA, and integration tests; triage bugs.",
  "reviewer":           "Review diffs, flag regressions, enforce coding standards.",
  "deployer":           "Manage preview, staging, and production deployments.",
  "sre":                "Set up metrics, alerts, and postmortem reports.",
  "memory-keeper":      "Curate the knowledge base and persist decisions to global memory.",
  "governance":         "Enforce policies, ACLs, and compliance rules.",
  "growth":             "Build landing pages, run A/B experiments, manage outreach.",
  "ops":                "Manage recurring workflows, cron jobs, and automation pipelines.",
  "billing":            "Handle subscriptions, invoices, and payment webhooks.",
  "connector":          "Wire MCP servers and external APIs into the agent team.",
  "voice":              "Handle speech-to-text input and text-to-speech output via Groq Whisper.",
  "coworker":           "Pair-programs live — reviews code, suggests improvements in real time.",
};

// ── Route ───────────────────────────────────────────────────────────────────
export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as {
          messages?: UIMessage[];
          model?: string;
          threadId?: string;
          enabledSkills?: string[];
        };

        if (!Array.isArray(body.messages)) {
          return new Response("messages required", { status: 400 });
        }

        // ── Build dynamic system prompt ───────────────────────────────────
        let system = BASE_SYSTEM;
        const activeSkills = body.enabledSkills ?? [];
        if (activeSkills.length > 0) {
          const skillLines = activeSkills
            .filter((s) => SKILL_DESCRIPTIONS[s])
            .map((s) => `- **${s}**: ${SKILL_DESCRIPTIONS[s]}`)
            .join("\n");
          if (skillLines) {
            system += `\n\n## Active Skills for this session\n${skillLines}`;
          }
        }

        // ── Resolve model and provider ────────────────────────────────────
        const requestedModel = body.model ?? DEFAULT_MODEL;
        let aiModel;

        if (GEMINI_MODELS.has(requestedModel)) {
          const geminiKey = process.env.GEMINI_API_KEY;
          if (!geminiKey) {
            return new Response(
              "GEMINI_API_KEY not set. Free key at https://aistudio.google.com/apikey",
              { status: 500 },
            );
          }
          process.env.GOOGLE_GENERATIVE_AI_API_KEY = geminiKey;
          aiModel = google(requestedModel);

        } else if (GROQ_MODELS.has(requestedModel)) {
          const groqKey = process.env.GROQ_API_KEY;
          if (!groqKey) {
            return new Response(
              "GROQ_API_KEY not set. Free key at https://console.groq.com",
              { status: 500 },
            );
          }
          const groq = createGroq({ apiKey: groqKey });
          aiModel = groq(requestedModel);

        } else if (OLLAMA_MODELS.has(requestedModel)) {
          // Ollama local — requires ollama running at localhost:11434
          const { createOllama } = (await import("ollama-ai-provider").catch(() => null)) ?? {};
          if (!createOllama) {
            return new Response(
              "Ollama not available. Install from https://ollama.com and run: ollama pull llama3.3",
              { status: 500 },
            );
          }
          const ollama = createOllama({ baseURL: process.env.OLLAMA_BASE_URL ?? "http://localhost:11434/api" });
          aiModel = ollama(requestedModel.replace("ollama/", ""));

        } else {
          // Default fallback — Gemini 2.5 Flash
          const geminiKey = process.env.GEMINI_API_KEY;
          if (!geminiKey) {
            return new Response(
              "No API key configured. Set GEMINI_API_KEY (free at https://aistudio.google.com/apikey)",
              { status: 500 },
            );
          }
          process.env.GOOGLE_GENERATIVE_AI_API_KEY = geminiKey;
          aiModel = google(DEFAULT_MODEL);
        }

        // ── Authenticate user for message persistence ─────────────────────
        const auth = request.headers.get("authorization") ?? "";
        const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
        let userId: string | null = null;
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
          } catch {}
        }

        // ── Stream response ───────────────────────────────────────────────
        const result = streamText({
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          model: aiModel as any,
          system,
          messages: await convertToModelMessages(body.messages),
        });

        return result.toUIMessageStreamResponse({
          originalMessages: body.messages,
          onFinish: async ({ messages }) => {
            if (!userId || !body.threadId) return;
            try {
              const { supabaseAdmin } = await import(
                "@/integrations/supabase/client.server"
              );
              const last = messages[messages.length - 1];
              const secondLast = messages[messages.length - 2];
              const rows: Array<{
                thread_id: string;
                user_id: string;
                role: string;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                parts: any;
              }> = [];
              if (secondLast && secondLast.role === "user") {
                rows.push({ thread_id: body.threadId, user_id: userId, role: "user", parts: secondLast.parts ?? [] });
              }
              if (last && last.role === "assistant") {
                rows.push({ thread_id: body.threadId, user_id: userId, role: "assistant", parts: last.parts ?? [] });
              }
              if (rows.length) {
                const { error } = await supabaseAdmin.from("messages").insert(rows);
                if (error) console.error("[jarvis.persist]", error);
              }
              // Auto-title from first user message
              if (secondLast?.role === "user") {
                const text = secondLast.parts
                  .map((p: { type: string; text?: string }) => (p.type === "text" ? p.text : ""))
                  .join(" ")
                  .trim();
                if (text) {
                  const title = text.length > 60 ? text.slice(0, 57) + "…" : text;
                  await supabaseAdmin
                    .from("threads")
                    .update({ title })
                    .eq("id", body.threadId)
                    .eq("title", "New chat");
                }
              }
            } catch (e) {
              console.error("[jarvis.onFinish]", e);
            }
          },
        });
      },
    },
  },
});
