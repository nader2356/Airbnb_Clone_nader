import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientOnly from './components/ClientOnly'
import Navbar from './components/navbar/Navbar'
import { Nunito } from 'next/font/google'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const font = Nunito({ 
  subsets: ['latin'], 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={font.className}>
      <ClientOnly>
      <LoginModal />
          <RegisterModal />
        <Navbar  />
      </ClientOnly>
      <div className="pb-20 pt-28">
        {children}
      </div>
    </body>
  </html>
  )
}
