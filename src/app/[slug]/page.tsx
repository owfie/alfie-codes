import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import path from 'path'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'

import { remark } from 'remark'
import remarkDirective from 'remark-directive'
import remarkRehype from 'remark-rehype'
import { Page, Subtle } from '@/components'
import { Toc, type TocItem } from '@/components/Toc'
import { remarkArticleDirectives } from '@/utils/directives'
import { whitelist } from '@/utils/getMetadata'
import { replaceMetroLineBadges } from '@/utils/metroLines'
import styles from './article.module.scss'

export async function generateStaticParams() {
  return whitelist.map((article) => {
    return {
      slug: article,
    }
  })
}

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!whitelist.includes(slug)) {
    notFound()
  }

  const dir = path.join(process.cwd(), 'src/articles')
  const fullPath = path.join(dir, `${slug}.md`)
  const { data, content } = matter.read(fullPath, { excerpt: false })

  const processed = await remark()
    .use(remarkDirective)
    .use(remarkArticleDirectives)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content)
  const htmlContent = replaceMetroLineBadges(processed.toString())

  const headingRegex = /<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g
  const toc: TocItem[] = [{ id: '', title: 'Intro' }]
  let m: RegExpExecArray | null
  while ((m = headingRegex.exec(htmlContent))) {
    const title = m[2]
      .replace(/<label>[\s\S]*?<\/label>/g, '')
      // The badge SVGs carry the line letter as <text>, so drop them wholesale
      // rather than let the tag strip below leave "HTG" on the end of a title
      .replace(/<span class="lines">[\s\S]*?<\/span>/g, '')
      .replace(/<[^>]*>/g, '')
      .replace(/★/g, '')
      .trim()
    toc.push({ id: m[1], title })
  }

  return (
    <Page aside={<Toc items={toc} />}>
      <header className={styles.header}>
        <b>{data.title}</b>
        <Subtle>By Alfie, age {data.age}</Subtle>
      </header>
      <article
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </Page>
  )
}
