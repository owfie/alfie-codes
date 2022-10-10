import Image from 'next/image'
import Link from 'next/link'
import styles from './ProjectCard.module.scss'
import { Project as HygraphProject } from './types'

interface ProjectProps {
  project: HygraphProject
}

export const ProjectCard: React.FC<ProjectProps> = ({
  project
}) => {
  return (

      <div className={styles.Project}>
        <div className={styles.image}>
          <Link href={'/about'} passHref>
            <a>
              <Image 
                src={project.image[0].url}
                alt={project.name}
                layout="fill"
                objectFit="cover"

              />
            </a>
          </Link>
        </div>
        <b>
          <Link href={'/about'}>
            { project.name }
          </Link>
        </b>
        <p>{ project.description }</p>
      </div>

  )
}