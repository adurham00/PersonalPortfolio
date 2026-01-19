"use client";
import { useRef } from 'react';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // Logic: 200px card width + 20px gap = 220px per scroll
      const scrollAmount = 220;
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <main className="page-wrapper">
      {/* Navigation Menu */}
      <nav className="nav-menu">
        <a href="#" className="active-link">HOME</a>
        <a href="#">ABOUT ME</a>
        <a href="#">MY WORK</a>
        <a href="#">SOCIAL</a>
      </nav>

      <div className="grid-container">
        {/* Left 1/3: Main Profile Image */}
        <div className="image-section">
          <img 
            src="/your-photo.png" 
            alt="Abigail Durham" 
            className="main-photo" 
          />
        </div>

        {/* Right 2/3: Content */}
        <div className="content-section">
          {/* Replace the <h1> with your JPEG */}
          <img 
            src="/path-to-your-title.jpg" 
            alt="Abigail Durham" 
            className="name-title-img" 
          />

          <p className="bio-text">
            I design products that empower users to achieve their goals and feel 
            confident in their work. My passion is building personal connections 
            and creating a positive, growth-oriented environment...
          </p>

          <div className="slider-area">
            {/* Left Button */}
            <button onClick={() => scroll('left')} className="nav-circle-btn">
              <span>←</span>
            </button>
            
            {/* The Arches Track */}
            <div className="scroll-track" ref={scrollRef}>
              <div className="arch-item"><img src="/work1.jpg" alt="" /></div>
              <div className="arch-item"><img src="/work2.jpg" alt="" /></div>
              <div className="arch-item"><img src="/work3.jpg" alt="" /></div>
              <div className="arch-item"><img src="/work4.jpg" alt="" /></div>
              <div className="arch-item"><img src="/work5.jpg" alt="" /></div>
            </div>

            {/* Right Button */}
            <button onClick={() => scroll('right')} className="nav-circle-btn">
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}