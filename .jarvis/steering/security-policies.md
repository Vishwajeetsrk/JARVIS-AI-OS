---
inclusion: always
---

# Security Policies

## Secrets

- NEVER hardcode secrets, API keys, or tokens
- Always use environment variables
- Never commit .env files
- Rotate credentials regularly

## Input Validation

- Validate all user input with Zod schemas
- Sanitize HTML output to prevent XSS
- Use parameterized queries (Supabase handles this)
- Implement rate limiting on API endpoints

## Authentication

- Use Supabase Auth for all user sessions
- Validate JWT tokens on every request
- Never store sensitive data in localStorage
- Implement proper CORS policies

## OWASP Top 10

- Follow OWASP guidelines for all API endpoints
- Implement CSRF protection
- Use HTTPS in production
- Set secure HTTP headers
