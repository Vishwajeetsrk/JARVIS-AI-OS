import { motion } from "motion/react";
import { Chrome, Circle, Eye, EyeOff, Github } from "lucide-react";
import { useState, type ReactNode } from "react";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_081238_406ed0e3-5d83-436e-a512-0bbff7ec5b95.mp4";

const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const heroChild = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex min-h-screen w-full bg-black p-2 transition-all duration-500 selection:bg-white/30 lg:h-screen lg:overflow-hidden lg:p-4">
      {/* Left column — hero video */}
      <section className="relative hidden h-full w-[52%] flex-col items-center justify-end overflow-hidden rounded-3xl px-12 pb-32 shadow-2xl lg:flex">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        <motion.div
          className="relative z-10 w-full max-w-xs space-y-8"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={heroChild} className="flex items-center gap-2">
            <Circle className="h-6 w-6 fill-white text-white" aria-hidden />
            <span className="text-xl font-semibold tracking-tight">Aurora</span>
          </motion.div>

          <motion.div variants={heroChild} className="space-y-3 text-center">
            <h1 className="whitespace-nowrap text-4xl font-medium tracking-tight">Join Aurora</h1>
            <p className="px-4 text-sm leading-relaxed text-white/60">
              Follow these 3 quick phases to activate your space.
            </p>
          </motion.div>

          <motion.div variants={heroChild} className="space-y-3">
            <StepItem number={1} text="Register your identity" active />
            <StepItem number={2} text="Configure your studio" />
            <StepItem number={3} text="Finalize your profile" />
          </motion.div>
        </motion.div>
      </section>

      {/* Right column — sign up form */}
      <section className="flex flex-1 flex-col items-center justify-center overflow-y-auto px-4 py-12 sm:px-12 lg:overflow-hidden lg:px-16 lg:py-6 xl:px-24">
        <motion.div
          className="w-full max-w-xl space-y-8 sm:space-y-10 lg:space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <header className="space-y-2">
            <h2 className="text-3xl font-medium tracking-tight">Create New Profile</h2>
            <p className="text-sm text-white/40">Input your basic details to begin the journey.</p>
          </header>

          <div className="grid grid-cols-2 gap-4">
            <SocialButton icon={<Chrome className="h-5 w-5" />} label="Google" />
            <SocialButton icon={<Github className="h-5 w-5" />} label="Github" />
          </div>

          <div className="relative flex items-center">
            <div className="h-px flex-1 border-t border-white/10" />
            <span className="bg-black px-4 text-xs font-medium uppercase tracking-widest text-white/40">
              Or
            </span>
            <div className="h-px flex-1 border-t border-white/10" />
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <InputGroup label="First Name" placeholder="Jane" type="text" />
              <InputGroup label="Last Name" placeholder="Doe" type="text" />
            </div>
            <InputGroup label="Email" placeholder="you@aurora.studio" type="email" />

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-11 w-full rounded-xl border-none bg-brand-gray px-4 pr-11 text-white placeholder:text-white/20 focus:ring-2 focus:ring-white/20"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 transition-colors hover:text-white/70"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <p className="text-xs text-white/40">Requires at least 8 symbols.</p>
            </div>

            <button
              type="submit"
              className="mt-4 h-14 w-full rounded-xl bg-white font-semibold text-black transition-all hover:bg-white/90 active:scale-[0.98]"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-white/50">
            Member of the team?{" "}
            <a href="#" className="text-white underline-offset-4 hover:underline">
              Log in
            </a>
          </p>
        </motion.div>
      </section>
    </main>
  );
}

function StepItem({
  number,
  text,
  active = false,
}: {
  number: number;
  text: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 rounded-2xl px-5 py-4 transition-colors ${
        active ? "border border-white bg-white text-black" : "border-none bg-brand-gray text-white"
      }`}
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
          active ? "bg-black text-white" : "bg-white/10 text-white/40"
        }`}
      >
        {number}
      </span>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

function SocialButton({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <button
      type="button"
      className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-black transition-colors hover:bg-white/5"
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

function InputGroup({
  label,
  placeholder,
  type,
}: {
  label: string;
  placeholder: string;
  type: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-white">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border-none bg-brand-gray px-4 text-white placeholder:text-white/20 focus:ring-2 focus:ring-white/20"
      />
    </div>
  );
}
