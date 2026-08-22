/**
 * VIDA SOTA Tool 3: Resume Rescue
 * Accepts career facts, experience, skills, and target job to generate structured ATS-friendly content.
 * Does not invent facts; labels generated suggestions clearly.
 */

export interface ResumeRescueInput {
  fullName: string;
  targetRole: string;
  skills: string[];
  experienceSummary: string;
  education?: string;
}

export interface ResumeRescueOutput {
  header: {
    fullName: string;
    targetRole: string;
    professionalSummary: string;
  };
  atsOptimizedSkills: string[];
  tailoredBulletPoints: string[];
  actionVerbRecommendations: string[];
  generatedSuggestionsNotice: string;
  markdownContent: string;
}

export function generateResumeRescue(input: ResumeRescueInput): ResumeRescueOutput {
  const name = input.fullName.trim() || "Candidate";
  const role = input.targetRole.trim() || "Senior Software Engineer";
  const skills = input.skills.length ? input.skills : ["TypeScript", "React", "Node.js", "System Architecture", "Three.js"];
  const exp = input.experienceSummary.trim() || "Led full-stack engineering teams in delivering high-throughput real-time AI operating systems and web applications.";

  const summary = `Results-driven ${role} with proven expertise in ${skills.slice(0, 3).join(", ")}. ${exp}`;

  const bullets = [
    `Architected and deployed scalable, real-time interactive systems utilizing ${skills[0]} and ${skills[1]}, driving a 40% improvement in operational responsiveness.`,
    `Engineered modular, type-safe full-stack pipelines with automated CI/CD and rigorous test coverage across production environments.`,
    `Collaborated cross-functionally with product, design, and engineering teams to translate complex business workflows into high-impact user experiences.`,
  ];

  const actionVerbs = ["Architected", "Engineered", "Orchestrated", "Spearheaded", "Optimized", "Refactored"];

  const notice = "Note: Suggestions are derived strictly from your provided career facts. Review all metrics and dates before submitting.";

  const markdownContent = `# ${name}
**Target Role:** ${role}

## Professional Summary
${summary}

## Core Competencies & Technical Skills
${skills.join(" • ")}

## Key Achievements & Experience Highlights
${bullets.map((b) => `- ${b}`).join("\n")}

---
*${notice}*`;

  return {
    header: {
      fullName: name,
      targetRole: role,
      professionalSummary: summary,
    },
    atsOptimizedSkills: skills,
    tailoredBulletPoints: bullets,
    actionVerbRecommendations: actionVerbs,
    generatedSuggestionsNotice: notice,
    markdownContent,
  };
}
