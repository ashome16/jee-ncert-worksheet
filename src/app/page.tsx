"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Atom, Calculator, FlaskConical, GraduationCap, Leaf, Rocket, Sprout } from "lucide-react";

type Level = "FOUNDATION" | "JEE";
type ProfileTab = "HEATMAP" | "REPORTS";
type Subject = "Mathematics" | "Physics" | "Chemistry" | "Biology";
type ExamTrack = "JEE_MOCK_TEST" | "CONCEPTUAL_QUIZ" | "CHAPTER_PRACTICE";

type Chapter = { id: string; slug?: string; title: string; grade: string; subject: Subject; level: Level };
type AttemptRecord = { timestamp: string; topicTitle: string; trackType: string; difficulty: string; score: string; accuracy: number; cognitiveAlert: string };
type AnswerKey = { mcq: string; nat: string };
type FormulaCard = { id: string; name: string; latex: string; vars: Record<string, string>; example?: string };
type FoundationQuestion = { id: string; type: "MCQ" | "NAT"; stem: string; options?: string[]; answer: string; solution?: string; formulas?: FormulaCard[]; [key: string]: unknown };
type ProfileTrack = "foundation" | "jee";
type StudentProfile = { name: string; avatar?: string; track: ProfileTrack; grade: string };

const SYLLABUS: Chapter[] = [
  { id: "g8_mat_01", slug: "rational-numbers-and-integers", title: "Rational Numbers and Integers", grade: "8", subject: "Mathematics", level: "FOUNDATION" },
  { id: "g8_mat_02", slug: "linear-equations-in-one-variable", title: "Linear Equations in One Variable", grade: "8", subject: "Mathematics", level: "FOUNDATION" },
  { id: "g8_mat_03", slug: "comparing-quantities", title: "Comparing Quantities", grade: "8", subject: "Mathematics", level: "FOUNDATION" },
  { id: "g8_phy_01", slug: "force-friction-and-pressure-systems", title: "Force, Friction, and Pressure Systems", grade: "8", subject: "Physics", level: "FOUNDATION" },
  { id: "g8_che_01", slug: "synthetic-fibres-biopolymers-and-plastics", title: "Synthetic Fibres, Biopolymers and Plastics", grade: "8", subject: "Chemistry", level: "FOUNDATION" },
  { id: "g8_bio_01", slug: "cell-organelles-functions-and-structures", title: "Cell Organelles, Functions and Structures", grade: "8", subject: "Biology", level: "FOUNDATION" },
  { id: "g9_mat_01", slug: "polynomials-roots-and-coordinate-geometry", title: "Polynomials, Roots and Coordinate Geometry", grade: "9", subject: "Mathematics", level: "FOUNDATION" },
  { id: "g9_phy_01", slug: "gravitation-laws-of-motion-and-kinematics", title: "Gravitation, Laws of Motion and Kinematics", grade: "9", subject: "Physics", level: "FOUNDATION" },
  { id: "g10_mat_01", slug: "quadratic-equations-and-trigonometry", title: "Quadratic Equations and Trigonometry", grade: "10", subject: "Mathematics", level: "FOUNDATION" },
  { id: "g10_phy_01", slug: "light-reflection-refraction-and-human-eye", title: "Light Reflection, Refraction and Human Eye", grade: "10", subject: "Physics", level: "FOUNDATION" },
  { id: "g11_mat_01", slug: "permutations-combinations-and-probability", title: "Permutations, Combinations and Probability", grade: "11", subject: "Mathematics", level: "JEE" },
  { id: "g11_phy_01", slug: "units-dimensions-and-rotational-kinematics", title: "Units, Dimensions and Rotational Kinematics", grade: "11", subject: "Physics", level: "JEE" },
  { id: "g12_mat_01", slug: "matrices-determinants-and-vector-calculus", title: "Matrices, Determinants and Vector Calculus", grade: "12", subject: "Mathematics", level: "JEE" },
  { id: "g12_phy_01", slug: "electrostatics-gauss-law-and-field-potentials", title: "Electrostatics, Gauss Law and Field Potentials", grade: "12", subject: "Physics", level: "JEE" },
  { id: "g12_phy_02", slug: "current-electricity-and-advanced-circuit-networks", title: "Current Electricity and Advanced Circuit Networks", grade: "12", subject: "Physics", level: "JEE" },
];

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

function toNumericValue(value: string): number {
  const trimmed = value.trim();
  const fractionMatch = trimmed.match(/^(-?\d+)\s*\/\s*(-?\d+)$/);
  if (fractionMatch) return Number(fractionMatch[1]) / Number(fractionMatch[2]);
  return Number(trimmed);
}

