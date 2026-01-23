"use client";

import React, { useState } from 'react';
import Link from 'next/link'; 
import { ChevronLeft, ChevronRight, Instagram, Mail, PhoneCall } from 'lucide-react';

const items = [
  { id: 1, title: "Abstract Architecture", image: "/searchpage2.png" },
  { id: 2, title: "Modern Minimalism", image: "/animal.png" },
  { id: 3, title: "Nature's Palette", image: "/sketchbook.png" },
  { id: 4, title: "Urban Exploration", image: "/code.png" },
  { id: 5, title: "Studio Portrait", image: "/homepage.png" },
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
      `}</style>

      {/* Navigation */}
      <nav className="top-nav" style={{ paddingBottom: '10px' }}>
        <Link href="/" className="nav-link active">Home</Link>
        <Link href="/aboutme" className="nav-link">About Me</Link>
        <Link href="/mywork" className="nav-link">My Work</Link>
        <Link href="/resume" className="nav-link">Resume</Link>
      </nav>

      {/* Hero / Logo Section */}
      <header className="header-section" style={{ textAlign: 'center', marginTop: '-15px', paddingBottom: '20px' }}>
        <div className="hero-title-text">
          <h1 style={{ 
            fontFamily: '"Playfair Display", serif',
            fontSize: '52px',
            fontWeight: '400',
            textTransform: 'uppercase',
            color: colors.primary,
            letterSpacing: '2px',
            margin: '0',
            lineHeight: '1.1'
          }}>
            Abigail Durham
          </h1>
        </div>
        
        <div className="contact-dots" style={{ marginTop: '12px' }}>
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
                <div className="image-box" style={{ 
                  aspectRatio: '1 / 1', // The box stays a fixed square
                  overflow: 'hidden', 
                  backgroundColor: '#ffffff', // Clean background for the "empty" spaces
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  padding: '10px' // Optional: adds a small breathing room inside the square
                }}>
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain', // SHOWN WHOLE: scales image to fit without cropping
                        display: 'block' 
                      }}
                    />
                  ) : (
                    <span className="placeholder-q" style={{ opacity: 0.2 }}>?</span>
                  )}
                </div>
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