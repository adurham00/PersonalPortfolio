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
        .nav-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          padding: 60px 20px 20px 20px; 
          border-bottom: 1px solid #f0f0f0;
          max-width: 1400px;
          margin: 0 auto;
        }

        .nav-link {
          text-decoration: none;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: ${colors.secondary};
          transition: 0.3s ease;
          white-space: nowrap;
        }

        .nav-link:hover { color: ${colors.primary}; }
        
        .nav-link.active {
          color: ${colors.primary} !important;
          font-weight: 600;
        }

        /* MOBILE FIXES - Specifically targeting iPhone widths */
        @media (max-width: 700px) {
          .nav-container {
            padding: 15px 5px; /* Minimal side padding */
            gap: 5px;          /* Minimal gap to prevent overflow */
            justify-content: space-around; /* Distributes links without hitting edges */
            width: 100%;
          }
          
          .nav-link {
            font-size: 10px;       /* Scale down text */
            letter-spacing: 0.5px;  /* Minimal letter spacing */
            padding: 5px;          /* Small touch target area */
          }
        }

        /* EXTRA TIGHT SCREENS (iPhone SE/Mini) */
        @media (max-width: 350px) {
          .nav-link {
            font-size: 9px;
            letter-spacing: 0px;
          }
        }
      `}</style>

      <div style={{ width: '100%', backgroundColor: '#ffffff', position: 'relative', zIndex: 100 }}>
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