---
name: animmaster-lib
description: 300 PRO-level animated UI components for modern web products — scroll animations, mouse effects, page transitions, sliders, hero animations, WebGL shaders, background animations, navigation menus, hover effects, text animations, 3D animations, physics effects, and SVG animations. Use when the user wants premium animated frontend components, smooth scroll effects, or motion-heavy websites.
license: Reference only — component ideas and implementation patterns from animmasterlib.dev for building original animations.
---

# Animmaster Lib — 300 PRO-Level Animated Components

Animmaster Lib is a library of 300 hand-written professional frontend animation components. This skill captures the catalog and implementation patterns so you can recreate these effects in React/Vite/Tailwind or HTML/CSS/JS.

## Component Categories (300 total)

| Category | Count | Sub-pages |
|---|---|---|
| Scroll Animations | 66 | /scroll.html |
| Hero Animations | 26 | /hero.html |
| Sliders | 23 | /sliders.html |
| 3D Animations | 22 | /3d.html |
| Navigation Menus | 21 | /navs.html |
| Hover Effects | 20 | /hovers.html |
| Mouse Effects | 20 | /mouseeff.html |
| WebGL Shaders | 18 | /webgl.html |
| Page Transitions | 14 | /pagetr.html |
| Text Animations | 14 | /text.html |
| SVG Animations | 11 | /svgs.html |
| Background Animations | 10 | /bg.html |
| Grid Animations | 10 | /grids.html |
| Physics Effects | 10 | /physics.html |

## Implementation Patterns

### Scroll Animations
- Trigger reveals with IntersectionObserver or scroll-driven timelines
- Common: fade-in-up, parallax translate, sticky sections, scrub-linked scale/rotate
- Best stack: GSAP ScrollTrigger, Lenis smooth scroll, or native `animation-timeline: scroll()`

### Hero Animations
- Orchestrated entrance: staggered text lines, mask reveals, image zoom-out from container
- Mouse parallax layers at different depths

### Sliders
- Full-page image sliders with keyboard nav
- Horizontal marquee loops, snap carousels with drag physics

### 3D Animations
- CSS 3D transforms: `perspective` on parent, `rotateX/rotateY` on children
- Three.js / React Three Fiber for WebGL 3D
- Scroll-driven 3D rotation (product showcases)

### Navigation Menus
- Animated underline/pill for active state
- Full-screen expanding mega menus
- Awwwards-style hamburger morph + staggered link reveal

### Hover Effects
- Direction-aware fill (mouse-enter from cursor side)
- Image zoom + gradient overlay
- Card lift with spring easing

### Mouse Effects
- Custom cursor follower (lerp/smoothing)
- Magnetic buttons (element drifts toward cursor)
- Spotlight / radial glow following pointer

### WebGL Shaders
- Vertex + fragment shaders with uniforms for time/mouse
- Common effects: noise, ripple, distortion, pixelation, gradient flows
- Use THREE.ShaderMaterial or raw WebGL

### Page Transitions
- Overlay wipe (curtain) between routes
- Shared-element / FLIP transitions
- Barba.js or View Transitions API for SPA/MPA

### Text Animations
- Split text into chars/words, stagger reveal
- Typewriter, scramble/decrypt, flip, marquee
- SVG textPath animation

### SVG Animations
- Stroke draw-on (`stroke-dashoffset` to 0)
- Morphing paths (`d` interpolation)
- Filter effects (turbulence, displacement)

### Background Animations
- Animated gradient blobs / aurora
- Particle systems, noise grain, grid pulse
- Canvas confetti / emoji rain

### Grid Animations
- Staggered cell reveals on scroll
- Hover-to-expand grid items with layout animation

### Physics Effects
- Spring-based interactions (drag, throw)
- Gravity simulations (magnetic attract/repel)
- Ragdoll / hover-physics cards

## Code Delivery Rules

- Use **Motion (framer-motion)** for React components — it's the standard for these effects and already installed in Jarvis projects. Fall back to GSAP for complex timelines.
- Respect `prefers-reduced-motion` — disable heavy animation when set.
- Always include `will-change` hints and `transform`-based animation (GPU-accelerated) for 60fps.
- For WebGL/three.js use `useRef` + `useEffect` with a canvas, dispose on unmount.
- When recreating a specific component, describe it in the chat and deliver a working React component with Tailwind classes + motion props.