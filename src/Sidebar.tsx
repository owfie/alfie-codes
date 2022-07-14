import Link from 'next/link'
import styles from './Sidebar.module.scss'

export const Sidebar: React.FC = () => {
  return (
    <aside className={styles.Sidebar}>
      <div className={styles.upper_content}>
        <b>Alfie Edgeworth</b>
        <span className={styles.location}>Adelaide, Australia</span>
        <p>Product designer.</p>
        <div>
          <Link href="mailto:hey@alfie.codes">Mail</Link>
          <Link href="https://www.linkedin.com/in/alfie-edgeworth/">LinkedIn</Link>
        </div>
      </div>
      © Alfie Edgeworth 2022
    </aside>
  )
}