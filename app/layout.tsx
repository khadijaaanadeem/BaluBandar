import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Happy Birthday Balu 🎉',
  description: 'An interactive journey through your thoughts, dreams, and our memories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-cream text-gray-900">
        {children}
      </body>
    </html>
  )
}
