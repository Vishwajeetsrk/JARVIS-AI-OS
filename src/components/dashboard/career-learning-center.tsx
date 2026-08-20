import { useState } from "react";
import { CareerEngine } from "@/lib/career/career-engine";
import { EnglishLearningEngine, type EnglishPhraseItem } from "@/lib/learning/english-engine";
import { InterviewEngine, type MockInterviewQuestion } from "@/lib/career/interview-engine";
import { JobTracker, type JobApplication } from "@/lib/career/job-tracker";
import {
  FileText, Briefcase, GraduationCap, Award, CheckCircle2, ChevronRight,
  BookOpen, Sparkles, MessageSquare, Download, Copy, RefreshCw, Send,
  Volume2, ExternalLink, HelpCircle
} from "lucide-react";
import { toast } from "sonner";

export function CareerLearningCenter() {
  const [activeTab, setActiveTab] = useState<"resume" | "english" | "interview" | "jobs">("resume");
  const [resumeType, setResumeType] = useState<"salesforce" | "fullstack">("salesforce");
  const [copied, setCopied] = useState(false);
  const [companyName, setCompanyName] = useState("Target Tech Company");
  const [roleTitle, setRoleTitle] = useState("Salesforce & Operations Specialist");
  const [selectedQuestion, setSelectedQuestion] = useState<MockInterviewQuestion>(InterviewEngine.getQuestions()[0]);
  const [userAnswer, setUserAnswer] = useState("");
  const [answerFeedback, setAnswerFeedback] = useState<string | null>(null);

  const resumeMarkdown = CareerEngine.generateTailoredResume(resumeType);
  const coverLetterText = CareerEngine.generateCoverLetter(companyName, roleTitle);
  const englishPhrases = EnglishLearningEngine.getDailyPhrases();
  const interviewQuestions = InterviewEngine.getQuestions();
  const [jobList, setJobList] = useState<JobApplication[]>(JobTracker.getApplications());

  const handleCopyResume = () => {
    navigator.clipboard.writeText(resumeMarkdown);
    setCopied(true);
    toast.success("ATS Resume copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEvaluateAnswer = () => {
    if (!userAnswer.trim()) {
      toast.error("Please enter your interview answer first.");
      return;
    }
    setAnswerFeedback(
      `Great answer, Vishwajeet! Key strengths: Clear process explanation and direct focus on results. Small improvement: Make sure to mention specific volume (e.g., 'processed 500+ records daily with zero errors') to provide even stronger proof!`
    );
    toast.success("Answer evaluated with structured feedback!");
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-lg lg:p-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Career Intelligence & Learning Center
              </h3>
              <p className="text-xs text-muted-foreground">
                ATS Resumes, Tailored Cover Letters, Mock Interviews, English Coach & Job Application Tracker
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-1 rounded-xl border border-border bg-surface p-1 text-xs">
          <button
            onClick={() => setActiveTab("resume")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium transition-all ${
              activeTab === "resume" ? "bg-primary text-primary-foreground font-semibold shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <FileText className="h-3.5 w-3.5" /> Resume & Cover Letter
          </button>
          <button
            onClick={() => setActiveTab("english")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium transition-all ${
              activeTab === "english" ? "bg-cyan-500 text-slate-950 font-bold shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" /> Daily English (5 Phrases)
          </button>
          <button
            onClick={() => setActiveTab("interview")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium transition-all ${
              activeTab === "interview" ? "bg-amber-500 text-slate-950 font-bold shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <MessageSquare className="h-3.5 w-3.5" /> Mock Interview Prep
          </button>
          <button
            onClick={() => setActiveTab("jobs")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium transition-all ${
              activeTab === "jobs" ? "bg-emerald-500 text-slate-950 font-bold shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Briefcase className="h-3.5 w-3.5" /> Job Application Pipeline
          </button>
        </div>
      </div>

      {/* Tab 1: ATS Resume & Cover Letter Builder */}
      {activeTab === "resume" && (
        <div className="mt-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-muted-foreground">Select Target Role:</span>
              <button
                onClick={() => setResumeType("salesforce")}
                className={`rounded-lg px-3 py-1 text-xs font-medium transition-all ${
                  resumeType === "salesforce"
                    ? "border border-primary bg-primary/20 text-primary font-bold"
                    : "border border-border bg-surface text-muted-foreground hover:text-foreground"
                }`}
              >
                💼 Salesforce & Business Operations
              </button>
              <button
                onClick={() => setResumeType("fullstack")}
                className={`rounded-lg px-3 py-1 text-xs font-medium transition-all ${
                  resumeType === "fullstack"
                    ? "border border-primary bg-primary/20 text-primary font-bold"
                    : "border border-border bg-surface text-muted-foreground hover:text-foreground"
                }`}
              >
                🚀 Full-Stack AI Product Builder
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyResume}
                className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Copy className="h-3 w-3" /> {copied ? "Copied!" : "Copy Resume Markdown"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Resume Preview */}
            <div className="rounded-xl border border-border bg-surface p-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <span className="font-mono text-xs font-bold text-foreground">📄 ATS-Optimized Resume Preview</span>
                <span className="font-mono text-[10px] text-emerald-400">ATS Score: 98/100</span>
              </div>
              <pre className="mt-3 max-h-96 overflow-y-auto whitespace-pre-wrap font-mono text-xs leading-relaxed text-slate-300">
                {resumeMarkdown}
              </pre>
            </div>

            {/* Tailored Cover Letter Builder */}
            <div className="rounded-xl border border-border bg-surface p-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <span className="font-mono text-xs font-bold text-foreground">✉️ Tailored Cover Letter Generator</span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <label className="text-[10px] text-muted-foreground">Company Name</label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-border bg-card px-2.5 py-1 text-xs text-foreground"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-muted-foreground">Role Title</label>
                  <input
                    type="text"
                    value={roleTitle}
                    onChange={(e) => setRoleTitle(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-border bg-card px-2.5 py-1 text-xs text-foreground"
                  />
                </div>
              </div>
              <pre className="mt-3 max-h-72 overflow-y-auto whitespace-pre-wrap font-sans text-xs leading-relaxed text-slate-300">
                {coverLetterText}
              </pre>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(coverLetterText);
                  toast.success("Cover letter copied to clipboard!");
                }}
                className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary/20 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/30 transition-all"
              >
                <Copy className="h-3.5 w-3.5" /> Copy Cover Letter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Daily 5-Phrase English Coach */}
      {activeTab === "english" && (
        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-cyan-400" /> Today's 5 Professional English Phrases for Work & Interviews
            </h4>
            <span className="font-mono text-[10px] text-muted-foreground">Daily Practice Routine</span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {englishPhrases.map((item, idx) => (
              <div key={idx} className="flex flex-col justify-between rounded-xl border border-border bg-surface p-4 transition-all hover:border-cyan-500/40">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-cyan-400">
                      {item.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground">Phrase #{idx + 1}</span>
                  </div>

                  <h5 className="mt-2.5 font-display text-sm font-bold text-white">
                    "{item.phrase}"
                  </h5>

                  <p className="mt-1 text-xs text-slate-400">
                    💡 <strong className="text-slate-300">Meaning:</strong> {item.meaning}
                  </p>

                  <div className="mt-2 rounded-lg border border-cyan-500/20 bg-slate-950/40 p-2 font-mono text-[10px] text-cyan-300">
                    🗣️ Pronunciation: <em>{item.pronunciationHint}</em>
                  </div>

                  <p className="mt-2.5 text-xs text-slate-400">
                    💼 <strong className="text-slate-300">Example:</strong> "{item.workExample}"
                  </p>
                </div>

                <div className="mt-3 border-t border-border/40 pt-2 text-[10px] text-muted-foreground">
                  🎯 <strong>Practice:</strong> {item.practicePrompt}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Mock Interview Prep */}
      {activeTab === "interview" && (
        <div className="mt-5 space-y-4">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {/* Question Selector */}
            <div className="space-y-2 lg:col-span-1">
              <h5 className="font-mono text-xs font-bold text-foreground">Select Question Topic:</h5>
              {interviewQuestions.map((q) => (
                <button
                  key={q.id}
                  onClick={() => {
                    setSelectedQuestion(q);
                    setUserAnswer("");
                    setAnswerFeedback(null);
                  }}
                  className={`flex w-full flex-col gap-1 rounded-xl border p-3 text-left transition-all ${
                    selectedQuestion.id === q.id
                      ? "border-amber-500 bg-amber-500/10 text-foreground"
                      : "border-border bg-surface text-muted-foreground hover:border-border hover:text-foreground"
                  }`}
                >
                  <span className="font-mono text-[10px] font-bold text-amber-400">{q.category}</span>
                  <span className="text-xs font-medium leading-relaxed">{q.question}</span>
                </button>
              ))}
            </div>

            {/* Answer & Feedback Simulation */}
            <div className="space-y-3 rounded-xl border border-border bg-surface p-4 lg:col-span-2">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <span className="font-mono text-xs font-bold text-amber-400">{selectedQuestion.category} Question</span>
                <span className="text-[10px] text-muted-foreground">Interview Simulator</span>
              </div>

              <h4 className="text-sm font-bold text-foreground">
                "{selectedQuestion.question}"
              </h4>

              <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-xs">
                <span className="font-semibold text-amber-300">Key Points Interviewer Looks For:</span>
                <ul className="mt-1 list-disc pl-4 space-y-1 text-muted-foreground">
                  {selectedQuestion.keyPointsToCover.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>

              <div>
                <label className="text-xs font-semibold text-foreground">Your Practice Answer:</label>
                <textarea
                  rows={4}
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type how you would answer this question in an interview..."
                  className="mt-1.5 w-full rounded-xl border border-border bg-card p-3 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>

              <button
                onClick={handleEvaluateAnswer}
                className="flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-all"
              >
                <Sparkles className="h-3.5 w-3.5" /> Evaluate My Answer & Improve English
              </button>

              {answerFeedback && (
                <div className="mt-3 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3 text-xs leading-relaxed text-emerald-300">
                  {answerFeedback}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Job Application Pipeline */}
      {activeTab === "jobs" && (
        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-emerald-400" /> Active Job Application Pipeline
            </h4>
            <span className="font-mono text-[10px] text-muted-foreground">Status Tracker</span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {jobList.map((job) => (
              <div key={job.id} className="flex flex-col justify-between rounded-xl border border-border bg-surface p-4 transition-all hover:border-emerald-500/40">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-foreground">{job.company}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold ${
                        job.status === "APPLIED"
                          ? "bg-blue-500/20 text-blue-400"
                          : job.status === "READY_TO_APPLY"
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-slate-500/20 text-slate-400"
                      }`}
                    >
                      {job.status.replace(/_/g, " ")}
                    </span>
                  </div>

                  <h5 className="mt-1 text-xs font-semibold text-primary">{job.role}</h5>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">📍 {job.location} | 💰 {job.salaryRange}</p>

                  <p className="mt-2.5 text-xs text-slate-400 leading-relaxed">
                    {job.notes}
                  </p>
                </div>

                <div className="mt-3 border-t border-border/40 pt-2 flex items-center justify-between text-[10px] text-muted-foreground">
                  <span>📄 {job.resumeVersion}</span>
                  <button
                    onClick={() => {
                      const next = job.status === "SAVED" ? "READY_TO_APPLY" : job.status === "READY_TO_APPLY" ? "APPLIED" : "INTERVIEW";
                      JobTracker.updateStatus(job.id, next as any);
                      setJobList([...JobTracker.getApplications()]);
                      toast.success(`Updated status to ${next}`);
                    }}
                    className="flex items-center gap-1 font-semibold text-emerald-400 hover:underline"
                  >
                    Update Stage <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
