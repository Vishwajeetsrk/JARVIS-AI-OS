const SECTIONS = [
  {
    id: "features",
    title: "Features",
    body: "Deploy models, orchestrate agents, and monitor every workflow with enterprise-grade observability and liquid-glass controls.",
  },
  {
    id: "solutions",
    title: "Solutions",
    body: "From research labs to customer-facing apps, Power AI unifies inference, fine-tuning, and governance in one platform.",
  },
  {
    id: "plans",
    title: "Plans",
    body: "Flexible tiers for teams scaling from pilot to production — transparent usage, dedicated support, and custom SLAs.",
  },
  {
    id: "learning",
    title: "Learning",
    body: "Guides, workshops, and certification paths to help your organization adopt AI responsibly and ship faster.",
  },
] as const;

export function PageSections() {
  return (
    <>
      {SECTIONS.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className="relative z-10 border-t border-white/10 bg-background px-6 py-24 md:px-12"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
              {s.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base text-hero-sub/80">{s.body}</p>
          </div>
        </section>
      ))}
    </>
  );
}
