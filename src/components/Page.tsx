import { Link } from '@/components'
import Return from '@/components/Icon/Return.svg'
import styles from './Page.module.scss'

export const Page = ({
  children,
  aside,
}: {
  children: React.ReactNode
  aside?: React.ReactNode
}) => {
  return (
    <div className={styles.Page}>
      <aside className={styles.aside} data-has-toc={aside ? true : undefined}>
        <Link href="/" className={styles.indexLink}>
          <Return />
          <span>Index</span>
        </Link>
        {aside ? <div className={styles.toc}>{aside}</div> : null}
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  )
}
