'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const endpoint =
        'https://script.google.com/macros/s/AKfycbzhLkv21yzdvPmSx1Pet-4jZKhKEnsk5WLmGYBKPd45NJL0iwNqbFejWrNh0CJThCL9fA/exec';
      await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(formData),
        mode: 'no-cors',
      });

      setStatusMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatusMessage('Thanks for your message!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-linear-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-3xl mx-auto px-6" style={{ maxWidth: '780px' }}>
        <div className="flex items-center gap-6 mb-16">
          <span className="flex-1 h-px bg-blue-500/60"></span>
          <h2 className="text-4xl font-bold whitespace-nowrap">
            Contact <span className="text-blue-500">Me</span>
          </h2>
          <span className="flex-1 h-px bg-blue-500/60"></span>
        </div>

        {/* Top Info Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 items-start">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Let's Work Together</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Feel free to reach out if you have a project in mind, want to collaborate, or just
              want to say hello.
            </p>
          </div>
          <div className="space-y-2 md:pl-6 text-sm">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span className="text-gray-300 font-medium">Email:</span>
              <a href="mailto:jakecompendio02271@gmail.com" className="text-blue-500 hover:underline">
                jakecompendio02271@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>💼</span>
              <span className="text-gray-300 font-medium">Linkedin:</span>
              <a
                href="https://www.linkedin.com/in/jakecompendio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Jake Compendio
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>💻</span>
              <span className="text-gray-300 font-medium">GitHub:</span>
              <a
                href="https://github.com/arcana022719"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                github.com/arcana022719
              </a>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div
          style={{
            backgroundColor: '#0c1322',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '32px',
          }}
        >
          <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-2 text-sm font-semibold text-white">Name</label>
              <input
                placeholder="Your name"
                style={{
                  width: '100%',
                  height: '48px',
                  padding: '0 16px',
                  backgroundColor: '#060a12',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none',
                }}
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-white">Email</label>
              <input
                placeholder="Your email"
                style={{
                  width: '100%',
                  height: '48px',
                  padding: '0 16px',
                  backgroundColor: '#060a12',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none',
                }}
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-white">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Your message"
                style={{
                  width: '100%',
                  minHeight: '120px',
                  padding: '14px 16px',
                  backgroundColor: '#060a12',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none',
                  resize: 'vertical',
                }}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              id="submit-btn"
              disabled={isSubmitting}
              className="w-full h-[80px] flex items-center justify-center bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-[15px] font-semibold rounded-lg border-0 cursor-pointer transition-colors duration-200"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {statusMessage && (
              <p
                id="form-status"
                className="text-center text-sm font-medium mt-2 text-green-400 block"
              >
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
