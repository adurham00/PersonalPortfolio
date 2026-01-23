"use client";

import React, { useState } from 'react'; // Removed 'use'
import Link from 'next/link';
import { ChevronLeft, X } from 'lucide-react';

const projectDetails = {
  "institutional": {
    title: "BYU Student UI/UX Assistant",
    description: "",
    gallery: [
      "/homepage.png", "/sketchbook.png", "/image3.png",
      "/image4.png", "/image5.png", "/image6.png",
      "/image7.png", "/image8.png", "/image9.png"
    ],
  },
  "case-studies": {
    title: "Personal Case Studies",
    description: "A deep dive into user behavior and pattern recognition within complex datasets.",
    gallery: ["/animal.png", "/code.png", "/image3.png", "/image4.png", "/image5.png", "/image6.png", "/image7.png", "/image8.png", "/image9.png"],
  },
  "creative-labs": {
    title: "Creative Works",
    description: "An exploration of creative expression through digital mediums and experimental design.",
    gallery: ["/sketchbook.png", "/code.png", "/image3.png", "/image4.png", "/image5.png", "/image6.png", "/image7.png", "/image8.png", "/image9.png"],
  },
  "systems": {
    title: "Computer Systems",
    description: "A comprehensive look at the architecture and functionality of modern computing systems.",
    gallery: ["/code.png", "/homepage.png", "/image3.png", "/image4.png", "/image5.png", "/image6.png", "/image7.png", "/image8.png", "/image9.png"],
  },
};

// Updated signature to treat params as a plain object
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params; // Directly destructure without use()
  const project = projectDetails[slug as keyof typeof projectDetails];
  
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  if (!project) {
    return <div style={{ padding: '100px', textAlign: 'center' }}>Project not found.</div>;
  }

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '40px 5%' }}>
      {/* Lightbox Overlay */}
      {selectedImg && (
        <div 
          onClick={() => setSelectedImg(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            padding: '20px'
          }}
        >
          <button 
            style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            onClick={() => setSelectedImg(null)}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImg} 
            alt="Enlarged view" 
            style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', borderRadius: '4px' }} 
          />
        </div>
      )}

      <Link href="/mywork" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#8B735B', textDecoration: 'none', marginBottom: '40px', textTransform: 'uppercase', fontSize: '16px', letterSpacing: '2px' }}>
        <ChevronLeft size={16} /> Back to Work
      </Link>

      <section style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'px', color: '#4A3728', textTransform: 'uppercase', marginBottom: '20px' }}>
          {project.title}
        </h1>
        
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555', marginBottom: '60px', maxWidth: '700px' }}>
          {project.description}
        </p>

        {/* 3x3 Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '20px' 
        }}>
          {project.gallery.map((img, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedImg(img)} 
              style={{ 
                width: '100%', 
                aspectRatio: '1 / 1', 
                backgroundColor: '#f9f9f9', 
                borderRadius: '4px', 
                overflow: 'hidden',
                cursor: 'zoom-in',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img 
                src={img} 
                alt={`${project.title} item ${idx}`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}