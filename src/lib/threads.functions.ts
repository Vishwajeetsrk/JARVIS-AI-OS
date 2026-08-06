// Server functions for threads + messages + projects + user settings.
import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

export const listThreads = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("threads")
      .select("id, title, project_id, starred, updated_at, created_at")
      .eq("user_id", context.userId)
      .order("updated_at", { ascending: false })
      .limit(500);
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const createThread = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) =>
    z.object({
      title: z.string().optional(),
      project_id: z.string().uuid().nullable().optional(),
    }).parse(data),
  )
  .handler(async ({ data, context }) => {
    const { data: row, error } = await context.supabase
      .from("threads")
      .insert({
        user_id: context.userId,
        title: data.title || "New chat",
        project_id: data.project_id ?? null,
      })
      .select("id, title, project_id, starred, updated_at, created_at")
      .single();
    if (error) throw new Error(error.message);
    return row!;
  });

export const deleteThread = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) => z.object({ id: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("threads")
      .delete()
      .eq("id", data.id)
      .eq("user_id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const renameThread = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) =>
    z.object({ id: z.string().uuid(), title: z.string().min(1).max(200) }).parse(data),
  )
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("threads")
      .update({ title: data.title })
      .eq("id", data.id)
      .eq("user_id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const updateThread = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) =>
    z.object({
      id: z.string().uuid(),
      starred: z.boolean().optional(),
      project_id: z.string().uuid().nullable().optional(),
      title: z.string().min(1).max(200).optional(),
    }).parse(data),
  )
  .handler(async ({ data, context }) => {
    const patch: { starred?: boolean; project_id?: string | null; title?: string } = {};
    if (data.starred !== undefined) patch.starred = data.starred;
    if (data.project_id !== undefined) patch.project_id = data.project_id;
    if (data.title !== undefined) patch.title = data.title;
    const { error } = await context.supabase
      .from("threads")
      .update(patch)
      .eq("id", data.id)
      .eq("user_id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const loadMessages = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) => z.object({ threadId: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { data: rows, error } = await context.supabase
      .from("messages")
      .select("id, role, parts, created_at")
      .eq("thread_id", data.threadId)
      .eq("user_id", context.userId)
      .order("created_at", { ascending: true });
    if (error) throw new Error(error.message);
    return (rows ?? []).map((r) => ({
      id: r.id as string,
      role: r.role as string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      parts: (r.parts as any) ?? [],
    }));
  });

// -------- Projects --------
export const listProjects = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("projects")
      .select("id, name, description, color, updated_at")
      .eq("user_id", context.userId)
      .order("updated_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const listWorkspaceProjects = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    const colors = ["#D97757", "#E69D45", "#58A65C", "#6A9BCC", "#A855F7", "#EC4899"];
    const bundled = (await import("@/lib/preset-sites.desc")).PRESET_SITES;
    if (bundled.length > 0) {
      return bundled.map((p, idx) => ({
        id: `local-${p.name}`,
        name: p.name,
        color: colors[idx % colors.length],
        previewUrl: p.path,
        isWorkspace: true,
      }));
    }
    // Local-dev fallback: read the Projects dir directly when not bundled.
    try {
      const fs = await import("node:fs/promises");
      const path = await import("node:path");
      const projectsDir = path.resolve(process.cwd(), "Projects");
      const entries = await fs.readdir(projectsDir, { withFileTypes: true });
      return entries
        .filter((e) => e.isDirectory())
        .map((e, idx) => ({
          id: `local-${e.name}`,
          name: e.name,
          color: colors[idx % colors.length],
          previewUrl: `/preset-sites/${e.name}/`,
          isWorkspace: true,
        }));
    } catch {
      return [];
    }
  });

export const createProject = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) =>
    z.object({
      name: z.string().min(1).max(120),
      description: z.string().max(500).optional(),
      color: z.string().optional(),
    }).parse(data),
  )
  .handler(async ({ data, context }) => {
    const { data: row, error } = await context.supabase
      .from("projects")
      .insert({
        user_id: context.userId,
        name: data.name,
        description: data.description ?? null,
        color: data.color ?? "#D97757",
      })
      .select("id, name, description, color, updated_at")
      .single();
    if (error) throw new Error(error.message);
    return row!;
  });

export const deleteProject = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) => z.object({ id: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("projects")
      .delete()
      .eq("id", data.id)
      .eq("user_id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// -------- User Settings --------
const SettingsSchema = z.object({
  default_model: z.string().optional(),
  notifications_enabled: z.boolean().optional(),
  sync_enabled: z.boolean().optional(),
  theme: z.string().optional(),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  preferences: z.any().optional(),
  enabled_tools: z.array(z.string()).optional(),
  enabled_connectors: z.array(z.string()).optional(),
  enabled_plugins: z.array(z.string()).optional(),
  enabled_skills: z.array(z.string()).optional(),
  auto_learn_enabled: z.boolean().optional(),
  code_execution_enabled: z.boolean().optional(),
  docx_enabled: z.boolean().optional(),
  pptx_enabled: z.boolean().optional(),
  xlsx_enabled: z.boolean().optional(),
  screen_vision_enabled: z.boolean().optional(),
  shell_execution_enabled: z.boolean().optional(),
  voice_enabled: z.boolean().optional(),
  wake_word_enabled: z.boolean().optional(),
});

export const getSettings = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("user_settings")
      .select("*")
      .eq("user_id", context.userId)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (data) return data;
    // Insert defaults on first read
    const { data: inserted, error: e2 } = await context.supabase
      .from("user_settings")
      .insert({ user_id: context.userId })
      .select("*")
      .single();
    if (e2) throw new Error(e2.message);
    return inserted!;
  });

export const updateSettings = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) => SettingsSchema.parse(data))
  .handler(async ({ data, context }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const patch: Record<string, any> = { user_id: context.userId, ...data };
    const { error } = await context.supabase
      .from("user_settings")
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .upsert(patch as any, { onConflict: "user_id" });
    if (error) throw new Error(error.message);
    return { ok: true };
  });
