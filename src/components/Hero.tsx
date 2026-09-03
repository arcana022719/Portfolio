import React from 'react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 md:pt-0 bg-linear-to-r from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-blue-500">Jake Compendio</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
            Backend AI Engineer &amp; Full Stack Developer
            <span className="text-blue-500"> |</span>
          </h2>
          <p className="text-gray-400 max-w-xl mb-10 leading-relaxed text-base md:text-lg">
            Passionate Backend AI Engineer and Full Stack Developer specializing in building scalable REST
            APIs, relational database architectures, and robust backend services using TypeScript, Node.js,
            Fastify, and PostgreSQL. Currently interning at FlyRank AI.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg shadow-blue-600/20"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-200 hover:text-white transition font-medium border border-gray-800"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-blue-600/20 p-1">
            <div className="w-full h-full rounded-full border-4 border-blue-500 overflow-hidden float-animation hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
              {/* Profile photo */}
              <img
                alt="Jake Compendio"
                className="w-full h-full object-cover"
                src="/assets/IDs.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
