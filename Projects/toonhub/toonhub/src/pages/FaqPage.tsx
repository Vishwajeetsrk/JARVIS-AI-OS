import { ToonFooter, ToonNav } from "../components/ToonNav";

const FAQS = [
  [
    "When do drops ship?",
    "Most limited runs ship within 10–14 business days after the window closes.",
  ],
  [
    "Are figurines authenticated?",
    "Each piece includes a numbered card and NFC tap-to-verify on premium tiers.",
  ],
  ["International shipping?", "We ship to 40+ countries; duties may apply outside the EU and UK."],
];

export function FaqPage() {
  const panel = "#85CC92";
  const bg = "#6BBF7A";
  return (
    <div style={{ backgroundColor: bg, minHeight: "100vh" }}>
      <ToonNav />
      <main id="faq" className="px-6 py-20 sm:px-12 max-w-2xl mx-auto text-white">
        <h1 className="font-display text-4xl uppercase">FAQ</h1>
        <dl className="mt-10 space-y-6">
          {FAQS.map(([q, a]) => (
            <div key={q}>
              <dt className="font-semibold uppercase tracking-wide text-sm">{q}</dt>
              <dd className="mt-2 text-sm text-white/85">{a}</dd>
            </div>
          ))}
        </dl>
      </main>
      <ToonFooter panelColor={panel} />
    </div>
  );
}
