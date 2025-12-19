export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left column - About + Social */}
          <div>
            <a href="/" className="inline-block text-xl font-semibold tracking-tight mb-4">
              estie<span className="text-teal-400">.</span>net
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              AI assistants for business owners who are great at what they do but drowning in admin. Custom to you. You own everything.
            </p>
            <a
              href="https://linkedin.com/in/YOUR-PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Right column - Sitemap */}
          <div className="md:text-right">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Sitemap
            </p>
            <nav className="flex flex-col gap-2 md:items-end">
              <a href="/" className="text-slate-300 hover:text-white text-sm transition-colors">
                Home
              </a>
              <a href="/#how-we-work" className="text-slate-300 hover:text-white text-sm transition-colors">
                How We Work
              </a>
              <a href="/#examples" className="text-slate-300 hover:text-white text-sm transition-colors">
                Examples
              </a>
              <a href="/contact" className="text-slate-300 hover:text-white text-sm transition-colors">
                Contact
              </a>
              <a href="/privacy" className="text-slate-300 hover:text-white text-sm transition-colors">
                Privacy
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row md:justify-between gap-2">
          <p className="text-slate-500 text-sm">
            © 2025 estie.net
          </p>
          <p className="text-slate-500 text-sm">
            Lakewood, NJ
          </p>
        </div>
      </div>
    </footer>
  );
}
