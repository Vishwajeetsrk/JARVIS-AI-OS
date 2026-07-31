// Server functions for the Jarvis real-time dashboard.
import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { Json } from "@/integrations/supabase/types";
import { z } from "zod";

export const getDashboardStats = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;

    const [threads, messages, projects, activity, settings] = await Promise.all([
      supabase
        .from("threads")
        .select("id", { count: "exact", head: true }),
      supabase
        .from("messages")
        .select("id", { count: "exact", head: true }),
      supabase
        .from("projects")
        .select("id", { count: "exact", head: true }),
      supabase
        .from("agent_activity")
        .select("id", { count: "exact", head: true })
        .gte("created_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()),
      supabase
        .from("user_settings")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle(),
    ]);

    const skills = ((settings.data?.enabled_skills as string[] | undefined) ?? []).length;
    const connectors = ((settings.data?.enabled_connectors as string[] | undefined) ?? []).length;
    const plugins = ((settings.data?.enabled_plugins as string[] | undefined) ?? []).length;
    const tools = ((settings.data?.enabled_tools as string[] | undefined) ?? []).length;

    return {
      threads: threads.count ?? 0,
      messages: messages.count ?? 0,
      projects: projects.count ?? 0,
      activityToday: activity.count ?? 0,
      skills,
      connectors,
      plugins,
      tools,
    };
  });

export interface ActivityRow {
  id: string;
  thread_id: string | null;
  kind: string;
  title: string;
  detail: string | null;
  meta: Json;
  created_at: string;
}

export const listActivity = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) =>
    z.object({ limit: z.number().min(1).max(200).optional() }).parse(data),
  )
  .handler(async ({ data, context }) => {
    const limit = data.limit ?? 50;
    const { data: rows, error } = await context.supabase
      .from("agent_activity")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limit);
    if (error) throw new Error(error.message);
    return (rows ?? []) as ActivityRow[];
  });

// Recent chats with a preview of the last message in each thread.
export const listRecentChats = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) =>
    z.object({ limit: z.number().min(1).max(50).optional() }).parse(data),
  )
  .handler(async ({ data, context }) => {
    const limit = data.limit ?? 10;
    const { data: rows, error } = await context.supabase
      .from("messages")
      .select("id, thread_id, role, parts, created_at, threads(title, project_id)")
      .order("created_at", { ascending: false })
      .limit(200);
    if (error) throw new Error(error.message);

    // Group by thread, keep most recent message per thread.
    const byThread = new Map<
      string,
      { threadId: string; title: string; role: string; snippet: string; at: string }
    >();
    for (const r of rows ?? []) {
      const thread = r.threads;
      const id = thread?.title != null ? r.thread_id : null;
      if (!id) continue;
      if (byThread.has(id)) continue;
      const textParts = (r.parts as Array<{ type?: string; text?: string }>)
        .filter((p) => p.type === "text" && typeof p.text === "string")
        .map((p) => p.text as string);
      const snippet = textParts.join(" ").trim().slice(0, 160);
      byThread.set(id, {
        threadId: id,
        title: thread?.title || "Chat",
        role: r.role,
        snippet,
        at: r.created_at,
      });
    }
    return [...byThread.values()].slice(0, limit);
  });

// Latest message across all threads (fallback preview for the feed).
export const listMessages = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) => z.object({ limit: z.number().min(1).max(100).optional() }).parse(data))
  .handler(async ({ data, context }) => {
    const { data: rows, error } = await context.supabase
      .from("messages")
      .select("id, role, parts, created_at, thread_id")
      .order("created_at", { ascending: false })
      .limit(data.limit ?? 30);
    if (error) throw new Error(error.message);
    return (rows ?? []).map((r) => {
      const text = (r.parts as Array<{ type?: string; text?: string }>)
        .filter((p) => p.type === "text" && typeof p.text === "string")
        .map((p) => p.text as string)
        .join(" ");
      const hasTool = (r.parts as Array<{ type?: string }>).some((p) => p.type === "tool");
      return {
        id: r.id as string,
        thread_id: r.thread_id as string,
        role: r.role as string,
        kind: hasTool ? "tool" : r.role === "user" ? "user" : "chat",
        snippet: text.trim().slice(0, 200),
        created_at: r.created_at as string,
      };
    });
  });
