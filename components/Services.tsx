import { LightBulbIcon, SparklesIcon, RocketLaunchIcon, LifebuoyIcon } from '@heroicons/react/24/outline';

const offers = [
  {
    icon: LightBulbIcon,
    title: 'Show Me',
    description: 'What could this look like for my business?',
    cta: 'Show Me',
  },
  {
    icon: SparklesIcon,
    title: 'Got an Idea',
    description: "I know what I want. Let's make it happen.",
    cta: "Let's Plan",
  },
  {
    icon: RocketLaunchIcon,
    title: 'Build It',
    description: "I'm ready. Take it from here.",
    cta: 'Hand It Over',
  },
  {
    icon: LifebuoyIcon,
    title: 'Help Me',
    description: 'I have something running and need support.',
    cta: 'Get Support',
  },
];

export default function Services() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-teal-500 uppercase tracking-widest text-center mb-3">
          Ways We Can Work Together
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
          Where Are You?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="rounded-xl p-6 flex flex-col hover:shadow-xl hover:scale-[1.02] transition-all duration-200 border border-slate-200 bg-white"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 mb-4">
                <offer.icon className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{offer.title}</h3>
              <p className="text-slate-600 flex-grow mb-6 leading-relaxed">{offer.description}</p>
              <a
                href="/contact"
                className="block text-center font-semibold py-3 px-4 rounded-lg transition-all duration-200 bg-teal-500 hover:bg-teal-400 text-white"
              >
                {offer.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
