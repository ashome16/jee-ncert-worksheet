export interface ChapterMapping {
  id: string;
  title: string;
  grade: "11" | "12";
  subject: "Physics" | "Chemistry" | "Mathematics";
  jeeWeightagePercent: number;
}

export const CHAPTERS_REGISTRY: ChapterMapping[] = [
  { 
    id: "p11_01", 
    title: "Units and Measurements", 
    grade: "11", 
    subject: "Physics",
    jeeWeightagePercent: 3.3 
  },
  { 
    id: "p11_02", 
    title: "Motion in a Straight Line", 
    grade: "11", 
    subject: "Physics",
    jeeWeightagePercent: 6.6 
  },
  { 
    id: "p11_03", 
    title: "Laws of Motion", 
    grade: "11", 
    subject: "Physics",
    jeeWeightagePercent: 10.0 
  }
];
