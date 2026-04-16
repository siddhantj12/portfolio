"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const now = [
  { label: "Building", text: "F1 Core — real-time F1 telemetry dashboard at SFU's Early-Stage Incubator" },
  { label: "Studying", text: "Joint CS & Business at Simon Fraser University, Burnaby BC" },
  { label: "Representing", text: "SFU Beedie at CUBE 2026 global case competition in Budapest" },
  { label: "Leading", text: "VP of Technology at the Finance Student Association, SFU" },
  { label: "Researching", text: "LLM-assisted news classification with the People & Data Computing Research Group — exploring mitigations for ethical issues and biases in AI datasets" },
];

export default function NowSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="now" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-20 bg-[#0e0e0e] dark:bg-[#111]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-20 mb-16">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-widest text-white/25 uppercase pt-2">
            Right now
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-bold text-white leading-tight tracking-[-0.02em]">
            What I&apos;m doing in 2025–26
          </motion.h2>
        </div>

        <div className="divide-y divide-white/[0.07]">
          {now.map((item, i) => (
            <motion.div key={item.label}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="py-5 flex items-baseline gap-6 sm:gap-12"
            >
              <span className="text-xs font-semibold text-[#7c6af7] uppercase tracking-wider shrink-0 w-24">{item.label}</span>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
