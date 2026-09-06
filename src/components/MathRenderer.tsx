import React from "react";

interface MathRendererProps {
  formula: string;
  block?: boolean;
}

export default function MathRenderer({ formula, block = false }: MathRendererProps) {
  const formattedFormula = formula
    .replace(/\*/g, "·")
    .replace(/q1/g, "q₁")
    .replace(/q2/g, "q₂")
    .replace(/r\^2/g, "r²")
    .replace(/ε_0/g, "ε₀")
    .replace(/Q_enclosed/g, "Q_enclosed");

  if (block) {
    return (
      <div className="my-3 rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-center font-mono text-xs font-semibold tracking-wide text-zinc-900">
        {formattedFormula}
      </div>
    );
  }

  return (
    <span className="rounded border border-zinc-200 bg-zinc-100 px-1 font-mono text-[11px] font-semibold text-zinc-900">
      {formattedFormula}
    </span>
  );
}
