import '../styles/globals.scss'

import type { AppProps } from 'next/app'
import { Sidebar } from '../src/Sidebar'
import { Page } from '../src/Page'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>alfie.codes</title>
        <meta property="og:title" content="alfie.codes" key="title" />
      </Head>
      <Sidebar />
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  )
}

export default MyApp