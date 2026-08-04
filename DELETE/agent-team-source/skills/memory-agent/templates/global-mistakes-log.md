# Global Mistakes Log

Append-only. Never delete or rewrite entries — supersede with a new dated entry instead.
Every specialist agent reads this before starting work and filters by Category.

Categories: security | architecture | business-validation | deployment | api-design | ui-ux | legal | seo | ai-ml | process

---

<!-- Example entry — delete once real entries exist
## 2026-01-14 Hardcoded Razorpay key in frontend bundle
- **Project:** AgencyOS
- **Category:** security
- **Severity:** critical
- **What happened:** Razorpay secret key was read from a .env variable prefixed with NEXT_PUBLIC_, which bundled it into client-side JS.
- **Root cause:** Didn't distinguish public/publishable keys from secret keys when wiring env vars.
- **Fix applied:** Moved secret key to a server-only env var, added a build-time grep check for NEXT_PUBLIC_*SECRET*/KEY patterns.
- **Prevention rule:** Before shipping any payment/API integration, grep the built client bundle for known secret prefixes (rzp_live, sk_, etc.) as a CI step.
-->
