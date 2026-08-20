import { Mail } from "lucide-react";
import { FadeUp } from "../components/FadeUp";
import { InnerPageLayout } from "../components/InnerPageLayout";

type ConnectPageProps = {
  embedded?: boolean;
};

export function ConnectPage({ embedded = false }: ConnectPageProps) {
  const content = (
    <InnerPageLayout
      counter="005 / 005"
      title="Connect"
      subtitle="Tell us about your workflows — we reply within two business days."
    >
      <FadeUp delay={0.2}>
        <a
          href="mailto:hello@cognitra.ai"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontSize: 16,
            color: "#1a1a1a",
            textDecoration: "none",
          }}
        >
          <Mail size={18} strokeWidth={1.5} />
          hello@cognitra.ai
        </a>
      </FadeUp>
      <FadeUp delay={0.35}>
        <form
          style={{
            marginTop: 32,
            maxWidth: 420,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Company"
            aria-label="Company"
            style={{
              border: "1px solid rgba(0,0,0,0.18)",
              borderRadius: 9999,
              padding: "12px 20px",
              fontSize: 13,
              background: "rgba(255,255,255,0.5)",
            }}
          />
          <input
            type="email"
            placeholder="Work email"
            aria-label="Work email"
            style={{
              border: "1px solid rgba(0,0,0,0.18)",
              borderRadius: 9999,
              padding: "12px 20px",
              fontSize: 13,
              background: "rgba(255,255,255,0.5)",
            }}
          />
          <textarea
            placeholder="What should we automate?"
            aria-label="Message"
            rows={4}
            style={{
              border: "1px solid rgba(0,0,0,0.18)",
              borderRadius: 16,
              padding: "12px 20px",
              fontSize: 13,
              background: "rgba(255,255,255,0.5)",
              resize: "vertical",
            }}
          />
          <button
            type="submit"
            className="btn-cognitra-primary"
            style={{ alignSelf: "flex-start" }}
          >
            SEND MESSAGE
          </button>
        </form>
      </FadeUp>
    </InnerPageLayout>
  );

  if (embedded) return content;
  return content;
}
