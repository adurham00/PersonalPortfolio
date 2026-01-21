"use client";
import { useRef, useState, useEffect } from 'react';

// Sample data structure for your projects
const projects = [
  { id: 1, title: "UI Design", category: "PRODUCT", img: "/work1.jpg" },
  { id: 2, title: "Mobile App", category: "UX RESEARCH", img: "/work2.jpg" },
  { id: 3, title: "Branding", category: "VISUAL", img: "/work3.jpg" },
  { id: 4, title: "Web Platform", category: "DEVELOPMENT", img: "/work4.jpg" },
  { id: 5, title: "E-Commerce", category: "UI/UX", img: "/work5.jpg" },
];

const [view, setView] = useState('home');

export default function MyWork() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
      const scrollAmount = 350; // Width of card + gap
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <main className="work-page-wrapper">
      <nav className="nav-menu work-nav">
        <a href="/">HOME</a>
        <a href="#">ABOUT ME</a>
        <a href="#" className="active-link">MY WORK</a>
        <a href="#">SOCIAL</a>
      </nav>

      <header className="work-header">
        <h1 className="section-title">SELECTED WORKS</h1>
        <p className="section-subtitle">A collection of projects focused on user empowerment and growth.</p>
      </header>

      <div className="work-slider-container">
        <button 
          onClick={() => scroll('left')} 
          className={`nav-circle-btn prev ${canScrollLeft ? 'visible' : ''}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
        </button>

        <div className="work-scroll-track" ref={scrollRef} onScroll={checkScroll}>
          {projects.map((project) => (
            <div key={project.id} className="work-card arch-item">
              <div className="arch-image-wrapper">
                <img src={project.img} alt={project.title} />
                <div className="card-overlay">
                   <span className="project-category">{project.category}</span>
                   <h3 className="project-title">{project.title}</h3>
                   <button className="view-btn">VIEW PROJECT</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')} 
          className={`nav-circle-btn next ${canScrollRight ? 'visible' : ''}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>
    </main>
  );
}