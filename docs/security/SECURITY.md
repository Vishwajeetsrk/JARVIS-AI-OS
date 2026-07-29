# Security Policy

## Supported Versions

| Version | Supported          |
|---------|-------------------|
| main    | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in Agent Team Skills, please report it responsibly:

1. **DO NOT** open a public GitHub issue
2. Open a [draft security advisory](https://github.com/Vishwajeetsrk/Agent-Team-Skills/security/advisories/new) on GitHub
3. Alternatively, contact the maintainer directly through the GitHub security tab

We will:
- Acknowledge receipt within **48 hours**
- Assess and prioritize based on severity
- Deploy a fix and coordinate disclosure timing
- Credit you in the release notes (if desired)

## Scope

This policy covers:
- The agent skill definitions (`.claude/skills/`)
- The dashboard and its dependencies (`dashboard/`)
- Memory sync scripts (`memory-sync/`)
- Build and deployment workflows (`.github/`)

## Out of Scope

- Issues in third-party AI platforms (Claude Code, claude.ai, Antigravity, Open Code, etc.)
- Vulnerabilities in design system brand assets (these are visual references only)
- Misconfiguration of the system by end users

## Security Practices

- **test-agent** performs independent security & QA review before every deployment
- **security-agent** handles Web3-specific threat detection: phishing, risk scoring, contract exploit simulation
- Never commit secrets, API keys, or credentials to memory files or design tokens
- All dependencies should be kept up to date via regular `npm audit` and `dependabot` checks
