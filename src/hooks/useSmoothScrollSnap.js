'use client'

import { useEffect } from 'react'

export const useSmoothScrollSnap = () => {
  useEffect(() => {
    let isScrolling = false
    let scrollTimeout

    const handleWheel = (e) => {
      // Only apply on desktop (screens wider than 1024px)
      if (window.innerWidth < 1024) return

      if (isScrolling) {
        e.preventDefault()
        return
      }

      e.preventDefault()
      
      const sections = document.querySelectorAll('section')
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
      const isScrollingDown = e.deltaY > 0
      
      let targetSection
      if (isScrollingDown && currentSectionIndex < sections.length - 1) {
        targetSection = sections[currentSectionIndex + 1]
      } else if (!isScrollingDown && currentSectionIndex > 0) {
        targetSection = sections[currentSectionIndex - 1]
      } else {
        // If at the beginning or end, scroll to current section center
        targetSection = sections[currentSectionIndex]
      }

      if (targetSection) {
        isScrolling = true
        
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })

        // Reset scrolling flag after animation
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          isScrolling = false
        }, 1000)
      }
    }

    // Add wheel event listener with passive: false to allow preventDefault
    document.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      document.removeEventListener('wheel', handleWheel)
      clearTimeout(scrollTimeout)
    }
  }, [])
}