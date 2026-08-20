import { MARQUEE_LOGOS } from "../constants";

function MarqueeRow({ speedClass }: { speedClass: "marquee-track-15" | "marquee-track-30" }) {
  return (
    <div className={`${speedClass} flex w-max shrink-0 items-center`}>
      {MARQUEE_LOGOS.map((name) => (
        <span
          key={name}
          className="mx-8 shrink-0 text-lg font-semibold tracking-tight text-heading/45 md:text-xl"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

export function LogoMarquee() {
  return (
    <div className="relative z-10 w-full space-y-3 border-t border-heading/10 bg-canvas/80 py-4 backdrop-blur-sm">
      <div className="overflow-hidden opacity-90">
        <div className="flex w-max">
          <MarqueeRow speedClass="marquee-track-15" />
          <div aria-hidden>
            <MarqueeRow speedClass="marquee-track-15" />
          </div>
        </div>
      </div>
      <div className="overflow-hidden opacity-70">
        <div className="flex w-max">
          <MarqueeRow speedClass="marquee-track-30" />
          <div aria-hidden>
            <MarqueeRow speedClass="marquee-track-30" />
          </div>
        </div>
      </div>
    </div>
  );
}
