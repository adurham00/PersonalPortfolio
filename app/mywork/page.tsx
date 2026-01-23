"use client";

import React from 'react';
import Link from 'next/link';
import { Instagram, Mail, PhoneCall, ArrowRight } from 'lucide-react';

// 1. Updated: Added 'slug' to match the keys in your projectDetails database
const projects = [
  { id: 1, title: "BYU Student UI/UX Assitant", category: "Library Website", image: "/homepage.png", slug: "institutional" },
  { id: 2, title: "Personal Case Studies", category: "Wireframes and Figma", image: "/animal.png", slug: "case-studies" },
  { id: 3, title: "Creative Works", category: "Sketchbook and 3D Samples", image: "/sketchbook.png", slug: "creative-labs" },
  { id: 4, title: "Computer Systems", category: "CS Minor coursework", image: "/code.png", slug: "systems" },
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

      <section style={{ maxWidth: '1600px', width: '95%', margin: '0 auto', padding: '40px 0' }}>
        
        <header style={{ marginBottom: '40px', textAlign: 'center' }}>
          <span style={{ 
            fontSize: 'clamp(16px, 1.2vw, 16px)', 
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
            color: colors.primary,
            lineHeight: '0.85',
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
                {/* 2. Added Link wrapper to the image as well for better UX */}
                <Link href={`/mywork/${project.slug}`}>
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
                      cursor: 'pointer',
                      transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }} 
                    />
                  </div>
                </Link>
              </div>

              <div style={{ width: '25%', minWidth: '280px', textAlign: index % 2 === 0 ? 'left' : 'right' }}>
                <span style={{ fontSize: 'clamp(14px, 1vw, 16px)', letterSpacing: '2px', textTransform: 'uppercase', color: colors.secondary }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: 'clamp(32px, 4vw, 30px)', fontWeight: '500', textTransform: 'uppercase', color: colors.primary, margin: '15px 0 25px 0', lineHeight: '1', letterSpacing: '-1px' }}>
                  {project.title}
                </h3>
                
                {/* 3. Updated Explore Link to point to your new dynamic pages */}
                <Link 
                  href={`/mywork/${project.slug}`} 
                  style={{ 
                    textDecoration: 'none', 
                    color: colors.accent, 
                    fontSize: 'clamp(14px, 1vw, 16px)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '3px', 
                    fontWeight: '700', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end' 
                  }}
                >
                  Explore <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <footer style={{ margin: '100px 0 60px 0', textAlign: 'center' }}>
          <div className="contact-section" style={{ textAlign: 'center' }}>
            <div className="contact-dots" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <a href="#" className="dot-btn"><Instagram size={18} /></a>
              <a href="#" className="dot-btn"><PhoneCall size={18} /></a>
              <a href="#" className="dot-btn"><Mail size={18} /></a>
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