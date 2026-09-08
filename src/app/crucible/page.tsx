import Link from "next/link";

export default function CrucibleArticle() {
  return (
    <main className="min-h-screen bg-zinc-50 p-4 text-zinc-900 md:p-10">
      <article className="mx-auto max-w-3xl space-y-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-10">
        <Link href="/" className="inline-block text-xs font-bold text-zinc-500 hover:text-zinc-900">
          ← Back to worksheet
        </Link>
        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
          Linked briefing · JEE Main & Advanced
        </p>
        <h1 className="text-3xl font-black leading-tight">
          The Crucible of Indian Engineering
        </h1>
        <p className="text-sm text-zinc-500">
          Decoding the formats, syllabus gaps, and zero-error margins of JEE Main and JEE Advanced.
        </p>
        <p>
          For an Indian engineering aspirant, JEE is not just an exam. It is a multi-year rite of passage:
          two stages, JEE Main and JEE Advanced, and one of the most demanding academic filters in the world.
        </p>
        <p>
          The paradox to learn early: <strong>Main is a sprint of speed and near-flawless accuracy</strong>.
          <strong> Advanced is an endurance war</strong>.
        </p>
        <h2 className="text-xl font-black">1. Why ~90% accuracy on a “qualifying” paper?</h2>
        <p>
          JEE Main screens a huge field for Advanced, but hyper-competition and category cut-offs shrink the
          real margin. A General category student typically needs roughly the top 96,000–100,000 ranks to
          reach Advanced. Historic General cut-offs near the 93 percentile have often sat around 100–120 / 300
          in an average or easier shift. Miss that line and the IIT path via Advanced ends that year.
        </p>
        <p>
          Qualifying alone is not a college. A ~1,00,000 AIR does not unlock NITs, IIITs, or strong GFTIs.
          A safer General backup is often 98.5+ percentile (commonly ~175–195+ marks, shift-dependent).
          That is why 85–90% accuracy is treated as mandatory: you are buying an insurance rank, not just a hall ticket.
        </p>
        <p className="text-xs text-zinc-500">
          Percentiles and raw marks move every session. Treat the numbers above as planning ranges, not official NTA cut-offs.
        </p>
        <h2 className="text-xl font-black">2. The two-attempt clocks</h2>
        <p>
          <strong>JEE Main:</strong> two sessions a year (usually January and April). Best percentile across sessions
          is used for rank. You may write Main for three consecutive years from the Class 12 year.
        </p>
        <p>
          <strong>JEE Advanced:</strong> two attempts in a lifetime, and they must be consecutive — Class 12 year and
          the next year only. Qualifying and then skipping registration still burns an attempt.
        </p>
        <pre className="overflow-x-auto rounded-xl bg-zinc-950 p-4 text-xs text-zinc-100">
{`YEAR 1 (Class 12)  → JEE Main (S1 & S2) → [qualify] → Advanced (Attempt 1)
YEAR 2 (Dropper)   → JEE Main (S1 & S2) → [qualify] → Advanced (Attempt 2 — FINAL)`}
        </pre>
        <h2 className="text-xl font-black">3. Main is not “just a screening test”</h2>
        <p>
          Advanced rank is the IIT door. Main rank is the door for NITs, IIITs, and GFTIs — and for a backup if
          Advanced goes badly. Elite Main colleges (IIIT Hyderabad, NIT Trichy CSE, and similar) often need
          99.5+ percentile, not a bare qualify.
        </p>
        <div className="grid gap-3 text-sm md:grid-cols-2">
          <div className="rounded-xl border p-4">
            <h3 className="font-black">Advanced track</h3>
            <p className="mt-2 text-zinc-600">23 IITs. Also research routes such as IISc / IISERs where those use Advanced.</p>
          </div>
          <div className="rounded-xl border p-4">
            <h3 className="font-black">Main track</h3>
            <p className="mt-2 text-zinc-600">32 NITs, 26 IIITs, 30+ GFTIs — JoSAA / CSAB on Main rank.</p>
          </div>
        </div>
        <h2 className="text-xl font-black">4. Syllabus gap</h2>
        <p>
          Both sit on Class 11–12 CBSE-range physics, chemistry, maths. Main rewards breadth, speed, and direct
          formula use. Advanced rewards depth and synthesis.
        </p>
        <h2 className="text-xl font-black">5. Format</h2>
        <p>
          Main: 3 hours, 300 marks, MCQ + numerical. Advanced: two 3-hour papers the same day, variable pattern
          and penalties. Fatigue in Paper 2 is where many ranks drop.
        </p>
        <h2 className="text-xl font-black">6. Error margins</h2>
        <p>
          Main punishes small mistakes. Advanced is harder, so a lower percent can still get an IIT seat if
          subject cut-offs are cleared. Skipping a monster question is strategy.
        </p>
        <h2 className="text-xl font-black">Takeaway</h2>
        <p>
          Train Main like a sprinter. After Main, switch to Advanced like a marathoner.
        </p>
        <div className="flex flex-wrap gap-3 pt-4">
          <Link href="/" className="rounded-xl border px-4 py-3 text-xs font-bold text-zinc-700">
            Back to worksheet
          </Link>
          <Link href="/predictor" className="rounded-xl bg-blue-600 px-4 py-3 text-xs font-bold text-white">
            Open JoSAA Seat Predictor
          </Link>
        </div>
      </article>
    </main>
  );
}