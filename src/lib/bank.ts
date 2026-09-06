import { Question } from "./types";

export const QUESTION_BANK: Question[] = [
  {
    id: "p11_ch01_mcq_01",
    chapterId: "p11_01",
    subtopic: "Dimensional Analysis",
    principle: {
      id: "pr_homogeneity",
      name: "Principle of Homogeneity",
      phenomenon: "Physical quantities added or subtracted must possess identical dimensions to maintain equations balance.",
      governingFormula: "[LHS] = [RHS]",
      jeeWeightage: 3.3
    },
    cognitiveDimension: "UNDERSTANDING",
    type: "MCQ",
    difficulty: "Medium",
    text: "The velocity 'v' of a particle depends on time 't' according to the equation v = a + bt + c/(d + t). Write down the dimensions of the coefficient 'c'.",
    options: ["[M L T^-1]", "[L]", "[L T^-1]", "[L T]"],
    correctAnswer: "[L]",
    solution: "By the principle of homogeneity of dimensions, terms added together must have the same dimension. Therefore, [d] = [t] = [T]. The entire term c/(d+t) must have dimensions of velocity [L T^-1]. Hence, [c] / [T] = [L T^-1] => [c] = [L]. Correct choice is [L].",
    marks: 4
  },
  {
    id: "p11_ch01_nat_01",
    chapterId: "p11_01",
    subtopic: "Error Analysis",
    principle: {
      id: "pr_error_propagation",
      name: "Error Propagation Law",
      phenomenon: "Relative errors add up cumulatively when physical quantities are multiplied or raised to mathematical powers.",
      governingFormula: "ΔZ/Z = a(ΔA/A) + b(ΔB/B)",
      jeeWeightage: 3.3
    },
    cognitiveDimension: "APPLICATION",
    type: "NAT",
    difficulty: "Medium",
    text: "A physical quantity Z is given by Z = (A^2 * B) / C. The percentage errors of measurement in A, B, and C are 1%, 2%, and 4% respectively. Calculate the maximum percentage error in the measurement of Z.",
    correctAnswer: "8",
    solution: "Using fractional error expansion: ΔZ/Z = 2*(ΔA/A) + 1*(ΔB/B) + 1*(ΔC/C). Substituting percentages: % Error in Z = 2*(1%) + 1*(2%) + 1*(4%) = 2 + 2 + 4 = 8%. Thus, the absolute numerical value is 8.",
    marks: 4
  },
  {
    id: "p11_ch02_nat_01",
    chapterId: "p11_02",
    subtopic: "Kinematics Equations",
    principle: {
      id: "pr_gravity_kinematics",
      name: "Uniform Acceleration Under Gravity",
      phenomenon: "Free-falling bodies near Earth experience a constant downward gravitational acceleration independent of mass.",
      governingFormula: "S = u*t + (1/2)*g*t^2",
      jeeWeightage: 6.6
    },
    cognitiveDimension: "APPLICATION",
    type: "NAT",
    difficulty: "Hard",
    text: "A ball is dropped freely from a tower of height H. It takes 4 seconds to reach the ground floor. Find the depth in meters dropped by the ball in the first 2 seconds of its motion. (Take acceleration due to gravity g = 10 m/s^2)",
    correctAnswer: "20",
    solution: "Using the second equation of motion for a dropped object (initial velocity u = 0): Distance S = (1/2) * g * t^2. Substituting the target duration t = 2 seconds and g = 10: S = (1/2) * 10 * (2)^2 = 5 * 4 = 20 meters.",
    marks: 4
  },
  {
    id: "p11_ch02_mcq_01",
    chapterId: "p11_02",
    subtopic: "Kinematics Graphs",
    principle: {
      id: "pr_graph_calculus",
      name: "Geometric Interpretations of Motion",
      phenomenon: "The instantaneous slope of a position-time graph yields velocity, while the area under a velocity-time graph yields net displacement.",
      governingFormula: "v = dx/dt , S = ∫v dt",
      jeeWeightage: 6.6
    },
    cognitiveDimension: "UNDERSTANDING",
    type: "MCQ",
    difficulty: "Medium",
    text: "A particle starts from rest and moves with uniform acceleration. Which of the following graphs correctly represents its displacement (x) as a function of time (t)?",
    options: ["A straight line sloping upwards", "A parabola curving upwards", "A horizontal straight line", "A rectangular hyperbola"],
    correctAnswer: "A parabola curving upwards",
    solution: "Since acceleration is uniform, position is governed by x = (1/2)*a*t^2 (assuming u=0). This quadratic relation mathematically plots as a classic upward-opening parabola with respect to the time axis.",
    marks: 4
  },
  {
    id: "p11_ch03_fitb_01",
    chapterId: "p11_03",
    subtopic: "Friction",
    principle: {
      id: "pr_static_friction",
      name: "Limiting Friction Threshold",
      phenomenon: "The resistive electrostatic force between two dry surfaces scales up adaptively to counteract pulling force until it reaches a maximum threshold.",
      governingFormula: "f_max = μ_s * N",
      jeeWeightage: 10.0
    },
    cognitiveDimension: "KNOWLEDGE",
    type: "FITB",
    difficulty: "Easy",
    text: "The maximum force of static friction that comes into play when a body just begins to slide over the surface of another body is called ________ friction.",
    correctAnswer: "limiting",
    solution: "By definition, the peak threshold of static friction before relative kinetic sliding occurs between contact surface areas is called limiting friction.",
    marks: 2
  },
  {
    id: "p11_ch03_mcq_02",
    chapterId: "p11_03",
    subtopic: "Circular Motion Dynamics",
    principle: {
      id: "pr_centripetal_force",
      name: "Centripetal Acceleration Mechanics",
      phenomenon: "An object tracking a curved trajectory requires a net inward radial force to alter its velocity direction continuously without changing speed.",
      governingFormula: "F_c = (m * v^2) / r",
      jeeWeightage: 10.0
    },
    cognitiveDimension: "APPLICATION",
    type: "MCQ",
    difficulty: "Hard",
    text: "A car negotiated a curved, frictionless banked road of radius R tilted at an angle θ. What is the optimum safe horizontal velocity 'v' for the vehicle to avoid slipping up or down the slope?",
    options: ["v = √(g R sinθ)", "v = √(g R tanθ)", "v = √(g R / cosθ)", "v = √(g R cotθ)"],
    correctAnswer: "v = √(g R tanθ)",
    solution: "Balancing forces on a banked curve without friction: The normal force component N*sinθ provides the centripetal force (m*v^2/R), while N*cosθ balances weight (m*g). Dividing equations yields tanθ = v^2 / (g*R) => v = √(g R tanθ).",
    marks: 4
  }
];
