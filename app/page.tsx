"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // Import Link for Next.js navigation
import { ChevronLeft, ChevronRight, Instagram, Mail, PhoneCall } from 'lucide-react';

const items = [
  { id: 1, title: "Abstract Architecture" },
  { id: 2, title: "Modern Minimalism" },
  { id: 3, title: "Nature's Palette" },
  { id: 4, title: "Urban Exploration" },
  { id: 5, title: "Studio Portrait" },
];

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
      {/* Navigation - Linked to your .tsx pages */}
      <nav className="top-nav">
        <Link href="/" className="nav-link active">Home</Link>
        <Link href="/aboutme" className="nav-link">About Me</Link>
        <Link href="/mywork" className="nav-link">My Work</Link>
        <Link href="/resume" className="nav-link">Resume</Link>
      </nav>

      {/* Hero / Logo Section */}
      <header className="header-section">
        <div className="hero-title-svg">
          <img 
            src="/AbigailDurham2.svg" 
            alt="Abigail Durham" 
            className="logo-img" 
          />
        </div>
        
        {/* Social Icons - Now functional links */}
        <div className="contact-dots">
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="dot-btn" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="tel:+1234567890" className="dot-btn" aria-label="Phone">
            <PhoneCall size={18} />
          </a>
          <a href="mailto:hello@abigaildurham.com" className="dot-btn" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </header>

      {/* Carousel Section */}
      <section className="carousel-container">
        <div className="grey-backdrop-bar" />

        <div className="carousel-stage">
          {activeItems.map((slot) => (
            <div 
              key={items[slot.index].id} 
              className={`box-wrapper ${slot.position}`}
            >
              <div className="image-box">
                <span className="placeholder-q" style={{ opacity: 0.2 }}>?</span>
              </div>
              <p className="box-label">{items[slot.index].title}</p>
            </div>
          ))}
        </div>

        {/* Arrow Controls */}
        <div className="controls-overlay">
          <button className="arrow-btn" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="arrow-btn" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Footer - Linked to My Work */}
      <div className="footer-section">
        <Link href="/mywork" className="view-more-btn">
          <span>View More</span>
        </Link>
      </div>
    </main>
  );
}