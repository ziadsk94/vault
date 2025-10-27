'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ResultsPage() {
  const [hasAnimated, setHasAnimated] = useState<{[key: number]: boolean}>({})
  const [hoveredCase, setHoveredCase] = useState<number | null>(null)

  const executiveMetrics = [
    {
      number: '+30%',
      context: 'Average Reduction in Markdowns',
      explanation: 'By predicting sell-through and optimizing inventory, Vault protects margins and preserves brand integrity.'
    },
    {
      number: '2.5x',
      context: 'Increase in Remote Sales',
      explanation: 'Associates equipped with one-tap client lists close more deals outside the store, expanding your geographical reach.'
    },
    {
      number: '85%',
      context: 'Improvement in Inventory Turn',
      explanation: 'Predictive demand signals ensure the right product reaches the right client at the right time, minimizing dead stock.'
    }
  ]

  const caseStudies = [
    {
      number: 1,
      category: 'DEPARTMENT STORE',
      title: 'How a Major Retailer Unified Inventory to Drive 95% Sell-Through.',
      metric: '+95%',
      metricLabel: 'Full-Price Sell-Through',
      hoverImage: '/assets/images/68acdc146960375eb18b69b0_IMG_8756.jpg',
      href: '/case-study/department-store'
    },
    {
      number: 2,
      category: 'LUXURY BOUTIQUE',
      title: 'Predictive Merchandising Delivers +40% Margin Protection.',
      metric: '+40%',
      metricLabel: 'Margin Improvement',
      hoverImage: '/assets/images/68acdc1488cc81d5b8d80dba_IMG_8759.jpg',
      href: '/case-study/luxury-boutique'
    },
    {
      number: 3,
      category: 'RETAIL CHAIN',
      title: 'Cross-Location Visibility Increases Sell-Through by 60%.',
      metric: '+60%',
      metricLabel: 'Sell-Through Rate',
      hoverImage: '/assets/images/68acdbeab43201c94bbf5ed3_IMG_8758.jpg',
      href: '/case-study/retail-chain'
    }
  ]

  const testimonial = {
    quote: 'Vault is the first tool that speaks the language of both our merchants and our stylists. It is our new source of truth.',
    attribution: 'CEO, Major Luxury Department Store'
  }

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768
      
      executiveMetrics.forEach((metric, index) => {
        if (hasAnimated[index]) return
        
        const element = document.getElementById(isMobile ? `metric-mobile-${index}` : `metric-${index}`)
        if (element) {
          const rect = element.getBoundingClientRect()
          const windowHeight = window.innerHeight
          
          if (rect.top < windowHeight && rect.bottom > 0 && rect.width > 0) {
            setHasAnimated(prev => ({ ...prev, [index]: true }))
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasAnimated, executiveMetrics])

  return (
    <main className="bg-[#F7F5F2]">
      {/* Hero Section */}
      <section className="relative bg-[#F7F5F2] py-32 md:py-40">
        <div className="max-w-6xl mx-auto px-6 xl:px-0 text-center">
          
          {/* Headline */}
          <h1 
            className="text-[60px] md:text-[80px] lg:text-[100px] leading-[0.95] text-[#332D2A] mb-6"
            style={{ fontFamily: 'var(--font-ogg-display)' }}
          >
            Proof. Not Promises.
          </h1>

          {/* Sub-headline */}
          <p 
            className="text-[#332D2A] leading-relaxed max-w-3xl mx-auto mb-12"
            style={{ 
              fontFamily: 'var(--font-switzer)',
              fontSize: '20px'
            }}
          >
            We provide the intelligence infrastructure for measurable results. Explore our findings from leaders in luxury retail.
          </p>

          {/* Divider */}
          <div className="h-[1px] bg-[#EAE3DB] max-w-2xl mx-auto"></div>
        </div>
      </section>

      {/* Executive Summary - Key Metrics */}
      <section className="relative bg-[#F7F5F2] py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6 xl:px-0">
          
          {/* Desktop/Tablet - 3 Column Grid */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-12">
            {executiveMetrics.map((metric, index) => (
              <div key={index} className="text-center space-y-6">
                
                {/* The Data */}
                <div 
                  id={`metric-${index}`}
                  className="text-[120px] font-normal text-[#C07A56]"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  <MetricNumber 
                    value={metric.number}
                    hasAnimated={hasAnimated[index] || false}
                  />
                </div>

                {/* The Context */}
                <h3 
                  className="font-semibold text-[#332D2A]"
                  style={{ 
                    fontFamily: 'var(--font-switzer)',
                    fontSize: '24px'
                  }}
                >
                  {metric.context}
                </h3>

                {/* The Explanation */}
                <p 
                  className="text-[#332D2A] leading-relaxed"
                  style={{ 
                    fontFamily: 'var(--font-switzer)',
                    fontSize: '18px'
                  }}
                >
                  {metric.explanation}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile - Stacked */}
          <div className="md:hidden space-y-16">
            {executiveMetrics.map((metric, index) => (
              <div key={index} className="text-center space-y-6">
                
                {/* The Data */}
                <div 
                  id={`metric-mobile-${index}`}
                  className="text-7xl font-normal text-[#C07A56]"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  <MetricNumber 
                    value={metric.number}
                    hasAnimated={hasAnimated[index] || false}
                  />
                </div>

                {/* The Context */}
                <h3 
                  className="text-2xl font-semibold text-[#332D2A]"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  {metric.context}
                </h3>

                {/* The Explanation */}
                <p 
                  className="text-base text-[#332D2A] leading-relaxed"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  {metric.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Reports - Case Study Index */}
      <section className="relative bg-[#F7F5F2] py-20">
        <div className="max-w-7xl mx-auto px-6 xl:px-0">
          
          {/* Desktop/Tablet - Ledger Layout */}
          <div className="hidden md:block space-y-0">
            {caseStudies.map((study, index) => (
              <Link
                key={index}
                href={study.href}
                className="relative border-t border-[#EAE3DB] py-12 group cursor-pointer block"
                onMouseEnter={() => setHoveredCase(index)}
                onMouseLeave={() => setHoveredCase(null)}
              >
                {/* Hover Background Image */}
                {hoveredCase === index && (
                  <div className="absolute inset-0 opacity-[0.03] transition-opacity duration-500 pointer-events-none overflow-hidden">
                    <Image
                      src={study.hoverImage}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                )}

                {/* Content Grid */}
                <div className="relative grid grid-cols-10 gap-8 items-center">
                  
                  {/* Column 1: Category (10%) */}
                  <div className="col-span-1">
                    <div 
                      className="text-[#C07A56] mb-1"
                      style={{ fontFamily: 'var(--font-switzer)', fontWeight: 600 }}
                    >
                      {String(study.number).padStart(2, '0')}.
                    </div>
                    <div 
                      className="text-[#332D2A]"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontSize: '14px',
                        letterSpacing: '0.1em'
                      }}
                    >
                      {study.category}
                    </div>
                  </div>

                  {/* Column 2: Title (50%) */}
                  <div className="col-span-5">
                    <h2 
                      className="text-[40px] leading-tight text-[#332D2A] relative inline-block"
                      style={{ fontFamily: 'var(--font-ogg-display)' }}
                    >
                      {study.title}
                      <span 
                        className={`absolute bottom-0 left-1/2 h-[2px] bg-[#C07A56] transition-all duration-500 ${
                          hoveredCase === index ? 'w-full left-0' : 'w-0'
                        }`}
                      />
                    </h2>
                  </div>

                  {/* Column 3: Key Metric (20%) */}
                  <div className="col-span-2 text-center">
                    <div 
                      className="text-[40px] font-normal text-[#332D2A] mb-1"
                      style={{ fontFamily: 'var(--font-switzer)' }}
                    >
                      {study.metric}
                    </div>
                    <div 
                      className="text-[14px] text-[#332D2A]"
                      style={{ fontFamily: 'var(--font-switzer)' }}
                    >
                      {study.metricLabel}
                    </div>
                  </div>

                  {/* Column 4: Link (20%) */}
                  <div className="col-span-2 text-right">
                    <div 
                      className="text-[#C07A56] inline-block"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontWeight: 600,
                        fontSize: '18px'
                      }}
                    >
                      Read the Briefing →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile - Stacked Cards */}
          <div className="md:hidden space-y-0">
            {caseStudies.map((study, index) => (
              <Link
                key={index}
                href={study.href}
                className="border-t border-[#EAE3DB] py-8 block"
              >
                <div className="space-y-4 text-center">
                  
                  {/* Category */}
                  <div>
                    <div 
                      className="text-[#C07A56] mb-1"
                      style={{ fontFamily: 'var(--font-switzer)', fontWeight: 600 }}
                    >
                      {String(study.number).padStart(2, '0')}.
                    </div>
                    <div 
                      className="text-[#332D2A]"
                      style={{ 
                        fontFamily: 'var(--font-switzer)',
                        fontSize: '14px',
                        letterSpacing: '0.1em'
                      }}
                    >
                      {study.category}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 
                    className="text-3xl leading-tight text-[#332D2A]"
                    style={{ fontFamily: 'var(--font-ogg-display)' }}
                  >
                    {study.title}
                  </h2>

                  {/* Key Metric */}
                  <div>
                    <div 
                      className="text-4xl font-semibold text-[#332D2A] mb-1"
                      style={{ fontFamily: 'var(--font-switzer)' }}
                    >
                      {study.metric}
                    </div>
                    <div 
                      className="text-base text-[#332D2A]"
                      style={{ fontFamily: 'var(--font-switzer)' }}
                    >
                      {study.metricLabel}
                    </div>
                  </div>

                  {/* Link */}
                  <div 
                    className="text-[#C07A56]"
                    style={{ 
                      fontFamily: 'var(--font-switzer)',
                      fontWeight: 600,
                      fontSize: '18px'
                    }}
                  >
                    Read the Briefing →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The Qualitative Proof - Testimonial */}
      <section className="relative bg-[#F7F5F2] py-32 md:py-40">
        <div className="max-w-4xl mx-auto px-6 xl:px-0 text-center">
          
          {/* The Quote */}
          <p 
            className="text-4xl md:text-5xl lg:text-6xl text-[#332D2A] leading-tight mb-8"
            style={{ fontFamily: 'var(--font-ogg-display)' }}
          >
            "{testimonial.quote}"
          </p>

          {/* The Attribution */}
          <div className="pt-6 border-t border-[#EAE3DB]">
            <p 
              className="text-lg md:text-xl font-semibold text-[#332D2A]"
              style={{ fontFamily: 'var(--font-switzer)' }}
            >
              {testimonial.attribution}
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-[#332D2A] py-32 md:py-40">
        <div className="max-w-4xl mx-auto px-6 xl:px-0 text-center">
          
          {/* Headline */}
          <h2 
            className="mb-8 text-[#F7F5F2]"
            style={{ 
              fontFamily: 'var(--font-ogg-display)',
              fontSize: '80px',
              lineHeight: '1.1'
            }}
          >
            See the Intelligence in Action.
          </h2>

          {/* Body Copy */}
          <p 
            className="text-lg md:text-xl mb-10 text-[#EAE3DB] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-switzer)' }}
          >
            Request a private briefing with our strategy team to see how Vault's infrastructure can be calibrated for your brand.
          </p>

          {/* CTA Button */}
          <Link
            href="/briefing"
            className="inline-block px-8 py-4 bg-[#C07A56] text-[#F7F5F2] transition-all duration-300 hover:bg-[#D48660]"
            style={{ 
              fontFamily: 'var(--font-switzer)',
              fontWeight: 500,
              letterSpacing: '0.5px'
            }}
          >
            Request a Private Briefing
          </Link>
        </div>
      </section>
    </main>
  )
}

// Metric Number Component
function MetricNumber({ value, hasAnimated }: { value: string, hasAnimated: boolean }) {
  const [displayedValue, setDisplayedValue] = useState(0)
  
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
  const suffix = value.includes('%') ? '%' : value.includes('x') ? 'x' : ''
  
  useEffect(() => {
    if (hasAnimated && displayedValue < numericValue) {
      const duration = 1500
      const startTime = performance.now()
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        const currentValue = numericValue * progress
        
        setDisplayedValue(currentValue)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [hasAnimated, numericValue])
  
  return (
    <>
      {hasAnimated ? `${Math.round(displayedValue)}${suffix}` : `0${suffix}`}
    </>
  )
}

