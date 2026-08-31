-- ============================================================================
-- Supabase Migration: JARVIS Vector Memory Engine (pgvector)
-- Migration ID: 20260831203000_vector_memory.sql
-- ============================================================================

-- 1. Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- 2. Create Vector Memories Table
CREATE TABLE IF NOT EXISTS public.jarvis_vector_memories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL CHECK (category IN ('conversation', 'project_context', 'architecture_decision', 'user_preference', 'career_evidence')),
  content TEXT NOT NULL,
  embedding vector(1536), -- Standard OpenAI/Gemini/OpenRouter embedding dimension
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Create Vector Similarity Search Function (Cosine Distance)
CREATE OR REPLACE FUNCTION match_memories(
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.70,
  match_count int DEFAULT 5,
  filter_category text DEFAULT NULL
)
RETURNS TABLE (
  id UUID,
  category TEXT,
  content TEXT,
  metadata JSONB,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    m.id,
    m.category,
    m.content,
    m.metadata,
    1 - (m.embedding <=> query_embedding) AS similarity
  FROM public.jarvis_vector_memories m
  WHERE
    (filter_category IS NULL OR m.category = filter_category)
    AND (1 - (m.embedding <=> query_embedding)) > match_threshold
  ORDER BY m.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.jarvis_vector_memories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated read vector memories"
  ON public.jarvis_vector_memories FOR SELECT
  USING (true);

CREATE POLICY "Allow service role manage vector memories"
  ON public.jarvis_vector_memories FOR ALL
  USING (true);
