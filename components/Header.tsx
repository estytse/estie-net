export default function Header() {
  return (
    <header className="bg-slate-900 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center text-white font-semibold text-xl tracking-tight">
          estie<span className="text-teal-400">.</span>net
        </a>
        <nav className="flex items-center gap-8">
          <a
            href="/"
            className="text-slate-300 hover:text-white font-medium transition-colors"
          >
            Home
          </a>
          <a
            href="/#services"
            className="text-slate-300 hover:text-white font-medium transition-colors"
          >
            Services
          </a>
          <a
            href="/#why"
            className="text-slate-300 hover:text-white font-medium transition-colors"
          >
            Why This Works
          </a>
          <a
            href="/examples"
            className="text-slate-300 hover:text-white font-medium transition-colors"
          >
            Examples
          </a>
          <a
            href="/contact"
            className="text-teal-400 hover:text-teal-300 font-medium transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
