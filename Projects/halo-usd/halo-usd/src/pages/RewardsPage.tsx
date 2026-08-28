import PillButton from "../components/PillButton";
import Navbar from "../components/Navbar";

export default function RewardsPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="relative pt-20">
        <Navbar />
      </div>
      <section className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto max-w-[88rem]">
          <h2
            className="mb-8 text-4xl font-semibold text-black md:text-5xl"
            style={{ letterSpacing: "-0.03em" }}
            data-editable
            data-preset-text="rewards-headline"
          >
            Meet USD Halo rewards
          </h2>
          <p
            className="max-w-2xl text-2xl leading-relaxed text-black/70 md:text-3xl"
            data-editable
            data-preset-text="rewards-body"
          >
            USD Halo is a reward-earning dollar coin that lets your savings grow while remaining
            tied to the U.S. dollar—always fluid, always pegged, fully automated in the background.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl bg-[#2B2644] p-7 text-white">
              <h3
                className="text-2xl font-semibold"
                data-editable
                data-preset-text="rewards-yield-title"
              >
                Passive yield
              </h3>
              <p className="mt-4 text-white/60" data-editable data-preset-text="rewards-yield-body">
                Top-performing DeFi strategies routed automatically.
              </p>
            </article>
            <article className="rounded-2xl bg-[#2B2644] p-7 text-white">
              <h3
                className="text-2xl font-semibold"
                data-editable
                data-preset-text="rewards-lockups-title"
              >
                No lockups
              </h3>
              <p
                className="mt-4 text-white/60"
                data-editable
                data-preset-text="rewards-lockups-body"
              >
                On-demand access with dollar anchoring intact.
              </p>
            </article>
          </div>
          <div className="mt-10">
            <PillButton size="base" route="wallet" presetText="rewards-cta">
              Open Wallet
            </PillButton>
          </div>
        </div>
      </section>
    </div>
  );
}
