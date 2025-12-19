import Header from '@/components/Header';
import { ChartBarIcon, DevicePhoneMobileIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Reports & Queries | estie.net',
  description: 'Voice-powered business intelligence for a spotlight installer. From "I have no idea" to instant answers.',
};

export default function ReportsPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-teal-500/20 text-teal-400 text-sm font-medium px-3 py-1 rounded-full">
              Reports & Queries
            </span>
            <span className="text-slate-400 text-sm">Spotlight Installer</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            From &quot;I have no idea&quot; to instant answers.
          </h1>
          <p className="text-xl text-slate-300">
            Voice-powered business intelligence for a tradesman who runs everything from his head.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">The Problem</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed mb-4">
              Yossi installs spotlights across central Jersey — Lakewood, Toms River, Jackson, Howell. He stays busy through word-of-mouth, charging $85 per spot. A typical job is 6-12 spots, so invoices add up quickly.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              When his wife asks &quot;how much did we make this month?&quot; he guesses. When a client calls from an unknown number, he has no idea who it is. When driving to a job, he can&apos;t remember how many spots they wanted or if they paid the deposit.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              He tried keeping a notebook but it lives in his truck and he forgets to update it. His wife offered to track things but she doesn&apos;t know when jobs happen.
            </p>
            <p className="text-slate-700 font-medium">
              The real constraint: Yossi uses a flip phone. Not because he can&apos;t afford a smartphone — he just doesn&apos;t want one. No apps, no typing.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">The Solution</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            A voice-powered query system that lets Yossi get instant answers about his business by making one phone call. He asks naturally — &quot;What&apos;s tomorrow?&quot; or &quot;How much did I make this week?&quot; — and the system speaks the answer. For deeper analysis, there&apos;s a simple web dashboard his wife can check.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-800 mb-3">Voice Queries</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>&quot;What&apos;s tomorrow?&quot;</li>
                <li>&quot;How many spots for the Cohens?&quot;</li>
                <li>&quot;Who owes me money?&quot;</li>
                <li>&quot;How much did I make this month?&quot;</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-800 mb-3">Dashboard for Wife</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Weekly job schedule</li>
                <li>Revenue: collected vs outstanding</li>
                <li>Client list with history</li>
                <li>Stats: spots installed, average job size</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 text-slate-300 p-6 rounded-xl font-mono text-sm">
            <p className="text-slate-400 mb-2"># Example interaction</p>
            <p className="mb-2"><span className="text-teal-400">Yossi:</span> &quot;What&apos;s this week?&quot;</p>
            <p><span className="text-teal-400">System:</span> &quot;This week: 4 jobs, 34 spots total. Monday Cohen 8 spots, Tuesday Goldberg 12 spots, Thursday Klein 6 spots, Friday Marcus 8 spots. Estimated revenue: $2,890.&quot;</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Results</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <ChartBarIcon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-800 mb-1">Instant</p>
              <p className="text-sm text-slate-600">Business visibility</p>
            </div>
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <DevicePhoneMobileIcon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-800 mb-1">Flip phone</p>
              <p className="text-sm text-slate-600">Compatible</p>
            </div>
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <UserGroupIcon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-800 mb-1">2 users</p>
              <p className="text-sm text-slate-600">Him + wife dashboard</p>
            </div>
          </div>

          <div className="border-l-4 border-teal-500 pl-6 py-2">
            <p className="text-slate-700 italic">
              &quot;Built for a tradesman who runs his business out of his head — and whose wife is tired of hearing &apos;I don&apos;t know.&apos;&quot;
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-500 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Have a similar problem?
          </h2>
          <p className="text-teal-100 mb-8">
            Let&apos;s talk about what would work for your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-teal-600 hover:bg-teal-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
