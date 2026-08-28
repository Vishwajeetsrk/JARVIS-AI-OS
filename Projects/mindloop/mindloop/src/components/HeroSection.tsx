import { useState } from "react";
import { motion } from "framer-motion";
import { AVATARS, VIDEOS } from "../constants";
import { fadeUp } from "../lib/fadeUp";

export default function HeroSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <video
        src={VIDEOS.hero}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center pt-28 md:pt-32 pb-24">
        <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-3 mb-8">
          <div className="flex -space-x-2">
            {AVATARS.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-background object-cover"
                style={{ zIndex: AVATARS.length - i }}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">7,000+ people already subscribed</span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] text-foreground mb-6"
        >
          Get <span className="font-serif italic font-normal">Inspired</span> with Us
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="text-lg text-hero-subtitle max-w-2xl mx-auto mb-10">
          Join our feed for meaningful updates, news around technology and a shared journey toward
          depth and direction.
        </motion.p>

        <motion.form
          {...fadeUp(0.3)}
          className="liquid-glass rounded-full p-2 max-w-lg mx-auto flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input
            id="subscribe-email"
            type="email"
            required
            placeholder="Enter your email"
            className="flex-1 bg-transparent px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none min-w-0"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="shrink-0 bg-foreground text-background rounded-full px-8 py-3 text-sm font-medium tracking-wide"
          >
            {submitted ? "SUBSCRIBED" : "SUBSCRIBE"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
