'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
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

  const quoteVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1.5,
        ease: "easeOut"
      }
    }
  }

  const sparkleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 2,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero/hero-poster.jpg"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-5"></div>
      
      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="font-viga text-4xl md:text-6xl lg:text-7xl mb-4 text-shadow"
          variants={itemVariants}
        >
          positivity.radio
        </motion.h1>
        
        <motion.h2 
          className="font-roca text-xl md:text-2xl lg:text-3xl mb-8 text-shadow"
          variants={itemVariants}
        >
          100% Positive. 100% Free.
        </motion.h2>
        
        <motion.h3 
          className="font-roca text-2xl md:text-4xl lg:text-5xl max-w-4xl mx-auto text-shadow"
          variants={itemVariants}
        >
          The world&apos;s only family of Positivity Radio stations
        </motion.h3>
      </motion.div>
      
      {/* Quote Section - Desktop */}
      <motion.div 
        className="absolute bottom-8 left-8 lg:bottom-16 lg:left-16 hidden md:flex items-end text-white max-w-md"
        variants={quoteVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-16 h-16 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg flex-shrink-0">
          <img 
            src="/images/hero/noel-edmonds-circle.png" 
            alt="Noel Edmonds"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <blockquote className="font-opensans text-sm md:text-2xl mb-2 text-shadow">
            &quot;Welcome to the positivity family. With over 50 stations to choose from, I hope you find they help uplift your spirits and brighten your day.&quot;
          </blockquote>
          <cite className="font-playlist text-lg md:text-3xl italic text-shadow">
            Noel Edmonds
          </cite>
        </div>
      </motion.div>
      
      {/* Quote Section - Mobile */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:hidden text-center text-white max-w-sm px-4"
        variants={quoteVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto mb-4">
          <img 
            src="/images/hero/noel-edmonds-circle.png" 
            alt="Noel Edmonds"
            className="w-full h-full object-cover"
          />
        </div>
        <blockquote className="font-opensans text-sm mb-2 text-shadow">
          &quot;Welcome to the positivity family. With over 50 stations to choose from, I hope you find they help uplift your spirits and brighten your day.&quot;
        </blockquote>
        <cite className="font-playlist text-lg italic text-shadow">
          Noel Edmonds
        </cite>
      </motion.div>
    </section>
  )
}