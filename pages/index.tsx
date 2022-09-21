import type { NextPage } from 'next'
import { Project } from '../src/Project'

import styles from '../src/index.module.scss'

const Home: NextPage<ApolloResponse> = ( props ) => {
  const projects = props.projects.projects

  return (
    <div className={styles.index}>
      <div className={styles.container}>
        <div className={styles.projects}>
          {projects.map(project => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </div>
      
    </div>
  )
}

import { gql } from '@apollo/client'
import client from '../apollo/apollo-client'

type ApolloResponse = {
  projects: {
    projects: Project[]
  }
}

export const getServerSideProps = async () => {
  const { data } = await client.query<ApolloResponse>({
    query: gql`
      query MyQuery {
        projects(orderBy: publishedAt_ASC) {
          id
          name
          image {
            url
          }
        }
      }
    `
  })

  return {
    props: {
      projects: data
    }
  }
}

export default Home
