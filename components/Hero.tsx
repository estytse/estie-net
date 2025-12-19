export default function Hero() {
  return (
    <section
      className="text-white min-h-[50vh] flex items-center px-6 py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "linear-gradient(to bottom right, rgba(15,23,42,0.7), rgba(30,41,59,0.6), rgba(15,23,42,0.7)), url('/backgrounds/hero-bg.png')" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-8">
          An AI assistant that knows how you work.
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto">
          For business owners who are great at what they do but drowning in admin.
        </p>
      </div>
    </section>
  );
}
