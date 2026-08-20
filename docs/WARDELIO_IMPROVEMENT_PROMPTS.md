# 👗 WARDELIO — Master AI Improvement Prompts & Engineering Blueprints

Use these targeted, production-ready prompts in Antigravity, Cursor, or Claude to upgrade Wardelio into a luxury AI fashion platform.

---

### 🌟 PROMPT 1: 3D Virtual Try-On 360° & Cloth Physics Engine
```markdown
You are a Principal 3D Graphics Engineer. Upgrade Wardelio's Virtual Try-On screen (`src/screens/S100_VirtualTryOn360.tsx`) using Three.js and Framer Motion:
1. Implement a 360-degree interactive orbital turntable with touch rotation gestures and spring inertia damping.
2. Add dynamic realistic fabric shaders (silk sheen, denim texture, leather specular highlights) using Three.js MeshStandardMaterial.
3. Integrate smooth zoom controls, lighting angle toggles (Studio Warm, Sunset Golden, Cyber Neon), and a before/after split slider.
4. Ensure 60 FPS performance on iOS and Android devices with WebGL context recycling and low power draw.
```

---

### 🧠 PROMPT 2: AI Stylist & Real-Time Weather-Adaptive Wardrobe Matrix
```markdown
You are an AI Systems Architect. Upgrade Wardelio's AI Stylist (`src/screens/S80_OutfitAssistant.tsx` & `src/screens/S03_AIStylist.tsx`):
1. Connect Google Gemini 2.0 Flash / Generative AI to analyze user garments from camera photos (`S46_AddGarment.tsx`) and auto-tag color palette, fabric, fit, and seasonality.
2. Integrate local weather (temperature, precipitation, UV index) via Capacitor Geolocation & Weather API to dynamically suggest optimal 3-piece outfits.
3. Provide an interactive "Style DNA Breakdown" radar chart showing Casual, Formal, Streetwear, and Avant-Garde percentages.
4. Implement a 1-tap "Swap Item" smart reroll button with instant spring swap animation.
```

---

### ⚡ PROMPT 3: 60 FPS Native Haptic Fluid Gesture Navigation & 3D Buttons
```markdown
You are a Lead Mobile UI/UX Designer. Refactor Wardelio's navigation and interactive feedback across all 27 screens:
1. Replace all standard buttons with `<Mobile3DButton>` featuring tactile 3D spring press physics, glossy bevel lighting, and device vibration haptics via `@capacitor/device` & `navigator.vibrate(12)`.
2. Add pull-to-refresh with luxury golden spinner and smooth edge-swiping tab transitions (`framer-motion` layout animations).
3. Wrap all primary cards with `<LuxuryGlassCard>` featuring subtle 3D tilt perspective and amber ambient rim glow.
4. Implement fluid bottom sheets with velocity-based fling dismiss and gesture tracking.
```

---

### 👑 PROMPT 4: VIP Gold Membership, Gamified Closet & Privacy Center
```markdown
You are a Full-Stack Product Architect. Implement Wardelio's VIP Monetization & Privacy Vault (`src/screens/S50_Settings.tsx` & `src/screens/S131_PrivacyCenter.tsx`):
1. Create a luxury tiered VIP membership modal with animated gold holographic cards (Free Closet, Stylist Pro, Haute Couture VIP).
2. Add a Gamified "Closet Utilization Score" (% of wardrobe worn this month, cost-per-wear metrics, sustainability rating).
3. Implement biometric lock (Face ID / Fingerprint via Capacitor) for the Virtual Try-On photo vault.
4. Add 1-click cloud sync with Supabase and encrypted local SQLite offline mode.
```
