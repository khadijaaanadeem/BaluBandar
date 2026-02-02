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

## Suggested Music Sources

- Free: Pixabay, Bensound, Incompetech (royalty-free birthday music)
- Custom: Use Garageband or similar to create personalized music
- Spotify/YouTube: Download with proper permissions

## Testing

Once your audio file is in place:
1. Refresh the website
2. Click the 🔊 button in the top-right corner
3. Music should start playing (looped, 50% volume)
4. Click again to stop

## Customization

To change the audio file name or URL, edit `/hooks/useAudio.ts`:

```typescript
// Change this line:
export function useAudio(enabled: boolean, audioUrl: string = '/audio/birthday-music.mp3') {
  // to your custom path, e.g.:
  // audioUrl: string = '/audio/my-birthday-song.mp3'
}
```

## Troubleshooting

- Audio doesn't play? Check browser console for CORS errors
- Ensure audio file is actually present in `/public/audio/`
- Some browsers require user interaction before audio plays (autoplay policy)
- Volume controlled via JavaScript: search for `audio.volume = 0.5` to adjust

---

**Currently**: The music feature is ready but needs an audio file to be added.
