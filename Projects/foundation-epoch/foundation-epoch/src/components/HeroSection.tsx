import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn, scrollToSection } from "../lib/utils";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4";

export function HeroSection() {
  return (
    <section id="hero" className="px-4 pb-4 pt-8 md:px-8 md:pt-12">
      <div
        className={cn(
          "relative mx-auto h-[600px] w-full max-w-[1400px] overflow-hidden rounded-[48px]",
          "shadow-xl shadow-gray-900/10",
        )}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10"
          aria-hidden
        />

        <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12 lg:p-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/60"
          >
            Foundation Epoch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Foundation of the new digital epoch
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-8"
          >
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className={cn(
                "inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5",
                "text-sm font-semibold text-gray-900 transition hover:bg-gray-100",
              )}
            >
              Contact Us
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
