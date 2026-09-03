import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-linear-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold mb-16">
          My <span className="text-blue-500">Experience</span>
        </h2>
        <div className="relative border-l border-gray-700 pl-10 space-y-14">
          <div className="relative">
            <span
              className="absolute -left-13 top-1 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-blue-500/20"
              style={{ left: '-2.85rem' }}
            ></span>
            <span className="inline-block mb-2 px-3 py-1 text-sm rounded-md bg-blue-500/10 text-blue-400">
              September 2026 – Present
            </span>
            <h3 className="text-xl font-semibold text-white">Backend AI Engineer - Intern</h3>
            <p className="text-gray-400 mb-3">FlyRank AI (Remote)</p>
            <p className="text-gray-300 leading-relaxed">
              Currently interning at FlyRank AI as an AI intern, focusing on Backend AI Engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
