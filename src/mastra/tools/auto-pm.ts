import fs from 'fs';
import path from 'path';

export interface PMReport {
  projectName: string;
  totalTasks: number;
  completedTasks: number;
  progressPercent: number;
  status: 'ON_TRACK' | 'AT_RISK' | 'BLOCKED';
  recommendation: string;
}

export function generateProjectManagerReport(projectName: string, completed: number, total: number): PMReport {
  const percent = total > 0 ? Math.round((completed / total) * 100) : 100;
  let status: PMReport['status'] = 'ON_TRACK';
  let rec = 'Maintain current velocity.';

  if (percent < 50) {
    status = 'AT_RISK';
    rec = 'Focus on high-priority CEO Golden Flow tasks before adding new features.';
  }

  return {
    projectName,
    totalTasks: total,
    completedTasks: completed,
    progressPercent: percent,
    status,
    recommendation: rec,
  };
}
