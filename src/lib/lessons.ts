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
  "linear-equations-in-one-variable": {
    slug: "linear-equations-in-one-variable",
    title: "Linear Equations in One Variable",
    summary: [
      "A linear equation in one variable has the unknown to the first power only, e.g. 3x + 5 = 17.",
      "Do the same operation on both sides: add, subtract, multiply, or divide by a non-zero number.",
      "Clear fractions by multiplying through by the LCM of the denominators.",
      "Age and money problems become equations after you name the unknown once.",
    ],
    related: ["Rational Numbers and Integers", "Comparing Quantities", "Quadratic Equations (Grade 10)"],
    books: [
      { title: "NCERT Mathematics Class 8, Linear Equations in One Variable", note: "Finish the word-problem set, not only the bare equations." },
      { title: "NCERT Exemplar Class 8 Mathematics", note: "Use for extra application items." },
    ],
  },
  "comparing-quantities": {
    slug: "comparing-quantities",
    title: "Comparing Quantities",
    summary: [
      "Percent means per hundred. x% of N is (x/100) × N.",
      "Profit % and loss % use cost price as the base unless the question says otherwise.",
      "Discount is off marked price. Selling price = marked price − discount.",
      "Simple interest is PRT/100. Compound interest grows on the new amount each year.",
    ],
    related: ["Linear Equations in One Variable", "Rational Numbers and Integers", "Quadratic Equations (Grade 10)"],
    books: [
      { title: "NCERT Mathematics Class 8, Comparing Quantities", note: "SI vs CI examples first, then mixed exercises." },
      { title: "NCERT Exemplar Class 8 Mathematics", note: "Percentage change and successive discount items." },
    ],
  },
  "force-friction-and-pressure": {
    slug: "force-friction-and-pressure",
    title: "Force, Friction, and Pressure Systems",
    summary: [
      "A force can change speed, direction, or shape. Contact forces need touch; gravity and magnetism do not.",
      "Friction opposes slipping. It helps walking and writing; it wastes energy as heat.",
      "Pressure = force / area. Same force on a smaller area means larger pressure.",
      "Liquid pressure increases with depth. That is why dams are thicker at the base.",
    ],
    related: ["Gravitation and Laws of Motion (Grade 9)", "Cell membrane transport (Biology)", "Comparing Quantities (ratios)"],
    books: [
      { title: "NCERT Science Class 8, Force and Pressure", note: "Activities on area and footprints before numerical items." },
      { title: "Lakhmir Singh / Manjit Kaur, Class 8 Science", note: "Extra numerical practice on pressure." },
    ],
  },
  "synthetic-fibres-biopolymers-and-plastics": {
    slug: "synthetic-fibres-biopolymers-and-plastics",
    title: "Synthetic Fibres, Biopolymers and Plastics",
    summary: [
      "Synthetic fibres are made from chemicals, often from petroleum. Nylon, rayon, polyester, acrylic are common.",
      "Thermoplastics can be remelted and reshaped. Thermosetting plastics set hard and do not remelt safely.",
      "Plastics last a long time in soil and water. That is why reuse and recycling matter.",
      "The 4R idea: reduce, reuse, recycle, recover. Prefer cloth bags and refill bottles where you can.",
    ],
    related: ["Cell wall vs membrane (Biology)", "Comparing Quantities (materials cost)", "Force and Pressure (material strength)"],
    books: [
      { title: "NCERT Science Class 8, Synthetic Fibres and Plastics", note: "Table of uses plus the environment pages." },
      { title: "NCERT Exemplar Class 8 Science", note: "Application questions on 4R and thermoset vs thermoplastic." },
    ],
  },
  "cell-organelles-functions-and-structures": {
    slug: "cell-organelles-functions-and-structures",
    title: "Cell Organelles, Functions and Structures",
    summary: [
      "The nucleus holds genetic material and controls the cell.",
      "Mitochondria release energy from food. Plant cells also have chloroplasts for photosynthesis.",
      "The cell membrane is living and selective. Plant cells have an extra dead cell wall for shape.",
      "Vacuoles store water and dissolved substances. Plant vacuoles are usually large.",
    ],
    related: ["Synthetic fibres (materials vs living tissue)", "Force and Pressure (turgor)", "Life processes (Grade 10)"],
    books: [
      { title: "NCERT Science Class 8, Cell — Structure and Functions", note: "Diagrams of plant vs animal cell first." },
      { title: "NCERT Exemplar Class 8 Science", note: "Organelle-function matching items." },
    ],
  },
};

export function lessonForSlug(slug: string | undefined): LessonSheet | null {
  if (!slug) return null;
  return LESSONS[slug] ?? null;
}