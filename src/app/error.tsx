'use client'

import { Page } from "@/components"

const Error = ({ statusCode }: { statusCode: any }) => {
  return <Page>{statusCode}</Page>
}

export default Error
