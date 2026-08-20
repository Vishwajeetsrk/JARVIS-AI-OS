import { RATE_TIERS } from "../constants";
import { FadeUp } from "../components/FadeUp";
import { InnerPageLayout } from "../components/InnerPageLayout";
import { navigateToRoute } from "../../../_shared/preset-site-routing";

type RatesPageProps = {
  embedded?: boolean;
};

export function RatesPage({ embedded = false }: RatesPageProps) {
  const content = (
    <InnerPageLayout
      counter="005 / 005"
      title="Engagement rates"
      subtitle="Transparent tiers from discovery sprint through enterprise scale."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        {RATE_TIERS.map((tier, idx) => {
          const highlighted = "highlight" in tier && tier.highlight;
          return (
            <FadeUp key={tier.name} delay={0.15 + idx * 0.1}>
              <div
                style={{
                  border: "1px solid rgba(0,0,0,0.18)",
                  borderRadius: 20,
                  padding: 28,
                  background: highlighted ? "#1a1a1a" : "rgba(255,255,255,0.35)",
                  color: highlighted ? "#fff" : "#1a1a1a",
                }}
              >
                <p style={{ fontSize: 11, letterSpacing: "0.08em", margin: 0, opacity: 0.7 }}>
                  {tier.period}
                </p>
                <h3 style={{ fontSize: 22, fontWeight: 700, margin: "8px 0 4px" }}>{tier.name}</h3>
                <p style={{ fontSize: 28, fontWeight: 700, margin: "0 0 16px" }}>{tier.price}</p>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, lineHeight: 1.7 }}>
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          );
        })}
      </div>
      <FadeUp delay={0.5}>
        <button
          type="button"
          className="btn-cognitra-primary"
          style={{ marginTop: 32 }}
          onClick={() => navigateToRoute("connect")}
        >
          BOOK A CALL!
        </button>
      </FadeUp>
    </InnerPageLayout>
  );

  if (embedded) return content;
  return content;
}
