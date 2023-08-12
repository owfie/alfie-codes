import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.scss'
import { useContext } from 'react'
import { ThemeContext } from './_app'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <div>
        <p className={styles.bio}>
          My name’s Alfie.
          I’m a frontend developer and designer based in Adelaide, Australia.
          I specialise in developing server-side React applications with Typescript.
          I’m passionate about product design and UI systems.
        </p>
        <p>
          I’m currently doing frontend for <a href="https://fluidity.money">Fluidity</a>.
          You can reach me via <a href="mailto:alfie.edgeworth@pm.me">email</a>.
        </p>
      </div>
      <div className={styles.tiptap}>
        <div className={styles.switch} onClick={toggleTheme} style={{ display: theme === 'light' ? 'unset' : 'none' }}>
          <Image
            loading="eager"
            width="67"
            height="104"
            src={`/switch_light.png`}
            alt={'A light switch.'}
          />
        </div>
        <div className={styles.switch} onClick={toggleTheme} style={{ display: theme === 'dark' ? 'unset' : 'none' }}>
          <Image
            loading="eager"
            width="67"
            height="104"
            src={`/switch_dark.png`}
            alt={'A light switch.'}
          />
        </div>
        <div className={styles.me} style={{ display: theme === 'light' ? 'unset' : 'none' }}>
          <Image
            loading="eager"
            width="1652"
            height="816"
            src={`/desk_light.png`}
            alt={'An illustrated Alfie sits at a desk on his laptop.'}
          />
        </div>
        <div className={styles.me} style={{ display: theme === 'dark' ? 'unset' : 'none' }}>
          <Image
            loading="eager"
            width="1652"
            height="816"
            src={`/desk_dark.png`}
            alt={'An illustrated Alfie sits at a desk on his laptop. It is dark, but his face is illuminated by the glow of his laptop.'}
          />
        </div>
      </div>
      {/* <footer className={styles.footer}>
        © Alfie Edgeworth 2023
        <Nav
          links={[
            { href: 'https://github.com/owfie', title: 'GitHub' },
            { href: 'https://www.linkedin.com/in/alfie-edgeworth/', title: 'LinkedIn' },
            { href: 'https://dribbble.com/owfie/', title: 'Dribbble' },
          ]}
        />
      </footer> */}
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

export default Home
