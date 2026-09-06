"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Quota = "GEN" | "EWS" | "OBC-NCL" | "SC" | "ST";
type FeeWaiver = "FULL" | "PARTIAL" | "NONE";

type Seat = {
  id: string;
  institute: string;
  campus: string;
  program: string;
  quota: Quota;
  closingRank: number;
  seats: number;
  annualTuition: number;
};

const SEAT_REGISTRY: Seat[] = [
  { id: "iitb-cse", institute: "IIT Bombay", campus: "Mumbai, Maharashtra", program: "Computer Science and Engineering", quota: "GEN", closingRank: 68, seats: 110, annualTuition: 200000 },
  { id: "iitd-cse", institute: "IIT Delhi", campus: "New Delhi", program: "Computer Science and Engineering", quota: "GEN", closingRank: 118, seats: 110, annualTuition: 200000 },
  { id: "iitm-cse", institute: "IIT Madras", campus: "Chennai, Tamil Nadu", program: "Computer Science and Engineering", quota: "GEN", closingRank: 175, seats: 105, annualTuition: 200000 },
  { id: "iitk-cse", institute: "IIT Kanpur", campus: "Kanpur, Uttar Pradesh", program: "Computer Science and Engineering", quota: "GEN", closingRank: 238, seats: 129, annualTuition: 200000 },
  { id: "iitb-ee", institute: "IIT Bombay", campus: "Mumbai, Maharashtra", program: "Electrical Engineering", quota: "EWS", closingRank: 520, seats: 92, annualTuition: 200000 },
  { id: "iitd-ee", institute: "IIT Delhi", campus: "New Delhi", program: "Electrical Engineering", quota: "OBC-NCL", closingRank: 810, seats: 115, annualTuition: 200000 },
  { id: "iitm-me", institute: "IIT Madras", campus: "Chennai, Tamil Nadu", program: "Mechanical Engineering", quota: "SC", closingRank: 4200, seats: 180, annualTuition: 200000 },
  { id: "iitk-mt", institute: "IIT Kanpur", campus: "Kanpur, Uttar Pradesh", program: "Mathematics and Scientific Computing", quota: "ST", closingRank: 9200, seats: 55, annualTuition: 200000 },
  { id: "iitr-ds", institute: "IIT Roorkee", campus: "Roorkee, Uttarakhand", program: "Data Science and Artificial Intelligence", quota: "GEN", closingRank: 1240, seats: 80, annualTuition: 200000 },
  { id: "iitg-ec", institute: "IIT Guwahati", campus: "Guwahati, Assam", program: "Electronics and Communication Engineering", quota: "OBC-NCL", closingRank: 1680, seats: 95, annualTuition: 200000 },
];

const QUOTA_LABELS: Record<Quota, string> = {
  GEN: "General / CRL",
  EWS: "EWS",
  "OBC-NCL": "OBC-NCL",
  SC: "SC",
  ST: "ST",
};

function getWaiver(income: number): { kind: FeeWaiver; percentage: number; label: string } {
  if (income <= 1) return { kind: "FULL", percentage: 100, label: "Full tuition waiver" };
  if (income <= 5) return { kind: "PARTIAL", percentage: 66.6, label: "Two-thirds tuition waiver" };
  return { kind: "NONE", percentage: 0, label: "Full academic fees apply" };
}

function formatRank(rank: number): string {
  return new Intl.NumberFormat("en-IN").format(rank);
}

