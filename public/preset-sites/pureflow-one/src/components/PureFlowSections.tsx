import type { ReactNode } from "react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-slate-200 bg-white px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500" data-editable>
          {eyebrow}
        </p>
        <h2
          className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl"
          data-editable
        >
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export function PureFlowSections() {
  return (
    <>
      <Section id="real-stories" eyebrow="Real Stories" title="Everyday air, elevated">
        <p className="max-w-2xl text-base leading-relaxed text-slate-600" data-editable>
          From studio apartments to cross-country flights, PureFlow One adapts to your rhythm—quiet
          filtration, all-day comfort, and a design that disappears into your space.
        </p>
      </Section>

      <Section id="science" eyebrow="Science" title="HEPA-grade filtration, whisper quiet">
        <p className="max-w-2xl text-base leading-relaxed text-slate-600" data-editable>
          Multi-stage capture removes fine particles while maintaining low turbulence. Independent
          lab tests show consistent performance across temperature and humidity ranges.
        </p>
      </Section>

      <Section id="plans" eyebrow="Plans" title="Choose your flow">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { name: "Solo", price: "$149", desc: "Desk and bedside coverage." },
            { name: "Home", price: "$279", desc: "Whole-room purification." },
            { name: "Travel", price: "$199", desc: "Compact carry case included." },
          ].map((plan) => (
            <div key={plan.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-medium text-slate-900" data-editable>
                {plan.name}
              </h3>
              <p className="mt-2 text-2xl font-semibold text-slate-900" data-editable>
                {plan.price}
              </p>
              <p className="mt-2 text-sm text-slate-600" data-editable>
                {plan.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Reach Us" title="Reserve yours today">
        <p className="max-w-2xl text-base leading-relaxed text-slate-600" data-editable>
          hello@pureflow.one · Ships in 3–5 business days. 30-day satisfaction guarantee.
        </p>
        <PresetNavLink
          target={{ kind: "section", id: "device" }}
          className="mt-6 inline-flex rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          data-editable
        >
          Back to device
        </PresetNavLink>
      </Section>
    </>
  );
}
