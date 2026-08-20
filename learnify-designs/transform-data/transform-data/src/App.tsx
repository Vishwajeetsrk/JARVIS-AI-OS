import { ArrowRight, BarChart3, Database, GitBranch, Shield, Sparkles, Users } from "lucide-react";
import FadingVideo from "./components/FadingVideo";
import Navbar from "./components/Navbar";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260329_050842_be71947f-f16e-4a14-810c-06e83d23ddb5.mp4";

const FEATURE_BLOCKS = [
  {
    id: "features-pipelines",
    icon: GitBranch,
    title: "Pipelines",
    body: "Orchestrate batch and streaming jobs with lineage-aware DAGs, retries, and SLA monitors baked in.",
    stat: "12M events / hr",
  },
  {
    id: "features-catalog",
    icon: Database,
    title: "Catalog",
    body: "Discover tables, models, and contracts in a unified graph with ownership, tags, and freshness scores.",
    stat: "4.2k assets",
  },
  {
    id: "features-quality",
    icon: BarChart3,
    title: "Quality",
    body: "Declarative checks, anomaly detection, and incident routing keep downstream dashboards trustworthy.",
    stat: "99.97% pass rate",
  },
  {
    id: "features-access",
    icon: Shield,
    title: "Access",
    body: "Row-level policies, audit trails, and federated grants sync with your identity provider in minutes.",
    stat: "SOC2 ready",
  },
] as const;

const PROJECTS = [
  { name: "Northwind Analytics", domain: "Retail", status: "Live" },
  { name: "Helios Telemetry", domain: "IoT", status: "Pilot" },
  { name: "Ledger Core", domain: "Finance", status: "Live" },
];

export default function App() {
  return (
    <div className="bg-canvas text-white">
      <Navbar />

      {/* Platform — video hero */}
      <section id="platform" className="section-scroll-mt relative min-h-screen overflow-hidden">
        <div className="fixed inset-0 z-0">
          <FadingVideo src={HERO_VIDEO} className="h-full w-full object-cover" />
        </div>
        <div
          className="pointer-events-none fixed inset-0 z-[1] backdrop-blur-xl bottom-blur-overlay"
          aria-hidden
        />
        <div
          className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-canvas/30 via-transparent to-canvas"
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 md:px-10 md:pb-24">
          <div
            className="animate-blur-fade-up mb-6 inline-flex max-w-fit items-center gap-2 rounded-full border border-line liquid-glass px-1 py-1 pr-4"
            style={{ animationDelay: "120ms" }}
          >
            <span className="rounded-full bg-cyan px-3 py-1 text-xs font-semibold text-canvas font-accent">
              New
            </span>
            <span className="text-xs text-white/80 sm:text-sm font-body">
              Unified lakehouse — now with real-time contracts
            </span>
          </div>

          <h1
            className="animate-blur-fade-up font-display max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "220ms" }}
          >
            <span className="data-gradient-text">Transform</span> raw signals into trusted data
            products
          </h1>

          <p
            className="animate-blur-fade-up mt-5 max-w-2xl text-base text-white/65 font-body sm:text-lg"
            style={{ animationDelay: "340ms" }}
          >
            Ship governed pipelines, searchable catalogs, and quality gates on one platform built
            for analytics and ML teams.
          </p>

          <div
            className="animate-blur-fade-up mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "460ms" }}
          >
            <label className="liquid-glass flex flex-1 items-center gap-2 rounded-full px-4 py-3">
              <Sparkles className="h-4 w-4 shrink-0 text-cyan" />
              <input
                type="search"
                placeholder="Search tables, pipelines, owners…"
                className="w-full border-0 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none font-sans"
              />
            </label>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-canvas transition hover:bg-white/90 font-accent"
            >
              Launch console
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Features — dropdown scroll targets */}
      <section id="features" className="section-scroll-mt border-t border-line bg-panel">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-28">
          <p className="font-accent text-xs font-semibold uppercase tracking-[0.28em] text-cyan">
            Features
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Everything your data platform needs
          </h2>
          <p className="mt-4 max-w-2xl text-white/60 font-body">
            Use the nav dropdown to jump directly into pipelines, catalog, quality, or access — each
            block anchors for smooth scroll.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {FEATURE_BLOCKS.map((block) => {
              const Icon = block.icon;
              return (
                <article
                  key={block.id}
                  id={block.id}
                  className="section-scroll-mt rounded-2xl border border-line bg-canvas/80 p-6 md:p-8"
                >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                      <Icon className="h-5 w-5 text-cyan" strokeWidth={1.75} />
                    </div>
                    <span className="font-accent text-sm font-semibold text-violet">
                      {block.stat}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold">{block.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60 font-body">
                    {block.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-scroll-mt border-t border-line bg-canvas">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-28">
          <p className="font-accent text-xs font-semibold uppercase tracking-[0.28em] text-violet">
            Projects
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Active workspaces
          </h2>
          <ul className="mt-10 divide-y divide-line rounded-2xl border border-line">
            {PROJECTS.map((p) => (
              <li
                key={p.name}
                className="flex flex-wrap items-center justify-between gap-4 px-5 py-5 font-sans sm:px-8"
              >
                <div>
                  <p className="font-display text-lg font-medium">{p.name}</p>
                  <p className="text-sm text-white/50 font-body">{p.domain}</p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold font-accent ${
                    p.status === "Live" ? "bg-cyan/15 text-cyan" : "bg-white/10 text-white/70"
                  }`}
                >
                  {p.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="section-scroll-mt border-t border-line bg-panel">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-28">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-accent text-xs font-semibold uppercase tracking-[0.28em] text-cyan">
                Community
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Builders sharing playbooks
              </h2>
              <p className="mt-4 max-w-xl text-white/60 font-body">
                Join office hours, schema design reviews, and open RFCs with practitioners shipping
                on Transform Data every week.
              </p>
            </div>
            <div className="liquid-glass flex items-center gap-4 rounded-2xl px-6 py-5">
              <Users className="h-10 w-10 text-cyan" strokeWidth={1.5} />
              <div>
                <p className="font-accent text-2xl font-bold">18k+</p>
                <p className="text-sm text-white/50 font-body">members in Slack & forums</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-scroll-mt border-t border-line bg-canvas pb-24">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-28">
          <p className="font-accent text-xs font-semibold uppercase tracking-[0.28em] text-violet">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Talk with our data team
          </h2>
          <form
            className="mt-10 grid max-w-xl gap-4 font-sans"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Work email"
              className="rounded-xl border border-line bg-panel px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan/50 focus:outline-none"
            />
            <textarea
              rows={4}
              placeholder="What are you building?"
              className="resize-none rounded-xl border border-line bg-panel px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan/50 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-canvas font-accent"
            >
              Request demo
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
