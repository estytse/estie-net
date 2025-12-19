export default function FinalCTA() {
  return (
    <section
      className="text-white py-24 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "linear-gradient(to bottom, rgba(20,184,166,0.85), rgba(20,184,166,0.8)), url('/backgrounds/cta-bg.png')" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to get organized?
        </h2>
        <p className="text-xl mb-12 text-teal-100">
          Let&apos;s talk about what will actually help your business.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-teal-600 hover:bg-teal-50 hover:scale-105 font-bold text-lg px-12 py-4 rounded-lg transition-all duration-200 shadow-lg"
        >
          Let&apos;s Talk
        </a>
      </div>
    </section>
  );
}
