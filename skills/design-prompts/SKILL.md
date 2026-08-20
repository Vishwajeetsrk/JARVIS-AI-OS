---
name: design-prompts
description: 32 premium design styles from designprompts.dev with full AI-ready prompts, color tokens, typography, and layout recipes. Use when the user asks for a website with a specific style (brutalism, glassmorphism, cyberpunk, Swiss, art deco, academia, vaporwave, etc.) or wants design inspiration to recreate an aesthetic.
license: Reference only — prompts and tokens from designprompts.dev for generating original designs.
---

# Design Prompts — AI-Powered Design Style Explorer

Designprompts.dev renders 32 curated design styles from the same content. This skill gives you the full recipe for each: design philosophy, color tokens, typography, radius/border rules, shadows, components, and the AI-ready prompt.

## Usage

When the user asks for a design in a specific style, or you want to pick a style that fits a brief:

1. **Pick a style** from the catalog below by name, mode, or font type.
2. **Load the full style recipe** from `design-prompt-styles.md` (grep for the style slug, e.g. `===== STYLE: cyberpunk =====`).
3. **Apply the tokens** directly — colors, fonts, radii, shadows.
4. **Build the page** following the style's component recipes (hero, stats, features, pricing, testimonials, footer).

## Style Catalog (32)

| Slug | Name | Mode | Font | Accent | Vibe |
|---|---|---|---|---|---|
| academia | Academia | dark | serif | #C9A962 brass | university libraries, warm paper, gold/crimson |
| art-deco | Art Deco | dark | serif | #D4AF37 | 1920s Gatsby, gold metallic, symmetry |
| aurora-mesh | Aurora Mesh | dark | sans | violet→fuchsia→cyan | soft gradient mesh backgrounds |
| bauhaus | Bauhaus | light | — | #D02020 | primary red/yellow/blue geometry |
| bold-typography | Bold Typography | dark | — | #FF3D00 | type-only, oversized headlines |
| botanical | Botanical | light | serif | #C27B66 | alabaster/forest/sage/clay, Playfair |
| claymorphism | Clay | light | sans | #F472B6 | candy pastels, soft inflated shadows |
| cyberpunk | Cyberpunk | dark | mono | #00ff88 | neon on black, glitch, terminal |
| enterprise | Corporate Trust | light | sans | #4F46E5 | approachable modern SaaS |
| flat-design | Flat Design | light | sans | #3B82F6 | no depth, solid blocks |
| glassmorphism | Glassmorphism | dark | sans | #2997FF/#BF5AF2 | translucent blur panels, mesh |
| industrial | Industrial | light | sans | #EA580C | safety orange, matte, vents/screws |
| kinetic | Kinetic | dark | sans | #F97316 | motion-first typography |
| luxury | Luxury | light | serif | #D4AF37 | gold on dark neutrals |
| material-design | Material Design | light | — | #7C3AED | Material You palette |
| maximalism | Maximalism | light | — | #EC4899 | loud color, hard shadows |
| minimal-dark | Simple Dark | dark | sans | #F59E0B | deep slate + warm amber |
| modern-dark | Modern Dark | dark | — | #6366F1 | dark + indigo/violet |
| monochrome | Monochrome | light | — | #ffffff | pure black/white/gray scale |
| neo-brutalism | Neo Brutalism | light | sans | #FACC15 | raw high-contrast, DIY punk |
| neumorphism | Neumorphism | light | sans | #64748B | cool grey, dual RGB shadows |
| newsprint | Newsprint | light | — | #1a1a1a | newspaper black on white |
| organic | Organic | light | serif | #5D7052 | moss/terracotta/sand, Fraunces |
| playful-geometric | Playful Geometric | light | sans | #8B5CF6 | chunky display, soft pastels |
| professional | Business Style | light | serif | #B8860B | ivory/ink/gold, Playfair |
| retro | Retro (Win95) | light | sans | #9333EA | C0C0C0 grey, classic OS colors |
| saas | Tech Style | light | sans | #0052FF | Calistoga/Inter, blue gradient |
| sketch | Hand-Drawn | light | sans | #ff4d4d | paper/pencil/marker, Kalam |
| swiss-minimalist | Swiss | light | sans | #DC2626 | #FFF/#000/#FF3000, grid + Inter |
| terminal | Terminal CLI | dark | mono | #33ff00 | green-on-black, JetBrains Mono |
| vaporwave | Vaporwave | dark | mono | #FF00FF | magenta/cyan/orange, retro-future |
| web3 | Crypto | dark | sans | #F7931A | Bitcoin orange, futuristic |

## Style Recipe Structure

Each style in `design-prompt-styles.md` contains:

- **Design Philosophy** — core principles and the "promise" of the style
- **Color System** — foundation + accent colors as named tokens (background, backgroundAlt, foreground, muted, mutedForeground, border, accent, accentSecondary, accentForeground) with usage rules and contrast ratios
- **Typography System** — heading/body/display font stacks, type scale, weights, special patterns (drop caps, overlines, engraved text)
- **Radius & Border System** — corner radii, signature shapes (e.g. cathedral arch-top), border styling
- **Shadows & Depth** — shadow recipes for cards, hover states, elevation
- **Component Recipes** — layoutIdeas for hero, stats, productDetail, features, benefits, howItWorks, pricing, testimonials, faq, blog, footer
- **AI-Ready Prompt** — the full `# Design Style: <Name>` markdown prompt to regenerate the aesthetic

## Best Practices

- **Match mode to context**: dark styles for night/tech/crypto; light for business/ecommerce/editorial.
- **Keep the signature**: each style has one defining element (arch-top for academia, wax seals for academia pricing, glitch for cyberpunk, grid for swiss) — use it deliberately, don't overdo it.
- **Use the real tokens**: always apply the style's exact hex values and font stacks rather than approximating.
- **Follow the layout ideas**: the layoutIdeas recipes describe exactly how each section should be laid out (column splits, card grids, timelines). Follow them.
- **When unsure which style**: ask the user to pick from the catalog, or infer from their industry/vibe (gaming → cyberpunk/web3, finance → enterprise/luxury, fashion → art-deco/botanical, developer → terminal/monochrome).