const STEPS = [
  { time: "06:30", label: "Grounding breath", detail: "4-7-8 pacing · 8 minutes" },
  { time: "12:00", label: "Midday reset", detail: "Desk mobility · 12 minutes" },
  { time: "18:45", label: "Strength flow", detail: "Low load · 35 minutes" },
  { time: "21:30", label: "Sleep primer", detail: "Dim light · journal · 15 minutes" },
] as const;

export default function RoutineSection() {
  return (
    <section
      id="routine"
      className="scroll-mt-20 border-t border-white/8 bg-surface px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <p data-editable className="section-eyebrow mb-3">
              Routine
            </p>
            <h2 data-editable className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              A day shaped around your nervous system
            </h2>
            <p data-editable className="mt-4 text-muted">
              Routines adapt to travel, training blocks, and recovery weeks. Your coach recalibrates
              timing — not intensity — when life shifts.
            </p>
          </div>
          <ol className="flex-1 space-y-3 lg:max-w-lg">
            {STEPS.map((step, i) => (
              <li
                key={step.label}
                className="liquid-glass flex items-center gap-4 rounded-2xl px-5 py-4"
              >
                <span className="w-14 shrink-0 text-sm font-semibold tabular-nums text-accent">
                  {step.time}
                </span>
                <div className="min-w-0 flex-1 border-l border-white/10 pl-4">
                  <p className="font-medium">{step.label}</p>
                  <p className="text-sm text-muted">{step.detail}</p>
                </div>
                <span className="hidden text-xs text-foreground/40 sm:inline">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
