export default function Footer() {
  return (
    <footer className="bg-[#020817] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
              YS
            </div>
            <span className="font-semibold text-white text-lg tracking-tight">
              Yasith<span className="text-blue-400">Systems</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-slate-500">
            <a href="#problems" className="hover:text-slate-300 transition-colors">Problems</a>
            <a href="#solutions" className="hover:text-slate-300 transition-colors">Solutions</a>
            <a href="#demo" className="hover:text-slate-300 transition-colors">Demo</a>
            <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
            <a href="#cta" className="hover:text-slate-300 transition-colors">Contact</a>
          </div>

          {/* Legal */}
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} YasithSystems.com · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
