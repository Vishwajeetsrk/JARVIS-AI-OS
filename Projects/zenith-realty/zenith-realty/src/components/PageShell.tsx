import type { ReactNode } from "react";
import { motion } from "motion/react";

export function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <main className="px-5 pb-24 pt-28 md:px-10 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <h1
            className="text-3xl font-medium leading-[1.1] tracking-tight text-[#141414] md:text-5xl"
            data-editable
          >
            {title}
          </h1>
          {subtitle ? (
            <p
              className="mt-6 text-[15px] leading-relaxed text-[#A5A5A5] md:text-[18px]"
              data-editable
            >
              {subtitle}
            </p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </main>
  );
}
