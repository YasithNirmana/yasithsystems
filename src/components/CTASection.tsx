"use client";

// Replace CALENDLY_URL with your actual Calendly booking link
const CALENDLY_URL = "https://calendly.com/yasithsystems/property-automation-consultation";

const steps = [
  {
    number: "01",
    title: "Book a 30-min Audit Call",
    description: "Free, no-obligation. We look at your current operations and identify the highest-leverage automation opportunities.",
  },
  {
    number: "02",
    title: "Get a Custom Automation Plan",
    description: "You receive a tailored roadmap showing exactly which processes to automate, in what order, and what outcomes to expect.",
  },
  {
    number: "03",
    title: "We Build & Deploy It",
    description: "If we move forward, we handle the full build — integrations, testing, onboarding your team, and ongoing support.",
  },
];

export default function CTASection() {
  return (
    <section id="cta" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book a Free Property{" "}
            <span className="gradient-text">Automation Consultation</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            30 minutes. No pitch, no pressure. Just an honest look at where automation can make a real difference for your business.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
            >
              {/* Connector line */}
              {i < 2 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent -translate-y-0.5 z-10" />
              )}
              <span className="text-5xl font-black text-white/5 mb-4 block leading-none">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Main CTA card */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to automate your property operations?
            </h3>
            <p className="text-slate-400 mb-8">
              Pick a time that works for you. The call is free, and you&apos;ll leave with clarity — whether we work together or not.
            </p>

            {/* Calendly button */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all duration-200 shadow-2xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:scale-[1.02]"
            >
              {/* Calendar icon */}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              Schedule via Calendly
            </a>

            {/* Reassurances */}
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-slate-500 text-xs">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                100% free
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                No commitment required
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                30 minutes, focused & practical
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
