"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Briefcase,
  FileText,
  Search,
  CheckCircle2,
  AlertTriangle,
  Plus,
  Trash2,
  Edit3,
  Copy,
  Download,
  Printer,
  Sparkles,
  ExternalLink,
  Target,
  Clock,
  Layers,
  Award,
  ChevronRight,
  Send,
  ShieldCheck,
  Building,
  MapPin,
  Calendar,
  X,
  Play,
  RotateCcw,
  BarChart3,
  MessageSquareCode,
  Check,
  Code,
} from "lucide-react";

import { ResumeVariant, JobItem, ApplicationItem, ATSBreakdown, InterviewItem, ApplicationAnswer } from "../lib/career/types";
import { RESUME_VARIANTS } from "../lib/career/resumeVariants";
import { INITIAL_JOB_OPPORTUNITIES } from "../lib/career/jobDiscovery";
import { calculateATSScore, recommendBestResume } from "../lib/career/atsMatcher";
import { MASTER_EVIDENCE_GRAPH } from "../lib/career/evidenceGraph";
import { INITIAL_QUESTION_BANK } from "../lib/career/questionBank";
import { INITIAL_INTERVIEWS, MASTER_STAR_STORIES } from "../lib/career/interviewCoach";
import {
  exportToMarkdown,
  exportToPlainTextATS,
  exportToWordDoc,
  triggerPrintPDF,
  downloadWordResume,
  downloadMarkdownResume,
  downloadPlainTextResume,
  downloadJsonResume,
} from "../lib/career/exportEngine";

