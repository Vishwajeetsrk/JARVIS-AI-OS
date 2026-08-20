import { createFileRoute } from "@tanstack/react-router";
import { MarketingNav, MarketingFooter } from "@/components/jarvis/marketing-nav";
import { useState } from "react";
import { Search, Sparkles, CheckCircle2, Terminal, Copy, Check, Filter } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/skills")({
  component: Skills,
  head: () => ({
    meta: [
      { title: "Skills Catalog — 69 Installed Claude & Agent Skills | JARVIS AI OS" },
      { name: "description", content: "69 specialized agent skills installed directly into JARVIS AI OS." },
    ],
  }),
});

const SKILLS_CATALOG = [
  // Full-Stack & Languages
  { name: "typescript-pro", desc: "Advanced TypeScript type gymnastics, custom type guards, branded types, and tRPC full-stack safety.", cat: "Language" },
  { name: "python-pro", desc: "Python 3.11+ async architectures, strict MyPy type safety, pytest suites, and dependency injection.", cat: "Language" },
  { name: "golang-pro", desc: "Goroutine concurrency patterns, gRPC microservices, memory profiling with pprof, and generics.", cat: "Language" },
  { name: "rust-engineer", desc: "Idiomatic zero-cost abstractions, borrow checker mastery, Tokio async, and safe FFI bindings.", cat: "Language" },
  { name: "cpp-pro", desc: "Modern C++20/23 concepts, ranges, SIMD acceleration, memory cache-locality, and CMake builds.", cat: "Language" },
  { name: "csharp-developer", desc: ".NET 8+, ASP.NET Core Minimal APIs, Entity Framework Core, CQRS with MediatR, and Blazor.", cat: "Language" },
  { name: "java-architect", desc: "Spring Boot 3.x, WebFlux reactive endpoints, JPA query optimization, and enterprise security.", cat: "Language" },
  { name: "kotlin-specialist", desc: "Coroutines, Flow reactive streams, Compose Multiplatform, and Ktor microservices.", cat: "Language" },
  { name: "swift-expert", desc: "SwiftUI, Swift 5.9+ actors, structured concurrency, Combine, and iOS/macOS architecture.", cat: "Language" },
  { name: "php-pro", desc: "PHP 8.3+, PHPStan Level 9 strict types, Laravel 11, Swoole async, and PSR standards.", cat: "Language" },

  // Frontend & Mobile
  { name: "react-expert", desc: "React 19 Server Components, Suspense boundaries, useActionState, and micro-animations.", cat: "Frontend" },
  { name: "nextjs-developer", desc: "Next.js 14/15 App Router, Server Actions, streaming SSR, edge middleware, and SEO metadata.", cat: "Frontend" },
  { name: "vue-expert", desc: "Vue 3 Composition API, Nuxt 3 full-stack SSR/SSG, Pinia store architecture, and Quasar.", cat: "Frontend" },
  { name: "angular-architect", desc: "Angular 17+ standalone components, NgRx signal stores, RxJS patterns, and bundle tuning.", cat: "Frontend" },
  { name: "react-native-expert", desc: "Cross-platform mobile apps with Expo, 60fps FlatList optimization, and native bridges.", cat: "Mobile" },
  { name: "flutter-expert", desc: "Flutter 3+ cross-platform mobile apps, Riverpod/Bloc state management, and GoRouter.", cat: "Mobile" },

  // Backend & APIs
  { name: "fastapi-expert", desc: "Async Python REST APIs with Pydantic V2, async SQLAlchemy, JWT authentication, and WebSockets.", cat: "Backend" },
  { name: "nestjs-expert", desc: "Enterprise TypeScript backends with modular architecture, guards, interceptors, and Prisma.", cat: "Backend" },
  { name: "django-expert", desc: "Django REST Framework, ORM query optimization with prefetch_related, and JWT auth.", cat: "Backend" },
  { name: "rails-expert", desc: "Rails 7+ Hotwire Turbo Frames/Streams, Action Cable WebSockets, and Sidekiq background workers.", cat: "Backend" },
  { name: "laravel-specialist", desc: "Laravel 11 Eloquent relationships, Horizon queues, Sanctum auth, and Livewire components.", cat: "Backend" },
  { name: "api-designer", desc: "REST & GraphQL API design, OpenAPI/Swagger 3.1 specifications, idempotency, and versioning.", cat: "Backend" },
  { name: "graphql-architect", desc: "Apollo Federation, DataLoader N+1 query prevention, real-time GraphQL subscriptions.", cat: "Backend" },
  { name: "websocket-engineer", desc: "High-scale real-time bidirectional communication, Redis pub/sub backplanes, and heartbeat.", cat: "Backend" },

  // Database & Storage
  { name: "sql-pro", desc: "Query execution plan tuning, window functions, CTEs, covering indexes, and recursive schemas.", cat: "Database" },
  { name: "postgres-pro", desc: "PostgreSQL EXPLAIN ANALYZE, JSONB indexing, VACUUM tuning, partitioning, and replication.", cat: "Database" },
  { name: "supabase", desc: "Supabase Database, Auth, Realtime, Edge Functions, pgvector semantic search, and RLS policies.", cat: "Database" },
  { name: "supabase-postgres-best-practices", desc: "Index design, connection pooling with PgBouncer, RLS security gates, and schema migration.", cat: "Database" },
  { name: "database-optimizer", desc: "Query rewrites, index consolidation, lock contention resolution, and buffer cache tuning.", cat: "Database" },

  // AI, LLM & RAG
  { name: "rag-architect", desc: "Production RAG pipelines, chunking strategies, pgvector & Pinecone similarity, and rerankers.", cat: "AI & ML" },
  { name: "prompt-engineer", desc: "DSPy prompt optimization, chain-of-thought, structured JSON function calling, and eval rubrics.", cat: "AI & ML" },
  { name: "fine-tuning-expert", desc: "LoRA / QLoRA adapters, JSONL instruction datasets, PEFT, and model quantization.", cat: "AI & ML" },
  { name: "ml-pipeline", desc: "Kubeflow, MLflow experiment tracking, Feast feature stores, and automated model validation.", cat: "AI & ML" },
  { name: "spark-engineer", desc: "Apache Spark big data transformations, Parquet storage, executor memory tuning, and streaming.", cat: "AI & ML" },
  { name: "pandas-pro", desc: "Vectorized DataFrame operations, multi-index pivots, time-series resampling, and memory tuning.", cat: "AI & ML" },

  // DevOps, Cloud & SRE
  { name: "devops-engineer", desc: "Docker multi-stage builds, Kubernetes Helm charts, GitHub Actions CI/CD, and Terraform.", cat: "DevOps" },
  { name: "kubernetes-specialist", desc: "K8s pod security, RBAC policies, NetworkPolicies, horizontal pod autoscaling, and ingress.", cat: "DevOps" },
  { name: "cloud-architect", desc: "AWS, Azure, and GCP Well-Architected Framework, cost optimization, and multi-region failover.", cat: "DevOps" },
  { name: "terraform-engineer", desc: "Modular Infrastructure as Code, remote state locking with S3/DynamoDB, and plan drift detection.", cat: "DevOps" },
  { name: "sre-engineer", desc: "SLI/SLO definition, error budget burn alerting, incident response playbooks, and toil reduction.", cat: "DevOps" },
  { name: "monitoring-expert", desc: "Prometheus metrics, Grafana dashboards, OpenTelemetry distributed tracing, and k6 load testing.", cat: "DevOps" },
  { name: "chaos-engineer", desc: "Fault injection experiments, blast radius control, Litmus Chaos, and game day runbooks.", cat: "DevOps" },

  // Security & Quality
  { name: "security-reviewer", desc: "SAST scans, OWASP Top 10 auditing, secrets detection, dependency CVE remediation, and auth check.", cat: "Security" },
  { name: "secure-code-guardian", desc: "Argon2/bcrypt password hashing, parameterized queries, strict CSP headers, and Zod gates.", cat: "Security" },
  { name: "test-master", desc: "Comprehensive unit/integration test architecture, Vitest/Jest mocking, and coverage audit.", cat: "Testing" },
  { name: "playwright-expert", desc: "Page Object Model E2E tests, visual regression, network mocking, and cross-browser CI runs.", cat: "Testing" },
  { name: "debugging-wizard", desc: "Root cause analysis, stack trace correlation, memory leak isolation, and systematic reproduction.", cat: "Core" },
  { name: "code-reviewer", desc: "Deep PR diff analysis, anti-pattern detection, architectural cohesion, and performance review.", cat: "Core" },

  // Protocols, Systems & Integrations
  { name: "mcp-developer", desc: "Model Context Protocol tools, resource providers, stdio/SSE transports, and Zod schemas.", cat: "Integration" },
  { name: "salesforce-developer", desc: "Apex triggers, Lightning Web Components, SOQL optimization, and Data Loader automation.", cat: "Integration" },
  { name: "shopify-expert", desc: "Shopify Liquid themes, Storefront API headless storefronts, and checkout extensions.", cat: "Integration" },
  { name: "wordpress-pro", desc: "Custom themes, Gutenberg blocks, WooCommerce stores, and REST API endpoints.", cat: "Integration" },
  { name: "embedded-systems", desc: "STM32, ESP32, FreeRTOS firmware, interrupt handlers, and low-power microcontrollers.", cat: "Systems" },
  { name: "cli-developer", desc: "Interactive CLI tools with Commander/Click/Typer, spinners, progress bars, and tab completions.", cat: "Core" },
  { name: "feature-forge", desc: "EARS-format functional requirements, PRDs, user stories, and acceptance criteria.", cat: "Core" },
  { name: "spec-miner", desc: "Legacy codebase reverse engineering, undocumented business logic extraction, and system maps.", cat: "Core" },
  { name: "the-fool", desc: "Devil's advocate critical reasoning, assumption auditing, pre-mortems, and red-teaming.", cat: "Core" },
];

