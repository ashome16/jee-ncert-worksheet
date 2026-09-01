import { NextResponse } from "next/server";
import { generateWorksheet } from "@/lib/generate";
import type { GenerateFilters, QuestionType } from "@/lib/types";

const TYPES: QuestionType[] = ["MCQ", "NAT", "FITB"];

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<GenerateFilters>;

  const types = (body.types ?? TYPES).filter((t): t is QuestionType =>
    TYPES.includes(t as QuestionType),
  );

  const worksheet = generateWorksheet({
    subject: "Physics",
    grade: "11",
    chapter: body.chapter ?? "units-and-measurements",
    difficulty: body.difficulty ?? "Mixed",
    types,
    count: Number(body.count ?? 8),
    includeAnswerKey: Boolean(body.includeAnswerKey),
  });

  return NextResponse.json(worksheet);
}
