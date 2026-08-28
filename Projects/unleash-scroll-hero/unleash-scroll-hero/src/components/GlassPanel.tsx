import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ABOUT_EYEBROW, MARQUEE_BRANDS } from "../constants";

gsap.registerPlugin(ScrollTrigger);

type GlassPanelProps = {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
};

export function GlassPanel({ scrollContainerRef }: GlassPanelProps) {
  const panelWrapRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const wrap = panelWrapRef.current;
    const panel = panelRef.current;
    if (!container || !wrap || !panel) return;

    const slideSt = ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1.5,
      animation: gsap.fromTo(wrap, { y: "100%" }, { y: "0%", ease: "none" }),
    });

    const onMouseMove = (e: MouseEvent) => {
      const moveX = (e.clientX / window.innerWidth - 0.5) * 2;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(panel, {
        x: moveX * 20,
        y: moveY * 20,
        rotationY: moveX * 4,
        rotationX: -moveY * 4,
        ease: "power3.out",
        duration: 1,
      });
    };
    panel.addEventListener("mousemove", onMouseMove);

    return () => {
      slideSt.kill();
      panel.removeEventListener("mousemove", onMouseMove);
    };
  }, [scrollContainerRef]);

  const marqueeItems = [...MARQUEE_BRANDS, ...MARQUEE_BRANDS, ...MARQUEE_BRANDS, ...MARQUEE_BRANDS];

  return (
    <div
      id="about"
      className="absolute bottom-0 left-0 flex h-screen w-full items-end justify-center px-4 pb-8 md:px-8 scroll-mt-24"
    >
      <div
        ref={panelWrapRef}
        className="pointer-events-auto w-full max-w-[1250px] h-[900px] max-h-[85vh]"
        style={{ perspective: "1000px" }}
      >
        <div
          ref={panelRef}
          className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.16)",
            backdropFilter: "blur(160px)",
            WebkitBackdropFilter: "blur(160px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center md:px-12">
            <p
              className="mb-4 font-serif text-base italic text-white/70 md:mb-6 md:text-lg"
              data-editable
            >
              {ABOUT_EYEBROW}
            </p>
            <h2
              className="mx-auto w-full max-w-[1000px] font-serif text-4xl leading-[1.1] tracking-tight text-white md:text-6xl lg:text-[96px] lg:leading-[92.6px]"
              data-editable
            >
              We transform sterile concrete into thriving <span className="italic">urban</span>{" "}
              jungles. Our innovative designs bring wild <span className="italic">nature</span> back
              to modern cities. Experience the <span className="italic">bloom</span>
            </h2>
          </div>
          <div className="overflow-hidden border-t border-white/10 py-6">
            <div className="flex w-max animate-marquee gap-12 px-6">
              {marqueeItems.map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="font-sans text-sm font-semibold uppercase tracking-widest text-white opacity-40 transition-opacity duration-300 hover:opacity-100"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
