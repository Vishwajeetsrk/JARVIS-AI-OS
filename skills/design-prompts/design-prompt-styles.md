===== STYLE BLOCK: academia (offset 449787 to 479143) =====
academia:{id:"academia",name:"Academia",mode:"dark",fontType:"serif",description:"University aesthetic, old libraries, warm paper textures, traditional serifs, gold/crimson accents.",layoutIdeas:{hero:"Asymmetric two-column layout (7/5 split) with ornate decorative corner flourishes. Left column contains brass accent line with establishment date, large serif headline with first word highlighted in brass, drop-cap paragraph, and dual CTAs. Right column features arch-topped sepia image with brass border overlay.",stats:"Full-width horizontal band with four equal columns separated by vertical borders. Each stat features large brass numbers in Cinzel, small uppercase labels, and subtle hover interactions that scale numbers and change background opacity.",productDetail:"Centered content within ornate frame. Brass horizontal lines flanking 'Proclamation' label, large serif headline, ornate divider, and multi-paragraph body text with drop cap on first paragraph.",features:"Three-column grid of cards with corner flourishes. Each card has circular icon container with brass border, Roman numeral label in Cinzel, serif heading, and body text. Cards lift on hover with brass border tint.",benefits:"Three-column grid with gradient dividers above each item. Roman numeral labels, serif headings, and body text. Dividers animate from wood-grain to full brass on hover.",howItWorks:"Alternating timeline layout with vertical brass connector line and medallions. Content alternates left/right with Roman numeral medallions centered. Each step features serif heading and description.",pricing:"Three-column card layout with highlighted tier featuring brass border and ring. Wax seal badges on featured plans positioned at top-right. Cards include tier name, large price in Cormorant, feature list with check icons, and CTA button.",testimonials:"Two-column grid of testimonial blocks. Each features large decorative quote mark, 5-star rating, serif quote text in italic, circular avatar image with sepia filter, author name in Cinzel, and role.",faq:"Accordion with border dividers. Each item has Roman numeral prefix, serif question, and brass-bordered toggle button that rotates on open. Mobile-optimized with larger touch targets (48px min-height).",blog:"Three-column grid of article cards. Each card has arch-topped sepia image that scales on hover, metadata row with date and author separated by divider, and serif headline that transitions to brass on hover.",footer:"CTA section with two-column split (headline/email signup), ornate divider separator, then three-column footer with logo, copyright, and social links in uppercase Cinzel."},content:`# Design Style: Academia / Classical

## Design Philosophy

**Core Principles**: Scholarly gravitas meets timeless elegance. This style channels the atmosphere of centuries-old university libraries, Victorian study halls, and Renaissance manuscripts. Every element must feel like it belongs in a prestigious institution - combining **rich material references** (aged parchment, dark mahogany wood, polished brass hardware, crimson leather bindings) with **traditional typographic excellence** and **measured ornamentation**.

**Vibe**: Scholarly, Prestigious, Warm, Timeless, Dignified, Intellectual, Distinguished.

**The Academia Promise**: This isn't a modern dark theme with serif fonts. It's a complete transformation into a physical library environment where every interaction feels like turning pages in a leather-bound tome, where brass fixtures catch the light, and where centuries of knowledge create an atmosphere of gravitas and trust.

---

## Design Token System (The DNA)

### Color System (Library at Night)

**Foundation Colors**:
- **background**: \`#1C1714\` (Deep Mahogany) - The darkest wood tone, foundation of all layouts
- **backgroundAlt**: \`#251E19\` (Aged Oak) - Surface elevation, cards, and panel backgrounds
- **foreground**: \`#E8DFD4\` (Antique Parchment) - Primary text, warm cream tone
- **muted**: \`#3D332B\` (Worn Leather) - Tertiary backgrounds, disabled states
- **mutedForeground**: \`#9C8B7A\` (Faded Ink) - Secondary text, labels, metadata
- **border**: \`#4A3F35\` (Wood Grain) - Subtle borders and dividers

**Accent Colors**:
- **accent**: \`#C9A962\` (Polished Brass) - Primary interactive color, highlights, focus states
- **accentSecondary**: \`#8B2635\` (Library Crimson) - Emphasis badges, hover transforms
- **accentForeground**: \`#1C1714\` (Dark on Brass) - Text on brass-colored buttons

**Color Usage Rules**:
1. **Contrast Ratios**: Maintain 8.5:1 for parchment on mahogany, minimum 4.5:1 for muted text
2. **Layering Strategy**: Always layer backgroundAlt on top of background for depth (cards, panels)
3. **Brass Application**: Use brass for ALL interactive elements (buttons, links, focus rings, icons)
4. **Crimson Sparingly**: Reserve crimson for special emphasis (featured pricing tier, wax seals, hover transforms on secondary buttons)
5. **Border Subtlety**: Borders should be visible but never harsh - wood grain color provides gentle separation

**Brass Gradient Formula** (for buttons and metallic elements):
\`\`\`
background: linear-gradient(180deg, #D4B872 0%, #C9A962 50%, #B8953F 100%)
\`\`\`
This creates authentic polished brass with highlights and shadows.

### Typography System

**Font Families**:
- **Heading Font**: \`"Cormorant Garamond", serif\` - High-contrast old-style serif with calligraphic elegance
- **Body Font**: \`"Crimson Pro", serif\` - Book-style serif designed for extended reading
- **Display Font**: \`"Cinzel", serif\` - Engraved, all-caps display font for labels and special emphasis

**Type Scale & Hierarchy**:
- **Display Headings**: \`text-5xl\` to \`text-7xl\` (48px-72px), Cormorant Garamond, \`leading-[1.1]\`, \`tracking-tight\`
- **Section Headings**: \`text-4xl\` to \`text-5xl\` (36px-48px), Cormorant Garamond
- **Subsection Headings**: \`text-2xl\` to \`text-3xl\` (24px-30px), Cormorant Garamond
- **Body Text**: \`text-base\` to \`text-lg\` (16px-18px), Crimson Pro, \`leading-relaxed\` (1.625)
- **Labels/Overlines**: \`text-xs\` to \`text-[10px]\` (10px-12px), Cinzel, \`uppercase\`, \`tracking-[0.2em]\` to \`tracking-[0.3em]\`

**Font Weight Distribution**:
- Headings: Regular/Normal (400-500) - avoid heavy weights, let the serif do the work
- Body: Regular (400)
- Labels: Medium (500-600) for Cinzel
- Emphasis: Italic rather than bold for body text

**Special Typography Patterns**:
1. **Drop Caps**: First letter of introductory paragraphs
   - Font: Cinzel (display font)
   - Size: \`text-7xl\` (72px), \`float-left\`, \`mr-4\`, \`leading-[0.8]\`
   - Color: Brass (\`#C9A962\`)
   - Shadow: \`2px 2px 4px rgba(0,0,0,0.3)\` for engraved depth

2. **Section Numbering**: Use Roman numerals (I, II, III, IV, V...) with "Volume" prefix for major sections
   - Font: Cinzel, \`text-xs\`, \`uppercase\`, \`tracking-[0.25em]\` to \`tracking-[0.3em]\`
   - Color: Brass
   - Pattern: "Volume I", "Volume II", etc. for major section headers; standalone Roman numerals for lists and sub-items
   - Placement: Positioned above section headings as overline labels

3. **Engraved Text Effect** (for buttons and special headings):
   - \`text-shadow: 1px 1px 1px rgba(0,0,0,0.4), -1px -1px 1px rgba(255,255,255,0.1)\`
   - Creates pressed-into-metal appearance

### Radius & Border System

**Border Radius Values**:
- **Default**: \`4px\` (\`rounded\`) - Subtle, traditional corners for buttons, cards, inputs
- **Arch-Top Special**: \`border-radius: 40% 40% 0 0 / 20% 20% 0 0\` - Cathedral arch tops for images
- **Full Circle**: For icon containers, badges, profile images

**The Arch-Top Signature**:
This is a defining visual element. The formula creates an elegant arch reminiscent of cathedral windows or library alcoves:
\`\`\`css
.arch-top {
  border-radius: 40% 40% 0 0 / 20% 20% 0 0;
}
\`\`\`
Apply to: Hero images, blog thumbnails, feature images, decorative containers.

**Border Styling**:
- **Thickness**: \`1px\` standard, \`2px\` for decorative frames and focus states
- **Color**: \`#4A3F35\` (wood grain) for standard borders, \`#C9A962\` (brass) for interactive/decorative
- **Pattern**: Single solid borders, avoid dashed or dotted

### Shadows & Depth

**Shadow Philosophy**: Shadows should feel like physical depth in a dimly-lit library - soft, warm, and realistic.

**Shadow Recipes**:

1. **Card Elevation** (default):
   \`\`\`
   shadow: none (rely on border and background differentiation)
   hover: 0 8px 24px rgba(0,0,0,0.3)
   \`\`\`

2. **Engraved/Embossed Effect** (buttons, decorative elements):
   \`\`\`
   inset 0 1px 0 rgba(255,255,255,0.2),
   inset 0 -1px 0 rgba(0,0,0,0.2),
   0 2px 8px rgba(0,0,0,0.3)

   hover: Add glow via 0 4px 12px rgba(201,169,98,0.3)
   \`\`\`

3. **Wax Seal Badge**:
   \`\`\`
   inset 0 2px 4px rgba(255,255,255,0.2),
   inset 0 -2px 4px rgba(0,0,0,0.3),
   0 4px 8px rgba(0,0,0,0.4)
   \`\`\`

4. **Focus Ring**:
   \`\`\`
   ring-2 ring-[#C9A962] ring-offset-2 ring-offset-[#1C1714]
   \`\`\`

### Textures & Atmospheric Effects

**1. Aged Paper Texture Overlay**:
- SVG noise filter with fractal turbulence
- Opacity: \`0.03\` (extremely subtle)
- Position: Fixed overlay covering entire viewport
- Blend mode: \`overlay\`
- Purpose: Adds tactile paper grain without overpowering content

**2. Vignette Effect**:
- Radial gradient from center
- Formula: \`radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(28,23,20,0.4) 100%)\`
- Position: Fixed overlay
- Purpose: Focuses attention toward center, mimics library lighting

**3. Sepia Image Treatment**:
- Default state: \`filter: sepia(0.6) contrast(0.95) brightness(0.9)\`
- Hover state: \`filter: sepia(0) contrast(1) brightness(1)\`
- Transition: \`duration-700 ease-out\`
- Purpose: Images appear as aged photographs that reveal full color on interaction

**4. Decorative Patterns**:

**Ornate Corner Flourishes** (for major frames and cards):
\`\`\`css
/* Top-left and bottom-right brass corners */
.ornate-frame::before,
.ornate-frame::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid #C9A962;
}

.ornate-frame::before {
  top: -1px;
  left: -1px;
  border-right: none;
  border-bottom: none;
}

.ornate-frame::after {
  bottom: -1px;
  right: -1px;
  border-left: none;
  border-top: none;
}
\`\`\`

**Ornate Divider** (section separators):
\`\`\`css
/* Gradient line with centered decorative glyph */
.ornate-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #4A3F35 20%, #C9A962 50%, #4A3F35 80%, transparent 100%);
}

.ornate-divider::before {
  content: "�o"; /* or other decorative Unicode character */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #C9A962;
  font-size: 12px;
  background: #1C1714;
  padding: 0 12px;
}
\`\`\`

---

## Section Patterns

### Product Detail Section
This section serves as a formal proclamation or manifesto, positioned after stats to elaborate on the value proposition.

**Structure**:
- Container: Ornate frame with corner flourishes
- Background: \`#251E19/50\` on rounded border
- Header: Centered "Proclamation" label with flanking brass lines
- Headline: Large serif (4xl-6xl) centered with tight line-height
- Ornate divider: Full decorative divider with centered glyph
- Body: Multi-paragraph content with drop cap on first paragraph
- Spacing: Generous padding (p-8 to p-12), centered max-width (max-w-4xl)

**Typography**:
- Label: Cinzel, uppercase, brass color, wide tracking
- Headline: Cormorant Garamond, extra large, standard color
- Body: Text-lg, muted foreground color, relaxed leading
- First paragraph: Drop cap effect automatically applied

This creates a "certificate of excellence" feeling - formal, centered, and authoritative.

---

## Component Styling Principles

### Buttons

**Visual Treatment**:
- Font: Cinzel (display font)
- Text: Uppercase with \`tracking-[0.15em]\`
- Size: Small text (\`text-xs\`) with generous padding for dignified presence
- Effect: Engraved text shadow for pressed-metal appearance

**Primary Button** (brass, main actions):
- Background: Brass gradient (\`linear-gradient(180deg, #D4B872 0%, #C9A962 50%, #B8953F 100%)\`)
- Text: Dark mahogany (\`#1C1714\`) for maximum contrast on brass
- Radius: \`4px\` (rounded)
- Shadow: Inset highlights and depth shadows (see shadow system)
- Hover: Increase brightness to 110%, add brass glow shadow
- Active: Deeper inset shadow for pressed effect

**Secondary Button** (outlined, alternative actions):
- Background: Transparent
- Border: \`2px solid #C9A962\` (brass)
- Text: Brass (\`#C9A962\`)
- Hover: Transform to crimson - \`border: #8B2635\`, \`bg: #8B2635\`, \`text: #E8DFD4\`
- Purpose: Offers elegant alternative that can dramatically transform

**Ghost Button** (minimal, tertiary actions):
- No background or border
- Text: Brass with hover underline
- Underline offset: \`4px\` for breathing room
- Hover: Brighten to \`#D4B872\` with underline

**Button Sizes**:
- Default: \`h-12 px-8\`
- Small: \`h-10 px-6\`
- Large: \`h-14 px-10\`

### Cards & Containers

**Structure**:
- Background: \`#251E19\` (aged oak - one layer above page background)
- Border: \`1px solid #4A3F35\` (wood grain)
- Radius: \`4px\` (rounded)
- Padding: \`p-8\` to \`p-12\` depending on content density
- Position: Relative (for corner flourishes)

**Corner Flourish Pattern**:
- Apply \`.corner-flourish\` class
- Creates subtle brass corner brackets (24px A- 24px)
- Opacity: 0.6 default, 1.0 on hover
- Purpose: Frames content like a certificate or portrait

**Hover Behavior**:
- Border: Transition to \`#C9A962/50\` (brass with transparency)
- Shadow: Add \`0 8px 24px rgba(0,0,0,0.3)\` for lift effect
- Duration: \`300ms\` ease

**Special Card Treatments**:

1. **Certificate/Ledger Style** (pricing cards):
   - Double border effect using box-shadow inset
   - Brass corner accents using pseudo-elements as triangular brackets
   - Featured tier gets brass border and ring

2. **Arch-Top Image Cards** (blog, features):
   - Image container uses arch-top border-radius
   - Image has sepia filter with hover reveal
   - Scale image slightly on card hover (\`scale-105\`)

3. **Wax Seal Badges** (featured items):
   - Circular crimson badge positioned at top-right
   - Radial gradient for dimensional wax appearance
   - Contains icon (typically star)
   - Position: \`-top-3 absolute right-6\`

### Form Inputs

**Text Inputs**:
- Background: \`#251E19\` (aged oak)
- Border: \`1px solid #4A3F35\` (wood grain)
- Text: \`#E8DFD4\` (parchment), Crimson Pro font
- Placeholder: Italic serif, \`#9C8B7A\` (faded ink)
- Height: \`h-12\` (48px)
- Padding: \`px-4 py-2\`
- Radius: \`4px\` (rounded)

**Focus State**:
- Border: \`#C9A962\` (brass)
- Ring: \`ring-2 ring-[#C9A962]/30\` with offset
- No outline, rely on ring for accessibility

**Labels**:
- Position: Above input
- Font: Cinzel, uppercase, small tracking
- Color: \`#9C8B7A\` or brass for important fields

### Interactive States

**Hover States**:
- Links: Brass text with expanded letter-spacing (tracking increase from 0.2em to 0.25em)
- Cards: Brass border tint, shadow lift, corner flourish opacity increase
- Buttons: Brightness increase or color transformation (secondary transforms to crimson)
- Images: Sepia filter removal over 700ms with subtle scale (105%)
- Stats: Number scales to 110%, label changes to brass, background darkens
- Logo: Subtle scale to 105%
- FAQ toggles: Rotate 180deg on open with color transformation

**Focus States** (keyboard navigation):
- Ring: \`ring-2 ring-[#C9A962]\` with \`ring-offset-2 ring-offset-[#1C1714]\`
- Must be clearly visible against all backgrounds
- No outline removal - accessibility critical

**Active/Pressed States**:
- Buttons: Deeper inset shadow
- Links: Slightly darker brass tone
- Cards: No special treatment (hover is sufficient)

**Disabled States**:
- Opacity: \`0.5\`
- Pointer events: \`none\`
- No color change - opacity handles it

---

## Layout Principles

### Spacing Rhythm

**Base Grid**: 8px spacing system
- Micro spacing (icon gaps, inline elements): \`gap-2\` to \`gap-4\` (8px-16px)
- Element spacing (card internals): \`gap-4\` to \`gap-8\` (16px-32px)
- Section spacing (between major blocks): \`gap-8\` to \`gap-12\` (32px-48px)
- Vertical section padding: \`py-24\` to \`py-32\` (96px-128px)

**Content Width**:
- Standard content: \`max-w-6xl\` (1152px)
- Narrow content (blog posts, forms): \`max-w-4xl\` (896px)
- Full-width sections: \`max-w-7xl\` (1280px) or full viewport for backgrounds

**Grid Patterns**:
- Three-column: \`grid-cols-1 md:grid-cols-3\` (features, pricing, benefits)
- Two-column: \`grid-cols-1 lg:grid-cols-2\` (testimonials, hero split)
- Four-column: \`grid-cols-2 md:grid-cols-4\` (stats bar)

**Asymmetry & Balance**:
- Hero sections favor 60/40 or 7/5 column splits
- Text can slightly "bleed" into adjacent columns for dynamic feel
- Alternate left/right alignment in timeline-style sections

### Section Separators

**Border Separators**:
- Full-width border: \`border-y border-[#4A3F35]\`
- Background: Often pair with \`bg-[#251E19]/30\` or \`bg-[#251E19]/50\` for subtle panel effect
- Use between major sections to create rhythm

**Ornate Dividers**:
- Use within sections to separate subsections
- Width: \`w-64\` centered or full-width
- Include decorative glyph at center

**Visual Breathing Room**:
- Allow generous vertical space between sections (96px-128px)
- Don't pack content tightly - academia values space and contemplation

---

## The "Bold Factor" (Non-Genericness)

These are the **mandatory signature elements** that define Academia/Classical. A design is not complete without these:

### 1. **Arch-Topped Images**
Every featured image must use the cathedral arch border-radius (\`40% 40% 0 0 / 20% 20% 0 0\`). This single element transforms modern web imagery into architectural references of classical libraries and Gothic buildings.

### 2. **Sepia-to-Color Image Transitions**
All images start with sepia filter (0.6) and transition to full color on hover over 700ms. This creates the magical effect of "aged photographs coming to life" when users interact.

### 3. **Roman Numeral Volume System**
Every major section must be prefixed with "Volume I", "Volume II", etc. using Roman numerals. List items and sub-elements use standalone Roman numerals (I, II, III...). Use Cinzel font, uppercase, brass color for all numbering.

### 4. **Drop Cap Introductions**
Opening paragraphs of major sections should feature massive brass drop caps using Cinzel font at \`text-7xl\`, creating that illuminated manuscript feeling.

### 5. **Corner Flourishes**
Major frames (hero section) must have large brass corner brackets (40px). Cards should have subtle corner flourishes (24px). This frames content like certificates and portraits.

### 6. **Ornate Dividers with Glyphs**
Section breaks use gradient dividers (transparent �+' wood grain �+' brass �+' wood grain �+' transparent) with a centered decorative Unicode character (�o, �?, �o, �?�).

### 7. **Wax Seal Badges**
Featured or highlighted items get circular crimson badges with radial gradients and inset shadows, containing a centered star icon. This mimics traditional wax seals on important documents.

### 8. **Brass Interactive Elements**
ALL interactive elements (buttons, links, focus rings, hover states) must use the brass color (#C9A962) or brass gradient. This is non-negotiable - brass is the interactive color language.

### 9. **Engraved Text Effects**
Buttons and special headings use dual text-shadow (dark below, light above) to create pressed-into-metal engraved appearance.

### 10. **Texture Overlays**
Page must include both subtle paper texture (3% opacity noise) and vignette effect (radial gradient darkening edges). These are fixed overlays that create atmospheric depth.

---

## Animation & Motion

**Motion Philosophy**: Dignified, deliberate, and smooth. Nothing should feel snappy, bouncy, or playful. Motion should feel like the weight of leather-bound books, the swing of brass lamps, the turn of old pages.

**Timing Functions**:
- Default: \`ease-out\` (natural deceleration)
- Never use: \`ease-in-out\` (too mechanical), \`bounce\`, \`spring\` (too playful)

**Duration Hierarchy**:
- Fast interactions (button press, focus): \`150ms\`
- Standard transitions (hover, border changes): \`300ms\`
- Deliberate transitions (cards lifting, border color): \`500ms\`
- Dramatic reveals (sepia to color, scale): \`700ms\`

**Transform Patterns**:
- Hover scale: \`scale-105\` or \`scale-[1.02]\` (subtle, never dramatic)
- Hover lift: Increase shadow, don't translate vertically
- No rotation transforms (except for chevron icons)
- No slide-in or slide-out animations

**Signature Animation - Brass Shimmer** (optional enhancement):
Subtle brightness oscillation on brass buttons:
\`\`\`
hover: brightness-110
animation: Gentle pulse between 100% and 110% over 2s
\`\`\`

**Respect Motion Preferences**:
\`\`\`css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
\`\`\`

---

## Iconography

**Icon Library**: Use Lucide React or similar minimal icon set

**Styling Rules**:
- Stroke width: \`1.5\` (thin, elegant lines)
- Color: Brass (\`#C9A962\`) for decorative icons
- Size: \`h-4 w-4\` to \`h-6 w-6\` depending on context
- Containers: Often enclosed in circular or shield-shaped containers with brass border

**Engraved Icon Treatment** (optional):
- Place icons in circular containers: \`rounded-full border border-[#C9A962]/30 bg-[#1C1714]\`
- Size: \`h-12 w-12\` with centered icon \`h-5 w-5\`
- Creates "carved medallion" effect

**Icon Usage**:
- Feature icons: Educational symbols (book, scroll, graduation cap, quill)
- Button icons: Actions (chevrons, external link, check marks)
- Decorative icons: Stars for ratings, quotes for testimonials

---

## Anti-Patterns (What to Avoid)

### Do NOT:
1. **Use sans-serif fonts** anywhere except for extreme edge cases (accessibility overrides)
2. **Use bright, saturated colors** - everything should feel aged and warm
3. **Use sharp, geometric shapes** - favor organic curves and traditional architecture
4. **Overuse decorative elements** - restraint is scholarly; excess is gaudy
5. **Use modern gradients** (except brass metallic effect) - no vibrant color transitions
6. **Ignore the arch-top pattern** - flat-top images break the aesthetic
7. **Skip Roman numerals** - they're essential to the classical academic vibe
8. **Use pure black (#000000)** - always use warm dark browns
9. **Use pure white (#FFFFFF)** - always use warm cream tones
10. **Add playful animations** - no bouncing, no elastic effects, no whimsy
11. **Forget sepia filters** - images must feel aged by default
12. **Use thin borders everywhere** - let backgrounds do separation work, borders for emphasis
13. **Mix cold and warm tones** - this is a warm palette exclusively

### Common Mistakes:
- **Too many corner flourishes** - reserve for hero and cards, not every element
- **Overusing crimson** - it's for special emphasis only, brass should dominate
- **Insufficient spacing** - academia needs breathing room for contemplation
- **Missing texture overlays** - these add essential atmospheric depth
- **Forgetting focus states** - keyboard navigation must have visible brass rings
- **Inconsistent font usage** - Cormorant for headings, Crimson for body, Cinzel for labels/display

---

## Responsive Strategy

### Mobile (< 768px):
- **Stack all columns vertically** - maintain hierarchy
- **Touch targets** - Minimum 48px height for interactive elements (FAQ buttons 40px, general links 48px min-height)
- **Simplify decorative elements** - hide large corner flourishes, keep small ones
- **Maintain typography** - reduce sizes slightly (text-lg becomes text-base) but keep font choices
- **Full-width cards** - preserve arch-tops on images
- **Single-line borders** - simplify double-border effects
- **Reduce spacing** - py-16 instead of py-24 for sections, reduce internal padding (pl-6 instead of pl-10)
- **Simplify navigation** - hamburger menu with same serif styling
- **Form elements** - Stack email input and button vertically, ensure full-width buttons on mobile

### Tablet (768px - 1024px):
- **Two-column grids** where appropriate (features, testimonials)
- **Partial decorative elements** - show corner flourishes on cards
- **Maintain most effects** - keep sepia transitions, brass interactions
- **Flexible spacing** - scale between mobile and desktop values

### Desktop (> 1024px):
- **Full ornate experience** - all decorative elements visible
- **Three-column grids** - features, pricing, benefits
- **Maximum visual richness** - large corner flourishes, full texture overlays
- **Generous spacing** - full py-24 to py-32 section padding

### Responsive Image Strategy:
- Arch-tops work at all sizes - maintain the effect
- Use \`aspect-[3/4]\` or \`aspect-[4/5]\` for portraits, \`aspect-[4/3]\` for landscapes
- Always apply sepia filter at all viewport sizes

---

## Accessibility Considerations

### Contrast Requirements:
- **Primary text on background**: 8.5:1 (exceeds WCAG AAA)
- **Secondary text on background**: 4.5:1 minimum (meets WCAG AA)
- **Brass on dark backgrounds**: 7:1 (excellent)
- **Dark text on brass buttons**: 8:1 (excellent)

### Focus Indicators:
- **Always visible**: 2px brass ring with 2px offset
- **High contrast**: Brass (#C9A962) against all backgrounds
- **Never remove**: Critical for keyboard navigation
- **Ring offset**: Uses background color for clear separation

### Motion Preferences:
- Respect \`prefers-reduced-motion\` media query
- Disable or drastically reduce transition durations
- Maintain functionality without motion

### Semantic HTML:
- Use proper heading hierarchy (h1 �+' h2 �+' h3)
- Use \`<nav>\` for navigation, \`<main>\` for content, \`<footer>\` for footer
- Use \`<button>\` for actions, \`<a>\` for navigation
- Use \`aria-label\` for icon-only buttons

### Screen Reader Considerations:
- Decorative elements (flourishes, dividers) should have \`aria-hidden="true"\`
- Images must have descriptive alt text
- Form inputs must have associated labels
- Focus order must be logical

---

## Implementation Constraints

### Technology Stack:
- **CSS Framework**: Tailwind CSS v4+ with arbitrary value syntax \`[#C9A962]\`
- **Fonts**: Google Fonts (Cormorant Garamond, Crimson Pro, Cinzel)
- **Icons**: Lucide React or similar minimal icon set
- **Custom CSS**: Required for textures, flourishes, and complex decorative elements

### Custom CSS Requirements:
The following cannot be achieved with Tailwind alone and require custom CSS:
- Paper texture overlay (SVG noise filter)
- Vignette radial gradient overlay
- Corner flourishes (pseudo-elements)
- Ornate dividers with centered glyphs
- Wax seal badge (complex radial gradient)
- Drop cap styling (::first-letter pseudo-element)
- Arch-top border-radius (complex multi-value syntax)

### Performance Considerations:
- Fixed overlays (texture, vignette) use single elements, not per-component
- Sepia filters are GPU-accelerated transforms
- Minimize custom fonts to three families
- Use font-display: swap for Google Fonts

### Browser Support:
- Modern browsers (last 2 versions of Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox required
- CSS custom properties for theme tokens
- Border-radius complex syntax for arch-tops

---

## Design Token Reference (Quick Copy)

\`\`\`javascript
export const academiaTokens = {
  colors: {
    background: "#1C1714",
    backgroundAlt: "#251E19",
    foreground: "#E8DFD4",
    muted: "#3D332B",
    mutedForeground: "#9C8B7A",
    accent: "#C9A962",
    accentSecondary: "#8B2635",
    border: "#4A3F35",
  },
  fonts: {
    heading: "'Cormorant Garamond', serif",
    body: "'Crimson Pro', serif",
    display: "'Cinzel', serif",
  },
  radius: {
    default: "4px",
    arch: "40% 40% 0 0 / 20% 20% 0 0",
  },
  transitions: {
    fast: "150ms",
    base: "300ms",
    slow: "500ms",
    dramatic: "700ms",
  },
  spacing: {
    section: ["py-24", "py-32"],
    card: ["p-8", "p-12"],
    element: ["gap-4", "gap-8"],
  },
  effects: {
    sepia: "sepia(0.6) contrast(0.95) brightness(0.9)",
    brassGradient: "linear-gradient(180deg, #D4B872 0%, #C9A962 50%, #B8953F 100%)",
    engraved: "1px 1px 1px rgba(0,0,0,0.4), -1px -1px 1px rgba(255,255,255,0.1)",
  },
};
\`\`\`

---

## Summary

Academia/Classical is defined by its **material authenticity** (aged paper, dark wood, polished brass), **typographic excellence** (three distinct serifs used purposefully), and **signature architectural elements** (arch-tops, corner flourishes, Roman numerals).

The style succeeds when every element feels like it could exist in a physical 19th-century university library. It fails when it feels like a generic dark theme with serifs tacked on.

The brass/gold accent color is the interactive language. The sepia-to-color transition is the magical moment. The arch-topped images are the architectural signature. Together, these create a cohesive, prestigious, scholarly experience that feels timeless and trustworthy.`},

===== STYLE BLOCK: art-deco (offset 479143 to 496580) =====
"art-deco":{id:"art-deco",name:"Art Deco",mode:"dark",fontType:"serif",description:"1920s Gatsby elegance, geometric precision, metallic gold accents, architectural symmetry, luxury heritage",layoutIdeas:{hero:"Centered symmetrical composition with massive uppercase serif headline. Radial sunburst gradient emanates from center. Vertical gold line divider adds architectural height. CTAs arranged horizontally with sharp borders and glow effects.",stats:"Four-column grid with bordered boxes featuring stepped corner decorations. Large gold numbers with uppercase labels. Subtle hover state intensifies gold borders.",productDetail:"Centered heading with two-column text layout below. Left-border accent on paragraphs. Contained in darker card background for depth separation.",features:"Three-column responsive grid. Cards feature rotated diamond icon containers, corner decorative elements, and lift-on-hover micro-interaction. Icons rotate back on hover for theatrical effect.",blog:"Three-column grid. Images with double-frame treatment (outer border + inner inset border). Grayscale images with gold overlay on hover. Film noir aesthetic with high contrast typography.",howItWorks:"Vertical timeline with central gold divider line. Diamond-shaped step markers with Roman numerals. Alternating left-right text layout creates visual rhythm. Steps use geometric precision.",benefits:"Two-column grid with large bordered cards. Corner flourishes (top-left, bottom-right). Rotated diamond checkmarks. Background darkens slightly on hover for depth.",testimonials:"Three-column grid. Giant quotation mark watermark in background. Rotated diamond avatar frames with counter-rotated images. Author details with role in gold.",pricing:"Three columns with center tier elevated and highlighted. Gold badge floats above popular plan. Feature lists with gold checkmarks. Sharp geometric borders throughout.",faq:"Clean accordion with full-width questions. Chevron indicators. Expanded answers show left gold border accent. Smooth height transitions.",footer:"Five-column grid (company spans wider on mobile). Large uppercase serif brand. Gold headings with muted link text. Border separator above social icons."},content:`# Design Style: Art Deco (The "Gatsby" Aesthetic)

## 1. Design Philosophy

Art Deco is the visual embodiment of the Roaring Twenties�?"an era of jazz, prosperity, and unbridled optimism. This design style captures **opulence, mathematical precision, and architectural grandeur**. It celebrates luxury through geometry rather than organic forms, creating a aesthetic that feels both **timeless and theatrical**.

### The DNA of Art Deco

This is not minimalism. Art Deco is **maximalist restraint**�?"every element is intentional, ornamental, yet precisely placed. The style rejects soft curves in favor of **hard edges, sharp angles, and geometric repetition**. It's the visual language of the machine age meeting high society, where **structure equals beauty**.

The vibe is "The Great Gatsby" meets Fritz Lang's "Metropolis"�?"champagne towers in skyscraper ballrooms, chrome elevator grilles, sunburst marquees, and zigzag moderne facades. It feels **expensive, confident, and timeless**.

### Core Principles

**Geometry as Decoration:**
Art Deco worships mathematical forms. Triangles, chevrons, trapezoids, stepped pyramids (ziggurat shapes), sunbursts, and fan motifs dominate. These aren't random�?"they create **visual rhythm through repetition**. Borders aren't just lines; they're multi-layered frames. Corners feature decorative cuts or stepped embellishments. Every surface is an opportunity for geometric ornamentation.

**Contrast as Drama:**
This style thrives on **extreme tonal contrast**. Deep, obsidian blacks set against radiant metallic golds create instant luxury. There's no muddy middle ground�?"elements are either in shadow or bathed in light. This high contrast extends to typography (massive display faces vs refined body text) and spatial hierarchy (dense ornamentation vs deliberate negative space).

**Symmetry and Balance:**
Art Deco layouts favor **central axes and bilateral symmetry**. Content radiates from centerlines. Column counts are even. Decorative elements mirror across vertical dividers. This symmetry isn't rigid�?"it's **ceremonial**, like the entrance to a grand hotel or the facade of a cinema palace.

**Verticality and Aspiration:**
Inspired by skyscrapers, Art Deco emphasizes **upward movement**. Vertical lines, tall narrow proportions, and stacked elements create a sense of height and ambition. Sections feel like floors of a building. Dividers act like architectural columns. The design **reaches skyward**.

**Material Luxury:**
Even in digital form, Art Deco evokes **tactile richness**�?"polished brass, etched glass, lacquered wood, terrazzo floors. Metallic sheens, subtle glows, and layered shadows simulate these premium materials. The style says "this is crafted, not mass-produced."

**Theatricality:**
Art Deco doesn't whisper�?"it **announces**. Transitions are dramatic. Hover states glow. Headings demand attention with all-caps, wide tracking, and imposing scale. Interactive elements feel like mechanical buttons on a vintage elevator panel�?"precise, satisfying, engineered.

### Emotional Resonance

When executed correctly, Art Deco should evoke:
- **Confidence** - Nothing tentative or apologetic
- **Heritage** - Rooted in a golden age of design
- **Exclusivity** - Premium, members-only, VIP access
- **Optimism** - The future was bright in 1925, and it still is
- **Sophistication** - Educated taste, cultural refinement

This isn't a style for soft SaaS startups or friendly consumer apps. It's for **luxury brands, premium services, cultural institutions, and products that want to feel like heirlooms**.

### Key Visual Signatures

1. **Stepped Corners** - Ziggurat-style cuts on cards and containers
2. **Rotated Diamonds** - 45-degree squares as frames and accents
3. **Sunburst Radials** - Emanating rays from focal points
4. **Metallic Gold (#D4AF37)** - Used sparingly but decisively on obsidian black
5. **Double Borders** - Frames within frames for depth
6. **Roman Numerals** - Classical sophistication in numbering
7. **All-Caps Typography** - Display text in uppercase with generous tracking
8. **Linear Patterns** - Repeating diagonal grids, chevrons, or fan motifs at low opacity
9. **Glow Effects** - Soft halos around gold elements, never harsh drop shadows
10. **Corner Embellishments** - Decorative L-brackets or lines at card corners

The goal is instant recognition: when someone sees this design, they should immediately think "Art Deco" without being told.

## 2. Design Token System

### Colors (Dark Luxury Palette)
*   **Background**: \`#0A0A0A\` (Obsidian Black) - The deep void.
*   **Foreground**: \`#F2F0E4\` (Champagne Cream) - For primary text, warm and readable.
*   **Card Background**: \`#141414\` (Rich Charcoal) - Slightly lighter than bg for depth.
*   **Primary Accent (Gold)**: \`#D4AF37\` (Metallic Gold) - The core luxury element.
*   **Secondary Accent**: \`#1E3D59\` (Midnight Blue) - For subtle depth or inactive states.
*   **Border**: \`#D4AF37\` (Gold) - Borders are celebrated, not hidden.
*   **Muted**: \`#888888\` (Pewter) - For secondary text.

### Typography
*   **Headings**: **"Marcellus"** (Google Font) or "Italiana". These have the classic Roman structures with Art Deco flair.
*   **Body**: **"Josefin Sans"** (Google Font). Geometric, vintage feel, but readable.
*   **Scaling**: High contrast. Headings should be imposing.
    *   H1: \`text-6xl\` or \`text-7xl\`, uppercase, generous letter-spacing (\`tracking-widest\`).
    *   Body: \`text-lg\`, comfortable \`leading-relaxed\`.

### Radius & Border
*   **Radius**: **Strictly \`0px\`** or very specific \`2px\` for softness. Art Deco is about sharp lines.
*   **Border Width**: Thin, precise lines (\`1px\`) or double lines (\`3px\` double style) are common.
*   **Stepped Corners**: Use CSS clip-paths or pseudo-elements to create "stepped" corners (ziggurat shape) on cards.

### Shadows & Effects
*   **Glow**: Instead of soft drop shadows, use "glows" or hard offsets.
    *   \`box-shadow: 0 0 15px rgba(212, 175, 55, 0.2)\` (Gold Glow).
*   **Gradients**: Use linear gradients that mimic metallic sheen on buttons or borders (e.g., Gold Light to Gold Dark).
*   **Textures**: A subtle "grain" or "noise" overlay on the background adds vintage film quality.

## 3. Component Stylings

### Buttons (Precision Instruments)
Buttons in Art Deco are **architectural elements**, not soft pills. They command attention and provide satisfying tactile feedback.

**Structure:**
- Sharp corners (\`rounded-none\`) or minimal softness (\`rounded-sm\` at 2px max)
- Minimum height of 48px (h-12) for touch accessibility
- All-caps text with wide tracking (\`tracking-widest\` or \`tracking-[0.2em]\`)
- 2px borders that glow on hover

**Variants:**
- **Default**: Transparent background, gold border (2px), gold text. Hover: gold background, black text, intensified glow (\`shadow-[0_0_20px_rgba(212,175,55,0.4)]\`)
- **Solid**: Gold background, black text. Hover: lighter gold (\`#F2E8C4\`) for brightness shift
- **Outline**: Thin gold border (1px), transparent background. Hover: midnight blue fill (\`#1E3D59\`)

**Interaction:**
- Transition duration: 300-500ms for theatrical effect
- Glow effect increases on hover (subtle shadow-based halo)
- No rounded corners�?"maintain geometric precision

### Cards (Geometric Containers)
Cards are **framed exhibits**, each one a miniature architectural facade.

**Structure:**
- Background: Rich charcoal (\`#141414\`) for depth against obsidian black page
- Border: Full 1px gold border at 30% opacity, increases to 100% on hover
- Corner decorations: Small L-shaped brackets at opposite corners (top-right + bottom-left OR top-left + bottom-right)
- Header separator: Bottom border on card header at 20% gold opacity

**Decorative Elements:**
- Stepped corners using pseudo-elements with 2px borders
- Corner embellishments positioned absolutely at 4-8px inset
- Optional: diagonal corner cut using \`clip-path\` for advanced cards

**Interaction:**
- Subtle lift on hover: \`-translate-y-2\` with 500ms duration
- Border opacity intensifies from 30% to 100%
- Corner decorations transition from 50% to 100% opacity

**Card Internal Hierarchy:**
- CardHeader: \`p-6\` with bottom border separator
- CardTitle: Display font, gold color (\`#D4AF37\`), 2xl, uppercase, wide tracking
- CardDescription: Body font, muted gray (\`#888888\`), normal case
- CardContent: \`p-6\` spacing

### Inputs (Underlined Elegance)
Inputs embrace **minimalism within maximalism**�?"no background boxes, just refined underlines.

**Structure:**
- Transparent background (\`bg-transparent\`)
- Bottom border only: 2px solid gold (\`#D4AF37\`)
- No side or top borders�?"emphasizes horizontal flow
- Height: \`h-12\` (48px) for touch accessibility
- Padding: \`px-3 py-2\` for comfortable text entry

**Typography:**
- Font: Body sans-serif (Josefin Sans)
- Text color: Champagne cream (\`#F2F0E4\`)
- Placeholder: Muted gray (\`#888888\`)

**Focus State:**
- Border color brightens to lighter gold (\`#F2E8C4\`)
- Bottom shadow appears: \`shadow-[0_4px_10px_rgba(212,175,55,0.2)]\`
- Smooth transition: \`transition-all\`
- No ring, only the enhanced underline

**Label Pattern:**
- Uppercase, small font size (xs or sm)
- Gold color for active state
- Positioned above input or floating label pattern

## 4. Non-Generic Bold Choices

These mandatory elements prevent the design from looking like default Tailwind or generic templates:

**1. Diagonal Crosshatch Background Pattern**
Apply a repeating diagonal grid pattern to the main background at 3-5% opacity. Use CSS \`repeating-linear-gradient\` at 45A� and -45A� angles with gold lines. This subtle texture adds vintage print quality.

**2. Rotated Diamond Containers**
Icons and avatars sit inside 45-degree rotated squares (\`rotate-45\`). The content inside counter-rotates (\`-rotate-45\`) to remain upright. This creates instant Art Deco recognition.

**3. Roman Numerals for Numbering**
Use I, II, III, IV instead of 1, 2, 3, 4 for steps, tiers, or lists. Display them in the serif display font for classical elegance.

**4. Stepped Corner Decorations**
Add small L-shaped border elements at opposite corners of cards and containers. Use absolute positioning with 2-4px borders on two sides only (e.g., \`border-t border-l\` for top-left corner).

**5. Double-Frame Images**
Never use plain images. Wrap in:
- Outer border container with gold border
- Inner inset div with thick dark border (creates frame-within-frame)
- Apply grayscale filter by default, remove or add gold overlay on hover

**6. Sunburst Radial Gradients**
Use \`radial-gradient\` with gold at 10-20% opacity emanating from key focal points (especially hero section). This creates the iconic Art Deco sunburst effect.

**7. Section Dividers with Decorative Lines**
Section headings include horizontal gold lines above and below the text (e.g., \`h-px w-24\` dividers). These are never full-width�?"they're measured, balanced accents.

**8. Vertical Divider Lines**
Use absolute-positioned vertical lines (\`w-px h-full\`) to create column separation or architectural height. These should be gold at low opacity.

**9. Glow Effects Over Drop Shadows**
Replace traditional drop shadows with box-shadow glows: \`0 0 15px rgba(212,175,55,0.2)\`. This simulates neon or backlit signage from the 1920s.

**10. All-Caps Display Typography with Extreme Tracking**
Headings must be uppercase with \`tracking-widest\` (0.2em). This isn't optional�?"it's fundamental to the style's voice.

## 5. Layout & Spacing

**Container Width:**
- Maximum content width: \`max-w-6xl\` for primary sections, \`max-w-7xl\` for wider grids (testimonials, blog)
- Hero and major sections: \`max-w-5xl\` for focused, centered content

**Spacing System:**
- Base unit: 8px (Tailwind's default)
- Section padding: \`py-32\` (128px) for generous breathing room
- Card padding: \`p-8\` (32px) for comfortable content spacing
- Grid gaps: \`gap-8\` (32px) between cards and columns

**Grid Philosophy:**
Art Deco is mathematically precise. Use even column counts:
- Features: 3 columns (lg), 2 columns (md), 1 column (base)
- Testimonials: 3 columns (lg), 2 columns (md), 1 column (base)
- Pricing: 3 columns, equal width
- Benefits: 2 columns (md), 1 column (base)
- Footer: 5 columns (lg) with company info spanning wider

**Alignment:**
- Centered axis for hero, headings, and CTAs
- Justified or centered text for formal sections
- Alternating left-right patterns in timeline layouts (How It Works)

**Negative Space:**
Space is intentional, not accidental. Large gaps between sections (32-40px) create visual separation. White space around centered headings provides "stage presence."

## 6. Animation & Interaction

**Philosophy:**
Animations should feel **theatrical and mechanical**�?"like Art Deco elevator doors opening or stage curtains rising. Nothing bouncy or organic.

**Transition Timing:**
- Standard: \`duration-300\` (300ms) for quick feedback
- Theatrical: \`duration-500\` (500ms) for dramatic reveals
- Easing: \`ease-out\` or \`ease-in-out\` for smooth mechanical motion

**Hover States:**
- Cards: Lift upward (\`-translate-y-2\`) + border glow intensifies
- Buttons: Background color flip + glow expansion
- Links: Color shift to gold + subtle underline expansion
- Images: Scale slightly (\`scale-105\`) + overlay appearance

**Page Load Animations (Optional):**
- Sections slide up with fade: \`translate-y-8 opacity-0\` �+' \`translate-y-0 opacity-100\`
- Stagger delays for sequential reveal (100ms between elements)
- Hero elements can have a sunburst expand effect

**Interactive Micro-details:**
- FAQ chevrons rotate 180A� on open
- Icon containers rotate from 45A� to 0A� on hover (then back)
- Gold lines can animate width from 0 to full on section scroll-into-view
- Button glows pulse subtly on focus state

## 7. Accessibility & Contrast

**Color Contrast:**
- Gold text (\`#D4AF37\`) on black (\`#0A0A0A\`): **Passes WCAG AA** at ~7:1 ratio
- For body text or smaller sizes, use champagne cream (\`#F2F0E4\`) for better readability
- Gold should be used for accents, headings, and borders�?"not long-form body text
- Muted text (\`#888888\`) on black: ~4.5:1 ratio, acceptable for secondary content

**Focus States:**
- Buttons: 2px gold ring with 2px offset (\`ring-2 ring-[#D4AF37] ring-offset-2 ring-offset-black\`)
- Links: Gold underline appears or thickens
- Inputs: Bottom border glows brighter with subtle shadow
- Interactive cards: Border intensifies rather than adding a ring

**Touch Targets:**
- Minimum button height: 48px (\`h-12\`)
- Minimum clickable area: 44x44px for mobile
- FAQ accordion buttons: Full-width with generous padding (\`p-6\`)
- Adequate spacing between interactive elements (min 8px gap)

**Keyboard Navigation:**
- Clear focus indicators on all interactive elements
- Focus follows visual hierarchy (top to bottom, left to right)
- Skip-to-content link for keyboard users (if header is complex)

**Screen Reader Considerations:**
- Decorative elements (corner brackets, divider lines) use \`aria-hidden="true"\`
- Images have descriptive alt text
- Icon buttons include accessible labels
- Form inputs have associated labels`},

===== STYLE BLOCK: aurora-mesh (offset 496580 to 508017) =====
"aurora-mesh":{id:"aurora-mesh",name:"Aurora Mesh",mode:"dark",fontType:"sans-serif",description:"Flowing mesh gradients, aurora effects, vibrant color transitions, modern startup aesthetic inspired by Stripe and Vercel",layoutIdeas:{hero:"Full-height hero with animated mesh gradient background. Split layout with headline left (massive typography with gradient text fill), floating 3D-ish card mockup right with aurora glow underneath. CTAs have pill shapes with gradient borders.",stats:"Horizontal strip with glass-morphic stat cards floating over a subtle aurora wave. Each stat has a glowing accent bar on top indicating its category color.",features:"Asymmetric bento grid with varying card sizes. Cards have dark glass backgrounds with colored gradient borders that pulse subtly. Icons sit in gradient orbs.",howItWorks:"Vertical timeline with a glowing gradient line connecting steps. Each step card has a mesh gradient corner accent. Numbers are oversized with gradient fills.",benefits:"Two-column layout with benefit cards stacked. Each card has an aurora streak across the top edge. Checkmark icons with gradient fills.",pricing:"Three cards with the featured card elevated and wrapped in an animated gradient border. Background has slow-moving mesh gradient. Prices use gradient text.",testimonials:"Carousel or masonry of quote cards with avatar images having gradient ring borders. Quote marks are oversized with aurora gradient fills.",faq:"Accordion style with gradient accent lines on the left. Expanded items reveal answers with a soft glow effect. Plus/minus icons have gradient treatment.",blog:"Horizontal scrolling cards with image overlays featuring gradient mesh filters. Date badges have pill shapes with gradient backgrounds.",footer:"Dark base with subtle aurora waves at the top edge. Links organized in columns with gradient hover underlines. Social icons in gradient orbs."},content:`# Aurora Mesh Design System

## Design Philosophy

Aurora Mesh captures the ethereal, flowing beauty of the northern lights fused with modern mesh gradient technology. This is the aesthetic of **premium SaaS products**�?"think Stripe's cosmic depth, Vercel's dark elegance, and Linear's polished minimalism, but pushed further into the realm of **living, breathing color**.

**Core Principles:**
- **Fluid Color**: Gradients are never static. They flow, morph, and breathe with organic movement
- **Dark Canvas, Bright Accents**: Deep, near-black backgrounds make vibrant aurora colors sing
- **Dimensional Depth**: Layers of blur, glow, and transparency create a sense of floating UI
- **Premium Polish**: Every detail is refined�?"smooth curves, perfect spacing, considered micro-interactions

**The Vibe:** Sophisticated, futuristic, premium, otherworldly. Like operating a spaceship's interface while flying through an aurora. The user should feel like they're touching the future.

**Visual Signatures:**
- Mesh gradients that appear to move and shift
- Colored glow effects bleeding from elements
- Glass-like surfaces catching light
- Gradient text on headlines
- Floating cards with colored shadows
- Aurora wave patterns in backgrounds

---

## Design Token System

### Colors (Dark Mode - Definitive)

\`\`\`
Background:
  base: #09090b (near-black with slight warmth)
  elevated: #18181b (card backgrounds)
  surface: #27272a (input backgrounds, borders)

Foreground:
  primary: #fafafa (headings, important text)
  secondary: #a1a1aa (body text, descriptions)
  muted: #71717a (placeholders, disabled)

Aurora Palette (The Star):
  violet: #8b5cf6
  purple: #a855f7
  fuchsia: #d946ef
  pink: #ec4899
  cyan: #22d3ee
  teal: #2dd4bf

Gradient Stops (for mesh):
  aurora-1: #8b5cf6 (violet)
  aurora-2: #d946ef (fuchsia)
  aurora-3: #22d3ee (cyan)
  aurora-4: #2dd4bf (teal)

Accent (Primary Actions):
  DEFAULT: #a855f7
  hover: #c084fc

Border:
  subtle: #27272a
  DEFAULT: #3f3f46
  glow: rgba(168, 85, 247, 0.5)

Success: #34d399
Warning: #fbbf24
Error: #f87171
\`\`\`

### Typography

**Font Stack:**
- **Headlines**: "Instrument Sans" (Google Fonts) - Clean, geometric, modern. Alternative: Inter
- **Body**: "Inter" (Google Fonts) - Highly legible, neutral, professional
- **Mono/Code**: "JetBrains Mono" for any code snippets

**Scale:**
- Hero headline: \`text-6xl md:text-7xl lg:text-8xl\` with \`font-bold tracking-tight\`
- Section titles: \`text-4xl md:text-5xl\` with \`font-semibold\`
- Card titles: \`text-xl md:text-2xl\` with \`font-semibold\`
- Body large: \`text-lg\` with \`text-secondary\`
- Body: \`text-base\` with \`leading-relaxed\`
- Small/Caption: \`text-sm\` with \`text-muted\`

**Gradient Text Treatment:**
\`\`\`css
.gradient-text {
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #22d3ee 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
\`\`\`

### Radius & Border

- **Default radius**: \`rounded-2xl\` (16px) - Soft, modern, approachable
- **Buttons**: \`rounded-full\` (pill-shaped for primary actions)
- **Small elements**: \`rounded-xl\` (12px)
- **Inputs**: \`rounded-xl\`
- **Border width**: \`border\` (1px) with semi-transparent colors

### Shadows & Effects

**Glow Shadows (The Signature):**
\`\`\`
glow-sm: 0 0 20px rgba(168, 85, 247, 0.15)
glow-md: 0 0 40px rgba(168, 85, 247, 0.2)
glow-lg: 0 0 60px rgba(168, 85, 247, 0.25), 0 0 120px rgba(34, 211, 238, 0.1)
glow-colored: 0 0 40px var(--glow-color, rgba(168, 85, 247, 0.3))
\`\`\`

**Elevation (Layered):**
\`\`\`
elevation-1: 0 1px 2px rgba(0, 0, 0, 0.5)
elevation-2: 0 4px 12px rgba(0, 0, 0, 0.4)
elevation-3: 0 8px 30px rgba(0, 0, 0, 0.5), 0 0 40px rgba(168, 85, 247, 0.1)
\`\`\`

### Textures & Patterns (Critical)

**Mesh Gradient Background:**
CSS mesh gradient using multiple radial gradients layered:
\`\`\`css
.aurora-mesh {
  background-color: #09090b;
  background-image:
    radial-gradient(at 40% 20%, rgba(139, 92, 246, 0.3) 0px, transparent 50%),
    radial-gradient(at 80% 0%, rgba(34, 211, 238, 0.2) 0px, transparent 50%),
    radial-gradient(at 0% 50%, rgba(217, 70, 239, 0.2) 0px, transparent 50%),
    radial-gradient(at 80% 50%, rgba(45, 212, 191, 0.15) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(236, 72, 153, 0.2) 0px, transparent 50%),
    radial-gradient(at 80% 100%, rgba(139, 92, 246, 0.15) 0px, transparent 50%);
}
\`\`\`

**Noise Overlay:**
Subtle grain texture at 2-5% opacity to add depth and reduce banding in gradients.

**Aurora Wave (for section dividers):**
SVG wave patterns with gradient fills, positioned at section tops/bottoms.

---

## Component Stylings

### Buttons

**Primary Button:**
- Background: Gradient \`from-violet-500 via-fuchsia-500 to-pink-500\`
- Shape: \`rounded-full\` pill
- Padding: \`px-8 py-3\`
- Text: \`text-white font-semibold\`
- Shadow: \`shadow-lg shadow-violet-500/25\`
- Hover: Scale up slightly \`hover:scale-105\`, increase glow
- Active: Scale down \`active:scale-95\`
- Transition: \`transition-all duration-200\`

**Secondary Button:**
- Background: \`bg-white/5\` (glass effect)
- Border: \`border border-white/10\`
- Text: \`text-white\`
- Hover: \`bg-white/10\`, border glows
- Backdrop: \`backdrop-blur-sm\`

**Ghost Button:**
- Background: transparent
- Text: \`text-secondary\`
- Hover: \`text-primary\`, subtle glow underline

### Cards/Containers

**Standard Card:**
- Background: \`bg-zinc-900/50\` with \`backdrop-blur-xl\`
- Border: \`border border-zinc-800/50\`
- Radius: \`rounded-2xl\`
- Shadow: \`shadow-2xl shadow-black/50\`
- Hover: Border brightens, subtle glow appears

**Featured Card:**
- Wrapped in gradient border container
- Outer: Animated gradient border using \`background: conic-gradient\` trick
- Inner: Dark solid background
- Glow: Colored shadow matching the dominant gradient color

**Glass Card:**
- Background: \`bg-white/5\`
- Backdrop: \`backdrop-blur-2xl backdrop-saturate-150\`
- Border: \`border border-white/10\`

### Inputs

- Background: \`bg-zinc-900\`
- Border: \`border border-zinc-700\`
- Radius: \`rounded-xl\`
- Text: \`text-white\`
- Placeholder: \`placeholder:text-zinc-500\`
- Focus: \`focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20\`
- Transition: Smooth border color change

### Icons

- Default: \`text-zinc-400\` with \`w-5 h-5\`
- In gradient orbs: Icon sits inside a \`rounded-xl\` container with gradient background
- Interactive: Color shifts to accent on hover
- Feature icons: Larger \`w-8 h-8\`, often with gradient backgrounds or colored glow

---

## Layout Strategy

**Container:** \`max-w-7xl mx-auto px-6 lg:px-8\`

**Section Spacing:** \`py-24 md:py-32\` between major sections

**Grid System:**
- Features: \`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\`
- Bento: Varying \`col-span\` and \`row-span\` for visual interest
- Stats: \`grid grid-cols-2 md:grid-cols-4 gap-6\`

---

## Effects & Animation

**Motion Feel:** Smooth, elegant, and slightly slow�?"like floating through water or space. Never jarring.

**Transitions:**
- Default: \`transition-all duration-300 ease-out\`
- Hover effects: \`duration-200\`
- Page elements: \`duration-500\` for fade-ins

**Keyframe Animations:**

\`\`\`css
@keyframes aurora-shift {
  0%, 100% { opacity: 0.5; transform: translateY(0) scale(1); }
  50% { opacity: 0.8; transform: translateY(-20px) scale(1.1); }
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.2); }
  50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.4); }
}

@keyframes gradient-rotate {
  0% { --gradient-angle: 0deg; }
  100% { --gradient-angle: 360deg; }
}
\`\`\`

**Scroll Animations:** Elements fade and slide up on scroll (use intersection observer or CSS scroll-driven animations).

---

## Iconography

- Library: \`lucide-react\`
- Stroke: Default stroke width (2px)
- Size: \`w-5 h-5\` for inline, \`w-6 h-6\` for standalone, \`w-8 h-8\` for feature cards
- Treatment: Often placed inside gradient orbs or given colored backgrounds
- Color: \`text-zinc-400\` default, \`text-violet-400\` for accents

---

## Responsive Strategy

**Mobile:**
- Stack all grids to single column
- Reduce headline sizes by 1-2 steps
- Mesh gradients simplified (fewer layers for performance)
- Cards go full-width with reduced padding
- Navigation collapses to hamburger
- Aurora effects stay but with reduced intensity

**Tablet:**
- 2-column grids
- Side-by-side layouts for hero

**Desktop:**
- Full 3-4 column grids
- All effects at full intensity
- Maximum visual impact

---

## Accessibility

**Contrast:**
- Primary text (#fafafa) on dark background (#09090b) = 18.4:1 ratio �o"
- Secondary text (#a1a1aa) on dark background = 7.1:1 ratio �o"
- All text passes WCAG AAA

**Focus States:**
- Visible focus ring: \`focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900\`
- Never remove focus outlines
- Focus rings match the aurora accent color

**Motion:**
- Respect \`prefers-reduced-motion\`
- Provide static fallbacks for all animations

---

## Implementation Notes

- Use Tailwind CSS v4 with arbitrary values for specific colors
- Create CSS custom properties for repeated gradient values
- Use \`style\` prop for dynamic gradient backgrounds where needed
- Build all components locally using \`cva\` and \`tailwind-merge\`
- Import icons from \`lucide-react\`
- Mesh gradient backgrounds should be in a style.css file and applied via className`},

===== STYLE BLOCK: bauhaus (offset 508017 to 520251) =====
bauhaus:{id:"bauhaus",name:"Bauhaus",mode:"light",fontType:"sans-serif",description:"Bold geometric modernism with circles, squares, and triangles. Primary color palette (Red/Blue/Yellow) with stark black borders and hard shadows. Functional yet artistic with constructivist asymmetry.",layoutIdeas:{hero:"Split-screen layout (50/50) with text on white background and geometric composition on blue. Massive uppercase typography with colored accent border on left.",stats:"Equal-width grid with dividers. Each stat has geometric shape icon (circle/square/diamond) numbered 1-4. Yellow background section with white cards.",features:"Three-column grid with lifted cards featuring corner decorations (circle/triangle/square). Each card has geometric icon in bordered container. Hover lift effect.",howItWorks:"Horizontal timeline with thick connecting line (desktop only). Steps use alternating geometric shapes (circle/square/rotated square) as numbers. Two-column grid on mobile.",benefits:"Grid of white cards on red background. Each card has circular yellow icon with checkmark. Clean borders and hard shadows.",pricing:"Three-column layout with center tier elevated and highlighted with yellow background. All tiers have geometric headers and square bullet points.",testimonials:"Three-column grid with cards featuring circular avatar cutouts positioned above card. Quote icon and bordered sections. Decorative corner elements.",faq:"Accordion with thick borders. Active items have red background with white text. Inactive items are white. Yellow background for expanded content.",blog:"Three-column grid on blue background with white cards. Images alternate between circular and square masks. Grayscale images with color on hover.",footer:"Dark background (near-black #121212) with geometric logo. Multi-column layout with social icons as bordered squares. Minimalist link hover states."},content:`# Design Style: Bauhaus

## 1. Design Philosophy
The Bauhaus style embodies the revolutionary principle "form follows function" while celebrating pure geometric beauty and primary color theory. This is **constructivist modernism**�?"every element is deliberately composed from circles, squares, and triangles. The aesthetic should evoke 1920s Bauhaus posters: bold, asymmetric, architectural, and unapologetically graphic.

**Vibe**: Constructivist, Geometric, Modernist, Artistic-yet-Functional, Bold, Architectural

**Core Concept**: The interface is not merely a layout�?"it is a **geometric composition**. Every section is constructed rather than designed. Think of the page as a Bauhaus poster brought to life: shapes overlap, borders are thick and deliberate, colors are pure primaries (Red #D02020, Blue #1040C0, Yellow #F0C020), and everything is grounded by stark black (#121212) and clean white.

**Key Characteristics**:
- **Geometric Purity**: All decorative elements derive from circles, squares, and triangles
- **Hard Shadows**: 4px and 8px offset shadows (never soft/blurred) create depth through layering
- **Color Blocking**: Entire sections use solid primary colors as backgrounds
- **Thick Borders**: 2px and 4px black borders define every major element
- **Asymmetric Balance**: Grids are used but intentionally broken with overlapping elements
- **Constructivist Typography**: Massive uppercase headlines (text-6xl to text-8xl) with tight tracking
- **Functional Honesty**: No gradients, no subtle effects�?"everything is direct and declarative

## 2. Design Token System (The DNA)

### Colors (Single Palette - Light Mode)
The palette is strictly limited to the Bauhaus primaries, plus stark black and white.
-   \`background\`: \`#F0F0F0\` (Off-white canvas)
-   \`foreground\`: \`#121212\` (Stark Black)
-   \`primary-red\`: \`#D02020\` (Bauhaus Red)
-   \`primary-blue\`: \`#1040C0\` (Bauhaus Blue)
-   \`primary-yellow\`: \`#F0C020\` (Bauhaus Yellow)
-   \`border\`: \`#121212\` (Thick, distinct borders)
-   \`muted\`: \`#E0E0E0\`

### Typography
-   **Font Family**: **'Outfit'** (geometric sans-serif from Google Fonts). This typeface's circular letterforms and clean geometry perfectly embody Bauhaus principles.
-   **Font Import**: \`Outfit:wght@400;500;700;900\`
-   **Scaling**: Extreme contrast between display and body text
    -   Display: text-4xl (mobile) �+' text-6xl (tablet) �+' text-8xl (desktop)
    -   Subheadings: text-2xl �+' text-3xl �+' text-4xl
    -   Body: text-base �+' text-lg
-   **Weights**:
    -   Headlines: font-black (900) with uppercase and tracking-tighter
    -   Subheadings: font-bold (700) with uppercase
    -   Body: font-medium (500) for readability
    -   Labels: font-bold (700) with uppercase and tracking-widest
-   **Line Height**: Tight for headlines (leading-[0.9]), relaxed for body (leading-relaxed)

### Radius & Border
-   **Radius**: Binary extremes�?"either \`rounded-none\` (0px) for squares/rectangles or \`rounded-full\` (9999px) for circles. No in-between rounded corners.
-   **Border Widths**:
    -   Mobile: \`border-2\` (2px)
    -   Desktop: \`border-4\` (4px)
    -   Navigation/Major divisions: \`border-b-4\` (4px bottom border)
-   **Border Color**: Always \`#121212\` (black) for maximum contrast

### Shadows/Effects
-   **Hard Offset Shadows** (inspired by Bauhaus layering):
    -   Small: \`shadow-[3px_3px_0px_0px_black]\` or \`shadow-[4px_4px_0px_0px_black]\`
    -   Medium: \`shadow-[6px_6px_0px_0px_black]\`
    -   Large: \`shadow-[8px_8px_0px_0px_black]\`
-   **Button Press Effect**: \`active:translate-x-[2px] active:translate-y-[2px] active:shadow-none\` (simulates physical button press)
-   **Card Hover**: \`hover:-translate-y-1\` or \`hover:-translate-y-2\` (subtle lift)
-   **Patterns**: Use CSS background patterns for texture
    -   Dot grid: \`radial-gradient(#fff 2px, transparent 2px)\` with \`background-size: 20px 20px\`
    -   Opacity overlays: Large geometric shapes at 10-20% opacity for background decoration

## 3. Component Stylings

### Buttons
-   **Variants**:
    -   **Primary** (Red): \`bg-[#D02020] text-white border-2 border-black shadow-[4px_4px_0px_0px_black]\`
    -   **Secondary** (Blue): \`bg-[#1040C0] text-white border-2 border-black shadow-[4px_4px_0px_0px_black]\`
    -   **Yellow**: \`bg-[#F0C020] text-black border-2 border-black shadow-[4px_4px_0px_0px_black]\`
    -   **Outline**: \`bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_black]\`
    -   **Ghost**: \`border-none text-black hover:bg-gray-200\`
-   **Shapes**: Either \`rounded-none\` (square) or \`rounded-full\` (pill). Use shape variants deliberately.
-   **States**:
    -   Hover: Slight opacity change (\`hover:bg-[color]/90\`)
    -   Active: Button "presses down" (\`active:translate-x-[2px] active:translate-y-[2px] active:shadow-none\`)
    -   Focus: 2px offset ring
-   **Typography**: Uppercase, font-bold, tracking-wider

### Cards
-   **Base Style**: White background, \`border-4 border-black\`, \`shadow-[8px_8px_0px_0px_black]\`
-   **Decoration**: Small geometric shape in top-right corner (8px x 8px):
    -   Circle: \`rounded-full bg-[primary-color]\`
    -   Square: \`rounded-none bg-[primary-color]\`
    -   Triangle: CSS clip-path \`polygon(50% 0%, 0% 100%, 100% 100%)\`
-   **Hover**: \`hover:-translate-y-1\` (subtle lift effect)
-   **Content Hierarchy**: Large bold titles, medium body text, generous padding

### Accordion (FAQ)
-   **Closed State**: White background, \`border-4 border-black\`, \`shadow-[4px_4px_0px_0px_black]\`
-   **Open State**: Red background (\`bg-[#D02020]\`), white text for header
-   **Expanded Content**: Light yellow background (\`bg-[#FFF9C4]\`), black text, \`border-t-4 border-black\`
-   **Icon**: ChevronDown with \`rotate-180\` when open

## 4. Layout & Spacing
-   **Container Width**: \`max-w-7xl\` for main content sections (creates poster-like breadth)
-   **Section Padding**:
    -   Mobile: \`py-12 px-4\`
    -   Tablet: \`py-16 px-6\`
    -   Desktop: \`py-24 px-8\`
-   **Grid Systems**:
    -   Stats: 1-column (mobile) �+' 2-column (tablet) �+' 4-column (desktop) with \`divide-y\` and \`divide-x\` borders
    -   Features: 1-column �+' 2-column �+' 3-column with 8px gaps
    -   Pricing: 1-column �+' 3-column (center elevated on desktop)
-   **Spacing Scale**: Consistent use of 4px, 8px, 12px, 16px, 24px
-   **Section Dividers**: Every section has \`border-b-4 border-black\` creating strong horizontal rhythm

## 5. Non-Genericness (Bold Choices)

**This design MUST NOT look like generic Tailwind or Bootstrap. The following are mandatory:**

-   **Color Blocking**: Entire sections use solid primary colors as backgrounds:
    -   Hero right panel: Blue (\`bg-[#1040C0]\`)
    -   Stats section: Yellow (\`bg-[#F0C020]\`)
    -   Blog section: Blue (\`bg-[#1040C0]\`)
    -   Benefits section: Red (\`bg-[#D02020]\`)
    -   Final CTA: Yellow (\`bg-[#F0C020]\`)
    -   Footer: Near-black (\`bg-[#121212]\`)

-   **Geometric Logo**: Navigation features three geometric shapes (circle, square, triangle) in primary colors forming the brand identity

-   **Geometric Compositions**: Use abstract compositions of overlapping shapes:
    -   Hero right panel: Overlapping circle, rotated square, and centered square with triangle
    -   Product Detail: Abstract geometric "face" constructed from circles, squares, and diagonal line
    -   Final CTA: Large decorative shapes (circle and rotated square) at 50% opacity in corners

-   **Rotated Elements**: Deliberate 45A� rotation on:
    -   Every 3rd shape in repeating patterns
    -   Step numbers in "How It Works" (counter-rotate inner content)
    -   Decorative background shapes

-   **Image Treatments**:
    -   Blog images: Alternate between \`rounded-full\` and \`rounded-none\`, grayscale filter with \`hover:grayscale-0\`
    -   Testimonial avatars: Circular crop with \`rounded-full\` and grayscale filter

-   **Unique Decorations**: Small geometric shapes (8px-16px) as corner decorations on cards, using the three primary colors in rotation

## 6. Icons & Imagery
-   **Icon Library**: \`lucide-react\` (Circle, Square, Triangle, Check, Quote, ArrowRight, ChevronDown)
-   **Icon Style**:
    -   Stroke width: 2px (default) or 3px (emphasis)
    -   Size: h-6 w-6 to h-8 w-8
    -   Color: Match section accent color or white on colored backgrounds
-   **Icon Integration**: Icons placed inside bordered geometric containers:
    -   Features: Icon in white bordered box with shadow
    -   Benefits: Check icon in yellow circular badge
    -   Stats: Numbers in geometric shapes (circle/square/rotated square)
-   **Image Treatment**: All images use grayscale filter by default, color on hover

## 7. Responsive Strategy
-   **Mobile-First Approach**: Start with single-column layouts, expand to grids on larger screens
-   **Breakpoints**:
    -   Mobile: < 640px (sm)
    -   Tablet: 640px - 1024px (sm to lg)
    -   Desktop: > 1024px (lg+)
-   **Typography Scaling**: All text uses responsive classes (text-4xl sm:text-6xl lg:text-8xl)
-   **Border/Shadow Scaling**: Reduce border and shadow sizes on mobile (border-2 �+' border-4, shadow-[3px] �+' shadow-[8px])
-   **Navigation**: Hamburger menu button on mobile (< 768px), full nav on desktop
-   **Grid Adaptations**:
    -   Stats: 1 col �+' 2 col (sm) �+' 4 col (lg)
    -   Features: 1 col �+' 2 col (md) �+' 3 col (lg)
    -   How It Works: 1 col �+' 2 col (sm) �+' 4 col (md), hide connecting line on mobile

## 8. Animation & Micro-Interactions
-   **Feel**: Mechanical, snappy, geometric (no soft organic movement)
-   **Transition Duration**: \`duration-200\` or \`duration-300\` (fast and decisive)
-   **Easing**: \`ease-out\` (mechanical feel)
-   **Interactions**:
    -   Button press: Translate and remove shadow (\`active:translate-x-[2px] active:translate-y-[2px] active:shadow-none\`)
    -   Card hover: Lift upward (\`hover:-translate-y-1\` or \`hover:-translate-y-2\`)
    -   Accordion: ChevronDown rotation (\`rotate-180\`) and content reveal with max-height transition
    -   Icon hover: Scale up on grouped shapes (\`group-hover:scale-110\`)
    -   Link hover: Color change to accent color
-   **Background Patterns**: Static (no animation on patterns)`},

===== STYLE BLOCK: bold-typography (offset 520251 to 536660) =====
"bold-typography":{id:"bold-typography",name:"Bold Typography",mode:"dark",fontType:"sans-serif",description:"Type-driven design that treats massive typography as the primary visual element. Ultra-large headlines, extreme contrast, and dramatic negative space create poster-like compositions where words become art.",layoutIdeas:{hero:"Full-viewport hero with massive H1 (text-4xl to text-8xl responsive) occupying 60%+ of viewport. Stacked layout with headline, subhead, CTAs in strict vertical rhythm. Decorative oversized number in background (hidden on mobile). Typography IS the hero.",stats:"Responsive grid (1 col mobile, 2 cols tablet, 4 cols desktop) with huge numbers (text-4xl to text-7xl) and tiny all-caps labels. Numbers in accent color for dramatic pop. Elevated background for section depth.",productDetail:"Asymmetric two-column grid (1.2fr / 0.8fr). Left: headline + multi-paragraph description with max-width constraint. Right: typographic card with grade display (A+) featuring layered text shadow for depth and accent top border.",features:"Responsive grid (1-2-3 columns) with gap-px border separator technique. Each feature card has icon, title, description. Hover state changes background. Compact on mobile (p-6) expanding to spacious on desktop (p-8).",blog:"Magazine-style responsive grid (1-2-3 columns). Each post has image with subtle hover scale, metadata in monospace, oversized titles that change color on hover. Featured badge on first post.",howItWorks:"Vertical stepped list with massive step numbers (text-6xl to text-8xl) in border color that transitions to accent on hover. Three-column grid on desktop (number | title | description) collapses to stacked on mobile.",benefits:"Two-column layout (header left, list right on desktop, stacked mobile). Each benefit has oversized accent number + title/description. Generous spacing between items.",testimonials:"Responsive grid (1-2-3 columns) with bordered cards. Large display serif quote mark (text-5xl to text-6xl), italic quote in Playfair Display, grayscale avatar, compact author info.",pricing:"Responsive grid (1-2-3 pricing tiers). Price as dominant element (text-4xl to text-6xl). Highlighted tier uses 2px accent border. Compact feature lists with small checkmarks. Full-width CTA button at bottom.",faq:"Centered single column with accordion items. Bold questions (text-lg to text-2xl) that change color on hover. Smooth height/opacity animation for answers with max-width for readability.",finalCTA:"Inverted section (foreground bg, background text) with centered content. Responsive headline sizing. Email input + subscribe button in flex row on tablet+, stacked on mobile. Decorative brand name in background (hidden on mobile).",footer:"Minimal footer with responsive 2-4-5 column grid. Company info spans 2 columns on mobile. Compact text sizing (text-xs to text-sm). Bottom row has copyright + social icons with horizontal rule separator."},content:`# Bold Typography Design System

## Design Philosophy

Bold Typography is **poster design translated to web**. Typography isn't decoration�?"it's the entire visual language. Every design decision serves the type: color exists to create contrast, space exists to frame letterforms, and interaction exists to reveal typographic details.

### Core Principles

1. **Type as Hero**: Headlines aren't just labels�?"they're the visual centerpiece. A well-set 80pt headline is more compelling than any stock photo.

2. **Extreme Scale Contrast**: The gap between headline and body creates drama. Think 6:1 or greater ratio between H1 and paragraph text.

3. **Deliberate Negative Space**: White (or black) space isn't empty�?"it's the frame around your type. Generous margins make headlines feel intentional, not cramped.

4. **Strict Hierarchy**: Every element has a clear rank. No two elements compete for attention. The eye flows naturally: headline �+' subhead �+' body �+' action.

5. **Restrained Palette**: Black, white, and one accent. Maybe two. More colors dilute the typographic impact. Let the type shapes do the work.

### The Vibe

**Confident. Editorial. Deliberate.** This isn't friendly SaaS�?"it's a design manifesto. The page feels like a gallery exhibition or luxury magazine spread. Every word earns its place.

Visual signatures:
- Massive headlines that make you scroll
- Tight letter-spacing on display text (\`-0.04em\` to \`-0.06em\`)
- Wide letter-spacing on labels (\`0.1em\` to \`0.2em\`)
- Text that bleeds to edge on mobile
- Underlines as the primary interactive affordance
- No rounded corners�?"sharp edges match sharp typography

---

## Design Token System

### Colors (Dark Mode)

\`\`\`
background:        #0A0A0A    // Near-black, not pure black
foreground:        #FAFAFA    // Warm white
muted:             #1A1A1A    // Subtle surface elevation
mutedForeground:   #737373    // Secondary text (WCAG AA on dark)
accent:            #FF3D00    // Vermillion�?"warm, urgent, visible
accentForeground:  #0A0A0A    // Dark text on accent
border:            #262626    // Barely-there dividers
input:             #1A1A1A    // Input backgrounds
card:              #0F0F0F    // Slight elevation from bg
cardForeground:    #FAFAFA
ring:              #FF3D00    // Focus states match accent
\`\`\`

The accent is deliberate: vermillion/red-orange creates urgency and warmth against the cold dark background. It's used sparingly�?"headlines, key CTAs, and underlines only.

### Typography

**Primary Stack**: \`"Inter Tight", "Inter", system-ui, sans-serif\`
- Inter Tight for headlines (tighter default spacing)
- Clean, geometric, professional

**Display Stack**: \`"Playfair Display", Georgia, serif\`
- For pull quotes and testimonials only
- Creates elegant contrast with sans headlines

**Mono Stack**: \`"JetBrains Mono", "Fira Code", monospace\`
- Labels, stats, technical details

**Scale System**:
\`\`\`
xs:    0.75rem    // 12px - fine print
sm:    0.875rem   // 14px - captions
base:  1rem       // 16px - body
lg:    1.125rem   // 18px - lead paragraphs
xl:    1.25rem    // 20px - subheads
2xl:   1.5rem     // 24px - section intros
3xl:   2rem       // 32px - H3
4xl:   2.5rem     // 40px - H2
5xl:   3.5rem     // 56px - H1 mobile
6xl:   4.5rem     // 72px - H1 tablet
7xl:   6rem       // 96px - H1 desktop
8xl:   8rem       // 128px - Hero statement
9xl:   10rem      // 160px - Decorative numbers
\`\`\`

**Tracking**:
\`\`\`
tighter:  -0.06em   // Display headlines
tight:    -0.04em   // Large headings
normal:   -0.01em   // Body (slightly tightened)
wide:     0.05em    // Small labels
wider:    0.1em     // All-caps labels
widest:   0.2em     // Sparse emphasis
\`\`\`

**Line Heights**:
\`\`\`
none:     1         // Single-line headlines
tight:    1.1       // Multi-line headlines
snug:     1.25      // Subheads
normal:   1.6       // Body text
relaxed:  1.75      // Long-form reading
\`\`\`

### Radius & Border

\`\`\`
radius:   0px       // No border-radius anywhere. Sharp edges only.
border:   1px       // Thin, precise dividers
borderThick: 2px    // Accent underlines
\`\`\`

### Shadows & Effects

No traditional shadows. Depth comes from:
- **Layered type**: Large muted text behind smaller bright text
- **Underlines**: 2-3px accent lines under interactive elements
- **Dividers**: Full-width horizontal rules

\`\`\`
shadow: none
textShadow: none
\`\`\`

### Textures & Patterns

**Subtle noise grain texture**: A very subtle fractal noise pattern at 1.5% opacity overlays the entire page, adding tactile quality to the dark background without being obtrusive. Implemented via inline SVG data URL with feTurbulence filter.

**Typographic layering for depth**:
- Decorative oversized numbers/text behind content with low opacity
- Text shadow technique: duplicate text offset 1-2px in border color creates depth without traditional shadows
- Accent bars: thin horizontal accent-colored bars (h-1, w-16) as visual anchors on key elements

---

## Component Stylings

### Buttons

Primary button is **text-only with animated underline**:
\`\`\`
- No background fill
- Text in accent color
- Animated underline: absolute positioned span, h-0.5, bg-accent
- Base state: scale-x-100, on hover: scale-x-110
- Uppercase, wide tracking (tracking-wider: 0.1em)
- Font-weight: 600 (semibold)
- Padding: py-2/3/4 based on size (sm/default/lg), px-0
- Gap between children: gap-2/2.5/3
- Active state: translate-y-px for press feedback
- Transition: 150ms all
\`\`\`

Secondary/outline button:
\`\`\`
- Border: 1px solid foreground
- Text: foreground
- No background fill initially
- On hover: bg-foreground, text becomes background color (full inversion)
- Sharp corners (0px radius)
- Padding: px-6 (needs horizontal padding unlike primary)
- Uppercase, tracking-wider
\`\`\`

Ghost button:
\`\`\`
- No border, no fill
- Text: mutedForeground
- Padding: px-4
- On hover: text becomes foreground
- Underline appears via scale-x-0 to scale-x-100 transition
- Underline is h-px (thinner than primary)
\`\`\`

All buttons:
\`\`\`
- Focus-visible: 2px ring in accent, 2px offset
- Disabled: pointer-events-none, opacity-50
- Inline-flex for proper alignment
- Whitespace-nowrap to prevent wrapping
\`\`\`

### Cards/Containers

**Minimal card usage.** Content is primarily separated by:
- Generous section padding (py-20 to py-40)
- Full-width horizontal borders (border-t/border-b)
- Typography scale changes
- Background color alternation (background �+" muted)

When a "card" is necessary (pricing, testimonials):
\`\`\`
- Border: 1px solid border (controlled by \`bordered\` prop)
- Background: transparent (bg-transparent)
- No radius (0px, sharp corners)
- No shadow
- Padding: p-6 (mobile) to p-8 (desktop)
- Transition on hover: border-hover color (150ms)
\`\`\`

Highlighted cards (featured pricing tier):
\`\`\`
- Border: 2px solid accent (overrides default 1px)
- Small accent badge above content (bg-accent, px-3 py-1, uppercase mono text)
- No background change, border is the differentiator
\`\`\`

Special depth technique (Product Detail card):
\`\`\`
- Add accent top border: absolute h-1 w-16 bg-accent
- Layered text: duplicate text element offset with -z-10 and border color
- Creates subtle dimensionality without shadows
\`\`\`

### Inputs

\`\`\`
- Background: input color (#1A1A1A)
- Border: 1px solid border
- Border-radius: 0px (rounded-none, sharp corners)
- Height: h-12 (mobile) to h-14 (desktop), responsive
- Font-size: text-base (16px, prevents zoom on iOS)
- Padding: px-4
- Text color: foreground
- Placeholder: mutedForeground
- Focus: border-accent, no ring, no glow, outline-none
- Transition: colors 150ms
- Disabled: cursor-not-allowed, opacity-50
- File input: special styling for file upload elements
\`\`\`

Special case (Final CTA inverted section):
\`\`\`
- Background: transparent (to show inverted bg)
- Border: border-background/30 (semi-transparent white)
- Text: background color (inverted)
- Placeholder: background/50 (semi-transparent)
- Focus border: accent (stands out on white bg)
\`\`\`

---

## Layout Strategy

### Container
\`\`\`
maxWidth: 1200px (max-w-5xl)
padding: 24px mobile, 48px tablet, 64px desktop
\`\`\`

### Section Spacing
\`\`\`
py-20 (80px) - tight sections
py-28 (112px) - standard sections
py-40 (160px) - hero/CTA sections
\`\`\`

### Grid Philosophy
- **Asymmetric grids**: 7/5 or 8/4 splits instead of 6/6
- **Staggered alignment**: Elements don't always align top
- **Text columns**: max-w-2xl for readability, but headlines can span full width

---

## Effects & Animation

### Motion Philosophy
**Fast and decisive.** No bouncy easing. No playful delays. Movement is confident and direct.

\`\`\`
duration: 150ms - micro-interactions (buttons, underlines)
duration: 200ms - standard transitions (FAQ accordion, colors)
duration: 500ms - image hover effects
easing: cubic-bezier(0.25, 0, 0, 1) - fast-out, crisp stop
\`\`\`

### Specific Effects

**Link/Button interactions**:
- Underline scale animation (scale-x-0 to scale-x-100 on hover for ghost, scale-x-100 to scale-x-110 for primary)
- Text color transition (150ms)
- Active press feedback: translate-y-px for tactile response
- No scale, no glow, no bounce

**Card hover**:
- Border color lightens (border-hover token)
- Background color change on feature cards (transparent �+' muted)
- No lift, no shadow, no scale

**Image hover** (blog posts):
- Scale transform (scale-105) over 500ms
- Image only, not container
- Overflow hidden on container

**Page scroll animations** (Framer Motion):
- Fade in + slide up (opacity 0�+'1, translateY 20px�+'0) over 500ms
- Stagger children by 80ms with 100ms delay before first
- Viewport trigger: once only, 15% threshold, -50px margin
- Container stagger, individual fadeInUp variants

**FAQ accordion**:
- Height auto-animate with opacity fade
- 200ms duration with ease-out
- Icons swap (Plus �+" Minus) instantly

**Step number hover** (How It Works):
- Color transition from border color to accent (fast, 150ms)
- No movement, pure color change

---

## Iconography

From \`lucide-react\`:
\`\`\`
- Stroke width: 1.5px (thinner than default 2px for elegance)
- Sizes by context:
  - 16px: inline with small text (arrows in buttons)
  - 18px: FAQ toggle, footer social icons
  - 20px: standard navbar icons
  - 24px: feature section icons (28px on desktop)
- Color: currentColor (inherits from parent text color)
- Accent icons: explicitly text-[var(--accent)] class
- Style: Use sparingly�?"text labels are preferred
- Positioning: icons sit left of text in buttons, above text in feature cards
- Never use filled icons, always outline/stroke style
\`\`\`

Icon mapping by section:
\`\`\`
Features: Users, Zap, BarChart3, Link, Shield, Headphones, Globe (from data.icon field)
Social: Twitter, Linkedin, Github
UI controls: Plus, Minus (FAQ), ArrowRight (CTAs), Check (pricing features)
\`\`\`

---

## Responsive Strategy

**Mobile-first typography scaling**:
- Headlines: text-3xl (mobile) �+' text-4xl/5xl (tablet) �+' text-6xl/7xl/8xl (desktop)
- Hero headline specifically: text-4xl �+' text-5xl �+' text-6xl �+' text-7xl �+' text-8xl (progressive enhancement)
- Body text: text-base (16px) throughout with md:text-lg on key sections
- Maintain hierarchy ratio at all sizes
- Icon sizes: 16px-18px inline, 24px standard, scaling down on mobile

**Layout shifts**:
- Stats: 1 column �+' 2 columns (sm) �+' 4 columns (md)
- Features: 1 column �+' 2 columns (sm) �+' 3 columns (lg)
- Blog/Testimonials/Pricing: 1 column �+' 2 columns (sm) �+' 3 columns (lg)
- How It Works: stacked �+' 3-column grid with number|title|description (lg)
- Benefits: stacked �+' 2-column side-by-side (lg)
- Footer: 2 columns �+' 4 columns (md) �+' 5 columns (lg)
- Asymmetric grids collapse to stacked on mobile

**Spacing adjustments**:
- Section padding: py-20 (mobile) �+' py-28 (md) �+' py-32/40 (lg)
- Container padding: px-6 (mobile) �+' px-12 (md) �+' px-16 (lg)
- Gap spacing: gap-4 �+' gap-6 �+' gap-8 progression
- Internal card padding: p-6 (mobile) �+' p-8 (md+)

**Mobile-specific fixes**:
- Hide decorative overflow elements (large "01", "ACME" text) on mobile to prevent horizontal scroll
- Reduce decorative number sizes to prevent layout breaking
- Ensure touch targets are minimum 44x44px (buttons h-12 on mobile, h-14 on desktop)
- Stack email input + button on mobile, side-by-side on tablet+
- Adjust navigation gaps to be tighter on smaller screens

**Typography integrity**:
- Headlines scale smoothly with responsive classes (never one size for all)
- Keep letter-spacing consistent across breakpoints
- Ensure underlines remain visible and touchable (2px minimum)
- Line-height increases slightly for smaller screens for readability
- Max-width constraints on body text prevent overly long lines (max-w-xl, max-w-2xl, max-w-3xl)

---

## Accessibility

**Contrast**:
- foreground (#FAFAFA) on background (#0A0A0A) = 18.1:1 �o"
- mutedForeground (#737373) on background = 5.3:1 �o" (AA)
- accent (#FF3D00) on background = 5.4:1 �o" (AA for large text)

**Focus states**:
- 2px accent outline
- 2px offset from element
- No glow, no fill change
- Visible on all interactive elements

**Typography**:
- Body text minimum 16px
- Line-height minimum 1.5 for body
- No thin weights below 400

**Interaction**:
- Touch targets minimum 44x44px
- Underlines are 2px+ for visibility
- Color is never the only indicator`},

===== STYLE BLOCK: botanical (offset 536660 to 547772) =====
botanical:{id:"botanical",name:"Botanical / Organic Serif",mode:"light",fontType:"serif",description:"Soft, earthy, elegant design inspired by nature. Features organic shapes, generous rounded corners, paper grain texture, muted earth tones, and sophisticated serif typography that breathes warmth and natural luxury.",layoutIdeas:{hero:"Split two-column layout with massive serif typography on left and arched image (200px top radius) on right. Decorative botanical icons float in corners. Quote overlay on image.",stats:"Horizontal band with subtle sage background and border. Large serif numbers paired with uppercase sans-serif labels in grid.",features:"Three-column grid with staggered vertical offsets (translate-y-12 on middle card). Soft rounded cards with botanical icons in muted circles.",howItWorks:"Dark forest green background with three-step grid. Dotted SVG connecting path. Steps in translucent cards with numbered terracotta badges.",benefits:"Alternating zig-zag layout with organic blob-shaped image backgrounds (rotate transform). Checkmark bullets in terracotta circles.",pricing:"Three-column grid with center card elevated and scaled. Dark background for highlighted plan with terracotta badge. Pill-shaped buttons.",testimonials:"Three-column grid on soft clay background with radial dot pattern overlay. Large quotation marks, circular avatars, serif quotes.",faq:"Centered accordion with rounded items. Smooth expand/collapse animations. Active items get white background and shadow.",blog:"Three-column grid with tall aspect-ratio images (3:4) in organic rounded containers (32px radius). Hover lifts cards with scale effect on images.",footer:"Rounded top edge (60px radius), dark moss background. Four-column grid for nav links with social icons."},content:"# Design Style: Botanical / Organic Serif\n\n## 1. Design Philosophy\n\nThis style is a **digital ode to nature**�?"it breathes, flows, and grounds itself in organic beauty. It is **soft, sophisticated, and deeply intentional**, rejecting the rigid, hyper-digital sharpness of modern tech aesthetics in favor of **warmth, tactility, and natural imperfection**.\n\n### Core Essence\nThe Botanical Organic style embodies the calming presence of a botanical garden, the earthy warmth of a ceramics studio, and the refined elegance of editorial design. It whispers rather than shouts. Every element feels **hand-touched, sun-warmed, and naturally crafted**.\n\n### Fundamental Principles\n\n*   **Vibe**: Peaceful, curated, artisanal, high-end wellness, sustainable luxury, botanical elegance\n*   **Visual DNA**:\n    *   **Organic Softness**: Hard angles are purposefully rare. Every corner is rounded, every shape flows like water-smoothed stones or unfurling leaves. The 200px arch radius on images creates iconic architectural moments.\n    *   **Typographic Elegance**: Typography is the protagonist�?"Playfair Display's high-contrast strokes command attention while maintaining grace. Italics add a handwritten, personal touch. Headlines breathe with generous scale (text-5xl to text-8xl).\n    *   **Earthbound Palette**: Every color derives from nature�?"forest floors, clay pottery, sage gardens, terracotta tiles. No artificial brights. Muted, sophisticated, grounded.\n    *   **Tactile Texture**: The subtle paper grain overlay is non-negotiable�?"it transforms cold digital pixels into warm, touchable surfaces. This is the secret ingredient that prevents flatness.\n    *   **Breathing Space**: Whitespace is sacred. Sections have generous vertical padding (py-32), cards float with ample gaps (gap-8, gap-16), and every element has room to exist without crowding.\n    *   **Intentional Movement**: Animations are slow, graceful, and fluid�?"like plants swaying in breeze. Duration-500 to duration-700 with ease-out curves. Nothing snaps or jerks.\n    *   **Staggered Rhythm**: Breaking the grid creates natural, organic flow. Every second feature card translates vertically. Images rotate subtly. The design breathes asymmetry within structure.\n\n## 2. Design Token System\n\n### Colors (Light Mode - Earthy & Muted)\n*   **Background**: `#F9F8F4` (Warm Alabaster / Rice Paper) - Not stark white.\n*   **Foreground**: `#2D3A31` (Deep Forest Green) - The primary text color. Softer than black.\n*   **Primary/Accent**: `#8C9A84` (Sage Green) - For buttons, highlights, icons.\n*   **Secondary/Muted**: `#DCCFC2` (Soft Clay / Mushroom) - For backgrounds of cards, secondary buttons.\n*   **Border**: `#E6E2DA` (Stone) - Very subtle, low contrast.\n*   **Interactive**: `#C27B66` (Terracotta) - Hover states or \"call to action\" pops.\n\n### Typography\n*   **Headings**: **\"Playfair Display\"** (Google Font). It is a transitional serif with high contrast strokes, feeling both classic and modern.\n    *   Weight: 600/700 for headlines.\n    *   Style: Italicize key words for emphasis.\n*   **Body**: **\"Source Sans 3\"** (Google Font). A clean, legible humanist sans-serif that pairs beautifully with Playfair.\n    *   Weight: 400/500.\n*   **Scaling**: Large. Headlines should feel airy and grand.\n\n### Radius & Shapes\n*   **Radius**: Highly rounded.\n    *   Standard Card: `rounded-3xl` (24px).\n    *   Buttons: `rounded-full` (Pill shape).\n    *   Images: Often `rounded-t-full` (Arch) or `rounded-[40px]`.\n*   **Border**: Thin, delicate. `1px` solid.\n\n### Shadows & Effects\n*   **Elevation**: Very soft, diffused shadows. No harsh dark drops.\n    *   Default: `0 4px 6px -1px rgba(45, 58, 49, 0.05)`\n    *   Medium: `0 10px 15px -3px rgba(45, 58, 49, 0.05)`\n    *   Large: `0 20px 40px -10px rgba(45, 58, 49, 0.05)`\n    *   Extra Large: `0 25px 50px -12px rgba(45, 58, 49, 0.15)`\n*   **Paper Grain Texture** (CRITICAL): A subtle SVG noise overlay is **mandatory** on the main background. This is applied as a fixed, full-screen overlay with `opacity-[0.015]` using an SVG fractal noise filter. This texture is the defining element that transforms the design from flat digital to warm, tactile, paper-like. Without it, the design loses its soul.\n    ```jsx\n    <div\n      className=\"pointer-events-none fixed inset-0 z-50 opacity-[0.015]\"\n      style={{\n        backgroundImage: `url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")`,\n        backgroundRepeat: \"repeat\",\n      }}\n    />\n    ```\n*   **Blur Effects**: Use backdrop-blur-sm on overlays (like the hero quote card) to create depth and layering.\n\n## 3. Component Stylings\n\n### Buttons\n*   **Primary**: Pill-shaped (`rounded-full`). Background is **Deep Forest Green** (`#2D3A31`) with White text. On hover, it lightens slightly or shifts to Terracotta.\n*   **Secondary**: Transparent background with a **Sage Green** border (`1px`). Text is Sage Green.\n*   **Typography**: Uppercase, wide tracking (`tracking-widest`), small font size (text-sm).\n\n### Cards (Features, Pricing)\n*   **Background**: White (`#FFFFFF`) or Soft Clay (`#F2F0EB`).\n*   **Border**: None or very subtle Stone (`#E6E2DA`).\n*   **Shape**: `rounded-3xl`.\n*   **Hover**: Slight lift (`-translate-y-1`) and a bloom of soft shadow.\n\n### Inputs\n*   **Style**: Underlined only (Border-bottom) or pill-shaped with a very light background (`#F2F0EB`).\n*   **Focus**: No harsh blue rings. A soft Sage Green border transition.\n\n## 4. Non-Generic \"Bold\" Choices\n*   **Arch Imagery**: Use CSS `clip-path` or `border-radius` to turn standard rectangular images into **Arches** (classic Roman arch shape) or **Organic Blobs**.\n*   **Overlapping Typography**: Allow big serif headlines to slightly overlap images or background shapes.\n*   **Decorative Lines**: Use fine, 1px SVG lines that curve or meander to connect sections, mimicking vines or roots.\n*   **Italic Emphasis**: Frequently use the *Italic* variant of Playfair Display for single words within a bold headline.\n\n## 5. Layout Strategy & Spacing\n*   **Container**: `max-w-7xl`. We want airiness.\n*   **Whitespace**: Generous. `gap-12` or `gap-16` between grid items. `py-24` or `py-32` between sections.\n*   **Grid**: Break the grid. Use `translate-y-12` on every second card in a row to create a \"staggered\" natural look.\n\n## 6. Icons (Lucide React)\n*   **Style**: Thin stroke (`stroke-width={1.5}`).\n*   **Color**: Deep Forest Green or Sage.\n*   **Integration**: Don't put them in heavy boxes. Let them float, or place them in soft, pale circles.\n\n## 7. Animation & Micro-Interactions\n*   **Feel**: Slow, graceful, fluid. Everything moves like it's suspended in honey or swaying in a gentle breeze. \"Eased out\" significantly.\n*   **Durations**:\n    *   Fast interactions: `duration-300` (button hovers, link colors)\n    *   Standard: `duration-500` (card lifts, transforms)\n    *   Slow, dramatic: `duration-700` to `duration-1000` (image scales, hero image hover)\n*   **Hover Behaviors**:\n    *   Cards: `-translate-y-1` or `-translate-y-2` with shadow intensification\n    *   Images: `scale-105` with `duration-700` for smooth, luxurious feel\n    *   Buttons: `bg-opacity-90` subtle darkening with `duration-300`\n    *   Blog cards: Lift entire card while scaling image, arrow translates right (`translate-x-1`)\n*   **Focus States**: Sage green ring (`ring-[#8C9A84]`) with 2px width and offset for accessibility\n*   **Accordion**: Smooth height transitions with `max-h-0` to `max-h-48` and opacity fade\n*   **Mobile Menu**: Slide in from top with backdrop\n*   **Scroll**: Elements should gently fade up and float into place (`opacity-0` to `opacity-100`, `translate-y-4` to `translate-y-0`)\n\n## 8. Responsive Strategy\n*   **Mobile-First Approach**: The design gracefully adapts while maintaining its organic, sophisticated character.\n*   **Navigation**: Desktop shows horizontal nav with Sign In button. Mobile displays hamburger menu that opens a full-screen overlay with vertical nav links.\n*   **Hero Image**: Uses `aspect-[3/4]` on mobile, transitions to `aspect-square` with fixed height on md+ breakpoints. This prevents excessive height on small screens.\n*   **Grid Breakpoints**:\n    *   Features: `grid-cols-1` �+' `md:grid-cols-3`\n    *   Stats: `grid-cols-2` �+' `md:grid-cols-4`\n    *   Blog/Testimonials: `grid-cols-1` �+' `md:grid-cols-3`\n    *   Pricing: `grid-cols-1` �+' `lg:grid-cols-3`\n*   **Typography Scaling**: Headlines reduce from `text-8xl` to `text-5xl` on mobile. Body text remains `text-lg` but line-height adjusts.\n*   **Spacing Adjustments**: `py-32` becomes `py-16` on mobile, `gap-16` becomes `gap-12`, padding reduces from `p-8` to `p-4` where needed.\n*   **Touch Targets**: All buttons maintain minimum 44px height (`h-12`, `h-14`) for comfortable mobile tapping.\n*   **Staggered Cards**: The `translate-y-12` offset on alternating cards only applies at `md:` breakpoint and above to prevent awkward stacking on mobile."},

===== STYLE BLOCK: claymorphism (offset 547772 to 571669) =====
claymorphism:{id:"claymorphism",name:"Clay",mode:"light",fontType:"sans-serif",description:"A hyper-realistic 3D aesthetic simulating soft, inflatable clay objects with multi-layered shadow stacks, vibrant candy-store colors, tactile micro-interactions, and organic floating ambient elements that create a premium, playful digital toy experience.",layoutIdeas:{hero:"Centered content with massive, progressively scaled typography (text-5xl to text-8xl). Background features large, slowly drifting colored blobs with blur-3xl. Floating 3D shapes orbit the headline with clay-float-slow animation. Trust badge with animated pulse indicator. Gradient text with multi-color stops for headline accent.",stats:"Grid of breathing spheres (clay-orb + clay-breathe) with aspect-square ratio. Numbers use Nunito Black in large sizes. Staggered animation delays create organic rhythm. Hover scale transforms provide tactile feedback.",features:"Masonry Bento grid with col-span-2/row-span-2 hero card. Varying background opacity creates depth hierarchy. Internal decorative panels positioned absolutely at card bottom with translate-y hover reveals. Icon containers use vibrant gradient backgrounds with rounded-2xl shapes.",howItWorks:"Three-column grid with centered content. Connecting horizontal 'pipe' element (rounded-full bg with shadow-inner). Each step uses large gradient circles (h-28 to h-32 responsive) with bold Nunito numbers. Group-hover scale interactions.",benefits:"50/50 split layout. Left: Abstract clay composition with nested rounded shapes, layered backgrounds (aspect-square container). Right: Stacked benefit cards (rounded-[24px]) with gradient check icons, hover lift and enhanced shadow.",pricing:"Three-column grid. Center 'popular' card scales to 110% on desktop only (md:scale-110) with enhanced shadow. All cards use consistent rounded-[32px] radius with responsive padding. Chunky check icons in green tones.",testimonials:"2-3 column responsive grid. Cards use white backgrounds with shadow-clayCard. Avatars wrapped in white clay rings (shadow-clayButton). Five-star ratings in amber. Group hover lifts cards with enhanced shadows.",faq:"Accordion using native details/summary elements. Cards have rounded-[24px] radius with shadow-clayCard. Open state reveals recessed inset shadow. Summary includes animated rotate-180 chevron indicator.",blog:"Polaroid-style cards with rounded-[32px] outer and rounded-[24px] image containers. Thick padding creates photo border effect. Images scale on group-hover. Metadata uses small caps with clay pill badges.",footer:"Glass-morphic base (bg-white/40 + backdrop-blur-lg). Social icons as clay buttons (rounded-xl with shadow-clayButton). Hover translates up with shadow enhancement. Grid layout with company info spanning 2 columns."},content:'# High-Fidelity Claymorphism Design System\n\n## Design Philosophy\n\n**Core Concept: Digital Clay**\nThis design system is not merely a "soft UI"�?"it is a high-fidelity simulation of a tangible, physical world constructed from **premium digital clay**. Every element on the screen should evoke the sensation of holding a high-end, matte-finish vinyl toy or a soft, air-filled silicone object. It rejects the flatness of modern minimalism in favor of volume, weight, and tactility.\n\n**The "High-Fidelity" Difference**:\nUnlike early 2020s "Neumorphism" (which felt like extruded plastic) or basic "Claymorphism" (which often feels like flat vector art), **High-Fidelity Claymorphism** relies on complex, multi-layered lighting simulation using 4-layer shadow stacks. It renders objects that feel dense, substantial, and interactive�?"not hollow decorations.\n\n*   **Materiality**: Think of soft-touch matte silicone, marshmallow-like foam, or high-quality injection-molded plastic with a premium finish. Surfaces absorb light rather than reflecting it sharply, creating a warm, inviting aesthetic.\n*   **Lighting**: The "world" is lit by a soft, diffused overhead light source positioned top-left, creating deep ambient occlusion shadows below objects and gentle specular highlights on their upper ridges. This creates the illusion of physical depth.\n*   **Shadow Architecture**: Every element uses carefully crafted multi-layer shadows:\n    - **Outer shadows**: Soft, colored drop shadows that define distance from the surface\n    - **Highlight shadows**: Top-left highlights that simulate light reflection\n    - **Inner shadows**: Subtle colored reflections and rim lights that add dimensionality\n    - **Active states**: Pressed elements use inset shadows to simulate physical depression\n\n**The Sensory Vibe**:\n*   **Playful & Optimistic**: The interface radiates joy through "candy store" colors (vivid violets, hot pinks, sky blues, emerald greens, amber oranges) and bouncy, organic motion. It feels safe, welcoming, and unpretentious�?"like a premium toy store display.\n*   **Tactile & Responsive**: Elements don\'t just change color when interacted with�?"they physically react with exaggerated realism. Buttons actively "squish" (scale-[0.92] + shadow-clayPressed) and compress under the cursor. Cards lift and float towards the user (-translate-y-2 with enhanced shadows). Every interaction provides satisfying visual feedback.\n*   **Friendly & Safe**: There are **zero sharp corners** in this universe. Every edge is aggressively rounded (`rounded-[20px]` minimum, up to `rounded-[60px]` for large containers), subconsciously signaling safety and approachability to the user. The design language speaks "friendly" and "accessible" without words.\n*   **Premium Craft**: Despite the playfulness, this aesthetic maintains a sense of quality through careful attention to detail: consistent border radii, precise shadow layering, harmonious color relationships, and smooth micro-interactions.\n\n**The "Clay" Physics Engine**:\n1.  **Convexity (The Bulge)**: Primary interactive elements (Buttons, Stat orbs, Feature cards) bulge OUT towards the user with `shadow-clayButton` or `shadow-clayCard`. They capture light on their top-left edge and cast soft colored shadows below, creating the illusion of floating above the surface.\n2.  **Concavity (The Press)**: Secondary surfaces (Input fields, Active button states, FAQ panels when open) are pressed INTO the clay surface with `shadow-clayPressed`. They cast internal shadows on their top edge and catch light on their bottom lip, making them feel recessed.\n3.  **Buoyancy (The Float)**: The interface exists in a zero-gravity environment with high air resistance. Background blobs drift slowly (8-12s animations with translateY and rotate). Cards hover effortlessly with hover states that amplify the float effect. Nothing feels statically "stuck" to the grid�?"everything breathes and moves subtly.\n4.  **Micro-Physics**: Hover states consistently lift elements upward (`hover:-translate-y-1` to `-translate-y-2`) while enhancing their shadows, simulating the element floating closer to the viewer. Active/pressed states do the opposite�?"compressing downward with reduced shadows.\n\n---\n\n## Design Token System\n\n### Colors (The "Candy Shop" Palette)\n\n**Background**:\n*   **Canvas**: `#F4F1FA` (Very pale, cool lavender-white). This provides a cleaner, more modern base than warm beige. Never use pure white�?"the slight tint creates warmth.\n\n**Foreground**:\n*   **Text (Primary)**: `#332F3A` (Soft Charcoal). High contrast (passing WCAG AA) but softer than black for a friendlier feel.\n*   **Muted (Secondary)**: `#635F69` (Dark Lavender-Gray). Crucial for readability against light backgrounds. Use for body text, labels, and secondary information. Never go lighter than this value.\n\n**Accents (Vibrant & Saturated)**:\n*   **Primary Accent**: `#7C3AED` (Vivid Violet). The hero color used for primary CTAs, links, and brand emphasis.\n*   **Secondary Accent**: `#DB2777` (Hot Pink). Used in gradients and for secondary emphasis.\n*   **Tertiary**: `#0EA5E9` (Sky Blue). For informational elements and background blobs.\n*   **Success/Benefits**: `#10B981` (Emerald Green). For checkmarks and positive indicators.\n*   **Warning**: `#F59E0B` (Amber). For alerts and star ratings.\n\n**Gradient Strategy**:\n*   **Primary Buttons**: `bg-gradient-to-br from-[#A78BFA] to-[#7C3AED]` (lighter violet to primary violet). This creates depth and prevents overly dark buttons.\n*   **Icon Orbs**: `bg-gradient-to-br` from light pastel (400) to saturated hue (600) with varied colors for visual interest (e.g., `from-blue-400 to-blue-600`, `from-purple-400 to-purple-600`, `from-pink-400 to-pink-600`).\n*   **Text Highlights**: Use multi-stop gradients for hero text (`clay-text-gradient`): `from-clay-foreground 20%, to-clay-accent 60%, to-clay-accent-alt`. Keep gradient text large (text-5xl+) for readability.\n*   **Background Blobs**: Semi-transparent accent colors with 10% opacity and blur-3xl for soft ambient lighting.\n\n### Typography\n\n**Font Selection**:\n*   **Headings**: **Nunito** (Google Fonts, Weights: 700/800/900). The rounded terminals perfectly complement the soft clay aesthetic. Apply via inline styles: `style={{ fontFamily: "Nunito, sans-serif" }}` for all headings, stat numbers, and emphasis text.\n*   **Body**: **DM Sans** (Google Fonts, Weights: 400/500/700). Geometric, clean, and highly readable. Applied globally via body font-family.\n\n**Hierarchy (Mobile-First with Progressive Enhancement)**:\n*   **Hero Headline**: `text-5xl sm:text-6xl md:text-7xl lg:text-8xl`, Black weight (font-black), tight tracking (tracking-tight), line-height 1.1. Always use Nunito.\n*   **Section Titles**: `text-3xl sm:text-4xl md:text-5xl`, Extrabold (font-extrabold) or Black. Always use Nunito.\n*   **Card Titles**: `text-xl` to `text-2xl` (larger for hero cards: `text-3xl`), Bold (font-bold) to Extrabold. Use Nunito.\n*   **Body Text**: `text-base` to `text-lg`, Medium weight (font-medium), relaxed leading (leading-relaxed). Use DM Sans.\n*   **Small Text**: `text-sm` to `text-xs`, Medium to Bold weight. Use for labels, metadata, uppercase tracking-wide treatments.\n\n**Typography Best Practices**:\n*   Always pair Nunito headings with DM Sans body for optimal hierarchy.\n*   Use `font-black` (900 weight) for maximum impact on large headings and numbers.\n*   Ensure line-height is generous: `leading-relaxed` (1.625) for body, `leading-[1.1]` for tight display headings.\n*   Limit line length to 60-75 characters with max-w-2xl to max-w-3xl containers for optimal readability.\n*   Use `tracking-tight` on large headings to maintain visual density, `tracking-wide` or `tracking-widest` on small caps/labels.\n\n### Shapes & Radii\n\n**The "Super-Rounded" Rule** (Absolute Values Only):\n*   **Large Containers/Hero Sections**: `rounded-[48px]` to `rounded-[60px]`\n*   **Standard Cards**: `rounded-[32px]` (the default for most cards)\n*   **Medium Elements** (Benefits pills, Blog cards): `rounded-[24px]`\n*   **Buttons & Inputs**: `rounded-[20px]` or `rounded-2xl`\n*   **Icon Containers**: `rounded-2xl` (16px) for square icons, `rounded-full` for circular\n*   **Small Badges**: `rounded-lg` (8px) minimum, `rounded-full` preferred\n*   **Stat Orbs**: `rounded-full` (perfect circles)\n\n**Critical Rules**:\n*   Never use `rounded-md` (4px) or `rounded-sm`. They appear too sharp and generic for this aesthetic.\n*   Maintain consistency: if a card uses `rounded-[32px]`, its nested image should use `rounded-[24px]` (8px less) to create visual hierarchy.\n*   On mobile, you may reduce radii slightly (e.g., `rounded-[32px] sm:rounded-[40px]`) to maximize screen real estate while maintaining the soft aesthetic.\n\n### Shadows (The Engine of Clay)\n\nThis system uses a **High-Fidelity Shadow Stack** to simulate complex lighting.\n\n**1. Deep Clay (Surface)**:\nFor the main background elements or large containers.\n```css\nbox-shadow: \n  30px 30px 60px #cdc6d9,           /* Deep, soft ambient occlusion */\n  -30px -30px 60px #ffffff,         /* Top-left ambient light */\n  inset 10px 10px 20px rgba(139, 92, 246, 0.05), /* Subtle color reflection */\n  inset -10px -10px 20px rgba(255, 255, 255, 0.8); /* Surface specularity */\n```\n\n**2. Clay Card (Floating)**:\nFor standard content cards.\n```css\nbox-shadow: \n  16px 16px 32px rgba(160, 150, 180, 0.2), /* Soft purple-gray drop shadow */\n  -10px -10px 24px rgba(255, 255, 255, 0.9), /* Strong top-left highlight */\n  inset 6px 6px 12px rgba(139, 92, 246, 0.03), /* Inner colored bounce light */\n  inset -6px -6px 12px rgba(255, 255, 255, 1); /* Inner rim light */\n```\n\n**3. Clay Button (High Convexity)**:\nFor clickable elements.\n```css\nbox-shadow: \n  12px 12px 24px rgba(139, 92, 246, 0.3), /* Strong colored drop shadow */\n  -8px -8px 16px rgba(255, 255, 255, 0.4), /* Top-left highlight */\n  inset 4px 4px 8px rgba(255, 255, 255, 0.4), /* Inner rim */\n  inset -4px -4px 8px rgba(0, 0, 0, 0.1); /* Bottom-right shading */\n```\n\n**4. Clay Pressed (Recessed)**:\nFor inputs and active states.\n```css\nbox-shadow: \n  inset 10px 10px 20px #d9d4e3, /* Deep inner shadow top-left */\n  inset -10px -10px 20px #ffffff; /* Inner highlight bottom-right */\n```\n\n---\n\n## Component Architecture\n\n### 1. The Universal Card (`Card`)\n*   **Base Styles**: `relative overflow-hidden rounded-[32px] bg-clay-cardBg p-8 text-clay-foreground shadow-clayCard backdrop-blur-xl`\n*   **Interactive States**:\n    *   Default: `shadow-clayCard` (4-layer shadow with soft depth)\n    *   Hover: `hover:-translate-y-2 hover:shadow-[enhanced]` (lifted with stronger shadow)\n    *   Transition: `transition-all duration-500` (smooth, premium feel)\n*   **Structure**:\n    *   Outer wrapper handles positioning, overflow, shadows\n    *   **Inner Content Wrapper**: `<div className="relative z-10 flex h-full flex-col">{children}</div>` to support absolute positioned decorative elements\n*   **Decorations**: Use absolute positioned panels with negative margins (`-bottom-8 -left-8 -right-8`) to create "peeking" UI elements that emerge from card bottoms\n*   **Variants**:\n    *   Glass effect: `bg-white/60` to `bg-white/80`\n    *   Solid: `bg-white`\n    *   Feature hero card: `md:col-span-2 md:row-span-2` with larger internal padding\n\n### 2. The Clay Button (`Button`)\n*   **Base Shape**: `rounded-[20px]` with chunky height (`h-14` default, `h-16` for lg)\n*   **Base Styles**: `inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200`\n*   **Variants**:\n    *   **Primary/Default**: `bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] text-white shadow-clayButton hover:shadow-clayButtonHover`\n    *   **Secondary**: `bg-white text-clay-foreground shadow-clayButton`\n    *   **Outline**: `border-2 border-clay-accent/20 bg-transparent text-clay-accent hover:border-clay-accent hover:bg-clay-accent/5`\n    *   **Ghost**: `text-clay-foreground hover:bg-clay-accent/10 hover:text-clay-accent`\n*   **Interactive States**:\n    *   Hover: `hover:-translate-y-1` (lift up 4px) + Enhanced shadow\n    *   Active: `active:scale-[0.92] active:shadow-clayPressed` (pronounced squish effect)\n    *   Focus: `focus-visible:ring-4 focus-visible:ring-clay-accent/30 focus-visible:ring-offset-2`\n*   **Sizing**: Use `size` prop: `sm` (h-11), `default` (h-14), `lg` (h-16)\n\n### 3. The Recessed Input (`Input`)\n*   **Base Shape**: `rounded-2xl` with generous height `h-16`\n*   **Base Styles**: `flex w-full border-0 bg-[#EFEBF5] px-6 py-4 text-clay-foreground text-lg shadow-clayPressed`\n*   **States**:\n    *   Default: Recessed with `shadow-clayPressed` (inset shadows)\n    *   Focus: `focus:bg-white focus:ring-4 focus:ring-clay-accent/20` (transforms to raised white surface)\n    *   Placeholder: `placeholder:text-clay-muted`\n*   **Accessibility**: `transition-all duration-200` for smooth state changes\n\n### 4. Floating 3D Blobs (Background)\n**Never use a flat background.** Always include 3-4 large, animated blobs.\n*   **Container**: `<div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">`\n*   **Individual Blobs**:\n    *   Classes: `absolute h-[60vh] w-[60vh] rounded-full blur-3xl`\n    *   Colors: Accent colors with `/10` opacity (e.g., `bg-[#8B5CF6]/10`, `bg-[#EC4899]/10`, `bg-[#0EA5E9]/10`)\n    *   Positioning: Negative margins to bleed off edges (`-top-[10%] -left-[10%]`, `-right-[10%] top-[20%]`)\n    *   Animation: `clay-blob` or `clay-blob-alt` with staggered `animation-delay-2000` or `animation-delay-4000`\n*   **Purpose**: Creates ambient colored lighting that shows through glass-morphic cards\n\n---\n\n## Animation System\n\n**1. Clay Float (`clay-float`)**:\nSimulates zero-gravity drift for background blobs. 8 second duration.\n```css\n@keyframes clay-float {\n  0%, 100% { transform: translateY(0) rotate(0deg); }\n  50% { transform: translateY(-20px) rotate(2deg); }\n}\n```\n\n**2. Clay Float Delayed (`clay-float-delayed`)**:\nAlternative animation with opposite rotation. 10 second duration.\n```css\n@keyframes clay-float-delayed {\n  0%, 100% { transform: translateY(0) rotate(0deg); }\n  50% { transform: translateY(-15px) rotate(-2deg); }\n}\n```\n\n**3. Clay Float Slow (`clay-float-slow`)**:\nFor hero decorative elements that orbit the headline. 12 second duration with more pronounced movement.\n```css\n@keyframes clay-float-slow {\n  0%, 100% { transform: translateY(0) rotate(0deg); }\n  50% { transform: translateY(-30px) rotate(5deg); }\n}\n```\n\n**4. Clay Breathe (`clay-breathe`)**:\nSimulates an object inflating/deflating slightly. 6 second duration. Used on stat orbs.\n```css\n@keyframes clay-breathe {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.02); }\n}\n```\n\n**5. Hover Lift**:\nStandard interactive elements should lift upward on hover:\n*   Cards: `hover:-translate-y-2` (8px) with enhanced shadow\n*   Benefits pills: `hover:-translate-y-1` (4px)\n*   Testimonials: `hover:-translate-y-2` (8px)\n*   Blog posts: `hover:-translate-y-3` (12px) for dramatic effect\n*   Buttons: `hover:-translate-y-1` (4px) with shadow enhancement\n\n**6. Active Press**:\nButtons use `active:scale-[0.92]` combined with `active:shadow-clayPressed` to simulate a physical squish when clicked. Duration should be fast (200ms) for immediate feedback.\n\n**7. Scale Transforms**:\n*   Stat orbs: `hover:scale-110` (10% growth)\n*   How It Works circles: `group-hover:scale-110` with 300ms duration\n*   Pricing cards (non-highlighted): `hover:scale-105` (5% subtle growth)\n*   Featured card in Bento grid: `hover:scale-[1.02]` (minimal growth due to large size)\n\n**8. Animation Delays**:\nUse staggered animations for visual rhythm:\n*   `.animation-delay-2000` (2s delay)\n*   `.animation-delay-4000` (4s delay)\n\n**9. Reduced Motion**:\nAlways include `@media (prefers-reduced-motion: reduce)` to disable all animations for accessibility.\n\n---\n\n## Layout Patterns\n\n**1. Masonry / Bento Grid**:\n*   Don\'t use uniform grids. Mix `col-span-1` with `col-span-2` or `row-span-2` cards.\n*   Use `hover:scale-[1.02]` on large grid items for a tactile feel.\n\n**2. Split Layouts**:\n*   Use 50/50 splits for "Product" or "Benefits" sections.\n*   One side text, one side **Abstract 3D Composition** (nested clay shapes, not just an image).\n\n**3. Overlapping Elements**:\n*   Allow elements to break their containers (e.g., a "Popular" badge floating *above* a pricing card).\n*   Use negative margins to pull decorative elements to the edges.\n\n---\n\n## Responsive Strategy\n\n**Mobile-First Approach with Progressive Enhancement**\n\nThe Clay design system maintains its playful, tactile personality across all screen sizes while adapting layouts and sizing for optimal mobile experience.\n\n**Typography Scaling**:\n*   Hero headlines: `text-5xl �+' sm:text-6xl �+' md:text-7xl �+' lg:text-8xl`\n*   Section titles: `text-3xl �+' sm:text-4xl �+' md:text-5xl`\n*   Body text: `text-base �+' sm:text-lg �+' md:text-xl` where appropriate\n*   Always maintain `leading-relaxed` and proper line length constraints\n\n**Layout Transformations**:\n*   **Navigation**: Compact on mobile (`h-16 rounded-[32px] px-4`) �+' Larger on desktop (`sm:h-20 sm:rounded-[40px] sm:px-8`). Hide non-essential nav items on mobile.\n*   **Hero**: Stack CTAs vertically (`flex-col gap-6`) �+' Horizontal on desktop (`sm:flex-row`)\n*   **Stats**: 2-column grid on mobile (`grid-cols-2 gap-6`) �+' 4 columns on desktop (`md:grid-cols-4 gap-8`)\n*   **Features**: Single column �+' Bento layout with spans on desktop (`md:grid-cols-2 lg:grid-cols-3` with hero card `md:col-span-2 md:row-span-2`)\n*   **Benefits/Product Detail**: Stack vertically on mobile �+' Side-by-side split on desktop (`lg:grid-cols-2`)\n*   **Pricing**: Stack cards on mobile �+' 3 columns on desktop (`md:grid-cols-3`). Scale effect for highlighted card only applies on desktop (`md:scale-110`)\n\n**Component Adjustments**:\n*   **Cards**: Reduce padding on mobile (`p-6 sm:p-8`)\n*   **Border Radii**: Maintain generous radii even on mobile (never less than `rounded-[20px]`)\n*   **Buttons**: Full width on mobile (`w-full sm:w-auto`) for primary CTAs\n*   **Decorative Elements**: Hide some floating shapes on mobile (`hidden lg:block`)\n*   **Shadows**: Keep full shadow stacks�?"they\'re essential to the aesthetic\n\n**Touch Targets**:\n*   All interactive elements meet 44px minimum tap target (buttons are `h-14+`)\n*   Increase spacing in mobile navigation for easier tapping\n*   Ensure accordion FAQ items have adequate vertical spacing\n\n**Performance**:\n*   Animations still run on mobile but respect `prefers-reduced-motion`\n*   Blur effects (`backdrop-blur-xl`) remain�?"they\'re critical to the glass-clay aesthetic\n*   Background blobs scale with viewport units (`vh`) so they adapt naturally\n\n**What NOT to Change on Mobile**:\n*   Don\'t flatten the design�?"keep the shadows and depth\n*   Don\'t reduce border radii to generic values\n*   Don\'t remove the candy-store colors or make them muted\n*   Don\'t disable all animations (only simplify if performance issues arise)\n\n---\n\n## Dos and Don\'ts\n\n*   **DO** use pronounced "Squish" animations on click (`active:scale-[0.92]` combined with `shadow-clayPressed`).\n*   **DO** use varying border radii within components (e.g., `rounded-[48px]` for outer container, `rounded-[32px]` for card, `rounded-[24px]` for inner image).\n*   **DO** use "Glass-Clay" hybrid (semi-transparent white `bg-white/60` to `/80` + `backdrop-blur-xl`) for cards to reveal background blobs.\n*   **DO** use multi-layer shadow stacks (4 shadows minimum) to achieve high-fidelity depth.\n*   **DO** apply Nunito font family explicitly to all headings, numbers, and labels via inline styles.\n*   **DO** use vibrant gradient backgrounds for icon containers with varied colors (blue, purple, pink, green, cyan, amber).\n*   **DON\'T** use gray text lighter than `#635F69`. This is the minimum for accessibility against light backgrounds.\n*   **DON\'T** use sharp corners anywhere. Minimum radius is `rounded-[20px]`, never `rounded-md` or `rounded-lg`.\n*   **DON\'T** use flat colors for backgrounds. Always include animated blobs or subtle gradients.\n*   **DON\'T** use gradient text for font sizes smaller than `text-5xl` (readability risk).\n*   **DON\'T** make buttons too small. Minimum height is `h-11` (44px) for accessibility.\n*   **DON\'T** skip the hover lift effect on interactive elements�?"it\'s core to the tactile feel.\n\n---\n\n## Implementation Checklist\n- [ ] **Background**: Canvas `#F4F1FA` + Animated Blobs.\n- [ ] **Shadows**: 4-layer box-shadows defined in CSS.\n- [ ] **Typography**: Nunito Black (Headings) + DM Sans (Body).\n- [ ] **Buttons**: Gradient, rounded-2xl, click-squish.\n- [ ] **Cards**: White/60%, backdrop-blur, rounded-3xl.\n- [ ] **Text**: High contrast charcoal/slate, no light grays.'},

===== STYLE BLOCK: cyberpunk (offset 571669 to 589302) =====
cyberpunk:{id:"cyberpunk",name:"Cyberpunk",mode:"dark",fontType:"mono",description:"High contrast neon on black, glitch animations, terminal/monospace fonts, tech-oriented decorations. A dystopian digital aesthetic inspired by 80s sci-fi and hacker culture.",layoutIdeas:{hero:"Full-bleed dark canvas with massive glitched headline (text-5xl to text-8xl) featuring chromatic aberration and neon glow shadows. Asymmetric 60/40 split with terminal-style subheadline with typing cursor on left, holographic HUD display with animated panels on right. Grid background with radial gradient mask. Scanline overlay across entire page.",stats:"Horizontal 2x2 grid on mobile, 4-column on desktop. Each stat in bordered section with monospace labels, large display numbers, and upward trend indicators. Subtle background glow. Border separators between stats.",productDetails:"Centered holographic card with circuit grid background. Terminal-style label, large heading, and paragraphs prefixed with >> symbols. Authenticated session indicator at bottom with pulsing dot.",features:"Three-column grid (stacks on mobile) with chamfered corner cards. Icon in bordered square that transitions to accent background on hover. Card titles change color on hover. Radial gradient background accent. Section header with overline label and gradient accent bars.",blog:"Three-column grid of terminal-style cards with VHS scanline overlay on images. Stream ID badges on images. ISO date format, author name, and access link with arrow. Entire card lifts on hover with border glow.",howItWorks:"Vertical timeline with center line. Diamond-shaped step markers (rotated squares) with neon glow. Steps alternate left/right on desktop, stack left on mobile. Terminal-style step numbers (STEP_01, etc).",benefits:"Two-column split - left has list of benefits with checkboxes that fill on hover, right has full syntax-highlighted code editor mockup with terminal window chrome (traffic lights), line numbers, and blinking cursor.",testimonials:"2x2 grid of cards with terminal headers showing avatar (with tech pattern), author info, and VERIFIED badge. Quote with decorative quotation marks. Transmission complete footer with pulsing indicator.",pricing:"Three-column grid with center card scaled and highlighted with thicker accent border and neon glow. Cards show tier name, price in large monospace, feature list with checkmarks, and CTA button. Recommended badge on highlighted tier.",faq:"Vertical stack of chamfered accordion items. Questions prefixed with $ symbol. Collapsible answers with dashed border separator, prefixed with >. Animated expand/collapse with rotating arrow.",footer:"Four-column grid (stacks on mobile). Company info, navigation links with underline hover, social icons, copyright. Links styled as terminal commands. Monospace font throughout."},content:`# Cyberpunk / Glitch Design System

## 1. Design Philosophy

**Core Principles**: "High-Tech, Low-Life." The aesthetic is a digital dystopia colliding with a high-tech noir reality. It captures the tension between advanced technology and societal decay�?"a world of underground hackers, neon-drenched megacities, and corrupted data streams. This isn't a clean, utopian future; it's gritty, imperfect, and palpably dangerous. Every pixel should feel like it's being rendered on a malfunctioning CRT monitor in a rain-soaked Tokyo alley or a rogue terminal in a subterranean bunker.

**The Vibe**: Dangerous, electric, rebellious, and aggressively futuristic-retro. It draws heavily from the visual language of 80s sci-fi (Blade Runner, Akira) and hacker culture (The Matrix, Ghost in the Shell). The interface should feel *alive* and volatile�?"buzzing with digital energy, glitching with data corruption, and pulsing with raw power. It�?Ts not just a website; it�?Ts a hacked feed, a forbidden interface, a window into the sprawl.

**The Tactile Experience**:
- **Imperfect Technology**: Embrace the artifacts of analog-to-digital conversion. Scanlines, chromatic aberration (RGB splitting), and signal noise are not bugs; they are features. The UI should feel like it's struggling to contain the data it displays.
- **The Void vs. The Light**: The background isn't just dark; it's a void. Against this absolute blackness, neon light (cyan, magenta, acid green) doesn't just color elements�?"it *illuminates* them. Light sources should feel physical, casting glows and shadows that define the hierarchy.
- **Industrial Brutalism**: Shapes are hard, angular, and utilitarian. Chamfered corners (45-degree cuts) replace friendly rounded rectangles. Borders are technical and precise, resembling blueprints or HUD (Heads-Up Display) schematics rather than decorative frames.

**Visual Signatures That Make This Unforgettable**:
- **Chromatic Aberration**: RGB color splitting on text and elements (red/cyan offset shadows) to simulate lens distortion or signal interference.
- **Scanlines**: Subtle horizontal line overlays mimicking the refresh rate of old CRT monitors, adding texture and unifying the composition.
- **Glitch Effects**: Intentional "corruption" via clip-path animations, skewed transforms, and flickering text that suggests a unstable connection or a hacked system.
- **Neon Glow**: Text and borders that literally glow with intense, multi-layered box-shadow/text-shadow stacking, creating a "light saber" or "neon sign" effect against the dark background.
- **Corner Cuts**: Chamfered/clipped corners on cards and buttons creating a militaristic, tech-panel aesthetic.
- **Circuit Patterns**: Decorative SVG backgrounds resembling PCB traces or data highways, suggesting the underlying hardware.

---

## 2. Design Token System (The DNA)

### Colors (Dark Mode - Mandatory)

\`\`\`
background:          #0a0a0f      // Deep void black with slight blue undertone
foreground:          #e0e0e0      // Primary text, not pure white (less harsh)
card:                #12121a      // Card background, deep purple-black
muted:               #1c1c2e      // UI chrome/elevated backgrounds
mutedForeground:     #6b7280      // Secondary text, reduced contrast
accent:              #00ff88      // PRIMARY NEON - Electric green (Matrix-inspired)
accentSecondary:     #ff00ff      // SECONDARY NEON - Hot magenta/pink
accentTertiary:      #00d4ff      // TERTIARY NEON - Cyan/electric blue
border:              #2a2a3a      // Subtle borders
input:               #12121a      // Deep input background
ring:                #00ff88      // Focus ring matches accent
destructive:         #ff3366      // Error/danger red-pink
\`\`\`

### Typography

**Font Stack**:
- **Headings**: \`"Orbitron", "Share Tech Mono", monospace\` �?" Geometric, futuristic, robotic
- **Body**: \`"JetBrains Mono", "Fira Code", "Consolas", monospace\` �?" Clean monospace for that terminal feel
- **Accent/Labels**: \`"Share Tech Mono", monospace\` �?" For UI labels, timestamps, badges

**Scale & Styling**:
- H1: \`text-6xl\` to \`text-8xl\`, \`font-black\`, \`uppercase\`, \`tracking-widest\`
- H2: \`text-4xl\` to \`text-5xl\`, \`font-bold\`, \`uppercase\`, \`tracking-wide\`
- H3: \`text-xl\` to \`text-2xl\`, \`font-semibold\`, \`uppercase\`
- Body: \`text-base\`, \`font-normal\`, \`tracking-wide\`, \`leading-relaxed\`
- Code/Labels: \`text-sm\`, \`font-mono\`, \`uppercase\`, \`tracking-[0.2em]\`

### Radius & Border

\`\`\`
radius.none:     0px        // Sharp cuts are the default
radius.sm:       2px        // Minimal softening
radius.base:     4px        // Rare, only for inputs
radius.chamfer:  Use clip-path for corner cuts instead of border-radius
\`\`\`

**Border Width**: \`1px\` default, \`2px\` for emphasis, borders often use gradient or glow effects

**Chamfered Corner Pattern** (apply via clip-path):
\`\`\`css
clip-path: polygon(
  0 10px, 10px 0,           /* top-left cut */
  calc(100% - 10px) 0, 100% 10px,  /* top-right cut */
  100% calc(100% - 10px), calc(100% - 10px) 100%,  /* bottom-right cut */
  10px 100%, 0 calc(100% - 10px)   /* bottom-left cut */
);
\`\`\`

### Shadows & Effects

**Neon Glow (CSS Variable Tokens)**:
\`\`\`css
/* Main neon glow - used on hover states, focus rings, highlighted elements */
--box-shadow-neon: 0 0 5px #00ff88, 0 0 10px #00ff8840;

/* Small neon glow - subtle accents */
--box-shadow-neon-sm: 0 0 3px #00ff88, 0 0 6px #00ff8830;

/* Large neon glow - emphasized states, hero elements */
--box-shadow-neon-lg: 0 0 10px #00ff88, 0 0 20px #00ff8860, 0 0 40px #00ff8830;

/* Secondary neon (magenta) */
--box-shadow-neon-secondary: 0 0 5px #ff00ff, 0 0 20px #ff00ff60;

/* Tertiary neon (cyan) */
--box-shadow-neon-tertiary: 0 0 5px #00d4ff, 0 0 20px #00d4ff60;
\`\`\`

**Text Shadows for Depth**:
\`\`\`css
/* Glitch effect text shadow (used on hero headline) */
drop-shadow: 0 0 10px rgba(0, 255, 136, 0.5);

/* Gradient text glow */
drop-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
\`\`\`

**Chromatic Aberration (via CSS animation on .cyber-glitch)**:
Implemented via ::before and ::after pseudo-elements with:
- text-shadow: -1px 0 #ff00ff (magenta left)
- text-shadow: -1px 0 #00d4ff (cyan right)
- clip-path animations for glitch effect

### Textures & Patterns (CRITICAL FOR DEPTH)

1. **Scanlines Overlay** (CSS pseudo-element):
\`\`\`css
background: repeating-linear-gradient(
  0deg,
  transparent,
  transparent 2px,
  rgba(0, 0, 0, 0.3) 2px,
  rgba(0, 0, 0, 0.3) 4px
);
pointer-events: none;
\`\`\`

2. **Grid/Circuit Pattern** (subtle background):
\`\`\`css
background-image:
  linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px);
background-size: 50px 50px;
\`\`\`

3. **Noise Texture**: Apply subtle CSS noise filter or SVG noise overlay at 5-10% opacity

4. **Gradient Mesh**: Radial gradients of accent colors at very low opacity in corners

---

## 3. Component Stylings

### Buttons

All buttons use:
- Font: monospace
- Text transform: uppercase
- Letter spacing: wider
- Transition: all for smooth effects
- Focus ring: 2px accent color

**Default Variant**:
\`\`\`
- Background: transparent
- Border: 2px solid accent (#00ff88)
- Text: accent color
- Clip-path: .cyber-chamfer-sm (smaller chamfer)
- Hover: background fills with accent, text becomes background color, neon glow shadow
\`\`\`

**Secondary Variant**:
\`\`\`
- Border: 2px solid accentSecondary (#ff00ff)
- Text: accentSecondary
- Hover: fills with magenta, neon-secondary glow
\`\`\`

**Outline Variant**:
\`\`\`
- Border: 1px solid border (#2a2a3a)
- Background: transparent
- Hover: border becomes accent, text becomes accent, neon glow appears
\`\`\`

**Ghost Variant**:
\`\`\`
- No border
- Hover: background accent/10 opacity, text becomes accent
\`\`\`

**Glitch Variant** (CTAs):
\`\`\`
- Background: solid accent (#00ff88)
- Text: background color (high contrast)
- Uses .cyber-glitch class for chromatic aberration effect
- Hover: brightness increases (filter: brightness(1.1))
\`\`\`

### Cards/Containers

**Default Card Variant**:
\`\`\`
- Background: card (#12121a)
- Border: 1px solid border (#2a2a3a)
- Clip-path: chamfered corners via .cyber-chamfer class
- Transition: all 300ms for smooth interactions
- Hover: translateY(-1px), border becomes accent, neon glow appears (if hoverEffect prop)
\`\`\`

**Terminal Variant** (variant="terminal"):
\`\`\`
- Background: background (#0a0a0f) instead of card
- Border: 1px solid border
- Automatic decorative header bar with traffic light dots (red/yellow/green)
- Content padding-top to accommodate header
- Clip-path: chamfered corners
- Used for: Blog cards, FAQ items, some pricing tiers
\`\`\`

**Holographic Variant** (variant="holographic"):
\`\`\`
- Background: muted (#1c1c2e) at 30% opacity
- Border: 1px solid accent at 30% opacity
- Box-shadow: neon glow
- Backdrop-filter: blur for glassmorphic effect
- Corner accents: 4 small border corners at card edges using absolute positioning
- Used for: Product details card, hero HUD panels
\`\`\`

### Inputs

\`\`\`
- Wrapper: relative positioning for prefix icon
- Prefix: ">" symbol in accent color, absolute positioned left
- Background: input (#12121a)
- Border: 1px solid border (#2a2a3a)
- Clip-path: .cyber-chamfer-sm
- Text: monospace, accent color
- Padding-left: 8 (to accommodate prefix)
- Placeholder: mutedForeground, styled as terminal prompt
- Focus: border becomes accent, neon glow shadow, outline removed
- Transition: all 200ms
\`\`\`

---

## 4. Layout Strategy

**Max-Width**: \`max-w-7xl\` for main content, full-bleed sections with contained inner content

**Grid Patterns**:
- Features: \`grid-cols-1 md:grid-cols-2 lg:grid-cols-3\` with \`-skew-y-1\` on container
- Pricing: \`grid-cols-1 md:grid-cols-3\` with middle card scaled up
- Stats: Horizontal flex with \`divide-x divide-border\`

**Spacing**: 8px base grid. Generous padding (\`py-24\` to \`py-32\` for sections). Dense internal component spacing.

**Asymmetry Requirements**:
- Hero: 60/40 split minimum
- At least one section with overlapping elements (negative margins)
- Use \`rotate-1\` or \`skew-y-1\` transforms on section containers
- Stagger card heights in grid where content allows

---

## 5. Non-Genericness (THE BOLD FACTOR)

**MANDATORY BOLD CHOICES**:

1. **Glitched Headlines**: Hero h1 MUST have chromatic aberration text-shadow AND a CSS animation that occasionally "glitches" (random skew/translate flicker)

2. **Scanline Overlay**: The entire page has a subtle scanline overlay (via ::after on body or main)

3. **Terminal Aesthetic**: At least one section must feel like a terminal (monospace, > prefixes, blinking cursor animations)

4. **Neon Borders That Actually Glow**: Not just colored borders - stacked box-shadows creating real glow effect

5. **Corner Cuts**: Cards use clip-path for chamfered/cut corners, not rounded corners

6. **Animated Elements**:
   - Blinking cursors (animation: blink 1s step-end infinite)
   - Subtle hover glitch effects
   - Gradient border animations (hue rotation)

7. **Circuit/Grid Background**: Visible tech-pattern in at least one section background

8. **Typing/Typewriter Effect**: Consider on subtitle or at least style as if mid-type (trailing cursor)

---

## 6. Effects & Animation

**Motion Feel**: Sharp, digital, slightly mechanical. Quick snaps rather than smooth eases.

**Transitions**:
\`\`\`css
transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
/* Or for more digital feel: */
transition: all 100ms steps(4);
\`\`\`

**Keyframe Animations**:

\`\`\`css
/* Blink cursor */
@keyframes blink {
  50% { opacity: 0; }
}

/* Glitch effect */
@keyframes glitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -2px); }
  60% { transform: translate(-1px, -1px); }
  80% { transform: translate(1px, 1px); }
}

/* Scanline scroll */
@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}

/* RGB shift/chromatic pulse */
@keyframes rgbShift {
  0%, 100% { text-shadow: -2px 0 #ff00ff, 2px 0 #00d4ff; }
  50% { text-shadow: 2px 0 #ff00ff, -2px 0 #00d4ff; }
}
\`\`\`

---

## 7. Iconography

**Lucide Icons Configuration**:
- Stroke width: \`1.5px\` (thin, technical feel)
- Size: Generally \`h-5 w-5\` or \`h-6 w-6\`
- Color: Inherit from text (usually accent or foreground)
- Style: Add subtle glow on hover via filter: \`drop-shadow(0 0 4px currentColor)\`

**Icon Containers**: Place icons inside bordered squares/hexagons with glow effect

---

## 8. Responsive Strategy

**Mobile Adaptations** (Mobile-first approach):

**Typography Scaling**:
- Hero h1: text-5xl (mobile) �+' text-7xl (md) �+' text-8xl (lg)
- Subheadline: text-base �+' text-lg �+' text-xl
- Section headings: text-4xl �+' text-5xl
- Maintain uppercase and tracking at all sizes

**Layout Changes**:
- Navigation: Hide nav links on < lg, show abbreviated CTA text on < sm
- Stats: 2x2 grid with borders only on top 2 items (mobile) �+' 4-column with vertical borders (desktop)
- All feature/blog/testimonial grids: Single column �+' 2-column (md) �+' 3-column (lg)
- Pricing: Stack vertically �+' 3-column grid, highlighted card scale only on md+
- Hero HUD: Hidden on mobile (lg:block)
- Footer: Stack to single column �+' 4-column grid

**Maintained Elements**:
- Scanline overlay (full page)
- Chamfered corners on all cards
- Neon glow effects (may reduce intensity on mobile for performance)
- Grid/circuit backgrounds
- Monospace typography
- Terminal aesthetic (>, $, prefixes)
- Dark color scheme

**Touch Targets**:
- Minimum 44px height for all interactive elements
- Adequate spacing between tappable items
- FAQ accordions with full-width click area

---

## 9. Accessibility

**Contrast**: All text meets WCAG AA (accent green on dark bg = 7.5:1 ratio - excellent)

**Focus States**:
\`\`\`css
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-accent
focus-visible:ring-offset-2
focus-visible:ring-offset-background
\`\`\`
Plus add glow effect matching the neon aesthetic.

**Reduced Motion**: Respect \`prefers-reduced-motion\` - disable glitch animations, keep static chromatic aberration

---

## 10. Implementation Notes

- Use Tailwind arbitrary values \`[...]\` extensively for custom shadows and clip-paths
- CSS variables for colors enable easy theming
- Scanlines implemented via CSS, not images
- Glitch animations should be subtle and infrequent (not distracting)
- Test glow effects on different screens (can look washed out on low contrast displays)
- Consider GPU performance with multiple box-shadows - use \`will-change: transform\` sparingly`},

===== STYLE BLOCK: enterprise (offset 589302 to 603855) =====
enterprise:{id:"enterprise",name:"Corporate Trust",mode:"light",fontType:"sans-serif",description:"Modern SaaS aesthetic balancing professionalism with approachability. Vibrant indigo/violet gradients, soft colored shadows, isometric depth, and clean geometric sans-serif typography.",layoutIdeas:{hero:"Split layout with 60/40 composition. Left: Gradient headline split, dual-CTA buttons, trust indicator. Right: Isometric floating card with subtle 3D transforms and decorative elements.",stats:"Clean horizontal strip with large bold numbers, subtle text. Bordered top/bottom to create visual break.",productDetail:"Two-column layout with text-left, visual-right. Abstract UI mockup inside gradient container with offset shadow element.",features:"Zig-zag alternating layout. Icon badges with soft backgrounds, feature cards with isometric perspective transforms, decorative gradient blobs.",blog:"Three-column card grid. Image-first design with gradient overlays on hover, metadata above headline.",howItWorks:"Horizontal step timeline with connecting gradient line. Numbered badges with glow effects on dark background.",benefits:"Two-column split: checklist items on left, isometric 3D card visualization on right with gradient background.",pricing:"Three-column grid with center card elevated and highlighted. Relative positioning badge for 'Most Popular'.",testimonials:"Three-column card grid with star ratings, quotes, and user avatars with ring styling.",faq:"Accordion with details/summary HTML. Chevron rotation on expand, subtle background wash on open state.",footer:"Four-column grid on desktop, stacked on mobile. Dark slate background with lighter link hover states."},content:`# Design Style: Corporate Trust

## 1. Design Philosophy
This style embodies the **modern enterprise SaaS aesthetic** �?" professional yet approachable, sophisticated yet friendly. It draws inspiration from tech unicorns and high-growth startups that have successfully humanized the corporate experience. The design rejects the cold, sterile formality of traditional corporate websites in favor of a warm, confident, and inviting presence.

**Core Principles:**
- **Trustworthy Yet Vibrant**: Establishes credibility through clean structure and professional typography while maintaining visual energy through vibrant gradients and colorful accents
- **Dimensional Depth**: Uses isometric perspectives, soft colored shadows, and subtle 3D transforms to create visual interest and break free from flat design
- **Refined Elegance**: Every element is polished with attention to micro-interactions, smooth transitions, and sophisticated hover states
- **Purposeful Gradients**: Indigo-to-violet gradients serve as the visual signature, used strategically in headlines, buttons, and decorative elements
- **Professional Polish**: Generous white space, consistent spacing rhythms, and crisp typography create a premium, enterprise-ready feel

**Keywords**: Trustworthy, Vibrant, Polished, Dimensional, Modern, Approachable, Enterprise-Ready, Elegant

**Visual DNA**: The unmistakable signature of this style comes from:
1. **Colored Shadows**: Soft shadows with blue/purple tints instead of neutral grays
2. **Isometric Elements**: Subtle 3D transforms (rotate-x, rotate-y) on decorative cards and visualizations
3. **Gradient Text**: Strategic use of gradient text for emphasis in headlines
4. **Soft Blobs**: Large, blurred gradient orbs in the background for atmospheric depth
5. **Elevated Cards**: White cards that lift on hover with enhanced shadows
6. **Dual-Tone Palette**: Indigo (primary) + Violet (secondary) creating a cohesive gradient spectrum

## 2. Design Token System

### Colors (Light Mode)
*   **Background**: \`#F8FAFC\` (Slate 50) - A very subtle cool grey/white base.
*   **Foreground (Surface)**: \`#FFFFFF\` (White) - For cards and raised elements.
*   **Primary**: \`#4F46E5\` (Indigo 600) - The core brand color. Vibrant blue-purple.
*   **Secondary**: \`#7C3AED\` (Violet 600) - For gradients and accents.
*   **Text Main**: \`#0F172A\` (Slate 900) - High contrast, sharp.
*   **Text Muted**: \`#64748B\` (Slate 500) - For supporting text.
*   **Accent/Success**: \`#10B981\` (Emerald 500) - For positive indicators.
*   **Border**: \`#E2E8F0\` (Slate 200) - Subtle separation.

### Typography
*   **Font Family**: \`Plus Jakarta Sans\` �?" A geometric sans-serif with friendly rounded terminals that perfectly balances professional authority with modern approachability. Its clean letterforms ensure excellent readability while maintaining visual warmth.
*   **Scaling**: Major Third (1.250) scale provides substantial hierarchy without overwhelming the layout
*   **Font Weights**:
    *   **Display/Headings**: ExtraBold (800) for hero headlines, Bold (700) for section headings
    *   **Subheadings**: SemiBold (600) for card titles and emphasis
    *   **Body Text**: Regular (400) for paragraphs, Medium (500) for navigation and labels
*   **Line Heights**:
    *   Headlines: 1.1 (tight tracking for impact)
    *   Body Text: 1.6-1.7 (relaxed for readability)
*   **Letter Spacing**: Tight tracking (-0.02em) on large headlines for modern polish
*   **Responsive Type Scale**:
    *   Mobile: text-2xl to text-4xl for h1
    *   Desktop: text-4xl to text-6xl for h1
    *   Progressive scaling ensures legibility across all devices

### Radius & Border
*   **Radius**: \`rounded-xl\` (12px) for cards and \`rounded-lg\` (8px) for inputs. Buttons are \`rounded-full\` or \`rounded-lg\`.
*   **Borders**: Thin, 1px borders using the \`Border\` token.

### Shadows & Effects
This is where the design truly shines. **Colored shadows** replace neutral grays to reinforce the brand palette:

*   **Default Card Shadow**: \`0 4px 20px -2px rgba(79, 70, 229, 0.1)\` �?" Soft blue-tinted base elevation
*   **Hover Card Shadow**: \`0 10px 25px -5px rgba(79, 70, 229, 0.15), 0 8px 10px -6px rgba(79, 70, 229, 0.1)\` �?" Multi-layer depth on interaction
*   **Button Shadow**: \`0 4px 14px 0 rgba(79, 70, 229, 0.3)\` �?" Strong presence for primary CTAs
*   **Glow Effects**: Numbered badges use \`shadow-[0_0_20px_rgba(79,70,229,0.5)]\` for ethereal glow
*   **Background Blobs**: Large gradient orbs with 3xl blur create atmospheric depth without distraction
    *   \`blur-3xl filter\` combined with low opacity (20-50%)
    *   Positioned absolutely to create layered depth
*   **Gradients**:
    *   **Primary Gradient**: \`from-indigo-600 to-violet-600\` �?" Used for buttons and active states
    *   **Text Gradient**: Combined with \`bg-clip-text text-transparent\` for striking headlines
    *   **Background Gradients**: Subtle \`from-indigo-100 to-violet-100\` for container backgrounds
    *   **Final CTA Background**: \`from-indigo-900 to-indigo-950\` for dramatic dark section

## 3. Component Stylings

### Buttons
*   **Primary**: Gradient background (Indigo to Violet). \`rounded-full\` or \`rounded-lg\`. White text. Slight shadow. Transition: Lift (\`-translate-y-0.5\`) and increase shadow on hover.
*   **Secondary**: White background, Border \`E2E8F0\`, Text \`Slate 700\`. Hover: \`bg-slate-50\` and darker border.

### Cards
*   **Base**: White background, \`rounded-xl\`, \`border border-slate-100\`, \`shadow-soft\`.
*   **Behavior**: On hover, slight lift and increased shadow intensity.
*   **Feature Cards**: May feature an icon in a soft-colored circle (bg-indigo-50 text-indigo-600).

### Inputs
*   **Style**: \`bg-white\`, \`border-slate-200\`, \`rounded-lg\`.
*   **Focus**: \`ring-2 ring-indigo-500 ring-offset-1\` and \`border-indigo-500\`.
*   **Label**: \`text-sm font-semibold text-slate-700\`.

## 4. Non-Generic Bold Choices

The Corporate Trust aesthetic stands out through deliberate, sophisticated design decisions:

### Isometric Depth & 3D Transforms
*   **Hero Card**: \`perspective-[2000px]\` parent with \`rotate-x-[5deg] rotate-y-[-12deg]\` child creates subtle isometric effect
*   **Hover Transforms**: \`hover:rotate-x-[2deg] hover:rotate-y-[-8deg]\` �?" Subtle 3D movement on interaction
*   **Feature Cards**: Alternating \`rotate-y-[6deg]\` and \`rotate-y-[-6deg]\` based on layout position
*   **Benefit Visualization**: \`rotate-x-6 rotate-y-12 transform\` on gradient container for dramatic depth

### Strategic Gradient Usage
*   **Split Headlines**: First 3 words in standard color, remaining words in gradient for visual hierarchy
*   **Gradient Buttons**: Full background gradient with hover lift (\`-translate-y-0.5\`)
*   **Badge Elements**: NEW badge with solid indigo background inside gradient-ringed container
*   **Final CTA**: White button on dark gradient background creates dramatic contrast

### Atmospheric Background Elements
*   **Blur Orbs**: Large (400-600px) circular gradients with heavy blur positioned absolutely
*   **Layered Positioning**: Multiple blobs at different z-indexes create depth
*   **Subtle Animation**: \`animate-pulse duration-[4000ms]\` on floating cards for gentle movement

### Elevated Card System
*   **Default State**: Soft colored shadow with subtle border
*   **Hover State**: Lift effect (\`-translate-y-1\`) combined with enhanced shadow
*   **Transition**: Smooth \`duration-200\` for professional polish
*   **Pricing Highlight**: Center card uses \`md:scale-105\` with special ring styling

### Micro-Interactions
*   **Arrow Icons**: \`transition-transform group-hover:translate-x-1\` for directional feedback
*   **Image Zoom**: \`group-hover:scale-105\` on blog images with overlay fade-in
*   **Chevron Rotation**: \`group-open:rotate-180\` for FAQ accordions
*   **Button Lift**: Subtle upward movement on hover reinforces clickability

## 5. Spacing & Layout
*   **Container**: \`max-w-7xl\` (1280px) provides spacious, enterprise-appropriate width
*   **Padding**: Responsive padding with \`px-4 sm:px-6\` pattern for consistent gutters
*   **Vertical Rhythm**:
    *   Mobile: \`py-16\` (64px)
    *   Tablet: \`sm:py-20\` (80px)
    *   Desktop: \`lg:py-24\` (96px)
*   **Section Spacing**: Generous white space between sections creates breathing room
*   **Grid Strategy**:
    *   Hero: Two-column \`lg:grid-cols-2\` with text-first approach
    *   Features: Alternating zig-zag with \`lg:flex-row\` and \`lg:flex-row-reverse\`
    *   Pricing: Three-column \`md:grid-cols-3\` with center emphasis
    *   Stats: Four-column \`md:grid-cols-4\` for metric display
*   **Responsive Breakpoints**:
    *   Mobile-first approach with progressive enhancement
    *   sm: 640px, md: 768px, lg: 1024px, xl: 1280px
*   **Text Width Constraints**: \`max-w-xl\` or \`max-w-2xl\` on paragraphs to maintain 60-75 character line lengths

## 6. Animation & Transitions
*   **Philosophy**: "Refined Motion" �?" Smooth, professional, never jarring
*   **Base Transition**: \`transition-all duration-200\` for general interactive elements
*   **Long Transitions**: \`duration-500\` for image zooms and complex animations
*   **Hover Effects**:
    *   Cards: Combine \`hover:-translate-y-1\` with shadow enhancement
    *   Buttons: \`hover:-translate-y-0.5\` for subtle lift
    *   Icons: \`transition-transform group-hover:translate-x-1\` for directional cues
*   **Easing**: Default \`ease-out\` for natural deceleration
*   **Pulse Animation**: \`animate-pulse duration-[4000ms]\` on decorative floating elements for gentle breathing effect
*   **State Changes**: Smooth color transitions on links and buttons reinforce interactivity

## 7. Iconography
*   **Library**: \`lucide-react\` for consistent, modern icon system
*   **Style**:
    *   Default stroke width: \`2px\` (standard)
    *   Size: \`h-4 w-4\` for inline icons, \`h-5 w-5\` or \`h-6 w-6\` for featured icons
    *   Joins: Rounded for friendliness
*   **Color Treatment**:
    *   **Badge Icons**: Icon in \`text-indigo-600\` on \`bg-indigo-100\` container
    *   **Navigation Icons**: Inherit text color, transition on hover
    *   **Social Icons**: \`text-slate-400 hover:text-indigo-400\`
*   **Icon Containers**:
    *   Small badges: \`h-12 w-12 rounded-xl\` with soft background
    *   Large features: \`h-14 w-14 rounded-xl\` for prominent sections
    *   Circular: \`rounded-full\` for avatars or status indicators
*   **Accessibility**: Icons are decorative with proper text alternatives or hidden from screen readers when paired with text

## 8. Responsive Strategy
*   **Mobile-First Philosophy**: Design begins at 375px width, progressively enhances
*   **Touch Targets**: Minimum 44x44px for all interactive elements (buttons, links)
*   **Typography Scaling**:
    *   Headlines reduce from \`text-6xl\` (desktop) to \`text-4xl\` (mobile)
    *   Body text maintains readability at \`text-base\` with responsive line heights
*   **Layout Adaptations**:
    *   Two-column layouts stack to single column on mobile
    *   Navigation collapses to essential items (login hidden on mobile)
    *   Pricing cards stack vertically with equal width
    *   Footer columns stack progressively (4 col �+' 2 col �+' 1 col)
*   **Spacing Compression**: Padding and margins reduce proportionally on smaller screens
*   **Image Optimization**: Aspect ratios maintained, sizes adapt to container width
*   **Horizontal Scrolling**: Never required; all content fits viewport width
*   **Visual Hierarchy Preserved**: Even on mobile, clear distinction between heading levels maintained

## 9. Accessibility & Best Practices
*   **Color Contrast**: All text meets WCAG AA standards
    *   Slate 900 on Slate 50 background: AAA compliant
    *   White text on Indigo 900 background: AAA compliant
    *   Link colors tested for 4.5:1 minimum ratio
*   **Focus States**:
    *   Visible ring on all interactive elements: \`focus-visible:ring-2 focus-visible:ring-indigo-500\`
    *   Ring offset for clarity: \`focus-visible:ring-offset-2\`
    *   Never remove focus indicators
*   **Semantic HTML**:
    *   Proper heading hierarchy (h1 �+' h2 �+' h3)
    *   Native \`<button>\` elements for interactive actions
    *   \`<nav>\` for navigation, \`<footer>\` for footer
    *   Details/summary for FAQ accordions
*   **Image Alt Text**: Descriptive alternatives for all images
*   **Interactive States**:
    *   Hover: Visual feedback on all clickable elements
    *   Active: Subtle state change on click
    *   Disabled: Reduced opacity with \`pointer-events-none\`
*   **Motion Preferences**: Consider \`prefers-reduced-motion\` for users sensitive to animation
*   **Screen Reader Support**: Proper ARIA labels where semantic HTML insufficient`},

===== STYLE BLOCK: flat-design (offset 603855 to 614184) =====
"flat-design":{id:"flat-design",name:"Flat Design",mode:"light",fontType:"sans-serif",description:"A design philosophy centered on removing depth cues (shadows, bevels, gradients) in favor of pure color, typography, and layout. Crisp, two-dimensional, and geometric with bold color blocking.",layoutIdeas:{hero:"Full-width bold color block background (Primary Blue). Large decorative geometric shapes as background elements. Left-aligned text with massive headline (4xl to 8xl responsive). High-contrast CTA buttons with strong hover states. Right side features abstract geometric composition with overlapping shapes.",stats:"Clean 4-column grid with gradient background accent. Large colorful numbers (5xl-6xl) in varied accent colors. Uppercase labels. Hover scale effects on individual stats.",features:"3-column grid with section title. Each feature card has distinct soft background color (blue-50, green-50, amber-50, etc.) with white icon circles. Strong hover states with scale and color intensification.",howItWorks:"Dark background (gray-900) for contrast. Horizontal step circles connected by background line. Large numbered circles in primary blue with border. Clean white text on dark.",benefits:"50/50 split screen layout. Left side emerald green solid with white text and bullet points. Right side white with abstract geometric overlapping shapes in mix-blend-multiply mode.",pricing:"3-column grid. Popular tier is scaled and uses primary blue block. Other tiers use light gray blocks. 'Most Popular' badge on featured tier. All cards have strong hover scale effects.",testimonials:"Masonry columns layout. White cards on light gray background. Large decorative quote mark. Avatar circles with bold typography.",faq:"Centered accordion with thick (2px) borders. Plus/Minus icons with bold stroke weight. Clean expansion with no background change.",blog:"3-column grid on light gray background. White cards with image top (rounded corners). Strong hover state with image scale. Bold date, title, and 'Read Article' CTA.",footer:"Dark gray-900 background. Logo with colored square. Multiple column layout with primary blue section titles. Circular social icons."},content:`# Design Philosophy
**Flat Design** removes all artifice. It rejects the illusion of three-dimensionality�?"no drop shadows, no bevels, no realistic gradients, no textures. It relies entirely on **hierarchy through size, color, and typography**. This is not minimalism for the sake of being minimal; it's **confident reduction** that creates visual interest through pure form.

The aesthetic is **digital-native but print-inspired**: crisp edges, solid blocks of color, and a strict reliance on the grid. It communicates clarity, efficiency, and modernity. It is not "boring" or "plain"; it is **boldly reductive and graphic**. Every element exists because it is necessary. Visual interest comes from the strategic interplay of solid shapes, vibrant (but controlled) color palettes, and dynamic scale.

**Core Principles:**
1.  **Zero Artificial Depth**: The Z-axis does not exist. Everything is on the same plane. However, visual hierarchy is created through scale, color contrast, and strategic layering of flat shapes.
2.  **Color as Structure**: Bold background colors define sections and grouping, not lines or shadows. Color transitions are sharp, never blurred or gradual.
3.  **Typography as Interface**: Text size and weight bear the load of hierarchy. Typography is geometric, bold, and demands attention.
4.  **Geometric Purity**: Rectangles, circles, and squares dominate. Rounded corners are consistent and moderate. No organic blobs or complex shapes.
5.  **Interactive Feedback**: Hover states are pronounced through color shifts, scale transformations, and instant transitions�?"never through shadow depth.
6.  **Strategic Decoration**: Large, subtle geometric shapes in background create visual interest without breaking the flat aesthetic�?"think poster design.

# Design Token System

## Colors (Single Palette: Light Mode)
A vibrant, confident palette that avoids muddy tones. High contrast is essential.

-   **Background**: \`#FFFFFF\` (Pure White) - The canvas.
-   **Foreground**: \`#111827\` (Gray 900) - Sharp, high-contrast text.
-   **Primary**: \`#3B82F6\` (Blue 500) - The "Action" color. Bright, standard digital blue.
-   **Secondary**: \`#10B981\` (Emerald 500) - Supporting accent.
-   **Accent**: \`#F59E0B\` (Amber 500) - For highlights/badges.
-   **Muted**: \`#F3F4F6\` (Gray 100) - Used for secondary backgrounds/blocks.
-   **Border**: \`#E5E7EB\` (Gray 200) - Used sparingly.

## Typography
**Font Family**: **'Outfit', sans-serif**.
A geometric sans-serif that mirrors the shapes of the UI.
-   **Headings**: Bold (700) or Extra Bold (800). Tight letter-spacing (\`-0.02em\`).
-   **Body**: Regular (400). Readable, standard spacing.
-   **Labels/Buttons**: Medium (500) or SemiBold (600). Uppercase often used for labels (\`tracking-wider\`).

## Radius & Shapes
-   **Radius**: \`rounded-md\` (6px) or \`rounded-lg\` (8px). Consistent throughout. Not fully rounded (pill) unless it's a tag.
-   **Borders**: generally \`0px\`. We use background colors to define edges. If a border is needed (e.g., inputs), \`border-2\` solid color.

## Shadows & Effects
-   **Shadows**: \`shadow-none\`. **ABSOLUTELY NO BOX SHADOWS ON ELEMENTS.**
-   **Gradients**: Only subtle directional gradients for background decoration (e.g., \`from-[#F3F4F6] to-transparent\`). Never on buttons or cards. Never colorful or vibrant gradients.
-   **Blur**: None on elements. No backdrop-blur effects.
-   **Background Decoration**: Large geometric shapes with low opacity (\`bg-white/5\`) positioned absolutely for visual interest.

# Component Stylings

## Buttons
-   **Primary**: Solid Primary color background. White text. \`rounded-md\`. Height \`h-14\` to \`h-16\` for good touch targets. \`transition-all duration-200 hover:scale-105\` (scale transformation for feedback). Color shift on hover (e.g., \`hover:bg-blue-600\`). No shadow.
-   **Secondary**: Solid Muted background (Gray 100). Dark text. \`hover:bg-gray-200\` with scale effect.
-   **Outline**: \`border-4\` solid color (not border-2 for more boldness). Text matches border color. Transparent bg. \`hover:bg-[color] hover:text-white\` (fill effect on hover).

## Cards
-   **Style**: "Color Block".
-   **Appearance**: Solid background color (White on Gray page, or soft color tints like \`bg-blue-50\`, \`bg-green-50\` for features). No shadow. No border. Padding is generous (\`p-6\` or \`p-8\`). Rounded corners \`rounded-lg\`.
-   **Interaction**: \`group cursor-pointer transition-all duration-200 hover:scale-[1.02]\` (subtle scale). For colored backgrounds, add \`hover:bg-[color]-100\` for intensification. Icons within cards can have \`group-hover:scale-110\`.

## Inputs
-   **Normal**: Gray 100 background (\`bg-gray-100\`). No border. Text Gray 900. \`rounded-md\`.
-   **Focus**: White background. \`border-2\` solid Primary. No focus ring glow, just the hard border.

## Section Stylings
-   **Alternating Backgrounds**: Use White vs. Gray 100 (\`#F3F4F6\`) vs. Bold accent colors (Primary Blue, Emerald, Amber) to distinguish page sections. Sharp color transitions between sections.
-   **Dividers**: No thin line dividers between sections. Use whitespace or color blocks. Exception: FAQ uses thick \`border-2\` between items for structure.
-   **Background Decoration**: Use \`absolute\` positioned geometric shapes with low opacity or subtle gradients for visual interest. Examples: large circles (\`rounded-full\`), rotated squares, gradient overlays (\`from-[color] to-transparent\`).

# Iconography
-   **Library**: \`lucide-react\`.
-   **Style**: Standard to bold stroke (2px to 2.5px for emphasis).
-   **Treatment**: Often placed inside a solid colored circle (white circle with colored icon like \`bg-white text-blue-600\`). Circle size \`h-14 w-14\` or \`h-16 w-16\`.
-   **Animation**: \`transition-transform duration-200 group-hover:scale-110\` for icons within cards. Simple color intensity shifts on hover.

# Layout & Spacing
-   **Container**: \`max-w-7xl\`.
-   **Grid**: Rigid. 12-column base. Elements align perfectly.
-   **Spacing**: Comfortable but structured. Multiples of 4 (Tailwind default).
-   **Density**: Medium. Not too airy, not too dense. "Functional".

# Motion
-   **Vibe**: "Digital", "Snappy", "Direct".
-   **Transitions**: \`transition-all duration-200\` for most interactions. \`duration-300\` for larger transformations.
-   **Hover**: Immediate visual feedback through:
     - Scale transformations (\`hover:scale-105\` for buttons, \`hover:scale-[1.02]\` for cards)
     - Color shifts (darkening or lightening)
     - Color fills (outline buttons filling with color)
     - Icon scaling within cards (\`group-hover:scale-110\`)

# Accessibility
-   **Focus Rings**: Since we have no shadows, focus states must use high-contrast \`ring-2 ring-offset-2 ring-blue-500\` or similar solid outlines.
-   **Contrast**: Text on colored backgrounds must pass WCAG AA (e.g., White text on Blue 500 is okay, but check carefully with lighter accents).

# Non-Genericness / "The Bold Factor"
-   **Avoid**: "Material Design" floating cards, generic Bootstrap layouts, subtle pastels everywhere.
-   **Emphasize**: The "Poster" look. Treat every section like a flat graphic poster with bold color blocking.
-   **Bold Choices Implemented**:
     - **Large decorative geometric shapes** in hero background (circles, rotated squares with low opacity)
     - **Vibrant full-section color blocks** (Blue hero, Emerald benefits, Amber CTA, Dark gray How It Works & Footer)
     - **Dramatic scale effects** on pricing cards (popular tier starts larger and scales more)
     - **Multi-color stat numbers** (each stat uses a different accent color)
     - **Abstract geometric compositions** (overlapping shapes in hero illustration and benefits section)
     - **Pronounced hover states** (scale, color intensification, fills)
     - **Bold typography** with tight leading and strong weight contrast
     - **Thick borders** (border-4 on outline buttons, border-2 on FAQ items)
-   **Visual Interest Without Depth**: Achieved through color contrast, geometric layering, and scale�?"never shadows or gradients.`},

===== STYLE BLOCK: glassmorphism (offset 614184 to 617077) =====
glassmorphism:{id:"glassmorphism",name:"Glassmorphism",mode:"dark",fontType:"sans-serif",description:"Apple-inspired aesthetic with rich mesh gradients, premium blur, and constrained layouts.",layoutIdeas:{},content:'**Design Philosophy**\n- **Core Principles**: Inspired by Apple\'s VisionOS and macOS. Premium, ethereal, and content-forward. The glass should feel like a high-quality physical material.\n- **Vibe**: Exclusive, focused, and fluid. Less "sci-fi", more "luxury tech".\n\n**Design Token System (The DNA)**\n- **Colors (Apple Dark Mode)**\n  - `background`: `#000000` (Pure Black) - The canvas.\n  - `foreground`: `#F5F5F7` (Apple Off-White).\n  - `muted`: `rgba(255, 255, 255, 0.08)` - Secondary text/elements.\n  - `accent`: `#2997FF` (Apple Blue) or `#BF5AF2` (Purple) - Used sparingly in gradients.\n  - `border`: `rgba(255, 255, 255, 0.1)` - Subtle separation.\n- **Typography**\n  - **Font**: Use **"Inter"** (closest free proxy to SF Pro). \n  - **Headings**: `font-semibold`, `tracking-tight`. Clean and legible.\n- **Radius**: `32px` for outer containers, `20px` for inner cards. Smooth, continuous curves.\n- **Shadows**: Large, diffuse colored glows behind elements, but crisp drop shadows for floating elements.\n- **Textures**: \n  - **Background**: A rich, animated **Mesh Gradient** using Apple-style tones (Blue, Purple, Pink, Orange) against a black void.\n  - **Glass Material**: `backdrop-filter: blur(50px) saturate(180%)`. `bg-white/[0.08]`.\n\n**Component Stylings**\n- **Buttons**:\n  - **Primary**: White text on a glass layer that gets brighter on hover. Or a soft gradient background.\n  - **Secondary**: Darker glass.\n- **Cards**:\n  - "Platters". High blur, subtle white border (`border-white/10`), distinct separation from background.\n- **Inputs**:\n  - Deep, dark glass. `bg-white/5` rounded-full.\n\n**Non-Genericness (The "Bold" Factor)**\n- **Constrained Layout**: Use a **tighter max-width** (`max-w-5xl` or `max-w-4xl`) to make the content feel precious and focused.\n- **Dynamic Mesh**: The background should be the main source of color, bleeding through the glass.\n- **Bento Grid**: Use a strict, rounded bento grid for feature layouts.\n\n**Completeness & Content**\n- **MANDATORY**: Implement ALL sections from `data.json`: Hero, Product Detail, Stats, Blog, Features, How It Works, Benefits, Testimonials, Pricing, **FAQ**, Final CTA, Footer.\n- **FAQ**: Use glass cards for the FAQ items.\n\n**Effects & Animation**\n- **Mesh Animation**: Create a `mesh-blob` CSS class with infinite rotation. **CRITICAL**: Define `animation-delay` utility classes (`.animation-delay-2000`, `.animation-delay-4000`) in the CSS to ensure blobs move asynchronously.\n- **Transitions**: Smooth, slow transitions (`duration-500`).\n\n**Implementation Notes**\n- Ensure sufficient contrast for text on glass backgrounds.\n- Use `lucide-react` for icons.'},

===== STYLE BLOCK: industrial (offset 617077 to 640277) =====
industrial:{id:"industrial",name:"Industrial",mode:"light",fontType:"sans-serif",description:"A high-fidelity industrial skeuomorphism aesthetic inspired by Dieter Rams and Teenage Engineering. Features tactile neumorphic elements, matte plastic surfaces, and safety-orange accents. Every component mimics physical hardware with realistic lighting, mechanical interactions, and manufacturing details like screws, vents, and LED indicators.",layoutIdeas:{hero:"Asymmetric split layout with control panel interface (text/CTAs) on left, and massive interactive 'Device' visualization on right featuring bezels, CRT-style scanlines, power indicators, and physical hardware buttons.",stats:"Full-width dark LED readout strip with inset shadow depth, resembling a digital dashboard display. Glowing monospace numbers with color-coded shadows.",features:"3-column grid of ventilated hardware modules. Each card has corner screws (CSS gradients), vent slots, recessed icon housings, and hover elevation effects.",howItWorks:"Horizontal process flow with large circular neumorphic step indicators connected by physical cylindrical pipes (3D shadow effect).",benefits:"Split-panel control board with dark technical background. Left side has checklist with tactile toggle switches, right side features radar/sonar screen visualization with animated sweep.",pricing:"Metal dog-tag style cards with hanging holes at top. Center card elevated with accent ring. Monospace pricing and recessed checkmark icons.",testimonials:"Rotated paper note cards pinned to surface with red push-pins. Grayscale avatars and serif quote typography for authenticity.",faq:"Neumorphic accordion drawers with recessed arrow indicators that rotate on open. Inset content areas with subtle inner shadow.",blog:"Field log/cassette tape cards with label badges. Grayscale images that colorize on hover, overlaid gradient masks for depth.",footer:"Industrial base plate with online status LED, embossed copyright text, and minimal social icon grid with lift-on-hover."},content:`# Design Style: Industrial Skeuomorphism

## 1. Design Philosophy

This style transcends simple skeuomorphism into **Industrial Realism**�?"a celebration of **tactile precision, mechanical reliability, and the soul of physical objects**. In an era of ephemeral flat digital experiences, this aesthetic offers something solid, grounded, and permanent. It doesn't just *look* like a machine; it *feels* like one.

### The Core DNA

**Physicality Through Light**: Every element exists in three-dimensional space defined by consistent top-left lighting. Shadows aren't decorative�?"they're structural. Highlights reveal form. The interplay of light and shadow creates the illusion of mass, depth, and material.

**Mechanical Authenticity**: Interactions mimic real-world physics. Buttons depress with translation and shadow inversion. Cards elevate on hover. Icons rotate subtly. Every animation reinforces the metaphor of physical manipulation�?"springs, clicks, and tactile feedback encoded in motion curves.

**Manufacturing Details Matter**: The difference between generic and exceptional lies in the details. Corner screws (rendered as radial gradients), ventilation slots, LED status indicators, scanlines on screens, push-pin shadows, hanging holes on price tags�?"these are not optional flourishes. They are the **signature elements** that make this style instantly recognizable.

**Material Honesty**: The palette and textures evoke specific materials�?"matte ABS plastic chassis, brushed aluminum panels, powder-coated steel, and safety-orange injection-molded controls. A subtle noise texture across the background simulates the microscopic imperfections of real plastic surfaces. External texture patterns (carbon fiber, diagmonds) add authenticity to specific components.

### The Vibe

Picture the control panel of a spacecraft, a 1980s Braun synthesizer, or a Teenage Engineering OP-1. It's **functional, organized, precise, and effortlessly cool**.

**Dieter Rams Heritage**: Maximum clarity with minimum ornamentation. Typography is legible and hierarchical. Color is used sparingly�?"only where necessary for function (the safety-orange accent for interactive triggers and alerts).

**Teenage Engineering Playfulness**: Modular construction. Professional-grade precision with a sense of joy. Components feel like they could be swapped, rearranged, or upgraded.

**Timeless Futurism**: Not retro or nostalgic in a kitschy sense. This is the industrial design aesthetic that transcends trends�?"equally at home in 1985 or 2035.

### The Physics Engine

The interface obeys immutable physical laws:

1. **Consistent Light Source**: All lighting originates from the **top-left at 45 degrees**. This determines every highlight (top/left edges) and every shadow (bottom/right edges). Deviation breaks the illusion.

2. **Material Conservation**: Elements don't magically appear. They slide from behind panels, lights turn on, drawers open. Animations respect causality.

3. **Elevation Hierarchy**:
   - **Level -1 (Recessed)**: Inputs, screens, slots, grooves. Inner shadows create depth below the surface.
   - **Level 0 (Chassis)**: The base layer�?"the matte plastic background that everything is mounted to.
   - **Level +1 (Panels)**: Cards, modules, sections. Dual shadows (dark below, light above) create lift.
   - **Level +2 (Floating Controls)**: Buttons, knobs, badges. Enhanced shadows with optional glow for active states.

4. **Interaction Physics**: Active states reverse shadow direction (pressed elements get inner shadows). Hover states increase elevation. Transitions use mechanical easing with subtle bounce�?"mimicking spring-loaded switches.

## 2. Design Token System (The DNA)

### Colors (Industrial Palette)

The palette is **strictly light mode** and mimics physical materials under diffuse workshop lighting:

-   **Background (Chassis)**: \`#e0e5ec\` - Cool mid-tone industrial grey. The base "plastic" material everything is mounted to. This is Level 0.
-   **Foreground (Panel)**: \`#f0f2f5\` - Slightly lighter raised panel surface. Used sparingly for contrast.
-   **Muted (Recessed)**: \`#d1d9e6\` - Darker grey for sunken areas (input fields, screen bezels, grooves). Creates the "below surface" appearance.
-   **Text (Primary)**: \`#2d3436\` - Dark charcoal ink. High contrast but softer than pure black for reduced eye strain.
-   **Text Muted (Labels)**: \`#4a5568\` - Darker slate grey (improved from \`#636e72\` for WCAG AA compliance). Used for secondary text, labels, and metadata.
-   **Accent (Safety Orange)**: \`#ff4757\` - High-visibility "Braun Red" / "Safety Orange". Reserved exclusively for:
  - Interactive elements (primary buttons, links, toggles)
  - Status indicators (active LEDs, online badges)
  - Critical alerts or highlights
  This color should appear sparingly�?"it's the "emergency stop button" of the palette.
-   **Accent Foreground**: \`#ffffff\` - White text on accent backgrounds for maximum legibility.
-   **Border (Shadow)**: \`#babecc\` - The shadow color in neumorphic pairs. Represents the darker half of the lighting equation.
-   **Border Light (Highlight)**: \`#ffffff\` - The highlight color. The brighter half that creates dimensionality.
-   **Border Dark (Deep Shadow)**: \`#a3b1c6\` - Used for prominent borders and dividers where extra contrast is needed.

**Dark Accent Surfaces**: For dark technical panels (stats strip, benefits section), use:
- Background: \`#2d3436\` or \`#2c3e50\` (charcoal to slate)
- Text: \`#ffffff\`, \`#e0e5ec\`, or \`#a8b2d1\` (graded whites)
- Accent: Same \`#ff4757\` maintains brand consistency

### Typography

**Font Pairing**:
-   **Primary (Sans-serif)**: **Inter** (weights 400/500/600/700/800) - Humanist sans-serif with excellent legibility. Objective, neutral, and highly functional. Perfect for body text, headings, and UI labels.
-   **Technical (Monospace)**: **JetBrains Mono** or **Roboto Mono** (weights 400/500) - Engineered typeface optimized for code and data. Use exclusively for:
  - All numeric displays (stats, pricing, dates)
  - Technical labels and badges
  - Small uppercase metadata ("SYSTEM OPERATIONAL", "LOG #123")
  - Input fields (simulates terminal/data entry aesthetic)

**Hierarchy & Application**:
-   **Hero Headings**: 5xl�?"7xl (3rem�?"4.5rem on desktop), font-weight 800, tight tracking (-0.03em), with white text-shadow for embossed effect: \`drop-shadow-[0_1px_1px_#ffffff]\`
-   **Section Headings**: 3xl�?"4xl (2rem�?"2.5rem), font-weight 700, tight tracking
-   **Body Text**: Base to lg (1rem�?"1.125rem), font-weight 400�?"500, normal tracking, optimal line-height 1.6�?"1.75, **max line length 60-65 characters** for readability
-   **Labels & Metadata**: xs�?"sm (0.75rem�?"0.875rem), font-weight 700, uppercase, wide tracking (0.05em�?"0.08em), monospace. Creates a "stamped" or "printed label" appearance
-   **Buttons**: Uppercase, wide tracking (0.05em), font-weight 700, xs�?"base depending on button size

**Text Shadows for Depth**:
- Light text on dark backgrounds: \`drop-shadow-md\` or \`drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]\`
- Dark text on light backgrounds: \`drop-shadow-[0_1px_0_#ffffff]\` (subtle embossed highlight below text)

### Radius & Depth

**Border Radius Scale**:
-   **sm**: \`4px\` - Tight mechanical edges (small buttons, badges)
-   **md**: \`8px\` - Standard controls (inputs, small cards)
-   **lg**: \`16px\` - Large panels (cards, modals)
-   **xl**: \`24px\` - Hero components (device bezels, major sections)
-   **2xl**: \`30px+\` - Oversized containers (benefit panels, final CTA)
-   **full**: \`9999px\` - Perfect circles (icon housings, LEDs, step indicators)

Curves are soft and organic�?"mimicking injection-molded plastic, not sharp machined metal.

**Neumorphic Shadow System** (The Core Visual Signature):

These dual-shadow combinations create depth through light simulation:

-   **Card (Base Lift)**: \`8px 8px 16px #babecc, -8px -8px 16px #ffffff\`
  - Standard elevation for panels and cards. Dark shadow bottom-right, light highlight top-left.

-   **Floating (High Elevation)**: \`12px 12px 24px #babecc, -12px -12px 24px #ffffff, inset 1px 1px 0 rgba(255,255,255,0.5)\`
  - Enhanced lift for interactive elements (buttons, elevated cards). Optional inner highlight rim for extra polish.

-   **Pressed (Active State)**: \`inset 6px 6px 12px #babecc, inset -6px -6px 12px #ffffff\`
  - Shadow direction reverses�?"element appears pushed INTO the surface. Critical for button interactions.

-   **Recessed (Inputs/Screens)**: \`inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff\`
  - Subtle inward depth for input fields, grooves, and display panels.

-   **Sharp (Mechanical Edge)**: \`4px 4px 8px rgba(0,0,0,0.15), -1px -1px 1px rgba(255,255,255,0.8)\`
  - Harder-edged shadow for specific components (metal tags, borders).

-   **Glow (LED/Status Indicator)**: \`0 0 10px 2px rgba(255, 71, 87, 0.6)\`
  - Colored bloom for active LEDs, focus states, and alerts. Can adjust color to green (\`rgba(34,197,94,1)\`) for "online" states.

**Layered Shadows**: On hover, add additional shadows or increase spread to simulate elevation change. Example:
\`\`\`css
transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
hover:shadow-[var(--shadow-floating)]
\`\`\`

### Textures & Patterns

Textures differentiate this style from flat competitors. Apply strategically:

-   **Noise Overlay (Background)**: SVG-based fractal noise at 20-30% opacity with \`mix-blend-overlay\`. Simulates the micro-texture of matte plastic. Applied to entire page background via StyleWrapper.

-   **Carbon Fiber Pattern**: External texture URL (\`transparenttextures.com/patterns/carbon-fibre.png\`) at 10-20% opacity on tech-heavy sections (device bezels, dark panels). Use \`mix-blend-overlay\` or \`mix-blend-multiply\`.

-   **Scanlines (CRT Screens)**: Linear gradients simulating old monitor scanlines:
  \`\`\`css
  background: linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%);
  background-size: 100% 4px;
  \`\`\`
  Overlay on digital displays or "screen" elements.

-   **Grid Patterns (Blueprint/Schematic Backgrounds)**:
  \`\`\`css
  background-image: linear-gradient(#636e72 1px, transparent 1px),
                    linear-gradient(90deg, #636e72 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.1;
  \`\`\`
  Use for technical documentation sections (product detail).

-   **Radial Gradients (Lighting Hotspots)**: Subtle \`radial-gradient\` from white/transparent to add dimensionality to flat backgrounds. Place top-left to reinforce lighting direction.

## 3. Component Stylings

### Buttons ("Physical Keys")

Buttons are **tactile 3D objects**, not flat rectangles. They must convey pressability.

**Visual Structure**:
-   **Primary (Accent)**: Background \`#ff4757\`, white text, uppercase, wide tracking. Border with \`rgba(255,255,255,0.2)\` for subtle rim. Shadow: \`4px 4px 8px rgba(166,50,60,0.4), -4px -4px 8px rgba(255,100,110,0.4)\` (neumorphic red-tinted shadows).
-   **Secondary (Chassis)**: Background matches chassis (\`#e0e5ec\`), dark text, base lift shadow. Hover darkens text to accent color.
-   **Ghost (Flat Label)**: No background initially. Text muted. Hover applies muted background and recessed shadow.

**Interaction Physics (CRITICAL)**:
-   **Hover**: Slight brightness increase (\`brightness-110\`) or text color change. Shadow remains.
-   **Active (Pressed)**:
  - \`translate-y-[2px]\` - Button moves down 2px
  - Shadow inverts to \`inset 6px 6px 12px #babecc, inset -6px -6px 12px #ffffff\`
  - Border may vanish or thin
  - Transition is fast (\`150ms\`) for immediate tactile feedback
-   **Focus**: Accent-colored ring with offset: \`ring-2 ring-[var(--ring)] ring-offset-2\`

**Sizing**:
- All buttons have minimum 48px height on mobile (touch-friendly)
- Padding is generous for premium feel
- Border radius: \`md\` for small, \`lg\` for default, \`xl\` for large

### Cards ("Bolted Modules")

Cards are **physical panels bolted onto the chassis background**.

**Construction**:
-   Base shadow: \`shadow-[var(--shadow-card)]\` (neumorphic dual shadow)
-   Border radius: \`lg\` (16px)
-   Background: Chassis color (\`#e0e5ec\`)
-   Optional: \`elevated\` prop increases shadow to \`--shadow-floating\`

**Manufacturing Details**:
-   **Corner Screws**: CSS radial gradients simulate screw indentations:
  \`\`\`css
  background: radial-gradient(circle at 12px 12px, rgba(0,0,0,0.15) 2px, transparent 3px),
              radial-gradient(circle at calc(100%-12px) 12px, rgba(0,0,0,0.15) 2px, transparent 3px),
              /* repeat for bottom corners */
  \`\`\`
  Positioned at exactly 12px from edges.

-   **Vent Slots**: Vertical pill-shaped divs (1px width, 24px height) in top-right corner with \`inset\` shadows to appear recessed:
  \`\`\`tsx
  <div className="h-6 w-1 rounded-full bg-[var(--muted)] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]" />
  \`\`\`
  Place 3 in a row with \`gap-1\`.

**Hover Interaction**:
- Cards lift on hover: \`hover:-translate-y-1\` with shadow transition to \`--shadow-floating\`
- Duration 300ms with ease-out
- Group child elements (icons) can rotate or scale on card hover using Tailwind group utilities

### Inputs ("Data Slots")

Inputs are **recessed wells** machined into the chassis surface.

**Visual Treatment**:
-   Deeply inset shadow: \`shadow-[var(--shadow-recessed)]\`
-   No visible border (border-none) - depth is communicated through shadow alone
-   Background: Chassis color (matches surface level for subtle integration)
-   Border radius: \`md\` (8px)
-   Monospace font for technical data entry feel
-   Placeholder: Muted text at 50% opacity

**States**:
-   **Focus**: Accent-colored glow appears: \`focus-visible:shadow-[var(--shadow-recessed),0_0_0_2px_var(--accent)]\`
  - Simulates LED backlight activating behind input
-   **Disabled**: Reduced opacity (50%), cursor-not-allowed

**Sizing**: Minimum 56px height (14 in Tailwind) for comfortable typing. Generous padding (24px horizontal).

## 4. Layout Strategy

**Container System**:
-   Max width: \`72rem\` (1152px) for primary content
-   Horizontal padding: \`px-6\` (24px) mobile, \`px-12\` (48px) desktop
-   Vertical spacing between sections: \`space-y-24\` (96px)

**Grid Discipline**:
- Use precise Tailwind grid classes: \`grid-cols-2\`, \`grid-cols-3\`, \`md:grid-cols-4\`
- Gap consistency: \`gap-6\` (24px) for tight layouts, \`gap-8\` (32px) for breathing room
- Alignment is critical�?"elements should feel "mounted" to an invisible grid structure

**Asymmetry & Balance**:
- Hero is asymmetric (60/40 split on desktop, stacked on mobile)
- Alternate left/right image placement in multi-column sections
- Testimonial cards have intentional slight rotation (A�1deg) for realism
- Use \`order-1/order-2\` with responsive modifiers to control stacking order

## 5. Non-Genericness (Signature Elements)

These details separate this style from generic neumorphic templates:

**The Hero "Device" Visualization**:
- Not a simple image�?"construct a **3D device mockup** entirely in CSS
- Components:
  - Outer bezel: Dark border (4px), rounded corners, carbon fiber texture overlay
  - Inner screen: Black background with \`inset\` shadow, CRT scanline overlay
  - Hardware details: Physical buttons on side edges, power LED in corner
  - Screen content: Abstract dashboard with glowing elements, spinning loaders, status bars
  - Hover effect: Slight scale increase for interactivity

**LED Status Indicators**:
- Small circular divs (8-12px) with:
  - Solid color fill (green for online, red for alert, yellow for warning)
  - \`animate-pulse\` for breathing effect
  - Glow shadow: \`shadow-[0_0_10px_rgba(color,1)]\`
- Place on: Navbar, hero badge, footer, device visualization
- Always pair with monospace label ("SYSTEM OPERATIONAL", "PWR", "ONLINE")

**Physical Connectors & Pipes**:
- "How It Works" uses horizontal cylindrical pipe connecting step nodes
- CSS: \`h-3 w-full rounded-full bg-[#d1d9e6] shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)]\`
- Hidden on mobile (\`hidden md:block\`)

**Masking Tape & Stickers**:
- For metadata overlays (blog dates, testimonial labels)
- Skewed yellow/white rectangles with \`backdrop-blur-sm\`
- Example: \`<div className="skew-x-12 bg-[rgba(255,230,0,0.3)] backdrop-blur-sm" />\`

**Push Pins & Hanging Holes**:
- Testimonials: Red circular push-pin at top center with highlight shine
- Pricing cards: Circular hole at top with inner shadow to simulate punched metal

**Screw Heads & Vent Slots** (detailed in Cards section):
- Never omit these�?"they're the DNA of the style
- Place consistently in same positions across all cards

**Grayscale-to-Color Image Treatment**:
- Blog and testimonial images start grayscale: \`grayscale\`
- Transition to color on hover: \`group-hover:grayscale-0 transition-all duration-500\`
- Adds subtle interactivity while maintaining industrial monotone baseline

## 6. Effects & Animation

**Motion Philosophy**: Mechanical spring physics with subtle bounce�?"mimicking real physical switches and buttons.

**Easing Curve**:
- Primary: \`cubic-bezier(0.175, 0.885, 0.32, 1.275)\` - Slight overshoot/bounce
- Fast interactions: \`duration-150\` to \`duration-200\`
- Smooth transitions: \`duration-300\`
- Image/scale effects: \`duration-500\`

**Framer Motion Integration**:
- Hero section uses staggered entrance animations
- Mechanical easing constant: \`[0.175, 0.885, 0.32, 1.275]\`
- Variants: \`slideUp\` (opacity + y-translate), \`stagger\` (staggerChildren)

**Key Micro-interactions**:
- **Button Press**: \`active:translate-y-[2px]\` + shadow inversion (150ms)
- **Card Hover**: \`-translate-y-1\` elevation with shadow upgrade (300ms)
- **Icon Hover**: \`group-hover:scale-110\` + \`group-hover:rotate-12\` (200ms)
- **Image Hover**: Grayscale to color (500ms)
- **LED Pulse**: \`animate-pulse\` (Tailwind default, ~2s cycle)
- **Loading Spinner**: \`animate-spin\` on border technique (1s linear)

**Advanced Animations**:
- Radar sweep in benefits: \`animate-spin\` with \`conic-gradient\` and long duration (4s)
- Device screen scanlines: Static background pattern (no animation needed)
- Mobile menu: Slide down with opacity fade (200ms ease-out)

## 7. Iconography & Icon Integration

**Icon Library**: \`lucide-react\` exclusively

**Styling Rules**:
-   **Stroke Width**: 1.5px standard, 1px for thin/delicate icons, 2-4px for bold/emphasis
-   **Size**: 20-24px for UI elements, 28-32px for feature icons, 16-18px for inline text icons
-   **Color**: Match text color or use accent color for interactive/highlighted icons

**Integration Patterns** (never leave icons floating):

1. **Recessed Icon Housing** (Feature cards):
   \`\`\`tsx
   <div className="flex h-14 w-14 items-center justify-center rounded-full
                   bg-[var(--background)] shadow-[var(--shadow-floating)]">
     <Icon className="text-[var(--accent)]" size={28} />
   </div>
   \`\`\`

2. **Inline with Text** (Metadata, labels):
   \`\`\`tsx
   <Zap className="inline h-4 w-4 text-[var(--accent)]" />
   \`\`\`

3. **Navigation Icons** (Social links):
   \`\`\`tsx
   <Twitter className="h-5 w-5 transition-all hover:text-[var(--accent)]" />
   \`\`\`

4. **LED-style Indicators**:
   - Solid fill instead of stroke
   - Pair with glow shadow
   - Small size (12-16px)

## 8. Responsive Strategy

The physical metaphor **must persist** across all breakpoints�?"no sudden shifts to "generic mobile design."

**Breakpoint System**:
-   **Mobile-first**: Base styles assume narrow viewports
-   **Tablet**: \`md:\` prefix (768px+)
-   **Desktop**: \`lg:\` and \`xl:\` (1024px+, 1280px+)

**Adaptations**:

**Navigation**:
- Desktop: Horizontal menu with ghost buttons
- Mobile: Hamburger menu button (neumorphic) reveals vertical drawer

**Hero**:
- Desktop: Side-by-side (lg:grid-cols-2)
- Mobile: Stacked (text first, device second). Device aspect ratio shifts to reduce height.

**Grids**:
- Features: 3 cols desktop �+' 1 col mobile
- Stats: 4 cols desktop �+' 2 cols mobile
- Pricing: 3 cols �+' 1 col stack
- Testimonials: 3 cols �+' 1 col

**Images & Devices**:
- Device graphic scales proportionally but may adjust aspect-ratio (aspect-square on mobile, aspect-video on desktop)
- Blog/testimonial images maintain aspect ratios

**Touch Targets**:
- **Minimum 48px height** for all interactive elements on mobile
- Buttons expand to full width on mobile: \`w-full sm:w-auto\`
- Increased padding on mobile CTAs for easier tapping

**Typography**:
- Hero heading reduces from 7xl �+' 5xl on mobile
- Body text remains lg for readability (don't shrink below 16px)

**Spacing**:
- Section gaps reduce from 96px �+' 64px on mobile
- Card padding reduces from 32px �+' 24px

**Hidden Elements**:
- Physical connector pipes between steps: \`hidden md:block\`
- Desktop-only navigation labels
- Some decorative screws/vents can hide on small screens if needed

**Performance**:
- External texture images are small and cached
- Animations use \`transform\` and \`opacity\` for GPU acceleration
- Neumorphic shadows are CSS-only (no JS calculations)`},

===== STYLE BLOCK: kinetic (offset 640277 to 666963) =====
kinetic:{id:"kinetic",name:"Kinetic",mode:"dark",fontType:"sans-serif",description:"Motion-first design where typography is the primary visual medium. Features infinite marquees, viewport-scaled text, scroll-triggered animations, and aggressive uppercase styling. High contrast, brutalist energy with rhythmic movement.",layoutIdeas:{hero:"Full viewport height (90vh) with massive text using clamp() for responsive scaling (clamp(3rem,12vw,14rem)). Split headlines across lines with contrasting accent color. Add scroll-triggered scale (1.0�+'1.2) and opacity (1.0�+'0) transforms via Framer Motion. Center content with max-w-[95vw].",stats:"Infinite horizontal marquee on full-width accent background (py-8). Display huge numbers (6xl-8xl) paired with uppercase labels and decorative symbols (�o�). Use react-fast-marquee with speed 80, no gradients�?"raw, continuous motion with border-y dividers.",productDetail:"Two-column grid on desktop with massive heading (5xl-8xl uppercase). Each column has left border-l-4 with massive background numbers (6rem-8rem) positioned absolutely. Paragraphs in muted color with generous line-height. Numbers change color on hover.",features:"Sticky scroll cards (top-24/top-32) that stack vertically as user scrolls. Display massive index numbers (6xl-8xl) in muted tones. Feature titles in accent color at 3xl-6xl uppercase. Sharp 2px borders that highlight on hover. Cards use p-8/p-12 with responsive flex layout.",blog:"2-3 column grid (md:grid-cols-2 lg:grid-cols-3) with gap-px hairline dividers. Each card shows massive background number (3rem-4rem), uppercase title with translate-x-4 hover effect. Author and date in footer with border-top. Hover transitions to muted background.",howItWorks:"Three-column grid with gap-px hairline dividers creating connected cards. Massive step numbers (8rem-12rem) at top, content at bottom. Full card color inversion on hover (background to accent, text to black). Min-height 500-600px for dramatic scale.",benefits:"Full-width list with border-b dividers. Massive titles (4xl-7xl) that translate horizontally on hover (translate-x-4/translate-x-8). Descriptions fade in on hover (opacity-0�+'100) on desktop, always visible on mobile. Text-right alignment for descriptions on desktop.",pricing:"2-3 column grid (md:grid-cols-2 lg:grid-cols-3). Border-based cards with 2px borders. Prices at 6xl-7xl. Full card hover transitions (border and background to accent, text to black). Features use colored square bullets (h-2 w-2). Highlighted tier has muted background.",testimonials:"Horizontal scrolling marquee (slower speed 40). Large quotes (4xl bold uppercase) with accent border-left (4px). Author details with square placeholders. Wide spacing (mx-12) between cards for breathing room. No gradients on edges.",faq:"Accordion with large questions (xl-4xl uppercase). Touch-friendly expand/collapse icons in 40x40px containers. Answers in muted color (lg-2xl) with generous line-height. Framer Motion height animations (duration 300ms, easeInOut).",footer:"Full-height section (min-h-screen) on accent background with black text. Massive headline using clamp(2.5rem,8vw,10rem). Huge input with border-bottom styling. 2-4 column footer nav grid. Bold 2px border-t divider for copyright section."},content:`# Design Style: Kinetic Typography

## Design Philosophy

**Core Principle**: Typography is not decoration�?"it is the entire visual structure. Text becomes image, headline becomes hero, motion becomes rhythm. This style rejects static layouts completely. Every element should feel alive through constant motion (marquees), reactive motion (hover states), or scroll-triggered motion (parallax, scale transforms). The page pulses with kinetic energy�?"nothing is ever truly still.

**Aesthetic Vibe**: High-energy brutalism meets kinetic poster design. Confidence through scale. Urgency through motion. Clarity through contrast. The design screams rather than whispers�?"everything is uppercase, oversized, and in-your-face. It's a poster come to life, with the raw energy of street art and the precision of Swiss typography, but animated and interactive. Think music festival posters, protest graphics, and underground zines translated to the web.

**Visual DNA**: This style is instantly recognizable by its relentless motion and aggressive scale. Marquees scroll endlessly. Numbers tower at 8-12rem. Headlines use viewport units (clamp-based for control). Every hover state is dramatic�?"cards flood with color, text translates across the screen, borders glow with accent hues. The aesthetic is deliberately excessive: if traditional web design uses 2x scale difference between headline and body, this uses 10x. Where others add subtle shadows, this style stays brutally flat with sharp borders and hard edges.

**Signature Elements**:
- Infinite marquees that never stop moving (react-fast-marquee, no gradients)
- Viewport-responsive typography using clamp() for fluid scaling (clamp(3rem,12vw,14rem))
- Aggressive uppercase treatment on ALL display text (headings, buttons, labels)
- Massive numerical elements (6rem-12rem) used as decorative graphic shapes
- Hard color inversions on hover (background to accent yellow, text to black, instant transitions)
- Scroll-triggered scale and opacity transforms (Framer Motion useScroll hook)
- Sharp 2px borders with 0px border-radius (brutalist geometry)
- Hairline gap-px grid dividers creating connected card systems

## Design Token System (The DNA)

### Color Architecture

**Foundation Colors**:
- \`background\`: \`#09090B\` (Rich black, not pure black�?"softer on eyes)
- \`foreground\`: \`#FAFAFA\` (Off-white, not pure white�?"less harsh)
- \`muted\`: \`#27272A\` (Dark gray for secondary surfaces)
- \`muted-foreground\`: \`#A1A1AA\` (Zinc 400 for body text and descriptions)

**Accent Strategy**:
- \`accent\`: \`#DFE104\` (Acid yellow/lime�?"high energy, highly visible)
- \`accent-foreground\`: \`#000000\` (Pure black for contrast on accent)
- \`border\`: \`#3F3F46\` (Zinc 700�?"subtle structural lines)

**Color Usage Patterns**:
- Use acid yellow sparingly but boldly (hero text highlights, hover states, focus rings, marquee backgrounds)
- Muted foreground (Zinc 400) for all secondary text�?"never use plain gray
- Border color for ALL structural lines�?"never use foreground color for borders
- Background numbers and inactive elements in \`muted\` (#27272A) to create depth layers
- Selection highlight: Yellow background with black text

**Contrast Requirements**:
- Primary text to background: Minimum 15:1 ratio (off-white on rich black)
- Accent to background: Must be vibrant and eye-catching
- Never use mid-range grays�?"stay at the contrast extremes

### Typography System

**Font Selection**:
- Primary: "Space Grotesk" (preferred�?"strong geometric shapes, excellent at large sizes)
- Fallback: "Inter" (if Space Grotesk unavailable)
- Both should support variable font weights if possible (300-700 range)

**Scale Hierarchy** (using Tailwind classes with responsive scaling):
- **Hero/Display**: \`text-[clamp(3rem,12vw,14rem)]\` (fluid viewport-based scaling with safe minimums)
- **Section Headings**: \`text-5xl md:text-7xl lg:text-8xl\` or \`text-[clamp(2.5rem,8vw,6rem)]\` for ultra-massive headings
- **Card Titles**: \`text-2xl md:text-3xl lg:text-6xl\` (responsive scaling from mobile to desktop)
- **Body/Descriptions**: \`text-lg md:text-xl lg:text-2xl\` (18-24px�?"larger than typical web, responsive)
- **Small Labels**: \`text-xs md:text-sm lg:text-lg\` (12-18px, responsive)
- **Massive Numbers** (decorative): \`text-[6rem] md:text-[8rem]\` to \`text-[8rem] md:text-[12rem]\` (responsive massive scale)
- **Navigation/Micro**: \`text-sm md:text-base\` (14-16px)

**Type Treatment Rules**:
- ALL display text (headings, buttons, labels) must be uppercase
- Body text and descriptions stay in normal case for readability
- Tracking: Use \`tracking-tighter\` on large display text, \`tracking-tight\` on body, \`tracking-wide\` or \`tracking-widest\` on small labels
- Leading: \`leading-[0.8]\` or \`leading-none\` for display headlines to create tight, graphic lockups
- Leading: \`leading-tight\` for large body text (xl-2xl)
- Font weight: Bold (700) for all headings and buttons, Medium (500) for body, Regular (400) for secondary text

**Font Size Relationships**:
- Headlines are 3-5x larger than body text (not 1.5-2x like traditional web)
- Numbers as graphics are 4-8x larger than accompanying labels
- Decorative background text is 2-3x larger than foreground text in same context

### Spacing & Layout

**Base Unit**: 4px (Tailwind's default spacing scale)

**Vertical Rhythm**:
- Section padding: \`py-32\` (128px top/bottom) for major sections
- Card/Container padding: \`p-8\` to \`p-12\` (32-48px)
- Element gaps within containers: \`gap-8\` (32px)
- Tight element groups: \`gap-4\` (16px)
- Between large display elements: \`mb-4\` to \`mb-8\` (16-32px)

**Horizontal Containment**:
- Maximum width: \`max-w-[95vw]\` or \`max-w-[90vw]\`�?"push to the edges
- Never use standard \`max-w-7xl\` or similar�?"too conservative for this style
- Specific content widths: \`max-w-2xl\` (672px) for long-form text blocks
- Full bleed for marquees and dramatic sections

**Padding Relationships**:
- Cards: Equal padding all sides (p-8 or p-12) OR asymmetric with more top/bottom than left/right
- Buttons: Horizontal padding 2-3x vertical (e.g., px-8 py-4)
- Inputs: Minimal horizontal padding (px-0 or px-2), more vertical for touch targets

**Grid Patterns**:
- Three-column grids for step processes (md:grid-cols-3)
- Single column on mobile, maintain drama with large text
- Use \`gap-px\` with colored backgrounds to create hairline grid dividers
- Pricing typically uses three equal columns (lg:grid-cols-3)

### Shape Language

**Border Radius**:
- Default: \`0px\` (completely sharp corners)
- Exception: Rare use of \`rounded-sm\` (2px) for subtle softening on small elements
- Never use rounded-lg or higher�?"destroys the brutalist aesthetic

**Border Styling**:
- Width: \`border-2\` (2px) for structural emphasis, \`border\` (1px) for subtle dividers
- Style: Always solid, never dashed or dotted
- Color: Use \`border-[#3F3F46]\` consistently
- Border-only elements: Use \`border-b-2\` for input underlines, \`border-l-4\` for quote accents

**Shadows & Depth**:
- **NO drop shadows**�?"this style is completely flat
- Depth created through color layering (muted background elements behind foreground)
- Use massive background numbers in muted tones to create visual depth
- Overlapping elements instead of shadow for hierarchy

**Visual Dividers**:
- Prefer borders over shadows
- Use full-width border-top/border-bottom at section breaks
- Grid gap patterns: \`gap-px\` with colored container creates hairline dividers

### Texture & Overlay

**Noise Texture**:
- SVG-based feTurbulence filter (baseFrequency 0.8, numOctaves 4)
- Fixed position, full viewport coverage
- Opacity: \`opacity-[0.03]\` (barely visible)
- Blend mode: \`mix-blend-overlay\`
- Purpose: Adds subtle print/poster texture without affecting readability

**Background Treatments**:
- Solid colors only�?"no gradients
- Accent color used for full-section backgrounds (stats marquee, footer)
- Muted color for card hover backgrounds before accent flip

**Blend Modes**:
- Use \`mix-blend-difference\` or \`mix-blend-exclusion\` sparingly for text over images
- Apply to custom cursors or special text treatments
- Not part of the core style in current implementation but suggested for advanced implementations

## Component Styling Principles

### Buttons

**Base Styling**:
- Always uppercase text with tight tracking (\`uppercase tracking-tighter\`)
- Font weight: Bold (700)
- Sharp corners (rounded-none)
- Height: Default 56px (h-14), Small 40px (h-10), Large 80px (h-20)
- Horizontal padding 2x height: Default px-8, Small px-4, Large px-12

**Variant Patterns**:

**Primary (Accent)**:
- Background: Acid yellow (#DFE104)
- Text: Black
- Hover: Scale up 1.05 (\`hover:scale-105\`)
- Active: Scale down 0.95 (\`active:scale-95\`)
- Transition: \`transition-all\` for smooth scale

**Outline**:
- Border: 2px solid zinc-700 (#3F3F46)
- Background: Transparent
- Text: Off-white
- Hover: Full fill with off-white background, text inverts to black
- Hard transition (instant color flip)

**Ghost**:
- No border, no background
- Text: Off-white
- Hover: Text color changes to accent yellow
- Minimal, subtle variant

**Advanced Interactions** (not implemented but suggested):
- Marquee effect: Text inside button scrolls horizontally on hover
- Character-by-character color fill on hover (left to right)

### Cards & Containers

**Base Structure**:
- Border: 2px solid zinc-700 (\`border-2 border-[#3F3F46]\`)
- Background: Rich black (#09090B)
- Padding: Large and even (p-8 or p-12)
- No border-radius (sharp corners)

**Hover Behavior**:
- Background floods with accent color (#DFE104)
- Border color changes to accent
- All text inverts to black
- Transition: \`duration-300\` for smooth but noticeable shift
- Use group classes to coordinate text color changes

**Content Hierarchy Within Cards**:
- Large title at top (text-3xl) in foreground color �+' black on hover
- Description text in muted-foreground �+' black with reduced opacity on hover
- Decorative numbers or icons in muted tone �+' black on hover

**Sticky Card Pattern** (Features Section):
- Each card uses \`sticky top-32\` positioning
- Cards stack and overlap as user scrolls
- Later cards appear to slide over earlier ones
- Maintains visual rhythm through repetition

### Inputs & Forms

**Base Styling**:
- Height: Extra tall (h-24 / 96px) for dramatic scale
- Border: Bottom border only (\`border-b-2\`)
- Border color: Zinc-700 default, accent on focus
- Background: Transparent
- Text: Extra large (text-4xl), bold, uppercase, tight tracking
- Padding: Minimal horizontal (px-0), standard vertical for alignment

**Focus States**:
- Border-bottom changes to accent yellow
- No outline ring�?"border serves as focus indicator
- Instant color change (no transition needed)

**Placeholder Styling**:
- Muted color (#27272A)�?"very subtle
- Same size and style as input text
- Uppercase to match input
- Low contrast ensures actual input stands out

**Form Layout**:
- Full width inputs (w-full)
- Generous vertical spacing between fields (space-y-8)
- Labels (if used) should be small, uppercase, tracked-wide, above input

### Interactive States

**Hover Transformations**:
- Scale: Buttons scale to 1.05, cards stay at scale 1.0
- Translation: Benefit titles translate horizontally (\`translate-x-8\`)
- Color Floods: Cards completely invert color scheme
- Opacity Reveals: Hidden descriptions fade in (opacity-0 to opacity-100)
- All transitions use \`duration-300\` for consistent feel

**Focus States**:
- Inputs: Border color change to accent
- Buttons: Same as hover (scale) plus visible focus ring in accent color
- Links: Underline in accent color or text color change

**Active States**:
- Buttons: Scale down to 0.95 (\`active:scale-95\`) for tactile feedback
- Links: Slight opacity reduction

**Disabled States**:
- Opacity: 50% (\`disabled:opacity-50\`)
- Pointer events: None (\`disabled:pointer-events-none\`)
- Maintain all other styling�?"just reduce visibility

## Animation & Motion System

### Marquee Motion

**Implementation**: Use \`react-fast-marquee\` library for smooth, GPU-accelerated marquees

**Stats Marquee** (High Energy):
- Speed: 80 (fast)
- Direction: Left to right
- Gradient: false (no edge fade)
- AutoFill: true (repeats content infinitely)
- Content: Large numbers paired with labels and decorative symbols

**Testimonials Marquee** (Slower Rhythm):
- Speed: 40 (medium)
- Direction: Left to right
- Gradient: false
- Content: Wide cards with quotes, generous spacing between items

**Timing Rules**:
- Never use gradients�?"raw edge is part of aesthetic
- Fast marquees (speed 60-100) for stats and high-energy content
- Slower marquees (speed 30-50) for reading content like testimonials
- All marquees use linear easing (no acceleration/deceleration)

### Scroll-Triggered Animations

**Hero Parallax** (Framer Motion):
- Track scroll progress: \`useScroll()\` hook
- Scale transform: 1.0 �+' 1.2 as user scrolls (0-20% of page)
- Opacity: 1.0 �+' 0 as user scrolls out
- Creates dramatic zoom-out effect as user enters content

**Sticky Scroll Cards**:
- Position: \`sticky top-32\`
- No transform animations�?"physical stacking creates effect
- Cards remain in place as subsequent cards slide over them

**Entrance Animations** (Suggested, not in current implementation):
- Elements scale from 0.8 to 1.0 as they enter viewport
- Text can "unmask" by animating from clipped to full visibility
- Use intersection observer or Framer Motion \`whileInView\`

### Micro-Interactions

**Button Interactions**:
- Hover: Scale 1.05 with all easing
- Active: Scale 0.95
- Transition timing: 200-300ms
- Easing: Default ease-in-out

**Card Hover**:
- Color transition: 300ms
- Hard flip, not gradual (suits the brutalist aesthetic)
- All child text coordinates color change via group classes

**Accordion Expansion** (FAQ):
- Height: Animate from 0 to auto
- Opacity: Fade in content (0 to 1)
- Timing: Smooth with slight bounce (framer motion spring)
- Initial: false (doesn't animate on mount)

**Text Reveals**:
- Benefit descriptions: Opacity 0 to 1, duration 300ms
- Benefit titles: Horizontal translate + duration 300ms
- Both triggered simultaneously on hover

### Easing & Timing

**Default Durations**:
- Micro-interactions (hovers, focus): 200-300ms
- Section animations: 500-800ms
- Marquees: Continuous linear (no easing)

**Easing Functions**:
- Buttons and scale effects: \`ease-in-out\` (default)
- Marquees: \`linear\` (constant speed)
- Accordion: Spring physics from Framer Motion
- Parallax: Linear mapping from scroll position

**Performance Notes**:
- Prefer transforms (scale, translate) over position changes
- Use opacity instead of visibility for reveals
- Marquees should use transform: translateX for GPU acceleration
- Keep animations at 60fps�?"avoid complex calculations in scroll handlers

## Layout Principles

### Grid Philosophy

**Break the Grid**: This style embraces asymmetry and overlap. Elements can:
- Extend beyond their containers
- Overlap previous elements (sticky scroll)
- Use uneven column widths
- Break alignment for dramatic effect

**Standard Patterns**:
- Single column mobile (always)
- Two column for benefits/features on tablet (md)
- Three column for pricing/steps on desktop (lg)
- Four column for footer navigation

**Grid Gaps**:
- Standard: \`gap-8\` (32px) between major elements
- Hairline: \`gap-px\` with colored container background for connected cards
- Wide: \`gap-12\` to \`gap-24\` for breathing room in dense sections

### Section Flow

**Vertical Rhythm**:
- Major sections: \`py-32\` (128px) top and bottom
- Subsections: \`py-20\` (80px)
- Dense content areas: \`py-12\` (48px)

**Section Dividers**:
- Full-width border-top or border-bottom in zinc-700
- Accent color background flips (black section �+' yellow section)
- Contrast creates natural breaks without needing extra space

**Content Width Strategy**:
- Hero: Max-w-[95vw]�?"push to edges
- Body content: Max-w-5xl or max-w-6xl
- Long-form text: Max-w-2xl or max-w-xl for readability
- Marquees: Full bleed (w-full, no max-width)

### Responsive Approach

**Mobile-First Strategy**:
- **Maintain drama**: Keep large text using clamp() values for safe scaling (e.g., \`clamp(3rem,12vw,14rem)\`)
- **Stack everything vertically**: Single column layouts with \`flex-col\` and \`md:flex-row\` patterns
- **Reduce padding progressively**: \`p-8 md:p-12\`, \`py-20 md:py-32\`, \`px-4 md:px-8\`
- **Marquees persist**: Essential to the style�?"keep them at all breakpoints
- **Touch targets**: Minimum 44x44px (h-10 w-10 for icon containers, h-14 for buttons)
- **Adapt hover effects**: Show descriptions always on mobile (opacity-100), hide on desktop (md:opacity-0) then reveal on hover
- **Sticky positioning**: Adjust top values (\`top-24 md:top-32\`) to account for nav height
- **Grid simplification**: 1 column �+' \`md:grid-cols-2\` �+' \`lg:grid-cols-3\`

**Breakpoints** (Tailwind defaults):
- **Mobile**: Base styles (320px-767px) - Single column, reduced text sizes, full-width elements
- **Tablet (md)**: 768px+ - Two-column layouts, medium text scaling, increased padding
- **Desktop (lg)**: 1024px+ - Three-column layouts, full dramatic scale, all hover effects active

**Text Scaling Best Practices**:
- **Use clamp()** for hero and massive headings: \`text-[clamp(3rem,12vw,14rem)]\`
- **Use responsive utilities** for section headings: \`text-5xl md:text-7xl lg:text-8xl\`
- **Use responsive utilities** for body text: \`text-lg md:text-xl lg:text-2xl\`
- **Use responsive utilities** for massive numbers: \`text-[6rem] md:text-[8rem]\` or \`text-[8rem] md:text-[12rem]\`
- Always test at 320px, 768px, 1024px, and 1440px+ widths

## The "Bold Factor" (Non-Generic Signatures)

These elements MUST be present to achieve the Kinetic Typography aesthetic:

1. **Viewport-Width Typography**: At least one headline must use viewport-width units (10vw+). This creates immediate scale and drama.

2. **Active Marquees**: At least two sections should use infinite scrolling marquees. One fast (stats), one slower (testimonials). No gradient edges.

3. **Massive Background Numbers**: Use oversized numbers (8rem-12rem) in muted tones as decorative background elements. They become graphic shapes, not just text.

4. **Hard Color Inversions**: Cards or sections that completely flip color scheme on hover (black �+' yellow background, white �+' black text). The transition should be clean, not gradual.

5. **Uppercase Display Treatment**: All headings, buttons, and labels in uppercase with tight tracking. This creates the poster-like, bold aesthetic.

6. **Aggressive Scale Hierarchy**: The difference between largest and smallest text should be 8-10x, not the typical 2-3x. Body text at 20-24px, headlines at 160-200px+.

7. **Minimal Border Styling**: Sharp corners (0px radius) and 2px borders in subtle zinc tones. Flat, no shadows. Brutalist structure.

**What Makes it Instantly Recognizable**:
- The constant motion (marquees never stop)
- The screaming scale (text fills the screen)
- The high contrast (near-black and off-white with acid yellow)
- The uppercase lockup (everything yells)

If these elements are removed or softened, the design becomes generic modern dark mode.

## Anti-Patterns (What to Avoid)

**Color Mistakes**:
- Never use pure black (#000000) or pure white (#FFFFFF)�?"too harsh
- Don't use soft pastels or mid-tone colors�?"breaks the high-contrast system
- Avoid gradients on backgrounds�?"this style is flat
- Don't use multiple accent colors�?"acid yellow only

**Typography Errors**:
- Don't use serif fonts or script fonts�?"kills the brutalist vibe
- Never use small text for headings (<text-3xl)�?"loses the bold factor
- Avoid mixed case in display text�?"uppercase is mandatory
- Don't use normal or wide tracking on large text�?"always tighter

**Layout Mistakes**:
- Don't center-align body text�?"left-align for readability
- Avoid small max-widths (max-w-4xl)�?"content should feel wide
- Don't use standard section padding (py-16)�?"go bigger (py-32)
- Never nest containers with conflicting max-widths

**Animation Mistakes**:
- Don't add drop shadow animations�?"stay flat
- Avoid slow, gentle transitions (800ms+)�?"this style is snappy
- Never stop the marquees or add pause-on-hover�?"motion is constant
- Don't use bounce or elastic easing on everything�?"reserve for specific elements

**Shape & Style Errors**:
- Never add border-radius above 2px�?"sharp corners are essential
- Don't use subtle borders (<1px)�?"go for 2px or border-bottom only
- Avoid soft shadows�?"this style has no depth effects
- Don't use opacity for hierarchy�?"use color contrast

**Component Mistakes**:
- Don't make buttons small and subtle�?"they should be bold and large
- Avoid input fields that look traditional�?"oversized is key
- Don't use cards with heavy padding and rounded corners�?"minimal, sharp
- Never use subtle hover states�?"changes should be dramatic

**Accessibility Violations**:
- Don't ignore motion preferences�?"respect prefers-reduced-motion
- Avoid color as the only indicator�?"ensure sufficient contrast
- Don't make click targets too small�?"maintain 44px minimum
- Never sacrifice readability for style�?"body text should be large and clear

## Accessibility Considerations

**Color Contrast**:
- Off-white (#FAFAFA) on rich black (#09090B): ~15:1 ratio (exceeds WCAG AAA)
- Accent yellow (#DFE104) on rich black: ~12:1 ratio (exceeds WCAG AAA)
- Muted foreground (#A1A1AA) on rich black: ~6:1 ratio (meets WCAG AA for large text)
- Accent with black text: ~14:1 ratio (exceeds WCAG AAA)

**Motion Preferences**:
- Wrap all marquees in \`@media (prefers-reduced-motion: no-preference)\`
- Provide static fallback: show content without scrolling
- Disable scroll-triggered animations for users who prefer reduced motion
- Maintain layout and hierarchy without motion

**Focus Indicators**:
- Accent-colored border or ring on focus
- Minimum 2px visible indicator
- Never remove focus styles�?"make them obvious
- Scale changes on buttons provide additional tactile feedback

**Keyboard Navigation**:
- All interactive elements must be focusable
- Accordion items should expand/collapse with Enter or Space
- Marquee content should be navigable via keyboard if interactive
- Skip links to main content if navigation is complex

**Screen Reader Considerations**:
- Noise texture SVG includes \`<title>\` element
- Decorative background numbers should have \`aria-hidden="true"\`
- Marquees need \`aria-live\` attributes if content updates
- Accordion state (expanded/collapsed) should be announced

**Touch Targets**:
- Minimum 44x44px for all interactive elements
- Buttons exceed this (default 56px height)
- Adequate spacing between clickable items (16px+)
- Large input fields (96px height) easy to tap

**Readability**:
- Body text larger than standard web (20-24px vs 16px)
- High contrast throughout
- Left-aligned paragraphs for easier reading
- Generous line-height (leading-tight = 1.25) for large text

**Testing Checklist**:
- Test with screen reader (NVDA, JAWS, VoiceOver)
- Verify keyboard-only navigation
- Check with prefers-reduced-motion enabled
- Validate color contrast with tools (Stark, axe DevTools)
- Test at 200% zoom level
- Verify touch targets on mobile devices`},

===== STYLE BLOCK: luxury (offset 666963 to 691753) =====
luxury:{id:"luxury",name:"Luxury",mode:"light",fontType:"serif",description:"Elegant serif typography with monochromatic palette and gold accents. Ultra-slow animations, generous white space, and architectural precision. High-end fashion magazine editorial aesthetic with depth through subtle shadows and layering.",layoutIdeas:{hero:"Asymmetric 12-column grid with text content in left 7 columns (bottom-aligned) and hero image in right 5 columns. Decorative horizontal line and 'Est. 2024' label. Massive type scale (text-5xl to text-9xl). Vertical writing mode label on image. Hero image has shadow and inner border.",stats:"Horizontal strip with 2-4 column grid. Vertical left border on each stat. Large italic Playfair numerals with tiny uppercase labels. Responsive: 2 cols mobile, 4 cols desktop.",productDetail:"Two-column asymmetric layout (5/6 split with offset). Headline on left with gold italic accent. Body text on right with drop cap on first paragraph.",features:"Alternating image-text layout with offset columns. Images 3:4 aspect ratio with shadow, grayscale default. Text in 4 columns offset from edges. Numbered labels (01, 02) in gold. 'Read More' link buttons.",howItWorks:"Dark section with inverted palette. Grid of cards with 1px gap simulated borders. Each card has numbered step label, title, and description. Hover effect darkens background.",benefits:"Dark section with horizontal line dividers above each benefit (hover turns gold). 3-column grid. Section header split across columns.",pricing:"Minimalist cards with top border only. Featured tier has 4px gold top border and 'Most Popular' badge. Subtle shadows that deepen on hover. Check mark list with gold icons.",testimonials:"Two-column layout (content/testimonials). Each testimonial has left border (turns gold on hover), 5 gold stars, large italic serif quote, small grayscale avatar (color on hover), author name (gold on hover).",faq:"Left column: section title. Right column: accordion with dividers. Question in italic serif. Plus icon in bordered square rotates to minus when open. Gold accent on open state.",blog:"3-column grid. Images 4:5 aspect, grayscale with shadow (deepens on hover). Metadata in tiny uppercase with decorative horizontal divider. Title turns gold on hover.",footer:"Dark background. Large CTA headline (gold italic accent) on left, email signup on right. Full footer navigation in 2x4 grid. Bottom bar with company name, copyright, social links. All links hover to gold."},content:`# Design Style: Luxury / Editorial

## Design Philosophy

**Core Principles**: Elegance through restraint, precision, and depth. This style emulates high-end fashion magazines (Vogue, Harper's Bazaar, Kinfolk) and luxury brand websites (Chanel, HermA"s, Aesop). Success depends on **exquisite typography hierarchy**, **generous negative space**, **slow cinematic motion**, **intentional asymmetry**, and **layered depth through subtle shadows**. The design creates visual tension through grid-breaking layouts while maintaining perfect architectural balance.

**Vibe**: Sophisticated, Timeless, Expensive, Serene, Curated, Deliberate, Editorial, Tactile.

**The Secret**: Luxury isn't about adding decoration�?"it's about removing everything unnecessary and perfecting what remains. Every element must feel intentional and considered. Slow down all motion to cinematic speeds (1500-2000ms for images). Add more space than feels comfortable. Use asymmetry to create visual interest. Layer depth through subtle shadows (never harsh drops) and inner borders. The design should feel like expensive paper that you want to touch.

## Design Token System (The DNA)

### Colors (Sophisticated Monochrome)

**Primary Palette:**
- **Background**: \`#F9F8F6\` (Warm Alabaster) �?" Not pure white (#FFFFFF). This off-white feels like expensive paper or linen. The warm undertone is critical.
- **Foreground**: \`#1A1A1A\` (Rich Charcoal) �?" Not pure black (#000000). Softer, more sophisticated. Used for primary text and sharp borders.
- **Muted Background**: \`#EBE5DE\` (Pale Taupe) �?" For subtle surface elevation, disabled states, or alternate backgrounds.
- **Muted Foreground**: \`#6C6863\` (Warm Grey) �?" For secondary text, captions, metadata. Maintains warmth of the palette.
- **Accent**: \`#D4AF37\` (Metallic Gold) �?" Use sparingly. For hover states, underlines, focus indicators, small decorative elements. Never use gold for large areas.
- **Accent Foreground**: \`#FFFFFF\` (Pure White) �?" Only used on top of dark backgrounds or gold elements.

**Layering Strategy:**
- Use opacity for borders and dividers: \`#1A1A1A\` at 10-20% opacity creates subtle separation
- Dark sections use inverted palette: \`#1A1A1A\` background with \`#F9F8F6\` text and \`#EBE5DE\` muted text at 60-80% opacity
- Never use pure black or pure white for text�?"always use the charcoal and alabaster values

### Typography (The Most Critical Element)

**Font Pairing:**
- **Heading Font**: "Playfair Display" (High-contrast serif) �?" Elegant, editorial, with distinctive high-contrast strokes. Use for headlines, large quotes, and emphasis.
- **Body Font**: "Inter" (Humanist sans-serif) �?" Clean, modern, highly legible. Use for body text, labels, UI elements.

**Type Scale & Hierarchy:**
- **Hero Headlines**: \`text-6xl\` to \`text-9xl\` (4rem to 8rem+) �?" Massive, dramatic. Use \`leading-[0.9]\` for tight, compressed vertical rhythm.
- **Section Headlines**: \`text-5xl\` to \`text-7xl\` (3rem to 4.5rem) �?" Still large, commanding attention.
- **Subsection Titles**: \`text-3xl\` to \`text-4xl\` (1.875rem to 2.25rem) �?" For card titles, feature headings.
- **Body Text**: \`text-base\` to \`text-lg\` (1rem to 1.125rem) �?" Comfortable reading size with \`leading-relaxed\` (1.625).
- **Overlines/Labels**: \`text-xs\` (0.75rem) �?" Always uppercase with wide tracking.
- **Micro-text**: \`text-[10px]\` �?" For metadata, copyright, tiny labels.

**Font Weight Distribution:**
- Playfair: Regular (400) for most headlines, Light (300) for specific contrast, Italic (400) for emphasis within headlines
- Inter: Medium (500) for buttons/links, Regular (400) for body, Light (300) sparingly

**Letter Spacing (Critical for Luxury Feel):**
- **Uppercase Labels**: \`tracking-[0.25em]\` to \`tracking-[0.3em]\` �?" Wide tracking creates elegance and readability
- **Buttons**: \`tracking-[0.2em]\` �?" Slightly less than labels but still generous
- **Headlines**: \`tracking-tight\` or default �?" Large serif headlines need tighter tracking
- **Body Text**: Default tracking �?" Never adjust body text spacing

**Line Height Strategy:**
- **Headlines**: \`leading-[0.9]\` to \`leading-tight\` (0.9 to 1.25) �?" Tight creates drama
- **Body Text**: \`leading-relaxed\` (1.625) �?" Generous for readability
- **Small Text**: \`leading-relaxed\` to default �?" Maintains breathing room

### Radius & Borders (Architectural Precision)

**Border Radius:**
- **Everything**: \`0px\` �?" Strictly rectangular. No rounded corners anywhere. This creates architectural precision and editorial sharpness.

**Border Treatment:**
- **Width**: Always \`1px\` �?" Thin, precise, deliberate
- **Color**: \`#1A1A1A\` at full opacity for strong borders, 10-20% opacity for subtle dividers
- **Style**: Single borders (top, bottom, left, right) rather than full boxes. Common pattern: \`border-t\` only
- **Dividers**: Use horizontal lines (\`h-px\`) or vertical lines (\`w-px\`) as decorative elements with background color

### Shadows & Effects (Subtle Layered Depth)

**Shadows:**
- **Philosophy**: Use extremely subtle, soft shadows to create depth and elevation�?"never harsh or prominent
- **Hero Image**: \`shadow-[0_8px_32px_rgba(0,0,0,0.12)]\` �?" Medium shadow for primary focal point
- **Feature Images**: \`shadow-[0_4px_24px_rgba(0,0,0,0.08)]\` �?" Light shadow with subtle inner border
- **Blog Images**: \`shadow-[0_4px_20px_rgba(0,0,0,0.06)]\` deepens to \`shadow-[0_8px_32px_rgba(0,0,0,0.12)]\` on hover
- **Cards**: \`shadow-[0_2px_8px_rgba(0,0,0,0.02)]\` deepens to \`shadow-[0_8px_24px_rgba(0,0,0,0.06)]\` on hover
- **Primary Buttons**: \`shadow-[0_4px_16px_rgba(0,0,0,0.15)]\` deepens to \`shadow-[0_8px_24px_rgba(0,0,0,0.25)]\` on hover
- **Inner Borders**: Use \`shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04-0.08)]\` for subtle framing on images

**Texture & Grain:**
- **Paper Noise**: Subtle SVG noise texture overlay across entire page at 2% opacity to mimic expensive paper grain
- **Implementation**: Fixed position overlay with SVG fractal noise filter, pointer-events disabled, z-index 50
- **Purpose**: Adds tactile quality without being visible at first glance�?"creates "expensive paper" feel

**Image Treatment:**
- **Default State**: Grayscale filter (\`grayscale\`) �?" Creates monochromatic editorial look
- **Hover State**: Full color (\`grayscale-0\`) �?" Slow transition reveals color as reward
- **Transition**: \`duration-[1500ms]\` to \`duration-[2000ms]\` �?" Ultra-slow, cinematic reveal
- **Transform**: Subtle scale on hover (\`group-hover:scale-105\`) combined with color transition
- **Shadow Evolution**: Images gain deeper shadows on hover to enhance lift effect
- **Group Context**: Use \`group\` utility on parent for coordinated hover effects

### Grid & Vertical Lines (Structural Framework)

**Visible Grid System:**
- **4 Vertical Gridlines**: Fixed position lines spanning full viewport height, positioned at column boundaries
- **Implementation**: \`w-px\` divs with \`bg-[#1A1A1A]/20\`, fixed position, pointer-events disabled
- **Purpose**: Creates visible editorial grid structure, adds architectural quality
- **Spacing**: Aligned with 12-column layout breakpoints, typically at container edges and middle thirds

**Layout Grid:**
- **Columns**: 12-column grid system
- **Max Width**: 1600px for content container
- **Padding**: \`px-8\` mobile, \`px-16\` desktop �?" Generous horizontal breathing room
- **Asymmetry**: Use offset column starts (\`col-start-2\`, \`col-start-6\`) to create visual interest

## Component Styling Principles

### Buttons (Minimalist with Luxury Details)

**Visual Structure:**
- **Shape**: Rectangular, 0px border-radius, precise edges
- **Height**: \`h-12\` default (48px), \`h-14\` large (56px), \`h-10\` small (40px)
- **Padding**: Generous horizontal (\`px-8\` to \`px-10\`)
- **Typography**: Uppercase, \`text-xs\`, \`tracking-[0.2em]\`, medium weight

**Primary Button:**
- **Default**: Dark background (\`bg-[#1A1A1A]\`), white text
- **Hover Animation**: Gold layer (\`bg-[#D4AF37]\`) slides in from left using transform
  - Initial state: \`translate-x-[-100%]\` (off-screen left)
  - Hover state: \`translate-x-0\` (covers button)
  - Duration: \`duration-500\` with custom easing \`cubic-bezier(0.25, 0.46, 0.45, 0.94)\`
  - Text stays white and appears above gold layer using z-index
- **Structure**: Requires internal \`<span>\` for gold overlay and another for content (z-10)

**Secondary Button:**
- **Default**: Transparent background, thin border (\`border border-[#1A1A1A]\`), dark text
- **Hover**: Background fills to dark (\`bg-[#1A1A1A]\`), text inverts to white
- **Transition**: Smooth \`duration-500\` for elegant fill

**Link Button:**
- **Style**: Text with underline on hover, no background or border
- **Color**: Dark text, gold on hover optional

### Cards & Containers (Defined by Lines)

**Visual Approach:**
- **Background**: Transparent or subtle (\`bg-transparent\`)
- **Definition**: Single top border (\`border-t\`) rather than full box
- **Border**: \`border-[#1A1A1A]\` at 1px width
- **Padding**: Generous \`p-8\` mobile, \`p-12\` desktop
- **Hover**: Subtle background color shift (\`hover:bg-[#F9F8F6]/50\`) �?" barely visible

**Featured Cards:**
- Use thicker top border (\`border-t-4\`) with gold color (\`border-t-[#D4AF37]\`) to indicate importance
- Pricing tier highlighting, special features

**Image Cards:**
- Image in grayscale with slow color reveal on hover
- Use specific aspect ratios: \`aspect-[3/4]\` for features, \`aspect-[4/5]\` for blog posts
- Combine image scale with parent card hover state using \`group\` utility

### Inputs (Underline Only)

**Visual Style:**
- **Border**: Bottom border only (\`border-b\`), no other borders
- **Background**: Transparent (\`bg-transparent\`)
- **Border Color**: \`#1A1A1A\` default, \`#D4AF37\` on focus
- **Height**: \`h-12\` for consistency with buttons
- **Padding**: Minimal horizontal (\`px-0\`), vertical (\`py-2\`)

**Typography:**
- **Input Text**: Inter font, \`text-sm\`, dark color
- **Placeholder**: Playfair Display font, italic, warm grey color (\`text-[#6C6863]\`)
- **Reasoning**: Italic serif placeholder creates elegant, editorial feel

**Focus State:**
- Border changes to gold (\`focus-visible:border-[#D4AF37]\`)
- No ring or glow effects �?" keep it minimal

### Interactive States (Slow & Deliberate)

**Hover Effects:**
- **Duration**: \`duration-500\` to \`duration-700\` for most interactions (text, backgrounds, borders)
- **Duration (Images)**: \`duration-[1500ms]\` to \`duration-[2000ms]\` for image transitions
- **Easing**: \`ease-out\` or custom \`cubic-bezier(0.25, 0.46, 0.45, 0.94)\` for smooth luxury feel
- **Color**: Gold accent (\`#D4AF37\`) appears subtly on hover (text, borders, underlines)
- **Transform**: Subtle scale (\`scale-105\`) or translate �?" never abrupt
- **Shadow Evolution**: Shadows deepen on hover for lift effect
- **Testimonials**: Left border changes to gold, padding increases, avatar gains color
- **FAQ**: Question text turns gold, icon square rotates 90A� and border turns gold

**Focus States:**
- Minimal focus rings: \`focus-visible:ring-1 focus-visible:ring-[#1A1A1A]\`
- Prefer border color change over visible rings
- Gold accent for focused inputs (\`focus-visible:border-[#D4AF37]\`)

**Disabled States:**
- Reduced opacity (\`opacity-50\`)
- Pointer events disabled
- No special color changes �?" muted appearance

**Micro-interactions:**
- **FAQ Accordion**: Icon rotates 90A�, border turns gold on open, content fades in with translateY animation
- **Testimonial Stars**: Scale up slightly on card hover (\`group-hover:scale-110\`)
- **Blog Cards**: Shadow deepens, image scales and gains color
- **Navigation Links**: Gold color on hover with 500ms transition
- **Button Animations**: Gold overlay slides from left on primary buttons, shadow deepens

## Layout Principles (Breaking Symmetry)

**Asymmetric Composition:**
- **Avoid 50/50 splits**: Use 7/5, 4/4/4, or 4 offset by 2 column starts instead
- **Bottom-left alignment**: Position primary content at bottom of container, aligned left
- **Offset grids**: Start content at column 2 or 6 instead of 1, leaving deliberate empty space

**Vertical Spacing (Generous Air):**
- **Section Padding**: \`py-24\` to \`py-32\` (6rem to 8rem) �?" Massive vertical space between sections
- **Component Padding**: \`p-8\` to \`p-12\` for cards and containers
- **Element Spacing**: Use \`gap-12\` or \`gap-16\` for component groups, not tight spacing
- **Breathing Room**: If it feels like too much space, it's probably correct for luxury design

**Section Alternation:**
- Alternate light (\`bg-[#F9F8F6]\`) and dark (\`bg-[#1A1A1A]\`) sections for rhythm
- Use top borders (\`border-t\`) to separate sections without color changes
- Dark sections use inverted color palette with muted text at 60-80% opacity

**Content Width:**
- Maximum container: \`max-w-[1600px]\`
- Centered with \`mx-auto\`
- Text columns: \`max-w-md\` to \`max-w-xl\` for comfortable reading

## The "Bold Factor" (Non-Genericness)

These signature elements make Luxury/Editorial instantly recognizable and must be present:

1. **Vertical Text Labels**: Use CSS \`writing-mode: vertical-rl\` for decorative side labels (e.g., "Editorial / Vol. 01"). Position absolutely on images, typically on left or right edges. Uppercase with wide tracking. Hidden on mobile, visible on desktop.

2. **Drop Caps**: Large initial letter for introductory paragraphs using \`float-left\`, Playfair Display font, 7xl size, tight line-height (0.8), with right margin (mr-3). Applied to first paragraph of Product Detail and Features intro. Creates classic editorial feel.

3. **Mixed Italic Headlines**: Within large headlines, alternate between regular and italic styling for specific words to create "spoken" cadence. Use gold color on italic words. Examples: "Curated *Excellence*", "The *Details*", "The *Process*". Headline splits across lines with specific words emphasized.

4. **Grayscale Image Transitions**: All images default to grayscale filter with ultra-slow (1500-2000ms) transition to full color on hover. Combines with subtle scale transform (\`group-hover:scale-105\`) and shadow deepening. Applied consistently to hero, features, blog, and testimonial avatars.

5. **Visible Grid Lines**: Fixed vertical lines spanning viewport height, aligned with 12-column grid boundaries, at low opacity (20%). Four lines total (edges and middle thirds). Creates architectural editorial magazine feel. Pointer-events disabled.

6. **Gold Sliding Animation**: Primary button hover reveals gold background (\`#D4AF37\`) sliding from left using \`translate-x\` transform. Requires layered span structure with z-index. Combined with shadow deepening from \`shadow-[0_4px_16px]\` to \`shadow-[0_8px_24px]\`.

7. **Decorative Horizontal Lines**: Short horizontal lines (\`h-px w-8 md:w-12\`) used as decorative elements before labels (hero) or between metadata (blog dates). Deliberate, architectural spacing elements.

8. **Extreme Type Scale**: Massive headlines (\`text-5xl\` mobile to \`text-9xl\` desktop) combined with tiny uppercase labels (\`text-[10px]\` to \`text-xs\`) creates dramatic hierarchy essential to luxury feel. Responsive scaling maintains proportions.

9. **Layered Shadows**: Subtle shadows create depth without being obvious. Images have box shadows that deepen on hover. Inner borders (\`inset\` shadows) frame images. Cards lift with shadow evolution. Never harsh�?"always soft and refined.

10. **Testimonial Interactions**: Left border animation (changes to gold and increases padding on hover), grayscale avatar transitions to color, author name turns gold, stars scale up. Multi-layered coordinated effect.

## Anti-Patterns (What to Avoid)

These mistakes will break the luxury aesthetic:

1. **DO NOT use rounded corners** �?" Everything must be perfectly rectangular with 0px border-radius
2. **DO NOT use harsh shadows** �?" Only use extremely subtle shadows with low opacity rgba values. Depth comes from layering, not prominent drops.
3. **DO NOT use pure black (#000000) or pure white (#FFFFFF)** �?" Use charcoal (#1A1A1A) and alabaster (#F9F8F6)
4. **DO NOT use fast animations** �?" Minimum 500ms for interactions, 1500-2000ms for images. Luxury is deliberate and slow.
5. **DO NOT use vibrant colors** �?" Stick to monochromatic palette with gold (#D4AF37) as only accent
6. **DO NOT center everything** �?" Use asymmetry, offset columns, bottom-left alignment. Break the grid intentionally.
7. **DO NOT overcrowd spacing** �?" More space is better. If it feels too airy, you're on the right track. Mobile: py-20, Desktop: py-32.
8. **DO NOT use decorative fonts** �?" Only Playfair Display (serif) and Inter (sans-serif). No script or display fonts.
9. **DO NOT use icons prominently** �?" If needed, use lucide-react with thin strokes (1-2px), sparingly. Icons are functional, not decorative.
10. **DO NOT make gold dominant** �?" Gold is an accent for hover/focus states and specific emphasis, not a primary color
11. **DO NOT use small images** �?" Images should be large and prominent, portrait aspect ratios (3:4, 4:5) with shadows and inner borders
12. **DO NOT use tight tracking on body text** �?" Only uppercase labels get wide tracking (0.2-0.3em). Body text uses default tracking.
13. **DO NOT skip the grayscale filter** �?" All images must default to grayscale. Color is the reward on hover.
14. **DO NOT use generic mobile layouts** �?" Maintain the core aesthetic on mobile with proper scaling, not generic stacking

## Animation & Motion (Cinematic Timing)

**Philosophy:** All motion should feel deliberate, slow, and expensive. Nothing snaps or jumps. Think of camera movements in luxury fashion videos�?"smooth, gradual, cinematic.

**Timing:**
- **Button Interactions**: \`duration-500\` (500ms)
- **Color Transitions**: \`duration-700\` (700ms)
- **Image Effects**: \`duration-[1500ms]\` to \`duration-[2000ms]\` (1500-2000ms)
- **Background Transitions**: \`duration-700\` (700ms)

**Easing Functions:**
- **Default**: \`ease-out\` for most interactions
- **Custom**: \`cubic-bezier(0.25, 0.46, 0.45, 0.94)\` for smooth luxury feel (use in Tailwind with arbitrary values)
- **Never**: \`ease-in-out\` or \`ease-in\` �?" These feel too mechanical

**Transition Properties:**
- Combine multiple properties: \`transition-all\` or specific \`transition-[colors,transform]\`
- Image transforms: Combine \`scale\` (1 to 1.05) with \`grayscale\` (1 to 0) in same transition
- Button fills: Use transform on absolute positioned overlay rather than background color change

**Hover Effects:**
- Delay feels intentional �?" user must pause on element for effect to complete
- Multiple effects layer together (scale + color + grayscale) for richness
- Text color changes are instant or faster (300ms) while backgrounds are slower

## Accessibility Considerations

**Contrast:**
- Charcoal (#1A1A1A) on Alabaster (#F9F8F6): 12.6:1 �?" Excellent (AAA)
- Warm Grey (#6C6863) on Alabaster: 4.8:1 �?" Good for secondary text (AA)
- Gold (#D4AF37) on Charcoal: 5.2:1 �?" Sufficient for accents (AA)
- White on Charcoal: 14.5:1 �?" Excellent (AAA)

**Focus Indicators:**
- Use \`focus-visible:ring-1\` or \`focus-visible:border-[color]\` for keyboard navigation
- Gold accent on focus makes interactive elements clear
- Never remove focus indicators �?" just make them elegant

**Motion Preferences:**
- Respect \`prefers-reduced-motion\` for users with vestibular disorders
- Reduce animation durations to 0ms or use simpler transitions
- Keep color changes but remove transforms and scales

**Typography:**
- Large body text size (16-18px base) ensures readability
- High contrast ratio for primary text
- Generous line-height (1.625) improves readability
- Avoid justified text �?" use left alignment

**Interactive Areas:**
- Buttons have minimum 48px height (h-12) for touch targets
- Adequate padding creates larger clickable areas
- Spacing between interactive elements prevents mis-taps

## Implementation Notes

**Tech Stack:**
- Tailwind CSS v4 for all styling with custom color values
- Google Fonts for "Playfair Display" and "Inter"
- Lucide React for icons (if needed, use sparingly with thin stroke-width)
- Custom CSS for noise texture (SVG data URI) and vertical writing mode

**Responsive Strategy:**
- **Mobile (< 768px)**:
  - Stack all columns vertically
  - Reduce padding: \`px-8\`, \`py-20\` (instead of px-16, py-32)
  - Scale down typography: \`text-4xl\` headlines (instead of text-6xl), \`text-xl\` quotes (instead of text-3xl)
  - Reduce gaps: \`gap-8\`, \`gap-12\` (instead of gap-12, gap-24)
  - Stats: 2 columns, smaller text (text-3xl instead of text-5xl)
  - Hero: Smaller type scale \`text-5xl\` (instead of text-9xl), smaller line and decorative elements
  - Testimonials: Smaller left padding \`pl-6\` (instead of pl-8)
  - Footer CTA: Stack email input and button vertically with \`flex-col\` on small screens
  - Maintain core aesthetic: grayscale images, gold accents, slow animations

- **Tablet (768px - 1024px)**:
  - Begin introducing grid layouts (2-3 columns)
  - Medium padding: \`px-8 md:px-16\`, \`py-20 md:py-32\`
  - Typography scales up: \`text-5xl md:text-6xl\`
  - Complex layouts still stack (testimonials, FAQ)

- **Desktop (> 1024px)**:
  - Full 12-column asymmetric grid with offset columns
  - Maximum padding and spacing
  - Visible vertical gridlines (4 lines at column boundaries)
  - Vertical writing mode text visible
  - Full typographic scale (text-9xl for hero)

**Performance:**
- Use CSS transforms (translate, scale) for animations �?" GPU accelerated
- Grayscale filter is performant in modern browsers
- Fixed gridlines and noise overlay use minimal resources
- Shadows use rgba with low opacity for minimal render cost

**Code Organization:**
- Extract color values to config/constants for consistency
- Create button component with variant system (primary/secondary/ghost/link) and shadow on primary
- Create card component with border-top pattern and shadow evolution built in
- Create input component with underline-only styling and italic placeholder
- Add fadeIn keyframe animation for FAQ accordion content`},

===== STYLE BLOCK: material-design (offset 691753 to 716634) =====
"material-design":{id:"material-design",name:"Material",mode:"light",fontType:"sans-serif",description:"Playful, dynamic color extraction, pill-shaped buttons, and distinct elevation states. Based on Google's Material Design 3 with enhanced depth and micro-interactions.",layoutIdeas:{hero:"Large rounded container (48px radius) with decorative organic blur shapes, split layout with abstract geometric shapes on desktop, centered on mobile",stats:"Grid of rounded cards (24px radius) with tonal backgrounds, hover effects with shadow elevation, centered numeric values with primary color accent",productDetail:"Two-column split layout with text content and abstract shape visualization, generous padding, shadow-inner on image container",features:"Card grid with tonal surface backgrounds, icon containers with secondary color, hover scale and shadow effects, generous padding",blog:"Card grid with image aspect ratio 3:2, image zoom on hover, tonal surface backgrounds, uppercase meta text with primary color",howItWorks:"Numbered circular badges with glow effects on hover above rounded content cards, vertical stepper layout with shadow transitions",benefits:"Full-width colored container with radial gradient overlays and blur shapes, nested glass-morphism cards with border, backdrop blur, and hover effects",testimonials:"Card grid on tonal surface container background, avatar + content layout, star ratings in primary color, hover shadow elevation",pricing:"Card grid with elevated center card (-translate-y-4), ring highlight on featured tier, pill-shaped CTA badge, list items with checkmarks and hover translate",faq:"Simple stacked rounded containers on muted background with hover state transitions, single-column centered layout",finalCTA:"Full-width colored container with multiple blur shapes and radial gradients, centered email input with pill-shaped button",footer:"Minimal with top border, horizontal flex layout with links and hover color transitions"},content:`# Design Style: Material You (Material Design 3)

## Design Philosophy

**Core Principles**: Personal, adaptive, and spirited. Material You (MD3) represents a shift from Material Design 2's rigid "paper and ink" metaphor to a more organic, expressive system. The design extracts color palettes from seed colors (simulating the wallpaper-based personalization), emphasizes tonal surfaces over stark whites, and uses organic shapes with soft curves.

**Vibe**: Friendly, soft, rounded, colorful, and personal. The aesthetic feels modern yet approachable, with generous use of color through tonal surfaces rather than just accent highlights. Movement is smooth and confident, never jarring. Every interaction feels tactile and responsive, with micro-animations that provide satisfying feedback.

**Enhanced Implementation Details**:
This implementation goes beyond the baseline Material Design 3 specifications by incorporating:
- **Layered depth**: Multiple blur shapes, radial gradients, and shadow combinations create atmospheric backgrounds
- **Rich micro-interactions**: Hover states include scale transforms, shadow elevations, glow effects, and smooth color transitions
- **Asymmetric elevation**: Featured cards (like pricing tiers) use vertical translation to create visual hierarchy
- **Progressive disclosure**: Elements reveal depth on interaction through shadow transitions and background opacity changes
- **Tactile feedback**: All interactive elements include active:scale-95 for press feedback, enhancing the physical feel

**Key Differentiators from MD2**:
- Tonal surface system replaces pure white backgrounds
- Pill-shaped buttons replace rounded rectangles
- Organic shapes and blur effects replace flat geometric patterns
- State layers (opacity overlays) replace solid color changes
- Multi-layered atmospheric effects create rich visual depth
- Micro-interactions on every interactive element enhance perceived quality

## Design Token System (The DNA)

### Colors (Light Mode)

Material You uses a sophisticated tonal palette derived from a seed color. For this implementation, use a **Purple/Violet seed** (#6750A4).

**Core Palette Structure**:
- **Background (Surface)**: \`#FFFBFE\` - Slightly warm off-white, not pure white
- **Foreground (On Surface)**: \`#1C1B1F\` - Near-black with slight warmth
- **Primary**: \`#6750A4\` - Rich purple (seed color)
- **On Primary**: \`#FFFFFF\` - Pure white for text on primary
- **Secondary Container**: \`#E8DEF8\` - Light lavender tint
- **On Secondary Container**: \`#1D192B\` - Dark text for secondary surfaces
- **Tertiary**: \`#7D5260\` - Complementary mauve/dusty rose
- **Surface Container**: \`#F3EDF7\` - Subtle tinted surface, one step darker than background
- **Surface Container Low (Muted)**: \`#E7E0EC\` - For inputs and recessed surfaces
- **Outline (Border)**: \`#79747E\` - Medium gray for borders
- **On Surface Variant**: \`#49454F\` - For secondary text and icons

**Color Relationship Rules**:
- Use surface tones to create depth hierarchy: Background �+' Surface Container �+' Surface Container Low
- Primary color should appear in CTAs, focus states, and key interactive elements
- Secondary Container is for pills, chips, and less prominent containers
- Tertiary is for accent elements and FABs (Floating Action Buttons)
- Never use pure white (#FFFFFF) for backgrounds - always use the tinted Surface color
- On colored backgrounds (primary/tertiary), use transparent white/black overlays for states

**Opacity Patterns for State Layers**:
- Hover on solid colors: 90% of base color (\`bg-md-primary/90\`)
- Active/pressed on solid colors: 80% of base color (\`bg-md-primary/80\`)
- Hover on transparent surfaces: 10% of primary (\`bg-md-primary/10\`)
- Focus on transparent surfaces: 5% of primary (\`bg-md-primary/5\`)
- Subtle overlay effects: 20% opacity with backdrop-blur

### Typography

**Font Family**: **Roboto** (Google Fonts) - The canonical Material Design typeface
- Load weights: 400 (Regular), 500 (Medium), 700 (Bold)
- Use Medium (500) as default for headings to maintain the friendly, approachable feel
- Body text uses Regular (400)

**Type Scale** (Material Design 3 scale):
- **Display Large**: 3.5rem / 56px (Hero headlines)
- **Headline Large**: 3rem / 48px (Section titles)
- **Headline Medium**: 2rem / 32px (Subsection titles)
- **Title Large**: 1.5rem / 24px (Card titles)
- **Body Large**: 1.25rem / 20px (Lead paragraphs)
- **Body Medium**: 1rem / 16px (Standard body text)
- **Label Medium**: 0.875rem / 14px (Button text)
- **Label Small**: 0.75rem / 12px (Captions, metadata)

**Letter Spacing**:
- Headings: Normal to tight (0 to -0.01em)
- Body text: Normal (0)
- Labels/buttons: Slightly wide (0.01em) for Medium weight at small sizes

**Line Height**:
- Display/Headlines: 1.2 to 1.3 (tight for impact)
- Body text: 1.5 to 1.6 (relaxed for readability)
- Compact UI elements: 1.4

### Radius & Borders

Material You uses **organic, generous rounding** to create a friendly aesthetic.

**Radius Values**:
- **Extra Small**: \`8px\` - Minimal UI elements, chips
- **Small**: \`12px\` - Small cards, compact elements
- **Medium**: \`16px\` - Default card radius
- **Large**: \`24px\` - Prominent cards, containers
- **Extra Large**: \`28px\` - Dialogs, sheets, large surfaces
- **Extra Extra Large**: \`32px\` to \`48px\` - Hero sections, major containers
- **Full (Pills)**: \`9999px\` or \`rounded-full\` - All buttons, chips, badges, FABs

**When to Use Each**:
- Buttons, chips, badges: Always \`full\` (pill-shaped)
- Standard cards: \`24px\` (Large)
- Feature cards, FAQ items: \`24px\` (Large)
- Hero containers, major sections: \`48px\` (Extra Extra Large)
- Nested content cards: \`32px\`
- Input fields: Top corners \`12px\`, bottom corners \`0px\` (Material 3 filled text field style)

**Borders**:
- Use sparingly - tonal surfaces are preferred over borders
- When needed, use \`#79747E\` (Outline) color
- Thickness: 1px standard, 2px for focus states (bottom border on inputs)
- On colored backgrounds, use \`white/10\` or \`white/20\` for subtle borders

### Shadows & Effects

Material You uses **elevation** through subtle shadows combined with tonal surfaces, not dramatic drop shadows. This implementation enhances the baseline with progressive shadow transitions.

**Shadow Philosophy**:
- **Elevation 0** (Default): No shadow or \`shadow-sm\` - use tonal surface difference for depth
- **Elevation 1**: \`shadow-sm\` - Subtle lift for cards at rest (default state for most cards)
- **Elevation 2**: \`shadow-md\` - Hover state for interactive cards, default for important containers
- **Elevation 3**: \`shadow-lg\` to \`shadow-xl\` - FABs, major sections, raised buttons on hover
- **Elevation 4+**: Reserved for modals, dialogs (not common in base design)

**Enhanced Shadow Patterns**:
- All interactive cards transition from \`shadow-sm\` to \`shadow-md\` on hover
- Important sections (Benefits, Final CTA) start at \`shadow-lg\`
- Combined with scale transforms (\`hover:scale-[1.02]\`) for depth enhancement
- Shadow transitions use 300ms duration for smooth, confident movement

**Shadow Composition**:
- Soft, diffuse shadows (large blur, minimal spread)
- Shadow colors should be near-black with low opacity (5-15%)
- Combine with tonal surface colors for best effect
- Layer shadows with background blur shapes for atmospheric richness

**Blur Effects** (Signature Technique):
- Large organic shapes: \`blur-3xl\` (64px+)
- Background decorative elements: Colored circles/shapes at 10-30% opacity with heavy blur
- Atmospheric effect: Multiple overlapping blurred shapes with radial gradients
- Glass-morphism cards: \`backdrop-blur-sm\` with \`bg-white/10\` to \`bg-white/15\` and borders at \`border-white/10\` to \`border-white/20\`
- Hero sections: Multiple blur shapes positioned off-canvas with transforms

**Glow/Aura Effects**:
- Use radial gradients with transparency for ambient light
- Color: Primary, secondary, or tertiary at 10-30% opacity
- Position: Behind hero content, in major sections (Benefits, Final CTA), or on hover states
- Animated glow: \`opacity-0 group-hover:opacity-30\` for progressive disclosure
- Example: Numbered badges in How It Works section have hidden blur that reveals on hover

### Textures & Patterns

**Organic Decorative Shapes**:
- Large rounded rectangles (\`rounded-[100px]\`) with one corner less rounded (\`rounded-tr-[20px]\`)
- Perfect circles (\`rounded-full\`)
- Layered with \`mix-blend-multiply\` for color richness
- Use primary, secondary, and tertiary colors at 80-90% opacity
- Apply \`blur-3xl\` for soft, atmospheric quality
- Position partially off-canvas (using negative translate values)

**Background Treatment**:
- Never use solid white - always use Surface color (#FFFBFE)
- Radial gradients for subtle color washes: \`bg-[radial-gradient(circle_at_top_right,_var(--color-md-secondary)_0%,_transparent_40%)]\`
- Opacity: 10-20% for background patterns

**Layering Strategy**:
1. Base surface (tinted off-white)
2. Decorative organic shapes (blurred, multiply blend)
3. Surface container (content backgrounds)
4. Content
5. Interactive elements with state layers

## Component Styling Principles

### Buttons

Material You buttons are **pill-shaped** and use a state layer system.

**Variants**:
1. **Filled (Primary)**:
   - Background: Primary color
   - Text: White
   - Shape: \`rounded-full\` (pill)
   - Shadow: None at rest, \`shadow-md\` on hover
   - State layer: \`bg-md-primary/90\` on hover, \`/80\` on active
   - Scale: \`active:scale-95\` for tactile feedback

2. **Tonal (Secondary)**:
   - Background: Secondary Container color
   - Text: On Secondary Container color
   - Shape: \`rounded-full\`
   - State layer: Similar to filled
   - Use for less prominent actions

3. **Outlined**:
   - Background: Transparent
   - Border: 1px Outline color
   - Text: Primary color
   - Shape: \`rounded-full\`
   - State layer: \`bg-md-primary/5\` on hover

4. **Text/Ghost**:
   - Background: Transparent
   - Text: Primary color
   - State layer: \`bg-md-primary/10\` on hover
   - Shape: \`rounded-full\`

5. **FAB (Floating Action Button)**:
   - Background: Tertiary color
   - Text: White
   - Shape: \`rounded-2xl\` (28px) for square FABs, \`rounded-full\` for circular
   - Shadow: \`shadow-md\` at rest, \`shadow-xl\` on hover
   - Size: 56x56px (h-14 w-14)

**Animation**:
- Transition: 300ms duration
- Easing: \`cubic-bezier(0.2, 0, 0, 1)\` - Material You's signature easing
- Scale on active: \`scale-95\` for press feedback
- Shadow should animate smoothly with same timing

**Sizing**:
- Small: \`h-9\` (36px)
- Default: \`h-10\` (40px)
- Large: \`h-12\` (48px)
- Horizontal padding: Generous (\`px-6\` to \`px-8\`)

### Cards/Containers

**Visual Treatment**:
- Background: Surface Container (\`#F3EDF7\`), never pure white
- Border radius: \`24px\` (Large) for standard cards
- Border: None by default - use tonal background for separation
- Shadow: \`shadow-sm\` at rest, \`shadow-md\` on hover
- Padding: Generous (\`p-6\` to \`p-8\`)

**State Transitions**:
- Hover: \`hover:bg-md-surface-variant/20\` or \`hover:shadow-md\`, combined with transforms
- Duration: 300ms with standard easing (\`transition-all duration-300\`)
- Scale: \`hover:scale-[1.02]\` for feature cards and interactive elements
- Shadow elevation: \`shadow-sm\` to \`shadow-md\` on hover for all interactive cards
- Group pattern: Use \`group\` class and \`group-hover:\` modifiers for coordinated animations

**Nested Cards**:
- Use even lighter backgrounds or transparent with borders
- Example: On colored container, use \`bg-white/10\` with \`border-white/10\`

**Special Containers**:
- Hero sections: Extra large radius (\`rounded-[48px]\`), surface container background
- Section backgrounds: Tonal fills with decorative blur shapes
- Glass-morphism effects: \`bg-white/10 backdrop-blur-sm border border-white/10\`

### Inputs (Material 3 Filled Text Field)

**Distinctive Style**:
- Top corners rounded (\`rounded-t-lg\` / 12px)
- Bottom corners square
- Bottom border: 2px solid Outline color
- Background: Muted (Surface Container Low) color
- Height: Tall (\`h-14\` / 56px)
- Focus state: Bottom border changes to Primary color

**Structure**:
\`\`\`
�"O�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?  �+? Rounded top
�",   Input     �",  �+? Muted background fill
�""�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"~  �+? Square bottom with 2px border
      �+`
  Focus: Primary color
\`\`\`

**State Handling**:
- Rest: \`border-md-border\` (bottom)
- Focus: \`border-md-primary\` (bottom)
- Transition: 200ms color transition
- Label: Placeholder uses \`text-md-on-background/50\`

### Interactive States

**State Layer System** (Key Material You Concept):
Instead of changing the base color, overlay a semi-transparent layer:

1. **Solid Color Elements** (buttons with bg):
   - Hover: Base color at 90% (\`bg-md-primary/90\`)
   - Active: Base color at 80% (\`bg-md-primary/80\`)

2. **Transparent Elements** (ghost buttons, text buttons):
   - Hover: Primary at 10% (\`bg-md-primary/10\`)
   - Active: Primary at 5% (\`bg-md-primary/5\`)

3. **Focus States**:
   - Ring: 2px Primary color with 2px offset
   - Additional: Can combine with hover state

4. **Disabled States**:
   - Opacity: 50% on entire element
   - Cursor: \`cursor-not-allowed\`
   - Pointer events: None

**Transition Timing**:
- Standard: \`transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]\`
- Fast interactions (clicks): \`duration-200\`
- Color transitions only: \`transition-colors duration-200\`

## Layout Principles

**Grid Usage**:
- Use CSS Grid for card layouts: \`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3\`
- Gap: Consistent spacing, typically \`gap-6\` (24px) or \`gap-8\` (32px)
- Container: Use \`.container\` with \`mx-auto\` for centered max-width layouts

**Spacing Rhythm**:
- Base unit: 4px (Tailwind default)
- Component internal padding: \`p-6\` (24px) to \`p-8\` (32px)
- Section padding: \`py-12\` (48px) to \`py-24\` (96px)
- Between sections: \`mb-12\` or \`mb-24\`
- Generous whitespace is encouraged - don't cram content

**Section Flow**:
- Alternate between tonal backgrounds and default background
- Hero in large rounded container with surface-container background
- Some sections on default background, others on surface-container
- Use full-width colored containers (primary/tertiary) sparingly for emphasis

**Responsive Behavior**:
- Border radius scales down on mobile (48px �+' 24px)
- Padding reduces proportionally
- Grid collapses gracefully to single column
- Text sizes scale down one step on mobile

## The "Bold Factor" (Non-Genericness)

These signature elements MUST be present to achieve authentic Material You aesthetic with enhanced visual richness:

1. **Organic Blur Shapes with Layering**:
   - Large circular or pill-shaped divs with heavy blur (\`blur-3xl\`)
   - Use primary, secondary, tertiary colors at 10-30% opacity
   - Layer multiple shapes in major sections (Hero, Benefits, Final CTA)
   - Combine with radial gradients for atmospheric depth
   - Position partially off-canvas with transforms (\`-translate-x-1/4\`, \`translate-y-1/3\`)
   - Creates atmospheric, dynamic backgrounds that feel alive

2. **Tonal Surface System with Shadow Progression**:
   - NEVER use pure white backgrounds
   - Layer surfaces: Background �+' Surface Container �+' Surface Container Low
   - Color difference is subtle but creates depth without heavy shadows
   - All cards use surface-container color by default
   - Progressive shadows: \`shadow-sm\` at rest, \`shadow-md\` on hover, \`shadow-lg\` for important sections

3. **Pill-Shaped Buttons with Active Feedback**:
   - ALL buttons must be \`rounded-full\` (except FABs which are rounded-2xl)
   - No rectangular or lightly rounded buttons
   - Active state: \`active:scale-95\` for tactile press feedback
   - This is the most instantly recognizable Material You characteristic

4. **Large Organic Border Radii**:
   - Hero sections and major containers use 32px to 48px radius
   - Regular cards use 24px radius
   - This isn't just "rounded corners" - it's architectural, shaping the entire layout
   - Creates a friendly, approachable feel vs. the rigid rectangles of MD2

5. **State Layer Interaction Model with Micro-Animations**:
   - Hover/press states use opacity overlays, not color shifts
   - Visible as \`bg-color/90\` or \`bg-color/10\` patterns
   - Smooth cubic-bezier easing: \`cubic-bezier(0.2, 0, 0, 1)\`
   - Enhanced with scale transforms, shadow elevations, and glow effects
   - Group interactions: Use \`group\` and \`group-hover:\` for coordinated animations

6. **Asymmetric Elevation** (Enhancement):
   - Featured pricing tier: \`md:-translate-y-4\` to lift above siblings
   - Creates visual hierarchy through vertical positioning
   - Combined with ring highlight (\`ring-2 ring-md-primary\`) for emphasis

7. **Rich Micro-Interactions** (Enhancement):
   - Blog cards: Image zoom on hover (\`group-hover:scale-105\`)
   - Feature cards: Hover scale on entire card (\`hover:scale-[1.02]\`)
   - How It Works badges: Glow effect reveals on hover
   - Pricing features: Translate-x on hover for list items
   - Every interactive element has smooth, satisfying feedback

## Anti-Patterns (What to Avoid)

**Don't:**
- �?O Use pure white (#FFFFFF) for backgrounds - breaks the tonal system
- �?O Use rectangular or slightly rounded buttons - must be pill-shaped
- �?O Use heavy drop shadows - MD3 prefers subtle elevation with tonal surfaces
- �?O Change button colors on hover - use state layers (opacity overlays) instead
- �?O Use sharp corners on major containers - generosity with border radius is key
- �?O Ignore the organic blur shapes - they're signature to the style
- �?O Use pure black text - use the On Surface color (#1C1B1F) with warmth
- �?O Flatten inputs - use the distinctive filled text field style with bottom border
- �?O Create harsh geometric patterns - shapes should feel organic, soft, flowing
- �?O Rely on borders for container separation - use tonal backgrounds instead

**Common Mistakes**:
- Making border radius too small (16px is minimum for cards, 24px+ is better)
- Forgetting to round top corners but square bottom corners on inputs
- Using hover color changes instead of state layers
- Over-using shadows when tonal surfaces would work better
- Not layering enough organic shapes in backgrounds
- Making the color palette too muted - MD3 is expressive and colorful
- Missing micro-interactions - every interactive element should have smooth feedback
- Forgetting the \`group\` pattern for coordinated hover effects
- Not using \`active:scale-95\` on clickable elements for tactile feedback
- Static cards without hover states - breaks the interactive, responsive feel

## Animation & Motion

**Easing Function**:
- Standard: \`cubic-bezier(0.2, 0, 0, 1)\` - Material You's signature easing
- This creates smooth, confident movement that feels neither robotic nor bouncy
- Also known as "Emphasized Decelerate" in Material specs

**Duration**:
- Micro-interactions (button hover): 200ms
- Standard transitions (cards, surfaces): 300ms
- Large surfaces (modals, sheets): 400-500ms
- Never exceed 500ms for UI transitions

**Transform Patterns**:
- Scale on press: \`active:scale-95\` for tactile feedback
- Hover lift: Can use subtle \`translate-y\` (1-2px) combined with shadow increase
- Entrance animations: Fade + slight scale or slide
- Exit animations: Faster than entrance (200ms vs 300ms)

**What Animates**:
- Background color (state layers)
- Shadow elevation
- Scale (on press)
- Opacity (for overlays, toasts)
- Transform (for FABs, special interactions)

**What Doesn't Animate**:
- Border radius (stays constant)
- Layout shifts (use fixed dimensions or smooth height transitions)
- Color hue shifts (only opacity changes for state layers)

## Accessibility Considerations

**Contrast Requirements**:
- Text on Surface background: 4.5:1 minimum (On Surface color: #1C1B1F)
- Text on Primary: AAA level (pure white #FFFFFF)
- Outline color for borders: 3:1 against surfaces
- Ensure tonal surface differences are visible (not just decorative)

**Focus States**:
- All interactive elements must have visible focus ring
- Use \`focus-visible:ring-2 focus-visible:ring-md-primary focus-visible:ring-offset-2\`
- Ring color: Primary
- Ring offset: 2px for separation from element

**Touch Targets**:
- Minimum: 44x44px (follows WCAG guidelines)
- Default button height: 40-48px (meets minimum)
- FABs: 56x56px (generous touch target)
- Add padding around small interactive elements if needed

**Motion Preferences**:
- Respect \`prefers-reduced-motion\` for users with vestibular disorders
- Reduce or remove scale transforms, translate animations
- Keep color transitions but remove movement
- Example: \`@media (prefers-reduced-motion: reduce) { * { animation: none; transition-duration: 0.01ms; } }\`

**Screen Reader Considerations**:
- Decorative organic shapes should have \`aria-hidden="true"\`
- Ensure color isn't the only indicator of state
- Icon-only buttons must have accessible labels
- Form inputs need associated labels (visible or aria-label)

---

## Implementation Checklist

To ensure full Material You compliance with enhanced depth and interactivity:

**Core Material You Elements**:
- [ ] Using Roboto font (400, 500, 700 weights)
- [ ] All buttons are \`rounded-full\` (pill-shaped)
- [ ] Background is #FFFBFE (not pure white)
- [ ] Cards use Surface Container (#F3EDF7) backgrounds
- [ ] Organic blur shapes present in hero/key sections
- [ ] State layers (opacity overlays) for hover/active states
- [ ] Cubic-bezier(0.2, 0, 0, 1) easing on transitions
- [ ] Large border radii on major containers (32-48px)
- [ ] Inputs use filled text field style (rounded top, border bottom)
- [ ] Focus rings on all interactive elements
- [ ] Generous spacing and padding throughout

**Enhanced Implementation**:
- [ ] Progressive shadow system: \`shadow-sm\` �+' \`shadow-md\` on hover
- [ ] Multiple blur shapes with radial gradients in major sections
- [ ] \`active:scale-95\` on all clickable elements for tactile feedback
- [ ] \`group\` pattern with coordinated hover animations
- [ ] Hover scale (\`hover:scale-[1.02]\`) on feature cards
- [ ] Image zoom on blog card hover (\`group-hover:scale-105\`)
- [ ] Asymmetric elevation on featured pricing tier (\`md:-translate-y-4\`)
- [ ] Glow effects that reveal on hover (How It Works badges)
- [ ] Glass-morphism cards in Benefits section with backdrop-blur
- [ ] Shadow-inner on Product Detail visualization container
- [ ] Header with border-bottom and backdrop-blur
- [ ] All transitions use 300ms duration minimum
- [ ] Hover states on FAQ items with color transitions
- [ ] Input focus states include ring for enhanced visibility`},

===== STYLE BLOCK: maximalism (offset 716634 to 750230) =====
maximalism:{id:"maximalism",name:"Maximalism",mode:"dark",fontType:"sans-serif",description:"Clashing patterns, dense layouts, oversaturated colors, intentional visual clutter. MORE IS MORE.",layoutIdeas:{hero:"Full-viewport explosion with overlapping elements, floating animated shapes (stars, sparkles, emoji), massive background typography bleeding off edges, stacked multi-color text shadows, and chaotic visual layers with pattern overlays.",stats:"Full-width chaotic mosaic grid (2x2 on mobile, 4 columns on desktop) with each stat in a different vibrant background color. Pattern dot overlays, rotated numbers with layered text shadows, and star decorations that rotate on hover.",productDetails:"Two-column layout with animated concentric spinning circles on left (visual chaos with floating icons at cardinal points). Right side features layered container with offset shadow layer, multi-shadow card, and bordered paragraphs alternating colors.",features:"3-column grid with alternating vertical offsets (staggered layout). Each card has colored icon container with rotation on hover, colored header backgrounds with transparency, and multi-layered hard shadows that intensify on hover.",blog:"3-column grid with middle card offset vertically. Overlapping card stack with dramatic hover lift effects, colored date badges, gradient image overlays, and scale/rotation transitions.",howItWorks:"3-step layout with horizontal connecting gradient line, numbered circles with different accent colors, cards offset vertically on alternating steps, and centered content.",benefits:"Two-column asymmetric layout with left column containing title/CTA and right column with stacked benefit cards. Each card has colored border, icon circle, and transforms on hover (translate + scale).",testimonials:"3-column grid with rotated cards (slight rotation at rest, straightens on hover), colored star ratings, bordered avatar images with accent colors, and vertical offset on middle column.",pricing:"3-column grid with center card elevated and scaled larger. Highlighted tier has top badge, glowing border shadow, and colored header. Check icons with accent colors for features list.",faq:"Stacked accordion items with vibrant colored borders (changes when open). Chevron icons that rotate 180deg on open. Open state reveals colored top border and patterned background with transparency.",footer:"Dense 5-column grid with logo column and 4 navigation columns. Gradient logo, colored section headings rotating through accent colors, and social icons with colored borders that fill on hover."},content:`# Design Style: Maximalism / Dopamine

## Design Philosophy

**Core Principle**: MORE IS MORE. Maximalism/Dopamine design rejects minimalist restraint in favor of sensory overload, visual abundance, and unapologetic excess. Every pixel should spark joy. Empty space is wasted space. Patterns clash, colors scream, and elements overlap with chaotic intention.

**Emotional Target**: Euphoric, playful, overwhelming, Y2K-meets-Gen-Z, hyperpop aesthetic, digital maximalism. Think Lisa Frank fever dream meets Nickelodeon slime era meets contemporary hyperpop album art. It should feel like eating a bag of Skittles while watching fireworks.

**The Guiding Question**: "Is this visually overwhelming in a joyful way?" If the answer is no, add more.

---

## Design Token System (The DNA)

### Color Palette (Dark Mode Foundation)

**Base Colors**:
\`\`\`
Background:    #0D0D1A    (Deep cosmic purple-black - the void that makes everything pop)
Foreground:    #FFFFFF    (Pure white - maximum contrast)
Muted:         #2D1B4E    (Dark purple - for semi-transparent containers)
Border Base:   #FF3AF2    (Hot magenta - default border color)
\`\`\`

**The Five Accent Colors** (This is critical - always have 5 distinct accents):
\`\`\`
1. Accent (Magenta):    #FF3AF2    (Hot pink/magenta - electric energy)
2. Secondary (Cyan):    #00F5D4    (Electric cyan/teal - digital glow)
3. Tertiary (Yellow):   #FFE600    (Screaming yellow - attention grabber)
4. Quaternary (Orange): #FF6B35    (Electric orange - warmth chaos)
5. Quinary (Purple):    #7B2FFF    (Vivid purple - mystical depth)
\`\`\`

**Color Usage Rules**:
- **Section Rotation**: Each major section cycles through the 5 accents as its primary color. Use modulo arithmetic (index % 5) to rotate systematically.
- **Repeated Elements**: In grids (stats, features, testimonials), rotate accent colors using the same modulo approach.
- **No Matching**: Borders should clash with backgrounds. If background is magenta, border might be yellow or cyan.
- **Contrast Ratios**: Despite chaos, maintain white (#FFFFFF) on dark (#0D0D1A) for all critical text = 19.5:1 contrast ratio (AAA).
- **Accent Text**: Only use accent colors for decorative text, labels, or non-critical content. Never body text.

### Typography System

**Font Stack**:
- **Headings**: "Outfit" (bold, geometric, 700-900 weight) or "Unbounded" (Google Fonts)
- **Body**: "DM Sans" (clean, readable in chaos, 400-700 weight)
- **Display/Accent**: "Bangers" or "Bungee" (comic energy, use sparingly for special callouts)

**Type Scale** (Aggressive sizing):
\`\`\`
Hero Headlines:     text-7xl to text-9xl  (72px-128px) - MASSIVE
Section Headings:   text-5xl to text-7xl  (48px-72px) - Bold presence
Subheadings:        text-2xl to text-3xl  (24px-30px) - Standout
Body Text:          text-lg to text-xl    (18px-20px) - Larger than typical
Small Text:         text-sm to text-base  (14px-16px) - Labels, meta
\`\`\`

**Type Styling Patterns**:
- **Weight Distribution**: Headlines = 800-900 weight, body = 400-500, labels = 700 bold
- **Letter Spacing**: Headlines get \`tracking-tight\` or \`tracking-tighter\`, labels get \`tracking-widest\`, body stays normal
- **Line Height**: Headlines = leading-none or leading-tight (0.9-1.1), body = leading-relaxed (1.625)
- **Text Transform**: Uppercase for headlines, labels, and buttons. Normal case for body text.
- **Mixed Weights**: Use varying weights within the same headline for emphasis (one word bold, another bolder)

**Text Shadow System** (CRITICAL - Always Use):
\`\`\`
Single Shadow:     text-shadow: 2px 2px 0px #7B2FFF
Double Shadow:     text-shadow: 2px 2px 0px #7B2FFF, 4px 4px 0px #FF3AF2
Triple Stack:      text-shadow: 2px 2px 0px #7B2FFF, 4px 4px 0px #FF3AF2, 6px 6px 0px #00F5D4
Mega Stack:        text-shadow: 4px 4px 0px #7B2FFF, 8px 8px 0px #FF3AF2, 12px 12px 0px #00F5D4
\`\`\`
- Pattern: 2px increments in offset, rotate through accent colors
- Headlines get triple or mega stack
- Subheadings get double shadow
- Card titles get single or double shadow

**Gradient Text**:
- Use on 20-30% of headlines for variety
- Pattern: \`background: linear-gradient(90deg, #FF3AF2, #00F5D4, #FFE600, #FF3AF2)\`
- Make background-size 200-300% and animate with gradient shift
- Apply with \`background-clip: text\` and \`-webkit-text-fill-color: transparent\`

### Border & Radius System

**Border Widths** (Go bold):
\`\`\`
Standard:   border-4  (4px - most common)
Heavy:      border-8  (8px - section dividers, featured elements)
Subtle:     border-2  (2px - inner dividers only)
\`\`\`

**Border Styles** (Mix deliberately):
- **Solid**: Default for most containers and cards
- **Dashed**: Use on 30% of borders for variety (\`border-dashed\`)
- **Dotted**: Rare, for small decorative elements
- **Double**: Occasional use for special containers (\`border-double\`)
- **Critical Rule**: Within a single section, use 2-3 different border styles intentionally

**Border Radius Values**:
\`\`\`
Buttons:        rounded-full     (9999px - pill shape)
Cards:          rounded-3xl      (24px - generous curves)
Containers:     rounded-2xl      (16px - moderate curves)
Sharp Accent:   rounded-none     (0px - use sparingly for contrast)
Mixed:          Use different radii on different corners for asymmetry
\`\`\`

**Border Color Strategy**:
- Primary: Accent color that clashes with background
- Never: Neutral or muted borders
- Technique: If background uses accent-1, border uses accent-2 or accent-3

### Shadow & Glow System (Multi-Layered)

**Glow Shadows** (Colored, soft, luminous):
\`\`\`
Base Glow:
  box-shadow: 0 0 20px rgba(255, 58, 242, 0.5),
              0 0 40px rgba(0, 245, 212, 0.3);

Large Glow:
  box-shadow: 0 0 40px rgba(255, 58, 242, 0.6),
              0 0 80px rgba(255, 230, 0, 0.4),
              0 0 120px rgba(123, 47, 255, 0.3);
\`\`\`
- Use on: Buttons, icons, featured elements
- Hover: Increase opacity by 0.1-0.2 and spread by 50%
- Combine 2-3 colors for richer glow

**Hard Shadows** (Offset, flat, stacked):
\`\`\`
Double Stack:
  box-shadow: 8px 8px 0 #FFE600,
              16px 16px 0 #FF3AF2;

Triple Stack:
  box-shadow: 12px 12px 0 #00F5D4,
              24px 24px 0 #FF3AF2,
              36px 36px 0 #FFE600;
\`\`\`
- Pattern: Each layer doubles the offset (8�+'16�+'24 or 12�+'24�+'36)
- Colors: Rotate through different accents per layer
- Use on: Cards, containers, prominent buttons
- Hover: Increase offsets by 2-4px to simulate lift

**Shadow Mixing**:
- Combine glow + hard shadows on hero elements
- Example: \`box-shadow: 0 0 30px rgba(255,58,242,0.6), 8px 8px 0 #FFE600, 16px 16px 0 #FF3AF2\`

### Texture & Pattern System (MANDATORY Layering)

**Pattern Types** (Always layer 2-3 minimum):

1. **Dot Grid**:
\`\`\`css
background-image: radial-gradient(circle, #FF3AF2 1px, transparent 1px);
background-size: 20px 20px;
\`\`\`
- Vary dot size (1px-2px) and spacing (20px-40px)
- Use different accent colors per section

2. **Diagonal Stripes**:
\`\`\`css
background-image: repeating-linear-gradient(
  45deg,
  transparent,
  transparent 10px,
  rgba(255, 230, 0, 0.08) 10px,
  rgba(255, 230, 0, 0.08) 20px
);
\`\`\`
- Keep opacity low (0.05-0.1) to avoid overwhelming
- Vary stripe width (10-20px) and angle (30deg-60deg)

3. **Checkerboard**:
\`\`\`css
background-image: conic-gradient(
  from 90deg at 1px 1px,
  transparent 90deg,
  rgba(0, 245, 212, 0.05) 0
);
background-size: 40px 40px;
\`\`\`
- Use subtle opacity (0.03-0.07)
- Vary grid size (30px-50px)

4. **Gradient Mesh** (Radial overlaps):
\`\`\`css
background:
  radial-gradient(ellipse at 20% 30%, rgba(255,58,242,0.15) 0%, transparent 50%),
  radial-gradient(ellipse at 80% 70%, rgba(0,245,212,0.15) 0%, transparent 50%),
  radial-gradient(ellipse at 50% 50%, rgba(123,47,255,0.1) 0%, transparent 60%);
\`\`\`
- Place ellipses at different positions
- Use 2-4 overlapping gradients
- Keep opacity low (0.1-0.2)

**Pattern Layering Strategy**:
- **Global Base**: 2 fixed patterns on entire page (dots + stripes)
- **Section Specific**: Each major section adds 1-2 unique patterns
- **Implementation**: Use pseudo-elements (::before, ::after) with \`pointer-events: none\`
- **Blend Modes**: Apply \`mix-blend-mode: overlay\` or \`screen\` on some layers for deeper integration
- **Opacity Range**: 0.05-0.3 per pattern (multiply for stacking)

---

## Component Styling Principles

### Buttons

**Primary Button** (Maximum Impact):
- Background: Gradient across 3 accents \`bg-gradient-to-r from-[#FF3AF2] via-[#7B2FFF] to-[#00F5D4]\`
- Border: \`border-4 border-[#FFE600]\` (clashing yellow)
- Radius: \`rounded-full\`
- Shadow: Combine glow + hard shadow
- Text: \`font-black uppercase tracking-widest\`
- Size: \`h-14 px-10\` (default), \`h-16 px-12\` (large)
- Hover: Scale to 110%, intensify shadow (increase opacity by 0.2), shift gradient position
- Active: Scale to 95%, reduce shadow
- Focus: Double ring \`ring-4 ring-[color-1] ring-offset-4 ring-offset-[color-2]\`

**Secondary Button** (Inverse treatment):
- Background: Transparent
- Border: \`border-4 border-dashed border-[accent-color]\`
- Hover: Fill with solid accent color, border becomes solid, scale to 105%
- Text maintains contrast throughout

**Outline Button** (Stacked shadow style):
- Background: Semi-transparent \`bg-max-muted/50\`
- Border: \`border-4 border-[accent]\`
- Shadow: Hard stacked shadow (8px/8px, 16px/16px)
- Hover: Translate by negative shadow offset, increase shadow depth
- Active: Translate to zero, remove shadow (pressed effect)

**Ghost Button** (Subtle but playful):
- Underline decoration with gradient
- Hover: Reveal background pattern or light fill
- Scale to 105% on hover

### Cards & Containers

**Base Card Structure**:
- Background: Semi-transparent \`bg-[#2D1B4E]/80\` with \`backdrop-blur-sm\`
- Border: \`border-4\` in accent color (rotate per card)
- Radius: \`rounded-3xl\` (24px)
- Shadow: Hard stacked shadow (8px/8px + 16px/16px in two colors)
- Padding: \`p-8\` to \`p-12\` (generous internal space)

**Asymmetry Techniques**:
- Use \`clip-path\` to cut one corner: \`polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)\`
- Rotate slightly: \`rotate-1\` or \`rotate-2\`
- Offset position: Apply negative margins \`-mt-4\` or \`-ml-2\`

**Card Hover States**:
- Rotate more: \`hover:rotate-2\` (increase from base rotation)
- Scale up: \`hover:scale-[1.02]\`
- Shadow shift: Increase shadow offset by 2-4px and add third color
- Transition: \`transition-all duration-300 ease-out\`

**Card Internal Structure**:
- Header: Border bottom \`border-b-4 border-dashed\` in different accent, background tint optional
- Content: Standard padding \`p-6\`
- Title: Text shadow, uppercase, font-black, text-2xl
- Description: Slightly muted text \`text-white/80\`

**Pattern Overlay on Cards**:
- Add pattern as background or ::before pseudo-element
- Keep opacity very low (0.1-0.2) so content remains readable
- Rotate pattern type per card for variety

### Form Inputs

**Input Fields**:
- Background: Semi-transparent \`bg-[#2D1B4E]/50\` with \`backdrop-blur-sm\`
- Border: \`border-4 border-[accent]\` - thick and colored
- Radius: \`rounded-full\` for single-line inputs, \`rounded-2xl\` for textareas
- Padding: \`px-6 py-4\` - generous for comfort
- Text: \`text-lg font-bold text-white\`
- Placeholder: \`text-white/40\` - visible but subtle

**Focus States** (Double Ring System):
- Border color shifts: \`focus:border-[accent-2]\` (different from default)
- Inner glow: \`focus:shadow-[0_0_20px_rgba(color,0.5)]\`
- Ring system: \`focus:ring-4 focus:ring-[color-1]/30 focus:ring-offset-2 focus:ring-offset-[color-2]\`
- Background intensifies: \`focus:bg-[#2D1B4E]\` (less transparent)
- Transition: \`transition-all duration-300\`

**Labels**:
- Position: Floating above input or inline
- Style: Display font, accent color, small rotation \`rotate-1\`
- Animation: Can pulse or glow on focus

### Interactive States (Universal Patterns)

**Hover**:
- Always combine 2-3 changes: scale + color + shadow
- Scale: 102%-110% depending on element size
- Color: Shift border/background to different accent
- Shadow: Increase intensity (higher opacity, larger spread, or more layers)
- Duration: 300ms for most, 200ms for small elements

**Active/Pressed**:
- Scale down: 95%-98%
- Shadow reduction: Remove layers or reduce offset
- Slight translate: Move in direction of shadow to simulate press

**Focus** (Accessibility Critical):
- Double ring system always: \`ring-4 ring-[color-1] ring-offset-4 ring-offset-[color-2]\`
- Use contrasting accent colors for rings
- Ensure total ring thickness (ring + offset) is 8px minimum
- Never rely only on color - include outline style change too
- Consider \`outline-dashed\` for extra visibility

**Disabled**:
- Opacity: 50%
- Cursor: \`cursor-not-allowed\`
- Remove all hover/active states
- Maintain border visibility but reduce color saturation

---

## Layout Principles

**Spacing System** (Generous but dense):
- **Base Unit**: 4px (Tailwind's default)
- **Section Padding**: \`py-24\` to \`py-32\` (96px-128px vertical) - generous breathing room between sections
- **Container Padding**: \`px-6\` (mobile) to \`px-8\` (desktop) - consistent horizontal margins
- **Internal Spacing**: \`gap-6\` to \`gap-12\` in grids - varies deliberately
- **Card Padding**: \`p-8\` to \`p-12\` - comfortable internal space
- **Element Gaps**: \`space-y-4\` to \`space-y-6\` for stacked content

**Dense Packing Strategy**:
- Elements should feel close but not cramped
- Use negative margins strategically: \`-mt-8\`, \`-ml-4\` to create overlap
- Stack cards with slight offset for depth

**Grid Usage** (Broken Grid Philosophy):
- **Never Perfect**: Avoid symmetrical, evenly-spaced grids
- **Variable Columns**: Use \`grid-cols-1 md:grid-cols-2 lg:grid-cols-3\` but break with \`col-span-2\` mixed with \`col-span-1\`
- **Vertical Offset**: Apply \`translate-y-8\` or \`md:translate-y-12\` to every other item (use modulo: \`i % 2 === 1\`)
- **Varying Heights**: Let content dictate height naturally, don't force equal heights
- **Gap Variance**: Use different gap sizes within same section (\`gap-4\` then \`gap-8\`)

**Max Width Strategy**:
- **Container**: \`max-w-7xl\` (1280px) for most sections
- **Full Bleed**: Hero and some feature sections use \`max-w-none\` or \`max-w-screen\`
- **Narrow Content**: Reading content uses \`max-w-3xl\` (768px)

**Z-Index Layering** (Critical for overlap):
\`\`\`
Background patterns:   z-0
Content base:         z-10
Overlapping cards:    z-20
Floating decorations: z-30
Modals/overlays:      z-40
Fixed header:         z-50
\`\`\`
- Use relative positioning on parent to establish context
- Apply negative margins + higher z-index to create intentional overlap

---

## The "Bold Factor" (Non-Generic Signatures)

These are the **mandatory** elements that make Maximalism unmistakable:

### 1. Floating Decorative Shapes
- **What**: Scattered SVG icons (stars, sparkles, circles, squares) and emoji throughout layout
- **Placement**: Absolute positioned with specific coordinates (\`top-[10%] left-[5%]\`)
- **Sizes**: Variable from \`h-6 w-6\` to \`h-24 w-24\` - intentionally inconsistent
- **Styling**: Filled with accent colors, often with animation
- **Animation**: Apply float, wiggle, spin-slow, or bounce-subtle
- **Density**: 5-10 shapes per full-height section minimum
- **Implementation**: Create reusable component, position absolutely within relative parent

### 2. Massive Background Typography
- **What**: Oversized text behind content, partially visible, bleeding off edges
- **Size**: \`text-[12rem]\` to \`text-[20rem]\` - deliberately too large for viewport
- **Styling**: \`opacity-20\`, semi-transparent accent color or muted
- **Positioning**: Absolute, centered with transform, or bleeding from edge
- **Content**: Single impactful word (WOW, YES, GO, etc.) or repeated pattern
- **Purpose**: Adds depth and reinforces maximalist chaos

### 3. Pattern-on-Pattern Layering
- **Minimum**: Every section must have at least 2 overlapping patterns
- **Common Combo**: Dots over stripes, checker over gradient, mesh over dots
- **Global + Local**: Fixed global patterns (2) + section-specific patterns (1-2)
- **Visibility**: Keep individual pattern opacity low (0.05-0.15) but layer for cumulative effect
- **Variety**: Rotate pattern types across sections (hero = mesh+dots, features = stripes+checker, etc.)

### 4. Systematic Color Rotation
- **Rule**: Each major section highlights a different accent color from the five
- **Pattern**: Hero = Magenta, Stats = (all 5), Features = Cyan, Benefits = Orange, etc.
- **Repeated Elements**: In grids, cycle through colors using index modulo 5
- **Implementation**: Store colors in array, access via \`colors[index % colors.length]\`
- **Consistency**: Same color doesn't dominate consecutive sections

### 5. Clashing Border Colors
- **Never Match**: Border color should clash with background color
- **Examples**:
  - Magenta background �+' Yellow border
  - Cyan background �+' Orange border
  - Yellow background �+' Magenta border
- **Contrast**: Choose colors from opposite sides of the palette
- **Thickness**: Always \`border-4\` or \`border-8\` - make the clash visible

### 6. Multi-Layered Shadows
- **Never Single**: Every elevated element has 2-3 shadow layers minimum
- **Types**: Combine glow shadows (soft, colored) with hard shadows (offset, flat)
- **Colors**: Each shadow layer uses different accent color
- **Progression**: Hard shadows increase offset in 2x increments (8px �+' 16px �+' 32px)
- **Hover**: Add layer or increase intensity, never just change color

### 7. Asymmetric Element Positioning
- **No Perfect Alignment**: Elements in same row sit at different vertical positions
- **Technique**: Apply \`translate-y-8\` or \`-translate-y-4\` to alternate items
- **Rotation**: Mix \`rotate-1\`, \`rotate-2\`, \`-rotate-1\` across cards
- **Skew**: Occasional \`skew-x-2\` on containers
- **Overlap**: Use negative margins to make elements overlap section boundaries

### 8. Mixed Border Styles Within Sections
- **Rule**: Same section uses 2-3 different border styles
- **Mix**: Solid borders on some cards, dashed on others, dotted on accents
- **Example**: Feature cards with solid borders, icon containers with dashed, section divider with double
- **Purpose**: Adds to controlled chaos aesthetic

### 9. Emoji as Decorative Elements
- **Usage**: Scatter throughout (dYs?�o"dY'�dYZ_dY'��s�dY'�dY"��?")
- **Size**: Large \`text-6xl\` to \`text-7xl\`
- **Animation**: Apply bounce, float, wiggle
- **Placement**: Section headers, decorative accents, floating elements
- **Frequency**: 1-2 per major section

### 10. Animated Gradient Text
- **What**: Headlines with animated multi-color gradient backgrounds
- **Colors**: 3-4 accent colors in linear gradient
- **Animation**: Background position shifts continuously (4s duration)
- **Usage**: 20-30% of major headlines
- **Implementation**: \`background-clip: text\`, \`-webkit-text-fill-color: transparent\`, animate \`background-position\`

---

## Animation & Motion

**Motion Philosophy**: Bouncy, playful, attention-grabbing. Nothing should feel static or stiff.

**Timing Relationships**:
\`\`\`
Ultra Fast:    100-200ms   (Small interactions, icon rotations)
Fast:          200-300ms   (Hover states, button presses)
Standard:      300-500ms   (Card transitions, layout shifts)
Slow:          1-2s        (Wiggle, pulse, bounce animations)
Very Slow:     4-8s        (Float, gradient shift)
Ultra Slow:    20s         (Spin, background rotation)
\`\`\`

**Easing Functions**:
- Default: \`ease-out\` (quick start, gentle end)
- Bouncy: \`cubic-bezier(0.68, -0.55, 0.265, 1.55)\` (overshoot effect)
- Smooth: \`ease-in-out\` (gradual both ends)

**Keyframe Animations**:

1. **Float** (Gentle vertical movement):
\`\`\`css
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%      { transform: translateY(-20px) rotate(5deg); }
}
Duration: 6s ease-in-out infinite
\`\`\`

2. **Float Reverse** (Upward movement):
\`\`\`css
@keyframes float-reverse {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%      { transform: translateY(20px) rotate(-5deg); }
}
Duration: 5s ease-in-out infinite
\`\`\`

3. **Pulse Glow** (Shadow intensity variation):
\`\`\`css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(255, 58, 242, 0.5); }
  50%      { box-shadow: 0 0 40px rgba(255, 58, 242, 0.8), 0 0 60px rgba(0, 245, 212, 0.5); }
}
Duration: 2s ease-in-out infinite
\`\`\`

4. **Gradient Shift** (Background position animation):
\`\`\`css
@keyframes gradient-shift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
Duration: 4s ease infinite
Requirement: Set background-size to 200-300%
\`\`\`

5. **Spin Slow** (Continuous rotation):
\`\`\`css
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
Duration: 20s linear infinite
\`\`\`

6. **Wiggle** (Back-and-forth rotation):
\`\`\`css
@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50%      { transform: rotate(3deg); }
}
Duration: 1s ease-in-out infinite
\`\`\`

7. **Bounce Subtle** (Vertical bounce):
\`\`\`css
@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-10px); }
}
Duration: 2s ease-in-out infinite
\`\`\`

**Animation Assignment**:
- **Floating Shapes**: Float, float-reverse, or float-slow
- **Key CTAs**: Pulse-glow
- **Gradient Text/Backgrounds**: Gradient-shift
- **Decorative Rings/Borders**: Spin-slow
- **Emoji/Icons**: Wiggle or bounce-subtle
- **Hero Elements**: Combination (float + pulse-glow)

**Performance Optimization**:
- Use \`transform\` and \`opacity\` only (GPU accelerated)
- Add \`will-change: transform\` to animated elements
- Avoid animating width, height, or color directly

**Reduced Motion**:
- Respect \`prefers-reduced-motion: reduce\`
- Disable keyframe animations
- Keep hover/active transitions but reduce duration to 150ms
- Maintain all visual styles, only remove continuous motion

---

## Anti-Patterns (What to Avoid)

These choices would **break** the Maximalism aesthetic:

### 1. �?O Neutral or Muted Borders
- **Wrong**: \`border-gray-300\` or \`border-white/20\`
- **Right**: \`border-[#FF3AF2]\` or \`border-[#FFE600]\`
- **Why**: Borders must be vibrant accent colors that pop

### 2. �?O Single-Layer Shadows
- **Wrong**: \`shadow-lg\` or single color shadow
- **Right**: Stacked colored shadows (glow + hard, or hard + hard)
- **Why**: Depth comes from layering, not softness

### 3. �?O Perfectly Aligned Grids
- **Wrong**: Symmetrical grid with equal spacing and heights
- **Right**: Broken grid with vertical offsets, rotations, and varying sizes
- **Why**: Maximalism embraces controlled chaos

### 4. �?O Empty Background Sections
- **Wrong**: Solid color background with no patterns or texture
- **Right**: 2-3 layered patterns (dots, stripes, mesh)
- **Why**: Empty space is wasted space in maximalism

### 5. �?O Subtle or Small Typography
- **Wrong**: \`text-base\` or \`text-lg\` for headlines
- **Right**: \`text-5xl\` to \`text-9xl\` for headlines
- **Why**: Maximalism is loud and unapologetic

### 6. �?O Monochromatic Color Schemes
- **Wrong**: Using one accent color throughout
- **Right**: Rotating through all 5 accent colors systematically
- **Why**: More colors = more dopamine

### 7. �?O Minimal or No Hover States
- **Wrong**: Only color change on hover
- **Right**: Scale + rotate + shadow change combined
- **Why**: Interactions should feel joyful and exaggerated

### 8. �?O Thin Borders (1-2px)
- **Wrong**: \`border\` or \`border-2\`
- **Right**: \`border-4\` or \`border-8\`
- **Why**: Borders are a design statement, not an afterthought

### 9. �?O Restrained Button Styles
- **Wrong**: Simple solid color button with subtle shadow
- **Right**: Gradient background, clashing border, stacked shadow, scale on hover
- **Why**: CTAs should demand attention

### 10. �?O No Text Shadows on Headlines
- **Wrong**: Flat text with no shadow
- **Right**: 2-3 layer text shadow in different accent colors
- **Why**: Depth and dimension make text pop

### 11. �?O Matching Border and Background Colors
- **Wrong**: Magenta background with magenta border
- **Right**: Magenta background with yellow or cyan border
- **Why**: Clashing creates visual interest

### 12. �?O Static Elements (No Animation)
- **Wrong**: All elements static with only CSS transitions
- **Right**: 30-40% of elements have continuous animation (float, wiggle, pulse)
- **Why**: Motion adds life and energy

---

## Accessibility & Best Practices

**Color Contrast** (Non-Negotiable):
- **Text Contrast**: White (#FFFFFF) on dark (#0D0D1A) maintains 19.5:1 ratio (AAA)
- **Accent Color Usage**: Never use accent colors for body text or critical information
- **Readable Backgrounds**: When text sits on accent color backgrounds, ensure:
  - White text on dark accents (magenta, purple, cyan with sufficient darkness)
  - Dark text (#0D0D1A) on light accents (yellow, light cyan)
- **Testing**: Use contrast checker to verify all text meets WCAG AA minimum (4.5:1 for normal text, 3:1 for large text)

**Focus States** (Maximum Visibility):
- **Double Ring System**: \`ring-4 ring-[color-1] ring-offset-4 ring-offset-[color-2]\`
- **Color Contrast**: Ring colors should contrast with both element and background
- **Total Thickness**: 8px minimum (ring + offset combined)
- **Additional Indicators**: Combine color change with outline style (\`outline-dashed\`)
- **Never**: Rely on color alone - always include structural change
- **Keyboard Navigation**: All interactive elements must be keyboard accessible

**Motion Sensitivity** (Respect User Preferences):
\`\`\`css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.15s !important;
  }
}
\`\`\`
- Disable all keyframe animations (float, pulse, spin)
- Reduce transition durations to minimal (150ms)
- Keep hover/active states but without exaggerated motion
- Maintain all visual styles (colors, borders, shadows)

**Screen Reader Considerations**:
- Decorative emoji and floating shapes should have \`aria-hidden="true"\`
- Pattern overlays should be CSS-only, not content
- Ensure semantic HTML structure (proper heading hierarchy)
- All interactive elements need accessible labels

**Performance**:
- Use \`transform\` and \`opacity\` for animations (GPU accelerated)
- Add \`will-change: transform\` sparingly on animated elements
- Patterns via CSS gradients preferred over images
- Consider \`backdrop-filter\` support and provide fallback

**Touch Targets**:
- Minimum size: 44x44px for all interactive elements
- Buttons default to \`h-14\` (56px) - well above minimum
- Ensure adequate spacing between touch targets (8px minimum gap)

---

## Layout & Spacing Rhythm

**Vertical Rhythm** (Section Flow):
\`\`\`
Section Padding:       py-24 to py-32   (96px-128px between sections)
Section Inner Margin:  mb-16 to mb-20   (64px-80px between title and content)
Content Groupings:     space-y-8 to space-y-12 (32px-48px between content blocks)
Element Stacks:        space-y-4 to space-y-6  (16px-24px between elements)
\`\`\`

**Horizontal Rhythm**:
\`\`\`
Container Padding:     px-6 (mobile), px-8 (desktop)
Grid Gaps:            gap-6 to gap-12 (varies deliberately)
Card Padding:         p-8 to p-12
Button Padding:       px-10 to px-12
Input Padding:        px-6
\`\`\`

**Responsive Breakpoints**:
- **Mobile** (\`< 768px\`):
  - Stack all grids vertically
  - Maintain pattern density (reduce to 1-2 patterns, not zero)
  - Keep accent colors and borders (don't simplify)
  - Scale down typography but stay bold (text-4xl minimum for hero)
  - Reduce floating shapes (5-6 instead of 10-12)
  - Maintain rotation and offset effects

- **Tablet** (\`768px - 1024px\`):
  - 2-column grids where desktop has 3
  - Full pattern treatment returns
  - All animations active

- **Desktop** (\`> 1024px\`):
  - Full 3-4 column grids
  - Maximum pattern density
  - All decorative elements visible

**Critical Rule for Mobile**: Do NOT simplify to "clean minimalism" on mobile. Keep the chaos, just stack it vertically.

---

## Iconography Guidelines

**Icon Source**: Lucide React (or similar open-source icon set)

**Icon Sizing**:
\`\`\`
Small:      h-5 w-5     (20px)
Default:    h-10 w-10   (40px)
Large:      h-16 w-16   (64px)
Decorative: h-24 w-24   (96px)
\`\`\`

**Icon Styling**:
- **Stroke Width**: Thick \`stroke-[2.5px]\` to \`stroke-[3px]\` for visibility
- **Colors**: Always accent colors, never muted
- **Containers**: Wrap in colored shapes:
  - Circle: \`rounded-full\`
  - Square: \`rounded-xl\`
  - Border: \`border-4 border-[accent]\`
  - Background: Semi-transparent accent \`bg-[accent]/20\`
- **Animation**: Icons can rotate, bounce, or pulse on hover

**Icon Placement**:
- Feature cards: Large icon at top
- Buttons: Small icon inline with text
- Floating decorations: Variety of sizes, absolute positioned
- Navigation: Medium size, colored on hover

---

## Implementation Notes

**Technology Assumptions**:
- **CSS Framework**: Tailwind CSS v4 (uses arbitrary values \`[]\` syntax)
- **Animations**: CSS keyframes defined in stylesheet, applied via utility classes
- **Patterns**: CSS gradient backgrounds, not images
- **Components**: Built with component variants (CVA) for consistency
- **Icons**: Lucide React or similar SVG icon library

**Configuration File Structure**:
\`\`\`typescript
export const config = {
  colors: { background, foreground, muted, accent, secondary, tertiary, quaternary, quinary, border },
  fonts: { heading, body, display },
  radius: { base, button, card },
  shadows: { glow, glowLg, multi, multiLg }
}
\`\`\`

**Reusable Patterns**:
- Create utility classes for patterns (\`.pattern-dots\`, \`.pattern-stripes\`, \`.pattern-checker\`, \`.pattern-mesh\`)
- Create shadow utilities (\`.shadow-multi\`, \`.shadow-multi-lg\`, \`.glow-accent\`, \`.glow-accent-lg\`)
- Create animation classes (\`.animate-float\`, \`.animate-pulse-glow\`, etc.)
- Store color array for rotation: \`['accent', 'secondary', 'tertiary', 'quaternary', 'quinary']\`

**Component Approach**:
- Build Button with 4 variants (default, secondary, outline, ghost)
- Build Card with composable parts (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
- Build Input with built-in focus states
- All components use \`cn()\` utility for class merging

---

**Final Reminder**: If it looks "too much" �?" it's probably just right. Maximalism is about abundance, joy, and visual stimulation. The design should make people FEEL something immediately. Restraint is not welcome here. Every element is an opportunity for color, pattern, shadow, animation, and delight.`},

===== STYLE BLOCK: minimal-dark (offset 750230 to 766341) =====
"minimal-dark":{id:"minimal-dark",name:"Simple Dark",mode:"dark",fontType:"sans-serif",description:"An atmospheric dark mode design system built on deep slate tones with warm amber accents. Features ambient glow effects, glass-like translucent cards, geometric typography, and generous breathing room. Ethereal yet grounded�?"like a premium app at midnight.",layoutIdeas:{hero:"Centered layout with massive headline. Ambient glow behind text creates depth. Trust badge floats above with subtle glow and pulsing dot. CTAs side by side with amber glow effect on primary button hover. Background has very subtle radial gradient warmth.",stats:"Horizontal strip with glass-effect background. Stats separated by subtle vertical dividers (1px, low opacity). Numbers in display font with amber accent. Subtle top/bottom borders.",productDetail:"Two-column layout. Left side has ambient glow orb decoration. Text content right-aligned on left column. Right column has floating glass card with abstract UI mockup inside.",features:"Clean 3-column grid of glass cards. Icons in amber-tinted circles. Hover reveals subtle glow. First feature can span 2 columns for emphasis. Consistent card heights.",howItWorks:"Horizontal numbered steps. Large circled numbers with amber fill. Connecting line between steps (subtle, dashed). Cards below each with glass effect.",benefits:"Split layout with large ambient orb on left side. Benefits as a clean list on right with amber checkmarks. Generous spacing between items.",pricing:"3-column glass cards. Highlighted tier has amber border glow, 'Popular' badge, and is slightly larger (scale-105 + translate-y-4 on desktop for prominence). Prices large in display font. Feature lists with subtle checkmarks.",testimonials:"Staggered 3-column layout. Glass cards with subtle amber accent line on left edge. Avatar images with ring border. Quote in italic.",faq:"Clean accordion with plus/minus icons. Questions in medium weight, answers in regular. Subtle dividers between items. No backgrounds.",blog:"3-column grid with glass card effect on images. Hover lifts card slightly. Date/author in muted text. Clean typography hierarchy.",footer:"Multi-column with subtle top border. Logo and description left. Nav groups right. Social icons as subtle ghost buttons. Very clean, minimal."},content:`# Design Style: Minimalist Dark

## Design Philosophy

### Core Principle

**Atmospheric Depth.** Minimalist Dark creates visual interest not through color saturation or complex patterns, but through carefully orchestrated layers of darkness. Multiple shades of slate and charcoal stack upon each other, with warm amber accents that glow like embers in the night. The design breathes�?"generous whitespace (or rather, "darkspace") gives every element room to exist.

### Visual Vibe

**Emotional Keywords**: Atmospheric, Sophisticated, Calm, Premium, Nocturnal, Refined, Spacious, Warm-cool contrast, Ethereal, Grounded

This is the visual language of:
- Premium dark mode applications (Linear, Raycast, Arc)
- High-end developer tools (Vercel, Railway)
- Luxury tech products at night
- A beautifully designed app you'd use at 2am
- The quiet confidence of well-crafted software

The design feels like working in a perfectly lit room at night�?"everything is visible, nothing strains the eyes, and there's a sense of calm focus.

### What This Design Is NOT

- �?O Pure black (uses rich slate tones instead)
- �?O Harsh or high contrast
- �?O Colorful or vibrant
- �?O Cold or sterile
- �?O Flat or shadowless
- �?O Similar to Minimalist Modern (no blue gradients, no rounded-lg everywhere)
- �?O Similar to Minimalist Monochrome (has color accent, softer edges, not editorial)

### The DNA of Minimalist Dark

#### 1. Layered Slate Palette
Not pure black�?"rich slate tones (#0A0A0F as the deepest, #12121A as card backgrounds, #1A1A24 as elevated surfaces). Each layer is subtly different, creating depth through darkness itself.

#### 2. Warm Amber Accent
A single warm accent color (#F59E0B / amber-500) creates beautiful contrast against cool dark tones. Used sparingly for interactive elements, highlights, and focal points. The warmth prevents the design from feeling cold.

#### 3. Ambient Glow Effects
Soft, blurred glows behind key elements create atmospheric depth. Not harsh drop shadows�?"think ambient light bleeding through darkness. Applied to buttons on hover (0_0_20px with 0.4 opacity), hero badges, testimonial accent lines, and decorative orbs. The glows are subtle but critical to the atmospheric quality�?"they create that "light in the darkness" feeling.

#### 4. Glass-Effect Cards
Cards use semi-transparent backgrounds with subtle backdrop blur. Border opacity is low (10-15%). This creates a layered, floating effect without harsh edges.

#### 5. Geometric Sans Typography
Space Grotesk for display, Inter for body. Clean, geometric letterforms that feel modern and technical. Strong hierarchy through size and weight, not color variation.

#### 6. Generous Breathing Room
Extremely spacious layouts. Large section padding. Content doesn't crowd�?"it floats in space. This breathing room is essential to the premium feel.

#### 7. Subtle Borders
Borders exist but are very subtle�?"usually 1px at 10-20% opacity. They define edges without drawing attention. No thick, heavy borders.

### Differentiation from Other Minimalist Styles

| Aspect | Minimalist Modern | Minimalist Monochrome | Minimalist Dark |
|--------|-------------------|----------------------|-----------------|
| Mode | Light | Light | **Dark** |
| Background | Off-white | Pure white | Deep slate (#0A0A0F) |
| Accent | Blue gradients | None (black only) | Warm amber (#F59E0B) |
| Typography | Sans + Display serif | Serif throughout | Geometric sans |
| Corners | Rounded (lg, xl) | Sharp (0px) | Soft rounded (md, lg) |
| Depth | Shadows + glows | Flat, no shadows | Ambient glows + glass |
| Feel | Energetic, contemporary | Editorial, austere | Atmospheric, calm |
| Borders | Subtle | Heavy black lines | Very subtle, low opacity |

---

## Design Token System

### Colors (Dark Slate + Amber)

\`\`\`
background:       #0A0A0F (Deep slate - almost black but warmer)
backgroundAlt:    #12121A (Slightly elevated surfaces)
foreground:       #FAFAFA (Near-white text)
muted:            #1A1A24 (Card backgrounds, elevated surfaces)
mutedForeground:  #71717A (Secondary text - zinc-500)
accent:           #F59E0B (Amber-500 - warm, glowing)
accentForeground: #0A0A0F (Dark text on amber)
accentMuted:      rgba(245, 158, 11, 0.15) (Amber glow backgrounds)
border:           rgba(255, 255, 255, 0.08) (Very subtle borders)
borderHover:      rgba(255, 255, 255, 0.15) (Borders on hover)
card:             rgba(26, 26, 36, 0.6) (Semi-transparent cards)
cardSolid:        #1A1A24 (Solid card background)
ring:             #F59E0B (Focus ring)
\`\`\`

### Typography

**Font Stack**:
- **Display/Headlines**: \`"Space Grotesk", system-ui, sans-serif\` - Geometric, technical, distinctive
- **Body**: \`"Inter", system-ui, sans-serif\` - Clean, highly readable
- **Mono**: \`"JetBrains Mono", monospace\` - For code, labels, metadata

**Type Scale**:
\`\`\`
xs:   0.75rem   (12px)
sm:   0.875rem  (14px)
base: 1rem     (16px)
lg:   1.125rem (18px)
xl:   1.25rem  (20px)
2xl:  1.5rem   (24px)
3xl:  2rem     (32px)
4xl:  2.5rem   (40px)
5xl:  3.5rem   (56px)
6xl:  4.5rem   (72px)
7xl:  6rem     (96px)
\`\`\`

**Tracking**:
- Headlines: \`tracking-tight\` (-0.025em)
- Body: \`tracking-normal\` (0)
- Labels/Mono: \`tracking-wide\` (0.025em)

### Border Radius

\`\`\`
sm:   0.375rem (6px)
md:   0.5rem   (8px) - Default for most elements
lg:   0.75rem  (12px) - Cards, larger containers
xl:   1rem     (16px) - Hero elements, large cards
2xl:  1.5rem   (24px) - Special decorative elements
full: 9999px   - Pills, avatars
\`\`\`

Softer than sharp corners, but not as dramatically rounded as Modern.

### Shadows & Glows

\`\`\`
// Subtle elevation shadows
sm:   0 1px 2px rgba(0, 0, 0, 0.3)
md:   0 4px 6px rgba(0, 0, 0, 0.3)
lg:   0 10px 15px rgba(0, 0, 0, 0.3)
xl:   0 20px 25px rgba(0, 0, 0, 0.4)

// Ambient glows (the signature effect)
glowSm:   0 0 20px rgba(245, 158, 11, 0.15)
glowMd:   0 0 40px rgba(245, 158, 11, 0.2)
glowLg:   0 0 60px rgba(245, 158, 11, 0.25)

// Border glow for highlighted elements
borderGlow: 0 0 0 1px rgba(245, 158, 11, 0.3), 0 0 20px rgba(245, 158, 11, 0.15)
\`\`\`

### Textures & Patterns

**Subtle Noise Overlay** (very low opacity):
\`\`\`css
background-image: url("data:image/svg+xml,...noise...");
opacity: 0.02;
\`\`\`

**Radial Gradient Ambience** (for section backgrounds):
\`\`\`css
background: radial-gradient(ellipse at top, rgba(245, 158, 11, 0.03) 0%, transparent 50%);
\`\`\`

**Subtle Grid** (optional, for specific sections):
\`\`\`css
background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
background-size: 40px 40px;
\`\`\`

---

## Component Stylings

### Buttons

**Primary Button**:
\`\`\`
- Background: #F59E0B (amber)
- Text: #0A0A0F (dark)
- Border: none
- Radius: rounded-lg (12px)
- Padding: px-6 py-3 (h-11 for default size)
- Font: font-medium, no uppercase
- Hover: brightness-110, shadow-[0_0_20px_rgba(245,158,11,0.4)]
- Active: scale-[0.98] (subtle press effect)
- Focus-visible: ring-2 ring-[var(--accent)] ring-offset-2
- Transition: all 200ms ease-out
\`\`\`

**Secondary/Outline Button**:
\`\`\`
- Background: transparent
- Text: #FAFAFA
- Border: 1px solid rgba(255,255,255,0.15)
- Hover: bg-white/5, border-white/25
- Active: scale-[0.98]
- Focus-visible: Same as primary
\`\`\`

**Ghost Button**:
\`\`\`
- Background: transparent
- Text: #FAFAFA
- Border: none
- Hover: bg-white/5
- Active: scale-[0.98]
- Focus-visible: Same as primary
\`\`\`

### Cards (Glass Effect)

**Standard Card**:
\`\`\`css
background: rgba(26, 26, 36, 0.6);
backdrop-filter: blur(8px);
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 12px;
transition: all 300ms ease-out;
\`\`\`

**Hover State** (when interactive):
\`\`\`css
border-color: rgba(255, 255, 255, 0.15);
background: rgba(26, 26, 36, 0.8);
transform: scale(1.02);
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
\`\`\`

**Highlighted Card** (e.g., featured pricing tier):
\`\`\`css
/* Same as standard plus: */
border: 1px solid rgba(245, 158, 11, 0.2);
box-shadow: 0 0 0 1px rgba(245, 158, 11, 0.2), 0 0 30px rgba(245, 158, 11, 0.15);
/* On desktop, can also use scale(1.05) and translate-y for emphasis */
\`\`\`

### Inputs

\`\`\`
- Background: rgba(26, 26, 36, 0.6)
- Backdrop-filter: blur(8px)
- Border: 1px solid rgba(255,255,255,0.08)
- Radius: rounded-lg
- Height: h-11 (44px for proper touch target)
- Text: #FAFAFA
- Placeholder: #71717A
- Focus: border-amber-500/50, ring-2 ring-amber-500/20, shadow-[0_0_20px_rgba(245,158,11,0.1)]
- Transition: all 200ms
\`\`\`

---

## Layout Strategy

### Container
\`\`\`
max-width: max-w-6xl (72rem)
padding: px-6 md:px-8 lg:px-12
\`\`\`

### Section Spacing
\`\`\`
padding: py-24 md:py-32 lg:py-40
\`\`\`
Very generous�?"let the dark space breathe.

### Grid System
- Prefer simple grids: 2-col, 3-col
- Gap: gap-6 or gap-8
- Items don't need to touch�?"floating in space is fine

---

## Effects & Animation

**Motion Philosophy**: Smooth and subtle with delightful micro-interactions

- **Transitions**: 200-300ms, ease-out (cards use 300ms for smoother feel)
- **Hover effects**:
  - Cards: Subtle scale (scale-[1.02]), border brightening, glow increase
  - Buttons: Glow increase (shadow intensity up to 0.4), brightness boost
  - Links: Color shift to accent on focus-visible
- **Active states**: Buttons have subtle press effect (scale-[0.98])
- **Animations**:
  - Hero badge pulse dot (animate-pulse with glow)
  - FAQ accordion smooth height transition (max-h with opacity fade)
- **No**: Bouncy animations, dramatic transforms
- **Yes**: Gentle fades, soft glows, smooth state changes, subtle scales

\`\`\`css
/* Cards */
transition: all 300ms ease-out;

/* Buttons & Quick Interactions */
transition: all 200ms ease-out;
\`\`\`

**Ambient Orbs** (decorative background elements):
- Large blurred circles with amber glow
- Very low opacity (0.02-0.04)
- Positioned strategically (top center, bottom right as fixed backgrounds)
- Blur values: 100px-150px for soft, diffused light
- Responsive: Smaller dimensions on mobile for performance (h-[400px] on mobile vs h-[600px] on desktop)

---

## Iconography

**Style**: Clean, thin strokes

\`\`\`tsx
<Icon size={20} strokeWidth={1.5} className="text-zinc-400" />
// Active/accent state:
<Icon size={20} strokeWidth={1.5} className="text-amber-500" />
\`\`\`

Icons should be subtle, not attention-grabbing. They support content, not dominate it.

---

## Responsive Strategy

**Mobile Adaptations**:
- Maintain dark palette and warm accent - no compromises on aesthetic
- Scale typography smoothly: \`text-4xl sm:text-5xl md:text-6xl lg:text-7xl\`
- Stack columns vertically (\`lg:grid-cols-2\` for two-column layouts)
- Reduce ambient glow orb sizes for performance (but keep them!)
- Generous vertical spacing maintained (\`py-24 md:py-32 lg:py-40\`)
- Touch targets: minimum 44px height (buttons use h-11 or h-12)
- Navigation hidden on mobile (\`hidden md:flex\`), hamburger menu implied
- All hover states also work as active states on touch devices
- Glass effects maintained (backdrop-blur is performant on modern mobile)

**Key Principle**: The atmospheric quality must survive on mobile. This isn't a "mobile-simplified" version�?"it's the same premium experience, just adapted to screen size.

---

## Accessibility

**Contrast**:
- Primary text (#FAFAFA) on background (#0A0A0F): 18.4:1 ratio (exceeds AAA)
- Muted text (#71717A) on background: 4.9:1 ratio (meets AA)
- Amber accent readable on both dark and light contexts

**Focus States**:
All interactive elements have clear, accessible focus states using \`focus-visible\`:

**Buttons**:
\`\`\`css
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-[var(--accent)]
focus-visible:ring-offset-2
focus-visible:ring-offset-[var(--background)]
\`\`\`

**Links** (nav, footer, etc.):
\`\`\`css
focus-visible:text-[var(--accent)]
focus-visible:outline-none
\`\`\`

**Inputs**:
\`\`\`css
focus:border-[var(--accent)]/50
focus:outline-none
focus:ring-2
focus:ring-[var(--accent)]/20
\`\`\`

The amber accent color is used consistently for all focus indicators, maintaining brand coherence while ensuring visibility.

---

## Bold Choices (Non-Negotiable)

1. **Layered darkness**: At least 3 distinct dark tones visible (#0A0A0F �+' #12121A �+' #1A1A24)
2. **Warm amber accent**: No cold blues�?"#F59E0B amber creates the signature warmth
3. **Ambient glow effects**:
   - Hero badge: subtle glow + pulsing dot
   - Buttons on hover: 0_0_20px glow at 0.4 opacity
   - Testimonial accent lines: soft glow
   - Background ambient orbs: massive blur (100-150px)
4. **Glass-effect cards**: Semi-transparent (0.6 opacity) with backdrop blur (8px)
5. **Generous spacing**: py-24 md:py-32 lg:py-40 sections feel spacious, not cramped
6. **Subtle borders**: rgba(255,255,255,0.08) - just 8% opacity, never harsh
7. **Geometric typography**: Space Grotesk for headlines, Inter for body, JetBrains Mono for labels
8. **Atmospheric background**: Fixed ambient orbs + subtle noise texture (0.015 opacity)
9. **Micro-interactions**:
   - Cards scale up on hover (1.02)
   - Buttons scale down on active (0.98)
   - Smooth FAQ accordion with height + opacity transitions
   - All focus states use amber accent

---

## What Success Looks Like

A successfully implemented Minimalist Dark design should feel like:
- Using Linear or Raycast at night
- A premium developer tool's marketing site
- Software designed for focus and calm
- Warm light glowing in a dark room

It should NOT feel like:
- A generic dark theme with colors inverted
- Harsh or high-contrast
- Cold or unwelcoming
- A copy of Minimalist Modern with dark colors
- Just "dark mode"�?"it should have its own personality`},

===== STYLE BLOCK: modern-dark (offset 766341 to 783892) =====
"modern-dark":{id:"modern-dark",name:"Modern Dark",mode:"dark",fontType:"sans-serif",description:"A cinematic, high-precision dark mode design featuring layered ambient lighting through animated gradient blobs, mouse-tracking spotlight effects, and meticulously crafted micro-interactions that feel like premium software.",layoutIdeas:{hero:"Centered cinematic hero with parallax scroll effects, gradient headline treatment, and floating announcement badge with ping animation. Trust indicators displayed as overlapping avatars below CTAs.",stats:"Bold 4-column grid with gradient text for numbers, trend badges, and subtle hover glow effects. Numbers use massive typography (text-7xl) with gradient fills.",productDetail:"Split 2-column layout with text content on left and mock interface visual on right. Mock interface includes macOS-style window controls and abstract UI components with accent highlights.",features:"Asymmetric 6-column bento grid with varying card sizes. Hero feature card spans 4 columns and 2 rows with integrated data visualization. Cards use mouse-tracking spotlight effects.",blog:"Magazine-style 3-column grid with hover-zoom images, gradient overlays on hover, and clean metadata presentation. Images have subtle opacity transitions.",howItWorks:"3-column grid with numbered cards featuring glowing accent borders. Step numbers displayed in large format with glow effects. Connection line spans across cards on desktop.",benefits:"Sticky left column with scrolling right column. Right side features stacked cards with checkmark icons and hover border accent effects.",testimonials:"3-column masonry grid with star ratings, quote text, and author cards. Cards lift slightly on hover with subtle shadow enhancement.",pricing:"3-column tier grid with highlighted middle tier. Badge labels, large pricing typography, checkmark feature lists, and full-width CTAs. Highlighted tier has enhanced glow shadow.",faq:"Centered single-column accordion with animated height transitions and rotating chevron icons. Smooth expand/collapse with expo-out easing.",footer:"5-column grid with brand section, navigation columns, and social links. Subtle separation with top border and legal links in footer bottom."},content:`# Design Style: Linear / Modern

## Design Philosophy

**Core Principles:** Precision, depth, and fluidity define this design system. Every surface exists in three-dimensional space, illuminated by soft ambient light sources that breathe and move. The design communicates "premium developer tools"�?"fast, responsive, and obsessively crafted like Linear, Vercel, or Raycast. Nothing is arbitrary: every shadow has three layers, every gradient transitions through multiple colors, every animation uses refined expo-out easing. The goal is software that feels expensive without feeling ostentatious.

**Vibe:** Cinematic meets technical minimalism. Imagine a developer's code editor crossed with a Blade Runner interface�?"deep near-blacks (#050506, never pure black) punctuated by soft pools of indigo light. The aesthetic is sophisticated but never cold, using warmth from accent glows (#5E6AD2 at varying opacities) to create inviting depth. It should feel like looking through frosted glass into a high-end application running at night. Dark, but not oppressive. Technical, but not sterile. Precise, but not rigid.

**Differentiation:** The signature of this style is **layered ambient lighting and interactive depth**. Unlike flat dark modes or simple gradient overlays, this creates genuine atmospheric presence through:

1. **Multi-layer background system:** Four stacked gradients + noise texture + grid overlay create depth without any single dominant element
2. **Animated gradient blobs:** Large (900-1400px), heavily blurred shapes float slowly across the canvas, simulating cinematic lighting pools
3. **Mouse-tracking spotlights:** Interactive surfaces respond to cursor position with radial gradient glows (300px diameter, 15% opacity)
4. **Scroll-linked parallax:** Hero content fades, scales, and translates based on scroll position for cinematic depth
5. **Multi-layer shadows:** Every elevated surface uses 3-4 shadow layers: border highlight + soft diffuse + ambient darkness + optional accent glow
6. **Precision micro-interactions:** All animations are 200-300ms with expo-out easing. Movements are tiny (4-8px max). Scale changes are subtle (0.98-1.02). Nothing bounces or overshoots.

**The "Software Feel":** This design should feel like using a desktop application, not a website. Interactions are instant and precise. Hover states are immediate. Focus rings are prominent. Everything responds to the cursor. The aesthetic borrows from native macOS/Windows design systems�?"subtle transparency, soft glows, refined typography, obsessive attention to 1px details.

---

## Design Token System (The DNA)

### Color Strategy: Deep Space with Ambient Light

The palette is built on near-black bases with a single saturated indigo accent. Depth comes from layered translucency and soft light sources, not harsh shadows.

| Token | Value | Usage |
|:------|:------|:------|
| \`background-deep\` | \`#020203\` | Absolute darkest �?" footer, deepest layers |
| \`background-base\` | \`#050506\` | Primary page canvas |
| \`background-elevated\` | \`#0a0a0c\` | Elevated surfaces, mock interfaces |
| \`surface\` | \`rgba(255,255,255,0.05)\` | Card backgrounds, containers |
| \`surface-hover\` | \`rgba(255,255,255,0.08)\` | Hovered card state |
| \`foreground\` | \`#EDEDEF\` | Primary text �?" bright but not pure white |
| \`foreground-muted\` | \`#8A8F98\` | Body text, descriptions, metadata |
| \`foreground-subtle\` | \`rgba(255,255,255,0.60)\` | Tertiary text, placeholders |
| \`accent\` | \`#5E6AD2\` | Primary interactive color �?" buttons, links, glows |
| \`accent-bright\` | \`#6872D9\` | Hover state for accent |
| \`accent-glow\` | \`rgba(94,106,210,0.3)\` | Glow effects, ambient lighting |
| \`border-default\` | \`rgba(255,255,255,0.06)\` | Subtle hairline borders |
| \`border-hover\` | \`rgba(255,255,255,0.10)\` | Border on hover |
| \`border-accent\` | \`rgba(94,106,210,0.30)\` | Accent-tinted borders for emphasis |

### Background System: Layered Ambient Lighting

The background is never flat. It's a composition of multiple layers:

**Layer 1 �?" Base Gradient:**
\`\`\`
bg-[radial-gradient(ellipse_at_top,#0a0a0f_0%,#050506_50%,#020203_100%)]
\`\`\`
A radial gradient emanating from top-center creates vertical depth.

**Layer 2 �?" Noise Texture:**
A subtle SVG noise pattern at \`opacity: 0.015\` adds tactile quality and prevents banding.

**Layer 3 �?" Animated Gradient Blobs:**
Multiple large, heavily blurred shapes create ambient "light pools":
- Primary blob: Top-center, \`blur-[150px]\`, 900A-1400px, accent color at 25% opacity
- Secondary blob: Left side, \`blur-[120px]\`, 600A-800px, purple/pink mix at 15% opacity
- Tertiary blob: Right side, \`blur-[100px]\`, 500A-700px, indigo/blue mix at 12% opacity
- Bottom accent: Lower area, pulsing animation, accent at 10% opacity

**Blob Animation:** Blobs float slowly using keyframe animations:
\`\`\`css
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(1deg); }
}
/* Duration: 8-10s, ease-in-out, infinite */
\`\`\`

**Layer 4 �?" Grid Overlay:**
A subtle 64px grid pattern at \`opacity: 0.02\` adds technical precision.

---

### Typography System

**Font Stack:** \`"Inter", "Geist Sans", system-ui, sans-serif\`

**Type Scale & Weights:**

| Level | Size | Weight | Tracking | Usage |
|:------|:-----|:-------|:---------|:------|
| Display | \`text-7xl\` to \`text-8xl\` | \`font-semibold\` | \`tracking-[-0.03em]\` | Hero headlines |
| H1 | \`text-5xl\` to \`text-6xl\` | \`font-semibold\` | \`tracking-tight\` | Section headers |
| H2 | \`text-3xl\` to \`text-4xl\` | \`font-semibold\` | \`tracking-tight\` | Subsection headers |
| H3 | \`text-xl\` to \`text-2xl\` | \`font-semibold\` | \`tracking-tight\` | Card titles |
| Body Large | \`text-lg\` to \`text-xl\` | \`font-normal\` | default | Lead paragraphs |
| Body | \`text-sm\` to \`text-base\` | \`font-normal\` | default | Standard content |
| Label | \`text-xs\` | \`font-mono\` | \`tracking-widest\` | Section tags, metadata |

**Gradient Text Treatment:**
Headlines use gradient fills for dimensionality:
\`\`\`
bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent
\`\`\`

For accent emphasis, use animated gradient:
\`\`\`
bg-gradient-to-r from-[#5E6AD2] via-indigo-400 to-[#5E6AD2] bg-clip-text text-transparent
/* With background-size: 200% and animation for shimmer effect */
\`\`\`

**Line Heights:**
- Headlines: \`leading-tight\` or \`leading-none\`
- Body text: \`leading-relaxed\`

---

### Radius & Border System

| Element | Radius | Border |
|:--------|:-------|:-------|
| Large containers | \`rounded-2xl\` (16px) | \`border border-white/[0.06]\` |
| Cards | \`rounded-2xl\` (16px) | \`border border-white/[0.06]\` |
| Buttons | \`rounded-lg\` (8px) | Inset shadow instead of border |
| Inputs | \`rounded-lg\` (8px) | \`border border-white/10\` |
| Badges/Pills | \`rounded-full\` | \`border border-accent/30\` |
| Icons containers | \`rounded-xl\` (12px) | \`border border-white/10\` |

**Border Gradients on Hover:**
Cards can have animated gradient borders that fade in on hover:
\`\`\`css
background: linear-gradient(to bottom, rgba(94,106,210,0.3), transparent);
mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
mask-composite: exclude;
padding: 1px;
\`\`\`

---

### Shadow & Glow System

**Multi-Layer Shadow Formula:**
Shadows combine multiple layers for realistic depth:

\`\`\`
/* Card default */
shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_2px_20px_rgba(0,0,0,0.4),0_0_40px_rgba(0,0,0,0.2)]

/* Card hover */
shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_40px_rgba(0,0,0,0.5),0_0_80px_rgba(94,106,210,0.1)]
\`\`\`

**Accent Glow for CTAs:**
\`\`\`
shadow-[0_0_0_1px_rgba(94,106,210,0.5),0_4px_12px_rgba(94,106,210,0.3),inset_0_1px_0_0_rgba(255,255,255,0.2)]
\`\`\`

**Inner Highlight:**
Buttons and elevated surfaces get a subtle top edge highlight:
\`\`\`
shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]
\`\`\`

---

## Component Styling Principles

### Buttons

**Primary Button:**
- Background: Solid accent color (\`bg-[#5E6AD2]\`)
- Text: White
- Shadow: Multi-layer with accent glow
- Hover: Slightly brighter (\`bg-[#6872D9]\`), increased glow
- Active: \`scale-[0.98]\`, reduced shadow
- Shine effect: Pseudo-element gradient sweep on hover

**Secondary Button:**
- Background: \`bg-white/[0.05]\`
- Text: \`text-[#EDEDEF]\`
- Border: Inset shadow only
- Hover: \`bg-white/[0.08]\`, subtle outer glow

**Ghost Button:**
- Background: Transparent
- Text: Muted foreground
- Hover: \`bg-white/[0.05]\`, text brightens

### Cards & Containers

**Base Card:**
- Background: \`bg-gradient-to-b from-white/[0.08] to-white/[0.02]\`
- Border: 1px at 6% white opacity
- Radius: \`rounded-2xl\`
- Inner glow line: 1px gradient at top edge
- Mouse-tracking spotlight effect (optional)

**Spotlight Effect:**
Cards track mouse position and render a radial gradient that follows the cursor:
\`\`\`jsx
// Radial gradient, 300px diameter, accent color at 15% opacity
// Positioned at mouse coordinates relative to card
// Opacity transitions on hover
\`\`\`

**Card Variants:**
- \`default\`: Standard glass effect
- \`glass\`: More translucent with backdrop blur
- \`gradient\`: Subtle accent gradient overlay

### Form Inputs

- Background: \`bg-[#0F0F12]\`
- Border: \`border-white/10\`
- Focus: \`border-[#5E6AD2]\` with accent glow ring
- Text: \`text-gray-100\`
- Placeholder: \`text-gray-500\`

### Interactive States

**Hover Principles:**
- Movement is minimal: \`y: -4px\` to \`y: -8px\` maximum
- Duration: \`200-300ms\`
- Easing: \`[0.16, 1, 0.3, 1]\` (expo out)
- Changes: Border brightens, glow increases, subtle scale

**Focus States:**
- Ring: \`ring-2 ring-[#5E6AD2]/50 ring-offset-2 ring-offset-[#050506]\`

**Active States:**
- Scale: \`scale-[0.98]\`
- Shadow: Reduced depth

**Mobile Menu:**
- Toggle button appears on screens < 768px
- Animated dropdown with \`opacity\` and \`y\` transform (0.2s duration)
- Semi-transparent backdrop: \`bg-[#050506]/95\` with \`backdrop-blur-xl\`
- Vertical navigation links with hover states
- Full-width CTA button at bottom
- Menu icon transitions between hamburger (\`Menu\`) and close (\`X\`) icons

---

## Layout Principles

### Spacing Scale
Base unit: 4px. Use Tailwind's default scale consistently.

| Context | Spacing |
|:--------|:--------|
| Section padding | \`py-24\` to \`py-32\` |
| Container max-width | \`container\` with responsive padding |
| Card padding | \`p-6\` to \`p-8\` |
| Element gaps | \`gap-4\` to \`gap-8\` |
| Between sections | \`py-32\` (128px) |

### Grid Philosophy

**Asymmetric Bento Grids:**
Feature grids should NOT be uniform. Use varying spans:
- 6-column base grid on desktop
- Mix of \`col-span-2\`, \`col-span-3\`, \`col-span-4\`
- Variable row heights with \`auto-rows-[180px]\` as baseline
- One "hero" card spanning 4 columns and 2 rows

**Responsive Breakpoints:**
- Mobile (\`< 768px\`): Single column, stacked layout with reduced padding
- Tablet (\`md: 768px\`): 2-3 columns, intermediate grid layouts
- Desktop (\`lg: 1024px+\`): Full grid expression with asymmetric layouts

**Mobile-Specific Adjustments:**
- Section padding scales: \`py-16\` (mobile) �+' \`py-24\` (tablet) �+' \`py-32\` (desktop)
- Hero typography: \`text-4xl\` (mobile) �+' \`text-5xl\` (tablet) �+' \`text-7xl\`/\`text-8xl\` (desktop)
- Body text: \`text-base\` (mobile) �+' \`text-lg\` (tablet) �+' \`text-xl\` (desktop)
- Navigation: Hamburger menu with animated slide-down panel on mobile (\`Menu\`/\`X\` icons), inline links on desktop
- Cards: Full-width on mobile, grid on desktop
- Bento grids: Single column mobile, full asymmetric layout desktop

### Section Flow

- Sections separated by subtle \`border-t border-white/[0.06]\`
- Gradient line accents: \`bg-gradient-to-r from-transparent via-white/10 to-transparent\`
- Occasional overlapping sections using negative margins

---

## The "Bold Factor" (Signature Elements)

These elements MUST be present for authenticity:

1. **Animated Ambient Blobs:** Multiple layered, floating gradient shapes create cinematic lighting. Without these, the design becomes flat and generic.

2. **Mouse-Tracking Spotlights:** Interactive surfaces respond to cursor position with soft radial glow effects. This creates the "magical" interaction feel.

3. **Gradient Typography:** Headlines use vertical gradients (white to semi-transparent) and accent gradients with animation for key phrases.

4. **Multi-Layer Shadows:** Never single shadows. Always combine: border highlight + soft diffuse shadow + optional accent glow.

5. **Parallax/Scroll Effects:** Hero content fades and scales on scroll. Elements reveal with staggered animations. This adds cinematic depth.

6. **Precision Micro-Interactions:** All animations are quick (200-300ms), use expo-out easing, and movements are tiny (4-8px). Never bouncy or exaggerated.

---

## Anti-Patterns (What to Avoid)

1. **Flat backgrounds:** Never use a single solid color. Always layer gradients, noise, and ambient light.

2. **Pure black (\`#000000\`):** Use near-blacks like \`#050506\` or \`#020203\` for softer appearance.

3. **Pure white text:** Use \`#EDEDEF\` or similar off-white to reduce harshness.

4. **Large hover movements:** Keep transforms under 8px. This isn't playful�?"it's precise.

5. **Uniform grids:** Bento layouts should have variety in card sizes. Avoid same-size-everything.

6. **Harsh borders:** Borders should be nearly invisible (\`6-10%\` white opacity), not prominent.

7. **Colorful accent overuse:** The accent color is for highlights and interaction, not decoration. Most of the UI is monochromatic.

8. **Bouncy animations:** Use expo-out easing, not spring physics. Movements should be swift and decisive.

9. **Missing glow effects:** Accent buttons without glow look incomplete. The soft light emission is part of the language.

---

## Animation & Motion

**Timing:**
- Quick interactions: \`200ms\`
- Standard transitions: \`300ms\`
- Entrance animations: \`600ms\`
- Background blob float: \`8000-10000ms\`

**Easing:**
- Primary: \`[0.16, 1, 0.3, 1]\` (expo-out)
- Hover: \`ease-out\`

**Entrance Patterns:**
- Fade up: \`opacity: 0 �+' 1\`, \`y: 24px �+' 0\`
- Scale in: \`opacity: 0 �+' 1\`, \`scale: 0.95 �+' 1\`
- Stagger children: \`0.08s\` delay between items

**Scroll-Triggered:**
- Viewport threshold: \`15-20%\` visibility
- Once: true (don't re-animate on scroll back)

**Parallax (Hero):**
- Opacity: Fades from \`1 �+' 0\` over first 50% of scroll
- Scale: Shrinks from \`1 �+' 0.95\`
- Y position: Moves down \`0 �+' 100px\`

---

## Accessibility Considerations

**Contrast:**
- Primary text (\`#EDEDEF\` on \`#050506\`): ~15:1 ratio �o"
- Muted text (\`#8A8F98\` on \`#050506\`): ~6:1 ratio �o"
- Accent on dark: Ensure 4.5:1 minimum for interactive elements

**Focus States:**
- Always visible focus rings using accent color
- \`ring-offset\` matches background color

**Motion:**
- Respect \`prefers-reduced-motion\`
- Provide fallbacks for parallax and floating animations
- Essential interactions should work without animation

**Color Independence:**
- Don't rely solely on accent color for meaning
- Use icons, labels, and position to reinforce state`},

===== STYLE BLOCK: monochrome (offset 783892 to 801622) =====
monochrome:{id:"monochrome",name:"Monochrome",mode:"light",fontType:"serif",description:"A stark, editorial design system built on pure black and white. No accent colors�?"just dramatic contrast, oversized serif typography, and precise geometric layouts. Evokes high-end fashion editorials and architectural portfolios. Austere, sophisticated, unapologetically bold.",layoutIdeas:{hero:"Full-width single column: badge with dot indicator, massive oversized headline (9xl), decorative thick rule with small bordered square, subheadline, dual CTAs, trust indicator. No images�?"pure typography as the hero element. Heavy 4px bottom border.",stats:"Horizontal strip, inverted (black bg, white text). 4-column grid on desktop, 2-col on mobile. Stats separated by vertical dividers. Oversized numbers in display serif, small caps labels, trend info. Subtle vertical line texture overlay for depth.",productDetail:"Two-column editorial spread with section label. Left: large headline. Right: body text with boxed drop cap (bordered square containing first letter) on first paragraph. Grid pattern overlay for texture. Heavy 4px bottom border.",features:"Dense 3-column grid with 1px gaps filled with black. Each feature card has bordered icon box + numbered label, headline, description. Cards invert colors on hover (100ms transition). Heavy 4px bottom border.",howItWorks:"3-column centered layout. Bordered square boxes with large step numbers, connected by horizontal lines. Headline + description below each. Diagonal line texture overlay. Heavy 4px bottom border.",benefits:"Checklist format with oversized checkmarks (custom SVG, not icons). Benefits as bold headlines with supporting text. Alternating alignment for visual interest.",pricing:"3-column grid with 1px gaps. Highlighted tier is inverted (black bg) AND elevated vertically on desktop (-my-8, py-16) with subtle shadow. Non-highlighted tiers have hover bg change. Badge, name, price, description, feature list, CTA button. Heavy 4px bottom border.",testimonials:"3-column grid, middle column offset down (mt-8). Oversized quote marks (opacity 10%, increases on hover). Large italic blockquote, author info below with top border that thickens on hover. Heavy 4px bottom border.",faq:"Accordion with plus/minus icons. Questions in bold serif, answers in lighter weight. Heavy bottom borders on each item. No backgrounds�?"just lines and type.",blog:"3-column grid. Each article: bordered image (grayscale �+' color on hover, border thickens 2px�+'4px, image scales 105%), date/author metadata, headline, description, 'Read' link. Heavy 4px bottom border.",footer:"Dense, newspaper-style footer. Multi-column layout with section headers in small caps. Social icons as simple outlined circles. Heavy top border."},content:`# Design Style: Minimalist Monochrome

## Design Philosophy

### Core Principle

**Reduction to Essence.** Minimalist Monochrome strips design down to its most fundamental elements: black, white, and typography. There are no accent colors to hide behind, no gradients to soften edges, no shadows to create false depth. Every design decision must stand on its own merit. This is design as discipline�?"where restraint becomes the ultimate form of expression.

### Visual Vibe

**Emotional Keywords**: Austere, Authoritative, Timeless, Editorial, Intellectual, Dramatic, Refined, Stark, Confident, Uncompromising

This is the visual language of:
- High-end fashion editorials (Vogue, Harper's Bazaar covers)
- Architectural monographs and museum catalogs
- Luxury brand identities (Chanel, Celine, Bottega Veneta)
- Award-winning book design and fine typography
- Gallery exhibition materials

The design commands respect through its confidence. It doesn't need color to be interesting�?"it uses scale, contrast, rhythm, and negative space to create visual drama.

### What This Design Is NOT

- �?O Colorful or playful
- �?O Soft, rounded, or friendly
- �?O Gradient-based or with accent colors
- �?O Shadow-heavy or "elevated"
- �?O Generic or template-like
- �?O Busy or cluttered
- �?O Similar to "Minimalist Modern" (no blue accents, no gradients, no rounded corners)

### The DNA of Minimalist Monochrome

#### 1. Pure Black & White Palette
No grays for primary elements�?"use true black (#000000) and true white (#FFFFFF). Gray is reserved only for secondary text and borders. The stark contrast creates immediate visual impact and forces deliberate hierarchy decisions.

#### 2. Serif Typography as Hero
Unlike modern sans-serif minimalism, this style embraces classical serif typefaces. The serif adds sophistication, editorial weight, and timeless elegance. Typography isn't just content�?"it's the primary visual element.

#### 3. Oversized Type Scale
Headlines don't just inform�?"they dominate. Expect 8xl, 9xl, and custom larger sizes. Words become graphic elements. Single words or short phrases can fill entire viewport widths.

#### 4. Line-Based Visual System
Instead of filled shapes, shadows, or backgrounds, this design uses lines: hairlines, thick rules, borders, underlines, strikethroughs. Lines create structure without mass.

#### 5. Sharp Geometric Precision
Zero border radius everywhere. Perfect 90-degree corners. Precise alignments. The geometry is architectural�?"think Bauhaus meets editorial print design.

#### 6. Dramatic Negative Space
Whitespace isn't empty�?"it's active. Generous margins and padding create breathing room that makes the black elements more impactful. The page breathes.

#### 7. Inversion for Emphasis
Instead of accent colors, use color inversion (black background, white text) to highlight important elements. This creates drama without breaking the monochrome rule.

### Differentiation from Minimalist Modern

| Aspect | Minimalist Modern | Minimalist Monochrome |
|--------|-------------------|----------------------|
| Colors | Blue accent + gradients | Pure black & white only |
| Typography | Sans-serif (Inter) | Serif (Playfair Display) |
| Corners | Rounded (lg, xl, 2xl) | Sharp (0px everywhere) |
| Depth | Shadows, glows, elevation | Flat, 2D, no shadows |
| Visual elements | Gradient fills, colored icons | Lines, borders, typography |
| Vibe | Contemporary tech | Editorial luxury |
| Personality | Confident & approachable | Austere & commanding |

---

## Design Token System

### Colors (Strictly Monochrome)

\`\`\`
background:       #FFFFFF (Pure white)
foreground:       #000000 (Pure black)
muted:            #F5F5F5 (Off-white for subtle backgrounds)
mutedForeground:  #525252 (Dark gray for secondary text)
accent:           #000000 (Black IS the accent)
accentForeground: #FFFFFF (White on black)
border:           #000000 (Black borders)
borderLight:      #E5E5E5 (Light gray for subtle dividers)
card:             #FFFFFF (White cards)
cardForeground:   #000000 (Black text)
ring:             #000000 (Black focus rings)
\`\`\`

**Rule**: No other colors. Ever. The palette is absolute.

### Typography

**Font Stack**:
- **Display/Headlines**: \`"Playfair Display", Georgia, serif\` - Elegant, high-contrast serif with beautiful italics
- **Body**: \`"Source Serif 4", Georgia, serif\` - Highly readable serif for long-form text
- **Mono/Labels**: \`"JetBrains Mono", monospace\` - For dates, metadata, technical details

**Type Scale** (Dramatic range):
\`\`\`
xs:   0.75rem   (12px) - Fine print, metadata
sm:   0.875rem  (14px) - Captions, labels
base: 1rem     (16px) - Body text minimum
lg:   1.125rem (18px) - Body text preferred
xl:   1.25rem  (20px) - Lead paragraphs
2xl:  1.5rem   (24px) - Section intros
3xl:  2rem     (32px) - Subheadings
4xl:  2.5rem   (40px) - Section titles
5xl:  3.5rem   (56px) - Page titles
6xl:  4.5rem   (72px) - Hero subheadings
7xl:  6rem     (96px) - Hero headlines
8xl:  8rem     (128px) - Display headlines
9xl:  10rem    (160px) - Oversized statements
\`\`\`

**Tracking & Leading**:
- Headlines: \`tracking-tight\` (-0.025em) or \`tracking-tighter\` (-0.05em)
- Body: \`tracking-normal\` (0)
- Small caps/Labels: \`tracking-widest\` (0.1em)
- Line heights: \`leading-none\` (1) for display, \`leading-relaxed\` (1.625) for body

### Border Radius

\`\`\`
ALL VALUES: 0px
\`\`\`

No exceptions. Every element has sharp, 90-degree corners. This is non-negotiable and defines the style's architectural character.

### Borders & Lines

\`\`\`
hairline:  1px solid #E5E5E5  (Subtle dividers)
thin:      1px solid #000000  (Standard borders)
medium:    2px solid #000000  (Emphasis borders)
thick:     4px solid #000000  (Heavy rules, section dividers)
ultra:     8px solid #000000  (Maximum impact)
\`\`\`

**Usage**:
- Horizontal rules between sections (thick or ultra)
- Vertical dividers between columns (thin)
- Card borders (thin or medium)
- Underlines for links (thin, on hover)

### Shadows

\`\`\`
NONE
\`\`\`

This design has zero drop shadows. Depth is created through:
- Color inversion (black/white swap)
- Border weight variation
- Scale contrast
- Negative space

### Textures & Patterns

**CRITICAL**: These textures are REQUIRED to prevent flat design. Apply strategically across sections.

**Primary Pattern: Horizontal Lines (Global)**
\`\`\`css
background-image: repeating-linear-gradient(
  0deg,
  transparent,
  transparent 1px,
  #000 1px,
  #000 2px
);
background-size: 100% 4px;
opacity: 0.015;
\`\`\`

**Secondary Pattern: Grid (for editorial sections like Product Detail)**
\`\`\`css
background-image:
  linear-gradient(#00000008 1px, transparent 1px),
  linear-gradient(90deg, #00000008 1px, transparent 1px);
background-size: 40px 40px;
opacity: 0.015;
\`\`\`

**Diagonal Lines (for process/timeline sections)**
\`\`\`css
background-image: repeating-linear-gradient(
  45deg,
  transparent,
  transparent 40px,
  #00000008 40px,
  #00000008 42px
);
opacity: 0.01;
\`\`\`

**Noise Texture (global, for paper-like quality)**
\`\`\`css
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
opacity: 0.02;
\`\`\`

**Inverted Section Textures**
For dark backgrounds (Stats, Final CTA), use white-based textures:
\`\`\`css
/* Vertical lines for Stats */
background-image: repeating-linear-gradient(
  90deg,
  transparent,
  transparent 1px,
  #fff 1px,
  #fff 2px
);
background-size: 4px 100%;
opacity: 0.03;

/* Radial gradient for Final CTA */
background-image: radial-gradient(
  circle at top center,
  #ffffff,
  transparent 70%
);
opacity: 0.05;
\`\`\`

---

## Component Stylings

### Buttons

**Primary Button**:
\`\`\`
- Background: #000000 (black)
- Text: #FFFFFF (white)
- Border: none
- Padding: px-8 py-4 (generous)
- Font: uppercase, tracking-widest, font-medium, text-sm
- Hover: Invert to white bg, black text, black border
- Transition: Instant (no easing, 0ms or 100ms max)
\`\`\`

**Secondary/Outline Button**:
\`\`\`
- Background: transparent
- Text: #000000
- Border: 2px solid #000000
- Hover: Fill black, text white
\`\`\`

**Ghost Button**:
\`\`\`
- Background: transparent
- Text: #000000
- Border: none
- Text decoration: underline on hover
- Style: Looks like a text link
\`\`\`

**Button Shape**: Always rectangular, never rounded. Consider adding a small arrow (�+') for CTAs.

### Cards/Containers

**Standard Card**:
\`\`\`
- Background: #FFFFFF
- Border: 1px solid #000000
- Padding: p-6 or p-8
- No shadow, no radius
\`\`\`

**Inverted Card** (for emphasis):
\`\`\`
- Background: #000000
- Text: #FFFFFF
- Border: none
- Use sparingly for highlighted content
\`\`\`

**Borderless Card**:
\`\`\`
- No border, no background
- Content separated by generous whitespace
- Use horizontal rules above/below if needed
\`\`\`

### Inputs

**Text Input**:
\`\`\`
- Background: #FFFFFF
- Border: 2px solid #000000 (bottom only, or full)
- No radius
- Placeholder: #525252 italic
- Focus: Border thickens to 3px or 4px
- No colored focus ring�?"just border change
\`\`\`

**Textarea**: Same as input, with visible resize handle.

---

## Layout Strategy

### Container
\`\`\`
max-width: max-w-6xl (72rem / 1152px)
padding: px-6 md:px-8 lg:px-12
\`\`\`

### Section Spacing
\`\`\`
Vertical padding: py-24 md:py-32 lg:py-40
Between sections: Thick horizontal rule (4px or 8px black)
\`\`\`

### Grid System
- Use CSS Grid for precise control
- 12-column base grid for flexibility
- Strong alignment to vertical rhythm

---

## Effects & Animation

**Motion Philosophy**: **Minimal and Instant**

This design favors stillness and instant state changes. When animation exists, it's:
- **Instant**: 0-100ms transitions maximum
- **Binary**: Sharp on/off states, not gradual
- **Purposeful**: Only for state changes (hover, focus)

**Hover Effects** (Applied):
- **Cards/Features**: Full color inversion (bg, text, borders) with 100ms transition
- **Buttons**: Color inversion with transition-none for instant feedback
- **Blog Images**: Border thickens (2px �+' 4px), image scales 105% and removes grayscale (300ms)
- **Links**: Underline appearance (instant)
- **Testimonials**: Quote mark opacity increases, bottom border thickens

**Focus States** (Accessibility Required):
- **Buttons**: 3px solid outline with 3px offset
- **Inputs**: Border thickens from 2px to 4px (bottom only)
- **Links**: Border appears/thickens
- **Interactive elements**: 3px solid outline with 2px offset
- All outlines use \`focus-visible\` to avoid mouse click outlines

**Specific Implementations**:
\`\`\`tsx
// Feature card hover
className="group bg-[var(--background)] p-8 transition-colors duration-100 hover:bg-[var(--foreground)] hover:text-[var(--background)]"

// Blog image hover
className="border-2 transition-all duration-100 group-hover:border-[4px]"
className="grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"

// Testimonial hover
className="group-hover:opacity-20 transition-opacity duration-100" // quote mark
className="transition-all duration-100 group-hover:border-t-[3px]" // border
\`\`\`

**No**:
- Bouncy animations
- Floating elements
- Parallax scrolling
- Slow easing functions
- Gradient animations

---

## Iconography

**Style**: Outlined, thin strokes (strokeWidth: 1 or 1.5)

**Usage**:
- Icons inside circles with black stroke, white fill
- Or standalone with no container
- Size: Consistent 20px or 24px
- Color: Always black (#000000)

**Lucide Icons Settings**:
\`\`\`tsx
<Icon size={20} strokeWidth={1.5} className="text-black" />
\`\`\`

---

## Responsive Strategy

**Mobile Adaptations**:
- Maintain sharp corners and black/white palette
- Reduce oversized headlines (9xl �+' 5xl on mobile)
- Stack columns vertically
- Borders become full-width horizontal rules
- Generous vertical spacing maintained

**Key Principle**: The monochrome drama must survive on mobile. Don't default to generic mobile patterns.

---

## Accessibility

**Contrast**: Pure black on white exceeds WCAG AAA requirements (21:1 ratio).

**Focus States** (REQUIRED for all interactive elements):
\`\`\`
Buttons & Primary Interactive Elements:
- Outline: 3px solid #000000
- Outline-offset: 3px
- Use focus-visible to prevent mouse click outlines

Text Inputs:
- Border thickens from 2px to 4px on focus
- Bottom border only
- No outline (border change is sufficient)

Links in Navigation:
- Border appears/thickens on focus-visible
- Consistent with hover state

Secondary Interactive Elements (social icons, FAQ buttons):
- Outline: 3px solid #000000
- Outline-offset: 2px
\`\`\`

**Implementation**:
\`\`\`tsx
// Button focus
focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3

// Input focus
focus:border-b-[4px] focus:outline-none focus-visible:border-b-[4px]

// Link focus
focus-visible:border-[var(--foreground)] focus-visible:outline-none
\`\`\`

**Skip Links**: Visible, black button at top of page.

**Touch Targets**: Minimum 44pxA-44px for all interactive elements on mobile.

---

## Bold Choices (Non-Negotiable)

1. **Oversized Hero Typography**: At least one word in 8xl or larger (9xl on desktop)
2. **Hero Decorative Elements**: Thick rule with small bordered square for visual punctuation
3. **Inverted Stats Section**: Black background, white text, with subtle vertical line texture
4. **No Accent Colors**: Resist the temptation�?"black IS the accent
5. **Heavy Horizontal Rules**: 4px black lines between ALL major sections
6. **Editorial Pull Quotes**: Testimonials as large italic serif with oversized quotation marks
7. **Sharp Everything**: Zero border-radius across all elements
8. **Instant Interactions**: 100ms transitions maximum, mostly instant
9. **Typography as Graphics**: Headlines that function as visual elements, not just text
10. **Layered Textures**: Multiple subtle patterns for depth (NOT flat design)
11. **Boxed Drop Cap**: First paragraph of Product Detail has bordered box drop cap
12. **Elevated Pricing Tier**: Highlighted tier extends vertically on desktop
13. **Hover Inversions**: Feature cards and pricing tiers invert on hover
14. **Image Borders Thicken**: Blog images border weight increases on hover with scale effect

---

## What Success Looks Like

A successfully implemented Minimalist Monochrome design should feel like:
- Opening a high-end fashion magazine
- Walking through a modern art gallery
- Reading an award-winning architectural monograph
- Browsing a luxury brand's website

It should NOT feel like:
- A generic website template
- A tech startup landing page
- Something that "needs a pop of color"
- Minimalist Modern with the colors removed`},

===== STYLE BLOCK: neo-brutalism (offset 801622 to 827966) =====
"neo-brutalism":{id:"neo-brutalism",name:"Neo-brutalism",mode:"light",fontType:"sans-serif",description:"A raw, high-contrast aesthetic that mimics print design and DIY punk culture. Characterized by cream backgrounds, thick black borders (4px), hard offset shadows with zero blur, clashing vibrant colors (Hot Red, Vivid Yellow, Soft Violet), and Space Grotesk typography at heavy weights. Embraces asymmetry, rotation, sticker-like layering, and organized visual chaos.",layoutIdeas:{hero:"Asymmetric split with massive rotated headline text blocks. Left side has border-boxed text with different colors and rotations. Right side features a 'visual chaos' container with overlapping shapes and badges. CTAs use brutalist shadows that translate on hover. Fully responsive with stacked layout on mobile.",stats:"4-column brutalist grid (2 columns on tablet, 1 on mobile) with thick white borders on black background. Hover inverts to accent color. Each stat has oversized numbers (text-7xl), uppercase labels, and decorative bars. No icons, just raw numerical data.",features:"3-column grid (1 on mobile) of cards with thick black borders and 8px offset shadows. Icons enclosed in bordered, colored accent boxes. Card headers have numbered badges and border separators. Hover lifts cards upward with deeper shadows.",howItWorks:"3 centered boxes (stacked on mobile) connected by dashed line on desktop. Each step has a large rotated number badge at top with accent background and thick border. Hover rotates the badge further. Process badge at top with pill shape.",benefits:"Split 2-column (stacked on mobile). Left: vibrant red accent with radial dot pattern overlay, massive white text with text shadow, rotated white card for subtitle. Right: clean cream background with bold list items using square bullets that change color on hover.",pricing:"3-column card grid (1 on mobile) with massive hard shadows (12-16px). Highlighted plan scales up slightly and uses black header with white text. Price numbers are huge (text-6xl). Features use custom checkbox bullets. Decorative pattern border at top.",testimonials:"Infinite horizontal marquee (react-fast-marquee) with gradient fade edges. Cards are white with thick borders and large shadows. 5-star ratings as large text. Author section has bordered avatar and separate background.",faq:"Stacked accordion with details/summary. Each item is a thick-bordered card with shadow. Open state rotates the +/X icon and reveals border separator. Questions in bold uppercase. Answers on different background (neo-muted).",blog:"3-column grid (1 on mobile). Cards with thick borders. Images are grayscale with date badge overlay. Hover restores color and scales image. Title underlines on hover. Author section has border separator at bottom.",footer:"Yellow background with thick top border. Logo is rotated text block. Navigation links are bold uppercase with hover state that inverts to black background. Social icons in bordered squares with shadows."},content:"# Design Style: Neo-brutalism\n\n## Design Philosophy\n\n**Neo-brutalism (or Neu-Brutalism)** is the digital punk rebellion against the \"Corporate Memphis\" and polished \"Clean SaaS\" aesthetics that dominated the 2010s. While traditional Brutalism (architecture/early web) was utilitarian and drab, **Neo-brutalism** is vibrant, performative, and intentionally distinct. It combines the raw, unrefined structural honesty of brutalism with the high-saturation energy of Pop Art, the \"sticker\" culture of the early internet, and the rebellious spirit of DIY zine design.\n\n**Core DNA & Fundamental Principles:**\n\n1.  **Unapologetic Visibility (The Anti-Subtle)**: Modern design often tries to be invisible�?"borderless cards floating on gradients, soft shadows that barely exist, blur effects that obscure structure. Neo-brutalism rejects this entirely. It demands to be seen. Structure is not implied; it is **enforced with thick, hard-edged black lines** (`border-4` everywhere). Shadows are not simulated light diffusion; they are **solid blocks of ink** offset at 45-degree angles (8px, 12px, 16px offsets with zero blur). Every element has **visual weight and presence**.\n\n2.  **Digital Tactility (The Sticker Effect)**: The screen is treated not as a fluid glass surface, but as a **collage board or bulletin board**. Elements feel like physical stickers, paper cutouts, or printed cards layered on top of each other. They have \"physicality\"�?"buttons **press down mechanically** (translate X and Y to cover their shadow), cards **lift up physically** (translate up while shadow grows), and text blocks are **rotated like stickers slapped on at angles** (`rotate-1`, `-rotate-2`). This creates a tangible, almost sculptural interface.\n\n3.  **Organized Chaos (Controlled Messiness)**: The design embraces a \"planned messiness\" that looks spontaneous but is carefully orchestrated. We use **slight rotations** (`-rotate-2`, `rotate-1`, `rotate-3`) on containers and text to break the monotony of the grid. Elements **overlap intentionally** (floating decorative shapes, badges positioned absolutely). **Asymmetry is encouraged**�?"headlines split across lines with different colors and rotations, layouts favor 60/40 splits over perfect 50/50. Yet the underlying structure remains **rigid and functional** to ensure usability. It is \"ugly-cool\"�?"ugly by traditional polished standards, cool by rebellious intention.\n\n4.  **Default & Raw (Web 1.0 Homage)**: The aesthetic celebrates the \"default\" look of the web before CSS3 smoothed everything out. It uses **pure black** (`#000000`) for all borders and text�?"no subtle grays. It uses **high-saturation primary colors** (Hot Red `#FF6B6B`, Vivid Yellow `#FFD93D`, Soft Violet `#C4B5FD`) that feel like unmixed paint or highlighter markers. Typography is **bold and heavy** (font weights 700 and 900 only). The **cream background** (`#FFFDF5`) mimics aged paper or newsprint, rejecting stark white.\n\n5.  **Maximalism as Statement**: While modern design trends toward minimalism, neo-brutalism is **deliberately maximal**. More borders. More shadows. More uppercase text. More visual noise (halftone patterns, grid overlays, noise textures). This isn't visual clutter�?"it's **visual density** used to create energy and urgency.\n\n6.  **Irony & Confidence**: The style exudes a sense of irony and self-awareness. It says, \"I know this looks unpolished, and that's exactly why it's good.\" It requires **confidence** to pull off; there is no room for timidity in Neo-brutalism. It's anti-corporate, anti-smooth, anti-boring.\n\n7.  **Mechanical Interactivity**: Interactions feel **mechanical and satisfying**, not smooth and ethereal. Buttons don't fade or glow�?"they **click down** like physical switches. Hovers don't soften�?"they **snap** into place. Transitions are **fast** (`duration-100`, `duration-200`) and **direct**, creating a snappy, arcade-game-like responsiveness.\n\n**The Vibe & Emotional Tone**:\n*   **Nostalgic & Retro-Modern**: Channelling Y2K energy, 90s punk zines, DIY flyers, rave posters, and early web forums.\n*   **Energetic & Loud**: It **screams** rather than whispers. It grabs attention aggressively.\n*   **Playful yet Functional**: It uses **gamified interactions** (bouncy hovers, hard clicks, rotating badges) to make utilitarian software feel like a toy or game.\n*   **Anti-Corporate Authenticity**: It rejects the polished veneer of corporate design systems, embracing rawness and imperfection as honesty.\n*   **Confident & Bold**: Every design choice is **deliberate and exaggerated**. Nothing is subtle.\n\n**Visual Signatures (What Makes It Instantly Recognizable)**:\n*   **Hard Black Strokes**: The unifying visual element. **If it doesn't have a border, it doesn't exist.** `border-4` is the default. All borders are solid black.\n*   **Offset Hard Shadows**: Shadows are **solid rectangles** with zero blur, offset at 45-degree angles (bottom-right). Small: `4px 4px 0px 0px #000`. Medium: `8px 8px 0px 0px #000`. Large: `12px 12px 0px 0px #000`. Massive: `16px 16px 0px 0px #000`.\n*   **The \"Pop\" Palette**: Cream background (`#FFFDF5`) serves as a neutral canvas for **intense bursts of highlighter colors** (Red, Yellow, Violet). Black is the structural color. White is used for contrast panels.\n*   **Typography as Texture**: Massive, heavy fonts (**Space Grotesk at 900 weight**) often treated with text outlines (`-webkit-text-stroke: 2px black` with transparent fill) or highlighted by placing text inside bordered, colored boxes. **All caps** for emphasis. Extreme tracking (`tracking-tighter` for headlines, `tracking-widest` for labels).\n*   **Sticker Layering**: Text blocks, badges, and containers are **rotated and layered** like stickers on a laptop. Elements cast hard shadows onto elements \"below\" them.\n*   **Texture & Patterns**: Backgrounds aren't flat. Use **halftone dots** (radial gradients), **grid patterns** (linear gradient lines), **noise textures** (SVG filters), and **geometric overlays** to add visual richness without traditional depth.\n*   **Asymmetric Composition**: Deliberately **break the grid**. Headlines split unevenly. Sections use 60/40 or 70/30 splits. Elements float off-axis.\n\n**What Neo-Brutalism Is NOT**:\n*   **Not Minimal**: It's maximal and dense.\n*   **Not Smooth**: It's jagged, sharp, and angular.\n*   **Not Subtle**: It's loud, high-contrast, and in-your-face.\n*   **Not Polished**: It celebrates roughness and rawness.\n*   **Not Corporate**: It's rebellious and anti-establishment in its aesthetic DNA.\n\n## Design Token System (The DNA)\n\n### Colors (High Saturation Light Mode Palette)\nNeo-brutalism uses a **single, definitive light mode palette**. All colors are high-saturation and unapologetic.\n\n*   **Background (Canvas)**: `#FFFDF5` (Cream/Off-White)\n    *   A warm, paper-like background that mimics aged newsprint or recycled paper. Softer than stark white, more authentic.\n    *   Use: Main page background, card interiors, contrast panels.\n\n*   **Foreground (Ink)**: `#000000` (Pure Black)\n    *   The structural color. Used for ALL text, ALL borders, ALL shadows. No grays, no variations.\n    *   Use: Text, borders (`border-black`), shadows, icons.\n\n*   **Accent (Hot Red)**: `#FF6B6B`\n    *   Primary action color. Vibrant, energetic, attention-grabbing.\n    *   Use: Primary buttons (`bg-neo-accent`), hover states, important badges, call-to-action backgrounds.\n\n*   **Secondary (Vivid Yellow)**: `#FFD93D`\n    *   Secondary highlight color. Bright, cheerful, high-energy.\n    *   Use: Secondary buttons, badges, logo backgrounds, footer background, alternate section backgrounds.\n\n*   **Muted (Soft Violet)**: `#C4B5FD`\n    *   Tertiary color for depth and variation without clashing.\n    *   Use: Subtle backgrounds (`bg-neo-muted`), card headers, FAQ answer backgrounds, decorative elements.\n\n*   **White**: `#FFFFFF`\n    *   Used for high-contrast text on dark backgrounds (e.g., black sections, accent buttons).\n    *   Use: Text on black backgrounds, inverted buttons, contrast panels.\n\n**Color Usage Rules:**\n- **Never use subtle grays.** It's black or a color, never #333 or #666.\n- **High contrast is mandatory.** All text must pass WCAG AA on its background.\n- **Color blocking:** Sections alternate between cream, secondary, muted, and black to create visual rhythm.\n\n### Typography\n*   **Family**: `Space Grotesk` (Google Font: `font-family: 'Space Grotesk', sans-serif`)\n    *   A geometric sans-serif with quirky personality. Modern but not clinical. Bold enough to carry heavy weights.\n    *   Load via Google Fonts: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700;900&display=block`\n\n*   **Weights**: **Only heavy weights allowed.**\n    *   **Black (900)**: For all headings (h1, h2, h3). `font-black`\n    *   **Bold (700)**: For all body text, labels, buttons. `font-bold`\n    *   **Medium (500)**: Sparingly, only for subtle emphasis. `font-medium`\n    *   **Regular (400)**: Generally avoided. Lightness is forbidden in neo-brutalism.\n\n*   **Scale**:\n    *   Display: `text-8xl` to `text-9xl` (96px to 128px) for hero headlines.\n    *   Heading 2: `text-6xl` to `text-8xl` (60px to 96px) for section titles.\n    *   Heading 3: `text-4xl` to `text-5xl` (36px to 48px) for subsections.\n    *   Body Large: `text-2xl` to `text-3xl` (24px to 30px) for emphasis.\n    *   Body: `text-lg` to `text-xl` (18px to 20px) for readable text.\n    *   Small: `text-sm` to `text-base` (14px to 16px) for labels and metadata.\n\n*   **Styling Techniques**:\n    *   **Text Stroke (Display)**: Use `-webkit-text-stroke: 2px black` with `color: transparent` for massive hollow outlined text.\n    *   **Case**: Heavy use of **UPPERCASE** (`uppercase`) for headings, labels, buttons, and emphasis. Lowercase is acceptable for body text.\n    *   **Tracking**:\n        *   Headlines: `tracking-tighter` or `tracking-tight` for density.\n        *   Labels: `tracking-widest` or `tracking-[0.2em]` for emphasis.\n    *   **Line Height**: Tight leading. `leading-none` or `leading-[0.85]` for display. `leading-snug` or `leading-relaxed` for body.\n\n### Radius & Borders\n*   **Radius**: **Default is `0px` (sharp, angular corners).**\n    *   Exception: `rounded-full` ONLY for pill badges, circular stickers, or decorative shape elements.\n    *   Never use `rounded-md` or `rounded-lg`. It's either sharp or fully round.\n\n*   **Borders**: **Mandatory on every visual element.**\n    *   Default: `border-4` (4px solid black). This is the signature thickness.\n    *   Thin: `border-2` (2px) only for subtle separators or ghost buttons.\n    *   Thick: `border-8` (8px) for major section dividers or hero elements.\n    *   All borders: `border-black` (solid black, no transparency).\n\n### Shadows & Effects\n*   **Hard Shadows (The Signature)**: Offset, solid black shadows with **zero blur** and **zero spread**. Always bottom-right direction.\n    *   **Small**: `shadow-[4px_4px_0px_0px_#000]` or `box-shadow: 4px 4px 0px 0px #000`\n    *   **Medium**: `shadow-[8px_8px_0px_0px_#000]` or `box-shadow: 8px 8px 0px 0px #000`\n    *   **Large**: `shadow-[12px_12px_0px_0px_#000]` or `box-shadow: 12px 12px 0px 0px #000`\n    *   **Massive**: `shadow-[16px_16px_0px_0px_#000]` or `shadow-[20px_20px_0px_0px_#fff]` (for elements on black backgrounds)\n\n*   **Text Shadows**: Use for text on colored backgrounds.\n    *   `text-shadow: 4px 4px 0px #000` or `text-shadow: 6px 6px 0px #000`\n\n*   **Background Patterns & Textures** (Critical for depth):\n    *   **Halftone Dots**:\n        ```css\n        background-image: radial-gradient(#000 1.5px, transparent 1.5px);\n        background-size: 20px 20px;\n        ```\n    *   **Grid Pattern** (graph paper):\n        ```css\n        background-size: 40px 40px;\n        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),\n                          linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);\n        ```\n    *   **Noise Texture** (SVG filter):\n        ```css\n        background-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'%2F%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\");\n        ```\n    *   **Radial Dots** (for backgrounds):\n        ```css\n        background-image: radial-gradient(circle, #000 2px, transparent 2.5px);\n        background-size: 30px 30px;\n        ```\n\n## Component Styling Principles\n\n### Buttons\n*   **Shape**: Rectangular with sharp corners. Default height: `h-12` to `h-14`. No rounding.\n*   **Style**:\n    *   Primary: `bg-neo-accent` (red) with `border-4 border-black`.\n    *   Secondary: `bg-neo-secondary` (yellow) with `border-4 border-black`.\n    *   Outline: `bg-white` with `border-4 border-black`.\n    *   Ghost: `border-2 border-transparent` that becomes `border-black` on hover.\n*   **Typography**: `font-bold text-sm uppercase tracking-wide` (all caps, bold, spaced).\n*   **Shadow**: Hard shadow `shadow-[4px_4px_0px_0px_#000]` or `shadow-[6px_6px_0px_0px_#000]`.\n*   **Interaction (Critical)**: **\"Push\" effect.** On `:active`, translate the button to cover its shadow:\n    ```css\n    active:translate-x-[2px] active:translate-y-[2px] active:shadow-none\n    ```\n    This creates a mechanical \"click down\" feel, like a physical button.\n*   **Hover**: Slight background darkening or shadow intensification. Fast transition (`duration-100`).\n\n### Cards / Containers\n*   **Structure**: `bg-white` with `border-4 border-black` and sharp corners (`rounded-none`).\n*   **Shadow**: Deep hard shadows (`shadow-[8px_8px_0px_0px_#000]` to `shadow-[12px_12px_0px_0px_#000]`).\n*   **Hover (Lift Effect)**: Translate card **upward** and **increase shadow size**:\n    ```css\n    hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#000]\n    ```\n    or\n    ```css\n    hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_#000]\n    ```\n    This makes the card feel like it's physically lifting off the page.\n*   **Headers**: Often have colored backgrounds (`bg-neo-muted/20` or `bg-neo-secondary`) with `border-b-4 border-black` separator.\n\n### Inputs\n*   **Style**: Thick black borders (`border-4 border-black`). Sharp corners. `bg-white` default.\n*   **Typography**: Large, bold text (`font-bold text-lg` or `text-xl`). Placeholder is `placeholder:text-black/40`.\n*   **Focus**: **Background color change** instead of ring:\n    ```css\n    focus-visible:bg-neo-secondary focus-visible:shadow-[4px_4px_0px_0px_#000] focus-visible:outline-none focus-visible:ring-0\n    ```\n    Input becomes yellow and gains a shadow when focused. No soft glow.\n*   **Height**: `h-14` to `h-20` for touch-friendly sizing.\n\n### Navigation\n*   **Logo**: Bordered box (`border-4 border-black`) with accent background. Uppercase, black font.\n*   **Links**: Bold, uppercase text. Hover state adds border and background:\n    ```css\n    hover:border-black hover:bg-neo-accent hover:px-2 hover:shadow-[4px_4px_0px_0px_#000]\n    ```\n*   **Mobile Menu**: Hamburger button as bordered square with shadow. Menu slides in with stacked bordered buttons.\n\n### Badges\n*   **Shape**: Pill (`rounded-full`) or square (`border-4`).\n*   **Style**: Colored background (`bg-neo-accent` or `bg-neo-secondary`) with thick border and shadow.\n*   **Typography**: `font-black text-sm uppercase tracking-widest`.\n*   **Usage**: Positioned absolutely over elements (`:absolute top-4 left-4`), rotated (`rotate-3`), or inline.\n\n## Layout Principles\n\n*   **Container Width**: Use `container mx-auto` with `max-w-7xl` or `max-w-6xl` for focused content width.\n*   **Spacing**: Dense 8px base grid. Sections have `py-16` to `py-32` vertical padding. Content spacing: `gap-8` to `gap-12`.\n*   **Rotation (Sticker Effect)**: Use slight rotations on containers and text blocks to break grid monotony:\n    *   `rotate-1` (1 degree), `-rotate-2` (-2 degrees), `rotate-3` (3 degrees).\n    *   Apply to headline spans, cards, badges, and CTAs.\n*   **Marquee**: Use horizontal scrolling marquees (e.g., `react-fast-marquee`) as:\n    *   Trust indicators at page top.\n    *   Testimonial carousels.\n    *   Section dividers with repeated text.\n*   **Overlapping**: Allow elements to overlap using absolute positioning:\n    *   Floating decorative shapes (`absolute top-20 left-0`).\n    *   Badges positioned on corners of cards (`-top-6 -right-6`).\n    *   Background text as texture (`absolute opacity-10 text-9xl`).\n*   **Visual Chaos Zones**: Intentionally create \"busy\" areas (like Hero right side) with:\n    *   Stacked geometric shapes.\n    *   Multiple rotated badges.\n    *   Large background numbers or text.\n*   **Asymmetry**: Avoid perfect symmetry. Use 60/40 splits, offset columns, and staggered grids.\n\n## The \"Bold Factor\" (Non-Genericness)\n\nThese techniques ensure the design is unmistakably neo-brutalist and never generic:\n\n1.  **Text Stroke for Display Typography**: Use `-webkit-text-stroke: 2px black` with `color: transparent` for massive hollow outlined headings. Overlay with solid version for depth effect.\n\n2.  **Sticker Layering**: Elements feel like physical stickers:\n    *   Rotated text blocks with borders and shadows.\n    *   Absolutely positioned badges that overlap content.\n    *   Multiple \"layers\" created with shadows.\n\n3.  **Interactive Physics**: Elements must physically move:\n    *   Buttons: **Push down** on click (`active:translate-x-[2px] active:translate-y-[2px]`).\n    *   Cards: **Lift up** on hover (`hover:-translate-y-2`).\n    *   Badges: **Rotate further** on hover (`hover:rotate-12`).\n\n4.  **Primitive Shape Motifs**: Heavy use of:\n    *   **Stars** (5-point, `<Star />` from lucide-react). Use as decorative elements, ratings, and dividers.\n    *   **Arrows** (`<ArrowRight />`) for directional cues.\n    *   **Basic Shapes**: Squares, circles, rectangles as decorative floaters.\n\n5.  **Thick Border Everywhere**: If an element doesn't have a visible border, it feels wrong. Even whitespace is bordered.\n\n6.  **Color Blocking**: Large sections with solid color backgrounds (red, yellow, violet, black) to create high-contrast rhythm.\n\n7.  **Texture Overlays**: Never leave backgrounds flat. Always add halftone, grid, or noise.\n\n## Anti-Patterns (What to Avoid)\n\nThese techniques would break the neo-brutalist aesthetic:\n\n*   **Blur Effects**: No `blur()`, no `backdrop-blur`, no soft `box-shadow` with blur radius. All shadows must be hard.\n*   **Opacity/Transparency**: Avoid alpha transparency on backgrounds (except for texture overlays at low opacity).\n*   **Smooth Gradients**: No `bg-gradient-to-r` fades. Use hard color stops or patterns instead.\n*   **Rounded Corners (Mid-Range)**: Avoid `rounded-md`, `rounded-lg`, `rounded-xl`. It's either `rounded-none` (sharp) or `rounded-full` (pill/circle).\n*   **Subtle Grays**: No `#333`, `#666`, `#999`. Use pure black or a color.\n*   **Soft Animations**: No `ease-in-out` or slow durations. Use `ease-linear` or `ease-out` with fast durations.\n*   **Minimalist Whitespace**: Don't leave large empty areas. Fill with texture, patterns, or decorative elements.\n\n## Animation & Motion\n\n*   **Feel**: Bouncy, playful, mechanical, arcade-like.\n*   **Transition Speed**: Fast and snappy.\n    *   Buttons: `duration-100` (100ms).\n    *   Cards/Hovers: `duration-200` or `duration-300` (200-300ms).\n*   **Easing**: `ease-linear` for mechanical feel, `ease-out` for natural deceleration. Avoid `ease-in-out`.\n*   **Hover Interactions**:\n    *   Buttons: Background darken, then press on click.\n    *   Cards: Translate upward (`-translate-y-2`) and shadow deepens.\n    *   Links: Add border and background, snap into place.\n*   **Looping Animations**:\n    *   Slow spins on decorative stars (`animate-spin-slow`, custom duration 10s).\n    *   Pulsing on call-to-action elements (`animate-pulse`).\n    *   Bouncing on attention-grabbing badges (`animate-bounce`).\n*   **Custom Animations** (via CSS):\n    ```css\n    @keyframes spin-slow {\n      from { transform: rotate(0deg); }\n      to { transform: rotate(360deg); }\n    }\n    .animate-spin-slow {\n      animation: spin-slow 10s linear infinite;\n    }\n    ```\n\n## Spacing, Layout & Iconography\n\n*   **Max-Width**: `max-w-7xl` or `max-w-6xl` for main content. Sections can be full-width with contained inner content.\n*   **Grid System**: Use Tailwind's grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) with responsive breakpoints.\n*   **Spacing Scale**: Dense. `gap-6` to `gap-12` between elements. `py-16` to `py-32` for section padding.\n*   **Iconography**: Import from `lucide-react`.\n    *   Style: `stroke-[3px]` or `stroke-[4px]` for thick, bold strokes.\n    *   Size: `h-8 w-8` or larger (`h-12 w-12`) for emphasis.\n    *   Placement: Inside bordered boxes (`border-4 border-black bg-neo-accent p-4`).\n    *   Fill: Use `fill-black` or `fill-white` for solid icons.\n\n## Responsive Strategy\n\n*   **Mobile First**: Design starts with mobile (`base`) and scales up.\n*   **Breakpoints**:\n    *   `sm:` (640px) - Small tablets\n    *   `md:` (768px) - Tablets\n    *   `lg:` (1024px) - Desktops\n    *   `xl:` (1280px) - Large desktops\n*   **Mobile Adaptations**:\n    *   **Typography**: Scale down (e.g., `text-4xl sm:text-6xl md:text-8xl`).\n    *   **Spacing**: Reduce padding (e.g., `p-8 sm:p-12 md:p-16`).\n    *   **Grids**: Stack to single column (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).\n    *   **Shadows**: Reduce size on mobile (e.g., `shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000]`).\n    *   **Navigation**: Hamburger menu with bordered button. Full-screen or slide-in drawer.\n    *   **Buttons**: Full width on mobile (`w-full sm:w-auto`).\n    *   **Touch Targets**: Minimum `h-14` for tappable elements.\n*   **Core Aesthetic Maintained**: Even on mobile, keep thick borders, hard shadows, and bold typography. Don't default to \"generic mobile\" design.\n\n## Accessibility & Best Practices\n\n*   **Contrast**: High contrast is built-in (black on cream, white on black, black on yellow). Ensure all color combinations pass WCAG AA (4.5:1 for normal text, 3:1 for large text).\n*   **Focus States**: Use thick focus rings:\n    ```css\n    focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2\n    ```\n    or background color change (yellow) for inputs.\n*   **Motion**: Respect `prefers-reduced-motion`:\n    ```css\n    @media (prefers-reduced-motion: reduce) {\n      .animate-spin-slow, .animate-bounce, .animate-pulse {\n        animation: none;\n      }\n    }\n    ```\n*   **Keyboard Navigation**: Ensure all interactive elements are keyboard-accessible. Tab order should be logical.\n*   **Screen Readers**: Use semantic HTML (`<button>`, `<nav>`, `<header>`, `<main>`). Add `aria-label` to icon-only buttons.\n*   **Touch Targets**: Minimum 44x44px (roughly `h-12` or `h-14` in Tailwind) for all tappable elements on mobile."},

===== STYLE BLOCK: neumorphism (offset 827966 to 839950) =====
neumorphism:{id:"neumorphism",name:"Neumorphism",mode:"light",fontType:"sans-serif",description:"Extruded and inset elements via dual shadows on monochromatic backgrounds. Soft, tactile, and physically grounded with excellent accessibility.",layoutIdeas:{hero:"Asymmetric split layout (60/40) with content on left and nested depth visual on right. Features animated floating cards and interactive 3D nested circles that respond to hover with scale and rotation.",stats:"Two-stage presentation: inline stats in hero, then dedicated section with four extruded cards inside a deep inset container. Cards lift and scale on hover.",features:"Bento-style grid with one large featured card (2 rows) and smaller cards. Deep inset icon wells create tactile depth. Smooth hover scale transforms.",howItWorks:"Three-column horizontal stepper with nested depth circles for step numbers, connected by a visible inset rail with gradient progress indicator.",benefits:"Split layout with checklist items in inset containers on left, abstract UI mockup visualization on right showing layered neumorphic elements.",pricing:"Three-column grid with center card highlighted via subtle scale (1.05x) and enhanced shadow depth. Badge floating above highlighted tier.",testimonials:"Asymmetric grid with one large featured testimonial (2 columns, 2 rows) and four smaller testimonials. Star ratings in inset pills, avatars in deep inset circles.",faq:"Two-column grid with question headers and answers inside inset containers that feel carved into cards.",blog:"Three-column grid with first post spanning 2 columns. Image areas with overlay, smooth scale transforms on hover.",footer:"Four-column link grid with company info spanning 2 columns. Copyright in centered inset pill at bottom."},content:'# Neumorphism (Soft UI) Design System\n\n## Design Philosophy\n\n**Core Principles**: Neumorphism creates the illusion of physical depth through carefully balanced dual shadows�?"one light source from the top-left, one dark shadow falling bottom-right�?"on monochromatic backgrounds. Elements appear to either extrude from the surface (convex/raised) or be pressed into it (concave/inset). The effect mimics soft, pillowed physical objects with realistic lighting, creating a "molded from the same material" aesthetic. Every element feels like it\'s part of the same continuous surface, either raised or pressed, never flat.\n\n**Vibe**: Tactile, calm, modern, and physically grounded. This is UI that feels like cooler matte plastic or soft ceramic. It is satisfying and tangible. The aesthetic is deliberately restrained, utilizing a cooler grey palette to feel fresh and distinct from "warm" legacy neumorphism. The design prioritizes accessibility with WCAG AA compliant contrast ratios while maintaining the soft aesthetic.\n\n**Unique Visual Signatures**:\n- **Dual opposing RGB shadows** (top-left light, bottom-right dark) using alpha transparency for smoother, more realistic blending than solid hex shadows.\n- **Monochromatic "Cool Grey" discipline** (`#E0E5EC`) where shadows and highlights do all the visual heavy lifting. No flat backgrounds.\n- **Same-surface illusion**: Elements appear to be part of the same material as the background�?"molded, not placed.\n- **Deep Inset States**: Wells for icons and inputs that feel significantly deeper (`insetDeep`) than standard pressed states, creating true 3D depth.\n- **Soft, Hyper-Rounded Corners**: `32px` for containers and `16px` for smaller elements, reinforcing the pillowed, organic aesthetic.\n- **Complex Nested Depth**: Visuals formed by nesting elements (Extruded �+' Inset �+' Extruded) to showcase the physics of the system.\n- **Smooth Micro-interactions**: 300ms transitions with scale, rotation, and shadow depth changes. Floating animations for ambient motion.\n- **Mobile-First Responsive**: Fully responsive with touch-friendly targets (44px minimum), hamburger menu, and maintained neumorphic aesthetic on all screen sizes.\n\n---\n\n## Design Token System (The DNA)\n\n### Colors (Light Mode - Cool Monochromatic)\n\nThe entire palette is built around a single base cool grey. **All visual interest comes from shadow play, not color variety.**\n\n- **Background**: `#E0E5EC` �?" The base "cool clay" surface. Everything is molded from this.\n- **Foreground**: `#3D4852` �?" Dark blue-grey for primary text. Excellent contrast (7.5:1 ratio) for optimal readability.\n- **Muted**: `#6B7280` �?" Cool grey for secondary text with WCAG AA compliant contrast (4.6:1 ratio on the background).\n- **Accent**: `#6C63FF` �?" Soft violet for interactive highlights. Used sparingly for CTAs and focus states.\n- **Accent Light**: `#8B84FF` �?" Lighter violet for gradients and hover states.\n- **Accent Secondary**: `#38B2AC` �?" Teal for success states, checkmarks, and positive indicators.\n- **Border**: `transparent` �?" Neumorphism **never** uses borders; shadows define all edges.\n\n**Shadow Colors** (CRITICAL - RGBA for Smoothness):\n- **Shadow Light**: `rgba(255, 255, 255, 0.5-0.6)` �?" Pure white with transparency for the light-source shadow (top-left).\n- **Shadow Dark**: `rgb(163, 177, 198, 0.6-0.7)` �?" A specific cool blue-grey shadow color that matches the background tone perfectly (bottom-right).\n\n### Typography\n\n- **Display Font**: **"Plus Jakarta Sans"** (500, 600, 700, 800) �?" Modern geometric sans for headlines. Applied via `.font-display` class.\n- **Body Font**: **"DM Sans"** (400, 500, 700) �?" Clean, highly legible sans-serif for all body text and UI elements.\n- **Weights**:\n  - Display Headings: `font-extrabold` (800) with `tracking-tight`\n  - Headings: `font-bold` (700) with `tracking-tight`\n  - Body: `font-normal` (400) to `font-medium` (500)\n- **Colors**:\n  - Primary: `#3D4852` (excellent contrast)\n  - Secondary/Muted: `#6B7280` (WCAG AA compliant)\n- **Scale**: Responsive scale from `text-sm` (14px) to `text-7xl` (72px) for hero headlines\n\n### Radius\n\n- **Container / Card**: `32px` (`rounded-[32px]`) �?" Very soft, friendly corners.\n- **Base / Button**: `16px` (`rounded-2xl`).\n- **Inner Elements**: `12px` (`rounded-xl`) or `9999px` (`rounded-full`).\n\n### Shadows & Effects (The Physics)\n\nShadows are defined using `rgba` for a premium, smooth finish.\n\n**Extruded (Standard)** �?" The default resting state:\n```css\nbox-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5);\n```\n- **Tailwind**: `shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]`\n\n**Extruded Hover (Lifted)** �?" For hover states:\n```css\nbox-shadow: 12px 12px 20px rgb(163,177,198,0.7), -12px -12px 20px rgba(255,255,255,0.6);\n```\n- **Tailwind**: `shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)]`\n\n**Extruded Small** �?" For smaller elements:\n```css\nbox-shadow: 5px 5px 10px rgb(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5);\n```\n\n**Inset (Pressed)** �?" For standard pressed states or shallow wells:\n```css\nbox-shadow: inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5);\n```\n\n**Inset Deep** �?" For inputs, active wells, and deep "carved" elements:\n```css\nbox-shadow: inset 10px 10px 20px rgb(163,177,198,0.7), inset -10px -10px 20px rgba(255,255,255,0.6);\n```\n- **Tailwind**: `shadow-[inset_10px_10px_20px_rgb(163,177,198,0.7),inset_-10px_-10px_20px_rgba(255,255,255,0.6)]`\n\n**Inset Small** �?" For subtle tracks or pills:\n```css\nbox-shadow: inset 3px 3px 6px rgb(163,177,198,0.6), inset -3px -3px 6px rgba(255,255,255,0.5);\n```\n\n---\n\n## Component Styling\n\n### Buttons\n- **Shape**: `rounded-2xl`\n- **Transition**: `duration-300 ease-out`\n- **Default State**: Extruded shadow.\n- **Hover State**: `translate-y-[-1px]` (slight lift) + `Extruded Hover` shadow.\n- **Active/Pressed State**: `translate-y-[0.5px]` (physical press) + `Inset Small` shadow (or standard inset depending on size).\n- **Primary**: Accent background `#6C63FF`. Active state uses specific rgba inset shadows to work on color.\n- **Secondary**: Background `#E0E5EC` (match page).\n\n### Cards\n- **Shape**: `rounded-[32px]` (Significant rounding).\n- **Background**: `#E0E5EC`.\n- **Padding**: `p-8` to `p-20` depending on prominence.\n- **Hover**: `translate-y-[-2px]` + `Extruded Hover` shadow.\n- **Feature**: Use nested depth. Card is Extruded -> Icon well inside is Inset Deep -> Icon inside is distinct.\n\n### Inputs\n- **Shape**: `rounded-2xl`.\n- **Background**: `#E0E5EC`.\n- **Default**: `Inset` shadow.\n- **Focus**: `Inset Deep` shadow + Accent color Ring (offset by 2px with background color).\n- **Placeholder**: `#A0AEC0`.\n\n### Visual Decorations\n- **Icon Wells**: Always use `Inset Deep` or `Inset` shadows for icon containers. This makes them look "drilled" into the card.\n- **Decorations**: Use concentric circles of alternating Extruded and Inset shadows to create abstract, tactile background art.\n\n---\n\n## Layout Principles\n\n- **Spacing**: Open and airy. Use `py-32` for hero sections to let the shadows breathe. `gap-12` for grids.\n- **Container**: `max-w-7xl` for a wide, modern feel.\n- **Background**: The page background must be `#E0E5EC` globally. No gradients on the root background.\n\n## Animation & Micro-interactions\n- **Duration**: `300ms` for UI elements, `500ms` for nested depth circles (weightier, physics-based feel).\n- **Easing**: `ease-out` for natural deceleration.\n- **Properties**: `transform` (scale, translateY, rotate), `box-shadow` (depth changes).\n- **Hover Effects**:\n  - Cards: `-translate-y-1` (1px lift) + enhanced shadow depth\n  - Buttons: `-translate-y-1` on hover, `translate-y-0.5` on active (press down)\n  - Nested circles: `scale-105` (5% scale up) + `rotate-180` on inner element\n- **Floating Animation**: Custom `@keyframes float` with 3s ease-in-out infinite loop for ambient motion on decorative elements.\n- **Smooth Scrolling**: `scroll-behavior: smooth` for anchor navigation.\n\n## Accessibility\n- **Contrast**:\n  - Primary text `#3D4852` on `#E0E5EC`: 7.5:1 (WCAG AAA)\n  - Muted text `#6B7280` on `#E0E5EC`: 4.6:1 (WCAG AA)\n- **Focus States**: Visible 2px accent rings (`ring-2 ring-[#6C63FF]`) with 2px offset on `#E0E5EC` background. Mandatory on all interactive elements.\n- **Touch Targets**: Minimum 44x44px for mobile (buttons use `h-12 w-12` = 48px minimum).\n- **Mobile Navigation**: Hamburger menu with clear open/close states (Menu/X icons).\n- **Keyboard Navigation**: Full keyboard support with visible focus indicators on all links and buttons.\n\n## Responsive Design\n\n- **Mobile First**: Design starts with mobile view and enhances upward.\n- **Breakpoints**: `md:` (768px) for tablet, `lg:` (1024px) for desktop.\n- **Mobile Adaptations**:\n  - Hero visual shows on all screens with `max-w-md` constraint on mobile\n  - Hamburger menu replaces desktop navigation below `md:` breakpoint\n  - Grid layouts collapse: 3-column �+' 1-column, 2-column �+' 1-column\n  - Font sizes scale down: `text-7xl` �+' `text-5xl` on mobile\n  - Padding reduces: `p-16` �+' `p-8` on cards\n- **Navigation**: Sticky header with backdrop blur. Mobile menu slides down from header with extruded shadow.\n\n---\n\n## Anti-Patterns (Do Not Do)\n- **Hard Hex Shadows**: Do not use opaque hex codes for shadows (e.g., `#A3B1C6`). Use `rgb(... 0.6)` for transparency and blending.\n- **White Backgrounds**: Never use `bg-white` for cards. They must match the body background `#E0E5EC`.\n- **Flat Buttons**: Buttons must have depth (shadows). No flat designs.\n- **Sharp Corners**: `rounded-lg` is too sharp. Use `rounded-2xl` (16px) or `rounded-3xl` (24px) minimum.\n- **Poor Contrast**: Never use `#8B95A5` or `#A0AEC0` for body text. Use `#6B7280` or darker for WCAG compliance.\n- **Missing Focus States**: All interactive elements must have visible focus indicators.\n- **Block Display for Fonts**: Use `display=swap` in Google Fonts URL, not `display=block`.'},

===== STYLE BLOCK: newsprint (offset 839950 to 858451) =====
newsprint:{id:"newsprint",name:"Newsprint",mode:"light",fontType:"serif",description:"Stark black and white, high contrast, tight grids, newspaper aesthetic, sharp lines, editorial depth.",layoutIdeas:{hero:"Split 8-col/4-col grid. Main column has massive headline (5xl �+' 9xl), drop-cap intro paragraph, and CTA buttons. Side column contains stats box and ad placeholder with borders.",stats:"Full-width black background ticker with horizontal marquee. Monospace labels, bold values, red accent badges.",features:"4-column top grid with icons in bordered boxes, 3-column bottom grid with bullet points. All cells separated by black borders (collapsed grid style).",blog:"3-column grid with bordered card style. Grayscale images with sepia hover, date/author metadata in monospace, underline on hover.",howItWorks:"Dark inverted section (black bg, white text). 3-column grid with numbered red boxes, horizontal connecting line, vertical layout breakdown.",benefits:"Editorial 5-col/7-col split. Left has illustration placeholder, right has numbered list in 2-column text layout.",testimonials:"2-column grid with large quote marks, serif quotes, bordered author cards with grayscale images.",pricing:"3-column table grid with explicit borders. Highlighted tier has distinct background, massive serif pricing, feature checkmarks.",faq:"4-col/8-col split. Sidebar has help center box. Main area has accordion with plus/minus icons that rotate, expandable answers.",footer:"Multi-column site map with strict borders, company description, social icons in bordered boxes, edition/copyright info."},content:`# Design Style: Newsprint

## 1. Design Philosophy

**"All the News That's Fit to Print."**

This style is an ode to the golden age of print journalism, reimagined for the web. It embodies **absolute clarity, hierarchy, and structure** through its unwavering commitment to high-contrast typography, grid-based layouts, and sharp geometric precision.

### Core DNA
The newsprint aesthetic rejects modern web trends of soft shadows, blurred backgrounds, and rounded corners. Instead, it embraces:

- **Stark Geometry**: Zero border radius. Every element is a perfect rectangle with sharp 90-degree corners.
- **High Information Density**: Tight padding, collapsed grid borders, and efficient use of space mimic newspaper column layouts.
- **Typographic Drama**: Massive serif headlines (up to 9xl on desktop) paired with smaller, highly legible body text create extreme hierarchy.
- **Visible Structure**: Grid lines aren't hidden�?"they're celebrated. Borders between columns and sections are explicit and prominent.
- **Editorial Authority**: The design feels serious, timeless, and trustworthy�?"like a publication of record.
- **Paper Texture**: Subtle grain overlays and line patterns simulate the tactile quality of newsprint without being overly skeuomorphic.

### Vibe
Authoritative, intellectual, urgent, timeless. It feels like holding a fresh morning newspaper�?"crisp, organized, and information-rich. The design exudes confidence and credibility.

## 2. Design Token System (The DNA)

### Colors (Single Palette)
**Mode:** Light (Permanent - no dark mode)

- **Background:** \`#F9F9F7\` (Newsprint Off-White)
  A warm off-white that mimics aged paper. Not pure white�?"adds subtle warmth and reduces eye strain.

- **Foreground:** \`#111111\` (Ink Black)
  Very deep black, not pure \`#000\`. Used for all text and borders.

- **Muted:** \`#E5E5E0\` (Divider Grey)
  Light grey for secondary borders and subtle backgrounds.

- **Accent:** \`#CC0000\` (Editorial Red)
  Bright, unapologetic red used extremely sparingly�?"only for breaking news badges, CTAs, and hover states. 99% of the design is black and white.

- **Border:** \`#111111\` (Ink Black)
  The primary structural element. Borders define the grid and create visual rhythm.

- **Neutral Shades:**
  \`neutral-100\`: \`#F5F5F5\` (hover backgrounds)
  \`neutral-200\`: \`#E5E5E5\` (image placeholders)
  \`neutral-400\`: \`#A3A3A3\` (muted text in dark sections)
  \`neutral-500\`: \`#737373\` (metadata, captions)
  \`neutral-600\`: \`#525252\` (body text variations)
  \`neutral-700\`: \`#404040\` (secondary headings)

### Typography

**Font Stack:**
- **Serif (Headlines & Display):** \`'Playfair Display', 'Times New Roman', serif\`
  High-contrast, elegant, authoritative. Used for all major headings.

- **Serif (Body):** \`'Lora', Georgia, serif\`
  Highly legible serif for long-form reading text and paragraphs.

- **Sans-Serif (UI):** \`'Inter', 'Helvetica Neue', sans-serif\`
  Clean, modern sans for labels, buttons, navigation, and metadata.

- **Monospace (Data):** \`'JetBrains Mono', 'Courier New', monospace\`
  For stats, dates, edition numbers, and technical information.

**Scale Strategy:**
- **H1 (Hero Headlines):** \`text-5xl sm:text-6xl lg:text-9xl\` (80px �+' 128px)
  Massive, viewport-dominating. Use \`leading-[0.9]\` for ultra-tight line height. Apply \`tracking-tighter\` for condensed feel.

- **H2 (Section Headers):** \`text-4xl lg:text-5xl\` (36px �+' 48px)
  Bold, \`font-black\`, uppercase or sentence case depending on context.

- **H3 (Card Titles):** \`text-2xl lg:text-3xl\` (24px �+' 30px)
  \`font-bold\`, serif.

- **Body Text:** \`text-sm\` to \`text-lg\` (14px �+' 18px)
  Body font (Lora), \`leading-relaxed\` (line-height: 1.625).

- **Metadata/Labels:** \`text-xs\` (12px)
  Uppercase, \`tracking-widest\`, monospace or sans.

**Text Transform:**
- Uppercase for: Navigation, labels, metadata, badges, small caps for author bylines.
- Sentence case for: Headlines, article titles, body text.

### Radius & Border

**Border Radius:** \`0px\` everywhere. No exceptions.
Use inline styles or a \`.sharp-corners\` utility class to enforce zero radius on all components.

**Border Width:**
- Standard: \`1px\` solid black (\`border\`, \`border-r\`, \`border-b\`)
- Heavy emphasis: \`border-b-4\` or \`border-4\` (4px solid) for major section dividers
- Collapsed grids: Adjacent elements share borders to avoid double lines

**Border Style:**
Always solid. Never dashed or dotted except for rare decorative elements (e.g., \`border-dashed\` inside pricing cards for feature dividers).

### Shadows/Effects

**Philosophy:** Flat design. No soft drop shadows.

**Hover Effects:**
- **Hard Offset Shadow:** \`box-shadow: 4px 4px 0px 0px #111111\`
  Applied on hover to blog cards or interactive elements. Creates a "lifted" newspaper cutout effect.

- **Implementation:**
  \`\`\`css
  .hard-shadow-hover:hover {
    box-shadow: 4px 4px 0px 0px #111111;
    transform: translate(-2px, -2px);
  }
  \`\`\`

**No Effects:**
- No blur
- No inner shadows (except for rare decorative purposes)
- No gradient overlays

### Textures & Patterns

**Critical for Depth:** The newsprint style avoids "flat generic web design" through layered textures.

**1. Dot Grid Pattern (Main Background):**
\`\`\`html
backgroundImage: \`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23111111' fill-opacity='0.04' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")\`
\`\`\`
Subtle 4A-4px dot pattern applied to the body background.

**2. Line Grid Overlay (Section Texture):**
\`\`\`css
.newsprint-texture {
  position: relative;
}
.newsprint-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(0deg, transparent 98%, rgba(0,0,0,0.02) 100%),
    linear-gradient(90deg, transparent 98%, rgba(0,0,0,0.02) 100%);
  background-size: 3px 3px;
  pointer-events: none;
  opacity: 0.5;
}
\`\`\`
Apply \`.newsprint-texture\` to major sections for a fine graph-paper effect.

**3. Radial Dot Pattern (Image Placeholders):**
\`\`\`html
<div className="bg-[radial-gradient(#000_1px,transparent_1px)] opacity-10 [background-size:16px_16px]" />
\`\`\`
Used in placeholder images to simulate halftone printing.

**4. Ornamental Dividers:**
Use serif ornaments between major sections:
\`\`\`html
<div className="py-8 text-center font-serif text-2xl text-neutral-400 tracking-[1em]">
  &#x2727; &#x2727; &#x2727;
</div>
\`\`\`

## 3. Component Stylings

### Buttons

**Primary Button (Default):**
\`\`\`tsx
className="bg-[#111111] text-[#F9F9F7] border border-transparent hover:bg-white hover:text-[#111111] hover:border-[#111111]"
\`\`\`
- Solid black background, white text
- On hover: Inverts to white background, black text and border
- Sharp corners (enforced)
- Uppercase text with \`tracking-widest\`
- Transition: \`transition-all duration-200\`

**Secondary Button (Outline):**
\`\`\`tsx
className="border border-[#111111] bg-transparent hover:bg-[#111111] hover:text-[#F9F9F7]"
\`\`\`
- Transparent background, black border and text
- On hover: Fills with black, text turns white

**Ghost Button:**
\`\`\`tsx
className="hover:bg-[#E5E5E0] hover:text-[#111111]"
\`\`\`
- No border, subtle grey background on hover

**Link Button:**
\`\`\`tsx
className="text-[#111111] underline-offset-4 decoration-2 decoration-[#CC0000] hover:underline"
\`\`\`
- Text-only, red underline on hover

**Touch Targets:**
Ensure minimum \`min-h-[44px]\` and \`min-w-[44px]\` for mobile accessibility.

### Cards/Containers

**Standard Card:**
\`\`\`tsx
<div className="border border-[#111111] bg-[#F9F9F7] p-6">
\`\`\`
- Sharp black border
- Off-white background
- Tight padding (p-4 to p-8)

**Newspaper Column Grid:**
- Use \`border-r\` and \`border-b\` to create collapsed grid layouts
- Example: 4-column feature grid where each cell has \`border-r\` except the last, and all have \`border-b\` on mobile

**Hover States:**
- Add \`hover:bg-neutral-100\` to interactive cards
- Optionally add \`.hard-shadow-hover\` for dramatic lift effect

### Inputs

**Style:**
\`\`\`tsx
className="border-b-2 border-[#111111] bg-transparent px-3 py-2 font-mono text-sm focus-visible:bg-[#F0F0F0] focus-visible:outline-none"
\`\`\`
- Transparent background
- Only bottom border (2px solid black)
- Monospace font
- On focus: Light grey background (\`#F0F0F0\`), no ring

**No Radius:** Enforce \`borderRadius: 0px\` inline.

### Icons

**Library:** \`lucide-react\`

**Style:**
- \`stroke-width={1.5}\` or \`stroke-1\` class
- Color: Always black (\`text-[#111111]\`) except in inverted sections (white)
- Size: \`h-6 w-6\` standard, \`h-4 w-4\` for small

**Icon Containers:**
- Wrap in bordered boxes: \`border border-black h-12 w-12 flex items-center justify-center\`
- Hover effect: \`hover:bg-black hover:text-white transition-all\`

## 4. Non-Genericness (The "Bold" Factor)

### Mandatory Bold Choices

**1. Vertical Grid Dividers:**
Don't just separate sections horizontally. Use \`border-r\` to create strict vertical columns even within the same row. The page should feel like a newspaper grid, not a typical website.

**2. Drop Caps:**
Apply massive drop caps (\`text-7xl\`, \`float-left\`) to the first letter of key paragraphs (hero intro, product detail). Accent color optional.

**3. Marquee Ticker:**
Use a horizontal scrolling ticker (e.g., \`react-fast-marquee\`) for stats. Black background, white text, red accent badges. Mimics stock ticker or breaking news crawl.

**4. Edition Metadata:**
Add newspaper-style metadata:
- "Vol. 1 | [Date] | New York Edition" in header
- "Edition: Vol 1.0 | Printed in NYC" in footer
- "Fig. 1.1" captions on images

**5. Justified Text:**
Use \`text-justify\` for multi-column body text (blog descriptions, product detail) to create that newspaper column look.

**6. Grayscale Images:**
Apply \`grayscale\` filter to all images by default. On hover, add \`sepia-[50%]\` for a vintage newspaper photo effect.

**7. Asymmetric Layouts:**
Don't default to 50/50 splits. Use 8-col/4-col, 5-col/7-col splits for editorial feel.

**8. Uppercase Labels:**
Liberally use \`uppercase tracking-widest text-xs font-mono\` for section labels, navigation, and metadata.

**9. Inverted Sections:**
Flip at least one major section to black background with white text (e.g., How It Works). Use red accent for numbered steps.

## 5. Layout Strategy

### Container
**Max Width:** \`max-w-screen-xl\` (1280px)
Centered with \`mx-auto\`, horizontal padding \`px-4\`

### Grid System
**Base:** 12-column grid
Use Tailwind's \`grid-cols-12\` with \`col-span-*\` for precise control.

**Common Splits:**
- Hero: \`lg:col-span-8\` / \`lg:col-span-4\`
- Benefits: \`lg:col-span-5\` / \`lg:col-span-7\`
- Footer: \`col-span-2\` for logo/description, \`col-span-1\` for link columns

**Collapsed Borders:**
Adjacent grid cells share borders. Use \`border-r\` on all but the last column, \`border-b\` on all rows.

### Spacing
**Philosophy:** High information density. Tighter than typical web design.

- Section padding: \`py-16\` (vertical)
- Card padding: \`p-6\` to \`p-8\`
- Gap between items: \`gap-6\` to \`gap-8\`
- Mobile: Reduce to \`p-4\`, \`gap-4\`

### Z-Index Layers
- Header (sticky): \`z-40\`
- Overlays/modals: \`z-50\`

## 6. Effects & Animation

### Motion Philosophy
Fast, snappy, mechanical. No bouncy or organic easing.

**Transition Classes:**
\`\`\`tsx
"transition-all duration-200 ease-out"
"transition-colors duration-200"
\`\`\`

**Hover Behaviors:**
1. **Color Inversion:** Buttons, icons flip between black/white instantly
2. **Hard Shadows:** Cards gain offset shadow + slight translate
3. **Underlines:** Links gain thick underline (\`decoration-2 decoration-[#CC0000]\`)
4. **Scale:** Small elements like dots can \`hover:scale-150\`
5. **Background:** Containers get subtle grey background (\`hover:bg-neutral-100\`)

**No Floating:** Elements don't "lift" with soft shadows. They snap into place with hard shadows.

**Accordion Animation:**
\`\`\`tsx
className="grid transition-all duration-300 ease-in-out"
// Open: grid-rows-[1fr] opacity-100
// Closed: grid-rows-[0fr] opacity-0
\`\`\`

### Micro-Interactions
- FAQ plus icons rotate 45A� when open
- Blog card images scale 105% on hover
- Feature icon boxes invert colors on hover
- Navigation links turn red on hover

## 7. Spacing, Layout & Iconography

### Default Max-Width
\`max-w-screen-xl\` (1280px) for primary content container.

### Spacing System
Use an 8px grid system. Common values:
- Tight: \`gap-2\` (8px), \`p-2\` (8px)
- Standard: \`gap-4\` (16px), \`p-4\` (16px)
- Comfortable: \`gap-8\` (32px), \`p-8\` (32px)
- Spacious: \`gap-16\` (64px), \`py-16\` (64px)

**Mobile:** Reduce by one step (e.g., \`p-8\` �+' \`p-6\`)

### Iconography
**Integration:**
- Icons inside bordered boxes (feature cards)
- Icons as section markers (small squares, bullets)
- Icons in navigation (minimal use)
- Icons in social links (bordered boxes in footer)

**Style Consistency:**
- All icons from \`lucide-react\`
- Consistent stroke width (\`stroke-1\`)
- Black color by default, white in inverted sections

## 8. Responsive Strategy

### Breakpoints
- Mobile: \`< 768px\` (default)
- Tablet: \`md:\` (768px+)
- Desktop: \`lg:\` (1024px+)

### Mobile Adaptations
1. **Grid Collapse:**
   Multi-column grids collapse to single column (\`grid-cols-1\`)

2. **Border Removal:**
   Remove \`border-r\` on mobile, keep \`border-b\` for horizontal separators
   \`\`\`css
   @media (max-width: 767px) {
     .grid-border-r { border-right: none; }
   }
   \`\`\`

3. **Typography Scaling:**
   Headlines shrink dramatically: \`text-5xl\` �+' \`text-6xl\` �+' \`text-9xl\`

4. **Padding Reduction:**
   \`p-16\` �+' \`p-8\` �+' \`p-6\` on smaller screens

5. **Touch Targets:**
   All interactive elements minimum \`44x44px\` (\`min-h-[44px] min-w-[44px]\`)

6. **CTA Buttons:**
   Full width on mobile (\`w-full md:w-auto\`)

7. **Navigation:**
   Show hamburger menu icon on mobile (44px tap target)
   Hide main nav links, show mobile menu

### Maintaining Aesthetic
Even on mobile, preserve:
- Sharp corners (zero radius)
- High contrast
- Grid-based layout (just single column)
- Horizontal rule separators between sections
- Uppercase labels and metadata

## 9. Accessibility & Best Practices

### Contrast Ratios
- Black \`#111111\` on Off-White \`#F9F9F7\`: **AAA compliant** (>17:1)
- Red \`#CC0000\` on Off-White: **AA compliant** (>5:1)
- Never put red text on black background

### Focus States
\`\`\`tsx
"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
\`\`\`
- Thick black ring (2px)
- 2px offset for visibility
- Only visible when using keyboard navigation (\`:focus-visible\`)

### Semantic HTML
- Use \`<header>\`, \`<nav>\`, \`<section>\`, \`<footer>\`
- Use \`<h1>\` through \`<h6>\` in proper hierarchy
- Use \`<button>\` for interactive elements, not divs
- Use \`<a>\` for links with proper \`href\`

### ARIA Labels
- Add \`aria-label\` to icon-only buttons
- Add \`alt\` text to all images (even decorative ones)
- Add \`role="img"\` and \`aria-labelledby\` to SVG icons

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Visible focus states (see above)
- Accordion items use \`button\` with proper \`aria-expanded\`

## 10. Implementation Constraints

### Font Import
Use \`@import\` in inline \`<style>\` tag:
\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Lora:ital,wght@0,400;0,600;1,400&display=block');
\`\`\`

Define font classes:
\`\`\`css
.font-serif { font-family: 'Playfair Display', serif; }
.font-body { font-family: 'Lora', serif; }
.font-sans { font-family: 'Inter', sans-serif; }
.font-mono { font-family: 'JetBrains Mono', monospace; }
\`\`\`

### Tailwind Utilities
Create custom utilities in \`<style>\` block:
- \`.sharp-corners { border-radius: 0px !important; }\`
- \`.newsprint-texture { ... }\` (see Textures section)
- \`.hard-shadow-hover:hover { ... }\` (see Effects section)

### Border Collapse Logic
To avoid double borders in grids:
1. Use \`border-l\` and \`border-t\` on the container
2. Use \`border-r\` and \`border-b\` on children
3. Remove \`border-r\` on last column
4. Remove \`border-b\` on last row (if needed)

### Component Structure (React 19+)
- Use ref as prop, not \`forwardRef\`
- Use \`class-variance-authority\` for button/card variants
- Use \`tailwind-merge\` to merge className props

### Performance
- Lazy load images below the fold
- Use \`transform\` and \`opacity\` for animations (GPU accelerated)
- Avoid animating \`box-shadow\` directly (use \`will-change\` if needed)`},

===== STYLE BLOCK: organic (offset 858451 to 871486) =====
organic:{id:"organic",name:"Organic / Natural",mode:"light",fontType:"serif",description:"Earth-inspired palette with moss greens, terracotta, and sand tones. Features organic blob shapes, grain texture overlays, asymmetric rounded corners, and soft shadows. Embraces wabi-sabi philosophy with warmth and natural imperfection.",layoutIdeas:{hero:"Centered layout with overlapping organic blob backgrounds. Large serif typography with generous spacing. Trust badge with rounded pill shape. Dual CTAs in pill-shaped buttons.",stats:"Horizontal grid (2 cols mobile, 4 cols desktop) with centered text. Large serif numbers with hover scale animation. Subtle border separators.",productDetail:"Two-column split with rotated image frame and organic blob accent. Image has thick white border and soft shadow. Text constrained to max-w-2xl for readability.",features:"3-column responsive grid with cards featuring varied organic border radii. Icon containers with rounded corners that fill on hover. Blob background for ambient depth.",blog:"3-column grid of articles. Rounded image containers with overlay that fades on hover. Metadata with dot separators.",howItWorks:"3-step horizontal layout with curved SVG connecting path. Large numbered circles with thick borders. Centered text alignment.",benefits:"Two-column layout with dark moss green background and grain texture. Checkmark icons in rounded containers. Image masked with organic blob border-radius shape.",testimonials:"3-column grid on textured sand-colored background. Cards with subtle rotation on hover. Large quote marks as decorative element.",pricing:"3-column grid with center card scaled and highlighted. Rounded cards with soft shadows. Badge labels for featured tier.",faq:"Vertical accordion with organic rounded borders. Chevron rotates on open. Smooth expand/collapse animation.",footer:"Dark charcoal background with 4-column grid. Rounded social icons with hover states. Moss green accent for company branding."},content:"# Design Style: Organic / Natural\n\n## 1. Design Philosophy\nThis style embraces **wabi-sabi**�?"the acceptance of transience and imperfection. It rejects the cold precision of digital interfaces in favor of **warmth, softness, and natural connection**. It feels **tactile, grounded, and calming**.\n\n### Visual DNA\n*   **Core Signature**: Soft, amorphous blob shapes with varied organic border radii (using complex percentages like `60% 40% 30% 70% / 60% 30% 70% 40%`)\n*   **Texture is Essential**: Global grain/noise texture overlay at 3-4% opacity with multiply blend mode creates paper-like quality\n*   **Color Psychology**: Earth-drawn palette evokes forest floors, clay pottery, unbleached paper, dried grass, and river stones\n*   **Shadow Philosophy**: Soft, diffused shadows with natural color tints (moss green, clay orange) instead of pure black\n*   **Typography Emotion**: Fraunces serif brings old-world warmth with modern softness; Nunito's rounded terminals echo organic shapes\n\n### Design Principles\n*   **Vibe**: Peaceful, sustainable, handcrafted, authentic, rooted, welcoming, human\n*   **Core Tenet**: \"There are no straight lines in nature.\" Avoid sharp 90-degree angles. Everything should feel eroded by wind or water, or shaped by hand.\n*   **Rhythm**: Generous whitespace creates breathing room. Staggered grids and varied border radii prevent mechanical uniformity.\n*   **Interaction**: Gentle, natural motion�?"elements scale and lift on hover like picking up a river stone. No harsh snaps.\n*   **Asymmetry**: Intentional imperfection through rotated images, offset elements, and varied card shapes creates organic authenticity\n*   **Depth**: Multiple z-layers with blurred blobs, translucent overlays, and soft shadows create atmospheric depth without harsh contrast\n\n## 2. Design Token System (The DNA)\n\n### Colors (Single Palette - Light Mode)\nA palette drawn from the forest floor, clay, and unbleached paper.\n*   `background`: `#FDFCF8` (Off-white, Rice Paper)\n*   `foreground`: `#2C2C24` (Deep Loam / Charcoal)\n*   `primary`: `#5D7052` (Moss Green)\n*   `primary-foreground`: `#F3F4F1` (Pale Mist)\n*   `secondary`: `#C18C5D` (Terracotta / Clay)\n*   `secondary-foreground`: `#FFFFFF` (White)\n*   `accent`: `#E6DCCD` (Sand / Beige)\n*   `accent-foreground`: `#4A4A40` (Bark)\n*   `muted`: `#F0EBE5` (Stone)\n*   `muted-foreground`: `#78786C` (Dried Grass)\n*   `border`: `#DED8CF` (Raw Timber)\n*   `destructive`: `#A85448` (Burnt Sienna)\n\n### Typography\nCombining a characterful serif with a clean, rounded sans-serif.\n*   **Headings**: **'Fraunces'** (Google Font). A variable font with \"soft\" axes. It has a distinct, old-style warmth but feels modern. Use weights 600-800.\n*   **Body**: **'Nunito'** or **'Quicksand'**. Rounded terminals are essential to match the organic shapes.\n*   **Scale**: Moderate, not aggressive. 1.25 scale.\n\n### Radius & Shapes\n*   **Standard Radius**: `rounded-2xl` (16px) or `rounded-3xl` (24px).\n*   **Organic Shapes**: Use custom classes or inline styles for specific elements to create blob shapes.\n    *   Example: `border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;`\n*   **Borders**: Soft, sometimes slightly imperfect (simulated via double borders or slightly transparent thick borders).\n\n### Shadows & Effects\n*   **Shadows**: Soft, diffused, colored shadows. Never pure black.\n    *   `shadow-soft`: `0 4px 20px -2px rgba(93, 112, 82, 0.15)` (Moss tinted)\n    *   `shadow-float`: `0 10px 40px -10px rgba(193, 140, 93, 0.2)` (Clay tinted)\n*   **Textures**: **CRITICAL**. The background should have a subtle noise or paper grain overlay.\n    *   Implementation: Use a fixed pseudo-element on the body or main container with a base64 noise pattern set to `mix-blend-mode: multiply` and very low opacity (3-5%).\n\n## 3. Component Stylings\n\n### Buttons\n*   **Shape**: Fully rounded pills (`rounded-full`) for all variants\n*   **Primary**: Moss Green (#5D7052) background with Pale Mist (#F3F4F1) text. Soft colored shadow: `shadow-[0_4px_20px_-2px_rgba(93,112,82,0.15)]`\n*   **Outline**: 2px Terracotta (#C18C5D) border, transparent background, Terracotta text\n*   **Ghost**: Transparent with Moss Green text, hover fills with Moss/10 background\n*   **Interaction**: `hover:scale-105` with deepened shadow `hover:shadow-[0_6px_24px_-4px_rgba(93,112,82,0.25)]`. Active state: `active:scale-95` for tactile feedback\n*   **Sizes**: Default h-12, sm h-10, lg h-14. Generous horizontal padding (px-8 to px-10)\n*   **Typography**: Bold weight, base to lg sizing\n\n### Cards / Containers\n*   **Background**: Extremely light beige (#FEFEFA) over off-white page background\n*   **Border**: Soft timber border (#DED8CF) at 50% opacity: `border-[#DED8CF]/50`\n*   **Shape**: `rounded-[2rem]` base with asymmetric variations using custom values like `rounded-tl-[4rem]` on specific corners\n*   **Shadows**: Moss-tinted soft shadow: `shadow-[0_4px_20px_-2px_rgba(93,112,82,0.15)]`\n*   **Texture**: Fixed noise overlay layer at 3% opacity with multiply blend mode\n*   **Interaction**: Feature cards lift with `hover:-translate-y-1` and shadow deepens to `hover:shadow-[0_20px_40px_-10px_rgba(93,112,82,0.15)]`\n\n### Inputs\n*   **Shape**: Pill-shaped with `rounded-full`\n*   **Border**: Timber border (#DED8CF)\n*   **Background**: `bg-white/50` (semi-transparent) revealing page grain texture beneath\n*   **Focus State**: `focus-visible:ring-2 ring-[#5D7052]/30` with `ring-offset-2` for soft, natural glow (not sharp outline)\n*   **Typography**: Sans-serif body font, text-sm\n*   **Height**: h-12 for comfortable touch target\n\n### Navigation\n*   **Style**: Sticky floating pill (`sticky top-4`) with glassmorphism\n*   **Background**: `bg-white/70` with `backdrop-blur-md` for frosted effect\n*   **Border**: Soft timber border at 50% opacity with subtle shadow\n*   **Shape**: `rounded-full`\n*   **Logo**: Circular moss green container with white icon\n*   **Mobile**: Full menu dropdown with organic rounded borders (`rounded-[2rem]`)\n\n## 4. Layout & Spacing\n*   **Container Widths**: Vary by section for visual rhythm\n    *   Primary content: `max-w-7xl` (hero, features, blog, pricing)\n    *   Focused content: `max-w-6xl` (how it works, FAQ)\n    *   Intimate content: `max-w-5xl` (final CTA)\n    *   Text-heavy sections: `max-w-4xl` (hero inner), `max-w-2xl` (product detail text)\n*   **Section Padding**: Consistent `py-32` vertical spacing with `px-4 sm:px-6 lg:px-8` horizontal\n*   **Grid Patterns**:\n    *   Stats: `grid-cols-2 md:grid-cols-4`\n    *   Features/Blog/Testimonials: `md:grid-cols-3` (or `md:grid-cols-2 lg:grid-cols-3`)\n    *   Two-column layouts: `lg:grid-cols-2`\n    *   Grid gaps: Consistent `gap-8` with optional `md:gap-12` for stats\n*   **Whitespace Philosophy**: Use generous gaps (gap-8, gap-12, gap-16) to let design breathe. Space is a design element, not empty canvas.\n\n## 5. Non-Genericness (The Bold Factors)\n*   **Blob Backgrounds**: Large absolute-positioned blobs with `blur-3xl` create ambient color washes. Multiple shapes (via shapeIndex prop) with varied organic border radii. Used in Hero (2 blobs), Product Detail, Features, and Final CTA sections.\n*   **Rotated Image Frames**: Product detail image rotated `-2deg` with thick 4px white border creates handcrafted photo feel\n*   **Organic Image Masks**: Benefits section image uses complex blob border-radius: `rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]`\n*   **Asymmetric Card Radii**: Feature cards cycle through 6 different border-radius patterns, mixing large corner curves (4rem, 5rem) with standard (2rem)\n*   **Curved SVG Connectors**: How It Works uses hand-drawn looking curved dashed SVG path instead of straight lines\n*   **Hover Micro-rotations**: Testimonial cards subtly rotate on hover (`hover:rotate-1`) mimicking picking up a physical card\n*   **Varied Section Backgrounds**: Alternating between off-white, stone tint (#F0EBE5/30), sand (#E6DCCD/30), moss green (#5D7052), and terracotta (#C18C5D)\n*   **Dual Texture Layers**: Global grain texture PLUS section-specific noise overlays and blob backgrounds create rich depth\n\n## 6. Effects & Animation\n*   **Transition Philosophy**: Natural, gentle motion. Use `transition-all duration-300` or `duration-500` for smooth changes\n*   **Hover Animations**:\n    *   Buttons: `hover:scale-105` with shadow increase\n    *   Cards: `hover:-translate-y-1` (lift) or `hover:rotate-1` (subtle tilt)\n    *   Stats: `group-hover:scale-110` on numbers\n    *   Images: `hover:scale-105` with 700ms duration for slow reveal\n    *   Icon containers: Background color fill transition\n*   **Active States**: `active:scale-95` on buttons for tactile press feedback\n*   **Entrance/Exit**: Details accordion uses native `open:` state with chevron rotation\n*   **Image Overlays**: Fade overlays on hover (blog cards) using `group-hover:bg-transparent`\n*   **No Harsh Snaps**: All transitions eased, duration 300-700ms range for organic feel\n\n## 7. Icons (Lucide React)\n*   **Style**: Default stroke width (2px)\n*   **Color**: Moss Green (#5D7052) as default, white on dark backgrounds\n*   **Containers**: Icons sit in `h-14 w-14` rounded-2xl containers with `bg-[#5D7052]/10` background\n*   **Hover Effect**: Container fills completely to solid moss green while icon switches to white\n*   **Sizing**: 28px (size={28}) for feature icons, 24px for benefit checkmarks, responsive sizing for navigation\n*   **Usage**: Social icons in footer, feature icons, benefit checkmarks, navigation menu toggle, arrows in CTAs\n\n## 8. Accessibility\n*   **Contrast Ratios**:\n    *   Primary text (#2C2C24) on background (#FDFCF8): 14.5:1 (AAA)\n    *   Moss (#5D7052) on background: 6.2:1 (AA)\n    *   Muted text (#78786C) on background: 4.8:1 (AA)\n*   **Focus States**: `focus-visible:ring-2 ring-[#5D7052] ring-offset-2` provides clear, soft focus indicator\n*   **Touch Targets**: All interactive elements meet 44px minimum (buttons h-12 = 48px)\n*   **Semantic HTML**: Proper heading hierarchy, nav landmarks, alt text for images, aria-labels where needed\n*   **Keyboard Navigation**: All interactive elements keyboard accessible, details/summary for FAQ accordion\n\n## 9. Responsive Strategy\n*   **Mobile-First Approach**: Base styles mobile-optimized, enhanced at breakpoints\n*   **Breakpoint Usage**:\n    *   `sm:` (640px): Horizontal padding increases, some flex-row layouts\n    *   `md:` (768px): Major grid transitions (2-3 columns), nav reveals desktop version\n    *   `lg:` (1024px): 3-column grids, 2-column hero/benefits layouts\n*   **Typography Scaling**: Hero headline `text-5xl md:text-7xl`, sections `text-4xl md:text-5xl`\n*   **Stack Behavior**: All grids collapse to single column on mobile, flex layouts switch to `flex-col`\n*   **Navigation**: Mobile uses hamburger menu with slide-out panel, desktop inline nav\n*   **Blob Simplification**: Blobs remain but overflow hidden on mobile to prevent layout issues"},

===== STYLE BLOCK: playful-geometric (offset 871486 to 881138) =====
"playful-geometric":{id:"playful-geometric",name:"Playful Geometric",mode:"light",fontType:"sans-serif",description:"A vibrant, high-energy aesthetic that combines a stable structural grid with whimsical geometric decorations. It relies on bright solid colors, simple primitive shapes (circles, triangles, squiggles), and tactile interactions to create a friendly, optimistic vibe reminiscent of modern Memphis design.",layoutIdeas:{hero:"Centralized or split layout where the main headline is framed by floating geometric primitives (3D-looking flat shapes). The CTA button sits on a 'blob' or irregular shape background. Background features a subtle dot pattern.",stats:"Row of colorful distinct shapes (circle, square, triangle, hexagon) acting as containers for the numbers. The containers vibrate or rotate slightly on hover.",productDetail:"Two-column layout. Image side has a 'collage' feel with offset colored rectangles behind the main product image. Text side uses substantial padding and colorful bullets.",features:"Bento-box style grid, but each cell has a different playful background color (very light tints) or border radius strategy (some fully round, some leaf-shaped). Icons are solid, colorful circles.",blog:"Masonry or grid where featured images are clipped into interesting shapes (arch, pill, circle). Titles use a chunky display font. Tags look like little stickers.",howItWorks:"Horizontal or vertical timeline connected by a literal dashed SVG line that loops and squiggles between steps. Step numbers are inside solid colored stars or bursts.",benefits:"Alternating layout. Each benefit text block is paired with a large, abstract geometric composition (e.g., a square balancing on a circle) representing the concept.",testimonials:"Cards styled like speech bubbles (with the little tail). They scattered slightly (random rotation +/- 2deg) to feel informal. Avatars pop out of the frame.",pricing:"Three distinct columns. The 'Recommended' tier pops out with a thick dashed border and a floating 'Best Value' badge that looks like a sticker. Prices are massive and colorful.",faq:"Accordion items separated by thick distinct borders. When opened, the background fills with a light pattern (dots or lines). The expand icon is a large playful arrow or plus sign.",finalCTA:"A contained box with a 'wavy' top edge or bottom edge. High contrast background (bright yellow or blue). Button shakes slightly to attract attention.",footer:"Background is a dark shape with a 'dripping' paint effect or wave at the top. Large footer links with fun hover underlines (squiggles)."},content:`# Playful Geometric Design System

## Design Philosophy

**Playful Geometric** is the antidote to sterile, corporate minimalism. It creates an emotional connection through **optimism, clarity, and tactile fun**.

The core concept is **"Stable Grid, Wild Decoration"**. The content itself (text, forms) lives in clean, readable areas, but the world around it is alive with movement and shape. It references the **Memphis Group** (80s) but cleans it up for modern digital screens�?"removing the chaos while keeping the energy.

### The Vibe
**Friendly. Tactile. Pop. Energetic.**
It feels like a playground or a well-organized sticker book. It invites clicking. It smiles at you.

### Visual Signatures
- **Primitive Shapes**: Circles, triangles, squares, pill shapes, and squiggles used as background elements, masks, or icons.
- **Hard Shadows**: Elements often have a hard, offset drop shadow (no blur) giving a sticker or cut-out paper feel.
- **Pattern Fills**: Polka dots, grid lines, and diagonal stripes used to fill shapes or backgrounds.
- **Varied Radii**: Mixing fully rounded corners with sharp ones to create "leaf" shapes or asymmetric blobs.

---

## Design Token System

### Colors (Light Mode)
A punchy, high-saturation palette anchored by strong neutrals.

\`\`\`
background:        #FFFDF5    // Warm Cream/Off-White (Paper feel)
foreground:        #1E293B    // Slate 800 (Softer than black)
muted:             #F1F5F9    // Slate 100
mutedForeground:   #64748B    // Slate 500
accent:            #8B5CF6    // Vivid Violet (Primary Brand)
accentForeground:  #FFFFFF    // White
secondary:         #F472B6    // Hot Pink (Playful pop)
tertiary:          #FBBF24    // Amber/Yellow (Optimism)
quaternary:        #34D399    // Emerald/Mint (Freshness)
border:            #E2E8F0    // Slate 200
input:             #FFFFFF    // White
card:              #FFFFFF    // White
ring:              #8B5CF6    // Violet Focus
\`\`\`

**Usage Rule**: Use \`accent\` for primary actions. Use \`secondary\`, \`tertiary\`, and \`quaternary\` rotationally for decorative shapes, icons, or emphasized words to create a "confetti" effect.

### Typography

**Headings**: \`"Outfit", system-ui, sans-serif\`
- A geometric sans with character. Rounded corners on letters make it friendly.
- **Weights**: Bold (700) or ExtraBold (800).

**Body**: \`"Plus Jakarta Sans", system-ui, sans-serif\`
- Highly legible, modern, geometric but humanist.
- **Weights**: Regular (400), Medium (500).

**Scale Ratio**: 1.25 (Major Third) - melodic and harmonious.

### Radius & Border

\`\`\`
radius-sm:   8px
radius-md:   16px
radius-lg:   24px
radius-full: 9999px
border-width: 2px     // Chunky borders by default
\`\`\`

**Special "Blob" Radius**: \`rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-none\` (Speech bubble style) or \`rounded-t-full rounded-b-none\` (Arch).

### Shadows & Effects

**The "Pop" Shadow (Hard Shadow)**:
\`\`\`
box-shadow: 4px 4px 0px 0px #1E293B;  // Dark hard shadow
box-shadow-hover: 6px 6px 0px 0px #1E293B; // Lift effect
box-shadow-active: 2px 2px 0px 0px #1E293B; // Press effect
\`\`\`
No blur. Solid offset colors.

### Textures & Patterns
- **Dot Grid**: A background of small dots (\`bg-[url(...)]\`) in strict formation.
- **Squiggles**: SVG paths used as section dividers or underlining for headings.
- **Confetti**: Small SVG shapes (triangles, circles) absolutely positioned behind main content blocks.

---

## Component Stylings

### Buttons

**Primary Button ("The Candy Button")**:
\`\`\`
- Bg: accent (#8B5CF6)
- Text: white, font-weight: 700
- Radius: rounded-full (Pill)
- Border: 2px solid #1E293B (Dark border around color)
- Shadow: 4px 4px 0px #1E293B (Hard shadow)
- Hover: translate-x-[-2px] translate-y-[-2px], shadow extends to 6px 6px
- Active: translate-x-[2px] translate-y-[2px], shadow shrinks to 2px 2px
- Icon: ArrowRight, circular background (white) inside button
\`\`\`

**Secondary Button**:
\`\`\`
- Bg: transparent
- Text: foreground
- Border: 2px solid #1E293B
- Radius: rounded-full
- Shadow: none
- Hover: bg-tertiary (#FBBF24) - Fills with yellow on hover
\`\`\`

### Cards

**The "Sticker" Card**:
\`\`\`
- Bg: white
- Border: 2px solid #1E293B
- Radius: rounded-xl
- Shadow: 8px 8px 0px #E2E8F0 (Soft hard shadow) or #F472B6 (Pink shadow for featured)
- Hover: Rotate -1deg, Scale 1.02 (Wiggle effect)
- Title: Bold Outfit font
- Icon: Floating circle div with centered icon, sitting half-in/half-out of the top border.
\`\`\`

### Inputs

\`\`\`
- Bg: white
- Border: 2px solid #CBD5E1
- Radius: rounded-lg
- Text: foreground
- Shadow: 4px 4px 0px transparent (hidden initially)
- Focus: Border accent, Shadow 4px 4px 0px accent (Hard color shadow on focus)
- Label: Bold, uppercase, small tracking-wide.
\`\`\`

---

## Layout Strategy

### General
- **Container**: \`max-w-6xl\` (Generous width).
- **Spacing**: \`py-24\` (96px). Spacious but not empty; filled with patterns.
- **Grid**: 12-column logic, but grouped into big blocks (6/6 or 4/4/4).

### Unique Section Layouts
1.  **Hero**:
    - Text left, Image right.
    - **Decoration**: A massive yellow circle behind the text. A dotted pattern behind the image. The image itself has a "blob" mask (CSS clip-path or border-radius manipulation).
2.  **Features**:
    - Grid of 3.
    - **Decoration**: Each card is connected by a dashed SVG line drawn in the background.
    - Alternating colors for card headers (Violet, Pink, Yellow).
3.  **Pricing**:
    - The middle card is scaled up (1.1) and has a massive yellow star badge "MOST POPULAR" rotated 15deg.

---

## Effects & Animation

**Feel**: Bouncy, Elastic, Fun.

- **Hover**: \`transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]\` (Overshoot/Bounciness).
- **Entrance**: Elements shouldn't just fade in; they should **pop** in (Scale 0->1 with bounce).
- **Marquee**: Use infinite scrolling text for client logos or keywords.
- **Wiggle**: Keyframe animation \`rotate: 0deg -> 3deg -> -3deg -> 0deg\` on hover for icons.

---

## Iconography

**Lucide React** settings:
- **Stroke Width**: \`2.5px\` (Bold/Chunky).
- **Style**: Round line caps, round line joins.
- **Color**: Often white inside a colored circle, or the dark foreground color.
- **Usage**: Enclosed in shapes. Never floating alone. A "Check" icon isn't just a check; it's a check inside a green circle.

---

## Responsive Strategy

- **Mobile**:
  - Stack everything.
  - Reduce "pop" shadows to 2px to save space.
  - Turn horizontal squiggle lines into vertical dividers.
  - Keep buttons big and tappable (min 48px height).
  - Hide complex background floating shapes that might overlap text.

---

## Accessibility & Best Practices

- **Contrast**: The text is slate-800 on off-white/white, which is AAA.
- **Color**: Never rely *only* on color. Use shapes and text labels.
- **Motion**: Respect \`prefers-reduced-motion\`. Disable the "bounce" and "wiggle" effects if preferred.
- **Focus**: The focus state is high-contrast (thick colored border + hard shadow).`},

===== STYLE BLOCK: professional (offset 881138 to 904494) =====
professional:{id:"professional",name:"Business Style",mode:"light",fontType:"serif",description:"An editorial-inspired minimalist design system centered on elegant serif typography. Warm ivory backgrounds with subtle paper texture, refined spacing, rule lines, and classical proportions create a timeless, literary aesthetic. Enhanced depth through layered gradients and multi-toned shadows. The design whispers sophistication through restraint and typographic excellence.",layoutIdeas:{hero:"Full-width centered layout with dramatic oversized serif headline (2.5rem mobile, 7xl desktop). Generous vertical breathing room (py-32 to py-44). Subtle decorative rule line below headline. Dual CTA buttons with refined hover states including subtle lift. Trust indicator in small caps with generous letter-spacing. Responsive text scaling maintains hierarchy on all devices.",stats:"Horizontal 4-column layout (2-column on mobile) with thin vertical rule dividers between stats. Dividers appear between columns on mobile and all stats on desktop. Large display serif numbers (4xl mobile, 5xl desktop). Labels in monospace small caps with wide tracking (0.15em). Clean card background with border lines top and bottom.",features:"3-column grid (stacks to 1 column mobile) with generous gaps (gap-8). Each card has 2px accent top border, rounded corners, and enhanced hover effect with background tint. Icon in muted circle background. Serif title with sans-serif description. Hover reveals subtle background shift and enhanced shadow.",howItWorks:"3-column layout with large circular step numbers in serif. Horizontal connecting line on desktop. Each step has generous padding and clean typography hierarchy. Background uses card color for contrast.",benefits:"Asymmetric two-column layout (1.3fr / 0.7fr ratio, stacks on mobile). Left column has title, subtitle, and bulleted list with elegant dash markers. Right column features enhanced abstract graphic with gradient backgrounds, layered circles, and hover-interactive elements. Refined typography hierarchy throughout.",pricing:"3-column grid (stacks vertically mobile) with center card elevated (-translate-y-4 on desktop). Thin rule borders with accent border on highlighted tier. Large serif price numbers. Feature lists with checkmarks colored by tier importance. Highlighted tier has warm accent background tint (accent-muted). Badge positioning uses absolute positioning.",testimonials:"3-column grid (stacks mobile) with large decorative opening quotation mark (100px, 20% opacity) in accent color. Italic serif quotes with generous line-height. Author info with circular avatar (48x48px) and refined typography. Subtle card borders and shadows.",faq:"Clean accordion with serif question titles (text-xl). Circular button with plus icon that rotates 45deg to form X when open. Thin border separators between items. Generous padding (py-6). Sans-serif answer text with relaxed leading (1.75). Smooth height and opacity animations.",blog:"3-column grid (stacks mobile) with images in 16:10 aspect ratio. Date in monospace small caps. Serif titles with hover color shift to accent. Images have subtle border and shadow enhancement on hover. 'Read more' link with arrow icon and translate animation.",footer:"5-column grid (2 columns for company, 1 each for nav groups, stacks to 2-col on mobile). Logo in serif. Social icons in circular borders with hover state showing accent color. Bottom copyright bar with thin top border and flex layout for alignment. Links have accent hover states."},content:`# Design Style: Serif

## Design Philosophy

### Core Principle

**Typographic elegance through classical restraint.** This design system draws inspiration from the finest editorial publications, literary magazines, and luxury brand identities. It believes that the highest form of design is one that elevates content through refined typography, considered spacing, and deliberate simplicity.

The serif typeface is not merely a font choice�?"it is the soul of this aesthetic. Every curve of the letterform, every carefully weighted stroke, speaks to centuries of typographic tradition. This design honors that heritage while executing with modern precision.

### The Visual Vibe

**Editorial. Timeless. Warm. Refined.**

Imagine opening a beautifully designed hardcover book or a premium architecture magazine. The pages breathe. The typography has room to speak. Nothing screams for attention because everything has been placed with intention. This is the feeling we create.

**Emotional Keywords:**
- *Timeless* �?" This design would feel appropriate today, a decade ago, or a decade from now. It transcends trends.
- *Warm* �?" The ivory backgrounds, the organic serif curves, the golden accent create an inviting, human quality.
- *Sophisticated* �?" Small caps, refined rules, generous margins all whisper quality and attention to detail.
- *Literary* �?" This feels like it belongs in the world of ideas, of considered communication, of meaningful content.
- *Confident* �?" True elegance comes from restraint, not embellishment. This design is secure enough to be quiet.

**What This Design Is NOT:**
- Not cold or stark (despite being minimal)
- Not trendy or ephemeral (the serif anchors it in timelessness)
- Not decorative or ornate (restraint is key)
- Not corporate or generic (the typography gives it soul)
- Not loud or aggressive (it draws you in rather than demanding attention)

### The DNA of This Style

#### 1. The Signature Serif

The **Playfair Display** typeface is the cornerstone. Its high contrast between thick and thin strokes, its elegant ball terminals, and its classical proportions immediately establish editorial gravitas. This font has presence�?"it commands attention without raising its voice.

**Where it appears:**
- All major headlines (h1, h2, h3)
- Large display numbers (pricing, stats)
- Pull quotes in testimonials
- Logo wordmark

**Why it works:** Serif typefaces carry associations with tradition, trustworthiness, and intellectual depth. Playfair Display specifically feels both classical and contemporary�?"it's not stuffy or old-fashioned but brings warmth and character.

#### 2. The Warm Palette

Color in this system is used with extreme restraint. The palette is essentially monochromatic with a single warm accent:

- **Ivory (#FAFAF8)** �?" A cream-tinted white that feels warmer than pure white
- **Rich Black (#1A1A1A)** �?" Deep but not harsh, for primary text
- **Warm Gray (#6B6B6B)** �?" For secondary text, with slight warmth
- **Burnished Gold (#B8860B)** �?" The single accent color, used sparingly for emphasis

The gold accent is inspired by gold leaf in illuminated manuscripts, the gilded edges of fine books, the brass details in luxury interiors. It adds just enough warmth and distinction without overwhelming the monochrome foundation.

#### 3. The Rule Line System

Thin horizontal rules (1px lines) are a defining element:
- Section dividers
- Card borders (top accent lines)
- Underline effects on key elements
- Table separators

These rules are inspired by editorial layouts where fine lines create structure and rhythm without visual weight. They're always in the border color (#E8E4DF), slightly warmer than pure gray.

#### 4. Small Caps & Tracking

**Small caps** are used extensively for:
- Section labels
- Meta information (dates, categories)
- Supporting text
- Navigation items

Combined with **generous letter-spacing (0.1em - 0.15em)**, small caps create a refined, sophisticated look that's distinctly editorial. This is not a cheap trick�?"it's a typography fundamental that separates thoughtful design from generic output.

#### 5. Generous Whitespace

This design breathes. Margins are large. Padding is substantial. Line heights are relaxed.

- Section padding: \`py-32\` to \`py-44\`
- Content max-width: \`max-w-5xl\` (narrower for reading comfort)
- Line height for body: \`1.75\` (very relaxed)
- Letter spacing for body: slight positive tracking for readability

The whitespace isn't empty�?"it's an active design element that gives the typography room to perform.

#### 6. Asymmetric Balance

While the overall aesthetic is classical, the layouts embrace asymmetric compositions:
- Hero: Centered but with offset decorative elements
- Benefits: Uneven column splits (1.3fr / 0.7fr)
- Cards: Thin top border creates visual weight at top

This prevents the design from feeling static or predictable while maintaining elegance.

### Differentiation: Minimalism With Soul

Many minimalist designs strip away so much that they become characterless�?"white backgrounds, gray text, system fonts. This design proves that minimalism and personality are not mutually exclusive.

**The serif typeface is the key differentiator.** It brings:
- Visual interest without decoration
- Warmth without color
- Character without complexity
- Timelessness without being dated

This is minimalism with a point of view. It has something to say.

### Sensory Description

If this design were a physical space, it would be:
- A private library with floor-to-ceiling bookshelves
- Natural light filtering through tall windows
- A worn leather chair and a mahogany writing desk
- The smell of aged paper and fresh coffee
- Silence that invites contemplation

If it were music, it would be:
- Solo piano, perhaps Satie or Debussy
- Lots of space between notes
- Warm, resonant tones
- Something you'd hear in a boutique hotel lobby
- Understated but unmistakably refined

---

## Design Token System (The DNA)

### Color Strategy

**Monochrome With Warmth:** An intentionally limited palette that gains sophistication through restraint. The single gold accent provides just enough distinction.

| Token | Value | Usage & Context |
|:------|:------|:----------------|
| \`background\` | \`#FAFAF8\` | Primary canvas. Warm ivory that feels more refined than pure white. |
| \`foreground\` | \`#1A1A1A\` | Primary text. Rich black, not pure black. |
| \`muted\` | \`#F5F3F0\` | Secondary surfaces, card backgrounds. Slightly warmer than background. |
| \`muted-foreground\` | \`#6B6B6B\` | Secondary text. Warm gray with softness. |
| \`accent\` | \`#B8860B\` | Burnished gold. Links, highlights, key interactive elements. |
| \`accent-secondary\` | \`#D4A84B\` | Lighter gold for gradients and hover states. |
| \`accent-foreground\` | \`#FFFFFF\` | Text on accent backgrounds. |
| \`border\` | \`#E8E4DF\` | Warm gray for rules, dividers, card borders. |
| \`card\` | \`#FFFFFF\` | Card surfaces. Pure white for maximum lift from ivory background. |
| \`ring\` | \`#B8860B\` | Focus rings. Matches accent gold. |

---

### Typography System

**Font Pairing (Editorial System):**
- **Display/Headlines:** \`"Playfair Display", Georgia, serif\` �?" Elegant high-contrast serif for all headings. The signature of this design.
- **Body/UI:** \`"Source Sans 3", system-ui, sans-serif\` �?" Clean, highly readable sans-serif that complements without competing.
- **Monospace:** \`"IBM Plex Mono", monospace\` �?" For labels and small caps treatments.

**Type Scale & Usage:**

| Element | Size | Font | Weight | Tracking | Notes |
|:--------|:-----|:-----|:-------|:---------|:------|
| Hero Headline | \`7xl\` �+' \`4.5rem\` | Playfair Display | Normal | \`-0.02em\` | Tight leading (1.1). Center-aligned. |
| Section Headlines | \`4xl\` �+' \`2.5rem\` | Playfair Display | Normal | \`-0.01em\` | Leading 1.2. |
| Card Titles | \`xl\` �+' \`1.25rem\` | Playfair Display | Semibold | Normal | Leading 1.3. |
| Body Text | \`base\` �+' \`lg\` | Source Sans 3 | Normal | \`0.01em\` | Relaxed line-height (1.75). |
| Section Labels | \`xs\` (12px) | IBM Plex Mono | Medium | \`0.15em\` | UPPERCASE small caps style. |
| Navigation | \`sm\` | Source Sans 3 | Medium | \`0.05em\` | Slightly tracked. |

**Small Caps Pattern:**
\`\`\`css
.small-caps {
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
\`\`\`

---

### Spacing & Layout

**Core Principle:** Luxurious breathing room. This design is not afraid of empty space.

- **Section Spacing:** Large vertical padding (\`py-32\` to \`py-44\`) creates paced, contemplative scrolling.
- **Container Width:** \`max-w-5xl\` (64rem) for narrower, more readable content columns.
- **Component Density:** Generous internal padding (p-8 to p-10) on cards.
- **Grid Gaps:** \`gap-8\` to \`gap-12\` between grid items.

**Layout Patterns:**
- Hero: Centered, narrow container, stacked elements
- Features: 3-column grid with generous gaps
- Benefits: Asymmetric 2-column (\`grid-cols-[1.3fr_0.7fr]\`)
- Use thin rule lines to create visual structure

---

### Borders, Surfaces & Shadows

**Surfaces:**
- Cards use pure white (\`#FFFFFF\`) for lift from ivory background
- Very subtle shadows�?"this isn't about depth, it's about refinement
- Thin borders (1px) in warm gray

**Border System:**
| Token | Value | Usage |
|:------|:------|:------|
| \`border-thin\` | \`1px solid #E8E4DF\` | Primary borders, rules |
| \`border-accent\` | \`1px solid #B8860B\` | Accent borders, highlighted cards |

**Shadow System:**
| Token | Value | Usage |
|:------|:------|:------|
| \`shadow-sm\` | \`0 1px 2px rgba(26,26,26,0.04)\` | Subtle lift |
| \`shadow-md\` | \`0 4px 12px rgba(26,26,26,0.06)\` | Cards, hover states |
| \`shadow-lg\` | \`0 8px 24px rgba(26,26,26,0.08)\` | Elevated elements |

**Rule Lines (Critical for Style Identity):**
- Thin horizontal rules as section dividers
- Top border accent on cards (1px accent color)
- Decorative rule under headlines

---

## Component Styling & Interactions

### Buttons

**Primary Button:**
- Background: \`accent\` gold
- Text: White, medium weight, slightly tracked
- Border-radius: \`rounded-md\` (6px) �?" not too round, not too sharp
- Shadow: Very subtle, accent-tinted (\`shadow-sm\`)
- Hover: Color shifts to \`accent-secondary\`, shadow enhances to \`shadow-accent\`, subtle lift (-translate-y-0.5)
- Active: Returns to base position (translate-y-0)
- Touch: \`touch-manipulation\` class for better mobile interaction
- Minimum height: 44px on mobile (accessibility requirement)

**Secondary/Outline Button:**
- Background: Transparent
- Border: \`1px\` in \`foreground\` color (strong contrast)
- Text: \`foreground\`
- Hover: Fill with \`muted\` background, border and text shift to \`accent\` color
- Smooth color transitions on all properties

**Ghost Button:**
- No background or border
- Text: \`muted-foreground\` �+' \`foreground\` on hover
- Underline appears on hover with \`accent\` color decoration
- Underline offset: 4px for breathing room

**Animation:** Refined transitions (\`200ms\`). Subtle lift on primary buttons adds tactile feedback while maintaining elegance.

---

### Cards

**Standard Card:**
- Background: \`card\` (white)
- Border: \`1px\` in \`border\` color
- Border-radius: \`rounded-lg\` (8px)
- Shadow: \`shadow-sm\` �?" very subtle
- Top accent: Optional \`2px\` accent border on top edge (when \`accentTop\` prop used)

**Hover Effects (when \`hoverEffect\` prop used):**
- Shadow increases to \`shadow-md\`
- Border color shifts to \`border-hover\`
- Background subtle tint to \`muted/30\` (30% opacity)
- No translate/lift �?" maintains elegant restraint
- Smooth \`200ms\` transition on all properties

**Elevated Card:**
- Uses \`shadow-md\` by default (when \`elevated\` prop used)
- Provides more depth for important content like highlighted pricing tiers

**Featured Card:**
- Background tint of accent color at 6% (\`accent-muted\`)
- Accent top border at 2px thickness
- Often combined with elevated shadow for maximum prominence

---

### Inputs

- Height: \`h-12\` (44px minimum for accessibility)
- Border: \`1px\` in \`input\` color (matches \`border\`)
- Border-radius: \`rounded-md\` (6px)
- Background: Transparent
- Hover: Border shifts to \`border-hover\` color
- Focus:
  - \`ring-2 ring-accent ring-offset-2\`
  - Border shifts to \`accent\` color for clear visual feedback
  - Smooth \`150ms\` transition
- Placeholder: \`text-muted-foreground/60\` (60% opacity for subtle hierarchy)
- Typography: Sans-serif body font, base size
- Transitions: All properties animate smoothly with \`ease-out\` easing

---

### Section Labels

A consistent label pattern appears at the start of each section:
\`\`\`jsx
<div className="mb-6 flex items-center gap-4">
  <span className="h-px flex-1 bg-[var(--border)]" />
  <span className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-[var(--accent)]">
    Section Name
  </span>
  <span className="h-px flex-1 bg-[var(--border)]" />
</div>
\`\`\`

---

## The "Bold Factor" (Signature Elements)

These elements prevent generic output and define this style:

1. **Dramatic Serif Headlines:** Oversized serif typography (7xl in hero) that commands attention through scale and beauty, not decoration.

2. **Rule Line System:** Thin horizontal rules throughout create rhythm and structure�?"a distinctly editorial element.

3. **Small Caps Labels:** All section labels and meta info use tracked uppercase monospace, creating refined visual rhythm.

4. **Burnished Gold Accent:** The single warm accent color adds just enough distinction to prevent sterility.

5. **Generous Whitespace:** Sections breathe with \`py-32\` to \`py-44\` padding. This is premium, not cramped.

6. **Large Display Numbers:** Stats and pricing use serif display numbers at dramatic sizes (5xl+).

7. **Decorative Quote Marks:** Testimonials feature large opening quote marks in accent gold.

8. **Asymmetric Layouts:** Strategic use of uneven columns prevents static feeling while maintaining elegance.

9. **Layered Depth in Abstracts:** Product detail and benefits sections feature enhanced abstract graphics with:
   - Gradient backgrounds (\`from-[color] via-[color] to-[color]\`)
   - Decorative ring/circle elements with low opacity
   - Multi-layered card elements with borders and shadows
   - Hover-interactive elements that respond to user interaction
   - Subtle accent color tints for visual interest

10. **Paper Texture Overlay:** Subtle noise texture overlay at 30% opacity across entire page creates tactile, print-like quality.

11. **Ambient Glow:** Large blurred circle with 2% opacity accent color creates warm atmospheric depth.

12. **Enhanced Micro-interactions:**
    - Button subtle lift on hover with return animation
    - Card background tinting on hover
    - Border color shifts throughout interface
    - Smooth 200ms transitions on all interactive elements

---

## Effects & Animation

**Motion Philosophy:** Restrained and refined. Nothing bounces, nothing overshoots. Every animation should feel inevitable, not surprising.

**Transition Defaults:**
- Standard: \`transition-all duration-200 ease-out\`
- Subtle: \`duration-150\`

**Interaction States:**
- Hover brightness change: 5-10%, no dramatic shifts
- Shadow enhancement on hover
- Underlines appearing/growing
- NO translate/lift effects �?" too trendy for this timeless aesthetic

**Entrance Animations (Optional, Subtle):**
\`\`\`js
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};
\`\`\`

---

## Responsive Strategy

**Breakpoint Philosophy:** Mobile layouts maintain the editorial feel through typography and spacing, even when structure simplifies. All interactive elements meet accessibility requirements for touch targets.

### Mobile Adaptations (< 768px)

- **Hero:**
  - Single column with centered text
  - Headline size: \`text-[2.5rem]\` (40px) maintains presence
  - CTAs stack vertically with full width on small screens
  - Maintains generous vertical padding

- **Stats:**
  - 2-column grid on mobile (4-column on desktop)
  - Vertical dividers between columns only (not all items)
  - Numbers scale to \`text-4xl\` (still prominent)
  - Horizontal gap added (\`gap-x-6\`) to prevent crowding

- **Features/Testimonials/Blog:**
  - Stack to single column
  - Generous gaps maintained (\`gap-8\` minimum)
  - Card styling remains consistent
  - Hover effects work as tap effects on mobile

- **Pricing:**
  - Stack vertically
  - Highlighted tier loses elevation (no -translate-y-4) but keeps visual distinction through background tint
  - All cards equal width for consistency

- **Navigation:**
  - Logo scales down slightly (\`text-lg\` �+' \`text-xl\`)
  - Desktop nav hidden on mobile/tablet
  - Primary CTA always visible
  - Mobile menu would be hamburger pattern (if implemented)

### Touch Optimization

- **All buttons:** Minimum 44px height (\`min-h-[44px]\`) on mobile
- **FAQ accordions:** 44px minimum height with \`touch-manipulation\`
- **All interactive elements:** Use \`touch-manipulation\` CSS for better tap response
- **Links:** Adequate padding and spacing for fat-finger friendly tapping

**Key Adaptations:**
- Section padding reduces gracefully but maintains premium feel
- Typography scales down but hierarchy crystal clear
- Serif font impact preserved�?"soul of design intact on all devices
- Rule lines and gold accents remain consistent
- No horizontal overflow�?"tested with various content widths
- Touch targets meet WCAG AAA standards (minimum 44x44px)

---

## Accessibility & Best Practices

**Color Contrast:**
- All text meets WCAG AA standards minimum
- Rich black (#1A1A1A) on ivory (#FAFAF8) provides excellent readability
- Gold accent (#B8860B) passes contrast requirements on white backgrounds
- Muted foreground (#6B6B6B) maintains sufficient contrast for secondary text

**Focus States:**
- Visible focus rings on all interactive elements: \`ring-2 ring-accent ring-offset-2\`
- Focus states use accent gold color for consistency
- Offset creates clear visual separation from element
- Input borders shift to accent color on focus for additional feedback
- All focus states tested with keyboard navigation

**Touch & Interaction:**
- All buttons meet minimum 44x44px touch target (WCAG AAA)
- \`touch-manipulation\` CSS prevents double-tap zoom on mobile
- FAQ accordion buttons have adequate size and spacing
- All clickable areas have sufficient padding
- No touch targets overlap or create confusion

**Typography:**
- Body text uses relaxed line-height (1.75) for comfortable reading
- Slight positive tracking improves readability on screens
- Base font size: 16px (never smaller for body text)
- Heading hierarchy clearly defined with size and font variation
- Line length controlled with max-width (max-w-5xl) for optimal reading

**Motion:**
- All animations are subtle and respectful (200ms standard)
- No rapid movements or flashing
- Transforms limited to subtle shifts (translate-y-0.5)
- \`prefers-reduced-motion\` should be respected in production
- Easing curves use gentle \`ease-out\` for natural feel

**Semantic HTML:**
- Proper heading hierarchy (h1 �+' h2 �+' h3)
- Button elements for interactive actions (not divs)
- Semantic sections with appropriate ARIA when needed
- Images include meaningful alt text (width/height prevent CLS)
- Form inputs properly labeled

**Performance:**
- CSS variables reduce specificity and improve maintainability
- Transitions use transform and opacity (GPU-accelerated)
- Images specify dimensions to prevent layout shift
- Font loading optimized with proper font-display values`},

===== STYLE BLOCK: retro (offset 904494 to 928094) =====
retro:{id:"retro",name:"Retro",mode:"light",fontType:"sans-serif",description:"Ugly-cool 90s nostalgia aesthetic with Windows 95 beveled UI, system fonts, bright primary colors, marquee scrolling text, and maximum visual chaos.",layoutIdeas:{hero:"Centered layout with animated rainbow text headline (4s color cycle), dual colored horizontal bars as dividers, full-width CTA buttons with arrow decorations, and retro hit counter display at bottom.",stats:"Table-style grid (2x2 on mobile, 1x4 on desktop) with visible cell borders, alternating white/gray backgrounds, inset beveled frame container, and monospace labels.",features:"Two-column table layout with 80px colored icon cells (alternating navy/teal backgrounds) and text description cells, thick visible borders between rows, alternating row backgrounds.",howItWorks:"Vertical step list with large beveled yellow numbered badges (48px-64px), gray content panels with outset bevels, groove HR dividers between steps.",benefits:"2-column grid of beveled panels on navy background, each with lime green asterisk bullet and gray panel containing title and description.",pricing:"3-column card grid with highlighted center tier (yellow header, red border, pulsing badge), beveled window-style cards with title bars, feature lists with green asterisk bullets.",testimonials:"Horizontal auto-scrolling marquee (30px/s speed) with fixed-width cards (350px), Windows 95 title bar gradients, yellow inset content panels with 5-star ratings.",faq:"Accordion panels with gradient title bars (navy to blue), expandable sections, yellow answer panels with inset bevels.",blog:"3-column card grid with thick beveled borders, blog images with inset borders, monospace metadata, underlined blue read-more links.",footer:"4-column navigation grid on navy background with yellow headings and cyan links, groove HR divider above company info, centered layout with social buttons."},content:`# Retro / 90s Nostalgia Design System

## Design Philosophy

**Core Principles**: Embrace the raw, unfiltered aesthetic of the early web. This design celebrates the "ugly-cool" charm of 1990s websites�?"beveled buttons, system fonts, garish colors, and animated elements. It's deliberately anti-modern, rejecting minimalism in favor of maximum visual impact and nostalgic authenticity. Every pixel should feel like it was crafted in 1997 on a Windows 95 machine.

**Vibe**: Playful, chaotic, nostalgic, and unapologetically loud. Think GeoCities pages, "Under Construction" banners, hit counters, and guestbooks. This isn't about looking dated�?"it's about capturing the optimistic, experimental spirit of the early internet when everyone was just figuring things out. The aesthetic should feel authentic enough that someone who lived through the era would smile with recognition.

**Historical Context**: This style peaked between 1995-1999, when personal computers used Windows 95/98, monitors were 800x600 resolution, and web browsers offered limited CSS. Designers worked within severe constraints, which produced a distinctive visual language we're faithfully recreating.

---

## Design Token System (The DNA)

### Colors (Light Mode Only)

This palette is pulled directly from Windows 95 system colors and early web hex values.

| Token | Value | Usage | Notes |
|-------|-------|-------|-------|
| \`background\` | \`#C0C0C0\` | Primary page background | Classic Windows 95 button face gray |
| \`foreground\` | \`#000000\` | Pure black text | Maximum contrast, no grays for body text |
| \`muted\` | \`#808080\` | Secondary elements, metadata | Exactly 50% gray (128,128,128) |
| \`accent\` | \`#0000FF\` | Hyperlinks (unvisited) | Pure blue at maximum saturation |
| \`secondary\` | \`#FF0000\` | Hot red for emphasis | Pure red at maximum saturation |
| \`tertiary\` | \`#FFFF00\` | Bright yellow highlights | Pure yellow, used for badges and highlights |
| \`success\` | \`#00FF00\` | Lime green | Pure green at maximum saturation |
| \`successDark\` | \`#00AA00\` | Darker green for buttons | More readable green variant |
| \`border\` | \`#000000\` | Pure black borders | Used for outer borders |
| \`borderLight\` | \`#FFFFFF\` | White for 3D highlight | Top/left bevel edge |
| \`borderDark\` | \`#808080\` | Gray for 3D shadow | Bottom/right bevel edge |
| \`titleBar\` | \`#000080\` | Windows title bar navy | Pure dark blue (Navy) |
| \`titleBarGradientEnd\` | \`#1084D0\` | Title bar gradient | Windows 98 active window gradient |
| \`panelYellow\` | \`#FFFFCC\` | Light yellow content panels | Authentic Windows notepad/help color |
| \`visitedLink\` | \`#800080\` | Visited hyperlinks | Purple/Maroon |
| \`hoverLink\` | \`#FF0000\` | Link hover state | Red |

**Color Relationships**:
- All colors are at maximum saturation (pure RGB values with at least one channel at 0 or 255)
- No gradual grays - only \`#000000\`, \`#808080\`, \`#C0C0C0\`, \`#FFFFFF\`
- Links follow the classic progression: Blue �+' Purple (visited) �+' Red (hover)

### Typography

**Font Stacks** (System fonts that evoke 1995-1999):
- **Primary Body**: \`"MS Sans Serif", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif\`
- **Headings**: \`"Arial Black", Impact, Haettenschweiler, sans-serif\` (heavy, bold weights only)
- **Monospace**: \`"Courier New", Courier, monospace\` (for dates, stats, counters, code-like elements)
- **Playful accent** (ultra-sparingly): \`"Comic Sans MS", cursive\` (only for "fun" decorative elements if needed)

**Type Scale**:
- **H1 Hero**: 48px-96px (3xl to 6xl), always UPPERCASE or Title Case, Arial Black/Impact
- **H2 Section**: 32-48px (2xl to 4xl), often UPPERCASE, Arial Black
- **H3 Subsection**: 20-24px (lg to xl), bold weight
- **Body**: 14-16px, default weight, readable density
- **Small/Meta**: 12px (xs), often monospace for dates and metadata
- **Labels**: 10-12px, UPPERCASE, sometimes monospace

**Typographic Patterns**:
- Headings are BOLD or BLACK weight - no thin or light fonts exist in this era
- Letter-spacing on UPPERCASE headings: \`tracking-tight\` to \`tracking-wide\` (not expanded)
- Line-height: Dense (1.2-1.4 for headings, 1.5-1.6 for body)
- Text shadows for 3D text: \`text-shadow: 2px 2px 0 #808080\` (hard-edged, no blur)

### Radius & Borders

**Border Radius**: \`0px\` EVERYWHERE. No exceptions. The 90s didn't have border-radius.

**Border Widths**:
- Standard: \`2px\` for most elements
- Emphasis: \`4px\` for section dividers and highlighted elements
- Minimum: \`1px\` only for subtle inner detail (rare)

**3D Bevel Effect** (THE SIGNATURE):

This is the most critical visual element. Windows 95 used a specific 4-value border-color syntax combined with box-shadow for depth.

**Outset (Raised) - Elements that appear to pop out**:
\`\`\`css
border: 2px solid;
border-color: #ffffff #808080 #808080 #ffffff; /* Top Right Bottom Left */
box-shadow: inset -1px -1px 0 #404040, inset 1px 1px 0 #dfdfdf;
\`\`\`
- Top and left edges: white (#ffffff)
- Bottom and right edges: gray (#808080)
- Inner shadow adds depth with darker (#404040) and lighter (#dfdfdf) accents

**Outset Enhanced (Deeper bevel)**:
\`\`\`css
border: 2px solid;
border-color: #ffffff #808080 #808080 #ffffff;
box-shadow:
  inset -2px -2px 0 #808080,
  inset 2px 2px 0 #fff,
  inset -4px -4px 0 #404040,
  inset 4px 4px 0 #dfdfdf;
\`\`\`

**Inset (Sunken) - Elements that appear pressed in**:
\`\`\`css
border: 2px solid;
border-color: #808080 #ffffff #ffffff #808080; /* REVERSED from outset */
box-shadow: inset 1px 1px 0 #404040, inset -1px -1px 0 #dfdfdf;
\`\`\`
- Top and left edges: gray (#808080)
- Bottom and right edges: white (#ffffff)
- Inner shadow creates recessed appearance

**Active/Pressed State**:
When an outset element is clicked, it becomes inset AND translates 1px down and right:
\`\`\`css
border-color: #808080 #ffffff #ffffff #808080;
box-shadow: inset 1px 1px 0 #404040, inset -1px -1px 0 #dfdfdf;
transform: translate(1px, 1px);
\`\`\`

**Tailwind Implementation**:
Use arbitrary values with underscores for spaces:
- \`[border-color:#fff_#808080_#808080_#fff]\` for outset
- \`[border-color:#808080_#fff_#fff_#808080]\` for inset
- \`[box-shadow:inset_-1px_-1px_0_#404040,inset_1px_1px_0_#dfdfdf]\`

### Textures & Patterns (MANDATORY)

The background must NOT be flat. This is critical for authenticity.

**90s Tiled Pattern** (Primary technique):
\`\`\`css
background-color: #c0c0c0;
background-image:
  linear-gradient(45deg, #b8b8b8 25%, transparent 25%),
  linear-gradient(-45deg, #b8b8b8 25%, transparent 25%),
  linear-gradient(45deg, transparent 75%, #b8b8b8 75%),
  linear-gradient(-45deg, transparent 75%, #b8b8b8 75%);
background-size: 4px 4px;
background-position: 0 0, 0 2px, 2px -2px, -2px 0px;
\`\`\`
This creates a subtle diagonal crosshatch that gives texture without being distracting.

**Construction Warning Stripes** (For emphasis areas):
\`\`\`css
background: repeating-linear-gradient(
  45deg,
  #ffff00,
  #ffff00 10px,
  #000000 10px,
  #000000 20px
);
\`\`\`
Exactly 10px yellow, 10px black stripes at 45-degree angle.

**Horizontal Rule (HR) with Groove Effect**:
\`\`\`css
border: none;
height: 4px;
background: linear-gradient(
  to bottom,
  #808080 0%, #808080 50%,
  #ffffff 50%, #ffffff 100%
);
\`\`\`
Creates the classic "etched" divider look.

---

## Component Styling Principles

### Buttons

**Visual Requirements**:
- Border: 2px with 4-value outset color pattern
- Background: Subtle gradient or solid color depending on variant
- Text: Bold, UPPERCASE with \`tracking-wide\`, centered
- Padding: 8px vertical, 16px horizontal (comfortable clickable area)
- NO border-radius
- NO soft drop shadows

**State Transitions**:
- **Default**: Outset bevel, slightly lighter background on hover
- **Hover**: Background lightens by 1-2 shades, maintain outset
- **Active/Pressed**: Inset bevel (reversed border-color), translate(1px, 1px)
- **Focus**: Dotted 2px black outline, 2px offset (Windows 95 focus ring)
- **Transition**: NONE or instant (\`transition-none\` or 50ms max) - no smooth easing

**Variants**:
1. **Default/Ghost**: \`#C0C0C0\` background, black text, outset bevel
2. **Accent/Primary**: \`#0000FF\` background, white text, blue-tinted bevel edges
3. **Danger**: \`#FF0000\` background, white text, red-tinted bevel edges
4. **Success**: \`#00AA00\` (readable green) background, white text, green-tinted bevel
5. **Outline**: White background, black text, outset bevel

**Bevel Color Tinting**:
For colored buttons, tint the bevel edges to match:
- Blue button: \`border-color: #5555ff #000080 #000080 #5555ff\`
- Red button: \`border-color: #ff5555 #800000 #800000 #ff5555\`
- Green button: \`border-color: #00ff00 #006600 #006600 #00ff00\`

**Example Tailwind Classes**:
\`\`\`
border-2
bg-[#c0c0c0]
text-black
[border-color:#fff_#808080_#808080_#fff]
[box-shadow:inset_-1px_-1px_0_#404040,inset_1px_1px_0_#dfdfdf]
hover:bg-[#d0d0d0]
active:[border-color:#808080_#fff_#fff_#808080]
active:[box-shadow:inset_1px_1px_0_#404040,inset_-1px_-1px_0_#dfdfdf]
active:translate-x-[1px]
active:translate-y-[1px]
focus-visible:outline-dotted
focus-visible:outline-2
focus-visible:outline-black
focus-visible:outline-offset-2
\`\`\`

### Cards/Containers

**Panel/Card Structure**:
- Container: 2px outset bevel, \`#C0C0C0\` background
- Title bar: Gradient \`linear-gradient(to right, #000080, #1084d0)\`, white text, bold, 4-8px padding
- Content area: Inset bevel (sunken), white or \`#FFFFCC\` (yellow) background

**Window-Style Card** (Most distinctive):
\`\`\`
Outer container: outset bevel, gray background
�"o�"?�"? Title bar: navy gradient (#000080 �+' #1084d0), white bold text
�""�"?�"? Content area: inset bevel, white background, padding 16px
\`\`\`

**Alternating Row Backgrounds**:
For table-like layouts, alternate between:
- Even rows: \`#FFFFFF\` (white)
- Odd rows: \`#E8E8E8\` (light gray)

This creates the classic spreadsheet/database appearance.

**Borders Between Cells**:
Use \`border-right-2\` and \`border-bottom-2\` with \`#808080\` to create visible grid lines.

### Form Inputs

**Input Fields**:
- Border: 2px inset (sunken appearance)
- Background: White
- Text: Black, 14-16px
- Padding: 4-8px
- Focus: Dotted 2px black outline, 2px offset
- Disabled: \`#C0C0C0\` background, 50% opacity

**Placeholder Text**: \`#808080\` (gray)

**Select Dropdowns**: Same inset styling as inputs

**Checkboxes/Radio**: Not common in 90s web (use text indicators or simple squares)

### Links (Hyperlinks)

The most iconic element of the 90s web.

**States**:
- **Unvisited**: \`#0000FF\` (blue), underlined always
- **Visited**: \`#800080\` (purple)
- **Hover**: \`#FF0000\` (red)
- **Active** (while clicking): \`#FF0000\` (red)

**Rules**:
- ALWAYS underlined (never remove text-decoration)
- Color changes are instant (no transitions)
- No background on hover
- No additional styling effects

**Example**:
\`\`\`
text-[#0000ff]
underline
hover:text-[#ff0000]
visited:text-[#800080]
\`\`\`

### Icons

**Styling**:
- Stroke width: \`2px\` or \`stroke-[2px]\` (thick, bold lines)
- Color: Match the accent color of the section (blue, red, green)
- Size: 24px (h-6 w-6) standard, 32px for features
- NO rounded corners or soft shapes
- Consider adding 2px black borders around icon containers

**Icon Containers**:
If placing icons in colored boxes:
- Box background: Solid bright color (#000080, #008080, #00AA00)
- Icon color: White
- Box style: Outset or flat with borders

---

## Layout Principles

### Page Structure

**Maximum Width**: \`max-w-5xl\` (1024px) - mimics 800x600 monitor content area with browser chrome

**Spacing System**:
- Base unit: 8px
- Element padding: 16px (generous interior spacing)
- Element margins: 8-16px (tighter exterior spacing for density)
- Section padding: 64px vertical (py-16), 16px horizontal (px-4)

**Section Dividers**:
Use thick borders (\`border-b-4 border-[#808080]\`) OR the groove HR effect between major sections.

**Grid Layouts**:
Even though using modern CSS Grid/Flexbox, make it LOOK like tables:
- Visible cell borders with \`border-2\` or \`border-r-2\`/\`border-b-2\`
- Alternating row backgrounds
- Equal column widths where possible
- Dense, compact spacing

### Responsive Strategy

**Desktop** (768px+):
- Full table-like layouts with side-by-side columns
- Multi-column grids (2-4 columns)
- Visible complex borders

**Tablet** (640-768px):
- Reduce to 2 columns max
- Maintain all visual styling (bevels, borders)
- Stack complex tables if needed

**Mobile** (<640px):
- Single column
- KEEP beveled effects (essential to the style)
- Marquee continues to scroll
- Reduce font sizes slightly but keep bold weights
- Horizontal scrolling for complex tables is acceptable (authentic!)

**Important**: The aesthetic is more important than perfect responsiveness. It's okay if the mobile experience is slightly janky�?"that's authentic to the era.

---

## The "Bold Factor" (Non-Genericness)

**MANDATORY ELEMENTS** - These must be present or the style fails:

### 1. Marquee Scrolling Text
Use \`react-fast-marquee\` or pure CSS marquee for:
- Announcement bars with colorful text
- Testimonial carousels
- "Breaking news" style updates

**Settings**:
- Speed: 30-60 (moderate pace)
- No gradient fade (gradient={false})
- Multiple spans with different colors

### 2. Animated Rainbow Text
CSS animation cycling through bright colors for hero headlines:
\`\`\`css
@keyframes rainbow {
  0% { color: #ff0000; }
  17% { color: #ff8000; }
  33% { color: #ffff00; }
  50% { color: #00ff00; }
  67% { color: #0080ff; }
  83% { color: #8000ff; }
  100% { color: #ff0000; }
}
animation: rainbow 4s linear infinite;
\`\`\`
**Duration**: 4 seconds, linear easing (no smoothing)

### 3. Beveled Everything
Every interactive element and most containers must have the 3D outset/inset effect. This is NON-NEGOTIABLE.

### 4. "Under Construction" Energy
Add small animated elements:
- Blinking "NEW!" badges (use \`animate-pulse\` or CSS blink with step-end)
- Pulsing call-to-action badges
- Color-cycling decorative elements

**Pulse Glow Animation** (for badges):
\`\`\`css
@keyframes pulse-glow {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 10px 2px rgba(255, 0, 0, 0.5);
  }
}
animation: pulse-glow 1.5s ease-in-out infinite;
\`\`\`

### 5. Horizontal Rules (HR) as Dividers
Use the 3D groove effect between major content sections. This is a signature 90s pattern.

### 6. Hit Counter Aesthetic
Style at least one stats section like a classic hit counter:
- Black or navy background
- Green monospace text (#00FF00)
- Beveled inset frame
- Text like "Visitors: 0001234 | Since 1995"

### 7. Table-Like Visual Layouts
Even when using modern CSS, create the appearance of HTML tables:
- Visible cell borders (\`border-2 border-[#808080]\`)
- Alternating row backgrounds
- Grid-like precision

### 8. Title Bar Windows
Cards should look like Windows 95 application windows:
- Navy-to-blue gradient title bar
- White bold text in title
- Inset content area below

### 9. Decorative Color Squares
Include at least one section with a grid of bright colored squares (red, green, blue, yellow, magenta, cyan) with beveled edges. This is pure decorative 90s excess.

### 10. Construction Stripe Background
Use the yellow/black diagonal stripe pattern for at least one emphasized section (like final CTA).

---

## Animation & Motion

**Motion Philosophy**: Snappy, immediate, digital. No organic easing curves.

**Timing Functions**:
- **Instant state changes**: \`transition-none\` or \`duration-0\`
- **Color cycling**: \`linear\` (no easing)
- **Badges/pulses**: \`ease-in-out\` (acceptable for attention effects)
- **Button press**: \`transition-none\` or max 50ms

**Durations**:
- Button press: Instant or 50ms
- Hover color change: 75ms or instant
- Rainbow text cycle: 3-5 seconds
- Pulse glow: 1-2 seconds
- Marquee speed: Moderate (40-60px/second)

**Key Animations**:

1. **Rainbow Text**: 4s linear infinite loop through spectrum
2. **Pulse Glow**: 1.5s ease-in-out infinite for "NEW!" badges
3. **Blink** (ultra-sparingly): 1s step-end infinite (harsh on/off, not fade)
4. **Marquee**: Continuous scroll, pauseOnHover for usability

**Reduced Motion**:
Respect \`prefers-reduced-motion\`:
- Stop rainbow animation (fallback to single bright color)
- Stop marquee (show static or slower scroll)
- Stop pulsing badges (static with bright color)

---

## Accessibility

**Color Contrast**:
- Black (#000000) on silver (#C0C0C0): 7.5:1 (AAA)
- White on navy (#000080): 8.6:1 (AAA)
- White on blue (#0000FF): 8.6:1 (AAA)
- The palette naturally provides excellent contrast

**Focus States**:
- 2px dotted black outline (Windows 95 authentic)
- 2px offset from element
- High visibility, matches the aesthetic
- NEVER remove focus indicators

**Keyboard Navigation**:
- All interactive elements must be keyboard accessible
- Tab order should follow visual order
- Button press on Enter/Space should show active state

**Screen Readers**:
- Marquee text must have static alternative or be aria-live="polite"
- Decorative animated elements should be aria-hidden
- Color squares and decorative patterns need no alt text
- Ensure semantic HTML even with table-like appearance

**Motion Sensitivity**:
Provide \`prefers-reduced-motion\` alternatives:
\`\`\`css
@media (prefers-reduced-motion: reduce) {
  .text-rainbow { animation: none; color: #ff0000; }
  .animate-pulse-glow { animation: none; }
  /* Marquee handled by library or CSS */
}
\`\`\`

---

## Anti-Patterns (What to AVOID)

### Visual No-Nos:
1. **NO border-radius** - Not even 1px. Zero. Always.
2. **NO soft drop shadows** - Only use inset shadows for bevels
3. **NO gradients** except:
   - Title bar gradient (navy to blue)
   - Background patterns (stripes, tiles)
   - Subtle button backgrounds
4. **NO semi-transparent overlays** - Colors are always opaque (except white/80 for secondary text on dark backgrounds)
5. **NO thin fonts** - Everything is bold or black weight
6. **NO subtle grays** - Only #000000, #808080, #C0C0C0, #FFFFFF, #E8E8E8
7. **NO smooth easing** - Use linear or instant transitions
8. **NO removing link underlines** - Always visible
9. **NO modern minimalist spacing** - Dense, not airy
10. **NO attempting to "modernize" the aesthetic** - Embrace the cheese

### Interaction No-Nos:
1. **DON'T use hover states that scale elements** (except 1.05 for pulse badges)
2. **DON'T use fade transitions** - Changes should be instant or linear
3. **DON'T make marquee text essential content** - Keep it decorative/supplemental
4. **DON'T override browser default selection color** - Actually, DO: use #000080 background, white text
5. **DON'T use floating action buttons** or modern UI patterns

### Content No-Nos:
1. **DON'T use placeholder text** that doesn't fit the era (no "lorem ipsum")
2. **DON'T reference modern tech** in decorative text (keep it generic or 90s-themed)
3. **DON'T be subtle** - This style is LOUD and PROUD

---

## Implementation Notes

### Tailwind Arbitrary Values
You'll use these constantly:
\`\`\`
border-[2px]
[border-color:#fff_#808080_#808080_#fff]
[box-shadow:inset_-1px_-1px_0_#404040,inset_1px_1px_0_#dfdfdf]
bg-[#c0c0c0]
text-[#0000ff]
\`\`\`
Note: Use underscores for spaces in arbitrary values.

### Custom CSS Required
Some effects need CSS files:
- \`@keyframes\` for rainbow, pulse-glow, blink
- \`.hr-groove\` for horizontal rule effect
- \`.bg-90s-tile\` for tiled background pattern
- \`.bg-construction\` for warning stripes

### Dependencies
- **react-fast-marquee**: Essential for authentic scrolling text
- Consider creating CSS variables for the complex box-shadow values for reusability

### Color Layering Strategy
1. **Base**: Tiled #C0C0C0 background
2. **Surface**: White or gray (#E8E8E8) panels with bevels
3. **Accent surfaces**: Navy title bars, colored feature boxes
4. **Foreground**: Black text, colored icons
5. **Highlights**: Yellow badges, red "NEW!" tags, rainbow text

---

## Signature Visual Checklist

Before considering the design complete, verify these are present:

- [ ] At least one marquee scrolling element with colorful text
- [ ] Rainbow animated text on hero or major heading
- [ ] All buttons have 3D outset bevels with proper border-color syntax
- [ ] At least one card with Windows 95 title bar gradient
- [ ] Tiled background pattern visible on main body
- [ ] Hyperlinks are blue/underlined, turn red on hover
- [ ] At least one section with alternating row backgrounds
- [ ] Horizontal groove rule divider between major sections
- [ ] A "hit counter" style stats display with monospace green text
- [ ] One "NEW!" or "HOT!" badge with pulse animation
- [ ] Construction stripe background on at least one section
- [ ] All interactive elements have dotted focus outlines
- [ ] Active buttons show pressed state (inset + translate)
- [ ] Icons have 2px stroke width
- [ ] Zero instances of border-radius anywhere

---

## The Secret Sauce

What makes this style work is **commitment to authenticity over modernization**. The temptation will be to "clean it up" or "make it more professional." Resist this. The ugliness IS the beauty. The clashing colors, the dense layouts, the aggressive animations�?"these aren't bugs, they're features.

Someone who lived through 1997 should look at this and immediately feel transported back. The design should be so authentic that it's almost jarring next to modern websites. That contrast IS the point.

Embrace the cheese. Celebrate the chaos. Welcome to 1997.`},

===== STYLE BLOCK: saas (offset 928094 to 953118) =====
saas:{id:"saas",name:"Tech Style",mode:"light",fontType:"sans-serif",description:"A bold, minimalist-modern visual system combining clean aesthetics with dynamic execution. Features signature Electric Blue gradients, sophisticated dual-font pairing (Calistoga + Inter), animated hero graphics, inverted contrast sections, and micro-interactions throughout. Professional yet design-forward�?"confidence without clutter.",layoutIdeas:{hero:"Asymmetrical two-column grid (1.1fr / 0.9fr). Left: bold headline with gradient text accent on key word, animated badge with pulsing dot, trust indicators with stacked avatars. Right: abstract generative art composition with floating animated cards, rotating outer ring, geometric elements, and bold corner accent block.",stats:"INVERTED section with dark background (foreground color). Large display numbers (5xl-6xl), trend badges with arrow icons, dot pattern texture overlay. Vertical dividers between stats on desktop.",features:"Asymmetric masonry grid where first card spans 2 rows. Gradient icon backgrounds (not translucent). Hover gradient overlays on cards. Featured card has 'Learn more' link and corner glow effect.",howItWorks:"Horizontal timeline on desktop. Large circular step numbers (24x24) with inner gradient glow. Cards below each step. Arrow connectors between steps using accent-colored circular badges. Centered header layout.",benefits:"Two-column asymmetric grid (1.2fr / 0.8fr). Text content with checkmark list items using accent-colored badges. Visual element has asymmetric border-radius (rounded-tl-[4rem] rounded-br-[4rem]) with abstract UI placeholder.",pricing:"3-column grid with highlighted tier elevated (-translate-y-4) and featuring gradient border effect (2px gradient stroke). Gradient price text on highlighted tier. Badge hangs off top edge. Gradient checkmarks for highlighted features.",testimonials:"3-column grid with center card offset vertically. Large decorative quote mark (120px, 8% opacity). Gradient accent bar at top of each card. Display font for quotes in italic. Larger avatars with accent border.",faq:"Clean accordion with rotating Plus icon. Border-bottom dividers. Question text is semibold xl, answer is muted lg with relaxed line-height.",blog:"3-column grid with section label badge. Featured badge on first post. Image hover: scale + gradient overlay from bottom. 'Read more' link with arrow icon on each card. Pill-style 'View all' button in header.",footer:"5-column grid (company spans 2). Social icons as rounded-xl buttons with accent hover. Navigation groups with link lists. Bottom bar with border-top separator."},content:`# Design Style: Minimalist Modern

## Design Philosophy

### Core Principle

**Clarity through structure, character through bold detail.** This design system embraces modern web layouts and dynamic interactions while honoring minimalist foundations. It operates on a fundamental tension: restraint in quantity, confidence in execution. Every element that appears has earned its place�?"but those elements are executed with deliberate flair and precision.

Whitespace is not empty space; it's a precision instrument for directing attention. Motion is not decoration; it's communication. Color is not scattered; it's concentrated into a single, electrifying accent that commands the eye wherever it appears.

### The Visual Vibe

**Professional yet design-forward. Confident and artistic. Refined but alive.**

Imagine the intersection of a high-tech SaaS product's precision with a creative agency's bold portfolio sensibility. This design feels like it was crafted by someone who understands both engineering rigor and artistic expression�?"someone who knows the rules well enough to break them intentionally.

**Emotional Keywords:**
- *Confident* �?" Never apologetic. Elements are sized boldly, colors are vibrant, animations are purposeful.
- *Sophisticated* �?" The dual-font typography system, the considered color ratios, the layered shadows all whisper "we sweat the details."
- *Alive* �?" Subtle animations, pulsing indicators, floating elements, and hover responses create a sense that the interface is breathing.
- *Premium* �?" Generous whitespace, elevated surfaces, and accent-tinted shadows evoke quality and care.
- *Contemporary* �?" Gradient text, glassmorphic hints, and asymmetric layouts feel undeniably modern without being trendy.

**What This Design Is NOT:**
- Not sterile or clinical (despite being "minimal")
- Not generic or template-like (bold choices prevent this)
- Not busy or overwhelming (restraint in element count)
- Not flat or lifeless (texture, shadow, and motion add depth)
- Not cold or corporate (the warm serif headlines and vibrant blue inject personality)

### The DNA of This Style

#### 1. The Signature Gradient

The Electric Blue gradient (\`#0052FF\` �+' \`#4D7CFF\`) is the heartbeat of this design system. It's not just an accent color�?"it's a visual signature that creates instant recognition.

**Where it appears:**
- Primary button backgrounds
- Text highlights on key headline words
- Icon container backgrounds
- Featured card border strokes
- Testimonial accent bars
- Trend indicator badges
- CTA section buttons
- Pricing tier highlights

**Why it works:** A gradient feels more alive than a flat color. The subtle shift from deep Electric Blue to a lighter sky blue creates dimensionality and draws the eye along the element. It signals "this is important" without screaming.

#### 2. Inverted Contrast Sections

Strategic sections flip the color scheme�?"using the deep slate \`foreground\` color as a background with light text. This technique:
- Creates dramatic visual rhythm as users scroll
- Prevents the light theme from feeling monotonous
- Provides natural section breaks without heavy dividers
- Makes statistics and key metrics feel more impactful
- Adds sophistication through intentional contrast

**Best used for:** Stats sections, final CTAs, or any content that deserves spotlight emphasis.

#### 3. Animated Depth & Living Elements

This design breathes. Micro-animations and transitions create a sense that the interface is responsive and alive:

- **Pulsing indicators:** Small dots in badges that gently pulse, signaling "live" or "new"
- **Floating elements:** Cards in the hero that bob gently on a slow sine wave
- **Rotating decorative rings:** Dashed circles that rotate infinitely at glacial speed (60+ seconds per rotation)
- **Hover responses:** Elements lift, shadows deepen, icons scale, colors shift
- **Entrance animations:** Content fades up into view as users scroll, with staggered timing

**The philosophy:** Motion should feel natural, almost subconscious. Users shouldn't think "oh, that's animated"�?"they should simply feel that the interface is polished and responsive.

#### 4. Sophisticated Dual-Font Typography

The pairing of **Calistoga** (display) with **Inter** (UI/body) creates a memorable typographic identity:

- **Calistoga** is warm, characterful, and slightly playful. Its soft serifs and sturdy construction make headlines feel approachable yet substantial. It's the "personality" voice.
- **Inter** is clean, highly legible, and professional. It handles the workhorse duties of body text, labels, and UI elements. It's the "clarity" voice.

This pairing creates a conversation between personality and precision�?"headlines grab attention with character, then body text delivers information with crystal clarity.

**Monospace accents** (JetBrains Mono) appear in section labels and badges, adding a technical, modern touch that reinforces the "high-tech meets high-design" vibe.

#### 5. Texture Over Flatness

Minimalism often fails because it becomes sterile. This design combats flatness through layered texture:

- **Dot patterns:** Subtle \`radial-gradient\` dot grids at 2-3% opacity on dark sections
- **Radial glows:** Large, blurred circles of accent color positioned at section corners, creating ambient warmth
- **Layered shadows:** Cards don't just have one shadow�?"they have subtle, diffuse shadows that create realistic depth
- **Gradient overlays:** Hero sections use radial gradients of the accent color at low opacity for atmospheric depth

These textures are felt more than seen. Users won't consciously notice the dot pattern, but they'll feel that the dark section has "something" that makes it feel richer than a flat color.

#### 6. Asymmetry & Visual Tension

Strict grid alignment is intentionally broken in key moments:

- **Hero layout:** The asymmetric \`1.1fr / 0.9fr\` grid creates visual tension�?"the text column is subtly dominant
- **Testimonial offset:** The center card is shifted vertically, breaking the rigid grid rhythm
- **Pricing elevation:** The highlighted tier floats above its siblings
- **Benefits visual:** Asymmetric border radii (\`rounded-tl-[4rem] rounded-br-[4rem]\`) create organic, memorable shapes

**Why this matters:** Perfect symmetry is predictable. Strategic asymmetry creates visual interest and guides the eye in unexpected ways. It's the difference between "correct" and "designed."

#### 7. The Section Label System

Every major section begins with a consistent badge pattern:
- Rounded pill shape with subtle accent border and tinted background
- Small colored dot (optionally animated/pulsing)
- Uppercase monospace text with wide letter-spacing
- Positioned above the section headline

This creates a visual rhythm and helps users orient themselves. It also adds a touch of UI sophistication�?"these feel like carefully designed interface elements, not just text.

### Differentiation: Minimalism With a Pulse

This style refuses to be "just clean." Many minimal designs strip away so much that they become forgettable�?"white backgrounds, gray text, safe choices. This design takes the opposite approach:

**Minimalism through bold choices, not absence.**

- Where others use subtle gray, we use Electric Blue
- Where others use flat backgrounds, we use inverted sections and gradient glows
- Where others use static layouts, we use floating animations and pulsing indicators
- Where others use one safe font, we use a memorable dual-font pairing
- Where others center everything, we embrace asymmetry

The result is a design that is unmistakably minimal in its restraint (few colors, generous whitespace, clean lines) but unmistakably bold in its execution (vibrant accent, animated hero, gradient flourishes).

**It's minimalism that makes a statement.**

### Sensory Description

If this design were a physical space, it would be:
- A bright, airy gallery with white walls and polished concrete floors
- One wall painted in deep midnight blue, dramatically lit
- A single piece of art in electric blue, drawing every eye
- Soft ambient lighting that makes surfaces glow
- The faint hum of something technological and precise
- Clean lines everywhere, but one sculptural element with an unexpected curve

If it were music, it would be:
- Electronic, but warm�?"not cold synthwave
- Mostly minimal beats with generous silence
- One recurring melodic hook in a bright, clear tone
- Occasional swells that feel like things floating upward
- Professional enough for a corporate lobby, interesting enough to actually listen to

---

## Design Token System (The DNA)

### Color Strategy

**Chromatic Focus:** A warm, near-monochrome palette amplified by a dual-tone accent gradient. The accent colors are used sparingly but with maximum impact�?"they command attention wherever they appear.

| Token | Value | Usage & Context |
|:------|:------|:----------------|
| \`background\` | \`#FAFAFA\` | Primary canvas. Warmer off-white that reduces eye strain. |
| \`foreground\` | \`#0F172A\` (Slate-900) | Primary text. Deep slate, not pure black. Also used as inverted section backgrounds. |
| \`muted\` | \`#F1F5F9\` (Slate-100) | Secondary surfaces, card backgrounds, subtle fills. |
| \`muted-foreground\` | \`#64748B\` (Slate-500) | Secondary text, descriptions, metadata. |
| \`accent\` | \`#0052FF\` (Electric Blue) | **Primary action color.** CTAs, links, highlights, icon backgrounds. |
| \`accent-secondary\` | \`#4D7CFF\` | Gradient endpoint. Used with \`accent\` for gradient effects. |
| \`accent-foreground\` | \`#FFFFFF\` | Text on accent backgrounds. Always white. |
| \`border\` | \`#E2E8F0\` (Slate-200) | Subtle structural borders on cards and dividers. |
| \`card\` | \`#FFFFFF\` | Elevated surfaces. Pure white for maximum lift. |
| \`ring\` | \`#0052FF\` | Focus rings. Matches the primary accent. |

**The Signature Gradient:**
\`\`\`css
background: linear-gradient(to right, #0052FF, #4D7CFF);
/* Or diagonal: */
background: linear-gradient(135deg, #0052FF, #4D7CFF);
\`\`\`
This gradient appears on: primary buttons, featured badges, icon backgrounds, pricing tier borders, testimonial accent bars, trend indicators, and text highlights.

---

### Typography System

**Font Pairing (Dual-Font System):**
- **Display Font:** \`"Calistoga", Georgia, serif\` �?" A warm, characterful serif with personality. Used exclusively for h1/h2 headlines to create memorable anchor points.
- **UI & Body Font:** \`"Inter", system-ui, sans-serif\` �?" Highly legible, clean sans-serif for all body text, UI elements, and smaller headings.
- **Monospace:** \`"JetBrains Mono", monospace\` �?" For section labels, badges, and technical callouts.

**Type Scale & Usage:**

| Element | Size | Font | Weight | Tracking | Notes |
|:--------|:-----|:-----|:-------|:---------|:------|
| Hero Headline | \`5xl\` �+' \`5.25rem\` | Calistoga | Normal | \`-0.02em\` | Tight leading (1.05). Last word gets gradient text treatment. |
| Section Headlines | \`3xl\` �+' \`3.25rem\` | Calistoga | Normal | Normal | Leading 1.15. Key word can use gradient text. |
| Card Titles | \`lg\` �+' \`2xl\` | Inter | Semibold (600) | \`-0.01em\` | Tight tracking for density. |
| Body Text | \`base\` �+' \`lg\` | Inter | Normal (400) | Normal | Relaxed line-height (1.625-1.75). |
| Section Labels | \`xs\` (12px) | JetBrains Mono | Normal | \`0.15em\` | UPPERCASE. Used in pill badges with accent dot. |

**Gradient Text Effect (with Enhanced Underline):**
\`\`\`css
.gradient-text {
  background: linear-gradient(to right, #0052FF, #4D7CFF);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Gradient underline bar for hero headline */
.gradient-underline {
  position: absolute;
  bottom: -0.25rem; /* md: -0.5rem */
  left: 0;
  height: 0.75rem; /* md: 1rem */
  width: 100%;
  border-radius: 0.125rem;
  background: linear-gradient(to right, rgba(0, 82, 255, 0.15), rgba(77, 124, 255, 0.1));
}
\`\`\`

---

### Spacing & Layout

**Core Principle:** Generous, intentional whitespace is a primary design tool�?"but it's balanced by density within components.

- **Section Spacing:** Large vertical padding (\`py-28\` to \`py-44\`) creates a calm, paced scrolling experience.
- **Container Width:** \`max-w-6xl\` (72rem) for primary content. Centered with \`mx-auto\`.
- **Component Density:** Within cards and components, spacing is tighter to create cohesive units that float in the generous section whitespace.
- **Grid Gaps:** \`gap-5\` to \`gap-8\` between grid items. Slightly tighter than standard to maintain visual cohesion.

**Asymmetry Patterns:**
- Hero: \`grid-cols-[1.1fr_0.9fr]\` �?" Left-heavy for text dominance
- Benefits: \`grid-cols-[1.2fr_0.8fr]\` �?" Content over visual
- Use negative margins and overlapping elements to create Z-depth

---

### Borders, Surfaces & Shadows

**Surfaces:**
- Cards use pure white (\`#FFFFFF\`) with \`1px\` border in \`border\` color
- Elevated cards add \`shadow-lg\` or \`shadow-xl\` for lift
- Featured elements use gradient borders (2px stroke effect via nested divs)

**Shadow System:**
| Token | Value | Usage |
|:------|:------|:------|
| \`shadow-sm\` | \`0 1px 3px rgba(0,0,0,0.06)\` | Subtle lift |
| \`shadow-md\` | \`0 4px 6px rgba(0,0,0,0.07)\` | Standard cards |
| \`shadow-lg\` | \`0 10px 15px rgba(0,0,0,0.08)\` | Elevated cards |
| \`shadow-xl\` | \`0 20px 25px rgba(0,0,0,0.1)\` | Hero elements |
| \`shadow-accent\` | \`0 4px 14px rgba(0,82,255,0.25)\` | Accent-tinted lift |
| \`shadow-accent-lg\` | \`0 8px 24px rgba(0,82,255,0.35)\` | Featured elements |

**Textures (Critical for Avoiding Flatness):**
- **Dot Pattern:** \`radial-gradient(circle, white 1px, transparent 1px)\` at \`32px\` intervals, \`opacity: 0.03\` �?" Used on dark inverted sections
- **Radial Glows:** Large blurred circles (\`blur-[150px]\`) of accent color at \`3-6%\` opacity �?" Positioned at section corners
- **Gradient Overlays:** Subtle \`radial-gradient\` from accent color, \`8%\` opacity �?" Used in hero graphic backgrounds

---

## Component Styling & Interactions

### Buttons

**Primary Button:**
- Background: Gradient from \`accent\` to \`accent-secondary\` (\`bg-gradient-to-r from-[var(--accent)] to-[#4D7CFF]\`)
- Text: White, medium weight
- Shadow: \`shadow-sm\` default, \`shadow-accent\` on hover (accent-tinted)
- Border-radius: \`rounded-xl\` (12px)
- Hover: Lifts up (\`-translate-y-0.5\`), \`shadow-accent-lg\`, brightness increase (\`brightness-110\`), arrow icon translates right
- Active: Slight scale down (\`scale-[0.98]\`) for tactile feedback

**Secondary/Outline Button:**
- Background: Transparent �+' \`muted\` on hover
- Border: \`1px\` in \`border\` color
- Text: \`foreground\`
- Hover: Border shifts to \`accent/30\`, shadow appears

**Ghost Button:**
- No background or border
- Text: \`muted-foreground\` �+' \`foreground\` on hover

**Animation:** All buttons have \`transition-all duration-200\`. Subtle upward translation on hover (\`-translate-y-0.5\`). Arrow icons translate right on hover (\`group-hover:translate-x-1\`).

---

### Cards

**Standard Card:**
- Background: \`card\` (white)
- Border: \`1px\` in \`border\` color
- Border-radius: \`rounded-xl\` (12px) or \`rounded-2xl\` (16px)
- Shadow: \`shadow-md\` default, \`shadow-xl\` on hover
- Padding: \`p-6\` to \`p-10\` depending on prominence

**Elevated Card:**
- Adds stronger shadow and optional accent tint
- Used for featured items, highlighted pricing tiers

**Hover Effects:**
- Gradient overlay fades in: \`bg-gradient-to-br from-accent/[0.03] to-transparent\`
- Shadow deepens
- Optional icon scale: \`group-hover:scale-110\`

**Featured Card (Gradient Border):**
\`\`\`jsx
<div className="rounded-xl bg-gradient-to-br from-accent via-accent-secondary to-accent p-[2px]">
  <div className="h-full w-full rounded-[calc(12px-2px)] bg-card">
    {/* content */}
  </div>
</div>
\`\`\`

---

### Inputs

- Height: \`h-12\` to \`h-14\`
- Border: \`1px\` in \`border\` color
- Border-radius: \`rounded-lg\` or \`rounded-xl\`
- Background: Transparent or very subtle \`muted/10\`
- Focus: \`ring-2 ring-accent ring-offset-2\`
- Placeholder: \`text-muted-foreground/50\`

---

### Section Labels (Badges)

A consistent badge pattern appears at the start of each section:
\`\`\`jsx
<div className="inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/5 px-5 py-2">
  <span className="h-2 w-2 rounded-full bg-accent" /> {/* Can be animated/pulsing */}
  <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
    Section Name
  </span>
</div>
\`\`\`

---

## The "Bold Factor" (Signature Elements)

These elements define this implementation and prevent generic output:

1. **Gradient Text Highlights:** Key words in headlines use the signature gradient as text color via \`bg-clip-text\`.

2. **Inverted Sections:** At least one section uses \`bg-foreground text-background\` with dot pattern texture for dramatic contrast.

3. **Animated Hero Graphic:** Abstract generative composition with:
   - Rotating outer ring (\`animate\` with 60s duration, linear)
   - Floating cards with staggered \`y\` animations (5s and 4s durations, A�10px movement)
   - Geometric shapes (circles, rounded rectangles, gradient fills)
   - Decorative dot grid (3x3)
   - Corner accent block in solid \`accent\` with shadow

4. **Gradient Icon Backgrounds:** Feature icons use full gradient backgrounds (\`from-accent to-accent-secondary\`) rather than translucent fills.

5. **Gradient Border Effects:** Highlighted elements (pricing tiers, featured cards) use the 2px gradient stroke technique.

6. **Large Decorative Elements:** Quote marks at \`120px\`, step numbers at \`text-4xl\`, trend arrows in badges.

7. **Pulsing Indicators:** Animated dots in badges using scale/opacity keyframes.

8. **Arrow Connectors:** Timeline steps connected by small accent-colored circular badges with arrow icons.

---

## Effects & Animation

**Motion Philosophy:** Smooth, confident, and purposeful. Animations enhance understanding and add delight without being distracting. All motion follows natural easing curves.

**Transition Defaults:**
- Standard: \`transition-all duration-200 ease-out\`
- Entrance: \`duration-700\` with stagger (\`0.1s\` delay between children)
- Hover lifts: \`duration-300\`
- Button active: \`duration-200\` with scale down

**Entrance Animations (Framer Motion):**
\`\`\`js
const easeOut = [0.16, 1, 0.3, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: easeOut } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};
\`\`\`

**Continuous Animations:**
- Rotating ring: \`60s\` linear infinite rotation (hero graphic)
- Floating cards: \`4-5s\` ease-in-out infinite y-axis bobbing (A�10px amplitude)
- Pulsing dot: \`2s\` infinite scale/opacity pulse (scale: [1, 1.3, 1], opacity: [1, 0.7, 1])
- Activity indicators: \`3s\` infinite scale/opacity pulse (subtle)

---

## Responsive Strategy

**Breakpoint Philosophy:** Mobile layouts simplify structure but maintain the bold aesthetic. Touch targets are 44px+ minimum.

- **Hero:** Single column. Hide abstract graphic on small screens. Stack CTAs vertically with full width (\`w-full sm:w-auto\`).
- **Stats:** 2 columns on mobile �+' 4 columns on desktop with vertical dividers hidden on mobile
- **Features:** 1 column �+' 2 columns (md) �+' 3 columns (lg) with first card spanning on larger screens
- **How It Works:** Vertical stack on mobile, horizontal timeline with connecting line on desktop (md+)
- **Pricing:** Stack vertically, highlighted tier maintains elevation and gradient border
- **Testimonials:** Stack vertically, center card offset removed on mobile
- **Final CTA:** Input and button stack vertically on mobile, horizontal on sm+, button goes full width on mobile

**Key Adaptations:**
- Reduce headline sizes: \`text-[2.75rem]\` mobile �+' \`text-6xl\` �+' \`text-[5.25rem]\` desktop
- Maintain generous section padding: \`py-28\` �+' \`py-44\` (reduce slightly, not dramatically)
- Hide decorative elements on mobile: rotating rings, complex graphics (use \`hidden lg:block\`)
- Keep gradient accents and color inversions�?"these define the style
- Button heights: \`h-12\` to \`h-14\` for primary CTAs (44px-56px touch targets)

---

## Accessibility & Best Practices

**Color Contrast:** All text meets WCAG AA. The \`accent\` blue (#0052FF) on white background passes at 4.5:1+. Inverted sections use near-white text (#FFFFFF or rgba(255,255,255,0.9)) on deep slate (#0F172A) for maximum contrast.

**Focus States:**
- Visible focus rings using \`ring-2 ring-accent ring-offset-2\` with \`ring-offset-background\`
- Focus rings match the gradient accent aesthetic
- Interactive elements have clear hover/focus differentiation (lift, shadow, color shift)
- Buttons have \`active:scale-[0.98]\` for tactile feedback

**Touch Targets:**
- Minimum 44px height on all interactive elements
- Buttons use \`h-12\` (48px) to \`h-14\` (56px) for primary CTAs
- Adequate spacing between tap targets (gap-4 minimum)

**Motion:**
- Respect \`prefers-reduced-motion\` for continuous animations
- Entrance animations are subtle enough to not cause issues (0.7s duration, 28px vertical movement)
- No flashing or rapid movements
- Continuous animations are slow and gentle (4-5s duration, A�10px movement)

---

## Implementation Notes

**Component Structure:**
All components (Button, Card, Input) are built locally using \`cva\` and \`tailwind-merge\`, following Shadcn API patterns but tailored to this design system.

**CSS Custom Properties:**
The StyleWrapper component injects all design tokens as CSS custom properties, allowing for consistent theming across all components.

**Font Loading:**
Fonts are loaded via Google Fonts:
- Inter: weights 400, 500, 600, 700
- Calistoga: default weight
- JetBrains Mono: weights 400, 500

**Animation Library:**
Framer Motion is used for all entrance animations and continuous motion. Viewport options are set to \`{ once: true, amount: 0.15, margin: "-60px" }\` for optimal performance and timing.`},

===== STYLE BLOCK: sketch (offset 953118 to 965382) =====
sketch:{id:"sketch",name:"Hand-Drawn / Sketch",mode:"light",fontType:"sans-serif",description:"Organic wobbly borders, handwritten typography, paper textures, and playful imperfection. Every element feels sketched with markers and pencils on textured paper.",layoutIdeas:{hero:"Split 2-column grid with oversized marker-style headline, decorative hand-drawn arrow pointing to CTA, and polaroid-frame product mockup with wobbly borders. Trust indicators use overlapping avatar circles.",stats:"Horizontal grid of stats displayed in irregular organic shapes (wobbly circles) with varying border radii. Each stat has playful rotation for authentic hand-drawn feel.",productDetail:"Centered content in white card with wobbly borders, sticky-note tag at top center, drop-cap first letter treatment, and constrained text width for readability.",features:"3-column grid of post-it yellow cards with tape decoration at top. Each card includes rough circular icon container and wobbly borders for sketchy aesthetic.",blog:"3-column grid with polaroid-style frames. Dashed borders on image placeholders, hard offset shadows, and playful rotation on hover for scrapbook feel.",howItWorks:"3-column step layout with decorative squiggly connecting line (desktop). Steps numbered in wobbly-border circles with hard offset shadows.",benefits:"Centered white container with thick wobbly border and hard shadow. 2-column grid with hand-drawn bullet points (filled circles) for each benefit item.",testimonials:"3-column grid of speech bubbles with geometric tail pointing down-left. Quote icon, italic text, and author info with circular avatar below bubble.",pricing:"3-column grid with wobbly-border cards. Highlighted plan has rotating badge, dashed circle overlay, slight scale, and stronger shadow for emphasis.",faq:"Single column, dashed border dividers between questions. Bold headings with relaxed body text for easy scannability.",footer:"4-column grid navigation with wavy underline on section headers. Social icons in wobbly circles, dashed border separator at bottom."},content:`# Design Philosophy

The Hand-Drawn design style celebrates authentic imperfection and human touch in a digital world. It rejects the clinical precision of modern UI design in favor of organic, playful irregularity that evokes sketches on paper, sticky notes on a wall, and napkin diagrams from a brainstorming session.

**Core Principles:**
- **No Straight Lines**: Every border, shape, and container uses irregular border-radius values to create wobbly, hand-drawn edges that reject geometric perfection
- **Authentic Texture**: The design layer paper grain, dot patterns, and subtle background textures to simulate physical media (notebook paper, post-its, sketch pads)
- **Playful Rotation**: Elements are deliberately tilted using small rotation transforms (-2deg to 2deg) to break rigid grid alignment and create casual energy
- **Hard Offset Shadows**: Reject soft blur shadows entirely. Use solid, offset box-shadows (4px 4px 0px) to create a cut-paper, layered collage aesthetic
- **Handwritten Typography**: Use exclusively handwritten or marker-style fonts (Kalam, Patrick Hand) that feel human and approachable, never corporate or sterile
- **Scribbled Decoration**: Add visual flourishes like dashed lines, hand-drawn arrows, tape effects, thumbtacks, and irregular shapes to reinforce the sketched aesthetic
- **Limited Color Palette**: Stick to pencil blacks, paper whites, correction marker red, and post-it yellow for bold but cohesive simplicity
- **Intentional Messiness**: Embrace overlap, asymmetry, and visual "mistakes" that make the design feel spontaneous and creative rather than manufactured

**Emotional Intent:**
This style should feel approachable, creative, human-centered, and fun. It lowers barriers and invites interaction by appearing unfinished and work-in-progress, making users feel like collaborators rather than consumers. Perfect for creative tools, brainstorming platforms, educational content, or any product that wants to emphasize human creativity over corporate polish.

# Design Token System

## Colors (Single Palette - Light Mode)
- **Background**: \`#fdfbf7\` (Warm Paper)
- **Foreground**: \`#2d2d2d\` (Soft Pencil Black - never pure black)
- **Muted**: \`#e5e0d8\` (Old Paper / Erased Pencil)
- **Accent**: \`#ff4d4d\` (Red Correction Marker)
- **Border**: \`#2d2d2d\` (Pencil Lead)
- **Secondary Accent**: \`#2d5da1\` (Blue Ballpoint Pen)

## Typography
- **Headings**: \`Kalam\` (wght 700) - Looks like a thick felt-tip marker.
- **Body**: \`Patrick Hand\` (wght 400) - Legible but distinctly handwritten.
- **Scale**: Large and readable. Headings should vary in size dramatically to look like emphasized notes.

## Radius & Border
- **Wobbly Borders**: CRITICAL. Do NOT use standard \`rounded-*\` classes alone.
- **Technique**: Use inline \`style={{ borderRadius: ... }}\` with multiple values to create irregular organic ellipses.
  - Example: \`border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;\`
  - Store reusable radius values in config as \`wobbly\` and \`wobblyMd\`
- **Border Width**: Thick and variable. \`border-2\` is the minimum. Use \`border-[3px]\` or \`border-4\` for emphasis.
- **Style**: \`border-solid\` is default for most elements. Use \`border-dashed\` for secondary elements, dividers, and sketchy overlays.

## Shadows/Effects
- **Hard Offset Shadows**: No blur. Just a solid offset to create a cut-paper, layered collage aesthetic.
  - Standard: \`box-shadow: 4px 4px 0px 0px #2d2d2d;\`
  - Emphasized: \`box-shadow: 8px 8px 0px 0px #2d2d2d;\`
  - Hover State: Reduce offset \`2px 2px\` or \`6px 6px\` to create "lifting" effect
- **Paper Texture**: Use \`radial-gradient\` dot pattern on body background to simulate notebook paper grain
  - \`backgroundImage: radial-gradient(#e5e0d8 1px, transparent 1px)\`
  - \`backgroundSize: 24px 24px\`
- **Subtle Animations**: Gentle bounce (3s duration) for decorative elements, rotation on hover for playful interaction

# Component Stylings

## Buttons
- **Shape**: Irregular wobbly oval using custom border-radius from config
- **Normal State**:
  - White background, \`border-[3px]\` black border, black text
  - Hard offset shadow: \`shadow-[4px_4px_0px_0px_#2d2d2d]\`
  - Font: Patrick Hand (body font)
- **Hover State**:
  - Background fills with Accent red \`#ff4d4d\`, text turns white
  - Shadow reduces to \`shadow-[2px_2px_0px_0px_#2d2d2d]\`
  - Subtle translate: \`translate-x-[2px] translate-y-[2px]\`
- **Active State**:
  - Shadow disappears completely (button "presses flat")
  - Translate increases: \`translate-x-[4px] translate-y-[4px]\`
- **Secondary Variant**: Uses muted background \`#e5e0d8\`, hovers to blue \`#2d5da1\`

## Cards/Containers
- **Base Style**: White background (\`#ffffff\`) with wobbly black border (\`border-2\`)
- **Border Radius**: Use \`wobblyMd\` radius from config for medium containers
- **Shadow**: Subtle \`3px 3px 0px 0px rgba(45, 45, 45, 0.1)\` for depth
- **Decoration Options**:
  - \`decoration="tape"\`: Translucent gray bar positioned at top center with slight rotation
  - \`decoration="tack"\`: Red circular thumbtack at top center
  - No decoration for minimal aesthetic
- **Special Treatments**:
  - Post-it yellow background \`#fff9c4\` for feature cards
  - Speech bubble style for testimonials with geometric tail using border-based triangle
  - Sticky-note tags for section labels

## Inputs
- **Style**: Full box with wobbly borders (not just underline)
- **Border**: \`border-2\` with wobbly radius matching button aesthetic
- **Font**: Patrick Hand (body font) for authentic hand-written feel
- **Background**: White with placeholder text in muted color \`#2d2d2d/40\`
- **Focus State**:
  - Border changes to blue \`#2d5da1\`
  - Ring effect: \`ring-2 ring-[#2d5da1]/20\`
  - No standard outline, maintains wobbly aesthetic

# Layout Strategy
- **Grid System**: Use Tailwind's responsive grid (\`md:grid-cols-2\`, \`md:grid-cols-3\`) but add visual irregularity
- **Rotation**: Apply small rotations (\`rotate-1\`, \`-rotate-2\`) to cards, images, and decorative elements
- **Breaking Alignment**:
  - Stats: Organic shapes with varied border-radius instead of perfect circles
  - Cards: Slight rotation on hover (\`hover:rotate-1\` or \`hover:-rotate-1\`)
  - Pricing: Scale up highlighted card slightly on desktop (\`md:scale-105\`)
- **Overlap & Layering**:
  - Overlapping avatar circles with negative margin (\`-space-x-4\`)
  - Decorative elements positioned absolutely outside parent bounds
  - Speech bubble tails extending beyond card borders
- **Whitespace**:
  - Consistent section padding (\`py-20\`) for rhythm
  - Generous gap in grids (\`gap-8\`) to prevent crowding
  - Max-width containers (\`max-w-5xl\`, \`max-w-3xl\`) for focused content
- **Z-Index Layering**: Decorative SVG backgrounds at low z-index, step numbers elevated with \`z-10\`

# Non-Genericness (Bold Choices)

**Unique Visual Signatures:**
- **NO STRAIGHT LINES**: Every container, button, card, and frame uses irregular border-radius values�?"never standard Tailwind rounded classes
- **Hand-Drawn SVG Decorations**:
  - Arrow pointing to hero CTA with dashed path
  - Squiggly connecting line between "How It Works" steps
  - Corner frame marks on hero image placeholder
- **Authentic Paper Effects**:
  - Tape strips (translucent gray rectangles) on feature cards
  - Thumbtack pins (colored circles) for card decoration
  - Dashed circle overlay highlighting popular pricing tier
  - Speech bubble geometric tails on testimonials
- **Playful Typography Treatments**:
  - Rotating exclamation mark in hero headline
  - Wavy underline decoration on navigation links and footer headers
  - Drop-cap first letter treatment in Product Detail section
  - Post-it yellow sticky-note tag on Product Detail card
- **Scribbled Accents**:
  - Bouncing decorative circle near hero image (desktop only)
  - Dashed borders on secondary elements and dividers
  - Emoji sketches in blog post placeholders
  - Line-through hover effect on footer links
- **Interactive Personality**:
  - Buttons "press flat" by eliminating shadow on active state
  - Cards rotate slightly on hover
  - Blog cards increase shadow offset on hover for "lift" effect
  - Grayscale-to-color transition on blog images (removed in final implementation for simplicity)

# Effects & Animation
- **Hover**: "Jiggle" effect. \`hover:rotate-1\` or \`hover:-rotate-2\`.
- **Transition**: \`transition-transform duration-100\` (Fast and snappy).

# Spacing, Layout & Iconography
- **Max Width**: \`max-w-5xl\` (Keep it contained like a sketchbook).
- **Icons**: \`lucide-react\` icons with \`stroke-width={2.5}\` or \`3\`.
- **Icon Style**: Enclose key icons in rough circles.

# Responsive Strategy

**Mobile-First Approach:**
- **Typography Scaling**:
  - Headings: \`text-4xl md:text-5xl\` or \`text-5xl md:text-6xl\`
  - Body text: \`text-lg md:text-xl\` or \`text-base md:text-xl\`
  - Buttons: \`text-lg md:text-2xl\`
- **Layout Stacking**:
  - All grids collapse to single column on mobile, expand to 2-3 columns on \`md:\` breakpoint
  - Hero switches from 2-column to stacked with \`md:grid-cols-2\`
  - Stats: 2-column grid on mobile (\`grid-cols-2\`), 4-column on desktop (\`md:grid-cols-4\`)
- **Hide Decorative Elements**:
  - Hand-drawn arrow near CTA: \`hidden md:block\`
  - Bouncing decorative circle: \`hidden md:block\`
  - Squiggly connecting line in "How It Works": \`hidden md:block\`
  - Dashed circle on pricing card: \`hidden md:block\`
- **Maintain Core Aesthetic**:
  - Keep wobbly borders and handwritten fonts on all screen sizes
  - Reduce rotation slightly if needed (\`-rotate-1\` instead of \`-rotate-2\`)
  - Maintain hard offset shadows (never add blur)
  - Preserve playful personality and irregular shapes
- **Touch-Friendly Targets**:
  - Buttons use minimum \`h-12\` (48px) for accessibility
  - Adequate spacing between interactive elements with \`gap-8\`
- **Spacing Adjustments**:
  - Section padding remains \`py-20\` for vertical rhythm
  - Reduce horizontal padding when needed: \`px-6\`
  - Stats scale down: \`h-24 w-24 md:h-32 md:w-32\`
  - Pricing cards: \`p-6 md:p-8\` for better mobile fit`},

===== STYLE BLOCK: swiss-minimalist (offset 965382 to 980523) =====
"swiss-minimalist":{id:"swiss-minimalist",name:"Swiss",mode:"light",fontType:"sans-serif",description:"A rigorous implementation of the International Typographic Style (1950s). Characterized by objective typography, sans-serif fonts (Inter), mathematical grids with subtle texture patterns, and a strict black/white/red palette. Prioritizes readability, precision, asymmetrical organization, and visual depth through layered patterns.",layoutIdeas:{hero:"Split screen composition with asymmetric 8:4 grid ratio. Left: massive typography (text-6xl to text-[10rem]) with geometric accent bar and functional CTAs. Right: geometric abstract composition with grid pattern overlay, featuring basic shapes (circles, rectangles, lines) in black/red on muted background.",stats:"Horizontal strip divided by visible borders. 2x2 grid on mobile, 1x4 on desktop. Massive numbers with hover scale animation, rotating plus icons, and color inversion on hover (black �+' red). No decorative icons, pure data presentation.",productDetail:"Split 7:5 grid. Left: 2x2 visual grid of geometric compositions with texture overlays (dots, diagonals, grid patterns). Right: large typographic headline with body text. Mobile stacks vertically.",features:"Asymmetric two-column layout. Left: sticky header with dots pattern overlay and numbered label (01. System). Right: stacked feature cards with thick borders, numbered indicators, diagonal arrow icons, and full hover state color inversion.",howItWorks:"Three-column grid with visible borders and black background. Each step features giant watermark numbers (text-8xl at 10% opacity), red accent border on left, and white text on black.",benefits:"Asymmetric 5:7 grid split. Left: diagonal pattern overlay with section header. Right: stacked list items with numbered box indicators, hover state inverts to black background with red accent numbers.",testimonials:"Three-column responsive grid (1 col mobile, 2 col tablet, 3 col desktop). Large red quotation mark, bold uppercase quote text, thick top border that changes to red on hover, subtle upward translation on hover.",pricing:"Three-column card layout with 4px black borders. Highlighted plan uses inverted colors (black bg, white text, red accents). Strict rectangular shapes, no rounded corners.",faq:"Two-column rigid grid (1 col mobile) with 4px black borders and 1px gaps creating visual grid. Each FAQ is a card with numbered label, rotating plus icon, and full hover inversion (white �+' red bg).",blog:"Four-column layout: 1 col sidebar with grid pattern (section header + CTA), 3 col article grid. Articles have date, title, read link with arrow. Hover inverts to black background.",footer:"Black background with four-column layout. Large uppercase brand name, underlined email input (not boxed), square social icons with white bg that invert to red on hover."},content:`# Design Style: Swiss International (International Typographic Style)

## Design Philosophy

**The International Typographic Style (Swiss Style)** is not merely a visual trend; it is a philosophy of objective communication born in 1950s Switzerland. It rejects personal expression and subjectivity in favor of universal clarity, mathematical precision, and logical structure.

**Core Tenets:**

1.  **Objectivity over Subjectivity**: The design must recede to let the content speak. Every visual decision must be justifiable by the content's needs. Personal ornamentation is eliminated in favor of functional communication. The designer is not an artist expressing themselves, but a conduit for information.

2.  **The Grid as Law**: The grid is the absolute authority. It is not a guideline; it is the visible skeleton of the information. We generally avoid static center-alignment in favor of **asymmetrical organization** to create dynamic visual rhythm and tension. Grid patterns are made visible through subtle background textures.

3.  **Typography is the Interface**: Type is not just for reading; it is the primary structural and graphical element. We use grotesque sans-serif typefaces (Inter, Helvetica) because they are neutral vessels for meaning. Scale, weight, and position are the only tools needed to create hierarchy.

4.  **Active Negative Space**: White space is not "empty"; it is an active structural element. It defines boundaries, gives weight to the massive typography, and creates breathing room for the intellect.

5.  **Layered Texture & Depth**: While maintaining flatness (no shadows or 3D effects), we achieve visual depth through **subtle pattern overlays**: grid lines (24px), dot matrices (16px), diagonal stripes, and noise textures. These patterns add tactile richness without compromising the objective aesthetic.

6.  **Universal Intelligibility**: The design should be understood instantly. It is clean, legible, and undeniably modern.

**The Vibe**:
*   **Intellectual & Architectural**: The page should feel like a well-engineered building, a museum exhibition, or a transit map�?"functional, safe, and efficient.
*   **Structured yet Organic**: While brutally honest in its geometry, subtle texture patterns provide warmth and visual interest�?"like fine paper grain or screen printing texture.
*   **Brutally Precise**: No gradients to hide bad layout. Depth comes from pattern, not shadow. The design is flat yet rich, stark yet nuanced.
*   **Timeless**: By avoiding ephemeral trends (glassmorphism, neumorphism, soft rounded corners), the design aims for permanence.

**Visual Signatures**:
*   **Flush-Left, Ragged-Right Text**: Text blocks are strictly left-aligned to the grid.
*   **Grotesque Sans-Serif**: Neutral, objective fonts with high x-heights (Inter, weight 400-900).
*   **Mathematical Scales**: Font sizes that relate to each other through clear ratios (responsive scaling from mobile to desktop).
*   **The "Swiss Red" (#FF3000)**: Used not as decoration, but as a functional signal�?"a stop sign, a warning, a highlight�?"piercing the monochrome calm.
*   **Pattern-Based Texture**: Subtle CSS-generated patterns (grid, dots, diagonals, noise) applied to background surfaces for visual depth without breaking flatness.
*   **Geometric Abstraction**: Basic shapes (circles, squares, rectangles, lines) arranged in Bauhaus-inspired compositions.

## Design Token System (The DNA)

### Colors (Strict Palette)
*   **Background**: \`#FFFFFF\` (Pure White) - The canvas must be neutral.
*   **Foreground**: \`#000000\` (Pure Black) - Text is absolute.
*   **Muted**: \`#F2F2F2\` (Light Gray) - Used for secondary backgrounds to create rhythm.
*   **Accent**: \`#FF3000\` (Swiss Red) - The **only** signal color. Used sparingly for CTAs and critical emphasis.
*   **Border**: \`#000000\` (Pure Black) - Structure is visible.

### Typography
*   **Font Family**: \`Inter\` (Google Font). Ideally closest to Helvetica/Akzidenz-Grotesk.
*   **Weights**: Heavy use of **Black (900)** and **Bold (700)** for headings. **Regular (400)** or **Medium (500)** for body.
*   **Style**: **UPPERCASE** for almost all headings and labels.
*   **Tracking**: \`tracking-tighter\` for large headlines, \`tracking-widest\` for small labels.
*   **Scale**: Extreme contrast. Headlines should be massive (\`text-7xl\` to \`text-9xl\`+). Body text is legible and objective.

### Radius & Border
*   **Radius**: \`0px\` (Strictly Rectangular). No rounded corners.
*   **Borders**: Thick, visible borders (\`border-2\` or \`border-4\`). Used to define the grid.

### Shadows & Effects
*   **Shadows**: No drop shadows. The design maintains flatness. Only use subtle ring shadows for compositional geometry (e.g., \`shadow-[0_0_0_8px_rgba(255,48,0,0.1)]\` for accent circles).
*   **Effects**: Interactive elements use simple color inversion (Black �+' White, White �+' Red), scale transforms (1.0 �+' 1.05), rotation (0deg �+' 90deg for plus icons), and vertical translation (-1px lift on hover).

### Textures & Patterns (Critical for Depth)
These CSS-based patterns add visual richness while maintaining the flat, objective aesthetic:

*   **Grid Pattern** (\`.swiss-grid-pattern\`):
    - Subtle 24A-24px grid lines at 3% opacity
    - Applied to hero composition area, blog sidebar, muted backgrounds
    - Creates visible structure without overwhelming content

*   **Dot Matrix** (\`.swiss-dots\`):
    - Radial gradient dots, 16A-16px spacing, 4% opacity
    - Applied to section headers, feature sidebars
    - Evokes traditional print techniques

*   **Diagonal Lines** (\`.swiss-diagonal\`):
    - 45-degree repeating lines, 10px spacing, 2% opacity
    - Applied to benefits sidebar, accent backgrounds
    - Adds directional energy to static layouts

*   **Noise Texture** (\`.swiss-noise\`):
    - Fractal noise overlay via SVG filter, 1.5% opacity
    - Applied globally to body background
    - Simulates paper texture, adds warmth to stark white backgrounds

**Application Strategy**: Use patterns on muted gray backgrounds (\`#F2F2F2\`) and occasionally on white surfaces. Never apply patterns to pure black backgrounds or red accent areas. Patterns should enhance, not dominate.

## Component Stylings

### Buttons
*   **Shape**: Strictly rectangular (\`rounded-none\`).
*   **Style**: Solid Black background with White text (Primary). White background with Black border (Secondary).
*   **Hover**: Invert colors or switch to Swiss Red (\`#FF3000\`).
*   **Typography**: Uppercase, bold, tracking-wide.

### Cards / Containers
*   **Structure**: Defined by their borders (\`border-black\`).
*   **Background**: White or Muted Gray (\`#F2F2F2\`).
*   **Padding**: Generous and uniform (\`p-8\`, \`p-12\`).
*   **Hover**: Entire card background changes color (e.g., to Swiss Red or Black) with text color inversion.

### Inputs
*   **Style**: Underlined (\`border-b\`) or solid rectangular box with thick border.
*   **Focus**: Sharp change in border color to Swiss Red. No glow rings.

## Layout Strategy

*   **The Grid**: The grid is God. It should often be **visible** (using borders on elements).
*   **Asymmetry**: Embrace asymmetrical balance. A large photo on the left balanced by negative space and small text on the right.
*   **Alignment**: Strict left alignment for text.
*   **Separators**: Use horizontal and vertical lines to divide sections.

## Non-Genericness (The "Bold" Factor)

This implementation goes beyond "generic Swiss style" by incorporating:

*   **Massive Responsive Typography**: Headlines scale from \`text-6xl\` (mobile) to \`text-[10rem]\` (desktop). Let words be images.
*   **Visible Structure**: The layout grid is made tangible through:
    - Thick 4px black borders defining sections
    - Visible grid patterns (24px) on backgrounds
    - Asymmetric column ratios (8:4, 7:5, 5:7) creating dynamic tension
*   **Numbered Section Labels**: Every major section has a prefix (01. System, 02. Method, 03. Advantages, 04. Journal) in red accent with uppercase tracking
*   **Layered Geometric Compositions**:
    - Hero features abstract Bauhaus-style composition with overlapping shapes
    - Product detail uses 2A-2 grid of geometric elements with different texture patterns
    - Each composition combines circles, rectangles, lines in purposeful arrangement
*   **Pattern-Based Texture**: Four distinct CSS patterns (grid, dots, diagonal, noise) applied strategically to create depth without shadows
*   **Bold Interaction States**:
    - Full color inversions (not just opacity fades)
    - Rotating icons (plus signs spin 90A�)
    - Scale transforms on hover
    - Vertical slide animations in navigation
*   **Active Negative Space**: Generous padding (p-12, p-24) and asymmetric layouts create breathing room and visual tension
*   **Functional Color System**: Red is used only for:
    - Primary CTAs and accents
    - Hover states as visual feedback
    - Section number prefixes
    - Never as decorative fill

## Spacing & Iconography

*   **Spacing**: High density in information clusters (tables), but high spaciousness in narrative sections.
*   **Iconography**: Use \`lucide-react\` icons, but treat them as functional symbols. Stroke width should match typography. Often enclosed in geometric shapes (squares/circles).

## Animation

*   **Feel**: Instant, mechanical, snappy, precise. Movement is purposeful and geometric.
*   **Transitions**: \`duration-200 ease-out\` or \`duration-150 ease-linear\` for rapid feedback. No elastic or spring animations.
*   **Micro-interactions**:
    - **Navigation Links**: Vertical slide animation with color change (text slides up, red replacement slides in from below)
    - **Stats Cards**: Scale transform on numbers (1.0 �+' 1.05), rotating plus icons (0A� �+' 90A�), background color snap (black �+' red)
    - **Feature Cards**: Color inversion on hover (white �+' accent red), arrow rotation (-45A� �+' 0A�)
    - **Testimonials**: Subtle upward lift (-1px translateY), border color change (black �+' red), quote text color change
    - **FAQ Cards**: Rotating plus icons, full background color inversion (white �+' red)
    - **Buttons**: Instant background color changes, no scale transforms
*   **Hover States**: Always indicate interactivity through color, scale, or position changes�?"never subtle fades. Swiss style is bold and immediate.

## Responsive Strategy

The Swiss style must maintain its bold character across all screen sizes:

**Mobile (< 768px)**:
*   Typography scales down but remains bold: \`text-6xl\` for hero headlines
*   Single column layouts with vertical stacking
*   Borders remain 4px thick (never thin out)
*   CTAs become full-width buttons with consistent height (\`h-16\`)
*   Grid patterns and textures maintain same opacity/scale
*   Stats become 2A-2 grid instead of 1A-4
*   Navigation collapses (visible only on desktop)

**Tablet (768px - 1024px)**:
*   Two-column layouts for testimonials, FAQ, features
*   Typography scales to \`text-8xl\` for headlines
*   Asymmetric grids start to appear
*   Touch targets remain minimum 44A-44px

**Desktop (1024px+)**:
*   Full asymmetric grid layouts (8:4, 7:5, 5:7 ratios)
*   Maximum typography scale (\`text-9xl\`, \`text-[10rem]\`)
*   Multi-column layouts (3-4 columns for blog, footer)
*   Sticky positioning for section headers
*   All hover states and micro-interactions active

**Key Principles**:
- Never compromise on border thickness or contrast
- Maintain uppercase typography and tight tracking
- Patterns remain visible at all breakpoints
- Red accent color used consistently across devices
- Spacing remains generous (reduce from p-24 to p-12 on mobile, but never less)

## Accessibility

*   **Contrast**: The Black/White/Red scheme naturally offers ultra-high contrast (21:1 for black/white). Ensure red text on white meets AA standards.
*   **Focus**: High-contrast 2px ring in red (\`focus-visible:ring-2 focus-visible:ring-swiss-accent focus-visible:ring-offset-2\`)
*   **Touch Targets**: All interactive elements minimum 44A-44px on mobile
*   **Motion**: All animations are CSS-based and respect \`prefers-reduced-motion\`
*   **Semantics**: Proper heading hierarchy, semantic HTML5 elements, ARIA labels where needed`},

===== STYLE BLOCK: terminal (offset 980523 to 986331) =====
terminal:{id:"terminal",name:"Terminal CLI",mode:"dark",fontType:"mono",description:"A raw, functional, and retro-futuristic command-line interface aesthetic. High contrast, monospaced precision, and blinking cursors.",layoutIdeas:{hero:"A massive ASCII art logo or headline. The subheadline types itself out. CTAs are rendered as command prompts.",stats:"Displayed as a system status report or table output (e.g., 'UPTIME: 99.9%', 'USERS: 10k').",features:"A grid of terminal windows or 'man page' style entries. Each feature has a command-line flag (e.g., '--speed', '--security').",howItWorks:"A step-by-step shell script execution log. 'Step 1: Initializing...', 'Step 2: Processing...'.",benefits:"A split-screen layout like a code editor (vim/vscode) showing 'Before' vs 'After' code blocks.",pricing:"An ASCII table layout. Selected plan highlights with an inverted color block.",testimonials:"Git commit logs or IRC chat logs. 'User@host says: ...'",faq:"A 'man' page manual layout or a help command output (e.g., 'help --topic billing').",blog:"A file directory listing (ls -l). Each post is a file with permissions, date, and author.",footer:"A simple system footer showing shell version, current path, and copyright as a comment."},content:'# Design Philosophy\nThe **Terminal CLI** aesthetic pays homage to the raw power of the command line. It strips away the "user interface" layers to reveal the "system" underneath. It is **brutally functional, high-contrast, and authentically retro**. It feels like hacking into a mainframe or configuring a server.\n\nThe vibe is **Cyber-Industrial, Hacker, and System-Level**. It is not "Matrix" rain (too clichAc); it is a clean, usable ZSH/BASH shell environment.\n\n**Key visual signatures:**\n*   **Monospace Supremacy**: Every single character, from the largest headline to the smallest footer link, is monospaced.\n*   **The Cursor**: The blinking block or underscore cursor `_` is the heartbeat of the interface.\n*   **Shell Metaphors**: Use prompt characters (`>`, `$`, `~`), command flags (`--help`), and status codes (`[OK]`, `[ERR]`).\n*   **Scanlines (Subtle)**: A very faint CRT scanline effect to give it depth without ruining readability.\n\n# Design Token System\n\n## Colors (Dark Mode Only)\nThe palette mimics a phosphor monitor. High contrast is non-negotiable.\n\n*   **Background**: `#0a0a0a` (Deep black, but not pure OLED black to allow for scanlines)\n*   **Foreground**: `#33ff00` (Classic Terminal Green) or `#ffb000` (Amber) - *Let\'s go with Green for this implementation as the primary, with Amber as secondary.*\n    *   `primary`: `#33ff00` (Bright Neon Green)\n    *   `secondary`: `#ffb000` (Amber/Orange for warnings or accents)\n    *   `muted`: `#1f521f` (Dimmed green for borders/inactive text)\n    *   `accent`: `#33ff00` (Same as primary, used for cursors/active states)\n    *   `error`: `#ff3333` (Bright Red)\n    *   `border`: `#1f521f` (Dimmed green)\n\n## Typography\n*   **Font**: `JetBrains Mono`, `Fira Code`, or `VT323`.\n*   **Style**: **ALL CAPS** for headers. Lowercase for "code" or body text is acceptable, but consistency is key.\n*   **Scale**: Strict modular scale. Headers shouldn\'t be "smooth"; they should snap to grid sizes.\n\n## Radius & Borders\n*   **Radius**: `0px`. Absolutely no rounded corners.\n*   **Borders**: `1px` solid or dashed. Borders are crucial for defining "windows" or "panes".\n\n## Shadows & Effects\n*   **Shadows**: No drop shadows.\n*   **Text Shadow**: A subtle "glow" for the primary text to mimic phosphor persistence.\n    *   `text-shadow: 0 0 5px rgba(51, 255, 0, 0.5)`\n*   **CRT Overlay**: A pointer-events-none overlay with scanlines.\n\n# Component Stylings\n\n## Buttons\n*   **Structure**: Text enclosed in brackets `[ INITIATE ]` or a solid block of color with inverted text.\n*   **Hover**: The background fills with the primary color, text becomes black (inverted video).\n*   **Active**: A "pressed" state might shift the text 1px down or blink rapidly.\n\n## Cards (Windows/Panes)\n*   **Structure**: A black box with a 1px green border.\n*   **Header**: A "title bar" at the top: `+--- SYSTEM STATUS ---+` or a solid inverted bar.\n*   **Content**: Padded monospaced text inside.\n\n## Inputs\n*   **Style**: No box. Just a prompt `user@acme:~$` followed by the input field.\n*   **Cursor**: A blinking block `�-^` at the caret position.\n*   **Focus**: No ring, just the blinking cursor.\n\n# Layout Strategy\nThe layout should feel like a grid of terminal windows (`tmux` or `vim` splits).\n*   **Strict Grid**: Content is aligned to a rigid character grid.\n*   **Separators**: Use ASCII characters for dividers: `----------------` or `================` or `//`.\n\n# Non-Genericness (The Bold Factor)\n*   **ASCII Art**: Use ASCII art for the logo or key graphic elements.\n*   **Typewriter Effect**: Headlines should appear character-by-character.\n*   **Raw Data Visualization**: Stats shouldn\'t be pie charts; they should be progress bars `[||||||||||.....]`.\n\n# Effects & Animation\n*   **Blink**: Utilities for `animate-blink` (standard cursor blinking).\n*   **Glitch**: Occasional subtle text offsets on hover.\n*   **Typing**: `typing-demo` animation for the hero text.\n\n# Iconography\n*   **Lucide Icons**: Use them, but style them to look pixelated or low-fi if possible, or strict `stroke-width-2`.\n*   **Color**: Icons are always the primary terminal color.\n\n# Responsive Strategy\n*   **Mobile**: The "windows" stack vertically. The text size remains legible (monospaced fonts can be wide, so watch for overflow). Wrap long lines with a `\\` indicator.\n\n# Accessibility\n*   **Contrast**: The bright green on black exceeds AA requirements.\n*   **Focus**: High visibility is inherent to this style (inverted colors).'},

===== STYLE BLOCK: vaporwave (offset 986331 to 1005218) =====
vaporwave:{id:"vaporwave",name:"Vaporwave",mode:"dark",fontType:"mono",description:"A nostalgic, neon-drenched journey into 80s retro-futurism. High-contrast neon pinks and cyans against deep void purples. Digital grids, glowing horizons, surreal sunset gradients, and CRT scanline overlays create an immersive synthetic world.",layoutIdeas:{hero:"Full-screen immersive perspective grid floor with floating neon sun gradient backdrop. Massive glowing headline split across two lines with gradient text effect. Skewed neon-bordered CTAs with transforming hover states. Version badge with skewed container.",stats:"Dashboard row with bordered stat containers featuring gradient top accent bars. Hover states trigger cyan glow and color transitions. Grid layout adapts from 4 columns to stacked on mobile.",productDetail:"Terminal window interface with cyan borders and window control dots. Split layout with content on left and visual placeholder on right. Command-line styled text prefixes.",features:"Grid of glass-morphic cards with cyan laser top borders and pink side borders. Rotating diamond icon containers that spin on hover. Cards lift upward on hover with smooth transitions.",blog:"Grid of retro data tape/file cards with duotone gradient overlays on images. Hover triggers cyan border glow and card shadow expansion.",howItWorks:"Vertical timeline with alternating left-right steps. Central pink checkpoint dots with glow effects. Bordered step containers with corner accent decorations. Background dot pattern overlay.",benefits:"Windows 95-inspired file explorer window with title bar and status bar. Grid of file icons with centered layouts. Hover states change background to pink tint.",testimonials:"IRC/terminal-style chat boxes with user avatars in bordered containers. Author names wrapped in angle brackets. Cyan accent colors for roles.",pricing:"Three power-up style cards with gradient glow halos behind highlighted tier. Skewed 'MOST_POPULAR' badge. Cyan titles, massive pricing, gradient accent bars.",faq:"Terminal-style accordion in bordered black container. Questions prefixed with '> QUERY:' in pink, answers with '> RESPONSE:' in cyan. Chevron rotation on expand.",footer:"Perspective grid floor effect fading into bottom. Multi-column link groups with cyan headings. Social icons with hover color transitions. Skewed brand logo mark."},content:`# Vaporwave / Outrun Design System

## 1. Design Philosophy

**"Digital Nostalgia meets Neon Future �?" A synthetic reality drenched in retro-futuristic excess."**

This is a bold celebration of 1980s retro-futurism, vaporwave aesthetics, and early computer graphics. The design transports users to a synthetic digital dimension where neon lights pierce through infinite grids, CRT scanlines distort reality, and every interaction feels like commanding a vintage terminal from the year 2088.

### Core Aesthetic DNA

**Visual Language**: High-contrast maximalism with unapologetic neon saturation. Nothing is subtle. Every element glows, transforms, or pulses with digital energy. The design rejects minimalism in favor of dense, layered visual effects that create depth through overlapping gradients, glows, scanlines, and perspective distortions.

**Emotional Tone**: Nostalgic yet futuristic. Simultaneously retro (80s arcade cabinets, VHS tapes, early Windows UIs) and forward-looking (cyberpunk cityscapes, holographic interfaces, digital utopias). The mood is dreamy, synthetic, slightly surreal �?" like navigating a computer from a past vision of the future.

**Design Pillars**:
1. **The Infinite Grid**: Perspective-transformed wireframe grids that recede toward the horizon, creating spatial depth and that iconic outrun highway feeling
2. **Neon Glow Supremacy**: Hot magenta (#FF00FF), electric cyan (#00FFFF), and sunset orange (#FF9900) with aggressive drop shadows and box shadows that make elements appear to emit light
3. **CRT Scanlines & Distortion**: Global overlay of horizontal scanlines and subtle RGB chromatic aberration mimicking old CRT monitors
4. **Terminal/Command-Line Interfaces**: Text prefixed with ">" symbols, monospace fonts, window chrome with colored dots, status bars �?" everything references DOS prompts and early GUIs
5. **Geometric Transformation**: Skewed containers, rotated icons, perspective grids �?" elements are rarely perfectly aligned; they feel kinetic and dimensional
6. **Gradient Mania**: Multi-stop gradients everywhere �?" text fills, backgrounds, borders, glows. Especially the iconic sunset gradient (yellow �+' orange �+' pink �+' purple)

### Interaction Philosophy

**Hover States Are Theatrical**: Buttons don't just change color �?" they un-skew, explode with glow, scale up, and invert colors. Icons rotate. Cards lift off the page. Every interaction is a micro-event.

**Sound Design (Visual)**: If this design had sound, it would be the hum of neon tubes, the buzz of CRT static, retro synthesizers, and lo-fi beats. The visual design echoes this through pulsing animations, glitch effects, and rhythmic repetition (scanlines, grid patterns).

### The "Anti-Patterns" (What This Is NOT)
- **Not Flat**: Aggressive use of shadows, glows, gradients, and depth
- **Not Minimalist**: Dense with effects, borders, patterns, and overlays
- **Not Corporate**: Playful, artistic, experimental �?" this is a portfolio piece, not a bank
- **Not Muted**: Colors are 100% saturated; contrasts are extreme

## 2. Design Token System (The DNA)

### Colors (Dark Mode Only)

**Philosophy**: Maximum saturation, high contrast, pure digital primaries. These aren't subtle brand colors �?" they're neon tubes glowing in a dark void.

*   **Background (The Void)**: \`#090014\` �?" Near-black with a subtle purple tint. This is the infinite digital space where everything floats.
*   **Foreground (Chrome Text)**: \`#E0E0E0\` �?" Light silver-gray for body text. Readable yet retro.
*   **Card Background (Glass Panels)**: \`rgba(26, 16, 60, 0.8)\` or \`#1a103c\` �?" Semi-transparent deep purple. Enables glass-morphism with backdrop blur.
*   **Primary Accent (Hot Magenta)**: \`#FF00FF\` �?" Pure magenta. Used for primary CTAs, highlights, avatars, feature icons, accent borders. This is THE hero color.
*   **Secondary Accent (Electric Cyan)**: \`#00FFFF\` �?" Pure cyan. Used for links, focus rings, secondary borders, hover states, card title glows. Complements magenta perfectly.
*   **Tertiary Accent (Sunset Orange)**: \`#FF9900\` �?" Vibrant orange. Used sparingly for special highlights, "sun" gradients, and attention-grabbing elements.
*   **Border (Default)**: \`#2D1B4E\` �?" Muted dark purple. Non-interactive borders and dividers.
*   **Border (Active)**: \`#00FFFF\` or \`#FF00FF\` �?" Neon borders for interactive/hovered elements.

**Gradient Combinations**:
- **Sunset Gradient**: \`linear-gradient(to right, #FF9900, #FF00FF, #00FFFF)\` �?" The signature vaporwave gradient used for text fills
- **Glow Gradient**: \`linear-gradient(to bottom, #FF9900, #FF00FF)\` �?" Used for the floating "sun" background element
- **Accent Bar**: \`linear-gradient(to right, #FF00FF, #00FFFF)\` �?" Sharp gradient for top borders and accent lines

### Typography

**Font Philosophy**: Fonts must evoke both retro computing terminals and futuristic sci-fi interfaces. Geometric sans-serifs for impact, monospace for authenticity.

*   **Headings**: \`"Orbitron", sans-serif\` (weights: 400, 500, 700, 900)
    - Geometric, wide, futuristic letterforms
    - Used for: Page titles, section headings, card titles, pricing
    - Characteristics: All-caps preferred, extreme weights (black/900), tight tracking on large sizes
*   **Body/UI/Code**: \`"Share Tech Mono", monospace\` (weight: 400)
    - Technical, terminal-like, fixed-width
    - Used for: Body text, buttons, labels, input fields, status text
    - Characteristics: Uppercase for UI elements, normal case for body copy, wide letter-spacing (tracking)

**Type Scale & Hierarchy**:
- **Hero Headlines**: \`text-5xl\` to \`text-9xl\` (80px-128px) with responsive scaling. Split across multiple lines for drama.
- **Section Headings**: \`text-3xl\` to \`text-6xl\` (30px-60px). Always bold/black weight.
- **Card/Component Titles**: \`text-2xl\` (24px). Cyan color with text glow.
- **Body Text**: \`text-lg\` to \`text-xl\` (18px-20px). Generous line-height for readability.
- **UI Labels/Buttons**: \`text-sm\` to \`text-lg\`, all-caps, wide tracking (\`tracking-wider\`, \`tracking-widest\`).

**Text Effects**:
- **Glow on Headings**: \`drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]\` for white text, \`drop-shadow-[0_0_30px_rgba(255,0,255,0.6)]\` for gradient text
- **Card Title Glow**: \`drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]\` on cyan titles
- **Gradient Text Fill**: Use \`bg-gradient-to-r from-[#FF9900] via-[#FF00FF] to-[#00FFFF] bg-clip-text text-transparent\` for hero statements

### Radius & Borders

**Border Philosophy**: Sharp, geometric, high-contrast. Borders are neon light tubes, not subtle dividers.

*   **Border Radius**: \`rounded-none\` (0px) is primary. Vaporwave is aggressively geometric and angular. Occasional \`rounded-full\` for dots/circles only.
*   **Border Width**: \`border-2\` (2px) is standard. Heavier borders (\`border-4\`) for emphasis or outer containers.
*   **Border Colors**:
    - Default/Inactive: \`#2D1B4E\` (dark purple, subtle)
    - Interactive/Hover: \`#00FFFF\` (cyan) or \`#FF00FF\` (magenta)
    - Top Accent Bars: Gradient or solid cyan (\`border-t-2 border-t-[#00FFFF]\`)
*   **Multi-Border Patterns**: Cards often have a colored top border (\`border-t-2\`) plus subtle side borders in different colors for layered effect

### Shadows & Effects (The Glow)

**Effect Philosophy**: Everything emits light. Shadows are colored glows, not dark drops.

*   **Box Shadows (Neon Glow)**:
    - **Magenta Glow**: \`shadow-[0_0_10px_#FF00FF]\` or \`shadow-[0_0_20px_#FF00FF]\` for intense glow
    - **Cyan Glow**: \`shadow-[0_0_20px_rgba(0,255,255,0.2)]\` for containers, \`shadow-[0_0_15px_#00FFFF]\` for inputs
    - **Large Area Glow**: \`shadow-[0_0_50px_rgba(0,255,255,0.2)]\` for major containers like final CTA
*   **Text Shadows (See Typography section)**
*   **Hover State Glows**: Buttons and interactive elements dramatically increase glow intensity on hover (2x-3x the base glow)

### Textures & Background Patterns

**Pattern Philosophy**: The void is never empty. Layers of grids, scanlines, dots, and gradients create dimensional depth.

*   **Perspective Grid Floor**:
    \`\`\`css
    background-image: linear-gradient(transparent 95%, #FF00FF 95%), linear-gradient(90deg, transparent 95%, #FF00FF 95%);
    background-size: 40px 40px;
    transform: perspective(500px) rotateX(60deg) translateY(-100px) scale(2);
    mask-image: linear-gradient(to bottom, transparent, black);
    \`\`\`
    Creates the iconic receding grid effect
*   **Floating Sun**: Massive blurred gradient orb (\`h-[600px] w-[600px] blur-[100px] bg-gradient-to-b from-[#FF9900] to-[#FF00FF] opacity-20\`)
*   **Global Scanlines Overlay**:
    \`\`\`css
    background: linear-gradient(rgba(18,16,20,0) 50%, rgba(0,0,0,0.25) 50%);
    background-size: 100% 4px;
    \`\`\`
    Applied as fixed overlay to entire page for CRT effect
*   **RGB Chromatic Aberration** (subtle): \`linear-gradient(90deg, rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06))\`
*   **Dot Patterns**: \`radial-gradient(#FF00FF 1px, transparent 1px)\` with \`background-size: 20px 20px\` for section backgrounds
*   **Gradient Overlays on Images**: Duotone effect via \`bg-gradient-to-br from-[#FF00FF] to-[#00FFFF] opacity-20 mix-blend-overlay\`

## 3. Component Stylings

### Buttons

**Primary Button** (\`variant="primary"\`):
\`\`\`tsx
// Skewed container that un-skews on hover
-skew-x-12 transform
border-2 border-[#00FFFF]
bg-transparent
text-[#00FFFF]
rounded-none
uppercase tracking-wider font-mono

// Hover state
hover:skew-x-0
hover:bg-[#00FFFF]
hover:text-black
hover:shadow-[0_0_20px_#00FFFF]

// Inner content is counter-skewed
<span className="inline-block skew-x-12 transform">{children}</span>
\`\`\`

**Secondary Button** (\`variant="secondary"\`):
\`\`\`tsx
-skew-x-12 transform
border-2 border-[#FF00FF]
bg-[#FF00FF]
text-white
rounded-none

hover:skew-x-0
hover:scale-105
hover:opacity-80
\`\`\`

**Outline Button** (\`variant="outline"\`):
\`\`\`tsx
border-2 border-[#FF00FF]
bg-transparent
text-[#FF00FF]
rounded-none

hover:bg-[#FF00FF]
hover:text-white
\`\`\`

**Ghost Button** (\`variant="ghost"\`):
\`\`\`tsx
text-[#E0E0E0]
rounded-none

hover:bg-[rgba(0,255,255,0.1)]
hover:text-[#00FFFF]
\`\`\`

**Sizes**: \`sm\` (h-9), \`default\` (h-12), \`lg\` (h-14), \`icon\` (h-10 w-10)

### Cards / Containers

**Standard Card**:
\`\`\`tsx
border border-[#FF00FF]/30
border-t-2 border-t-[#00FFFF]  // Laser accent on top
bg-[#1a103c]/80
backdrop-blur-md
p-6

// Card Title (cyan with glow)
font-heading font-semibold text-2xl
text-[#00FFFF]
drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]

// Card Description
font-mono text-[#E0E0E0]/70 text-sm
\`\`\`

**Terminal Window Container** (Product Detail style):
\`\`\`tsx
// Outer border with glow
border-2 border-[#00FFFF]
bg-black/80
shadow-[0_0_20px_rgba(0,255,255,0.2)]

// Title bar
bg-[#00FFFF]/10
border-b border-[#00FFFF]
px-4 py-2

// Window control dots
<div className="flex gap-2">
  <div className="h-3 w-3 rounded-full bg-[#FF00FF]" />
  <div className="h-3 w-3 rounded-full bg-[#00FFFF]" />
  <div className="h-3 w-3 rounded-full bg-[#FF9900]" />
</div>
\`\`\`

**File Explorer Window** (Benefits section):
\`\`\`tsx
// Container
border-2 border-[#E0E0E0]/20
bg-[#1a103c]/90
backdrop-blur

// Title bar
bg-[#E0E0E0]/10
border-b-2 border-[#E0E0E0]/20

// Status bar
border-t-2 border-[#E0E0E0]/20
bg-[#090014]
text-[#E0E0E0]/50 text-xs
\`\`\`

### Inputs

**Terminal-Style Input**:
\`\`\`tsx
border-b-2 border-[#FF00FF]  // Underline only
bg-black
text-[#00FFFF] font-mono text-lg
px-3 py-2

placeholder:text-[#FF00FF]/50

focus-visible:border-[#00FFFF]
focus-visible:shadow-[0_0_15px_#00FFFF]
focus-visible:outline-none
\`\`\`

## 4. Non-Generic "Bold" Choices (The "Wow" Factor)

These are mandatory unique design signatures that prevent the Vaporwave style from looking generic:

1.  **Aggressive Skewing**: Buttons and badges use \`-skew-x-12\` transform, creating dynamic diagonal shapes that un-skew on hover for a kinetic morphing effect
2.  **Global CRT Scanlines**: Fixed overlay across entire viewport with horizontal line pattern and RGB chromatic aberration
3.  **Perspective Grid Backgrounds**: Multiple sections use CSS perspective transforms to create the iconic receding grid floor effect
4.  **Gradient Text Fills**: Hero headlines use multi-stop gradient backgrounds clipped to text (\`bg-clip-text text-transparent\`)
5.  **Rotating Icon Containers**: Feature icons sit inside \`rotate-45\` diamond containers that spin to \`rotate-90\` on hover
6.  **Dual-Border Patterns**: Cards combine a bright cyan top border with subtle pink side borders for layered neon tube aesthetic
7.  **Terminal/Window Chrome**: Multiple UI patterns mimic vintage OS interfaces (window title bars with colored dots, file explorer layouts, command prompts)
8.  **Massive Blurred Sun**: Giant gradient orb in background (\`600px\` diameter with \`blur-[100px]\`) creates atmospheric depth
9.  **IRC-Style Elements**: Testimonials use chat message formatting with \`<username>\` angle bracket syntax
10. **Alternating Timeline Layout**: How It Works section uses alternating left-right layout with central checkpoint line
11. **Glowing Hover Amplification**: Interactive elements don't just highlight �?" they explode with 2-3x glow intensity and trigger color inversions

## 5. Animation & Motion

**Philosophy**: Snappy, mechanical, retro-digital. Like a CRT monitor warming up or old computer software responding to input.

*   **Transition Speed**: \`duration-200 ease-linear\` �?" Fast, unnatural, digital. No organic easing curves.
*   **Hover Transformations**:
    - Buttons: Un-skew, fill with color, invert text, explode glow
    - Cards: Translate upward (\`-translate-y-2\`), increase shadow
    - Icons: Rotate 45A� or scale
    - Links: Add underline, change color, add glow
*   **Continuous Animations**:
    - Trust indicator: \`animate-pulse\` for attention
    - Terminal cursor: Could add blinking effect
    - Icons: \`animate-pulse\` on placeholders
*   **Transform Origins**: Use \`transform-origin\` carefully on perspective grids (\`top center\`, \`bottom center\`)
*   **Transition Classes**: \`transition-all\`, \`transition-colors\`, \`transition-transform\` depending on what's changing

## 6. Layout Strategy & Spacing

**Container Width**: \`max-w-7xl\` for main content, \`max-w-6xl\` for pricing, \`max-w-4xl\` for FAQ/Final CTA, \`max-w-5xl\` for hero

**Spacing System**:
*   **Section Padding**: \`py-20 sm:py-32\` (80px-128px vertical rhythm)
*   **Component Gaps**: \`gap-8\` (32px) for grids, \`gap-12\` (48px) for larger spacing
*   **Inner Padding**: Cards use \`p-6\` or \`p-8\`, containers use \`px-4\` on mobile
*   **Margins**: Generous �?" headings have \`mb-8\` to \`mb-20\` depending on size

**Grid Usage**:
*   Features: \`grid-cols-1 md:grid-cols-3\`
*   Stats: \`grid-cols-1 md:grid-cols-2 lg:grid-cols-4\`
*   Blog: \`grid-cols-1 md:grid-cols-3\`
*   Benefits: \`grid-cols-1 md:grid-cols-2 lg:grid-cols-3\`
*   Pricing: \`grid-cols-1 md:grid-cols-3\`

**Z-Index Layering** (back to front):
1. Background grid (fixed, \`z-0\`)
2. Floating sun gradient (fixed)
3. Section backgrounds
4. Content (\`z-10\` for nav/sections)
5. Scanline overlay (fixed, \`z-50\`)

## 7. Responsive Strategy

**Breakpoints**: Mobile-first approach using \`sm:\`, \`md:\`, \`lg:\` prefixes

**Mobile Adaptations** (< 640px):
*   **Typography**: Scale down headings by 1-2 sizes (e.g., \`text-5xl\` instead of \`text-8xl\`)
*   **Spacing**: Reduce section padding from \`py-32\` to \`py-20\`, margins from \`mb-20\` to \`mb-12\`
*   **Grids**: Stack to single column (\`grid-cols-1\`)
*   **Buttons**: Full-width CTA buttons in hero, stacked vertically
*   **Timeline**: Left-aligned with offset instead of alternating layout
*   **Borders**: Maintain neon borders (essential to vibe)
*   **Glow Effects**: Slightly reduce intensity to prevent overwhelming small screens
*   **Grid Backgrounds**: Keep perspective grids but simplify (they add essential atmosphere)
*   **Touch Targets**: Buttons maintain minimum 44px height via \`h-12\` and \`h-14\` sizes

**Tablet** (640px - 1024px):
*   **Grids**: Often 2 columns before jumping to 3/4
*   **Typography**: Mid-range sizes
*   **Navigation**: Show full menu on tablets

**Key**: The vaporwave aesthetic MUST survive on mobile. Neon glows, borders, and grid backgrounds are non-negotiable even on small screens.`},

===== STYLE BLOCK: web3 (offset 1005218 to 1025172) =====
web3:{id:"web3",name:"Crypto",mode:"dark",fontType:"sans-serif",description:"A bold, futuristic aesthetic inspired by Bitcoin and decentralized finance. Deep void backgrounds with Bitcoin orange accents, golden highlights, glowing elements, and precision data visualization.",layoutIdeas:{hero:"Split layout with 60/40 ratio. Left: Massive headline with Bitcoin orange gradient text and trust badge. Right: Floating animated 3D orb with spinning orbital rings and floating stat cards. Background features subtle grid pattern with radial gradient blur effects.",stats:"Horizontal grid of four key metrics with monospace numbers, uppercase labels, and subtle trend indicators. Dark surface background with top/bottom borders for ticker-tape feel.",productDetail:"Two-column layout with mockup on left, content on right. Abstract UI mockup with glass morphism, grid backgrounds, and holographic gradients.",features:"Three-column grid of elevated cards with background icon watermarks, glowing accent borders on hover, and icon containers with gradient backgrounds.",blog:"Three-column grid of image-led cards. Full-bleed images with gradient overlays, date badges, and hover scale effects that increase contrast.",howItWorks:"Vertical timeline with centered connection line. Alternating left/right content cards with numbered nodes on the centerline. Cards have corner accent borders.",benefits:"Three-column grid of cards with check icons in glowing circles. Gradient borders appear on hover.",testimonials:"Three-column grid of glass-morphic cards with large quote marks, avatar rings with orange glow, and role badges in accent color.",pricing:"Three-column grid with center card elevated and scaled. Popular badge floats above. Gradient buttons for highlighted tier.",faq:"Accordion with chevron indicators. Glass-morphic backgrounds with smooth height transitions and padding reveals.",footer:"Multi-column grid with brand on left spanning two columns. Monospace section headers, subtle link hover states with orange accent."},content:'# Design Philosophy: The "Bitcoin DeFi" Aesthetic\n\nThis style embodies the visual DNA of Bitcoin and decentralized finance�?"a sophisticated fusion of precision engineering, cryptographic trust, and digital gold. It is **not generic dark mode**; it is a deep cosmic void where data structures glow with the warmth of Bitcoin orange and the brilliance of digital gold.\n\n## Core Design Principles\n\n1.  **Luminescent Energy**: Light emanates from interactive elements themselves. Bitcoin orange glows, golden highlights shimmer, and data points pulse with life against the true void background. Shadows are colored (orange/gold tints), not just black.\n\n2.  **Mathematical Precision**: Everything follows strict geometric rules. Ultra-thin 1px borders define boundaries, monospace fonts display data with technical accuracy, and grids provide the underlying structure of the blockchain aesthetic.\n\n3.  **Layered Depth**: Create three-dimensional space through transparency stacking (glass morphism), colored glow shadows, and backdrop blur effects. Elements float in Z-space without heavy skeuomorphism�?"it\'s digital depth, not physical.\n\n4.  **Textured Void**: Backgrounds are never flat. Subtle grid patterns (representing blockchain networks), radial gradient blurs (representing energy fields), and noise textures bring the void to life. The darkness breathes.\n\n5.  **Trust Through Design**: High contrast, clear hierarchy, and technical precision communicate security and reliability. The aesthetic says "your assets are safe here."\n\nThe vibe is **Secure, Technical, and Valuable**. This is digital gold�?"it should feel premium, cutting-edge, and engineered to perfection. Think Bitcoin mining rigs humming in the darkness, glowing with orange heat.\n\n# Design Token System\n\n## Colors (Dark Mode Only)\nThis palette uses a "True Void" foundation with "Bitcoin Fire" energy�?"the warmth of Bitcoin orange and the brilliance of digital gold.\n\n*   **Background**: `#030304` (True Void) - The deepest space where all begins\n*   **Surface**: `#0F1115` (Dark Matter) - Elevated surfaces, cards, and panels\n*   **Foreground**: `#FFFFFF` (Pure Light) - Primary text, maximum contrast\n*   **Muted**: `#94A3B8` (Stardust) - Secondary text, descriptions, metadata\n*   **Border**: `#1E293B` (Dim Boundary) - Subtle borders at rest (often at 10-20% opacity when using white)\n*   **Primary Accent**: `#F7931A` (Bitcoin Orange) - The iconic color of decentralization. Primary CTAs, links, active states, and trust indicators\n*   **Secondary Accent**: `#EA580C` (Burnt Orange) - A deeper, warmer orange for gradients, secondary elements, and visual depth\n*   **Tertiary Accent**: `#FFD600` (Digital Gold) - The color of value. Used in gradients with Bitcoin Orange, highlights, and success states\n\n**Gradient Formula**: The signature look is `linear-gradient(to right, #EA580C, #F7931A)` or `linear-gradient(to right, #F7931A, #FFD600)` for text and buttons.\n\n## Typography\nThe type system balances technical precision with modern geometric forms.\n\n*   **Headings**: `Space Grotesk` (Google Font) - A geometric grotesque with quirky technical character\n    *   Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)\n    *   Usage: All headings (h1-h6), section titles, card titles\n    *   Apply `font-heading` class\n\n*   **Body**: `Inter` (Google Font) - Highly legible sans-serif optimized for screens\n    *   Weights: 400 (Regular), 500 (Medium), 600 (Semibold)\n    *   Usage: Body copy, descriptions, buttons\n    *   Apply `font-body` class\n\n*   **Mono/Data**: `JetBrains Mono` (Google Font) - Technical monospace for precision\n    *   Weights: 400 (Regular), 500 (Medium)\n    *   Usage: Stats, prices, badges, technical labels, navigation links\n    *   Apply `font-mono` class\n\n*   **Scale Philosophy**: Dramatic contrast between display and body. Heroes are massive (`text-4xl` �+' `md:text-7xl`), body is comfortable (`text-base` or `text-lg`). Mobile-first scaling prevents overwhelming small screens.\n\n*   **Leading & Tracking**: Tight leading on headings (`leading-tight`), relaxed on body (`leading-relaxed`). Uppercase mono text gets generous tracking (`tracking-wider`, `tracking-widest`).\n\n## Radius & Borders\nGeometric precision with soft curves for approachability.\n\n*   **Radius Tokens**:\n    *   Cards/Containers: `rounded-2xl` (16px) or `rounded-xl` (12px)\n    *   Buttons: `rounded-full` (pill shape)\n    *   Inputs: `rounded-lg` (8px) or bottom-border only for minimalism\n    *   Small elements (badges, icons): `rounded-lg` or `rounded-full`\n\n*   **Border Philosophy**: Ultra-thin `1px` borders create delicate boundaries without visual weight\n    *   Default state: `border border-white/10` (barely visible structure)\n    *   Hover state: `border-[#F7931A]/50` (orange accent, 50% opacity)\n    *   Active/Focus: `border-[#F7931A]` (full intensity)\n\n*   **Special Border Techniques**:\n    *   Corner accents: Small decorative border segments at corners (see How It Works cards)\n    *   Gradient borders: Simulate with inner pseudo-elements or subtle box-shadow gradients\n\n## Shadows & Effects (The Glow)\nThe signature of this style is **colored luminescence**�?"shadows and glows in Bitcoin orange and gold tints.\n\n*   **Orange Glow** (Primary): `shadow-[0_0_20px_-5px_rgba(234,88,12,0.5)]` or `shadow-[0_0_30px_-5px_rgba(247,147,26,0.6)]`\n    *   Used on buttons, cards on hover, primary CTAs, and interactive elements\n\n*   **Gold Glow** (Accent): `shadow-[0_0_20px_rgba(255,214,0,0.3)]`\n    *   Used on special highlights, success states, value indicators\n\n*   **Subtle Card Elevation**: `shadow-[0_0_50px_-10px_rgba(247,147,26,0.1)]`\n    *   Used on product mockups, major sections\n\n*   **Glass Morphism**:\n    *   Formula: `backdrop-blur-lg` + `bg-white/5` or `bg-black/40`\n    *   Creates floating, translucent panels that reveal background blur\n    *   Used on floating cards (hero), testimonials, "How It Works" cards\n\n*   **Radial Blur Backgrounds**: Large, soft radial gradients with heavy blur for ambient background glow\n    *   Example: `bg-[#F7931A] opacity-10 blur-[120px]` positioned absolutely\n\n## Textures & Patterns\nBackgrounds breathe with subtle, non-distracting patterns that reinforce the blockchain/network theme.\n\n*   **Grid Pattern** (Signature):\n    ```css\n    background-size: 50px 50px;\n    background-image:\n      linear-gradient(to right, rgba(30, 41, 59, 0.5) 1px, transparent 1px),\n      linear-gradient(to bottom, rgba(30, 41, 59, 0.5) 1px, transparent 1px);\n    mask-image: radial-gradient(circle at center, black 40%, transparent 100%);\n    ```\n    *   Creates a fading grid that disappears toward edges (vignette effect)\n    *   Used on hero section\n\n*   **External Texture Overlays**:\n    *   Example: `bg-[url(\'https://www.transparenttextures.com/patterns/cubes.png\')] opacity-5`\n    *   Very subtle, barely visible patterns for visual interest\n\n*   **Radial Gradient Blurs**: Massive, soft color blobs for ambient lighting\n    *   Position absolutely, use low opacity (5-10%), apply blur-[120px] or blur-[150px]\n    *   Creates depth and guides eye to focal points\n\n# Component Stylings\n\n## Buttons\nButtons are bold, pill-shaped, and emit colored light. All use `rounded-full` for the signature crypto pill shape.\n\n*   **Primary (Default)**:\n    *   Background: `bg-gradient-to-r from-[#EA580C] to-[#F7931A]`\n    *   Text: White, bold, uppercase with `tracking-wider`\n    *   Shadow: `shadow-[0_0_20px_-5px_rgba(234,88,12,0.5)]`\n    *   Hover: `scale-105` + intensified shadow `shadow-[0_0_30px_-5px_rgba(247,147,26,0.6)]`\n    *   Min height: 44px (touch-friendly)\n\n*   **Outline**:\n    *   Background: Transparent\n    *   Border: `border-2 border-white/20`\n    *   Text: White\n    *   Hover: `border-white` + `bg-white/10`\n\n*   **Ghost**:\n    *   Background: Transparent, no border\n    *   Text: White\n    *   Hover: `bg-white/10` + `text-[#F7931A]`\n\n*   **Link**:\n    *   Text: `text-[#F7931A]`\n    *   Hover: Underline\n\nAll buttons include smooth `transition-all` for responsive micro-interactions.\n\n## Cards (The "Block" Concept)\nCards are elevated surfaces that float above the void, representing blocks in the chain.\n\n*   **Standard Card**:\n    *   Background: `bg-[#0F1115]` (Dark Matter surface)\n    *   Border: `border border-white/10` (subtle boundary)\n    *   Radius: `rounded-2xl` (16px)\n    *   Padding: `p-8` (generous spacing)\n    *   Hover: `hover:-translate-y-1` (lift) + `hover:border-[#F7931A]/50` + `hover:shadow-[0_0_30px_-10px_rgba(247,147,26,0.2)]`\n    *   Transition: `transition-all duration-300`\n\n*   **Glass Cards** (Floating/Special):\n    *   Background: `bg-black/40` or `bg-white/5`\n    *   Backdrop: `backdrop-blur-sm` or `backdrop-blur-lg`\n    *   Border: `border border-white/10`\n    *   Creates translucent, floating effect\n\n*   **Pricing Cards**:\n    *   Highlighted tier: `scale-105`, `border-[#F7931A]`, elevated z-index, `shadow-[0_0_40px_-10px_rgba(247,147,26,0.15)]`\n    *   Others: Lower opacity (`opacity-80`), scale up on hover\n\n*   **Card Hierarchy**:\n    *   Header: `p-8 pb-4`\n    *   Title: `font-heading font-semibold text-2xl`\n    *   Description: `text-[#94A3B8] text-sm`\n    *   Content: `p-8 pt-0`\n    *   Footer: `p-8 pt-0`\n\n## Inputs\nMinimalist, precise input fields with bottom-border styling for a technical aesthetic.\n\n*   **Background**: `bg-black/50` (semi-transparent dark)\n*   **Border**: Bottom border only - `border-b-2 border-white/20`\n*   **Height**: `h-12` (48px for touch targets)\n*   **Padding**: `px-4 py-2`\n*   **Text**: `text-white text-sm`\n*   **Placeholder**: `placeholder:text-white/30`\n*   **Focus State**:\n    *   Border: `focus-visible:border-[#F7931A]`\n    *   Glow: `focus-visible:shadow-[0_10px_20px_-10px_rgba(247,147,26,0.3)]`\n    *   No outline: `focus-visible:outline-none`\n*   **Disabled**: `disabled:opacity-50 disabled:cursor-not-allowed`\n\nInputs feel like data entry terminals�?"clean, precise, and purposeful.\n\n## Icons\nIcons from `lucide-react` reinforce the technical, precise aesthetic.\n\n*   **Stroke Width**: Default (1.5-2px for clean, technical lines)\n*   **Colors**: Use accent colors to create hierarchy\n    *   Orange: `text-[#F7931A]` or `text-[#EA580C]`\n    *   Gold: `text-[#FFD600]`\n    *   Muted: `text-[#94A3B8]`\n    *   White: `text-white`\n\n*   **Icon Containers**: Wrap in colored, glowing containers\n    *   Example: `bg-[#EA580C]/20 border border-[#EA580C]/50 rounded-lg p-3`\n    *   Creates a "holographic node" effect\n    *   Hover: Add glow shadow `hover:shadow-[0_0_20px_rgba(234,88,12,0.4)]`\n\n*   **Decorative Icons**: Large, watermark-style icons in card backgrounds\n    *   High opacity on hover for subtle reveal effect\n    *   Example: `opacity-20 group-hover:opacity-100`\n\n# Non-Generic "Bold" Choices\n\nThis design MUST NOT look like default Tailwind. These bold choices create unmistakable personality:\n\n1.  **Gradient Text on Headlines**: Apply `bg-gradient-to-r from-[#F7931A] to-[#FFD600] bg-clip-text text-transparent` to final 1-2 words of hero headlines. Creates instant visual hierarchy and Bitcoin brand association.\n\n2.  **Spinning Orbital Rings**: Hero section features animated 3D-style orb with CSS rotating rings (`animate-[spin_10s_linear_infinite]` and reverse). Floating stat cards bounce around it with staggered delays.\n\n3.  **Corner Border Accents**: "How It Works" cards use decorative corner borders (`border-t border-l` on top-left, `border-r border-b` on bottom-right) in Bitcoin orange, creating a "selected node" effect.\n\n4.  **Glowing Animated Badges**: Pulsing dot badges (`animate-ping`) on trust indicators and status markers. Suggests live network activity.\n\n5.  **Background Icon Watermarks**: Large, rotated, low-opacity icons in feature card backgrounds that reveal on hover (`opacity-20 group-hover:opacity-100`).\n\n6.  **Timeline as Blockchain**: "How It Works" uses a vertical gradient line (orange to transparent) with numbered circular nodes, mimicking a blockchain ledger.\n\n7.  **Asymmetric Pricing Scale**: The popular pricing tier is `scale-105` and elevated, while others are `opacity-80`, creating intentional hierarchy through scale manipulation.\n\n8.  **Glass Morphism with Grid Patterns**: Combine `backdrop-blur` with background grid patterns visible through transparency, creating layered depth.\n\n9.  **Colored Shadows Replace Black**: ALL shadows use orange/gold tints. No pure black shadows exist in this design system.\n\n# Layout & Spacing\n\n*   **Container Width**: `max-w-7xl` (1280px) - Wide and expansive to showcase data and content without cramping\n*   **Section Padding**: Generous vertical `py-24` (96px) creates breathing room between major sections\n*   **Density**: Spacious approach with `gap-8` (32px) or `gap-12` (48px) between grid items\n*   **Section Dividers**: NO hard lines or `<hr>` elements. Sections separate through:\n    *   Vertical spacing (`py-24`)\n    *   Alternating backgrounds (`bg-[#030304]` �+' `bg-[#0F1115]` �+' `bg-[#030304]`)\n    *   Subtle top/bottom borders on specific sections (e.g., stats ticker has `border-y`)\n\n*   **Responsive Grids**:\n    *   Mobile-first: Single column by default\n    *   Tablet: `md:grid-cols-2` or `md:grid-cols-3`\n    *   Desktop: Keep `md:grid-cols-3` or `lg:grid-cols-4` for features\n    *   Pricing: Always `md:grid-cols-3` for tier comparison\n\n# Animation & Motion\n\nMotion should feel **precise, snappy, and purposeful**�?"like a high-performance trading terminal.\n\n*   **Custom Float Animation**:\n    ```css\n    @keyframes float {\n      0%, 100% { transform: translateY(0px); }\n      50% { transform: translateY(-20px); }\n    }\n    .animate-float {\n      animation: float 8s ease-in-out infinite;\n    }\n    ```\n    *   Applied to hero 3D orb graphic\n    *   Slow, smooth, endless float creates ethereal quality\n\n*   **Spinning Orbitals**:\n    *   `animate-[spin_10s_linear_infinite]` for outer ring\n    *   `animate-[spin_15s_linear_infinite_reverse]` for inner ring (reverse direction)\n    *   Creates mesmerizing 3D depth illusion\n\n*   **Bouncing Cards**: Floating stat cards use `animate-bounce` with custom durations (`3s`, `4s`) and delays (`delay-1s`) for staggered motion\n\n*   **Pulsing Indicators**: Status badges use `animate-ping` for "live" feel\n\n*   **Interaction Speed**: Fast and responsive (`duration-200` or `duration-300`)\n    *   Button hover: `transition-all duration-300`\n    *   Card lift: `transition-all duration-300`\n    *   Input focus: Instant (`duration-200`)\n\n*   **Hover Effects**:\n    *   Cards: Lift (`-translate-y-1`), border color shift, glow intensification\n    *   Buttons: Scale (`scale-105`), glow spread\n    *   Images: Scale (`scale-110`), contrast boost (`contrast-125`)\n\nThe motion design communicates **speed, precision, and responsiveness**�?"critical values in crypto/finance.\n\n# Responsive Strategy\n\nThe design must maintain its bold personality across all screen sizes while adapting gracefully.\n\n*   **Mobile-First Philosophy**: Start with single-column layouts, scale up for larger screens\n*   **Breakpoints**:\n    *   `sm`: 640px - Minor adjustments\n    *   `md`: 768px - Major layout shifts (2-3 columns activate)\n    *   `lg`: 1024px - Full desktop experience\n    *   `xl`: 1280px - Maximum width container (`max-w-7xl`)\n\n*   **Typography Scaling**: All headings use responsive classes\n    *   Hero: `text-4xl sm:text-5xl md:text-7xl`\n    *   Section Titles: `text-2xl md:text-4xl` or `md:text-5xl`\n    *   Body: `text-base md:text-lg`\n    *   Keep mobile readable, don\'t overwhelm small screens\n\n*   **Touch Targets**: All interactive elements minimum 44px (`min-w-[44px]`, `h-10+`)\n\n*   **Mobile Adaptations**:\n    *   Navigation: Show only essential CTA on mobile, hide secondary nav\n    *   Hero 3D graphic: Smaller size on mobile (`h-[300px] md:h-[450px]`)\n    *   Grids: Single column �+' 2-3 columns at `md`\n    *   Pricing cards: Stack vertically, remove scale effect on mobile\n    *   How It Works timeline: Left-aligned on mobile with simpler layout\n\n*   **Maintain Core Aesthetic**: Grid patterns, glows, and gradients persist on mobile�?"don\'t strip personality for smaller screens\n\n# Accessibility & Best Practices\n\n*   **Color Contrast**: White text on `#030304` exceeds WCAG AAA (21:1 ratio). Orange `#F7931A` on dark backgrounds meets AA for large text.\n*   **Focus States**: All interactive elements have visible focus rings using `focus-visible:ring-2 focus-visible:ring-[#F7931A]`\n*   **Semantic HTML**: Proper heading hierarchy (h1 �+' h2 �+' h3), `<nav>`, `<section>`, `<button>` elements\n*   **Alt Text**: All images require descriptive alt attributes\n*   **Keyboard Navigation**: All interactive elements accessible via Tab, buttons activate on Enter/Space\n*   **Motion Preferences**: Consider `prefers-reduced-motion` for users sensitive to animation (disable float/spin animations)\n\n# Implementation Notes\n\n*   **Font Loading**: Use `fontImport()` helper to load Google Fonts\n*   **Custom Classes**: Define `.font-heading`, `.font-body`, `.font-mono` in style block\n*   **Grid Pattern**: Define `.bg-grid-pattern` with CSS-in-JS in style block\n*   **Glass Morphism**: Define `.holographic-gradient` helper class\n*   **Components**: Build Button, Card, and Input components using `cva` (class-variance-authority) following Shadcn patterns but with Crypto-specific styling\n*   **Icons**: Import specific icons from `lucide-react` as needed (Zap, Lock, Layers, Globe, Check, etc.)\n\nThis is not a generic dark theme. This is the **Bitcoin DeFi aesthetic**�?"engineered for precision, security, and digital value.'}};

