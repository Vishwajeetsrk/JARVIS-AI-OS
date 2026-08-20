# Contributing to JARVIS AI OS

Thank you for your interest in contributing to **JARVIS AI OS**! We welcome contributions from developers worldwide to build the next generation of autonomous personal AI operating systems.

---

## 🌟 How to Contribute

### 1. Reporting Bugs
- Search existing [GitHub Issues](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/issues) to see if the bug has already been reported.
- If not, open a new issue detailing:
  - Operating System (Windows, macOS, Linux, Android, iOS)
  - Steps to reproduce
  - Expected vs actual behavior
  - Terminal or console error logs

### 2. Suggesting Features & Skills
- Feature requests and new agent ideas are welcome!
- Use the **Feature Request** issue template to outline the problem, proposed solution, and cross-platform implications.

### 3. Submitting Pull Requests (PRs)
1. **Fork the Repository**:
   ```bash
   git clone https://github.com/<your-username>/JARVIS-AI-OS.git
   cd JARVIS-AI-OS
   ```
2. **Create a Feature Branch**:
   ```bash
   git checkout -b feat/my-new-feature
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Make Your Changes & Test**:
   ```bash
   npm run test        # Runs Vitest automated test suite
   npm run typecheck   # Verifies strict TypeScript compilation
   ```
5. **Commit Your Changes**:
   Follow conventional commits:
   - `feat: add new voice intent handler`
   - `fix: resolve audio stream glitch on macOS`
   - `docs: update cross-platform installation guide`
6. **Push to Your Fork & Submit PR**:
   ```bash
   git push origin feat/my-new-feature
   ```

---

## 💻 Development Guidelines

- **Strict TypeScript**: Avoid `any` where possible. All interfaces must pass `npm run typecheck`.
- **Zero Session Amnesia**: Maintain memory governance principles — never hardcode sensitive user data into repository files.
- **Micro-Animations & UI Aesthetics**: Keep the UI luxurious, responsive (60 FPS), dark-mode-first, and cybernetic.
- **Cross-Platform Compatibility**: Code must work smoothly across Windows, macOS, Linux, iOS, Android, and Web browsers.

---

## 📜 Code of Conduct

All contributors must adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

Thank you for building the future of AI operating systems with us! 🚀
