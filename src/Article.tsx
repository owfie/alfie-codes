import { Link } from "./Link";
import { Subtle } from "./Subtle";
import { Metadata } from "./types";
import styles from './Article.module.scss'

export default function Article({ metadata, children }: { metadata: Metadata, children: React.ReactNode }) {
  return <div className={styles.Article}>
    <Link href="/">&lt;-</Link>
    <article>
      <div>{metadata.title}</div>
      <Subtle>by Alfie Edgeworth, age {metadata.age}</Subtle>
      {children}
    </article>
  </div>
}
