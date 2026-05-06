// src/sections/Contact.tsx
import React, { useState } from 'react';
import { personalInfo } from '../data/manishData';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in your name, email, and message.');
      return;
    }
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setShowSuccess(false), 5000);
  };
  
  return (
    <div className="py-24 md:py-32 bg-background">
      <div className="container-custom">
        <div className={`section-header transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} ref={headerRef}>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's build something<br /><em>meaningful.</em></h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left - Contact Info */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-text-mid text-lg font-light leading-relaxed">
              I'm open to full-time roles, contract work, and internship opportunities. If you have a project that could use thoughtful engineering and care — I'd love to hear about it.
            </p>
            
            <div className="flex flex-col gap-4">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 p-5 bg-card-bg border border-border rounded-sm-card hover:border-primary hover:translate-x-1 transition-all">
                <div className="w-10 h-10 rounded-sm-card bg-primary/15 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="4" width="14" height="10" rx="2" stroke="#9A8678" strokeWidth="1.25"/><path d="M2 6l7 4.5L16 6" stroke="#9A8678" strokeWidth="1.25" strokeLinecap="round"/></svg>
                </div>
                <div><div className="text-[0.6875rem] uppercase tracking-wider text-text-light">Email</div><div className="text-sm text-accent">{personalInfo.email}</div></div>
              </a>
              
              <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-5 bg-card-bg border border-border rounded-sm-card hover:border-primary hover:translate-x-1 transition-all">
                <div className="w-10 h-10 rounded-sm-card bg-primary/15 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 3.31 2.14 6.12 5.1 7.11.37.07.5-.16.5-.36v-1.26c-2.06.45-2.49-1-2.49-1-.34-.86-.83-1.09-.83-1.09-.68-.46.05-.45.05-.45.75.05 1.14.77 1.14.77.67 1.14 1.74.81 2.17.62.07-.48.26-.81.47-.99-1.65-.19-3.38-.82-3.38-3.68 0-.81.29-1.48.77-2-.08-.19-.34-.95.07-1.98 0 0 .63-.2 2.06.77.6-.17 1.24-.25 1.88-.25.64 0 1.28.08 1.88.25 1.43-.97 2.06-.77 2.06-.77.41 1.03.15 1.79.07 1.98.48.52.77 1.19.77 2 0 2.87-1.74 3.49-3.39 3.67.27.23.5.69.5 1.39v2.06c0 .2.13.43.51.36C15.37 15.12 16.5 12.31 16.5 9c0-4.14-3.36-7.5-7.5-7.5z" fill="#9A8678"/></svg>
                </div>
                <div><div className="text-[0.6875rem] uppercase tracking-wider text-text-light">GitHub</div><div className="text-sm text-accent">{personalInfo.github}</div></div>
              </a>
              
              <div className="flex items-center gap-3 p-5 bg-card-bg border border-border rounded-sm-card hover:border-primary hover:translate-x-1 transition-all">
                <div className="w-10 h-10 rounded-sm-card bg-primary/15 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2v4M9 6L6 3M9 6l3-3" stroke="#9A8678" strokeWidth="1.25" strokeLinecap="round"/><rect x="2" y="7" width="14" height="9" rx="2" stroke="#9A8678" strokeWidth="1.25"/><text x="9" y="13" fontSize="8" textAnchor="middle" fill="#9A8678">📞</text></svg>
                </div>
                <div><div className="text-[0.6875rem] uppercase tracking-wider text-text-light">Phone</div><div className="text-sm text-accent">{personalInfo.phone}</div></div>
              </div>
            </div>
          </div>
          
          {/* Right - Form */}
          <form onSubmit={handleSubmit} className={`space-y-5 transition-all duration-700 delay-300 ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} ref={formRef}>
            <div className="space-y-1.5">
              <label className="text-[0.6875rem] uppercase tracking-wider text-text-mid">Name</label>
              <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-3 bg-card-bg border border-border/60 rounded-sm-card text-text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Your name" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[0.6875rem] uppercase tracking-wider text-text-mid">Email</label>
              <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-3 bg-card-bg border border-border/60 rounded-sm-card text-text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="your@email.com" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[0.6875rem] uppercase tracking-wider text-text-mid">Subject</label>
              <input type="text" id="subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full p-3 bg-card-bg border border-border/60 rounded-sm-card text-text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="What are you building?" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[0.6875rem] uppercase tracking-wider text-text-mid">Message</label>
              <textarea id="message" rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full p-3 bg-card-bg border border-border/60 rounded-sm-card text-text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder="Tell me about your project or opportunity..."></textarea>
            </div>
            <button type="submit" className="btn-primary">Send message <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            {showSuccess && <div className="text-green-600 bg-green-50 border border-green-200 rounded-md p-3 text-sm">✓ Message sent — I'll be in touch within 24 hours.</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;