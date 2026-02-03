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
          padding: 80px 20px 25px 20px; /* Reduced from 100px */
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

        /* MOBILE FIXES */
        @media (max-width: 745px) {
          .nav-container {
            padding: 15px 10px; /* Much smaller top/bottom padding */
            gap: 10px;         /* Tighter gap to keep everything on one line */
            justify-content: space-evenly; /* Distributes links evenly across the screen */
          }
          
          .nav-link {
            font-size: 10px;   /* Smaller font for tight screens */
            letter-spacing: 0.5px; /* Less spacing so words don't stretch */
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