"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Quota = "GEN" | "EWS" | "OBC-NCL" | "SC" | "ST" | "PwD";
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
  estimateLabel: "historical estimate";
};

const SEAT_REGISTRY: Seat[] = [
  { id: "iitb-cse", institute: "IIT Bombay", campus: "Mumbai, Maharashtra", program: "Computer Science and Engineering", quota: "GEN", closingRank: 68, seats: 110, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitd-cse", institute: "IIT Delhi", campus: "New Delhi", program: "Computer Science and Engineering", quota: "GEN", closingRank: 118, seats: 110, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitm-cse", institute: "IIT Madras", campus: "Chennai, Tamil Nadu", program: "Computer Science and Engineering", quota: "GEN", closingRank: 175, seats: 105, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitk-cse", institute: "IIT Kanpur", campus: "Kanpur, Uttar Pradesh", program: "Computer Science and Engineering", quota: "GEN", closingRank: 238, seats: 129, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitm-mnc", institute: "IIT Madras", campus: "Chennai, Tamil Nadu", program: "Mathematics and Computing", quota: "GEN", closingRank: 410, seats: 50, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitb-ee", institute: "IIT Bombay", campus: "Mumbai, Maharashtra", program: "Electrical Engineering", quota: "GEN", closingRank: 520, seats: 92, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitd-ee", institute: "IIT Delhi", campus: "New Delhi", program: "Electrical Engineering", quota: "GEN", closingRank: 610, seats: 115, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitkgp-cse", institute: "IIT Kharagpur", campus: "Kharagpur, West Bengal", program: "Computer Science and Engineering", quota: "GEN", closingRank: 780, seats: 80, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitk-ee", institute: "IIT Kanpur", campus: "Kanpur, Uttar Pradesh", program: "Electrical Engineering", quota: "GEN", closingRank: 860, seats: 78, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitr-ds", institute: "IIT Roorkee", campus: "Roorkee, Uttarakhand", program: "Data Science and Artificial Intelligence", quota: "GEN", closingRank: 1240, seats: 80, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iith-cse", institute: "IIT Hyderabad", campus: "Hyderabad, Telangana", program: "Computer Science and Engineering", quota: "GEN", closingRank: 1450, seats: 85, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitm-me", institute: "IIT Madras", campus: "Chennai, Tamil Nadu", program: "Mechanical Engineering", quota: "GEN", closingRank: 1780, seats: 180, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitkgp-chem", institute: "IIT Kharagpur", campus: "Kharagpur, West Bengal", program: "Chemical Engineering", quota: "GEN", closingRank: 2260, seats: 75, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitr-civil", institute: "IIT Roorkee", campus: "Roorkee, Uttarakhand", program: "Civil Engineering", quota: "GEN", closingRank: 2780, seats: 100, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitb-chem", institute: "IIT Bombay", campus: "Mumbai, Maharashtra", program: "Chemical Engineering", quota: "GEN", closingRank: 3180, seats: 85, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iith-ee", institute: "IIT Hyderabad", campus: "Hyderabad, Telangana", program: "Electrical Engineering", quota: "GEN", closingRank: 3760, seats: 65, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitb-me", institute: "IIT Bombay", campus: "Mumbai, Maharashtra", program: "Mechanical Engineering", quota: "GEN", closingRank: 4020, seats: 120, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitbhu-me", institute: "IIT (BHU) Varanasi", campus: "Varanasi, Uttar Pradesh", program: "Mechanical Engineering", quota: "GEN", closingRank: 4380, seats: 140, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iiti-me", institute: "IIT Indore", campus: "Indore, Madhya Pradesh", program: "Mechanical Engineering", quota: "GEN", closingRank: 4760, seats: 65, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitgn-me", institute: "IIT Gandhinagar", campus: "Gandhinagar, Gujarat", program: "Mechanical Engineering", quota: "GEN", closingRank: 5120, seats: 45, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitrpr-me", institute: "IIT Ropar", campus: "Rupnagar, Punjab", program: "Mechanical Engineering", quota: "GEN", closingRank: 6380, seats: 50, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitj-ee", institute: "IIT Jodhpur", campus: "Jodhpur, Rajasthan", program: "Electrical Engineering", quota: "GEN", closingRank: 6650, seats: 55, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitmandi-ee", institute: "IIT Mandi", campus: "Mandi, Himachal Pradesh", program: "Electrical Engineering", quota: "GEN", closingRank: 6900, seats: 45, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitp-cse", institute: "IIT Patna", campus: "Patna, Bihar", program: "Computer Science and Engineering", quota: "GEN", closingRank: 7200, seats: 65, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitbbs-ee", institute: "IIT Bhubaneswar", campus: "Bhubaneswar, Odisha", program: "Electrical Engineering", quota: "GEN", closingRank: 6520, seats: 45, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitism-chem", institute: "IIT (ISM) Dhanbad", campus: "Dhanbad, Jharkhand", program: "Chemical Engineering", quota: "GEN", closingRank: 6810, seats: 60, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iittir-me", institute: "IIT Tirupati", campus: "Tirupati, Andhra Pradesh", program: "Mechanical Engineering", quota: "GEN", closingRank: 7060, seats: 40, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitpal-civil", institute: "IIT Palakkad", campus: "Palakkad, Kerala", program: "Civil Engineering", quota: "GEN", closingRank: 7240, seats: 35, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitjammu-mat", institute: "IIT Jammu", campus: "Jammu, Jammu and Kashmir", program: "Materials Engineering", quota: "GEN", closingRank: 7420, seats: 30, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitdharwad-bio", institute: "IIT Dharwad", campus: "Dharwad, Karnataka", program: "Bioengineering", quota: "GEN", closingRank: 7580, seats: 30, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitbhilai-env", institute: "IIT Bhilai", campus: "Bhilai, Chhattisgarh", program: "Environmental Engineering", quota: "GEN", closingRank: 7720, seats: 25, annualTuition: 200000, estimateLabel: "historical estimate" },
  { id: "iitgoa-me", institute: "IIT Goa", campus: "Ponda, Goa", program: "Mechanical Engineering", quota: "GEN", closingRank: 7880, seats: 25, annualTuition: 200000, estimateLabel: "historical estimate" },
];

