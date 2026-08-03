-- Scheduled automations for Jarvis (hermes-style cron scheduler).
CREATE TABLE public.cron_jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  prompt text NOT NULL,
  schedule text NOT NULL,
  enabled boolean NOT NULL DEFAULT true,
  last_run_at timestamptz,
  next_run_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.cron_jobs TO authenticated;
GRANT ALL ON public.cron_jobs TO service_role;
ALTER TABLE public.cron_jobs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own cron_jobs" ON public.cron_jobs FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX ON public.cron_jobs (user_id);
CREATE INDEX ON public.cron_jobs (enabled, next_run_at);