"use client";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  repo?: string;
  live?: string;
};

const featured: Project = {
  name: "F1 Core",
  tagline: "Real-time Formula 1 Telemetry Dashboard",
  description:
    "Invited into SFU's Early-Stage Incubator. A live telemetry platform delivering race data with 75% latency reduction over baseline. Recognized for market potential and innovation — built from 20+ user interviews and iterative product sprints.",
  tech: ["Python", "FastAPI", "React", "WebSocket", "Next.js"],
  live: "https://thef1core.com",
};

const projects: Project[] = [
  {
    name: "Rainveal",
    tagline: "Mystery weather game app",
    description: "+70% session time · +45% repeat visits. AI-driven storytelling meets live weather forecasts.",
    tech: ["Next.js", "TypeScript", "Gemini API"],
    repo: "https://github.com/siddhantj12/rainveal",
    live: "https://rainveal.tech",
  },
  {
    name: "Aether G4",
    tagline: "Pomodoro focus & productivity app",
    description: "Immersive focus sessions with ambient soundscapes and session tracking.",
    tech: ["TypeScript", "Next.js"],
    repo: "https://github.com/siddhantj12/aether-g4",
    live: "https://aether-pom.vercel.app",
  },
  {
    name: "HMH Omni-Layer",
    tagline: "PWA for House of Music Hungary",
    description: "Cross-platform progressive web app prototype for a cultural institution.",
    tech: ["TypeScript", "PWA", "Next.js"],
    repo: "https://github.com/siddhantj12/hmh-omni-layer",
    live: "https://hmh-omni-layer.vercel.app",
  },
  {
    name: "Auchan App Prototype",
    tagline: "Retail mobile app — global case comp",
    description: "Mobile-first retail experience designed for CUBE 2026 Budapest.",
    tech: ["TypeScript", "React Native"],
    repo: "https://github.com/siddhantj12/auchan-app-prototype",
  },
  {
    name: "VGH Portal",
    tagline: "Vancouver General Hospital digital portal",
    description: "Streamlined patient and staff workflows for a major BC healthcare institution.",
    tech: ["TypeScript", "Next.js"],
    repo: "https://github.com/siddhantj12/vgh-portal",
    live: "https://vgh-mockup.vercel.app",
  },
  {
    name: "StormHacks",
    tagline: "24h hackathon web app",
    description: "Rapid full-stack build in 24 hours at SFU's StormHacks competition.",
    tech: ["TypeScript", "Next.js"],
    repo: "https://github.com/siddhantj12/stormhacks",
    live: "https://stormhacks-vert.vercel.app",
  },
  {
    name: "Beedie Analytics Hackathon",
    tagline: "BC Hydro demand forecasting · 1st Place",
    description: "Energy optimization insights and predictive demand modelling for BC Hydro.",
    tech: ["Python", "Pandas", "NumPy"],
    repo: "https://github.com/siddhantj12/Beedie-Hackathon",
  },
  {
    name: "Time Series Modeling",
    tagline: "ARIMA & VAR models in R",
    description: "Economic forecasting and policy recommendation models using R Studio.",
    tech: ["R", "ARIMA", "VAR", "RStudio"],
    repo: "https://github.com/siddhantj12/Time-Series-Modeling-in-R-ARIMA-VAR-Models",
  },
];

function TechPill({ label }: { label: string }) {
  return (
    <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.05] text-white/40 border border-white/[0.07]">
      {label}
    </span>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-[#0d0d11]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-baseline gap-4 mb-3">
            <span className="text-xs font-mono text-white/15">02</span>
            <p className="text-xs font-semibold tracking-widest text-violet-400/70 uppercase">Projects</p>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-16 leading-tight">
            Things I&apos;ve built
          </h2>
        </FadeIn>

        {/* Featured Card */}
        <FadeIn className="mb-4">
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-950/40 via-[#0d0d11] to-indigo-950/30 p-8 sm:p-10 cursor-pointer group"
          >
            {/* Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-40 bg-violet-600/10 blur-[80px] pointer-events-none" />

            <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/25 uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                    SFU Incubator
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
                  {featured.name}
                </h3>
                <p className="text-sm text-violet-300/80 font-medium mb-4">{featured.tagline}</p>
                <p className="text-sm text-white/40 leading-relaxed max-w-xl mb-6">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tech.map((t) => (
                    <TechPill key={t} label={t} />
                  ))}
                </div>
                <a
                  href={featured.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-sm text-white font-medium transition-colors cursor-pointer"
                >
                  <ExternalIcon />
                  View Live
                </a>
              </div>

              {/* Decorative metric */}
              <div className="sm:text-right space-y-4 shrink-0">
                <div>
                  <p className="text-4xl font-bold text-white">75%</p>
                  <p className="text-xs text-white/30">Latency reduction</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white">50%</p>
                  <p className="text-xs text-white/30">Higher engagement</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white">20+</p>
                  <p className="text-xs text-white/30">User interviews</p>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeIn>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {projects.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group flex flex-col h-full rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] p-5 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-white text-sm leading-snug group-hover:text-violet-300 transition-colors">
                    {p.name}
                  </h4>
                </div>
                <p className="text-[11px] text-violet-400/60 font-medium mb-2">{p.tagline}</p>
                <p className="text-xs text-white/35 leading-relaxed mb-4 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <TechPill key={t} label={t} />
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/70 transition-colors cursor-pointer"
                    >
                      <GitHubIcon />
                      Source
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 font-medium transition-colors cursor-pointer"
                    >
                      <ExternalIcon />
                      Live
                    </a>
                  )}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
