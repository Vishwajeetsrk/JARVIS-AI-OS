import { INFO_CARD_IMAGE } from "../constants";
import PillButton from "./PillButton";

export default function InfoSection() {
  return (
    <section id="ecosystem" className="scroll-mt-24 bg-[#F5F5F5] px-6 py-24">
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-16 grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div>
            <h2
              className="mb-8 text-4xl leading-tight font-semibold text-black md:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
              data-editable
              data-preset-text="info-headline"
            >
              Meet USD Halo.
            </h2>
            <PillButton size="base" section="rewards" presetText="info-cta">
              Discover it
            </PillButton>
          </div>
          <p
            className="text-2xl leading-relaxed text-black/70 md:text-3xl"
            data-editable
            data-preset-text="info-body"
          >
            USD Halo is a reward-earning dollar coin that lets your savings grow while remaining
            tied to the U.S. dollar.
          </p>
        </div>

        <div
          id="rewards"
          className="scroll-mt-24 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div
            className="flex min-h-80 flex-col justify-between rounded-2xl p-7 lg:col-span-2"
            style={{
              backgroundImage: `url(${INFO_CARD_IMAGE})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3
              className="text-2xl leading-snug font-semibold text-black"
              style={{ letterSpacing: "-0.02em" }}
              data-editable
              data-preset-text="card-savings-title"
            >
              Savings that bloom
            </h3>
            <p
              className="max-w-xs text-base text-black/70"
              data-editable
              data-preset-text="card-savings-body"
            >
              Gain steady returns as your dollar tokens are routed into top-performing DeFi
              strategies.
            </p>
          </div>

          <div className="flex min-h-80 flex-col justify-between rounded-2xl bg-[#2B2644] p-7">
            <h3
              className="text-2xl leading-snug font-semibold text-white"
              style={{ letterSpacing: "-0.02em" }}
              data-editable
              data-preset-text="card-fluid-title"
            >
              Always fluid,
              <br />
              always pegged.
            </h3>
            <p className="text-base text-white/60" data-editable data-preset-text="card-fluid-body">
              Keep fully dollar-anchored with on-demand access to funds — no lockups or waits.
            </p>
          </div>

          <div className="flex min-h-80 flex-col justify-between rounded-2xl bg-[#2B2644] p-7">
            <h3
              className="text-2xl leading-snug font-semibold text-white"
              style={{ letterSpacing: "-0.02em" }}
              data-editable
              data-preset-text="card-auto-title"
            >
              Fully
              <br />
              automated
            </h3>
            <p className="text-base text-white/60" data-editable data-preset-text="card-auto-body">
              Skip the task of tuning positions yourself. USD Halo runs in the background for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
