export function BenefitsPage() {
  return (
    <section className="min-h-screen scroll-mt-24 border-t border-white/10 bg-black px-6 py-28 md:px-12">
      <h1 className="font-body text-xs uppercase tracking-[0.2em] text-white/50">Benefits</h1>
      <p className="mt-6 max-w-2xl text-2xl text-white/90">
        Roaming plans adapt to your calendar, budget, and preferred pace—no generic packages.
      </p>
      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {["Adaptive itineraries", "Local hosts vetted", "Offline guidebook"].map((t) => (
          <li key={t} className="liquid-glass rounded-2xl p-6 text-sm text-white/75">
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}
