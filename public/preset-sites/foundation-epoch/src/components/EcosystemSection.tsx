import { motion } from "motion/react";
import { ArrowUpRight, Cpu, Network, Sparkles } from "lucide-react";
import { cn, scrollToSection } from "../lib/utils";

const PILLARS = [
  {
    icon: Sparkles,
    label: "Intelligence layer",
    stat: "12B+",
    detail: "inference events orchestrated monthly across the epoch mesh.",
  },
  {
    icon: Network,
    label: "Partner mesh",
    stat: "240+",
    detail: "integrations from identity to observability in one catalog.",
  },
  {
    icon: Cpu,
    label: "Edge fabric",
    stat: "48",
    detail: "regions with dedicated compute pools and private interconnect.",
  },
] as const;

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="scroll-mt-8 bg-white px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
              Ecosystem
            </p>
            <h2
              className={cn(
                "mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight",
                "text-gray-900 md:text-4xl",
              )}
            >
              An open mesh for builders, partners, and enterprises
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-600">
              Connect your stack to Foundation Epoch—marketplace apps, certified partners, and
              shared governance for long-horizon roadmaps.
            </p>
            <button
              type="button"
              onClick={() => scrollToSection("docs")}
              className={cn(
                "mt-8 inline-flex items-center gap-2 rounded-full border border-gray-300",
                "px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-400",
              )}
            >
              Explore the mesh
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </motion.div>

          <div className="space-y-4">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="flex gap-5 rounded-3xl border border-gray-100 bg-[#f9fafb] p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <pillar.icon className="h-5 w-5 text-gray-800" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    {pillar.label}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold text-gray-900">
                    {pillar.stat}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{pillar.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
