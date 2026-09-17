"use client";

import React, { useState, useEffect } from 'react';
import { productsData } from '@/content/products';
import Link from 'next/link';
import { EngineIcon, CognitiveIcon, CustomWorkflowsIcon, BuildIcon } from './ProductIcons';
import './ProductAtlas.css';

type RegionId = 'engine' | 'cognitive' | 'custom' | 'build';
const REGION_IDS: RegionId[] = ['engine', 'cognitive', 'custom', 'build'];

export function ProductAtlas() {
  const [hoveredProduct, setHoveredProduct] = useState<RegionId | null>(null);
  const [detailProduct, setDetailProduct] = useState<RegionId>('engine');
  
  const [isLocked, setIsLocked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleProductHover = (newId: RegionId) => {
    if (isMobile || isLocked) return;
    setHoveredProduct(newId);
    setDetailProduct(newId);
  };

  const handleAtlasLeave = () => {
    if (isMobile || isLocked) return;
    setHoveredProduct(null);
  };

  const handleInteraction = (id: RegionId, type: 'click' | 'focus') => {
    if (type === 'focus') handleProductHover(id);
    if (type === 'click') {
      setIsLocked(true);
      setHoveredProduct(id);
      setDetailProduct(id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: RegionId) => {
    if (e.key === 'Enter') handleInteraction(id, 'click');
    if (e.key === 'Escape') {
      setIsLocked(false);
      handleAtlasLeave();
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      handleProductHover(REGION_IDS[(REGION_IDS.indexOf(id) + 1) % REGION_IDS.length]);
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      handleProductHover(REGION_IDS[(REGION_IDS.indexOf(id) - 1 + REGION_IDS.length) % REGION_IDS.length]);
    }
  };

  const activeProductData = productsData.find(p => p.id === detailProduct)!;

  // Grid Track Logic
  let leftTrack = '50%', rightTrack = '50%', topTrack = '50%', bottomTrack = '50%';
  if (hoveredProduct === 'engine') {
    leftTrack = '64%'; rightTrack = '36%'; topTrack = '64%'; bottomTrack = '36%';
  } else if (hoveredProduct === 'cognitive') {
    leftTrack = '36%'; rightTrack = '64%'; topTrack = '64%'; bottomTrack = '36%';
  } else if (hoveredProduct === 'custom') {
    leftTrack = '64%'; rightTrack = '36%'; topTrack = '36%'; bottomTrack = '64%';
  } else if (hoveredProduct === 'build') {
    leftTrack = '36%'; rightTrack = '64%'; topTrack = '36%'; bottomTrack = '64%';
  }

  const renderIcon = (id: RegionId, isActive: boolean) => {
    // Theme contexts for icons based on panel states (active panels are dark carbon, inactive are white/dimmed paper)
    const themeContext = isActive ? 'dark' : 'light';
    switch (id) {
      case 'engine': return <EngineIcon isActive={isActive} themeContext={themeContext} />;
      case 'cognitive': return <CognitiveIcon isActive={isActive} themeContext={themeContext} />;
      case 'custom': return <CustomWorkflowsIcon isActive={isActive} themeContext={themeContext} />;
      case 'build': return <BuildIcon isActive={isActive} themeContext={themeContext} />;
      default: return null;
    }
  };

  return (
    <section className="productsSection relative" style={{ overflow: 'clip' }}>
      {/* Refinement 09: Subtle orange wash near one outer corner */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none"
        style={{ background: 'var(--ax-gradient-light)', opacity: 0.6, transform: 'translate(20%, -20%)' }}
      />
      <div className="productsInner relative z-10">
        
        {/* Row 1: Introduction */}
        <div className="productsIntroduction">
          <div className="productsIntroLabel">PRODUCTS AND SOLUTIONS</div>
          <h2 className="productsIntroHeading">One Engine. Four ways to put it to work.</h2>
          <p className="productsIntroCopy">
            Alter Engine is the foundation. Use it directly, apply it to inventory operations, shape it around an enterprise process or bring it into an existing product.
          </p>
        </div>

        {/* Row 2: Atlas Field */}
        <div className="productAtlas">
          <div 
            className="productInteractionField"
            onPointerLeave={handleAtlasLeave}
            style={!isMobile ? {
              '--left-track': leftTrack,
              '--right-track': rightTrack,
              '--top-track': topTrack,
              '--bottom-track': bottomTrack,
            } as React.CSSProperties : {}}
          >
            {REGION_IDS.map((id) => {
              const isActive = hoveredProduct === id;
              const isDimmed = hoveredProduct !== null && !isActive;
              const state = isActive ? 'active' : (isDimmed ? 'dimmed' : 'neutral');
              const product = productsData.find(p => p.id === id)!;
              
              return (
                <div
                  key={id}
                  className="productRegionBackground"
                  data-state={state}
                  onPointerEnter={() => handleProductHover(id)}
                  onFocus={() => handleInteraction(id, 'focus')}
                  onClick={() => handleInteraction(id, 'click')}
                  onKeyDown={(e) => handleKeyDown(e, id)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isActive}
                  aria-label={`Select ${product.title}`}
                >
                  <div className="productRegionContent">
                    <span className="productCategory">{product.category}</span>
                    <h3 className="productTitle">{product.title}</h3>
                    
                    <div className="productRegionExpandedContent">
                      <div>
                        <p className="productDescription">{product.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="productIconStage">
                    {renderIcon(id, isActive)}
                  </div>

                  {isMobile && isActive && (
                    <div className="w-full mt-8 bg-ax-paper border border-[rgba(9,9,9,0.06)] p-6 md:p-8 rounded-[4px] flex flex-col gap-8">
                       <div>
                         <h4 className="text-[20px] font-medium text-ax-ink mb-3">{product.detailTitle}</h4>
                         <p className="text-[16px] text-ax-ink/70">{product.detailExplanation}</p>
                       </div>
                       <ul className="flex flex-col gap-6 border-t border-[rgba(9,9,9,0.06)] pt-6">
                         {product.detailRows.map((row, i) => (
                           <li key={i} className="flex flex-col gap-1">
                             <div className="text-[11px] font-semibold uppercase tracking-widest text-ax-ink mb-1">{row.label}</div>
                             <div className="text-[15px] text-ax-ink/70">{row.text}</div>
                           </li>
                         ))}
                       </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 3: Desktop Detail Area */}
        {!isMobile && (
          <div className="activeProductDetail transition-opacity duration-200">
            {/* 1. Title & Explanation */}
            <div className="detailCol detailColIntro">
              <h2 className="detailTitle">{activeProductData.detailTitle}</h2>
              <p className="detailExplanation">{activeProductData.detailExplanation}</p>
            </div>
            
            {/* 2-4. Behavior Rows */}
            {activeProductData.detailRows.map((row, i) => (
              <div key={i} className="detailCol detailColRow">
                <h4 className="detailRowLabel mb-1.5">{row.label}</h4>
                <p className="detailRowText">{row.text}</p>
              </div>
            ))}
            
            {/* 5. CTA */}
            <div className="detailCol detailColCTA items-end justify-center pl-2">
              <div className="flex flex-col items-end gap-3 w-full">
                <Link href={activeProductData.ctaHref} className="productCTA inline-flex h-[42px] items-center justify-center rounded-[4px] px-6 transition-colors shadow-none whitespace-nowrap bg-ax-orange text-ax-ink hover:bg-ax-orange-bright">
                  {activeProductData.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
