import { PresetSiteSections } from "../../../_shared/components/PresetSiteSections";

export function AboutPage() {
  return (
    <>
      <section className="min-h-[50vh] scroll-mt-24 border-t border-white/10 bg-black px-6 py-28 md:px-12">
        <h1 className="font-body text-xs uppercase tracking-[0.2em] text-white/50">
          About Wanderful
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80">
          We build borderless travel tools for people who plan by instinct—not spreadsheets.
        </p>
      </section>
      <PresetSiteSections theme="dark" brand="Wanderful" />
    </>
  );
}
