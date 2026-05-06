// src/sections/About.tsx
import React from 'react';
import { personalInfo, skillCategories,  } from '../data/manishData';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <div className="py-24 md:py-32 bg-bg-warm">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Portrait / Abstract Art */}
<div className="relative" ref={headerRef}>
  <div className="relative w-full pb-[120%] overflow-hidden rounded-card border border-border/40">
    <div className="absolute inset-0 bg-[#F5EDE8]/10">

      {/* Abstract SVG background */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 360" fill="none">
        <defs>
          <linearGradient id="bg-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#CAAA98" stopOpacity="0.18"/>
            <stop offset="100%" stopColor="#9A8678" stopOpacity="0.08"/>
          </linearGradient>
        </defs>
        <rect width="300" height="360" fill="url(#bg-grad)"/>
        <path
          d="M0 280 Q40 220 80 240 Q110 250 140 200 Q165 165 190 185 Q220 205 250 175 Q275 155 300 160 L300 360 L0 360 Z"
          fill="rgba(202,170,152,0.22)"
        />
        <circle cx="200" cy="90" r="52" fill="rgba(202,170,152,0.15)" stroke="rgba(202,170,152,0.35)" strokeWidth="0.75"/>
        <circle cx="200" cy="90" r="38" fill="rgba(202,170,152,0.1)" stroke="rgba(202,170,152,0.2)" strokeWidth="0.5"/>
        <ellipse cx="118" cy="108" rx="42" ry="50" fill="rgba(75,64,56,0.09)"/>
        <rect x="96" y="152" width="54" height="96" rx="6" fill="rgba(75,64,56,0.07)"/>
        <line x1="0" y1="270" x2="300" y2="270" stroke="rgba(202,170,152,0.2)" strokeWidth="0.5"/>
        <circle cx="242" cy="310" r="24" fill="rgba(202,170,152,0.12)" stroke="rgba(202,170,152,0.25)" strokeWidth="0.5"/>
        <circle cx="58" cy="42" r="14" fill="rgba(154,134,120,0.1)" stroke="rgba(154,134,120,0.2)" strokeWidth="0.5"/>
      </svg>

    </div>
  </div>

  {/* Offset shadow card */}
  <div className="absolute -bottom-3 -right-3 w-2/5 h-2/5 border border-border rounded-card -z-10 bg-background" />
</div>
          
          {/* About Text */}
          <div>
            <div className={`transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="section-header">
                <p className="section-label">About</p>
                <h2 className="section-title">Building with care,<br /><em>not just code.</em></h2>
              </div>
              <p className="text-text-mid font-light leading-relaxed mb-5">{personalInfo.bio}</p>
              <p className="text-text-mid font-light leading-relaxed mb-5">{personalInfo.additionalInfo}</p>
              
            </div>
            
            <div className={`grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border transition-all duration-700 delay-200 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div><div className="font-serif text-3xl font-light text-accent">BSc CSIT</div><div className="text-xs uppercase tracking-wider text-text-light">Graduate</div></div>
              <div><div className="font-serif text-3xl font-light text-accent">2+</div><div className="text-xs uppercase tracking-wider text-text-light">Major Projects</div></div>
              <div><div className="font-serif text-3xl font-light text-accent">React & Nodejs</div><div className="text-xs uppercase tracking-wider text-text-light">Expertise</div></div>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-24" ref={skillsRef}>
          <div className="section-header mb-8">
            <p className="section-label">Skills & Technologies</p>
            <h2 className="section-title">Tools of the <em>craft.</em></h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => (
              <div key={cat.name} className={`bg-card-bg border border-border rounded-card p-6 transition-all duration-500 hover:border-border/60 hover:shadow-soft hover:-translate-y-0.5 ${skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="font-medium text-accent text-sm mb-4 tracking-wide">{cat.name}</div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-primary/10 border border-primary/25 rounded-full text-xs text-text-mid hover:bg-primary/20 hover:border-primary transition-all">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;