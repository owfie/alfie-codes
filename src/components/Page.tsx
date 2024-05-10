import { Link } from "@/components"
import styles from './Page.module.scss'
import ArrowLeft from '@/components/ArrowLeft.svg'

export const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.Page}>
      <nav>
        <Link href="/"><ArrowLeft /></Link>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}
