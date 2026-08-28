import { routeHref, navigateToRoute } from "../../../_shared/preset-site-routing";
import { PageIntro } from "../components/PageIntro";

const PLANS = [
  {
    name: "Launch",
    price: "$18k / mo",
    features: ["Dedicated partner", "Weekly war-room", "Investor intro pack"],
  },
  {
    name: "Scale",
    price: "$32k / mo",
    features: ["Cross-functional pod", "Regulatory workstream", "BD pipeline support"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Multi-asset portfolio", "Board seat option", "On-site embedding"],
  },
];

export function PricingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Pricing"
        title="Transparent retainers, outcome-aligned"
        description="Monthly engagements with clear deliverables. Pilot sprints available for pre-seed teams."
      />
      <section className="border-t border-foreground/10 px-5 py-16 lg:px-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-[1.5rem] border p-6 lg:rounded-[2rem] ${
                plan.featured ? "border-hero-btn bg-hero-btn/10" : "border-foreground/10"
              }`}
            >
              <h2 className="text-lg font-semibold">{plan.name}</h2>
              <p className="mt-2 text-2xl font-normal">{plan.price}</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-foreground/70">
                {plan.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <a
                href={routeHref("contact")}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToRoute("contact");
                }}
                className="mt-8 inline-flex justify-center rounded-full bg-hero-btn px-5 py-2.5 text-sm font-semibold text-white"
              >
                Request a call
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
