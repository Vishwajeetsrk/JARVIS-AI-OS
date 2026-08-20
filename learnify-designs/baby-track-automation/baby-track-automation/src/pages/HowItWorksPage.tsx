import InnerPageLayout from "../components/InnerPageLayout";

const STEPS = [
  {
    step: "01",
    title: "Connect",
    body: "Link CRM, calendar, billing, and ops tools in minutes with guided OAuth flows.",
  },
  {
    step: "02",
    title: "Define",
    body: "Map rituals—standups, renewals, handoffs—with visual triggers and approval gates.",
  },
  {
    step: "03",
    title: "Run",
    body: "Baby Track executes routines with logs, retries, and human-in-the-loop checkpoints.",
  },
];

export default function HowItWorksPage() {
  return (
    <InnerPageLayout
      eyebrow="How it works"
      title="From chaos to calm in three moves"
      description="Operators configure once; the platform keeps daily rhythm without spreadsheet glue."
    >
      <ol className="space-y-6">
        {STEPS.map((item) => (
          <li
            key={item.step}
            className="flex gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6"
          >
            <span className="font-italiana text-3xl text-[#FF0000]">{item.step}</span>
            <div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-white/60">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </InnerPageLayout>
  );
}
