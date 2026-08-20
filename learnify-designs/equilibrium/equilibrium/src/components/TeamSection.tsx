const TEAM = [
  { name: "Dr. Amara Chen", role: "Clinical wellness lead", focus: "Sleep & recovery science" },
  { name: "Marcus Vale", role: "Movement director", focus: "Mobility & strength periodization" },
  { name: "Elena Ruiz", role: "Nutrition architect", focus: "Metabolic rhythm coaching" },
  { name: "Jordan Pike", role: "Mindfulness guide", focus: "Breathwork & stress regulation" },
] as const;

export default function TeamSection() {
  return (
    <section
      id="our-team"
      className="scroll-mt-20 border-t border-white/8 bg-background px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <p data-editable className="section-eyebrow mb-3">
          Our Team
        </p>
        <h2
          data-editable
          className="max-w-2xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl"
        >
          Practitioners who measure calm, not hustle
        </h2>
        <p data-editable className="mt-4 max-w-xl text-muted">
          Equilibrium coaches blend clinical rigor with studio warmth — every session ends with a
          plan you can repeat without us in the room.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="liquid-glass flex flex-col rounded-2xl p-6 sm:flex-row sm:items-center sm:gap-5"
            >
              <div
                className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-emerald-900/40 text-lg font-semibold text-foreground sm:mb-0"
                aria-hidden
              >
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-accent">{member.role}</p>
                <p className="mt-1 text-sm text-muted">{member.focus}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
