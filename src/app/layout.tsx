import type { Metadata } from 'next'
import { Alata, Josefin_Sans } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from '@/components/Header'
import './globals.css'
import { Footer } from '@/components/Footer'
import { GoogleAnalytics } from '@next/third-parties/google';
import { env } from '@/util/env';

const FontJosefinSans = Josefin_Sans({
  variable: '--font-josefin-sans',
  subsets: ['latin'],
  weight: '300',
})

const FontAlata = Alata({
  variable: '--font-alata',
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'LoopStudios',
  description:
    'Este é o seu ponto de partida para experiências digitais intuitivas, rápidas e modernas. O site combina design elegante com uma navegação fluida, destacando um banner principal que comunica a missão da plataforma com clareza e impacto visual.',
  creator: 'Matheus gomes de melo',
  icons: './favicon.ico',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${FontJosefinSans.variable} ${FontAlata.variable}`}>
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  )
}
