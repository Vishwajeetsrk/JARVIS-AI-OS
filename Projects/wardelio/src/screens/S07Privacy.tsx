import { useState } from "react";
import { Camera, Image, MapPin, BarChart3, Sparkles, Shield, ArrowRight, ArrowLeft } from "lucide-react";

interface S07PrivacyProps {
  onContinue: () => void;
  onBack: () => void;
}

const PERMISSIONS = [
  { icon: Camera, title: "Camera Access", desc: "Used to add clothes and for virtual try-on.", key: "camera" },
  { icon: Image, title: "Photo Library Access", desc: "Used to upload photos of your clothes and try-on.", key: "photos" },
  { icon: MapPin, title: "Location Access", desc: "Used to get weather updates relevant to your location.", key: "location" },
  { icon: BarChart3, title: "Usage & Analytics", desc: "Helps us improve recommendations and app performance.", key: "analytics" },
  { icon: Sparkles, title: "Personalization & AI", desc: "Used to personalize outfits based on your preferences and wardrobe.", key: "ai" },
];

export function S07Privacy({ onContinue, onBack }: S07PrivacyProps) {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    camera: true, photos: true, location: true, analytics: false, ai: true,
  });

  const toggle = (key: string) => setToggles((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="screen" style={{ background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ padding: "60px 20px 0", display: "flex", alignItems: "center" }}>
        <button onClick={onBack} style={{ border: "none", background: "none", cursor: "pointer", padding: 8 }}>
          <ArrowLeft size={20} />
        </button>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", paddingRight: 36 }}>
          <div style={{ display: "flex", gap: 4 }}>
            {[1,2,3,4,5].map((i) => (
              <div key={i} style={{
                width: i === 2 ? 24 : 6, height: 4, borderRadius: 2,
                background: i <= 2 ? "var(--text-primary)" : "var(--border)",
              }} />
            ))}
          </div>
        </div>
        <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>Step 2 of 5</span>
      </div>

      <div style={{ flex: 1, padding: "8px 24px", overflowY: "auto" }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "1.5px", marginBottom: 8, textAlign: "center" }}>
          YOUR PRIVACY MATTERS
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.15, marginBottom: 8, textAlign: "center" }}>
          Your data. Your choice.<br />We keep it private.
        </h1>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", textAlign: "center", lineHeight: 1.5, marginBottom: 20 }}>
          We use your information only to personalize your style experience. You're always in control.
        </p>

        {/* Permissions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
          {PERMISSIONS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.key} className="card" style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px" }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: "rgba(200,169,106,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Icon size={16} style={{ color: "var(--accent)" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{p.title}</div>
                  <div style={{ fontSize: 11, color: "var(--text-secondary)" }}>{p.desc}</div>
                </div>
                <button onClick={() => toggle(p.key)} style={{
                  width: 44, height: 26, borderRadius: 13, border: "none", cursor: "pointer",
                  background: toggles[p.key] ? "var(--accent)" : "var(--border)",
                  position: "relative", transition: "background 0.2s",
                }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: "50%", background: "white",
                    position: "absolute", top: 3,
                    left: toggles[p.key] ? 21 : 3,
                    transition: "left 0.2s",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                  }} />
                </button>
              </div>
            );
          })}

          {/* Data Security — always on */}
          <div className="card" style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "rgba(200,169,106,0.04)" }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "rgba(200,169,106,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <Shield size={16} style={{ color: "var(--accent)" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Data Security</div>
              <div style={{ fontSize: 11, color: "var(--text-secondary)" }}>Your data is encrypted and never shared with third parties.</div>
            </div>
            <span style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600 }}>Always On ✓</span>
          </div>
        </div>

        <p style={{ fontSize: 12, color: "var(--text-secondary)", textAlign: "center", marginBottom: 4 }}>
          🔒 We never sell your data. You can change permissions anytime in <span style={{ color: "var(--accent)" }}>Settings</span>.
        </p>
      </div>

      {/* CTA */}
      <div style={{ padding: "0 24px 40px" }}>
        <button className="btn-primary" onClick={onContinue}>
          I Agree & Continue <ArrowRight size={18} />
        </button>
        <button className="btn-text" style={{ width: "100%", textAlign: "center", marginTop: 8, fontSize: 14 }}>
          Customize My Permissions
        </button>
        <div style={{ textAlign: "center", marginTop: 8, fontSize: 11, color: "var(--text-muted)" }}>
          🔒 Read our <span style={{ color: "var(--accent)" }}>Privacy Policy</span> and <span style={{ color: "var(--accent)" }}>Terms of Use</span>
        </div>
      </div>
    </div>
  );
}
