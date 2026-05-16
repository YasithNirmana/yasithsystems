"use client";

const solutions = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.591 2.25M14.25 3.104c.251.023.501.05.75.082M19.5 14.5l-4.091-4.091M5 14.5l4.091-4.091m10.409 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Core",
    title: "AI Tenant Assistant",
    description:
      "An always-on AI that handles tenant queries, maintenance requests, and routine communications 24/7 — responding in seconds, not hours.",
    bullets: [
      "Instant responses to common queries",
      "Escalates complex issues to humans",
      "Works via SMS, email, or web chat",
    ],
    accent: "from-blue-500 to-cyan-400",
    glow: "blue",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
    label: "Workflow",
    title: "Smart Maintenance Workflow",
    description:
      "Automatically triage, assign, and track maintenance requests from submission to resolution — with vendor coordination and tenant updates built in.",
    bullets: [
      "Auto-assign to right vendor",
      "Tenant status notifications",
      "Priority-based queuing",
    ],
    accent: "from-violet-500 to-purple-400",
    glow: "violet",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    label: "Visibility",
    title: "Property Operations Dashboard",
    description:
      "A single command center for your entire portfolio — occupancy, maintenance, rent status, and team activity in one clean view.",
    bullets: [
      "Real-time portfolio overview",
      "Team task management",
      "Cross-property insights",
    ],
    accent: "from-emerald-500 to-teal-400",
    glow: "emerald",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    label: "Automation",
    title: "Automated Notifications",
    description:
      "Rent reminders, lease renewal nudges, inspection alerts, and maintenance updates sent automatically — the right message to the right person at the right time.",
    bullets: [
      "Rent due & overdue reminders",
      "Lease expiry sequences",
      "Inspection scheduling automation",
    ],
    accent: "from-orange-500 to-amber-400",
    glow: "orange",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    label: "Insights",
    title: "Reporting & Analytics",
    description:
      "Automated weekly and monthly reports on occupancy rates, maintenance costs, response times, and team performance — so you lead with data.",
    bullets: [
      "Automated weekly summaries",
      "Maintenance cost tracking",
      "Response time benchmarking",
    ],
    accent: "from-pink-500 to-rose-400",
    glow: "pink",
  },
];

const glowMap: Record<string, string> = {
  blue: "hover:shadow-blue-500/10",
  violet: "hover:shadow-violet-500/10",
  emerald: "hover:shadow-emerald-500/10",
  orange: "hover:shadow-orange-500/10",
  pink: "hover:shadow-pink-500/10",
};

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 bg-[#020817] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            What We Build
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Purpose-Built for Property Operations
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Five tightly integrated systems that eliminate manual work and give your team back time to grow.
          </p>
        </div>

        {/* Cards grid — first 3, then 2 centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {solutions.slice(0, 3).map((sol, i) => (
            <SolutionCard key={i} solution={sol} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {solutions.slice(3).map((sol, i) => (
            <SolutionCard key={i + 3} solution={sol} />
          ))}
        </div>

        {/* CTA nudge */}
        <div className="mt-14 text-center">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-600/20 hover:scale-[1.02]"
          >
            See How It Works For Your Business →
          </a>
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ solution }: { solution: (typeof solutions)[0] }) {
  return (
    <div
      className={`group p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 card-hover hover:shadow-xl ${glowMap[solution.glow]}`}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.accent} p-0.5 mb-5 flex-shrink-0`}
      >
        <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center text-white">
          {solution.icon}
        </div>
      </div>

      {/* Label badge */}
      <span className="inline-block text-xs font-semibold tracking-wider uppercase text-slate-500 mb-2">
        {solution.label}
      </span>

      <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-5">
        {solution.description}
      </p>

      {/* Bullet list */}
      <ul className="space-y-2">
        {solution.bullets.map((b, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
            <svg
              className={`w-4 h-4 flex-shrink-0 bg-gradient-to-br ${solution.accent} rounded-full p-0.5`}
              viewBox="0 0 16 16"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
