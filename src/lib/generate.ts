import { QUESTION_BANK } from "./bank";
import { GenerateFilters, Worksheet, Question, QuestionType } from "./types";
import fs from "node:fs";
import path from "node:path";

interface FormulaCard {
  id: string;
  name: string;
  latex: string;
  vars: Record<string, string>;
  example?: string;
}

function loadFormulaCards(slug: string): FormulaCard[] {
  const formulaFile = path.join(
    process.cwd(),
    "content",
    "formulas",
    "foundation",
    `${slug}.json`
  );

  if (!fs.existsSync(formulaFile)) return [];
  return JSON.parse(fs.readFileSync(formulaFile, "utf8"));
}

// Foundation Grade 8 content is sharded by subject folder: Mathematics -> math; sciences -> science.
const FOUNDATION_SUBJECT_FOLDERS: Record<string, string> = {
  Mathematics: "math",
  Physics: "science",
  Chemistry: "science",
  Biology: "science",
};

function loadFoundationChapter(subjectFolder: string, slug: string): Question[] {
  const chapterDirectory = path.join(
    process.cwd(),
    "content",
    "questions",
    "foundation",
    subjectFolder,
    "grade-8",
    slug
  );

  if (!fs.existsSync(chapterDirectory)) return [];

  const itemFiles = fs.readdirSync(chapterDirectory)
    .filter((fileName) => /^items-\d+\.json$/.test(fileName))
    .sort();

  const formulaCards = loadFormulaCards(slug);
  const formulaById = new Map(formulaCards.map((card) => [card.id, card]));

  return itemFiles.flatMap((fileName) => {
    const file = JSON.parse(fs.readFileSync(path.join(chapterDirectory, fileName), "utf8"));
    const items = Array.isArray(file) ? file : file.items ?? [];
    return items.map((item: { formulaIds?: string[] }) => ({
      ...item,
      formulas: (item.formulaIds ?? [])
        .map((id: string) => formulaById.get(id))
        .filter((card: FormulaCard | undefined): card is FormulaCard => Boolean(card)),
    }));
  });
}

export function generateWorksheet(filters: GenerateFilters): Worksheet {
  const foundationSubjectFolder = filters.grade === "8" ? FOUNDATION_SUBJECT_FOLDERS[filters.subject] : undefined;
  let availableQuestions = foundationSubjectFolder
    ? loadFoundationChapter(foundationSubjectFolder, filters.chapterId)
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
