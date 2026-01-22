"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Mail, Globe } from 'lucide-react';

export default function PortfolioPage() {
  const items = [
    { id: 1, title: "Abstract Architecture" },
    { id: 2, title: "Modern Minimalism" },
    { id: 3, title: "Nature's Palette" },
    { id: 4, title: "Urban Exploration" },
    { id: 5, title: "Studio Portrait" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  const getIndex = (offset: number) => (currentIndex + offset + items.length) % items.length;

  // Stable slots for the 3 positions
  const activeItems = [
    { index: getIndex(-1), position: 'left' },
    { index: getIndex(0), position: 'center' },
    { index: getIndex(1), position: 'right' },
  ];

  return (
    <main className="home-wrapper">
      <nav className="top-nav">
        <a href="#" className="nav-link active">Home</a>
        <a href="#" className="nav-link">About Me</a>
        <a href="#" className="nav-link">My Work</a>
        <a href="#" className="nav-link">Resume</a>
      </nav>

      <header className="header-section">
        <div className="hero-title-svg">
          <img src="/AbigailDurham2.svg" alt="Abigail Durham" className="logo-img" />
        </div>
        <div className="contact-dots">
          <button className="dot-btn"><Instagram size={16} /></button>
          <button className="dot-btn"><Globe size={16} /></button>
          <button className="dot-btn"><Mail size={16} /></button>
        </div>
      </header>

      <section className="carousel-container">
        <div className="grey-backdrop-bar" />

        <div className="carousel-stage">
          {activeItems.map((slot) => (
            <div 
              key={items[slot.index].id} 
              className={`box-wrapper ${slot.position}`}
            >
              <div className="image-box">
                <span className="placeholder-q">?</span>
              </div>
              <p className="box-label">{items[slot.index].title}</p>
            </div>
          ))}
        </div>

        <div className="controls-overlay">
          <button className="arrow-btn" onClick={prevSlide}><ChevronLeft size={24} /></button>
          <button className="arrow-btn" onClick={nextSlide}><ChevronRight size={24} /></button>
        </div>
      </section>

      <div className="footer-section">
        <a href="#" className="view-more-btn">View More</a>
      </div>
    </main>
  );
}