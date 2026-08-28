import { motion } from "motion/react";
import { AVATARS, VIDEOS } from "../constants";

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden scroll-mt-0">
      <video
        className="absolute inset-0 h-full w-full object-cover object-bottom -translate-y-[100px] md:translate-y-0"
        src={VIDEOS.hero}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end px-8 pb-10 md:pb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex -space-x-2">
            {AVATARS.map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="h-8 w-8 rounded-full border-2 border-background object-cover"
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">7,000+ brands already transformed</p>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-1px] md:tracking-[-2px] text-foreground max-w-4xl">
          Build Stunning with <span className="font-accent italic font-normal">AI Magic</span>
        </h1>

        <p className="mt-4 text-sm md:text-lg text-muted-foreground whitespace-normal md:whitespace-nowrap max-w-2xl">
          AI-powered websites crafted for beauty, speed, and lasting performance.
        </p>

        <form
          className="liquid-glass mt-8 flex w-full max-w-lg items-center gap-2 rounded-full p-1.5 md:p-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="shrink-0 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background"
          >
            SUBSCRIBE
          </motion.button>
        </form>
      </div>
    </section>
  );
}
