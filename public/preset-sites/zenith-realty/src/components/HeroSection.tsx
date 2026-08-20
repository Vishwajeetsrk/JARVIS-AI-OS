import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { navigateToRoute } from "../../../_shared/preset-site-routing";
import { useDraftlyGalleryAutoplay } from "../../../_shared/hooks/useDraftlyGalleryAutoplay";
import { HERO_VIDEO } from "../constants";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const galleryAutoplay = useDraftlyGalleryAutoplay(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !galleryAutoplay) return;
    void video.play().catch(() => {});
  }, [galleryAutoplay]);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
      />
      <div className="relative z-10 flex h-full flex-col bg-white/10">
        <div className="flex flex-1 items-end px-5 pb-16 pt-28 md:px-10 md:pb-24">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="text-4xl font-medium leading-[1.05] tracking-tight text-[#141414] md:text-5xl lg:text-7xl"
                data-editable
                data-preset-text="hero-headline"
              >
                Discover space you truly belong in
              </motion.h1>
              <motion.button
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                onClick={() => navigateToRoute("contact")}
                className="mt-8 bg-[#141414] px-9 py-4 text-[13px] font-medium uppercase tracking-wider text-white shadow-2xl"
                data-editable
                data-preset-text="hero-cta"
              >
                Book a call
              </motion.button>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[15px] leading-[1.4] text-[#A5A5A5] md:col-span-4 md:col-start-9 md:text-[18px]"
              data-editable
              data-preset-text="hero-subcopy"
            >
              Experience more than a house; find a sanctuary where your journey unfolds, rich with
              comfort and endless opportunities.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
