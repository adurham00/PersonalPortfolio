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
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Dynamic CSS to handle the responsive overlap */}
      <style jsx>{`
        .about-content {
          max-width: 1100px;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: center;
          gap: 60px;
          padding: 0 20px 80px 20px;
          margin: -120px auto 0 auto; /* Desktop overlap */
        }

        @media (max-width: 1024px) {
          .about-content {
            margin: 40px auto 0 auto; /* Remove negative margin on tablets/phones */
            gap: 30px;
          }
        }
      `}</style>
      
      <section className="about-content">
        
        {/* Profile Image */}
        <div className="profile-arch" style={{
          width: 'clamp(280px, 85vw, 400px)', // Made it wider on mobile
          aspectRatio: '3 / 4',
          borderRadius: '4px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(74, 55, 40, 0.08)',
          flexShrink: 0,
        }}>
          <img 
            src="/abby.jpg" 
            alt="Abigail Durham" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        {/* Text Section */}
        <div className="about-text-section" style={{ flex: '1', minWidth: '300px', paddingTop: '10px' }}>
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
              Hi, I'm Abigail. As a UI/UX designer, I'm driven by a passion for connecting people through technology. I focus on bringing comfort and clarity to web interfaces, making the digital world feel a little more human.
            </p>
            <p style={{ marginTop: '20px' }}>
           I believe that technology should be a tool for strengthening others and fostering genuine human connection. Having navigated my own shift from technical systems to creative design, I understand the power of evolving and embracing new paths. I approach every project with a commitment to continuous growth and a heart for helping others thrive in an ever-changing digital world.
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