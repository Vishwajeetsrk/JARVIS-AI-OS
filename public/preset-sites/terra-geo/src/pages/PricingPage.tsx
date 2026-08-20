import { PresetNavLink } from "../../../_shared/components/PresetNavLink";

const PLANS = [
  { name: "Starter", price: "$0", detail: "Personal maps, 3 collaborators, public share links" },
  { name: "Team", price: "$29", detail: "Unlimited layers, SSO, version history, API access" },
  {
    name: "Enterprise",
    price: "Custom",
    detail: "Dedicated tiles, VPC deploy, solutions architects",
  },
] as const;

export default function PricingPage({ embedded }: { embedded?: boolean }) {
  const content = (
    <section
      id="pricing"
      className="scroll-mt-24 border-t border-border px-4 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary/80">Pricing</p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Plans for every map team
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className="rounded-2xl border border-border bg-background p-8 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
              <p className="mt-2 text-3xl font-medium text-primary">{plan.price}</p>
              <p className="mt-4 text-sm text-muted-foreground">{plan.detail}</p>
            </article>
          ))}
        </div>
        <PresetNavLink
          target={{ kind: "route", path: "contact" }}
          className="mt-10 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
          data-editable
        >
          Start building free
        </PresetNavLink>
      </div>
    </section>
  );

  if (embedded) return content;

  return <>{content}</>;
}
