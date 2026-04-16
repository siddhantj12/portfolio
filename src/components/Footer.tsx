export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <p className="font-display text-2xl font-bold text-white mb-1">Siddhant Jain</p>
          <p className="text-sm text-white/30">CS & Business · Simon Fraser University · Vancouver, BC</p>
          <p className="text-xs text-white/20 mt-1">Open to product, consulting & software development roles</p>
        </div>
        <div className="flex flex-col sm:items-end gap-3">
          <div className="flex items-center gap-4">
            <a href="mailto:sja178@sfu.ca" className="text-sm text-white/40 hover:text-violet-300 transition-colors cursor-pointer">
              sja178@sfu.ca
            </a>
            <a href="https://github.com/siddhantj12" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-violet-300 transition-colors cursor-pointer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/siddhant-jain0310" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-violet-300 transition-colors cursor-pointer">
              LinkedIn
            </a>
          </div>
          <p className="text-xs text-white/15">Built with Next.js · Framer Motion · Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
