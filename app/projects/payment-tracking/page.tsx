import Header from '@/components/Header';
import { CurrencyDollarIcon, CheckCircleIcon, BellAlertIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Payment Tracking | estie.net',
  description: 'Automated payment tracking for a massage therapist. From "did she pay?" confusion to knowing instantly.',
};

export default function PaymentTrackingPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-teal-500/20 text-teal-400 text-sm font-medium px-3 py-1 rounded-full">
              Payment Tracking
            </span>
            <span className="text-slate-400 text-sm">Massage Therapist</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            From &quot;did she pay?&quot; confusion to knowing instantly.
          </h1>
          <p className="text-xl text-slate-300">
            Automated payment tracking that handles Zelle, cash, checks, and session packages.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">The Problem</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed mb-4">
              Tova runs a thriving massage therapy practice from her home. She sees 15-20 clients weekly, mostly regulars who&apos;ve been coming for months. Her schedule is full, but her payment tracking is chaos.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Some clients pay cash at the session. Some Zelle her later. Some are on packages and she&apos;s lost track of how many sessions they&apos;ve used. Last week she asked a client &quot;Do I owe you a session?&quot; and the client said &quot;I don&apos;t know, you tell me.&quot;
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              She tried a spreadsheet but never remembers to update it. She tried asking clients to remind her but that feels unprofessional.
            </p>
            <p className="text-slate-700 font-medium">
              The real constraint: the end of a massage session is a delicate moment. The client is relaxed, and asking &quot;did you pay?&quot; kills the vibe.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">The Solution</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            A payment tracking system that automatically detects Zelle payments, lets Tova log cash/check with a quick voice call, tracks session packages, and answers &quot;who owes me?&quot; instantly.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-800 mb-3">Voice Commands</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>&quot;Sarah paid ninety cash&quot;</li>
                <li>&quot;What does Michelle owe?&quot;</li>
                <li>&quot;Who owes me money?&quot;</li>
                <li>&quot;How many sessions does Sarah have left?&quot;</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-800 mb-3">Automatic Features</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Auto-detects Zelle payments from email</li>
                <li>Tracks session packages accurately</li>
                <li>Tips tracked separately</li>
                <li>Payment reminders (when approved)</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 text-slate-300 p-6 rounded-xl font-mono text-sm">
            <p className="text-slate-400 mb-2"># Automatic Zelle detection</p>
            <p className="mb-2"><span className="text-teal-400">Email arrives:</span> &quot;Sarah Goldstein sent you $90&quot;</p>
            <p className="mb-2"><span className="text-teal-400">System texts Tova:</span> &quot;Zelle received: Sarah paid $90. Marked as paid.&quot;</p>
            <p className="text-slate-400 italic">No action required.</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Results</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <CurrencyDollarIcon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-800 mb-1">$140/mo</p>
              <p className="text-sm text-slate-600">Recovered revenue</p>
            </div>
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <CheckCircleIcon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-800 mb-1">100%</p>
              <p className="text-sm text-slate-600">Package accuracy</p>
            </div>
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <BellAlertIcon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-800 mb-1">Zero</p>
              <p className="text-sm text-slate-600">Awkward conversations</p>
            </div>
          </div>

          <div className="border-l-4 border-teal-500 pl-6 py-2">
            <p className="text-slate-700 italic">
              &quot;Built for someone who hates the business side — especially asking clients for money.&quot;
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
