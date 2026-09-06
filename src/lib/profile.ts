export interface StudentProfileData {
  overallAccuracy: number;
  worksheetsCompleted: number;
  syllabusHeatmap: Record<string, Record<string, {
    subtopicName: string;
    accuracyPercentage: number;
    attemptsCount: number;
    lastTested: string;
  }>>;
  identifiedWeakPoints: string[];
}

export function getCleanStudentProfile(sessionName: string): StudentProfileData {
  if (typeof window === 'undefined') {
    return { overallAccuracy: 0, worksheetsCompleted: 0, syllabusHeatmap: {}, identifiedWeakPoints: [] };
  }
  const storageKey = `student_profile_${sessionName.trim().toLowerCase()}`;
  const rawData = localStorage.getItem(storageKey);
  if (!rawData) {
    return { overallAccuracy: 0, worksheetsCompleted: 0, syllabusHeatmap: {}, identifiedWeakPoints: [] };
  }
  try {
    const parsed = JSON.parse(rawData) as StudentProfileData;
    return {
      overallAccuracy: parsed.overallAccuracy || 0,
      worksheetsCompleted: parsed.worksheetsCompleted || 0,
      syllabusHeatmap: parsed.syllabusHeatmap || {},
      identifiedWeakPoints: parsed.identifiedWeakPoints || []
    };
  } catch (e) {
    return { overallAccuracy: 0, worksheetsCompleted: 0, syllabusHeatmap: {}, identifiedWeakPoints: [] };
  }
}
