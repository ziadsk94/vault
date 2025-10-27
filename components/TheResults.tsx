'use client'

import { useEffect, useState } from 'react'

interface MetricNumberProps {
  id: string
  value: string
  hasAnimated: boolean
  isMobile?: boolean
}

function MetricNumber({ id, value, hasAnimated, isMobile = false }: MetricNumberProps) {
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
    <div 
      id={id}
      className={isMobile ? "text-7xl font-normal text-[#C07A56]" : "text-8xl lg:text-[120px] font-normal text-[#C07A56]"}
      style={{ fontFamily: 'var(--font-switzer)' }}
    >
      {hasAnimated ? `${Math.round(displayedValue)}${suffix}` : `0${suffix}`}
    </div>
  )
}


export default function TheResults() {
  const metricBlocks = [
    {
      number: '+30%',
      context: 'Reduction in Markdowns',
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

  const [hasAnimated, setHasAnimated] = useState<{[key: number]: boolean}>({})

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768
      
      metricBlocks.forEach((block, index) => {
        if (hasAnimated[index]) return // Already animated
        
        // Check the appropriate ID based on screen size
        const element = document.getElementById(isMobile ? `metric-mobile-${index}` : `metric-${index}`)
        if (element) {
          const rect = element.getBoundingClientRect()
          const windowHeight = window.innerHeight
          
          // Check if element is in viewport and visible
          if (rect.top < windowHeight && rect.bottom > 0 && rect.width > 0) {
            setHasAnimated(prev => ({ ...prev, [index]: true }))
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasAnimated, metricBlocks])

  return (
    <section className="relative bg-[#F7F5F2] py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-32">
          <h2 
            className="text-[50px] md:text-[80px] lg:text-[100px] leading-[0.95] text-[#332D2A]"
            style={{ fontFamily: 'var(--font-ogg-display)' }}
          >
            The Proof is in the Performance.
          </h2>
        </div>

        {/* Desktop/Tablet - Ledger Layout */}
        <div className="hidden md:block space-y-16">
          {/* Metric Blocks */}
          {metricBlocks.map((block, index) => (
            <div key={index} className="border-t border-[#EAE3DB] pt-16">
              {/* 3-Column Grid */}
              <div className="grid grid-cols-3 gap-12 items-center">
                
                {/* Column 1: The Data */}
                <div className="text-center md:text-left">
                  <MetricNumber 
                    id={`metric-${index}`}
                    value={block.number}
                    hasAnimated={hasAnimated[index] || false}
                  />
                </div>

                {/* Column 2: The Context */}
                <div className="text-center md:text-left">
                  <h3 
                    className="font-semibold text-[#332D2A] mb-4"
                    style={{ 
                      fontFamily: 'var(--font-switzer)',
                      fontSize: '24px'
                    }}
                  >
                    {block.context}
                  </h3>
                </div>

                {/* Column 3: The Explanation */}
                <div className="text-center md:text-left">
                  <p 
                    className="text-[#332D2A] leading-relaxed"
                    style={{ 
                      fontFamily: 'var(--font-switzer)',
                      fontSize: '18px'
                    }}
                  >
                    {block.explanation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile - Stacked Layout */}
        <div className="md:hidden space-y-16">
          {/* Metric Blocks */}
          {metricBlocks.map((block, index) => (
            <div key={index} className="border-t border-[#EAE3DB] pt-12">
              {/* Single Column Stack */}
              <div className="space-y-6 text-center">
                
                {/* The Data */}
                <MetricNumber 
                  id={`metric-mobile-${index}`}
                  value={block.number}
                  hasAnimated={hasAnimated[index] || false}
                  isMobile
                />

                {/* The Context */}
                <h3 
                  className="text-2xl font-semibold text-[#332D2A]"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  {block.context}
                </h3>

                {/* The Explanation */}
                <p 
                  className="text-base text-[#332D2A] leading-relaxed max-w-xl mx-auto"
                  style={{ fontFamily: 'var(--font-switzer)' }}
                >
                  {block.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

