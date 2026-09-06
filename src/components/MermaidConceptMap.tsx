"use client";

import { useEffect, useId, useState } from "react";
import mermaid from "mermaid";

interface MermaidConceptMapProps {
  chart: string;
  className?: string;
}

export default function MermaidConceptMap({ chart, className = "" }: MermaidConceptMapProps) {
  const renderId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const [svg, setSvg] = useState("");

  useEffect(() => {
    let active = true;
    mermaid.initialize({ startOnLoad: false, securityLevel: "strict", theme: "neutral" });
    mermaid
      .render(`concept-map-${renderId}`, chart)
      .then((result) => {
        if (active) setSvg(result.svg);
      })
      .catch(() => {
        if (active) setSvg("");
      });
    return () => {
      active = false;
    };
  }, [chart, renderId]);

  if (!svg) return null;
  return <div className={className} dangerouslySetInnerHTML={{ __html: svg }} />;
}
