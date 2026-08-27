// Project lifecycle server functions: builds, deployments, databases, plugins, api keys, analysis.
import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";
import { createHash } from "node:crypto";
import type { Json } from "@/integrations/supabase/types";

// -------- Builds --------

export const saveProjectBuild = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) =>
    z.object({
      projectId: z.string().uuid(),
      name: z.string().min(1).max(200),
      html: z.string().max(2_000_000),
      framework: z.string().optional(),
      buildType: z.string().optional(),
      meta: z.record(z.string(), z.any()).optional(),
    }).parse(data),
  )
  .handler(async ({ data, context }) => {
    const { data: row, error } = await context.supabase
      .from("project_builds")
      .insert({
        project_id: data.projectId,
        user_id: context.userId,
        name: data.name,
        html: data.html,
        framework: data.framework ?? "static-html",
        build_type: data.buildType ?? "site",
        status: "ready",
        meta: (data.meta ?? {}) as unknown as Json,
      })
      .select("id, name, status, created_at")
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

export const listProjectBuilds = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({ projectId: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { data: rows, error } = await context.supabase
      .from("project_builds")
      .select("id, name, framework, build_type, status, preview_url, deploy_url, meta, created_at")
      .eq("project_id", data.projectId)
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return rows ?? [];
  });

export const getProjectBuild = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({ buildId: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { data: row, error } = await context.supabase
      .from("project_builds")
      .select("id, project_id, name, html, framework, build_type, status, preview_url, deploy_url, meta, created_at")
      .eq("id", data.buildId)
      .eq("user_id", context.userId)
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

export const deleteProjectBuild = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({ buildId: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("project_builds")
      .delete()
      .eq("id", data.buildId)
      .eq("user_id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// -------- Deployments --------

export const recordDeployment = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) =>
    z.object({
      projectId: z.string().uuid(),
      buildId: z.string().uuid().optional(),
      provider: z.string().optional(),
      url: z.string().optional(),
      status: z.string().optional(),
      meta: z.record(z.string(), z.any()).optional(),
    }).parse(data),
  )
  .handler(async ({ data, context }) => {
    const { data: row, error } = await context.supabase
      .from("project_deployments")
      .insert({
        project_id: data.projectId,
        user_id: context.userId,
        build_id: data.buildId ?? null,
        provider: data.provider ?? "static",
        url: data.url ?? null,
        status: data.status ?? "pending",
        meta: (data.meta ?? {}) as unknown as Json,
      })
      .select("id, provider, url, status, created_at")
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

export const listProjectDeployments = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({ projectId: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { data: rows, error } = await context.supabase
      .from("project_deployments")
      .select("id, build_id, provider, url, status, environment, meta, created_at")
      .eq("project_id", data.projectId)
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return rows ?? [];
  });

// -------- Databases --------

export const saveProjectDatabase = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) =>
    z.object({
      projectId: z.string().uuid(),
      name: z.string().min(1).max(120),
      provider: z.string().optional(),
      connectionUrl: z.string().optional(),
      meta: z.record(z.string(), z.any()).optional(),
    }).parse(data),
  )
  .handler(async ({ data, context }) => {
    const { data: row, error } = await context.supabase
      .from("project_databases")
      .insert({
        project_id: data.projectId,
        user_id: context.userId,
        name: data.name,
        provider: data.provider ?? "supabase",
        connection_url: data.connectionUrl ?? null,
        status: "connected",
        meta: (data.meta ?? {}) as unknown as Json,
      })
      .select("id, name, provider, status, created_at")
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

export const listProjectDatabases = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({ projectId: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { data: rows, error } = await context.supabase
      .from("project_databases")
      .select("id, name, provider, status, meta, created_at")
      .eq("project_id", data.projectId)
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return rows ?? [];
  });

export const deleteProjectDatabase = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({ id: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("project_databases")
      .delete()
      .eq("id", data.id)
      .eq("user_id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// -------- Project plugins --------

export const setProjectPlugin = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) =>
    z.object({
      projectId: z.string().uuid(),
      pluginId: z.string().min(1).max(120),
      enabled: z.boolean().optional(),
      config: z.record(z.string(), z.any()).optional(),
    }).parse(data),
  )
  .handler(async ({ data, context }) => {
    const { data: row, error } = await context.supabase
      .from("project_plugins")
      .upsert({
        project_id: data.projectId,
        user_id: context.userId,
        plugin_id: data.pluginId,
        enabled: data.enabled ?? true,
        config: data.config ?? {},
      }, { onConflict: "project_id,plugin_id" })
      .select("plugin_id, enabled, created_at")
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

export const listProjectPlugins = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({ projectId: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { data: rows, error } = await context.supabase
      .from("project_plugins")
      .select("plugin_id, config, enabled, created_at")
      .eq("project_id", data.projectId)
      .eq("user_id", context.userId);
    if (error) throw new Error(error.message);
    return rows ?? [];
  });

// -------- Project API keys --------

export const createProjectApiKey = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) =>
    z.object({
      projectId: z.string().uuid(),
      name: z.string().min(1).max(120),
      scopes: z.array(z.string()).optional(),
    }).parse(data),
  )
  .handler(async ({ data, context }) => {
    const secret = `jsk_${cryptoRandom(24)}`;
    const prefix = secret.slice(0, 14);
    const { data: row, error } = await context.supabase
      .from("project_api_keys")
      .insert({
        project_id: data.projectId,
        user_id: context.userId,
        name: data.name,
        key_hash: createHash("sha256").update(secret).digest("hex"),
        key_prefix: prefix,
        scopes: data.scopes ?? ["read", "write"],
      })
      .select("id, name, key_prefix, scopes, created_at")
      .single();
    if (error) throw new Error(error.message);
    // Return full secret ONCE (client stores it; only prefix is persisted).
    return { ...row, secret };
  });

export const listProjectApiKeys = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({ projectId: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { data: rows, error } = await context.supabase
      .from("project_api_keys")
      .select("id, name, key_prefix, scopes, last_used_at, revoked_at, created_at")
      .eq("project_id", data.projectId)
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return rows ?? [];
  });

export const revokeProjectApiKey = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({ id: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("project_api_keys")
      .update({ revoked_at: new Date().toISOString() })
      .eq("id", data.id)
      .eq("user_id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// -------- Analysis --------

export const saveProjectAnalysis = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) =>
    z.object({
      projectId: z.string().uuid(),
      reportType: z.string().optional(),
      report: z.record(z.string(), z.any()),
    }).parse(data),
  )
  .handler(async ({ data, context }) => {
    const { data: row, error } = await context.supabase
      .from("project_analysis")
      .insert({
        project_id: data.projectId,
        user_id: context.userId,
        report_type: data.reportType ?? "overview",
        report: data.report as unknown as Json,
      })
      .select("id, report_type, created_at")
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

export const getProjectAnalysis = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({ projectId: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { data: row, error } = await context.supabase
      .from("project_analysis")
      .select("report_type, report, created_at")
      .eq("project_id", data.projectId)
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return row ?? null;
  });

function cryptoRandom(bytes: number): string {
  const arr = new Uint8Array(bytes);
  crypto.getRandomValues(arr);
  return Array.from(arr, (b) => b.toString(16).padStart(2, "0")).join("");
}