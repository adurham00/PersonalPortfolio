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
          position: relative; /* Necessary for the underline positioning */
          padding-bottom: 8px; /* Space between text and the line */
        }

        /* The underline itself */
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 3px; /* Thickness of the line */
          background-color: ${colors.primary};
          border-radius: 10px; /* This rounds the edges */
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: ${colors.primary};
        }

        /* Show line on hover */
        .nav-link:hover::after {
          width: 100%;
        }

        /* Styles for the active link */
        .nav-link.active {
          color: ${colors.primary} !important;
          font-weight: 600;
        }

        /* Keep line visible on active link */
        .nav-link.active::after {
          width: 100%;
        }
      `}</style>

      <div style={{ width: '100%', backgroundColor: '#ffffff' }}>
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          gap: '40px', 
          paddingTop: '100px',      
          paddingBottom: '30px', 
          maxWidth: '1200px',     
          margin: '0 auto'        
        }}>
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link href="/mywork" className={`nav-link ${pathname === '/mywork' ? 'active' : ''}`}>Work</Link>
          <Link href="/aboutme" className={`nav-link ${pathname === '/aboutme' ? 'active' : ''}`}>About Me</Link>
      
          <Link href="/resume" className={`nav-link ${pathname === '/resume' ? 'active' : ''}`}>Resume</Link>
        </nav>
      </div>
    </>
  );
}