import { lazy, Suspense } from "react";
import { motion } from "motion/react";
import { Maximize, Snowflake, Zap } from "lucide-react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const SCENE_URL = "https://prod.spline.design/PIgTjpRFA03yfLyK/scene.splinecode";

const SPECS = [
  { label: "Stack", value: "React + Node + SQL" },
  { label: "Logic", value: "V8 - Runtime Logic" },
  { label: "Uptime", value: "99.9% High-Avail" },
  { label: "Scale", value: "Responsive Modern Layout" },
] as const;

const ICONS = [Snowflake, Maximize, Zap] as const;

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative selection:bg-white selection:text-black">
      <div className="absolute inset-0 z-0" style={{ transform: "translateX(15%)" }}>
        <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
          <Spline scene={SCENE_URL} className="h-full w-full" />
        </Suspense>
      </div>

      <div className="mx-auto px-4 md:px-6 pt-6 md:pt-10 min-h-screen md:h-screen flex flex-col justify-between pb-6 relative z-10 pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-12 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-display text-[40px] sm:text-[56px] md:text-[72px] leading-[1] md:leading-[0.9] font-extralight tracking-tight uppercase max-w-xl bg-gradient-to-r from-white/20 via-white/70 to-white bg-clip-text text-transparent">
                Automation
                <br />
                Machines &bull;
              </h1>
            </motion.div>

            <motion.p
              className="text-sm text-white max-w-md leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Developed with high-end skills and a pixel-perfect frame for those who don&apos;t just
              browse the web—they build it. Code your dreams....
            </motion.p>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {ICONS.map((Icon) => (
                <button
                  key={Icon.displayName ?? Icon.name}
                  type="button"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors cursor-pointer pointer-events-auto"
                  aria-label={Icon.displayName ?? Icon.name}
                >
                  <Icon size={16} className="text-white/80" />
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0 mt-16 md:mt-0">
          <motion.div
            className="p-6 md:p-8 w-full md:max-w-md pointer-events-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/60 mb-5">
              Technical Specs
            </p>
            <div className="space-y-4">
              {SPECS.map((spec) => (
                <div
                  key={spec.label}
                  className="flex justify-between items-end border-b border-white/10 pb-3 group cursor-default"
                >
                  <span className="text-xs text-white/70 group-hover:text-white transition-colors">
                    {spec.label}
                  </span>
                  <span className="text-xs font-mono tracking-tight text-white">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex items-center w-full md:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex flex-wrap gap-2 bg-white/10 backdrop-blur-md rounded-2xl md:rounded-full p-2 border border-white/5 w-full md:w-auto pointer-events-auto">
              <span className="px-4 py-2 text-[10px] font-mono tracking-widest bg-white text-black rounded-full">
                TS/JS
              </span>
              <span className="px-3 py-2 text-[10px] font-mono tracking-widest border border-white/20 rounded-full">
                V1
              </span>
              <span className="px-4 py-2 text-[10px] font-mono tracking-widest border border-white/20 rounded-full">
                Full-Stack
              </span>
              <span className="px-4 py-2 text-[10px] font-mono tracking-widest border border-white/20 rounded-full">
                Cloud-Ready
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
