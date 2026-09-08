export type QuizLogItem = {
  profileId: string;
  subject: string;
  track: string;
  at: string;
};

export const QUIZ_LOG_KEY = "device-quiz-log-v1";
export const MOCK_QUIZ_TARGET = 30;
export const MOCK_PER_SUBJECT = 10;
export const MOCK_SUBJECTS = ["Physics", "Chemistry", "Mathematics"] as const;

export function loadQuizLog(): QuizLogItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(QUIZ_LOG_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveQuizLog(log: QuizLogItem[]): void {
  window.localStorage.setItem(QUIZ_LOG_KEY, JSON.stringify(log));
}

export function recordQuiz(profileId: string, subject: string, track: string): void {
  if (!profileId || profileId === "guest") return;
  if (track === "JEE_MOCK_TEST") return;
  const log = loadQuizLog();
  log.unshift({ profileId, subject, track, at: new Date().toISOString() });
  saveQuizLog(log.slice(0, 500));
}

export function quizCounts(profileId: string): { total: number; bySubject: Record<string, number> } {
  const bySubject: Record<string, number> = { Physics: 0, Chemistry: 0, Mathematics: 0 };
  const log = loadQuizLog().filter((item) => item.profileId === profileId);
  for (const item of log) {
    if (item.subject in bySubject) bySubject[item.subject] += 1;
  }
  const total = MOCK_SUBJECTS.reduce((sum, subject) => sum + Math.min(bySubject[subject], MOCK_PER_SUBJECT), 0);
  return { total, bySubject };
}

export function mockUnlocked(profileId: string): boolean {
  if (!profileId || profileId === "guest") return false;
  return quizCounts(profileId).total >= MOCK_QUIZ_TARGET;
}