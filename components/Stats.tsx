import { stats } from '@/data/portfolio';

export default function Stats() {
  const statItems = [
    {
      value: stats.experienceYears ?? '—',
      label: 'Years Experience',
    },
    {
      value: stats.projects ?? '—',
      label: 'Projects Completed',
    },
    {
      value: stats.certifications ?? '—',
      label: 'Certifications',
    },
  ];

  return (
    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {statItems.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-xl p-6 text-center transition hover:-translate-y-1 hover:shadow-xl"
        >
          <dt className="sr-only">{stat.label}</dt>

          <dd className="text-4xl sm:text-5xl font-bold text-emerald-400 leading-none mb-2">
            {stat.value}
          </dd>

          <dd className="text-sm text-slate-400 uppercase tracking-wide font-medium">
            {stat.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
