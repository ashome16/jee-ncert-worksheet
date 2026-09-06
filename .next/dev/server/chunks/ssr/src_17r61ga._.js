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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function getPortalType(portalLevel) {
    return portalLevel === "FOUNDATION" ? "FOUNDATION" : "JEE_MAIN_ADVANCED";
}
function getTrackBadgeLabel(trackType) {
    if (trackType === "CONCEPTUAL_QUIZ" || trackType === "CALCULATION_APPLICATION" || trackType === "FUTURE_TECH_LAB") {
        return "[Foundation Quiz]";
    }
    if (trackType === "JEE_MAIN_DRILL") return "[JEE Main Drill]";
    if (trackType === "JEE_ADVANCED_CHALLENGE") return "[JEE Advanced Challenge]";
    return null;
}
const FOUNDATION_TRACKS = [
    "CONCEPTUAL_QUIZ",
    "CALCULATION_APPLICATION",
    "FUTURE_TECH_LAB"
];
const JEE_TRACKS = [
    "JEE_MAIN_DRILL",
    "JEE_ADVANCED_CHALLENGE"
];
function getTrackLabel(trackType) {
    switch(trackType){
        case "CONCEPTUAL_QUIZ":
            return "Conceptual Quizzes";
        case "CALCULATION_APPLICATION":
            return "Calculation Applications";
        case "FUTURE_TECH_LAB":
            return "Future Tech Labs";
        case "JEE_MAIN_DRILL":
            return "JEE Main Practice Drills";
        case "JEE_ADVANCED_CHALLENGE":
            return "JEE Advanced Challenges";
        default:
            return "Unclassified Practice";
    }
}
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
function getChapterMasteryPercent(subtopicsByTrack, chapterStats) {
    const nodes = Object.entries(subtopicsByTrack).flatMap(([trackType, subtopics])=>subtopics.map((subtopic)=>chapterStats[(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHeatmapNodeKey"])(trackType, subtopic)] ?? chapterStats[subtopic]));
    if (nodes.length === 0) return 0;
    const masteredCount = nodes.filter((stats)=>(stats?.accuracyPercentage ?? 0) >= 75).length;
    return Math.round(masteredCount / nodes.length * 100);
}
function Home() {
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [worksheet, setWorksheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [studentName, setStudentName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pastRecords, setPastRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [expandedChapters, setExpandedChapters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [expandedArchiveChapters, setExpandedArchiveChapters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [portalLevel, setPortalLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("JEE_PREP");
    const [activeProfileTab, setActiveProfileTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("HEATMAP");
    const [hideAnswerKeyUntilSubmit, setHideAnswerKeyUntilSubmit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hasSubmittedCurrentWorksheet, setHasSubmittedCurrentWorksheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeToast, setActiveToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeFilters, setActiveFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        grade: "11",
        subject: "Physics",
        chapterId: "p11_01",
        difficulty: "Mixed",
        trackType: "JEE_MAIN_DRILL",
        preparationLevel: "JEE_MAIN_ADVANCED",
        count: 8,
        types: [
            "MCQ",
            "NAT",
            "FITB",
            "MULTI_CORRECT"
        ]
    });
    function triggerToast(message, type) {
        setActiveToast({
            message,
            type,
            id: Date.now()
        });
    }
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!profile || profile.identifiedWeakPoints.length === 0) return;
        // Force open any chapter accordion holding an active critical blind spot on load
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setExpandedChapters((prev)=>{
            const next = {
                ...prev
            };
            profile.identifiedWeakPoints.forEach((weakPoint)=>{
                next[weakPoint.chapterId] = true;
            });
            return next;
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        profile?.studentName
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!activeToast) return;
        const timeoutId = window.setTimeout(()=>setActiveToast(null), 4200);
        return ()=>window.clearTimeout(timeoutId);
    }, [
        activeToast
    ]);
    const chapterRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAPTERS_REGISTRY"].map((chapter)=>{
            const questionSubtopics = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bank$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTION_BANK"].filter((question)=>question.chapter === chapter.id || question.chapterId === chapter.id).map((question)=>question.subtopic ?? question.topic ?? "General")));
            return {
                id: chapter.id,
                title: chapter.title,
                grade: chapter.grade,
                subject: chapter.subject,
                category: chapter.category,
                subtopics: questionSubtopics.length ? questionSubtopics : Array.from({
                    length: chapter.nodeCount
                }, (_, index)=>`Node ${index + 1}`),
                subtopicsByTrack: (()=>{
                    const trackTypes = chapter.category === "FOUNDATION" ? FOUNDATION_TRACKS : JEE_TRACKS;
                    const groups = Object.fromEntries(trackTypes.map((track)=>[
                            track,
                            []
                        ]));
                    const chapterQuestions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bank$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTION_BANK"].filter((question)=>question.chapter === chapter.id || question.chapterId === chapter.id);
                    chapterQuestions.forEach((question)=>{
                        const subtopic = question.subtopic ?? question.topic ?? "General";
                        const track = trackTypes.includes(question.trackType) ? question.trackType : trackTypes[0];
                        if (!groups[track].includes(subtopic)) groups[track].push(subtopic);
                    });
                    if (Object.values(groups).every((subtopics)=>subtopics.length === 0)) {
                        groups[trackTypes[0]] = questionSubtopics.length ? questionSubtopics : Array.from({
                            length: chapter.nodeCount
                        }, (_, index)=>`Node ${index + 1}`);
                    }
                    return groups;
                })()
            };
        }), []);
    const sortedChapterRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return [
            ...chapterRows
        ].sort((chapterA, chapterB)=>{
            const chapterAMetrics = profile?.syllabusHeatmap?.[chapterA.id] ?? {};
            const chapterBMetrics = profile?.syllabusHeatmap?.[chapterB.id] ?? {};
            const lastTestedA = Object.values(chapterAMetrics).reduce((latest, node)=>node.lastTested > latest ? node.lastTested : latest, "");
            const lastTestedB = Object.values(chapterBMetrics).reduce((latest, node)=>node.lastTested > latest ? node.lastTested : latest, "");
            if (!lastTestedA && !lastTestedB) return 0;
            if (!lastTestedA) return 1;
            if (!lastTestedB) return -1;
            return new Date(lastTestedB).getTime() - new Date(lastTestedA).getTime();
        });
    }, [
        chapterRows,
        profile
    ]);
    const visibleChapterRows = sortedChapterRows.filter((chapter)=>chapter.category === portalLevel);
    if (!isMounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto min-h-screen w-full max-w-6xl px-4 py-8"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 269,
            columnNumber: 12
        }, this);
    }
    function handleInitializeStudentProfile(trimmedName) {
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
        setPastRecords([]);
    }
    // Reset an active student session heatmap while preserving their history logs
    function handleResetStudentHeatmap(currentStudentName) {
        if (!currentStudentName) return;
        const confirmReset = window.confirm(`Are you sure you want to completely clear the syllabus heatmap matrix blocks for "${currentStudentName}"? This will clear all green master metrics and yellow blindspot parameters.`);
        if (!confirmReset) return;
        const storageKey = `student_profile_${currentStudentName.trim().toLowerCase()}`;
        const profileRaw = localStorage.getItem(storageKey);
        if (profileRaw) {
            const profileData = JSON.parse(profileRaw);
            profileData.syllabusHeatmap = {};
            profileData.identifiedWeakPoints = [];
            profileData.worksheetsCompleted = 0;
            profileData.overallAccuracy = 0;
            localStorage.setItem(storageKey, JSON.stringify(profileData));
            setProfile(profileData);
            triggerToast(`Heatmap progress for "${currentStudentName}" has been reset.`, "SUCCESS");
        }
    }
    // Completely destroy and delete a student profile ledger permanently from browser local storage
    function handlePermanentDeleteProfile(currentStudentName) {
        if (!currentStudentName) return;
        const confirmDestroy = window.confirm(`🚨 CRITICAL ACTION: Permanently destroy the entire data footprint, worksheet records, and performance indexes for "${currentStudentName}"? This action is absolute and cannot be undone.`);
        if (!confirmDestroy) return;
        const storageKey = `student_profile_${currentStudentName.trim().toLowerCase()}`;
        localStorage.removeItem(storageKey);
        localStorage.removeItem(`student_records_${currentStudentName.trim().toLowerCase()}`);
        localStorage.removeItem("active_student_session");
        setStudentName("");
        setProfile(null);
        setPastRecords([]);
        setWorksheet(null);
        triggerToast("Student profile account metrics cleared successfully.", "SUCCESS");
    }
    function handleClearAllSubmissionReports(currentStudent) {
        const normalizedStudent = currentStudent.trim();
        if (!normalizedStudent) return;
        const recordsKey = `student_records_${normalizedStudent.toLowerCase()}`;
        localStorage.setItem(recordsKey, "[]");
        setPastRecords([]);
        const profileKey = `student_profile_${normalizedStudent.toLowerCase()}`;
        const profileRaw = localStorage.getItem(profileKey);
        if (profileRaw) {
            const profileData = JSON.parse(profileRaw);
            const clearedProfile = {
                ...profileData,
                syllabusHeatmap: {},
                identifiedWeakPoints: [],
                worksheetsCompleted: 0,
                overallAccuracy: 0
            };
            localStorage.setItem(profileKey, JSON.stringify(clearedProfile));
            setProfile(clearedProfile);
        }
        setActiveProfileTab("REPORTS");
        triggerToast("History archive ledger cleared successfully.", "SUCCESS");
    }
    function buildMockReportFromWorksheet(currentWorksheet) {
        const responses = currentWorksheet.questions.map((question, index)=>{
            const isCorrect = (index + question.marks) % 2 === 0;
            const resolvedQuestionText = question.text ?? question.stem ?? "Untitled question";
            const resolvedStudentAnswer = isCorrect ? question.correctAnswer ?? question.answer ?? "" : "Not attempted";
            const resolvedCorrectAnswer = question.correctAnswer ?? question.answer ?? "";
            return {
                questionId: question.id,
                questionText: resolvedQuestionText,
                studentAnswer: resolvedStudentAnswer,
                correctAnswer: resolvedCorrectAnswer,
                isCorrect,
                marksAwarded: isCorrect ? question.marks : 0
            };
        });
        const scoreObtained = responses.reduce((sum, response)=>sum + response.marksAwarded, 0);
        const maxPossibleMarks = currentWorksheet.questions.reduce((sum, question)=>sum + question.marks, 0);
        return {
            submissionId: crypto.randomUUID(),
            studentId: studentName.trim(),
            portalType: getPortalType(portalLevel),
            subject: currentWorksheet.filters.subject,
            worksheetId: currentWorksheet.id,
            chapterId: currentWorksheet.filters.chapter,
            chapterTitle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAPTERS_REGISTRY"].find((chapter)=>chapter.id === currentWorksheet.filters.chapter)?.title ?? currentWorksheet.filters.chapter,
            trackType: currentWorksheet.filters.trackTypes?.[0] ?? "CONCEPTUAL_QUIZ",
            generatedAt: currentWorksheet.generatedAt,
            submittedAt: new Date().toISOString(),
            totalQuestions: currentWorksheet.questions.length,
            scoreObtained,
            maxPossibleMarks,
            scoreMarks: scoreObtained,
            totalMarks: maxPossibleMarks,
            accuracyPercentage: maxPossibleMarks > 0 ? Math.round(scoreObtained / maxPossibleMarks * 100) : 0,
            responses
        };
    }
    function handleReportSubmission(report) {
        if (hasSubmittedCurrentWorksheet) return;
        const activeStudentSession = studentName.trim();
        if (!activeStudentSession) return;
        setHasSubmittedCurrentWorksheet(true);
        const portalType = report.portalType ?? getPortalType(portalLevel);
        const activeTrackKey = activeFilters.trackType;
        const trackType = activeTrackKey;
        const enrichedReport = {
            ...report,
            studentId: activeStudentSession,
            portalType,
            trackType
        };
        const nextProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateStudentProfileMetrics"])(studentName.trim(), enrichedReport, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bank$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTION_BANK"]);
        setProfile(nextProfile);
        const chapter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAPTERS_REGISTRY"].find((item)=>item.id === report.chapterId);
        const nextRecord = {
            id: report.submissionId,
            studentId: activeStudentSession,
            chapterId: report.chapterId,
            subject: report.subject,
            submittedAt: report.submittedAt,
            chapterTitle: report.chapterTitle ?? chapter?.title ?? report.chapterId,
            totalQuestions: report.totalQuestions,
            scoreObtained: report.scoreObtained,
            maxPossibleMarks: report.maxPossibleMarks,
            accuracyPercentage: report.accuracyPercentage,
            portalType,
            trackType,
            responses: report.responses
        };
        const nextRecords = [
            nextRecord,
            ...pastRecords
        ].slice(0, 12);
        setPastRecords(nextRecords);
        localStorage.setItem(`student_records_${studentName.trim().toLowerCase()}`, JSON.stringify(nextRecords));
        // Keep the profile view aligned with the portal used by this assessment.
        setPortalLevel(portalType === "FOUNDATION" ? "FOUNDATION" : "JEE_PREP");
        setActiveProfileTab("REPORTS");
        triggerToast(`Assessment processed! Checked against answer keys. Accuracy: ${report.accuracyPercentage}%.`, "SUCCESS");
    }
    function handleDeletePastRecordLog(submissionIdToWipe) {
        const activeStudentSession = studentName.trim();
        if (!activeStudentSession) return;
        const confirmAction = window.confirm("Are you sure you want to permanently delete this specific worksheet performance record?");
        if (!confirmAction) return;
        const recordsKey = `student_records_${activeStudentSession.toLowerCase()}`;
        const savedReportsList = JSON.parse(localStorage.getItem(recordsKey) || "[]");
        const reportToDelete = savedReportsList.find((record)=>record.id === submissionIdToWipe);
        if (!reportToDelete) return;
        const nextRecords = savedReportsList.filter((record)=>record.id !== submissionIdToWipe);
        setPastRecords(nextRecords);
        localStorage.setItem(recordsKey, JSON.stringify(nextRecords));
        const profileKey = `student_profile_${activeStudentSession.toLowerCase()}`;
        const profileRaw = localStorage.getItem(profileKey);
        if (profileRaw) {
            const existingProfile = JSON.parse(profileRaw);
            const emptyProfile = {
                ...existingProfile,
                worksheetsCompleted: 0,
                overallAccuracy: 0,
                syllabusHeatmap: {},
                identifiedWeakPoints: []
            };
            // Rebuild from responses so heatmap cells and weak-point flags never retain deleted work.
            localStorage.setItem(profileKey, JSON.stringify(emptyProfile));
            const rebuiltProfile = nextRecords.filter((record)=>Boolean(record.chapterId && record.responses)).sort((recordA, recordB)=>new Date(recordA.submittedAt).getTime() - new Date(recordB.submittedAt).getTime()).reduce((currentProfile, record)=>{
                localStorage.setItem(profileKey, JSON.stringify(currentProfile));
                const archivedReport = {
                    submissionId: record.id,
                    studentId: record.studentId ?? activeStudentSession,
                    portalType: record.portalType ?? getPortalType(portalLevel),
                    subject: record.subject ?? "Unknown Subject",
                    chapterTitle: record.chapterTitle,
                    trackType: record.trackType ?? "CONCEPTUAL_QUIZ",
                    generatedAt: record.submittedAt,
                    scoreMarks: record.scoreObtained,
                    totalMarks: record.maxPossibleMarks,
                    worksheetId: `archived-${record.id}`,
                    chapterId: record.chapterId,
                    submittedAt: record.submittedAt,
                    totalQuestions: record.totalQuestions,
                    scoreObtained: record.scoreObtained,
                    maxPossibleMarks: record.maxPossibleMarks,
                    accuracyPercentage: record.accuracyPercentage,
                    responses: record.responses
                };
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateStudentProfileMetrics"])(activeStudentSession, archivedReport, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bank$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTION_BANK"]);
            }, emptyProfile);
            const synchronizedProfile = {
                ...rebuiltProfile,
                worksheetsCompleted: nextRecords.length
            };
            localStorage.setItem(profileKey, JSON.stringify(synchronizedProfile));
            setProfile(synchronizedProfile);
        }
        triggerToast("Record cleared and profile statistics synchronized.", "SUCCESS");
    }
    const activeStudentSession = studentName.trim();
    const activePortalType = getPortalType(portalLevel);
    const profileDataState = profile ?? {
        studentName: studentName || "Guest",
        createdAt: new Date().toISOString(),
        worksheetsCompleted: 0,
        overallAccuracy: 0,
        syllabusHeatmap: {},
        identifiedWeakPoints: []
    };
    const worksheetFootprint = Number(profileDataState?.worksheetsCompleted ?? 0);
    const hasSufficientTelemetry = Number.isFinite(worksheetFootprint) && worksheetFootprint >= 3;
    const filteredPastRecords = (pastRecords ?? []).filter((record)=>(record.studentId ?? "").toLowerCase() === activeStudentSession.toLowerCase() && record.portalType === activePortalType);
    const groupedPastRecords = filteredPastRecords.reduce((subjectGroups, record)=>{
        const subject = record.subject ?? "Unknown Subject";
        const chapter = record.chapterTitle ?? "Unknown Chapter";
        const track = record.trackType ?? (activePortalType === "FOUNDATION" ? "CONCEPTUAL_QUIZ" : "JEE_MAIN_DRILL");
        const subjectGroup = subjectGroups[subject] ?? {};
        const trackGroup = subjectGroup[track] ?? {};
        trackGroup[chapter] = [
            ...trackGroup[chapter] ?? [],
            record
        ];
        subjectGroup[track] = trackGroup;
        subjectGroups[subject] = subjectGroup;
        return subjectGroups;
    }, {});
    async function handleGenerate() {
        setActiveToast(null);
        // A newly generated worksheet must start with its answer key locked.
        setHasSubmittedCurrentWorksheet(false);
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    subject: activeFilters.subject,
                    grade: activeFilters.grade,
                    chapter: activeFilters.chapterId,
                    difficulty: activeFilters.difficulty,
                    types: activeFilters.types,
                    count: activeFilters.count,
                    includeAnswerKey: true,
                    preparationLevel: activeFilters.preparationLevel,
                    trackTypes: [
                        activeFilters.trackType
                    ]
                })
            });
            if (!res.ok) throw new Error("Generate failed");
            const data = await res.json();
            setWorksheet(data);
            if (studentName.trim()) {
                const nextReport = buildMockReportFromWorksheet(data);
                handleReportSubmission(nextReport);
                // The generated worksheet is not a student submission yet.
                setHasSubmittedCurrentWorksheet(false);
            }
        } catch  {
            setError("Could not generate worksheet. Try again.");
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mx-auto min-h-screen w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex items-end justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-xs font-bold uppercase tracking-[0.24em] text-sky-700",
                                children: "Study command center"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 637,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-black tracking-tight text-zinc-950 sm:text-3xl",
                                children: "NCERT worksheet workspace"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 638,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 max-w-2xl text-sm text-zinc-500",
                                children: "Build targeted practice, review mastery, and keep every attempt organized by portal."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 639,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 636,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-500 shadow-sm sm:inline-flex",
                        children: "Live workspace"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 641,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 635,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 space-y-5 rounded-3xl border border-zinc-200/90 bg-white/95 p-4 text-left shadow-[0_22px_60px_-30px_rgba(15,23,42,0.38)] sm:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-between items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-extrabold text-zinc-900 tracking-tight",
                                        children: "Active Student Identity Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 649,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-zinc-500 mt-0.5",
                                        children: !studentName ? "Establish a localized student session tracker to log performance metrics analytics." : `Active tracking session registry locked onto student account node.`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 650,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 648,
                                columnNumber: 11
                            }, this),
                            studentName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 text-xs font-semibold no-print",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleResetStudentHeatmap(studentName),
                                        className: "text-amber-600 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1.5 rounded-xl transition",
                                        children: "Reset Profile Heatmap"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 659,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleClearAllSubmissionReports(studentName),
                                        className: "text-orange-700 bg-orange-50 hover:bg-orange-100 border border-orange-200 px-3 py-1.5 rounded-xl transition",
                                        children: "Clear Submission Reports"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 662,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handlePermanentDeleteProfile(studentName),
                                        className: "text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 px-3 py-1.5 rounded-xl transition",
                                        children: "Delete Account Footprint"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 665,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleProfileSignOut(),
                                        className: "text-zinc-500 bg-zinc-100 hover:bg-zinc-200 px-3 py-1.5 rounded-xl transition",
                                        children: "Sign Out"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 668,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 658,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 647,
                        columnNumber: 9
                    }, this),
                    !studentName ? /* 📭 PROFILE SIGN IN INPUT STATE FORM CARD */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2 max-w-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "student-name-entry",
                            type: "text",
                            placeholder: "Type student name (e.g., sharvah) and press Enter...",
                            onKeyDown: (e)=>{
                                if (e.key === "Enter" && e.currentTarget.value.trim()) {
                                    handleInitializeStudentProfile(e.currentTarget.value.trim());
                                }
                            },
                            className: "border border-zinc-200 p-3 w-full rounded-xl bg-zinc-50/50 text-sm font-medium focus:outline-none focus:border-zinc-400 placeholder-zinc-400"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 678,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 677,
                        columnNumber: 11
                    }, this) : /* 📈 MOUNTED CURRENT ACTIVE PROFILE ANALYTICS SCORECARD INSIDE PROFILE CARD */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 border-t border-zinc-100 pt-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex max-w-xl items-center space-x-3 rounded-2xl bg-zinc-950 p-4 text-white shadow-lg shadow-zinc-900/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center font-black text-sm uppercase text-zinc-300 font-mono",
                                        children: studentName.slice(0, 2)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 694,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-extrabold tracking-wide text-white",
                                                children: [
                                                    "Student Account: ",
                                                    studentName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 698,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] text-zinc-400 font-medium font-mono mt-0.5",
                                                children: [
                                                    "📊 Global Accuracy: ",
                                                    profile?.overallAccuracy ?? 0,
                                                    "% • Completed: ",
                                                    profile?.worksheetsCompleted ?? 0,
                                                    " sheets"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 699,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 697,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 693,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-xs font-bold uppercase tracking-widest text-zinc-500",
                                        children: "Choose your study portal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 706,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-3 md:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setPortalLevel("FOUNDATION"),
                                                "aria-pressed": portalLevel === "FOUNDATION",
                                                className: `rounded-xl border p-4 text-left transition ${portalLevel === "FOUNDATION" ? "border-amber-500 bg-amber-50 shadow-md ring-2 ring-amber-200" : "border-zinc-200 bg-white hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-50/40 hover:shadow-sm"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-sm font-extrabold text-zinc-900",
                                                        children: "Level 1: JEE Foundation Hub"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 720,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-1 block text-xs text-zinc-500",
                                                        children: "Grades 8, 9, 10 • CBSE/ICSE Science & Maths"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 723,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 710,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setPortalLevel("JEE_PREP"),
                                                "aria-pressed": portalLevel === "JEE_PREP",
                                                className: `rounded-xl border p-4 text-left transition ${portalLevel === "JEE_PREP" ? "border-sky-500 bg-sky-50 shadow-md ring-2 ring-sky-200" : "border-zinc-200 bg-white hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50/40 hover:shadow-sm"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-sm font-extrabold text-zinc-900",
                                                        children: "Level 2: JEE Main / JEE Advanced"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 737,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-1 block text-xs text-zinc-500",
                                                        children: "Grades 11, 12 • Core Entrance Blueprints"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 740,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 727,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 709,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 705,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "no-print flex overflow-x-auto border-b border-zinc-200 text-xs font-bold uppercase tracking-wider text-zinc-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveProfileTab("HEATMAP"),
                                        className: `shrink-0 border-b-2 px-1 pb-3 transition ${activeProfileTab === "HEATMAP" ? "border-zinc-900 text-zinc-900" : "border-transparent hover:text-zinc-600"}`,
                                        children: "📊 Syllabus Performance Heatmap"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 748,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveProfileTab("REPORTS"),
                                        className: `ml-5 shrink-0 border-b-2 px-1 pb-3 transition ${activeProfileTab === "REPORTS" ? "border-zinc-900 text-zinc-900" : "border-transparent hover:text-zinc-600"}`,
                                        children: [
                                            "📝 Submitted Evaluation Reports (",
                                            filteredPastRecords.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 755,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 747,
                                columnNumber: 13
                            }, this),
                            activeProfileTab === "HEATMAP" ? hasSufficientTelemetry ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 sm:p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-bold text-zinc-700 uppercase tracking-widest flex items-center",
                                                children: "📊 Syllabus Coverage Performance Heatmap Matrices"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 768,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-mono text-zinc-400 font-bold bg-white border px-2 py-0.5 rounded shadow-sm",
                                                children: [
                                                    "Registry Account Node: ",
                                                    studentName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 771,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 767,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 pt-1",
                                        children: visibleChapterRows.map((chapter)=>{
                                            const chapterMetrics = profile?.syllabusHeatmap?.[chapter.id] ?? {};
                                            const trackTypes = activeFilters.preparationLevel === "FOUNDATION" ? FOUNDATION_TRACKS : JEE_TRACKS;
                                            const availableQuestionsCount = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bank$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTION_BANK"].filter((question)=>(question.chapterId === chapter.id || question.chapter === chapter.id) && Boolean(question.trackType && trackTypes.includes(question.trackType))).length;
                                            const masteryPercent = getChapterMasteryPercent(chapter.subtopicsByTrack, chapterMetrics);
                                            const isExpanded = expandedChapters[chapter.id] ?? false;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setExpandedChapters((prev)=>({
                                                                    ...prev,
                                                                    [chapter.id]: !isExpanded
                                                                })),
                                                        className: "flex w-full items-center justify-between gap-3 p-3 text-left transition hover:bg-zinc-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "block text-xs font-semibold text-zinc-800",
                                                                        children: chapter.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 802,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-0.5 block text-[10px] font-medium text-zinc-400",
                                                                        children: [
                                                                            "Class ",
                                                                            chapter.grade,
                                                                            " · ",
                                                                            chapter.subject
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 803,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 801,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-zinc-400 font-mono text-[10px]",
                                                                        children: [
                                                                            availableQuestionsCount,
                                                                            " items available"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 808,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-24 h-2 bg-zinc-200 rounded-full overflow-hidden",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-full bg-emerald-500 rounded-full transition-all",
                                                                            style: {
                                                                                width: `${masteryPercent}%`
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 812,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 811,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-zinc-400 font-mono text-[10px] w-8 text-right",
                                                                        children: [
                                                                            masteryPercent,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 817,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-zinc-400 text-xs",
                                                                        children: isExpanded ? "▲" : "▼"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 818,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 807,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 794,
                                                        columnNumber: 27
                                                    }, this),
                                                    isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3 border-l border-zinc-100 pb-2 pl-2 pt-2",
                                                        children: trackTypes.map((trackKey)=>{
                                                            const matchingMetrics = Object.entries(chapterMetrics).filter(([key])=>key.startsWith(`${trackKey}:`)).map(([, stats])=>stats);
                                                            const timesTested = matchingMetrics.reduce((total, stats)=>total + stats.timesTested, 0);
                                                            const correctAnswers = matchingMetrics.reduce((total, stats)=>total + stats.correctAnswers, 0);
                                                            const nodeStats = timesTested > 0 ? {
                                                                subtopicName: getTrackLabel(trackKey),
                                                                timesTested,
                                                                correctAnswers,
                                                                accuracyPercentage: Math.round(correctAnswers / timesTested * 100),
                                                                lastTested: ""
                                                            } : undefined;
                                                            const availableQuestionsCount = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bank$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTION_BANK"].filter((question)=>(question.chapterId === chapter.id || question.chapter === chapter.id) && question.trackType === trackKey).length;
                                                            const accuracy = nodeStats?.accuracyPercentage ?? 0;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between py-1 text-[11px] font-medium",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-zinc-500",
                                                                        children: getTrackLabel(trackKey)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 855,
                                                                        columnNumber: 37
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center space-x-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-mono text-[10px] text-zinc-400",
                                                                                children: [
                                                                                    "(",
                                                                                    availableQuestionsCount,
                                                                                    " items available)"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/page.tsx",
                                                                                lineNumber: 857,
                                                                                columnNumber: 39
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                title: nodeStats ? `Mastery: ${accuracy}% accurate across ${timesTested} questions` : "No activity recorded yet",
                                                                                className: `flex h-6 w-6 items-center justify-center rounded-md border font-mono text-[9px] font-bold shadow-sm transition-all duration-300 ${availableQuestionsCount === 0 ? "cursor-not-allowed select-none border-zinc-100 bg-zinc-50 text-zinc-300" : !nodeStats ? "border-zinc-200 bg-zinc-100 text-zinc-400 hover:bg-zinc-200" : getHeatmapCellClass(nodeStats)}`,
                                                                                children: availableQuestionsCount === 0 ? "O" : nodeStats ? `${accuracy}%` : "-"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/page.tsx",
                                                                                lineNumber: 858,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 856,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                ]
                                                            }, trackKey, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 854,
                                                                columnNumber: 35
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 823,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, chapter.id, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 793,
                                                columnNumber: 25
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 776,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 766,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto max-w-lg text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 text-3xl",
                                            "aria-hidden": "true",
                                            children: "⏳"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 888,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-zinc-900",
                                            children: "Insufficient Performance Telemetry"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 889,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-zinc-500",
                                            children: "The platform requires at least 3 completed evaluated worksheet reports to formulate honest diagnostics."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 890,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-mono font-bold text-zinc-600",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    worksheetFootprint,
                                                    " / 3 Sheets"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 894,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 893,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 887,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 886,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: filteredPastRecords.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "py-4 text-center text-sm font-medium text-zinc-400",
                                    children: "Generate and evaluate your first worksheet to start recording submission reports."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 902,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: Object.entries(groupedPastRecords ?? {}).map(([subject, chapters])=>{
                                        // Determine the matching visual icon key pair dynamically
                                        const subjectIcon = subject === "Physics" ? "⚡" : subject === "Chemistry" ? "🧪" : subject === "Biology" ? "🧬" : "📐";
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "flex items-center gap-1.5 border-b border-zinc-100 pb-1 pl-1 text-xs font-black uppercase tracking-widest text-zinc-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: subjectIcon
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 917,
                                                            columnNumber: 27
                                                        }, this),
                                                        " ",
                                                        subject,
                                                        " Archive Ledger"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 916,
                                                    columnNumber: 25
                                                }, this),
                                                Object.entries(chapters ?? {}).map(([trackType, trackChapters])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 rounded-lg border border-zinc-100 bg-white/60 p-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "px-1 text-[11px] font-bold uppercase tracking-wider text-sky-700",
                                                                children: getTrackLabel(trackType)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 921,
                                                                columnNumber: 29
                                                            }, this),
                                                            Object.entries(trackChapters ?? {}).map(([chapterTitle, records])=>{
                                                                const archiveKey = `${subject}-${trackType}-${chapterTitle}`;
                                                                const isExpanded = expandedArchiveChapters[archiveKey] ?? false;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-xl border border-zinc-200 bg-zinc-50 p-3.5 text-xs",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>setExpandedArchiveChapters((previous)=>({
                                                                                        ...previous,
                                                                                        [archiveKey]: !isExpanded
                                                                                    })),
                                                                            className: "flex w-full items-center justify-between gap-3 text-left",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm font-bold text-zinc-800",
                                                                                    children: chapterTitle
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 940,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-mono text-[10px] text-zinc-400",
                                                                                    children: [
                                                                                        records?.length ?? 0,
                                                                                        " attempts ",
                                                                                        isExpanded ? "▲" : "▼"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 941,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 930,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "mt-2 space-y-2 border-t border-zinc-200 pt-2",
                                                                            children: (records ?? []).map((record)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    className: "flex items-center justify-between gap-3 rounded-lg border border-zinc-200 bg-white p-2.5 shadow-sm",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-medium text-zinc-600",
                                                                                            children: [
                                                                                                new Date(record.submittedAt).toLocaleString(),
                                                                                                " · ",
                                                                                                getTrackBadgeLabel(record.trackType) ?? record.trackType ?? "Track unavailable",
                                                                                                " · Score: ",
                                                                                                record.scoreObtained,
                                                                                                "/",
                                                                                                record.maxPossibleMarks,
                                                                                                " marks (",
                                                                                                record.accuracyPercentage,
                                                                                                "%)"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/page.tsx",
                                                                                            lineNumber: 949,
                                                                                            columnNumber: 43
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            onClick: ()=>handleDeletePastRecordLog(record.id),
                                                                                            className: "shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] font-bold text-red-600 transition hover:bg-red-50",
                                                                                            children: "Delete"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/page.tsx",
                                                                                            lineNumber: 952,
                                                                                            columnNumber: 43
                                                                                        }, this)
                                                                                    ]
                                                                                }, record.id, true, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 948,
                                                                                    columnNumber: 41
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 946,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, archiveKey, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 929,
                                                                    columnNumber: 33
                                                                }, this);
                                                            })
                                                        ]
                                                    }, trackType, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 920,
                                                        columnNumber: 27
                                                    }, this))
                                            ]
                                        }, subject, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 915,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 906,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 900,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 692,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 646,
                columnNumber: 7
            }, this),
            profile && hasSufficientTelemetry && profile.identifiedWeakPoints.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-print mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-700",
                        children: "Weak Points Alert"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 981,
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
                                        lineNumber: 987,
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
                                lineNumber: 986,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 984,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 980,
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
                                lineNumber: 996,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-semibold tracking-tight text-zinc-900",
                                children: "NCERT practice sheets"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 997,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 995,
                        columnNumber: 9
                    }, this),
                    worksheet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>window.print(),
                        className: "rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50",
                        children: "Print / Save PDF"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1002,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 994,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "no-print mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1013,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm my-6 flex justify-between items-center text-left no-print",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-zinc-900",
                                children: "📊 JoSAA Seat Predictor & Advisory Portal"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1021,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-zinc-500 mt-0.5",
                                children: "Review your estimated JEE Advanced All India Ranks (AIR), check matching IIT program cutoffs, view tuition waivers, and track startup incubator tie-ups on a dedicated view panel page."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1022,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1020,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/predictor",
                        className: "bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold py-3 px-5 rounded-xl shadow-sm transition-all whitespace-nowrap tracking-wide",
                        children: "Launch Predictor Page →"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1028,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1019,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            activeFilters: activeFilters,
                            onUpdateFilters: setActiveFilters,
                            onGenerate: handleGenerate,
                            loading: loading,
                            hideAnswerKeyUntilSubmit: hideAnswerKeyUntilSubmit,
                            setHideAnswerKeyUntilSubmit: setHideAnswerKeyUntilSubmit,
                            clearActiveToast: ()=>setActiveToast(null)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1038,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1037,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WorksheetPreview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            worksheet: worksheet,
                            studentId: studentName,
                            worksheetId: worksheet?.id,
                            filters: worksheet ? {
                                difficulty: worksheet.filters.difficulty,
                                subject: worksheet.filters.subject,
                                grade: worksheet.filters.grade
                            } : undefined,
                            hideAnswerKeyUntilSubmit: hideAnswerKeyUntilSubmit,
                            hasSubmittedCurrentWorksheet: hasSubmittedCurrentWorksheet,
                            activeToast: activeToast,
                            onCloseToast: ()=>setActiveToast(null),
                            onSubmitEvaluation: handleReportSubmission
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1049,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1048,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1036,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 634,
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
"use client";
;
;
function FilterPanel({ activeFilters, onUpdateFilters, onGenerate, hideAnswerKeyUntilSubmit, setHideAnswerKeyUntilSubmit, clearActiveToast, loading }) {
    // 🔍 SANITIZED FILTERING MATRIX: Strips out checkmarks or emojis to guarantee clean matches
    const filteredChaptersList = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAPTERS_REGISTRY"].filter((ch)=>{
        const cleanActiveSubject = activeFilters.subject.replace(/[^a-zA-Z]/g, "").trim().toLowerCase();
        const cleanChSubject = ch.subject.replace(/[^a-zA-Z]/g, "").trim().toLowerCase();
        const matchesGrade = ch.grade === activeFilters.grade;
        const matchesSubject = cleanChSubject === cleanActiveSubject;
        const matchesLevel = activeFilters.preparationLevel === "FOUNDATION" ? ch.category === "FOUNDATION" : ch.category === "JEE_PREP";
        return matchesGrade && matchesSubject && matchesLevel;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "no-print space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 text-left shadow-sm lg:sticky lg:top-6",
        onSubmit: (event)=>{
            event.preventDefault();
            clearActiveToast();
            onGenerate();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase",
                        children: "Config Parameters Command Panel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-0.5 text-xl font-black text-zinc-900",
                        children: "Generate Worksheet"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-3 rounded-xl border bg-zinc-50 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        id: "hide-key-toggle-panel",
                        checked: hideAnswerKeyUntilSubmit,
                        onChange: (event)=>setHideAnswerKeyUntilSubmit(event.target.checked),
                        className: "h-4 w-4 cursor-pointer rounded accent-zinc-900"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "hide-key-toggle-panel",
                        className: "cursor-pointer select-none text-xs font-bold uppercase tracking-wide text-zinc-700",
                        children: "🔒 Hide Answer Key Until Submitted"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400",
                        children: "Preparation Level"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 text-xs font-bold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onUpdateFilters({
                                        ...activeFilters,
                                        preparationLevel: "FOUNDATION",
                                        grade: "8",
                                        subject: "Biology",
                                        chapterId: "",
                                        trackType: "CONCEPTUAL_QUIZ"
                                    }),
                                className: `rounded-xl border p-2.5 text-center transition ${activeFilters.preparationLevel === "FOUNDATION" ? "border-zinc-900 bg-zinc-900 text-white shadow" : "bg-white text-zinc-600 hover:bg-zinc-50"}`,
                                children: "Foundation Track"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onUpdateFilters({
                                        ...activeFilters,
                                        preparationLevel: "JEE_MAIN_ADVANCED",
                                        grade: "12",
                                        subject: "Physics",
                                        chapterId: "",
                                        trackType: "JEE_MAIN_DRILL"
                                    }),
                                className: `rounded-xl border p-2.5 text-center transition ${activeFilters.preparationLevel === "JEE_MAIN_ADVANCED" ? "border-zinc-900 bg-zinc-900 text-white shadow" : "bg-white text-zinc-600 hover:bg-zinc-50"}`,
                                children: "JEE Main / Advanced"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400",
                        children: "Target Grade Level"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: activeFilters.grade,
                        onChange: (event)=>onUpdateFilters({
                                ...activeFilters,
                                grade: event.target.value,
                                chapterId: ""
                            }),
                        className: "w-full rounded-xl border border-zinc-200 bg-zinc-50/50 p-2.5 text-sm font-semibold text-zinc-800 focus:border-zinc-400 focus:outline-none",
                        children: activeFilters.preparationLevel === "FOUNDATION" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "8",
                                    children: "Grade 8 (Foundational)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FilterPanel.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "9",
                                    children: "Grade 9 (Foundational)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FilterPanel.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "10",
                                    children: "Grade 10 (Foundational)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FilterPanel.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FilterPanel.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "11",
                                    children: "Class 11 (JEE Prep)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FilterPanel.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "12",
                                    children: "Class 12 (JEE Prep)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FilterPanel.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FilterPanel.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400",
                        children: "Select Subject"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: activeFilters.subject,
                        onChange: (event)=>onUpdateFilters({
                                ...activeFilters,
                                subject: event.target.value,
                                chapterId: ""
                            }),
                        className: "w-full rounded-xl border border-zinc-200 bg-zinc-50/50 p-2.5 text-sm font-semibold text-zinc-800 focus:border-zinc-400 focus:outline-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Physics",
                                children: "⚡ Physics"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Chemistry",
                                children: "🧪 Chemistry"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Mathematics",
                                children: "📐 Mathematics"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            activeFilters.preparationLevel === "FOUNDATION" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Biology",
                                children: "🧬 Biology"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 136,
                                columnNumber: 63
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400",
                        children: "Select Chapter Node"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        required: true,
                        value: activeFilters.chapterId,
                        onChange: (event)=>onUpdateFilters({
                                ...activeFilters,
                                chapterId: event.target.value
                            }),
                        className: "w-full rounded-xl border border-zinc-200 bg-zinc-50/50 p-2.5 text-sm font-semibold text-zinc-800 focus:border-zinc-400 focus:outline-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "-- Choose Active Syllabus Topic --"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            filteredChaptersList.map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: ch.id,
                                    children: ch.title
                                }, ch.id, false, {
                                    fileName: "[project]/src/components/FilterPanel.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400",
                        children: "Exam Sub-Track"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: activeFilters.trackType,
                        onChange: (event)=>onUpdateFilters({
                                ...activeFilters,
                                trackType: event.target.value
                            }),
                        className: "w-full rounded-xl border border-zinc-200 bg-zinc-50/50 p-2.5 text-sm font-semibold text-zinc-800 focus:border-zinc-400 focus:outline-none",
                        children: activeFilters.preparationLevel === "FOUNDATION" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "CONCEPTUAL_QUIZ",
                                    children: "Conceptual Quizzes (No Calculus)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FilterPanel.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "CALCULATION_APPLICATION",
                                    children: "Calculation Applications"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FilterPanel.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "FUTURE_TECH_LAB",
                                    children: "Future Tech Project Labs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FilterPanel.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FilterPanel.tsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "JEE_MAIN_DRILL",
                                    children: "JEE Main Practice Drills"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FilterPanel.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "JEE_ADVANCED_CHALLENGE",
                                    children: "JEE Advanced Challenges"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FilterPanel.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FilterPanel.tsx",
                            lineNumber: 172,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400",
                        children: "Difficulty"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: activeFilters.difficulty,
                        onChange: (event)=>onUpdateFilters({
                                ...activeFilters,
                                difficulty: event.target.value
                            }),
                        className: "w-full rounded-xl border border-zinc-200 bg-zinc-50/50 p-2.5 text-sm font-semibold text-zinc-800 focus:border-zinc-400 focus:outline-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Mixed",
                                children: "Mixed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Easy",
                                children: "Easy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Medium",
                                children: "Medium"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Hard",
                                children: "Hard"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400",
                        children: "Number of Questions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        min: 1,
                        max: 20,
                        value: activeFilters.count,
                        onChange: (event)=>onUpdateFilters({
                                ...activeFilters,
                                count: Number(event.target.value)
                            }),
                        className: "w-full rounded-xl border border-zinc-200 bg-zinc-50/50 p-2.5 text-sm font-semibold text-zinc-800 focus:border-zinc-400 focus:outline-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: loading || !activeFilters.chapterId,
                    className: `w-full rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-sm transition ${activeFilters.chapterId && !loading ? "cursor-pointer bg-zinc-900 hover:bg-zinc-800" : "cursor-not-allowed select-none bg-zinc-300"}`,
                    children: loading ? "Generating…" : activeFilters.chapterId ? "🚀 Generate Worksheet" : "Select a Chapter First"
                }, void 0, false, {
                    fileName: "[project]/src/components/FilterPanel.tsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FilterPanel.tsx",
        lineNumber: 52,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/chapters.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jury$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/jury.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
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
        lineNumber: 40,
        columnNumber: 10
    }, this);
}
function WorksheetPreview({ worksheet, studentId, hideAnswerKeyUntilSubmit, hasSubmittedCurrentWorksheet, activeToast, onCloseToast, worksheetId, filters, onSubmitEvaluation }) {
    const [localAnswers, setLocalAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [hasSubmittedLocally, setHasSubmittedLocally] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ventureName, setVentureName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [executiveSummaryText, setExecutiveSummaryText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [technicalArchitectureSpecs, setTechnicalArchitectureSpecs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [ventureReport, setVentureReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const uniquePrinciples = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!worksheet) return [];
        return Array.from(new Map(worksheet.questions.filter((question)=>question.principle).map((question)=>[
                question.principle.id,
                question.principle
            ])).values());
    }, [
        worksheet
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // A newly generated worksheet must not inherit the previous worksheet's unlocked answers.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setHasSubmittedLocally(false);
    }, [
        worksheet?.id
    ]);
    if (!worksheet || worksheet.questions.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                activeToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "status",
                    className: `toast-enter flex items-center justify-between rounded-xl border p-4 text-xs font-medium ${activeToast.type === "SUCCESS" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-zinc-200 bg-zinc-50 text-zinc-800"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: activeToast.message
                        }, void 0, false, {
                            fileName: "[project]/src/components/WorksheetPreview.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onCloseToast,
                            className: "ml-2 font-mono font-bold text-zinc-400 hover:text-zinc-900",
                            "aria-label": "Dismiss notification",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WorksheetPreview.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WorksheetPreview.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "no-print rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-12 text-center text-sm font-medium text-zinc-400",
                    children: "Choose a chapter and parameters on the filter panel to assemble a worksheet preview."
                }, void 0, false, {
                    fileName: "[project]/src/components/WorksheetPreview.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WorksheetPreview.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this);
    }
    const chosenDifficulty = filters?.difficulty ?? worksheet.filters.difficulty ?? "Mixed";
    const chosenSubject = filters?.subject ?? worksheet.filters.subject ?? "Physics";
    const chosenGrade = filters?.grade ?? worksheet.filters.grade ?? "11";
    const totalMarks = worksheet.questions.reduce((sum, question)=>sum + question.marks, 0);
    const activeTrack = worksheet.filters.trackTypes?.[0];
    const isFutureTechLab = activeTrack === "FUTURE_TECH_LAB";
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
    function submitVentureCanvas() {
        if (!worksheet || !ventureName.trim() || !executiveSummaryText.trim() || !technicalArchitectureSpecs.trim()) {
            return;
        }
        const submission = {
            projectId: worksheet.id,
            studentId: studentId?.trim() || "unknown",
            subtopic: worksheet.questions[0]?.subtopic ?? worksheet.questions[0]?.topic ?? "Future Technology Lab",
            ventureName: ventureName.trim(),
            executiveSummaryText: executiveSummaryText.trim(),
            technicalArchitectureSpecs: technicalArchitectureSpecs.trim(),
            submittedAt: new Date().toISOString()
        };
        setVentureReport((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jury$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluateVentureProject"])(submission));
        setHasSubmittedLocally(true);
    }
    function evaluateStudentSubmission(answers = localAnswers) {
        if (!worksheet) return;
        const savedAnswers = {
            ...answers
        };
        const responses = worksheet.questions.map((question)=>{
            const rawAnswer = savedAnswers[question.id] ?? "";
            const normalizedStudentAnswer = rawAnswer.trim().toLowerCase().replace(/\s*,\s*/g, ",");
            const correctAnswerText = question.correctAnswer ?? question.answer ?? "";
            const normalizedCorrectAnswer = correctAnswerText.trim().toLowerCase().replace(/\s*,\s*/g, ",");
            const isCorrect = normalizedStudentAnswer.length > 0 && normalizedStudentAnswer === normalizedCorrectAnswer;
            return {
                questionId: question.id,
                questionText: question.text ?? question.stem ?? "Untitled question",
                studentAnswer: rawAnswer.trim() || "Not attempted",
                correctAnswer: correctAnswerText,
                isCorrect,
                marksAwarded: isCorrect ? question.marks : 0
            };
        });
        const scoreObtained = responses.reduce((sum, response)=>sum + response.marksAwarded, 0);
        const maxPossibleMarks = worksheet.questions.reduce((sum, question)=>sum + question.marks, 0);
        const report = {
            submissionId: `submission-${Date.now()}`,
            studentId: studentId?.trim() || "unknown",
            portalType: worksheet.filters.preparationLevel === "FOUNDATION" ? "FOUNDATION" : "JEE_MAIN_ADVANCED",
            subject: worksheet.filters.subject,
            worksheetId: worksheet.id,
            chapterId: worksheet.filters.chapter,
            chapterTitle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAPTERS_REGISTRY"].find((chapter)=>chapter.id === worksheet.filters.chapter)?.title ?? worksheet.filters.chapter,
            trackType: worksheet.filters.trackTypes?.[0] ?? (worksheet.filters.preparationLevel === "FOUNDATION" ? "CONCEPTUAL_QUIZ" : "JEE_MAIN_DRILL"),
            generatedAt: worksheet.generatedAt,
            submittedAt: new Date().toISOString(),
            totalQuestions: worksheet.questions.length,
            scoreObtained,
            maxPossibleMarks,
            scoreMarks: scoreObtained,
            totalMarks: maxPossibleMarks,
            accuracyPercentage: maxPossibleMarks > 0 ? Math.round(scoreObtained / maxPossibleMarks * 100) : 0,
            responses
        };
        setHasSubmittedLocally(true);
        onSubmitEvaluation?.(report);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "space-y-6 rounded-2xl border border-zinc-200 bg-white p-5 text-left shadow-[0_18px_45px_-30px_rgba(15,23,42,0.45)] sm:p-8 print:border-0 print:p-0 print:shadow-none",
        children: [
            activeToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "status",
                className: `toast-enter flex items-center justify-between rounded-xl border p-4 text-xs font-medium transition-all ${activeToast.type === "SUCCESS" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-zinc-200 bg-zinc-50 text-zinc-800"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: activeToast.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCloseToast,
                        className: "ml-2 font-mono font-bold text-zinc-400 hover:text-zinc-900",
                        "aria-label": "Dismiss notification",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 213,
                columnNumber: 9
            }, this),
            uniquePrinciples.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "no-print rounded-xl border border-zinc-200 bg-zinc-50 p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-1.5 text-xs font-bold uppercase tracking-widest text-zinc-800",
                        children: "Dynamic Formula and Phenomenon Reference Index"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-xs leading-relaxed text-zinc-500",
                        children: "Core governing physics parameters represented in this worksheet."
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 238,
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
                                        lineNumber: 244,
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
                                        lineNumber: 245,
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
                                                lineNumber: 249,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, principle.id, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 243,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 234,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col gap-4 border-b border-zinc-200 pb-5 sm:flex-row sm:items-start sm:justify-between",
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
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-0.5 text-2xl font-black text-zinc-900",
                                children: [
                                    "Class ",
                                    chosenGrade,
                                    " ",
                                    chosenSubject,
                                    " Worksheet"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            worksheet.title && worksheet.title !== `Class ${chosenGrade} ${chosenSubject} Worksheet` && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-zinc-500",
                                children: worksheet.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this),
                            worksheetId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 font-mono text-xs text-zinc-400",
                                children: [
                                    "Sheet Signature ID: ",
                                    worksheetId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 269,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-0.5 rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-left text-xs font-medium text-zinc-600 sm:text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Total items:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 273,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    worksheet.questions.length,
                                    " questions"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Difficulty matrix:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 274,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    chosenDifficulty
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Maximum marks:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 275,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    totalMarks,
                                    " marks"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            isFutureTechLab ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "no-print rounded-2xl border border-sky-200 bg-sky-50/60 p-5 shadow-sm sm:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5 flex flex-wrap items-start justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold uppercase tracking-[0.2em] text-sky-700",
                                        children: "Future Technology Lab"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-1 text-xl font-bold text-zinc-900",
                                        children: "Project-based venture evaluation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 284,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 max-w-2xl text-sm leading-relaxed text-zinc-600",
                                        children: "Present the commercial idea, then ground it in the physical laws and formulas that make the prototype work."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 285,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full border border-sky-200 bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-sky-700",
                                children: "AI venture jury"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 289,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 281,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-semibold text-zinc-800",
                                children: [
                                    "Venture / Prototype Name",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: ventureName,
                                        onChange: (event)=>setVentureName(event.target.value),
                                        disabled: hasSubmittedCurrentWorksheet || hasSubmittedLocally,
                                        placeholder: hasSubmittedCurrentWorksheet || hasSubmittedLocally ? "Locked after submission" : "e.g., Solid-State Quantum Cell Grid",
                                        className: `mt-1.5 h-11 w-full rounded-lg border px-3 text-sm font-normal shadow-sm placeholder:text-zinc-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100 ${hasSubmittedCurrentWorksheet || hasSubmittedLocally ? "cursor-not-allowed border-zinc-200 bg-zinc-100 text-zinc-400" : "border-zinc-200 bg-white text-zinc-900"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 295,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-semibold text-zinc-800",
                                children: [
                                    "Executive Commercial Summary",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: executiveSummaryText,
                                        onChange: (event)=>setExecutiveSummaryText(event.target.value),
                                        disabled: hasSubmittedCurrentWorksheet || hasSubmittedLocally,
                                        placeholder: "What problem does this venture solve, and who benefits?",
                                        rows: 4,
                                        className: `mt-1.5 w-full resize-y rounded-lg border px-3 py-2.5 text-sm font-normal leading-relaxed shadow-sm placeholder:text-zinc-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100 ${hasSubmittedCurrentWorksheet || hasSubmittedLocally ? "cursor-not-allowed border-zinc-200 bg-zinc-100 text-zinc-400" : "border-zinc-200 bg-white text-zinc-900"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-semibold text-zinc-800",
                                children: [
                                    "Technical Architecture Specifications",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-1 font-normal text-zinc-500",
                                        children: "(Detail the governing physical formulas utilized)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: technicalArchitectureSpecs,
                                        onChange: (event)=>setTechnicalArchitectureSpecs(event.target.value),
                                        disabled: hasSubmittedCurrentWorksheet || hasSubmittedLocally,
                                        placeholder: "Describe the materials, system architecture, governing equations, and measurable constraints.",
                                        rows: 7,
                                        className: `mt-1.5 w-full resize-y rounded-lg border px-3 py-2.5 text-sm font-normal leading-relaxed shadow-sm placeholder:text-zinc-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100 ${hasSubmittedCurrentWorksheet || hasSubmittedLocally ? "cursor-not-allowed border-zinc-200 bg-zinc-100 text-zinc-400" : "border-zinc-200 bg-white text-zinc-900"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 325,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: submitVentureCanvas,
                        disabled: hasSubmittedCurrentWorksheet || hasSubmittedLocally || !ventureName.trim() || !executiveSummaryText.trim() || !technicalArchitectureSpecs.trim(),
                        className: "mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
                        children: "Submit Project Canvas to AI Venture Jury"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 280,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                lineNumber: 359,
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
                                                lineNumber: 364,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 357,
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
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 356,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "whitespace-pre-wrap pl-1 text-sm leading-relaxed text-zinc-800",
                                children: renderMathText(question.text ?? question.stem ?? "")
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 373,
                                columnNumber: 13
                            }, this),
                            question.type === "MCQ" && question.options && question.options.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-2.5 pt-1.5 text-sm text-zinc-700 md:grid-cols-2",
                                children: question.options.map((option, optionIndex)=>{
                                    const isSelected = localAnswers[question.id] === option;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: hasSubmittedCurrentWorksheet || hasSubmittedLocally,
                                        onClick: ()=>handleOptionSelect(question.id, option),
                                        className: `flex items-center rounded-lg border p-2.5 text-left transition ${isSelected ? "border-blue-500 bg-blue-50/50 text-blue-900 shadow-sm" : "border-zinc-200 bg-zinc-50/50 text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50"} disabled:cursor-not-allowed disabled:opacity-60`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 font-mono text-xs font-bold text-zinc-400",
                                                children: [
                                                    String.fromCharCode(65 + optionIndex),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                                lineNumber: 393,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: renderMathText(option ?? "")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                                lineNumber: 396,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, option, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 382,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 377,
                                columnNumber: 15
                            }, this),
                            (question.type === "NAT" || question.type === "FITB") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "no-print pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[11px] font-medium uppercase tracking-wide text-zinc-400",
                                        children: question.type === "NAT" ? "🔢 Numerical Input Field Answer Value:" : "Fill in the blank response"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 404,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: localAnswers[question.id] ?? "",
                                        onChange: (event)=>handleTextInput(question.id, event.target.value ?? ""),
                                        disabled: hasSubmittedCurrentWorksheet || hasSubmittedLocally,
                                        placeholder: hasSubmittedCurrentWorksheet || hasSubmittedLocally ? "Locked after submission" : "Type numerical value answer...",
                                        className: `mt-2 h-10 w-full max-w-[260px] rounded-lg border px-3 text-sm placeholder:text-zinc-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 ${hasSubmittedCurrentWorksheet || hasSubmittedLocally ? "cursor-not-allowed select-none border-zinc-200 bg-zinc-100 font-bold text-zinc-400" : "border-zinc-200 bg-zinc-50 text-zinc-900"}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 407,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 403,
                                columnNumber: 15
                            }, this)
                        ]
                    }, question.id || index, true, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 355,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this),
            isFutureTechLab && ventureReport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-2xl border border-zinc-200 bg-slate-50 p-5 shadow-sm sm:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-5 flex items-center justify-between gap-3 border-b border-slate-200 pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold uppercase tracking-[0.2em] text-slate-500",
                                        children: "Jury assessment"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 430,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-1 text-xl font-bold text-slate-900",
                                        children: "Venture evaluation scorecard"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 431,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full bg-slate-900 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white",
                                children: ventureReport.overallVerdict.replaceAll("_", " ")
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 433,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 428,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 sm:grid-cols-3",
                        children: [
                            [
                                "Physics grounding",
                                ventureReport.physicsGroundingScore
                            ],
                            [
                                "Feasibility",
                                ventureReport.feasibilityScore
                            ],
                            [
                                "Market potential",
                                ventureReport.marketDisruptionPotential
                            ]
                        ].map(([label, score])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-slate-200 bg-white p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold text-slate-500",
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 444,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 font-mono text-2xl font-bold text-slate-900",
                                        children: [
                                            score,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 445,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, label, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 443,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 437,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid gap-4 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-rose-200 bg-rose-50 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-rose-900",
                                        children: "Critical technical flaws"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 451,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-rose-800",
                                        children: ventureReport.criticalTechnicalFlaws.map((flaw)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: flaw
                                            }, flaw, false, {
                                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                                lineNumber: 453,
                                                columnNumber: 69
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 452,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 450,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-emerald-200 bg-emerald-50 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-emerald-900",
                                        children: "Suggested next-gen milestones"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 457,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-emerald-800",
                                        children: ventureReport.suggestedAdvancementsMilestones.map((milestone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: milestone
                                            }, milestone, false, {
                                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                                lineNumber: 459,
                                                columnNumber: 83
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 458,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 456,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 449,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 427,
                columnNumber: 9
            }, this),
            !isFutureTechLab && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-print flex justify-end gap-3 border-t border-zinc-200 pt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>window.print(),
                        className: "rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-xs font-semibold tracking-wide text-zinc-800 shadow-sm transition hover:bg-zinc-50",
                        children: "Print / Save PDF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>evaluateStudentSubmission(localAnswers),
                        disabled: hasSubmittedCurrentWorksheet || hasSubmittedLocally,
                        className: "rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-sm transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60",
                        children: "Submit Answers for Evaluation"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 474,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 466,
                columnNumber: 28
            }, this),
            !isFutureTechLab && worksheet.filters.includeAnswerKey && (!hideAnswerKeyUntilSubmit || hasSubmittedCurrentWorksheet || hasSubmittedLocally ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-6 text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-3 text-sm font-extrabold uppercase tracking-wider text-zinc-900",
                        children: "🔑 Official Answer Key & Technical Explanations"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 487,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "answer-key space-y-3 border-t border-zinc-200 pt-4 text-sm",
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
                                                lineNumber: 494,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 493,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-zinc-600",
                                        children: q.solution
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 496,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, q.id, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 492,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 490,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 486,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-print mt-6 rounded-xl border border-dashed border-amber-300 bg-amber-50/50 p-4 text-center text-xs font-semibold text-amber-800",
                children: '🔒 Solutions Locked. Input your responses and click the blue "Submit Answers for Evaluation" button above to unlock the answer keys.'
            }, void 0, false, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 502,
                columnNumber: 11
            }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WorksheetPreview.tsx",
        lineNumber: 211,
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
    },
    // --- JEE MAIN STYLE SUB-CATEGORY ---
    {
        id: "jee_main_electro_01",
        chapterId: "p12_01",
        subtopic: "Electric Field Intensity",
        preparationLevel: "JEE_MAIN_ADVANCED",
        trackType: "JEE_MAIN_DRILL",
        cognitiveDimension: "APPLICATION",
        type: "MCQ",
        difficulty: "Medium",
        text: "An electric dipole consisting of two opposite charges of 2 × 10⁻⁶ C separated by a distance of 3 cm is placed in an external uniform electric field of 2 × 10⁵ N/C. Calculate the maximum torque acting on the dipole system in N·m.",
        options: [
            "0.12 N·m",
            "1.2 N·m",
            "0.012 N·m",
            "12.0 N·m"
        ],
        correctAnswer: "0.012 N·m",
        solution: "JEE Main Steps: Dipole moment p = q * d = (2 × 10⁻⁶ C) * (0.03 m) = 6 × 10⁻⁸ C·m. Maximum torque occurs when θ = 90°, where τ_max = p * E = (6 × 10⁻⁸) * (2 × 10⁵) = 12 × 10⁻³ = 0.012 N·m.",
        marks: 4
    },
    // --- JEE ADVANCED STYLE SUB-CATEGORY ---
    {
        id: "jee_adv_electro_01",
        chapterId: "p12_01",
        subtopic: "Gauss Law Application",
        preparationLevel: "JEE_MAIN_ADVANCED",
        trackType: "JEE_ADVANCED_CHALLENGE",
        cognitiveDimension: "APPLICATION",
        type: "MULTI_CORRECT",
        difficulty: "Hard",
        text: "An uncharged, thick spherical conducting shell has inner radius 'a' and outer radius 'b'. A point charge +q is placed precisely at the dead center of the sphere. Select ALL the correct structural statements regarding this electrical field distribution system:",
        options: [
            "The surface charge density on the inner boundary layer skin is -q / (4πa²)",
            "The total outward electric field potential fields tracking for r > b scales exactly as kq/r²",
            "The total charge trapped inside the bulk metallic thickness body segment equals +q",
            "The electric field intensity anywhere within the metal region interval (a < r < b) remains zero"
        ],
        correctAnswer: "A,B,D",
        solution: "JEE Advanced Insights: By electrostatic induction, an inner charge +q pulls an equal and opposite charge -q to the interior cavity surface, yielding a surface density of -q/(4πa²). The electric field inside the metal body thickness must remain perfectly zero to maintain static equilibrium. By Gauss's Law, the induced charge on the outermost shell skin is +q, making external properties look exactly like a point charge at the origin. Statements A, B, and D are verified truths.",
        marks: 4
    },
    // --- LEVEL 1: FOUNDATION TRACK (GRADE 8 BIOLOGY) ---
    {
        id: "fnd_08_bio_mcq_01",
        subject: "Biology",
        grade: "8",
        chapterId: "fnd_08_bio_01",
        chapterTitle: "Cell Structure and Functions",
        subtopic: "Cell Organelles",
        preparationLevel: "FOUNDATION",
        trackType: "CONCEPTUAL_QUIZ",
        cognitiveDimension: "KNOWLEDGE",
        type: "MCQ",
        difficulty: "Easy",
        text: "Which of the following cell organelles is famously referred to as the 'Powerhouse of the Cell' due to its central role in synthesizing cellular energy in the form of ATP molecules?",
        options: [
            "Nucleus",
            "Mitochondria",
            "Golgi Apparatus",
            "Chloroplast"
        ],
        correctAnswer: "Mitochondria",
        solution: "Conceptual Core: Mitochondria are membrane-bound organelles that conduct cellular respiration, converting chemical energy from food into Adenosine Triphosphate (ATP), the energy currency of life.",
        marks: 2
    },
    {
        id: "fnd_08_bio_fitb_01",
        subject: "Biology",
        grade: "8",
        chapterId: "fnd_08_bio_01",
        chapterTitle: "Cell Structure and Functions",
        subtopic: "Cell Discovery",
        preparationLevel: "FOUNDATION",
        trackType: "CONCEPTUAL_QUIZ",
        cognitiveDimension: "KNOWLEDGE",
        type: "FITB",
        difficulty: "Easy",
        text: "Cells were first observed and discovered in thin slices of bottle cork in the year 1665 by the English scientist _________ .",
        correctAnswer: "Robert Hooke",
        solution: "Fact Check: Robert Hooke utilized a primitive compound microscope to examine dead cork cells, noting they resembled small rooms or compartments, which he termed 'cells'.",
        marks: 2
    },
    {
        id: "fnd_08_bio_future_01",
        subject: "Biology",
        grade: "8",
        chapterId: "fnd_08_bio_01",
        chapterTitle: "Cell Structure and Functions",
        subtopic: "Genomics",
        preparationLevel: "FOUNDATION",
        trackType: "FUTURE_TECH_LAB",
        cognitiveDimension: "APPLICATION",
        type: "MCQ",
        difficulty: "Hard",
        text: "Next-generation cellular therapies are utilizing CRISPR-Cas9 base-editing technology to rewire human immune cells (T-cells) to seek and destroy cancer matrices without harming healthy tissue. If you were building a biotechnology venture focused on this breakthrough, which engineering challenge would represent your highest technical barrier to entry?",
        options: [
            "Securing standard cell culture glass petri dishes",
            "Developing high-efficiency viral or nanoparticle delivery systems to insert the CRISPR mechanism safely into target cell membranes without causing off-target genomic modifications",
            "Hiring web developers to design the company's landing page software",
            "Purchasing standard industrial refrigeration storage cabinets"
        ],
        correctAnswer: "Developing high-efficiency viral or nanoparticle delivery systems to insert the CRISPR mechanism safely into target cell membranes without causing off-target genomic modifications",
        solution: "Future Application Insight: While gene editing tools are precise in a test tube, delivering them inside a living patient's specific cell coordinates without unintended genomic side-effects remains the ultimate barrier for modern biotech startups.",
        marks: 5
    },
    // --- LEVEL 2: JEE MAIN TRACK (CLASS 12 PHYSICS) ---
    {
        id: "jee_main_electro_nat_01",
        subject: "Physics",
        grade: "12",
        chapterId: "p12_01",
        chapterTitle: "Electrostatics & Electric Charges",
        subtopic: "Electric Field Intensity",
        preparationLevel: "JEE_MAIN_ADVANCED",
        trackType: "JEE_MAIN_DRILL",
        cognitiveDimension: "APPLICATION",
        type: "NAT",
        difficulty: "Medium",
        text: "An electric dipole consists of two opposite point charges of magnitude 2 μC separated by a distance of 4 cm. It is placed inside an external uniform electric field of 5 × 10⁵ N/C. Calculate the maximum torque experienced by the dipole system in milli-Newton-meters (mN·m). (Input an integer response value only).",
        correctAnswer: "40",
        solution: "Calculation Path: Dipole moment p = q * d = (2 × 10⁻⁶ C) * (0.04 m) = 8 × 10⁻⁸ C·m. Maximum torque is τ = pE = (8 × 10⁻⁸) * (5 × 10⁵) = 0.04 N·m = 40 mN·m.",
        marks: 4
    },
    // --- LEVEL 2: JEE ADVANCED TRACK (CLASS 12 PHYSICS) ---
    {
        id: "jee_adv_electro_multi_01",
        subject: "Physics",
        grade: "12",
        chapterId: "p12_01",
        chapterTitle: "Electrostatics & Electric Charges",
        subtopic: "Gauss Law Application",
        preparationLevel: "JEE_MAIN_ADVANCED",
        trackType: "JEE_ADVANCED_CHALLENGE",
        cognitiveDimension: "APPLICATION",
        type: "MULTI_CORRECT",
        difficulty: "Hard",
        text: "A solid, uncharged conducting sphere of radius R is placed inside a uniform external electric field E₀. Select ALL the correct structural statements regarding the resulting electrostatic equilibrium properties of this sphere setup:",
        options: [
            "The electric field intensity at any point inside the interior thickness volume body of the sphere is perfectly zero",
            "The surface charge density is non-uniform and varies as a function of the polar angle θ",
            "The total electric potential is constant and uniform throughout the entire volume of the conducting sphere",
            "The net induced charge on the total outer surface skin boundary of the sphere equals exactly half of E₀"
        ],
        correctAnswer: "A,B,C",
        solution: "Advanced Proof: Inside a perfect conductor at static equilibrium, free charges redistribute to ensure E = 0 and the conductor is equipotential. The external field induces a non-uniform surface charge distribution, while the net induced charge remains zero because the sphere started uncharged.",
        marks: 4
    },
    // --- LEVEL 1: FOUNDATION TRACK (GRADE 8 BIOLOGY) ---
    {
        id: "fnd_08_bio_mcq_02",
        subject: "Biology",
        grade: "8",
        chapterId: "fnd_08_bio_01",
        chapterTitle: "Cell Structure and Functions",
        subtopic: "Plastids",
        preparationLevel: "FOUNDATION",
        trackType: "CONCEPTUAL_QUIZ",
        cognitiveDimension: "KNOWLEDGE",
        type: "MCQ",
        difficulty: "Easy",
        text: "Which double-membrane bound plant organelle contains the green pigment chlorophyll and acts as the structural site for photosynthesis?",
        options: [
            "Leucoplast",
            "Chromoplast",
            "Chloroplast",
            "Amyloplast"
        ],
        correctAnswer: "Chloroplast",
        solution: "Conceptual Core: Chloroplasts are specialized plastids containing chlorophyll that trap solar energy to synthesize organic food via photosynthesis. Leucoplasts store starch/oils, while chromoplasts impart non-green colors to flowers and fruits.",
        marks: 2
    },
    // --- LEVEL 1: FOUNDATION TRACK (GRADE 9 PHYSICS) ---
    {
        id: "fnd_09_phy_mcq_01",
        subject: "Physics",
        grade: "9",
        chapterId: "fnd_09_phy_01",
        chapterTitle: "Force and Laws of Motion (CBSE/ICSE)",
        subtopic: "Inertia",
        preparationLevel: "FOUNDATION",
        trackType: "CONCEPTUAL_QUIZ",
        cognitiveDimension: "UNDERSTANDING",
        type: "MCQ",
        difficulty: "Easy",
        text: "When a moving bus snaps to a sudden halt, the passengers are naturally jerked forward. Which fundamental property of matter explains this physical phenomenon?",
        options: [
            "Inertia of Rest",
            "Inertia of Motion",
            "Inertia of Direction",
            "Centripetal Momentum"
        ],
        correctAnswer: "Inertia of Motion",
        solution: "Newtonian Mechanics: According to Newton's First Law, an object continues in its state of uniform motion unless acted upon by an external force. When the brakes lock the bus chassis, the passengers' lower bodies stop, but their upper bodies continue moving forward due to the inertia of motion.",
        marks: 2
    },
    {
        id: "fnd_09_phy_nat_01",
        subject: "Physics",
        grade: "9",
        chapterId: "fnd_09_phy_01",
        chapterTitle: "Force and Laws of Motion (CBSE/ICSE)",
        subtopic: "Momentum Calculations",
        preparationLevel: "FOUNDATION",
        trackType: "CALCULATION_APPLICATION",
        cognitiveDimension: "APPLICATION",
        type: "NAT",
        difficulty: "Medium",
        text: "A cricket ball of mass 150 grams is moving at a uniform velocity of 20 meters per second. Calculate the magnitude of its linear momentum in kg·m/s. (Input an integer response value only).",
        correctAnswer: "3",
        solution: "Formula Application: Linear momentum is the product of mass and velocity (p = m * v). First convert mass to standard SI units: 150g = 0.15 kg. Therefore, p = 0.15 kg * 20 m/s = 3 kg·m/s.",
        marks: 3
    },
    // --- LEVEL 1: FOUNDATION TRACK (GRADE 10 MATHEMATICS) ---
    {
        id: "fnd_10_mat_nat_01",
        subject: "Mathematics",
        grade: "10",
        chapterId: "fnd_10_mat_01",
        chapterTitle: "Quadratic Equations & Progressions",
        subtopic: "Arithmetic Progressions",
        preparationLevel: "FOUNDATION",
        trackType: "CALCULATION_APPLICATION",
        cognitiveDimension: "APPLICATION",
        type: "NAT",
        difficulty: "Medium",
        text: "Find the 11th term of the Arithmetic Progression (AP) defined by the sequence: 2, 7, 12, 17, ... (Input an integer response value only).",
        correctAnswer: "52",
        solution: "Algebraic Progression: For an AP, the nth term is given by a_n = a + (n - 1)d. Here, first term (a) = 2, common difference (d) = 7 - 2 = 5. For the 11th term (n = 11): a_11 = 2 + (11 - 1)*5 = 2 + 10*5 = 52.",
        marks: 3
    },
    // --- LEVEL 2: JEE MAIN TRACK (CLASS 12 PHYSICS) ---
    {
        id: "jee_main_electro_mcq_02",
        subject: "Physics",
        grade: "12",
        chapterId: "p12_01",
        chapterTitle: "Electrostatics & Electric Charges",
        subtopic: "Electric Flux",
        preparationLevel: "JEE_MAIN_ADVANCED",
        trackType: "JEE_MAIN_DRILL",
        cognitiveDimension: "APPLICATION",
        type: "MCQ",
        difficulty: "Medium",
        text: "A point charge +q is positioned at the exact geometric center of a regular cube. What is the net outward electric flux escaping through any ONE individual face of the cube?",
        options: [
            "q / ε₀",
            "q / (6ε₀)",
            "q / (4ε₀)",
            "Zero"
        ],
        correctAnswer: "q / (6ε₀)",
        solution: "Gauss's Law Application: The total electric flux through the closed cube is q / ε₀. By symmetry, the flux through one of its six identical faces is q / (6ε₀).",
        marks: 4
    },
    {
        id: "jee_main_current_nat_01",
        subject: "Physics",
        grade: "12",
        chapterId: "p12_02",
        chapterTitle: "Current Electricity & Circuits",
        subtopic: "Kirchhoffs Laws",
        preparationLevel: "JEE_MAIN_ADVANCED",
        trackType: "JEE_MAIN_DRILL",
        cognitiveDimension: "APPLICATION",
        type: "NAT",
        difficulty: "Medium",
        text: "Three resistors of values 3 Ω, 6 Ω, and 2 Ω are hooked up in a perfect parallel circuit network across a stable 12V battery source. Calculate the net total macro-current drawn from the battery cell in Amperes. (Input an integer response value only).",
        correctAnswer: "12",
        solution: "Circuit Network Reduction: The parallel equivalent resistance is 1 Ω, so Ohm's Law gives I = V / R_eq = 12 V / 1 Ω = 12 A.",
        marks: 4
    },
    // --- LEVEL 2: JEE ADVANCED TRACK (CLASS 12 PHYSICS) ---
    {
        id: "jee_adv_electro_multi_02",
        subject: "Physics",
        grade: "12",
        chapterId: "p12_01",
        chapterTitle: "Electrostatics & Electric Charges",
        subtopic: "Electrostatic Potential Energy",
        preparationLevel: "JEE_MAIN_ADVANCED",
        trackType: "JEE_ADVANCED_CHALLENGE",
        cognitiveDimension: "APPLICATION",
        type: "MULTI_CORRECT",
        difficulty: "Hard",
        text: "Two point charges +q and -q are held stationary at positions (-d, 0) and (+d, 0) on the x-axis, mapping a classical dipole. A third test charge +q₀ is launched from infinity along the vertical y-axis bisector line. Select ALL the correct thermodynamic or electrostatic tracking truths regarding this particle's configuration paths:",
        options: [
            "The net electrostatic work done by the system field in relocating the charge along the y-axis equals zero",
            "The electric potential anywhere along the entire infinite trajectory on the y-axis is uniform and equals zero",
            "The test charge experiences a non-zero net electrostatic force parallel to the x-axis during its movement",
            "The net kinetic energy of the test charge must decrease exponentially as it approaches the origin coordinate (0,0)"
        ],
        correctAnswer: "A,B,C",
        solution: "Advanced Multi-Tiered Verification: Every point on the perpendicular bisector is equidistant from +q and -q, so the potential is zero everywhere on the y-axis. The electric field is nevertheless non-zero and points parallel to the x-axis, making Statements A, B, and C correct.",
        marks: 4
    },
    // --- CHAPTER: MICROORGANISMS: FRIEND AND FOE (BIOLOGY) ---
    {
        id: "fnd_08_bio_micro_mcq_01",
        subject: "Biology",
        grade: "8",
        chapterId: "fnd_08_bio_02",
        chapterTitle: "Microorganisms: Friend and Foe",
        subtopic: "Biological Nitrogen Fixation",
        preparationLevel: "FOUNDATION",
        trackType: "CONCEPTUAL_QUIZ",
        cognitiveDimension: "UNDERSTANDING",
        type: "MCQ",
        difficulty: "Medium",
        text: "Which of the following symbiotic bacterium resides inside the root nodules of leguminous plants (such as peas or beans) to fix atmospheric nitrogen directly into highly usable soil nitrates?",
        options: [
            "Lactobacillus",
            "Rhizobium",
            "Penicillium",
            "Aspergillus"
        ],
        correctAnswer: "Rhizobium",
        solution: "Biological Core: Rhizobium forms a symbiotic relation with leguminous root systems, transforming atmospheric nitrogen into compounds that naturally enrich soils. Lactobacillus is associated with converting milk into curd.",
        marks: 2
    },
    // --- CHAPTER: CHEMICAL EFFECTS OF CURRENT (PHYSICS) ---
    {
        id: "fnd_08_phy_current_nat_01",
        subject: "Physics",
        grade: "8",
        chapterId: "fnd_08_phy_04",
        chapterTitle: "Chemical Effects of Electric Current",
        subtopic: "Electroplating Mechanics",
        preparationLevel: "FOUNDATION",
        trackType: "CALCULATION_APPLICATION",
        cognitiveDimension: "APPLICATION",
        type: "NAT",
        difficulty: "Medium",
        text: "During an industrial electroplating experiment designed to coat a copper key with pure iron metal particles, you pass a continuous electric current through an aqueous electrolyte bath container. To achieve a stable mechanical layer deposition, the key segment must be wired directly to which electrode terminal node? (Input '1' for Anode, or '2' for Cathode).",
        correctAnswer: "2",
        solution: "Electrochemistry Basis: In electroplating, the object to be coated functions as the negative cathode. Positively charged metal ions move toward the cathode, gain electrons, and plate onto the object.",
        marks: 3
    },
    // --- CHAPTER: MATERIALS: METALS AND NON-METALS (CHEMISTRY) ---
    {
        id: "fnd_08_che_metals_mcq_01",
        subject: "Chemistry",
        grade: "8",
        chapterId: "fnd_08_che_02",
        chapterTitle: "Materials: Metals and Non-Metals",
        subtopic: "Chemical Reactivity Series",
        preparationLevel: "FOUNDATION",
        trackType: "CONCEPTUAL_QUIZ",
        cognitiveDimension: "UNDERSTANDING",
        type: "MCQ",
        difficulty: "Medium",
        text: "When a bright iron nail is dropped inside a beaker containing a deep blue solution of Copper Sulphate (CuSO₄), a slow displacement reaction triggers. Which visual property parameter indicates the successful chemical exchange transformation over time?",
        options: [
            "The blue solution turns completely transparent and bubbles intensely",
            "The blue solution gradually fades into a light green tint while a brown copper crust coats the nail body",
            "The entire liquid freezes solid into a crystalline matrix",
            "The mixture catches fire instantly with a bright blinding silver flame"
        ],
        correctAnswer: "The blue solution gradually fades into a light green tint while a brown copper crust coats the nail body",
        solution: "Reactivity Principles: Iron displaces copper from copper sulphate, forming iron sulphate and copper. The solution changes from blue to green and copper deposits on the nail.",
        marks: 2
    },
    // --- CHAPTER: EXPONENTS AND POWERS (MATHEMATICS) ---
    {
        id: "fnd_08_mat_powers_nat_01",
        subject: "Mathematics",
        grade: "8",
        chapterId: "fnd_08_mat_04",
        chapterTitle: "Exponents and Powers",
        subtopic: "Laws of Exponents",
        preparationLevel: "FOUNDATION",
        trackType: "CALCULATION_APPLICATION",
        cognitiveDimension: "APPLICATION",
        type: "NAT",
        difficulty: "Medium",
        text: "Evaluate and compute the single integer numeric response result for the mathematical exponential expression: (2⁻³ * 2⁵)³. (Input an integer response value only).",
        correctAnswer: "64",
        solution: "Laws of Exponents Path: 2⁻³ * 2⁵ = 2², and (2²)³ = 2⁶ = 64.",
        marks: 4
    },
    // --- CHAPTER: FUTURE TECH LAB EXAMPLES ---
    {
        id: "fnd_08_che_future_plastics_01",
        subject: "Chemistry",
        grade: "8",
        chapterId: "fnd_08_che_01",
        chapterTitle: "Synthetic Fibres and Plastics",
        subtopic: "Biopolymers",
        preparationLevel: "FOUNDATION",
        trackType: "CONCEPTUAL_QUIZ",
        cognitiveDimension: "APPLICATION",
        type: "MCQ",
        difficulty: "Hard",
        text: "To combat the global microplastic pollution crisis, next-generation deep tech startups are manufacturing PHA (Polyhydroxyalkanoates) bioplastics. Which biological phenomenon differentiates PHA architectures from regular synthetic petroleum polymers?",
        options: [
            "They are synthesized entirely by marine bacteria consuming organic waste and dissolve into harmless water in under 90 days",
            "They maintain a permanent electrical charge field that repels water molecules mechanically",
            "They transform into pure crude oil when exposed to direct atmospheric sunlight lines",
            "They possess carbon diamond structures making them immune to mechanical shearing forces"
        ],
        correctAnswer: "They are synthesized entirely by marine bacteria consuming organic waste and dissolve into harmless water in under 90 days",
        solution: "Future Application Insight: PHA biopolymers are synthesized naturally within microbial cells as energy-storage materials, making them biodegradable by common environmental microbes.",
        marks: 5
    },
    // --- CHAPTER: GRAVITATION (PHYSICS) ---
    {
        id: "fnd_09_phy_grav_nat_01",
        subject: "Physics",
        grade: "9",
        chapterId: "fnd_09_phy_03",
        chapterTitle: "Gravitation & Keplers Laws",
        subtopic: "Universal Law of Gravitation",
        preparationLevel: "FOUNDATION",
        trackType: "CALCULATION_APPLICATION",
        cognitiveDimension: "APPLICATION",
        type: "NAT",
        difficulty: "Medium",
        text: "An object weighs exactly 60 Newtons on the surface of the Earth. What would be its approximate weight in Newtons when measured on the surface of the Moon, considering the Moon's gravitational acceleration matrix field? (Input an integer response value only).",
        correctAnswer: "10",
        solution: "Gravitational Mechanics: The Moon's surface gravity is approximately one-sixth of Earth's. Therefore, lunar weight is 60 N × 1/6 = 10 N.",
        marks: 3
    },
    // --- CHAPTER: ATOMS AND MOLECULES (CHEMISTRY) ---
    {
        id: "fnd_09_che_atoms_mcq_01",
        subject: "Chemistry",
        grade: "9",
        chapterId: "fnd_09_che_03",
        chapterTitle: "Atoms, Molecules & Valency",
        subtopic: "Law of Constant Proportions",
        preparationLevel: "FOUNDATION",
        trackType: "CONCEPTUAL_QUIZ",
        cognitiveDimension: "UNDERSTANDING",
        type: "MCQ",
        difficulty: "Medium",
        text: "Pure water (H₂O) obtained from any source globally—whether river water, tap water, or synthesized in a laboratory grid—always contains Hydrogen and Oxygen combined in an absolute, unalterable ratio of 1:8 by mass. Which chemical law outlines this fixed distribution principle?",
        options: [
            "Law of Conservation of Mass",
            "Law of Definite / Constant Proportions",
            "Law of Multiple Proportions",
            "Avogadros Molecular Hypothesis"
        ],
        correctAnswer: "Law of Definite / Constant Proportions",
        solution: "Chemical Laws: The Law of Definite Proportions states that a compound always contains its component elements in a fixed ratio by mass, independent of its method of preparation.",
        marks: 2
    },
    // --- CHAPTER: PLANT & ANIMAL TISSUES (BIOLOGY) ---
    {
        id: "fnd_09_bio_tissue_mcq_01",
        subject: "Biology",
        grade: "9",
        chapterId: "fnd_09_bio_02",
        chapterTitle: "Plant & Animal Tissues Matrix",
        subtopic: "Plant Meristems",
        preparationLevel: "FOUNDATION",
        trackType: "CONCEPTUAL_QUIZ",
        cognitiveDimension: "KNOWLEDGE",
        type: "MCQ",
        difficulty: "Easy",
        text: "Which specific type of localized, actively dividing plant tissue structure is found at the growing tips of roots and stems, and is directly responsible for increasing the primary length of the plant body axis?",
        options: [
            "Lateral Meristem",
            "Apical Meristem",
            "Intercalary Meristem",
            "Permanent Sclerenchyma"
        ],
        correctAnswer: "Apical Meristem",
        solution: "Biological Core: Apical meristems occur at root and shoot tips and drive primary growth. Lateral meristems increase thickness, while intercalary meristems support growth near nodes.",
        marks: 2
    },
    // --- CHAPTER: POLYNOMIALS (MATHEMATICS) ---
    {
        id: "fnd_09_mat_poly_nat_01",
        subject: "Mathematics",
        grade: "9",
        chapterId: "fnd_09_mat_02",
        chapterTitle: "Polynomials & Factor Theorem",
        subtopic: "Remainder Theorem",
        preparationLevel: "FOUNDATION",
        trackType: "CALCULATION_APPLICATION",
        cognitiveDimension: "APPLICATION",
        type: "NAT",
        difficulty: "Medium",
        text: "Find the exact integer remainder value obtained when the polynomial algebraic expression p(x) = x³ - 3x² + 4x + 5 is divided completely by the linear term (x - 2). (Input an integer response value only).",
        correctAnswer: "9",
        solution: "Remainder Theorem Path: The remainder is p(2) = 2³ - 3(2²) + 4(2) + 5 = 8 - 12 + 8 + 5 = 9.",
        marks: 3
    },
    // --- FUTURE TECH LAB: AEROSPACE GRAVITATION APPLICATION ---
    {
        id: "fnd_09_phy_future_space_01",
        subject: "Physics",
        grade: "9",
        chapterId: "fnd_09_phy_03",
        chapterTitle: "Gravitation & Keplers Laws",
        subtopic: "Orbital Mechanics",
        preparationLevel: "FOUNDATION",
        trackType: "FUTURE_TECH_LAB",
        cognitiveDimension: "APPLICATION",
        type: "MCQ",
        difficulty: "Hard",
        text: "Deep space aerospace exploration ventures like SpaceX and NASA utilize gravitational slingshot maneuvers (gravity assists) when sending robotic probes to the outer solar system. Which physics transformation describes this capability?",
        options: [
            "The probe absorbs chemical heat energy directly out of the planet's atmospheric skin layers",
            "The probe steals a tiny fraction of a massive planet's orbital angular momentum to accelerate its own heliocentric speed relative to the Sun",
            "The spacecraft acts as a temporary magnetic dip needle reflecting stellar solar wind loops",
            "Quantum tunneling particles dissolve the spacecraft frame to cross space instantly"
        ],
        correctAnswer: "The probe steals a tiny fraction of a massive planet's orbital angular momentum to accelerate its own heliocentric speed relative to the Sun",
        solution: "Future Application Insight: A gravity assist uses the planet's moving gravitational field to transfer a tiny amount of orbital momentum to the probe, increasing its heliocentric speed.",
        marks: 5
    },
    // --- CHAPTER: LIGHT - REFLECTION & REFRACTION (PHYSICS) ---
    {
        id: "fnd_10_phy_light_nat_01",
        subject: "Physics",
        grade: "10",
        chapterId: "fnd_10_phy_01",
        chapterTitle: "Light: Reflection & Refraction",
        subtopic: "Refractive Index Calculations",
        preparationLevel: "FOUNDATION",
        trackType: "CALCULATION_APPLICATION",
        cognitiveDimension: "APPLICATION",
        type: "NAT",
        difficulty: "Medium",
        text: "The absolute refractive index of a specific transparent glass block is exactly 1.5. If the speed of light in vacuum is 3 × 10⁸ meters per second, calculate the velocity of light passing through this glass medium in units of 10⁸ m/s. (Input an integer response value only).",
        correctAnswer: "2",
        solution: "Optical Physics: Using n = c / v, the medium velocity is v = c / n = (3 × 10⁸) / 1.5 = 2 × 10⁸ m/s. The numeric answer is 2.",
        marks: 3
    },
    // --- CHAPTER: CARBON AND ITS UNIQUE COMPOUNDS (CHEMISTRY) ---
    {
        id: "fnd_10_che_carbon_mcq_01",
        subject: "Chemistry",
        grade: "10",
        chapterId: "fnd_10_che_04",
        chapterTitle: "Carbon and its Unique Compounds",
        subtopic: "Versatile Nature of Carbon",
        preparationLevel: "FOUNDATION",
        trackType: "CONCEPTUAL_QUIZ",
        cognitiveDimension: "UNDERSTANDING",
        type: "MCQ",
        difficulty: "Medium",
        text: "Carbon exhibits the unique ability to form strong covalent bonds with many other carbon atoms, resulting in long straight chains, branched links, and ring systems. Which chemical property describes this self-linking capability?",
        options: [
            "Isomerism matrix splitting",
            "Tetravalency structural coordination",
            "Catenation",
            "Electronegative polarization shifts"
        ],
        correctAnswer: "Catenation",
        solution: "Carbon Chemistry: Catenation is the self-linking of atoms of the same element into long covalent chains. Carbon exhibits this extensively because of its compact atomic size and strong C-C bonds.",
        marks: 2
    },
    // --- CHAPTER: HEREDITY AND EVOLUTION (BIOLOGY) ---
    {
        id: "fnd_10_bio_heredity_mcq_01",
        subject: "Biology",
        grade: "10",
        chapterId: "fnd_10_bio_04",
        chapterTitle: "Heredity and Evolution Tracks",
        subtopic: "Mendelian Inheritance",
        preparationLevel: "FOUNDATION",
        trackType: "CONCEPTUAL_QUIZ",
        cognitiveDimension: "KNOWLEDGE",
        type: "MCQ",
        difficulty: "Easy",
        text: "During his monohybrid cross experiments using pure tall (TT) and pure dwarf (tt) pea plants, Gregor Mendel discovered that the resulting F1 generation was 100% tall. What is the phenotypic ratio of Tall to Dwarf plants when these F1 plants are self-pollinated to yield the F2 generation?",
        options: [
            "1:1 equal split",
            "9:3:3:1 matrix combination",
            "3:1 dominance expression",
            "1:2:1 genotypic coordinate"
        ],
        correctAnswer: "3:1 dominance expression",
        solution: "Genetics Principles: The F2 generation of a Mendelian monohybrid cross has a phenotypic ratio of three tall plants to one dwarf plant, or 3:1.",
        marks: 2
    },
    // --- CHAPTER: ARITHMETIC PROGRESSIONS (MATHEMATICS) ---
    {
        id: "fnd_10_mat_ap_nat_01",
        subject: "Mathematics",
        grade: "10",
        chapterId: "fnd_10_mat_03",
        chapterTitle: "Arithmetic Progressions Matrix",
        subtopic: "Sum of n terms",
        preparationLevel: "FOUNDATION",
        trackType: "CALCULATION_APPLICATION",
        cognitiveDimension: "APPLICATION",
        type: "NAT",
        difficulty: "Medium",
        text: "Calculate the exact total sum of the first 20 positive even integers: 2 + 4 + 6 + ... + 40. (Input an integer response value only).",
        correctAnswer: "420",
        solution: "Algebraic Progressions: With a = 2, d = 2, and n = 20, Sₙ = (n/2)[2a + (n - 1)d] = 10[4 + 38] = 420.",
        marks: 4
    },
    // --- FUTURE TECH LAB: ELECTRIC VEHICLES & BATTERY MATRICES ---
    {
        id: "fnd_10_che_future_ev_01",
        subject: "Chemistry",
        grade: "10",
        chapterId: "fnd_10_che_02",
        chapterTitle: "Acids, Bases, and Salts Matrix",
        subtopic: "Electrochemical Energy Storage",
        preparationLevel: "FOUNDATION",
        trackType: "FUTURE_TECH_LAB",
        cognitiveDimension: "APPLICATION",
        type: "MCQ",
        difficulty: "Hard",
        text: "Next-generation green tech startups are developing solid-state electrolytes to replace volatile liquid solvents inside commercial lithium-ion electric vehicle batteries. Which physical chemistry parameter explains why solid-state cells reduce thermal-runaway hazards?",
        options: [
            "They eliminate flammable chemical liquids completely, preventing dendrite growth from piercing boundaries and causing catastrophic internal short circuits",
            "They absorb external atmospheric nitrogen to cool down the chassis array mechanically",
            "They completely stop electrons from traveling through outside external wires",
            "They lower the battery's active weight matrix by turning liquid elements into gas forms instantly"
        ],
        correctAnswer: "They eliminate flammable chemical liquids completely, preventing dendrite growth from piercing boundaries and causing catastrophic internal short circuits",
        solution: "Future Technology Analytics: Solid-state ceramic or polymer electrolytes remove volatile liquid solvents and provide a more stable barrier against dendrite-driven internal short circuits.",
        marks: 5
    },
    // --- PHYSICS: ROTATIONAL MOTION (JEE MAIN DRILL) ---
    {
        id: "p11_phy_rot_mcq_01",
        subject: "Physics",
        grade: "11",
        chapterId: "p11_phy_05",
        chapterTitle: "Rotational Motion & Rigid Bodies",
        subtopic: "Moment of Inertia",
        preparationLevel: "JEE_MAIN_ADVANCED",
        trackType: "JEE_MAIN_DRILL",
        cognitiveDimension: "APPLICATION",
        type: "MCQ",
        difficulty: "Medium",
        text: "A thin uniform circular ring of mass M and radius R is rotating about its geometric axis perpendicular to its face plane. Calculate its Moment of Inertia about a tangent line running parallel to its natural rotational axis.",
        options: [
            "(1/2)MR²",
            "MR²",
            "2MR²",
            "(3/2)MR²"
        ],
        correctAnswer: "2MR²",
        solution: "Parallel Axis Theorem: The central perpendicular-axis inertia is I_cm = MR². Shifting to a parallel tangent by d = R gives I_tangent = I_cm + MR² = 2MR².",
        marks: 4
    },
    // --- CHEMISTRY: MOLE CONCEPT (JEE MAIN NAT) ---
    {
        id: "p11_che_mole_nat_01",
        subject: "Chemistry",
        grade: "11",
        chapterId: "p11_che_01",
        chapterTitle: "Some Basic Concepts (Mole Concept)",
        subtopic: "Stoichiometry",
        preparationLevel: "JEE_MAIN_ADVANCED",
        trackType: "JEE_MAIN_DRILL",
        cognitiveDimension: "APPLICATION",
        type: "NAT",
        difficulty: "Medium",
        text: "Calculate the total weight of pure carbon dioxide (CO₂) gas in grams produced when exactly 20 grams of pure Calcium Carbonate (CaCO₃) undergoes complete thermal decomposition following CaCO₃ → CaO + CO₂. (Atomic Masses: Ca=40, C=12, O=16. Input an integer value only).",
        correctAnswer: "9",
        solution: "Stoichiometric Path: CaCO₃ has molar mass 100 g/mol and produces CO₂ with molar mass 44 g/mol. Thus 20 g produces (44/100) × 20 = 8.8 g, which rounds to 9.",
        marks: 4
    },
    // --- MATHEMATICS: COMPLEX NUMBERS (JEE ADVANCED CHALLENGE) ---
    {
        id: "p11_mat_complex_multi_01",
        subject: "Mathematics",
        grade: "11",
        chapterId: "p11_mat_02",
        chapterTitle: "Complex Numbers & Quadratics",
        subtopic: "Cube Roots of Unity",
        preparationLevel: "JEE_MAIN_ADVANCED",
        trackType: "JEE_ADVANCED_CHALLENGE",
        cognitiveDimension: "APPLICATION",
        type: "MULTI_CORRECT",
        difficulty: "Hard",
        text: "Let ω and ω² represent the complex non-real cube roots of unity satisfying 1 + ω + ω² = 0. Select ALL the correct matching structural algebraic statements regarding this vector system space:",
        options: [
            "The value of the expression (1 - ω + ω²)(1 + ω - ω²) equals exactly 4",
            "The modulus value |ω| of any cube root parameter equals exactly 1",
            "The roots form the vertices of an equilateral triangle pinned on the complex Argand plane canvas",
            "The product valuation threshold (ω³ⁿ⁺¹) equals zero for all positive integer parameters"
        ],
        correctAnswer: "A,B,C",
        solution: "Advanced Proof: The first expression simplifies to (-2ω)(-2ω²) = 4ω³ = 4. The non-real cube roots have modulus 1 and form an equilateral triangle on the unit circle. Statement D is false because ω³ⁿ⁺¹ = ω, not zero.",
        marks: 4
    },
    // --- CHEMISTRY: ELECTROCHEMISTRY (JEE MAIN DRILL - NAT) ---
    {
        id: "p12_che_electro_nat_01",
        subject: "Chemistry",
        grade: "12",
        chapterId: "p12_che_02",
        chapterTitle: "Electrochemistry & Chemical Kinetics",
        subtopic: "Nernst Equation",
        preparationLevel: "JEE_MAIN_ADVANCED",
        trackType: "JEE_MAIN_DRILL",
        cognitiveDimension: "APPLICATION",
        type: "NAT",
        difficulty: "Medium",
        text: "Calculate the equilibrium constant (log K_c) at 298 K for a galvanic cell running on the net reaction: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s). (Take E°cell = 1.10 V and use 2.303RT/F = 0.059 V. Round to the nearest integer).",
        correctAnswer: "37",
        solution: "Electrochemical Equations: At equilibrium, E°cell = (0.059/n) log Kc. With n = 2, log Kc = (1.10 × 2) / 0.059 = 37.28, which rounds to 37.",
        marks: 4
    },
    // --- MATHEMATICS: CALCULUS INTEGRALS (JEE MAIN DRILL - MCQ) ---
    {
        id: "p12_mat_calc_mcq_01",
        subject: "Mathematics",
        grade: "12",
        chapterId: "p12_mat_02",
        chapterTitle: "Differential & Integral Calculus",
        subtopic: "Definite Integrals",
        preparationLevel: "JEE_MAIN_ADVANCED",
        trackType: "JEE_MAIN_DRILL",
        cognitiveDimension: "APPLICATION",
        type: "MCQ",
        difficulty: "Medium",
        text: "Evaluate the definite integral from 0 to π/2 of sin(x) / (sin(x) + cos(x)) dx.",
        options: [
            "π / 2",
            "π / 4",
            "π / 8",
            "Zero"
        ],
        correctAnswer: "π / 4",
        solution: "Using the substitution x → π/2 - x, the integral equals its complementary cosine form. Adding the two forms gives 2I = π/2, so I = π/4.",
        marks: 4
    },
    // --- PHYSICS: MAGNETISM (JEE ADVANCED CHALLENGE - MULTI-CORRECT) ---
    {
        id: "p12_phy_mag_multi_01",
        subject: "Physics",
        grade: "12",
        chapterId: "p12_phy_03",
        chapterTitle: "Magnetic Effects & Electromagnetic Induction",
        subtopic: "Electromagnetic Induction",
        preparationLevel: "JEE_MAIN_ADVANCED",
        trackType: "JEE_ADVANCED_CHALLENGE",
        cognitiveDimension: "APPLICATION",
        type: "MULTI_CORRECT",
        difficulty: "Hard",
        text: "A rigid rectangular wire loop of resistance R and self-inductance L is dropped through a localized region of uniform magnetic field B₀. Select all correct statements about the loop as it enters the field boundary.",
        options: [
            "The induced Lorentz forces oppose the downward velocity, conforming to Lenz's Law",
            "Mechanical energy converted during entry appears as thermal Joule heating I²R",
            "The induced current produces a magnetic field opposing the change in flux",
            "The loop accelerates beyond gravitational acceleration g due to constructive quantum polarization"
        ],
        correctAnswer: "A,B,C",
        solution: "Advanced Induction Proof: Faraday's and Lenz's Laws produce a counter-current and upward resisting force. Conservation of energy maps mechanical work into Joule heating, while the induced field opposes the changing flux. Statements A, B, and C are correct.",
        marks: 4
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
const CHAPTERS_REGISTRY = [
    // --- LEVEL 1: GRADE 8 BIOLOGY ---
    {
        id: "fnd_08_bio_01",
        title: "Cell Structure and Functions",
        grade: "8",
        subject: "Biology",
        category: "FOUNDATION",
        nodeCount: 4
    },
    {
        id: "fnd_08_bio_02",
        title: "Microorganisms: Friend and Foe",
        grade: "8",
        subject: "Biology",
        category: "FOUNDATION",
        nodeCount: 4
    },
    {
        id: "fnd_08_bio_03",
        title: "Crop Production and Management",
        grade: "8",
        subject: "Biology",
        category: "FOUNDATION",
        nodeCount: 4
    },
    {
        id: "fnd_08_bio_04",
        title: "Conservation of Plants and Animals",
        grade: "8",
        subject: "Biology",
        category: "FOUNDATION",
        nodeCount: 3
    },
    // --- LEVEL 1: GRADE 8 PHYSICS ---
    {
        id: "fnd_08_phy_01",
        title: "Force and Pressure",
        grade: "8",
        subject: "Physics",
        category: "FOUNDATION",
        nodeCount: 4
    },
    {
        id: "fnd_08_phy_02",
        title: "Friction",
        grade: "8",
        subject: "Physics",
        category: "FOUNDATION",
        nodeCount: 3
    },
    {
        id: "fnd_08_phy_03",
        title: "Sound and Waves",
        grade: "8",
        subject: "Physics",
        category: "FOUNDATION",
        nodeCount: 4
    },
    {
        id: "fnd_08_phy_04",
        title: "Chemical Effects of Electric Current",
        grade: "8",
        subject: "Physics",
        category: "FOUNDATION",
        nodeCount: 3
    },
    // --- LEVEL 1: GRADE 8 CHEMISTRY ---
    {
        id: "fnd_08_che_01",
        title: "Synthetic Fibres and Plastics",
        grade: "8",
        subject: "Chemistry",
        category: "FOUNDATION",
        nodeCount: 4
    },
    {
        id: "fnd_08_che_02",
        title: "Materials: Metals and Non-Metals",
        grade: "8",
        subject: "Chemistry",
        category: "FOUNDATION",
        nodeCount: 5
    },
    {
        id: "fnd_08_che_03",
        title: "Combustion and Flame Structures",
        grade: "8",
        subject: "Chemistry",
        category: "FOUNDATION",
        nodeCount: 4
    },
    // --- LEVEL 1: GRADE 8 MATHEMATICS ---
    {
        id: "fnd_08_mat_01",
        title: "Rational Numbers & Operations",
        grade: "8",
        subject: "Mathematics",
        category: "FOUNDATION",
        nodeCount: 4
    },
    {
        id: "fnd_08_mat_02",
        title: "Linear Equations in One Variable",
        grade: "8",
        subject: "Mathematics",
        category: "FOUNDATION",
        nodeCount: 4
    },
    {
        id: "fnd_08_mat_03",
        title: "Understanding Quadrilaterals",
        grade: "8",
        subject: "Mathematics",
        category: "FOUNDATION",
        nodeCount: 5
    },
    {
        id: "fnd_08_mat_04",
        title: "Exponents and Powers",
        grade: "8",
        subject: "Mathematics",
        category: "FOUNDATION",
        nodeCount: 3
    },
    // --- LEVEL 1: GRADE 9 PHYSICS ---
    {
        id: "fnd_09_phy_01",
        title: "Motion & Kinematics Basics",
        grade: "9",
        subject: "Physics",
        category: "FOUNDATION",
        nodeCount: 5
    },
    {
        id: "fnd_09_phy_02",
        title: "Force and Laws of Motion",
        grade: "9",
        subject: "Physics",
        category: "FOUNDATION",
        nodeCount: 5
    },
    {
        id: "fnd_09_phy_03",
        title: "Gravitation & Keplers Laws",
        grade: "9",
        subject: "Physics",
        category: "FOUNDATION",
        nodeCount: 4
    },
    {
        id: "fnd_09_phy_04",
        title: "Work, Energy, and Power",
        grade: "9",
        subject: "Physics",
        category: "FOUNDATION",
        nodeCount: 5
    },
    // --- LEVEL 1: GRADE 9 CHEMISTRY ---
    {
        id: "fnd_09_che_01",
        title: "Matter in Our Surroundings",
        grade: "9",
        subject: "Chemistry",
        category: "FOUNDATION",
        nodeCount: 4
    },
    {
        id: "fnd_09_che_02",
        title: "Is Matter Around Us Pure?",
        grade: "9",
        subject: "Chemistry",
        category: "FOUNDATION",
        nodeCount: 5
    },
    {
        id: "fnd_09_che_03",
        title: "Atoms, Molecules & Valency",
        grade: "9",
        subject: "Chemistry",
        category: "FOUNDATION",
        nodeCount: 6
    },
    // --- LEVEL 1: GRADE 9 BIOLOGY ---
    {
        id: "fnd_09_bio_01",
        title: "The Fundamental Unit of Life: Cell",
        grade: "9",
        subject: "Biology",
        category: "FOUNDATION",
        nodeCount: 5
    },
    {
        id: "fnd_09_bio_02",
        title: "Plant & Animal Tissues Matrix",
        grade: "9",
        subject: "Biology",
        category: "FOUNDATION",
        nodeCount: 6
    },
    {
        id: "fnd_09_bio_03",
        title: "Improvement in Food Resources",
        grade: "9",
        subject: "Biology",
        category: "FOUNDATION",
        nodeCount: 4
    },
    // --- LEVEL 1: GRADE 9 MATHEMATICS ---
    {
        id: "fnd_09_mat_01",
        title: "Number Systems & Real Coordinates",
        grade: "9",
        subject: "Mathematics",
        category: "FOUNDATION",
        nodeCount: 5
    },
    {
        id: "fnd_09_mat_02",
        title: "Polynomials & Factor Theorem",
        grade: "9",
        subject: "Mathematics",
        category: "FOUNDATION",
        nodeCount: 6
    },
    {
        id: "fnd_09_mat_03",
        title: "Coordinate Geometry Systems",
        grade: "9",
        subject: "Mathematics",
        category: "FOUNDATION",
        nodeCount: 4
    },
    {
        id: "fnd_09_mat_04",
        title: "Linear Equations in Two Variables",
        grade: "9",
        subject: "Mathematics",
        category: "FOUNDATION",
        nodeCount: 4
    },
    // --- LEVEL 1: GRADE 10 PHYSICS ---
    {
        id: "fnd_10_phy_01",
        title: "Light: Reflection & Refraction",
        grade: "10",
        subject: "Physics",
        category: "FOUNDATION",
        nodeCount: 5
    },
    {
        id: "fnd_10_phy_02",
        title: "Human Eye & Colorful World",
        grade: "10",
        subject: "Physics",
        category: "FOUNDATION",
        nodeCount: 4
    },
    {
        id: "fnd_10_phy_03",
        title: "Electricity & Circuit Laws",
        grade: "10",
        subject: "Physics",
        category: "FOUNDATION",
        nodeCount: 5
    },
    {
        id: "fnd_10_phy_04",
        title: "Magnetic Effects of Current",
        grade: "10",
        subject: "Physics",
        category: "FOUNDATION",
        nodeCount: 4
    },
    // --- LEVEL 1: GRADE 10 CHEMISTRY ---
    {
        id: "fnd_10_che_01",
        title: "Chemical Reactions & Equations",
        grade: "10",
        subject: "Chemistry",
        category: "FOUNDATION",
        nodeCount: 4
    },
    {
        id: "fnd_10_che_02",
        title: "Acids, Bases, and Salts Matrix",
        grade: "10",
        subject: "Chemistry",
        category: "FOUNDATION",
        nodeCount: 5
    },
    {
        id: "fnd_10_che_03",
        title: "Metals and Non-Metals Principles",
        grade: "10",
        subject: "Chemistry",
        category: "FOUNDATION",
        nodeCount: 5
    },
    {
        id: "fnd_10_che_04",
        title: "Carbon and its Unique Compounds",
        grade: "10",
        subject: "Chemistry",
        category: "FOUNDATION",
        nodeCount: 6
    },
    // --- LEVEL 1: GRADE 10 BIOLOGY ---
    {
        id: "fnd_10_bio_01",
        title: "Life Processes & Homeostasis",
        grade: "10",
        subject: "Biology",
        category: "FOUNDATION",
        nodeCount: 6
    },
    {
        id: "fnd_10_bio_02",
        title: "Control and Coordination",
        grade: "10",
        subject: "Biology",
        category: "FOUNDATION",
        nodeCount: 4
    },
    {
        id: "fnd_10_bio_03",
        title: "How do Organisms Reproduce?",
        grade: "10",
        subject: "Biology",
        category: "FOUNDATION",
        nodeCount: 5
    },
    {
        id: "fnd_10_bio_04",
        title: "Heredity and Evolution Tracks",
        grade: "10",
        subject: "Biology",
        category: "FOUNDATION",
        nodeCount: 4
    },
    // --- LEVEL 1: GRADE 10 MATHEMATICS ---
    {
        id: "fnd_10_mat_01",
        title: "Real Numbers & Trigonometry",
        grade: "10",
        subject: "Mathematics",
        category: "FOUNDATION",
        nodeCount: 5
    },
    {
        id: "fnd_10_mat_02",
        title: "Polynomials & Quadratic Equations",
        grade: "10",
        subject: "Mathematics",
        category: "FOUNDATION",
        nodeCount: 6
    },
    {
        id: "fnd_10_mat_03",
        title: "Arithmetic Progressions Matrix",
        grade: "10",
        subject: "Mathematics",
        category: "FOUNDATION",
        nodeCount: 5
    },
    {
        id: "fnd_10_mat_04",
        title: "Circles & Coordinate Systems",
        grade: "10",
        subject: "Mathematics",
        category: "FOUNDATION",
        nodeCount: 5
    },
    // --- LEVEL 2: JEE MAIN / ADVANCED HIGH SCHOOL TIERS ---
    {
        id: "p11_01",
        title: "Units and Measurements",
        grade: "11",
        subject: "Physics",
        category: "JEE_PREP",
        nodeCount: 7
    },
    {
        id: "p11_02",
        title: "Motion in a Straight Line",
        grade: "11",
        subject: "Physics",
        category: "JEE_PREP",
        nodeCount: 8
    },
    {
        id: "p11_03",
        title: "Laws of Motion",
        grade: "11",
        subject: "Physics",
        category: "JEE_PREP",
        nodeCount: 8
    },
    {
        id: "p12_01",
        title: "Electrostatics & Electric Charges",
        grade: "12",
        subject: "Physics",
        category: "JEE_PREP",
        nodeCount: 2
    },
    {
        id: "p12_02",
        title: "Current Electricity & Circuits",
        grade: "12",
        subject: "Physics",
        category: "JEE_PREP",
        nodeCount: 1
    },
    // --- LEVEL 2: CLASS 11 PHYSICS JEE PREP ---
    {
        id: "p11_phy_01",
        title: "Units, Measurements & Errors",
        grade: "11",
        subject: "Physics",
        category: "JEE_PREP",
        nodeCount: 4
    },
    {
        id: "p11_phy_02",
        title: "Kinematics: Motion in 1D & 2D",
        grade: "11",
        subject: "Physics",
        category: "JEE_PREP",
        nodeCount: 6
    },
    {
        id: "p11_phy_03",
        title: "Newton's Laws of Motion & Friction",
        grade: "11",
        subject: "Physics",
        category: "JEE_PREP",
        nodeCount: 5
    },
    {
        id: "p11_phy_04",
        title: "Work, Energy, and Power Matrix",
        grade: "11",
        subject: "Physics",
        category: "JEE_PREP",
        nodeCount: 5
    },
    {
        id: "p11_phy_05",
        title: "Rotational Motion & Rigid Bodies",
        grade: "11",
        subject: "Physics",
        category: "JEE_PREP",
        nodeCount: 6
    },
    {
        id: "p11_phy_06",
        title: "Thermodynamics & Kinetic Theory",
        grade: "11",
        subject: "Physics",
        category: "JEE_PREP",
        nodeCount: 6
    },
    // --- LEVEL 2: CLASS 11 CHEMISTRY JEE PREP ---
    {
        id: "p11_che_01",
        title: "Some Basic Concepts (Mole Concept)",
        grade: "11",
        subject: "Chemistry",
        category: "JEE_PREP",
        nodeCount: 5
    },
    {
        id: "p11_che_02",
        title: "Atomic Structure & Quantum Numbers",
        grade: "11",
        subject: "Chemistry",
        category: "JEE_PREP",
        nodeCount: 5
    },
    {
        id: "p11_che_03",
        title: "Chemical Bonding & Molecular Shapes",
        grade: "11",
        subject: "Chemistry",
        category: "JEE_PREP",
        nodeCount: 6
    },
    {
        id: "p11_che_04",
        title: "Chemical & Ionic Equilibrium",
        grade: "11",
        subject: "Chemistry",
        category: "JEE_PREP",
        nodeCount: 6
    },
    // --- LEVEL 2: CLASS 11 MATHEMATICS JEE PREP ---
    {
        id: "p11_mat_01",
        title: "Sets, Relations, and Functions",
        grade: "11",
        subject: "Mathematics",
        category: "JEE_PREP",
        nodeCount: 4
    },
    {
        id: "p11_mat_02",
        title: "Complex Numbers & Quadratics",
        grade: "11",
        subject: "Mathematics",
        category: "JEE_PREP",
        nodeCount: 5
    },
    {
        id: "p11_mat_03",
        title: "Matrices & Determinants Matrix",
        grade: "11",
        subject: "Mathematics",
        category: "JEE_PREP",
        nodeCount: 5
    },
    {
        id: "p11_mat_04",
        title: "Permutations & Combinations (P&C)",
        grade: "11",
        subject: "Mathematics",
        category: "JEE_PREP",
        nodeCount: 4
    },
    // --- LEVEL 2: CLASS 12 PHYSICS JEE PREP ---
    {
        id: "p12_phy_01",
        title: "Electrostatics & Gauss's Law",
        grade: "12",
        subject: "Physics",
        category: "JEE_PREP",
        nodeCount: 4
    },
    {
        id: "p12_phy_02",
        title: "Current Electricity & Circuit Networks",
        grade: "12",
        subject: "Physics",
        category: "JEE_PREP",
        nodeCount: 5
    },
    {
        id: "p12_phy_03",
        title: "Magnetic Effects & Electromagnetic Induction",
        grade: "12",
        subject: "Physics",
        category: "JEE_PREP",
        nodeCount: 6
    },
    // --- LEVEL 2: CLASS 12 CHEMISTRY JEE PREP ---
    {
        id: "p12_che_01",
        title: "Solid State & Solutions Chemistry",
        grade: "12",
        subject: "Chemistry",
        category: "JEE_PREP",
        nodeCount: 4
    },
    {
        id: "p12_che_02",
        title: "Electrochemistry & Chemical Kinetics",
        grade: "12",
        subject: "Chemistry",
        category: "JEE_PREP",
        nodeCount: 5
    },
    {
        id: "p12_che_03",
        title: "Organic Chemistry: Functional Groups",
        grade: "12",
        subject: "Chemistry",
        category: "JEE_PREP",
        nodeCount: 7
    },
    // --- LEVEL 2: CLASS 12 MATHEMATICS JEE PREP ---
    {
        id: "p12_mat_01",
        title: "Relations, Functions & Inverse Trig",
        grade: "12",
        subject: "Mathematics",
        category: "JEE_PREP",
        nodeCount: 4
    },
    {
        id: "p12_mat_02",
        title: "Differential & Integral Calculus",
        grade: "12",
        subject: "Mathematics",
        category: "JEE_PREP",
        nodeCount: 7
    },
    {
        id: "p12_mat_03",
        title: "Vectors & 3D Geometry Systems",
        grade: "12",
        subject: "Mathematics",
        category: "JEE_PREP",
        nodeCount: 5
    }
];
const CHAPTERS = CHAPTERS_REGISTRY.filter((chapter)=>chapter.id === "p11_01" || chapter.id === "p11_02" || chapter.id === "p11_03" || chapter.id === "p12_01" || chapter.id === "p12_02");
function chapterTitle(id) {
    return CHAPTERS.find((chapter)=>chapter.id === id)?.title ?? id;
}
}),
"[project]/src/lib/jury.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "evaluateVentureProject",
    ()=>evaluateVentureProject
]);
function evaluateVentureProject(submission) {
    // Calibrate technical architecture depth into a physics score.
    const textLengthCheck = submission.technicalArchitectureSpecs.length;
    let physicsScore = Math.min(40 + textLengthCheck / 10, 98);
    const flaws = [];
    const milestones = [];
    if (submission.technicalArchitectureSpecs.toLowerCase().includes("graphene")) {
        physicsScore += 5;
        milestones.push("Integrate double-layer electrostatics equations into manufacturing blueprints.");
    } else {
        flaws.push("Architecture lacks localized physical backing parameters. Ground the technical specifications in core thermodynamics or quantum laws.");
    }
    return {
        evaluationId: `eval_${Math.random().toString(36).slice(2, 11)}`,
        projectId: submission.projectId,
        feasibilityScore: Math.round(physicsScore * 0.9),
        physicsGroundingScore: Math.round(Math.min(physicsScore, 100)),
        marketDisruptionPotential: Math.round(50 + Math.random() * 45),
        criticalTechnicalFlaws: flaws.length > 0 ? flaws : [
            "None identified. Technical physics foundation is highly viable."
        ],
        suggestedAdvancementsMilestones: milestones.length > 0 ? milestones : [
            "Benchmark structural load capacities against industrial safety logs."
        ],
        overallVerdict: physicsScore >= 75 ? "VIABLE_SEED_STAGE" : "REVISION_REQUIRED"
    };
}
}),
"[project]/src/lib/profile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHeatmapNodeKey",
    ()=>getHeatmapNodeKey,
    "updateStudentProfileMetrics",
    ()=>updateStudentProfileMetrics
]);
function getHeatmapNodeKey(trackType, subtopicName) {
    return `${trackType}:${subtopicName}`;
}
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
        const heatmapNodeKey = getHeatmapNodeKey(latestReport.trackType, subName);
        // Ensure the nested tracking slots exist
        if (!profile.syllabusHeatmap[chId]) profile.syllabusHeatmap[chId] = {};
        if (!profile.syllabusHeatmap[chId][heatmapNodeKey]) {
            profile.syllabusHeatmap[chId][heatmapNodeKey] = {
                subtopicName: subName,
                timesTested: 0,
                correctAnswers: 0,
                accuracyPercentage: 0,
                lastTested: new Date().toISOString()
            };
        }
        const cell = profile.syllabusHeatmap[chId][heatmapNodeKey];
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

//# sourceMappingURL=src_17r61ga._.js.map