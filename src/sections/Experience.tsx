// src/pages/Experience.tsx
import React from 'react';
import { experiences, education } from '../data/manishData';
import { useInView } from 'react-intersection-observer';

const Experience: React.FC = () => {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <div className="py-24 md:py-32 bg-bg-warm">
      <div className="container-custom">
        <div className={`section-header transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} ref={headerRef}>
          <p className="section-label">Experience & Education</p>
          <h2 className="section-title">Where I've <em>learned & built.</em></h2>
        </div>
        
        {/* Timeline */}
        <div className="relative pl-8 md:pl-10 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-linear-to-b before:from-primary before:to-transparent">
          {experiences.map((exp, idx) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
            return (
              <div key={exp.id} ref={ref} className={`relative pb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="absolute left-[-2.65rem] top-1.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-bg-warm shadow-[0_0_0_2px_#CAAA98]"></div>
                <div className="font-mono text-[0.6875rem] tracking-wide text-text-light uppercase mb-2">{exp.period}</div>
                <div className="font-serif text-xl md:text-2xl font-normal text-accent mb-1">{exp.role}</div>
                <div className="text-sm font-normal text-secondary mb-4">{exp.company}</div>
                <div className="flex flex-col gap-2 mt-3">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm font-light text-text-mid leading-relaxed">
                      <span className="text-primary">—</span>
                      {ach}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Education */}
        <div className="mt-16">
          <div className="section-label mb-6">Education</div>
          <h2 className="section-title text-2xl md:text-3xl mb-8">Academic <em>background.</em></h2>
          
          <div className="relative pl-8 md:pl-10 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-linear-to-b before:from-primary before:to-transparent">
            <div className="relative pb-10">
              <div className="absolute left-[-2.65rem] top-1.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-bg-warm shadow-[0_0_0_2px_#CAAA98]"></div>
              <div className="font-mono text-[0.6875rem] tracking-wide text-text-light uppercase mb-2">2021 — 2024</div>
              <div className="font-serif text-xl font-normal text-accent mb-1">{education.degree}</div>
              <div className="text-sm text-secondary">{education.institution}</div>
            </div>
            <div className="relative">
              <div className="absolute left-[-2.65rem] top-1.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-bg-warm shadow-[0_0_0_2px_#CAAA98]"></div>
              <div className="font-mono text-[0.6875rem] tracking-wide text-text-light uppercase mb-2">2019 — 2021</div>
              <div className="font-serif text-xl font-normal text-accent mb-1">+2 Science</div>
              <div className="text-sm text-secondary">{education.plusTwo}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;