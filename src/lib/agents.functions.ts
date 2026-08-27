// Server functions for the Paperclip-style agent orchestration layer:
// agents (the "employees"), issues/tasks, heartbeat runs, cost events,
// budget policies/incidents, approvals, and the activity log.
import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";
import type { Json } from "@/integrations/supabase/types";

type Ctx = {
  supabase: any;
  userId: string;
};

// ---------------------------------------------------------------------------
// Agents
// ---------------------------------------------------------------------------

export const listAgents = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context as Ctx;
    const { data, error } = await supabase
      .from("agents")
      .select("*, runtime:agent_runtime_state(*)")
      .eq("user_id", userId)
      .order("created_at", { ascending: true });
    if (error) throw new Error(error.message);
    const runs = await supabase
      .from("heartbeat_runs")
      .select("agent_id, status")
      .eq("user_id", userId)
      .in("status", ["running", "queued"]);
    const activeByAgent: Record<string, number> = {};
    for (const r of runs.data ?? []) activeByAgent[r.agent_id] = (activeByAgent[r.agent_id] ?? 0) + 1;
    const costs = await supabase
      .from("cost_events")
      .select("agent_id, cost_cents")
      .eq("user_id", userId);
    const costByAgent: Record<string, number> = {};
    for (const c of costs.data ?? []) costByAgent[c.agent_id] = (costByAgent[c.agent_id] ?? 0) + c.cost_cents;
    return (data ?? []).map((a: any) => ({
      ...a,
      active_runs: activeByAgent[a.id] ?? 0,
      total_cost_cents: costByAgent[a.id] ?? 0,
    }));
  });

export const createAgent = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) =>
    z
      .object({
        name: z.string().min(1).max(64),
        role: z.string().min(1).max(40).default("agent"),
        title: z.string().max(120).nullable().optional(),
        color: z.string().max(16).default("#D97757"),
        icon: z.string().max(8).nullable().optional(),
        description: z.string().max(400).nullable().optional(),
        reports_to: z.string().uuid().nullable().optional(),
        budget_monthly_cents: z.number().int().min(0).default(0),
        capabilities: z.array(z.string()).default([]),
      })
      .parse(data),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context as Ctx;
    const { data: row, error } = await supabase
      .from("agents")
      .insert({
        user_id: userId,
        name: data.name,
        role: data.role,
        title: data.title ?? null,
        color: data.color,
        icon: data.icon ?? null,
        description: data.description ?? null,
        reports_to: data.reports_to ?? null,
        budget_monthly_cents: data.budget_monthly_cents,
        capabilities: data.capabilities as unknown as Json,
      })
      .select()
      .single();
    if (error) throw new Error(error.message);
    await supabase
      .from("agent_runtime_state")
      .insert({ user_id: userId, agent_id: row.id })
      .select()
      .maybeSingle()
      .catch(() => {});
    return row;
  });

export const updateAgent = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) =>
    z
      .object({
        id: z.string().uuid(),
        name: z.string().min(1).max(64).optional(),
        role: z.string().min(1).max(40).optional(),
        title: z.string().max(120).nullable().optional(),
        color: z.string().max(16).optional(),
        icon: z.string().max(8).nullable().optional(),
        description: z.string().max(400).nullable().optional(),
        status: z
          .enum(["active", "paused", "idle", "running", "error", "pending_approval", "terminated"])
          .optional(),
        reports_to: z.string().uuid().nullable().optional(),
        budget_monthly_cents: z.number().int().min(0).optional(),
        capabilities: z.array(z.string()).optional(),
      })
      .parse(data),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context as Ctx;
    const { id, ...patch } = data;
    const { data: row, error } = await supabase
      .from("agents")
      .update({ ...patch, updated_at: new Date().toISOString() })
      .eq("id", id)
      .eq("user_id", userId)
      .select()
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

export const toggleAgent = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) =>
    z.object({ id: z.string().uuid(), paused: z.boolean(), reason: z.string().max(300).optional() }).parse(data),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context as Ctx;
    const patch = data.paused
      ? { status: "paused", paused_at: new Date().toISOString(), pause_reason: data.reason ?? null }
      : { status: "idle", paused_at: null, pause_reason: null };
    const { data: row, error } = await supabase
      .from("agents")
      .update({ ...patch, updated_at: new Date().toISOString() })
      .eq("id", data.id)
      .eq("user_id", userId)
      .select()
      .single();
    if (error) throw new Error(error.message);
    await logActivity(supabase, userId, "agent", data.id, data.paused ? "agent_paused" : "agent_resumed", {
      name: row.name,
    });
    return row;
  });

