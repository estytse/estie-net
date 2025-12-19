import Header from '@/components/Header';
import { CalendarIcon, CurrencyDollarIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const caseStudies = [
  {
    icon: CalendarIcon,
    title: 'Job Tracking',
    subtitle: 'Wig Stylist',
    problem: 'Appointments scattered across texts, WhatsApp, and her head. Double-bookings, forgotten confirmations, no-shows.',
    solution: 'Voice-first scheduling. Call a number, say "Add Sarah, wash n set, Thursday 2pm" — it\'s on her calendar.',
    result: 'Weekly scheduling time: 2-3 hours → 30 minutes',
    quote: 'Built for a stylist whose hands are in someone\'s hair when clients text to book.',
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Payment Tracking',
    subtitle: 'Massage Therapist',
    problem: '"Did she pay?" confusion. Lost track of session packages. Awkward end-of-appointment payment conversations.',
    solution: 'Auto-detects Zelle payments. Voice logging for cash. Package tracking that actually works.',
    result: '~$140/month recovered in forgotten payments',
    quote: 'Built for someone who hates the business side — especially asking clients for money.',
  },
  {
    icon: ChartBarIcon,
    title: 'Reports & Queries',
    subtitle: 'Spotlight Installer',
    problem: 'Everything in his head. Uses a flip phone. Wife asks "how much this month?" and he has no idea.',
    solution: 'Voice-powered queries. "What\'s tomorrow?" "Who owes me?" Instant answers. Dashboard for his wife.',
    result: 'First time ever having actual business numbers',
    quote: 'Built for a tradesman who runs his business out of his head — and whose wife is tired of "I don\'t know."',
  },
];

export default function ExamplesPage() {
  return (
    <main>
      <Header />
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-teal-500 uppercase tracking-widest text-center mb-3">
            Examples
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">
            Systems I&apos;ve Built
          </h1>
          <p className="text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            Real problems, real solutions. Each system is built around how the person actually works — not how software thinks they should.
          </p>

          <div className="space-y-12">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="bg-gray-50 rounded-2xl p-8 md:p-10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100">
                    <study.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-800">{study.title}</h2>
                    <p className="text-slate-500 text-sm">{study.subtitle}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Problem</p>
                    <p className="text-slate-700 text-sm leading-relaxed">{study.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Solution</p>
                    <p className="text-slate-700 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Result</p>
                    <p className="text-teal-600 font-semibold text-sm">{study.result}</p>
                  </div>
                </div>

                <p className="text-slate-500 text-sm italic border-l-2 border-teal-300 pl-4">
                  {study.quote}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-6">
              Have a similar problem? Let&apos;s talk about what would work for you.
            </p>
            <a
              href="/contact"
              className="inline-block bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
