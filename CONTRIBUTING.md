# Contributing to JARVIS AI OS

First off, thank you for taking the time to contribute! 🎉

We welcome contributions from developers, designers, prompt engineers, and AI researchers of all skill levels.

---

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## How Can I Contribute?

### 1. Reporting Bugs
- Check the [GitHub Issues](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/issues) to see if the bug has already been reported.
- If not, open a new issue with a clear title, description, reproduction steps, and console logs.

### 2. Suggesting Enhancements
- Open an issue with the label `enhancement`.
- Describe the feature, why it is useful, and how it aligns with the JARVIS AI OS architecture.

### 3. Submitting Pull Requests
1. Fork the repository (`https://github.com/Vishwajeetsrk/JARVIS-AI-OS`).
2. Create a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes with clear semantic messages:
   ```bash
   git commit -m "feat(voice): add neural audio emotion tag processing"
   ```
4. Ensure all tests pass:
   ```bash
   npm run build
   npx tsc --noEmit
   ```
5. Push to your branch:
   ```bash
   git push origin feature/amazing-feature
   ```
6. Open a Pull Request on GitHub.

---

## Local Development Workflow

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vishwajeetsrk/JARVIS-AI-OS.git
   cd JARVIS-AI-OS
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure Environment Variables**:
   Copy `.env.example` to `.env` and fill in your Supabase, Gemini, Groq, or OpenRouter keys.
4. **Start the Development Server**:
   ```bash
   npm run dev
   ```

---

## Architecture Guidelines
- **Type Safety**: Strictly typed TypeScript with zero compilation errors (`npx tsc --noEmit`).
- **Design System**: Use OKLCH dark-mode surface tokens and glassmorphic micro-animations.
- **Security**: Never expose API keys or service role tokens on client bundles.

Thank you for building the future of autonomous personal intelligence with us! 🚀
