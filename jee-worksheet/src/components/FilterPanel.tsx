"use client";

import React, { useState, useEffect } from "react";
import { CHAPTERS_REGISTRY } from "@/lib/chapters";

interface FilterPanelProps {
  onGenerate: (filters: {
    subject: string;
    grade: string;
    chapterId: string;
    difficulty: string;
    types: string[];
    count: number;
  }) => void;
}

export default function FilterPanel({ onGenerate }: FilterPanelProps) {
  // 🛡️ MOUNT GUARD STATE: Prevents browser extensions from causing hydration errors
  const [isMounted, setIsMounted] = useState(false);

  // Core Filtering States
  const [subject, setSubject] = useState<string>("Physics");
  const [grade, setGrade] = useState<string>("11");
  const [chapterId, setChapterId] = useState<string>("p11_01");
  const [difficulty, setDifficulty] = useState<string>("Mixed");
  const [count, setCount] = useState<number>(10);
  const [types, setTypes] = useState<string[]>(["MCQ", "NAT", "FITB"]);

  // Trigger mounting flag once running safely on the client browser
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleTypeToggle = (type: string) => {
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

  // If not mounted on the browser yet, render a clean structural shell to prevent mismatch
  if (!isMounted) {
    return <div className="text-sm text-gray-400">Loading form properties...</div>;
  }

  const filteredChapters = CHAPTERS_REGISTRY.filter(
    (ch) => ch.subject === subject && ch.grade === grade
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      {/* Subject Selector */}
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

      {/* Grade Selector */}
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

      {/* Dynamic Chapter Dropdown */}
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

      {/* Difficulty Matrix */}
      <div>
        <label className="block text-xs font-medium text-zinc-700 mb-1">Difficulty</label>
        <select 
          value={difficulty} 
          onChange={(e) => setDifficulty(e.target.value)}
          className="border p-2 w-full rounded bg-white text-sm"
        >
          <option value="Mixed">Mixed</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* Question Type Checklist Matrix */}
      <div>
        <label className="block text-xs font-medium text-zinc-700 mb-1">Question types</label>
        <div className="flex flex-wrap gap-2 mt-1 text-xs">
          {["MCQ", "NAT", "FITB"].map((type) => (
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

      {/* Total Questions Count Input */}
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

      <button type="submit" className="w-full bg-zinc-900 hover:bg-zinc-800 text-white p-2 rounded-lg font-medium text-sm transition mt-2">
        Generate worksheet
      </button>
    </form>
  );
}
