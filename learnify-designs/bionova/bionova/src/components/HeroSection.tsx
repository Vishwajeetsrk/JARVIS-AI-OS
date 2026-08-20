import Hls from "hls.js";
import { ArrowUpRight, Play } from "lucide-react";
import { useEffect, useRef } from "react";
import { routeHref, navigateToRoute } from "../../../_shared/preset-site-routing";
import { HERO_IMAGE_PILL, HLS_STREAMS } from "../constants";

function CircleArrowButton() {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background text-foreground">
      <ArrowUpRight size={18} />
    </span>
  );
}

export default function HeroSection() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const locationsVideoRef = useRef<HTMLVideoElement>(null);
  const scientistsVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const bindings = [
      { ref: heroVideoRef, src: HLS_STREAMS.heroCard },
      { ref: locationsVideoRef, src: HLS_STREAMS.locations },
      { ref: scientistsVideoRef, src: HLS_STREAMS.scientists },
    ];
    const instances: Hls[] = [];

    for (const { ref, src } of bindings) {
      const video = ref.current;
      if (!video) continue;

      if (Hls.isSupported()) {
        const hls = new Hls({ enableWorker: true });
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          void video.play().catch(() => undefined);
        });
        instances.push(hls);
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
        void video.play().catch(() => undefined);
      }
    }

    return () => {
      for (const hls of instances) hls.destroy();
    };
  }, []);

  const contactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateToRoute("contact");
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col lg:h-screen lg:overflow-hidden"
    >
      <div className="flex flex-1 flex-col px-5 pb-8 lg:px-16 lg:pb-[82px]">
        <div className="grid flex-1 items-stretch gap-8 lg:grid-cols-2">
          <div className="animate-fade-up flex flex-col justify-between">
            <div>
              <h1 className="font-heading text-[2rem] font-normal leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem] xl:text-7xl">
                <span className="inline-flex flex-wrap items-center gap-2">
                  <span
                    className="inline-block h-10 w-20 shrink-0 rounded-full bg-cover sm:h-12 sm:w-24"
                    style={{ backgroundImage: `url(${HERO_IMAGE_PILL})` }}
                    aria-hidden
                  />
                  World-class
                </span>
                <span className="block">consultants that</span>
                <span className="flex flex-wrap items-center gap-2">
                  empower
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-4 py-1.5 text-sm font-medium sm:text-base"
                  >
                    <Play size={14} className="fill-foreground" />
                    How do we work
                  </button>
                </span>
                <span className="block">biotech leaders</span>
              </h1>

              <div className="flex flex-wrap items-center gap-4 pt-6">
                <a
                  href={routeHref("contact")}
                  onClick={contactClick}
                  className="inline-flex items-center gap-2 rounded-full bg-hero-btn px-6 py-3 text-sm font-semibold text-white"
                >
                  Contact us
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href={routeHref("contact")}
                  onClick={contactClick}
                  className="text-sm font-semibold underline underline-offset-4"
                >
                  Request a call
                </a>
              </div>
            </div>

            <div className="mt-12 hidden max-w-md lg:block">
              <p className="text-sm leading-relaxed text-foreground/70">
                BIONOVA partners with founders and R&amp;D leaders to translate breakthrough science
                into fundable bioventures—with strategy, regulatory fluency, and capital readiness.
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-2xl font-bold tracking-tight text-foreground/80">
                <span>Headway</span>
                <span>brightline</span>
                <span>hazel</span>
                <span>G&amp;STC</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-up-delay flex flex-col gap-4">
            <div className="relative flex min-h-[200px] flex-1 overflow-hidden rounded-[1.5rem] bg-black lg:rounded-[2.5rem]">
              <video
                ref={heroVideoRef}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden
              />
              <div className="relative z-10 flex h-full flex-col justify-between p-5 lg:p-8">
                <h2 className="max-w-sm text-2xl font-normal text-white lg:text-3xl">
                  If you&apos;re ready to build your bioventure, let&apos;s get in touch.
                </h2>
                <div className="flex items-end justify-between gap-4">
                  <p className="max-w-xs text-sm text-white/85">
                    From IND-enabling strategy to Series A narrative—we embed with your team.
                  </p>
                  <CircleArrowButton />
                </div>
              </div>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-3 lg:gap-4">
              <div className="relative flex min-h-[180px] overflow-hidden rounded-[1.5rem] bg-black p-5 lg:rounded-[2.5rem] lg:p-8">
                <video
                  ref={locationsVideoRef}
                  className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-[1.5] object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-hidden
                />
                <div className="relative z-10 flex h-full w-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-foreground">
                      locations
                    </span>
                    <CircleArrowButton />
                  </div>
                  <div>
                    <h3 className="text-lg font-normal text-white lg:text-2xl">
                      United bio-entrepreneurs
                    </h3>
                    <p className="mt-2 text-xs text-white/80 lg:text-sm">
                      Global hubs in Boston, Basel, and Singapore.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex min-h-[180px] overflow-hidden rounded-[1.5rem] bg-black p-5 lg:rounded-[2.5rem] lg:p-8">
                <video
                  ref={scientistsVideoRef}
                  className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-[2.8] object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-hidden
                />
                <div className="relative z-10 flex h-full w-full flex-col justify-between">
                  <span className="w-fit rounded-full bg-background px-3 py-1 text-xs font-semibold text-foreground">
                    scientists
                  </span>
                  <div>
                    <p className="text-4xl font-normal text-white lg:text-7xl">34</p>
                    <p className="mt-2 text-xs text-white/80 lg:text-sm">
                      Principal scientists across therapeutic modalities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
