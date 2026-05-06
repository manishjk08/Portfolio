// src/components/layout/Navbar.tsx
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  scrollToSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100; // offset for navbar
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-5 md:px-8 h-16 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-background/85 backdrop-blur-md border-b border-border/40 shadow-sm-soft' : 'bg-background/85 backdrop-blur-md border-b border-border/40'}`}>
      <button 
        onClick={() => scrollToSection('home')} 
        className="font-serif text-xl font-medium text-accent tracking-wide cursor-pointer"
      >
        Manish<span className="text-primary">.</span>
      </button>
      
      <ul className="hidden md:flex gap-8">
        {navLinks.map(link => (
          <li key={link.id}>
            <button
              onClick={() => scrollToSection(link.id)}
              className={`text-xs uppercase tracking-wider transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full ${
                activeSection === link.id ? 'text-accent after:w-full' : 'text-text-mid hover:text-accent'
              }`}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
      
      <button className="md:hidden text-accent" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </button>
      
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-card-bg border-b border-border shadow-md p-4 flex flex-col gap-3 md:hidden">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setMobileMenuOpen(false);
              }}
              className="text-left text-sm uppercase tracking-wider text-text-mid hover:text-accent"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;