import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Haptics } from '@/components'
import '@/styles/globals.scss'
import styles from './styles.module.scss'

const inter = Inter({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://alfie.codes'),
  title: 'alfie.codes',
  openGraph: {
    title: 'alfie.codes',
  },
}

const themeScript = `try{if(localStorage.getItem('theme')==='dark')document.documentElement.setAttribute('data-theme','dark')}catch(e){}`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Inline and unminified: the theme must apply before first paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={styles.layout}>
        <Haptics />
        {children}
      </body>
    </html>
  )
}