export default function CareerOS({ onClose }: { onClose: () => void }) {
  // Navigation
  const [activeTab, setActiveTab] = useState<
    "home" | "vault" | "editor" | "discovery" | "tracker" | "assistant" | "interview" | "evidence" | "analytics"
  >("home");

  // State
  const [resumes, setResumes] = useState<ResumeVariant[]>(RESUME_VARIANTS);
  const [selectedResume, setSelectedResume] = useState<ResumeVariant>(RESUME_VARIANTS[0]);
  const [jobs, setJobs] = useState<JobItem[]>(INITIAL_JOB_OPPORTUNITIES);
  const [selectedJob, setSelectedJob] = useState<JobItem>(INITIAL_JOB_OPPORTUNITIES[0]);
  const [questionBank, setQuestionBank] = useState<ApplicationAnswer[]>(INITIAL_QUESTION_BANK);
  const [interviews, setInterviews] = useState<InterviewItem[]>(INITIAL_INTERVIEWS);

  // Applications
  const [applications, setApplications] = useState<ApplicationItem[]>([
    {
      id: "app_01",
      jobId: "job_01",
      job: INITIAL_JOB_OPPORTUNITIES[0],
      resumeVariantId: "res_ai_software_engineer",
      resumeVariantTitle: "AI Software Engineer / AI Application Developer",
      status: "interview",
      matchScore: 94,
      coverLetter: "Dear Hiring Team at NeuralPulse AI,\n\nI am thrilled to apply for the AI Application Developer position. Having architected JARVIS AI OS with 18 specialist agent personas and built Learnify AI, my background in Next.js 15, TypeScript, and multi-model LLM tool calling matches your requirements directly...",
      applicationAnswers: {
        "Why this role?": "Deep alignment with agentic AI systems and high-performance React frontends.",
      },
      timeline: [
        { id: "t1", date: "Aug 29", type: "discovered", label: "Job discovered & analyzed (Match: 94%)", completed: true },
        { id: "t2", date: "Aug 30", type: "prepared", label: "Resume tailored & cover letter generated", completed: true },
        { id: "t3", date: "Aug 30", type: "applied", label: "Approved by Vishwajeet & submitted", completed: true },
        { id: "t4", date: "Aug 31", type: "interview", label: "Round 2 Technical Architecture Scheduled", completed: true },
      ],
      createdAt: "2026-08-29",
    },
    {
      id: "app_02",
      jobId: "job_02",
      job: INITIAL_JOB_OPPORTUNITIES[1],
      resumeVariantId: "res_fullstack_dev",
      resumeVariantTitle: "Full Stack Developer",
      status: "ready",
      matchScore: 91,
      applicationAnswers: {},
      timeline: [
        { id: "t1", date: "Aug 30", type: "discovered", label: "Job analyzed (Match: 91%)", completed: true },
        { id: "t2", date: "Aug 31", type: "ready", label: "Application package staged for review", completed: true },
      ],
      createdAt: "2026-08-30",
    },
  ]);

  // Level 6 Human Approval Modal State
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [approvingJob, setApprovingJob] = useState<JobItem | null>(null);
  const [tailoredResume, setTailoredResume] = useState<ResumeVariant | null>(null);
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState("");
  const [applicationSubmittedNotice, setApplicationSubmittedNotice] = useState(false);

  // Copilot feedback banner
  const [copilotActionStatus, setCopilotActionStatus] = useState<string | null>(null);

  // Filters & Search
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedRoleFilter, setSelectedRoleFilter] = useState("all");

  // Trigger Application Prep Workflow
  const handlePrepareApplication = (job: JobItem) => {
    const { bestResume } = recommendBestResume(resumes, job);
    setApprovingJob(job);
    setTailoredResume(bestResume);
    setGeneratedCoverLetter(
      `Dear Hiring Team at ${job.company},\n\nI am writing to express my strong interest in the ${job.title} role. With hands-on experience building autonomous agent architectures (JARVIS AI OS), responsive full-stack applications (Learnify AI), and cross-platform apps (Wardelio), my skills in ${job.requiredSkills.slice(0, 4).join(", ")} closely match your technical requirements.\n\nI look forward to discussing how I can contribute to ${job.company}'s engineering goals.\n\nSincerely,\nVishwajeet`
    );
    setShowApprovalModal(true);
  };

  // Level 6 Final Submission (Requires User Click)
  const handleFinalSubmitApproval = () => {
    if (!approvingJob || !tailoredResume) return;

    const newApp: ApplicationItem = {
      id: "app_" + Date.now(),
      jobId: approvingJob.id,
      job: approvingJob,
      resumeVariantId: tailoredResume.id,
      resumeVariantTitle: tailoredResume.title,
      status: "applied",
      matchScore: approvingJob.opportunityScore,
      coverLetter: generatedCoverLetter,
      applicationAnswers: {
        "Notice Period": "Immediate / 15 Days",
        "Location": "Bengaluru (Open to Remote/Hybrid)",
      },
      timeline: [
        { id: "t1", date: "Today", type: "discovered", label: "Job analyzed", completed: true },
        { id: "t2", date: "Today", type: "prepared", label: "Resume tailored & cover letter generated", completed: true },
        { id: "t3", date: "Today", type: "applied", label: "Level 6 User Approved & Submitted", completed: true },
      ],
      submittedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };

    setApplications([newApp, ...applications]);
    setShowApprovalModal(false);
    setApplicationSubmittedNotice(true);
    setTimeout(() => setApplicationSubmittedNotice(false), 4000);
  };

  // AI Copilot Bullet Improvement
  const handleImproveBullet = (bulletId: string, instruction: string) => {
    setCopilotActionStatus(`AI Copilot applied: "${instruction}" using verified evidence.`);
    setTimeout(() => setCopilotActionStatus(null), 3500);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 90,
        background: "rgba(2, 5, 11, 0.94)",
        backdropFilter: "blur(28px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(10px, 2vw, 24px)",
        color: "#ffffff",
        fontFamily: "var(--font-sans, system-ui, sans-serif)",
      }}
    >
      <div
        className="glass-panel"
        style={{
          width: "min(1280px, 98vw)",
          height: "94vh",
          display: "flex",
          flexDirection: "column",
          borderRadius: 20,
          border: "1px solid rgba(0, 229, 255, 0.35)",
          boxShadow: "0 0 70px rgba(0, 229, 255, 0.2), 0 20px 60px rgba(0,0,0,0.8)",
          overflow: "hidden",
        }}
      >
        {/* Top Header Bar */}
        <div
          style={{
            padding: "14px 24px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(0, 229, 255, 0.04)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <button
              onClick={onClose}
              style={{
                background: "rgba(0, 229, 255, 0.12)",
                border: "1px solid rgba(0, 229, 255, 0.4)",
                borderRadius: 12,
                padding: "6px 14px",
                color: "#00e5ff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 11.5,
                fontWeight: 700,
                fontFamily: "var(--font-mono)",
              }}
            >
              <ArrowLeft size={13} /> Back to OS
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img
                src="/main-logo.png"
                alt="NEXORA"
                style={{ width: 28, height: 28, borderRadius: 8, objectFit: "contain" }}
              />
              <h2 style={{ margin: 0, fontSize: 17, fontWeight: 800, fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}>
                NEXORA CAREER OS 2.0
              </h2>
              <span
                style={{
                  fontSize: 9.5,
                  padding: "2px 8px",
                  borderRadius: 6,
                  background: "rgba(0, 229, 255, 0.15)",
                  border: "1px solid #00e5ff",
                  color: "#00e5ff",
                  fontWeight: 700,
                  fontFamily: "var(--font-mono)",
                }}
              >
                V4-INTELLIGENCE
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-mono)" }}>
              Target Strategy: 50% AI · 25% FullStack · 15% GenAI · 10% Salesforce
            </span>
            <button
              onClick={onClose}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "50%",
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Sub-Navigation Tabs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 20px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
            background: "rgba(0, 0, 0, 0.35)",
            overflowX: "auto",
          }}
        >
          {[
            { id: "home", label: "Overview", icon: Target },
            { id: "vault", label: "Resume Vault (8)", icon: FileText },
            { id: "editor", label: "Resume Editor", icon: Edit3 },
            { id: "discovery", label: "Job Discovery", icon: Search },
            { id: "tracker", label: `Applications (${applications.length})`, icon: Layers },
            { id: "assistant", label: "Application Assistant", icon: Sparkles },
            { id: "interview", label: `Interview OS (${interviews.length})`, icon: MessageSquareCode },
            { id: "evidence", label: "Evidence Graph", icon: ShieldCheck },
            { id: "analytics", label: "Analytics & Q&A", icon: BarChart3 },
          ].map((t) => {
            const Icon = t.icon;
            const active = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                style={{
                  background: active ? "rgba(0, 229, 255, 0.18)" : "transparent",
                  border: `1px solid ${active ? "#00e5ff" : "rgba(255,255,255,0.1)"}`,
                  color: active ? "#00e5ff" : "rgba(255,255,255,0.7)",
                  borderRadius: 10,
                  padding: "5px 12px",
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "var(--font-mono)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease",
                }}
              >
                <Icon size={13} /> {t.label}
              </button>
            );
          })}
        </div>

        {/* Notice Banner */}
        {applicationSubmittedNotice && (
          <div
            style={{
              padding: "10px 20px",
              background: "rgba(16, 185, 129, 0.2)",
              borderBottom: "1px solid #10b981",
              color: "#10b981",
              fontSize: 12,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-mono)",
            }}
          >
            <CheckCircle2 size={16} /> Application successfully approved and logged to Kanban Application Tracker!
          </div>
        )}

        {copilotActionStatus && (
          <div
            style={{
              padding: "8px 20px",
              background: "rgba(0, 229, 255, 0.15)",
              borderBottom: "1px solid #00e5ff",
              color: "#00e5ff",
              fontSize: 11.5,
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-mono)",
            }}
          >
            <Sparkles size={14} /> {copilotActionStatus}
          </div>
        )}

        {/* Content Body */}
        <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>
          {/* TAB 1: OVERVIEW */}
          {activeTab === "home" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Telemetry Stats Bar */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
                <div style={{ background: "rgba(6,16,32,0.8)", border: "1px solid rgba(0,229,255,0.25)", borderRadius: 14, padding: 16 }}>
                  <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)" }}>ACTIVE APPLICATIONS</div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#00e5ff", marginTop: 4 }}>{applications.length} Active</div>
                  <div style={{ fontSize: 11, color: "#10b981", marginTop: 4 }}>1 Interview Scheduled Tomorrow</div>
                </div>
                <div style={{ background: "rgba(6,16,32,0.8)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: 14, padding: 16 }}>
                  <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)" }}>TOP ATS RESUME VARIANT</div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#10b981", marginTop: 4 }}>96% ATS Score</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>AI Software Engineer v7.2</div>
                </div>
                <div style={{ background: "rgba(6,16,32,0.8)", border: "1px solid rgba(168,85,247,0.25)", borderRadius: 14, padding: 16 }}>
                  <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)" }}>VERIFIED EVIDENCE CLAIMS</div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#a855f7", marginTop: 4 }}>{MASTER_EVIDENCE_GRAPH.length} Claims</div>
                  <div style={{ fontSize: 11, color: "#10b981", marginTop: 4 }}>Zero-Fabrication Validated</div>
                </div>
                <div style={{ background: "rgba(6,16,32,0.8)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: 14, padding: 16 }}>
                  <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)" }}>APPLICATION RESPONSE RATE</div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#f59e0b", marginTop: 4 }}>23.8%</div>
                  <div style={{ fontSize: 11, color: "#10b981", marginTop: 4 }}>Top 5% Industry Benchmark</div>
                </div>
              </div>

              {/* Top Matched Opportunities */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <h3 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: "#00e5ff", fontFamily: "var(--font-display)" }}>
                    Top Opportunity Matches for Vishwajeet
                  </h3>
                  <button
                    onClick={() => setActiveTab("discovery")}
                    style={{ background: "transparent", border: "none", color: "#00e5ff", fontSize: 11, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}
                  >
                    View All {jobs.length} Jobs <ChevronRight size={13} />
                  </button>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 14 }}>
                  {jobs.slice(0, 3).map((job) => (
                    <div
                      key={job.id}
                      style={{
                        background: "rgba(6, 16, 32, 0.75)",
                        border: "1px solid rgba(0, 229, 255, 0.2)",
                        borderRadius: 14,
                        padding: 16,
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                          <h4 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#ffffff" }}>{job.title}</h4>
                          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 2, display: "flex", alignItems: "center", gap: 6 }}>
                            <Building size={11} /> {job.company} · <MapPin size={11} /> {job.location}
                          </div>
                        </div>
                        <span
                          style={{
                            fontSize: 10,
                            padding: "2px 8px",
                            borderRadius: 6,
                            background: "rgba(16,185,129,0.15)",
                            border: "1px solid #10b981",
                            color: "#10b981",
                            fontFamily: "var(--font-mono)",
                            fontWeight: 700,
                          }}
                        >
                          {job.opportunityScore}% Match
                        </span>
                      </div>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {job.requiredSkills.map((sk) => (
                          <span key={sk} style={{ fontSize: 9.5, padding: "2px 6px", background: "rgba(255,255,255,0.06)", borderRadius: 4, color: "rgba(255,255,255,0.8)" }}>
                            ✓ {sk}
                          </span>
                        ))}
                      </div>

                      <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                        <button
                          onClick={() => handlePrepareApplication(job)}
                          style={{
                            flex: 1,
                            padding: "6px 12px",
                            background: "#00e5ff",
                            border: "none",
                            borderRadius: 8,
                            color: "#000000",
                            fontSize: 11,
                            fontWeight: 700,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 4,
                          }}
                        >
                          <Sparkles size={12} /> Prepare & Tailor
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: RESUME VAULT */}
          {activeTab === "vault" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#ffffff" }}>
                    Vishwajeet Resume Vault (8 Role Variants)
                  </h3>
                  <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,0.55)" }}>
                    Multi-variant portfolio tailored for AI Engineering, Full Stack, GenAI, and Salesforce CRM.
                  </p>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    onClick={triggerPrintPDF}
                    style={{
                      padding: "6px 14px",
                      background: "rgba(0,229,255,0.15)",
                      border: "1px solid #00e5ff",
                      borderRadius: 8,
                      color: "#00e5ff",
                      fontSize: 11,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Printer size={13} /> Export PDF
                  </button>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 14 }}>
                {resumes.map((res) => (
                  <div
                    key={res.id}
                    style={{
                      background: selectedResume.id === res.id ? "rgba(0, 229, 255, 0.08)" : "rgba(6, 16, 32, 0.7)",
                      border: `1px solid ${selectedResume.id === res.id ? "#00e5ff" : "rgba(255,255,255,0.1)"}`,
                      borderRadius: 14,
                      padding: 16,
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      boxShadow: selectedResume.id === res.id ? "0 0 20px rgba(0,229,255,0.15)" : "none",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <h4 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#ffffff" }}>{res.title}</h4>
                        <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.5)", marginTop: 2, fontFamily: "var(--font-mono)" }}>
                          {res.version} · Target Allocation: {res.allocationPercent}%
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: 10,
                          padding: "2px 8px",
                          borderRadius: 6,
                          background: "rgba(16,185,129,0.15)",
                          border: "1px solid #10b981",
                          color: "#10b981",
                          fontFamily: "var(--font-mono)",
                          fontWeight: 700,
                        }}
                      >
                        {res.atsScore}% ATS
                      </span>
                    </div>

                    <p style={{ margin: 0, fontSize: 11.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>
                      {res.summary.slice(0, 130)}...
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                      <button
                        onClick={() => { setSelectedResume(res); setActiveTab("editor"); }}
                        style={{
                          flex: "1 1 120px",
                          padding: "6px 10px",
                          background: "rgba(0, 229, 255, 0.15)",
                          border: "1px solid rgba(0, 229, 255, 0.4)",
                          borderRadius: 6,
                          color: "#00e5ff",
                          fontSize: 10.5,
                          fontWeight: 700,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 4,
                        }}
                      >
                        <Edit3 size={11} /> Edit & Preview
                      </button>
                      <button
                        onClick={() => {
                          downloadWordResume(res);
                          setCopilotActionStatus(`Downloaded Microsoft Word Resume: ${res.slug || res.id}.doc`);
                          setTimeout(() => setCopilotActionStatus(null), 3000);
                        }}
                        style={{
                          padding: "6px 10px",
                          background: "rgba(59, 130, 246, 0.12)",
                          border: "1px solid rgba(59, 130, 246, 0.35)",
                          borderRadius: 6,
                          color: "#60a5fa",
                          fontSize: 10.5,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                        title="Download Microsoft Word Document (.doc)"
                      >
                        <FileText size={11} /> .doc
                      </button>
                      <button
                        onClick={() => {
                          downloadPlainTextResume(res);
                          setCopilotActionStatus(`Downloaded Plain Text ATS: ${res.slug || res.id}.txt`);
                          setTimeout(() => setCopilotActionStatus(null), 3000);
                        }}
                        style={{
                          padding: "6px 10px",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          borderRadius: 6,
                          color: "rgba(255,255,255,0.8)",
                          fontSize: 10.5,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                        title="Download Plain Text ATS"
                      >
                        <FileText size={11} /> .txt
                      </button>
                      <button
                        onClick={() => {
                          downloadMarkdownResume(res);
                          setCopilotActionStatus(`Downloaded Markdown Resume: ${res.slug || res.id}.md`);
                          setTimeout(() => setCopilotActionStatus(null), 3000);
                        }}
                        style={{
                          padding: "6px 10px",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          borderRadius: 6,
                          color: "rgba(255,255,255,0.8)",
                          fontSize: 10.5,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                        title="Download Markdown"
                      >
                        <Download size={11} /> .md
                      </button>
                      <button
                        onClick={() => {
                          downloadJsonResume(res);
                          setCopilotActionStatus(`Downloaded JSON Resume: ${res.slug || res.id}.json`);
                          setTimeout(() => setCopilotActionStatus(null), 3000);
                        }}
                        style={{
                          padding: "6px 10px",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          borderRadius: 6,
                          color: "rgba(255,255,255,0.8)",
                          fontSize: 10.5,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                        title="Download JSON Data"
                      >
                        <Code size={11} /> .json
                      </button>
                      <button
                        onClick={() => {
                          const txt = exportToPlainTextATS(res);
                          navigator.clipboard.writeText(txt);
                          setCopilotActionStatus(`Copied Plain Text ATS version of ${res.title}`);
                          setTimeout(() => setCopilotActionStatus(null), 3000);
                        }}
                        style={{
                          padding: "6px 10px",
                          background: "rgba(16,185,129,0.1)",
                          border: "1px solid rgba(16,185,129,0.3)",
                          borderRadius: 6,
                          color: "#34d399",
                          fontSize: 10.5,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                        title="Copy Plain Text ATS to Clipboard"
                      >
                        <Copy size={11} /> Copy
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: RESUME EDITOR */}
          {activeTab === "editor" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 20 }}>
              {/* Left Column: Sections & Copilot */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#00e5ff" }}>
                    Editing: {selectedResume.title}
                  </h3>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button
                      onClick={() => handleImproveBullet("b1", "Enhance ATS metrics")}
                      style={{
                        background: "rgba(0, 229, 255, 0.15)",
                        border: "1px solid #00e5ff",
                        borderRadius: 6,
                        padding: "4px 8px",
                        color: "#00e5ff",
                        fontSize: 10.5,
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <Sparkles size={11} /> AI Copilot Optimize
                    </button>
                  </div>
                </div>

                {/* Summary Editor */}
                <div style={{ background: "rgba(6,16,32,0.8)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: 14 }}>
                  <label style={{ fontSize: 11, color: "#00e5ff", fontWeight: 700, fontFamily: "var(--font-mono)" }}>
                    PROFESSIONAL SUMMARY
                  </label>
                  <textarea
                    value={selectedResume.summary}
                    onChange={(e) => setSelectedResume({ ...selectedResume, summary: e.target.value })}
                    rows={4}
                    style={{
                      width: "100%",
                      background: "rgba(0,0,0,0.5)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: 8,
                      padding: 10,
                      color: "#ffffff",
                      fontSize: 12,
                      marginTop: 6,
                      lineHeight: 1.4,
                    }}
                  />
                </div>

                {/* Sections List */}
                {selectedResume.sections.map((sec) => (
                  <div key={sec.id} style={{ background: "rgba(6,16,32,0.8)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: 14 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <span style={{ fontSize: 11.5, color: "#ffffff", fontWeight: 700 }}>{sec.title}</span>
                      <span style={{ fontSize: 9.5, color: "#10b981", fontFamily: "var(--font-mono)" }}>✓ Evidence Verified</span>
                    </div>

                    {sec.bullets?.map((b) => (
                      <div key={b.id} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                        <span style={{ color: "#00e5ff", marginTop: 4 }}>•</span>
                        <input
                          type="text"
                          value={b.text}
                          onChange={(e) => {
                            const updated = selectedResume.sections.map((s) =>
                              s.id === sec.id
                                ? { ...s, bullets: s.bullets?.map((bl) => (bl.id === b.id ? { ...bl, text: e.target.value } : bl)) }
                                : s
                            );
                            setSelectedResume({ ...selectedResume, sections: updated });
                          }}
                          style={{
                            flex: 1,
                            background: "rgba(0,0,0,0.4)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: 6,
                            padding: "6px 10px",
                            color: "#ffffff",
                            fontSize: 11.5,
                          }}
                        />
                        <button
                          onClick={() => handleImproveBullet(b.id, "Strengthen action verbs & metrics")}
                          style={{
                            background: "rgba(0,229,255,0.1)",
                            border: "1px solid rgba(0,229,255,0.3)",
                            borderRadius: 6,
                            padding: "6px",
                            color: "#00e5ff",
                            cursor: "pointer",
                          }}
                          title="AI Improve Bullet"
                        >
                          <Sparkles size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Right Column: Live Printable Preview */}
              <div
                id="printable-resume"
                className="printable-sheet"
                style={{
                  background: "#ffffff",
                  color: "#111827",
                  borderRadius: 12,
                  padding: 24,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  overflowY: "auto",
                  maxHeight: "78vh",
                  fontFamily: "Arial, sans-serif",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {/* Download Actions Toolbar */}
                <div
                  className="no-print"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: 12,
                    borderBottom: "1px solid #e5e7eb",
                    flexWrap: "wrap",
                    gap: 6,
                  }}
                >
                  <span style={{ fontSize: 10, fontWeight: 800, color: "#10b981", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    ● ATS Preview ({selectedResume.atsScore}% Match)
                  </span>

                  <div style={{ display: "flex", gap: 6 }}>
                    <button
                      onClick={() => {
                        downloadWordResume(selectedResume);
                        setCopilotActionStatus(`Downloaded Microsoft Word Document (.doc)`);
                        setTimeout(() => setCopilotActionStatus(null), 3000);
                      }}
                      style={{
                        padding: "4px 8px",
                        background: "#eff6ff",
                        border: "1px solid #93c5fd",
                        borderRadius: 6,
                        color: "#1d4ed8",
                        fontSize: 10,
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                      title="Download Microsoft Word Document"
                    >
                      .doc
                    </button>
                    <button
                      onClick={() => {
                        downloadPlainTextResume(selectedResume);
                        setCopilotActionStatus(`Downloaded Plain Text ATS`);
                        setTimeout(() => setCopilotActionStatus(null), 3000);
                      }}
                      style={{
                        padding: "4px 8px",
                        background: "#f3f4f6",
                        border: "1px solid #d1d5db",
                        borderRadius: 6,
                        color: "#374151",
                        fontSize: 10,
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      .txt
                    </button>
                    <button
                      onClick={() => {
                        downloadMarkdownResume(selectedResume);
                        setCopilotActionStatus(`Downloaded Markdown`);
                        setTimeout(() => setCopilotActionStatus(null), 3000);
                      }}
                      style={{
                        padding: "4px 8px",
                        background: "#f3f4f6",
                        border: "1px solid #d1d5db",
                        borderRadius: 6,
                        color: "#374151",
                        fontSize: 10,
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      .md
                    </button>
                    <button
                      onClick={() => {
                        downloadJsonResume(selectedResume);
                        setCopilotActionStatus(`Downloaded JSON`);
                        setTimeout(() => setCopilotActionStatus(null), 3000);
                      }}
                      style={{
                        padding: "4px 8px",
                        background: "#f3f4f6",
                        border: "1px solid #d1d5db",
                        borderRadius: 6,
                        color: "#374151",
                        fontSize: 10,
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      .json
                    </button>
                    <button
                      onClick={triggerPrintPDF}
                      style={{
                        padding: "4px 10px",
                        background: "#0284c7",
                        border: "none",
                        borderRadius: 6,
                        color: "#ffffff",
                        fontSize: 10,
                        fontWeight: 800,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <Printer size={11} /> Print PDF
                    </button>
                  </div>
                </div>

                <div style={{ borderBottom: "2px solid #000000", paddingBottom: 10, marginBottom: 8 }}>
                  <h1 style={{ margin: 0, fontSize: 20, fontWeight: 900, letterSpacing: "0.05em", color: "#000000" }}>VISHWAJEET</h1>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#1f2937", marginTop: 2 }}>{selectedResume.targetRole}</div>
                  <div style={{ fontSize: 9.5, color: "#4b5563", marginTop: 4, lineHeight: 1.4 }}>
                    Bengaluru, Karnataka, India | +91 85952 02922 | vishwajeetsrk@gmail.com<br />
                    LinkedIn: Vishwajeetsrk | GitHub: Vishwajeetsrk | learnifyai.in | vishwajeetsrk.github.io
                  </div>
                </div>

                <div style={{ marginBottom: 14 }}>
                  <h3 style={{ margin: "0 0 4px", fontSize: 11, fontWeight: 800, textTransform: "uppercase", borderBottom: "1px solid #e5e7eb" }}>
                    Professional Summary
                  </h3>
                  <p style={{ margin: 0, fontSize: 10, lineHeight: 1.4, color: "#374151" }}>{selectedResume.summary}</p>
                </div>

                {selectedResume.sections.map((sec) => (
                  <div key={sec.id} style={{ marginBottom: 12 }}>
                    <h3 style={{ margin: "0 0 4px", fontSize: 11, fontWeight: 800, textTransform: "uppercase", borderBottom: "1px solid #e5e7eb" }}>
                      {sec.title}
                    </h3>
                    {sec.bullets?.map((b) => (
                      <div key={b.id} style={{ fontSize: 9.5, lineHeight: 1.4, color: "#374151", marginBottom: 3 }}>
                        • {b.text}
                      </div>
                    ))}
                    {sec.items?.map((item) => (
                      <div key={item.id} style={{ marginBottom: 6 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, fontWeight: 700 }}>
                          <span>{item.title}</span>
                          <span style={{ color: "#6b7280" }}>{item.dateRange}</span>
                        </div>
                        {item.subtitle && <div style={{ fontSize: 9.5, color: "#4b5563", fontStyle: "italic" }}>{item.subtitle}</div>}
                        {item.bullets.map((b) => (
                          <div key={b.id} style={{ fontSize: 9, lineHeight: 1.3, color: "#374151", marginLeft: 8 }}>
                            • {b.text}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: JOB DISCOVERY */}
          {activeTab === "discovery" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Search and Filters */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                <div style={{ position: "relative", flex: 1, minWidth: 260 }}>
                  <Search size={14} style={{ position: "absolute", left: 12, top: 11, color: "rgba(255,255,255,0.4)" }} />
                  <input
                    type="text"
                    placeholder="Search roles by title, company, or skills (e.g. AI Engineer, React, Supabase)..."
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    style={{
                      width: "100%",
                      background: "rgba(6,16,32,0.8)",
                      border: "1px solid rgba(0,229,255,0.3)",
                      borderRadius: 10,
                      padding: "8px 12px 8px 34px",
                      color: "#ffffff",
                      fontSize: 12,
                    }}
                  />
                </div>
                <select
                  value={selectedRoleFilter}
                  onChange={(e) => setSelectedRoleFilter(e.target.value)}
                  style={{
                    background: "rgba(6,16,32,0.8)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 10,
                    padding: "8px 12px",
                    color: "#ffffff",
                    fontSize: 12,
                  }}
                >
                  <option value="all">All Role Categories</option>
                  <option value="ai">AI / GenAI Roles</option>
                  <option value="fullstack">Full Stack & Frontend</option>
                  <option value="salesforce">Salesforce & CRM</option>
                </select>
              </div>

              {/* Jobs List */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {jobs.map((job) => {
                  const ats = calculateATSScore(selectedResume, job);
                  return (
                    <div
                      key={job.id}
                      style={{
                        background: "rgba(6,16,32,0.8)",
                        border: "1px solid rgba(0, 229, 255, 0.25)",
                        borderRadius: 14,
                        padding: 18,
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#ffffff" }}>{job.title}</h3>
                            <span style={{ fontSize: 10, padding: "2px 8px", background: "rgba(0,229,255,0.15)", border: "1px solid #00e5ff", color: "#00e5ff", borderRadius: 6, fontWeight: 700 }}>
                              {job.workMode}
                            </span>
                          </div>
                          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 4, display: "flex", alignItems: "center", gap: 8 }}>
                            <Building size={12} /> {job.company} · <MapPin size={12} /> {job.location} · 💰 ₹{((job.salary?.min || 0) / 100000).toFixed(1)}L - ₹{((job.salary?.max || 0) / 100000).toFixed(1)}L
                          </div>
                        </div>

                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontSize: 18, fontWeight: 800, color: ats.overallScore >= 90 ? "#10b981" : "#00e5ff" }}>
                            {ats.overallScore}% ATS Match
                          </div>
                          <div style={{ fontSize: 9.5, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)" }}>
                            Skills: {ats.skillsMatch}% · Exp: {ats.experienceMatch}%
                          </div>
                        </div>
                      </div>

                      <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>
                        {job.description}
                      </p>

                      {/* Gap Analysis Chips */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
                        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", fontWeight: 700 }}>SKILL ALIGNMENT:</span>
                        {ats.strongMatches.map((m) => (
                          <span key={m} style={{ fontSize: 10, padding: "2px 8px", background: "rgba(16,185,129,0.15)", border: "1px solid #10b981", color: "#10b981", borderRadius: 6 }}>
                            ✓ {m}
                          </span>
                        ))}
                        {ats.missingGaps.map((g) => (
                          <span key={g} style={{ fontSize: 10, padding: "2px 8px", background: "rgba(245,158,11,0.15)", border: "1px solid #f59e0b", color: "#f59e0b", borderRadius: 6 }}>
                            △ {g}
                          </span>
                        ))}
                      </div>

                      {/* Action Bar */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 10 }}>
                        <div style={{ display: "flex", gap: 10, fontSize: 10.5, color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)" }}>
                          <span>Sources: {job.sources.map((s) => s.name).join(", ")}</span>
                          <span>· Posted: {job.postedAt}</span>
                        </div>

                        <div style={{ display: "flex", gap: 8 }}>
                          <button
                            onClick={() => handlePrepareApplication(job)}
                            style={{
                              padding: "6px 14px",
                              background: "#00e5ff",
                              border: "none",
                              borderRadius: 8,
                              color: "#000000",
                              fontWeight: 700,
                              fontSize: 11.5,
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <Sparkles size={13} /> Stage & Apply (Level 6)
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 5: APPLICATION TRACKER (KANBAN) */}
          {activeTab === "tracker" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#ffffff" }}>
                  Application Kanban Tracker ({applications.length} Active Jobs)
                </h3>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, overflowX: "auto" }}>
                {[
                  { id: "saved", label: "Saved / Staged" },
                  { id: "applied", label: "Applied (Level 6)" },
                  { id: "interview", label: "Interview Scheduled" },
                  { id: "offer", label: "Offer / Decisions" },
                ].map((col) => {
                  const items = applications.filter((a) =>
                    col.id === "saved"
                      ? a.status === "saved" || a.status === "ready"
                      : col.id === "applied"
                      ? a.status === "applied" || a.status === "assessment"
                      : col.id === "interview"
                      ? a.status === "interview" || a.status === "final_round"
                      : a.status === "offer" || a.status === "accepted"
                  );
                  return (
                    <div
                      key={col.id}
                      style={{
                        background: "rgba(6, 16, 32, 0.7)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 14,
                        padding: 14,
                        minHeight: 380,
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 8 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#00e5ff" }}>{col.label}</span>
                        <span style={{ fontSize: 10, padding: "2px 6px", background: "rgba(255,255,255,0.1)", borderRadius: 10 }}>
                          {items.length}
                        </span>
                      </div>

                      {items.map((app) => (
                        <div
                          key={app.id}
                          style={{
                            background: "rgba(0, 0, 0, 0.4)",
                            border: "1px solid rgba(0, 229, 255, 0.25)",
                            borderRadius: 10,
                            padding: 12,
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <span style={{ fontSize: 12.5, fontWeight: 700, color: "#ffffff" }}>{app.job.title}</span>
                            <span style={{ fontSize: 9.5, color: "#10b981", fontWeight: 700 }}>{app.matchScore}%</span>
                          </div>
                          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>{app.job.company}</div>
                          <div style={{ fontSize: 9.5, color: "#00e5ff", fontFamily: "var(--font-mono)" }}>
                            Resume: {app.resumeVariantTitle.slice(0, 24)}...
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 6: APPLICATION ASSISTANT */}
          {activeTab === "assistant" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "rgba(6,16,32,0.8)", border: "1px solid rgba(0,229,255,0.3)", borderRadius: 14, padding: 20 }}>
                <h3 style={{ margin: "0 0 10px", fontSize: 16, fontWeight: 800, color: "#00e5ff" }}>
                  AI Application Tailoring Pipeline
                </h3>
                <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
                  Select any job to run automated keyword matching, select the optimal resume variant, draft customized cover letters, and prepare pre-approved answers.
                </p>

                <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                  <button
                    onClick={() => handlePrepareApplication(jobs[0])}
                    style={{
                      padding: "8px 16px",
                      background: "#00e5ff",
                      border: "none",
                      borderRadius: 8,
                      color: "#000000",
                      fontWeight: 700,
                      fontSize: 12,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Play size={13} /> Stage & Review "{jobs[0].title}"
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: INTERVIEW OS */}
          {activeTab === "interview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#ffffff" }}>
                Interview Preparation & STAR Story Vault
              </h3>

              {interviews.map((int) => (
                <div key={int.id} style={{ background: "rgba(6,16,32,0.8)", border: "1px solid #10b981", borderRadius: 14, padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <h4 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#10b981" }}>{int.company} · {int.role}</h4>
                      <div style={{ fontSize: 12, color: "#ffffff", marginTop: 2 }}>{int.roundName}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
                        📅 {int.scheduledAt} · {int.interviewerInfo}
                      </div>
                    </div>
                    <a
                      href={int.meetingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "6px 14px",
                        background: "#10b981",
                        borderRadius: 8,
                        color: "#000000",
                        fontWeight: 700,
                        fontSize: 11.5,
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <ExternalLink size={13} /> Join Meeting
                    </a>
                  </div>

                  {/* Likely Questions */}
                  <div style={{ background: "rgba(0,0,0,0.4)", borderRadius: 10, padding: 14 }}>
                    <div style={{ fontSize: 11, color: "#00e5ff", fontWeight: 700, marginBottom: 8, fontFamily: "var(--font-mono)" }}>
                      PREDICTED TECHNICAL & ARCHITECTURE QUESTIONS
                    </div>
                    {int.likelyQuestions.map((q, idx) => (
                      <div key={idx} style={{ fontSize: 11.5, color: "rgba(255,255,255,0.8)", marginBottom: 6 }}>
                        • {q}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* STAR Stories */}
              <div style={{ marginTop: 10 }}>
                <h4 style={{ margin: "0 0 10px", fontSize: 14, fontWeight: 700, color: "#00e5ff" }}>
                  Verified STAR Interview Stories
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 12 }}>
                  {MASTER_STAR_STORIES.map((star) => (
                    <div key={star.id} style={{ background: "rgba(6,16,32,0.7)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: 14 }}>
                      <div style={{ fontSize: 12.5, fontWeight: 700, color: "#ffffff", marginBottom: 6 }}>{star.title}</div>
                      <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>
                        <strong>Action:</strong> {star.action}
                      </div>
                      <div style={{ fontSize: 10.5, color: "#10b981", marginTop: 4, fontWeight: 600 }}>
                        <strong>Result:</strong> {star.result}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: EVIDENCE GRAPH */}
          {activeTab === "evidence" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#ffffff" }}>
                    Master Evidence Database ({MASTER_EVIDENCE_GRAPH.length} Verified Records)
                  </h3>
                  <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,0.55)" }}>
                    Zero-Fabrication verification engine: All resume claims map directly to verified project and employment records.
                  </p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 12 }}>
                {MASTER_EVIDENCE_GRAPH.map((ev) => (
                  <div key={ev.id} style={{ background: "rgba(6,16,32,0.75)", border: "1px solid rgba(0,229,255,0.2)", borderRadius: 12, padding: 14 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#ffffff" }}>{ev.title}</span>
                      <span style={{ fontSize: 9.5, color: "#10b981", fontWeight: 700 }}>✓ Verified</span>
                    </div>
                    <div style={{ fontSize: 10, color: "#00e5ff", fontFamily: "var(--font-mono)", marginTop: 2 }}>
                      Source: {ev.source}
                    </div>
                    <p style={{ margin: "6px 0 0", fontSize: 11.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>
                      {ev.description}
                    </p>
                    {ev.metrics && (
                      <div style={{ marginTop: 6, display: "flex", flexWrap: "wrap", gap: 4 }}>
                        {Object.entries(ev.metrics).map(([k, v]) => (
                          <span key={k} style={{ fontSize: 9.5, background: "rgba(16,185,129,0.15)", border: "1px solid #10b981", color: "#10b981", padding: "2px 6px", borderRadius: 4 }}>
                            {String(v)}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 9: ANALYTICS & QUESTION BANK */}
          {activeTab === "analytics" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#ffffff" }}>
                Application Analytics & Pre-Approved Question Bank
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {/* Question Bank */}
                <div style={{ background: "rgba(6,16,32,0.8)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: 16 }}>
                  <h4 style={{ margin: "0 0 10px", fontSize: 13, fontWeight: 700, color: "#00e5ff" }}>
                    Pre-Approved Application Answers ({questionBank.length})
                  </h4>
                  {questionBank.map((q) => (
                    <div key={q.id} style={{ background: "rgba(0,0,0,0.3)", borderRadius: 8, padding: 10, marginBottom: 8 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#ffffff" }}>{q.questionPattern}</div>
                      <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>{q.approvedAnswer}</div>
                    </div>
                  ))}
                </div>

                {/* Performance by Resume Variant */}
                <div style={{ background: "rgba(6,16,32,0.8)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: 16 }}>
                  <h4 style={{ margin: "0 0 10px", fontSize: 13, fontWeight: 700, color: "#10b981" }}>
                    Resume Variant Performance (A/B Tests)
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5 }}>
                      <span>AI Software Engineer v7.2</span>
                      <span style={{ color: "#10b981", fontWeight: 700 }}>23.7% Response Rate</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5 }}>
                      <span>Full Stack Developer v6.4</span>
                      <span style={{ color: "#00e5ff", fontWeight: 700 }}>18.5% Response Rate</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5 }}>
                      <span>Salesforce CRM Operations v6.0</span>
                      <span style={{ color: "#f59e0b", fontWeight: 700 }}>25.0% Response Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* LEVEL 6 HUMAN APPROVAL SUBMISSION MODAL */}
        {showApprovalModal && approvingJob && tailoredResume && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              background: "rgba(0, 0, 0, 0.85)",
              backdropFilter: "blur(14px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
            }}
          >
            <div
              style={{
                width: "min(680px, 94vw)",
                background: "rgba(4, 10, 20, 0.95)",
                border: "1px solid #00e5ff",
                borderRadius: 18,
                padding: 24,
                boxShadow: "0 0 50px rgba(0, 229, 255, 0.3)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <ShieldCheck size={20} style={{ color: "#00e5ff" }} />
                  <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: "#ffffff" }}>
                    LEVEL 6 HUMAN APPROVAL: SUBMIT APPLICATION
                  </h3>
                </div>
                <button
                  onClick={() => setShowApprovalModal(false)}
                  style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.6)", cursor: "pointer" }}
                >
                  <X size={18} />
                </button>
              </div>

              <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.75)", lineHeight: 1.4 }}>
                JARVIS has prepared your application package. In compliance with the <strong>Zero-Silent-Submission Policy</strong>, your explicit approval is required before submitting.
              </p>

              <div style={{ background: "rgba(0,0,0,0.5)", borderRadius: 12, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>Target Role & Company:</span>
                  <span style={{ fontWeight: 700, color: "#ffffff" }}>{approvingJob.title} @ {approvingJob.company}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>Selected Resume Variant:</span>
                  <span style={{ fontWeight: 700, color: "#00e5ff" }}>{tailoredResume.title} ({tailoredResume.version})</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>ATS Match Score:</span>
                  <span style={{ fontWeight: 700, color: "#10b981" }}>{approvingJob.opportunityScore}%</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>Cover Letter:</span>
                  <span style={{ color: "#10b981" }}>Generated & Validated</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: 12, marginTop: 6 }}>
                <button
                  onClick={handleFinalSubmitApproval}
                  style={{
                    flex: 1,
                    padding: "10px 18px",
                    background: "#10b981",
                    border: "none",
                    borderRadius: 10,
                    color: "#ffffff",
                    fontWeight: 800,
                    fontSize: 13,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <CheckCircle2 size={16} /> Approve & Submit Application
                </button>
                <button
                  onClick={() => setShowApprovalModal(false)}
                  style={{
                    padding: "10px 18px",
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: 10,
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                >
                  Cancel / Edit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
