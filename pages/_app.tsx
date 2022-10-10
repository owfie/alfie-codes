import '../styles/globals.scss'
import styles from './_app.module.scss'

import type { AppProps } from 'next/app'
import { Sidebar } from '../src/Sidebar'
import { Page } from '../src/Page'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>alfie.codes</title>
        <meta property="og:title" content="alfie.codes" key="title" />
      </Head>
      <Sidebar />
      <div>
        <header>
          <nav>
            <HeaderLink href="/">Projects</HeaderLink>
            <HeaderLink href="/blog">Blog</HeaderLink>
            <HeaderLink href="/about">About</HeaderLink>
          </nav>
        </header>
        <Page>
          <Component {...pageProps} />
        </Page>
      </div>
      </>
  )
}

export default App

const HeaderLink: React.FC<{ href: string }> = ({ href, children }) => {
  const router = useRouter()

  const [ isActive, setIsActive ] = useState(false)

  useEffect(() => {
    if (router.pathname === href) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [router.pathname, href, setIsActive])

  return (
    <div className={styles.HeaderLink}>
      { isActive && <div className={styles.caret}>&gt;</div>}
      <Link href={href}>
        <a>
          { children }
        </a>
      </Link>
    </div>
  )
}
