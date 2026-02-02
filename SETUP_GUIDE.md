# 🎉 Birthday Website Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Visit `http://localhost:3000`

---

## 📸 Customization Guide

### Adding Photos to Polaroid Gallery

Edit `components/sections/KhatuAndBaluSection.tsx`:

```typescript
const polaroids: Polaroid[] = [
  {
    id: 1,
    front: {
      type: 'image',
      src: 'YOUR_IMAGE_URL_HERE', // Replace with your image
      label: 'Your Memory Label'
    },
    back: 'Your handwritten message about this memory'
  },
  // Add more polaroids...
]
```

**Tips:**
- Use high-quality images (recommended: 300x400px)
- Host images on: Imgur, Cloudinary, or AWS S3
- Include 6-12 polaroids for best effect

### Adding Videos

**For "People Who Love You" Section:**
Edit `components/sections/PeopleWhoLoveYouSection.tsx`:

```typescript
// Replace the placeholder video section with:
<video width="100%" height="100%" controls>
  <source src="YOUR_VIDEO_URL" type="video/mp4" />
</video>
```

**For Finale Video:**
Edit `components/sections/FinaleSection.tsx` and add your cinematic montage

**Video Tips:**
- Keep videos under 50MB (optimize with HandBrake or FFmpeg)
- Use MP4 format for best compatibility
- Upload to: YouTube, Vimeo, or cloud storage

### Customizing Quiz Answers

Edit `components/sections/QuizSection.tsx`:

```typescript
const quizQuestions: Question[] = [
  {
    question: "What's her coffee order?",
    options: ["Cappuccino with vanilla", "Iced Latte", "Americano", "Flat white"],
    correct: 0, // Change this number to the correct option index
    hint: "It's creamy and classic"
  },
  // Update all questions with Balu's actual answers
]
```

### Updating Her Future Self Vision

Edit `components/sections/HerFutureSelfSection.tsx`:

Find this line:
```typescript
const futureText = "Ten years from now, I see my Balu as a successful Physician Assistant..."
```

Replace with your own vision!

### Customizing Dark Humor Section

Edit `components/sections/DarkHumorSection.tsx`:

```typescript
const darkHumor = [
  "Your custom joke here",
  "Another inside joke",
  // Add more jokes...
]
```

---

## 🎵 Adding Background Music

### Enable Music in Khatu & Balu Section:

1. Get your audio file (MP3 or WAV)
2. Add to `public/music/` folder
3. Update `components/sections/KhatuAndBaluSection.tsx`:

```typescript
{musicEnabled && (
  <audio autoPlay loop>
    <source src="/music/tu-jo-mila.mp3" type="audio/mpeg" />
  </audio>
)}
```

---

## 🎨 Color Customization

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'coffee': '#YOUR_COLOR', // Main dark
      'cream': '#YOUR_COLOR',   // Background
      'soft-yellow': '#YOUR_COLOR', // Accent
      'warm-brown': '#YOUR_COLOR',   // Secondary
      'light-brown': '#YOUR_COLOR',  // Tertiary
    },
  },
},
```

---

## 📝 Text Customization

### Update All Personal Messages:

1. **Hero Section** - Welcome message
2. **Thoughts Section** - Inner monologue bubbles
3. **Dark Humor** - Jokes about her
4. **Future Self** - Your vision for her
5. **Finale** - Final emotional message

All text is clearly labeled in the component files with comments.

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Push code to GitHub
2. Connect to Netlify
3. Deploy automatically on every push

### Option 3: Traditional Hosting
```bash
npm run build
npm start
```

---

## 📱 Testing on Mobile

```bash
# Your local IP (run this command)
ipconfig getifaddr en0  # Mac
ipconfig               # Windows

# Visit: http://YOUR_IP:3000 on phone
```

---

## ⚡ Performance Tips

1. **Optimize Images**: Compress before uploading
2. **Video Compression**: Use FFmpeg
   ```bash
   ffmpeg -i input.mp4 -b:v 1500k output.mp4
   ```
3. **Lazy Loading**: Images load only when needed
4. **Caching**: Browser caches static assets

---

## 🔧 Troubleshooting

### Page Not Loading
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run dev
```

### Videos Not Playing
- Ensure video format is MP4
- Check file size (keep under 100MB)
- Verify URL is correct

### Animations Too Slow
- Check browser performance
- Reduce animation complexity
- Test in newer browser

---

## 📋 Checklist Before Sharing

- [ ] Replace all placeholder images
- [ ] Add actual video files
- [ ] Update quiz with correct answers
- [ ] Customize all text sections
- [ ] Test on mobile device
- [ ] Check video/audio playback
- [ ] Verify links work
- [ ] Add custom domain (optional)

---

## 🎁 Final Touches

**Make it Extra Special:**
- Add a custom domain: `balubirthday.com`
- Enable music autoplay
- Add password protection (optional)
- Create QR code for sharing
- Add confetti animations
- Include friends' messages

---

## 📧 Need Help?

Refer to:
- `README.md` - Project overview
- Component files - Detailed comments
- Framer Motion docs: `framer.com/motion`
- Next.js docs: `nextjs.org`

---

**Happy Building! 🎉** 

Remember: It's not about perfection, it's about the love behind it. ✨
