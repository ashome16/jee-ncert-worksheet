"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

type Level = "FOUNDATION" | "JEE";
type ProfileTab = "HEATMAP" | "REPORTS";
type Subject = "Mathematics" | "Physics" | "Chemistry" | "Biology";
type ExamTrack = "JEE_MOCK_TEST" | "CONCEPTUAL_QUIZ" | "CHAPTER_PRACTICE";

type Chapter = { id: string; slug?: string; title: string; grade: string; subject: Subject; level: Level };
type AttemptRecord = { timestamp: string; topicTitle: string; trackType: string; difficulty: string; score: string; accuracy: number; cognitiveAlert: string };
type AnswerKey = { mcq: string; nat: string };

const SYLLABUS: Chapter[] = [
  { id: "g8_mat_01", slug: "rational-numbers-and-integers", title: "Rational Numbers and Integers", grade: "8", subject: "Mathematics", level: "FOUNDATION" },
  { id: "g8_mat_02", slug: "linear-equations-in-one-variable", title: "Linear Equations in One Variable", grade: "8", subject: "Mathematics", level: "FOUNDATION" },
  { id: "g8_mat_03", slug: "comparing-quantities", title: "Comparing Quantities", grade: "8", subject: "Mathematics", level: "FOUNDATION" },
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
const FOUNDATION_OPTIONS = ["A. x = -8", "B. x = 8", "C. x = -1", "D. x = 2"];
const JEE_OPTIONS = ["A. 2.4 meters", "B. 4.8 meters", "C. 1.2 meters", "D. 3.6 meters"];
const ANSWER_KEYS: Record<Level, AnswerKey> = { FOUNDATION: { mcq: "B. x = 8", nat: "50" }, JEE: { mcq: "A. 2.4 meters", nat: "50" } };
const INITIAL_ATTEMPTS: AttemptRecord[] = [{ timestamp: "2 mins ago", topicTitle: "Electrostatics, Gauss Law and Field Potentials", trackType: "Full-Pattern JEE Mock Test", difficulty: "Mixed Matrix", score: "8/8 Marks", accuracy: 100, cognitiveAlert: "Standard parameters verified. Baseline engineering calculations executed smoothly." }];

function formatTime(totalSeconds: number): string {
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

export default function Home() {
  const [profileTab, setProfileTab] = useState<ProfileTab>("HEATMAP");
  const [avatar, setAvatar] = useState(AVATARS[0]);
  const [avatarPickerOpen, setAvatarPickerOpen] = useState(false);
  const [level, setLevel] = useState<Level>("JEE");
  const [grade, setGrade] = useState("12");
  const [subject, setSubject] = useState<Subject>("Physics");
  const [chapterId, setChapterId] = useState("g12_phy_01");
  const [difficulty, setDifficulty] = useState("Mixed Matrix");
  const [track, setTrack] = useState<ExamTrack>("JEE_MOCK_TEST");
  const [worksheetOpen, setWorksheetOpen] = useState(false);
  const [foundationEmpty, setFoundationEmpty] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mcqAnswer, setMcqAnswer] = useState("");
  const [natAnswer, setNatAnswer] = useState("");
  const [duration, setDuration] = useState(180 * 60);
  const [timeLeft, setTimeLeft] = useState(180 * 60);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const deadlineRef = useRef<number | null>(null);
  const [attempts, setAttempts] = useState<AttemptRecord[]>(INITIAL_ATTEMPTS);
  const [mastery, setMastery] = useState<Record<string, number>>({ g12_phy_01: 100, g12_phy_02: 45 });

  const grades = level === "FOUNDATION" ? ["8", "9", "10"] : ["11", "12"];
  const filteredChapters = useMemo(() => SYLLABUS.filter((item) => item.level === level && item.grade === grade && item.subject === subject), [level, grade, subject]);
  const selectedChapter = SYLLABUS.find((item) => item.id === chapterId);
  const options = level === "FOUNDATION" ? FOUNDATION_OPTIONS : JEE_OPTIONS;
  const answerKey = ANSWER_KEYS[level];
  const elapsed = duration - timeLeft;
  const totalQuestions = 2;
  const answeredCount = Number(Boolean(mcqAnswer)) + Number(Boolean(natAnswer.trim()));
  const remainingCount = totalQuestions - answeredCount;

  const resetAssessment = () => { if (timerRef.current) clearInterval(timerRef.current); deadlineRef.current = null; setWorksheetOpen(false); setFoundationEmpty(false); setSubmitted(false); setMcqAnswer(""); setNatAnswer(""); };
  const changeLevel = (nextLevel: Level) => { const foundation = nextLevel === "FOUNDATION"; setLevel(nextLevel); setGrade(foundation ? "8" : "12"); setSubject(foundation ? "Mathematics" : "Physics"); setChapterId(foundation ? "g8_mat_01" : "g12_phy_01"); setTrack(foundation ? "CONCEPTUAL_QUIZ" : "JEE_MOCK_TEST"); resetAssessment(); };
  const changeFilters = (nextGrade: string, nextSubject: Subject) => { const firstChapter = SYLLABUS.find((item) => item.level === level && item.grade === nextGrade && item.subject === nextSubject); setGrade(nextGrade); setSubject(nextSubject); setChapterId(firstChapter?.id ?? ""); resetAssessment(); };
  const generateWorksheet = async () => {
    const nextDuration = track === "JEE_MOCK_TEST" ? 180 * 60 : track === "CONCEPTUAL_QUIZ" ? 15 * 60 : 45 * 60;
    setFoundationEmpty(false);
    if (level === "FOUNDATION" && grade === "8" && subject === "Mathematics") {
      const response = await fetch("/api/generate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ grade, subject, chapterId: selectedChapter?.slug ?? chapterId, difficulty: "Mixed", types: ["MCQ", "NAT"], count: 10 }) });
      const result = await response.json();
      if (!result.worksheet?.questions?.length) {
        setFoundationEmpty(true);
        setWorksheetOpen(true);
        return;
      }
    }
    deadlineRef.current = Date.now() + nextDuration * 1000; setDuration(nextDuration); setTimeLeft(nextDuration); setMcqAnswer(""); setNatAnswer(""); setSubmitted(false); setWorksheetOpen(true);
  };
  const submitAssessment = (autoSubmitted = false) => {
    if (timerRef.current) clearInterval(timerRef.current);
    const mcqCorrect = mcqAnswer === answerKey.mcq;
    const natCorrect = natAnswer.trim() === answerKey.nat;
    const score = (mcqCorrect ? 4 : 0) + (natCorrect ? 4 : 0);
    const record: AttemptRecord = { timestamp: "Just now", topicTitle: selectedChapter?.title ?? "Multi-topic session", trackType: track === "JEE_MOCK_TEST" ? "Full-Pattern JEE Mock Test" : track === "CONCEPTUAL_QUIZ" ? "Conceptual quiz" : "Chapter practice", difficulty, score: `${score}/8 Marks`, accuracy: score * 12.5, cognitiveAlert: autoSubmitted || timeLeft === 0 ? "Auto-submitted: time limit expired before manual confirmation." : score === 8 ? "System evaluation finalized successfully." : "Review the response vector and repeat two focused calculation drills." };
    setAttempts((history) => [record, ...history]);
    setMastery((current) => ({ ...current, [chapterId]: score === 8 ? 100 : 65 }));
    setSubmitted(true);
  };

  useEffect(() => {
    if (!worksheetOpen || submitted || deadlineRef.current === null) return;
    timerRef.current = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((deadlineRef.current! - Date.now()) / 1000));
      setTimeLeft(remaining);
      if (remaining === 0) {
        if (timerRef.current) clearInterval(timerRef.current);
        submitAssessment(true);
      }
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [worksheetOpen, submitted]);

  return (
    <main className="min-h-screen bg-zinc-50 p-4 text-zinc-900 md:p-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <section className="relative space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-4 border-b pb-4 md:flex-row md:items-center">
            <div className="relative flex min-w-[320px] items-center gap-3 rounded-xl bg-zinc-950 p-3.5 text-white">
              <button type="button" onClick={() => setAvatarPickerOpen((open) => !open)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 px-2 text-[10px] font-black">{avatar}</button>
              {avatarPickerOpen && <div className="absolute left-0 top-14 z-50 flex gap-1 rounded-xl border bg-white p-2 shadow-xl">{AVATARS.map((item) => <button key={item} type="button" onClick={() => { setAvatar(item); setAvatarPickerOpen(false); }} className="rounded-lg px-2 py-1 text-[10px] font-bold text-zinc-700 hover:bg-zinc-100">{item}</button>)}</div>}
              <div><div className="text-sm font-extrabold">Account Workspace: <span className="text-blue-400">sharvah</span></div><div className="mt-1 font-mono text-[10px] font-bold text-zinc-400">Active Tier: {level === "FOUNDATION" ? "Foundation Grades 8-10" : "JEE Engine Classes 11-12"}</div></div>
            </div>
            <Link href="/predictor" className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-700">Open JoSAA Seat Predictor</Link>
          </div>
          <div className="flex gap-4 border-b text-xs font-bold uppercase tracking-wider text-zinc-400"><button type="button" onClick={() => setProfileTab("HEATMAP")} className={`border-b-2 pb-2 ${profileTab === "HEATMAP" ? "border-zinc-900 text-zinc-900" : "border-transparent"}`}>Syllabus Performance Map</button><button type="button" onClick={() => setProfileTab("REPORTS")} className={`border-b-2 pb-2 ${profileTab === "REPORTS" ? "border-zinc-900 text-zinc-900" : "border-transparent"}`}>Activity and Diagnostic Reports</button></div>
          {profileTab === "HEATMAP" ? <div className="space-y-2">{filteredChapters.map((item) => { const score = mastery[item.id] ?? 0; return <div key={item.id} className="rounded-xl border p-4"><div className="flex justify-between text-xs font-bold"><span>{SUBJECT_ICONS[item.subject]} {item.title}</span><span>{score}%</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-100"><div className={`h-full ${score >= 75 ? "bg-emerald-500" : score >= 40 ? "bg-amber-500" : "bg-rose-500"}`} style={{ width: `${score}%` }} /></div></div>; })}</div> : <div className="space-y-3 rounded-xl border bg-zinc-50 p-5"><div className="flex justify-between border-b pb-2"><h2 className="text-xs font-bold uppercase tracking-wider">Rolling Sprint Performance Ledger</h2><span className="rounded bg-zinc-900 px-2 py-0.5 font-mono text-[10px] text-white">Live Telemetry Linked</span></div>{attempts.map((item, index) => <div key={`${item.timestamp}-${index}`} className="rounded-xl border bg-white p-3 text-xs"><div className="flex justify-between font-bold"><span>{item.topicTitle}</span><span className="text-emerald-700">{item.score}</span></div><p className="mt-2 text-zinc-500">{item.trackType} | {item.difficulty} | {item.timestamp}</p><p className="mt-2 rounded-lg bg-zinc-50 p-2 italic text-zinc-600">{item.cognitiveAlert}</p></div>)}</div>}
        </section>

        <div className="grid items-start gap-6 lg:grid-cols-3">
          <section className="space-y-5 rounded-2xl border bg-white p-6 shadow-sm"><h2 className="text-xl font-black">Generate Worksheet</h2><div className="space-y-4 text-xs font-bold">
            <div><label className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Preparation Level</label><div className="grid grid-cols-2 gap-2"><button type="button" onClick={() => changeLevel("FOUNDATION")} className={`rounded-xl border p-2.5 ${level === "FOUNDATION" ? "bg-zinc-900 text-white" : "text-zinc-600"}`}>Foundation</button><button type="button" onClick={() => changeLevel("JEE")} className={`rounded-xl border p-2.5 ${level === "JEE" ? "bg-zinc-900 text-white" : "text-zinc-600"}`}>JEE Prep</button></div></div>
            <div><label htmlFor="grade" className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Target Grade</label><select id="grade" value={grade} onChange={(event) => changeFilters(event.target.value, subject)} className="w-full rounded-xl border p-2.5 text-sm">{grades.map((item) => <option key={item} value={item}>{level === "FOUNDATION" ? `Grade ${item}` : `Class ${item}`}</option>)}</select></div>
            <div><label htmlFor="subject" className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Select Subject</label><select id="subject" value={subject} onChange={(event) => changeFilters(grade, event.target.value as Subject)} className="w-full rounded-xl border p-2.5 text-sm"><option>Mathematics</option><option>Physics</option><option>Chemistry</option>{level === "FOUNDATION" && <option>Biology</option>}</select></div>
            <div><label htmlFor="chapter" className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Select Chapter</label><select id="chapter" value={chapterId} onChange={(event) => { setChapterId(event.target.value); resetAssessment(); }} className="w-full rounded-xl border p-2.5 text-sm">{filteredChapters.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select></div>
            <div><label htmlFor="difficulty" className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Difficulty Matrix</label><select id="difficulty" value={difficulty} onChange={(event) => setDifficulty(event.target.value)} className="w-full rounded-xl border p-2.5 text-sm"><option>Easy</option><option>Medium</option><option>Hard</option><option>Mixed Matrix</option></select></div>
            <div><label htmlFor="track" className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Assessment Track</label><select id="track" value={track} onChange={(event) => setTrack(event.target.value as ExamTrack)} className="w-full rounded-xl border p-2.5 text-sm"><option value="JEE_MOCK_TEST">Full-Pattern JEE Mock Test</option><option value="CONCEPTUAL_QUIZ">Conceptual Quiz</option><option value="CHAPTER_PRACTICE">Chapter Practice</option></select></div>
            <button type="button" onClick={generateWorksheet} className="w-full rounded-xl bg-blue-600 px-4 py-3 text-xs font-black uppercase tracking-wider text-white hover:bg-blue-700">Generate NTA Worksheet</button>
          </div></section>

          <section className="space-y-4 lg:col-span-2">{worksheetOpen && foundationEmpty ? <div className="rounded-2xl border border-dashed bg-white p-10 text-center shadow-sm"><p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">Assessment cockpit standby</p><h2 className="mt-2 text-2xl font-black">No Foundation items for this chapter yet</h2><p className="mx-auto mt-2 max-w-md text-sm text-zinc-500">This chapter has no questions in its Foundation content shard.</p></div> : worksheetOpen ? <div className="space-y-6 rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-5 border-b pb-5"><div><p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">National Testing Agency | Computer Based Test</p><h1 className="mt-1 text-xl font-black">{selectedChapter?.title ?? "Multi-topic assessment"}</h1><p className="mt-1 text-xs text-zinc-500">Candidate: sharvah | Paper: {track}</p></div><div className={`flex min-w-[190px] items-center justify-between gap-3 rounded-md border border-zinc-300 bg-zinc-50 px-4 py-2 ${timeLeft <= 300 ? "animate-pulse text-red-600" : timeLeft <= 900 ? "text-red-600" : "text-red-900"}`}><span className="text-[11px] font-bold uppercase tracking-wide">Time Left</span><span className="font-mono text-xl font-bold tabular-nums tracking-widest">{formatTime(timeLeft)}</span></div></div>
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold uppercase"><div className="rounded-lg bg-emerald-50 p-2 text-emerald-700">Answered: {answeredCount}</div><div className="rounded-lg bg-zinc-100 p-2 text-zinc-600">Questions: {totalQuestions}</div><div className="rounded-lg bg-amber-50 p-2 text-amber-700">Remaining: {remainingCount}</div></div>
            <div className="border-b pb-6"><span className="rounded-md bg-rose-50 px-2 py-1 font-mono text-[10px] font-bold uppercase text-rose-600">Section A: MCQ | 4 Marks</span><h2 className="mt-3 text-sm font-bold">{level === "FOUNDATION" ? "Solve 3x - 7 = 5x + 9." : "A projectile has velocity v = 3i + 4j m/s. Taking g = 10 m/s^2, calculate the horizontal range."}</h2><div className="mt-4 grid gap-3 md:grid-cols-2">{options.map((option) => <label key={option} className={`cursor-pointer rounded-xl border p-3 text-sm ${mcqAnswer === option ? "border-blue-600 bg-blue-50" : "border-zinc-200"}`}><input type="radio" name="mcq" value={option} checked={mcqAnswer === option} onChange={(event) => setMcqAnswer(event.target.value)} disabled={submitted} className="mr-2" />{option}</label>)}</div></div>
            <div className="border-b pb-6"><span className="rounded-md bg-blue-50 px-2 py-1 font-mono text-[10px] font-bold uppercase text-blue-700">Section B: NAT | 4 Marks</span><h2 className="mt-3 text-sm font-bold">Enter the numerical value of the final answer. Use the nearest integer.</h2><p className="mt-2 text-xs text-zinc-500">A circuit has a 10 V source and a 5 ohm resistance. Find the current in amperes.</p><input aria-label="Numerical answer" type="text" inputMode="decimal" value={natAnswer} onChange={(event) => setNatAnswer(event.target.value)} disabled={submitted} className="mt-4 w-full rounded-xl border p-3 font-mono text-sm md:w-1/2" placeholder="Enter numerical answer" /></div>
            {submitted && <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm"><h2 className="font-black text-emerald-800">Evaluation Complete</h2><p className="mt-1 text-emerald-700">MCQ: {mcqAnswer === answerKey.mcq ? "Correct" : "Incorrect"} | NAT: {natAnswer.trim() === answerKey.nat ? "Correct" : "Incorrect"}</p><details className="mt-3 text-xs"><summary className="cursor-pointer font-bold">View evaluation answer key</summary><p className="mt-2 font-mono">MCQ key: {answerKey.mcq} | NAT key: {answerKey.nat}</p></details></div>}
            <div className="flex flex-wrap justify-between gap-3"><button type="button" onClick={resetAssessment} className="rounded-xl border px-4 py-3 text-xs font-bold text-zinc-600">Return to Filters</button>{!submitted && <button type="button" onClick={() => submitAssessment()} disabled={answeredCount === 0} className="rounded-xl bg-zinc-900 px-5 py-3 text-xs font-black uppercase text-white disabled:cursor-not-allowed disabled:opacity-40">Submit Assessment</button>}</div>
          </div> : <div className="rounded-2xl border border-dashed bg-white p-10 text-center shadow-sm"><p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">Assessment cockpit standby</p><h2 className="mt-2 text-2xl font-black">Configure your worksheet</h2><p className="mx-auto mt-2 max-w-md text-sm text-zinc-500">Choose a grade, subject, chapter, difficulty matrix, and assessment track to launch the timed paper.</p></div>}</section>
        </div>
        <footer className="flex justify-between border-t pt-4 font-mono text-[10px] uppercase tracking-wider text-zinc-400"><span>NTA Interface Protocol v2.0</span><span>Elapsed session: {formatTime(elapsed)}</span></footer>
      </div>
    </main>
  );
}
