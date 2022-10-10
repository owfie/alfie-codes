export type Project = {
  id: string
  name: string
  slug: string
  image: HygraphImage[]
  description: string
  sourceCode: string
  demo: string
  tags: string[]
}

export type Post = {
  id: string
  title: string
  slug: string
  date: string
  content: string
  tags: string []
  coverImage: HygraphImage[]
  authors: Author[]
}

export type HygraphImage = {
  url: string
}

export type Author = {
  name: string
  slug: string
  bio: string
  intro: string
  picture: HygraphImage[]
  post: Post[] 
}