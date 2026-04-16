"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen grid lg:grid-cols-[1fr_1fr] overflow-hidden bg-[#f5f3ee] dark:bg-[#0f0f0f]">

      {/* ── Left: Photo ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative h-[55vw] max-h-[70vh] lg:h-auto lg:max-h-none lg:self-center lg:mt-14 order-1 lg:order-none overflow-hidden lg:rounded-r-3xl"
      >
        <Image
          src="/siddhant.jpg"
          alt="Siddhant Jain"
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* gradient overlay at bottom — matches bg */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f5f3ee] dark:from-[#0f0f0f] to-transparent lg:hidden" />
      </motion.div>

      {/* ── Right: Text ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col justify-between px-6 sm:px-12 lg:px-16 pt-20 pb-10 lg:py-20 bg-[#f5f3ee] dark:bg-[#0f0f0f] order-2"
      >
        {/* Top meta */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/40 px-2.5 py-1 rounded-full font-medium">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Open to opportunities
          </span>
          <span className="text-xs text-black/30 dark:text-white/30">Vancouver, BC</span>
        </div>

        {/* Name */}
        <div className="my-auto py-8 sm:py-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            className="font-display text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.9] tracking-[-0.03em] text-[#0e0e0e] dark:text-[#e8e2d9] mb-6 sm:mb-8"
          >
            Siddhant
            <br />
            <span className="text-[#5b4de8]">Jain.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
            className="text-base sm:text-lg text-black/50 dark:text-white/50 leading-relaxed max-w-sm mb-2"
          >
            Developer, builder, and product thinker at SFU.
            I make things that sit at the edge of
            <span className="text-black/80 dark:text-white/80 font-medium"> technology</span> and
            <span className="text-black/80 dark:text-white/80 font-medium"> strategy</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="text-sm text-black/35 dark:text-white/30"
          >
            Open to product · consulting · software development
          </motion.p>
        </div>

        {/* Bottom links */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap gap-2 sm:gap-3"
        >
          <a href="https://github.com/siddhantj12" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white border border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/25 px-4 py-2 rounded-full transition-all cursor-pointer bg-white/60 dark:bg-white/[0.04]">
            <GitHubIcon /> GitHub
          </a>
          <a href="https://linkedin.com/in/siddhant-jain0310" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white border border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/25 px-4 py-2 rounded-full transition-all cursor-pointer bg-white/60 dark:bg-white/[0.04]">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href="mailto:sja178@sfu.ca"
            className="flex items-center gap-2 text-sm text-white bg-[#0e0e0e] dark:bg-white dark:text-[#0e0e0e] hover:bg-[#333] dark:hover:bg-white/90 px-4 py-2 rounded-full transition-colors cursor-pointer">
            sja178@sfu.ca
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>;
}
function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
}
