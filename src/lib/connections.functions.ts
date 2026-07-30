import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export type ConnectionRow = {
  id: string;
  provider: string;
  kind: string;
  status: string;
  account_label: string | null;
  created_at: string;
};

/** Connections for the signed-in user. Never returns tokens. */
export const listConnections = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<ConnectionRow[]> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await supabaseAdmin
      .from("connections")
      .select("id, provider, kind, status, account_label, created_at")
      .eq("user_id", context.userId)
      .order("created_at", { ascending: true });
    if (error) throw new Error(error.message);
    return (data ?? []) as ConnectionRow[];
  });

/** Verifies a credential against the real provider API, then stores it. */
export const connectProvider = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) =>
    z.object({ provider: z.string().min(1), credential: z.string().default("") }).parse(d),
  )
  .handler(async ({ data, context }) => {
    const { providerById } = await import("@/lib/connectors");
    const { verifyCredential } = await import("@/lib/connectors.server");
    const def = providerById(data.provider);
    if (!def) throw new Error("Unknown provider");
    if (def.auth !== "local" && !data.credential.trim()) {
      throw new Error(`${def.name} needs a credential.`);
    }

    const result = await verifyCredential(def.id, data.credential.trim());
    if (!result.ok) return { ok: false as const, error: result.error };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("connections").upsert(
      {
        user_id: context.userId,
        provider: def.id,
        kind: def.kind,
        status: "connected",
        account_label: result.label,
        access_token: def.auth === "local" ? null : data.credential.trim(),
      },
      { onConflict: "user_id,provider" },
    );
    if (error) throw new Error(error.message);
    return { ok: true as const, label: result.label };
  });

export const disconnectProvider = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ provider: z.string().min(1) }).parse(d))
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("connections")
      .delete()
      .eq("user_id", context.userId)
      .eq("provider", data.provider);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

/** Re-runs verification for a stored credential. */
export const testConnection = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ provider: z.string().min(1) }).parse(d))
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { verifyCredential } = await import("@/lib/connectors.server");
    const { data: row } = await supabaseAdmin
      .from("connections")
      .select("access_token")
      .eq("user_id", context.userId)
      .eq("provider", data.provider)
      .maybeSingle();
    const result = await verifyCredential(data.provider, row?.access_token ?? "");
    await supabaseAdmin
      .from("connections")
      .update({
        status: result.ok ? "connected" : "error",
        account_label: result.ok ? result.label : null,
      })
      .eq("user_id", context.userId)
      .eq("provider", data.provider);
    return result.ok ? { ok: true as const, label: result.label } : { ok: false as const, error: result.error };
  });

/** Live GitHub data for the console GitHub page. */
export const githubOverview = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row } = await supabaseAdmin
      .from("connections")
      .select("access_token, account_label")
      .eq("user_id", context.userId)
      .eq("provider", "github")
      .maybeSingle();
    if (!row?.access_token) return { connected: false as const, repos: [], login: null };

    const { githubFetch } = await import("@/lib/connectors.server");

    const repos = await githubFetch<
      Array<{
        name: string; full_name: string; private: boolean; html_url: string;
        default_branch: string; open_issues_count: number; stargazers_count: number;
        description: string | null; updated_at: string;
      }>
    >(row.access_token, "/user/repos?per_page=24&sort=updated");
    return { connected: true as const, login: row.account_label, repos };
  });
