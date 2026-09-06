"use client";

import { useState } from "react";
import Link from "next/link";

type Level = "FOUNDATION" | "JEE";
type ProfileTab = "HEATMAP" | "REPORTS";
type Subject = "Mathematics" | "Physics" | "Chemistry" | "Biology";

type Chapter = {
  id: string;
  title: string;
  grade: string;
  subject: Subject;
  level: Level;
};

const SYLLABUS_REGISTRY: Chapter[] = [
  { id: "fnd_08_mat_01", title: "Rational Numbers and Linear Equations", grade: "8", subject: "Mathematics", level: "FOUNDATION" },
  { id: "fnd_08_che_01", title: "Synthetic Fibres and Plastics (Biopolymers)", grade: "8", subject: "Chemistry", level: "FOUNDATION" },
  { id: "fnd_08_bio_01", title: "Cell Organelles and Structures", grade: "8", subject: "Biology", level: "FOUNDATION" },
  { id: "fnd_09_mat_01", title: "Coordinate Geometry and Polynomials", grade: "9", subject: "Mathematics", level: "FOUNDATION" },
  { id: "fnd_09_phy_01", title: "Gravitation and Laws of Motion", grade: "9", subject: "Physics", level: "FOUNDATION" },
  { id: "fnd_10_mat_01", title: "Quadratic Equations and Trigonometry", grade: "10", subject: "Mathematics", level: "FOUNDATION" },
  { id: "fnd_10_che_01", title: "Carbon and its Compounds", grade: "10", subject: "Chemistry", level: "FOUNDATION" },
  { id: "jee_11_mat_01", title: "Permutations, Combinations and Probability", grade: "11", subject: "Mathematics", level: "JEE" },
  { id: "jee_11_phy_01", title: "Kinematics and Laws of Motion", grade: "11", subject: "Physics", level: "JEE" },
  { id: "jee_12_mat_01", title: "Matrices, Determinants and Vector Calculus", grade: "12", subject: "Mathematics", level: "JEE" },
  { id: "jee_12_phy_01", title: "Electrostatics and Gauss's Law", grade: "12", subject: "Physics", level: "JEE" },
  { id: "jee_12_phy_02", title: "Current Electricity and Circuits", grade: "12", subject: "Physics", level: "JEE" },
];

const MCQ_OPTIONS = ["2.4 meters", "4.8 meters", "1.2 meters", "3.6 meters"];

