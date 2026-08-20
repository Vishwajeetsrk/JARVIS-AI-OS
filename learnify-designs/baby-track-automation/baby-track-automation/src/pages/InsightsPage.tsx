import InnerPageLayout from "../components/InnerPageLayout";

const METRICS = [
  { label: "Hours reclaimed / week", value: "12.4" },
  { label: "Tasks automated", value: "2.8k" },
  { label: "Error rate", value: "0.3%" },
];

export default function InsightsPage() {
  return (
    <InnerPageLayout
      eyebrow="Insights"
      title="Visibility without another dashboard"
      description="Every automation emits structured events—latency, owner, outcome—so leaders audit flow health in one feed."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {METRICS.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-white/10 bg-[#FF0000]/10 p-6 text-center"
          >
            <p className="font-italiana text-4xl text-white">{m.value}</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-white/60">{m.label}</p>
          </div>
        ))}
      </div>
    </InnerPageLayout>
  );
}
