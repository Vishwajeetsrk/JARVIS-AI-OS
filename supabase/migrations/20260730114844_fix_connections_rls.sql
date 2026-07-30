-- Fix: Add authenticated-user RLS policy for connections table
-- Each user can only see, create, update, delete their own connections

CREATE POLICY "Users manage their own connections"
ON public.connections FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);
