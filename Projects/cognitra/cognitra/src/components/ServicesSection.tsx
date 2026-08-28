import { SERVICE_CARDS } from "../constants";
import { FadeUp } from "./FadeUp";

const HEADING_WORDS = "EXPLORE WHAT WE OFFER".split(" ");

export function ServicesSection() {
  return (
    <section
      id="offering"
      className="cognitra-section-3 cognitra-section-pad-lg"
      style={{
        position: "relative",
        zIndex: 2,
        background: "#C5C5C5",
        display: "flex",
        flexDirection: "column",
        padding: "70px 32px 80px 32px",
        minHeight: "auto",
      }}
    >
      <FadeUp delay={0}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.08em",
            color: "#666",
            marginBottom: 20,
            marginTop: 0,
          }}
        >
          003 / 005
        </p>
      </FadeUp>

      <div
        className="cognitra-services-head-row"
        style={{ display: "flex", gap: 48, alignItems: "flex-start", marginBottom: 32 }}
      >
        <div className="cognitra-services-head-col" style={{ width: "32%" }}>
          <h2
            style={{
              fontSize: "clamp(26px, 3vw, 42px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "#1a1a1a",
              maxWidth: 320,
              display: "flex",
              flexWrap: "wrap",
              gap: "0.25em",
              margin: 0,
            }}
          >
            {HEADING_WORDS.map((word, i) => (
              <FadeUp key={word + i} as="span" delay={0.1 + i * 0.1} y={28}>
                <span>{word}</span>
              </FadeUp>
            ))}
          </h2>
        </div>
        <div className="cognitra-services-head-col" style={{ flex: 1, paddingTop: 8 }}>
          <FadeUp as="p" delay={0.25}>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.65,
                color: "#3a3a3a",
                maxWidth: 320,
                margin: 0,
              }}
            >
              We provide all-in-one AI automation services in one place.
            </p>
          </FadeUp>
        </div>
      </div>

      <div
        className="cognitra-cards-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          gridAutoRows: "1fr",
        }}
      >
        {SERVICE_CARDS.map((card, idx) => (
          <FadeUp key={card.title} delay={0.4 + idx * 0.15}>
            <article
              style={{
                background: "transparent",
                border: "1px solid rgba(0,0,0,0.18)",
                borderRadius: 20,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                paddingTop: 16,
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
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
              <div style={{ padding: "24px 28px 28px 28px" }}>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: 14,
                    marginTop: 0,
                  }}
                >
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
    </section>
  );
}
