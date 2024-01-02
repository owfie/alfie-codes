import { whitelist } from "@/utils/getMetadata"
import { Subtle, Page } from "@/components"
import styles from './article.module.scss'

import { notFound } from "next/navigation"
import React from "react"
import path from "path"
import matter from "gray-matter"
import Markdown from 'markdown-to-jsx'
import { remark } from "remark"
import html from "remark-html"

export async function generateStaticParams() {
  return whitelist.map((article) => {
    return {
      slug: article
    }
  })
}

export default async function Article({ params }: { params: { slug: string } }) {

  if (!whitelist.includes(params.slug)) {
    notFound()
  }

  const dir = path.join(process.cwd(), 'src/articles')
  const fullPath = path.join(dir, `${params.slug}.md`)
  const { data, content } = matter.read(fullPath, { excerpt: false })

  const processedContent = await remark()
    .use(html, {sanitize: false})
    .process(content)
  let htmlContent = processedContent.toString();

  return (
    <Page>
      <header className={styles.header}>
        <b>{data.title}</b>
        <Subtle>By Alfie Edgeworth, age {data.age}</Subtle>
      </header>

      <Markdown
        className={styles.content}
        options={{
          overrides: {
            label: {
              component: Subtle
            }
          },
          wrapper: 'article'
        }}
      >
        {htmlContent}
      </Markdown>
    </Page>
  )
}
