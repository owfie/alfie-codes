import matter from 'gray-matter'
import fs from "fs"
import path from "path"

export const getMetadataFromMdxFiles = () => {
  const pagesDirectory = path.join(process.cwd(), 'pages')
  const files = fs.readdirSync(pagesDirectory)

  const mdxFiles = files.filter((file) => file.endsWith('.mdx'))

  const metadataList = mdxFiles.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(pagesDirectory, fileName)
    const { data } = matter.read(fullPath , { delimiters: ['export const metadata = {', '}'] })

    return { title: data.title, slug, age: data.age } as Metadata
  });

  return metadataList.filter((metadata) => !!metadata.title)
}
