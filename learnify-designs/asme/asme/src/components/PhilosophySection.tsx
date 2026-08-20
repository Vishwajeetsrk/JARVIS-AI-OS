import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { INSTRUMENT_SERIF, PHILOSOPHY_VIDEO } from "../constants";

export default function PhilosophySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="overflow-hidden bg-black px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-5xl tracking-tight text-white md:mb-24 md:text-7xl lg:text-8xl"
          style={{ fontFamily: INSTRUMENT_SERIF }}
        >
          Innovation{" "}
          <em className="text-white/40" style={{ fontFamily: INSTRUMENT_SERIF }}>
            ×
          </em>{" "}
          Vision
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="aspect-[4/3] overflow-hidden rounded-3xl"
          >
            <video
              src={PHILOSOPHY_VIDEO}
              className="h-full w-full object-cover"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-10"
          >
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
                Choose your space
              </p>
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                Every meaningful breakthrough begins at the intersection of disciplined strategy and
                remarkable creative vision. We operate at that crossroads, turning bold thinking
                into tangible outcomes that move people and reshape industries.
              </p>
            </div>
            <div className="h-px w-full bg-white/10" />
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
                Shape the future
              </p>
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                We believe that the best work emerges when curiosity meets conviction. Our process
                is designed to uncover hidden opportunities and translate them into experiences that
                resonate long after the first impression.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
