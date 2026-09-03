import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-linear-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        <div
          style={{
            backgroundColor: '#0c1322',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '32px',
          }}
          className="hover:border-blue-500/40 transition duration-300"
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              marginBottom: '16px',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                Project Management System
              </h3>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontSize: '12px',
                  fontWeight: 500,
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  color: '#60a5fa',
                }}
              >
                August 2026 – Present
              </span>
            </div>
            <a
              href="https://github.com/arcana022719/devproject"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-[18px] py-[10px] bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg no-underline transition-colors duration-200"
            >
              <span>View on GitHub</span>
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <p className="text-gray-300 text-base mb-6 leading-relaxed">
            Developing a full-stack project management application with a REST API backend and PostgreSQL
            database. Implemented JWT authentication, protected API routes, relational database schemas, and
            request validation.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-800 text-blue-400">
              TypeScript
            </span>
            <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-800 text-blue-400">
              Node.js
            </span>
            <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-800 text-blue-400">
              Fastify
            </span>
            <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-800 text-blue-400">
              PostgreSQL
            </span>
            <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-800 text-blue-400">
              JWT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
