'use client'

import { useSmoothScrollSnap } from '@/hooks/useSmoothScrollSnap'
import HeroSection from '@/components/HeroSection'
import ImagesTextSection from '@/components/ImagesTextSection'
import RadioStationsSection from '@/components/RadioStationsSection'
import NoelEdmondsSection from '@/components/NoelEdmondsSection'
import DeepSleepSection from '@/components/DeepSleepSection'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  // Apply smooth scroll snapping behavior
  useSmoothScrollSnap()

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ImagesTextSection />
      <RadioStationsSection />
      <NoelEdmondsSection />
      <DeepSleepSection />
      <FooterSection />
    </main>
  )
}