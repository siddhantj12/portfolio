"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FooterContact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-10 lg:px-20 bg-[#0e0e0e] dark:bg-[#0a0a0a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-widest text-white/25 uppercase mb-8">
          Get in touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-[clamp(2.8rem,8vw,8rem)] font-bold text-white leading-[0.9] tracking-[-0.03em] mb-12 sm:mb-14"
        >
          Let&apos;s build
          <br />
          <span className="text-[#7c6af7]">something.</span>
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-3 sm:gap-4">
          <a href="mailto:sja178@sfu.ca"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#5b4de8] hover:bg-[#4a3dd0] text-white font-medium text-sm transition-colors cursor-pointer">
            sja178@sfu.ca
          </a>
          <a href="https://linkedin.com/in/siddhant-jain0310" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/15 hover:border-white/30 text-white/60 hover:text-white text-sm transition-all cursor-pointer">
            LinkedIn
          </a>
          <a href="https://github.com/siddhantj12" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/15 hover:border-white/30 text-white/60 hover:text-white text-sm transition-all cursor-pointer">
            GitHub
          </a>
        </motion.div>

        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-white/20">Siddhant Jain · Vancouver, BC · 2025</p>
          <p className="text-xs text-white/15">CS & Business · Simon Fraser University</p>
        </div>
      </div>
    </section>
  );
}
