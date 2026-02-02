import { useEffect, useRef } from 'react'

export function useAudio(enabled: boolean, audioUrl: string = '/audio/birthday-music.mp3') {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element if it doesn't exist
    if (!audioRef.current) {
      const audio = new Audio(audioUrl)
      audio.loop = true
      audio.volume = 0.5
      audioRef.current = audio
    }

    // Play or pause based on enabled state
    if (enabled) {
      audioRef.current.play().catch((error) => {
        console.log('Audio playback failed:', error)
      })
    } else {
      audioRef.current.pause()
    }

    return () => {
      // Cleanup on unmount
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [enabled, audioUrl])

  return audioRef
}
