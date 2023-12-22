import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/Theme/ThemeProvider'
import { ThemeToggle } from './components/Theme/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark antialiased">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <header className="flex items-center justify-between px-2 py-2">
            <p>Bom dia</p>
            <ThemeToggle />
          </header>
          <div className="px-2 py-2">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
