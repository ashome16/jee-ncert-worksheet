module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/src/app/api/generate/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$generate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/generate.ts [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        const body = await request.json();
        // Align fields cleanly to fix the 'chapter' property literal match error
        const worksheetFilters = {
            grade: body.grade || "8",
            subject: body.subject || "Chemistry",
            chapterId: body.chapterId || body.chapter || "",
            difficulty: body.difficulty || "Mixed",
            types: body.types || [
                "MCQ",
                "NAT",
                "FITB"
            ],
            count: body.count || 10
        };
        const worksheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$generate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateWorksheet"])(worksheetFilters);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            worksheet
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown backend compilation failure";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: errorMessage
        }, {
            status: 500
        });
    }
}
}),
"[project]/src/lib/bank.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QUESTION_BANK",
    ()=>QUESTION_BANK
]);
const QUESTION_BANK = [
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
        options: [
            "[M L T^-1]",
            "[L]",
            "[L T^-1]",
            "[L T]"
        ],
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
        options: [
            "A straight line sloping upwards",
            "A parabola curving upwards",
            "A horizontal straight line",
            "A rectangular hyperbola"
        ],
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
        options: [
            "v = √(g R sinθ)",
            "v = √(g R tanθ)",
            "v = √(g R / cosθ)",
            "v = √(g R cotθ)"
        ],
        correctAnswer: "v = √(g R tanθ)",
        solution: "Balancing forces on a banked curve without friction: The normal force component N*sinθ provides the centripetal force (m*v^2/R), while N*cosθ balances weight (m*g). Dividing equations yields tanθ = v^2 / (g*R) => v = √(g R tanθ).",
        marks: 4
    }
];
}),
"[project]/src/lib/generate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateWorksheet",
    ()=>generateWorksheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bank$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/bank.ts [app-route] (ecmascript)");
;
function generateWorksheet(filters) {
    let availableQuestions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bank$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QUESTION_BANK"].filter((q)=>q.chapterId === filters.chapterId);
    if (filters.types && filters.types.length > 0) {
        const selectedTypes = filters.types;
        availableQuestions = availableQuestions.filter((q)=>selectedTypes.includes(q.type));
    }
    if (filters.difficulty !== "Mixed") {
        availableQuestions = availableQuestions.filter((q)=>q.difficulty === filters.difficulty);
    }
    const shuffled = [
        ...availableQuestions
    ];
    for(let i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [
            shuffled[j],
            shuffled[i]
        ];
    }
    const finalCount = Math.min(filters.count, shuffled.length, 20);
    const selectedQuestions = shuffled.slice(0, finalCount);
    const totalMarks = selectedQuestions.reduce((sum, q)=>sum + q.marks, 0);
    return {
        questions: selectedQuestions,
        totalQuestions: selectedQuestions.length,
        totalMarks
    };
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__06a07m0._.js.map