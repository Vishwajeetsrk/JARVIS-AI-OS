import PageShell from "../components/PageShell";

export function AboutPage() {
  return (
    <PageShell
      eyebrow="About Us"
      title="Transforming designers into product leaders"
      description="DesignPro partners with industry operators to deliver cohort-based education that blends strategy, craft, and executive communication."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            stat: "8,000+",
            label: "Alumni placed across product orgs worldwide",
          },
          {
            stat: "92%",
            label: "Graduates report a promotion or new role within 6 months",
          },
          {
            stat: "40+",
            label: "Live mentor sessions per cohort with operator feedback",
          },
        ].map((item) => (
          <article
            key={item.stat}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <p className="text-3xl font-medium tracking-tight">{item.stat}</p>
            <p className="mt-2 text-sm text-white/70">{item.label}</p>
          </article>
        ))}
      </div>
      <p className="mt-10 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
        Our mission is to close the gap between visual craft and product judgment. Every program
        pairs studio critiques with business-case drills so graduates can lead roadmaps—not just
        screens.
      </p>
    </PageShell>
  );
}
