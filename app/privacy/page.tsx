import Header from '@/components/Header';

export default function PrivacyPage() {
  return (
    <main>
      <Header />
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-8">Privacy Policy</h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-6">
              Last updated: December 2024
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">What I Collect</h2>
            <p className="text-slate-600 mb-4">
              When you use the contact form, I collect:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your message</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">How I Use It</h2>
            <p className="text-slate-600 mb-6">
              I use your information only to respond to your inquiry. I don&apos;t sell, share, or use your data for marketing unless you ask me to.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Cookies</h2>
            <p className="text-slate-600 mb-6">
              This site uses minimal cookies for basic functionality. No tracking or advertising cookies.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Third Parties</h2>
            <p className="text-slate-600 mb-4">
              This site uses the following services:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
              <li><strong>Vercel</strong> — website hosting</li>
              <li><strong>Formspree</strong> — contact form processing</li>
            </ul>
            <p className="text-slate-600 mb-6">
              These services have their own privacy policies governing how they handle data.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Data Retention</h2>
            <p className="text-slate-600 mb-6">
              I keep contact form submissions only as long as needed to respond to your inquiry. If we don&apos;t end up working together, I delete your information.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Your Rights</h2>
            <p className="text-slate-600 mb-6">
              You can request to see, update, or delete any personal data I have about you.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Contact</h2>
            <p className="text-slate-600">
              Questions?{' '}
              <a href="/contact" className="text-teal-600 hover:text-teal-500">
                Get in touch
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
