import { BookOpen, Building2, Layers, Users } from "lucide-react";

const SECTIONS = [
  {
    id: "solutions",
    icon: Layers,
    eyebrow: "Solutions",
    title: "One platform for every AI workload",
    body: "From retrieval pipelines to autonomous agents, Stellar.ai unifies prototyping, evaluation, and production deploys. Swap models without rewriting orchestration—version prompts, compare runs, and promote winners in a single control plane.",
    bullets: ["Model routing & fallbacks", "Eval suites & regression gates", "Multi-region deploy"],
  },
  {
    id: "for-teams",
    icon: Users,
    eyebrow: "For Teams",
    title: "Built for cross-functional shipping",
    body: "Engineers, PMs, and operators share live canvases with comment threads, approval flows, and environment-scoped secrets. Every change is attributable—no more shadow prompts in spreadsheets.",
    bullets: ["Role-based workspaces", "Review & sign-off flows", "Slack & Linear integrations"],
  },
  {
    id: "about",
    icon: Building2,
    eyebrow: "About",
    title: "We believe intelligence should feel inevitable",
    body: "Stellar.ai started in 2024 with a simple thesis: production AI deserves the same craft as consumer software. Today we power mission-critical workflows for teams who refuse to trade safety for speed.",
    bullets: [
      "HQ in San Francisco",
      "Backed by leading infra investors",
      "SOC2 Type II in progress",
    ],
  },
  {
    id: "learn-hub",
    icon: BookOpen,
    eyebrow: "Learn Hub",
    title: "Guides, patterns, and office hours",
    body: "Explore playbooks for agent design, cost optimization, and governance templates. Weekly office hours with our solutions architects—free for every workspace on Pro and above.",
    bullets: ["Agent cookbook", "Cost playbook", "Compliance templates"],
  },
] as const;

export default function PageSections() {
  return (
    <>
      {SECTIONS.map((section, index) => {
        const Icon = section.icon;
        const delay = `${0.1 + index * 0.05}s`;
        return (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24 border-t border-white/5 bg-[#060812] px-4 py-20 sm:px-8 md:px-12 md:py-28"
          >
            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center md:gap-16">
              <div>
                <p
                  className="animate-fade-in-up text-xs font-medium uppercase tracking-[0.3em] text-violet-300/80"
                  style={{ animationDelay: delay }}
                >
                  {section.eyebrow}
                </p>
                <h2
                  className="animate-fade-in-up mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl"
                  style={{ animationDelay: delay }}
                >
                  {section.title}
                </h2>
                <p
                  className="animate-fade-in-up mt-4 text-base leading-relaxed text-white/55 md:text-lg"
                  style={{ animationDelay: delay }}
                >
                  {section.body}
                </p>
                <ul className="animate-fade-in-up mt-6 space-y-2" style={{ animationDelay: delay }}>
                  {section.bullets.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="animate-fade-in-up liquid-glass flex aspect-[4/3] flex-col items-center justify-center rounded-3xl p-8"
                style={{ animationDelay: delay }}
              >
                <Icon className="h-12 w-12 text-violet-300/80" strokeWidth={1.25} />
                <p className="mt-4 text-center text-sm text-white/45">
                  {section.eyebrow} preview panel
                </p>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
