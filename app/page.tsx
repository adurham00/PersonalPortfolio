"use client";

import React, { useState } from 'react';
import Link from 'next/link'; 
import { ChevronLeft, ChevronRight, Linkedin, Mail, PhoneCall, X, Check } from 'lucide-react';

const items = [
  { id: 1, title: "Search Page", image: "/searchpage2.png" },
  { id: 2, title: "Home Page Widgets", image: "/widgets.png" },
  { id: 3, title: "Citation Generator", image: "/citation.png" },
  { id: 4, title: "Library Holdings", image: "/Holdings.png" },
];

const colors = {
  primary: '#4A3728',
  secondary: '#8B735B',
};

export default function PortfolioPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [copiedText, setCopiedText] = useState(null);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  const getIndex = (offset) => (currentIndex + offset + items.length) % items.length;

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const activeItems = [
    { index: getIndex(-1), position: 'left' },
    { index: getIndex(0), position: 'center' },
    { index: getIndex(1), position: 'right' },
  ];

  return (
    <main className="home-wrapper">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap');
        
        .home-wrapper {
          position: relative;
          z-index: 1;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 0; 
          padding-bottom: 50px; 
        }

        .header-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px; 
          margin-top: -10px; 
          margin-bottom: 35px; 
          text-align: center;
          width: 100%;
        }

        .hero-title-text {
          margin: 0;
          display: flex;
          justify-content: center;
        }

        .hero-title-text img {
          width: clamp(320px, 70vw, 700px);
          height: auto;
          display: block;
        }

        .contact-dots {
          display: flex;
          justify-content: center;
          gap: 20px;
          position: relative;
        }

        .dot-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: #f5f5f5;
          color: #4A3728;
          transition: all 0.2s ease;
          cursor: pointer;
          border: none;
        }

        .dot-btn:hover {
          background-color: #8B735B;
          color: white;
          transform: translateY(-2px);
        }

        /* VIEW MORE HOVER EFFECT */
        .view-more-btn {
          text-decoration: none;
          border: 2px solid ${colors.primary};
          padding: 12px 36px;
          borderRadius: 40px;
          display: inline-block;
          background-color: transparent;
          color: ${colors.primary};
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .view-more-btn:hover {
          background-color: ${colors.primary};
          color: white !important;
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(74, 55, 40, 0.2);
        }

        .view-more-btn:hover span {
          color: white !important;
        }

        .carousel-container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 10px 0;
        }

        .footer-section {
          text-align: center;
          margin-top: 35px;
          padding-bottom: 20px;
        }

        .copy-toast {
          position: absolute;
          top: -50px;
          left: 50%;
          transform: translateX(-50%);
          background: #4A3728;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          white-space: nowrap;
          z-index: 10;
        }

        @media (max-width: 768px) {
          .header-container { margin-top: 0; margin-bottom: 20px; gap: 15px; }
          .hero-title-text img { width: 85%; }
        }
      `}</style>

      {/* Header Section */}
      <div className="header-container">
        <div className="hero-title-text">
          <img src="/AbigailDurham2.svg" alt="Abigail Durham" />
        </div>
        
        <div className="contact-dots">
          {copiedText && <div className="copy-toast">{copiedText} Copied!</div>}
          <a href="https://www.linkedin.com/in/abby-durham00" target="_blank" rel="noopener noreferrer" className="dot-btn">
            <Linkedin size={22} />
          </a>
          <button onClick={() => handleCopy("3852420217", "Phone")} className="dot-btn">
            <PhoneCall size={22} />
          </button>
          <button onClick={() => handleCopy("abigaildurham00@gmail.com", "Email")} className="dot-btn">
            <Mail size={22} />
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <section className="carousel-container">
        <div className="carousel-stage">
          {activeItems.map((slot) => {
            const item = items[slot.index];
            return (
              <div key={item.id} className={`box-wrapper ${slot.position}`}>
                <div 
                  className="image-box" 
                  onClick={() => setSelectedImage(item.image)}
                  style={{ 
                    aspectRatio: '1 / 1', 
                    overflow: 'hidden', 
                    backgroundColor: '#ffffff', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    cursor: 'pointer',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                  }}
                >
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <p style={{ 
                  color: colors.secondary, 
                  marginTop: '15px', 
                  textAlign: 'center', 
                  fontSize: '16px',
                  fontWeight: '500' 
                }}>
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="controls-overlay">
          <button className="arrow-btn" onClick={prevSlide}><ChevronLeft size={28} /></button>
          <button className="arrow-btn" onClick={nextSlide}><ChevronRight size={28} /></button>
        </div>
      </section>

      {/* Footer Section */}
      <div className="footer-section">
        <Link href="/mywork" className="view-more-btn">
          <span style={{ fontWeight: '700', fontSize: '15px', letterSpacing: '0.05em' }}>VIEW MORE</span>
        </Link>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)} style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', justifyContent: 'center', 
          alignItems: 'center', zIndex: 2000, backdropFilter: 'blur(4px)'
        }}>
          <button style={{ position: 'absolute', top: '30px', right: '30px', color: 'white', background: 'none', border: 'none' }}>
            <X size={44} />
          </button>
          <img src={selectedImage} style={{ maxWidth: '90%', maxHeight: '85vh', objectFit: 'contain' }} alt="Large view" />
        </div>
      )}
    </main>
  );
}