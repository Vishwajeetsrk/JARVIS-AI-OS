import { useState } from "react";
import { tokens } from "../tokens";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Mail, Lock, Eye, EyeOff } from "../components/icons";

interface S09LogInProps {
  onLogIn: () => void;
  onSignUp: () => void;
  onForgotPassword: () => void;
  onBack: () => void;
}

export function S09LogIn({ onLogIn, onSignUp, onForgotPassword, onBack }: S09LogInProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);

  const valid = email.includes("@") && password.length >= 1;

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
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <div style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 36, fontWeight: 400, fontStyle: "italic",
            color: tokens.colors.textPrimary, letterSpacing: 6,
          }}>W</div>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 28, fontWeight: 800, lineHeight: 1.15,
          color: tokens.colors.textPrimary, textAlign: "center", marginBottom: 8,
        }}>Welcome back</h1>
        <p style={{
          fontSize: 15, color: tokens.colors.textSecondary, textAlign: "center",
          marginBottom: 28, lineHeight: 1.5,
        }}>Log in to your wardrobe.</p>

        {/* Social buttons */}
        <button style={{
          width: "100%", padding: "14px 24px", border: `1.5px solid ${tokens.colors.border}`,
          borderRadius: tokens.radius.xl, background: tokens.colors.surface,
          fontSize: 15, fontWeight: 500, color: tokens.colors.textPrimary,
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
          marginBottom: 12, fontFamily: tokens.typography.fontFamily,
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="currentColor"/></svg>
          Continue with Apple
        </button>

        <button style={{
          width: "100%", padding: "14px 24px", border: `1.5px solid ${tokens.colors.border}`,
          borderRadius: tokens.radius.xl, background: tokens.colors.surface,
          fontSize: 15, fontWeight: 500, color: tokens.colors.textPrimary,
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
          marginBottom: 20, fontFamily: tokens.typography.fontFamily,
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ flex: 1, height: 1, background: tokens.colors.border }} />
          <span style={{ fontSize: 13, color: tokens.colors.textMuted }}>or continue with email</span>
          <div style={{ flex: 1, height: 1, background: tokens.colors.border }} />
        </div>

        {/* Email */}
        <Input
          placeholder="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          leftIcon={<Mail size={18} />}
          style={{ marginBottom: 12 }}
        />

        {/* Password */}
        <Input
          placeholder="Password"
          type={showPw ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          leftIcon={<Lock size={18} />}
          rightIcon={showPw ? <EyeOff size={18} /> : <Eye size={18} />}
          onRightIconClick={() => setShowPw(!showPw)}
          style={{ marginBottom: 12 }}
        />

        {/* Forgot password */}
        <div style={{ textAlign: "right", marginBottom: 24 }}>
          <button onClick={onForgotPassword} style={{
            border: "none", background: "none", color: tokens.colors.accent,
            fontSize: 14, fontWeight: 500, cursor: "pointer",
          }}>Forgot password?</button>
        </div>

        {/* Log In */}
        <Button variant="primary" onClick={onLogIn} disabled={!valid}>
          Log In
        </Button>
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "16px 24px 40px", fontSize: 14, color: tokens.colors.textSecondary }}>
        Don't have an account?{" "}
        <button onClick={onSignUp} style={{
          border: "none", background: "none", color: tokens.colors.accent,
          fontSize: 14, fontWeight: 500, cursor: "pointer",
        }}>Sign up</button>
      </div>
    </div>
  );
}
