import type { NextPage } from 'next'
import { ProjectCard } from '../src/ProjectCard'

import styles from './index.module.scss'

interface HomeProps {
  projects: Project[]
  posts: Post[]
}

const Home: NextPage<HomeProps> = ( props ) => {

  const { projects, posts } = props

  return (
    // <pre>
    //   { JSON.stringify(props.posts, null, 2) }
    // </pre>
    <div className={styles.index}>
      <div className={styles.container}>
        <div className={styles.projects}>
          {projects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
          {/* {posts.map(post => (
            <>
              <div key={post.title}> {post.title} </div>
              <Markdown
                content={post.content}
              />
            </>
          ))} */}
        </div>
      </div>
      
    </div>
  )
}

import { gql } from '@apollo/client'
import client from '../apollo/apollo-client'
import { Post, Project } from '../src/types'
import { Markdown } from '../src/Markdown'

export const getServerSideProps = async () => {
  const { data } = await client.query<HomeProps>({
    query: gql`
      query MyQuery {
        projects(orderBy: publishedAt_ASC) {
          id
          slug
          demo
          name
          image {
            url
          }
        }
        posts(orderBy: publishedAt_ASC) {
          id
          title
          content
        }
      }
    `
  })

  return {
    props: data
  }
}

export default Home
