import { QUESTION_BANK } from "./bank";
import { chapterTitle } from "./chapters";
import type { GenerateFilters, Question, Worksheet } from "./types";

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function generateWorksheet(filters: GenerateFilters): Worksheet {
  const types = filters.types.length ? filters.types : ["MCQ", "NAT", "FITB"];

  let pool: Question[] = QUESTION_BANK.filter((q) => {
    if (q.chapter !== filters.chapter) return false;
    if (!types.includes(q.type)) return false;
    if (filters.difficulty !== "Mixed" && q.difficulty !== filters.difficulty) {
      return false;
    }
    return true;
  });

  pool = shuffle(pool);

  const count = Math.min(Math.max(filters.count, 1), 20);
  let selected = pool.slice(0, count);

  if (selected.length < count) {
    const extra = shuffle(
      QUESTION_BANK.filter(
        (q) =>
          q.chapter === filters.chapter &&
          !selected.some((s) => s.id === q.id),
      ),
    );
    selected = [...selected, ...extra].slice(0, count);
  }

  return {
    id: crypto.randomUUID(),
    title: `Class ${filters.grade} ${filters.subject} — ${chapterTitle(filters.chapter)}`,
    generatedAt: new Date().toISOString(),
    filters: { ...filters, types, count: selected.length },
    questions: selected,
  };
}
