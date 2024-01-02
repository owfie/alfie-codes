import { Metadata } from 'next'

import '@/styles/globals.scss'
import styles from './styles.module.scss'

export const metadata: Metadata = {
  metadataBase: new URL('https://alfie.codes'),
  title: 'alfie.codes',
  openGraph: {
    title: 'alfie.codes',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={styles.layout}>
        {children}
      </body>
    </html>
  )
}
