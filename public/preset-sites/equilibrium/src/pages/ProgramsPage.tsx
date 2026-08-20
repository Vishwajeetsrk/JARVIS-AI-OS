import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { navigateToRoute } from "../../../_shared/preset-site-routing";

const PROGRAMS = [
  {
    name: "Morning Reset",
    cadence: "6 weeks · 3 sessions / week",
    focus: "Breath-led mobility and nervous-system downshift before your workday peaks.",
  },
  {
    name: "Executive Recovery",
    cadence: "8 weeks · hybrid",
    focus:
      "Sleep architecture coaching, guided stillness, and nutrition rhythm for travel-heavy schedules.",
  },
  {
    name: "Studio Immersion",
    cadence: "Weekend intensive",
    focus:
      "In-person ritual design with coaches — movement labs, sauna protocols, and group reflection.",
  },
] as const;

export function ProgramsPage() {
  return (
    <section className="scroll-mt-20 border-t border-white/8 bg-background px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="section-eyebrow mb-3">Programs</p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          Rituals designed for real calendars
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Every Equilibrium program blends movement, rest, and nourishment — paced for founders,
          creatives, and teams who refuse hustle-as-identity.
        </p>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PROGRAMS.map(({ name, cadence, focus }) => (
            <article key={name} className="liquid-glass rounded-2xl p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Calendar className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-accent/90">
                {cadence}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{focus}</p>
            </article>
          ))}
        </div>
        <button
          type="button"
          className="liquid-glass mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-foreground"
          onClick={() => navigateToRoute("contact")}
        >
          <Sparkles className="h-4 w-4 text-accent" />
          Book a discovery call
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
