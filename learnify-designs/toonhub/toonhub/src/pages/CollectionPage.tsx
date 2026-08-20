import { useCallback, useEffect, useState, type CSSProperties } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ToonLink } from "../components/ToonLink";
import { ToonFooter, ToonNav } from "../components/ToonNav";

const FIGMA_BASE =
  "https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc";

const IMAGES = [
  { src: `${FIGMA_BASE}/1.02464a56.png`, bg: "#F4845F", panel: "#F79B7F" },
  { src: `${FIGMA_BASE}/2.b977faab.png`, bg: "#6BBF7A", panel: "#85CC92" },
  { src: `${FIGMA_BASE}/3.4df853b4.png`, bg: "#E882B4", panel: "#ED9DC4" },
  { src: `${FIGMA_BASE}/4.4457fbce.png`, bg: "#6EB5FF", panel: "#8DC4FF" },
] as const;

const PICSUM_FALLBACK = [
  "https://picsum.photos/seed/toonhub1/520/780",
  "https://picsum.photos/seed/toonhub2/520/780",
  "https://picsum.photos/seed/toonhub3/520/780",
  "https://picsum.photos/seed/toonhub4/520/780",
];

const ANIM_MS = 650;
const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";

const TESTIMONIAL =
  "The artwork is stunning, shipped fully prepared. The finish is a vision, the 3D craft is flawless. Many thanks! Wishing you the win. Order now.";

type Role = "center" | "left" | "right" | "back";

function getRole(imageIndex: number, activeIndex: number): Role {
  if (imageIndex === activeIndex) return "center";
  if (imageIndex === (activeIndex + 3) % 4) return "left";
  if (imageIndex === (activeIndex + 1) % 4) return "right";
  return "back";
}

function getItemStyle(role: Role, isMobile: boolean): CSSProperties {
  const base: CSSProperties = {
    position: "absolute",
    aspectRatio: "0.6 / 1",
    transform: "translateX(-50%)",
    transition: `transform ${ANIM_MS}ms ${EASE}, filter ${ANIM_MS}ms ${EASE}, opacity ${ANIM_MS}ms ${EASE}, left ${ANIM_MS}ms ${EASE}`,
    willChange: "transform, filter, opacity",
  };
  switch (role) {
    case "center":
      return {
        ...base,
        transform: `translateX(-50%) scale(${isMobile ? 1.25 : 1.68})`,
        filter: "none",
        opacity: 1,
        zIndex: 20,
        left: "50%",
        height: isMobile ? "60%" : "92%",
        bottom: isMobile ? "22%" : 0,
      };
    case "left":
      return {
        ...base,
        transform: "translateX(-50%) scale(1)",
        filter: "blur(2px)",
        opacity: 0.85,
        zIndex: 10,
        left: isMobile ? "20%" : "30%",
        height: isMobile ? "16%" : "28%",
        bottom: isMobile ? "32%" : "12%",
      };
    case "right":
      return {
        ...base,
        transform: "translateX(-50%) scale(1)",
        filter: "blur(2px)",
        opacity: 0.85,
        zIndex: 10,
        left: isMobile ? "80%" : "70%",
        height: isMobile ? "16%" : "28%",
        bottom: isMobile ? "32%" : "12%",
      };
    default:
      return {
        ...base,
        transform: "translateX(-50%) scale(1)",
        filter: "blur(4px)",
        opacity: 1,
        zIndex: 5,
        left: "50%",
        height: isMobile ? "13%" : "22%",
        bottom: isMobile ? "32%" : "12%",
      };
  }
}

export function CollectionPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [imgSrc, setImgSrc] = useState<string[]>(IMAGES.map((i) => i.src));

  useEffect(() => {
    IMAGES.forEach((item, i) => {
      const img = new Image();
      img.onload = () =>
        setImgSrc((prev) => {
          const n = [...prev];
          n[i] = item.src;
          return n;
        });
      img.onerror = () =>
        setImgSrc((prev) => {
          const n = [...prev];
          n[i] = PICSUM_FALLBACK[i];
          return n;
        });
      img.src = item.src;
    });
    const onResize = () => setIsMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navigate = useCallback(
    (dir: "next" | "prev") => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveIndex((prev) => (dir === "next" ? (prev + 1) % 4 : (prev + 3) % 4));
      window.setTimeout(() => setIsAnimating(false), ANIM_MS);
    },
    [isAnimating],
  );

  const slide = IMAGES[activeIndex];

  return (
    <div
      id="collection"
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: slide.bg,
        transition: `background-color ${ANIM_MS}ms ${EASE}`,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <section className="relative w-full" style={{ height: "100vh", overflow: "hidden" }}>
        <ToonNav panelColor={slide.panel} variant="hero" />

        <div className="absolute inset-0 grain-overlay pointer-events-none z-50" aria-hidden />

        <p
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none font-display uppercase z-[2] whitespace-nowrap"
          style={{
            top: "18%",
            fontSize: "clamp(90px, 28vw, 380px)",
            fontWeight: 900,
            color: "white",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          3D SHAPE
        </p>

        <div className="absolute inset-0 z-[3]" aria-hidden>
          {IMAGES.map((item, index) => {
            const role = getRole(index, activeIndex);
            return (
              <div key={item.bg} style={getItemStyle(role, isMobile)}>
                <img
                  src={imgSrc[index]}
                  alt=""
                  draggable={false}
                  className="w-full h-full"
                  style={{ objectFit: "contain", objectPosition: "bottom center" }}
                />
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-6 left-4 sm:bottom-20 sm:left-24 z-[60] max-w-[320px]">
          <p
            className="font-bold uppercase text-white mb-2 sm:mb-3 text-base sm:text-[22px]"
            style={{ letterSpacing: "0.02em", opacity: 0.95 }}
          >
            TOONHUB FIGURINES
          </p>
          <p
            className="hidden sm:block text-xs sm:text-sm text-white leading-relaxed mb-4 sm:mb-5 max-w-[280px]"
            style={{ opacity: 0.85, lineHeight: 1.6 }}
          >
            {TESTIMONIAL}
          </p>
          <div className="flex gap-3">
            {(["prev", "next"] as const).map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={() => navigate(dir)}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-2 border-white text-white bg-transparent hover:scale-[1.08] hover:bg-white/12 transition-[transform,background-color] duration-150"
                aria-label={dir === "prev" ? "Previous figurine" : "Next figurine"}
              >
                {dir === "prev" ? (
                  <ArrowLeft size={26} strokeWidth={2.25} />
                ) : (
                  <ArrowRight size={26} strokeWidth={2.25} />
                )}
              </button>
            ))}
          </div>
        </div>

        <ToonLink
          path="shop"
          className="absolute bottom-6 right-4 sm:bottom-20 sm:right-10 z-[60] flex items-center gap-2 font-display font-normal text-white uppercase no-underline opacity-95 hover:opacity-100 transition-opacity duration-200"
          style={{
            fontSize: "clamp(20px, 4vw, 56px)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          Discover it
          <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8" strokeWidth={2.25} />
        </ToonLink>
      </section>

      <ToonFooter panelColor={slide.panel} />
    </div>
  );
}
