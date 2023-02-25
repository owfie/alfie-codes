import '../styles/globals.scss'

import type { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>alfie.codes</title>
        <meta property="og:title" content="alfie.codes" key="title" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App