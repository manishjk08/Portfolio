// src/sections/Projects.tsx
import React from 'react';
import { projects } from '../data/manishData';
import { useInView } from 'react-intersection-observer';

const Projects: React.FC = () => {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <div className="py-24 md:py-32 bg-background">
      <div className="container-custom">
        <div className={`section-header transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} ref={headerRef}>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I've <em>built.</em></h2>
        </div>
        
        <div className="flex flex-col gap-8">
          {projects.map((project, idx) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
            return (
              <div key={project.id} ref={ref} className={`grid md:grid-cols-[0.8fr_1.618fr] bg-card-bg border border-border rounded-card overflow-hidden transition-all duration-700 hover:border-primary/40 hover:shadow-soft hover:-translate-y-0.5 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="relative bg-linear-to-br from-primary/20 to-secondary/15 flex items-center justify-center p-8 min-h-55">
                  <span className="absolute top-4 left-5 font-mono text-[0.6875rem] tracking-wide text-text-light">0{project.id}</span>
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <rect x="8" y="20" width="64" height="44" rx="6" stroke="#CAAA98" strokeWidth="1.5"/>
                    <path d="M20 36h40M20 44h28M20 52h20" stroke="#CAAA98" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="60" cy="28" r="8" fill="rgba(202,170,152,0.2)" stroke="#9A8678" strokeWidth="1.25"/>
                    <path d="M57 28l2 2 4-4" stroke="#9A8678" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => <span key={tag} className="font-mono text-[0.625rem] tracking-wide uppercase px-2 py-1 bg-accent/5 rounded-full text-text-mid">{tag}</span>)}
                    </div>
                    <h3 className="font-serif text-2xl font-normal text-accent mb-3">{project.title}</h3>
                    <p className="text-text-mid text-sm font-light leading-relaxed mb-6">{project.description}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-accent transition-colors">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.5c-3.03 0-5.5 2.47-5.5 5.5 0 2.43 1.57 4.49 3.75 5.22.27.05.37-.12.37-.26v-.92c-1.52.33-1.84-.74-1.84-.74-.25-.63-.61-.8-.61-.8-.5-.34.04-.33.04-.33.55.04.84.57.84.57.49.84 1.28.6 1.59.46.05-.36.19-.6.35-.73-1.21-.14-2.49-.61-2.49-2.71 0-.6.21-1.09.57-1.47-.06-.14-.25-.7.05-1.46 0 0 .47-.15 1.52.57.44-.12.91-.18 1.38-.18.47 0 .94.06 1.38.18 1.05-.72 1.52-.57 1.52-.57.3.76.11 1.32.05 1.46.36.38.57.87.57 1.47 0 2.11-1.28 2.57-2.5 2.71.2.17.37.51.37 1.03v1.52c0 .14.1.31.38.26C10.94 11.49 12.5 9.43 12.5 7c0-3.03-2.47-5.5-5.5-5.5z" fill="currentColor"/></svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;