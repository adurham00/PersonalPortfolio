"use client";

import React from 'react';
import Link from 'next/link';
import { Download, ArrowLeft, Mail } from 'lucide-react';

export default function ResumePage() {
  return (
    <main className="resume-wrapper" style={{ backgroundColor: '#fff', minHeight: '100vh' }}>

      <section style={{ maxWidth: '900px', width: '90%', margin: '0 auto', padding: '80px 0' }}>
        <header style={{ marginBottom: '60px' }}>
          <h1 style={{ 
            fontSize: 'clamp(30px, 10vw, 50px)', 
            fontWeight: '400',
            textTransform: 'uppercase', 
            letterSpacing: '-1px',
            lineHeight: '1',
            margin: 0,
            color: '#4A3728',
          }}>
            Credentials
          </h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <p style={{ opacity: 0.5, marginTop: '10px', fontSize: '14px', letterSpacing: '1px', margin: 0 }}>
              Seeking Internship Opportunities 
            </p>
          </div>
        </header>

        {/* Resume PDF Viewer Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600', margin: 0 }}>
              Download My Resume
            </h2>
            <a 
              href="/DurhamAbigailResume.pdf" 
              download 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                fontSize: '11px', 
                textDecoration: 'none', 
                color: '#000',
                border: '1px solid #000',
                padding: '8px 15px',
                borderRadius: '20px',
                transition: 'all 0.2s ease'
              }}
            >
              Download PDF <Download size={14} />
            </a>
          </div>
          
          {/* PDF Preview */}
          <div style={{ 
            width: '100%', 
            height: '800px', 
            backgroundColor: '#f5f5f5', 
            borderRadius: '8px', 
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)' 
          }}>
            <iframe 
              src="/DurhamAbigailResume.pdf#toolbar=0" 
              width="100%" 
              height="100%" 
              style={{ border: 'none' }}
            />
          </div>
        </div>

        {/* Bottom Back Link */}
        <div style={{ marginTop: '100px', borderTop: '1px solid #eee', paddingTop: '40px' }}>
          <Link href="/mywork" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '10px', 
            textDecoration: 'none', 
            color: '#000',
            opacity: 0.6,
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </section>
    </main>
  );
}