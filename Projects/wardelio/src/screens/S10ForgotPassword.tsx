import { useState } from "react";
import { tokens } from "../tokens";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Mail, CheckCircle } from "../components/icons";

interface S10ForgotPasswordProps {
  onBack: () => void;
}

export function S10ForgotPassword({ onBack }: S10ForgotPasswordProps) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="screen" style={{
        background: tokens.colors.bg,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", padding: 24,
      }}>
        <div style={{
          width: 80, height: 80, borderRadius: tokens.radius.full,
          background: tokens.colors.successLight,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 24,
        }}>
          <CheckCircle size={40} style={{ color: tokens.colors.success }} />
        </div>
        <h2 style={{
          fontSize: 24, fontWeight: 700, color: tokens.colors.textPrimary,
          textAlign: "center", marginBottom: 8,
        }}>Check your email</h2>
        <p style={{
          fontSize: 15, color: tokens.colors.textSecondary, textAlign: "center",
          lineHeight: 1.5, marginBottom: 32, maxWidth: 280,
        }}>
          We sent a password reset link to{"\n"}
          <strong style={{ color: tokens.colors.textPrimary }}>{email}</strong>
        </p>
        <Button variant="primary" onClick={onBack}>
          Back to Log In
        </Button>
        <button
          onClick={() => setSent(false)}
          style={{
            marginTop: 16, border: "none", background: "none",
            color: tokens.colors.textSecondary, fontSize: 14, cursor: "pointer",
          }}
        >
          Didn't receive it? Try again
        </button>
      </div>
    );
  }

  return (
    <div className="screen" style={{
      background: tokens.colors.bg,
      display: "flex", flexDirection: "column",
    }}>
      <div className="phone-status-bar" style={{ color: tokens.colors.textPrimary }}>
        <span>9:41</span>
        <div style={{ display: "flex", gap: 4, fontSize: 12 }}>●●●●</div>
      </div>

      {/* Back */}
      <div style={{ padding: "58px 20px 0", display: "flex", justifyContent: "flex-start" }}>
        <button onClick={onBack} style={{
          border: "none", background: "none", cursor: "pointer",
          fontSize: 15, color: tokens.colors.textPrimary, fontWeight: 500, padding: 8,
        }}>← Back</button>
      </div>

      <div style={{ flex: 1, padding: "8px 24px", display: "flex", flexDirection: "column" }}>
        {/* Title */}
        <h1 style={{
          fontSize: 28, fontWeight: 800, lineHeight: 1.15,
          color: tokens.colors.textPrimary, textAlign: "center", marginBottom: 8,
          marginTop: 32,
        }}>Reset password</h1>
        <p style={{
          fontSize: 15, color: tokens.colors.textSecondary, textAlign: "center",
          marginBottom: 32, lineHeight: 1.5,
        }}>
          Enter your email and we'll send you a link to reset your password.
        </p>

        {/* Email */}
        <Input
          placeholder="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          leftIcon={<Mail size={18} />}
          style={{ marginBottom: 24 }}
        />

        {/* Send */}
        <Button
          variant="primary"
          onClick={() => setSent(true)}
          disabled={!email.includes("@")}
        >
          Send Reset Link
        </Button>
      </div>
    </div>
  );
}
