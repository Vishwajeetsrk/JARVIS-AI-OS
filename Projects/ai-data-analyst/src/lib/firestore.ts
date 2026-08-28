import { AnalysisReport } from '../types';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface SavedReport {
  id: string;
  report: AnalysisReport;
}

/**
 * Gets local reports from localStorage.
 */
function getLocalReports(): SavedReport[] {
  try {
    const data = localStorage.getItem('saved_reports');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error reading from localStorage:', e);
    return [];
  }
}

/**
 * Saves an AnalysisReport locally.
 */
export async function saveReport(report: AnalysisReport): Promise<string> {
  const reportId = 'local_' + Math.random().toString(36).substring(2, 11);

  // Prepare standard payload matching isValidReport rules
  const payload: AnalysisReport = {
    ...report,
    title: (report.title || 'Analysis Report').slice(0, 500),
    dataset_name: (report.dataset_name || 'Dataset').slice(0, 500),
    question: (report.question || '').slice(0, 5000),
    executive_summary: (report.executive_summary || '').slice(0, 5000),
    generated_at: (report.generated_at || new Date().toISOString()).slice(0, 128),
  };

  const localReports = getLocalReports();
  localReports.push({ id: reportId, report: payload });
  localStorage.setItem('saved_reports', JSON.stringify(localReports));
  return reportId;
}

/**
 * Fetches all saved reports locally.
 */
export async function getReports(): Promise<SavedReport[]> {
  const results = getLocalReports();
  return results.sort((a, b) => {
    const dateA = a.report.generated_at || '';
    const dateB = b.report.generated_at || '';
    return dateB.localeCompare(dateA); // Descending
  });
}

/**
 * Deletes a saved report by ID.
 */
export async function deleteReport(reportId: string): Promise<void> {
  const localReports = getLocalReports();
  const updated = localReports.filter(r => r.id !== reportId);
  localStorage.setItem('saved_reports', JSON.stringify(updated));
}

