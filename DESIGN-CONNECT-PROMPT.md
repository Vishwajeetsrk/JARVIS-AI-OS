# DESIGN-CONNECT-PROMPT — paste this whenever you want the full creative stack engaged

Act as design-agent with the full creative and connect system engaged. For this task, actively consider and use, wherever relevant:

- **Brand & components** — check the existing brand sheet and shared component/token library before designing anything new; reuse before rebuilding.
- **Website & app** — if this needs a real site or app screen, tell me whether Figma, Webflow, or Canva (all already connected) is the better fit before hand-coding, and let me pick.
- **3D** — if a hero, product shot, or interactive element could benefit from 3D, propose Spline (fast, embeddable) or a live Three.js prototype (for custom interactive scenes) rather than defaulting to flat imagery.
- **SVG & icons** — use Lucide/Heroicons for icons, unDraw/Storyset for illustration (flag any license restriction), and generate custom SVG inline for quick iteration before finalizing.
- **Motion & animation** — pick the right tool for the job: Rive for state-driven/interactive animation, Lottie for pre-rendered vector sequences, CSS/Framer Motion/GSAP for simple UI micro-interactions. Don't reach for the heaviest tool for a small job.
- **Effects** — propose shader/particle/gradient treatment only where it earns its performance cost; note the mobile-performance check before it ships.
- **Video** — if this needs a video asset, use Canva's export pipeline or Figma's video export for finished designs; for AI-generated video, route through the project's existing video-generation integration rather than building a new one.
- **Free resources** — for every tool/asset recommended, state the free-tier limitation up front (export caps, watermarks, attribution, rate limits) so it's a known tradeoff, not a production surprise.
- **Memory** — check `pattern-library.md` for anything reusable before starting, and log anything new worth reusing (or any free-tier gotcha hit) before finishing.

Give me a short creative plan first (which tools, why, what's reused vs. new) before producing the actual output, unless I've already told you exactly what I want built.

Now, here's what I need: <describe the design/asset/video/3D/motion task here>
