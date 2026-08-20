import { LOGO_NAMES } from "../constants";

export default function LogoRow() {
  const doubled = [...LOGO_NAMES, ...LOGO_NAMES];

  return (
    <section className="border-y border-white/5 bg-[#080a14] py-12 md:py-14">
      <p className="animate-fade-in-up text-center text-xs font-medium uppercase tracking-[0.3em] text-white/35">
        Trusted by forward-thinking teams
      </p>
      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#080a14] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#080a14] to-transparent" />
        <div className="marquee-track gap-12 px-6">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 text-sm font-semibold tracking-tight text-white/35 transition-colors hover:text-white/60"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
