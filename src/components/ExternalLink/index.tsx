import Link from 'next/link'
import styles from './index.module.scss'

export const ExternalLink = (props: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link
      className={styles.Link}
      href={props.href}
      target="_blank"
      rel="noopener"
    >
      {props.children}
    </Link>
  )
}
