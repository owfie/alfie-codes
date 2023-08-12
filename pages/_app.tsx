import '../styles/globals.scss'

import styles from './index.module.scss'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const localStorageKey = 'alfie.codes'

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => { }
})

function App({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState('light')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // When the component renders, get the data from local storage
    if (typeof window === 'undefined') return

    const storedTheme = localStorage.getItem(localStorageKey)
    if (!storedTheme) return

    setTheme(storedTheme)
    setLoading(false)
  }, [])

  useEffect(() => {
    // If the state changes, update it in local storage
    if (typeof window === 'undefined') return
    if (loading) return

    localStorage.setItem(localStorageKey, theme)
  }, [theme, loading])

  useEffect(() => {
    // if dark mode is enabled, set data-theme to dark
    if (theme === 'dark') {
      document.body.setAttribute('data-theme', 'dark')
    } else {
      document.body.setAttribute('data-theme', 'light')
    }
  }, [theme])

  const router = useRouter()
  const { pathname } = router

  return (
    <>
      <Head>
        <title>alfie.codes</title>
        <meta property="og:title" content="alfie.codes" key="title" />
      </Head>
      <ThemeContext.Provider value={{ theme, toggleTheme: () => { setTheme(theme === 'light' ? 'dark' : 'light') } }}>
        <div className={styles.container}>
          <header className={styles.header}>
            {/* <div>Alfie Edgeworth</div> */}
            <nav>
              {/* <Link href="/" passHref><a className={pathname === '/' ? styles.active : ''}>About</a></Link>
              <Link href="/work" passHref><a className={pathname === '/work' ? styles.active : ''}>Work</a></Link> */}
            </nav>
          </header>
          <Component {...pageProps} />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
