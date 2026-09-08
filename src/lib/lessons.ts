export type LessonSheet = {
  slug: string;
  title: string;
  summary: string[];
  related: string[];
  books: { title: string; note: string }[];
};

export const LESSONS: Record<string, LessonSheet> = {
  "rational-numbers-and-integers": {
    slug: "rational-numbers-and-integers",
    title: "Rational Numbers and Integers",
    summary: [
      "Integers are whole numbers and their negatives. Rationals are integers or fractions p/q with q not 0.",
      "Every rational has many equivalent fractions. Multiply or divide top and bottom by the same non-zero number.",
      "On the number line, left is smaller. Adding a negative moves left; adding a positive moves right.",
      "Multiplication: same signs give positive; different signs give negative. Division follows the same sign rule.",
    ],
    related: ["Linear Equations in One Variable", "Comparing Quantities", "Polynomials (Grade 9)"],
    books: [
      { title: "NCERT Mathematics Class 8, Rational Numbers", note: "Read examples, then exercise 1.1–1.2." },
      { title: "NCERT Exemplar Class 8 Mathematics", note: "Mixed word problems after the chapter exercise." },
    ],
  },
  "linear-equations-in-one-variable": 