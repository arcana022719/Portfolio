import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold mb-16">
          Education &amp; <span className="text-blue-500">Achievements</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-gray-900/40 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-blue-400">
                Bachelor of Science in Computer Science
              </h4>
              <p className="text-gray-200 font-medium text-sm">Visayas State University</p>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                Focusing on software development, algorithms, backend system architectures, data
                structures, and computer science fundamentals.
              </p>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="bg-gray-900/40 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-6">Certifications &amp; Achievements</h3>
            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                <div>
                  <span className="font-semibold text-white">Cisco</span>
                  <span className="text-gray-400"> — Introduction to Data Science</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                <div>
                  <span className="font-semibold text-white">Beyond the Terminal</span>
                  <span className="text-gray-400"> — Web Development &amp; UI/UX Essentials</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                <div>
                  <span className="font-semibold text-white">Trend UCTF</span>
                  <span className="text-blue-400 font-medium"> — 10th Place</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                <div>
                  <span className="font-semibold text-white">QUBIT CTF</span>
                  <span className="text-gray-400"> — Participant</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
