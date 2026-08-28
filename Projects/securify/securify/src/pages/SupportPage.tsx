import { InnerPageShell } from "../components/InnerPageShell";

const FAQ = [
  {
    q: "how fast can we onboard?",
    a: "most teams ship their first protected environment within one business day.",
  },
  {
    q: "do you support hipaa / gdpr?",
    a: "yes—region pinning, dpa templates, and audit exports ship with enterprise plans.",
  },
  {
    q: "where is data stored?",
    a: "choose us, eu, or apac residency; keys never leave your selected boundary.",
  },
] as const;

export function SupportPage() {
  return (
    <InnerPageShell title="support" eyebrow="help">
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-white/70">
        reach our security desk anytime—critical incidents route to on-call engineers in under ten
        minutes.
      </p>
      <div className="mb-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
          <h2 className="text-sm font-medium text-white/50">email</h2>
          <p className="mt-2 text-lg lowercase">security@securify.io</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
          <h2 className="text-sm font-medium text-white/50">status</h2>
          <p className="mt-2 text-lg lowercase">all systems operational</p>
        </div>
      </div>
      <div className="space-y-8">
        {FAQ.map((item) => (
          <div key={item.q}>
            <h3 className="text-base font-medium lowercase">{item.q}</h3>
            <p className="mt-2 text-sm text-white/60">{item.a}</p>
          </div>
        ))}
      </div>
    </InnerPageShell>
  );
}
