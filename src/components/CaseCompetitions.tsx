import FadeIn from "./FadeIn";

const competitions = [
  {
    name: "CUBE 2026",
    sub: "Corvinus Undergraduate Business Experience — Budapest",
    result: "Selected Delegate",
    detail: "1 of 4 selected from 5,000+ students at SFU Beedie to represent the school globally.",
    badge: "Global",
    badgeColor: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    resultColor: "text-violet-300",
  },
  {
    name: "ACE Canada Nationals",
    sub: "Tech & Innovation Track",
    result: "2nd Place",
    detail: "National-level case competition. Placed 2nd in the Technology & Innovation category.",
    badge: "National",
    badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    resultColor: "text-zinc-300",
  },
  {
    name: "SFU Beedie Analytics Hackathon",
    sub: "BC Hydro Data Analytics",
    result: "1st Place",
    detail: "Energy optimization and demand forecasting model for BC Hydro.",
    badge: "Analytics",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    resultColor: "text-amber-400",
  },
  {
    name: "Deloitte Community Case Competition",
    sub: "Strategy & Consulting",
    result: "Participant",
    detail: "Consulting strategy case competition hosted by Deloitte.",
    badge: "Consulting",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    resultColor: "text-white/30",
  },
  {
    name: "SFU 202 Challenge",
    sub: "Entrepreneurship & Innovation",
    result: "Judge",
    detail: "Evaluated teams at SFU's flagship entrepreneurship challenge.",
    badge: "Leadership",
    badgeColor: "bg-pink-500/10 text-pink-300 border-pink-500/20",
    resultColor: "text-pink-400",
  },
];

const programs = [
  { name: "HIVE Leader", desc: "Leadership program at SFU Beedie School of Business." },
  { name: "CCTP Cohort of '25", desc: "Case Competition Training Program — intensive coaching on business strategy." },
  { name: "SFU Beedie Protégé", desc: "Selective mentorship pairing students with industry leaders." },
];

export default function CaseCompetitions() {
  return (
    <section id="competitions" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-baseline gap-4 mb-3">
            <span className="text-xs font-mono text-white/15">03</span>
            <p className="text-xs font-semibold tracking-widest text-violet-400/70 uppercase">
              Competitions & Programs
            </p>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-16 leading-tight">
            On the competitive stage
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-6">
          {/* Competitions */}
          <div className="space-y-3">
            {competitions.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.06}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] p-5 sm:p-6 transition-all duration-200">
                  {/* Top row: name + result */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-white text-sm leading-snug">{c.name}</h3>
                    <span className={`text-xs font-bold shrink-0 ${c.resultColor}`}>{c.result}</span>
                  </div>
                  {/* Sub + badge */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <p className="text-xs text-white/30">{c.sub}</p>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${c.badgeColor}`}>
                      {c.badge}
                    </span>
                  </div>
                  <p className="text-xs text-white/35 leading-relaxed">{c.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Programs + placeholder */}
          <div className="space-y-3">
            <FadeIn>
              <p className="text-xs font-semibold text-white/25 uppercase tracking-widest mb-4 px-1">
                Programs & Leadership
              </p>
            </FadeIn>
            {programs.map((p, i) => (
              <FadeIn key={p.name} delay={0.1 + i * 0.07}>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] p-5 transition-all duration-200">
                  <h4 className="font-semibold text-white text-sm mb-1.5">{p.name}</h4>
                  <p className="text-xs text-white/35 leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
            <FadeIn delay={0.35}>
              <div className="rounded-2xl border border-dashed border-violet-500/15 bg-violet-500/[0.02] p-5">
                <p className="text-sm font-medium text-violet-400/50 mb-1">More coming soon</p>
                <p className="text-xs text-white/20 leading-relaxed">
                  This section updates as I compete in more programs and competitions.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
