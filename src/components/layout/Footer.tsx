// src/components/layout/Footer.tsx
import React from 'react';
// Remove: import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  // Smooth scroll function using native DOM methods
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="py-12 border-t border-border bg-bg-warm">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Logo */}
          <div className="font-serif text-lg font-normal text-accent">
            Manish<span className="text-primary">.</span>
          </div>
          
          {/* Copyright */}
          <p className="text-sm font-light text-text-light tracking-wide">
            © 2025 Manish Jamarkattel, Kathmandu.
          </p>
          
          {/* Navigation Buttons */}
          <ul className="flex gap-6">
            <li>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-sm text-text-light hover:text-accent transition-colors"
                aria-label="Go to About section"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-sm text-text-light hover:text-accent transition-colors"
                aria-label="Go to Projects section"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-sm text-text-light hover:text-accent transition-colors"
                aria-label="Go to Contact section"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;