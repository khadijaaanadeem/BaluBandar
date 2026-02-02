# 🎉 Happy Birthday Balu - Interactive Website

A beautiful, interactive birthday website for Balu featuring smooth animations, personal memories, mini-games, and emotional storytelling.

## 🎨 Features

✨ **Interactive Brain Map** - Hero section with floating emojis and smooth animations
🧠 **Her Thoughts** - Floating thought bubbles with playful inner monologue
💀 **Dark Humor** - Clickable jokes with glitch effects
💖 **People Who Love You** - Video montage section
🔮 **Future Self** - Beautiful vision of her future with interactive elements
💞 **Khatu & Balu** - Polaroid gallery with flip animations and background music
🎮 **Mini Quiz** - "How Well Do You Know Her?" with 10+ questions
🎬 **Finale** - Cinematic ending scene with emotional message

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **Framer Motion** - Smooth animations
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

## 📦 Installation

1. **Navigate to the project directory:**
```bash
cd HappyBdayBalu
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open in browser:**
Visit `http://localhost:3000`

## 🎥 Customization

### Add Your Own Videos
1. **People Who Love You Section** - Replace the video placeholders in `components/sections/PeopleWhoLoveYouSection.tsx`
2. **Personal Message** - Add your heartfelt video message
3. **Finale Video** - Add the cinematic birthday montage

### Add Photos to Polaroid Gallery
Edit `components/sections/KhatuAndBaluSection.tsx` and update the `polaroids` array with your photos:
```typescript
{
  id: 1,
  front: {
    type: 'image',
    src: 'your-image-url-here',
    label: 'Memory Label'
  },
  back: 'Your handwritten note here'
}
```

### Customize Quiz Answers
Edit `components/sections/QuizSection.tsx` and update the `quizQuestions` array with the correct answers.

### Change the Future Self Vision
Edit `components/sections/HerFutureSelfSection.tsx` and update the `futureText` variable.

### Add Background Music
The music toggle is ready in the top-right corner. When enabled, background music can play from the Khatu & Balu section. Add your music file to the public folder and reference it.

## 🎨 Color Palette

The site uses a warm, cozy palette:
- **Coffee Brown** `#6B4423` - Primary dark color
- **Cream** `#F5F1E8` - Background
- **Soft Yellow** `#F9E5B8` - Accent
- **Warm Brown** `#8B6F47` - Secondary
- **Light Brown** `#D4B5A0` - Tertiary

## 📱 Responsive Design

The website is fully responsive and works beautifully on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Desktop screens

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Deploy!

## 📝 Important Notes

1. **Replace Placeholder Images** - The polaroid gallery uses placeholder images. Replace them with actual photos.
2. **Add Videos** - Video sections have placeholders. Upload your actual videos.
3. **Customize Text** - Update all the personalized messages with your own words.
4. **Music Attribution** - "Tu Jo Mila" by Pritam is referenced. Ensure you have rights to use it or replace with your own.

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 💡 Tips for Best Experience

1. Use high-quality images for the polaroid gallery
2. Keep videos optimized for web (under 50MB)
3. Test on mobile to ensure smooth animations
4. Add personal touches to all text sections
5. Consider adding a custom domain for sharing

## 📧 Support

For questions or issues, feel free to reach out!

---

**Made with 💖 for Balu's Birthday**

*"No matter where life takes us, you will always be my safest place."* ✨
