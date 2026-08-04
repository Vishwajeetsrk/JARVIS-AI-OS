# Pattern Library

Things that worked well and are worth reusing as-is next time, rather than re-deriving.

---

<!-- Example entry — delete once real entries exist
## Server-only Razorpay webhook verification
- **Use when:** Any project accepting Razorpay payments/webhooks.
- **Approach:** Verify X-Razorpay-Signature with HMAC-SHA256 against the raw request body server-side, reject before any DB write. Reference implementation lives in AgencyOS `/api/webhooks/razorpay`.
- **Why it works:** Prevents forged payment confirmation events; caught in test-agent review on AgencyOS.
-->
