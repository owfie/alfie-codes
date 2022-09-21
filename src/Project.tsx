import Image from 'next/image'
import styles from './Project.module.scss'

export type Project = {
  name: string
  image: {
    url: string
  }[]
  description: string
  github: string
}

interface ProjectProps {
  project: Project
}

export const Project: React.FC<ProjectProps> = ({
  project
}) => {
  return (
    <div className={styles.Project}>
      <div className={styles.image}>
        <Image 
          src={project.image[0].url}
          alt={project.name}
          layout="fill"
          objectFit="cover"

        />
      </div>
      <b>{ project.name }</b>
    </div>
  )
}