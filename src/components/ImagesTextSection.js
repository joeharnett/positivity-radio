'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ImagesTextSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  }

  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const textVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
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
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Left Column - Images with overlapping effect on desktop */}
          <motion.div className="relative h-96 lg:h-[500px]" variants={imageVariants}>
            {/* First Image */}
            <div className="rounded-lg overflow-hidden shadow-lg mb-6 lg:mb-0 lg:absolute lg:top-0 lg:left-0 lg:w-4/5 lg:z-10">
              <img 
                src="/images/section2/person-arms-up-celebration.png" 
                alt="Person celebrating with arms outstretched"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            
            {/* Second Image - Overlapping on desktop, stacked on mobile */}
            <div className="rounded-lg overflow-hidden shadow-lg lg:absolute lg:top-32 lg:right-0 lg:w-4/5 lg:z-20">
              <img 
                src="/images/section2/group-people-arms-up.png" 
                alt="Group of people celebrating together"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </motion.div>
          
          {/* Right Column - Content */}
          <motion.div className="space-y-6" variants={textVariants}>
            <h2 className="font-roca text-3xl md:text-4xl lg:text-5xl" style={{ color: 'var(--color-positivity-blue)' }}>
              Welcome to Positivity Radio
            </h2>
            
            <p className="font-opensans text-lg leading-relaxed" style={{ color: 'var(--color-positivity-blue)' }}>
              Positivity Radio is the world&apos;s first family of free-to-listen radio stations created to support a happier, healthier, and more successful life.
            </p>
            
            <p className="font-opensans text-lg italic leading-relaxed" style={{ color: 'var(--color-positivity-blue)' }}>
              Whether you need a moment of calm, energy, focus, joy or sleep, we&apos;ve got you covered.
            </p>
            
            <p className="font-opensans text-lg leading-relaxed" style={{ color: 'var(--color-positivity-blue)' }}>
              Explore our carefully curated music channels to soundtrack your day. Find balance with our Wellness and Calm stations, unwind with Sleepy stations for babies, kids (and grown-ups!), and recharge with our Energy stations designed to lift your mood and support your overall wellbeing.
            </p>
            
            <p className="font-opensans text-lg leading-relaxed" style={{ color: 'var(--color-positivity-blue)' }}>
              And yes, it&apos;s backed by science! A positive outlook has been shown to improve mental and physical health, boost confidence, enhance relationships, and support a better work-life balance.
            </p>
            
            {/* CTA Button with Sparkle */}
            <motion.div className="relative pt-8" variants={buttonVariants}>
              <button className="btn-primary">
                Listen Now
              </button>
            </motion.div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  )
}