import { useEffect, useRef } from 'react'

export function useAudio(enabled: boolean, audioUrl: string = '/audio/birthday-music.mp3') {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const oscillatorsRef = useRef<OscillatorNode[]>([])
  const gainsRef = useRef<GainNode[]>([])

  // Generate ambient tone using Web Audio API (fallback)
  const generateAmbientTone = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      audioContextRef.current = audioContext

      const masterGain = audioContext.createGain()
      masterGain.gain.value = 0.3
      masterGain.connect(audioContext.destination)

      // Create multiple oscillators for rich ambient sound
      const frequencies = [110, 220, 330, 440] // A notes for warm, meditative tone

      frequencies.forEach((freq) => {
        const osc = audioContext.createOscillator()
        const gain = audioContext.createGain()

        osc.frequency.value = freq
        osc.type = 'sine'

        gain.gain.setValueAtTime(0.1, audioContext.currentTime)
        gain.connect(masterGain)
        osc.connect(gain)

        oscillatorsRef.current.push(osc)
        gainsRef.current.push(gain)

        osc.start()
      })

      return true
    } catch (error) {
      console.log('Web Audio API not available:', error)
      return false
    }
  }

  useEffect(() => {
    if (!audioRef.current) {
      // Try to load external audio file
      const audio = new Audio(audioUrl)
      audio.loop = true
      audio.volume = 0.4
      audio.preload = 'auto'

      // Add error handler for missing file
      audio.onerror = () => {
        console.log('Audio file not found, using generated ambient tone instead')
        // Generate fallback ambient tone
        generateAmbientTone()
        audioRef.current = { isGenerated: true } as any
      }

      audio.oncanplay = () => {
        console.log('Audio file loaded successfully')
      }

      audioRef.current = audio
    }

    // Play or pause based on enabled state
    if (enabled) {
      if (audioRef.current && audioRef.current instanceof HTMLAudioElement) {
        audioRef.current.play().catch((error) => {
          console.log('Audio playback failed, falling back to generated tone:', error)
          generateAmbientTone()
        })
      } else if (!audioRef.current || (audioRef.current as any).isGenerated) {
        // Resume audio context if using generated tone
        if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
          audioContextRef.current.resume()
        }
      }
    } else {
      if (audioRef.current && audioRef.current instanceof HTMLAudioElement) {
        audioRef.current.pause()
      } else if (audioContextRef.current) {
        // Stop oscillators
        oscillatorsRef.current.forEach((osc) => {
          try {
            osc.stop()
          } catch (e) {
            // Oscillator already stopped
          }
        })
        oscillatorsRef.current = []
        gainsRef.current = []
      }
    }

    return () => {
      // Cleanup on unmount
      if (audioRef.current && audioRef.current instanceof HTMLAudioElement) {
        audioRef.current.pause()
      }
      if (audioContextRef.current) {
        oscillatorsRef.current.forEach((osc) => {
          try {
            osc.stop()
          } catch (e) {
            // Already stopped
          }
        })
      }
    }
  }, [enabled, audioUrl])

  return audioRef
}
