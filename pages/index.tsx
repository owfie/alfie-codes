import type { NextPage } from 'next'
import { Project } from '../src/Project'

import styles from '../src/index.module.scss'

const projects = [
  {
    title: 'eldroW',
    description: 'A Wordle clone with pizzazz.',
    images: [],
    github: 'https://github.com/owfie/eldrow',
  },
  {
    title: 'Matchup',
    description: 'A mobile-first platform for sports clubs.',
    images: [],
    github: 'https://github.com/owfie/matchup',
  },
  {
    title: 'Flinders Ultimate',
    description: 'A lil’ site for a frisbee club.',
    images: [],
    github: 'https://github.com/owfie/flinders-ultimate',
  }
]

const Home: NextPage = () => {
  return (
    <div className={styles.index}>
      <div className={styles.container}>
        <div className={styles.projects}></div>
        {projects.map((project, i) => <Project key={`project-${i}`} project={project} />)}
      </div>
      
    </div>
  )
}

export default Home
