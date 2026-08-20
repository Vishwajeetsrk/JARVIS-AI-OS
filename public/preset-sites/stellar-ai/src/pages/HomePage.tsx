import LogoRow from "../components/LogoRow";
import PageSections from "../components/PageSections";
import SiteLayout from "../components/SiteLayout";
import TabbedHero from "../components/TabbedHero";
import Footer from "../components/Footer";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";

const PLANS = [
  { name: "Starter", price: "$0", detail: "Prototyping & eval suites for small teams" },
  { name: "Pro", price: "$49", detail: "Production deploys, guardrails, multi-region" },
  { name: "Enterprise", price: "Custom", detail: "Dedicated VPC, SOC2, solutions architects" },
] as const;

export default function HomePage() {
  return (
    <SiteLayout>
      <TabbedHero />
      <LogoRow />
      <PageSections />
      <section
        id="pricing"
        className="scroll-mt-24 border-t border-white/5 px-4 py-20 sm:px-8 md:px-12 md:py-28"
      >
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
          <a
            href="#contact"
            className="mt-10 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
          >
            Start free trial
          </a>
        </div>
      </section>
      <section
        id="contact"
        className="scroll-mt-24 border-t border-white/5 px-4 py-20 sm:px-8 md:px-12 md:py-28"
      >
        <div className="mx-auto max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-300/80">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">
            Talk with Stellar.ai
          </h2>
          <p className="mt-4 text-white/55">
            hello@stellar.ai · Solutions team responds within one business day.
          </p>
          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Work email"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-violet-400/50"
            />
            <textarea
              rows={4}
              placeholder="Tell us about your AI stack…"
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-violet-400/50"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              Request demo
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </SiteLayout>
  );
}
