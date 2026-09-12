export type ConceptGraphNode = {
  id: string;
  label: string;
  formulaId?: string;
  type?: "concept" | "formula";
  position?: { x: number; y: number };
};

export type ConceptGraphEdge = { from: string; to: string; label?: string };

export type ConceptGraph = {
  chapter: string;
  title: string;
  nodes: ConceptGraphNode[];
  edges: ConceptGraphEdge[];
};

export const CHAPTER_GRAPHS: Record<string, ConceptGraph> = {
  "force-friction-and-pressure": {
    chapter: "force-friction-and-pressure",
    title: "Force, friction, pressure",
    nodes: [
      { id: "force", label: "Force" },
      { id: "friction", label: "Friction" },
      { id: "pressure", label: "Pressure = F / A" },
      { id: "depth", label: "Liquid pressure rises with depth" },
    ],
    edges: [
      { from: "force", to: "friction" },
      { from: "force", to: "pressure" },
      { from: "pressure", to: "depth" },
    ],
  },
};

export function graphForSlug(slug?: string): ConceptGraph | undefined {
  if (!slug) return undefined;
  return CHAPTER_GRAPHS[slug];
}