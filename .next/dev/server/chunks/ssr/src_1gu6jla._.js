module.exports = [
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FilterPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WorksheetPreview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WorksheetPreview.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bank$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/bank.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/chapters.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/profile.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function getHeatmapCellClass(stats) {
    if (!stats || stats.timesTested === 0) {
        return "border-zinc-200 bg-zinc-200 text-zinc-600";
    }
    if (stats.accuracyPercentage >= 75) {
        return "border-emerald-400 bg-emerald-400 text-emerald-950";
    }
    if (stats.accuracyPercentage >= 55) {
        return "border-yellow-300 bg-yellow-300 text-yellow-900";
    }
    return "border-rose-200 bg-rose-200 text-rose-900";
}
function Home() {
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [worksheet, setWorksheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [studentName, setStudentName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [profileNameInput, setProfileNameInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pastRecords, setPastRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Browser extensions can mutate form fields during hydration.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const activeStudent = localStorage.getItem("active_student_session");
        if (!activeStudent) {
            return;
        }
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setStudentName(activeStudent);
        const storedProfile = localStorage.getItem(`student_profile_${activeStudent.trim().toLowerCase()}`);
        if (storedProfile) {
            setProfile(JSON.parse(storedProfile));
        }
        const storedRecords = localStorage.getItem(`student_records_${activeStudent.trim().toLowerCase()}`);
        setPastRecords(storedRecords ? JSON.parse(storedRecords) : []);
    }, []);
    const chapterRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAPTERS_REGISTRY"].map((chapter)=>{
            const subtopics = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bank$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTION_BANK"].filter((question)=>question.chapter === chapter.id).map((question)=>question.subtopic ?? question.topic)));
            return {
                id: chapter.id,
                title: chapter.title,
                subtopics
            };
        }), []);
    if (!isMounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto min-h-screen w-full max-w-6xl px-4 py-8"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 99,
            columnNumber: 12
        }, this);
    }
    function handleProfileSubmit(event) {
        event.preventDefault();
        const trimmedName = profileNameInput.trim();
        if (!trimmedName) return;
        setStudentName(trimmedName);
        localStorage.setItem("active_student_session", trimmedName);
        const storedProfile = localStorage.getItem(`student_profile_${trimmedName.toLowerCase()}`);
        const storedRecords = localStorage.getItem(`student_records_${trimmedName.toLowerCase()}`);
        setPastRecords(storedRecords ? JSON.parse(storedRecords) : []);
        if (storedProfile) {
            setProfile(JSON.parse(storedProfile));
            return;
        }
        setProfile({
            studentName: trimmedName,
            createdAt: new Date().toISOString(),
            worksheetsCompleted: 0,
            overallAccuracy: 0,
            syllabusHeatmap: {},
            identifiedWeakPoints: []
        });
    }
    function handleProfileSignOut() {
        localStorage.removeItem("active_student_session");
        setStudentName("");
        setProfile(null);
        setProfileNameInput("");
        setPastRecords([]);
    }
    function buildMockReportFromWorksheet(currentWorksheet) {
        const responses = currentWorksheet.questions.map((question, index)=>{
            const isCorrect = (index + question.marks) % 2 === 0;
            return {
                questionId: question.id,
                questionText: question.stem,
                studentAnswer: isCorrect ? question.answer : "Not attempted",
                correctAnswer: question.answer,
                isCorrect,
                marksAwarded: isCorrect ? question.marks : 0
            };
        });
        const scoreObtained = responses.reduce((sum, response)=>sum + response.marksAwarded, 0);
        const maxPossibleMarks = currentWorksheet.questions.reduce((sum, question)=>sum + question.marks, 0);
        return {
            submissionId: crypto.randomUUID(),
            worksheetId: currentWorksheet.id,
            chapterId: currentWorksheet.filters.chapter,
            submittedAt: new Date().toISOString(),
            totalQuestions: currentWorksheet.questions.length,
            scoreObtained,
            maxPossibleMarks,
            accuracyPercentage: maxPossibleMarks > 0 ? Math.round(scoreObtained / maxPossibleMarks * 100) : 0,
            responses
        };
    }
    function handleReportSubmission(report) {
        if (!studentName.trim()) return;
        const nextProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateStudentProfileMetrics"])(studentName.trim(), report, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bank$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTION_BANK"]);
        setProfile(nextProfile);
        const chapter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAPTERS_REGISTRY"].find((item)=>item.id === report.chapterId);
        const nextRecord = {
            id: report.submissionId,
            submittedAt: report.submittedAt,
            chapterTitle: chapter?.title ?? report.chapterId,
            totalQuestions: report.totalQuestions,
            scoreObtained: report.scoreObtained,
            maxPossibleMarks: report.maxPossibleMarks,
            accuracyPercentage: report.accuracyPercentage
        };
        const nextRecords = [
            nextRecord,
            ...pastRecords
        ].slice(0, 12);
        setPastRecords(nextRecords);
        localStorage.setItem(`student_records_${studentName.trim().toLowerCase()}`, JSON.stringify(nextRecords));
    }
    async function handleGenerate(filters) {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(filters)
            });
            if (!res.ok) throw new Error("Generate failed");
            const data = await res.json();
            setWorksheet(data);
            if (studentName.trim()) {
                const nextReport = buildMockReportFromWorksheet(data);
                handleReportSubmission(nextReport);
            }
        } catch  {
            setError("Could not generate worksheet. Try again.");
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mx-auto min-h-screen w-full max-w-6xl px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-print mb-6 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm",
                children: studentName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white",
                                    children: studentName.slice(0, 1).toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-[0.22em] text-zinc-400",
                                            children: "Active profile"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-semibold text-zinc-900",
                                            children: studentName
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleProfileSignOut,
                            className: "text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900",
                            children: "Sign Out / Switch Profile"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 228,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 218,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleProfileSubmit,
                    className: "flex flex-col gap-3 sm:flex-row sm:items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "sr-only",
                            htmlFor: "student-name-entry",
                            children: "Student Name"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "student-name-entry",
                            value: profileNameInput,
                            onChange: (event)=>setProfileNameInput(event.target.value),
                            placeholder: "Enter Student Name to Track Performance Progress",
                            className: "h-12 flex-1 rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 241,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "h-12 rounded-xl bg-zinc-900 px-5 text-sm font-medium text-white transition hover:bg-zinc-700",
                            children: "Save"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 237,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            profile && profile.identifiedWeakPoints.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-print mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-700",
                        children: "Weak Points Alert"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: profile.identifiedWeakPoints.map((weakPoint, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-red-200 bg-white/80 px-3 py-2 text-sm text-red-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "⚠️ Critical Blindspot Detected:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    weakPoint.subtopicName,
                                    " — ",
                                    weakPoint.reason,
                                    " Recommended Action: Generate a focused Hard-difficulty worksheet for this specific topic node."
                                ]
                            }, `${weakPoint.chapterId}-${weakPoint.subtopicName}-${index}`, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 265,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 259,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-print mb-8 flex flex-wrap items-end justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-zinc-500",
                                children: "Worksheet generator"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-semibold tracking-tight text-zinc-900",
                                children: "NCERT practice sheets"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    worksheet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>window.print(),
                        className: "rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50",
                        children: "Print / Save PDF"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 281,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "no-print mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 292,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "no-print mb-6 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-[0.22em] text-zinc-400",
                                        children: "Performance map"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold text-zinc-900",
                                        children: "Syllabus Heatmap Tracking"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700",
                                children: profile ? `${profile.worksheetsCompleted} worksheets` : "No profile"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: chapterRows.map((chapter)=>{
                            const chapterStats = profile?.syllabusHeatmap?.[chapter.id] ?? {};
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-zinc-200 bg-zinc-50 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 flex items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold text-zinc-800",
                                                children: chapter.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 315,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-zinc-500",
                                                children: [
                                                    chapter.subtopics.length,
                                                    " nodes"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: chapter.subtopics.map((subtopic)=>{
                                            const stats = chapterStats[subtopic];
                                            const accuracy = stats?.accuracyPercentage ?? 0;
                                            const isUntouched = !stats || stats.timesTested === 0;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                title: isUntouched ? `${subtopic}: Untouched topic area` : `${subtopic}: ${accuracy}% accuracy across ${stats.timesTested} attempts`,
                                                className: `flex h-9 w-9 items-center justify-center rounded-md border text-[10px] font-medium ${getHeatmapCellClass(stats)}`,
                                                children: isUntouched ? "" : `${accuracy}%`
                                            }, `${chapter.id}-${subtopic}`, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, chapter.id, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 313,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            onGenerate: handleGenerate,
                            loading: loading
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WorksheetPreview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            worksheet: worksheet
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 349,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "no-print mt-8 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-[0.22em] text-zinc-400",
                                        children: "Progress archive"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 357,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold text-zinc-900",
                                        children: "Past Records"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 358,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 356,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-zinc-500",
                                children: [
                                    pastRecords.length,
                                    " saved"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this),
                    pastRecords.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-zinc-500",
                        children: "Generate a worksheet with an active student profile to start your record."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 363,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divide-y divide-zinc-100",
                        children: pastRecords.map((record)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-3 py-3 first:pt-0 last:pb-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-zinc-800",
                                                children: record.chapterTitle
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 371,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-zinc-500",
                                                children: [
                                                    new Date(record.submittedAt).toLocaleString(),
                                                    " · ",
                                                    record.totalQuestions,
                                                    " questions"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 372,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 370,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-zinc-900",
                                                children: [
                                                    record.scoreObtained,
                                                    "/",
                                                    record.maxPossibleMarks,
                                                    " marks"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 377,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-zinc-500",
                                                children: [
                                                    record.accuracyPercentage,
                                                    "% accuracy"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 380,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 376,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, record.id, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 369,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 367,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 354,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 215,
        columnNumber: 5
    }, this);
}
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
function FilterPanel({ onGenerate, loading }) {
    const [grade, setGrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("11");
    const [chapter, setChapter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("units-and-measurements");
    const [difficulty, setDifficulty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Mixed");
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(8);
    const [types, setTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        ...ALL_TYPES
    ]);
    const [includeAnswerKey, setIncludeAnswerKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    function toggleType(t) {
        setTypes((prev)=>prev.includes(t) ? prev.filter((x)=>x !== t) : [
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
                includeAnswerKey
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
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-1 text-lg font-semibold text-zinc-900",
                        children: "Generate worksheet"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 50,
                columnNumber: 7
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
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "12",
                                children: "Class 12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 59,
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
                                lineNumber: 89,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 77,
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
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Easy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Medium"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Hard"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        className: "text-sm font-medium text-zinc-700",
                        children: "Question types"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 113,
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
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    t === "MCQ" ? "Multiple choice" : t === "NAT" ? "Numerical" : "Fill in the blank"
                                ]
                            }, t, true, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 112,
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
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 142,
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
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    "Include answer key"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: loading,
                className: "w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-60",
                children: loading ? "Generating…" : "Generate worksheet"
            }, void 0, false, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FilterPanel.tsx",
        lineNumber: 35,
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
"use client";
;
function WorksheetPreview({ worksheet, worksheetId, filters }) {
    if (!worksheet || worksheet.questions.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "no-print rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-12 text-center text-sm font-medium text-zinc-400",
            children: "Choose a chapter and parameters on the filter panel to assemble a worksheet preview."
        }, void 0, false, {
            fileName: "[project]/src/components/WorksheetPreview.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this);
    }
    const chosenDifficulty = filters?.difficulty ?? worksheet.filters.difficulty ?? "Mixed";
    const chosenSubject = filters?.subject ?? worksheet.filters.subject ?? "Physics";
    const chosenGrade = filters?.grade ?? worksheet.filters.grade ?? "11";
    const totalMarks = worksheet.questions.reduce((sum, question)=>sum + question.marks, 0);
    const uniquePrinciples = Array.from(new Map(worksheet.questions.filter((question)=>question.principle).map((question)=>[
            question.principle.id,
            question.principle
        ])).values());
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
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-xs leading-relaxed text-zinc-500",
                        children: "Core governing physics parameters represented in this worksheet."
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 48,
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
                                        lineNumber: 54,
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
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 inline-block rounded border border-zinc-200 bg-zinc-50 px-2 py-1 font-mono text-[11px] text-zinc-900",
                                        children: [
                                            "Governing formula: ",
                                            principle.governingFormula
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, principle.id, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 44,
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
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-0.5 text-2xl font-bold text-zinc-900",
                                children: worksheet.title || "Evaluation Practice Worksheet"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 72,
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
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 68,
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
                                        lineNumber: 80,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    worksheet.questions.length,
                                    " questions"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Difficulty matrix:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 81,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    chosenDifficulty
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Maximum marks:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 82,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    totalMarks,
                                    " marks"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 67,
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
                                            question.subtopic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 rounded-md bg-zinc-100 px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wide text-zinc-700",
                                                children: question.subtopic
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 90,
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
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "whitespace-pre-wrap pl-1 text-sm leading-relaxed text-zinc-800",
                                children: question.stem
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            question.type === "MCQ" && question.options && question.options.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-2.5 pt-1.5 text-sm text-zinc-700 md:grid-cols-2",
                                children: question.options.map((option, optionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center rounded-lg border border-zinc-200 bg-zinc-50/50 p-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 font-mono text-xs font-bold text-zinc-400",
                                                children: [
                                                    String.fromCharCode(65 + optionIndex),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                                lineNumber: 106,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-zinc-800",
                                                children: option
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                                lineNumber: 107,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, option, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 105,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 103,
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
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 h-9 w-full max-w-[200px] rounded-lg border border-zinc-200 bg-zinc-50/30"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this)
                        ]
                    }, question.id || index, true, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-print flex justify-end border-t border-zinc-200 pt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>window.print(),
                    className: "rounded-xl bg-zinc-900 px-5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-sm transition hover:bg-zinc-800",
                    children: "Print / Save PDF"
                }, void 0, false, {
                    fileName: "[project]/src/components/WorksheetPreview.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 124,
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
                        lineNumber: 132,
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
                                            q.answer
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-zinc-600",
                                        children: q.solution
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, q.id, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WorksheetPreview.tsx",
        lineNumber: 42,
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
        const subName = matchedQuestion.subtopic ?? matchedQuestion.topic;
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

//# sourceMappingURL=src_1gu6jla._.js.map