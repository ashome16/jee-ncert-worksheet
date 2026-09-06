export type QuestionType = 'MCQ' | 'NAT' | 'FITB';
export type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Mixed';
export type CognitiveDimension = 'KNOWLEDGE' | 'UNDERSTANDING' | 'APPLICATION';

export interface PrincipleMetadata {
  id: string;
  name: string;
  phenomenon: string;
  governingFormula: string;
  jeeWeightage: number;
}

export interface Question {
  id: string;
  chapterId: string;
  subtopic: string;
  principle: PrincipleMetadata;
  cognitiveDimension: CognitiveDimension;
  type: QuestionType;
  difficulty: Difficulty;
  text: string;
  options?: string[];
  correctAnswer: string;
  solution: string;
  marks: number;
}

export interface Worksheet {
  questions: Question[];
  totalQuestions: number;
  totalMarks: number;
}

export interface GenerateFilters {
  subject: string;
  grade: string;
  chapterId: string;
  difficulty: Difficulty;
  types: QuestionType[];
  count: number;
}

export interface MasterAnswerKey {
  worksheetId: string;
  generatedAt: string;
  chapterId: string;
  solutions: {
    [questionId: string]: {
      correctAnswer: string;
      marks: number;
      type: QuestionType;
    };
  };
}

export interface StudentSubmissionReport {
  submissionId: string;
  worksheetId: string;
  chapterId: string;
  submittedAt: string;
  totalQuestions: number;
  scoreObtained: number;
  maxPossibleMarks: number;
  accuracyPercentage: number;
  responses: {
    questionId: string;
    questionText: string;
    studentAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
    marksAwarded: number;
  }[];
}
