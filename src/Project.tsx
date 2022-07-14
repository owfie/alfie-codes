import styles from './Project.module.scss'

type Project = {
  title: string
  description: string
  images: string []
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
      Hello world
    </div>
  )
}