"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, X, ArrowUpRight } from 'lucide-react';

// 1. Define the types for your projects
interface Project {
  title: string;
  description: string;
  gallery: string[];
}

const projectDetails: Record<string, Project> = {
  "institutional": {
    title: "BYU Student UI/UX Assistant",
    description: `Links connect to figma prototypes.

Project 1, Images 1-2: BYU Library Homepage Redesign. A comprehensive overhaul of the library’s digital front door. This project involved rigorous user testing and iterative feedback sessions to ensure a seamless student experience. Currently awaiting development, the final design is slated for publication between semesters. [View Design](https://www.figma.com/design/woAQelHJLhUJxk6tFePeIJ/Home-Page-Redesign---Abigail-Preece?node-id=0-1&t=86Q32dDcYzJ2z7yY-1)

Project 2, Images 3-6: Holdings Section Accessibility Update. Redesigning the Holdings section required balancing complex data with intuitive accessibility. Through extensive troubleshooting and collaborative reviews with management, I simplified the information architecture to make resource tracking clearer for all users. [View Design](https://www.figma.com/design/GSXB017KhgQwZL5UBI78iv/Holdings-Redesign?node-id=0-1&t=86Q32dDcYzJ2z7yY-1)

Project 3, Images 7-10: In-Card Citation Tool. Designed a high-fidelity prototype for a new feature allowing students to generate citations directly from a resource card. This project served as a deep dive into Figma’s advanced prototyping capabilities to solve a common student pain point. [View Design](https://www.figma.com/design/dk3T1CAHNUbbH3xMTYxXg1/Citation-URL?t=86Q32dDcYzJ2z7yY-1)

Project 4, Images 11-12: Search Landing Page Refresh. A streamlined update focused on modernizing an aging interface. This project involved adding key navigation links and collaborating closely with our team writer to refine the copy for better user clarity. [View Design](https://www.figma.com/design/Ba3Jr8fO6BwpmYPZgr8tCe/SS-Landing-Page?t=86Q32dDcYzJ2z7yY-1)`,
    gallery: [
      "/HomePagefinal.png", "/Hi Def 3.png", "/Holdings2.png",
      "/Holdings4.png", "/Holdings.png", "/Holdings5.png",
      "/Citation1.png", "/Citation2.png", "/citation.png",
      "/Citation4.png", "/SearchPage1.jpeg", "/searchpage.png"
    ],
  },
  "case-studies": {
    title: "Personal Case Studies",
    description: `Project 1, Images 1-3: Animal Shelter Collaborative Redesign. A group project from my HCI course that served as my introduction to UX research, Figma, and professional collaboration. We focused on restructuring the shelter's information architecture to improve adoption rates. [View Group Project](https://www.figma.com/design/hlxXUb4eF3GhTK0Ph0mQbV/Group-7-SUVAS?node-id=0-1&t=GWHbIO5XCWHh8l4v-1)

Project 2, Images 4-6: Local Shelter Personal Redesign. A solo follow-up exploring a more modern aesthetic for the same shelter. While this is an older project, it represents my desire to bridge the gap between student work and community impact; I plan to eventually reach out to the shelter to offer these updates as a pro-bono contribution. [View Personal Redesign](https://www.figma.com/design/be6nqhxx9VH7hQoW3hirfI/LOFI-HOME-PAGE-DESIGN?t=HOVV0cebG9iV7lBB-1)`,
    gallery: ["/shelter3.png", "/shelter1.png", "/shelter4.png", "/shelter6.png", "/Donate.png", "/More.png"],
  },
  "creative-labs": {
    title: "Creative Works",
    description: `Images 1-3: 3D Modeling & Texturing. Modeled in Maya and hand-textured using Substance Painter and Photoshop. This project helped me bridge the gap between 3D geometry and traditional painting, focusing on how light interacts with custom surfaces.

Images 4-5: Character Sculpture. An action figure sculpted in Nomad (iPad). Creating this taught me how to manage 3D topology specifically for physical printing—making sure the joints and details actually hold up off-screen.

Image 6: Digital Illustration. A Procreate painting focused on color and mood.

Images 7-9: Traditional Sketchbook. These are my go-to for practicing fundamentals like anatomy and quick ideation away from the computer.`,
    gallery: ["/FinalBuildingRender.jpg", "/FinalFairyRender.jpg", "/SpiderFinal1.jpg", "/Ethan .jpg", "/action.jpg", "/Artwork4.jpg", "/Artwork1.jpg", "/Artwork2.jpg", "/Artwork3.jpg"],
  },
  "systems": {
    title: "Computer Systems",
    description: `Curriculum: A comprehensive look at the architecture and functionality of modern computing systems. This includes a deep dive into user behavior and pattern recognition within complex datasets.`,
    gallery: ["/chess1.png", "/chess3.png", "/chess5.png", "/image4.png", "/image5.png", "/image6.png", "/image7.png", "/image8.png", "/image9.png"],
  },
};

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  // Handle the async params for Next.js 15 compatibility
  const resolvedParams = params instanceof Promise ? React.use(params) : params;
  const slug = resolvedParams.slug;
  
  const project = projectDetails[slug];
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  if (!project) return <div style={{ padding: '100px', textAlign: 'center' }}>Project not found.</div>;

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '40px 5%' }}>
      <style jsx global>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .gallery-item {
          width: 100%;
          aspect-ratio: 1/1;
          background-color: #f9f9f9;
          cursor: zoom-in;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .gallery-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }
      `}</style>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          onClick={() => setSelectedImg(null)} 
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out', padding: '20px' }}
        >
          <button style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }} onClick={() => setSelectedImg(null)}><X size={40} /></button>
          <img src={selectedImg} alt="Enlarged view" style={{ maxWidth: '95%', maxHeight: '95%', objectFit: 'contain' }} />
        </div>
      )}

      <Link href="/mywork" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#8B735B', textDecoration: 'none', marginBottom: '40px', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '2px', fontWeight: '600' }}>
        <ChevronLeft size={16} /> Back to Work
      </Link>

      <section style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 42px)', color: '#4A3728', textTransform: 'uppercase', marginBottom: '24px', fontWeight: '500' }}>{project.title}</h1>
        
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
                  style={{ color: '#8B735B', textDecoration: 'underline', fontWeight: '600', marginLeft: '4px', display: 'inline-flex', alignItems: 'center', gap: '2px' }}
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

        <div className="gallery-grid">
          {project.gallery.map((img, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedImg(img)} 
              className="gallery-item"
            >
              <img src={img} alt={`Gallery item ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}