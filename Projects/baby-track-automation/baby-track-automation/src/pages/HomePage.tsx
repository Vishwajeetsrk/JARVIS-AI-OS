import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import BabyTrackLogo from "../components/BabyTrackLogo";
import BabyTrackNavbar from "../components/BabyTrackNavbar";
import { CLOUD_IMAGE, HERO_VIDEO, RED_SECTION_VIDEO } from "../constants";
import { navigateToRoute } from "../../../_shared/preset-site-routing";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: containerRef });
  const cloudYDesktop = useTransform(scrollY, [0, 300], [0, -100]);
  const cloudYMobile = useTransform(scrollY, [0, 300], [0, -24]);

  return (
    <main
      ref={containerRef}
      className="relative h-screen overflow-y-auto overflow-x-hidden bg-black font-manrope"
    >
      <section
        id="hero"
        data-draftly-section-id="hero"
        className="relative h-screen w-full shrink-0 overflow-hidden"
      >
        <video
          className="absolute inset-0 z-10 h-full w-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="pointer-events-none absolute inset-0 z-20 bg-black/20" aria-hidden />
        <BabyTrackNavbar />

        <div className="pointer-events-auto absolute left-[20px] top-[24px] z-40 max-w-[calc(100vw-140px)] md:left-[64px] md:top-[64px] md:max-w-none">
          <div className="flex items-center gap-[16px] md:gap-[24px]">
            <BabyTrackLogo size={48} className="text-white md:hidden" />
            <BabyTrackLogo size={64} className="hidden text-white md:block" />
            <p className="w-[112px] text-[11px] font-semibold leading-[1.2] tracking-[0.02em] text-white md:w-auto md:text-[16px]">
              <span className="hidden md:inline">
                Effortless Growth
                <br />
                Operations. We Handle All Tasks.
                <br />
                Stay Calm.
              </span>
              <span className="md:hidden">
                Complete Business
                <br />
                Automation. We Handle All
                <br />
                Tasks. You Relax.
              </span>
            </p>
          </div>
          <div className="mt-[400px] hidden max-w-[320px] flex-col gap-[24px] text-[14px] font-normal leading-relaxed text-white md:flex">
            <p>
              Baby Track automates the repetitive work that drains your team—scheduling, follow-ups,
              reporting, and handoffs—so operators stay focused on decisions that matter.
            </p>
            <p>
              One platform connects your tools, learns your routines, and runs daily operations with
              calm precision while you scale.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="absolute right-[20px] top-[24px] z-40 cursor-pointer rounded-[100%] border border-white bg-black/10 px-5 py-3 font-italiana text-[12px] uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-[48px] md:right-[64px] md:top-[64px] md:bg-transparent md:px-10 md:py-7 md:text-[18px] md:backdrop-blur-none"
          onClick={() => navigateToRoute("contact")}
        >
          Get started
        </button>

        <div className="absolute bottom-[32px] left-[20px] right-[20px] z-40 text-left md:bottom-[64px] md:left-auto md:right-[64px] md:max-w-[1200px] md:text-right">
          <div className="mb-[32px] flex max-w-[280px] flex-col gap-[16px] text-[12px] font-normal text-white md:hidden">
            <p>
              Baby Track automates daily operations so your team can focus on growth—not busywork.
            </p>
            <p>Connect your stack once; routines run themselves with full visibility.</p>
          </div>
          <h1 className="font-italiana text-[36px] leading-[1.1] text-white md:text-[96px] md:leading-[88px]">
            <span className="hidden md:inline">
              Intelligent Daily
              <br />
              Routine Automation
              <br />
              For Your Business.
              <br />
              You Relax
            </span>
            <span className="text-[32px] md:hidden">
              Intelligent Daily Routine
              <br />
              Automation For Your
              <br />
              Business. You Relax
            </span>
          </h1>
        </div>
      </section>

      <section
        id="automation"
        data-draftly-section-id="automation"
        className="relative z-10 flex min-h-screen w-full flex-col bg-[#FF0000]"
      >
        <motion.div
          className="pointer-events-none absolute left-0 top-0 z-[100] hidden w-full -translate-y-1/2 md:block"
          style={{ y: cloudYDesktop }}
        >
          <img
            src={CLOUD_IMAGE}
            alt=""
            className="block h-auto w-full"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute left-0 top-0 z-[100] w-full -translate-y-1/2 md:hidden"
          style={{ y: cloudYMobile }}
        >
          <img
            src={CLOUD_IMAGE}
            alt=""
            className="block h-auto w-full"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-20 flex w-full flex-1 flex-col items-center pt-[100px] md:pt-[400px]">
          <div className="relative z-20 mx-auto flex h-auto w-full max-w-[900px] flex-col items-center px-8 text-center md:h-[620px]">
            <BabyTrackLogo size={80} className="text-white" />
            <p className="mx-auto mb-[40px] h-[100px] max-w-[400px] text-[16px] uppercase leading-[1.6] tracking-wider text-white">
              We built this platform with a single purpose to eliminate operational chaos and
              restore balance to your daily business routine
            </p>
            <p className="font-marck mb-[32px] text-[120px] leading-none text-white">S.P.D</p>
            <p className="mb-[24px] w-[400px] max-w-full text-[16px] font-light text-white">
              Every workflow you delegate to Baby Track is monitored, versioned, and recoverable—so
              automation never feels like a black box.
            </p>
            <p className="mb-[100px] w-[400px] max-w-full text-[16px] font-light text-white md:mb-24">
              Teams adopt in days, not quarters: connect tools, define rituals, and let the platform
              run the rhythm while you steer strategy.
            </p>
          </div>
        </div>

        <div className="relative w-full shrink-0">
          <div
            className="pointer-events-none absolute top-0 left-0 z-10 h-[100px] w-full bg-gradient-to-b from-[#FF0000] to-transparent"
            aria-hidden
          />
          <video
            className="block h-auto w-full object-contain"
            src={RED_SECTION_VIDEO}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>
    </main>
  );
}
