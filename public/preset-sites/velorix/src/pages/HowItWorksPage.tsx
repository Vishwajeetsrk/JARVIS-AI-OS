import InnerPageLayout from "../components/InnerPageLayout";

const STEPS = [
  {
    step: "01",
    title: "Connect",
    detail: "Link CRM, billing, inbox, and warehouse tools in minutes.",
  },
  {
    step: "02",
    title: "Define rituals",
    detail: "Map recurring workflows with plain-language rules and owners.",
  },
  {
    step: "03",
    title: "Automate",
    detail: "Velorix executes, logs, and surfaces exceptions for human review.",
  },
  {
    step: "04",
    title: "Optimize",
    detail: "Insights highlight bottlenecks and recommend calmer paths forward.",
  },
];

export default function HowItWorksPage() {
  return (
    <InnerPageLayout
      eyebrow="How it works"
      title="From chaos to repeatable rhythm"
      description="Adopt automation in four clear phases—no rip-and-replace, no six-month integration projects."
    >
      <ol className="space-y-4">
        {STEPS.map((item) => (
          <li
            key={item.step}
            className="flex gap-6 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5"
          >
            <span className="text-sm font-semibold text-[#FF4444]">{item.step}</span>
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/55">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </InnerPageLayout>
  );
}
