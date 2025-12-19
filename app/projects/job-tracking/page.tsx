import Header from '@/components/Header';
import { CalendarIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Job Tracking & Scheduling | estie.net',
  description: 'Voice-first appointment management for a wig stylist. From scattered texts to one phone call.',
};

export default function JobTrackingPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-teal-500/20 text-teal-400 text-sm font-medium px-3 py-1 rounded-full">
              Job Tracking
            </span>
            <span className="text-slate-400 text-sm">Wig Stylist</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            From group chats and mental notes to one phone call.
          </h1>
          <p className="text-xl text-slate-300">
            Voice-first appointment management for a solo stylist whose hands are always busy.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">The Problem</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed mb-4">
              Shana runs her wig styling business from her home. She sees 12-18 clients per week, mostly regulars who text to book. Word-of-mouth referrals mean new clients pop up constantly.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Her &quot;booking system&quot; was a mix of WhatsApp threads, text messages, and mental notes. She double-booked twice in one month. Last week she forgot to confirm with a client who then didn&apos;t show up — that&apos;s an hour of income gone.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              She tried Calendly but her clients don&apos;t click links — they just text &quot;can I come Tuesday?&quot; She tried writing everything in a planner but she&apos;s always mid-cut when clients text and forgets to transfer it.
            </p>
            <p className="text-slate-700 font-medium">
              The real constraint: her hands are literally in someone&apos;s hair when clients text to book. She can&apos;t type. She can&apos;t check a dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">The Solution</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            A voice-first scheduling system that lets Shana manage her entire appointment book by calling one number. She speaks naturally — &quot;Add Sarah for a wash n set, Thursday 2pm&quot; — and the system handles the rest.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-800 mb-3">Voice Commands</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>&quot;Add Rachel, wig cut, Tuesday 10am&quot;</li>
                <li>&quot;What&apos;s tomorrow?&quot;</li>
                <li>&quot;Move Sarah to Wednesday&quot;</li>
                <li>&quot;What&apos;s Sarah&apos;s number?&quot;</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-semibold text-slate-800 mb-3">Automatic Features</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Syncs to Google Calendar</li>
                <li>Text reminders night before</li>
                <li>Client confirmation texts (when approved)</li>
                <li>No-show tracking</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 text-slate-300 p-6 rounded-xl font-mono text-sm">
            <p className="text-slate-400 mb-2"># Example interaction</p>
            <p className="mb-2"><span className="text-teal-400">Shana:</span> &quot;Add Rachel for a wash n set, Thursday 2pm&quot;</p>
            <p><span className="text-teal-400">System:</span> &quot;Got it — Rachel, wash n set, Thursday 2pm. Added to your calendar.&quot;</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Results</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <ClockIcon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-800 mb-1">2-3 hrs</p>
              <p className="text-sm text-slate-600">Weekly time saved</p>
            </div>
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <CheckCircleIcon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-800 mb-1">Zero</p>
              <p className="text-sm text-slate-600">Double-bookings</p>
            </div>
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <CalendarIcon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-800 mb-1">30 sec</p>
              <p className="text-sm text-slate-600">To check schedule</p>
            </div>
          </div>

          <div className="border-l-4 border-teal-500 pl-6 py-2">
            <p className="text-slate-700 italic">
              &quot;Built for a stylist whose hands are in someone&apos;s hair when clients text to book.&quot;
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
