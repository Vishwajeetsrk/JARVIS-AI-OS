import { PresetNavLink } from "../../../_shared/components/PresetNavLink";

export function PlansPage() {
  const plans = [
    { name: "Personal", price: "Free", detail: "Unlimited passwords on one device." },
    { name: "Family", price: "$4.99/mo", detail: "Shared vaults for up to six members." },
    { name: "Business", price: "$12/user", detail: "SSO, audit logs, and priority support." },
  ];

  return (
    <main className="relative z-10 mx-auto max-w-[1280px] px-5 py-16 sm:px-8">
      <section id="plans" className="scroll-mt-24">
        <h1
          className="mb-4"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
        >
          Plans
        </h1>
        <p className="mb-10 max-w-xl opacity-80">
          Pick the VaultShield tier that matches how you work—every plan includes end-to-end
          encryption.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-2xl border border-[#192837]/10 bg-white/60 p-6 backdrop-blur-sm"
            >
              <h2 className="text-lg font-semibold">{plan.name}</h2>
              <p className="mt-2 text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                {plan.price}
              </p>
              <p className="mt-3 text-sm opacity-80">{plan.detail}</p>
              <PresetNavLink
                target={{ kind: "route", path: "install" }}
                className="mt-6 block w-full rounded-full px-5 py-2.5 text-center text-sm font-medium text-white"
                style={{ background: "var(--color-accent)" }}
              >
                Choose {plan.name}
              </PresetNavLink>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
