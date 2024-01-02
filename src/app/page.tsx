import styles from './styles.module.scss'
import { Link, Subtle } from "@/components"
import { articles } from '@/utils/getMetadata'

const Home = () => {
  return (
    <main className={styles.container}>
      <div className={styles.bio}>
          Alfie Edgeworth is a frontend engineer and designer based in Adelaide, Australia.
      </div>
      <List>
        <li>
          <span>Founder at <Link href="https://tauhaus.au">Tauhaus</Link></span>
          <Subtle>2023</Subtle>
        </li>
        <li>
          <span>Frontend Engineer at <Link href="https://fluidity.money">Fluidity</Link></span>
          <Subtle>2022 - 2023</Subtle>
        </li>
        <li>
          <span>Junior Developer at <Link href="https://enabled.com.au">Enabled</Link></span>
          <Subtle>2020 - 2021</Subtle>
        </li>
      </List>
      <Nav
        links={[
          { href: 'mailto:alfie.edgeworth@pm.me', title: 'Mail' },
          { href: 'https://www.linkedin.com/in/alfie-edgeworth/', title: 'LinkedIn' },
        ]}
      />
      <List>
      {
        articles.map((metadata) => {
          return <li key={metadata.slug}>
            <Link href={metadata.slug}>{metadata.title}</Link>
            <Subtle>{metadata.year}</Subtle>
          </li>
        })
      }
      </List>
    </main>
  )
}

interface INav {
  links: { href: string, title: string }[]
}

const Nav: React.FC<INav> = (props) => <nav className={styles.nav}>
  {props.links.map((l, i) =>
    <Link key={`${l.title}-${i}`} href={l.href}>{l.title}</Link>
  )}
</nav>

const List = (props: { children: React.ReactNode }) => {
  return <ul className={styles.List}>
    {props.children}
  </ul>
}

export default Home
