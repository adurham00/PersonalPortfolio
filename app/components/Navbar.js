"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const colors = {
  primary: '#4A3728',
  secondary: '#8B735B',
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <style jsx global>{`
        .nav-link {
          text-decoration: none;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: ${colors.secondary};
          transition: 0.3s ease;
        }
        .nav-link:hover {
          color: ${colors.primary};
        }
        .nav-link.active {
          color: ${colors.primary} !important;
          font-weight: 600;
        }
      `}</style>

      {/* The outer div ensures the background stays white, the nav inside handles the centering */}
      <div style={{ width: '100%', backgroundColor: '#ffffff' }}>
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'center', // This centers the links
          alignItems: 'center',
          gap: '40px', 
          paddingTop: '100px',      // This pushes the links down from the top
          paddingBottom: '30px', 
          borderBottom: '1px solid #f0f0f0',
          maxWidth: '1200px',     // Limits how wide the border goes
          margin: '0 auto'        // Centers the whole container on the screen
        }}>
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link href="/aboutme" className={`nav-link ${pathname === '/aboutme' ? 'active' : ''}`}>About Me</Link>
          <Link href="/mywork" className={`nav-link ${pathname === '/mywork' ? 'active' : ''}`}>Work</Link>
          <Link href="/resume" className={`nav-link ${pathname === '/resume' ? 'active' : ''}`}>Resume</Link>
        </nav>
      </div>
    </>
  );
}