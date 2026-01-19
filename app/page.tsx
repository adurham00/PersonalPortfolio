"use client";
import { useRef, useState, useEffect } from 'react';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to toggle arrow visibility
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const firstItem = scrollRef.current.querySelector('.arch-item');
      if (firstItem) {
        const itemWidth = firstItem.clientWidth;
        const gap = parseInt(window.getComputedStyle(scrollRef.current).gap) || 25;
        const scrollAmount = itemWidth + gap;

        scrollRef.current.scrollBy({ 
          left: direction === 'left' ? -scrollAmount : scrollAmount, 
          behavior: 'smooth' 
        });
      }
    }
  };

  return (
    <main className="page-wrapper">
      {/* 1. NAVIGATION */}
      <nav className="nav-menu">
        <a href="#" className="active-link">HOME</a>
        <a href="#">ABOUT ME</a>
        <a href="#">MY WORK</a>
        <a href="#">SOCIAL</a>
      </nav>

      <div className="grid-container">
        {/* 2. LEFT SIDE (IMAGE) */}
        <div className="image-section">
          <img src="/your-photo.png" alt="Abigail Durham" className="main-photo" />
        </div>

        {/* 3. RIGHT SIDE (CONTENT) */}
        <div className="content-section">
          <img src="/AbigailDurham.svg" alt="Abigail Durham" className="name-title-img" />

          <p className="bio-text">
            I design products that empower users to achieve their goals and feel 
            confident in their work. My passion is building personal connections 

          </p>

          <div className="slider-area">
            <div className="slider-controls-wrapper">
              
              {/* Arrows only visible when scrolling is possible */}
              
              <div className="scroll-track" ref={scrollRef} onScroll={checkScroll}>
                <div className="arch-item"><img src="/work1.jpg" alt="Work 1" /></div>
                <div className="arch-item"><img src="/work2.jpg" alt="Work 2" /></div>
                <div className="arch-item"><img src="/work3.jpg" alt="Work 3" /></div>
                <div className="arch-item"><img src="/work4.jpg" alt="Work 4" /></div>
                <div className="arch-item"><img src="/work5.jpg" alt="Work 5" /></div>
              </div>

              {/* Left Arrow */}
              <button 
                onClick={() => scroll('left')} 
                className={`nav-circle-btn prev ${canScrollLeft ? 'visible' : ''}`}
                aria-label="Scroll Left"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Right Arrow */}
              <button 
                onClick={() => scroll('right')} 
                className={`nav-circle-btn next ${canScrollRight ? 'visible' : ''}`}
                aria-label="Scroll Right"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}