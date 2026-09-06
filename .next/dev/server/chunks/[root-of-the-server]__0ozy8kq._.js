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
const TYPES = [
    "MCQ",
    "NAT",
    "FITB"
];
async function POST(req) {
    const body = await req.json();
    const types = (body.types ?? TYPES).filter((t)=>TYPES.includes(t));
    const worksheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$generate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateWorksheet"])({
        subject: "Physics",
        grade: "11",
        chapter: body.chapter ?? "units-and-measurements",
        difficulty: body.difficulty ?? "Mixed",
        types,
        count: Number(body.count ?? 8),
        includeAnswerKey: Boolean(body.includeAnswerKey)
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(worksheet);
}
}),
"[project]/src/lib/generate.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateWorksheet",
    ()=>generateWorksheet
]);
(()=>{
    const e = new Error("Cannot find module './bank'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function generateWorksheet(filters) {
    // 🧭 Enforce absolute data boundaries matching preparation level parameters
    let availableQuestionsPool = QUESTION_BANK.filter((q)=>{
        // 1. Isolate Foundation vs Entrance Exam Tiers
        if (filters.preparationLevel === 'FOUNDATION') {
            if (q.preparationLevel !== 'FOUNDATION') return false;
        } else {
            if (q.preparationLevel !== 'JEE_MAIN_ADVANCED') return false;
        }
        // 2. Separate Full Mock Tests from Single-Chapter Practice Drills
        if (filters.trackType === 'JEE_MOCK_TEST') {
            return q.trackType === 'JEE_MAIN_DRILL' || q.trackType === 'JEE_ADVANCED_CHALLENGE';
        }
        // 3. Match Single-Chapter Parameters Cleanly
        const cleanActiveSubject = filters.subject.replace(/[^a-zA-Z]/g, "").trim().toLowerCase();
        const cleanQSubject = q.id.includes("bio") ? "biology" : q.id.includes("phy") ? "physics" : q.id.includes("che") ? "chemistry" : "mathematics";
        return q.chapterId === filters.chapterId && q.trackType === filters.trackType;
    });
    // Calculate total metrics dynamically
    const selectedQuestions = availableQuestionsPool.slice(0, 5);
    const totalQuestions = selectedQuestions.length;
    const totalMarks = selectedQuestions.reduce((sum, q)=>sum + q.marks, 0);
    return {
        id: `ws-${Math.random().toString(36).substr(2, 9)}`,
        questions: selectedQuestions,
        totalQuestions,
        totalMarks
    };
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ozy8kq._.js.map