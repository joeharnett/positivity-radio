'use client'

import { useEffect } from 'react'

export const useSmoothScrollSnap = () => {
  useEffect(() => {
    let isScrolling = false
    let accumulatedDelta = 0

    const handleScroll = (e) => {
      // Only apply on desktop
      if (window.innerWidth < 1024) return

      if (isScrolling) {
        e.preventDefault()
        return
      }

      // Accumulate scroll delta for trackpad support
      accumulatedDelta += Math.abs(e.deltaY)

      if (accumulatedDelta < 50) {
        // Reset accumulator after short delay for small movements
        setTimeout(() => {
          if (!isScrolling) accumulatedDelta = 0
        }, 200)
        return
      }

      e.preventDefault()
      
      const sections = document.querySelectorAll('section, footer')
      const currentScrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Find current section
      let currentSectionIndex = 0
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop
        if (currentScrollY >= sectionTop - windowHeight / 2) {
          currentSectionIndex = index
        }
      })

      // Determine scroll direction
      let targetSection
      if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        // Scrolling down
        targetSection = sections[currentSectionIndex + 1]
      } else if (e.deltaY < 0 && currentSectionIndex > 0) {
        // Scrolling up
        targetSection = sections[currentSectionIndex - 1]
      }

      if (targetSection) {
        isScrolling = true
        accumulatedDelta = 0

        // Use browser's native smooth scroll - it's naturally slower and more reliable
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })

        // Allow next scroll after animation time
        setTimeout(() => {
          isScrolling = false
        }, 1500) // Reduced timeout since we're not controlling the animation
      }
    }

    // Listen to all scroll-related events
    document.addEventListener('wheel', handleScroll, { passive: false })
    document.addEventListener('touchmove', handleScroll, { passive: false })

    return () => {
      document.removeEventListener('wheel', handleScroll)
      document.removeEventListener('touchmove', handleScroll)
    }
  }, [])
}