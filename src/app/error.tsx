'use client'

import { Page } from '@/components'

// Next's error boundary is handed { error, reset }, never a status code, so
// this mirrors not-found rather than trying to report one.
const ErrorPage = () => {
  return <Page>Error</Page>
}

export default ErrorPage
