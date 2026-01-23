"use client";

import React, { useState } from 'react';
import Link from 'next/link'; 
import { ChevronLeft, ChevronRight, Instagram, Mail, PhoneCall } from 'lucide-react';

// 1. Added 'link' property to each item
const items = [
  { id: 1, title: "Search Page", image: "/searchpage2.png", link: "/projects/search-page" },
  { id: 2, title: "Home Page Widgets", image: "/widgets.png", link: "/projects/widgets" },
  { id: 3, title: "Citation Generator", image: "/citation.png", link: "/projects/citation" },
  { id: 4, title: "Library Holdings", image: "/Holdings.png", link: "/projects/holdings" },
];

const colors = {
  primary: '#4A3728',
  secondary: '#8B735B',
};

export default function PortfolioPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  const getIndex = (offset: number) => (currentIndex + offset + items.length) % items.length;

  const activeItems = [
    { index: getIndex(-1), position: 'left' },
    { index: getIndex(0), position: 'center' },
    { index: getIndex(1), position: 'right' },
  ];

  return (
    <main className="home-wrapper">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap');
        
        /* Added a small hover effect for the images */
        .image-link:hover {
          opacity: 0.9;
          transform: scale(1.02);
          transition: all 0.3s ease;
        }
      `}</style>

      {/* Navigation */}
      <nav className="top-nav" style={{ paddingBottom: '20px' }}>
        <Link href="/" className="nav-link active">Home</Link>
        <Link href="/aboutme" className="nav-link">About Me</Link>
        <Link href="/mywork" className="nav-link">My Work</Link>
        <Link href="/resume" className="nav-link">Resume</Link>
      </nav>

      {/* Hero / Logo Section */}
      <header 
        className="header-section" 
        style={{ 
          textAlign: 'center', 
          marginTop: '-10px',
          paddingTop: '-50px',
          paddingBottom: '0px' 
        }}
      >
        <div className="hero-title-text">
          <img 
            src="/AbigailDurham2.svg" 
            alt="Abigail Durham" 
            style={{ 
              maxWidth: '450px', 
              width: '90%', 
              height: 'auto',
              display: 'block',
              margin: '0 auto'
            }} 
          />
        </div>
        
        <div className="contact-dots" style={{ marginTop: '20px' }}>
          <a href="#" className="dot-btn"><Instagram size={18} /></a>
          <a href="#" className="dot-btn"><PhoneCall size={18} /></a>
          <a href="#" className="dot-btn"><Mail size={18} /></a>
        </div>
      </header>

      {/* Carousel Section */}
      <section className="carousel-container">
        <div className="grey-backdrop-bar" />

        <div className="carousel-stage">
          {activeItems.map((slot) => {
            const item = items[slot.index];
            return (
              <div key={item.id} className={`box-wrapper ${slot.position}`}>
                {/* 2. Wrapped the image-box in a Link component */}
                <Link href={item.link} className="image-link" style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="image-box" style={{ 
                    aspectRatio: '1 / 1', 
                    overflow: 'hidden', 
                    backgroundColor: '#ffffff', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    padding: '10px',
                    cursor: 'pointer' // Shows users it is clickable
                  }}>
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'contain', 
                          display: 'block' 
                        }}
                      />
                    ) : (
                      <span className="placeholder-q" style={{ opacity: 0.2 }}>?</span>
                    )}
                  </div>
                </Link>
                
                <p className="box-label" style={{ color: colors.secondary, marginTop: '10px' }}>
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Arrow Controls */}
        <div className="controls-overlay">
          <button className="arrow-btn" onClick={prevSlide}><ChevronLeft size={24} /></button>
          <button className="arrow-btn" onClick={nextSlide}><ChevronRight size={24} /></button>
        </div>
      </section>

      <div className="footer-section">
        <Link href="/mywork" className="view-more-btn">
          <span style={{ color: colors.primary, fontWeight: '600' }}>View More</span>
        </Link>
      </div>
    </main>
  );
}