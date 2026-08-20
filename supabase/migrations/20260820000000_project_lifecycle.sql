-- Project lifecycle: builds, deployments, databases, api keys
-- Extends the projects table with lifecycle metadata.

-- 1. project_builds — saved generated builds (HTML sites/apps) per project
create table if not exists public.project_builds (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  user_id uuid not null default auth.uid(),
  name text not null default 'build',
  html text,
  framework text default 'static-html',
  build_type text default 'site',          -- 'site' | 'app' | 'landing' | 'component'
  status text default 'ready',             -- 'ready' | 'building' | 'deployed' | 'failed'
  preview_url text,
  deploy_url text,
  meta jsonb default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.project_builds enable row level security;

create policy "Users manage their own builds"
  on public.project_builds for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index if not exists idx_project_builds_project on public.project_builds(project_id, created_at desc);

-- 2. project_deployments — deployment history per project
create table if not exists public.project_deployments (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  user_id uuid not null default auth.uid(),
  build_id uuid references public.project_builds(id) on delete set null,
  provider text default 'vercel',          -- 'vercel' | 'netlify' | 'static'
  url text,
  status text default 'pending',           -- 'pending' | 'building' | 'live' | 'failed' | 'cancelled'
  environment text default 'production',
  meta jsonb default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.project_deployments enable row level security;

create policy "Users manage their own deployments"
  on public.project_deployments for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index if not exists idx_project_deployments_project on public.project_deployments(project_id, created_at desc);

-- 3. project_databases — connected database metadata per project
create table if not exists public.project_databases (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  user_id uuid not null default auth.uid(),
  name text not null default 'primary',
  provider text default 'supabase',        -- 'supabase' | 'postgres' | 'sqlite' | 'mysql'
  connection_url text,
  status text default 'connected',         -- 'connected' | 'disconnected' | 'error'
  meta jsonb default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.project_databases enable row level security;

create policy "Users manage their own databases"
  on public.project_databases for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index if not exists idx_project_databases_project on public.project_databases(project_id);

-- 4. project_plugins — enabled plugins per project
create table if not exists public.project_plugins (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  user_id uuid not null default auth.uid(),
  plugin_id text not null,
  config jsonb default '{}'::jsonb,
  enabled boolean default true,
  created_at timestamptz not null default now()
);

alter table public.project_plugins enable row level security;

create policy "Users manage their own project plugins"
  on public.project_plugins for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create unique index if not exists idx_project_plugins_unique on public.project_plugins(project_id, plugin_id);

-- 5. project_api_keys — API keys issued per project (hashed)
create table if not exists public.project_api_keys (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  user_id uuid not null default auth.uid(),
  name text not null default 'default',
  key_hash text not null,                  -- sha256 of the key prefix+secret
  key_prefix text not null,                -- e.g. 'jsk_live_ab12' for display
  scopes text[] default '{}'::text[],      -- e.g. {'read','write','deploy'}
  expires_at timestamptz,
  last_used_at timestamptz,
  revoked_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.project_api_keys enable row level security;

create policy "Users manage their own project api keys"
  on public.project_api_keys for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index if not exists idx_project_api_keys_project on public.project_api_keys(project_id);

-- 6. analysis snapshots — cached per-project analysis
create table if not exists public.project_analysis (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  user_id uuid not null default auth.uid(),
  report_type text default 'overview',     -- 'overview' | 'health' | 'usage' | 'seo'
  report jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.project_analysis enable row level security;

create policy "Users manage their own project analysis"
  on public.project_analysis for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index if not exists idx_project_analysis_project on public.project_analysis(project_id, created_at desc);

-- 7. project_brand_assets — generated brand assets (logo, favicon, og image) as inline SVG
create table if not exists public.project_brand_assets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid(),
  asset_type text not null,                -- 'logo' | 'favicon' | 'og-image'
  label text,
  content text not null,                   -- inline SVG
  created_at timestamptz not null default now()
);

alter table public.project_brand_assets enable row level security;

create policy "Users manage their own brand assets"
  on public.project_brand_assets for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index if not exists idx_project_brand_assets_user on public.project_brand_assets(user_id, created_at desc);

-- 8. project_legal_pages — generated legal pages (privacy, terms, disclaimer, refund, cookies)
create table if not exists public.project_legal_pages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid(),
  slug text not null,                      -- 'privacy' | 'terms' | 'disclaimer' | 'refund' | 'cookies'
  title text not null,
  brand_name text,
  html text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, slug)
);

alter table public.project_legal_pages enable row level security;

create policy "Users manage their own legal pages"
  on public.project_legal_pages for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);