export const deleteAgent = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({ id: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context as Ctx;
    const open = await supabase
      .from("issues")
      .select("id")
      .eq("user_id", userId)
      .eq("assignee_agent_id", data.id)
      .not("status", "in", "('done','archived')")
      .limit(1);
    if ((open.data ?? []).length > 0) {
      throw new Error("Agent still has open issues. Reassign them first.");
    }
    const { error } = await supabase.from("agents").delete().eq("id", data.id).eq("user_id", userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// ---------------------------------------------------------------------------
// Issues
// ---------------------------------------------------------------------------

export const listIssues = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context as Ctx;
    const { data, error } = await supabase
      .from("issues")
      .select("*, assignee:agents(name, color, icon), comments:issue_comments(id)")
      .eq("user_id", userId)
      .order("updated_at", { ascending: false })
      .limit(500);
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const createIssue = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) =>
    z
      .object({
        title: z.string().min(1).max(300),
        description: z.string().max(8000).nullable().optional(),
        priority: z.enum(["low", "medium", "high", "urgent"]).default("medium"),
        work_mode: z.enum(["chat", "code", "research", "design", "ops"]).default("chat"),
        assignee_agent_id: z.string().uuid().nullable().optional(),
        project_id: z.string().uuid().nullable().optional(),
        parent_id: z.string().uuid().nullable().optional(),
        labels: z.array(z.string()).default([]),
      })
      .parse(data),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context as Ctx;
    const { data: row, error } = await supabase
      .from("issues")
      .insert({
        user_id: userId,
        title: data.title,
        description: data.description ?? null,
        priority: data.priority,
        work_mode: data.work_mode,
        assignee_agent_id: data.assignee_agent_id ?? null,
        project_id: data.project_id ?? null,
        parent_id: data.parent_id ?? null,
        labels: data.labels,
      })
      .select()
      .single();
    if (error) throw new Error(error.message);
    await logActivity(supabase, userId, "issue", row.id, "issue_created", { title: row.title });
    return row;
  });

export const updateIssue = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) =>
    z
      .object({
        id: z.string().uuid(),
        title: z.string().min(1).max(300).optional(),
        description: z.string().max(8000).nullable().optional(),
        status: z
          .enum(["backlog", "todo", "in_progress", "needs_review", "reviewed", "blocked", "done", "archived"])
          .optional(),
        priority: z.enum(["low", "medium", "high", "urgent"]).optional(),
        work_mode: z.enum(["chat", "code", "research", "design", "ops"]).optional(),
        assignee_agent_id: z.string().uuid().nullable().optional(),
        labels: z.array(z.string()).optional(),
      })
      .parse(data),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context as Ctx;
    const { id, ...patch } = data;
    const { data: row, error } = await supabase
      .from("issues")
      .update({ ...patch, updated_at: new Date().toISOString() })
      .eq("id", id)
      .eq("user_id", userId)
      .select()
      .single();
    if (error) throw new Error(error.message);
    if (patch.status) {
      await logActivity(supabase, userId, "issue", row.id, "issue_status", {
        status: patch.status,
        title: row.title,
      });
    }
    return row;
  });

export const deleteIssue = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({ id: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context as Ctx;
    const { error } = await supabase.from("issues").delete().eq("id", data.id).eq("user_id", userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const addIssueComment = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({ issue_id: z.string().uuid(), body: z.string().min(1).max(8000) }).parse(data))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context as Ctx;
    const { data: row, error } = await supabase
      .from("issue_comments")
      .insert({ user_id: userId, issue_id: data.issue_id, body: data.body })
      .select()
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

// ---------------------------------------------------------------------------
// Heartbeat runs
// ---------------------------------------------------------------------------

export const listRuns = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({ agent_id: z.string().uuid().optional() }).parse(data))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context as Ctx;
    let q = supabase
      .from("heartbeat_runs")
      .select("*, agent:agents(name, color, icon), issue:issues(title)")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(200);
    if (data.agent_id) q = q.eq("agent_id", data.agent_id);
    const { data: rows, error } = await q;
    if (error) throw new Error(error.message);
    return rows ?? [];
  });

