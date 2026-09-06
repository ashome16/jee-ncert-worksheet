"use client";

import React, { useState } from "react";
import { CHAPTERS_REGISTRY } from "@/lib/chapters";
import type { Difficulty, GenerateFilters, QuestionType } from "@/lib/types";

interface FilterPanelProps {
  onGenerate: (filters: GenerateFilters) => void;
  loading?: boolean;
}

export default function FilterPanel({ onGenerate, loading = false }: FilterPanelProps) {
  const [subject, setSubject] = useState<string>("Physics");
  const [grade, setGrade] = useState<string>("11");
  const [chapterId, setChapterId] = useState<string>("p11_01");
  const [difficulty, setDifficulty] = useState<Difficulty>("Mixed");
  const [count, setCount] = useState<number>(10);
  const [types, setTypes] = useState<QuestionType[]>(["MCQ", "NAT", "FITB"]);

  const handleTypeToggle = (type: QuestionType) => {
    setTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (types.length === 0) return alert("Please select at least one question type framework format.");
    
    onGenerate({
      subject,
      grade,
      chapterId,
      difficulty,
      types,
      count
    });
  };

  const filteredChapters = CHAPTERS_REGISTRY.filter(
    (ch) => ch.subject === subject && ch.grade === grade
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div>
        <label className="block text-xs font-medium text-zinc-700 mb-1">Select Subject</label>
        <select 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)}
          className="border p-2 w-full rounded bg-white text-sm"
        >
          <option value="Physics">Physics</option>
          <option value="Chemistry" disabled>Chemistry (Coming Soon)</option>
          <option value="Mathematics" disabled>Mathematics (Coming Soon)</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-700 mb-1">Select Grade Target</label>
        <select 
          value={grade} 
          onChange={(e) => setGrade(e.target.value)}
          className="border p-2 w-full rounded bg-white text-sm"
        >
          <option value="11">Class 11 (NCERT)</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-700 mb-1">Chapter</label>
        <select 
          value={chapterId} 
          onChange={(e) => setChapterId(e.target.value)}
          className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm"
        >
          {filteredChapters.map((ch) => (
            <option key={ch.id} value={ch.id}>{ch.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-700 mb-1">Difficulty</label>
        <select 
          value={difficulty} 
          onChange={(e) => setDifficulty(e.target.value as Difficulty)}
          className="border p-2 w-full rounded bg-white text-sm"
        >
          <option value="Mixed">Mixed</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-700 mb-1">Question types</label>
        <div className="flex flex-wrap gap-2 mt-1 text-xs">
          {(["MCQ", "NAT", "FITB"] as QuestionType[]).map((type) => (
            <label key={type} className="flex items-center space-x-1.5 cursor-pointer bg-zinc-50 border px-2 py-1 rounded-md">
              <input 
                type="checkbox" 
                checked={types.includes(type)} 
                onChange={() => handleTypeToggle(type)}
                className="rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
              />
              <span>{type === 'NAT' ? 'Numerical' : type === 'FITB' ? 'Fill in the blank' : 'Multiple choice'}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-700 mb-1">Number of questions</label>
        <input 
          type="number" 
          min={1} 
          max={20} 
          value={count} 
          onChange={(e) => setCount(Math.min(20, parseInt(e.target.value) || 1))}
          className="border p-2 w-full rounded text-sm"
        />
      </div>

      <button type="submit" disabled={loading} className="w-full bg-zinc-900 hover:bg-zinc-800 text-white p-2 rounded-lg font-medium text-sm transition mt-2 disabled:cursor-wait disabled:opacity-60">
        {loading ? "Generating worksheet..." : "Generate worksheet"}
      </button>
    </form>
  );
}
