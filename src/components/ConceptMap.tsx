"use client";

import { useMemo } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MarkerType,
  type Edge,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import MathRenderer from "./MathRenderer";

export interface ConceptMapFormula {
  id: string;
  name: string;
  latex: string;
}

export interface ConceptMapNodeData {
  id: string;
  label: string;
  type?: "concept" | "formula";
  formulaId?: string;
  position?: { x: number; y: number };
}

export interface ConceptMapEdgeData {
  from: string;
  to: string;
  label?: string;
}

export interface ConceptMapGraph {
  chapter: string;
  title: string;
  nodes: ConceptMapNodeData[];
  edges: ConceptMapEdgeData[];
}

interface ConceptMapProps {
  graph: ConceptMapGraph;
  formulas?: ConceptMapFormula[];
  className?: string;
}

type FlowNodeData = { label: string; formula?: ConceptMapFormula } & Record<string, unknown>;

function ConceptNode({ data }: NodeProps) {
  const { label } = data as FlowNodeData;
  return (
    <div className="rounded-xl border border-zinc-300 bg-white px-3 py-2 text-xs font-bold text-zinc-800 shadow-sm">
      {label}
    </div>
  );
}

function FormulaNode({ data }: NodeProps) {
  const { label, formula } = data as FlowNodeData;
  return (
    <div className="rounded-xl border border-blue-300 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-900 shadow-sm">
      <div>{label}</div>
      {formula && (
        <div className="mt-1 text-[11px] font-normal">
          <MathRenderer formula={formula.latex} />
        </div>
      )}
    </div>
  );
}

const NODE_TYPES = { concept: ConceptNode, formula: FormulaNode };

export default function ConceptMap({ graph, formulas = [], className = "" }: ConceptMapProps) {
  const formulaById = useMemo(() => new Map(formulas.map((formula) => [formula.id, formula])), [formulas]);

  const nodes: Node[] = useMemo(
    () =>
      graph.nodes.map((node, index) => ({
        id: node.id,
        type: node.type === "formula" ? "formula" : "concept",
        position: node.position ?? { x: (index % 4) * 220, y: Math.floor(index / 4) * 140 },
        data: {
          label: node.label,
          formula: node.formulaId ? formulaById.get(node.formulaId) : undefined,
        },
      })),
    [graph.nodes, formulaById]
  );

  const edges: Edge[] = useMemo(
    () =>
      graph.edges.map((edge) => ({
        id: `${edge.from}->${edge.to}`,
        source: edge.from,
        target: edge.to,
        label: edge.label,
        markerEnd: { type: MarkerType.ArrowClosed },
      })),
    [graph.edges]
  );

  return (
    <div className={`no-print h-[520px] w-full rounded-xl border border-zinc-200 bg-white ${className}`}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={NODE_TYPES}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      >
        <Background />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
}
