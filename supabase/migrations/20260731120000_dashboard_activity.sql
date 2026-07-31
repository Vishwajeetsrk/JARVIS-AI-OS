-- Agent activity feed for the Jarvis dashboard.
CREATE TABLE public.agent_activity (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  thread_id UUID REFERENCES public.threads(id) ON DELETE CASCADE,
  kind TEXT NOT NULL DEFAULT 'chat',
  title TEXT NOT NULL,
  detail TEXT,
  meta JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.agent_activity TO authenticated;
GRANT ALL ON public.agent_activity TO service_role;
ALTER TABLE public.agent_activity ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own activity" ON public.agent_activity FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE INDEX ON public.agent_activity (user_id, created_at DESC);

-- Auto-log activity whenever a message lands in a thread.
CREATE OR REPLACE FUNCTION public.log_message_activity() RETURNS TRIGGER AS $$
DECLARE
  t_title TEXT;
  t_project_id UUID;
  k TEXT;
  d TEXT;
BEGIN
  SELECT title, project_id INTO t_title, t_project_id FROM public.threads WHERE id = NEW.thread_id;

  IF NEW.role = 'assistant' AND EXISTS (
    SELECT 1 FROM jsonb_array_elements(NEW.parts) p
    WHERE jsonb_typeof(p.value) = 'object' AND p.value->>'type' = 'tool'
  ) THEN
    k := 'tool';
    d := left(trim(concat_ws(' ', (
      SELECT string_agg(
        CASE WHEN jsonb_typeof(value) = 'object' AND value->>'type' = 'tool'
          THEN COALESCE(value->>'displayName', value->'state'->>'status', 'tool call')
          ELSE ''
        END, ' ' ORDER BY ord
      ) FROM jsonb_array_elements(NEW.parts) WITH ORDINALITY AS p(value, ord)
    )), 220);
  ELSIF NEW.role = 'user' THEN
    k := 'user';
    d := left(trim(concat_ws(' ', (
      SELECT string_agg(value->>'text', ' ' ORDER BY ord)
      FROM jsonb_array_elements(NEW.parts) WITH ORDINALITY AS p(value, ord)
      WHERE jsonb_typeof(value) = 'object' AND value->>'type' = 'text'
    ))), 220);
  ELSE
    k := 'chat';
    d := left(trim(concat_ws(' ', (
      SELECT string_agg(value->>'text', ' ' ORDER BY ord)
      FROM jsonb_array_elements(NEW.parts) WITH ORDINALITY AS p(value, ord)
      WHERE jsonb_typeof(value) = 'object' AND value->>'type' = 'text'
    ))), 220);
  END IF;

  INSERT INTO public.agent_activity (user_id, thread_id, kind, title, detail, meta)
  VALUES (
    NEW.user_id,
    NEW.thread_id,
    k,
    COALESCE(t_title, 'Chat'),
    NULLIF(d, ''),
    jsonb_build_object('role', NEW.role, 'project_id', t_project_id)
  );
  RETURN NEW;
END; $$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

REVOKE EXECUTE ON FUNCTION public.log_message_activity() FROM PUBLIC, anon, authenticated;

CREATE TRIGGER log_activity_on_message AFTER INSERT ON public.messages
  FOR EACH ROW EXECUTE FUNCTION public.log_message_activity();

-- Realtime: push new activity + thread/message changes to the dashboard.
ALTER PUBLICATION supabase_realtime ADD TABLE public.agent_activity;
ALTER PUBLICATION supabase_realtime ADD TABLE public.threads;
ALTER PUBLICATION supabase_realtime ADD TABLE public.messages;
