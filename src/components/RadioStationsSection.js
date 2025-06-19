'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function RadioStationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const stations = [
    {
      id: 1,
      image: "/images/section3/meditation-purple-silhouette.png",
      title: "Positively Meditation",
      description: "25 Calm stations to support your spiritual journey"
    },
    {
      id: 2,
      image: "/images/section3/river-flows-landscape.png",
      title: "Positively River Flows",
      description: "8 Wellness stations to relax or motivate"
    },
    {
      id: 3,
      image: "/images/section3/easy-hits-sunny-deck.png",
      title: "Positively Easy Hits",
      description: "25 Music stations, including genres you'll love"
    },
    {
      id: 4,
      image: "/images/section3/good-morning-sunrise.png",
      title: "Positively Good Morning",
      description: "Our daytime and night-time positive tracks, hosted by",
      signature: "Noel Edmonds"
    },
    {
      id: 5,
      image: "/images/section3/1960s-vinyl-record.png",
      title: "Positively 1960s",
      description: "The nostalgic hits you love from every decade"
    },
    {
      id: 6,
      image: "/images/section3/energy-green-geometric.png",
      title: "Positively Energy",
      description: "Our Energy stations designed to improve your vibe"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const textVariants = {
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section 
      ref={ref}
      className="bg-white min-h-screen flex items-center py-16 lg:py-24"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Left Column - Content (4 columns) */}
          <motion.div className="lg:col-span-4 space-y-6" variants={textVariants}>
            <div className="relative">
              <h2 className="font-roca text-3xl md:text-4xl lg:text-5xl leading-tight" style={{ color: 'var(--color-positivity-blue)' }}>
                Over 50 Radio Stations News Free Commercial Free Listen Free
              </h2>
            </div>
            
            <p className="font-opensans text-lg leading-relaxed" style={{ color: 'var(--color-positivity-blue)' }}>
              At Positivity Radio, we skip the news, ads and travel updates! Instead, we blend great music with uplifting, inspirational words — designed to motivate, calm, and empower. Whether you&apos;re seeking a boost, a moment of peace, or daily encouragement, every station is handcrafted to help you enjoy a more successful and fulfilled life.
            </p>
            
            <p className="font-opensans text-lg leading-relaxed" style={{ color: 'var(--color-positivity-blue)' }}>
              A wealth of scientific research demonstrates that the positive effects of radio extend far beyond entertainment, shifting your mindset and uplifting your day, allowing you to feel better and thrive.
            </p>
          </motion.div>
          
          {/* Right Column - Radio Stations Grid (8 columns) */}
          <div className="lg:col-span-8">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              
              {stations.map((station, index) => (
                <motion.div 
                  key={station.id} 
                  className="station-card p-4 lg:p-0 lg:pb-2 text-center"
                  variants={cardVariants}
                  custom={index}
                >
                  <div className="w-full h-92 md:h-86 lg:h-88 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={station.image} 
                      alt={station.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-opensans text-sm font-semibold mb-2" style={{ color: 'var(--color-positivity-blue)' }}>
                    {station.title}
                  </h3>
                  <p className="font-opensans text-xs" style={{ color: 'var(--color-positivity-blue)' }}>
                    {station.description}
                    {station.signature && (
                      <span className="font-playlist italic">
                        {' '}{station.signature}
                      </span>
                    )}
                  </p>
                </motion.div>
              ))}
              
            </motion.div>
          </div>
          
        </motion.div>
      </div>
    </section>
  )
}