import { FadeUp } from "./FadeUp";
import { MIcon } from "./MIcon";
import { PrimaryButton } from "./PrimaryButton";
import { scrollToSection } from "../lib/scroll";

const FEATURES = [
  {
    icon: "auto_fix_high",
    title: "Prompt to pixels",
    body: "Describe screens in plain language and get editable React + Tailwind output.",
  },
  {
    icon: "layers",
    title: "Live preview",
    body: "Watch layouts update in real time with crossfaded preview video.",
  },
  {
    icon: "palette",
    title: "Glass system",
    body: "Liquid-glass components, serif display type, and motion presets included.",
  },
];

const PLANS = [
  { name: "Starter", price: "$0", detail: "3 projects, community support" },
  { name: "Pro", price: "$29", detail: "Unlimited exports, priority render" },
  { name: "Team", price: "$79", detail: "Shared libraries, SSO, audit logs" },
];

export function BodySections() {
  return (
    <>
      <section id="about" className="scroll-mt-24 border-t border-white/10 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300/80"
              data-editable
            >
              About
            </p>
            <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl" data-editable>
              Built for product teams who ship fast
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/55" data-editable>
              UI Rocket combines generative layout, design tokens, and scroll-native motion so you
              can go from idea to landing page without leaving the canvas.
            </p>
          </FadeUp>
        </div>
      </section>

      <section id="features" className="scroll-mt-24 border-t border-white/10 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeUp className="text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300/80"
              data-editable
            >
              Features
            </p>
            <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl" data-editable>
              Everything in one rocket
            </h2>
          </FadeUp>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FEATURES.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.08}>
                <article className="liquid-glass rounded-2xl p-6">
                  <MIcon name={f.icon} className="text-[28px] text-violet-300" />
                  <h3 className="mt-4 text-lg font-semibold text-white" data-editable>
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55" data-editable>
                    {f.body}
                  </p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="scroll-mt-24 border-t border-white/10 px-6 py-24 md:px-12 pb-32"
      >
        <div className="mx-auto max-w-4xl">
          <FadeUp className="text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300/80"
              data-editable
            >
              Pricing
            </p>
            <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl" data-editable>
              Simple plans, no surprises
            </h2>
          </FadeUp>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PLANS.map((plan, i) => (
              <FadeUp key={plan.name} delay={i * 0.08}>
                <article className="liquid-glass-strong flex flex-col rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white" data-editable>
                    {plan.name}
                  </h3>
                  <p className="mt-2 font-serif text-4xl text-violet-200" data-editable>
                    {plan.price}
                  </p>
                  <p className="mt-2 flex-1 text-sm text-white/55" data-editable>
                    {plan.detail}
                  </p>
                  <PrimaryButton className="mt-6 w-full" onClick={() => scrollToSection("pricing")}>
                    Choose {plan.name}
                  </PrimaryButton>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
