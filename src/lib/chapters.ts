import type { ChapterId } from "./types";

export const CHAPTERS: { id: ChapterId; title: string }[] = [
  { id: "units-and-measurements", title: "Units and Measurements" },
  { id: "motion-in-a-straight-line", title: "Motion in a Straight Line" },
  { id: "laws-of-motion", title: "Laws of Motion" },
];

export function chapterTitle(id: ChapterId): string {
  return CHAPTERS.find((c) => c.id === id)?.title ?? id;
}
