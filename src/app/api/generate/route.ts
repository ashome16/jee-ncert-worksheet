import { NextResponse } from "next/server";
import { generateWorksheet } from "@/lib/generate";
import type { Difficulty, QuestionType } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Align fields cleanly to fix the 'chapter' property literal match error
    const worksheetFilters = {
      grade: body.grade || "8",
      subject: body.subject || "Chemistry",
      chapterId: body.chapterId || body.chapter || "",
      difficulty: (body.difficulty || "Mixed") as Difficulty,
      types: (body.types || ["MCQ", "NAT", "FITB"]) as QuestionType[],
      count: body.count || 10
    };

    const worksheet = generateWorksheet(worksheetFilters);
    return NextResponse.json({ success: true, worksheet });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown backend compilation failure";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
