import { PageShell } from "../components/PageShell";

const PILLARS = [
  {
    title: "Reactive foam lattice",
    body: "78% energy return measured in our impact lab across 12,000 strike cycles.",
  },
  {
    title: "Breathable shell weave",
    body: "Micro-perforated upper mapped to heat zones for all-day urban wear.",
  },
  {
    title: "Carbon trail plate",
    body: "Aerospace-grade plate geometry adapted for pavement and light trail.",
  },
];

export function InnovationPage() {
  return (
    <PageShell
      eyebrow="R&D"
      title={
        <>
          Innovation <span className="font-serif italic">lab</span>
        </>
      }
      description="ARC PACE prototypes in Portland and Eindhoven—where biomechanics, materials science, and street culture meet."
    >
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {PILLARS.map((p) => (
          <article key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{p.body}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
