import { Link } from "@/components"
import styles from './Page.module.scss'

export const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.Page}>
      <nav>
        <Link href="/">&lt;-</Link>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}
