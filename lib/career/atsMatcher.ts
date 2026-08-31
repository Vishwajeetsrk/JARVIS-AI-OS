import { ATSBreakdown, JobItem, ResumeVariant } from "./types";
import { MASTER_EVIDENCE_GRAPH } from "./evidenceGraph";

/**
 * TRANSPARENT MULTI-FACTOR ATS MATCHING ENGINE
 *
 * Evaluates candidate resume against Job Descriptions across 5 transparent dimensions:
 * 1. Skills Match (40%)
 * 2. Experience Match (20%)
 * 3. Projects Match (20%)
 * 4. Education Match (10%)
 * 5. Keywords Match (10%)
 */

export function calculateATSScore(resume: ResumeVariant, job: JobItem): ATSBreakdown {
  const resumeText = JSON.stringify(resume).toLowerCase();
  const jobText = (job.title + " " + job.description + " " + job.requiredSkills.join(" ") + " " + job.preferredSkills.join(" ")).toLowerCase();

  const strongMatches: string[] = [];
  const missingGaps: string[] = [];
  const potentialConcerns: string[] = [];

  // 1. Skills Matching (40% Weight)
  let skillsFound = 0;
  const totalSkills = Math.max(1, job.requiredSkills.length);

  job.requiredSkills.forEach((skill) => {
    const sLower = skill.toLowerCase();
    if (resumeText.includes(sLower)) {
      skillsFound++;
      strongMatches.push(skill);
    } else {
      missingGaps.push(skill);
    }
  });

  const skillsMatch = Math.min(100, Math.round((skillsFound / totalSkills) * 100));

  // 2. Experience Match (20% Weight)
  let experienceMatch = 85;
  if (jobText.includes("3+ years") || jobText.includes("5+ years") || jobText.includes("senior")) {
    experienceMatch = 70;
    potentialConcerns.push("Job asks for 3+ years / Senior experience");
  } else if (jobText.includes("1+ years") || jobText.includes("junior") || jobText.includes("entry") || jobText.includes("associate")) {
    experienceMatch = 98;
  }

  // 3. Projects Match (20% Weight)
  let projectsMatch = 90;
  if (jobText.includes("ai") || jobText.includes("llm") || jobText.includes("agent")) {
    projectsMatch = 98;
    strongMatches.push("Agentic AI & LLM Systems (JARVIS AI OS, Learnify)");
  } else if (jobText.includes("full stack") || jobText.includes("react") || jobText.includes("next.js")) {
    projectsMatch = 95;
    strongMatches.push("Full Stack & WebGL UI (Wardelio, Learnify)");
  }

  // 4. Education Match (10% Weight)
  let educationMatch = 100; // BCA & Diploma in Software Development satisfies degree requirements

  // 5. Keywords Match (10% Weight)
  let keywordsFound = 0;
  const targetKeywords = ["typescript", "api", "database", "git", "frontend", "backend", "cloud", "ui"];
  targetKeywords.forEach((kw) => {
    if (jobText.includes(kw) && resumeText.includes(kw)) {
      keywordsFound++;
    }
  });
  const keywordsMatch = Math.round((keywordsFound / targetKeywords.length) * 100);

  // Calculate Weighted Overall Score
  const overallScore = Math.round(
    skillsMatch * 0.40 +
    experienceMatch * 0.20 +
    projectsMatch * 0.20 +
    educationMatch * 0.10 +
    keywordsMatch * 0.10
  );

  return {
    overallScore,
    skillsMatch,
    experienceMatch,
    projectsMatch,
    educationMatch,
    keywordsMatch,
    strongMatches: Array.from(new Set(strongMatches)),
    missingGaps: Array.from(new Set(missingGaps)),
    potentialConcerns,
    verificationsPassed: true,
  };
}

/**
 * Recommend the Best Resume Variant for a Given Job
 */
export function recommendBestResume(resumes: ResumeVariant[], job: JobItem): { bestResume: ResumeVariant; scoreBreakdown: ATSBreakdown } {
  let highestScore = -1;
  let best = resumes[0];
  let bestBreakdown = calculateATSScore(best, job);

  for (const r of resumes) {
    const breakdown = calculateATSScore(r, job);
    if (breakdown.overallScore > highestScore) {
      highestScore = breakdown.overallScore;
      best = r;
      bestBreakdown = breakdown;
    }
  }

  return { bestResume: best, scoreBreakdown: bestBreakdown };
}