const MASTERY_STORAGE_KEY = "syllabus_mastery_map_v1";
const PROFILE_STORAGE_KEY = "student-profile";
const FOUNDATION_GRADES = ["8", "9", "10"];
const JEE_GRADES = ["11", "12"];
const DEFAULT_PROFILE: StudentProfile = { name: "Sharvah", avatar: undefined, track: "foundation", grade: "8" };

function trackToLevel(track: ProfileTrack): Level {
  return track === "foundation" ? "FOUNDATION" : "JEE";
}

function levelToTrack(level: Level): ProfileTrack {
  return level === "FOUNDATION" ? "foundation" : "jee";
}

function capitalizeName(name: string): string {
  return name.trim().split(/\s+/).filter(Boolean).map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ") || "Student";
}

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  return (words[0][0] + (words[1]?.[0] ?? "")).toUpperCase();
}

function slugify(text: string): string {
  return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-+|-+$)/g, "");
}

// Composite key scopes mastery to the active track + grade + subject + chapter, e.g. foundation|8|mathematics|rational-numbers-and-integers
function masteryKey(levelValue: Level, gradeValue: string, subjectValue: Subject, slug: string): string {
  return `${levelValue.toLowerCase()}|${gradeValue}|${subjectValue.toLowerCase()}|${slug}`;
}

function chapterMasteryKey(chapter: Chapter | undefined, fallbackId: string): string {
  if (!chapter) return fallbackId;
  return masteryKey(chapter.level, chapter.grade, chapter.subject, chapter.slug ?? slugify(chapter.title));
}

const DEFAULT_MASTERY: Record<string, number> = {
  [masteryKey("JEE", "12", "Physics", "electrostatics-gauss-law-and-field-potentials")]: 100,
  [masteryKey("JEE", "12", "Physics", "current-electricity-and-advanced-circuit-networks")]: 45,
};

function isFoundationAnswerCorrect(question: FoundationQuestion, givenAnswer: string | undefined): boolean {
  const given = (givenAnswer ?? "").trim();
  if (!given) return false;
  if (question.type === "MCQ") return given.toUpperCase() === question.answer.trim().toUpperCase();
  const givenValue = toNumericValue(given);
  const correctValue = toNumericValue(question.answer);
  if (Number.isFinite(givenValue) && Number.isFinite(correctValue)) return givenValue === correctValue;
  return given.toLowerCase() === question.answer.trim().toLowerCase();
}

function SubjectIcon({ subject, className = "" }: { subject: Subject; className?: string }) {
  const iconProps = { "aria-hidden": true, className: `shrink-0 ${className}` };
  if (subject === "Mathematics") return <Calculator {...iconProps} />;
  if (subject === "Physics") return <Atom {...iconProps} />;
  if (subject === "Chemistry") return <FlaskConical {...iconProps} />;
  return <Leaf {...iconProps} />;
}

