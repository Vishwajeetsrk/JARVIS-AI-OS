<div align="center">
  <img src="public/logo.png" alt="JARVIS AI OS Logo" width="380" />

  # 🤝 Contributing to JARVIS AI OS
  ### Guidelines for Engineers, AI Researchers, and Open-Source Builders

  [![GitHub PRs](https://img.shields.io/badge/PRs-Welcome-10b981?style=for-the-badge&logo=github)](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/pulls)
  [![Architecture](https://img.shields.io/badge/Architecture-v4.0.0_APEX-00e5ff?style=for-the-badge)](docs/audit/RUNTIME-TRUTH-MAP.md)
  [![License](https://img.shields.io/badge/License-MIT-a855f7?style=for-the-badge)](LICENSE)
</div>

---

## 🚀 Welcome Builders!

Thank you for your interest in contributing to **JARVIS AI OS**! We welcome contributions from developers, researchers, designers, and systems architects across the world.

---

## 📐 Core Architectural Invariants

Before submitting code, please review our foundational architecture rules:

1. **Zero-Fabrication Policy**: Any career data, resume statements, or benchmarks must be backed by verified, empirical evidence in the Evidence Graph.
2. **Level 6 Human Approval Gate**: All high-risk or external operations (sending emails, committing code, deleting resources) require explicit human confirmation.
3. **Strict Type Safety**: All TypeScript code must compile with `npx tsc --noEmit` and pass with 0 errors.
4. **Decoupled Architecture**: Subsystems communicate via the Universal `ExecutionContext` and unified event bus.

---

## 🛠️ Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Vishwajeetsrk/JARVIS-AI-OS.git
cd JARVIS-AI-OS
```

### 2. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 3. Setup Environment Variables
Copy the example environment file and add your API keys:
```bash
cp .env.example .env.local
```
*(Never commit `.env` or `.env.local` to git — always keep your keys secure).*

### 4. Start the Dev Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🔄 Pull Request Workflow

1. **Fork the repo** and create a feature branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes** following our component conventions and design system tokens.

3. **Verify compilation & build**:
   ```bash
   npx tsc --noEmit
   npm run build
   ```

4. **Commit with semantic commit messages**:
   ```bash
   git commit -m "feat(agent): add multi-modal vision handler"
   ```

5. **Push and open a PR** on GitHub:
   ```bash
   git push origin feat/your-feature-name
   ```

---

## 💬 Community & Help

- **Discussions**: [GitHub Discussions](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/discussions)
- **Issues**: [GitHub Issues](https://github.com/Vishwajeetsrk/JARVIS-AI-OS/issues)
- **Lead Contact**: [vishwajeetsrk@gmail.com](mailto:vishwajeetsrk@gmail.com)
