import { PageShell } from "../components/PageShell";

export function PrivacyPage({ embedded = false }: { embedded?: boolean }) {
  const body = (
    <>
      <p>
        Aethera collects only the information you submit through contact forms. We do not sell
        personal data and retain messages solely to respond to inquiries.
      </p>
      <p>
        Analytics on this preview site are disabled. Production deployments should link to your
        organization&apos;s privacy policy and data processing agreements.
      </p>
    </>
  );

  if (embedded) {
    return (
      <section className="border-t border-black/8 bg-background px-6 py-24 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Legal</p>
          <h2 className="font-display mt-3 text-4xl font-normal tracking-[-1.5px]">Privacy</h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted">{body}</div>
        </div>
      </section>
    );
  }

  return (
    <PageShell eyebrow="Legal" title="Privacy">
      {body}
    </PageShell>
  );
}