export default function Home() {
  const [activeProfileTab, setActiveProfileTab] = useState<ProfileTab>("HEATMAP");
  const [preparationLevel, setPreparationLevel] = useState<Level>("JEE");
  const [selectedGrade, setSelectedGrade] = useState("12");
  const [selectedSubject, setSelectedSubject] = useState<Subject>("Physics");
  const [selectedChapterId, setSelectedChapterId] = useState("jee_12_phy_01");
  const [examSubTrack, setExamSubTrack] = useState("JEE_MOCK_TEST");
  const [showWorksheet, setShowWorksheet] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [natAnswer, setNatAnswer] = useState("");

  const matchingChapters = SYLLABUS_REGISTRY.filter((chapter) => chapter.level === preparationLevel && chapter.grade === selectedGrade && chapter.subject === selectedSubject);
  const heatmapChapters = SYLLABUS_REGISTRY.filter((chapter) => chapter.level === preparationLevel && chapter.grade === selectedGrade);
  const selectedChapter = SYLLABUS_REGISTRY.find((chapter) => chapter.id === selectedChapterId);

  const resetWorksheet = () => {
    setShowWorksheet(false);
    setHasSubmitted(false);
    setSelectedAnswer(null);
    setNatAnswer("");
  };

  const changeLevel = (level: Level) => {
    const foundation = level === "FOUNDATION";
    setPreparationLevel(level);
    setSelectedGrade(foundation ? "8" : "12");
    setSelectedSubject(foundation ? "Mathematics" : "Physics");
    setSelectedChapterId(foundation ? "fnd_08_mat_01" : "jee_12_phy_01");
    setExamSubTrack(foundation ? "CONCEPTUAL_QUIZ" : "JEE_MOCK_TEST");
    resetWorksheet();
  };

  const changeGradeOrSubject = (grade: string, subject: Subject) => {
    const firstMatch = SYLLABUS_REGISTRY.find((chapter) => chapter.level === preparationLevel && chapter.grade === grade && chapter.subject === subject);
    setSelectedGrade(grade);
    setSelectedSubject(subject);
    setSelectedChapterId(firstMatch?.id ?? "");
    resetWorksheet();
  };

  const generateWorksheet = () => {
    setShowWorksheet(true);
    setHasSubmitted(false);
    setSelectedAnswer(null);
    setNatAnswer("");
  };

  return (
    <main className="min-h-screen bg-zinc-50 p-4 text-zinc-900 md:p-10">
      <div className="mx-auto max-w-6xl space-y-6 text-left">
        <section className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
            <div className="flex min-w-[280px] items-center gap-3 rounded-xl bg-zinc-900 p-3.5 text-white"><div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 font-mono font-black text-zinc-300">SH</div><div><div className="text-sm font-extrabold">Student Account: sharvah</div><div className="mt-0.5 font-mono text-[10px] font-bold text-zinc-400">Global Tracks Configured</div></div></div>
            <Link href="/predictor" className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-blue-700">Open JoSAA Seat Predictor Portal</Link>
          </div>
          <div className="flex gap-4 border-b text-xs font-bold uppercase tracking-wider text-zinc-400"><button type="button" onClick={() => setActiveProfileTab("HEATMAP")} className={`border-b-2 pb-2 ${activeProfileTab === "HEATMAP" ? "border-zinc-900 text-zinc-900" : "border-transparent"}`}>Syllabus Performance Heatmap</button><button type="button" onClick={() => setActiveProfileTab("REPORTS")} className={`border-b-2 pb-2 ${activeProfileTab === "REPORTS" ? "border-zinc-900 text-zinc-900" : "border-transparent"}`}>Submitted Reports ({hasSubmitted ? "1" : "0"})</button></div>
          {activeProfileTab === "HEATMAP" ? <div className="space-y-2">{heatmapChapters.map((chapter) => <div key={chapter.id} className="flex items-center justify-between rounded-xl border p-4 text-sm font-bold shadow-sm"><span>{chapter.title}</span><span className={`flex h-7 w-12 items-center justify-center rounded-md border font-mono text-[10px] ${hasSubmitted && chapter.id === selectedChapterId ? "border-emerald-600 bg-emerald-500 text-white" : "border-zinc-200 bg-zinc-100 text-zinc-400"}`}>{hasSubmitted && chapter.id === selectedChapterId ? "100%" : "--"}</span></div>)}</div> : <div className="rounded-xl border bg-zinc-50 p-4 text-xs">{hasSubmitted ? <div className="flex justify-between rounded-lg border bg-white p-3 font-bold"><span>Worksheet Evaluation Logged</span><span className="font-mono text-emerald-700">100% Accuracy Passed</span></div> : <p className="italic text-zinc-400">No evaluated sheets found.</p>}</div>}
        </section>

        <div className="grid items-start gap-6 lg:grid-cols-3">
          <section className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"><h2 className="text-xl font-black tracking-tight">Generate Worksheet</h2><div className="space-y-4 text-xs font-bold">
            <div><label className="mb-1.5 block font-mono text-[10px] uppercase text-zinc-400">Preparation Level</label><div className="grid grid-cols-2 gap-2"><button type="button" onClick={() => changeLevel("FOUNDATION")} className={`rounded-xl border p-2.5 ${preparationLevel === "FOUNDATION" ? "border-zinc-900 bg-zinc-900 text-white" : "text-zinc-600"}`}>Foundation</button><button type="button" onClick={() => changeLevel("JEE")} className={`rounded-xl border p-2.5 ${preparationLevel === "JEE" ? "border-zinc-900 bg-zinc-900 text-white" : "text-zinc-600"}`}>JEE Prep</button></div></div>
            <div><label htmlFor="grade" className="mb-1.5 block font-mono text-[10px] uppercase text-zinc-400">Target Grade Level</label><select id="grade" value={selectedGrade} onChange={(event) => changeGradeOrSubject(event.target.value, selectedSubject)} className="w-full rounded-xl border p-2.5 text-sm">{(preparationLevel === "FOUNDATION" ? ["8", "9", "10"] : ["11", "12"]).map((grade) => <option key={grade} value={grade}>{preparationLevel === "FOUNDATION" ? `Grade ${grade}` : `Class ${grade}`}</option>)}</select></div>
            <div><label htmlFor="subject" className="mb-1.5 block font-mono text-[10px] uppercase text-zinc-400">Select Subject</label><select id="subject" value={selectedSubject} onChange={(event) => changeGradeOrSubject(selectedGrade, event.target.value as Subject)} className="w-full rounded-xl border p-2.5 text-sm"><option value="Physics">Physics</option><option value="Chemistry">Chemistry</option><option value="Mathematics">Mathematics</option>{preparationLevel === "FOUNDATION" && <option value="Biology">Biology</option>}</select></div>
            <div><label htmlFor="chapter" className="mb-1.5 block font-mono text-[10px] uppercase text-zinc-400">Select Chapter Node</label><select id="chapter" value={selectedChapterId} onChange={(event) => setSelectedChapterId(event.target.value)} className="w-full rounded-xl border p-2.5 text-sm"><option value="">Choose Syllabus Topic</option>{matchingChapters.map((chapter) => <option key={chapter.id} value={chapter.id}>{chapter.title}</option>)}</select></div>
            <div><label htmlFor="track" className="mb-1.5 block font-mono text-[10px] uppercase text-zinc-400">Exam Sub-Track</label><select id="track" value={examSubTrack} onChange={(event) => setExamSubTrack(event.target.value)} className="w-full rounded-xl border p-2.5 text-sm">{preparationLevel === "FOUNDATION" ? <><option value="CONCEPTUAL_QUIZ">Conceptual Quiz</option><option value="CALCULATION_APPLICATION">Calculation Application</option><option value="FUTURE_TECH_LAB">Future Tech Lab</option></> : <><option value="JEE_MOCK_TEST">Full-Pattern JEE Mock Test</option><option value="JEE_MAIN_DRILL">JEE Main Drill</option><option value="JEE_ADVANCED_CHALLENGE">JEE Advanced Challenge</option></>}</select></div>
            <button type="button" disabled={!selectedChapterId} onClick={generateWorksheet} className="w-full rounded-xl bg-blue-600 py-3.5 uppercase tracking-wider text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-zinc-300">Generate Worksheet</button>
          </div></section>

          <section className="space-y-4 lg:col-span-2">{!showWorksheet ? <div className="rounded-2xl border border-dashed bg-white p-12 text-center text-sm text-zinc-400">Choose your filters and generate a worksheet to begin.</div> : <div className="space-y-6 rounded-2xl border bg-white p-6 shadow-sm"><div className="border-b pb-4"><p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">Assessment Worksheet</p><h1 className="mt-1 text-xl font-black">{selectedChapter?.title}</h1></div><div className="border-b pb-5"><span className="rounded-md border border-rose-100 bg-rose-50 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-rose-500">Section A: MCQ (+4 / -1)</span><h3 className="mt-3 text-sm font-bold leading-relaxed">Q1. A projectile is launched with velocity v = 3i + 4j m/s. Taking g = 10 m/s^2, calculate the horizontal range.</h3><div className="mt-4 grid gap-3 md:grid-cols-2">{MCQ_OPTIONS.map((option, index) => { const value = `${String.fromCharCode(65 + index)}. ${option}`; const selected = selectedAnswer === option; return <button key={option} type="button" disabled={hasSubmitted} onClick={() => setSelectedAnswer(option)} className={`rounded-xl border p-3 text-left text-xs font-bold ${hasSubmitted ? selected ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-zinc-100 text-zinc-300" : selected ? "border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600" : "border-zinc-200 hover:bg-zinc-50"}`}>{value}</button>; })}</div></div><div><span className="rounded-md border border-blue-100 bg-blue-50 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-blue-500">Section B: NAT</span><h3 className="mt-3 text-sm font-bold leading-relaxed">Q2. A block slides through a height of 5 m and strikes a spring. Enter the maximum compression in centimeters.</h3><input type="text" value={natAnswer} disabled={hasSubmitted} onChange={(event) => setNatAnswer(event.target.value)} placeholder="Enter numerical answer" className="mt-3 w-full max-w-xs rounded-xl border p-2.5 text-xs font-bold" /></div>{!hasSubmitted && selectedAnswer && <button type="button" onClick={() => setHasSubmitted(true)} className="w-full rounded-xl bg-zinc-900 py-3.5 text-xs font-bold uppercase tracking-wider text-white">Submit Assessment for Evaluation</button>}{hasSubmitted && <div className="space-y-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-xs text-emerald-900"><div className="font-extrabold text-sm">Results Evaluated: 8/8 Total Marks (100% Accuracy)</div><p><strong>Q1 Solution:</strong> Time of flight is 2(4)/10 = 0.8 s, so range is 3(0.8) = 2.4 m.</p><p><strong>Q2 Solution:</strong> Conservation of energy gives mgh = 1/2 kx^2; the calibrated answer is 50 cm.</p></div>}</div>}</section>
        </div>
      </div>
    </main>
  );
}
