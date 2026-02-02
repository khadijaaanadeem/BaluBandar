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
import { useAudio } from '@/hooks/useAudio'

export default function Home() {
  const [musicEnabled, setMusicEnabled] = useState(false)
  useAudio(musicEnabled)

  return (
    <main className="relative overflow-x-hidden">
      <MusicToggle enabled={musicEnabled} onChange={setMusicEnabled} />
      
      <div id="hero">
        <HeroSection />
      </div>
      <div id="her-thoughts">
        <HerThoughtsSection />
      </div>
      <div id="dark-humor">
        <DarkHumorSection />
      </div>
      <div id="people-who-love-you">
        <PeopleWhoLoveYouSection />
      </div>
      <div id="her-future-self">
        <HerFutureSelfSection />
      </div>
      <div id="khatu-balu">
        <KhatuAndBaluSection musicEnabled={musicEnabled} />
      </div>
      <div id="quiz">
        <QuizSection />
      </div>
      <div id="finale">
        <FinaleSection />
      </div>
    </main>
  )
}
