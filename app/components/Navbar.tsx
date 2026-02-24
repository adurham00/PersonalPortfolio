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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/mywork' },
    { name: 'About', href: '/aboutme' },
    { name: 'Resume', href: '/resume' },
  ];

  return (
    <>
      <style jsx global>{`
        /* Reset for the navbar area to prevent padding from causing overflow */
        .nav-wrapper, .nav-wrapper * {
          box-sizing: border-box;
        }

        .nav-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          padding: 60px 20px 20px 20px; 
          border-bottom: 1px solid #f0f0f0;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .nav-link {
          text-decoration: none;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: ${colors.secondary};
          transition: 0.3s ease;
          white-space: nowrap;
          flex-shrink: 1; /* Allows links to stay within bounds */
        }

        .nav-link:hover { 
          color: ${colors.primary}; 
        }
        
        .nav-link.active {
          color: ${colors.primary} !important;
          font-weight: 600;
        }

        /* TABLET & SMALL DESKTOP */
        @media (max-width: 800px) {
          .nav-container {
            gap: 25px;
            padding: 40px 15px 15px 15px;
          }
        }

        /* MOBILE FIXES (iPhone / Android) */
        @media (max-width: 600px) {
          .nav-container {
            padding: 20px 10px; 
            gap: 15px; 
          }
          
          .nav-link {
            font-size: 11px;
            letter-spacing: 1px; /* Reducing spacing is key for mobile width */
          }
        }

        /* ULTRA TIGHT SCREENS (iPhone SE / 320px wide) */
        @media (max-width: 360px) {
          .nav-container {
            gap: 10px;
            padding: 15px 5px;
          }
          
          .nav-link {
            font-size: 10px;
            letter-spacing: 0.5px;
          }
        }
      `}</style>

      <div className="nav-wrapper" style={{ width: '100%', backgroundColor: '#ffffff', position: 'relative', zIndex: 100 }}>
        <nav className="nav-container">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`nav-link ${pathname === link.href ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}