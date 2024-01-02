import matter from 'gray-matter'
import fs from "fs"
import path from "path"
import { Metadata } from './types'

export const getMetadataFromMdxFiles = () => {
  const pagesDirectory = path.join(process.cwd(), 'src/articles')
  const files = fs.readdirSync(pagesDirectory)

  const mdxFiles = files.filter((file) => file.endsWith('.md'))

  const metadataList = mdxFiles.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(pagesDirectory, fileName)
    const { data } = matter.read(fullPath)

    return { title: data.title, slug, age: data.age, year: data.year } as Metadata
  });

  return metadataList.filter((metadata) => !!metadata.title)
}

export const articles = getMetadataFromMdxFiles()
export const whitelist = articles.map(article => article.slug)
