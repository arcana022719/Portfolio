import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black py-10" style={{ border: 'none' }}>
      <div
        className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500"
        style={{ maxWidth: '780px' }}
      >
        <div className="text-center md:text-left">
          <p>
            &copy; 2026 <span className="text-gray-300 font-semibold">Jake Compendio</span>. All
            rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:jakecompendio02271@gmail.com" className="hover:text-blue-500 transition">
            Email
          </a>
          <a
            href="https://linkedin.com/jakecompendio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/arcana022719"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
