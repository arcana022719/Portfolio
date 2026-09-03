import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jake Compendio | Backend AI Engineer & Full Stack Developer',
  description:
    'Passionate Backend AI Engineer and Full Stack Developer specializing in building scalable REST APIs, relational database architectures, and robust backend services using TypeScript, Node.js, Fastify, and PostgreSQL.',
  icons: {
    icon: '/vite.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-black text-white font-sans antialiased selection:bg-blue-500 selection:text-white`}
      >
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
