'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function DeepSleepSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const stations = [
    {
      id: 1,
      image: "/images/section5/1980s-cassette-tapes.png",
      title: "Positively 1980's"
    },
    {
      id: 2,
      image: "/images/section5/good-afternoon-sunset.png",
      title: "Positively Good Afternoon"
    },
    {
      id: 3,
      image: "/images/section5/sleepy-moon-stars.png",
      title: "Positively Sleepy"
    },
    {
      id: 4,
      image: "/images/section5/birdsong-bird-branch.png",
      title: "Positively Birdsong"
    },
    {
      id: 5,
      image: "/images/section5/1970s-vintage-cassette.png",
      title: "Positively 1970's"
    },
    {
      id: 6,
      image: "/images/section5/stress-relief-person-relaxing.png",
      title: "Positively Stress Relief"
    },
    {
      id: 7,
      image: "/images/section5/happy-pets-sleeping-puppies.png",
      title: "Positively Happy Pets"
    },
    {
      id: 8,
      image: "/images/section5/crackling-fire-campfire.png",
      title: "Positively Crackling Fire"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const phoneVariants = {
    hidden: { x: -100, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  const stationVariants = {
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
    <section 
      ref={ref}
      className="min-h-screen flex items-center py-16 lg:py-14" 
      style={{ backgroundColor: 'var(--color-positivity-blue)' }}
    >
      <div className="container mx-auto px-4">
        
        {/* Header Content */}
        <motion.div 
          className="text-center mb-12 relative"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          <h2 className="font-roca text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            From Deep Sleep to Daily Uplift<br />
            The Soundtrack to a Better You
          </h2>
          
          <p className="font-opensans text-lg text-white leading-relaxed max-w-6xl mx-auto mb-6">
            With Positivity Radio, you won&apos;t love every station — and that&apos;s the point. We&apos;re all different. But somewhere in our ever-growing family of positive stations, there&apos;s a sound that&apos;s just right for you. Maybe it&apos;s the peaceful charm of Positivity Birdsong, the calming influence of Positively Happy Pets when you&apos;re out of the house, or the timeless feel-good hits of the 60s. Perhaps Positively Meditation is more your pace, or you&apos;ll find your rhythm with our specially crafted Morning, Afternoon, or Evening Soundtracks.
          </p>
          
          <p className="font-opensans text-xl text-white font-semibold max-w-4xl mx-auto">
            You choose. You explore. You feel better. And best of all? Every station is completely free.
          </p>
        </motion.div>
        
        {/* Main Content Grid */}
        <motion.div 
          className="grid lg:grid-cols-12 gap-12 xl:gap-6 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Layout for all screens EXCEPT 1024-1279px */}
          <>
            {/* Left Column - Phone Mockup (hidden on 1024-1279px) */}
            <motion.div className="lg:col-span-5 xl:col-span-4 hidden xl:block" variants={phoneVariants}>
              <div className="bg-white rounded-3xl p-6 shadow-2xl max-w-sm mx-auto">
                <img 
                  src="/images/section5/phone-app-mockup.png" 
                  alt="Positivity Radio App"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            {/* Right Column - Station Grid (hidden on 1024-1279px) */}
            <div className="lg:col-span-7 xl:col-span-8 hidden xl:block">
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4"
                variants={containerVariants}
              >
                
                {stations.map((station, index) => (
                  <motion.div 
                    key={station.id} 
                    className="bg-white rounded-lg p-2 text-center shadow-md"
                    variants={stationVariants}
                    custom={index}
                  >
                    <div className="w-full h-56 md:h-62 rounded-lg mb-3 overflow-hidden">
                      <img 
                        src={station.image} 
                        alt={station.title} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <h3 className="font-opensans text-xs font-semibold" style={{ color: 'var(--color-positivity-blue)' }}>
                      {station.title}
                    </h3>
                  </motion.div>
                ))}
                
              </motion.div>
            </div>
          </>
          
        </motion.div>

        {/* Carousel Layout for 1024-1279px screens ONLY */}
        <motion.div 
          className="deepsleep-carousel hidden lg:flex xl:hidden mt-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* First group */}
          <div className="deepsleep-carousel-group">
            {stations.map((station, index) => (
              <motion.div 
                key={`group1-${station.id}`} 
                className="station-card bg-white rounded-lg p-6 text-center shadow-md"
                variants={stationVariants}
                custom={index}
              >
                <div className="h-80 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src={station.image} 
                    alt={station.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="font-opensans text-lg font-semibold" style={{ color: 'var(--color-positivity-blue)' }}>
                  {station.title}
                </h3>
              </motion.div>
            ))}
          </div>
          
          {/* Duplicate group for seamless loop */}
          <div className="deepsleep-carousel-group" aria-hidden="true">
            {stations.map((station) => (
              <div 
                key={`group2-${station.id}`} 
                className="station-card bg-white rounded-lg p-6 text-center shadow-md"
              >
                <div className="h-80 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src={station.image} 
                    alt={station.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="font-opensans text-lg font-semibold" style={{ color: 'var(--color-positivity-blue)' }}>
                  {station.title}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Original Layout for smaller screens */}
        <motion.div 
          className="lg:hidden grid grid-cols-1 gap-8 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Phone Mockup for smaller screens */}
          <motion.div variants={phoneVariants}>
            <div className="bg-white rounded-3xl p-6 shadow-2xl max-w-sm mx-auto">
              <img 
                src="/images/section5/phone-app-mockup.png" 
                alt="Positivity Radio App"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
          
          {/* Station Grid for smaller screens */}
          <motion.div 
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
          >
            
            {stations.map((station, index) => (
              <motion.div 
                key={station.id} 
                className="bg-white rounded-lg p-2 text-center shadow-md"
                variants={stationVariants}
                custom={index}
              >
                <div className="w-full h-56 md:h-62 rounded-lg mb-3 overflow-hidden">
                  <img 
                    src={station.image} 
                    alt={station.title} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <h3 className="font-opensans text-xs font-semibold" style={{ color: 'var(--color-positivity-blue)' }}>
                  {station.title}
                </h3>
              </motion.div>
            ))}
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}