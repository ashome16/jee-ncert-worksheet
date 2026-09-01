import { QUESTION_BANK } from "./bank";
import { GenerateFilters, Worksheet, Question, QuestionType } from "./types";

export function generateWorksheet(filters: GenerateFilters): Worksheet {
  // 1. Filter out by chapter selection match
  let availableQuestions = QUESTION_BANK.filter(
    (q) => q.chapterId === filters.chapterId
  );

  // 2. Filter out by chosen question types if selected
  if (filters.types && filters.types.length > 0) {
    const selectedTypes = filters.types as QuestionType[];
    availableQuestions = availableQuestions.filter((q) =>
      selectedTypes.includes(q.type)
    );
  }

  // 3. Filter out by chosen difficulty level if not "Mixed"
  if (filters.difficulty !== "Mixed") {
    availableQuestions = availableQuestions.filter(
      (q) => q.difficulty === filters.difficulty
    );
  }

  // 4. Randomize question order (Fisher-Yates Shuffle algorithm)
  const shuffled = [...availableQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // 5. Enforce strict design rules: limit questions maximum limit to 20 items
  const finalCount = Math.min(filters.count, shuffled.length, 20);
  const selectedQuestions = shuffled.slice(0, finalCount);

  // 6. Compute simple cumulative grading metrics summary
  const totalMarks = selectedQuestions.reduce((sum, q) => sum + q.marks, 0);

  return {
    questions: selectedQuestions,
    totalQuestions: selectedQuestions.length,
    totalMarks,
  };
}
