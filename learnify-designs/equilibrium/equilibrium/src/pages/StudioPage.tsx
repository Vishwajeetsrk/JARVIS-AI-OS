import { PageShell } from "../components/PageShell";

export function StudioPage({ embedded = false }: { embedded?: boolean }) {
  const body = (
    <>
      <p>
        Aethera Studio is where cinematic product narratives meet workflow infrastructure — calm
        surfaces, deliberate motion, and typography that respects long-form focus.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Editorial hero systems with manual video fade loops</li>
        <li>Instrument Serif display paired with Inter UI rhythm</li>
        <li>White-field layouts tuned for AI workflow brands</li>
      </ul>
    </>
  );

  if (embedded) {
    return (
      <section className="border-t border-black/8 bg-background px-6 py-24 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Studio</p>
          <h2 className="font-display mt-3 text-4xl font-normal tracking-[-1.5px]">The atelier</h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted">{body}</div>
        </div>
      </section>
    );
  }

  return (
    <PageShell eyebrow="Studio" title="The atelier">
      {body}
    </PageShell>
  );
}
