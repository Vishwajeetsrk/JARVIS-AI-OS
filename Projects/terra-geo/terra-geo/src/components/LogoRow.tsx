import { LOGO_NAMES } from "../constants";

export default function LogoRow() {
  const doubled = [...LOGO_NAMES, ...LOGO_NAMES];

  return (
    <section className="overflow-hidden border-t border-border py-12">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
        Trusted by spatial teams
      </p>
      <div className="relative">
        <div className="marquee-track gap-12 px-6">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-lg font-semibold tracking-tight text-foreground/35"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
