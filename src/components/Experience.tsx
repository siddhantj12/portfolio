"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const jobs = [
  {
    company: "People & Data Computing Research Group, SFU",
    url: "https://www.padcomp.org",
    role: "Undergraduate Research Assistant",
    period: "Apr 2024 – Present",
    tag: "Research",
    tagColor: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/40",
    bullets: [
      "Exploring the effect of AI on the labour market — analyzing how automation and LLMs are reshaping employment patterns and workforce dynamics.",
      "Exploring mitigations for ethical issues and biases in AI datasets.",
      "Leveraged OpenAI API with LLM-assisted supervised classification + XGBoost to analyze 30,000+ news headlines, improving accuracy by 25%.",
      "Partnered with SFU and Boston University researchers, improving cross-functional throughput by 15%.",
    ],
  },
  {
    company: "Charles Chang Institute for Entrepreneurship",
    url: "https://thef1core.com",
    role: "Founder",
    period: "Jul 2025 – Present",
    tag: "Incubator",
    tagColor: "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900/20 dark:text-violet-400 dark:border-violet-800/40",
    bullets: [
      "Invited into SFU's Early-Stage Incubator for F1 Core, a real-time Formula 1 telemetry dashboard.",
      "Conducted 20+ user interviews to define MVP features and product roadmap.",
      "Led cross-functional sprints achieving 75% latency reduction and 50% higher engagement.",
    ],
  },
  {
    company: "BeReal.",
    role: "Product Manager Extern",
    period: "Oct 2025 – Jan 2026",
    tag: "PM",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800/40",
    bullets: [
      "Owned end-to-end design and prototyping of new BeReal features, driving experiments projected to boost MAUs by 15%.",
      "Translated insights from 40+ users in a focus group into actionable PRDs and design mockups.",
    ],
  },
  {
    company: "Finance Student Association, SFU",
    url: "https://finsasfu.com",
    role: "Vice President of Technology",
    period: "Jun 2025 – Jun 2026",
    tag: "Leadership",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800/40",
    bullets: [
      "Defined product roadmap for a team of 5 for FINSA's platform migration to ReactJS/TailwindCSS, achieving 40% higher traffic and 95% faster loads.",
      "Deployed AI-driven dashboards to automate workflows, boosting response efficiency by 80%.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-20 bg-[#edeae3] dark:bg-[#181818]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-20 mb-16">
          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-widest text-black/30 dark:text-white/30 uppercase pt-2"
          >
            Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-bold text-[#0e0e0e] dark:text-[#e8e2d9] leading-tight tracking-[-0.02em]"
          >
            Where I&apos;ve worked
          </motion.h2>
        </div>

        <div className="divide-y divide-black/[0.07] dark:divide-white/[0.07]">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              className="group py-8 grid sm:grid-cols-[1fr_auto] gap-4 sm:gap-6 items-start"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-1.5">
                  <h3 className="font-display text-xl font-bold text-[#0e0e0e] dark:text-[#e8e2d9] group-hover:text-[#5b4de8] dark:group-hover:text-[#7c6af7] transition-colors leading-snug">
                    {job.url ? (
                      <a href={job.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#5b4de8] dark:hover:text-[#7c6af7] transition-colors cursor-pointer">
                        {job.company}
                      </a>
                    ) : job.company}
                  </h3>
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${job.tagColor}`}>
                    {job.tag}
                  </span>
                </div>
                <p className="text-sm text-[#5b4de8] dark:text-[#7c6af7] font-medium mb-4">{job.role}</p>
                <ul className="space-y-1.5">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-black/50 dark:text-white/45 leading-relaxed">
                      <span className="text-black/20 dark:text-white/20 shrink-0 mt-1">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="text-sm text-black/30 dark:text-white/30 shrink-0 sm:text-right">{job.period}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
