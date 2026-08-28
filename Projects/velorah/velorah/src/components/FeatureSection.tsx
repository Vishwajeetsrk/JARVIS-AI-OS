import { useMemo, useState } from "react";
import { FEATURE_TABS, VIDEOS } from "../constants";

export function FeatureSection() {
  const [activeTab, setActiveTab] = useState<string>("electric");

  const active = useMemo(
    () => FEATURE_TABS.find((t) => t.id === activeTab) ?? FEATURE_TABS[0],
    [activeTab],
  );

  const progress =
    ((FEATURE_TABS.findIndex((t) => t.id === activeTab) + 1) / FEATURE_TABS.length) * 100;

  return (
    <section id="features" className="bg-[hsl(0,0%,0%)] px-6 py-0 md:px-12">
      <div className="mx-auto grid min-h-[520px] max-w-7xl gap-4 overflow-hidden rounded-2xl md:grid-cols-2">
        <div className="flex flex-col justify-between rounded-2xl bg-card p-10 md:p-14">
          <div>
            <span
              className="mb-8 inline-block h-8 w-8 rounded-full border border-border"
              aria-hidden
            />
            <h3
              className="font-heading mb-6 text-3xl tracking-[-1px] text-foreground sm:text-5xl"
              data-editable
            >
              {active.title}
            </h3>
            <p
              className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base"
              data-editable
            >
              {active.description}
            </p>
          </div>

          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              {FEATURE_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                    activeTab === tab.id
                      ? "border-foreground bg-foreground text-primary-foreground"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                  data-editable
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="mb-6 h-0.5 w-full rounded-full bg-border">
              <div
                className="h-full rounded-full bg-foreground transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <button
              type="button"
              className="liquid-glass rounded-full px-8 py-3 text-sm text-foreground transition-transform hover:scale-[1.03]"
              data-editable
            >
              Explore the Velorah Flow
            </button>
          </div>
        </div>

        <div className="relative min-h-[400px] overflow-hidden rounded-2xl">
          <video
            src={VIDEOS.feature}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
