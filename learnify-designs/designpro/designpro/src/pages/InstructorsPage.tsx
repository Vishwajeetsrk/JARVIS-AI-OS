import PageShell from "../components/PageShell";
import { INSTRUCTORS } from "../constants";

export function InstructorsPage() {
  return (
    <PageShell
      eyebrow="Instructors"
      title="Learn from operators who ship at scale"
      description="Our faculty includes design directors, VPs of product, and founders who still run weekly critiques with cohorts."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {INSTRUCTORS.map((person) => (
          <article key={person.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-medium">{person.name}</h2>
            <p className="mt-1 text-sm text-white/60">{person.role}</p>
            <p className="mt-3 text-sm text-white/75">Focus: {person.focus}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
