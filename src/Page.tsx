import Link from 'next/link'
import styles from './Page.module.scss'

export const Page: React.FC = ({ children }) => {
  return (
    <main className={styles.Page}>
      <header>
        Projects
        <nav>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </header>
      { children }
    </main>
  )
}