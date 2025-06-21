'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FooterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
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
        ease: "easeOut"
      }
    }
  }

  return (
    <footer 
      ref={ref}
      className="min-h-screen flex flex-col" 
      style={{ backgroundColor: 'var(--color-positivity-beige)' }}
    >
      
      {/* Main Footer Content */}
      <div className="flex-grow flex items-center justify-center">
        <motion.div 
          className="container mx-auto px-4 text-center space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Main Heading */}
          <motion.div className="relative" variants={itemVariants}>
            
            <h2 className="font-roca text-2xl md:text-3xl lg:text-4xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--color-positivity-blue)' }}>
              Positivity Radio is available on the You.Radio App or online. Discover your own personal soundtrack to a more positive life.
            </h2>
          </motion.div>
          
          {/* Listen Now Button */}
          <motion.div className="relative" variants={itemVariants}>
            <motion.div 
              className="absolute -top-6 -left-6 text-yellow-500 text-2xl sparkle"
              variants={sparkleVariants}
            >
            </motion.div>
            <button className="btn-primary text-xl px-10 py-4">
              Listen Now
            </button>
          </motion.div>
          
          {/* Logo */}
          <motion.div className="py-8" variants={logoVariants}>
            <div className="w-32 h-32 mx-auto rounded-lg p-4">
              <img 
                src="/images/footer/positivity-logo-geometric.png" 
                alt="Positivity Radio Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
          
          {/* Thank You Text */}
          <motion.p 
            className="font-opensans text-xl max-w-3xl mx-auto leading-relaxed" 
            style={{ color: 'var(--color-positivity-blue)' }}
            variants={itemVariants}
          >
            Many thanks for listening to us and we hope you continue to enjoy the wide choice of stations on Positivity Radio
          </motion.p>
          
          {/* Contact Information */}
          <motion.p 
            className="font-opensans text-lg" 
            style={{ color: 'var(--color-positivity-blue)' }}
            variants={itemVariants}
          >
            Get in touch with your feedback or for further support<br />
            <a href="mailto:contact@positivity.radio" className="underline hover:no-underline">
              contact@positivity.radio
            </a>
          </motion.p>
          
          {/* Social Media */}
          <motion.div className="flex items-center justify-center space-x-8" variants={itemVariants}>
            <div className="w-12 h-12 rounded-lg p-2">
              <img 
                src="/images/footer/instagram-icon.png" 
                alt="Instagram"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center">
              <p className="font-opensans text-base" style={{ color: 'var(--color-positivity-blue)' }}>
                noeledmonds.kiwi
              </p>
              <p className="font-opensans text-base" style={{ color: 'var(--color-positivity-blue)' }}>
                positivityradio
              </p>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
      
      {/* Bottom Copyright Bar */}
      <motion.div 
        className="py-6" 
        style={{ backgroundColor: 'var(--color-positivity-blue)' }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="font-opensans text-white text-sm">
            © 2025 Positivity Radio - All rights reserved.
          </p>
        </div>
        <div className="container mx-auto px-4 text-center">
          <p className="font-opensans text-white text-sm">
            Designed & Developed by BKA Digital
          </p>
        </div>
      </motion.div>
      
    </footer>
  )
}