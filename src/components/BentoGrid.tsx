"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

/* ─── Shared card shell ─── */
function Card({
  children,
  className = "",
  delay = 0,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}) {
  return (
    <motion.div
      {...fadeUp(delay)}
      whileHover={hover ? { y: -3, transition: { duration: 0.2 } } : undefined}
      className={`rounded-3xl border border-white/[0.10] bg-[#18181f] p-6 transition-colors duration-300 hover:border-white/[0.18] ${className}`}
    >
      {children}
    </motion.div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold tracking-widest text-white/25 uppercase mb-4">
      {children}
    </p>
  );
}

/* ─── External link icon ─── */
function ExtIcon() {
  return (
    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
function GHIcon() {
  return (
    <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" className="shrink-0">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

/* ══════════════════════════════════════════
   CARDS
══════════════════════════════════════════ */

/* Hero name card */
function HeroCard() {
  return (
    <Card
      delay={0}
      hover={false}
      className="col-span-12 sm:col-span-8 row-span-2 bg-gradient-to-br from-[#1e1a35] via-[#18181f] to-[#151520] flex flex-col justify-between min-h-[280px]"
    >
      <div>
        <p className="text-[10px] font-semibold tracking-widest text-violet-400/50 uppercase mb-6">
          Portfolio · 2025
        </p>
        <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.03em] text-white">
          Siddhant
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
            Jain.
          </span>
        </h1>
      </div>
      <div className="flex flex-wrap gap-2 mt-8">
        {["Developer", "Builder", "Product Thinker"].map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1.5 rounded-full border border-white/[0.08] text-white/40 bg-white/[0.03]"
          >
            {t}
          </span>
        ))}
      </div>
    </Card>
  );
}

/* Avatar + status card */
function AvatarCard() {
  return (
    <Card delay={0.05} className="col-span-12 sm:col-span-4 flex flex-col items-center justify-center gap-4 text-center">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-violet-500/30 blur-xl scale-110" />
        <Image
          src="https://avatars.githubusercontent.com/u/173846182?v=4"
          alt="Siddhant Jain"
          width={80}
          height={80}
          className="relative rounded-full border-2 border-white/10"
          priority
        />
      </div>
      <div>
        <p className="font-semibold text-white text-sm">Siddhant Jain</p>
        <p className="text-xs text-white/35 mt-0.5">Vancouver, BC</p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full">
        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
        Open to opportunities
      </span>
    </Card>
  );
}

/* Open to card */
function OpenToCard() {
  return (
    <Card delay={0.08} className="col-span-12 sm:col-span-4 bg-gradient-to-br from-violet-950/50 to-[#18181f]">
      <Label>Open to</Label>
      <div className="space-y-2">
        {["Product Management", "Consulting", "Software Development"].map((r) => (
          <div key={r} className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-violet-400 shrink-0" />
            <span className="text-sm text-white/70">{r}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* Education card */
function EduCard() {
  return (
    <Card delay={0.1} className="col-span-12 sm:col-span-4">
      <Label>Education</Label>
      <p className="font-display text-lg font-bold text-white leading-snug mb-1">Simon Fraser University</p>
      <p className="text-xs text-violet-400 mb-3">BS · CS & Business · Joint Major</p>
      <div className="flex flex-wrap gap-2">
        <span className="text-[11px] px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
          Dean's Honour Roll
        </span>
        <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.05] text-white/40 border border-white/[0.07]">
          Grad Aug 2027
        </span>
      </div>
    </Card>
  );
}

/* Contact card */
function ContactCard() {
  return (
    <Card delay={0.12} className="col-span-12 sm:col-span-4 flex flex-col gap-3">
      <Label>Contact</Label>
      <a href="mailto:sja178@sfu.ca" className="flex items-center gap-2 text-sm text-white/60 hover:text-violet-300 transition-colors cursor-pointer group">
        <span className="w-7 h-7 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center shrink-0 group-hover:border-violet-500/30 transition-colors">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </span>
        sja178@sfu.ca
      </a>
      <a href="https://github.com/siddhantj12" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/60 hover:text-violet-300 transition-colors cursor-pointer group">
        <span className="w-7 h-7 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center shrink-0 group-hover:border-violet-500/30 transition-colors">
          <GHIcon />
        </span>
        github.com/siddhantj12
      </a>
      <a href="https://linkedin.com/in/siddhant-jain0310" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/60 hover:text-violet-300 transition-colors cursor-pointer group">
        <span className="w-7 h-7 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center shrink-0 group-hover:border-violet-500/30 transition-colors">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </span>
        linkedin.com/in/siddhant-jain0310
      </a>
    </Card>
  );
}

/* ─── Experience Cards ─── */
const jobs = [
  {
    company: "Charles Chang Institute",
    role: "Founder",
    period: "Jul 2025 – Present",
    tag: "Incubator",
    tagColor: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    bullets: ["Invited into SFU's Early-Stage Incubator for F1 Core.", "Led sprints achieving 75% latency reduction & 50% higher engagement."],
  },
  {
    company: "BeReal.",
    role: "Product Manager Extern",
    period: "Oct 2025 – Jan 2026",
    tag: "PM",
    tagColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    bullets: ["Prototyped features driving +15% MAU experiments.", "Ran 40+ user focus group → PRDs & mockups."],
  },
  {
    company: "FINSA, SFU",
    role: "VP Technology",
    period: "Jun 2025 – Jun 2026",
    tag: "Leadership",
    tagColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    bullets: ["Led team of 5 on ReactJS migration → +40% traffic, 95% faster loads.", "AI dashboards boosted workflow efficiency by 80%."],
  },
  {
    company: "SFU Research Group",
    role: "Undergrad Research Assistant",
    period: "Apr 2024 – Present",
    tag: "Research",
    tagColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    bullets: ["XGBoost + LLM classification on 30k+ headlines, +25% accuracy.", "Partnered with SFU & Boston University researchers."],
  },
];

function ExperienceCards() {
  return (
    <>
      {jobs.map((job, i) => (
        <Card key={job.company} delay={0.05 * i} className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col">
          <div className="flex items-start justify-between gap-2 mb-3">
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${job.tagColor}`}>
              {job.tag}
            </span>
            <span className="text-[10px] text-white/25 shrink-0">{job.period}</span>
          </div>
          <p className="font-semibold text-white text-sm mb-0.5">{job.company}</p>
          <p className="text-xs text-violet-400/70 mb-4">{job.role}</p>
          <ul className="space-y-2 mt-auto">
            {job.bullets.map((b, j) => (
              <li key={j} className="flex gap-2 text-xs text-white/35 leading-relaxed">
                <span className="text-violet-500/40 shrink-0 mt-0.5">▸</span>
                {b}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </>
  );
}

/* ─── F1 Core Featured ─── */
function F1CoreCard() {
  return (
    <Card
      delay={0.05}
      hover={false}
      className="col-span-12 lg:col-span-8 bg-gradient-to-br from-[#1f1550] via-[#191430] to-[#15131e] border-violet-500/25 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 blur-[80px] pointer-events-none rounded-full" />
      <div className="relative">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/25 uppercase tracking-wider">Featured</span>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">SFU Incubator</span>
        </div>
        <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">F1 Core</h3>
        <p className="text-sm text-violet-300/80 mb-4">Real-time Formula 1 Telemetry Dashboard</p>
        <p className="text-sm text-white/40 leading-relaxed max-w-lg mb-6">
          Live telemetry platform delivering race data with 75% latency reduction. Recognized by SFU's Early-Stage Incubator for market potential — built from 20+ user interviews and iterative product sprints.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {["Python", "FastAPI", "React", "WebSocket", "Next.js"].map((t) => (
            <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.07] text-white/55 border border-white/[0.12]">{t}</span>
          ))}
        </div>
        <a
          href="https://f1-dash-inky.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-sm text-white font-medium transition-colors cursor-pointer"
        >
          <ExtIcon /> View Live
        </a>
      </div>
    </Card>
  );
}

/* ─── F1 Metrics card ─── */
function F1MetricsCard() {
  return (
    <Card delay={0.1} className="col-span-12 lg:col-span-4 flex flex-col justify-between">
      <Label>F1 Core · Impact</Label>
      <div className="space-y-6">
        {[
          { val: "75%", label: "Latency reduction" },
          { val: "50%", label: "Higher engagement" },
          { val: "20+", label: "User interviews" },
        ].map((s) => (
          <div key={s.label}>
            <p className="font-display text-4xl font-bold text-white">{s.val}</p>
            <p className="text-xs text-white/30 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─── Project cards ─── */
const projects = [
  { name: "Rainveal", tagline: "Mystery weather game", tech: ["Next.js", "Gemini API"], repo: "https://github.com/siddhantj12/rainveal", live: "https://rainveal.tech", stat: "+70% session time" },
  { name: "Aether G4", tagline: "Pomodoro focus app", tech: ["TypeScript", "Next.js"], repo: "https://github.com/siddhantj12/aether-g4", live: "https://aether-pom.vercel.app" },
  { name: "HMH Omni-Layer", tagline: "PWA for House of Music Hungary", tech: ["TypeScript", "PWA"], repo: "https://github.com/siddhantj12/hmh-omni-layer", live: "https://hmh-omni-layer.vercel.app" },
  { name: "Auchan App", tagline: "Retail mobile app · CUBE 2026", tech: ["TypeScript", "React Native"], repo: "https://github.com/siddhantj12/auchan-app-prototype" },
  { name: "VGH Portal", tagline: "Vancouver General Hospital portal", tech: ["TypeScript", "Next.js"], repo: "https://github.com/siddhantj12/vgh-portal", live: "https://vgh-mockup.vercel.app" },
  { name: "StormHacks", tagline: "24h hackathon web app", tech: ["TypeScript", "Next.js"], repo: "https://github.com/siddhantj12/stormhacks", live: "https://stormhacks-vert.vercel.app" },
  { name: "Beedie Hackathon", tagline: "BC Hydro analytics · 1st Place", tech: ["Python", "Pandas"], repo: "https://github.com/siddhantj12/Beedie-Hackathon", stat: "1st Place" },
  { name: "Time Series Modeling", tagline: "ARIMA & VAR in R", tech: ["R", "ARIMA", "VAR"], repo: "https://github.com/siddhantj12/Time-Series-Modeling-in-R-ARIMA-VAR-Models" },
];

function ProjectCards() {
  return (
    <>
      {projects.map((p, i) => (
        <motion.div
          key={p.name}
          {...fadeUp(i * 0.04)}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="col-span-12 sm:col-span-6 lg:col-span-3 rounded-3xl border border-white/[0.10] bg-[#18181f] p-5 flex flex-col hover:border-violet-500/30 hover:bg-[#1c1c26] transition-colors duration-300 cursor-pointer"
        >
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="font-semibold text-white text-sm leading-snug">{p.name}</h4>
            {p.stat && (
              <span className="text-[10px] font-bold text-emerald-400 shrink-0">{p.stat}</span>
            )}
          </div>
          <p className="text-xs text-white/35 mb-4 flex-1 leading-relaxed">{p.tagline}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.tech.map((t) => (
              <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.07] text-white/50 border border-white/[0.10]">{t}</span>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-auto">
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[11px] text-white/25 hover:text-white/60 transition-colors cursor-pointer">
                <GHIcon /> Source
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[11px] text-violet-400 hover:text-violet-300 font-medium transition-colors cursor-pointer">
                <ExtIcon /> Live
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </>
  );
}

/* ─── Competitions card ─── */
const comps = [
  { name: "CUBE 2026 Budapest", result: "Selected Delegate", sub: "1 of 4 from 5,000+ at SFU Beedie", color: "text-violet-300" },
  { name: "ACE Canada Nationals", result: "2nd Place", sub: "Tech & Innovation Track", color: "text-zinc-300" },
  { name: "SFU Beedie Analytics Hackathon", result: "1st Place", sub: "BC Hydro demand forecasting", color: "text-amber-400" },
  { name: "Deloitte Community Case Competition", result: "Participant", sub: "Strategy & Consulting", color: "text-white/30" },
  { name: "SFU 202 Challenge", result: "Judge", sub: "Entrepreneurship & Innovation", color: "text-pink-400" },
];

function CompetitionsCard() {
  return (
    <Card delay={0.05} hover={false} className="col-span-12 lg:col-span-8">
      <Label>03 · Competitions</Label>
      <h3 className="font-display text-2xl font-bold text-white mb-6">On the competitive stage</h3>
      <div className="divide-y divide-white/[0.05]">
        {comps.map((c) => (
          <div key={c.name} className="py-3.5 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-white/80">{c.name}</p>
              <p className="text-xs text-white/30 mt-0.5">{c.sub}</p>
            </div>
            <span className={`text-xs font-bold shrink-0 ${c.color}`}>{c.result}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─── Programs card ─── */
function ProgramsCard() {
  return (
    <Card delay={0.1} className="col-span-12 lg:col-span-4 flex flex-col">
      <Label>Programs & Leadership</Label>
      <div className="space-y-4 flex-1">
        {[
          { name: "HIVE Leader", desc: "SFU Beedie leadership program" },
          { name: "CCTP Cohort of '25", desc: "Case Competition Training Program" },
          { name: "SFU Beedie Protégé", desc: "Industry mentorship program" },
        ].map((p) => (
          <div key={p.name} className="flex gap-3">
            <span className="w-1 h-1 mt-2 rounded-full bg-violet-400 shrink-0" />
            <div>
              <p className="text-sm font-medium text-white/80">{p.name}</p>
              <p className="text-xs text-white/30 mt-0.5">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-white/[0.05] rounded-2xl border border-dashed border-violet-500/15 bg-violet-500/[0.02] p-4">
        <p className="text-xs text-violet-400/50 font-medium">More coming soon</p>
      </div>
    </Card>
  );
}

/* ─── Skills card ─── */
const skillGroups = [
  { label: "Languages & AI", color: "text-violet-400", items: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL", "R", "OpenAI API", "Gemini API", "Claude API"] },
  { label: "Frameworks", color: "text-blue-400", items: ["Next.js", "React", "FastAPI", "PyTorch", "XGBoost", "Scikit-learn", "NumPy", "Pandas", "AWS", "Git"] },
  { label: "Product & Design", color: "text-emerald-400", items: ["PRDs", "OKRs", "Agile/Scrum", "JIRA", "Figma", "A/B Testing", "User Journey Mapping", "MVP Building"] },
  { label: "Analytics", color: "text-amber-400", items: ["Tableau", "PowerBI", "Excel", "Quant Research", "ARIMA", "VAR Models"] },
];

function SkillsCard() {
  return (
    <Card delay={0.05} hover={false} className="col-span-12">
      <Label>04 · Skills</Label>
      <h3 className="font-display text-2xl font-bold text-white mb-8">Technical toolkit</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((g) => (
          <div key={g.label}>
            <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${g.color}`}>{g.label}</p>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((s) => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.07] text-white/60 border border-white/[0.10] hover:text-white/90 hover:border-white/[0.20] transition-all cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─── Footer card ─── */
function FooterCard() {
  return (
    <Card delay={0.05} hover={false} className="col-span-12 bg-gradient-to-br from-violet-950/30 to-[#18181f] border-violet-500/15">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-2xl font-bold text-white mb-1">Let&apos;s build something.</h3>
          <p className="text-sm text-white/35">Open to product, consulting & software development roles.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a href="mailto:sja178@sfu.ca" className="px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-sm text-white font-medium transition-colors cursor-pointer">
            Get in touch
          </a>
          <a href="https://github.com/siddhantj12" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] text-sm text-white/60 hover:text-white transition-all cursor-pointer">
            GitHub
          </a>
        </div>
      </div>
    </Card>
  );
}

/* ══════════════════════════════════════════
   MAIN GRID
══════════════════════════════════════════ */
export default function BentoGrid() {
  return (
    <div className="grid grid-cols-12 gap-4 auto-rows-auto">

      {/* ── Row 1: Hero + Avatar ── */}
      <HeroCard />
      <AvatarCard />

      {/* ── Row 2: Open to + Education + Contact ── */}
      <OpenToCard />
      <EduCard />
      <ContactCard />

      {/* ── Row 3: Experience section label ── */}
      <motion.div {...fadeUp(0)} className="col-span-12 pt-6 pb-2">
        <div className="flex items-baseline gap-4">
          <span className="text-xs font-mono text-white/15">01</span>
          <p className="text-xs font-semibold tracking-widest text-violet-400/60 uppercase">Experience</p>
        </div>
      </motion.div>

      {/* ── Row 4: Experience cards ── */}
      <ExperienceCards />

      {/* ── Row 5: Projects section label ── */}
      <motion.div {...fadeUp(0)} className="col-span-12 pt-6 pb-2">
        <div className="flex items-baseline gap-4">
          <span className="text-xs font-mono text-white/15">02</span>
          <p className="text-xs font-semibold tracking-widest text-violet-400/60 uppercase">Projects</p>
        </div>
      </motion.div>

      {/* ── Row 6: F1 Core featured ── */}
      <F1CoreCard />
      <F1MetricsCard />

      {/* ── Row 7: Project cards ── */}
      <ProjectCards />

      {/* ── Row 8: Competitions ── */}
      <motion.div {...fadeUp(0)} className="col-span-12 pt-6 pb-2">
        <div className="flex items-baseline gap-4">
          <span className="text-xs font-mono text-white/15">03</span>
          <p className="text-xs font-semibold tracking-widest text-violet-400/60 uppercase">Competitions & Programs</p>
        </div>
      </motion.div>
      <CompetitionsCard />
      <ProgramsCard />

      {/* ── Row 9: Skills ── */}
      <motion.div {...fadeUp(0)} className="col-span-12 pt-6 pb-2">
        <div className="flex items-baseline gap-4">
          <span className="text-xs font-mono text-white/15">04</span>
          <p className="text-xs font-semibold tracking-widest text-violet-400/60 uppercase">Skills</p>
        </div>
      </motion.div>
      <SkillsCard />

      {/* ── Footer ── */}
      <FooterCard />
    </div>
  );
}
