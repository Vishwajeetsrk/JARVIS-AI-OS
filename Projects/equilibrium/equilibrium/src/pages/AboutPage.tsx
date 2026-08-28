import { PageShell } from "../components/PageShell";

export function AboutPage({ embedded = false }: { embedded?: boolean }) {
  const body = (
    <>
      <p>
        We build platforms for brilliant minds, fearless makers, and thoughtful souls — digital
        havens carved out of noise so deep work and pure flow can coexist.
      </p>
      <p>
        Founded as Aethera®, our practice pairs cinematic storytelling with production-grade
        workflow tooling for teams who ship thoughtful AI products.
      </p>
    </>
  );

  if (embedded) {
    return (
      <section className="border-t border-black/8 bg-background px-6 py-24 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">About</p>
          <h2 className="font-display mt-3 text-4xl font-normal tracking-[-1.5px]">
            Beyond silence
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted">{body}</div>
        </div>
      </section>
    );
  }

  return (
    <PageShell eyebrow="About" title="Beyond silence">
      {body}
    </PageShell>
  );
}
