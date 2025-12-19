export default function About() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">
          About
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
          Why I Built This
        </h2>
        <div className="text-lg text-slate-700 leading-relaxed space-y-4 text-left">
          <p>
            I watched service providers drown in texts, missed payments, and &quot;I thought my appointment was Tuesday&quot; disasters.
          </p>
          <p>
            I used to work in ops. Big companies get custom systems built for them. Stylists, therapists, and tradespeople get apps that don&apos;t fit how they actually work.
          </p>
          <p>
            So I build systems that fit your workflow — not the other way around. You own everything.
          </p>
          <p className="font-semibold text-slate-800">
            I built the first version for a contractor who hates apps and just wants things to work. If it works for him, it&apos;ll work for you.
          </p>
        </div>
      </div>
    </section>
  );
}
