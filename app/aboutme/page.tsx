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
    <main 
      className="home-wrapper" 
      style={{ 
        backgroundColor: '#ffffff', 
        minHeight: '100vh', 
        paddingTop: '0px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      
      {/* ABOUT CONTENT */}
      <section 
        className="about-content" 
        style={{ 
          maxWidth: '1100px', 
          width: '100%', 
          /* Aggressive negative margin to pull it way up */
          margin: '-200px auto 0 auto', 
          display: 'flex',
          flexWrap: 'wrap', 
          /* Changed to flex-start to keep content at the top */
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '60px',
          paddingBottom: '80px',
          paddingTop: '0px'
        }}
      >
        
        {/* Profile Image */}
        <div className="profile-arch" style={{
          width: 'clamp(280px, 35vw, 400px)',
          aspectRatio: '3 / 4',
          borderRadius: '4px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(74, 55, 40, 0.08)',
          flexShrink: 0,
          /* Ensures the image itself doesn't have extra top space */
          marginTop: '0px' 
        }}>
          <img 
            src="/abby.jpg" 
            alt="Abigail Durham" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        {/* Text Section */}
        <div className="about-text-section" style={{ flex: '1', minWidth: '300px', paddingTop: '20px' }}>
          <h1 style={{ 
            fontSize: 'clamp(30px, 5vw, 50px)',  
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