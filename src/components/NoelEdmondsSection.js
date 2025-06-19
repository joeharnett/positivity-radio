'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function NoelEdmondsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  }

  const headerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center py-16 lg:py-24" 
      style={{ backgroundColor: 'var(--color-positivity-beige)' }}
    >
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="font-roca text-3xl md:text-4xl lg:text-5xl mb-6" style={{ color: 'var(--color-positivity-blue)' }}>
            Noel Edmonds
          </h2>
          <p className="font-opensans text-lg leading-relaxed max-w-6xl mx-auto" style={{ color: 'var(--color-positivity-blue)' }}>
            In 2015, Noel Edmonds launched the world&apos;s first family of Positivity Radio stations, blending music with aspirational words of wit and wisdom. Tired of the negativity dominating traditional media, Noel set out to create something different: a network of stations with no news, no ads, and no doom and gloom. Instead, Positivity Radio delivers a unique blend of feel-good music and inspirational messages, designed to elevate your mood, shift your mindset, and support your wellbeing.
          </p>
        </motion.div>
        
        {/* Three Column Cards */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Card 1 - Kiwi Adventure */}
          <motion.div className="text-center" variants={cardVariants}>
            <div className="rounded-lg overflow-hidden shadow-lg mb-4">
              <img 
                src="/images/section4/kiwi-adventure-mountains.png" 
                alt="Noel Edmonds Kiwi Adventure"
                className="w-full h-56 md:h-104 object-cover"
              />
            </div>
            <h3 className="font-opensans text-lg font-semibold mb-2" style={{ color: 'var(--color-positivity-blue)' }}>
              Positivity Radio is featured on:
            </h3>
            <p className="font-opensans text-base mb-4" style={{ color: 'var(--color-positivity-blue)' }}>
              Noel Edmonds&apos; Kiwi Adventure
            </p>
            <div className="flex justify-center">
              <img 
                src="/images/section4/itv-logo.png" 
                alt="ITV Logo"
                className="h-8"
              />
            </div>
          </motion.div>
          
          {/* Card 2 - Vineyard */}
          <motion.div className="text-center" variants={cardVariants}>
            <div className="rounded-lg overflow-hidden shadow-lg mb-4">
              <img 
                src="/images/section4/noel-vineyard-outdoor.png" 
                alt="Noel Edmonds in vineyard"
                className="w-full h-76 md:h-104 object-cover"
              />
            </div>
            <h3 className="font-opensans text-lg font-semibold mb-2" style={{ color: 'var(--color-positivity-blue)' }}>
              Learn more about
            </h3>
            <p className="font-opensans text-base mb-4" style={{ color: 'var(--color-positivity-blue)' }}>
              Noel&apos;s Positivity Formula
            </p>
            <div className="space-x-4">
              <a href="#" className="font-opensans text-base underline hover:no-underline" style={{ color: 'var(--color-positivity-blue)' }}>
                Instagram
              </a>
              <span className="font-opensans text-base" style={{ color: 'var(--color-positivity-blue)' }}>and</span>
              <a href="#" className="font-opensans text-base underline hover:no-underline" style={{ color: 'var(--color-positivity-blue)' }}>
                YouTube
              </a>
            </div>
          </motion.div>
          
          {/* Card 3 - Radio 1 */}
          <motion.div className="text-center md:col-span-2 lg:col-span-1" variants={cardVariants}>
            <div className="rounded-lg overflow-hidden shadow-lg mb-4">
              <img 
                src="/images/section4/noel-radio1-vintage.png" 
                alt="Noel Edmonds Radio 1"
                className="w-full h-56 md:h-104 object-cover"
              />
            </div>
            <h3 className="font-opensans text-lg font-semibold" style={{ color: 'var(--color-positivity-blue)' }}>
              Noel Edmonds
            </h3>
            <p className="font-opensans text-base" style={{ color: 'var(--color-positivity-blue)' }}>
              Back in the Day on Radio 1
            </p>
          </motion.div>
          
        </motion.div>
        
        {/* CTA Button */}
        <motion.div 
          className="text-center relative"
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <button className="btn-primary">
            Listen Now
          </button>
        </motion.div>
        
      </div>
    </section>
  )
}