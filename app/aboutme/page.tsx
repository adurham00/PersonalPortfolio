"use client";

import React from 'react';
import Link from 'next/link';
import { Instagram, Mail, PhoneCall, ArrowLeft } from 'lucide-react';

export default function AboutMe() {
  return (
    <main className="home-wrapper">
      {/* Navigation */}
      <nav className="top-nav">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/aboutme" className="nav-link active">About Me</Link>
        <Link href="/mywork" className="nav-link">My Work</Link>
        <Link href="/resume" className="nav-link">Resume</Link>
      </nav>

      <section className="about-content" style={{ 
        maxWidth: '1100px', 
        width: '90%', 
        margin: '20px auto',
        display: 'flex',
        /* Flex-wrap ensures it stacks on small screens */
        flexWrap: 'wrap', 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        gap: '60px'
      }}>
        
        {/* LEFT SIDE: Arched Profile Image */}
        <div className="profile-arch" style={{
          width: 'clamp(280px, 35vw, 400px)',
          height: 'clamp(400px, 50vw, 550px)',
          backgroundColor: 'var(--accent-gray)',
          borderRadius: '3px 3px 3px 3px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
          flexShrink: 0
        }}>
          <img 
            src="/abby.jpg" 
            alt="Abigail Durham" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        {/* RIGHT SIDE: Text Content */}
        <div className="about-text-section" style={{ 
          flex: '1',
          minWidth: '300px',
          textAlign: 'left' /* Changed from center to left */
        }}>
          <h1 style={{ 
          fontSize: 'clamp(30px, 10vw, 40px)',  
          textTransform: 'uppercase', 
          letterSpacing: '0.04em',
          marginBottom: '24px',
          color: 'var(--text-main)',
          fontFamily: '"Playfair Display", "Times New Roman", serif',
          fontWeight: '400'
        }}>
          About Me
        </h1>

          
          <div style={{ 
            lineHeight: '1.9', 
            fontSize: '17px', 
            color: 'var(--text-main)',
            marginBottom: '30px'
          }}>
            <p>
              Hi, I'm Abigail. I am a creative professional based in [Your City], 
              specializing in [Your Specialty, e.g., Architectural Photography and Minimalism]. 
              My work is driven by a passion for clean lines, natural light, and the 
              stories told through silent spaces.
            </p>
            <p style={{ marginTop: '20px' }}>
              With a background in [Your Background], I strive to create visual 
              experiences that are both modern and timeless. When I'm not behind 
              the lens, you can find me exploring urban landscapes or 
              experimenting with new digital mediums.
            </p>
          </div>

          {/* Contact & Socials nested on the right */}
          <div className="contact-section" style={{ textAlign: 'left' }}>
            <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px', marginBottom: '15px', opacity: 0.8 }}>
              Let's Connect
            </h3>
            <div className="contact-dots" style={{ justifyContent: 'flex-start' }}>
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

          {/* Back Link */}
          <Link href="/" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            textDecoration: 'none', 
            color: 'var(--text-main)',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginTop: '40px',
            borderBottom: '1px solid transparent',
            transition: 'border 0.3s'
          }}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </section>

      <footer className="footer-section" style={{ marginTop: 'auto' }}>
        <p style={{ fontSize: '12px', opacity: 0.6 }}>© 2026 Abigail Durham</p>
      </footer>
    </main>
  );
}