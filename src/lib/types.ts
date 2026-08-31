export type Subject = "Physics";
export type Grade = "11";
export type Difficulty = "Easy" | "Medium" | "Hard";
export type QuestionType = "MCQ" | "NAT" | "FITB";

export type ChapterId =
  | "units-and-measurements"
  | "motion-in-a-straight-line"
  | "laws-of-motion";

export interface GenerateFilters {
  subject: Subject;
  grade: Grade;
  chapter: ChapterId;
  difficulty: Difficulty | "Mixed";
  types: QuestionType[];
  count: number;
  includeAnswerKey: boolean;
}

export interface Question {
  id: string;
  subject: Subject;
  grade: Grade;
  chapter: ChapterId;
  chapterTitle: string;
  topic: string;
  type: QuestionType;
  difficulty: Difficulty;
  stem: string;
  options?: string[];
  answer: string;
  solution: string;
  marks: number;
  verified: boolean;
}

export interface Worksheet {
  id: string;
  title: string;
  generatedAt: string;
  filters: GenerateFilters;
  questions: Question[];
}
