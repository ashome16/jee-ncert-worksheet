"use client";

import type { Worksheet } from "@/lib/types";

export default function WorksheetPreview({
  worksheet,
}: {
  worksheet: Worksheet | null;
}) {
  if (!worksheet) {
    return (
      <div className="rounded-xl border border-dashed border-zinc-300 bg-white p-10 text-center text-sm text-zinc-500">
        Choose a chapter and generate a worksheet. Preview appears here. Use
        Print to save as PDF.
      </div>
    );
  }

  const totalMarks = worksheet.questions.reduce((s, q) => s + q.marks, 0);

  return (
    <article className="worksheet rounded-xl border border-zinc-200 bg-white p-8 shadow-sm print:border-0 print:shadow-none">
      <header className="border-b border-zinc-300 pb-4">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          Practice worksheet · NCERT
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-zinc-900">
          {worksheet.title}
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Difficulty: {worksheet.filters.difficulty} ·{" "}
          {worksheet.questions.length} questions · {totalMarks} marks
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-zinc-700">
          <p>Name: ________________________</p>
          <p>Date: ______________</p>
        </div>
      </header>

      <ol className="mt-6 space-y-6">
        {worksheet.questions.map((q, i) => (
          <li key={q.id} className="text-sm leading-6">
            <div className="flex justify-between gap-4">
              <p>
                <span className="font-semibold">{i + 1}.</span> {q.stem}{" "}
                <span className="text-xs text-zinc-500">
                  [{q.type} · {q.difficulty} · {q.marks} mark
                  {q.marks > 1 ? "s" : ""}]
                </span>
              </p>
            </div>
            {q.options && (
              <ul className="mt-2 grid gap-1 pl-5 sm:grid-cols-2">
                {q.options.map((opt, idx) => (
                  <li key={opt}>
                    {String.fromCharCode(65 + idx)}. {opt}
                  </li>
                ))}
              </ul>
            )}
            {q.type === "FITB" || q.type === "NAT" ? (
              <p className="mt-2 pl-5 text-zinc-400">Answer: ______________</p>
            ) : null}
          </li>
        ))}
      </ol>

      {worksheet.filters.includeAnswerKey && (
        <section className="answer-key mt-10 border-t border-zinc-300 pt-6">
          <h2 className="text-lg font-semibold">Answer key</h2>
          <ol className="mt-3 space-y-3 text-sm">
            {worksheet.questions.map((q, i) => (
              <li key={q.id}>
                <span className="font-medium">
                  {i + 1}. {q.answer}
                </span>
                <p className="text-zinc-600">{q.solution}</p>
              </li>
            ))}
          </ol>
        </section>
      )}
    </article>
  );
}
