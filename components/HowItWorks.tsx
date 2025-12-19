import { CalendarIcon, CurrencyDollarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    icon: CalendarIcon,
    title: 'BOOK APPOINTMENTS',
    description:
      'Client reaches out. You log it however works for you — quick voice note, text, or email. "Sarah, wig install, Saturday 10am." It\'s on your calendar.',
  },
  {
    icon: CurrencyDollarIcon,
    title: 'GET PAID',
    description:
      'Appointment done? Log it: "Done with Marcus, two hundred." System sends the invoice. When they pay, you get notified automatically.',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'KNOW YOUR NUMBERS',
    description:
      'Ask anytime: "Who owes me money?" "What\'s tomorrow?" Get answers instantly. No spreadsheets. No digging through messages.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-50 mb-6">
                <step.icon className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 tracking-wide mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
