"use client";

const credentials = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    label: "DHL — Global Operations",
    detail: "Led operational process improvements across international logistics networks — managing scale, complexity, and time-sensitive workflows.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    label: "Software Engineering Background",
    detail: "Built and shipped production systems from the ground up — full-stack development, APIs, automation tooling, and AI integrations.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    label: "MBA — Business Strategy",
    detail: "Deep understanding of how businesses scale, where efficiency leaks occur, and how to design operational systems that last.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    label: "Operational Systems Expertise",
    detail: "Specialised in designing systems that eliminate manual bottlenecks — from SOPs to automated pipelines — across industries.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#020817] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
              Who Builds This
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Built by Someone Who&apos;s Been in{" "}
              <span className="gradient-text">Operations</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              I&apos;m Yasith — a software engineer and operations specialist with a background in global logistics at DHL and an MBA. I know what it feels like when processes break down at scale.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              I didn&apos;t build these systems to sell software. I built them because I saw property managers drowning in work that should be automated — and I knew exactly how to fix it.
            </p>

            {/* Honest note */}
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  <strong className="text-white">Straight talk:</strong> I only take on clients where I genuinely believe automation will make a measurable difference. If it&apos;s not the right fit after our audit call, I&apos;ll tell you — no pressure, no sales pitch.
                </p>
              </div>
            </div>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold transition-all duration-200"
            >
              Let&apos;s have an honest conversation →
            </a>
          </div>

          {/* Right — credentials */}
          <div className="space-y-4">
            {credentials.map((cred, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-200 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                  {cred.icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{cred.label}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{cred.detail}</p>
                </div>
              </div>
            ))}

            {/* Quote */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 mt-6">
              <p className="text-slate-300 text-sm italic leading-relaxed">
                &ldquo;Every hour your team spends on repetitive admin is an hour not spent on tenant relationships, deals, and growth. Automation shouldn&apos;t be a luxury — it should be table stakes.&rdquo;
              </p>
              <p className="text-blue-400 text-xs font-semibold mt-3">— Yasith</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
