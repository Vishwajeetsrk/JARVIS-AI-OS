// Scheduled automations (hermes-style cron scheduler).
// Runs user-defined cron jobs on a schedule, generates a reply with the AI,
// and stores each run as a new thread in Supabase so it shows up in the console.
import cron from "node-cron";
import type { ScheduledTask } from "node-cron";
import { generateText } from "ai";
import { resolveChatModel } from "@/lib/ai-providers";
import { validateCron } from "@/lib/cron";

const PRESETS: Record<string, string> = {
  hourly: "0 * * * *",
  daily: "0 9 * * *",
  morning: "0 8 * * *",
  weekly: "0 9 * * 1",
};

export function normalizeSchedule(s: string): string {
  const t = (s || "").trim();
  return PRESETS[t] ?? t;
}

export function isValidSchedule(s: string): boolean {
  return validateCron(normalizeSchedule(s)) === null;
}

type CronJobRow = {
  id: string;
  user_id: string;
  name: string;
  prompt: string;
  schedule: string;
  enabled: boolean;
};

const tasks = new Map<string, ScheduledTask>();
let watcher: NodeJS.Timeout | null = null;

async function runJob(job: CronJobRow): Promise<void> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  try {
    const resolved = await resolveChatModel("gemini-flash-latest");
    const { text } = await generateText({
      model: resolved.model as any,
      system:
        "You are Jarvis running a scheduled automation. Produce a concise, useful result for the task. If it's a briefing, keep it tight with bullet points.",
      prompt: job.prompt,
    });

    const threadInsert = await supabaseAdmin
      .from("threads")
      .insert({ user_id: job.user_id, title: `${job.name} · ${new Date().toLocaleDateString()}` })
      .select()
      .single();
    const threadId = threadInsert.data?.id;
    if (threadId) {
      await supabaseAdmin.from("messages").insert([
        { thread_id: threadId, user_id: job.user_id, role: "user", parts: [{ type: "text", text: job.prompt }] },
        { thread_id: threadId, user_id: job.user_id, role: "assistant", parts: [{ type: "text", text }] },
      ]);
    }
    console.log(`[scheduler] ran "${job.name}" for user ${job.user_id}`);
  } catch (e) {
    console.error(`[scheduler] job "${job.name}" failed`, e);
  } finally {
    try {
      await supabaseAdmin
        .from("cron_jobs")
        .update({ last_run_at: new Date().toISOString() })
        .eq("id", job.id);
    } catch (e) {
      console.error(`[scheduler] could not record last_run_at for "${job.name}"`, e);
    }
    try {
      await refreshScheduler();
    } catch (e) {
      console.error("[scheduler] refresh after run failed", e);
    }
  }
}

/** (Re)build node-cron tasks from the cron_jobs table. Call after any mutation. */
export async function refreshScheduler(): Promise<void> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  for (const [, t] of tasks) {
    await t.destroy();
  }
  tasks.clear();

  const { data } = await supabaseAdmin.from("cron_jobs").select("*").eq("enabled", true);
  if (!data) return;
  for (const job of data) {
    const expr = normalizeSchedule(job.schedule);
    if (!isValidSchedule(expr)) continue;
    const task = cron.schedule(
      expr,
      () => {
        void runJob(job).catch((e) => console.error(`[scheduler] job "${job.name}" rejected`, e));
      },
      { noOverlap: true },
    );
    tasks.set(job.id, task);
    try {
      await task.start();
    } catch (e) {
      console.error(`[scheduler] could not start job "${job.name}"`, e);
    }
  }

  // Persist next-run estimate for each job.
  for (const [id, task] of tasks) {
    const next = task.getNextRun();
    if (next) {
      await supabaseAdmin.from("cron_jobs").update({ next_run_at: next.toISOString() }).eq("id", id);
    }
  }
  console.log(`[scheduler] ${tasks.size} scheduled job(s) active`);
}

/** Idempotent bootstrap — call once from the daemon. */
export function startScheduler(): void {
  void refreshScheduler();
  if (!watcher) {
    watcher = setInterval(() => void refreshScheduler(), 5 * 60 * 1000);
    console.log("[scheduler] started (auto-refresh every 5m)");
  }
}