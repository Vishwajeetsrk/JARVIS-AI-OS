// Server functions for scheduled automations.
import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

export const listCronJobs = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase } = context;
    const { data, error } = await supabase
      .from("cron_jobs")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const createCronJob = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) =>
    z
      .object({
        name: z.string().min(1).max(120),
        prompt: z.string().min(1).max(4000),
        schedule: z.string().min(1).max(40),
      })
      .parse(data),
  )
  .handler(async ({ data, context }) => {
    const { isValidSchedule, normalizeSchedule, refreshScheduler } = await import("@/lib/scheduler");
    if (!isValidSchedule(data.schedule)) throw new Error("Invalid schedule. Use a cron expression (e.g. 0 9 * * *) or a preset (morning, daily, hourly, weekly).");
    const { supabase, userId } = context;
    const { data: row, error } = await supabase
      .from("cron_jobs")
      .insert({
        user_id: userId,
        name: data.name,
        prompt: data.prompt,
        schedule: normalizeSchedule(data.schedule),
      })
      .select()
      .single();
    if (error) throw new Error(error.message);
    void refreshScheduler();
    return row;
  });

export const setCronJobEnabled = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) =>
    z.object({ id: z.string().uuid(), enabled: z.boolean() }).parse(data),
  )
  .handler(async ({ data, context }) => {
    const { refreshScheduler } = await import("@/lib/scheduler");
    const { supabase, userId } = context;
    const { data: row, error } = await supabase
      .from("cron_jobs")
      .update({ enabled: data.enabled })
      .eq("id", data.id)
      .eq("user_id", userId)
      .select()
      .single();
    if (error) throw new Error(error.message);
    void refreshScheduler();
    return row;
  });

export const deleteCronJob = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) => z.object({ id: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { refreshScheduler } = await import("@/lib/scheduler");
    const { supabase, userId } = context;
    const { error } = await supabase
      .from("cron_jobs")
      .delete()
      .eq("id", data.id)
      .eq("user_id", userId);
    if (error) throw new Error(error.message);
    void refreshScheduler();
    return { ok: true };
  });
