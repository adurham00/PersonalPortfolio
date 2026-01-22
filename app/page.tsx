"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Mail, Globe } from 'lucide-react';

// Use the data structure from your code
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

  // Helper to find index relative to current
  const getIndex = (offset: number) => (currentIndex + offset + items.length) % items.length;

  const activeItems = [
    { index: getIndex(-1), position: 'left' },
    { index: getIndex(0), position: 'center' },
    { index: getIndex(1), position: 'right' },
  ];

  return (
    <main className="home-wrapper">
      {/* Navigation */}
      <nav className="top-nav">
        <a href="#" className="nav-link active">Home</a>
        <a href="#" className="nav-link">About Me</a>
        <a href="#" className="nav-link">My Work</a>
        <a href="#" className="nav-link">Resume</a>
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
        <div className="contact-dots">
          <button className="dot-btn" aria-label="Instagram"><Instagram size={18} /></button>
          <button className="dot-btn" aria-label="Website"><Globe size={18} /></button>
          <button className="dot-btn" aria-label="Email"><Mail size={18} /></button>
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
                {/* Placeholders for your portfolio images */}
                <span className="placeholder-q" style={{ opacity: 0.2 }}>?</span>
              </div>
              <p className="box-label">{items[slot.index].title}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="controls-overlay">
          <button className="arrow-btn" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="arrow-btn" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <div className="footer-section">
        <a href="#" className="view-more-btn">View More</a>
      </div>
    </main>
  );
}