const QUOTA_LABELS: Record<Quota, string> = {
  GEN: "General / CRL",
  EWS: "EWS",
  "OBC-NCL": "OBC-NCL",
  SC: "SC",
  ST: "ST",
  PwD: "PwD",
};

function getWaiver(income: number, category: Quota): { kind: FeeWaiver; percentage: number; label: string; subtitle: string } {
  if (category === "SC" || category === "ST") return { kind: "FULL", percentage: 100, label: "100% tuition waiver", subtitle: "SC/ST tuition waived at IITs regardless of income. Hostel, mess and other charges still apply." };
  if (category === "PwD") return { kind: "NONE", percentage: 0, label: "See institute fee circular", subtitle: "PwD fee support varies by institute; check the official institute fee circular." };
  if (income < 1) return { kind: "FULL", percentage: 100, label: "Full tuition waiver", subtitle: "Income-slab estimate; a certificate does not grant a waiver by itself." };
  if (income <= 5) return { kind: "PARTIAL", percentage: 66.7, label: "Two-thirds remission · ~₹33,333 tuition / semester", subtitle: "Income-slab estimate; a certificate does not grant a waiver by itself." };
  if (category === "EWS" && income <= 8) return { kind: "NONE", percentage: 0, label: "Full tuition · ~₹1,00,000 / semester", subtitle: "EWS reservation can apply up to ₹8L, but IIT tuition remission stops at ₹5L." };
  return { kind: "NONE", percentage: 0, label: "Full tuition · ~₹1,00,000 / semester", subtitle: "Income-slab estimate; a certificate does not grant a waiver by itself." };
}

function formatRank(rank: number): string {
  return new Intl.NumberFormat("en-IN").format(rank);
}

function getSeatStatus(closingRank: number, searchThreshold: number): "Safe" | "Borderline" {
  return closingRank >= searchThreshold * 0.9 ? "Borderline" : "Safe";
}

