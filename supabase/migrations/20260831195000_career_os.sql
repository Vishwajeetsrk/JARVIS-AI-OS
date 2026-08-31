-- ==============================================================================
-- JARVIS CAREER OS 2.0 SCHEMA MIGRATION
-- Migration: 20260831195000_career_os.sql
-- Description: Core tables, indexes, and Row Level Security for Career OS.
-- ==============================================================================

-- 1. Career Profiles Table
CREATE TABLE IF NOT EXISTS public.career_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  headline TEXT NOT NULL,
  summary TEXT NOT NULL,
  contact_info JSONB NOT NULL DEFAULT '{}'::jsonb,
  target_roles JSONB NOT NULL DEFAULT '[]'::jsonb,
  preferences JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Master Evidence Database Table
CREATE TABLE IF NOT EXISTS public.career_evidence (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  category TEXT NOT NULL CHECK (category IN ('experience', 'project', 'skill', 'education', 'certification', 'achievement', 'metric')),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  source TEXT NOT NULL,
  verified BOOLEAN NOT NULL DEFAULT false,
  confidence NUMERIC(3, 2) NOT NULL DEFAULT 1.00,
  tags TEXT[] DEFAULT '{}',
  skills TEXT[] DEFAULT '{}',
  metrics JSONB DEFAULT '{}'::jsonb,
  allowed_on_resume BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. Resume Variants & Documents
CREATE TABLE IF NOT EXISTS public.resume_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  target_role TEXT NOT NULL,
  slug TEXT NOT NULL,
  allocation_percent INT DEFAULT 0,
  ats_score INT DEFAULT 90,
  template_type TEXT DEFAULT 'cyberpunk',
  sections JSONB NOT NULL DEFAULT '[]'::jsonb,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 4. Immutable Resume Versions (A/B Testing & History)
CREATE TABLE IF NOT EXISTS public.resume_versions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  resume_id UUID NOT NULL REFERENCES public.resume_documents(id) ON DELETE CASCADE,
  version_number INT NOT NULL,
  change_summary TEXT,
  target_job_title TEXT,
  snapshot JSONB NOT NULL,
  ats_score INT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 5. Job Opportunities & Deduplication
CREATE TABLE IF NOT EXISTS public.job_opportunities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  company TEXT NOT NULL,
  title TEXT NOT NULL,
  location TEXT,
  work_mode TEXT CHECK (work_mode IN ('Remote', 'Hybrid', 'Onsite', 'Unknown')),
  description TEXT NOT NULL,
  required_skills TEXT[] DEFAULT '{}',
  preferred_skills TEXT[] DEFAULT '{}',
  salary_range JSONB DEFAULT '{}'::jsonb,
  sources JSONB NOT NULL DEFAULT '[]'::jsonb,
  dedup_hash TEXT NOT NULL,
  application_url TEXT NOT NULL,
  opportunity_score INT DEFAULT 85,
  status TEXT DEFAULT 'discovered' CHECK (status IN ('discovered', 'analyzed', 'saved', 'applied', 'rejected')),
  posted_at TIMESTAMPTZ DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 6. Application Tracker (Kanban Lifecycle)
CREATE TABLE IF NOT EXISTS public.applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  job_id UUID NOT NULL REFERENCES public.job_opportunities(id) ON DELETE CASCADE,
  resume_version_id UUID REFERENCES public.resume_versions(id) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'saved' CHECK (
    status IN ('saved', 'analyzed', 'ready', 'applied', 'assessment', 'interview', 'final_round', 'offer', 'accepted', 'rejected', 'withdrawn', 'ghosted')
  ),
  match_score INT DEFAULT 0,
  cover_letter TEXT,
  application_answers JSONB DEFAULT '{}'::jsonb,
  notes TEXT,
  next_action TEXT,
  next_action_at TIMESTAMPTZ,
  submitted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 7. Application Question Bank
CREATE TABLE IF NOT EXISTS public.application_answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_pattern TEXT NOT NULL,
  approved_answer TEXT NOT NULL,
  category TEXT DEFAULT 'general',
  times_used INT DEFAULT 1,
  last_used_at TIMESTAMPTZ DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 8. Interview Preparation & Tracker
CREATE TABLE IF NOT EXISTS public.interviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id UUID NOT NULL REFERENCES public.applications(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  round_name TEXT NOT NULL,
  scheduled_at TIMESTAMPTZ NOT NULL,
  interviewer_info TEXT,
  meeting_url TEXT,
  prep_notes JSONB DEFAULT '{}'::jsonb,
  star_stories JSONB DEFAULT '[]'::jsonb,
  status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'cancelled', 'rescheduled')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE public.career_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.career_evidence ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resume_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resume_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.application_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.interviews ENABLE ROW LEVEL SECURITY;

-- Profiles Policy
CREATE POLICY "Users can manage their own career profile"
  ON public.career_profiles FOR ALL
  USING (auth.uid() = user_id);

-- Evidence Policy
CREATE POLICY "Users can manage their own evidence graph"
  ON public.career_evidence FOR ALL
  USING (auth.uid() = user_id);

-- Resumes Policy
CREATE POLICY "Users can manage their own resumes"
  ON public.resume_documents FOR ALL
  USING (auth.uid() = user_id);

-- Resume Versions Policy
CREATE POLICY "Users can manage their own resume versions"
  ON public.resume_versions FOR ALL
  USING (EXISTS (SELECT 1 FROM public.resume_documents WHERE resume_documents.id = resume_versions.resume_id AND resume_documents.user_id = auth.uid()));

-- Job Opportunities Policy
CREATE POLICY "Users can manage their own job opportunities"
  ON public.job_opportunities FOR ALL
  USING (auth.uid() = user_id);

-- Applications Policy
CREATE POLICY "Users can manage their own applications"
  ON public.applications FOR ALL
  USING (auth.uid() = user_id);

-- Answers Policy
CREATE POLICY "Users can manage their own application answers"
  ON public.application_answers FOR ALL
  USING (auth.uid() = user_id);

-- Interviews Policy
CREATE POLICY "Users can manage their own interviews"
  ON public.interviews FOR ALL
  USING (auth.uid() = user_id);
