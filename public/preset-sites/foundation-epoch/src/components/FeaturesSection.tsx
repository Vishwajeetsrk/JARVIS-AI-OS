import { motion } from "motion/react";
import { Blocks, Globe2, Layers, Shield } from "lucide-react";
import { cn } from "../lib/utils";

const FEATURES = [
  {
    icon: Layers,
    title: "Composable infrastructure",
    description:
      "Ship epoch-scale products on modular primitives—auth, data, and edge in one cohesive layer.",
  },
  {
    icon: Globe2,
    title: "Global by default",
    description:
      "Multi-region orchestration with sub-50ms routing so your users feel local everywhere.",
  },
  {
    icon: Shield,
    title: "Trust-native security",
    description:
      "Zero-trust defaults, encrypted pipelines, and audit trails built for regulated industries.",
  },
  {
    icon: Blocks,
    title: "Developer velocity",
    description:
      "SDKs, CLI, and observability that keep teams moving from prototype to production in days.",
  },
] as const;

export function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-8 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">Features</p>
          <h2
            className={cn(
              "mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight",
              "text-gray-900 md:text-4xl",
            )}
          >
            Everything you need to build the next era
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            A unified platform for teams defining what comes after the cloud-native generation.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className={cn(
                "rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm",
                "transition-shadow hover:shadow-md",
              )}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-100 text-gray-800">
                <feature.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
