"use client";

import FilterPanel from "@/components/FilterPanel";
import WorksheetPreview from "@/components/WorksheetPreview";
import type { GenerateFilters, Worksheet } from "@/lib/types";
import { useState } from "react";

export default function Home() {
  const [worksheet, setWorksheet] = useState<Worksheet | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerate(filters: GenerateFilters) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(filters),
      });
      if (!res.ok) throw new Error("Generate failed");
      const data = (await res.json()) as Worksheet;
      setWorksheet(data);
    } catch {
      setError("Could not generate worksheet. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8">
      <div className="no-print mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-zinc-500">Worksheet generator</p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
            NCERT practice sheets
          </h1>
        </div>
        {worksheet && (
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50"
          >
            Print / Save PDF
          </button>
        )}
      </div>

      {error && (
        <p className="no-print mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <FilterPanel onGenerate={handleGenerate} loading={loading} />
        </div>
        <div className="lg:col-span-2">
          <WorksheetPreview worksheet={worksheet} />
        </div>
      </div>
    </main>
  );
}
