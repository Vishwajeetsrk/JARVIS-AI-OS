import { PageShell } from "../components/PageShell";

const PLANS = [
  { name: "Fixed 30-year", rate: "6.12%", note: "Stable payments for primary residences" },
  { name: "ARM 7/1", rate: "5.48%", note: "Lower intro rate with annual cap protection" },
  {
    name: "Portfolio line",
    rate: "Custom",
    note: "For investors holding multiple Zenith listings",
  },
];

export function MortgagePage() {
  return (
    <PageShell
      title="Mortgage guidance"
      subtitle="Partner lenders, transparent terms, and advisors who align financing with your property goals."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <article key={plan.name} className="bg-white p-8">
            <p className="text-[12px] font-medium uppercase tracking-tight text-[#141414]/40">
              {plan.name}
            </p>
            <p className="mt-3 text-3xl font-medium text-[#141414]">{plan.rate}</p>
            <p className="mt-4 text-[14px] leading-relaxed text-[#A5A5A5]">{plan.note}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
