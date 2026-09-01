"use client";

import { CHAPTERS } from "@/lib/chapters";
import type { GenerateFilters, QuestionType } from "@/lib/types";
import { useState } from "react";

const ALL_TYPES: QuestionType[] = ["MCQ", "NAT", "FITB"];

export default function FilterPanel({
  onGenerate,
  loading,
}: {
  onGenerate: (filters: GenerateFilters) => void;
  loading: boolean;
}) {
  const [chapter, setChapter] =
    useState<GenerateFilters["chapter"]>("units-and-measurements");
  const [difficulty, setDifficulty] =
    useState<GenerateFilters["difficulty"]>("Mixed");
  const [count, setCount] = useState(8);
  const [types, setTypes] = useState<QuestionType[]>([...ALL_TYPES]);
  const [includeAnswerKey, setIncludeAnswerKey] = useState(true);

  function toggleType(t: QuestionType) {
    setTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
    );
  }

  return (
    <form
      className="no-print space-y-5 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        onGenerate({
          subject: "Physics",
          grade: "11",
          chapter,
          difficulty,
          types: types.length ? types : ALL_TYPES,
          count,
          includeAnswerKey,
        });
      }}
    >
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
          Class 11 · Physics · NCERT
        </p>
        <h2 className="mt-1 text-lg font-semibold text-zinc-900">
          Generate worksheet
        </h2>
      </div>

      <label className="block text-sm font-medium text-zinc-700">
        Chapter
        <select
          className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm"
          value={chapter}
          onChange={(e) =>
            setChapter(e.target.value as GenerateFilters["chapter"])
          }
        >
          {CHAPTERS.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm font-medium text-zinc-700">
        Difficulty
        <select
          className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm"
          value={difficulty}
          onChange={(e) =>
            setDifficulty(e.target.value as GenerateFilters["difficulty"])
          }
        >
          <option>Mixed</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </label>

      <fieldset>
        <legend className="text-sm font-medium text-zinc-700">
          Question types
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {ALL_TYPES.map((t) => (
            <label
              key={t}
              className={`cursor-pointer rounded-full border px-3 py-1 text-xs font-medium ${
                types.includes(t)
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-300 text-zinc-600"
              }`}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={types.includes(t)}
                onChange={() => toggleType(t)}
              />
              {t === "MCQ"
                ? "Multiple choice"
                : t === "NAT"
                  ? "Numerical"
                  : "Fill in the blank"}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block text-sm font-medium text-zinc-700">
        Number of questions
        <input
          type="number"
          min={1}
          max={20}
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </label>

      <label className="flex items-center gap-2 text-sm text-zinc-700">
        <input
          type="checkbox"
          checked={includeAnswerKey}
          onChange={(e) => setIncludeAnswerKey(e.target.checked)}
        />
        Include answer key
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-60"
      >
        {loading ? "Generating…" : "Generate worksheet"}
      </button>
    </form>
  );
}
