import { useEffect, useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  handlePresetNavClick,
  resolveNavTarget,
  routeHref,
} from "../../../_shared/preset-site-routing";
import { GEM_CARD_VIDEO, HERO_BG_VIDEO, goldEase } from "../constants";

function HeroContent() {
  return (
    <div
      id="topContent"
      className="flex flex-col items-center justify-center transform -translate-y-[40px] md:-translate-y-[20px] px-6"
    >
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.1, ease: goldEase }}
          className="font-light leading-[1.05] tracking-[-0.04em] text-[clamp(42px,6vw,80px)]"
        >
          Discover the beauty
        </motion.h1>
      </div>
      <div className="mb-8 overflow-hidden">
        <motion.h1
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.1, delay: 0.08, ease: goldEase }}
          className="font-light leading-[1.05] tracking-[-0.04em] text-[clamp(42px,6vw,80px)]"
        >
          of the world around
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.55, ease: goldEase }}
        className="text-[clamp(14px,1vw,16px)] leading-[1.7] max-w-[550px] mx-auto opacity-80 font-light tracking-wide"
      >
        Escape the ordinary and find inspiration in the most breathtaking corners of the globe. We
        curate unique travel experiences tailored to your rhythm and spirit.
      </motion.p>
    </div>
  );
}

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const play = () => {
      v.muted = true;
      v.play().catch(() => {});
    };
    play();
    v.addEventListener("loadeddata", play);
    return () => v.removeEventListener("loadeddata", play);
  }, []);

  const exploreClick = (e: MouseEvent<HTMLAnchorElement>) => {
    handlePresetNavClick(e, resolveNavTarget("", { route: "destinations" }));
  };

  return (
    <div className="bg-[#f3ebe4] selection:bg-black selection:text-white min-h-screen overflow-hidden font-sans">
      <main className="hero-container">
        <div className="left-bg" />
        <div className="right-bg">
          <div className="bg-image-wrapper">
            <motion.div
              className="relative w-full h-full"
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.2, ease: goldEase }}
            >
              <video
                ref={videoRef}
                src={HERO_BG_VIDEO}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover object-left"
              />
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-black/20 md:bg-transparent" />
          <motion.div
            className="gem-card"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: goldEase }}
          >
            <div className="gem-image-box relative shrink-0 overflow-hidden">
              <video
                src={GEM_CARD_VIDEO}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="gem-content gap-[20px]">
              <div className="mb-5 md:mb-0">
                <h3 className="font-semibold text-[#1c1c1c] text-xl md:text-base mb-2">
                  Hidden Gems
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Explore our handpicked collection of authentic stays and secluded retreats, where
                  nature meets comfort in perfect harmony.
                </p>
              </div>
              <a
                id="explorebtn"
                href={routeHref("destinations")}
                onClick={exploreClick}
                className="bg-black text-white px-8 py-4 md:px-5 md:py-2.5 rounded-full text-xs flex items-center gap-2 self-start hover:bg-zinc-800 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                Explore more <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="text-layer-wrapper text-black-side">
          <HeroContent />
        </div>
        <div className="text-layer-wrapper text-white-side">
          <HeroContent />
        </div>
      </main>
    </div>
  );
}
