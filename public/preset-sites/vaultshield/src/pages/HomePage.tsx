import { motion } from "framer-motion";
import { ArrowRightCircle, Fingerprint, LockKeyhole, Zap } from "lucide-react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const FEATURES = [
  { Icon: Zap, label: "Instant autofill" },
  { Icon: LockKeyhole, label: "Zero-knowledge vault" },
  { Icon: Fingerprint, label: "Biometric unlock" },
] as const;

export function HomePage() {
  return (
    <main
      id="vault"
      className="relative z-10 mx-auto max-w-[1280px] scroll-mt-24 px-5 sm:px-8"
      style={{ paddingTop: "clamp(40px, 8vw, 72px)", paddingBottom: "clamp(48px, 10vw, 96px)" }}
    >
      <div className="max-w-[560px]">
        <motion.h1
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.65rem, 5vw, 3rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            color: "var(--color-text)",
          }}
        >
          <Zap
            size={28}
            strokeWidth={2}
            className="mr-1 inline-block align-middle"
            style={{ marginTop: -4, color: "var(--color-accent)" }}
            aria-hidden
          />
          Lock Down Your Passwords{" "}
          <LockKeyhole
            size={28}
            strokeWidth={2}
            className="mx-1 inline-block align-middle"
            style={{ marginTop: -4, color: "var(--color-accent)" }}
            aria-hidden
          />
          with Ironclad Security{" "}
          <Fingerprint
            size={28}
            strokeWidth={2}
            className="ml-1 inline-block align-middle"
            style={{ marginTop: -4, color: "var(--color-accent)" }}
            aria-hidden
          />
        </motion.h1>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8 opacity-80"
          style={{
            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
            lineHeight: 1.65,
            maxWidth: 560,
          }}
        >
          Zero stress, total control. VaultShield keeps you covered with unbreakable storage,
          one-tap access, and pro-grade tools for your non-stop world.
        </motion.p>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-10"
        >
          <PresetNavLink
            target={{ kind: "route", path: "plans" }}
            className="flex min-w-[210px] items-center justify-between gap-8 rounded-full px-6 py-[17px] font-semibold text-white"
            style={{
              background: "var(--color-accent)",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
              boxShadow: "0 4px 24px rgba(115,66,226,0.28)",
            }}
          >
            Get It Free
            <ArrowRightCircle size={20} aria-hidden />
          </PresetNavLink>
        </motion.div>

        <motion.ul
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-6 sm:gap-8"
          aria-label="Security features"
        >
          {FEATURES.map(({ Icon, label }) => (
            <li key={label} className="flex items-center gap-2.5">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ background: "rgba(115, 66, 226, 0.12)" }}
              >
                <Icon
                  size={18}
                  strokeWidth={2}
                  style={{ color: "var(--color-accent)" }}
                  aria-hidden
                />
              </span>
              <span className="text-sm font-medium">{label}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </main>
  );
}
