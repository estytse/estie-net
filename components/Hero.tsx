export default function Hero() {
  return (
    <section
      className="text-white min-h-[50vh] flex items-center px-6 py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "linear-gradient(to bottom right, rgba(15,23,42,0.7), rgba(30,41,59,0.6), rgba(15,23,42,0.7)), url('/backgrounds/hero-bg.png')" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6">
          An AI assistant that knows how you work.
        </h1>
        <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto mb-10">
          For business owners who are great at what they do but drowning in admin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-block bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200"
          >
            Let&apos;s Talk
          </a>
          <a
            href="/#examples"
            className="inline-block border border-white/30 hover:border-white/60 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200"
          >
            View Examples
          </a>
        </div>
      </div>
    </section>
  );
}