export default function Home() {
  const [profileTab, setProfileTab] = useState<ProfileTab>("HEATMAP");
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
  const [foundationQuestions, setFoundationQuestions] = useState<FoundationQuestion[]>([]);
  const [foundationAnswers, setFoundationAnswers] = useState<Record<string, string>>({});
  const [duration, setDuration] = useState(180 * 60);
  const [timeLeft, setTimeLeft] = useState(180 * 60);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const deadlineRef = useRef<number | null>(null);
  const [attempts, setAttempts] = useState<AttemptRecord[]>(INITIAL_ATTEMPTS);
  const [mastery, setMastery] = useState<Record<string, number>>(DEFAULT_MASTERY);
  const [profile, setProfile] = useState<StudentProfile>(DEFAULT_PROFILE);
  const [profileEditorOpen, setProfileEditorOpen] = useState(false);
  const [profileDraft, setProfileDraft] = useState<StudentProfile>(DEFAULT_PROFILE);

  const applyProfileToWorkspace = (nextProfile: StudentProfile) => {
    const nextLevel = trackToLevel(nextProfile.track);
    const firstChapter = SYLLABUS.find((item) => item.level === nextLevel && item.grade === nextProfile.grade);
    setLevel(nextLevel);
    setGrade(nextProfile.grade);
    setSubject(firstChapter?.subject ?? (nextLevel === "FOUNDATION" ? "Mathematics" : "Physics"));
    setChapterId(firstChapter?.id ?? "");
    setTrack(nextLevel === "FOUNDATION" ? "CONCEPTUAL_QUIZ" : "JEE_MOCK_TEST");
  };

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(PROFILE_STORAGE_KEY);
      const loaded = raw ? { ...DEFAULT_PROFILE, ...JSON.parse(raw) } : DEFAULT_PROFILE;
      setProfile(loaded);
      setProfileDraft(loaded);
      applyProfileToWorkspace(loaded);
    } catch {
      // ignore malformed or inaccessible storage
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const persistProfile = (nextProfile: StudentProfile) => {
    setProfile(nextProfile);
    try {
      window.localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(nextProfile));
    } catch {
      // ignore inaccessible storage
    }
  };

  const saveProfileFromEditor = () => {
    const cleanedDraft: StudentProfile = { ...profileDraft, name: profileDraft.name.trim() || DEFAULT_PROFILE.name };
    persistProfile(cleanedDraft);
    applyProfileToWorkspace(cleanedDraft);
    resetAssessment();
    setProfileEditorOpen(false);
  };

  const saveCurrentSelectionAsClass = () => {
    const nextProfile: StudentProfile = { ...profile, track: levelToTrack(level), grade };
    persistProfile(nextProfile);
    setProfileDraft(nextProfile);
  };

  const handleAvatarUpload = (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setProfileDraft((current) => ({ ...current, avatar: String(reader.result) }));
    reader.readAsDataURL(file);
  };

  const heatmapChapters = useMemo(
    () => SYLLABUS.filter((item) => item.level === trackToLevel(profile.track) && item.grade === profile.grade),
    [profile]
  );

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(MASTERY_STORAGE_KEY);
      if (raw) setMastery(JSON.parse(raw));
    } catch {
      // ignore malformed or inaccessible storage
    }
  }, []);

  const updateMastery = (key: string, value: number) => {
    setMastery((current) => {
      const next = { ...current, [key]: value };
      try {
        window.localStorage.setItem(MASTERY_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore inaccessible storage
      }
      return next;
    });
  };

  const grades = level === "FOUNDATION" ? ["8", "9", "10"] : ["11", "12"];
  const filteredChapters = useMemo(() => SYLLABUS.filter((item) => item.level === level && item.grade === grade && item.subject === subject), [level, grade, subject]);
  const selectedChapter = SYLLABUS.find((item) => item.id === chapterId);
  const isFoundationMathematics = level === "FOUNDATION" && grade === "8" && subject === "Mathematics";
  const options = level === "FOUNDATION" ? FOUNDATION_OPTIONS : JEE_OPTIONS;
  const answerKey = ANSWER_KEYS[level];
  const elapsed = duration - timeLeft;
  const standbyQuestionCount = level === "FOUNDATION" ? 8 : 2;
  const standbyDuration = level === "FOUNDATION" && track === "CONCEPTUAL_QUIZ" ? "about 12 minutes" : track === "JEE_MOCK_TEST" ? "about 3 hours" : "about 45 minutes";
  const standbyTrackName = track === "CONCEPTUAL_QUIZ" ? "Conceptual Quiz" : track === "JEE_MOCK_TEST" ? "JEE Mock Test" : "Chapter Practice";
  const totalQuestions = isFoundationMathematics && foundationQuestions.length > 0 ? foundationQuestions.length : 2;
  const answeredCount = isFoundationMathematics
    ? Object.values(foundationAnswers).filter((answer) => answer.trim()).length
    : Number(Boolean(mcqAnswer)) + Number(Boolean(natAnswer.trim()));
  const remainingCount = totalQuestions - answeredCount;

  const resetAssessment = () => { if (timerRef.current) clearInterval(timerRef.current); deadlineRef.current = null; setWorksheetOpen(false); setFoundationEmpty(false); setSubmitted(false); setMcqAnswer(""); setNatAnswer(""); setFoundationQuestions([]); setFoundationAnswers({}); };
  const changeLevel = (nextLevel: Level) => { const foundation = nextLevel === "FOUNDATION"; setLevel(nextLevel); setGrade(foundation ? "8" : "12"); setSubject(foundation ? "Mathematics" : "Physics"); setChapterId(foundation ? "g8_mat_01" : "g12_phy_01"); setTrack(foundation ? "CONCEPTUAL_QUIZ" : "JEE_MOCK_TEST"); resetAssessment(); };
  const changeFilters = (nextGrade: string, nextSubject: Subject) => { const firstChapter = SYLLABUS.find((item) => item.level === level && item.grade === nextGrade && item.subject === nextSubject); setGrade(nextGrade); setSubject(nextSubject); setChapterId(firstChapter?.id ?? ""); resetAssessment(); };
  const generateWorksheet = async () => {
    setFoundationEmpty(false);
    setFoundationQuestions([]);
    setFoundationAnswers({});
    let questionCount = 2;
    if (isFoundationMathematics) {
      const response = await fetch("/api/generate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ grade, subject, chapterId: selectedChapter?.slug ?? chapterId, difficulty: "Mixed", types: ["MCQ", "NAT"], count: 10 }) });
      const result = await response.json();
      const shardQuestions = (result.worksheet?.questions ?? []) as FoundationQuestion[];
      const selectedQuestions = track === "CONCEPTUAL_QUIZ" ? shardQuestions.slice(0, 8) : shardQuestions;
      if (!selectedQuestions.length) {
        setFoundationEmpty(true);
        setWorksheetOpen(true);
        return;
      }
      setFoundationQuestions(selectedQuestions);
      questionCount = selectedQuestions.length;
    }
    const nextDuration = isFoundationMathematics
      ? track === "CONCEPTUAL_QUIZ"
        ? Math.max(5 * 60, questionCount * 90)
        : questionCount * 2 * 60
      : track === "JEE_MOCK_TEST"
        ? 180 * 60
        : track === "CONCEPTUAL_QUIZ"
          ? 15 * 60
          : 45 * 60;
    deadlineRef.current = Date.now() + nextDuration * 1000; setDuration(nextDuration); setTimeLeft(nextDuration); setMcqAnswer(""); setNatAnswer(""); setSubmitted(false); setWorksheetOpen(true);
  };
  const submitAssessment = (autoSubmitted = false) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (isFoundationMathematics) {
      const correctAnswers = foundationQuestions.filter((question) => isFoundationAnswerCorrect(question, foundationAnswers[question.id])).length;
      const maxScore = foundationQuestions.length * 4;
      const score = correctAnswers * 4;
      const record: AttemptRecord = { timestamp: "Just now", topicTitle: selectedChapter?.title ?? "Multi-topic session", trackType: "Conceptual quiz", difficulty, score: `${score}/${maxScore} Marks`, accuracy: foundationQuestions.length ? (correctAnswers / foundationQuestions.length) * 100 : 0, cognitiveAlert: autoSubmitted || timeLeft === 0 ? "Auto-submitted: time limit expired before manual confirmation." : score === maxScore ? "System evaluation finalized successfully." : "Review the shard-backed answer key and repeat focused calculation drills." };
      setAttempts((history) => [record, ...history]);
      updateMastery(chapterMasteryKey(selectedChapter, chapterId), record.accuracy);
      setSubmitted(true);
      return;
    }
    const mcqCorrect = mcqAnswer === answerKey.mcq;
    const natCorrect = natAnswer.trim() === answerKey.nat;
    const score = (mcqCorrect ? 4 : 0) + (natCorrect ? 4 : 0);
    const record: AttemptRecord = { timestamp: "Just now", topicTitle: selectedChapter?.title ?? "Multi-topic session", trackType: track === "JEE_MOCK_TEST" ? "Full-Pattern JEE Mock Test" : track === "CONCEPTUAL_QUIZ" ? "Conceptual quiz" : "Chapter practice", difficulty, score: `${score}/8 Marks`, accuracy: score * 12.5, cognitiveAlert: autoSubmitted || timeLeft === 0 ? "Auto-submitted: time limit expired before manual confirmation." : score === 8 ? "System evaluation finalized successfully." : "Review the response vector and repeat two focused calculation drills." };
    setAttempts((history) => [record, ...history]);
    updateMastery(chapterMasteryKey(selectedChapter, chapterId), score === 8 ? 100 : 65);
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
            <div className="flex min-w-[320px] items-center gap-3 rounded-xl bg-zinc-950 p-3 text-white">
              {profile.avatar ? (
                <img src={profile.avatar} alt="" aria-hidden="true" className="h-10 w-10 shrink-0 rounded-full object-cover" />
              ) : (
                <div aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-400 text-sm font-black text-white">{getInitials(profile.name)}</div>
              )}
              <div>
                <div className="text-sm font-extrabold">{capitalizeName(profile.name)}</div>
                <div className="mt-0.5 text-[11px] font-semibold text-zinc-300">{profile.track === "foundation" ? `Foundation · Grade ${profile.grade}` : `JEE Prep · Class ${profile.grade}`}</div>
              </div>
              <button
                type="button"
                aria-label="Edit student profile"
                onClick={() => { setProfileDraft(profile); setProfileEditorOpen((open) => !open); }}
                className="ml-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-[11px] text-zinc-300 hover:text-white"
              >
                ✎
              </button>
            </div>
            <Link href="/predictor" className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-700">Open JoSAA Seat Predictor</Link>
          </div>
          {profileEditorOpen && (
            <div className="space-y-3 rounded-xl border bg-zinc-50 p-4 text-xs">
              <div className="flex items-center gap-3">
                {profileDraft.avatar ? (
                  <img src={profileDraft.avatar} alt="" className="h-12 w-12 rounded-full object-cover" />
                ) : (
                  <div aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-sm font-black text-indigo-700">{getInitials(profileDraft.name)}</div>
                )}
                <div className="flex gap-2">
                  <label className="cursor-pointer rounded-lg border bg-white px-3 py-1.5 font-bold text-zinc-700">
                    Upload photo
                    <input type="file" accept="image/*" className="hidden" onChange={(event) => handleAvatarUpload(event.target.files?.[0])} />
                  </label>
                  {profileDraft.avatar && <button type="button" onClick={() => setProfileDraft((current) => ({ ...current, avatar: undefined }))} className="rounded-lg border px-3 py-1.5 font-bold text-zinc-600">Remove</button>}
                </div>
              </div>
              <div>
                <label htmlFor="profile-name" className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Name</label>
                <input id="profile-name" type="text" value={profileDraft.name} onChange={(event) => setProfileDraft((current) => ({ ...current, name: event.target.value }))} className="w-full rounded-lg border p-2 text-sm font-medium" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Track</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button type="button" onClick={() => setProfileDraft((current) => ({ ...current, track: "foundation", grade: FOUNDATION_GRADES.includes(current.grade) ? current.grade : FOUNDATION_GRADES[0] }))} className={`rounded-lg border p-2 ${profileDraft.track === "foundation" ? "bg-zinc-900 text-white" : "text-zinc-600"}`}>Foundation</button>
                    <button type="button" onClick={() => setProfileDraft((current) => ({ ...current, track: "jee", grade: JEE_GRADES.includes(current.grade) ? current.grade : JEE_GRADES[0] }))} className={`rounded-lg border p-2 ${profileDraft.track === "jee" ? "bg-zinc-900 text-white" : "text-zinc-600"}`}>JEE</button>
                  </div>
                </div>
                <div>
                  <label htmlFor="profile-grade" className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Grade</label>
                  <select id="profile-grade" value={profileDraft.grade} onChange={(event) => setProfileDraft((current) => ({ ...current, grade: event.target.value }))} className="w-full rounded-lg border p-2 text-sm">
                    {(profileDraft.track === "foundation" ? FOUNDATION_GRADES : JEE_GRADES).map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-1">
                <button type="button" onClick={() => setProfileEditorOpen(false)} className="rounded-lg border px-3 py-1.5 font-bold text-zinc-600">Cancel</button>
                <button type="button" onClick={saveProfileFromEditor} className="rounded-lg bg-zinc-900 px-3 py-1.5 font-bold text-white">Save</button>
              </div>
            </div>
          )}
          <div className="flex gap-4 border-b text-xs font-bold uppercase tracking-wider text-zinc-400"><button type="button" onClick={() => setProfileTab("HEATMAP")} className={`border-b-2 pb-2 ${profileTab === "HEATMAP" ? "border-zinc-900 text-zinc-900" : "border-transparent"}`}>Syllabus Performance Map</button><button type="button" onClick={() => setProfileTab("REPORTS")} className={`border-b-2 pb-2 ${profileTab === "REPORTS" ? "border-zinc-900 text-zinc-900" : "border-transparent"}`}>Activity and Diagnostic Reports</button></div>
          {profileTab === "HEATMAP" ? <div className="space-y-2">{heatmapChapters.map((item) => { const score = mastery[chapterMasteryKey(item, item.id)] ?? 0; return <div key={item.id} className="rounded-xl border p-4"><div className="flex justify-between text-xs font-bold"><span className="flex items-center gap-2"><SubjectIcon subject={item.subject} className="h-4 w-4 text-zinc-500" />{item.title}</span><span>{score}%</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-100"><div className={`h-full ${score >= 75 ? "bg-emerald-500" : score >= 40 ? "bg-amber-500" : "bg-rose-500"}`} style={{ width: `${score}%` }} /></div></div>; })}</div> : <div className="space-y-3 rounded-xl border bg-zinc-50 p-5"><div className="flex justify-between border-b pb-2"><h2 className="text-xs font-bold uppercase tracking-wider">Rolling Sprint Performance Ledger</h2><span className="rounded bg-zinc-900 px-2 py-0.5 font-mono text-[10px] text-white">Live Telemetry Linked</span></div>{attempts.map((item, index) => <div key={`${item.timestamp}-${index}`} className="rounded-xl border bg-white p-3 text-xs"><div className="flex justify-between font-bold"><span>{item.topicTitle}</span><span className="text-emerald-700">{item.score}</span></div><p className="mt-2 text-zinc-500">{item.trackType} | {item.difficulty} | {item.timestamp}</p><p className="mt-2 rounded-lg bg-zinc-50 p-2 italic text-zinc-600">{item.cognitiveAlert}</p></div>)}</div>}
        </section>

        <div className="grid items-start gap-6 lg:grid-cols-3">
          <section className="space-y-5 rounded-2xl border bg-white p-6 shadow-sm"><h2 className="text-xl font-black">Generate Worksheet</h2><div className="space-y-4 text-xs font-bold">
            <div><label className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Preparation Level</label><div className="grid grid-cols-2 gap-2"><button type="button" onClick={() => changeLevel("FOUNDATION")} className={`flex items-center justify-center gap-1.5 rounded-xl border px-2 py-2.5 ${level === "FOUNDATION" ? "bg-zinc-900 text-white" : "text-zinc-600"}`}><Sprout aria-hidden="true" className="h-3.5 w-3.5" />Foundation</button><button type="button" onClick={() => changeLevel("JEE")} className={`flex items-center justify-center gap-1.5 rounded-xl border px-2 py-2.5 ${level === "JEE" ? "bg-zinc-900 text-white" : "text-zinc-600"}`}><GraduationCap aria-hidden="true" className="h-3.5 w-3.5" />JEE Prep</button></div></div>
            <div><label htmlFor="grade" className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Target Grade</label><select id="grade" value={grade} onChange={(event) => changeFilters(event.target.value, subject)} className="w-full rounded-xl border p-2.5 text-sm">{grades.map((item) => <option key={item} value={item}>{level === "FOUNDATION" ? `Grade ${item}` : `Class ${item}`}</option>)}</select></div>
            <button type="button" onClick={saveCurrentSelectionAsClass} className="w-full rounded-xl border border-dashed p-2 text-[10px] font-bold uppercase tracking-wider text-zinc-500 hover:text-zinc-800">Save as my class</button>
            <div><label htmlFor="subject" className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Select Subject</label><div className="flex items-center rounded-xl border bg-white pl-2.5"><SubjectIcon subject={subject} className="h-4 w-4 text-zinc-500" /><select id="subject" value={subject} onChange={(event) => changeFilters(grade, event.target.value as Subject)} className="w-full rounded-xl bg-transparent p-2.5 text-sm outline-none"><option>Mathematics</option><option>Physics</option><option>Chemistry</option>{level === "FOUNDATION" && <option>Biology</option>}</select></div></div>
            <div><label htmlFor="chapter" className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Select Chapter</label><select id="chapter" value={chapterId} onChange={(event) => { setChapterId(event.target.value); resetAssessment(); }} className="w-full rounded-xl border p-2.5 text-sm">{filteredChapters.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select></div>
            <div><label htmlFor="difficulty" className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Difficulty Matrix</label><select id="difficulty" value={difficulty} onChange={(event) => setDifficulty(event.target.value)} className="w-full rounded-xl border p-2.5 text-sm"><option>Easy</option><option>Medium</option><option>Hard</option><option>Mixed Matrix</option></select></div>
            <div><label htmlFor="track" className="mb-1 block font-mono text-[10px] uppercase text-zinc-400">Assessment Track</label><select id="track" value={track} onChange={(event) => setTrack(event.target.value as ExamTrack)} className="w-full rounded-xl border p-2.5 text-sm"><option value="JEE_MOCK_TEST">Full-Pattern JEE Mock Test</option><option value="CONCEPTUAL_QUIZ">Conceptual Quiz</option><option value="CHAPTER_PRACTICE">Chapter Practice</option></select></div>
            <button type="button" onClick={generateWorksheet} className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-black uppercase tracking-wider text-white hover:bg-blue-700"><Rocket aria-hidden="true" className="h-4 w-4" />Generate NTA Worksheet</button>
          </div></section>


          <section className="space-y-4 lg:col-span-2">{worksheetOpen && foundationEmpty ? <div className="rounded-2xl border border-dashed bg-white p-10 text-center shadow-sm"><p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">Assessment cockpit standby</p><h2 className="mt-2 text-2xl font-black">No Foundation items for this chapter yet</h2><p className="mx-auto mt-2 max-w-md text-sm text-zinc-500">This chapter has no questions in its Foundation content shard.</p></div> : worksheetOpen ? <div className="space-y-6 rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-5 border-b pb-5"><div><p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">National Testing Agency | Computer Based Test</p><h1 className="mt-1 text-xl font-black">{selectedChapter?.title ?? "Multi-topic assessment"}</h1><p className="mt-1 text-xs text-zinc-500">Candidate: sharvah | Paper: {track}</p></div><div className={`flex min-w-[190px] items-center justify-between gap-3 rounded-md border border-zinc-300 bg-zinc-50 px-4 py-2 ${timeLeft <= 300 ? "animate-pulse text-red-600" : timeLeft <= 900 ? "text-red-600" : "text-red-900"}`}><span className="text-[11px] font-bold uppercase tracking-wide">Time Left</span><span className="font-mono text-xl font-bold tabular-nums tracking-widest">{formatTime(timeLeft)}</span></div></div>
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold uppercase"><div className="rounded-lg bg-emerald-50 p-2 text-emerald-700">Answered: {answeredCount}</div><div className="rounded-lg bg-zinc-100 p-2 text-zinc-600">Questions: {totalQuestions}</div><div className="rounded-lg bg-amber-50 p-2 text-amber-700">Remaining: {remainingCount}</div></div>
            {isFoundationMathematics ? foundationQuestions.map((question, index) => <div key={question.id} className="border-b pb-6"><span className={`rounded-md px-2 py-1 font-mono text-[10px] font-bold uppercase ${question.type === "MCQ" ? "bg-rose-50 text-rose-600" : "bg-blue-50 text-blue-700"}`}>Question {index + 1}: {question.type} | 4 Marks</span><h2 className="mt-3 text-sm font-bold">{question.stem}</h2>{question.type === "MCQ" ? <div className="mt-4 grid gap-3 md:grid-cols-2">{question.options?.map((option, optionIndex) => { const choice = String.fromCharCode(65 + optionIndex); return <label key={choice} className={`cursor-pointer rounded-xl border p-3 text-sm ${foundationAnswers[question.id] === choice ? "border-blue-600 bg-blue-50" : "border-zinc-200"}`}><input type="radio" name={question.id} value={choice} checked={foundationAnswers[question.id] === choice} onChange={(event) => setFoundationAnswers((answers) => ({ ...answers, [question.id]: event.target.value }))} disabled={submitted} className="mr-2" />{choice}. {option}</label>; })}</div> : <input aria-label={`Numerical answer for question ${index + 1}`} type="text" inputMode="decimal" value={foundationAnswers[question.id] ?? ""} onChange={(event) => setFoundationAnswers((answers) => ({ ...answers, [question.id]: event.target.value }))} disabled={submitted} className="mt-4 w-full rounded-xl border p-3 font-mono text-sm md:w-1/2" placeholder="Enter numerical answer" />}{submitted && <div className="mt-3 rounded-lg bg-zinc-50 p-3 text-xs"><p className={isFoundationAnswerCorrect(question, foundationAnswers[question.id]) ? "font-bold text-emerald-700" : "font-bold text-rose-700"}>{isFoundationAnswerCorrect(question, foundationAnswers[question.id]) ? "Correct" : "Incorrect"}</p><p className="mt-1"><strong>Answer:</strong> {question.answer}</p>{question.solution && <p className="mt-1"><strong>Solution:</strong> {question.solution}</p>}{question.formulas?.map((formula) => <div key={formula.id} className="mt-2 rounded-lg border border-blue-100 bg-blue-50 p-2"><p className="font-bold text-blue-800">{formula.name}</p><p className="mt-1 font-mono text-[11px] text-blue-900">{formula.latex}</p>{formula.example && <p className="mt-1 text-blue-700">Example: {formula.example}</p>}</div>)}</div>}</div>) : <><div className="border-b pb-6"><span className="rounded-md bg-rose-50 px-2 py-1 font-mono text-[10px] font-bold uppercase text-rose-600">Section A: MCQ | 4 Marks</span><h2 className="mt-3 text-sm font-bold">A projectile has velocity v = 3i + 4j m/s. Taking g = 10 m/s^2, calculate the horizontal range.</h2><div className="mt-4 grid gap-3 md:grid-cols-2">{options.map((option) => <label key={option} className={`cursor-pointer rounded-xl border p-3 text-sm ${mcqAnswer === option ? "border-blue-600 bg-blue-50" : "border-zinc-200"}`}><input type="radio" name="mcq" value={option} checked={mcqAnswer === option} onChange={(event) => setMcqAnswer(event.target.value)} disabled={submitted} className="mr-2" />{option}</label>)}</div></div><div className="border-b pb-6"><span className="rounded-md bg-blue-50 px-2 py-1 font-mono text-[10px] font-bold uppercase text-blue-700">Section B: NAT | 4 Marks</span><h2 className="mt-3 text-sm font-bold">Enter the numerical value of the final answer. Use the nearest integer.</h2><p className="mt-2 text-xs text-zinc-500">A circuit has a 10 V source and a 5 ohm resistance. Find the current in amperes.</p><input aria-label="Numerical answer" type="text" inputMode="decimal" value={natAnswer} onChange={(event) => setNatAnswer(event.target.value)} disabled={submitted} className="mt-4 w-full rounded-xl border p-3 font-mono text-sm md:w-1/2" placeholder="Enter numerical answer" /></div></>}
            {submitted && isFoundationMathematics && (() => {
              const mcqQuestions = foundationQuestions.filter((question) => question.type === "MCQ");
              const natQuestions = foundationQuestions.filter((question) => question.type === "NAT");
              const isCorrect = (question: FoundationQuestion) => isFoundationAnswerCorrect(question, foundationAnswers[question.id]);
              const mcqCorrectCount = mcqQuestions.filter(isCorrect).length;
              const natCorrectCount = natQuestions.filter(isCorrect).length;
              return (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm">
                  <h2 className="font-black text-emerald-800">Evaluation Complete</h2>
                  <p className="mt-1 text-emerald-700">MCQ: {mcqCorrectCount}/{mcqQuestions.length} correct | NAT: {natCorrectCount}/{natQuestions.length} correct</p>
                  <details className="mt-3 text-xs">
                    <summary className="cursor-pointer font-bold">View per-question results</summary>
                    <div className="mt-2 space-y-1 font-mono">
                      {foundationQuestions.map((question, index) => (
                        <p key={question.id}>Q{index + 1} ({question.type}): your answer {foundationAnswers[question.id]?.trim() || "—"} | correct answer {question.answer} | {isCorrect(question) ? "Correct" : "Incorrect"}</p>
                      ))}
                    </div>
                  </details>
                </div>
              );
            })()}
            {submitted && !isFoundationMathematics && <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm"><h2 className="font-black text-emerald-800">Evaluation Complete</h2><p className="mt-1 text-emerald-700">MCQ: {mcqAnswer === answerKey.mcq ? "Correct" : "Incorrect"} | NAT: {natAnswer.trim() === answerKey.nat ? "Correct" : "Incorrect"}</p><details className="mt-3 text-xs"><summary className="cursor-pointer font-bold">View evaluation answer key</summary><p className="mt-2 font-mono">MCQ key: {answerKey.mcq} | NAT key: {answerKey.nat}</p></details></div>}
            <div className="flex flex-wrap justify-between gap-3"><button type="button" onClick={resetAssessment} className="rounded-xl border px-4 py-3 text-xs font-bold text-zinc-600">Return to Filters</button>{!submitted && <button type="button" onClick={() => submitAssessment()} disabled={answeredCount === 0} className="rounded-xl bg-zinc-900 px-5 py-3 text-xs font-black uppercase text-white disabled:cursor-not-allowed disabled:opacity-40">Submit Assessment</button>}</div>
          </div> : <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center shadow-sm"><p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">Assessment cockpit standby</p><div className="mt-4 flex justify-center"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm"><SubjectIcon subject={subject} className="h-5 w-5" /></div></div><h2 className="mt-3 text-lg font-black">Ready when you are</h2><p className="mt-1 text-sm text-zinc-500">Pick a chapter and launch a timed paper.</p><div className="mt-5 flex flex-wrap justify-center gap-2 text-[11px] font-bold text-zinc-600"><span className="rounded-full border border-zinc-200 bg-white px-2.5 py-1">{level === "FOUNDATION" ? "Foundation" : "JEE Prep"}</span><span className="rounded-full border border-zinc-200 bg-white px-2.5 py-1">{level === "FOUNDATION" ? `Grade ${grade}` : `Class ${grade}`}</span><span className="rounded-full border border-zinc-200 bg-white px-2.5 py-1">{subject === "Mathematics" ? "Maths" : subject}</span></div><p className="mt-4 text-xs text-zinc-400">{standbyQuestionCount} questions · {standbyDuration} for a {standbyTrackName}</p></div>}</section>
        </div>
        <footer className="flex justify-between border-t pt-4 font-mono text-[10px] uppercase tracking-wider text-zinc-400"><span>NTA Interface Protocol v2.0</span><span>Elapsed session: {formatTime(elapsed)}</span></footer>
      </div>
    </main>
  );
}
