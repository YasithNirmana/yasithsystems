"use client";

import { useState } from "react";

export default function DemoVideoSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="demo" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            Live Walkthrough
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            See It In Action
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Watch a full walkthrough of the property automation system — real screens, real workflows, real results.
          </p>
        </div>

        {/* Video placeholder */}
        <div
          className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 aspect-video cursor-pointer group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Fake screenshot background */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Dashboard mock */}
            <div className="w-full h-full p-8 opacity-20">
              <div className="h-full border border-white/20 rounded-xl p-4 space-y-3">
                <div className="flex gap-3">
                  <div className="h-6 w-24 bg-blue-400/40 rounded" />
                  <div className="h-6 w-32 bg-slate-400/20 rounded" />
                  <div className="h-6 w-28 bg-slate-400/20 rounded" />
                </div>
                <div className="grid grid-cols-4 gap-3 pt-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-20 bg-white/5 rounded-lg border border-white/10" />
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-12 bg-white/5 rounded border border-white/10" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900/50 to-slate-950/80" />

          {/* Play button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div
              className={`w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-600/50 transition-all duration-300 ${
                hovered ? "scale-110 shadow-blue-500/60" : ""
              }`}
            >
              <svg
                className="w-8 h-8 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold text-lg">
                Demo Video Coming Soon
              </p>
              <p className="text-slate-400 text-sm mt-1">
                Full walkthrough of the automation system
              </p>
            </div>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-slate-300 text-xs border border-white/10">
            ~12 min walkthrough
          </div>

          {/* Loom badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <span className="text-xs text-slate-300">Recorded with Loom</span>
          </div>
        </div>

        {/* Below video CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://demo.yasithsystems.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-600/20 hover:scale-[1.02]"
          >
            Try the Live Demo →
          </a>
          <a
            href="#cta"
            className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-semibold transition-all duration-200"
          >
            Book a Call Instead
          </a>
        </div>
      </div>
    </section>
  );
}
