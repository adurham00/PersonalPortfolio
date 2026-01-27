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
    { name: 'About Me', href: '/aboutme' },
    { name: 'Work', href: '/mywork' },
    { name: 'Resume', href: '/resume' },
  ];

  return (
    <>
      <style jsx global>{`
        .nav-link {
          text-decoration: none;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: ${colors.secondary};
          transition: 0.3s ease;
        }
        .nav-link:hover { color: ${colors.primary}; }
        .nav-link.active {
          color: ${colors.primary} !important;
          font-weight: 600;
        }
      `}</style>

      {/* This wrapper ensures the nav can actually center itself */}
      <div style={{ width: '100%', backgroundColor: '#ffffff' }}>
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          gap: '40px', 
          paddingTop: '100px',   // This makes it much lower from the top
          paddingBottom: '30px', 
          borderBottom: '1px solid #f0f0f0',
          maxWidth: '1400px',    // Keeps it consistent with your content
          margin: '0 auto'       // Centers the whole nav container
        }}>
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