-- Cross-session memory recall for Jarvis (hermes-style semantic search).
-- Adds a pgvector embedding column to messages + a similarity search function.

CREATE EXTENSION IF NOT EXISTS vector;

ALTER TABLE public.messages ADD COLUMN IF NOT EXISTS embedding vector(768);

CREATE INDEX IF NOT EXISTS messages_embedding_idx
  ON public.messages USING hnsw (embedding vector_cosine_ops);

-- Search the user's own messages by embedding similarity (cosine distance).
CREATE OR REPLACE FUNCTION public.match_messages(
  query_embedding vector(768),
  match_threshold float DEFAULT 0.2,
  match_count int DEFAULT 5,
  p_user_id uuid DEFAULT auth.uid()
)
RETURNS TABLE (
  id uuid,
  thread_id uuid,
  role text,
  text text,
  created_at timestamptz,
  similarity float
)
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT
    m.id,
    m.thread_id,
    m.role,
    coalesce((m.parts->0->>'text'), ''),
    m.created_at,
    1 - (m.embedding <=> query_embedding) AS similarity
  FROM public.messages m
  WHERE m.user_id = p_user_id
    AND m.embedding IS NOT NULL
    AND 1 - (m.embedding <=> query_embedding) > match_threshold
  ORDER BY m.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

GRANT EXECUTE ON FUNCTION public.match_messages(vector, float, int, uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.match_messages(vector, float, int, uuid) TO service_role;
REVOKE EXECUTE ON FUNCTION public.match_messages(vector, float, int, uuid) FROM PUBLIC, anon;