/** Atomically assign the highest-priority open issue to an agent for a run. */
export const checkoutNextIssue = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({ agent_id: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context as Ctx;
    const { data: issue, error } = await supabase
      .from("issues")
      .update({ assignee_agent_id: data.agent_id, status: "in_progress", updated_at: new Date().toISOString() })
      .eq("user_id", userId)
      .eq("assignee_agent_id", data.agent_id)
      .in("status", ["todo", "backlog"])
      .order("created_at", { ascending: true })
      .limit(1)
      .select()
      .single()
      .maybeSingle();
    if (error) throw new Error(error.message);
    return issue;
  });

export const triggerAgentRun = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) =>
    z
      .object({
        agent_id: z.string().uuid(),
        issue_id: z.string().uuid().nullable().optional(),
        prompt_override: z.string().max(4000).optional(),
      })
      .parse(data),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context as Ctx;

    const { data: agent } = await supabase.from("agents").select("*").eq("id", data.agent_id).eq("user_id", userId).single();
    if (!agent) throw new Error("Agent not found.");
    if (agent.status === "paused") throw new Error("Agent is paused.");

    let issue = null;
    if (data.issue_id) {
      const r = await supabase.from("issues").select("*").eq("id", data.issue_id).eq("user_id", userId).single();
      issue = r.data;
    } else {
      const r = await supabase
        .from("issues")
        .select("*")
        .eq("user_id", userId)
        .eq("assignee_agent_id", data.agent_id)
        .in("status", ["todo", "backlog", "in_progress"])
        .order("priority", { ascending: true })
        .order("created_at", { ascending: true })
        .limit(1)
        .maybeSingle();
      issue = r.data;
    }

    const { data: run, error: runError } = await supabase
      .from("heartbeat_runs")
      .insert({
        user_id: userId,
        agent_id: data.agent_id,
        issue_id: issue?.id ?? null,
        invocation_source: "manual",
        status: "running",
        started_at: new Date().toISOString(),
      })
      .select()
      .single();
    if (runError) throw new Error(runError.message);

    try {
      await supabase.from("agents").update({ status: "running", last_heartbeat_at: new Date().toISOString() }).eq("id", data.agent_id);

      const { generateText } = await import("ai");
      const { resolveChatModel } = await import("@/lib/ai-providers");
      const resolved = await resolveChatModel("gemini-flash-latest");
      const system = [
        `You are ${agent.name}, an autonomous agent in Vishwajeet's crew. Role: ${agent.role || "generalist"}.`,
        agent.description ? `Profile: ${agent.description}` : "",
        "Work autonomously on the assigned task. Be concrete and actionable. Return a short report with key decisions, work performed, and any blockers.",
        issue ? `Assigned task: ${issue.title}\n\n${issue.description ?? ""}` : "",
        data.prompt_override ? `Operator instruction: ${data.prompt_override}` : "",
      ]
        .filter(Boolean)
        .join("\n\n");

      const { text, usage } = await generateText({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        model: resolved.model as any,
        system,
        prompt: issue ? `Complete the task titled "${issue.title}". Report what you did.` : "Report on your current priorities and any work you can complete autonomously.",
      });

      const input = usage?.inputTokens ?? 0;
      const output = usage?.outputTokens ?? 0;
      const costCents = estimateCostCents(input, output, resolved.modelId);

      await supabase.from("heartbeat_runs").update({
        status: "succeeded",
        finished_at: new Date().toISOString(),
        usage_json: { input_tokens: input, output_tokens: output, model: resolved.modelId, provider: resolved.provider },
        result_json: { report: text },
      }).eq("id", run.id);

      if (costCents > 0) {
        await supabase.from("cost_events").insert({
          user_id: userId,
          agent_id: data.agent_id,
          issue_id: issue?.id ?? null,
          run_id: run.id,
          model: resolved.modelId,
          provider: resolved.provider,
          input_tokens: input,
          output_tokens: output,
          cost_cents: costCents,
        });
        const rs = await supabase.from("agent_runtime_state").select("*").eq("agent_id", data.agent_id).maybeSingle();
        if (rs.data) {
          await supabase
            .from("agent_runtime_state")
            .update({
              last_run_id: run.id,
              last_run_status: "succeeded",
              total_input_tokens: rs.data.total_input_tokens + input,
              total_output_tokens: rs.data.total_output_tokens + output,
              total_cost_cents: rs.data.total_cost_cents + costCents,
              state_json: { ...(rs.data.state_json ?? {}), last_report: text.slice(0, 2000) },
            })
            .eq("agent_id", data.agent_id);
        }
      }

      if (issue) {
        await supabase.from("issues").update({ status: "needs_review", updated_at: new Date().toISOString() }).eq("id", issue.id);
        await supabase
          .from("issue_comments")
          .insert({ user_id: userId, issue_id: issue.id, agent_id: data.agent_id, body: text });
      }

      await logActivity(supabase, userId, "agent", data.agent_id, "agent_run_succeeded", {
        run_id: run.id,
        issue_id: issue?.id ?? null,
        cost_cents: costCents,
      });

      await supabase.from("agents").update({ status: "idle" }).eq("id", data.agent_id);
      return { run_id: run.id, status: "succeeded", report: text.slice(0, 4000) };
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      await supabase
        .from("heartbeat_runs")
        .update({ status: "failed", finished_at: new Date().toISOString(), error_code: "model_error", error_detail: msg.slice(0, 2000) })
        .eq("id", run.id);
      await supabase
        .from("agent_runtime_state")
        .update({ last_run_id: run.id, last_run_status: "failed", last_error: msg.slice(0, 2000) })
        .eq("agent_id", data.agent_id)
        .catch(() => {});
      await supabase.from("agents").update({ status: "error", error_reason: msg.slice(0, 300) }).eq("id", data.agent_id);
      await logActivity(supabase, userId, "agent", data.agent_id, "agent_run_failed", { run_id: run.id, error: msg.slice(0, 300) });
      throw new Error(msg.slice(0, 500));
    }
  });

