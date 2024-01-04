import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import './globals.css'
import MyProfilePic from './components/MyProfilePic'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jassi Test Blog',
  description: 'NextJS Exercise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  className="dark">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
        </body>
    </html>
  )
}
