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
import { autoLearn } from "@/mastra/tools/auto-learner";
import { listDesignSystems, getDesignSystem } from "@/lib/design-systems";
import { getSteeringForContext } from "@/lib/steering";

const DEFAULT_MODEL = "gemini-1.5-flash";

const BASE_SYSTEM = `You are Jarvis — an AI operating system built for Vishwajeet.
You coordinate 32 specialized agents (ceo-agent, planner, saas-builder, designer,
researcher, writer, test-agent, reviewer, deployer, sre, memory-keeper,
governance, growth, ops, billing, connector, voice, coworker, open-design, docx-master, xlsx-engine, pdf-pro, pptx-deck).
Speak in a calm, precise, senior-engineer register. Prefer concrete steps,
short paragraphs, and code blocks when helpful. If the user attaches files,
reference them explicitly.`;

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
          const requestMessages = body.messages;

          if (requestMessages.length === 0) {
            return new Response("messages must not be empty", { status: 400 });
          }

          if (requestMessages.length > 100) {
            return new Response("messages limit exceeded (max 100)", { status: 400 });
          }

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

          try {
            const steeringContext = getSteeringForContext();
            if (steeringContext) system = system + steeringContext;
          } catch {}

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const tools: any = {
            executeShell: {
              description: "Execute a shell command. Requires a signed-in session.",
              parameters: z.object({ command: z.string(), workingDirectory: z.string().optional() }),
              execute: async ({ command, workingDirectory }: { command: string; workingDirectory?: string }) => {
                if (!userId) {
                  return { error: "Sign in to use shell execution" };
                }
                return await executeShell({ command, workingDirectory });
              },
            },
            createWordDocument: {
              description: "Create a Word document (.docx).",
              parameters: z.object({ title: z.string(), sections: z.array(z.any()) }),
              execute: async (args: { title: string; sections: any[] }) => {
                const blob = await createDocx(args);
                return { success: true, filename: `${args.title.replace(/[^a-zA-Z0-9]/g, "_")}.docx`, size: blob.size };
              },
            },
            runCode: {
              description: "Execute a code snippet. Requires a signed-in session.",
              parameters: z.object({ code: z.string(), language: z.enum(["javascript", "typescript", "python", "shell"]) }),
              execute: async (args: { code: string; language: any }) => {
                if (!userId) {
                  return { error: "Sign in to use code execution" };
                }
                return await executeCode(args);
              },
            },
            listDesignSystems: {
              description: "List available brand design systems.",
              parameters: z.object({}),
              execute: async () => {
                const systems = listDesignSystems();
                return systems.map((s) => ({ id: s.id, name: s.name, category: s.category }));
              },
            },
            getDesignSystem: {
              description: "Get full details of a design system.",
              parameters: z.object({ id: z.string() }),
              execute: async ({ id }: { id: string }) => {
                const ds = getDesignSystem(id);
                if (!ds) return { error: `Design system "${id}" not found` };
                return { name: ds.name, category: ds.category, tokens: ds.tokens, components: ds.components };
              },
            },
            recallMemory: {
              description: "Search Jarvis's memory of the user's past conversations for relevant context. Use when the user references something they worked on before, or asks 'what did we decide/do about X'.",
              parameters: z.object({ query: z.string(), limit: z.number().min(1).max(10).optional() }),
              execute: async ({ query, limit }: { query: string; limit?: number }) => {
                if (!userId) return { error: "Not authenticated" };
                const { recall } = await import("@/lib/recall");
                const hits = await recall(userId, query, limit ?? 5);
                return hits.map((h) => ({ date: h.createdAt, role: h.role, text: h.text.slice(0, 400) }));
              },
            },
            saveSkill: {
              description: "Author a reusable SKILL.md skill after a complex task (5+ tool calls), fixing a tricky error, or discovering a non-trivial workflow. Action 'create' writes a new skill; 'patch' fixes an existing one; 'delete' removes one. Keep the name lowercase with dashes and the description a single short sentence.",
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
              description: "Return a structured learning path for becoming an engineer or building a skill (ai-engineer, frontend, backend, devops). Use when the user asks how to learn something or start a career path.",
              parameters: z.object({ path: z.enum(["ai-engineer", "frontend", "backend", "devops"]) }),
              execute: async ({ path }: { path: string }) => {
                const { roadmapById } = await import("@/lib/roadmap");
                const r = roadmapById(path);
                if (!r) return { error: `No roadmap "${path}"` };
                return r;
              },
            },
          };

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
