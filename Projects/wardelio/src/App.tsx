import { useState, useCallback } from "react";
import { S01Splash } from "./screens/S01Splash";
import { S02Welcome } from "./screens/S02Welcome";
import { S03Onboarding } from "./screens/S03Onboarding";
import { S06AgeGate } from "./screens/S06AgeGate";
import { S07Privacy } from "./screens/S07Privacy";
import { S08SignUp } from "./screens/S08SignUp";
import { S09LogIn } from "./screens/S09LogIn";
import { S10ForgotPassword } from "./screens/S10ForgotPassword";
import { S11StyleProfile } from "./screens/S11StyleProfile";
import { S12Compare } from "./screens/S12Compare";

type Screen =
  | "splash"
  | "welcome"
  | "onboarding-1"
  | "onboarding-2"
  | "onboarding-3"
  | "age-gate"
  | "privacy"
  | "sign-up"
  | "login"
  | "forgot-password"
  | "style-profile"
  | "compare";

export default function App() {
  const [screen, setScreen] = useState<Screen>("splash");

  const go = useCallback((s: Screen) => setScreen(s), []);

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      background: "#0D0C0A",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}>
      <div className="phone-frame">
        <div className="phone-notch" />

        {screen === "splash" && (
          <S01Splash onComplete={() => go("welcome")} />
        )}

        {screen === "welcome" && (
          <S02Welcome
            onGetStarted={() => go("onboarding-1")}
            onSkip={() => go("sign-up")}
            onLogin={() => go("login")}
          />
        )}

        {screen === "onboarding-1" && (
          <S03Onboarding
            step={1}
            onNext={() => go("onboarding-2")}
            onSkip={() => go("sign-up")}
            onLogin={() => go("login")}
          />
        )}

        {screen === "onboarding-2" && (
          <S03Onboarding
            step={2}
            onNext={() => go("onboarding-3")}
            onSkip={() => go("sign-up")}
            onLogin={() => go("login")}
          />
        )}

        {screen === "onboarding-3" && (
          <S03Onboarding
            step={3}
            onNext={() => go("age-gate")}
            onSkip={() => go("sign-up")}
            onLogin={() => go("login")}
          />
        )}

        {screen === "age-gate" && (
          <S06AgeGate
            onContinue={() => go("privacy")}
            onBack={() => go("onboarding-3")}
          />
        )}

        {screen === "privacy" && (
          <S07Privacy
            onContinue={() => go("style-profile")}
            onBack={() => go("age-gate")}
          />
        )}

        {screen === "style-profile" && (
          <S11StyleProfile
            onComplete={() => go("sign-up")}
            onBack={() => go("privacy")}
          />
        )}

        {screen === "sign-up" && (
          <S08SignUp
            onSignUp={() => go("welcome")}
            onLogin={() => go("login")}
            onBack={() => go("privacy")}
          />
        )}

        {screen === "login" && (
          <S09LogIn
            onLogIn={() => go("welcome")}
            onSignUp={() => go("sign-up")}
            onForgotPassword={() => go("forgot-password")}
            onBack={() => go("welcome")}
          />
        )}

        {screen === "forgot-password" && (
          <S10ForgotPassword
            onBack={() => go("login")}
          />
        )}

        {screen === "compare" && (
          <S12Compare onBack={() => go("welcome")} />
        )}

        {/* Dev: Compare demo FAB — remove in production */}
        {screen !== "compare" && (
          <button
            onClick={() => go("compare")}
            style={{
              position: "absolute",
              bottom: 88,
              right: 16,
              zIndex: 50,
              background: "var(--accent)",
              color: "#111",
              border: "none",
              borderRadius: 9999,
              padding: "10px 14px",
              fontSize: 12,
              fontWeight: 700,
              boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
              cursor: "pointer",
            }}
          >
            Compare
          </button>
        )}
      </div>
    </div>
  );
}
