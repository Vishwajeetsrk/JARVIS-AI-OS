import { Shirt, Sparkles, User, Shield, ArrowRight } from "lucide-react";

interface S02WelcomeProps {
  onGetStarted: () => void;
  onSkip: () => void;
  onLogin: () => void;
}

export function S02Welcome({ onGetStarted, onSkip, onLogin }: S02WelcomeProps) {
  return (
    <div className="screen" style={{
      background: "#F6F3EE",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    }}>
      {/* Status bar */}
      <div className="phone-status-bar" style={{ color: "#161616" }}>
        <span>9:41</span>
        <div style={{ display: "flex", gap: 4, fontSize: 12 }}>●●●●</div>
      </div>

      {/* Skip button */}
      <div style={{ padding: "58px 20px 0", display: "flex", justifyContent: "flex-end" }}>
        <button onClick={onSkip} style={{
          border: "none", background: "none", cursor: "pointer",
          fontSize: 15, color: "#161616", fontWeight: 500, padding: 8,
        }}>Skip</button>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "4px 24px", display: "flex", flexDirection: "column", overflowY: "auto" }}>
        {/* Title */}
        <h1 style={{
          fontSize: 32, fontWeight: 800, lineHeight: 1.1, color: "#161616",
          marginBottom: 10,
        }}>
          Your wardrobe.<br />Styled by AI.
        </h1>
        <p style={{
          fontSize: 15, color: "#6B6B66", lineHeight: 1.5, marginBottom: 20,
        }}>
          WARDELIO helps you discover, try and wear the best outfits from what you own.
        </p>

        {/* Fashion flat-lay image with floating cards */}
        <div style={{
          width: "100%", height: 280, borderRadius: "var(--radius-lg)",
          position: "relative", marginBottom: 20, overflow: "visible",
        }}>
          {/* Main flat-lay image */}
          <div style={{
            width: "100%", height: "100%",
            backgroundImage: "url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80)",
            backgroundSize: "cover", backgroundPosition: "center top",
            borderRadius: "var(--radius-lg)",
            filter: "brightness(0.95) saturate(1.1)",
          }} />

          {/* Floating feature cards */}
          {[
            { title: "Smart Wardrobe", desc: "Digitize, organize and enrich your clothes.", icon: Shirt, top: 12, left: 0 },
            { title: "AI Stylist", desc: "Outfits tailored to your style, occasion and the weather.", icon: Sparkles, top: 24, right: 0 },
            { title: "Virtual Try-On", desc: "See how outfits look on you before you wear them.", icon: User, bottom: 36, left: 0 },
            { title: "Private & Secure", desc: "Your data is yours. 100% private.", icon: Shield, bottom: 24, right: 0 },
          ].map((card) => {
            const Icon = card.icon;
            const pos: React.CSSProperties = {};
            if (card.top !== undefined) pos.top = card.top;
            if (card.bottom !== undefined) pos.bottom = card.bottom;
            if (card.left !== undefined) pos.left = card.left;
            if (card.right !== undefined) pos.right = card.right;
            return (
              <div key={card.title} style={{
                position: "absolute", ...pos,
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(10px)",
                padding: "8px 10px",
                borderRadius: 10,
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                display: "flex", alignItems: "center", gap: 8,
                maxWidth: 160,
                animation: "scaleIn 0.4s ease-out both",
              } as React.CSSProperties}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: "rgba(200,169,106,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={13} style={{ color: "#C8A96A" }} />
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#161616", lineHeight: 1.2 }}>{card.title}</div>
                  <div style={{ fontSize: 8, color: "#6B6B66", lineHeight: 1.3 }}>{card.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination dots */}
        <div style={{ display: "flex", gap: 6, justifyContent: "center", marginBottom: 20 }}>
          {[0,1,2,3].map((i) => (
            <div key={i} style={{
              width: i === 0 ? 20 : 6, height: 6, borderRadius: 3,
              background: i === 0 ? "#161616" : "#E9E5DF",
              transition: "all 0.3s",
            }} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "0 24px 40px" }}>
        <button onClick={onGetStarted} style={{
          width: "100%", padding: "16px 24px", border: "none",
          borderRadius: "var(--radius-xl)", background: "#161616",
          color: "#C8A96A", fontSize: 16, fontWeight: 600,
          cursor: "pointer", display: "flex", alignItems: "center",
          justifyContent: "center", gap: 8,
          transition: "transform 0.2s",
        }}>
          Get Started <ArrowRight size={18} />
        </button>
        <div style={{
          textAlign: "center", marginTop: 14, fontSize: 14, color: "#6B6B66",
        }}>
          Already have an account?{" "}
          <button onClick={onLogin} style={{
            border: "none", background: "none", color: "#C8A96A",
            fontSize: 14, fontWeight: 500, cursor: "pointer",
          }}>Log in</button>
        </div>
      </div>
    </div>
  );
}
