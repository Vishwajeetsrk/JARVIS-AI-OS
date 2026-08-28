import InnerPageLayout from "../components/InnerPageLayout";

export default function InsightsPage() {
  return (
    <InnerPageLayout
      eyebrow="Insights"
      title="See what automation actually saves"
      description="Dashboards track cycle time, error rates, and capacity reclaimed—so leaders prove ROI without spreadsheet archaeology."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Hours returned / week", value: "42" },
          { label: "Tasks auto-resolved", value: "89%" },
          { label: "Mean time to calm", value: "3.2d" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center"
          >
            <p className="text-3xl font-semibold text-[#FF4444]">{stat.value}</p>
            <p className="mt-2 text-xs uppercase tracking-wider text-white/50">{stat.label}</p>
          </div>
        ))}
      </div>
    </InnerPageLayout>
  );
}
