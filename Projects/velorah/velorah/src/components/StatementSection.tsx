import { STATS, VIDEOS } from "../constants";
import { HlsVideo } from "./HlsVideo";

export function StatementSection() {
  return (
    <section
      id="statement"
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6"
    >
      <HlsVideo src={VIDEOS.statementHls} />
      <div className="relative z-10 flex max-w-5xl flex-col items-center text-center">
        <p
          className="mb-6 text-xs uppercase tracking-[0.3em] text-muted-foreground sm:text-sm"
          data-editable
        >
          Intelligent Companion
        </p>
        <h2
          className="font-heading text-4xl leading-[1.05] tracking-[-1.5px] text-foreground sm:text-6xl md:text-7xl"
          data-editable
        >
          Adventure inspired.
          <br />
          App driven.
        </h2>
        <p
          className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          data-editable
        >
          One app to control climate, lighting, navigation, and energy. Monitor every system in real
          time, automate your routines, and let Velorah learn how you live on the road.
        </p>
        <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-12">
          {STATS.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center gap-2">
              <span
                className="font-heading text-3xl font-light text-foreground sm:text-4xl"
                data-editable
              >
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground sm:text-sm" data-editable>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="liquid-glass mt-12 rounded-full px-10 py-4 text-sm text-foreground transition-transform hover:scale-[1.03]"
          data-editable
        >
          Discover the App
        </button>
      </div>
    </section>
  );
}
