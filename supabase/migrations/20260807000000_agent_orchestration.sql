-- ============================================================================
-- Paperclip-style agent orchestration foundation for Jarvis AI OS.
-- Adds: agents (employees), agent API keys, issues/tasks with atomic checkout,
-- heartbeat runs, cost events, budget policies + incidents, approvals,
-- a full activity/audit log, and per-agent runtime state.
-- All rows are user-scoped (matches Jarvis's existing multi-tenant model).
-- ============================================================================

-- ---------------------------------------------------------------------------
-- Agents (the "employees")
-- ---------------------------------------------------------------------------
CREATE TABLE public.agents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'agent',
  title TEXT,
  icon TEXT,
  color TEXT NOT NULL DEFAULT '#D97757',
  description TEXT,
  status TEXT NOT NULL DEFAULT 'idle'
    CHECK (status IN ('active','paused','idle','running','error','pending_approval','terminated')),
  reports_to UUID REFERENCES public.agents(id) ON DELETE SET NULL,
  capabilities JSONB NOT NULL DEFAULT '[]'::jsonb,
  permissions JSONB NOT NULL DEFAULT '{}'::jsonb,
  adapter_type TEXT NOT NULL DEFAULT 'jarvis-chat',
  adapter_config JSONB NOT NULL DEFAULT '{}'::jsonb,
  runtime_config JSONB NOT NULL DEFAULT '{}'::jsonb,
  budget_monthly_cents INTEGER NOT NULL DEFAULT 0,
  spent_monthly_cents INTEGER NOT NULL DEFAULT 0,
  pause_reason TEXT,
  paused_at TIMESTAMPTZ,
  error_reason TEXT,
  last_heartbeat_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT agents_user_reports_not_self CHECK (reports_to IS NULL OR reports_to <> id)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.agents TO authenticated;
GRANT ALL ON public.agents TO service_role;
ALTER TABLE public.agents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own agents" ON public.agents FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX ON public.agents (user_id);
CREATE INDEX ON public.agents (user_id, status);
CREATE TRIGGER agents_updated_at BEFORE UPDATE ON public.agents
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ---------------------------------------------------------------------------
-- Agent API keys (bearer credentials, hashed at rest)
-- ---------------------------------------------------------------------------
CREATE TABLE public.agent_api_keys (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  agent_id UUID NOT NULL REFERENCES public.agents(id) ON DELETE CASCADE,
  key_hash TEXT NOT NULL,
  name TEXT NOT NULL DEFAULT 'default',
  last_used_at TIMESTAMPTZ,
  revoked_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.agent_api_keys TO authenticated;
GRANT ALL ON public.agent_api_keys TO service_role;
ALTER TABLE public.agent_api_keys ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own agent keys" ON public.agent_api_keys FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX ON public.agent_api_keys (agent_id);
CREATE INDEX ON public.agent_api_keys (key_hash);

-- ---------------------------------------------------------------------------
-- Heartbeat runs (the agent work protocol). Defined before issues because
-- issues.checkout_run_id references heartbeat_runs; the reverse FK
-- (heartbeat_runs.issue_id) is added after issues exists.
-- ---------------------------------------------------------------------------
CREATE TABLE public.heartbeat_runs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  agent_id UUID NOT NULL REFERENCES public.agents(id) ON DELETE CASCADE,
  issue_id UUID,
  invocation_source TEXT NOT NULL DEFAULT 'manual'
    CHECK (invocation_source IN ('manual','schedule','wakeup','issue_assigned','webhook','retry')),
  status TEXT NOT NULL DEFAULT 'queued'
    CHECK (status IN ('queued','running','succeeded','failed','cancelled','needs_input')),
  started_at TIMESTAMPTZ,
  finished_at TIMESTAMPTZ,
  error_code TEXT,
  error_detail TEXT,
  usage_json JSONB NOT NULL DEFAULT '{}'::jsonb,
  result_json JSONB NOT NULL DEFAULT '{}'::jsonb,
  log_text TEXT,
  exit_code INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.heartbeat_runs TO authenticated;
GRANT ALL ON public.heartbeat_runs TO service_role;
ALTER TABLE public.heartbeat_runs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own runs" ON public.heartbeat_runs FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX ON public.heartbeat_runs (user_id, created_at DESC);
CREATE INDEX ON public.heartbeat_runs (agent_id, status);
CREATE INDEX ON public.heartbeat_runs (issue_id);

-- ---------------------------------------------------------------------------
-- Issues / tasks (single-assignee, atomic checkout via checkout_run_id)
-- ---------------------------------------------------------------------------
CREATE TABLE public.issues (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  project_id UUID REFERENCES public.projects(id) ON DELETE SET NULL,
  parent_id UUID REFERENCES public.issues(id) ON DELETE CASCADE,
  assignee_agent_id UUID REFERENCES public.agents(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'backlog'
    CHECK (status IN ('backlog','todo','in_progress','needs_review','reviewed','blocked','done','archived')),
  priority TEXT NOT NULL DEFAULT 'medium'
    CHECK (priority IN ('low','medium','high','urgent')),
  work_mode TEXT NOT NULL DEFAULT 'chat'
    CHECK (work_mode IN ('chat','code','research','design','ops')),
  goal_ancestry JSONB NOT NULL DEFAULT '[]'::jsonb,
  labels TEXT[] NOT NULL DEFAULT '{}',
  checkout_run_id UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.issues TO authenticated;
GRANT ALL ON public.issues TO service_role;
ALTER TABLE public.issues ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own issues" ON public.issues FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX ON public.issues (user_id, status);
CREATE INDEX ON public.issues (assignee_agent_id);
CREATE INDEX ON public.issues (user_id, assignee_agent_id, status) WHERE status NOT IN ('done','archived');
CREATE TRIGGER issues_updated_at BEFORE UPDATE ON public.issues
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Resolve the circular dependency between issues and heartbeat_runs.
ALTER TABLE public.heartbeat_runs
  ADD CONSTRAINT heartbeat_runs_issue_id_fkey
  FOREIGN KEY (issue_id) REFERENCES public.issues(id) ON DELETE SET NULL;
ALTER TABLE public.issues
  ADD CONSTRAINT issues_checkout_fk
  FOREIGN KEY (checkout_run_id) REFERENCES public.heartbeat_runs(id) ON DELETE SET NULL;

-- ---------------------------------------------------------------------------
-- Issue comments
-- ---------------------------------------------------------------------------
CREATE TABLE public.issue_comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  issue_id UUID NOT NULL REFERENCES public.issues(id) ON DELETE CASCADE,
  agent_id UUID REFERENCES public.agents(id) ON DELETE SET NULL,
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.issue_comments TO authenticated;
GRANT ALL ON public.issue_comments TO service_role;
ALTER TABLE public.issue_comments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own issue comments" ON public.issue_comments FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX ON public.issue_comments (issue_id, created_at);

-- ---------------------------------------------------------------------------
-- Cost events (per model/provider usage, linked up to agent/issue/run)
-- ---------------------------------------------------------------------------
CREATE TABLE public.cost_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  agent_id UUID REFERENCES public.agents(id) ON DELETE SET NULL,
  issue_id UUID REFERENCES public.issues(id) ON DELETE SET NULL,
  run_id UUID REFERENCES public.heartbeat_runs(id) ON DELETE SET NULL,
  provider TEXT,
  model TEXT NOT NULL,
  input_tokens INTEGER NOT NULL DEFAULT 0,
  cached_input_tokens INTEGER NOT NULL DEFAULT 0,
  output_tokens INTEGER NOT NULL DEFAULT 0,
  cost_cents INTEGER NOT NULL DEFAULT 0,
  occurred_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.cost_events TO authenticated;
GRANT ALL ON public.cost_events TO service_role;
ALTER TABLE public.cost_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own cost events" ON public.cost_events FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX ON public.cost_events (user_id, occurred_at DESC);
CREATE INDEX ON public.cost_events (agent_id, occurred_at);

-- ---------------------------------------------------------------------------
-- Budget policies (warn thresholds + hard stops)
-- ---------------------------------------------------------------------------
CREATE TABLE public.budget_policies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  scope_type TEXT NOT NULL CHECK (scope_type IN ('user','agent')),
  scope_agent_id UUID REFERENCES public.agents(id) ON DELETE CASCADE,
  metric TEXT NOT NULL DEFAULT 'monthly_cost_cents'
    CHECK (metric IN ('monthly_cost_cents','monthly_input_tokens','monthly_output_tokens')),
  amount INTEGER NOT NULL DEFAULT 1000,
  warn_percent INTEGER NOT NULL DEFAULT 80,
  hard_stop_enabled BOOLEAN NOT NULL DEFAULT true,
  notify_enabled BOOLEAN NOT NULL DEFAULT true,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT budget_policies_scope CHECK (
    (scope_type = 'agent' AND scope_agent_id IS NOT NULL) OR
    (scope_type = 'user' AND scope_agent_id IS NULL)
  )
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.budget_policies TO authenticated;
GRANT ALL ON public.budget_policies TO service_role;
ALTER TABLE public.budget_policies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own budget policies" ON public.budget_policies FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- Budget incidents (when a policy fires)
-- ---------------------------------------------------------------------------
CREATE TABLE public.budget_incidents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  policy_id UUID NOT NULL REFERENCES public.budget_policies(id) ON DELETE CASCADE,
  window_start TIMESTAMPTZ NOT NULL,
  window_end TIMESTAMPTZ NOT NULL,
  threshold_type TEXT NOT NULL CHECK (threshold_type IN ('warn','hard_stop')),
  amount_limit INTEGER NOT NULL,
  amount_observed INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open','resolved','dismissed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.budget_incidents TO authenticated;
GRANT ALL ON public.budget_incidents TO service_role;
ALTER TABLE public.budget_incidents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own budget incidents" ON public.budget_incidents FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX ON public.budget_incidents (policy_id, status);

-- ---------------------------------------------------------------------------
-- Approvals (governance gates)
-- ---------------------------------------------------------------------------
CREATE TABLE public.approvals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  agent_id UUID REFERENCES public.agents(id) ON DELETE SET NULL,
  type TEXT NOT NULL DEFAULT 'action'
    CHECK (type IN ('action','hire','budget','plan','shutdown','other')),
  title TEXT NOT NULL,
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending','approved','rejected')),
  decision_note TEXT,
  decided_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.approvals TO authenticated;
GRANT ALL ON public.approvals TO service_role;
ALTER TABLE public.approvals ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own approvals" ON public.approvals FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX ON public.approvals (user_id, status, created_at DESC);

-- ---------------------------------------------------------------------------
-- Activity / audit log (actor attribution for every mutation)
-- ---------------------------------------------------------------------------
CREATE TABLE public.activity_log (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  actor_type TEXT NOT NULL DEFAULT 'user' CHECK (actor_type IN ('user','agent','system')),
  actor_id UUID,
  agent_id UUID REFERENCES public.agents(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  entity_type TEXT,
  entity_id UUID,
  run_id UUID REFERENCES public.heartbeat_runs(id) ON DELETE SET NULL,
  details JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.activity_log TO authenticated;
GRANT ALL ON public.activity_log TO service_role;
ALTER TABLE public.activity_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own activity log" ON public.activity_log FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX ON public.activity_log (user_id, created_at DESC);
CREATE INDEX ON public.activity_log (entity_type, entity_id);

-- ---------------------------------------------------------------------------
-- Per-agent runtime state (session resumption across heartbeats)
-- ---------------------------------------------------------------------------
CREATE TABLE public.agent_runtime_state (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  agent_id UUID NOT NULL UNIQUE REFERENCES public.agents(id) ON DELETE CASCADE,
  session_id TEXT,
  state_json JSONB NOT NULL DEFAULT '{}'::jsonb,
  last_run_id UUID REFERENCES public.heartbeat_runs(id) ON DELETE SET NULL,
  last_run_status TEXT,
  total_input_tokens INTEGER NOT NULL DEFAULT 0,
  total_output_tokens INTEGER NOT NULL DEFAULT 0,
  total_cost_cents INTEGER NOT NULL DEFAULT 0,
  last_error TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.agent_runtime_state TO authenticated;
GRANT ALL ON public.agent_runtime_state TO service_role;
ALTER TABLE public.agent_runtime_state ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own runtime state" ON public.agent_runtime_state FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER runtime_state_updated_at BEFORE UPDATE ON public.agent_runtime_state
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ---------------------------------------------------------------------------
-- Realtime
-- ---------------------------------------------------------------------------
ALTER PUBLICATION supabase_realtime ADD TABLE public.agents;
ALTER PUBLICATION supabase_realtime ADD TABLE public.issues;
ALTER PUBLICATION supabase_realtime ADD TABLE public.heartbeat_runs;
ALTER PUBLICATION supabase_realtime ADD TABLE public.cost_events;
ALTER PUBLICATION supabase_realtime ADD TABLE public.approvals;
ALTER PUBLICATION supabase_realtime ADD TABLE public.activity_log;
