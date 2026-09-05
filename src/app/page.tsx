import { Link, Section, Subtle } from '@/components'
import { ExternalLink } from '@/components/ExternalLink'
import { ThemeToggle } from '@/components/ThemeToggle'
import { articles } from '@/utils/getMetadata'
import styles from './styles.module.scss'

const projects = [
  // {
  //   title: 'Alias',
  //   href: '#',
  //   description: 'The QA validation layer for your application.',
  // },
  {
    title: 'Atto',
    href: 'https://atto.to',
    description: 'The cloud for small software.',
  },
  {
    title: 'Alias',
    href: 'https://alias.is',
    description: 'The QA validation layer for your application.',
  },
  {
    title: 'Retro',
    href: 'https://retro.ac',
    description: 'Time tracking for humans.',
  },
  {
    title: 'Sans',
    href: 'https://sans.md',
    description: 'Local Markdown viewer for project documentation.',
  },
  // {
  //   title: 'Inform',
  //   href: '#',
  //   description: 'Prompt-based substrate for computer vision sports analysis.',
  // },
]

const Home = () => {
  return (
    <main className={styles.container}>
      <header className={styles.bio}>
        <b>Alfie Edgeworth</b>
        <Subtle>Adelaide, Australia</Subtle>
      </header>
      <p>
        Design Engineer. Currently{' '}
        <ExternalLink href="https://beyondlabs.net">
          Beyond Labs
        </ExternalLink>
        .
      </p>
      <div className={styles.links}>
        <ExternalLink href="https://www.linkedin.com/in/alfie-edgeworth">
          LinkedIn
        </ExternalLink>
        <ExternalLink href="mailto:hey@alfie.codes">Email</ExternalLink>
      </div>
      <Section title="Notes">
        <div className={styles.notes}>
          {articles.map((metadata) => {
            return (
              <Link
                key={metadata.slug}
                href={metadata.slug}
                className={styles.note}
              >
                <span>{metadata.title}</span>
                <Subtle>{metadata.year}</Subtle>
              </Link>
            )
          })}
        </div>
      </Section>
      <Section title="Projects">
        <div className={styles.projects}>
          {projects.map((project) => {
            return (
              <div key={project.title} className={styles.project}>
                <ExternalLink href={project.href}>{project.title}</ExternalLink>
                <Subtle>{project.description}</Subtle>
              </div>
            )
          })}
        </div>
      </Section>
      {/* <ThemeToggle /> */}
    </main>
  )
}

export default Home
