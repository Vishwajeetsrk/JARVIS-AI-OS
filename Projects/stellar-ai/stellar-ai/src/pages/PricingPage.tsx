import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import SiteLayout from "../components/SiteLayout";

const PLANS = [
  { name: "Starter", price: "$0", detail: "Prototyping & eval suites for small teams" },
  { name: "Pro", price: "$49", detail: "Production deploys, guardrails, multi-region" },
  { name: "Enterprise", price: "Custom", detail: "Dedicated VPC, SOC2, solutions architects" },
] as const;

export default function PricingPage() {
  return (
    <SiteLayout>
      <section className="scroll-mt-24 border-t border-white/5 px-4 py-20 sm:px-8 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-300/80">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Plans for every AI control plane
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PLANS.map((plan) => (
              <article key={plan.name} className="liquid-glass rounded-3xl p-8">
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 font-display text-3xl text-white">{plan.price}</p>
                <p className="mt-4 text-sm text-white/55">{plan.detail}</p>
              </article>
            ))}
          </div>
          <PresetNavLink
            target={{ kind: "route", path: "contact" }}
            className="mt-10 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
          >
            Start free trial
          </PresetNavLink>
        </div>
      </section>
    </SiteLayout>
  );
}
