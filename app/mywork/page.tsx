"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  { id: 1, title: "BYU Student UI/UX Assistant", category: "Library Website", image: "/homepage.png", slug: "institutional" },
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
      <style jsx global>{`
        .nav-link {
          text-decoration: none;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: ${colors.secondary};
          transition: 0.3s ease;
        }
        .nav-link:hover {
          color: ${colors.primary};
        }
        .nav-link.active {
          color: ${colors.primary};
          font-weight: 600;
        }
      `}</style>
  

      <section style={{ maxWidth: '1400px', width: '90%', margin: '0 auto', padding: '40px 0' }}>
        
        {/* Page Header */}
        <header style={{ marginBottom: '80px', textAlign: 'center' }}>
          <span style={{ 
            fontSize: '14px', 
            letterSpacing: '4px', 
            textTransform: 'uppercase', 
            color: colors.secondary 
          }}>
            Portfolio
          </span>
          <h1 style={{ 
            fontSize: 'clamp(36px, 8vw, 56px)',  
            fontWeight: '400',
            textTransform: 'uppercase', 
            color: colors.primary,
            lineHeight: '1',
            marginTop: '10px',
          }}>
            Selected <br /> Works
          </h1>
        </header>

        {/* Project List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              style={{
                display: 'flex',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '60px'
              }}
            >
              {/* Image Column */}
              <div style={{ flex: '1', minWidth: '320px', maxWidth: '700px' }}>
                <Link href={`/mywork/${project.slug}`}>
                  <div 
                    className="image-shadow-wrapper"
                    style={{
                      width: '100%',
                      aspectRatio: '16 / 10',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      boxShadow: '0 20px 50px rgba(74, 55, 40, 0.06)',
                      backgroundColor: '#fcfcfc',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '20px',
                      cursor: 'pointer',
                      transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} 
                    />
                  </div>
                </Link>
              </div>

              {/* Text Column */}
              <div style={{ width: '300px', textAlign: index % 2 === 0 ? 'left' : 'right' }}>
                <span style={{ fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: colors.secondary }}>
                  {project.category}
                </span>
                <h3 style={{ 
                  fontSize: '28px', 
                  fontWeight: '500', 
                  textTransform: 'uppercase', 
                  color: colors.primary, 
                  margin: '10px 0 20px 0', 
                  lineHeight: '1.1' 
                }}>
                  {project.title}
                </h3>
                
                <Link 
                  href={`/mywork/${project.slug}`} 
                  style={{ 
                    textDecoration: 'none', 
                    color: colors.accent, 
                    fontSize: '13px', 
                    textTransform: 'uppercase', 
                    letterSpacing: '2px', 
                    fontWeight: '700', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px', 
                    justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end' 
                  }}
                >
                  Explore <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .image-shadow-wrapper:hover {
          transform: translateY(-8px);
          box-shadow: 0 40px 70px rgba(74, 55, 40, 0.1) !important;
        }
      `}</style>
    </main>
  );
}