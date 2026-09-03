import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black text-white overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-150 h-50 bg-blue-500/10 blur-[120px]"></div>
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mt-4 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
              I am a{' '}
              <span className="text-white font-semibold">
                Computer Science student at Visayas State University
              </span>{' '}
              and an aspiring{' '}
              <span className="text-blue-400 font-medium">
                Backend AI Engineer &amp; Full Stack Developer
              </span>
              . I specialize in architecting performant server-side systems, secure REST APIs, and
              modern data-driven web applications.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
              My core technical expertise spans{' '}
              <span className="text-blue-400 font-medium">
                TypeScript, Node.js, Fastify, REST API Development, React, PostgreSQL, Git, GitHub,
                and JWT Authentication
              </span>
              . I love solving complex technical challenges with clean, maintainable, and scalable
              code.
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              Currently, I am working as a{' '}
              <span className="text-white font-semibold">
                Backend AI Engineer Intern at FlyRank AI
              </span>
              , focusing on backend AI engineering, integrations, and high-performance server
              architectures.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-gray-900/50 hover:bg-gray-850 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold text-blue-500">FlyRank AI</h3>
              <p className="text-gray-400 mt-2 text-sm">Backend AI Intern</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-900/50 hover:bg-gray-850 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold text-blue-500">VSU</h3>
              <p className="text-gray-400 mt-2 text-sm">BS Computer Science</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-900/50 hover:bg-gray-850 hover:-translate-y-1 transition duration-300">
              <h3 className="text-3xl font-bold text-blue-500">9+</h3>
              <p className="text-gray-400 mt-2 text-sm">Core Technologies</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-900/50 hover:bg-gray-850 hover:-translate-y-1 transition duration-300">
              <h3 className="text-3xl font-bold text-blue-500">100%</h3>
              <p className="text-gray-400 mt-2 text-sm">Dedication &amp; Passion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
