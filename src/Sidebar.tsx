import Link from 'next/link'
import styles from './Sidebar.module.scss'

export const Sidebar: React.FC = () => {
  return (
    <aside className={styles.Sidebar}>
      <div className={styles.upper_content}>
        <b>Alfie Edgeworth</b>
        <span className={styles.location}>Adelaide, Australia</span>
        <div>
          <Link href="mailto:hey@alfie.codes">Contact</Link>
          <Link href="https://read.cv/alfie">CV</Link>
        </div>
      </div>
      <span className={styles.copyright}>© Alfie Edgeworth 2022</span>
    </aside>
  )
}