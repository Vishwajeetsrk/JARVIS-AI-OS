import { useState } from "react";
import { Shield, ArrowRight, ArrowLeft, Check } from "lucide-react";

interface S06AgeGateProps {
  onContinue: () => void;
  onBack: () => void;
}

export function S06AgeGate({ onContinue, onBack }: S06AgeGateProps) {
  const [dd, setDd] = useState("");
  const [mm, setMm] = useState("");
  const [yyyy, setYyyy] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  const isValid = dd.length === 2 && mm.length === 2 && yyyy.length === 4 && confirmed;

  const handleContinue = () => {
    const birth = new Date(parseInt(yyyy), parseInt(mm) - 1, parseInt(dd));
    const age = Math.floor((Date.now() - birth.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
    if (age < 18) {
      setError("You must be 18 years or older to use WARDELIO.");
      return;
    }
    onContinue();
  };

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
                width: i === 1 ? 24 : 6, height: 4, borderRadius: 2,
                background: i === 1 ? "var(--text-primary)" : "var(--border)",
              }} />
            ))}
          </div>
        </div>
        <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>Step 1 of 5</span>
      </div>

      <div style={{ flex: 1, padding: "24px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Shield icon */}
        <div style={{
          width: 64, height: 64, borderRadius: "50%",
          background: "rgba(200,169,106,0.1)", border: "1.5px solid rgba(200,169,106,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 20,
        }}>
          <Shield size={28} style={{ color: "var(--accent)" }} />
        </div>

        <h1 style={{ fontSize: 26, fontWeight: 800, textAlign: "center", marginBottom: 8 }}>Let's get started</h1>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", textAlign: "center", lineHeight: 1.5, marginBottom: 28 }}>
          To create a safe and personalized experience, we need to confirm your age.
        </p>

        {/* DOB */}
        <div style={{ width: "100%", marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "1px", color: "var(--text-secondary)", marginBottom: 8, textAlign: "center" }}>
            PLEASE ENTER YOUR DATE OF BIRTH
          </div>
          <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
            {[
              { val: dd, set: setDd, label: "DD", max: 2 },
              { val: mm, set: setMm, label: "MM", max: 2 },
              { val: yyyy, set: setYyyy, label: "YYYY", max: 4 },
            ].map((f, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <input
                  className="input-field"
                  value={f.val}
                  onChange={(e) => f.set(e.target.value.slice(0, f.max))}
                  placeholder={f.label}
                  maxLength={f.max}
                  style={{ width: i === 2 ? 100 : 70, textAlign: "center", fontSize: 18, fontWeight: 600, padding: "12px 8px" }}
                />
                <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 4 }}>{f.label}</div>
              </div>
            ))}
          </div>
          {error && (
            <div style={{ color: "var(--error)", fontSize: 12, textAlign: "center", marginTop: 8 }}>{error}</div>
          )}
          <p style={{ fontSize: 12, color: "var(--text-secondary)", textAlign: "center", marginTop: 12 }}>
            You must be 18 years or older to use WARDELIO.
          </p>
        </div>

        {/* Checkbox */}
        <label style={{
          display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer",
          padding: "12px 0", width: "100%",
        }}>
          <div onClick={() => setConfirmed(!confirmed)} style={{
            width: 22, height: 22, borderRadius: 6, border: confirmed ? "none" : "1.5px solid var(--border)",
            background: confirmed ? "var(--text-primary)" : "transparent",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, marginTop: 1,
          }}>
            {confirmed && <Check size={14} style={{ color: "var(--accent)" }} />}
          </div>
          <span style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.4 }}>
            I confirm that I am 18 years or older and agree to the <span style={{ color: "var(--accent)" }}>Terms of Use</span> and <span style={{ color: "var(--accent)" }}>Privacy Policy</span>.
          </span>
        </label>
      </div>

      {/* CTA */}
      <div style={{ padding: "0 24px 40px" }}>
        <button className="btn-primary" disabled={!isValid} onClick={handleContinue}>
          Continue <ArrowRight size={18} />
        </button>
        <div style={{ textAlign: "center", marginTop: 14, fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
          🔒 Your information is private and secure.
        </div>
      </div>
    </div>
  );
}
