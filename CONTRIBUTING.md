# Contributing to JARVIS AI OS

First off, thank you for taking the time to contribute to **JARVIS AI OS**! 🎉

We welcome contributions from software engineers, AI researchers, UI/UX designers, and open-source contributors of all backgrounds.

---

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## How Can I Contribute?

### 1. Reporting Bugs
- Check the [GitHub Issues](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/issues) to see if the bug has already been reported.
- If not, open a new issue with a clear title, description, reproduction steps, environment details, and console logs.

### 2. Suggesting Enhancements
- Open an issue with the label `enhancement`.
- Describe the feature, why it is useful, and how it fits into the **JARVIS AI OS v4.0** architectural contract.

### 3. Submitting Pull Requests
1. Fork the repository (`https://github.com/Vishwajeetsrk/JARVIS-AI-OS`).
2. Create a feature branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```
3. Follow the **Core Architectural Invariants**:
   - **Zero-Fabrication Policy**: Any resume or career evidence must be backed by verifiable data.
   - **Level 6 Human Approval Gate**: All high-risk or external dispatch actions require explicit user confirmation.
   - **Type Safety**: Strictly typed TypeScript with zero compilation errors.
4. Test your changes:
   ```bash
   npm run build
   npx tsc --noEmit
   ```
5. Commit with clean semantic commit messages:
   ```bash
   git commit -m "feat(content): add tiktok viral hook synthesizer"
   ```
6. Push to your fork and submit a Pull Request on GitHub.

---

## Local Development Setup

1. **Clone your fork**:
   ```bash
   git clone https://github.com/your-username/JARVIS-AI-OS.git
   cd JARVIS-AI-OS
   ```
2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```
3. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local` and configure your API keys (Gemini, Groq, OpenRouter, Supabase).
4. **Start the local server**:
   ```bash
   npm run dev
   ```

---

## Coding Standards & Style

- **Framework**: Next.js 15 App Router with React 19 and TypeScript 5.
- **Styling**: Vanilla CSS, design tokens, and OKLCH color palettes with glassmorphic aesthetic.
- **Three.js / WebGL**: Decouple 3D render loops from React state tree updates to preserve steady 60 FPS performance.
- **Security**: Never expose API keys or service role secrets in client-side code.

Thank you for helping us build the future of autonomous personal intelligence! 🚀
