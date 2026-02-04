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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  const getIndex = (offset: number) => (currentIndex + offset + items.length) % items.length;

  // Function to handle clipboard copy
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000); // Reset notification after 2 seconds
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
          margin-top: -40px;
        }

        .header-section {
          text-align: center;
          padding-bottom: 45px;
          position: relative;
        }

        .image-box:hover {
          opacity: 0.9;
          transform: scale(1.02);
          transition: all 0.3s ease;
        }

        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          cursor: pointer;
          backdrop-filter: blur(5px);
        }

        .lightbox-img {
          max-width: 90%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 4px 30px rgba(0,0,0,0.5);
        }

        .dot-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #f5f5f5;
          color: #4A3728;
          margin: 0 10px;
          transition: all 0.2s ease;
          text-decoration: none;
          cursor: pointer;
          border: none;
          position: relative;
        }

        .dot-btn:hover {
          background-color: #8B735B;
          color: white;
        }

        .copy-toast {
          position: absolute;
          top: 90px;
          left: 50%;
          transform: translateX(-50%);
          background: #4A3728;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          animation: fadeInOut 2s ease-in-out;
          z-index: 10;
        }

        @keyframes fadeInOut {
          0% { opacity: 0; transform: translate(-50%, -10px); }
          15% { opacity: 1; transform: translate(-50%, 0); }
          85% { opacity: 1; transform: translate(-50%, 0); }
          100% { opacity: 0; transform: translate(-50%, -10px); }
        }

        @media (max-width: 768px) {
          .home-wrapper { margin-top: 20px !important; }
        }
      `}</style>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <button 
            style={{ position: 'absolute', top: '20px', right: '20px', color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img src={selectedImage} className="lightbox-img" alt="Enlarged view" />
        </div>
      )}

      {/* Hero / Logo Section */}
      <header className="header-section">
        <div className="hero-title-text" style={{ marginTop: '-20px' }}>
          <img 
            src="/AbigailDurham2.svg" 
            alt="Abigail Durham" 
            style={{ maxWidth: '650px', width: '90%', height: 'auto', display: 'block', margin: '0 auto' }} 
          />
        </div>
        
        {/* Toast Notification */}
        {copiedText && (
          <div className="copy-toast">
            <Check size={14} /> {copiedText} Copied!
          </div>
        )}

        {/* Contact Icons */}
        <div className="contact-dots" style={{ marginTop: '40px' }}>
          <a href="https://www.linkedin.com/in/abby-durham00" target="_blank" rel="noopener noreferrer" className="dot-btn">
            <Linkedin size={18} />
          </a>
          <button onClick={() => handleCopy("3852420217", "Phone")} className="dot-btn">
            <PhoneCall size={18} />
          </button>
          <button onClick={() => handleCopy("adurham00@gmail.com", "Email")} className="dot-btn">
            <Mail size={18} />
          </button>
        </div>
      </header>

      {/* Carousel Section */}
      <section className="carousel-container" style={{ marginTop: '-10px' }}>
        <div className="grey-backdrop-bar" />
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
                    position: 'relative',
                    padding: '10px',
                    cursor: 'pointer',
                    borderRadius: '8px'
                  }}
                >
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
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

        <div className="controls-overlay">
          <button className="arrow-btn" onClick={prevSlide}><ChevronLeft size={24} /></button>
          <button className="arrow-btn" onClick={nextSlide}><ChevronRight size={24} /></button>
        </div>
      </section>

      <div className="footer-section" style={{ marginTop: '20px' }}>
        <Link href="/mywork" className="view-more-btn">
          <span style={{ color: colors.primary, fontWeight: '600' }}>View More</span>
        </Link>
      </div>
    </main>
  );
}