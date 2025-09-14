import { useState, useEffect, useRef } from 'react';
import './index.css';

import CodeAnimation from './CodeAnimation';

function App() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const easedMouseX = useRef(0);
  const easedMouseY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      easedMouseX.current += (mouseX - easedMouseX.current) * 0.05;
      easedMouseY.current += (mouseY - easedMouseY.current) * 0.05;

      document.body.style.setProperty('--mouseX', `${easedMouseX.current}px`);
      document.body.style.setProperty('--mouseY', `${easedMouseY.current}px`);

      requestAnimationFrame(animate);
    };

    const animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="py-4 px-4 md:py-6 md:px-8 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">tripplemode</h1>
        <button className="bg-gradient-to-r from-red-500 to-orange-500 text-black font-bold py-2 px-4 md:px-6 rounded-md hover:scale-105 transition-transform font-mono text-sm md:text-base">
          Contact
        </button>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center text-center px-4 relative">
        <div className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2">
          <CodeAnimation />
        </div>
        <div className="z-10">
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter">tripplemode</h2>
          <p className="text-xl md:text-2xl mt-4 text-gray-400">Front-end Developer</p>
          <div className="mt-8 flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-500 to-orange-500 text-black font-bold py-3 px-6 md:px-8 rounded-md hover:scale-105 transition-transform font-mono text-sm md:text-base">
              Start
            </button>
            <button className="border border-white text-white font-bold py-3 px-6 md:px-8 rounded-md hover:bg-white hover:text-black transition-colors font-mono text-sm md:text-base">
              Contact
            </button>
          </div>
        </div>
        <div className="hidden md:block absolute right-10 top-1/3 -translate-y-1/2">
          <CodeAnimation />
        </div>
      </main>

      {/* Skills Section */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Technologies</h3>
        <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
          <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-gray-500/20 p-6 md:p-8 rounded-lg text-center text-base md:text-lg w-32 md:w-40 flex flex-col items-center">
            <svg className="w-10 h-10 md:w-12 md:h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            HTML
          </div>
          <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-gray-500/20 p-6 md:p-8 rounded-lg text-center text-base md:text-lg w-32 md:w-40 flex flex-col items-center">
            <svg className="w-10 h-10 md:w-12 md:h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            CSS
          </div>
          <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-gray-500/20 p-6 md:p-8 rounded-lg text-center text-base md:text-lg w-32 md:w-40 flex flex-col items-center">
            <svg className="w-10 h-10 md:w-12 md:h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            JavaScript
          </div>
          <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-gray-500/20 p-6 md:p-8 rounded-lg text-center text-base md:text-lg w-32 md:w-40 flex flex-col items-center">
            <svg className="w-10 h-10 md:w-12 md:h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            React
          </div>
          <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-gray-500/20 p-6 md:p-8 rounded-lg text-center text-base md:text-lg w-32 md:w-40 flex flex-col items-center">
            <svg className="w-10 h-10 md:w-12 md:h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            Vite
          </div>
          <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-gray-500/20 p-6 md:p-8 rounded-lg text-center text-base md:text-lg w-32 md:w-40 flex flex-col items-center">
            <svg className="w-10 h-10 md:w-12 md:h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            TailwindCSS
          </div>
          <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-gray-500/20 p-6 md:p-8 rounded-lg text-center text-base md:text-lg w-32 md:w-40 flex flex-col items-center">
            <svg className="w-10 h-10 md:w-12 md:h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            TypeScript
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500">
        <p>&copy; 2025 tripplemode. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;