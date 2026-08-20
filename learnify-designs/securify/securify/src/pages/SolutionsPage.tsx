import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { InnerPageShell } from "../components/InnerPageShell";

const TIERS = [
  { name: "launch", price: "free", seats: "up to 10 builders" },
  { name: "scale", price: "$49/mo", seats: "unlimited workspaces" },
  { name: "enterprise", price: "custom", seats: "dedicated region + soc2 pack" },
] as const;

export function SolutionsPage() {
  return (
    <InnerPageShell title="solutions" eyebrow="plans">
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-white/70">
        pick the coverage that matches your stage—from seed-stage vaults to regulated enterprise
        fleets with private link and hardware key support.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {TIERS.map((tier) => (
          <article
            key={tier.name}
            className="flex flex-col rounded-2xl border border-white/10 bg-neutral-900/60 p-6"
          >
            <h2 className="text-xl font-medium lowercase">{tier.name}</h2>
            <p className="mt-2 text-3xl font-medium tracking-tight">{tier.price}</p>
            <p className="mt-3 flex-1 text-sm text-white/60">{tier.seats}</p>
            <PresetNavLink
              target={{ kind: "route", path: "support" }}
              className="mt-6 block rounded-full bg-white py-3 text-center text-sm text-black transition-colors hover:bg-neutral-200"
            >
              get started
            </PresetNavLink>
          </article>
        ))}
      </div>
    </InnerPageShell>
  );
}
