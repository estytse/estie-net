import { MagnifyingGlassIcon, WrenchScrewdriverIcon, LifebuoyIcon } from '@heroicons/react/24/outline';

const stages = [
  {
    icon: MagnifyingGlassIcon,
    title: 'Explore',
    what: 'We map how you actually work: your tools, your habits, your pain points.',
    why: 'Custom to you.',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Build',
    what: 'We set it up on your accounts and under your control.',
    why: 'You own everything.',
  },
  {
    icon: LifebuoyIcon,
    title: 'Support',
    what: 'You call when something breaks or when you want changes.',
    why: 'On your terms.',
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-teal-500 uppercase tracking-widest text-center mb-12">
          How We Work
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stages.map((stage) => (
            <div
              key={stage.title}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 mb-6">
                <stage.icon className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{stage.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{stage.what}</p>
              <p className="text-teal-600 font-medium text-sm">{stage.why}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="inline-block bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
}
