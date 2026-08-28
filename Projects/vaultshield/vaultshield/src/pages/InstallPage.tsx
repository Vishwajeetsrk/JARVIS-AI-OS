import { PresetNavLink } from "../../../_shared/components/PresetNavLink";

export function InstallPage() {
  const platforms = [
    { name: "iOS & iPadOS", detail: "Face ID unlock, autofill, and travel mode." },
    { name: "Android", detail: "Biometric unlock with encrypted local vault." },
    { name: "macOS & Windows", detail: "Desktop apps with browser extension pairing." },
    {
      name: "Browser extensions",
      detail: "Chrome, Firefox, Safari, and Edge with passkey support.",
    },
  ];

  return (
    <main className="relative z-10 mx-auto max-w-[1280px] px-5 py-16 sm:px-8">
      <section id="install" className="scroll-mt-24">
        <h1
          className="mb-4"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
        >
          Install VaultShield
        </h1>
        <p className="mb-10 max-w-xl opacity-80">
          Available on every device you use—offline vault sync keeps credentials available in flight
          mode.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {platforms.map((p) => (
            <article
              key={p.name}
              className="rounded-2xl border border-[#192837]/10 bg-white/60 p-6 backdrop-blur-sm"
            >
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="mt-2 text-sm opacity-80">{p.detail}</p>
              <PresetNavLink
                target={{ kind: "route", path: "plans" }}
                className="mt-4 inline-block rounded-full px-5 py-2 text-sm font-medium text-white"
                style={{ background: "var(--color-accent)" }}
              >
                Get started
              </PresetNavLink>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
