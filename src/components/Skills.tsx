import FadeIn from "./FadeIn";

const groups = [
  {
    label: "Languages & AI",
    color: "text-violet-400",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL", "R", "OpenAI API", "Gemini API", "Claude API"],
  },
  {
    label: "Frameworks & Tech",
    color: "text-blue-400",
    skills: ["Next.js", "React", "FastAPI", "PyTorch", "XGBoost", "Scikit-learn", "NumPy", "Pandas", "AWS", "Git"],
  },
  {
    label: "Product & Design",
    color: "text-emerald-400",
    skills: ["PRDs", "OKRs", "Agile / Scrum", "JIRA", "Figma", "A/B Testing", "User Journey Mapping", "MVP Building", "Confluence"],
  },
  {
    label: "Analytics & Research",
    color: "text-amber-400",
    skills: ["Tableau", "PowerBI", "Excel", "Quantitative Research", "Qualitative Research", "ARIMA", "VAR Models"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#0d0d11]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-baseline gap-4 mb-3">
            <span className="text-xs font-mono text-white/15">04</span>
            <p className="text-xs font-semibold tracking-widest text-violet-400/70 uppercase">Skills</p>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-16 leading-tight">
            Technical toolkit
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {groups.map((g, i) => (
            <FadeIn key={g.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <h3 className={`text-xs font-bold uppercase tracking-widest mb-5 ${g.color}`}>
                  {g.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="text-sm px-3 py-1.5 rounded-lg bg-white/[0.04] text-white/55 border border-white/[0.06] hover:border-white/[0.14] hover:text-white/80 transition-all cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
