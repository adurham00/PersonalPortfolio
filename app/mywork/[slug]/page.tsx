"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, X } from 'lucide-react';

const projectDetails = {
  "institutional": {
    title: "BYU Student UI/UX Assistant",
    description: "Role: UI/UX Design Assistant.\n\nProject: Streamlining library resource accessibility through user-centered interface iterations.",
    gallery: [
      "/homepage.png", "/sketchbook.png", "/image3.png",
      "/image4.png", "/image5.png", "/image6.png",
      "/image7.png", "/image8.png", "/image9.png"
    ],
  },
  "case-studies": {
    title: "Personal Case Studies",
    description: "Focus: A deep dive into user behavior and pattern recognition within complex datasets.",
    gallery: ["/animal.png", "/code.png", "/image3.png", "/image4.png", "/image5.png", "/image6.png", "/image7.png", "/image8.png", "/image9.png"],
  },
  "creative-labs": {
    title: "Creative Works",
    description: "Images 1–3: Modeled in Maya and hand-textured using Substance Painter and Photoshop. This project helped me bridge the gap between 3D geometry and traditional painting, focusing on how light interacts with custom surfaces.\n\nImages 4–5: An action figure sculpted in Nomad (iPad). Creating this taught me how to manage 3D topology specifically for physical printing—making sure the joints and details actually hold up off-screen.\n\nImage 6: A Procreate painting focused on color and mood.\n\nImages 7–9: Sketchbook scans. These are my go-to for practicing fundamentals like anatomy and quick ideation away from the computer.",
    gallery: ["/FinalBuildingRender.jpg", "/FinalFairyRender.jpg", "/SpiderFinal1.jpg", "/Ethan .jpg", "/action.jpg", "/Artwork4.jpg","/Artwork1.jpg", "/Artwork2.jpg", "/Artwork3.jpg"],
  },
  "systems": {
    title: "Computer Systems",
    description: "Curriculum: A comprehensive look at the architecture and functionality of modern computing systems.",
    gallery: ["/code.png", "/homepage.png", "/image3.png", "/image4.png", "/image5.png", "/image6.png", "/image7.png", "/image8.png", "/image9.png"],
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
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
            onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImg} 
            alt="Enlarged view" 
            style={{ maxWidth: '95%', maxHeight: '95%', objectFit: 'contain', borderRadius: '4px' }} 
          />
        </div>
      )}

      <Link href="/mywork" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#8B735B', textDecoration: 'none', marginBottom: '40px', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '2px', fontWeight: '600' }}>
        <ChevronLeft size={16} /> Back to Work
      </Link>

      <section style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '42px', color: '#4A3728', textTransform: 'uppercase', marginBottom: '24px', fontWeight: '500' }}>
          {project.title}
        </h1>
        
        {/* Description Logic: Bold before colon + Newline support */}
        <div style={{ 
            fontSize: '18px', 
            lineHeight: '1.7', 
            color: '#4A3728', 
            marginBottom: '60px', 
            maxWidth: '800px',
            whiteSpace: 'pre-line' 
        }}>
          {project.description.split('\n\n').map((paragraph, index) => {
            if (paragraph.includes(':')) {
              const [title, details] = paragraph.split(':');
              return (
                <p key={index} style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ fontWeight: '700' }}>{title}:</strong>{details}
                </p>
              );
            }
            return <p key={index} style={{ marginBottom: '1.5rem' }}>{paragraph}</p>;
          })}
        </div>

        {/* 3x3 Forced Square Grid */}
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
                transition: 'transform 0.3s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
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