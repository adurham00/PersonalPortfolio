"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const colors = {
  primary: '#4A3728',
  secondary: '#8B735B',
};

export default function AboutMe() {
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

      {/* CLEAN NAVIGATION ONLY */}
      <nav className="top-nav" style={{ 
        padding: '20px 5%', 
        display: 'flex', 
        gap: '30px', 
        borderBottom: '1px solid #f0f0f0',
        marginBottom: '60px' // Added space since the header is gone
      }}>
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/aboutme" className="nav-link active">About Me</Link>
        <Link href="/mywork" className="nav-link">Work</Link>
        <Link href="/resume" className="nav-link">Resume</Link>
      </nav>

      {/* ABOUT CONTENT */}
      <section className="about-content" style={{ 
        maxWidth: '1100px', 
        width: '90%', 
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap', 
        alignItems: 'center',
        justifyContent: 'center',
        gap: '60px',
        paddingBottom: '80px'
      }}>
        
        {/* Profile Image */}
        <div className="profile-arch" style={{
          width: 'clamp(280px, 35vw, 400px)',
          aspectRatio: '3 / 4',
          borderRadius: '4px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(74, 55, 40, 0.08)',
          flexShrink: 0
        }}>
          <img 
            src="/abby.jpg" 
            alt="Abigail Durham" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        {/* Text Section */}
        <div className="about-text-section" style={{ flex: '1', minWidth: '300px' }}>
          <h1 style={{ 
            fontSize: 'clamp(30px, 5vw, 40px)',  
            textTransform: 'uppercase', 
            letterSpacing: '0.04em',
            marginBottom: '24px',
            fontWeight: '400',
            color: colors.primary,
          }}>
            About Me
          </h1>

          <div style={{ lineHeight: '1.9', fontSize: '17px', color: '#555' }}>
            <p>
              Hi, I'm Abigail. I am a UI/UX designer and creative professional driven by a passion for clean lines, 
              intuitive systems, and user-centric storytelling.
            </p>
            <p style={{ marginTop: '20px' }}>
              Currently, I focus on building digital experiences that bridge the gap between complex data 
              and elegant design. My background in computer systems allows me to approach problems 
              with both a technical lens and a creative heart.
            </p>
          </div>

          <Link href="/" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            textDecoration: 'none', 
            color: colors.secondary,
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginTop: '40px',
            fontWeight: '600'
          }}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}