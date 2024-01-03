import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WikiRocket',
  description: 'A Next App Demo with TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bodyClasses = `${inter.className} bg-slate-800`;
  return (
    <html lang="en">
      <body className={bodyClasses}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
