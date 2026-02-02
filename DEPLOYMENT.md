# 🚀 Deployment Guide

## Deployment Options

### Option 1: Vercel (Recommended - Free & Easy) ⭐

**Why Vercel?**
- Built for Next.js
- Free hosting
- Automatic deployments
- Custom domain support
- Very fast CDN

#### Steps:

1. **Create Vercel Account**
   - Go to `https://vercel.com`
   - Click "Sign Up"
   - Use GitHub account (recommended)

2. **Push Code to GitHub**
   ```bash
   git add .
   git commit -m "Initial birthday website commit"
   git push -u origin main
   ```

3. **Deploy from Vercel Dashboard**
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"
   - Keep default settings
   - Click "Deploy"

4. **Custom Domain (Optional)**
   - Go to Project Settings
   - Click "Domains"
   - Add your domain (e.g., `balubirthday.com`)
   - Follow DNS instructions

**You're Done!** 🎉

---

### Option 2: Netlify (Alternative - Also Free)

1. **Push to GitHub** (same as above)

2. **Connect to Netlify**
   - Go to `https://netlify.com`
   - Click "New site from Git"
   - Select GitHub
   - Choose repository
   - Deploy!

**Settings:**
- Build command: `npm run build`
- Publish directory: `.next`

---

### Option 3: Self-Hosted (Advanced)

#### On Your Own Server

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload `./next` and `node_modules`**
   ```bash
   scp -r .next node_modules user@server:/path/to/app
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Use Nginx or Apache**
   - Reverse proxy to `localhost:3000`
   - Set up SSL certificate

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All images replaced with actual photos
- [ ] All videos uploaded and URLs updated
- [ ] Quiz answers are correct for Balu
- [ ] All text customized (no placeholders)
- [ ] Tested on mobile device
- [ ] Videos play correctly
- [ ] Music toggle works
- [ ] No console errors

---

## 🔧 Environment Variables

Create `.env.local` file:

```env
# Add if you use external APIs
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## 📊 Monitoring After Deployment

### Vercel Analytics
- Built-in performance monitoring
- Check in Vercel Dashboard
- Real-time metrics

### Performance Testing
- Test with Lighthouse: `https://web.dev/measure/`
- Check mobile performance
- Test video playback

### Browser Testing
- Test on Chrome, Firefox, Safari, Edge
- Test on multiple devices

---

## 🔐 Security

- [ ] No sensitive data in code
- [ ] Use HTTPS (automatic with Vercel)
- [ ] Consider password protection if needed
- [ ] Regular backups

---

## 📈 Share Your Website

### Social Media Links

**Facebook:**
```
Check out Balu's birthday website! https://yoursite.com 🎉
```

**Instagram:**
```
Caption: "Happy Birthday Balu! Swipe to check out her special website 🎉✨"
Add link in bio
```

**WhatsApp:**
```
Hey! Happy birthday Balu! Check this out: https://yoursite.com 🎂💖
```

### QR Code
- Generate at `qr-code-generator.com`
- Use your website URL
- Share on invite cards

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Video Not Playing
- Check video format (should be MP4)
- Verify file size (under 100MB)
- Test video URL in browser
- Check CORS settings if on different domain

### Slow Performance
- Optimize images with TinyPNG or Squoosh
- Compress videos with FFmpeg
- Reduce animation complexity
- Check network tab in DevTools

### Deployment Issues
- Check build logs in Vercel
- Verify environment variables
- Clear browser cache
- Try different browser

---

## 📝 Post-Deployment

1. **Test Everything**
   - Visit the live URL
   - Test all sections
   - Check mobile view
   - Play videos/audio

2. **Share with Friends**
   - Send URL via WhatsApp
   - Post on social media
   - Create QR code
   - Include in invitation

3. **Collect Feedback**
   - Ask friends what they think
   - Fix any issues
   - Make improvements

4. **Update Content**
   - You can always update and redeploy
   - Changes appear instantly with Vercel
   - No downtime

---

## 🎁 Going Live Checklist

### 24 Hours Before Launch
- [ ] Test all sections thoroughly
- [ ] Test on actual devices (phone, tablet)
- [ ] Have backup domain ready
- [ ] Prepare sharing message

### At Launch Time
- [ ] Verify site is live
- [ ] Send link to close friends first
- [ ] Get feedback
- [ ] Fix any issues
- [ ] Share on social media

### After Launch
- [ ] Monitor performance
- [ ] Check for broken links
- [ ] Read feedback
- [ ] Make improvements

---

## 💡 Advanced Features After Launch

Want to make it more interactive?

1. **Add Comments Section**
   ```
   Use Firebase or Disqus
   ```

2. **Add Guest Messages**
   ```
   Create a form for birthday wishes
   ```

3. **Add Photo Upload**
   ```
   Let friends add photos to gallery
   ```

4. **Add Analytics**
   ```
   Track who visits and when
   ```

---

## 🎯 Next Steps

1. **Customize Everything** (see SETUP_GUIDE.md)
2. **Test Locally** (`npm run dev`)
3. **Deploy to Vercel**
4. **Share with Joy!** 🎉

---

**Need more help?**
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Troubleshooting: https://vercel.com/support

---

**Happy Deployment! 🚀✨**
