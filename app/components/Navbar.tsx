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
          padding: 100px 20px 30px 20px; /* Top, Right, Bottom, Left */
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
          white-space: nowrap; /* Prevents links from breaking into two lines */
        }

        .nav-link:hover { color: ${colors.primary}; }
        
        .nav-link.active {
          color: ${colors.primary} !important;
          font-weight: 600;
        }

        /* Responsive Mobile Styles */
        @media (max-width: 768px) {
          .nav-container {
            padding-top: 40px; /* Reduced top padding for mobile */
            gap: 20px;         /* Tighter gap so links don't fall off screen */
            flex-wrap: wrap;   /* Allows links to wrap if the screen is very small */
          }
          
          .nav-link {
            font-size: 11px;   /* Slightly smaller font for mobile */
            letter-spacing: 1px;
          }
        }
      `}</style>

      <div style={{ width: '100%', backgroundColor: '#ffffff' }}>
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