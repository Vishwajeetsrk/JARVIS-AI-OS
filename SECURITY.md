# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability, please report it privately:

- **Email**: vishwajeetsrk@gmail.com
- **GitHub Advisory**: https://github.com/Vishwajeetsrk/JARVIS-AI-OS/security/advisories

We will acknowledge receipt within 48 hours and work on a fix.

## Scope

This policy covers:
- The Jarvis AI OS core engine and scripts
- Web console and API endpoints
- Agent skills and memory systems
- Build and deployment workflows

## Out of Scope

- Third-party AI platforms and APIs
- User misconfiguration
- Design system brand assets

## Security Practices

- Zero secret hardcoding — all credentials in `.env` files
- Input sanitization against prompt/SQL/command injection
- Rate limiting on public endpoints
- Mandatory review before production deployment
