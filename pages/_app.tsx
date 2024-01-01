import '../styles/globals.scss'

import styles from './index.module.scss'

import type { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>alfie.codes</title>
        <meta property="og:title" content="alfie.codes" key="title" />
      </Head>
      <div className={styles.container}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App
