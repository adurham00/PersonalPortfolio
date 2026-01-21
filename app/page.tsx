"use client";
import { useRef, useState, useEffect } from 'react';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  // NEW: State to toggle between Home and Work views
  const [view, setView] = useState<'home' | 'work'>('home');

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Re-run scroll check if the view changes
  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [view]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const firstItem = scrollRef.current.querySelector('.arch-item');
      if (firstItem) {
        const itemWidth = (firstItem as HTMLElement).clientWidth;
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
      <div className="grid-container">
        
        {/* LEFT SECTION */}
        <div className="image-section">
          <img 
            src="/abby.jpg" 
            alt="Abigail Durham" 
            className="main-photo" 
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="content-section">
          <nav className="nav-menu">
            {/* Updated Links to handle state */}
            <a 
              href="#" 
              className={view === 'home' ? 'active-link' : ''} 
              onClick={(e) => { e.preventDefault(); setView('home'); }}
            >HOME</a>
            <a href="#">ABOUT ME</a>
            <a 
              href="#" 
              className={view === 'work' ? 'active-link' : ''} 
              onClick={(e) => { e.preventDefault(); setView('work'); }}
            >MY WORK</a>
            <a href="#">RESUME</a>
          </nav>

          {/* Conditional Content based on view state */}
          {view === 'home' ? (
            <>
              <img 
                src="/AbigailDurham.svg?v=1" 
                alt="Abigail Durham" 
                className="name-title-img" 
              />
              <p className="bio-text">
                I design products that empower users to achieve their goals and feel 
                confident in their work. My passion is building personal connections 
                and creating a positive, growth-oriented environment.
              </p>
            </>
          ) : (
            <>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>MY WORK</h1>
              <p className="bio-text">
                A collection of my recent design projects and creative explorations.
              </p>
            </>
          )}

          <div className="slider-area" style={{ minWidth: 5, width: '100%' }}>
            <div className="slider-controls-wrapper">
              
              <button 
                onClick={() => scroll('left')} 
                className={`nav-circle-btn prev ${canScrollLeft ? 'visible' : ''}`}
                aria-label="Scroll Left"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              
              <div className="scroll-track" ref={scrollRef} onScroll={checkScroll}>
                {/* These will appear for both Home and Work, or you can separate them inside the track */}
                <div className="arch-item"><img src="/work1.jpg" alt="Work 1" /></div>
                <div className="arch-item"><img src="/work2.jpg" alt="Work 2" /></div>
                <div className="arch-item"><img src="/work3.jpg" alt="Work 3" /></div>
                <div className="arch-item"><img src="/work4.jpg" alt="Work 4" /></div>
                <div className="arch-item"><img src="/work5.jpg" alt="Work 5" /></div>
              </div>

              <button 
                onClick={() => scroll('right')} 
                className={`nav-circle-btn next ${canScrollRight ? 'visible' : ''}`}
                aria-label="Scroll Right"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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