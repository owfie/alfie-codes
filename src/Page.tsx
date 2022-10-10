import Link from 'next/link'
import styles from './Page.module.scss'
import { Sidebar } from './Sidebar'

export const Page: React.FC = ({ children }) => {
  return (
    <main className={styles.Page}>
      { children }
    </main>
  )
}