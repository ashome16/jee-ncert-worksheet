module.exports = [
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var e = new Error("Could not parse module '[project]/src/app/page.tsx'\n\nUnexpected token. Did you mean `{'}'}` or `&rbrace;`?");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/components/FilterPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilterPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/chapters.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const ALL_TYPES = [
    "MCQ",
    "NAT",
    "FITB"
];
const FOUNDATION_TRACKS = [
    {
        value: "CONCEPTUAL_QUIZ",
        label: "Conceptual Quiz"
    },
    {
        value: "CALCULATION_APPLICATION",
        label: "Calculation Application"
    },
    {
        value: "FUTURE_TECH_LAB",
        label: "Future Tech Applications"
    }
];
const EXAM_PREP_TRACKS = [
    {
        value: "TOPIC_DRILL",
        label: "Topic Drills"
    },
    {
        value: "FULL_PATTERN_MOCK",
        label: "Full Mock Tests"
    }
];
function FilterPanel({ onGenerate, loading }) {
    const [grade, setGrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("11");
    const [chapter, setChapter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("units-and-measurements");
    const [difficulty, setDifficulty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Mixed");
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(8);
    const [types, setTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        ...ALL_TYPES
    ]);
    const [includeAnswerKey, setIncludeAnswerKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [preparationLevel, setPreparationLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("FOUNDATION");
    const [foundationTracks, setFoundationTracks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        "CONCEPTUAL_QUIZ"
    ]);
    const [examPrepTracks, setExamPrepTracks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        "TOPIC_DRILL"
    ]);
    function toggleType(t) {
        setTypes((prev)=>prev.includes(t) ? prev.filter((x)=>x !== t) : [
                ...prev,
                t
            ]);
    }
    function toggleFoundationTrack(t) {
        setFoundationTracks((prev)=>prev.includes(t) ? prev.filter((x)=>x !== t) : [
                ...prev,
                t
            ]);
    }
    function toggleExamPrepTrack(t) {
        setExamPrepTracks((prev)=>prev.includes(t) ? prev.filter((x)=>x !== t) : [
                ...prev,
                t
            ]);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "no-print space-y-5 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm",
        onSubmit: (e)=>{
            e.preventDefault();
            onGenerate({
                subject: "Physics",
                grade,
                chapter,
                difficulty,
                types: types.length ? types : ALL_TYPES,
                count,
                includeAnswerKey,
                preparationLevel,
                trackTypes: preparationLevel === "FOUNDATION" ? foundationTracks : examPrepTracks
            });
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-medium uppercase tracking-wide text-zinc-500",
                        children: [
                            "Class ",
                            grade,
                            " · Physics · NCERT"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-1 text-lg font-semibold text-zinc-900",
                        children: "Generate worksheet"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        className: "text-sm font-medium text-zinc-700",
                        children: "Preparation level"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex overflow-hidden rounded-lg border border-zinc-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setPreparationLevel("FOUNDATION"),
                                className: `flex-1 px-3 py-2 text-xs font-medium transition ${preparationLevel === "FOUNDATION" ? "bg-zinc-900 text-white" : "bg-white text-zinc-600 hover:bg-zinc-50"}`,
                                children: "Foundation Track"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setPreparationLevel("JEE_EXAM_PREP"),
                                className: `flex-1 border-l border-zinc-300 px-3 py-2 text-xs font-medium transition ${preparationLevel === "JEE_EXAM_PREP" ? "bg-zinc-900 text-white" : "bg-white text-zinc-600 hover:bg-zinc-50"}`,
                                children: "JEE Exam Prep"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            preparationLevel === "FOUNDATION" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        className: "text-sm font-medium text-zinc-700",
                        children: "Foundation tracks"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex flex-wrap gap-2",
                        children: FOUNDATION_TRACKS.map((track)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `cursor-pointer rounded-full border px-3 py-1 text-xs font-medium ${foundationTracks.includes(track.value) ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-300 text-zinc-600"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        className: "sr-only",
                                        checked: foundationTracks.includes(track.value),
                                        onChange: ()=>toggleFoundationTrack(track.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FilterPanel.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this),
                                    track.label
                                ]
                            }, track.value, true, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 137,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        className: "text-sm font-medium text-zinc-700",
                        children: "Exam prep tracks"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex flex-wrap gap-2",
                        children: EXAM_PREP_TRACKS.map((track)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `cursor-pointer rounded-full border px-3 py-1 text-xs font-medium ${examPrepTracks.includes(track.value) ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-300 text-zinc-600"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        className: "sr-only",
                                        checked: examPrepTracks.includes(track.value),
                                        onChange: ()=>toggleExamPrepTrack(track.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FilterPanel.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this),
                                    track.label
                                ]
                            }, track.value, true, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 163,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 157,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-zinc-700",
                children: [
                    "Grade target",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm",
                        value: grade,
                        onChange: (e)=>{
                            const nextGrade = e.target.value;
                            setGrade(nextGrade);
                            setChapter(nextGrade === "12" ? "p12_01" : "units-and-measurements");
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "11",
                                children: "Class 11"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "12",
                                children: "Class 12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-zinc-700",
                children: [
                    "Chapter",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm",
                        value: chapter,
                        onChange: (e)=>setChapter(e.target.value),
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAPTERS"].filter((c)=>grade === "12" ? c.id.startsWith("p12_") : !c.id.startsWith("p12_")).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: c.id,
                                children: c.title
                            }, c.id, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-zinc-700",
                children: [
                    "Difficulty",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm",
                        value: difficulty,
                        onChange: (e)=>setDifficulty(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Mixed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Easy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Medium"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Hard"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        className: "text-sm font-medium text-zinc-700",
                        children: "Question types"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex flex-wrap gap-2",
                        children: ALL_TYPES.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `cursor-pointer rounded-full border px-3 py-1 text-xs font-medium ${types.includes(t) ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-300 text-zinc-600"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        className: "sr-only",
                                        checked: types.includes(t),
                                        onChange: ()=>toggleType(t)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FilterPanel.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this),
                                    t === "MCQ" ? "Multiple choice" : t === "NAT" ? "Numerical" : "Fill in the blank"
                                ]
                            }, t, true, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-zinc-700",
                children: [
                    "Number of questions",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        min: 1,
                        max: 20,
                        className: "mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                        value: count,
                        onChange: (e)=>setCount(Number(e.target.value))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex items-center gap-2 text-sm text-zinc-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        checked: includeAnswerKey,
                        onChange: (e)=>setIncludeAnswerKey(e.target.checked)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    "Include answer key"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: loading,
                className: "w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-60",
                children: loading ? "Generating…" : "Generate worksheet"
            }, void 0, false, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FilterPanel.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/MathRenderer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MathRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function MathRenderer({ formula, block = false }) {
    const formattedFormula = formula.replace(/\*/g, "·").replace(/q1/g, "q₁").replace(/q2/g, "q₂").replace(/r\^2/g, "r²").replace(/ε_0/g, "ε₀").replace(/Q_enclosed/g, "Q_enclosed");
    if (block) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "my-3 rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-center font-mono text-xs font-semibold tracking-wide text-zinc-900",
            children: formattedFormula
        }, void 0, false, {
            fileName: "[project]/src/components/MathRenderer.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded border border-zinc-200 bg-zinc-100 px-1 font-mono text-[11px] font-semibold text-zinc-900",
        children: formattedFormula
    }, void 0, false, {
        fileName: "[project]/src/components/MathRenderer.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/WorksheetPreview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorksheetPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MathRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MathRenderer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function renderMathText(text) {
    const needsMathFormatting = /[=]|\^|_|\*|\/|\+|\-/.test(text);
    if (!needsMathFormatting) {
        return text;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MathRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        formula: text
    }, void 0, false, {
        fileName: "[project]/src/components/WorksheetPreview.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
function WorksheetPreview({ worksheet, worksheetId, filters, onSubmitEvaluation }) {
    const [localAnswers, setLocalAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const uniquePrinciples = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!worksheet) return [];
        return Array.from(new Map(worksheet.questions.filter((question)=>question.principle).map((question)=>[
                question.principle.id,
                question.principle
            ])).values());
    }, [
        worksheet
    ]);
    if (!worksheet || worksheet.questions.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "no-print rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-12 text-center text-sm font-medium text-zinc-400",
            children: "Choose a chapter and parameters on the filter panel to assemble a worksheet preview."
        }, void 0, false, {
            fileName: "[project]/src/components/WorksheetPreview.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this);
    }
    const chosenDifficulty = filters?.difficulty ?? worksheet.filters.difficulty ?? "Mixed";
    const chosenSubject = filters?.subject ?? worksheet.filters.subject ?? "Physics";
    const chosenGrade = filters?.grade ?? worksheet.filters.grade ?? "11";
    const totalMarks = worksheet.questions.reduce((sum, question)=>sum + question.marks, 0);
    function handleOptionSelect(questionId, option) {
        setLocalAnswers((current)=>({
                ...current,
                [questionId]: option
            }));
    }
    function handleTextInput(questionId, value) {
        setLocalAnswers((current)=>({
                ...current,
                [questionId]: value
            }));
    }
    function evaluateStudentSubmission(answers = localAnswers) {
        if (!worksheet) return;
        const savedAnswers = {
            ...answers
        };
        const responses = worksheet.questions.map((question)=>{
            const rawAnswer = savedAnswers[question.id] ?? "";
            const normalizedStudentAnswer = rawAnswer.trim();
            const correctAnswerText = question.correctAnswer ?? question.answer ?? "";
            const normalizedCorrectAnswer = correctAnswerText.trim();
            const isCorrect = normalizedStudentAnswer.length > 0 && normalizedStudentAnswer.toLowerCase() === normalizedCorrectAnswer.toLowerCase();
            return {
                questionId: question.id,
                questionText: question.text ?? question.stem ?? "Untitled question",
                studentAnswer: normalizedStudentAnswer || "Not attempted",
                correctAnswer: correctAnswerText,
                isCorrect,
                marksAwarded: isCorrect ? question.marks : 0
            };
        });
        const scoreObtained = responses.reduce((sum, response)=>sum + response.marksAwarded, 0);
        const maxPossibleMarks = worksheet.questions.reduce((sum, question)=>sum + question.marks, 0);
        const report = {
            submissionId: `submission-${Date.now()}`,
            worksheetId: worksheet.id,
            chapterId: worksheet.filters.chapter,
            submittedAt: new Date().toISOString(),
            totalQuestions: worksheet.questions.length,
            scoreObtained,
            maxPossibleMarks,
            accuracyPercentage: maxPossibleMarks > 0 ? Math.round(scoreObtained / maxPossibleMarks * 100) : 0,
            responses
        };
        onSubmitEvaluation?.(report);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "space-y-6 rounded-xl border border-zinc-200 bg-white p-8 text-left shadow-sm print:border-0 print:p-0 print:shadow-none",
        children: [
            uniquePrinciples.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "no-print rounded-xl border border-zinc-200 bg-zinc-50 p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-1.5 text-xs font-bold uppercase tracking-widest text-zinc-800",
                        children: "Dynamic Formula and Phenomenon Reference Index"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-xs leading-relaxed text-zinc-500",
                        children: "Core governing physics parameters represented in this worksheet."
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-2.5 text-xs",
                        children: uniquePrinciples.map((principle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-zinc-200 bg-white p-3 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-semibold text-zinc-800",
                                        children: principle.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-0.5 leading-normal text-zinc-500",
                                        children: [
                                            "Physical phenomenon: ",
                                            principle.phenomenon
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 inline-block rounded border border-zinc-200 bg-zinc-50 px-2 py-1 text-zinc-900",
                                        children: [
                                            "Governing formula: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MathRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                formula: principle.governingFormula
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                                lineNumber: 136,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, principle.id, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-start justify-between border-b border-zinc-200 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-xs font-medium uppercase tracking-widest text-zinc-400",
                                children: [
                                    "Class ",
                                    chosenGrade,
                                    " · ",
                                    chosenSubject,
                                    " · NCERT Preparation"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-0.5 text-2xl font-bold text-zinc-900",
                                children: worksheet.title || "Evaluation Practice Worksheet"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            worksheetId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 font-mono text-xs text-zinc-400",
                                children: [
                                    "Sheet Signature ID: ",
                                    worksheetId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-0.5 rounded-lg border bg-zinc-50 p-3 text-right text-xs font-medium text-zinc-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Total items:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 157,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    worksheet.questions.length,
                                    " questions"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Difficulty matrix:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 158,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    chosenDifficulty
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Maximum marks:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 159,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    totalMarks,
                                    " marks"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6 pt-2",
                children: worksheet.questions.map((question, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "break-inside-avoid space-y-3 border-b border-zinc-100 pb-5 last:border-0 last:pb-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-zinc-900",
                                        children: [
                                            "Q",
                                            index + 1,
                                            ". ",
                                            (question.subtopic || question.topic) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 rounded-md bg-zinc-100 px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wide text-zinc-700",
                                                children: question.subtopic ?? question.topic
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                                lineNumber: 169,
                                                columnNumber: 19
                                            }, this),
                                            question.jeeMetrics?.historicalAppearancePercentage != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 rounded-md bg-amber-100 px-2 py-0.5 font-mono text-[11px] font-bold text-amber-800",
                                                children: [
                                                    "🎯 JEE Frequency Rank: ",
                                                    question.jeeMetrics.historicalAppearancePercentage,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "whitespace-nowrap font-mono text-xs font-medium text-zinc-400",
                                        children: [
                                            "[",
                                            question.marks,
                                            " marks]"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "whitespace-pre-wrap pl-1 text-sm leading-relaxed text-zinc-800",
                                children: renderMathText(question.text ?? question.stem ?? "")
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this),
                            question.type === "MCQ" && question.options && question.options.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-2.5 pt-1.5 text-sm text-zinc-700 md:grid-cols-2",
                                children: question.options.map((option, optionIndex)=>{
                                    const isSelected = localAnswers[question.id] === option;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleOptionSelect(question.id, option),
                                        className: `flex items-center rounded-lg border p-2.5 text-left transition ${isSelected ? "border-blue-500 bg-blue-50/50 text-blue-900 shadow-sm" : "border-zinc-200 bg-zinc-50/50 text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 font-mono text-xs font-bold text-zinc-400",
                                                children: [
                                                    String.fromCharCode(65 + optionIndex),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                                lineNumber: 202,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: renderMathText(option ?? "")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                                lineNumber: 205,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, option, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 192,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 187,
                                columnNumber: 15
                            }, this),
                            (question.type === "NAT" || question.type === "FITB") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "no-print pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[11px] font-medium uppercase tracking-wide text-zinc-400",
                                        children: question.type === "NAT" ? "Numerical input field" : "Fill in the blank response"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 213,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: localAnswers[question.id] ?? "",
                                        onChange: (event)=>handleTextInput(question.id, event.target.value ?? ""),
                                        placeholder: "Type numerical value answer...",
                                        className: "mt-2 h-10 w-full max-w-[260px] rounded-lg border border-zinc-200 bg-zinc-50 px-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 212,
                                columnNumber: 15
                            }, this)
                        ]
                    }, question.id || index, true, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-print flex justify-end gap-3 border-t border-zinc-200 pt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>window.print(),
                        className: "rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-xs font-semibold tracking-wide text-zinc-800 shadow-sm transition hover:bg-zinc-50",
                        children: "Print / Save PDF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>evaluateStudentSubmission(localAnswers),
                        className: "rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-sm transition hover:bg-blue-500",
                        children: "Submit Answers for Evaluation"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            worksheet.filters.includeAnswerKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "answer-key mt-10 border-t border-zinc-300 pt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: "Answer key"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "mt-3 space-y-3 text-sm",
                        children: worksheet.questions.map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: [
                                            i + 1,
                                            ". ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MathRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                formula: q.correctAnswer ?? q.answer ?? ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                                lineNumber: 253,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 252,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-zinc-600",
                                        children: q.solution
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 255,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, q.id, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 251,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 247,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WorksheetPreview.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/bank.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QUESTION_BANK",
    ()=>QUESTION_BANK
]);
const QUESTION_BANK = [
    {
        id: "um-e-01",
        subject: "Physics",
        grade: "11",
        chapter: "units-and-measurements",
        chapterTitle: "Units and Measurements",
        topic: "SI units",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The SI unit of luminous intensity is",
        options: [
            "lux",
            "candela",
            "lumen",
            "watt"
        ],
        answer: "candela",
        solution: "The seven SI base units include candela (cd) for luminous intensity.",
        marks: 1,
        verified: true
    },
    {
        id: "um-e-02",
        subject: "Physics",
        grade: "11",
        chapter: "units-and-measurements",
        chapterTitle: "Units and Measurements",
        topic: "Significant figures",
        type: "MCQ",
        difficulty: "Easy",
        stem: "The number of significant figures in 0.00240 is",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        answer: "3",
        solution: "Leading zeros are not significant. 2, 4 and the trailing zero after the decimal are significant, so 3.",
        marks: 1,
        verified: true
    },
    {
        id: "um-e-03",
        subject: "Physics",
        grade: "11",
        chapter: "units-and-measurements",
        chapterTitle: "Units and Measurements",
        topic: "Dimensions",
        type: "FITB",
        difficulty: "Easy",
        stem: "The dimensional formula of force is ________.",
        answer: "[MLT^{-2}]",
        solution: "F = ma. [m] = [M], [a] = [LT^{-2}], so [F] = [MLT^{-2}].",
        marks: 1,
        verified: true
    },
    {
        id: "um-m-01",
        subject: "Physics",
        grade: "11",
        chapter: "units-and-measurements",
        chapterTitle: "Units and Measurements",
        topic: "Dimensional analysis",
        type: "MCQ",
        difficulty: "Medium",
        stem: "Which of the following pairs have the same dimensions?",
        options: [
            "Torque and work",
            "Force and energy",
            "Momentum and impulse of force / time",
            "Pressure and force"
        ],
        answer: "Torque and work",
        solution: "Torque = r × F → [ML^{2}T^{-2}]. Work = F·s → [ML^{2}T^{-2}]. Same dimensions; they are still different physical quantities.",
        marks: 1,
        verified: true
    },
    {
        id: "um-m-02",
        subject: "Physics",
        grade: "11",
        chapter: "units-and-measurements",
        chapterTitle: "Units and Measurements",
        topic: "Errors",
        type: "NAT",
        difficulty: "Medium",
        stem: "The percentage error in measuring mass and speed are 2% and 3% respectively. The maximum percentage error in kinetic energy (½mv²) is",
        answer: "8",
        solution: "ΔKE/KE = Δm/m + 2(Δv/v) = 2% + 2×3% = 8%.",
        marks: 2,
        verified: true
    },
    {
        id: "um-m-03",
        subject: "Physics",
        grade: "11",
        chapter: "units-and-measurements",
        chapterTitle: "Units and Measurements",
        topic: "Least count",
        type: "FITB",
        difficulty: "Medium",
        stem: "A screw gauge has a pitch of 1 mm and 100 divisions on the circular scale. Its least count is ________ mm.",
        answer: "0.01",
        solution: "Least count = pitch / number of divisions = 1 mm / 100 = 0.01 mm.",
        marks: 1,
        verified: true
    },
    {
        id: "um-h-01",
        subject: "Physics",
        grade: "11",
        chapter: "units-and-measurements",
        chapterTitle: "Units and Measurements",
        topic: "Dimensions of physical constants",
        type: "MCQ",
        difficulty: "Hard",
        stem: "The dimensional formula of the universal gravitational constant G is",
        options: [
            "[M^{-1}L^{3}T^{-2}]",
            "[ML^{3}T^{-2}]",
            "[M^{-1}L^{2}T^{-2}]",
            "[MLT^{-2}]"
        ],
        answer: "[M^{-1}L^{3}T^{-2}]",
        solution: "From F = Gm₁m₂/r², G = Fr²/m₁m₂ → [MLT^{-2}][L^{2}]/[M^{2}] = [M^{-1}L^{3}T^{-2}].",
        marks: 1,
        verified: true
    },
    {
        id: "um-h-02",
        subject: "Physics",
        grade: "11",
        chapter: "units-and-measurements",
        chapterTitle: "Units and Measurements",
        topic: "Significant figures",
        type: "NAT",
        difficulty: "Hard",
        stem: "Add 2.3 × 10² and 4.15 × 10¹ and report the result with the correct number of significant figures in ordinary (non-scientific) form. Enter the integer value.",
        answer: "270",
        solution: "230 + 41.5 = 271.5. Limited by 2.3 × 10² (precision of 10), so rounded to 270.",
        marks: 2,
        verified: true
    },
    {
        id: "ms-e-01",
        subject: "Physics",
        grade: "11",
        chapter: "motion-in-a-straight-line",
        chapterTitle: "Motion in a Straight Line",
        topic: "Average speed",
        type: "MCQ",
        difficulty: "Easy",
        stem: "A car travels 40 km in 30 min and another 40 km in 40 min. Its average speed for the whole journey is",
        options: [
            "60 km/h",
            "68.6 km/h",
            "80 km/h",
            "70 km/h"
        ],
        answer: "68.6 km/h",
        solution: "Total distance = 80 km. Total time = 70 min = 7/6 h. Average speed = 80 ÷ (7/6) ≈ 68.6 km/h.",
        marks: 1,
        verified: true
    },
    {
        id: "ms-e-02",
        subject: "Physics",
        grade: "11",
        chapter: "motion-in-a-straight-line",
        chapterTitle: "Motion in a Straight Line",
        topic: "Displacement vs distance",
        type: "FITB",
        difficulty: "Easy",
        stem: "Displacement can be zero even if distance is not zero because displacement is a ________ quantity.",
        answer: "vector",
        solution: "Displacement is the vector change in position. A round trip has zero displacement and non-zero distance.",
        marks: 1,
        verified: true
    },
    {
        id: "ms-e-03",
        subject: "Physics",
        grade: "11",
        chapter: "motion-in-a-straight-line",
        chapterTitle: "Motion in a Straight Line",
        topic: "Equations of motion",
        type: "NAT",
        difficulty: "Easy",
        stem: "A body starts from rest and accelerates at 2 m/s² for 5 s. The distance travelled (in m) is",
        answer: "25",
        solution: "s = ut + ½at² = 0 + ½(2)(25) = 25 m.",
        marks: 1,
        verified: true
    },
    {
        id: "ms-m-01",
        subject: "Physics",
        grade: "11",
        chapter: "motion-in-a-straight-line",
        chapterTitle: "Motion in a Straight Line",
        topic: "Relative velocity",
        type: "MCQ",
        difficulty: "Medium",
        stem: "Two trains each of length 100 m move in opposite directions at 40 km/h and 32 km/h. Time taken to cross each other is",
        options: [
            "5 s",
            "10 s",
            "12 s",
            "15 s"
        ],
        answer: "10 s",
        solution: "Relative speed = 72 km/h = 20 m/s. Distance to cross = 200 m. t = 200/20 = 10 s.",
        marks: 1,
        verified: true
    },
    {
        id: "ms-m-02",
        subject: "Physics",
        grade: "11",
        chapter: "motion-in-a-straight-line",
        chapterTitle: "Motion in a Straight Line",
        topic: "v–t graph",
        type: "FITB",
        difficulty: "Medium",
        stem: "The area under a velocity–time graph equals ________.",
        answer: "displacement",
        solution: "∫v dt over an interval is the change in position (displacement).",
        marks: 1,
        verified: true
    },
    {
        id: "ms-m-03",
        subject: "Physics",
        grade: "11",
        chapter: "motion-in-a-straight-line",
        chapterTitle: "Motion in a Straight Line",
        topic: "Free fall",
        type: "NAT",
        difficulty: "Medium",
        stem: "A ball is thrown vertically upward with 20 m/s. Taking g = 10 m/s², the time (in s) to return to the thrower is",
        answer: "4",
        solution: "Time of flight = 2u/g = 40/10 = 4 s.",
        marks: 2,
        verified: true
    },
    {
        id: "ms-h-01",
        subject: "Physics",
        grade: "11",
        chapter: "motion-in-a-straight-line",
        chapterTitle: "Motion in a Straight Line",
        topic: "Variable acceleration",
        type: "MCQ",
        difficulty: "Hard",
        stem: "The velocity of a particle is v = at + bt², where a and b are constants. The acceleration at t = 1 s is",
        options: [
            "a + 2b",
            "a + b",
            "2a + b",
            "a + 3b"
        ],
        answer: "a + 2b",
        solution: "a(t) = dv/dt = a + 2bt. At t = 1 s, acceleration = a + 2b.",
        marks: 1,
        verified: true
    },
    {
        id: "ms-h-02",
        subject: "Physics",
        grade: "11",
        chapter: "motion-in-a-straight-line",
        chapterTitle: "Motion in a Straight Line",
        topic: "Average velocity",
        type: "NAT",
        difficulty: "Hard",
        stem: "A particle moves 30 m east in 2 s and then 40 m north in 3 s. Magnitude of average velocity (in m/s) for the whole trip is",
        answer: "10",
        solution: "Net displacement = √(30² + 40²) = 50 m. Total time = 5 s. Average velocity = 50/5 = 10 m/s.",
        marks: 2,
        verified: true
    },
    {
        id: "lm-e-01",
        subject: "Physics",
        grade: "11",
        chapter: "laws-of-motion",
        chapterTitle: "Laws of Motion",
        topic: "Newton's first law",
        type: "MCQ",
        difficulty: "Easy",
        stem: "Newton’s first law of motion defines",
        options: [
            "force",
            "inertia",
            "momentum",
            "acceleration"
        ],
        answer: "inertia",
        solution: "The first law is the law of inertia: a body remains in its state unless acted on by a net external force.",
        marks: 1,
        verified: true
    },
    {
        id: "lm-e-02",
        subject: "Physics",
        grade: "11",
        chapter: "laws-of-motion",
        chapterTitle: "Laws of Motion",
        topic: "Momentum",
        type: "FITB",
        difficulty: "Easy",
        stem: "The product of mass and velocity of a body is called ________.",
        answer: "momentum",
        solution: "Linear momentum p = mv.",
        marks: 1,
        verified: true
    },
    {
        id: "lm-e-03",
        subject: "Physics",
        grade: "11",
        chapter: "laws-of-motion",
        chapterTitle: "Laws of Motion",
        topic: "F = ma",
        type: "NAT",
        difficulty: "Easy",
        stem: "A force of 10 N acts on a 2 kg mass. The acceleration (in m/s²) is",
        answer: "5",
        solution: "a = F/m = 10/2 = 5 m/s².",
        marks: 1,
        verified: true
    },
    {
        id: "lm-m-01",
        subject: "Physics",
        grade: "11",
        chapter: "laws-of-motion",
        chapterTitle: "Laws of Motion",
        topic: "Impulse",
        type: "MCQ",
        difficulty: "Medium",
        stem: "Impulse of a force is equal to the change in",
        options: [
            "kinetic energy",
            "potential energy",
            "momentum",
            "acceleration"
        ],
        answer: "momentum",
        solution: "J = ∫F dt = Δp. Impulse–momentum theorem.",
        marks: 1,
        verified: true
    },
    {
        id: "lm-m-02",
        subject: "Physics",
        grade: "11",
        chapter: "laws-of-motion",
        chapterTitle: "Laws of Motion",
        topic: "Connected bodies",
        type: "NAT",
        difficulty: "Medium",
        stem: "Two masses 3 kg and 5 kg connected by a light string pass over a light frictionless pulley. Acceleration of the system in m/s² is (take g = 10)",
        answer: "2.5",
        solution: "a = (m₂ − m₁)g / (m₁ + m₂) = (2)(10)/8 = 2.5 m/s².",
        marks: 2,
        verified: true
    },
    {
        id: "lm-m-03",
        subject: "Physics",
        grade: "11",
        chapter: "laws-of-motion",
        chapterTitle: "Laws of Motion",
        topic: "Friction",
        type: "FITB",
        difficulty: "Medium",
        stem: "The maximum value of static friction is μN, also called ________ friction.",
        answer: "limiting",
        solution: "Limiting friction f_L = μ_s N is the maximum static friction before slipping.",
        marks: 1,
        verified: true
    },
    {
        id: "lm-h-01",
        subject: "Physics",
        grade: "11",
        chapter: "laws-of-motion",
        chapterTitle: "Laws of Motion",
        topic: "Apparent weight",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A person of mass m stands in a lift accelerating upward with a. The apparent weight is",
        options: [
            "mg",
            "m(g − a)",
            "m(g + a)",
            "ma"
        ],
        answer: "m(g + a)",
        solution: "Normal reaction N − mg = ma ⇒ N = m(g + a) when the lift accelerates up.",
        marks: 1,
        verified: true
    },
    {
        id: "lm-h-02",
        subject: "Physics",
        grade: "11",
        chapter: "laws-of-motion",
        chapterTitle: "Laws of Motion",
        topic: "Recoil",
        type: "NAT",
        difficulty: "Hard",
        stem: "A gun of mass 5 kg fires a 50 g bullet at 200 m/s. Recoil speed of the gun (in m/s) is",
        answer: "2",
        solution: "m_b v_b = m_g v_g ⇒ 0.05 × 200 = 5 v_g ⇒ v_g = 2 m/s.",
        marks: 2,
        verified: true
    },
    {
        id: "p12_ch01_nat_01",
        subject: "Physics",
        grade: "12",
        chapter: "p12_01",
        chapterTitle: "Electrostatics & Electric Charges",
        topic: "Coulomb's Law",
        subtopic: "Coulomb's Law",
        type: "NAT",
        difficulty: "Medium",
        stem: "Two point charges of +2 μC and +6 μC repel each other with a force of 12 Newtons. If a charge of -4 μC is added to each of them, find the magnitude of the new force between them in Newtons (assuming the distance 'r' remains exactly identical).",
        answer: "4",
        solution: "Initial charges are q1 = +2 and q2 = +6, so product q1*q2 = 12. After adding -4 μC to both, the new charges become q1' = -2 μC and q2' = +2 μC. The new product of charges |q1' * q2'| = |-2 * 2| = 4. Since force is directly proportional to the product of charges (F ∝ q1*q2), the new force F' = F * (4 / 12) = 12 * (1/3) = 4 Newtons.",
        marks: 4,
        verified: true,
        principle: {
            id: "pr_coulomb_force",
            name: "Coulomb's Law of Electrostatic Force",
            phenomenon: "The attractive or repulsive force between two point charges drops off with the square of the distance separating them.",
            governingFormula: "F = k * |q1 * q2| / r^2",
            jeeWeightage: 8.5
        },
        cognitiveDimension: "APPLICATION"
    },
    {
        id: "p12_ch01_mcq_01",
        subject: "Physics",
        grade: "12",
        chapter: "p12_01",
        chapterTitle: "Electrostatics & Electric Charges",
        topic: "Electric Field Intensity",
        subtopic: "Electric Field Intensity",
        type: "MCQ",
        difficulty: "Hard",
        stem: "A thin spherical conducting shell of radius R has a uniformly distributed surface charge Q. Which of the following graphs accurately profiles the electric field strength 'E' as a function of radial distance 'r' from the center of the sphere?",
        options: [
            "E is constant from r=0 to r=R, then drops quadratically",
            "E is zero from r=0 to r=R, then drops quadratically for r > R",
            "E increases linearly from r=0 to r=R, then drops exponentially",
            "E drops linearly throughout all distance intervals"
        ],
        answer: "E is zero from r=0 to r=R, then drops quadratically for r > R",
        solution: "By Gauss's Law, the enclosed charge inside a conducting shell at any radius r < R is zero, meaning the internal electric field E = 0. For points outside the shell (r > R), the entire charge behaves like a point charge at the center, so field density drops off quadratically following E = kQ/r^2.",
        marks: 4,
        verified: true,
        principle: {
            id: "pr_gauss_law",
            name: "Gauss Law of Electrostatics",
            phenomenon: "The net outward electric flux piercing an enclosed Gaussian boundary scales strictly with the net inner trapped static charge divided by permittivity.",
            governingFormula: "∮ E · dA = Q_enclosed / ε_0",
            jeeWeightage: 8.5
        },
        cognitiveDimension: "UNDERSTANDING"
    },
    {
        id: "p12_ch02_nat_01",
        subject: "Physics",
        grade: "12",
        chapter: "p12_02",
        chapterTitle: "Current Electricity & Circuits",
        topic: "Resistor Networks",
        subtopic: "Resistor Networks",
        type: "NAT",
        difficulty: "Medium",
        stem: "A wire of resistance 4 Ohms is stretched uniformly to twice its original length. Calculate the new resistance of the stretched wire in Ohms.",
        answer: "16",
        solution: "When a wire is stretched to double its length (L' = 2L), its cross-sectional area drops by half (A' = A/2) to preserve total volume. Resistance is given by R = ρ * L / A. Therefore, the new resistance R' = ρ * (2L) / (A/2) = 4 * (ρ * L / A) = 4 * R = 4 * 4 = 16 Ohms.",
        marks: 4,
        verified: true,
        principle: {
            id: "pr_ohm_law",
            name: "Ohm's Law and Drift Velocity",
            phenomenon: "Free electrons moving through a crystal lattice collide under an applied electric field, generating a steady macro-current proportional to voltage drop.",
            governingFormula: "V = I * R",
            jeeWeightage: 7.0
        },
        cognitiveDimension: "APPLICATION"
    }
];
}),
"[project]/src/lib/chapters.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHAPTERS",
    ()=>CHAPTERS,
    "CHAPTERS_REGISTRY",
    ()=>CHAPTERS_REGISTRY,
    "chapterTitle",
    ()=>chapterTitle
]);
const CHAPTERS = [
    {
        id: "units-and-measurements",
        title: "Units and Measurements"
    },
    {
        id: "motion-in-a-straight-line",
        title: "Motion in a Straight Line"
    },
    {
        id: "laws-of-motion",
        title: "Laws of Motion"
    },
    {
        id: "p12_01",
        title: "Electrostatics & Electric Charges"
    },
    {
        id: "p12_02",
        title: "Current Electricity & Circuits"
    }
];
const CHAPTERS_REGISTRY = CHAPTERS;
function chapterTitle(id) {
    return CHAPTERS.find((c)=>c.id === id)?.title ?? id;
}
}),
"[project]/src/lib/predictor.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JOSAA_CUTOFFS_BANK",
    ()=>JOSAA_CUTOFFS_BANK,
    "estimateJEEAdvancedRank",
    ()=>estimateJEEAdvancedRank,
    "getCollegeRecommendations",
    ()=>getCollegeRecommendations
]);
const JOSAA_CUTOFFS_BANK = [
    // Existing entries
    {
        instituteName: "IIT Bombay",
        programName: "Computer Science & Engineering",
        category: "GEN",
        gender: "GENDER_NEUTRAL",
        closingRank: 68
    },
    {
        instituteName: "IIT Bombay",
        programName: "Computer Science & Engineering",
        category: "OBC_NCL",
        gender: "GENDER_NEUTRAL",
        closingRank: 50
    },
    {
        instituteName: "IIT Bombay",
        programName: "Computer Science & Engineering",
        category: "SC",
        gender: "GENDER_NEUTRAL",
        closingRank: 25
    },
    {
        instituteName: "IIT Delhi",
        programName: "Computer Science & Engineering",
        category: "GEN",
        gender: "GENDER_NEUTRAL",
        closingRank: 115
    },
    {
        instituteName: "IIT Delhi",
        programName: "Computer Science & Engineering",
        category: "GEN",
        gender: "FEMALE_ONLY",
        closingRank: 420
    },
    // IIT Kharagpur expansions
    {
        instituteName: "IIT Kharagpur",
        programName: "Computer Science & Engineering",
        category: "GEN",
        gender: "GENDER_NEUTRAL",
        closingRank: 270
    },
    {
        instituteName: "IIT Kharagpur",
        programName: "Computer Science & Engineering",
        category: "OBC_NCL",
        gender: "GENDER_NEUTRAL",
        closingRank: 130
    },
    {
        instituteName: "IIT Kharagpur",
        programName: "Electronics & Electrical Communication",
        category: "GEN",
        gender: "GENDER_NEUTRAL",
        closingRank: 1140
    },
    {
        instituteName: "IIT Kharagpur",
        programName: "Aerospace Engineering",
        category: "GEN",
        gender: "GENDER_NEUTRAL",
        closingRank: 2500
    },
    // IIT Roorkee expansions
    {
        instituteName: "IIT Roorkee",
        programName: "Computer Science & Engineering",
        category: "GEN",
        gender: "GENDER_NEUTRAL",
        closingRank: 410
    },
    {
        instituteName: "IIT Roorkee",
        programName: "Computer Science & Engineering",
        category: "OBC_NCL",
        gender: "GENDER_NEUTRAL",
        closingRank: 195
    },
    {
        instituteName: "IIT Roorkee",
        programName: "Data Science & Artificial Intelligence",
        category: "GEN",
        gender: "GENDER_NEUTRAL",
        closingRank: 650
    },
    {
        instituteName: "IIT Roorkee",
        programName: "Electrical Engineering",
        category: "SC",
        gender: "GENDER_NEUTRAL",
        closingRank: 580
    },
    // BITS Pilani expansions (calibrated to equivalent JEE Advanced ranking thresholds)
    {
        instituteName: "BITS Pilani (Pilani Campus)",
        programName: "Computer Science (B.E.)",
        category: "GEN",
        gender: "GENDER_NEUTRAL",
        closingRank: 320
    },
    {
        instituteName: "BITS Pilani (Goa Campus)",
        programName: "Computer Science (B.E.)",
        category: "GEN",
        gender: "GENDER_NEUTRAL",
        closingRank: 980
    },
    {
        instituteName: "BITS Pilani (Pilani Campus)",
        programName: "Electronics & Communication (B.E.)",
        category: "GEN",
        gender: "GENDER_NEUTRAL",
        closingRank: 1850
    }
];
function estimateJEEAdvancedRank(overallAccuracy, totalWorksheets) {
    if (totalWorksheets < 3) return 50000; // Baseline entry tier until performance telemetry registers
    // Algorithmic scale matching historical score-to-rank matrices
    if (overallAccuracy >= 90) return Math.round(1 + (100 - overallAccuracy) * 10); // Top 100 ranks
    if (overallAccuracy >= 75) return Math.round(101 + (90 - overallAccuracy) * 60); // AIR 100 - 1000
    if (overallAccuracy >= 60) return Math.round(1001 + (75 - overallAccuracy) * 260); // AIR 1000 - 5000
    if (overallAccuracy >= 45) return Math.round(5001 + (60 - overallAccuracy) * 660); // AIR 5000 - 15000
    return Math.round(15001 + (45 - overallAccuracy) * 1200); // AIR 15000+
}
function getCollegeRecommendations(estimatedRank, category, gender) {
    const matches = JOSAA_CUTOFFS_BANK.filter((record)=>record.category === category && record.gender === gender);
    return matches.map((record)=>{
        let matchStatus = "AMBITIOUS_REACH";
        // Safety Thresholding Buffer Zones
        if (estimatedRank <= record.closingRank * 0.8) {
            matchStatus = "SAFE_TARGET";
        } else if (estimatedRank <= record.closingRank * 1.1) {
            matchStatus = "BORDERLINE";
        }
        return {
            instituteName: record.instituteName,
            programName: record.programName,
            closingRank: record.closingRank,
            matchStatus
        };
    });
}
}),
"[project]/src/lib/profile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateStudentProfileMetrics",
    ()=>updateStudentProfileMetrics
]);
function updateStudentProfileMetrics(studentName, latestReport, questionsPool) {
    const storageKey = `student_profile_${studentName.trim().toLowerCase()}`;
    const existingProfileRaw = localStorage.getItem(storageKey);
    let profile;
    if (existingProfileRaw) {
        profile = JSON.parse(existingProfileRaw);
    } else {
        // Scaffold a brand new workspace profile ledger if first time loading
        profile = {
            studentName: studentName.trim(),
            createdAt: new Date().toISOString(),
            worksheetsCompleted: 0,
            overallAccuracy: 0,
            syllabusHeatmap: {},
            identifiedWeakPoints: []
        };
    }
    // 1. Process basic overview counts
    profile.worksheetsCompleted += 1;
    // 2. Loop over each response card inside the report to compile heatmap parameters
    latestReport.responses.forEach((resp)=>{
        const matchedQuestion = questionsPool.find((q)=>q.id === resp.questionId);
        if (!matchedQuestion) return;
        const chId = latestReport.chapterId;
        const subName = matchedQuestion.subtopic ?? matchedQuestion.topic ?? "General";
        // Ensure the nested tracking slots exist
        if (!profile.syllabusHeatmap[chId]) profile.syllabusHeatmap[chId] = {};
        if (!profile.syllabusHeatmap[chId][subName]) {
            profile.syllabusHeatmap[chId][subName] = {
                subtopicName: subName,
                timesTested: 0,
                correctAnswers: 0,
                accuracyPercentage: 0,
                lastTested: new Date().toISOString()
            };
        }
        const cell = profile.syllabusHeatmap[chId][subName];
        cell.timesTested += 1;
        if (resp.isCorrect) cell.correctAnswers += 1;
        cell.accuracyPercentage = Math.round(cell.correctAnswers / cell.timesTested * 100);
        cell.lastTested = new Date().toISOString();
    });
    // 3. Compute overall accuracy across all active blocks
    let totalTestedItems = 0;
    let totalCorrectItems = 0;
    const criticalWeaknesses = [];
    Object.entries(profile.syllabusHeatmap).forEach(([chId, subGroup])=>{
        Object.entries(subGroup).forEach(([subName, stats])=>{
            totalTestedItems += stats.timesTested;
            totalCorrectItems += stats.correctAnswers;
            // 🛑 WEAK POINT TRIGGER RULES: If tested at least twice and accuracy drops below 55%
            if (stats.timesTested >= 2 && stats.accuracyPercentage < 55) {
                criticalWeaknesses.push({
                    chapterId: chId,
                    subtopicName: subName,
                    reason: `Accuracy is currently trailing at ${stats.accuracyPercentage}% over ${stats.timesTested} separate problem attempts.`
                });
            }
        });
    });
    profile.overallAccuracy = totalTestedItems > 0 ? Math.round(totalCorrectItems / totalTestedItems * 100) : 0;
    profile.identifiedWeakPoints = criticalWeaknesses;
    // 4. Save the profile permanently back to browser local storage
    localStorage.setItem(storageKey, JSON.stringify(profile));
    localStorage.setItem("active_student_session", studentName.trim());
    return profile;
}
}),
];

//# sourceMappingURL=_13ybug4._.js.map