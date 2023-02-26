import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.scss'

const Home: NextPage = ( props ) => {

  return (
    <div className={styles.container}>
      <section className={styles.bio}>
        <b>Alfie Edgeworth, B. CS</b>
        <span className={styles.location}>Adelaide, Australia</span>
        <p>UI Engineer & Designer</p>
        <Nav 
          links={[
            {href: 'mailto:hey@alfie.codes', title: 'Contact'},
            {href: 'https://read.cv/alfie', title: 'Resume'}
          ]}
        />
      </section>
      <div className={styles.tiptap}>
          <Image layout="fill" src={'/desk.png'} alt={'An illustrated Alfie sits at a desk on his laptop.'}/>
      </div>
      <section className={styles.footer}>
        <span>© Alfie Edgeworth 2023</span>
        <Nav 
          links={[
            {href: 'https://github.com/owfie', title: 'GitHub'},
            {href: 'https://twitter.com/alfie_codes', title: 'Twitter'},
            {href: 'https://www.linkedin.com/in/alfie-edgeworth/', title: 'LinkedIn'},
            {href: 'https://dribbble.com/owfie/', title: 'Dribbble'},
          ]}
        />
      </section>
    </div>
  )
}

interface INav {
  links: {href: string, title: string}[]
}

const Nav: React.FC<INav> = (props) => <nav className={styles.nav}>
  {props.links.map((l, i) => 
    <Link key={`${l.title}-${i}`} href={l.href}>{l.title}</Link>
  )}
</nav>

export default Home
