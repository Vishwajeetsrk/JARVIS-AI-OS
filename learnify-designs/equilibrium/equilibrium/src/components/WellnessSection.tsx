import { Leaf, Moon, Sparkles } from "lucide-react";

const PILLARS = [
  {
    icon: Leaf,
    title: "Mindful movement",
    body: "Low-impact flows that restore joint mobility and nervous-system calm without burnout.",
  },
  {
    icon: Moon,
    title: "Sleep architecture",
    body: "Evening protocols and breath pacing that deepen recovery between demanding days.",
  },
  {
    icon: Sparkles,
    title: "Nutrition rhythm",
    body: "Seasonal meal cadences aligned to energy peaks — not restrictive, intentionally balanced.",
  },
] as const;

export default function WellnessSection() {
  return (
    <section
      id="wellness"
      className="scroll-mt-20 border-t border-white/8 bg-background px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <p data-editable className="section-eyebrow mb-3">
          Wellness
        </p>
        <h2
          data-editable
          className="max-w-2xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl"
        >
          Three pillars that hold your center
        </h2>
        <p data-editable className="mt-4 max-w-xl text-muted">
          Every program at Equilibrium maps to movement, rest, and nourishment — the triangle that
          keeps high performers from tipping into depletion.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="liquid-glass rounded-2xl p-6 transition hover:bg-white/[0.06]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
