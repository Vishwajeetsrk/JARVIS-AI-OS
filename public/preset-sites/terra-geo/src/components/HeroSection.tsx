import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { HERO_VIDEO } from "../constants";
import BuilderSelectionBox from "./BuilderSelectionBox";

export default function HeroSection() {
  return (
    <section id="home" className="flex min-h-screen flex-col bg-background">
      <div className="flex flex-1 flex-col items-center justify-center px-4 pt-8">
        <div
          className="animate-fade-in-up mt-10 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50/50 px-3 py-1.5"
          style={{ animationDelay: "80ms" }}
        >
          <span aria-hidden>🏆</span>
          <span
            className="text-[10px] font-medium uppercase tracking-wider text-red-400"
            data-editable
          >
            Product Hunt
          </span>
          <span className="text-sm font-semibold text-red-500" data-editable>
            #1 Product of the Day
          </span>
        </div>

        <h1
          className="animate-fade-in-up mt-8 text-center text-5xl font-medium text-primary md:text-7xl"
          style={{ letterSpacing: "-0.2em", animationDelay: "160ms" }}
        >
          <span className="block" data-editable>
            The ultimate geo
          </span>
          <span className="mt-1 block">
            <span data-editable>map </span>
            <span className="relative inline-block">
              <span className="terra-builder-gradient relative z-10" data-editable>
                builder
              </span>
              <BuilderSelectionBox />
            </span>
          </span>
        </h1>

        <p
          className="animate-fade-in-up mt-8 max-w-lg text-center text-base text-muted-foreground md:text-lg"
          style={{ animationDelay: "240ms" }}
          data-editable
        >
          Terra is how teams build maps and
          <br />
          run spatial intelligence together.
          <br />
          Design, collaborate, share — all in one place.
        </p>

        <PresetNavLink
          target={{ kind: "route", path: "contact" }}
          className="animate-fade-in-up mt-8 rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
          style={{ animationDelay: "320ms" }}
          data-editable
        >
          Start building free
        </PresetNavLink>

        <div
          className="animate-fade-in-up mt-12 w-full max-w-5xl overflow-hidden rounded-xl"
          style={{ animationDelay: "400ms" }}
        >
          <video
            src={HERO_VIDEO}
            autoPlay
            loop
            muted
            playsInline
            className="aspect-video w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
