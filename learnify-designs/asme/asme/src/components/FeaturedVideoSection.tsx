import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FEATURED_VIDEO } from "../constants";

export default function FeaturedVideoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="overflow-hidden bg-black px-6 pb-20 pt-6 md:pb-32 md:pt-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="relative mx-auto aspect-video max-w-6xl overflow-hidden rounded-3xl"
      >
        <video
          src={FEATURED_VIDEO}
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-6 p-6 md:flex-row md:items-end md:justify-between md:p-10">
          <div className="liquid-glass max-w-md rounded-2xl p-6 md:p-8">
            <p className="mb-3 text-xs uppercase tracking-widest text-white/50">Our Approach</p>
            <p className="text-sm leading-relaxed text-white md:text-base">
              We believe in the power of curiosity-driven exploration. Every project starts with a
              question, and every answer opens a new door to innovation.
            </p>
          </div>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="liquid-glass shrink-0 self-start rounded-full px-8 py-3 text-sm font-medium text-white md:self-auto"
          >
            Explore more
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
