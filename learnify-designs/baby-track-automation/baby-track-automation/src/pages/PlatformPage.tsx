import InnerPageLayout from "../components/InnerPageLayout";

const CAPABILITIES = [
  {
    title: "Routine engine",
    body: "Compose daily automations from triggers, timers, and AI-assisted steps.",
  },
  {
    title: "Operations hub",
    body: "Unified inbox for tasks, alerts, and approvals across every connected tool.",
  },
  {
    title: "Policy layer",
    body: "Guardrails ensure automations stay within budget, scope, and compliance.",
  },
];

export default function PlatformPage() {
  return (
    <InnerPageLayout
      eyebrow="Platform"
      title="One surface for operational calm"
      description="Baby Track coordinates work across your stack—routing, enriching, and completing tasks without manual glue code."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {CAPABILITIES.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
          >
            <h2 className="text-lg font-semibold text-white">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{item.body}</p>
          </article>
        ))}
      </div>
    </InnerPageLayout>
  );
}
