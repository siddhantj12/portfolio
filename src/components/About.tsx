"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-10 lg:px-20 border-t border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-20" ref={ref}>

        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-widest text-black/30 dark:text-white/30 uppercase pt-2">About</p>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[clamp(1.5rem,3.5vw,2.8rem)] font-bold text-[#0e0e0e] dark:text-[#e8e2d9] leading-[1.2] tracking-[-0.02em] mb-8"
          >
            I&apos;m a CS &amp; Business student at SFU with a Dean&apos;s Honour Roll — building at the intersection of software and strategy.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base text-black/50 dark:text-white/45 leading-relaxed max-w-2xl mb-10"
          >
            From founding a startup at SFU&apos;s incubator to running product at BeReal, I&apos;ve learned that great products come from obsessing over people, not features. I care about shipping things that actually matter — and compete in case competitions to keep that thinking sharp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            {[
              { val: "Dean's Honour Roll", sub: "SFU" },
              { val: "Grad Aug 2027", sub: "CS + Business" },
              { val: "4 roles", sub: "across PM, eng & research" },
              { val: "5 competitions", sub: "including global CUBE 2026" },
            ].map((s) => (
              <div key={s.val} className="flex flex-col px-5 py-3.5 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white/70 dark:bg-white/[0.04]">
                <span className="text-sm font-semibold text-[#0e0e0e] dark:text-[#e8e2d9]">{s.val}</span>
                <span className="text-xs text-black/40 dark:text-white/40 mt-0.5">{s.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
