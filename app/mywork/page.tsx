"use client";

import React from 'react';
import Link from 'next/link';
import { Instagram, Mail, PhoneCall, ArrowRight } from 'lucide-react';

const projects = [
  { id: 1, title: "Institutional", category: "2024 Collection", image: "/homepage.png" },
  { id: 2, title: "Case Studies", category: "Series 01", image: "/animal.png" },
  { id: 3, title: "Creative Labs", category: "Editorial", image: "/sketchbook.png" },
  { id: 4, title: "Systems", category: "Campaign", image: "/code.png" },
];

const colors = {
  primary: '#4A3728',
  secondary: '#8B735B',
  accent: '#A68966',
  uiElement: '#ffffff',
};

export default function MyWork() {
  return (
    <main className="home-wrapper" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <nav className="top-nav" style={{ padding: '20px 5%', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ display: 'flex', gap: '30px' }}>
          <Link href="/" className="nav-link" style={{ color: colors.secondary }}>Home</Link>
          <Link href="/aboutme" className="nav-link" style={{ color: colors.secondary }}>About Me</Link>
          <Link href="/mywork" className="nav-link active" style={{ color: colors.primary, fontWeight: '600' }}>Work</Link>
          <Link href="/resume" className="nav-link" style={{ color: colors.secondary }}>Resume</Link>
        </div>
      </nav>

      {/* 1. REDUCED SECTION PADDING (from 80px to 40px) */}
      <section style={{ maxWidth: '1600px', width: '95%', margin: '0 auto', padding: '40px 0' }}>
        
        {/* 2. REDUCED HEADER MARGIN (from 100px to 40px) */}
        <header style={{ marginBottom: '40px', textAlign: 'center' }}>
          <span style={{ 
            fontSize: 'clamp(12px, 1.2vw, 12px)', 
            letterSpacing: '4px', 
            textTransform: 'uppercase', 
            color: colors.secondary 
          }}>
            Portfolio
          </span>
          <h1 style={{ 
            fontSize: 'clamp(30px, 10vw, 50px)',  
            fontWeight: '400',
            textTransform: 'uppercase', 
            letterSpacing: '0px', 
            color: colors.primary,
            lineHeight: '0.85',
            /* 3. REDUCED MARGIN TOP (from 15px to 5px) */
            marginTop: '5px',
  
          }}>
            Selected <br /> Works
          </h1>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              style={{
                display: 'flex',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '80px'
              }}
            >
              <div style={{ width: '50%', minWidth: '350px', position: 'relative' }}>
                <div 
                  className="image-shadow-wrapper"
                  style={{
                    width: '100%',
                    aspectRatio: '3 / 2',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(74, 55, 40, 0.08)',
                    backgroundColor: colors.uiElement,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }} 
                  />
                </div>
              </div>

              <div style={{ width: '25%', minWidth: '280px', textAlign: index % 2 === 0 ? 'left' : 'right' }}>
                <span style={{ fontSize: 'clamp(11px, 1vw, 13px)', letterSpacing: '2px', textTransform: 'uppercase', color: colors.secondary }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: 'clamp(32px, 4vw, 30px)', fontWeight: '500', textTransform: 'uppercase', color: colors.primary, margin: '15px 0 25px 0', lineHeight: '1', letterSpacing: '-1px' }}>
                  {project.title}
                </h3>
                <Link href={`/work/${project.id}`} style={{ textDecoration: 'none', color: colors.accent, fontSize: 'clamp(12px, 1vw, 14px)', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '12px', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end' }}>
                  Explore <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

       <footer style={{ margin: '100px 0 60px 0', textAlign: 'center' }}>
  {/* Changed textAlign to center */}
  <div className="contact-section" style={{ textAlign: 'center' }}>
    <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', marginBottom: '15px', opacity: 0.8 }}>
      {/* Title text here if needed */}
    </h3>
    
    {/* Changed justifyContent to center */}
    <div className="contact-dots" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
      <a href="https://instagram.com" target="_blank" className="dot-btn" aria-label="Instagram">
        <Instagram size={18} />
      </a>
      <a href="tel:+1234567890" className="dot-btn" aria-label="Phone">
        <PhoneCall size={18} />
      </a>
      <a href="mailto:hello@abigaildurham.com" className="dot-btn" aria-label="Email">
        <Mail size={18} />
      </a>
    </div>
  </div>
</footer>
      </section>

      <style jsx>{`
        .image-shadow-wrapper:hover {
          transform: translateY(-10px);
          box-shadow: 0 40px 70px rgba(74, 55, 40, 0.12) !important;
        }
        .nav-link {
          text-decoration: none;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: 0.3s ease;
        }
        .nav-link:hover {
          color: ${colors.primary} !important;
        }
      `}</style>
    </main>
  );
}