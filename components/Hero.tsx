export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-[80vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-8">
          Your appointments, payments, and clients — finally organized.
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 font-light mb-12 max-w-2xl mx-auto">
          No apps to learn. No software to manage. Just a system that fits how you already work.
        </p>
        <a
          href="#how-it-works"
          className="inline-block bg-teal-500 hover:bg-teal-400 hover:scale-105 text-white font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          See How It Works
        </a>
      </div>
    </section>
  );
}
