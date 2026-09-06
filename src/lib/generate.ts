import { QUESTION_BANK } from "./bank";
import { GenerateFilters, Worksheet, Question, QuestionType } from "./types";
import fs from "node:fs";
import path from "node:path";

function loadFoundationChapter(slug: string): Question[] {
  const chapterDirectory = path.join(
    process.cwd(),
    "content",
    "questions",
    "foundation",
    "math",
    "grade-8",
    slug
  );

  if (!fs.existsSync(chapterDirectory)) return [];

  const itemFiles = fs.readdirSync(chapterDirectory)
    .filter((fileName) => /^items-\d+\.json$/.test(fileName))
    .sort();

  return itemFiles.flatMap((fileName) => {
    const file = JSON.parse(fs.readFileSync(path.join(chapterDirectory, fileName), "utf8"));
    return Array.isArray(file) ? file : file.items ?? [];
  });
}

export function generateWorksheet(filters: GenerateFilters): Worksheet {
  const isFoundationMathematics = filters.grade === "8" && filters.subject === "Mathematics";
  let availableQuestions = isFoundationMathematics
    ? loadFoundationChapter(filters.chapterId)
    : QUESTION_BANK.filter((q) => q.chapterId === filters.chapterId);

  if (filters.types && filters.types.length > 0) {
    const selectedTypes = filters.types as QuestionType[];
    availableQuestions = availableQuestions.filter((q) =>
      selectedTypes.includes(q.type)
    );
  }

  if (filters.difficulty !== "Mixed") {
    availableQuestions = availableQuestions.filter(
      (q) => q.difficulty === filters.difficulty
    );
  }

  const shuffled = [...availableQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const finalCount = Math.min(filters.count, shuffled.length, 20);
  const selectedQuestions = shuffled.slice(0, finalCount);
  const totalMarks = selectedQuestions.reduce((sum, q) => sum + q.marks, 0);

  return {
    questions: selectedQuestions,
    totalQuestions: selectedQuestions.length,
    totalMarks,
  };
}