const CATEGORIES = ["All", "Language", "Frontend", "Backend", "Database", "AI & ML", "DevOps", "Security", "Testing", "Integration", "Core"];

function Skills() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedSkill, setCopiedSkill] = useState<string | null>(null);

  const filtered = SKILLS_CATALOG.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase()) ||
      item.cat.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || item.cat === activeCategory;
    return matchSearch && matchCat;
  });

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(`npx tsx cli/index.ts skill:install https://github.com/jeffallan/claude-skills/${name}`);
    setCopiedSkill(name);
    setTimeout(() => setCopiedSkill(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-foreground selection:bg-cyan-500/30">
      <MarketingNav />
      <main className="mx-auto max-w-7xl px-6 py-20">
        
        {/* Header */}
        <div className="flex items-center justify-between gap-6 flex-wrap mb-6">
          <div>
            <div className="text-mono-xs text-cyan-400 font-mono tracking-wider uppercase mb-2 flex items-center gap-2">
              <Terminal className="h-4 w-4" /> Agent Skills & Specialists Catalog
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              69 Skills. <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Zero Repeat Mistakes.</span>
            </h1>
          </div>
          <div className="flex items-center gap-2.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2.5 text-sm font-mono text-cyan-300 shadow-lg shadow-cyan-500/10">
            <Sparkles className="h-4 w-4 animate-spin text-cyan-400" style={{ animationDuration: "6s" }} />
            69 Active Specialists Installed
          </div>
        </div>

        <p className="max-w-3xl text-lg text-slate-400 leading-relaxed">
          JARVIS AI OS comes pre-equipped with 69 battle-tested Claude & AI specialist skills installed in <code className="text-cyan-300 font-mono bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50">.agents/skills/</code>. Each skill provides structured execution playbooks, automated error prevention, and multi-agent synergy.
        </p>

        {/* Dynamic CLI Command Box */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-xl shadow-2xl flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3 font-mono text-sm text-slate-300">
            <Terminal className="h-4 w-4 text-cyan-400" />
            <span className="text-muted-foreground">Install custom skill:</span>
            <span className="text-cyan-300 font-semibold">npx tsx cli/index.ts skill:install &lt;github-url&gt;</span>
          </div>
          <span className="text-xs font-mono text-slate-500">Autonomous Claude-Skills Compatible</span>
        </div>

        {/* Search + Categories */}
        <div className="mt-8 space-y-4">
          <div className="relative max-w-lg">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search 69 skills by keyword, framework, or language…"
              className="w-full rounded-2xl border border-white/10 bg-slate-900/90 pl-11 pr-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all shadow-inner"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-mono font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 font-bold"
                    : "border border-white/10 bg-slate-900/60 text-slate-400 hover:border-cyan-500/40 hover:text-white"
                }`}
              >
                {cat} {cat === "All" ? `(${SKILLS_CATALOG.length})` : `(${SKILLS_CATALOG.filter(s => s.cat === cat).length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.4) }}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                  <span className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-cyan-400">
                    {skill.cat}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Installed & Active
                </div>
                <button
                  onClick={() => handleCopy(skill.name)}
                  title="Copy install command"
                  className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {copiedSkill === skill.name ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" /> CLI Cmd
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-sm font-mono text-slate-500">
            No agent skills match your search criteria. Try a different query or reset filters.
          </div>
        )}
      </main>
      <MarketingFooter />
    </div>
  );
}
