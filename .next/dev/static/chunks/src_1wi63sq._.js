(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FilterPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WorksheetPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WorksheetPreview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bank$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/bank.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/chapters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/profile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
function getChapterMasteryPercent(subtopics, chapterStats) {
    if (subtopics.length === 0) return 0;
    const masteredCount = subtopics.filter((subtopic)=>(chapterStats[subtopic]?.accuracyPercentage ?? 0) >= 75).length;
    return Math.round(masteredCount / subtopics.length * 100);
}
function Home() {
    _s();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [worksheet, setWorksheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [studentName, setStudentName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pastRecords, setPastRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [expandedChapters, setExpandedChapters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [expandedArchiveChapters, setExpandedArchiveChapters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [portalLevel, setPortalLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("JEE_PREP");
    const [activeProfileTab, setActiveProfileTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("HEATMAP");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // Browser extensions can mutate form fields during hydration.
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsMounted(true);
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
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
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!profile || profile.identifiedWeakPoints.length === 0) return;
            // Force open any chapter accordion holding an active critical blind spot on load
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setExpandedChapters({
                "Home.useEffect": (prev)=>{
                    const next = {
                        ...prev
                    };
                    profile.identifiedWeakPoints.forEach({
                        "Home.useEffect": (weakPoint)=>{
                            next[weakPoint.chapterId] = true;
                        }
                    }["Home.useEffect"]);
                    return next;
                }
            }["Home.useEffect"]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Home.useEffect"], [
        profile?.studentName
    ]);
    const chapterRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[chapterRows]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS_REGISTRY"].map({
                "Home.useMemo[chapterRows]": (chapter)=>{
                    const questionSubtopics = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bank$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTION_BANK"].filter({
                        "Home.useMemo[chapterRows].questionSubtopics": (question)=>question.chapter === chapter.id
                    }["Home.useMemo[chapterRows].questionSubtopics"]).map({
                        "Home.useMemo[chapterRows].questionSubtopics": (question)=>question.subtopic ?? question.topic ?? "General"
                    }["Home.useMemo[chapterRows].questionSubtopics"])));
                    return {
                        id: chapter.id,
                        title: chapter.title,
                        grade: chapter.grade,
                        subject: chapter.subject,
                        category: chapter.category,
                        subtopics: questionSubtopics.length ? questionSubtopics : Array.from({
                            length: chapter.nodeCount
                        }, {
                            "Home.useMemo[chapterRows]": (_, index)=>`Node ${index + 1}`
                        }["Home.useMemo[chapterRows]"]),
                        subtopicsByTrack: ({
                            "Home.useMemo[chapterRows]": ()=>{
                                const trackTypes = chapter.category === "FOUNDATION" ? FOUNDATION_TRACKS : JEE_TRACKS;
                                const groups = Object.fromEntries(trackTypes.map({
                                    "Home.useMemo[chapterRows].groups": (track)=>[
                                            track,
                                            []
                                        ]
                                }["Home.useMemo[chapterRows].groups"]));
                                const chapterQuestions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bank$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTION_BANK"].filter({
                                    "Home.useMemo[chapterRows].chapterQuestions": (question)=>question.chapter === chapter.id || question.chapterId === chapter.id
                                }["Home.useMemo[chapterRows].chapterQuestions"]);
                                chapterQuestions.forEach({
                                    "Home.useMemo[chapterRows]": (question)=>{
                                        const subtopic = question.subtopic ?? question.topic ?? "General";
                                        const track = trackTypes.includes(question.trackType) ? question.trackType : trackTypes[0];
                                        if (!groups[track].includes(subtopic)) groups[track].push(subtopic);
                                    }
                                }["Home.useMemo[chapterRows]"]);
                                if (Object.values(groups).every({
                                    "Home.useMemo[chapterRows]": (subtopics)=>subtopics.length === 0
                                }["Home.useMemo[chapterRows]"])) {
                                    groups[trackTypes[0]] = questionSubtopics.length ? questionSubtopics : Array.from({
                                        length: chapter.nodeCount
                                    }, {
                                        "Home.useMemo[chapterRows]": (_, index)=>`Node ${index + 1}`
                                    }["Home.useMemo[chapterRows]"]);
                                }
                                return groups;
                            }
                        })["Home.useMemo[chapterRows]"]()
                    };
                }
            }["Home.useMemo[chapterRows]"])
    }["Home.useMemo[chapterRows]"], []);
    const visibleChapterRows = chapterRows.filter((chapter)=>chapter.category === portalLevel);
    if (!isMounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto min-h-screen w-full max-w-6xl px-4 py-8"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 213,
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
            alert(`Heatmap progress arrays tracking for "${currentStudentName}" have been reset.`);
            window.location.reload();
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
        alert("Student profile account metrics cleared successfully.");
        window.location.reload();
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
            chapterTitle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS_REGISTRY"].find((chapter)=>chapter.id === currentWorksheet.filters.chapter)?.title ?? currentWorksheet.filters.chapter,
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
        const activeStudentSession = studentName.trim();
        if (!activeStudentSession) return;
        const portalType = report.portalType ?? getPortalType(portalLevel);
        const trackType = report.trackType ?? (worksheet?.id === report.worksheetId ? worksheet.filters.trackTypes?.[0] : undefined) ?? "CONCEPTUAL_QUIZ";
        const enrichedReport = {
            ...report,
            studentId: activeStudentSession,
            portalType,
            trackType
        };
        const nextProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateStudentProfileMetrics"])(studentName.trim(), enrichedReport, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$bank$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTION_BANK"]);
        setProfile(nextProfile);
        const chapter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS_REGISTRY"].find((item)=>item.id === report.chapterId);
        const nextRecord = {
            id: report.submissionId,
            studentId: activeStudentSession,
            subject: report.subject,
            submittedAt: report.submittedAt,
            chapterTitle: report.chapterTitle ?? chapter?.title ?? report.chapterId,
            totalQuestions: report.totalQuestions,
            scoreObtained: report.scoreObtained,
            maxPossibleMarks: report.maxPossibleMarks,
            accuracyPercentage: report.accuracyPercentage,
            portalType,
            trackType
        };
        const nextRecords = [
            nextRecord,
            ...pastRecords
        ].slice(0, 12);
        setPastRecords(nextRecords);
        localStorage.setItem(`student_records_${studentName.trim().toLowerCase()}`, JSON.stringify(nextRecords));
    }
    function handleDeletePastRecord(recordId) {
        const activeStudentSession = studentName.trim();
        if (!activeStudentSession) return;
        const nextRecords = (pastRecords ?? []).filter((record)=>record.id !== recordId);
        setPastRecords(nextRecords);
        localStorage.setItem(`student_records_${activeStudentSession.toLowerCase()}`, JSON.stringify(nextRecords));
    }
    const activeStudentSession = studentName.trim();
    const activePortalType = getPortalType(portalLevel);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mx-auto min-h-screen w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex items-end justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-xs font-bold uppercase tracking-[0.24em] text-sky-700",
                                children: "Study command center"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 444,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-black tracking-tight text-zinc-950 sm:text-3xl",
                                children: "NCERT worksheet workspace"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 max-w-2xl text-sm text-zinc-500",
                                children: "Build targeted practice, review mastery, and keep every attempt organized by portal."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 446,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 443,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-500 shadow-sm sm:inline-flex",
                        children: "Live workspace"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 448,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 442,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 space-y-5 rounded-3xl border border-zinc-200/90 bg-white/95 p-4 text-left shadow-[0_18px_50px_-28px_rgba(15,23,42,0.35)] sm:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-between items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-extrabold text-zinc-900 tracking-tight",
                                        children: "Active Student Identity Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-zinc-500 mt-0.5",
                                        children: !studentName ? "Establish a localized student session tracker to log performance metrics analytics." : `Active tracking session registry locked onto student account node.`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 457,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 455,
                                columnNumber: 11
                            }, this),
                            studentName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 text-xs font-semibold no-print",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleResetStudentHeatmap(studentName),
                                        className: "text-amber-600 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1.5 rounded-xl transition",
                                        children: "Reset Profile Heatmap"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 466,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handlePermanentDeleteProfile(studentName),
                                        className: "text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 px-3 py-1.5 rounded-xl transition",
                                        children: "Delete Account Footprint"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 469,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleProfileSignOut(),
                                        className: "text-zinc-500 bg-zinc-100 hover:bg-zinc-200 px-3 py-1.5 rounded-xl transition",
                                        children: "Sign Out"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 472,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 465,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 454,
                        columnNumber: 9
                    }, this),
                    !studentName ? /* 📭 PROFILE SIGN IN INPUT STATE FORM CARD */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2 max-w-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            lineNumber: 482,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 481,
                        columnNumber: 11
                    }, this) : /* 📈 MOUNTED CURRENT ACTIVE PROFILE ANALYTICS SCORECARD INSIDE PROFILE CARD */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5 border-t border-zinc-100 pt-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex max-w-xl items-center space-x-3 rounded-2xl bg-zinc-950 p-4 text-white shadow-lg shadow-zinc-900/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center font-black text-sm uppercase text-zinc-300 font-mono",
                                        children: studentName.slice(0, 2)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 498,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-extrabold tracking-wide text-white",
                                                children: [
                                                    "Student Account: ",
                                                    studentName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 502,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                lineNumber: 503,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 497,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-xs font-bold uppercase tracking-widest text-zinc-500",
                                        children: "Choose your study portal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-3 md:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setPortalLevel("FOUNDATION"),
                                                "aria-pressed": portalLevel === "FOUNDATION",
                                                className: `rounded-xl border p-4 text-left transition ${portalLevel === "FOUNDATION" ? "border-amber-500 bg-amber-50 ring-2 ring-amber-200" : "border-zinc-200 bg-white hover:border-amber-300 hover:bg-amber-50/40"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-sm font-extrabold text-zinc-900",
                                                        children: "Level 1: JEE Foundation Hub"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 524,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-1 block text-xs text-zinc-500",
                                                        children: "Grades 8, 9, 10 • CBSE/ICSE Science & Maths"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 514,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setPortalLevel("JEE_PREP"),
                                                "aria-pressed": portalLevel === "JEE_PREP",
                                                className: `rounded-xl border p-4 text-left transition ${portalLevel === "JEE_PREP" ? "border-sky-500 bg-sky-50 ring-2 ring-sky-200" : "border-zinc-200 bg-white hover:border-sky-300 hover:bg-sky-50/40"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-sm font-extrabold text-zinc-900",
                                                        children: "Level 2: JEE Main / JEE Advanced"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-1 block text-xs text-zinc-500",
                                                        children: "Grades 11, 12 • Core Entrance Blueprints"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 531,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 513,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 509,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "no-print flex overflow-x-auto border-b border-zinc-200 text-xs font-bold uppercase tracking-wider text-zinc-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveProfileTab("HEATMAP"),
                                        className: `shrink-0 border-b-2 px-1 pb-3 transition ${activeProfileTab === "HEATMAP" ? "border-zinc-900 text-zinc-900" : "border-transparent hover:text-zinc-600"}`,
                                        children: "📊 Syllabus Performance Heatmap"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 552,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        lineNumber: 559,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 551,
                                columnNumber: 13
                            }, this),
                            activeProfileTab === "HEATMAP" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-zinc-50 border border-zinc-200 p-5 rounded-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-bold text-zinc-700 uppercase tracking-widest flex items-center",
                                                children: "📊 Syllabus Coverage Performance Heatmap Matrices"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 571,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-mono text-zinc-400 font-bold bg-white border px-2 py-0.5 rounded shadow-sm",
                                                children: [
                                                    "Registry Account Node: ",
                                                    studentName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 574,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 570,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 pt-1",
                                        children: visibleChapterRows.map((chapter)=>{
                                            const chapterStats = profile?.syllabusHeatmap?.[chapter.id] ?? {};
                                            const masteryPercent = getChapterMasteryPercent(chapter.subtopics, chapterStats);
                                            const isExpanded = expandedChapters[chapter.id] ?? false;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setExpandedChapters((prev)=>({
                                                                    ...prev,
                                                                    [chapter.id]: !isExpanded
                                                                })),
                                                        className: "flex w-full items-center justify-between gap-3 p-3 text-left transition hover:bg-zinc-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "block text-xs font-semibold text-zinc-800",
                                                                        children: chapter.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 595,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-0.5 block text-[10px] font-medium text-zinc-400",
                                                                        children: [
                                                                            "Class ",
                                                                            chapter.grade,
                                                                            " · ",
                                                                            chapter.subject
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 596,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 594,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-zinc-400 font-mono text-[10px]",
                                                                        children: [
                                                                            chapter.subtopics.length,
                                                                            " nodes"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 601,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-24 h-2 bg-zinc-200 rounded-full overflow-hidden",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-full bg-emerald-500 rounded-full transition-all",
                                                                            style: {
                                                                                width: `${masteryPercent}%`
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 603,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 602,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-zinc-400 font-mono text-[10px] w-8 text-right",
                                                                        children: [
                                                                            masteryPercent,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 608,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-zinc-400 text-xs",
                                                                        children: isExpanded ? "▲" : "▼"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 609,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 600,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 587,
                                                        columnNumber: 23
                                                    }, this),
                                                    isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3 border-t border-zinc-100 p-3 pt-2.5",
                                                        children: Object.entries(chapter.subtopicsByTrack ?? {}).map(([trackType, subtopics])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mb-1.5 flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "rounded-full bg-zinc-100 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-zinc-600",
                                                                                children: getTrackLabel(trackType)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/page.tsx",
                                                                                lineNumber: 618,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] text-zinc-400",
                                                                                children: [
                                                                                    subtopics.length,
                                                                                    " nodes"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/page.tsx",
                                                                                lineNumber: 621,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 617,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap gap-1.5",
                                                                        children: (subtopics ?? []).map((subtopic)=>{
                                                                            const stats = chapterStats[subtopic];
                                                                            const accuracy = stats?.accuracyPercentage ?? 0;
                                                                            const isUntouched = !stats || stats.timesTested === 0;
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                title: isUntouched ? `${subtopic}: Untouched topic area` : `${subtopic}: ${accuracy}% accuracy across ${stats.timesTested} attempts`,
                                                                                className: `flex h-9 w-9 items-center justify-center rounded-md border text-[10px] font-medium ${getHeatmapCellClass(stats)}`,
                                                                                children: isUntouched ? "" : `${accuracy}%`
                                                                            }, `${chapter.id}-${trackType}-${subtopic}`, false, {
                                                                                fileName: "[project]/src/app/page.tsx",
                                                                                lineNumber: 630,
                                                                                columnNumber: 37
                                                                            }, this);
                                                                        })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 623,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, trackType, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 616,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 614,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, chapter.id, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 586,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 579,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 569,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: filteredPastRecords.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "py-4 text-center text-sm font-medium text-zinc-400",
                                    children: "Generate and evaluate your first worksheet to start recording submission reports."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 656,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: Object.entries(groupedPastRecords ?? {}).map(([subject, chapters])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "border-b border-zinc-100 pb-1 pl-1 text-xs font-black uppercase tracking-widest text-zinc-400",
                                                    children: [
                                                        subject,
                                                        " Archive Ledger"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 663,
                                                    columnNumber: 25
                                                }, this),
                                                Object.entries(chapters ?? {}).map(([trackType, trackChapters])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 rounded-lg border border-zinc-100 bg-white/60 p-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "px-1 text-[11px] font-bold uppercase tracking-wider text-sky-700",
                                                                children: getTrackLabel(trackType)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 668,
                                                                columnNumber: 29
                                                            }, this),
                                                            Object.entries(trackChapters ?? {}).map(([chapterTitle, records])=>{
                                                                const archiveKey = `${subject}-${trackType}-${chapterTitle}`;
                                                                const isExpanded = expandedArchiveChapters[archiveKey] ?? false;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-xl border border-zinc-200 bg-zinc-50 p-3.5 text-xs",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>setExpandedArchiveChapters((previous)=>({
                                                                                        ...previous,
                                                                                        [archiveKey]: !isExpanded
                                                                                    })),
                                                                            className: "flex w-full items-center justify-between gap-3 text-left",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm font-bold text-zinc-800",
                                                                                    children: chapterTitle
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 687,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-mono text-[10px] text-zinc-400",
                                                                                    children: [
                                                                                        records?.length ?? 0,
                                                                                        " attempts ",
                                                                                        isExpanded ? "▲" : "▼"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 688,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 677,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "mt-2 space-y-2 border-t border-zinc-200 pt-2",
                                                                            children: (records ?? []).map((record)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    className: "flex items-center justify-between gap-3 rounded-lg border border-zinc-200 bg-white p-2.5 shadow-sm",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                                            lineNumber: 696,
                                                                                            columnNumber: 43
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            onClick: ()=>handleDeletePastRecord(record.id),
                                                                                            className: "shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] font-bold text-red-600 transition hover:bg-red-50",
                                                                                            children: "Delete"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/page.tsx",
                                                                                            lineNumber: 699,
                                                                                            columnNumber: 43
                                                                                        }, this)
                                                                                    ]
                                                                                }, record.id, true, {
                                                                                    fileName: "[project]/src/app/page.tsx",
                                                                                    lineNumber: 695,
                                                                                    columnNumber: 41
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 693,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, archiveKey, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 676,
                                                                    columnNumber: 33
                                                                }, this);
                                                            })
                                                        ]
                                                    }, trackType, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 667,
                                                        columnNumber: 27
                                                    }, this))
                                            ]
                                        }, subject, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 662,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 660,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 654,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 496,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 453,
                columnNumber: 7
            }, this),
            profile && profile.identifiedWeakPoints.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-print mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-700",
                        children: "Weak Points Alert"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 727,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: profile.identifiedWeakPoints.map((weakPoint, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-red-200 bg-white/80 px-3 py-2 text-sm text-red-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "⚠️ Critical Blindspot Detected:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 733,
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
                                lineNumber: 732,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 730,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 726,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-print mb-8 flex flex-wrap items-end justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-zinc-500",
                                children: "Worksheet generator"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 742,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-semibold tracking-tight text-zinc-900",
                                children: "NCERT practice sheets"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 743,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 741,
                        columnNumber: 9
                    }, this),
                    worksheet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>window.print(),
                        className: "rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50",
                        children: "Print / Save PDF"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 748,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 740,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "no-print mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 759,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm my-6 flex justify-between items-center text-left no-print",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-zinc-900",
                                children: "📊 JoSAA Seat Predictor & Advisory Portal"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 767,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-zinc-500 mt-0.5",
                                children: "Review your estimated JEE Advanced All India Ranks (AIR), check matching IIT program cutoffs, view tuition waivers, and track startup incubator tie-ups on a dedicated view panel page."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 768,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 766,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/predictor",
                        className: "bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold py-3 px-5 rounded-xl shadow-sm transition-all whitespace-nowrap tracking-wide",
                        children: "Launch Predictor Page →"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 774,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 765,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onGenerate: handleGenerate,
                            loading: loading
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 784,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 783,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WorksheetPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            worksheet: worksheet,
                            studentId: studentName,
                            onSubmitEvaluation: handleReportSubmission
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 787,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 786,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 782,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 441,
        columnNumber: 5
    }, this);
}
_s(Home, "gycJ/+8C8/LQdiju0Y0gX4YIS80=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FilterPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilterPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/chapters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ALL_TYPES = [
    "MCQ",
    "NAT",
    "FITB",
    "MULTI_CORRECT"
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
        value: "JEE_MAIN_DRILL",
        label: "JEE Main Practice Drills"
    },
    {
        value: "JEE_ADVANCED_CHALLENGE",
        label: "JEE Advanced Challenges"
    }
];
function FilterPanel({ onGenerate, loading }) {
    _s();
    const [grade, setGrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("11");
    const [subject, setSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Physics");
    const [chapter, setChapter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("p11_01");
    const [difficulty, setDifficulty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Mixed");
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(8);
    const [types, setTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        ...ALL_TYPES
    ]);
    const [includeAnswerKey, setIncludeAnswerKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [preparationLevel, setPreparationLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("JEE_MAIN_ADVANCED");
    const [foundationTracks, setFoundationTracks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "CONCEPTUAL_QUIZ"
    ]);
    const [examPrepTracks, setExamPrepTracks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "JEE_MAIN_DRILL"
    ]);
    const subjectOptions = [
        "Physics",
        ...[
            "8",
            "9",
            "10"
        ].includes(grade) ? [
            "Biology"
        ] : [],
        ...grade === "10" ? [
            "Mathematics"
        ] : []
    ];
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "no-print space-y-5 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm lg:sticky lg:top-6",
        onSubmit: (e)=>{
            e.preventDefault();
            onGenerate({
                subject,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-medium uppercase tracking-wide text-zinc-500",
                        children: [
                            "Class ",
                            grade,
                            " · ",
                            subject,
                            " · NCERT"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-1 text-lg font-semibold text-zinc-900",
                        children: "Generate worksheet"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        className: "text-sm font-medium text-zinc-700",
                        children: "Preparation level"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex overflow-hidden rounded-lg border border-zinc-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setPreparationLevel("FOUNDATION"),
                                className: `flex-1 px-3 py-2 text-xs font-medium transition ${preparationLevel === "FOUNDATION" ? "bg-zinc-900 text-white" : "bg-white text-zinc-600 hover:bg-zinc-50"}`,
                                children: "Foundation Track"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setPreparationLevel("JEE_MAIN_ADVANCED"),
                                className: `flex-1 border-l border-zinc-300 px-3 py-2 text-xs font-medium transition ${preparationLevel === "JEE_MAIN_ADVANCED" ? "bg-zinc-900 text-white" : "bg-white text-zinc-600 hover:bg-zinc-50"}`,
                                children: "JEE Exam Prep"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            preparationLevel === "FOUNDATION" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        className: "text-sm font-medium text-zinc-700",
                        children: "Foundation tracks"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex flex-wrap gap-2",
                        children: FOUNDATION_TRACKS.map((track)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `cursor-pointer rounded-full border px-3 py-1 text-xs font-medium ${foundationTracks.includes(track.value) ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-300 text-zinc-600"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        className: "sr-only",
                                        checked: foundationTracks.includes(track.value),
                                        onChange: ()=>toggleFoundationTrack(track.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FilterPanel.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this),
                                    track.label
                                ]
                            }, track.value, true, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        className: "text-sm font-medium text-zinc-700",
                        children: "Exam prep tracks"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex flex-wrap gap-2",
                        children: EXAM_PREP_TRACKS.map((track)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `cursor-pointer rounded-xl border px-3 py-2 text-xs font-medium ${examPrepTracks[0] === track.value ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-300 text-zinc-600"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        className: "sr-only",
                                        name: "exam-prep-track",
                                        checked: examPrepTracks[0] === track.value,
                                        onChange: ()=>setExamPrepTracks([
                                                track.value
                                            ])
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FilterPanel.tsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block",
                                        children: track.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FilterPanel.tsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-1 block text-[11px] font-normal opacity-80",
                                        children: track.value === "JEE_MAIN_DRILL" ? "Targets: Single-Correct MCQs and standard Integer NAT values" : "Targets: Multi-Correct Selection cards and precise calculation applications"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FilterPanel.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, track.value, true, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-zinc-700",
                children: [
                    "Grade target",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm",
                        value: grade,
                        onChange: (e)=>{
                            const nextGrade = e.target.value;
                            const nextSubject = [
                                "8",
                                "9",
                                "10"
                            ].includes(nextGrade) ? subject : "Physics";
                            setGrade(nextGrade);
                            setSubject(nextSubject);
                            setPreparationLevel([
                                "8",
                                "9",
                                "10"
                            ].includes(nextGrade) ? "FOUNDATION" : "JEE_MAIN_ADVANCED");
                            setChapter(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS_REGISTRY"].find((candidate)=>candidate.grade === nextGrade && candidate.subject === nextSubject)?.id ?? "p11_01");
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "8",
                                children: "Class 8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "9",
                                children: "Class 9"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "10",
                                children: "Class 10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "11",
                                children: "Class 11"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "12",
                                children: "Class 12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-zinc-700",
                children: [
                    "Subject",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm",
                        value: subject,
                        onChange: (e)=>{
                            const nextSubject = e.target.value;
                            setSubject(nextSubject);
                            setChapter(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS_REGISTRY"].find((candidate)=>candidate.grade === grade && candidate.subject === nextSubject)?.id ?? chapter);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Physics",
                                children: "Physics"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            subjectOptions.filter((option)=>option !== "Physics").map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: option,
                                    children: option
                                }, option, false, {
                                    fileName: "[project]/src/components/FilterPanel.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-zinc-700",
                children: [
                    "Chapter",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm",
                        value: chapter,
                        onChange: (e)=>setChapter(e.target.value),
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS_REGISTRY"].filter((c)=>c.grade === grade && c.subject === subject).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: c.id,
                                children: c.title
                            }, c.id, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-zinc-700",
                children: [
                    "Difficulty",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm",
                        value: difficulty,
                        onChange: (e)=>setDifficulty(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Mixed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Easy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Medium"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Hard"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        className: "text-sm font-medium text-zinc-700",
                        children: "Question types"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex flex-wrap gap-2",
                        children: ALL_TYPES.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `cursor-pointer rounded-full border px-3 py-1 text-xs font-medium ${types.includes(t) ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-300 text-zinc-600"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        className: "sr-only",
                                        checked: types.includes(t),
                                        onChange: ()=>toggleType(t)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FilterPanel.tsx",
                                        lineNumber: 291,
                                        columnNumber: 15
                                    }, this),
                                    t === "MCQ" ? "Multiple choice" : t === "NAT" ? "Numerical" : t === "FITB" ? "Fill in the blank" : "Multi-correct"
                                ]
                            }, t, true, {
                                fileName: "[project]/src/components/FilterPanel.tsx",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-zinc-700",
                children: [
                    "Number of questions",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        min: 1,
                        max: 20,
                        className: "mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm",
                        value: count,
                        onChange: (e)=>setCount(Number(e.target.value))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex items-center gap-2 text-sm text-zinc-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        checked: includeAnswerKey,
                        onChange: (e)=>setIncludeAnswerKey(e.target.checked)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterPanel.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this),
                    "Include answer key"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: loading,
                className: "w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-60",
                children: loading ? "Generating…" : "Generate worksheet"
            }, void 0, false, {
                fileName: "[project]/src/components/FilterPanel.tsx",
                lineNumber: 330,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FilterPanel.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(FilterPanel, "WCuCuIcnwfl4CsDd9abqdkUz8QU=");
_c = FilterPanel;
var _c;
__turbopack_context__.k.register(_c, "FilterPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MathRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MathRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function MathRenderer({ formula, block = false }) {
    const formattedFormula = formula.replace(/\*/g, "·").replace(/q1/g, "q₁").replace(/q2/g, "q₂").replace(/r\^2/g, "r²").replace(/ε_0/g, "ε₀").replace(/Q_enclosed/g, "Q_enclosed");
    if (block) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "my-3 rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-center font-mono text-xs font-semibold tracking-wide text-zinc-900",
            children: formattedFormula
        }, void 0, false, {
            fileName: "[project]/src/components/MathRenderer.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded border border-zinc-200 bg-zinc-100 px-1 font-mono text-[11px] font-semibold text-zinc-900",
        children: formattedFormula
    }, void 0, false, {
        fileName: "[project]/src/components/MathRenderer.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = MathRenderer;
var _c;
__turbopack_context__.k.register(_c, "MathRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/WorksheetPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorksheetPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MathRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MathRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/chapters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function renderMathText(text) {
    const needsMathFormatting = /[=]|\^|_|\*|\/|\+|\-/.test(text);
    if (!needsMathFormatting) {
        return text;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MathRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        formula: text
    }, void 0, false, {
        fileName: "[project]/src/components/WorksheetPreview.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
function WorksheetPreview({ worksheet, studentId, worksheetId, filters, onSubmitEvaluation }) {
    _s();
    const [localAnswers, setLocalAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const uniquePrinciples = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WorksheetPreview.useMemo[uniquePrinciples]": ()=>{
            if (!worksheet) return [];
            return Array.from(new Map(worksheet.questions.filter({
                "WorksheetPreview.useMemo[uniquePrinciples]": (question)=>question.principle
            }["WorksheetPreview.useMemo[uniquePrinciples]"]).map({
                "WorksheetPreview.useMemo[uniquePrinciples]": (question)=>[
                        question.principle.id,
                        question.principle
                    ]
            }["WorksheetPreview.useMemo[uniquePrinciples]"])).values());
        }
    }["WorksheetPreview.useMemo[uniquePrinciples]"], [
        worksheet
    ]);
    if (!worksheet || worksheet.questions.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "no-print rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-12 text-center text-sm font-medium text-zinc-400",
            children: "Choose a chapter and parameters on the filter panel to assemble a worksheet preview."
        }, void 0, false, {
            fileName: "[project]/src/components/WorksheetPreview.tsx",
            lineNumber: 53,
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
            studentId: studentId?.trim() || "unknown",
            portalType: worksheet.filters.preparationLevel === "FOUNDATION" ? "FOUNDATION" : "JEE_MAIN_ADVANCED",
            subject: worksheet.filters.subject,
            worksheetId: worksheet.id,
            chapterId: worksheet.filters.chapter,
            chapterTitle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTERS_REGISTRY"].find((chapter)=>chapter.id === worksheet.filters.chapter)?.title ?? worksheet.filters.chapter,
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
        onSubmitEvaluation?.(report);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "space-y-6 rounded-xl border border-zinc-200 bg-white p-8 text-left shadow-sm print:border-0 print:p-0 print:shadow-none",
        children: [
            uniquePrinciples.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "no-print rounded-xl border border-zinc-200 bg-zinc-50 p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-1.5 text-xs font-bold uppercase tracking-widest text-zinc-800",
                        children: "Dynamic Formula and Phenomenon Reference Index"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-xs leading-relaxed text-zinc-500",
                        children: "Core governing physics parameters represented in this worksheet."
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-2.5 text-xs",
                        children: uniquePrinciples.map((principle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-zinc-200 bg-white p-3 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-semibold text-zinc-800",
                                        children: principle.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-0.5 leading-normal text-zinc-500",
                                        children: [
                                            "Physical phenomenon: ",
                                            principle.phenomenon
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 inline-block rounded border border-zinc-200 bg-zinc-50 px-2 py-1 text-zinc-900",
                                        children: [
                                            "Governing formula: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MathRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                formula: principle.governingFormula
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                                lineNumber: 156,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, principle.id, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 150,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-start justify-between border-b border-zinc-200 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-0.5 text-2xl font-bold text-zinc-900",
                                children: worksheet.title || "Evaluation Practice Worksheet"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            worksheetId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 font-mono text-xs text-zinc-400",
                                children: [
                                    "Sheet Signature ID: ",
                                    worksheetId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-0.5 rounded-lg border bg-zinc-50 p-3 text-right text-xs font-medium text-zinc-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Total items:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 177,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    worksheet.questions.length,
                                    " questions"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Difficulty matrix:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 178,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    chosenDifficulty
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Maximum marks:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 179,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    totalMarks,
                                    " marks"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6 pt-2",
                children: worksheet.questions.map((question, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "break-inside-avoid space-y-3 border-b border-zinc-100 pb-5 last:border-0 last:pb-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-zinc-900",
                                        children: [
                                            "Q",
                                            index + 1,
                                            ". ",
                                            (question.subtopic || question.topic) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 rounded-md bg-zinc-100 px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wide text-zinc-700",
                                                children: question.subtopic ?? question.topic
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this),
                                            question.jeeMetrics?.historicalAppearancePercentage != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 rounded-md bg-amber-100 px-2 py-0.5 font-mono text-[11px] font-bold text-amber-800",
                                                children: [
                                                    "🎯 JEE Frequency Rank: ",
                                                    question.jeeMetrics.historicalAppearancePercentage,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "whitespace-nowrap font-mono text-xs font-medium text-zinc-400",
                                        children: [
                                            "[",
                                            question.marks,
                                            " marks]"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "whitespace-pre-wrap pl-1 text-sm leading-relaxed text-zinc-800",
                                children: renderMathText(question.text ?? question.stem ?? "")
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this),
                            question.type === "MCQ" && question.options && question.options.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-2.5 pt-1.5 text-sm text-zinc-700 md:grid-cols-2",
                                children: question.options.map((option, optionIndex)=>{
                                    const isSelected = localAnswers[question.id] === option;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleOptionSelect(question.id, option),
                                        className: `flex items-center rounded-lg border p-2.5 text-left transition ${isSelected ? "border-blue-500 bg-blue-50/50 text-blue-900 shadow-sm" : "border-zinc-200 bg-zinc-50/50 text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 font-mono text-xs font-bold text-zinc-400",
                                                children: [
                                                    String.fromCharCode(65 + optionIndex),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                                lineNumber: 222,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: renderMathText(option ?? "")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                                lineNumber: 225,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, option, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 212,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 207,
                                columnNumber: 15
                            }, this),
                            (question.type === "NAT" || question.type === "FITB") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "no-print pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[11px] font-medium uppercase tracking-wide text-zinc-400",
                                        children: question.type === "NAT" ? "Numerical input field" : "Fill in the blank response"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 233,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: localAnswers[question.id] ?? "",
                                        onChange: (event)=>handleTextInput(question.id, event.target.value ?? ""),
                                        placeholder: "Type numerical value answer...",
                                        className: "mt-2 h-10 w-full max-w-[260px] rounded-lg border border-zinc-200 bg-zinc-50 px-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 236,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 232,
                                columnNumber: 15
                            }, this)
                        ]
                    }, question.id || index, true, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-print flex justify-end gap-3 border-t border-zinc-200 pt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>window.print(),
                        className: "rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-xs font-semibold tracking-wide text-zinc-800 shadow-sm transition hover:bg-zinc-50",
                        children: "Print / Save PDF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>evaluateStudentSubmission(localAnswers),
                        className: "rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-sm transition hover:bg-blue-500",
                        children: "Submit Answers for Evaluation"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            worksheet.filters.includeAnswerKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "answer-key mt-10 border-t border-zinc-300 pt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: "Answer key"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 268,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "mt-3 space-y-3 text-sm",
                        children: worksheet.questions.map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: [
                                            i + 1,
                                            ". ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MathRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                formula: q.correctAnswer ?? q.answer ?? ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                                lineNumber: 273,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 272,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-zinc-600",
                                        children: q.solution
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                                        lineNumber: 275,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, q.id, true, {
                                fileName: "[project]/src/components/WorksheetPreview.tsx",
                                lineNumber: 271,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/WorksheetPreview.tsx",
                        lineNumber: 269,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WorksheetPreview.tsx",
                lineNumber: 267,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WorksheetPreview.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
_s(WorksheetPreview, "rA8M19b+vC49SJPhCFJlYxw8PqI=");
_c = WorksheetPreview;
var _c;
__turbopack_context__.k.register(_c, "WorksheetPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/bank.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/chapters.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    // --- LEVEL 1: FOUNDATION TRACK (GRADES 8, 9, 10) ---
    {
        id: "fnd_08_bio_01",
        title: "Cell Structure and Functions",
        grade: "8",
        subject: "Biology",
        category: "FOUNDATION",
        nodeCount: 4
    },
    {
        id: "fnd_09_phy_01",
        title: "Force and Laws of Motion (CBSE/ICSE)",
        grade: "9",
        subject: "Physics",
        category: "FOUNDATION",
        nodeCount: 5
    },
    {
        id: "fnd_10_mat_01",
        title: "Quadratic Equations & Progressions",
        grade: "10",
        subject: "Mathematics",
        category: "FOUNDATION",
        nodeCount: 6
    },
    // --- LEVEL 2: JEE EXAM PREP (GRADES 11, 12) ---
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
    }
];
const CHAPTERS = CHAPTERS_REGISTRY.filter(_c = (chapter)=>chapter.id === "p11_01" || chapter.id === "p11_02" || chapter.id === "p11_03" || chapter.id === "p12_01" || chapter.id === "p12_02");
_c1 = CHAPTERS;
function chapterTitle(id) {
    return CHAPTERS.find((chapter)=>chapter.id === id)?.title ?? id;
}
var _c, _c1;
__turbopack_context__.k.register(_c, "CHAPTERS$CHAPTERS_REGISTRY.filter");
__turbopack_context__.k.register(_c1, "CHAPTERS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/profile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1wi63sq._.js.map