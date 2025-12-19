import { KeyIcon, BanknotesIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const differentiators = [
  {
    icon: KeyIcon,
    title: 'You own it.',
    description:
      'Set up on your accounts. Your phone number, your calendar, your payment tracking. I just connect the pieces and hand you the keys.',
  },
  {
    icon: BanknotesIcon,
    title: 'No monthly fees.',
    description:
      "One-time setup. You pay for the services you use — that's it. No ongoing payments to me unless you want support.",
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: 'Fits your workflow.',
    description:
      'Voice, text, email — whatever you actually use. No apps to learn. No passwords to remember.',
  },
];

export default function WhyDifferent() {
  return (
    <section className="bg-slate-800 text-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-widest text-center mb-3">
          Why This Works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          The Handoff Guarantee
        </h2>
        <div className="space-y-12">
          {differentiators.map((item) => (
            <div key={item.title} className="flex gap-6 items-start">
              <item.icon className="w-8 h-8 text-teal-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
