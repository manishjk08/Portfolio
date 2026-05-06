// src/sections/Home.tsx
import React from 'react';
import { personalInfo } from '../data/manishData';
import { useInView } from 'react-intersection-observer';

const Home: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen flex items-center pt-16 relative overflow-hidden" ref={heroRef}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-70" />
      </div>

      <div className="container-custom relative z-10">
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-xs text-text-mid mb-6 transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow"></span>
          Open for opportunities
        </div>

        <p className={`font-mono text-xs tracking-[0.18em] text-secondary uppercase mb-6 flex items-center gap-3 transition-all duration-700 delay-100 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="w-8 h-px bg-primary"></span>
          Full-Stack Developer · Kathmandu, Nepal
        </p>

        <h1 className={`font-serif text-5xl md:text-7xl lg:text-8xl font-light text-accent leading-[1] mb-7 transition-all duration-700 delay-200 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          Manish<br /><span className="italic text-secondary">Jamarkattel.</span>
        </h1>

        <p className={`text-text-mid max-w-md text-lg font-light leading-relaxed mb-12 transition-all duration-700 delay-300 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {personalInfo.bio.substring(0, 140)}...
        </p>

        <div className={`flex gap-4 flex-wrap transition-all duration-700 delay-400 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <button onClick={scrollToProjects} className="btn-primary">
            View my work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={scrollToContact} className="btn-secondary">Get in touch</button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-light">
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-[scrollPulse_2s_ease-in-out_infinite]"></div>
      </div>
    </div>
  );
};

export default Home;