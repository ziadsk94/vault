'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Context() {
  const spread1Ref = useRef<HTMLDivElement>(null)
  const spread2Ref = useRef<HTMLDivElement>(null)
  const [spread1Progress, setSpread1Progress] = useState(0)
  const [spread2Progress, setSpread2Progress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Spread 1
      if (spread1Ref.current) {
        const rect = spread1Ref.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.8)))
        setSpread1Progress(progress)
      }

      // Spread 2
      if (spread2Ref.current) {
        const rect = spread2Ref.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.8)))
        setSpread2Progress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative bg-[#F7F5F2] py-32 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-0">
        
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-32">
          <h2 
            className="text-[50px] md:text-[80px] lg:text-[100px] leading-[0.95] text-[#332D2A]"
            style={{ fontFamily: 'var(--font-ogg-display)' }}
          >
            From Atelier to Analytics.
          </h2>
        </div>

        {/* Desktop/Tablet - Editorial Spreads */}
        <div className="hidden md:block space-y-32">
          
          {/* Spread 1: Fabric & Fit */}
          <div ref={spread1Ref} className="grid grid-cols-2 gap-12">
            {/* Left Column - Luxury Image */}
            <div 
              className="relative overflow-hidden"
              style={{
                transform: `translateY(${-spread1Progress * 20}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div 
                className="aspect-[4/5] overflow-hidden relative"
                style={{
                  clipPath: `inset(0 0 ${(1 - spread1Progress) * 100}% 0)`,
                  transition: 'clip-path 1.2s ease-out'
                }}
              >
                <Image
                  src="/assets/images/68acdc146960375eb18b69b0_IMG_8756.jpg"
                  alt="Pleated sculptural garment detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#332D2A]/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white/90 text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>
                  Structure & Form
                </div>
              </div>
            </div>

            {/* Right Column - Technology UI */}
            <div 
              className="flex items-center"
              style={{
                opacity: spread1Progress > 0.3 ? spread1Progress : 0,
                transform: `translateY(${(1 - spread1Progress) * 60}px)`,
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
              }}
            >
              <div className="w-full bg-white border border-[#EAE3DB] rounded-lg p-8 shadow-sm">
                <h3 className="text-lg uppercase tracking-wider text-[#332D2A] mb-6" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 600 }}>
                  Calibrated Fit & Material Guidance
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Fabric</div>
                    <div className="text-base text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Chiffon/Pleated Fabric with Layered Construction</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Structure</div>
                    <div className="text-base text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Dramatic Volume, Architectural Silhouette</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Special Details</div>
                    <div className="text-base text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Fan Pleats, Ruffles, Tiered Layers</div>
                  </div>
                  <div className="pt-4 border-t border-[#EAE3DB]">
                    <div className="text-xs uppercase tracking-wide text-[#C07A56] mb-1" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>Stylist Note</div>
                    <div className="text-base text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Requires space-conscious storage. Best for architectural silhouettes.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caption 1 */}
          <p 
            className="text-center text-lg text-[#332D2A] max-w-2xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: 'var(--font-switzer)',
              opacity: spread1Progress > 0.6 ? 1 : 0,
              transition: 'opacity 0.8s ease-out'
            }}
          >
            Translate craftsmanship into confidence. Ensure every piece is presented with the precision it deserves.
          </p>

          {/* Spread 2: Silhouette & Taste */}
          <div ref={spread2Ref} className="grid grid-cols-2 gap-12">
            {/* Left Column - Luxury Image */}
            <div 
              className="relative overflow-hidden"
              style={{
                transform: `translateY(${-spread2Progress * 20}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div 
                className="aspect-[4/5] overflow-hidden relative"
                style={{
                  clipPath: `inset(0 0 ${(1 - spread2Progress) * 100}% 0)`,
                  transition: 'clip-path 1.2s ease-out'
                }}
              >
                <Image
                  src="/assets/images/68acdc1488cc81d5b8d80dba_IMG_8759.jpg"
                  alt="Elegant boutique interior with curated garments"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#332D2A]/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white/90 text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>
                  Curated Selection
                </div>
              </div>
            </div>

            {/* Right Column - Technology UI */}
            <div 
              className="flex items-center"
              style={{
                opacity: spread2Progress > 0.3 ? spread2Progress : 0,
                transform: `translateY(${(1 - spread2Progress) * 60}px)`,
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
              }}
            >
              <div className="w-full bg-white border border-[#EAE3DB] rounded-lg p-8 shadow-sm">
                <h3 className="text-lg uppercase tracking-wider text-[#332D2A] mb-6" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 600 }}>
                  Curated Intelligence
                </h3>
                <div className="space-y-6">
                  {/* Radar Chart Visualization */}
                  <div className="relative aspect-square max-w-[200px]">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      {/* Radial lines */}
                      <line x1="100" y1="100" x2="100" y2="20" stroke="#EAE3DB" strokeWidth="1"/>
                      <line x1="100" y1="100" x2="177" y2="85" stroke="#EAE3DB" strokeWidth="1"/>
                      <line x1="100" y1="100" x2="100" y2="180" stroke="#EAE3DB" strokeWidth="1"/>
                      <line x1="100" y1="100" x2="23" y2="115" stroke="#EAE3DB" strokeWidth="1"/>
                      {/* Area shape */}
                      <polygon 
                        points="100,60 140,90 100,100 60,90" 
                        fill="#C07A56" 
                        fillOpacity="0.1"
                        stroke="#C07A56"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Collection</div>
                      <div className="text-base text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Sophisticated, Monochromatic</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Design Elements</div>
                      <div className="text-base text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Double-Breasted, Structured</div>
                    </div>
                    <div className="pt-2">
                      <div className="text-xs uppercase tracking-wide text-[#C07A56]" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>Match Score: 94%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caption 2 */}
          <p 
            className="text-center text-lg text-[#332D2A] max-w-2xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: 'var(--font-switzer)',
              opacity: spread2Progress > 0.6 ? 1 : 0,
              transition: 'opacity 0.8s ease-out'
            }}
          >
            Connect the editorial vision to the individual client. Turn high-level trends into personal, predictive recommendations.
          </p>
        </div>

        {/* Mobile - Vertical Diptych */}
        <div className="md:hidden space-y-20">
          
          {/* Spread 1: Fabric & Fit */}
          <div ref={spread1Ref}>
            {/* Luxury Image - Full Width */}
            <div className="relative aspect-[4/5] mb-6 -mx-6 overflow-hidden">
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: `inset(0 0 ${(1 - spread1Progress) * 100}% 0)`,
                  transition: 'clip-path 1.2s ease-out'
                }}
              >
                <Image
                  src="/assets/images/68acdc146960375eb18b69b0_IMG_8756.jpg"
                  alt="Pleated sculptural garment detail"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#332D2A]/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white/90 text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>
                  Structure & Form
                </div>
              </div>
            </div>

            {/* Technology UI - Full Width */}
            <div 
              className="bg-white border border-[#EAE3DB] rounded-lg p-6 mb-6"
              style={{
                opacity: spread1Progress > 0.5 ? 1 : 0,
                transform: `translateY(${(1 - Math.max(0, spread1Progress - 0.2)) * 40}px)`,
                clipPath: spread1Progress > 0.2 ? `inset(0 0 ${(1 - spread1Progress) * 100}% 0)` : 'inset(0 0 100% 0)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out, clip-path 0.8s ease-out'
              }}
            >
              <h3 className="text-base uppercase tracking-wider text-[#332D2A] mb-4" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 600 }}>
                Calibrated Fit & Material Guidance
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Fabric</div>
                  <div className="text-sm text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Chiffon/Pleated Fabric with Layered Construction</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Structure</div>
                  <div className="text-sm text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Dramatic Volume, Architectural Silhouette</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Special Details</div>
                  <div className="text-sm text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Fan Pleats, Ruffles, Tiered Layers</div>
                </div>
                <div className="pt-3 border-t border-[#EAE3DB]">
                  <div className="text-xs uppercase tracking-wide text-[#C07A56] mb-1" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>Stylist Note</div>
                  <div className="text-sm text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Requires space-conscious storage. Best for architectural silhouettes.</div>
                </div>
              </div>
            </div>

            {/* Caption */}
            <p 
              className="text-center text-base text-[#332D2A] leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-switzer)',
                opacity: spread1Progress > 0.7 ? 1 : 0,
                transition: 'opacity 0.8s ease-out'
              }}
            >
              Translate craftsmanship into confidence. Ensure every piece is presented with the precision it deserves.
            </p>
          </div>

          {/* Spread 2: Silhouette & Taste */}
          <div ref={spread2Ref}>
            {/* Luxury Image - Full Width */}
            <div className="relative aspect-[4/5] mb-6 -mx-6 overflow-hidden">
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: `inset(0 0 ${(1 - spread2Progress) * 100}% 0)`,
                  transition: 'clip-path 1.2s ease-out'
                }}
              >
                <Image
                  src="/assets/images/68acdc1488cc81d5b8d80dba_IMG_8759.jpg"
                  alt="Elegant boutique interior with curated garments"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#332D2A]/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white/90 text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>
                  Curated Selection
                </div>
              </div>
            </div>

            {/* Technology UI - Full Width */}
            <div 
              className="bg-white border border-[#EAE3DB] rounded-lg p-6 mb-6"
              style={{
                opacity: spread2Progress > 0.5 ? 1 : 0,
                transform: `translateY(${(1 - Math.max(0, spread2Progress - 0.2)) * 40}px)`,
                clipPath: spread2Progress > 0.2 ? `inset(0 0 ${(1 - spread2Progress) * 100}% 0)` : 'inset(0 0 100% 0)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out, clip-path 0.8s ease-out'
              }}
            >
              <h3 className="text-base uppercase tracking-wider text-[#332D2A] mb-4" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 600 }}>
                Curated Intelligence
              </h3>
              <div className="space-y-4">
                {/* Radar Chart Visualization */}
                <div className="relative aspect-square max-w-[120px] mx-auto">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <line x1="100" y1="100" x2="100" y2="20" stroke="#EAE3DB" strokeWidth="1"/>
                    <line x1="100" y1="100" x2="177" y2="85" stroke="#EAE3DB" strokeWidth="1"/>
                    <line x1="100" y1="100" x2="100" y2="180" stroke="#EAE3DB" strokeWidth="1"/>
                    <line x1="100" y1="100" x2="23" y2="115" stroke="#EAE3DB" strokeWidth="1"/>
                    <polygon 
                      points="100,60 140,90 100,100 60,90" 
                      fill="#C07A56" 
                      fillOpacity="0.1"
                      stroke="#C07A56"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Collection</div>
                    <div className="text-sm text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Sophisticated, Monochromatic</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-[#332D2A]/60 mb-1" style={{ fontFamily: 'var(--font-switzer)' }}>Design Elements</div>
                    <div className="text-sm text-[#332D2A]" style={{ fontFamily: 'var(--font-switzer)' }}>Double-Breasted, Structured</div>
                  </div>
                  <div className="pt-2">
                    <div className="text-xs uppercase tracking-wide text-[#C07A56]" style={{ fontFamily: 'var(--font-switzer)', fontWeight: 500 }}>Match Score: 94%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caption */}
            <p 
              className="text-center text-base text-[#332D2A] leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-switzer)',
                opacity: spread2Progress > 0.7 ? 1 : 0,
                transition: 'opacity 0.8s ease-out'
              }}
            >
              Connect the editorial vision to the individual client. Turn high-level trends into personal, predictive recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

