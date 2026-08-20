import { SERVICE_CARDS } from "../constants";
import { FadeUp } from "../components/FadeUp";
import { InnerPageLayout } from "../components/InnerPageLayout";

type OfferingPageProps = {
  embedded?: boolean;
};

export function OfferingPage({ embedded = false }: OfferingPageProps) {
  const content = (
    <InnerPageLayout
      counter="003 / 005"
      title="Explore what we offer"
      subtitle="End-to-end AI automation — advisory, engineering, and process design under one roof."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
        }}
      >
        {SERVICE_CARDS.map((card, idx) => (
          <FadeUp key={card.title} delay={0.2 + idx * 0.1}>
            <article
              style={{
                border: "1px solid rgba(0,0,0,0.18)",
                borderRadius: 20,
                overflow: "hidden",
                background: "rgba(255,255,255,0.35)",
              }}
            >
              <div style={{ aspectRatio: "4/3", position: "relative" }}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={card.video}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#1a1a1a", margin: "0 0 10px" }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "#3a3a3a", margin: 0 }}>
                  {card.text}
                </p>
              </div>
            </article>
          </FadeUp>
        ))}
      </div>
    </InnerPageLayout>
  );

  if (embedded) return content;
  return content;
}