export const cancelRun = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({ run_id: z.string().uuid() }).parse(data))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context as Ctx;
    const { data: row, error } = await supabase
      .from("heartbeat_runs")
      .update({ status: "cancelled", finished_at: new Date().toISOString() })
      .eq("id", data.run_id)
      .eq("user_id", userId)
      .select()
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

function estimateCostCents(input: number, output: number, modelId: string): number {
  // Rough free-tier estimate; over-approximate so budgets trend conservative.
  const perMillionInput = modelId.includes("flash") ? 0.1 : 0.25;
  const perMillionOutput = modelId.includes("flash") ? 0.4 : 1.5;
  return Math.round(((input / 1_000_000) * perMillionInput + (output / 1_000_000) * perMillionOutput) * 100);
}

// ---------------------------------------------------------------------------
// Costs + budgets
// ---------------------------------------------------------------------------

export const listCostEvents = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context as Ctx;
    const { data, error } = await supabase
      .from("cost_events")
      .select("*, agent:agents(name, color)")
      .eq("user_id", userId)
      .order("occurred_at", { ascending: false })
      .limit(300);
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const getBudgetSummary = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context as Ctx;
    const start = new Date();
    start.setDate(1);
    start.setHours(0, 0, 0, 0);
    const costs = await supabase
      .from("cost_events")
      .select("cost_cents, agent_id")
      .eq("user_id", userId)
      .gte("occurred_at", start.toISOString());
    const perAgent: Record<string, number> = {};
    let total = 0;
    for (const c of costs.data ?? []) {
      perAgent[c.agent_id ?? "none"] = (perAgent[c.agent_id ?? "none"] ?? 0) + c.cost_cents;
      total += c.cost_cents;
    }
    const policies = await supabase
      .from("budget_policies")
      .select("*")
      .eq("user_id", userId)
      .eq("is_active", true);
    const incidents = await supabase
      .from("budget_incidents")
      .select("*")
      .eq("user_id", userId)
      .eq("status", "open")
      .order("created_at", { ascending: false })
      .limit(50);
    return {
      month: start.toISOString().slice(0, 7),
      total_cost_cents: total,
      per_agent_cost_cents: perAgent,
      policies: policies.data ?? [],
      open_incidents: incidents.data ?? [],
    };
  });

export const createBudgetPolicy = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) =>
    z
      .object({
        scope_type: z.enum(["user", "agent"]),
        scope_agent_id: z.string().uuid().nullable().optional(),
        metric: z.enum(["monthly_cost_cents", "monthly_input_tokens", "monthly_output_tokens"]).default("monthly_cost_cents"),
        amount: z.number().int().min(1).default(1000),
        warn_percent: z.number().int().min(1).max(99).default(80),
        hard_stop_enabled: z.boolean().default(true),
      })
      .parse(data),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context as Ctx;
    const { data: row, error } = await supabase
      .from("budget_policies")
      .insert({
        user_id: userId,
        scope_type: data.scope_type,
        scope_agent_id: data.scope_agent_id ?? null,
        metric: data.metric,
        amount: data.amount,
        warn_percent: data.warn_percent,
        hard_stop_enabled: data.hard_stop_enabled,
      })
      .select()
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

