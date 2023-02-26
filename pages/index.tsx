import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.scss'
import { useContext } from 'react'
import { ThemeContext } from './_app'

const Home: NextPage = ( props ) => {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={styles.container}>
      <section>
        <div className={styles.bio}>
          <b>Alfie Edgeworth, B. CS</b>
          <span className={styles.location}>Adelaide, Australia</span>
          <p>UI Engineer & Designer</p>
          <Nav 
            links={[
              {href: 'mailto:hey@alfie.codes', title: 'Mail'},
              {href: 'https://read.cv/alfie', title: 'CV'}
            ]}
          />
        </div>
        <div 
          className={styles.switch}
          onClick={toggleTheme}
        >
          <Image 
            style={{visibility: `${theme === 'light' ? 'visible' : 'hidden'}`}} 
            layout="fill" 
            src={'/switch_light.png'} 
            alt={'A light switch.'}
          />
          <Image 
            style={{visibility: `${theme === 'dark' ? 'visible' : 'hidden'}`}} 
            layout="fill" 
            src={'/switch_dark.png'} 
            alt={'A light switch.'}
          />
        </div>
      </section>
      <div className={styles.tiptap}>
          <Image 
            style={{visibility: `${theme === 'light' ? 'visible' : 'hidden'}`}} 
            layout="fill" 
            src={'/desk_light.png'} 
            alt={'An illustrated Alfie sits at a desk on his laptop.'}
          />
          <Image 
            style={{visibility: `${theme === 'dark' ? 'visible' : 'hidden'}`}} 
            layout="fill" 
            src={'/desk_dark.png'} 
            alt='An illustrated Alfie sits at a desk on his laptop. It is dark, but his face is illuminated by the glow of his laptop.'
          />
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
