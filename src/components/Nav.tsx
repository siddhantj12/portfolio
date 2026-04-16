"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Competitions", href: "#competitions" },
  { label: "Now", href: "#now" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const shadow = useTransform(scrollY, [0, 80], [0, 1]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <motion.div
        style={{ opacity: shadow }}
        className="absolute inset-0 bg-[#f5f3ee]/90 dark:bg-[#0f0f0f]/90 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.06]"
      />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold text-black/70 dark:text-white/70 tracking-tight hover:text-black dark:hover:text-white transition-colors cursor-pointer"
        >
          Siddhant Jain
        </a>

        <div className="flex items-center gap-1">
          {/* Desktop nav links */}
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hidden sm:block text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white px-3 py-1.5 rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all cursor-pointer"
            >
              {label}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all cursor-pointer ml-1"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* CTA — hidden on mobile (shown in mobile menu) */}
          <a
            href="mailto:sja178@sfu.ca"
            className="hidden sm:inline-flex ml-2 text-xs font-semibold bg-[#0e0e0e] dark:bg-white hover:bg-[#333] dark:hover:bg-white/90 text-white dark:text-[#0e0e0e] px-4 py-2 rounded-full transition-colors cursor-pointer"
          >
            Say hello
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="sm:hidden ml-1 p-2 rounded-lg text-black/50 dark:text-white/50 hover:bg-black/[0.05] dark:hover:bg-white/[0.07] transition-all"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.16 }}
          className="sm:hidden absolute top-full inset-x-0 bg-[#f5f3ee]/97 dark:bg-[#0f0f0f]/97 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.06] pb-4 px-6"
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white py-3.5 border-b border-black/[0.05] dark:border-white/[0.05] last:border-b-0 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:sja178@sfu.ca"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center text-xs font-semibold bg-[#0e0e0e] dark:bg-white text-white dark:text-[#0e0e0e] px-4 py-3 rounded-full"
          >
            Say hello
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
