import { PageShell } from "../components/PageShell";

const CAPABILITIES = [
  { name: "Flow canvas", desc: "Map AI workflows with serif-forward editorial chrome." },
  { name: "Silence mode", desc: "Strip notifications for uninterrupted deep work sessions." },
  { name: "Eternal archive", desc: "Versioned prompts and artifacts with calm retrieval." },
];

export function PlatformPage({ embedded = false }: { embedded?: boolean }) {
  const grid = (
    <div className="grid gap-6 sm:grid-cols-3">
      {CAPABILITIES.map((cap) => (
        <div key={cap.name} className="rounded-2xl border border-black/10 p-6">
          <h3 className="font-display text-xl text-foreground">{cap.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{cap.desc}</p>
        </div>
      ))}
    </div>
  );

  if (embedded) {
    return (
      <section className="border-t border-black/8 bg-background px-6 py-24 md:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Platform</p>
          <h2 className="font-display mt-3 text-4xl font-normal tracking-[-1.5px]">
            Workflow infrastructure
          </h2>
          <div className="mt-10">{grid}</div>
        </div>
      </section>
    );
  }

  return (
    <PageShell eyebrow="Platform" title="Workflow infrastructure">
      {grid}
    </PageShell>
  );
}
