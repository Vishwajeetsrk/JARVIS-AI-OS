import { unifiedMemory, type ProjectContext } from "./unified-memory";

export class ProjectBrain {
  public static getProjectSummary(projectId?: string): string {
    const memory = unifiedMemory.getSnapshot();
    if (projectId) {
      const proj = memory.projects.find(
        (p) => p.id.toLowerCase() === projectId.toLowerCase() || p.name.toLowerCase().includes(projectId.toLowerCase())
      );
      if (proj) {
        return `Project: ${proj.name}\nVision: ${proj.vision}\nArchitecture: ${proj.architecture}\nStatus: ${proj.currentStatus} (${proj.progress}%)\nNext Actions: ${proj.nextActions.join(", ")}`;
      }
    }

    return memory.projects
      .map(
        (p) => `• ${p.name} [${p.progress}%] | ${p.currentStatus}\n  Architecture: ${p.architecture}\n  Next Actions: ${p.nextActions.join("; ")}`
      )
      .join("\n\n");
  }

  public static answerProjectQuery(query: string): string {
    const q = query.toLowerCase();
    const memory = unifiedMemory.getSnapshot();

    if (q.includes("wardelio")) {
      const w = memory.projects.find((p) => p.id === "wardelio");
      if (w) {
        return `Wardelio is your mobile application located at '${w.path}'. Its stack is ${w.architecture}. Current status is: ${w.currentStatus}. Next milestone: ${w.nextActions.join(", ")}.`;
      }
    }

    if (q.includes("blocking") || q.includes("blocker")) {
      const blocked = memory.projects.filter((p) => p.blockers.length > 0);
      if (blocked.length === 0) {
        return "There are currently zero blocking issues logged across your active projects. All development pipelines are clear, sir.";
      }
      return blocked.map((p) => `• ${p.name}: Blocked on ${p.blockers.join(", ")}`).join("\n");
    }

    if (q.includes("yesterday") || q.includes("where we left off")) {
      const recent = memory.episodic.slice(0, 3);
      return `Here is where we left off:\n` + recent.map((e) => `• ${e.title}: ${e.description}`).join("\n");
    }

    if (q.includes("what should i build next") || q.includes("next action")) {
      const actions = memory.projects.flatMap((p) => p.nextActions.map((a) => `• [${p.name}] ${a}`));
      return `Recommended next building priorities:\n` + actions.join("\n");
    }

    return this.getProjectSummary();
  }
}
