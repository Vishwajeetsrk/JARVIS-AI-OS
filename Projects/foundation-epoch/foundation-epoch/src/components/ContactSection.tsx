import { motion } from "motion/react";
import { Mail, MessageSquare } from "lucide-react";
import { type FormEvent, useState } from "react";
import { cn } from "../lib/utils";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-8 bg-white px-4 pb-32 pt-20 md:px-8 md:pb-40 md:pt-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">Contact</p>
            <h2
              className={cn(
                "mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight",
                "text-gray-900 md:text-4xl",
              )}
            >
              Start your epoch with us
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-gray-600">
              Tell us about your roadmap—we&apos;ll connect you with solutions engineering within
              one business day.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="mailto:hello@foundationepoch.com"
                className="flex items-center gap-3 text-sm font-medium text-gray-800 hover:text-gray-900"
              >
                <Mail className="h-4 w-4 text-gray-500" strokeWidth={1.75} />
                hello@foundationepoch.com
              </a>
              <p className="flex items-center gap-3 text-sm text-gray-600">
                <MessageSquare className="h-4 w-4 text-gray-500" strokeWidth={1.75} />
                Enterprise &amp; partner inquiries welcome
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
            onSubmit={handleSubmit}
            className={cn("rounded-3xl border border-gray-200 bg-[#f9fafb] p-6 md:p-8")}
          >
            {submitted ? (
              <p className="py-8 text-center text-sm font-medium text-gray-800">
                Thanks—we&apos;ll be in touch shortly.
              </p>
            ) : (
              <>
                <label className="block text-sm font-medium text-gray-700">
                  Work email
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className={cn(
                      "mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3",
                      "text-sm outline-none ring-gray-900/10 focus:ring-2",
                    )}
                  />
                </label>
                <label className="mt-4 block text-sm font-medium text-gray-700">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="What are you building?"
                    className={cn(
                      "mt-2 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3",
                      "text-sm outline-none ring-gray-900/10 focus:ring-2",
                    )}
                  />
                </label>
                <button
                  type="submit"
                  className={cn(
                    "mt-6 w-full rounded-full bg-gray-900 py-3.5 text-sm font-semibold text-white",
                    "transition hover:bg-gray-800",
                  )}
                >
                  Send message
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
