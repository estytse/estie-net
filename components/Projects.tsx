import { CalendarIcon, CurrencyDollarIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    icon: CalendarIcon,
    category: 'Job Tracking',
    title: 'From group chats to one phone call',
    description: 'Voice-first appointment management for a wig stylist whose hands are always busy.',
    href: '/projects/job-tracking',
  },
  {
    icon: CurrencyDollarIcon,
    category: 'Payment Tracking',
    title: 'From "did she pay?" to knowing instantly',
    description: 'Automated Zelle detection and package tracking for a massage therapist.',
    href: '/projects/payment-tracking',
  },
  {
    icon: ChartBarIcon,
    category: 'Reports & Queries',
    title: 'From "I have no idea" to instant answers',
    description: 'Voice-powered business intelligence for a tradesman with a flip phone.',
    href: '/projects/reports',
  },
];

export default function Projects() {
  return (
    <section id="examples" className="bg-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-widest text-center mb-3">
          Examples
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          See It In Action
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Each assistant is built around how the person actually works.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-teal-500/50 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <project.icon className="w-7 h-7 text-teal-400 drop-shadow-[0_0_12px_rgba(45,212,191,0.8)] drop-shadow-[0_0_24px_rgba(45,212,191,0.4)]" />
                <span className="text-teal-400 text-sm font-medium">{project.category}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <span className="text-teal-400 text-sm font-medium group-hover:text-teal-300 transition-colors">
                Read more →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