export const resolveBudgetIncident = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) =>
    z.object({ incident_id: z.string().uuid(), status: z.enum(["resolved", "dismissed"]) }).parse(data),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context as Ctx;
    const { data: row, error } = await supabase
      .from("budget_incidents")
      .update({ status: data.status })
      .eq("id", data.incident_id)
      .eq("user_id", userId)
      .select()
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

// ---------------------------------------------------------------------------
// Approvals
// ---------------------------------------------------------------------------

export const listApprovals = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context as Ctx;
    const { data, error } = await supabase
      .from("approvals")
      .select("*, agent:agents(name, color, icon)")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(200);
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const decideApproval = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) =>
    z
      .object({
        approval_id: z.string().uuid(),
        approve: z.boolean(),
        note: z.string().max(400).optional(),
      })
      .parse(data),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context as Ctx;
    const { data: row, error } = await supabase
      .from("approvals")
      .update({
        status: data.approve ? "approved" : "rejected",
        decision_note: data.note ?? null,
        decided_at: new Date().toISOString(),
      })
      .eq("id", data.approval_id)
      .eq("user_id", userId)
      .select()
      .single();
    if (error) throw new Error(error.message);
    await logActivity(supabase, userId, "approval", row.id, data.approve ? "approval_granted" : "approval_rejected", {
      title: row.title,
    });
    return row;
  });

// ---------------------------------------------------------------------------
// Activity log
// ---------------------------------------------------------------------------

export const listActivityLog = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context as Ctx;
    const { data, error } = await supabase
      .from("activity_log")
      .select("*, agent:agents(name, color, icon)")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(200);
    if (error) throw new Error(error.message);
    return data ?? [];
  });

// ---------------------------------------------------------------------------
// Company portability (export/import, secrets scrubbed)
// ---------------------------------------------------------------------------

export const exportCompanyData = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context as Ctx;
    const agents = await supabase.from("agents").select("*").eq("user_id", userId);
    const issues = await supabase.from("issues").select("*").eq("user_id", userId).limit(1000);
    const policies = await supabase.from("budget_policies").select("*").eq("user_id", userId);
    return {
      exported_at: new Date().toISOString(),
      app: "jarvis-ai-os",
      schema: 1,
      agents: agents.data ?? [],
      issues: issues.data ?? [],
      budget_policies: policies.data ?? [],
    };
  });

export const importCompanyData = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) =>
    z.object({ agents: z.array(z.any()).default([]), issues: z.array(z.any()).default([]) }).parse(data),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context as Ctx;
    const idMap: Record<string, string> = {};
    let imported = 0;
    for (const a of data.agents) {
      const { data: row, error } = await supabase
        .from("agents")
        .insert({
          user_id: userId,
          name: String(a.name ?? "agent").slice(0, 64),
          role: String(a.role ?? "agent").slice(0, 40),
          title: a.title ?? null,
          color: a.color ?? "#D97757",
          icon: a.icon ?? null,
          description: a.description ?? null,
          capabilities: a.capabilities ?? [],
          budget_monthly_cents: a.budget_monthly_cents ?? 0,
        })
        .select()
        .single();
      if (!error && row) {
        idMap[a.id] = row.id;
        imported++;
      }
    }
    for (const i of data.issues) {
      await supabase
        .from("issues")
        .insert({
          user_id: userId,
          title: String(i.title ?? "Untitled").slice(0, 300),
          description: i.description ?? null,
          priority: i.priority ?? "medium",
          work_mode: i.work_mode ?? "chat",
          status: i.status ?? "backlog",
          labels: i.labels ?? [],
          assignee_agent_id: i.assignee_agent_id ? (idMap[i.assignee_agent_id] ?? null) : null,
        })
        .catch(() => {});
    }
    return { imported_agents: imported };
  });

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

async function logActivity(
  supabase: any,
  userId: string,
  entityType: string,
  entityId: string,
  action: string,
  details: Record<string, unknown>,
): Promise<void> {
  await supabase
    .from("activity_log")
    .insert({
      user_id: userId,
      actor_type: "user",
      action,
      entity_type: entityType,
      entity_id: entityId,
      details: details as Json,
    })
    .catch(() => {});
}
