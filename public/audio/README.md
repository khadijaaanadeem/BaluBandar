# Birthday Music Setup

## Audio File Instructions

To add birthday music to the website:

1. **Add your audio file** to this directory with one of these names:
   - `birthday-music.mp3` (recommended)
   - `birthday-music.wav`
   - `birthday-music.m4a`

2. **File Recommendations:**
   - Format: MP3, WAV, or M4A
   - Duration: 2-5 minutes (perfect for looping)
   - File size: < 5MB (for optimal loading)
   - Volume: Normalized to -14dB LUFS

## Default Behavior

If no audio file is found:
- A **soft ambient tone** is automatically generated using the Web Audio API
- The tone consists of harmonious sine waves (A notes: 110, 220, 330, 440 Hz)
- Creates a meditative, warm, and safe atmosphere
- Volume set to 30% by default

This means the music toggle **always works** — whether you provide a custom audio file or not!

## Suggested Music Sources

- Free: Pixabay, Bensound, Incompetech (royalty-free birthday music)
- Custom: Use Garageband or similar to create personalized music
- Spotify/YouTube: Download with proper permissions

## Testing

Once your setup is complete:
1. Refresh the website
2. Click the 🔊 button in the top-right corner
3. Music/ambient tone should start playing (looped)
4. Click again to stop

## Customization

### Change Audio File Path

Edit `/hooks/useAudio.ts`:

```typescript
// Change this line:
export function useAudio(enabled: boolean, audioUrl: string = '/audio/birthday-music.mp3') {
  // to your custom path, e.g.:
  // audioUrl: string = '/audio/my-birthday-song.mp3'
}
```

### Adjust Volume

In `/hooks/useAudio.ts`, find these lines and adjust the values:

```typescript
masterGain.gain.value = 0.3  // For generated tone (0-1, where 1 is full volume)
audio.volume = 0.4            // For uploaded audio file (0-1)
```

## Troubleshooting

- **Audio doesn't play?**
  - Check browser console (F12 → Console tab)
  - Some browsers require user interaction before audio plays
  - Try clicking the toggle button

- **Audio file not loading?**
  - Verify the file is in `/public/audio/`
  - Check file name matches exactly (case-sensitive)
  - Ensure file size is under 5MB
  - The site will fall back to generated ambient tone

- **Want custom audio?**
  - Place your MP3/WAV in this folder
  - Restart the dev server
  - Test the toggle button

---

**Currently**: The music feature is ready but needs an audio file to be added.
