
-- Ensure connections upserts (connectProvider onConflict: "user_id,provider")
-- have a unique constraint to target.
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'connections_user_provider_unique'
      AND conrelid = 'public.connections'::regclass
  ) THEN
    ALTER TABLE public.connections
      ADD CONSTRAINT connections_user_provider_unique UNIQUE (user_id, provider);
  END IF;
END $$;
