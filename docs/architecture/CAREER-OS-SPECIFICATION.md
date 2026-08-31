# CAREER OS 2.0 — Architecture & Specification

> **Status**: APPROVED & LOCKED  
> **Domain**: Career Intelligence & Application Automation  
> **Owner**: Vishwajeet Srk  
> **Architecture Version**: V4-APEX / Career OS 2.0

---

## 1. Overview & Vision

JARVIS Career OS 2.0 transforms JARVIS from a portfolio viewer into a complete **AI Career Operating System**. It manages the user's master career profile, 8 role-specific resume variants, Master Evidence Database, transparent multi-factor ATS matcher, job discovery & deduplication, application tracker (Kanban), AI cover letter studio, interview coach, and a **Level 6 Human-Approved Auto Apply Workflow**.

---

## 2. Integration with JARVIS V4 Core

```
User Intent ("Find & prepare top AI Software Engineer jobs")
    │
    ▼
┌──────────────────┐
│   AI GATEWAY     │
└────────┬─────────┘
         │
         ▼
┌──────────────────────┐
│ CONTEXT ENGINE       │ ◄── Injects CareerProfile + Master Evidence Graph
└────────┬─────────────┘
         │
         ▼
┌──────────────────────┐
│ TASK RUNTIME         │ ◄── Creates Application Prep Task & Steps
└────────┬─────────────┘
         │
         ▼
┌──────────────────────┐
│ CAREER AGENT FLEET   │
│ • Career Strategist  │
│ • Resume Analyst     │
│ • ATS Matcher        │
│ • Application Coach  │
└────────┬─────────────┘
         │
         ▼
┌──────────────────────┐
│ POLICY ENGINE        │
│ Level 0-5: Automated │
│ Level 6: SUBMIT      │ ──► [EXPLICIT HUMAN APPROVAL MODAL]
└────────┬─────────────┘
         │ (Approved)
         ▼
┌──────────────────────┐
│ EVENT BUS & DATABASE │ ──► Realtime UI, Kanban Tracker & Supabase RLS
└──────────────────────┘
```

---

## 3. The 8 Canonical Resume Variants & Allocations

| # | Target Role | Strategic Allocation | ATS Target | Key Projects Highlighted |
|---|---|:---:|:---:|---|
| 1 | **AI Software Engineer / AI App Dev** | **50%** | ~96% | JARVIS AI OS, Wardelio App, Learnify AI |
| 2 | **Full Stack Developer** | **25%** | ~94% | Learnify AI, Next.js 15, React 19, Supabase |
| 3 | **Generative AI / AI Developer** | **15%** | ~92% | LLM Pipelines, Vector RAG, OpenRouter |
| 4 | **Software Engineer / General Dev** | Support | ~90% | TypeScript, Node.js, Python, SQL, REST APIs |
| 5 | **Frontend / React / Next.js Dev** | Support | ~93% | 150+ Screens Wardelio UI, Three.js WebGL |
| 6 | **Backend / Node.js Developer** | Support | ~88% | Express.js, Supabase, PostgreSQL, APIs |
| 7 | **Data Analyst / BI Analyst** | **10%** | ~89% | 200k+ Records Rootbridge Data Reconciliation |
| 8 | **Salesforce / CRM / Operations** | **10%** | ~95% | 7-Step Razorpay to Salesforce Sync Module |

---

## 4. Zero-Fabrication Rule & Evidence Layer

- **Zero-Hallucination Invariant**: JARVIS will NEVER invent dates, metrics, companies, or skills.
- Every resume bullet points back to a verified item in `career_evidence`.
- Conflicting or unverified dates are marked `[VERIFY DATE]`.
- Unverified metrics are marked `[VERIFY]` and excluded from official ATS exports until verified by the user.

---

## 5. Application Permission Hierarchy

```
LEVEL 0: Read career profile (Passive)
LEVEL 1: Search jobs (Passive)
LEVEL 2: Analyze job descriptions (Passive)
LEVEL 3: Tailor resume & generate cover letter (Drafting)
LEVEL 4: Prepare application package (Staging)
LEVEL 5: Autofill pre-approved answers (Staging)
LEVEL 6: Submit application (REQUIRING EXPLICIT USER APPROVAL)
```
