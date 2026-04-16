"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    num: "01",
    name: "F1 Core",
    role: "Founder · SFU Incubator",
    year: "2025–",
    desc: "Real-time Formula 1 telemetry dashboard. Invited into SFU's Early-Stage Incubator. 75% latency reduction, 50% higher engagement.",
    live: "https://f1-dash-inky.vercel.app",
    tags: ["Python", "FastAPI", "React"],
  },
  {
    num: "02",
    name: "Rainveal",
    role: "Solo build",
    year: "2025",
    desc: "Mystery weather game blending live forecasts with AI-driven storytelling. +70% session time, +45% repeat visits.",
    live: "https://rainveal.tech",
    repo: "https://github.com/siddhantj12/rainveal",
    tags: ["Next.js", "Gemini API", "TypeScript"],
  },
  {
    num: "03",
    name: "FINSA Digital Platform",
    role: "VP Technology · SFU",
    year: "2025–26",
    desc: "Led team of 5 to migrate Finance Student Association's platform to ReactJS. +40% traffic, 95% faster load speeds.",
    live: "https://finsasfu.com",
    tags: ["React", "TailwindCSS", "JIRA"],
  },
  {
    num: "04",
    name: "Aether G4",
    role: "Solo build",
    year: "2025",
    desc: "Immersive Pomodoro focus app with ambient soundscapes and session analytics.",
    live: "https://aether-pom.vercel.app",
    repo: "https://github.com/siddhantj12/aether-g4",
    tags: ["TypeScript", "Next.js"],
  },
  {
    num: "05",
    name: "HMH Omni-Layer",
    role: "Solo build",
    year: "2026",
    desc: "Progressive web app prototype for House of Music Hungary.",
    live: "https://hmh-omni-layer.vercel.app",
    repo: "https://github.com/siddhantj12/hmh-omni-layer",
    tags: ["TypeScript", "PWA"],
  },
  {
    num: "06",
    name: "SFU Research — AI Headlines",
    role: "Research Assistant",
    year: "2024–",
    desc: "XGBoost + LLM classification on 30,000+ news headlines. +25% accuracy. Partnered with Boston University.",
    tags: ["Python", "XGBoost", "OpenAI API"],
  },
];

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-20 bg-[#edeae3] dark:bg-[#181818]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-20 mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-widest text-black/30 dark:text-white/30 uppercase pt-2"
          >
            Selected work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-bold text-[#0e0e0e] dark:text-[#e8e2d9] leading-tight tracking-[-0.02em]"
          >
            Things I&apos;ve built &amp; shipped
          </motion.h2>
        </div>

        <div className="divide-y divide-black/[0.07] dark:divide-white/[0.07]">
          {items.map((item, i) => (
            <WorkRow key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkRow({ item, index }: { item: typeof items[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.04, ease: "easeOut" }}
      className="group py-6 sm:py-8 grid sm:grid-cols-[60px_1fr_auto] gap-4 sm:gap-8 items-start hover:bg-white/40 dark:hover:bg-white/[0.03] -mx-4 px-4 rounded-2xl transition-colors duration-200 cursor-default"
    >
      <span className="text-xs font-mono text-black/25 dark:text-white/25 pt-1 hidden sm:block">{item.num}</span>

      <div>
        <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-2">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0e0e0e] dark:text-[#e8e2d9] group-hover:text-[#5b4de8] dark:group-hover:text-[#7c6af7] transition-colors">
            {item.name}
          </h3>
          <span className="text-xs text-black/35 dark:text-white/35">{item.role} · {item.year}</span>
        </div>
        <p className="text-sm text-black/50 dark:text-white/45 leading-relaxed max-w-xl mb-3">{item.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-black/[0.05] dark:bg-white/[0.07] text-black/45 dark:text-white/45 border border-black/[0.07] dark:border-white/[0.08]">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3 pt-1 shrink-0">
        {item.live && (
          <a href={item.live} target="_blank" rel="noopener noreferrer"
            className="text-xs text-[#5b4de8] dark:text-[#7c6af7] hover:text-[#4038c0] dark:hover:text-[#9b8bff] font-medium flex items-center gap-1 transition-colors cursor-pointer">
            Live <ExtIcon />
          </a>
        )}
        {item.repo && (
          <a href={item.repo} target="_blank" rel="noopener noreferrer"
            className="text-xs text-black/35 dark:text-white/35 hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors cursor-pointer">
            Repo <ExtIcon />
          </a>
        )}
      </div>
    </motion.div>
  );
}

function ExtIcon() {
  return (
    <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}
