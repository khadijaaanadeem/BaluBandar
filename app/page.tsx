'use client'

import { useState } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import HerThoughtsSection from '@/components/sections/HerThoughtsSection'
import DarkHumorSection from '@/components/sections/DarkHumorSection'
import PeopleWhoLoveYouSection from '@/components/sections/PeopleWhoLoveYouSection'
import HerFutureSelfSection from '@/components/sections/HerFutureSelfSection'
import KhatuAndBaluSection from '@/components/sections/KhatuAndBaluSection'
import QuizSection from '@/components/sections/QuizSection'
import FinaleSection from '@/components/sections/FinaleSection'
import MusicToggle from '@/components/MusicToggle'
import StickyNav from '@/components/StickyNav'
import AmbientBackground from '@/components/AmbientBackground'
import SectionTransition from '@/components/SectionTransition'
import { useAudio } from '@/hooks/useAudio'

export default function Home() {
  const [musicEnabled, setMusicEnabled] = useState(false)
  useAudio(musicEnabled)

  return (
    <main className="relative overflow-x-hidden">
      <AmbientBackground />
      <MusicToggle enabled={musicEnabled} onChange={setMusicEnabled} />
      <StickyNav />
      
      <section id="hero">
        <HeroSection />
      </section>

      <SectionTransition />

      <section id="thoughts">
        <HerThoughtsSection />
      </section>

      <SectionTransition />

      <section id="humor">
        <DarkHumorSection />
      </section>

      <SectionTransition />

      <section id="people">
        <PeopleWhoLoveYouSection />
      </section>

      <SectionTransition />

      <section id="future">
        <HerFutureSelfSection />
      </section>

      <SectionTransition />

      <section id="polaroids">
        <KhatuAndBaluSection musicEnabled={musicEnabled} />
      </section>

      <SectionTransition />

      <section id="quiz">
        <QuizSection />
      </section>

      <SectionTransition />

      <section id="ending">
        <FinaleSection />
      </section>
    </main>
  )
}
