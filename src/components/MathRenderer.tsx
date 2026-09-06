import React, { useMemo } from "react";
import katex from "katex";

interface MathRendererProps {
  formula: string;
  block?: boolean;
}

export default function MathRenderer({ formula, block = false }: MathRendererProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(formula, { throwOnError: false, displayMode: block });
    } catch {
      return formula;
    }
  }, [formula, block]);

  if (block) {
    return (
      <div
        className="my-3 overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-center text-zinc-900"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className="rounded border border-zinc-200 bg-zinc-100 px-1 text-zinc-900"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
