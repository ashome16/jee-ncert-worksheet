"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

type Level = "FOUNDATION" | "JEE";
type ProfileTab = "HEATMAP" | "REPORTS";
type Subject = "Mathematics" | "Physics" | "Chemistry" | "Biology";
type Chapter = { id: string; title: string; grade: string; subject: Subject; level: Level };
type AttemptRecord = { timestamp: string; topicTitle: string; trackType: string; difficulty: string; score: string; accuracy: number; cognitiveAlert: string };

type TimerHandle = ReturnType<typeof setInterval>;

const GLOBAL_SYLLABUS_REGISTRY: Chapter[] = [
  { id: "g8_mat_01", title: "Rational Numbers and Integers", grade: "8", subject: "Mathematics", level: "FOUNDATION" },
  { id: "g8_mat_02", title: "Linear Equations in One Variable", grade: "8", subject: "Mathematics", level: "FOUNDATION" },
  { id: "g8_phy_01", title: "Force, Friction, and Pressure Systems", grade: "8", subject: "Physics", level: "FOUNDATION" },
  { id: "g8_che_01", title: "Synthetic Fibres, Biopolymers and Plastics", grade: "8", subject: "Chemistry", level: "FOUNDATION" },
  { id: "g8_bio_01", title: "Cell Organelles, Functions and Structures", grade: "8", subject: "Biology", level: "FOUNDATION" },
  { id: "g9_mat_01", title: "Polynomials, Roots and Coordinate Geometry", grade: "9", subject: "Mathematics", level: "FOUNDATION" },
  { id: "g9_phy_01", title: "Gravitation, Laws of Motion and Kinematics", grade: "9", subject: "Physics", level: "FOUNDATION" },
  { id: "g10_mat_01", title: "Quadratic Equations and Trigonometry", grade: "10", subject: "Mathematics", level: "FOUNDATION" },
  { id: "g10_phy_01", title: "Light Reflection, Refraction and Human Eye", grade: "10", subject: "Physics", level: "FOUNDATION" },
  { id: "g11_mat_01", title: "Permutations, Combinations and Probability", grade: "11", subject: "Mathematics", level: "JEE" },
  { id: "g11_phy_01", title: "Units, Dimensions and Rotational Kinematics", grade: "11", subject: "Physics", level: "JEE" },
  { id: "g12_mat_01", title: "Matrices, Determinants and Vector Calculus", grade: "12", subject: "Mathematics", level: "JEE" },
  { id: "g12_phy_01", title: "Electrostatics, Gauss Law and Field Potentials", grade: "12", subject: "Physics", level: "JEE" },
  { id: "g12_phy_02", title: "Current Electricity and Advanced Circuit Networks", grade: "12", subject: "Physics", level: "JEE" },
];

const SUBJECT_ICONS: Record<Subject, string> = { Mathematics: "[M]", Physics: "[P]", Chemistry: "[C]", Biology: "[B]" };
const AVATARS = ["Student", "Scholar", "Robot", "Rocket", "Idea", "Focus"];
const JUNIOR_OPTIONS = ["A. x = -8", "B. x = 8", "C. x = -1", "D. x = 2"];
const SENIOR_OPTIONS = ["A. 2.4 meters", "B. 4.8 meters", "C. 1.2 meters", "D. 3.6 meters"];

const INITIAL_ATTEMPTS: AttemptRecord[] = [{ timestamp: "2 mins ago", topicTitle: "Electrostatics, Gauss Law and Field Potentials", trackType: "Full-Pattern JEE Mock Test", difficulty: "Mixed Matrix", score: "8/8 Marks", accuracy: 100, cognitiveAlert: "Standard parameters verified. Baseline engineering calculations executed smoothly." }];

