"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, X, ArrowUpRight } from 'lucide-react';

const projectDetails = {
  "institutional": {
    title: "BYU Student UI/UX Assistant",
    description: ` Links connect to figma prototypes.

Project 1, Images 1-2: BYU Library Homepage Redesign. A comprehensive overhaul of the library’s digital front door. This project involved rigorous user testing and iterative feedback sessions to ensure a seamless student experience. Currently awaiting development, the final design is slated for publication between semesters. [View Design](https://www.figma.com/design/woAQelHJLhUJxk6tFePeIJ/Home-Page-Redesign---Abigail-Preece?node-id=0-1&t=86Q32dDcYzJ2z7yY-1)

Project 2, Images 3-5: Holdings Section Accessibility Update. Redesigning the Holdings section required balancing complex data with intuitive accessibility. Through extensive troubleshooting and collaborative reviews with management, I simplified the information architecture to make resource tracking clearer for all users. [View Design](https://www.figma.com/design/GSXB017KhgQwZL5UBI78iv/Holdings-Redesign?node-id=0-1&t=86Q32dDcYzJ2z7yY-1)

Project 3, Images 6-10: In-Card Citation Tool. Designed a high-fidelity prototype for a new feature allowing students to generate citations directly from a resource card. This project served as a deep dive into Figma’s advanced prototyping capabilities to solve a common student pain point. [View Design](https://www.figma.com/design/dk3T1CAHNUbbH3xMTYxXg1/Citation-URL?t=86Q32dDcYzJ2z7yY-1)

Project 4, Images 11-12: Search Landing Page Refresh. A streamlined update focused on modernizing an aging interface. This project involved adding key navigation links and collaborating closely with our team writer to refine the copy for better user clarity. [View Design](https://www.figma.com/design/Ba3Jr8fO6BwpmYPZgr8tCe/SS-Landing-Page?t=86Q32dDcYzJ2z7yY-1)`,
    gallery: [
      "/HomePagefinal.png", "/Hi Def 3.png", "/Holdings2.png",
      "/Holdings4.png", "/Holdings.png", "/Holdings5.png",
      "/Citation1.png", "/Citation2.png", "/citation.png",
      "/Citation4.png", "/SearchPage1.jpeg", "/searchpage.png"
    ],
  },
  // ... other project objects remain same
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = projectDetails[slug as keyof typeof projectDetails];
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  if (!project) return <div style={{ padding: '100px', textAlign: 'center' }}>Project not found.</div>;

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '40px 5%' }}>
      {/* Lightbox */}
      {selectedImg && (
        <div onClick={() => setSelectedImg(null)} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out', padding: '20px' }}>
          <button style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }} onClick={() => setSelectedImg(null)}><X size={40} /></button>
          <img src={selectedImg} alt="Enlarged" style={{ maxWidth: '95%', maxHeight: '95%', objectFit: 'contain' }} />
        </div>
      )}

      <Link href="/mywork" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#8B735B', textDecoration: 'none', marginBottom: '40px', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '2px', fontWeight: '600' }}>
        <ChevronLeft size={16} /> Back to Work
      </Link>

      <section style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '42px', color: '#4A3728', textTransform: 'uppercase', marginBottom: '24px', fontWeight: '500' }}>{project.title}</h1>
        
        <div style={{ fontSize: '17px', lineHeight: '1.6', color: '#4A3728', marginBottom: '60px', maxWidth: '850px' }}>
          {project.description.split('\n\n').map((paragraph, index) => {
            const linkRegex = /\[(.*?)\]\((.*?)\)/;
            const match = paragraph.match(linkRegex);
            
            let textContent = paragraph;
            let linkElement = null;

            if (match) {
              const [fullMatch, label, url] = match;
              textContent = paragraph.replace(fullMatch, "");
              linkElement = (
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#8B735B', textDecoration: 'underline', fontWeight: '600', marginLeft: '6px', display: 'inline-flex', alignItems: 'center', gap: '2px' }}
                >
                  {label} <ArrowUpRight size={14} />
                </a>
              );
            }

            const hasColon = textContent.includes(':');
            const [title, details] = hasColon ? textContent.split(':') : [null, textContent];

            return (
              <p key={index} style={{ marginBottom: '1.5rem' }}>
                {title && <strong style={{ fontWeight: '700' }}>{title}:</strong>}
                {details}
                {linkElement}
              </p>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {project.gallery.map((img, idx) => (
            <div key={idx} onClick={() => setSelectedImg(img)} style={{ width: '100%', aspectRatio: '1/1', backgroundColor: '#f9f9f9', cursor: 'zoom-in', overflow: 'hidden' }}>
              <img src={img} alt="Gallery item" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}