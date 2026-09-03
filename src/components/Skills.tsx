import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-linear-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-14">
          Tools &amp; <span className="text-blue-500">Skills</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {/* TypeScript */}
          <div className="skill-card">
            <svg className="skill-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="18" fill="#3178C6" />
              <path
                d="M22 36h28v7h-10v32h-8V43H22v-7zm33 26c3 3.5 7 5.5 12 5.5 6.5 0 10.5-3.5 10.5-8 0-4.5-3.5-6.5-8.5-8l-3-1c-5-2-7-3.5-7-6 0-3 2.5-4.5 6-4.5 3.5 0 6.5 1.5 8.5 3.5l4-5c-3-2.5-7-4-12.5-4-7.5 0-12 4-12 9.5 0 5 3.5 7.5 8.5 9.5l3 1c5 2 7.5 3 7.5 5.5 0 3-2.5 4.5-6 4.5-4 0-7.5-2-9.5-4.5l-4.5 4.5z"
                fill="#FFF"
              />
            </svg>
            <span className="text-sm font-medium text-gray-200">TypeScript</span>
          </div>

          {/* Node.js */}
          <div className="skill-card">
            <svg className="skill-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="18" fill="#1E293B" />
              <path d="M50 18L78 34V66L50 82L22 66V34L50 18Z" fill="#539E43" />
              <path
                d="M47 38h6v24h-6zM37 45c0-4 3-7 7-7h12c4 0 7 3 7 7v10c0 4-3 7-7 7H44c-4 0-7-3-7-7V45zm6 0v10h14V45H43z"
                fill="#FFF"
              />
            </svg>
            <span className="text-sm font-medium text-gray-200">Node.js</span>
          </div>

          {/* Fastify */}
          <div className="skill-card">
            <svg className="skill-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="18" fill="#0F172A" />
              <path d="M54 16L26 52h18l-6 32 34-40H52l6-28z" fill="#38BDF8" />
            </svg>
            <span className="text-sm font-medium text-gray-200">Fastify</span>
          </div>

          {/* REST API Development */}
          <div className="skill-card">
            <svg className="skill-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="18" fill="#1E293B" />
              <circle cx="50" cy="50" r="30" stroke="#3B82F6" strokeWidth="4" strokeDasharray="6 3" />
              <rect x="25" y="42" width="50" height="16" rx="4" fill="#3B82F6" />
              <text
                x="50"
                y="54"
                fill="#FFF"
                fontFamily="monospace"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
              >
                REST
              </text>
            </svg>
            <span className="text-sm font-medium text-gray-200">REST API Development</span>
          </div>

          {/* React */}
          <div className="skill-card">
            <svg className="skill-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="18" fill="#0F172A" />
              <circle cx="50" cy="50" r="6" fill="#61DAFB" />
              <ellipse cx="50" cy="50" rx="34" ry="13" stroke="#61DAFB" strokeWidth="3" />
              <ellipse
                cx="50"
                cy="50"
                rx="34"
                ry="13"
                stroke="#61DAFB"
                strokeWidth="3"
                transform="rotate(60 50 50)"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="34"
                ry="13"
                stroke="#61DAFB"
                strokeWidth="3"
                transform="rotate(120 50 50)"
              />
            </svg>
            <span className="text-sm font-medium text-gray-200">React</span>
          </div>

          {/* PostgreSQL */}
          <div className="skill-card">
            <svg className="skill-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="18" fill="#1E293B" />
              <path
                d="M50 20c-16 0-28 12-28 28 0 14 9 24 22 27v-8c-2-.6-4-2-4-4 0-3 3-5 7-5s7 2 7 5c0 2-2 3.4-4 4v8c13-3 22-13 22-27 0-16-12-28-28-28z"
                fill="#336791"
              />
              <circle cx="43" cy="40" r="3" fill="#FFF" />
              <circle cx="57" cy="40" r="3" fill="#FFF" />
              <path d="M46 48c2 2 6 2 8 0" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-medium text-gray-200">PostgreSQL</span>
          </div>

          {/* Git */}
          <div className="skill-card">
            <svg className="skill-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="18" fill="#1E293B" />
              <path
                d="M80 47L53 20a5 5 0 0 0-7 0L38 28l9 9a5 5 0 0 1 6 6l8 8a5 5 0 1 1-4 4L59 47v18a5 5 0 1 1-6 0V45a5 5 0 0 1 3-5L48 32 24 56a5 5 0 0 0 0 7l27 27a5 5 0 0 0 7 0l22-22a5 5 0 0 0 0-7z"
                fill="#F05032"
              />
            </svg>
            <span className="text-sm font-medium text-gray-200">Git</span>
          </div>

          {/* GitHub */}
          <div className="skill-card">
            <svg className="skill-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="18" fill="#0F172A" />
              <path
                fill="#FFF"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50 20C33.43 20 20 33.43 20 50c0 13.26 8.6 24.5 20.52 28.46 1.5.28 2.05-.65 2.05-1.44 0-.71-.03-2.6-.04-5.1-8.34 1.81-10.1-4.02-10.1-4.02-1.37-3.47-3.34-4.39-3.34-4.39-2.72-.93.2-.91.2-.91 3.02.21 4.6 3.1 4.6 3.1 2.67 4.58 7.02 3.26 8.73 2.5.27-1.94 1.05-3.26 1.9-4.01-6.66-.76-13.67-3.33-13.67-14.84 0-3.28 1.17-5.96 3.09-8.06-.31-.76-1.34-3.81.29-7.95 0 0 2.52-.81 8.26 3.08 2.4-.67 4.97-1 7.53-1 2.57 0 5.14.33 7.54 1 5.73-3.89 8.25-3.08 8.25-3.08 1.63 4.14.6 7.19.3 7.95 1.93 2.1 3.08 4.78 3.08 8.06 0 11.54-7.02 14.07-13.71 14.81 1.08.93 2.04 2.76 2.04 5.56 0 4.01-.04 7.25-.04 8.24 0 .8.54 1.73 2.06 1.44C71.41 74.49 80 63.25 80 50c0-16.57-13.43-30-30-30z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-200">GitHub</span>
          </div>

          {/* JWT Authentication */}
          <div className="skill-card">
            <svg className="skill-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="18" fill="#1E293B" />
              <path d="M50 20L76 35V65L50 80L24 65V35L50 20Z" fill="#D63AFF" opacity="0.2" />
              <path d="M50 24L72 37V63L50 76L28 63V37L50 24Z" stroke="#D63AFF" strokeWidth="2" />
              <path d="M50 32L64 40V60L50 68L36 60V40L50 32Z" fill="#00B9F1" opacity="0.4" />
              <text
                x="50"
                y="55"
                fill="#FFF"
                fontFamily="sans-serif"
                fontSize="13"
                fontWeight="bold"
                textAnchor="middle"
              >
                JWT
              </text>
            </svg>
            <span className="text-sm font-medium text-gray-200">JWT Authentication</span>
          </div>
        </div>
      </div>
    </section>
  );
}
