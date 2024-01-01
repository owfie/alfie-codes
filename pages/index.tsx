import styles from './index.module.scss'
import { Metadata } from '../src/types'
import { Subtle } from '../src/Subtle'
import { Link } from "../src/Link"
import { getMetadataFromMdxFiles } from '../src/getMetadata'

export async function getStaticProps() {
  const metadataList = getMetadataFromMdxFiles()

  return {
    props: {
      metadataList,
    },
  }
}

interface IHome {
  metadataList: Metadata[]
}

const Home = ({ metadataList }: IHome) => {
  return (
    <>
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
        metadataList.map((metadata) => {
          return <li key={metadata.slug}>
            <Link href={metadata.slug}>{metadata.title}</Link>
            <Subtle>2023</Subtle>
          </li>
        })
      }

      </List>
    </>
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

const List: React.FC = (props) => {
  return <ul className={styles.List}>
    {props.children}
  </ul>
}

export default Home