export default function PredictorPage() {
  const [globalAccuracy, setGlobalAccuracy] = useState(82);
  const [familyIncome, setFamilyIncome] = useState(4.5);
  const [categoryQuota, setCategoryQuota] = useState<Quota>("GEN");
  const [rankBuffer, setRankBuffer] = useState(1.25);
  const [showOnlyWaivers, setShowOnlyWaivers] = useState(false);
  const [compareSeats, setCompareSeats] = useState<string[]>([]);

  const waiver = getWaiver(familyIncome, categoryQuota);
  const estimatedRank = Math.max(1, Math.round(100000 * (1 - globalAccuracy / 100)));
  const eligibleRank = Math.round(estimatedRank * rankBuffer);

  const matchingSeats = useMemo(() => {
    return SEAT_REGISTRY.filter((seat) => {
      const quotaMatches = categoryQuota === "GEN" ? seat.quota === "GEN" : seat.quota === categoryQuota || seat.quota === "GEN";
      const rankMatches = seat.closingRank <= eligibleRank;
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

        <aside className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
          <p className="font-bold">Unofficial estimate</p>
          <p className="mt-2 leading-6">This tool is unofficial and not affiliated with JoSAA, NTA, JEE Main, JEE Advanced, or any IIT. Rank is inferred from in-app mock accuracy, not an official result. IIT allotment uses JEE Advanced rank; this table must not be read as JEE Main counselling. Matches are historical-cutoff style estimates only, and cutoffs change every year. GEN/OBC-NCL/EWS waiver needs a separate income certificate, typically from a Tehsildar or DM with ITR/Form-16, not just the category certificate. SC/ST 100% tuition is standard IIT tuition policy for admitted students; official confirmation comes from the JoSAA or institute fee circular.</p>
          <a href="https://josaa.admissions.nic.in" target="_blank" rel="noreferrer" className="mt-2 inline-block font-bold underline underline-offset-2">Use the official JoSAA site for allotment information</a>
        </aside>

        <section className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <aside className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div><p className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">Prediction controls</p><h2 className="mt-1 text-lg font-black">Candidate profile</h2></div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold"><label htmlFor="accuracy">Mock accuracy</label><span className="font-mono text-blue-700">{globalAccuracy}%</span></div>
              <input id="accuracy" type="range" min="35" max="100" value={globalAccuracy} onChange={(event) => setGlobalAccuracy(Number(event.target.value))} className="w-full accent-blue-600" />
              <p className="text-[11px] leading-4 text-zinc-500">Mock accuracy informs the estimated rank.</p>
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
              <p className="text-[11px] leading-4 text-zinc-500">A larger buffer widens the search band.</p>
            </div>

            <label className="flex cursor-pointer items-center gap-2 rounded-xl border bg-zinc-50 p-3 text-xs font-bold"><input type="checkbox" checked={showOnlyWaivers} onChange={(event) => setShowOnlyWaivers(event.target.checked)} className="h-4 w-4 accent-emerald-600" /> Show waiver-eligible seats only</label>
          </aside>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5"><p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Estimated rank band</p><p className="mt-2 text-2xl font-black text-blue-950">{formatRank(estimatedRank)}</p><p className="mt-1 text-xs text-blue-700">From {globalAccuracy}% mock accuracy</p></div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"><p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Search up to rank</p><p className="mt-2 text-2xl font-black">{formatRank(eligibleRank)}</p><p className="mt-1 text-xs text-zinc-500">Safety buffer threshold</p></div>
              <div className={`rounded-2xl border p-5 ${waiver.kind === "NONE" ? "border-zinc-200 bg-white" : "border-emerald-100 bg-emerald-50"}`}><p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Possible fee remission</p><p className="mt-2 text-2xl font-black">{categoryQuota === "PwD" ? waiver.label : `${waiver.percentage}%`}</p><p className="mt-1 text-xs text-emerald-700">{waiver.subtitle}</p></div>
            </div>

            <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 p-5"><div><p className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400">Live matching table</p><h2 className="mt-1 text-lg font-black">IIT seat recommendations</h2></div><span className="rounded-lg bg-zinc-100 px-3 py-1.5 font-mono text-xs font-bold text-zinc-600">{matchingSeats.length} matches</span></div>
              {matchingSeats.length === 0 ? <div className="p-8 text-sm text-zinc-600"><h3 className="text-base font-black text-zinc-900">No IIT seats match this estimate</h3><p className="mt-2 leading-6">Your estimated rank is <span className="font-mono font-bold text-zinc-900">{formatRank(estimatedRank)}</span>, and this search goes up to rank <span className="font-mono font-bold text-zinc-900">{formatRank(eligibleRank)}</span> for <span className="font-bold text-zinc-900">{QUOTA_LABELS[categoryQuota]}</span>. No catalogue row has a historical closing rank at or below that threshold.</p><p className="mt-2 leading-6">Next steps: raise mock accuracy, verify your category, and remember that NIT, IIIT, and GFTI options through JEE Main are not included in this IIT table.</p></div> : <div className="overflow-x-auto"><table className="w-full min-w-[860px] text-left text-xs"><thead className="bg-zinc-50 font-mono uppercase tracking-wider text-zinc-500"><tr><th className="px-5 py-3">Compare</th><th className="px-5 py-3">Institute / campus</th><th className="px-5 py-3">Program</th><th className="px-5 py-3">Quota</th><th className="px-5 py-3">Closing rank</th><th className="px-5 py-3">Estimate</th><th className="px-5 py-3">Status</th><th className="px-5 py-3">Seats</th><th className="px-5 py-3">Fee status</th></tr></thead><tbody className="divide-y divide-zinc-100">{matchingSeats.map((seat) => { const status = getSeatStatus(seat.closingRank, eligibleRank); return <tr key={seat.id} className="hover:bg-zinc-50"><td className="px-5 py-4"><input type="checkbox" checked={compareSeats.includes(seat.id)} onChange={() => toggleComparison(seat.id)} aria-label={`Compare ${seat.institute} ${seat.program}`} className="h-4 w-4 accent-blue-600" /></td><td className="px-5 py-4"><div className="font-bold">{seat.institute}</div><div className="mt-1 text-zinc-500">{seat.campus}</div></td><td className="px-5 py-4 font-semibold">{seat.program}</td><td className="px-5 py-4"><span className="rounded-md border bg-zinc-50 px-2 py-1 font-mono font-bold">{seat.quota}</span></td><td className="px-5 py-4 font-mono font-bold text-blue-700">{formatRank(seat.closingRank)}</td><td className="px-5 py-4 text-[11px] text-zinc-500">{seat.estimateLabel}</td><td className="px-5 py-4"><span className={`rounded-md border px-2 py-1 font-bold ${status === "Borderline" ? "border-amber-200 bg-amber-50 text-amber-700" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`}>{status}</span></td><td className="px-5 py-4 font-mono">{seat.seats}</td><td className="px-5 py-4">{categoryQuota === "PwD" ? <span className="font-semibold text-zinc-500">See institute fee circular</span> : waiver.kind === "NONE" ? <span className="font-semibold text-zinc-500">{waiver.label}</span> : <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 font-bold text-emerald-700">{waiver.percentage}% waiver</span>}</td></tr>; })}</tbody></table></div>}
            </section>

            {compareSeats.length > 0 && <section className="rounded-2xl border border-blue-100 bg-blue-50 p-5"><div className="flex items-center justify-between"><h2 className="text-sm font-black text-blue-950">Seat comparison shortlist</h2><span className="font-mono text-xs text-blue-700">{compareSeats.length}/3 selected</span></div><div className="mt-3 grid gap-3 md:grid-cols-3">{matchingSeats.filter((seat) => compareSeats.includes(seat.id)).map((seat) => <div key={seat.id} className="rounded-xl border border-blue-100 bg-white p-3 text-xs"><p className="font-bold">{seat.institute}</p><p className="mt-1 text-zinc-500">{seat.program}</p><p className="mt-2 font-mono font-bold text-blue-700">Rank {formatRank(seat.closingRank)}</p></div>)}</div></section>}
          </div>
        </section>
      </div>
    </main>
  );
}