export default function PredictorPage() {
  const [globalAccuracy, setGlobalAccuracy] = useState(82);
  const [familyIncome, setFamilyIncome] = useState(4.5);
  const [categoryQuota, setCategoryQuota] = useState<Quota>("GEN");
  const [rankBuffer, setRankBuffer] = useState(1.25);
  const [showOnlyWaivers, setShowOnlyWaivers] = useState(false);
  const [compareSeats, setCompareSeats] = useState<string[]>([]);

  const waiver = getWaiver(familyIncome);
  const estimatedRank = Math.max(1, Math.round(100000 * (1 - globalAccuracy / 100)));
  const eligibleRank = Math.round(estimatedRank * rankBuffer);

  const matchingSeats = useMemo(() => {
    return SEAT_REGISTRY.filter((seat) => {
      const quotaMatches = categoryQuota === "GEN" ? seat.quota === "GEN" : seat.quota === categoryQuota || seat.quota === "GEN";
      const rankMatches = seat.closingRank >= eligibleRank;
      const waiverMatches = !showOnlyWaivers || waiver.percentage > 0;
      return quotaMatches && rankMatches && waiverMatches;
    }).sort((left, right) => left.closingRank - right.closingRank);
  }, [categoryQuota, eligibleRank, showOnlyWaivers, waiver.percentage]);

  const toggleComparison = (seatId: string) => {
    setCompareSeats((current) => current.includes(seatId) ? current.filter((id) => id !== seatId) : current.length < 3 ? [...current, seatId] : current);
  };

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-8 text-zinc-900 md:px-10">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="flex flex-wrap items-end justify-between gap-4 border-b border-zinc-200 pb-6">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">JoSAA counselling intelligence</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight">Seat Predictor Dashboard</h1>
            <p className="mt-2 max-w-2xl text-sm text-zinc-500">Model likely IIT seat matches from your performance signal, category quota, and family income eligibility.</p>
          </div>
          <Link href="/" className="rounded-xl bg-zinc-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-zinc-700">Back to Worksheet</Link>
        </header>

        <section className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <aside className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div><p className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">Prediction controls</p><h2 className="mt-1 text-lg font-black">Candidate profile</h2></div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold"><label htmlFor="accuracy">Global accuracy</label><span className="font-mono text-blue-700">{globalAccuracy}%</span></div>
              <input id="accuracy" type="range" min="35" max="100" value={globalAccuracy} onChange={(event) => setGlobalAccuracy(Number(event.target.value))} className="w-full accent-blue-600" />
              <div className="flex justify-between font-mono text-[10px] text-zinc-400"><span>35%</span><span>100%</span></div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold"><label htmlFor="income">Annual family income</label><span className="font-mono text-emerald-700">Rs {familyIncome.toFixed(1)}L</span></div>
              <input id="income" type="range" min="0.5" max="15" step="0.5" value={familyIncome} onChange={(event) => setFamilyIncome(Number(event.target.value))} className="w-full accent-emerald-600" />
              <div className="flex justify-between font-mono text-[10px] text-zinc-400"><span>Rs 0.5L</span><span>Rs 15L+</span></div>
            </div>

            <div className="space-y-2">
              <label htmlFor="quota" className="block text-xs font-bold">Category quota</label>
              <select id="quota" value={categoryQuota} onChange={(event) => setCategoryQuota(event.target.value as Quota)} className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-2.5 text-sm font-semibold focus:border-blue-500 focus:outline-none">{Object.entries(QUOTA_LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold"><label htmlFor="buffer">Safety buffer</label><span className="font-mono text-zinc-600">{Math.round((rankBuffer - 1) * 100)}%</span></div>
              <input id="buffer" type="range" min="1" max="1.75" step="0.05" value={rankBuffer} onChange={(event) => setRankBuffer(Number(event.target.value))} className="w-full accent-zinc-900" />
            </div>

            <label className="flex cursor-pointer items-center gap-2 rounded-xl border bg-zinc-50 p-3 text-xs font-bold"><input type="checkbox" checked={showOnlyWaivers} onChange={(event) => setShowOnlyWaivers(event.target.checked)} className="h-4 w-4 accent-emerald-600" /> Show waiver-eligible seats only</label>
          </aside>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5"><p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Estimated rank</p><p className="mt-2 text-2xl font-black text-blue-950">{formatRank(estimatedRank)}</p><p className="mt-1 text-xs text-blue-700">Based on {globalAccuracy}% accuracy</p></div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"><p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Search threshold</p><p className="mt-2 text-2xl font-black">{formatRank(eligibleRank)}</p><p className="mt-1 text-xs text-zinc-500">Including safety buffer</p></div>
              <div className={`rounded-2xl border p-5 ${waiver.kind === "NONE" ? "border-zinc-200 bg-white" : "border-emerald-100 bg-emerald-50"}`}><p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Tuition status</p><p className="mt-2 text-2xl font-black">{waiver.percentage}%</p><p className="mt-1 text-xs text-emerald-700">{waiver.label}</p></div>
            </div>

            <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 p-5"><div><p className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">Live matching table</p><h2 className="mt-1 text-lg font-black">IIT seat recommendations</h2></div><span className="rounded-lg bg-zinc-100 px-3 py-1.5 font-mono text-xs font-bold text-zinc-600">{matchingSeats.length} matches</span></div>
              {matchingSeats.length === 0 ? <div className="p-12 text-center text-sm text-zinc-500">No seats match this profile. Increase accuracy or reduce the safety buffer.</div> : <div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-xs"><thead className="bg-zinc-50 font-mono uppercase tracking-wider text-zinc-500"><tr><th className="px-5 py-3">Compare</th><th className="px-5 py-3">Institute / campus</th><th className="px-5 py-3">Program</th><th className="px-5 py-3">Quota</th><th className="px-5 py-3">Closing rank</th><th className="px-5 py-3">Seats</th><th className="px-5 py-3">Fee status</th></tr></thead><tbody className="divide-y divide-zinc-100">{matchingSeats.map((seat) => <tr key={seat.id} className="hover:bg-zinc-50"><td className="px-5 py-4"><input type="checkbox" checked={compareSeats.includes(seat.id)} onChange={() => toggleComparison(seat.id)} aria-label={`Compare ${seat.institute} ${seat.program}`} className="h-4 w-4 accent-blue-600" /></td><td className="px-5 py-4"><div className="font-bold">{seat.institute}</div><div className="mt-1 text-zinc-500">{seat.campus}</div></td><td className="px-5 py-4 font-semibold">{seat.program}</td><td className="px-5 py-4"><span className="rounded-md border bg-zinc-50 px-2 py-1 font-mono font-bold">{seat.quota}</span></td><td className="px-5 py-4 font-mono font-bold text-blue-700">{formatRank(seat.closingRank)}</td><td className="px-5 py-4 font-mono">{seat.seats}</td><td className="px-5 py-4">{waiver.kind === "NONE" ? <span className="font-semibold text-zinc-500">No waiver</span> : <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 font-bold text-emerald-700">{waiver.percentage}% waiver</span>}</td></tr>)}</tbody></table></div>}
            </section>

            {compareSeats.length > 0 && <section className="rounded-2xl border border-blue-100 bg-blue-50 p-5"><div className="flex items-center justify-between"><h2 className="text-sm font-black text-blue-950">Seat comparison shortlist</h2><span className="font-mono text-xs text-blue-700">{compareSeats.length}/3 selected</span></div><div className="mt-3 grid gap-3 md:grid-cols-3">{matchingSeats.filter((seat) => compareSeats.includes(seat.id)).map((seat) => <div key={seat.id} className="rounded-xl border border-blue-100 bg-white p-3 text-xs"><p className="font-bold">{seat.institute}</p><p className="mt-1 text-zinc-500">{seat.program}</p><p className="mt-2 font-mono font-bold text-blue-700">Rank {formatRank(seat.closingRank)}</p></div>)}</div></section>}
          </div>
        </section>
      </div>
    </main>
  );
}
