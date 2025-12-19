export default function Header() {
  return (
    <header className="bg-slate-900 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center text-white font-semibold text-xl tracking-tight">
          estie<span className="text-teal-400">.</span>net
        </a>
        <a
          href="/contact"
          className="text-white hover:text-teal-400 font-medium transition-colors"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
