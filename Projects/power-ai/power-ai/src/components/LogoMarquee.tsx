import {
  Cloud,
  Cpu,
  Hexagon,
  Layers,
  Orbit,
  Sparkles,
  Triangle,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Partner = { name: string; icon: LucideIcon };

const PARTNERS: Partner[] = [
  { name: "Vortex", icon: Orbit },
  { name: "Nimbus", icon: Cloud },
  { name: "Prism", icon: Triangle },
  { name: "Atlas", icon: Layers },
  { name: "Nova", icon: Sparkles },
  { name: "Helix", icon: Hexagon },
  { name: "Cipher", icon: Cpu },
  { name: "Flux", icon: Zap },
];

function PartnerChip({ name, icon: Icon }: Partner) {
  return (
    <div className="liquid-glass flex shrink-0 items-center gap-3 rounded-full px-5 py-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5">
        <Icon className="h-4 w-4 text-foreground/80" strokeWidth={1.75} />
      </span>
      <span className="text-sm font-medium tracking-tight text-foreground/85">{name}</span>
    </div>
  );
}

export default function LogoMarquee() {
  const row = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative z-20 w-full overflow-hidden pb-8 pt-2 md:pb-10">
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24"
          aria-hidden
        />
        <div className="marquee-track gap-4 px-4">
          {row.map((partner, i) => (
            <PartnerChip key={`${partner.name}-${i}`} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
