import React from "react";
import { Worksheet } from "@/lib/types";

interface WorksheetPreviewProps {
  worksheet: Worksheet | null; // Allow it to be null initially
  worksheetId: string;
}

export default function WorksheetPreview({ worksheet, worksheetId }: WorksheetPreviewProps) {
  // 🛡️ GUARD CLAUSE: If no worksheet has been generated yet, show a clean placeholder message
  if (!worksheet || !worksheet.questions) {
    return (
      <div className="border border-dashed p-12 text-center text-gray-400 rounded bg-gray-50">
        Select parameters on the filter panel layout to render hardcopy sheets here.
      </div>
    );
  }

  // Extracts a unique, clean list of all principles tested in the current active worksheet
  const uniquePrinciples = Array.from(
    new Map(worksheet.questions.map(q => [q.principle.id, q.principle])).values()
  );

  return (
    <div className="space-y-6 print:p-0 p-6 bg-white shadow rounded border text-left">
      {/* 🧬 UNIQUE PEDAGOGICAL FEATURE: Dynamic Concept Reference Index */}
      <div className="border-b pb-4 bg-slate-50 p-4 rounded no-print">
        <h3 className="font-bold text-sm text-slate-800 uppercase tracking-wider mb-1">
          🧬 Dynamic Formula & Phenomenon Reference Index
        </h3>
        <p className="text-xs text-slate-500 mb-3">
          This worksheet is systematically balanced based on entrance exam weightage mapping. Review these core principles tested in this sheet:
        </p>
        <div className="grid grid-cols-1 gap-2 text-xs">
          {uniquePrinciples.map((p) => (
            <div key={p.id} className="border bg-white p-2 rounded shadow-sm">
              <div className="font-semibold text-slate-700">{p.name}</div>
              <div className="text-slate-500 italic mt-0.5">Phenomenon: {p.phenomenon}</div>
              <div className="mt-1 font-mono text-blue-600 bg-blue-50 p-1 rounded inline-block text-[10px]">
                Governing Equation: {p.governingFormula}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 📄 PRINTABLE WORKSHEET HEADER AREA */}
      <div className="border-b pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Physics Evaluation Worksheet</h1>
          <p className="text-xs text-gray-500 font-mono mt-0.5">Sheet Identifier: {worksheetId}</p>
        </div>
        <div className="text-right text-sm">
          <div><strong>Total Questions:</strong> {worksheet.totalQuestions}</div>
          <div><strong>Max Marks:</strong> {worksheet.totalMarks}</div>
        </div>
      </div>

      {/* 📝 QUESTION RENDERING LOOP MAP */}
      <div className="space-y-6">
        {worksheet.questions.map((q, idx) => (
          <div key={q.id} className="space-y-2 break-inside-avoid">
            <div className="flex justify-between items-start">
              <span className="font-medium text-gray-900">
                Q{idx + 1}. <span className="text-xs bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded ml-2 uppercase font-mono">{q.subtopic}</span>
              </span>
              <span className="text-xs text-gray-400 font-medium">[{q.marks} Marks]</span>
            </div>
            <p className="text-gray-800 text-sm whitespace-pre-wrap pl-6">{q.text}</p>

            {/* MCQ Options Display Grid */}
            {q.type === "MCQ" && q.options && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-6 mt-1 text-sm text-gray-700">
                {q.options.map((opt, oIdx) => (
                  <div key={oIdx} className="border p-2 rounded bg-slate-50">
                    <span className="font-semibold mr-1">{String.fromCharCode(65 + oIdx)}.</span> {opt}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 🖨️ ACTION CONTROL PANEL BAR */}
      <div className="no-print pt-4 border-t flex justify-end">
        <button 
          onClick={() => window.print()} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-sm transition"
        >
          Print / Save PDF File
        </button>
      </div>
    </div>
  );
}
