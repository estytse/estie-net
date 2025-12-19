export default function FinalCTA() {
  return (
    <section className="bg-teal-500 text-white py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to get organized?
        </h2>
        <p className="text-xl mb-12 text-teal-100">
          Let&apos;s talk about what would actually help your business.
        </p>
        <a
          href="mailto:hi@estie.net"
          className="inline-block bg-white text-teal-600 hover:bg-teal-50 hover:scale-105 font-bold text-lg px-12 py-4 rounded-lg transition-all duration-200 shadow-lg"
        >
          Let&apos;s Talk
        </a>
        <p className="mt-10 text-teal-100">
          Questions?{' '}
          <a href="mailto:hi@estie.net" className="underline hover:text-white transition-colors">
            hi@estie.net
          </a>
        </p>
      </div>
    </section>
  );
}