function formatClock(seconds: number): string {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const remainder = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainder}`;
}

export default function Home() {
  const [activeProfileTab, setActiveProfileTab] = useState<ProfileTab>("HEATMAP");
  const [currentAvatar, setCurrentAvatar] = useState(AVATARS[0]);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [preparationLevel, setPreparationLevel] = useState<Level>("JEE");
  const [selectedGrade, setSelectedGrade] = useState("12");
  const [selectedSubject, setSelectedSubject] = useState<Subject>("Physics");
  const [selectedChapterId, setSelectedChapterId] = useState("g12_phy_01");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Mixed Matrix");
  const [examSubTrack, setExamSubTrack] = useState("JEE_MOCK_TEST");
  const [showWorksheet, setShowWorksheet] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [natAnswer, setNatAnswer] = useState("");
  const [totalDuration, setTotalDuration] = useState(180 * 60);
  const [timeLeft, setTimeLeft] = useState(180 * 60);
  const timerRef = useRef<TimerHandle | null>(null);
  const [attemptHistory, setAttemptHistory] = useState<AttemptRecord[]>(INITIAL_ATTEMPTS);
  const [masteryPercentages, setMasteryPercentages] = useState<Record<string, number>>({ g12_phy_01: 100, g12_phy_02: 45 });

  const currentFilteredChapters = useMemo(() => GLOBAL_SYLLABUS_REGISTRY.filter((chapter) => chapter.level === preparationLevel && chapter.grade === selectedGrade && chapter.subject === selectedSubject), [preparationLevel, selectedGrade, selectedSubject]);
  const heatmapChapters = currentFilteredChapters;
  const selectedChapter = GLOBAL_SYLLABUS_REGISTRY.find((chapter) => chapter.id === selectedChapterId);
  const recommendedChapter = currentFilteredChapters.find((chapter) => !masteryPercentages[chapter.id]) ?? currentFilteredChapters[0];
  const timePercentLeft = totalDuration > 0 ? (timeLeft / totalDuration) * 100 : 0;
  const elapsed = totalDuration - timeLeft;
  const clockSeconds = (elapsed * 6) % 360;
  const clockMinutes = ((elapsed / 60) * 6) % 360;
  const clockHours = ((elapsed / 3600) * 30) % 360;
  const progressArc = (timePercentLeft / 100) * (2 * Math.PI * 40);
  const perimeterColor = timePercentLeft >= 50 ? "stroke-emerald-500" : timePercentLeft >= 25 ? "stroke-amber-500" : "stroke-rose-500";

  useEffect(() => {
    if (!showWorksheet || hasSubmitted || timeLeft <= 0) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((previous) => {
        if (previous <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setHasSubmitted(true);
          return 0;
        }
        return previous - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [showWorksheet, hasSubmitted, timeLeft]);

  const resetAssessment = () => { setShowWorksheet(false); setHasSubmitted(false); setSelectedAnswer(null); setNatAnswer(""); };
  const handleLevelChange = (level: Level) => { const foundation = level === "FOUNDATION"; setPreparationLevel(level); setSelectedGrade(foundation ? "8" : "12"); setSelectedSubject(foundation ? "Mathematics" : "Physics"); setSelectedChapterId(foundation ? "g8_mat_01" : "g12_phy_01"); setExamSubTrack(foundation ? "CONCEPTUAL_QUIZ" : "JEE_MOCK_TEST"); resetAssessment(); };
  const handleGradeOrSubjectChange = (grade: string, subject: Subject) => { const firstMatch = GLOBAL_SYLLABUS_REGISTRY.find((chapter) => chapter.level === preparationLevel && chapter.grade === grade && chapter.subject === subject); setSelectedGrade(grade); setSelectedSubject(subject); setSelectedChapterId(firstMatch?.id ?? ""); resetAssessment(); };
  const handleGenerate = () => { const duration = examSubTrack === "JEE_MOCK_TEST" ? 180 * 60 : examSubTrack === "CONCEPTUAL_QUIZ" ? 15 * 60 : 45 * 60; setTotalDuration(duration); setTimeLeft(duration); setHasSubmitted(false); setSelectedAnswer(null); setNatAnswer(""); setShowWorksheet(true); };
  const handleSubmit = () => { if (timerRef.current) clearInterval(timerRef.current); const mcqCorrect = preparationLevel === "FOUNDATION" ? selectedAnswer === "B. x = 8" : selectedAnswer === "A. 2.4 meters"; const natCorrect = preparationLevel === "FOUNDATION" || natAnswer.trim() === "50"; const perfect = mcqCorrect && natCorrect; const record: AttemptRecord = { timestamp: "Just now", topicTitle: selectedChapter?.title ?? "Multi-topic session", trackType: examSubTrack === "JEE_MOCK_TEST" ? "Full-Pattern JEE Mock Test" : "Chapter practice", difficulty: selectedDifficulty, score: perfect ? "8/8 Marks" : "3/8 Marks", accuracy: perfect ? 100 : 40, cognitiveAlert: timeLeft === 0 ? "Auto-submitted: time limit expired before manual confirmation." : perfect ? "System evaluation finalized successfully." : "Review the response vector and repeat two focused calculation drills." }; setAttemptHistory((history) => [record, ...history]); setMasteryPercentages((mastery) => ({ ...mastery, [selectedChapterId]: perfect ? 100 : 65 })); setHasSubmitted(true); };

  return (
    <main className="min-h-screen bg-zinc-50 p-4 text-zinc-900 md:p-10"><div className="mx-auto max-w-6xl space-y-6 text-left">
      <section className="relative space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col items-start justify-between gap-4 border-b pb-4 md:flex-row md:items-center"><div className="relative flex min-w-[320px] items-center gap-3 rounded-xl bg-zinc-950 p-3.5 text-white"><button type="button" onClick={() => setShowAvatarPicker((open) => !open)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 px-2 text-[10px] font-black hover:bg-zinc-700">{currentAvatar}</button>{showAvatarPicker && <div className="absolute left-0 top-14 z-50 flex gap-1 rounded-xl border bg-white p-2 shadow-xl">{AVATARS.map((avatar) => <button key={avatar} type="button" onClick={() => { setCurrentAvatar(avatar); setShowAvatarPicker(false); }} className="rounded-lg px-2 py-1 text-[10px] font-bold text-zinc-700 hover:bg-zinc-100">{avatar}</button>)}</div>}<div><div className="text-sm font-extrabold">Account Workspace: sharvah</div><div className="mt-1 font-mono text-[10px] font-bold text-zinc-400">Active Tier: {preparationLevel === "FOUNDATION" ? "Foundation Grades 8-10" : "JEE Engine Classes 11-12"}</div></div></div><Link href="/predictor" className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-700">Open JoSAA Seat Predictor</Link></div>
        <div className="flex gap-4 border-b text-xs font-bold uppercase tracking-wider text-zinc-400"><button type="button" onClick={() => setActiveProfileTab("HEATMAP")} className={`border-b-2 pb-2 ${activeProfileTab === "HEATMAP" ? "border-zinc-900 text-zinc-900" : "border-transparent"}`}>Syllabus Performance Map</button><button type="button" onClick={() => setActiveProfileTab("REPORTS")} className={`border-b-2 pb-2 ${activeProfileTab === "REPORTS" ? "border-zinc-900 text-zinc-900" : "border-transparent"}`}>Activity and Diagnostic Reports</button></div>
        {activeProfileTab === "HEATMAP" ? <div className="space-y-2">{heatmapChapters.map((chapter) => { const percentage = masteryPercentages[chapter.id] ?? 0; const color = percentage >= 75 ? "bg-emerald-500" : percentage >= 40 ? "bg-amber-500" : "bg-rose-500"; return <div key={chapter.id} className="rounded-xl border bg-white p-4 shadow-sm"><div className="flex justify-between text-xs font-bold"><span>{SUBJECT_ICONS[chapter.subject]} {chapter.title}</span><span>{percentage}%</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-100"><div className={`h-full ${color}`} style={{ width: `${percentage}%` }} /></div></div>; })}</div> : <div className="space-y-3 rounded-xl border bg-zinc-50 p-5"><div className="flex justify-between border-b pb-2"><h4 className="text-xs font-bold uppercase tracking-wider">Rolling Sprint Performance Ledger</h4><span className="rounded bg-zinc-900 px-2 py-0.5 font-mono text-[10px] text-white">{attemptHistory.length > 0 ? "Live Telemetry Linked" : "Onboarding Status"}</span></div>{attemptHistory.map((record, index) => <div key={`${record.timestamp}-${index}`} className="rounded-xl border bg-white p-3 text-xs"><div className="flex justify-between font-bold"><span>{record.topicTitle}</span><span className="font-mono text-emerald-700">{record.score}</span></div><p className="mt-2 text-zinc-500">{record.trackType} | {record.difficulty} | {record.timestamp}</p><p className="mt-2 rounded-lg bg-zinc-50 p-2 italic text-zinc-600">{record.cognitiveAlert}</p></div>)}</div>}
      </section>

      <div className="grid items-start gap-6 lg:grid-cols-3"><section className="space-y-5 rounded-2xl border bg-white p-6 shadow-sm"><h2 className="text-xl font-black">Generate Worksheet</h2><div className="space-y-4 text-xs font-bold"><div><label className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Preparation Level</label><div className="grid grid-cols-2 gap-2"><button type="button" onClick={() => handleLevelChange("FOUNDATION")} className={`rounded-xl border p-2.5 ${preparationLevel === "FOUNDATION" ? "bg-zinc-900 text-white" : "text-zinc-600"}`}>Foundation</button><button type="button" onClick={() => handleLevelChange("JEE")} className={`rounded-xl border p-2.5 ${preparationLevel === "JEE" ? "bg-zinc-900 text-white" : "text-zinc-600"}`}>JEE Prep</button></div></div><div><label htmlFor="grade" className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Target Grade</label><select id="grade" value={selectedGrade} onChange={(event) => handleGradeOrSubjectChange(event.target.value, selectedSubject)} className="w-full rounded-xl border p-2.5 text-sm">{(preparationLevel === "FOUNDATION" ? ["8", "9", "10"] : ["11", "12"]).map((grade) => <option key={grade} value={grade}>{preparationLevel === "FOUNDATION" ? `Grade ${grade}` : `Class ${grade}`}</option>)}</select></div><div><label htmlFor="subject" className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Select Subject</label><select id="subject" value={selectedSubject} onChange={(event) => handleGradeOrSubjectChange(selectedGrade, event.target.value as Subject)} className="w-full rounded-xl border p-2.5 text-sm"><option value="Mathematics">Mathematics</option><option value="Physics">Physics</option><option value="Chemistry">Chemistry</option>{preparationLevel === "FOUNDATION" && <option value="Biology">Biology</option>}</select></div><div><label htmlFor="chapter" className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Select Chapter</label><select id="chapter" value={selectedChapterId} onChange={(event) => setSelectedChapterId(event.target.value)} className="w-full rounded-xl border p-2.5 text-sm"><option value="">Choose topic</option>{currentFilteredChapters.map((chapter) => <option key={chapter.id} value={chapter.id}>{chapter.title}</option>)}</select></div><div><label htmlFor="difficulty" className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Difficulty</label><select id="difficulty" value={selectedDifficulty} onChange={(event) => setSelectedDifficulty(event.target.value)} className="w-full rounded-xl border p-2.5 text-sm"><option>Easy Mode</option><option>Medium Mode</option><option>Hard Mode</option><option>Mixed Matrix</option></select></div><div><label htmlFor="track" className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Exam Track</label><select id="track" value={examSubTrack} onChange={(event) => setExamSubTrack(event.target.value)} className="w-full rounded-xl border p-2.5 text-sm">{preparationLevel === "FOUNDATION" ? <><option value="CONCEPTUAL_QUIZ">Conceptual Quiz</option><option value="CALCULATION_APPLICATION">Calculation Applications</option><option value="FUTURE_TECH_LAB">Future Tech Lab</option></> : <><option value="JEE_MOCK_TEST">Full-Pattern JEE Mock Test</option><option value="JEE_MAIN_DRILL">JEE Main Chapter Drill</option><option value="JEE_ADVANCED_CHALLENGE">JEE Advanced Challenge</option></>}</select></div><button type="button" disabled={!selectedChapterId} onClick={handleGenerate} className="w-full rounded-xl bg-blue-600 py-3.5 uppercase text-white hover:bg-blue-700 disabled:bg-zinc-300">Generate Worksheet</button></div></section>

      <section className="space-y-4 lg:col-span-2">{showWorksheet ? <div className="space-y-6 rounded-2xl border bg-white p-6 shadow-sm"><div className="flex flex-wrap items-start justify-between gap-4 border-b pb-4"><div><p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">Live Assessment Cockpit</p><h1 className="mt-1 text-xl font-black">{selectedChapter?.title}</h1></div><div className={`relative h-28 w-28 ${timePercentLeft < 25 ? "animate-pulse" : ""}`}><svg viewBox="0 0 100 100" className="h-full w-full -rotate-90"><circle cx="50" cy="50" r="40" fill="none" strokeWidth="6" className="stroke-zinc-100" /><circle cx="50" cy="50" r="40" fill="none" strokeWidth="6" strokeLinecap="round" strokeDasharray={`${progressArc} ${2 * Math.PI * 40}`} className={`transition-all duration-1000 ${perimeterColor}`} /></svg><div className="absolute inset-0 flex flex-col items-center justify-center"><span className="font-mono text-lg font-black">{formatClock(timeLeft)}</span><span className="text-[8px] uppercase text-zinc-400">remaining</span></div><div className="absolute left-1/2 top-1/2 h-8 w-0.5 origin-bottom bg-zinc-900" style={{ transform: `translate(-50%, -100%) rotate(${clockHours}deg)` }} /><div className="absolute left-1/2 top-1/2 h-10 w-0.5 origin-bottom bg-blue-600" style={{ transform: `translate(-50%, -100%) rotate(${clockMinutes}deg)` }} /><div className="absolute left-1/2 top-1/2 h-11 w-px origin-bottom bg-rose-500" style={{ transform: `translate(-50%, -100%) rotate(${clockSeconds}deg)` }} /></div></div><div className="border-b pb-5"><span className="rounded-md bg-rose-50 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-rose-600">Section A: MCQ</span><h3 className="mt-3 text-sm font-bold">{preparationLevel === "FOUNDATION" ? "Solve 3x - 7 = 5x + 9." : "A projectile has velocity v = 3i + 4j m/s. Taking g = 10 m/s^2, calculate the horizontal range."}</h3><div className="mt-4 grid gap-3 md:grid-cols-2">{(preparationLevel === "FOUNDATION" ? JUNIOR_OPTIONS : SENIOR_OPTIONS).map((option) => <button key={option} type="button" disabled={hasSubmitted} onClick={() => setSelectedAnswer(option)} className={`rounded-xl border p-3 text-left text-xs font-bold ${selectedAnswer === option ? "border-blue-600 bg-blue-50 text-blue-700" : "border-zinc-200 hover:bg-zinc-50"}`}>{option}</button>)}</div></div><div><span className="rounded-md bg-blue-50 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-blue-600">Section B: NAT</span><input type="text" value={natAnswer} disabled={hasSubmitted} onChange={(event) => setNatAnswer(event.target.value)} placeholder="Enter numerical answer" className="mt-3 w-full max-w-xs rounded-xl border p-2.5 text-xs" /></div>{!hasSubmitted && selectedAnswer && <button type="button" onClick={handleSubmit} className="w-full rounded-xl bg-zinc-900 py-3.5 text-xs font-bold uppercase text-white">Submit Assessment</button>}{hasSubmitted && <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-xs"><p className="font-black text-emerald-800">Assessment complete: {attemptHistory[0]?.score}</p><p className="mt-2">Solution key: {preparationLevel === "FOUNDATION" ? "x = 8." : "Time of flight is 0.8 s, so range = 2.4 m."}</p></div>}</div> : <div className="space-y-4 rounded-2xl border border-dashed bg-white p-8 shadow-sm"><h2 className="text-xl font-black">Welcome back, sharvah</h2><p className="text-sm text-zinc-500">{currentAvatar} Ready to level up your engineering milestones?</p><div className="rounded-xl border bg-zinc-50 p-4"><h3 className="font-black">Next Smart Milestone</h3><p className="mt-2 text-xs text-zinc-600">Your mastery for {recommendedChapter?.title ?? "the syllabus registry"} is currently unrated.</p><button type="button" onClick={() => { if (recommendedChapter) { setPreparationLevel(recommendedChapter.level); setSelectedGrade(recommendedChapter.grade); setSelectedSubject(recommendedChapter.subject); setSelectedChapterId(recommendedChapter.id); handleGenerate(); } }} className="mt-4 w-full rounded-lg bg-blue-600 py-2.5 text-xs font-bold uppercase text-white">Quick Start Suggested Session</button></div></div>}</section></div>
    </div></main>
  );
}
