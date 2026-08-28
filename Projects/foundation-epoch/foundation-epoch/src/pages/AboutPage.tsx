import { motion } from "motion/react";
import { Globe2, Rocket, Users } from "lucide-react";
import { cn } from "../lib/utils";

const PILLARS = [
  {
    icon: Rocket,
    title: "Epoch-scale velocity",
    body: "Teams ship composable products on Foundation primitives—auth, data, and edge unified from day one.",
  },
  {
    icon: Globe2,
    title: "Global by default",
    body: "Multi-region orchestration with sub-50ms routing so every user feels local, everywhere.",
  },
  {
    icon: Users,
    title: "Partner-first",
    body: "We co-build with studios and enterprises who need cinematic presentation and production rigor.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="px-4 pb-24 pt-12 md:px-8 md:pt-16">
      <div className="mx-auto max-w-[1400px]">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500"
        >
          About
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className={cn(
            "mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl",
          )}
        >
          Building the foundation of the new digital epoch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600"
        >
          Foundation Epoch partners with product teams who refuse to trade craft for speed. We
          combine cinematic hero experiences with composable infrastructure—so your launch feels
          inevitable and your stack stays trustworthy.
        </motion.p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <Icon className="h-8 w-8 text-gray-900" strokeWidth={1.5} />
                <h2 className="mt-4 text-xl font-semibold text-gray-900">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
