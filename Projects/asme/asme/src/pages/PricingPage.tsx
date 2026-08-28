import { PageShell } from "../components/PageShell";

const PLANS = [
  { name: "Explorer", price: "Free", detail: "Newsletter + community access", cta: "Start free" },
  {
    name: "Studio",
    price: "$24/mo",
    detail: "Workshops, archives, and member events",
    cta: "Join Studio",
  },
  {
    name: "Collective",
    price: "Custom",
    detail: "Brand partnerships and research sprints",
    cta: "Talk to us",
  },
] as const;

export function PricingPage() {
  return (
    <PageShell title="Pricing" eyebrow="Plans">
      <p>Choose the level of access that fits how deeply you want to explore with Asme.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <div key={plan.name} className="liquid-glass rounded-3xl p-6 md:p-8">
            <p className="text-xs uppercase tracking-widest text-white/40">{plan.name}</p>
            <p
              className="mt-3 text-3xl text-white"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {plan.price}
            </p>
            <p className="mt-3 text-sm text-white/50">{plan.detail}</p>
            <a
              href="#/contact"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-opacity hover:opacity-85"
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
