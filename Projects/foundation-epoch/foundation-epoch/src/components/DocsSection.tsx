import { motion } from "motion/react";
import { BookOpen, Code2, Terminal } from "lucide-react";
import { cn, scrollToSection } from "../lib/utils";

const DOC_CARDS = [
  {
    icon: BookOpen,
    title: "Quickstart",
    excerpt: "Deploy your first epoch service in under ten minutes with our guided walkthrough.",
    cta: "Read quickstart",
  },
  {
    icon: Code2,
    title: "API reference",
    excerpt: "REST and GraphQL endpoints for mesh registration, tokens, and workload scheduling.",
    cta: "View API",
  },
  {
    icon: Terminal,
    title: "CLI & SDKs",
    excerpt: "TypeScript, Go, and Python clients with local emulation and CI-friendly auth.",
    cta: "Install CLI",
  },
] as const;

export function DocsSection() {
  return (
    <section id="docs" className="scroll-mt-8 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
              Documentation
            </p>
            <h2
              className={cn(
                "mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight",
                "text-gray-900 md:text-4xl",
              )}
            >
              Docs preview
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Everything your team needs to integrate, extend, and operate on Foundation Epoch.
            </p>
          </div>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className={cn(
              "shrink-0 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white",
              "transition hover:bg-gray-800",
            )}
          >
            Talk to solutions
          </button>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {DOC_CARDS.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className={cn(
                "flex flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm",
              )}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                <card.icon className="h-5 w-5 text-gray-800" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{card.excerpt}</p>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="mt-6 text-left text-sm font-semibold text-gray-900 underline-offset-4 hover:underline"
              >
                {card.cta} →
              </button>
            </motion.article>
          ))}
        </div>

        <motion.pre
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className={cn(
            "mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-gray-900 p-6",
            "font-mono text-sm leading-relaxed text-gray-100",
          )}
        >
          <code>{`$ epoch init my-app
✓ Mesh credentials configured
✓ Edge pool: us-east-1, eu-west-2
→ https://epoch.foundation/docs/deploy`}</code>
        </motion.pre>
      </div>
    </section>
  );
}
