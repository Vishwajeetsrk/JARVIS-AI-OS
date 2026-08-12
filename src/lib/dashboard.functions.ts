// Server functions for the Jarvis real-time dashboard.
import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { Json } from "@/integrations/supabase/types";
import { z } from "zod";

export const getDashboardStats = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;

    try {
      const [threads, messages, projects, activity, settings] = await Promise.all([
        supabase.from("threads").select("id", { count: "exact", head: true }).eq("user_id", userId),
        supabase.from("messages").select("id", { count: "exact", head: true }).eq("user_id", userId),
        supabase.from("projects").select("id", { count: "exact", head: true }).eq("user_id", userId),
        supabase
          .from("agent_activity")
          .select("id", { count: "exact", head: true })
          .eq("user_id", userId)
          .gte("created_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()),
        supabase
          .from("user_settings")
          .select("*")
          .eq("user_id", userId)
          .maybeSingle(),
      ]);

      // Workspace templates (bundled preset sites) appear in the sidebar
      // alongside DB projects, so count them together for an honest "Projects" stat.
      const workspaceCount = ((await import("@/lib/preset-sites.desc")).PRESET_SITES ?? []).length;

      const enabledSkills = (settings?.data?.enabled_skills as string[] | undefined);
      const enabledConnectors = (settings?.data?.enabled_connectors as string[] | undefined);
      const enabledPlugins = (settings?.data?.enabled_plugins as string[] | undefined);
      const enabledTools = (settings?.data?.enabled_tools as string[] | undefined);

      return {
        threads: threads?.count ?? 0,
        messages: messages?.count ?? 0,
        projects: (projects?.count ?? 0) + workspaceCount,
        activityToday: activity?.count ?? 0,
        skills: enabledSkills ? enabledSkills.length : 0,
        connectors: enabledConnectors ? enabledConnectors.length : 0,
        plugins: enabledPlugins ? enabledPlugins.length : 0,
        tools: enabledTools ? enabledTools.length : 0,
      };
    } catch {
      return {
        threads: 0,
        messages: 0,
        projects: 0,
        activityToday: 0,
        skills: 0,
        connectors: 0,
        plugins: 0,
        tools: 0,
      };
    }
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

export interface EngineStatus {
  database: "online" | "offline";
  modelProvider: "online" | "offline";
  voice: "online" | "offline";
  websockets: "online" | "offline";
  checkedAt: string;
}

export const getEngineStatus = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase } = context;

    let database = false;
    if (supabase !== null) {
      try {
        const { error } = await supabase
          .from("agent_activity")
          .select("id", { count: "exact", head: true })
          .limit(1);
        database = !error;
      } catch {
        database = false;
      }
    }

    const modelProvider = Boolean(
      process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GROQ_API_KEY,
    );
    const voice = Boolean(process.env.GROQ_API_KEY);

    return {
      database: database ? "online" : "offline",
      modelProvider: modelProvider ? "online" : "offline",
      voice: voice ? "online" : "offline",
      websockets: "online",
      checkedAt: new Date().toISOString(),
    } satisfies EngineStatus;
  });

export const listActivity = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) =>
    z.object({ limit: z.number().optional() }).parse(data ?? {}),
  )
  .handler(async ({ data, context }) => {
    try {
      const { supabase, userId } = context;
      const { data: rows, error } = await supabase
        .from("agent_activity")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(data.limit ?? 50);

      if (error) return [];
      return (rows as ActivityRow[]) ?? [];
    } catch {
      return [];
    }
  });

export const listMessages = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    try {
      const { supabase, userId } = context;
      const { data: rows, error } = await supabase
        .from("messages")
        .select("id, thread_id, role, parts, created_at")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(50);

      if (error) return [];
      return (rows ?? []).map((r: any) => ({
        id: r.id,
        thread_id: r.thread_id,
        role: r.role,
        kind: r.role === "user" ? "user" : "bot",
        snippet: Array.isArray(r.parts)
          ? r.parts.map((p: any) => p.text ?? "").join(" ")
          : "",
        created_at: r.created_at,
      }));
    } catch {
      return [];
    }
  });
