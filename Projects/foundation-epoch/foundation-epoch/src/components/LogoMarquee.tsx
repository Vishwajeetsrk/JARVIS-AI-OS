const LOGOS = [
  { name: "Vercel", src: "https://svgl.app/library/vercel.svg" },
  { name: "Linear", src: "https://svgl.app/library/linear.svg" },
  { name: "Stripe", src: "https://svgl.app/library/stripe.svg" },
  { name: "Notion", src: "https://svgl.app/library/notion.svg" },
  { name: "Figma", src: "https://svgl.app/library/figma.svg" },
  { name: "GitHub", src: "https://svgl.app/library/github.svg" },
  { name: "Discord", src: "https://svgl.app/library/discord.svg" },
  { name: "Slack", src: "https://svgl.app/library/slack.svg" },
] as const;

function LogoItem({ name, src }: (typeof LOGOS)[number]) {
  return (
    <div className="flex shrink-0 items-center justify-center px-6">
      <img
        src={src}
        alt={name}
        width={120}
        height={36}
        className="h-8 w-auto max-w-[120px] object-contain opacity-70 grayscale transition-opacity hover:opacity-100"
        loading="lazy"
      />
    </div>
  );
}

export function LogoMarquee() {
  const row = [...LOGOS, ...LOGOS];

  return (
    <section className="w-full py-12 md:py-16" aria-label="Trusted partners">
      <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
        Built for teams shaping the next epoch
      </p>
      <div className="marquee-mask relative overflow-hidden">
        <div className="marquee-track">
          {row.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
