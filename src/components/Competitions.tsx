"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const comps = [
  { name: "CUBE 2026", detail: "Corvinus Undergraduate Business Experience — Budapest", result: "Selected Delegate", note: "1 of 4 from 5,000+ at SFU Beedie", highlight: true },
  { name: "ACE Canada Nationals", detail: "Tech & Innovation Track", result: "2nd Place", note: "National level" },
  { name: "SFU Beedie Analytics Hackathon", detail: "BC Hydro demand forecasting", result: "1st Place", note: "" },
  { name: "Deloitte Community Case Competition", detail: "Strategy & Consulting", result: "Participant", note: "" },
  { name: "SFU 202 Challenge", detail: "Entrepreneurship & Innovation", result: "Judge", note: "" },
];

const programs = ["HIVE Leader", "CCTP Cohort of '25", "SFU Beedie Protégé"];

export default function Competitions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="competitions" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-20 border-t border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-20 mb-16">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-widest text-black/30 dark:text-white/30 uppercase pt-2">
            Competitions
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-bold text-[#0e0e0e] dark:text-[#e8e2d9] leading-tight tracking-[-0.02em]">
            On the competitive stage
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-8">
          <div className="divide-y divide-black/[0.06] dark:divide-white/[0.06]">
            {comps.map((c, i) => (
              <motion.div key={c.name}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                className="py-5 flex items-start justify-between gap-4 group"
              >
                <div>
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className={`font-semibold text-base ${c.highlight ? "text-[#5b4de8] dark:text-[#7c6af7]" : "text-[#0e0e0e] dark:text-[#e8e2d9]"}`}>{c.name}</h3>
                    {c.note && <span className="text-xs text-black/30 dark:text-white/30">{c.note}</span>}
                  </div>
                  <p className="text-sm text-black/40 dark:text-white/40">{c.detail}</p>
                </div>
                <ResultBadge result={c.result} />
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#edeae3] dark:bg-[#1d1d1d] rounded-2xl p-6 h-fit">
            <p className="text-xs font-semibold tracking-widest text-black/30 dark:text-white/30 uppercase mb-5">Programs</p>
            <div className="space-y-3">
              {programs.map((p) => (
                <div key={p} className="flex items-center gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-[#5b4de8] dark:bg-[#7c6af7] shrink-0" />
                  <span className="text-sm text-black/70 dark:text-white/60">{p}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-black/[0.08] dark:border-white/[0.08]">
              <p className="text-xs text-black/30 dark:text-white/30 italic">More coming — actively competing</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ResultBadge({ result }: { result: string }) {
  const styles: Record<string, string> = {
    "1st Place": "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/40",
    "2nd Place": "bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:border-zinc-700/50",
    "Selected Delegate": "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900/20 dark:text-violet-400 dark:border-violet-800/40",
    Judge: "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-900/20 dark:text-pink-400 dark:border-pink-800/40",
    Participant: "bg-gray-50 text-gray-500 border-gray-200 dark:bg-gray-800/30 dark:text-gray-400 dark:border-gray-700/40",
  };
  return (
    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border shrink-0 ${styles[result] ?? "bg-gray-50 text-gray-500 border-gray-200 dark:bg-gray-800/30 dark:text-gray-400 dark:border-gray-700/40"}`}>
      {result}
    </span>
  );
}
