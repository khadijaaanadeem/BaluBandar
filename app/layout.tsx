import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

// Display font: elegant serif for headings
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

// Body font: clean sans-serif
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Happy Birthday Balu 🎉 | A Journey Through Your Mind',
  description: 'An immersive, cinematic journey through thoughts, memories, and dreams. Navigate a space-café universe with constellation stories.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="75" font-size="75">☕</text></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Custom favicon as emoji */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>☕</text></svg>" />
      </head>
      <body className="bg-slate-950 text-slate-100 font-sans antialiased">
        <style>{`
          :root {
            --font-serif: var(--font-playfair);
            --font-sans: var(--font-inter);
          }
          
          body {
            font-family: var(--font-inter);
            color: #f1f5f9;
            background: linear-gradient(to bottom, #0f172a, #1e293b, #0f172a);
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-playfair);
          }
          
          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
          
          /* Selection style */
          ::selection {
            background-color: rgba(167, 139, 250, 0.3);
            color: #f1f5f9;
          }
        `}</style>
        {children}
      </body>
    </html>
  )
}
