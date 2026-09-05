'use client'

import Image from 'next/image'
import styles from './index.module.scss'

const toggle = () => {
  const el = document.documentElement
  const next = el.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  if (next === 'dark') {
    el.setAttribute('data-theme', 'dark')
  } else {
    el.removeAttribute('data-theme')
  }
  try {
    localStorage.setItem('theme', next)
  } catch {}
}

export const ThemeToggle = () => {
  return (
    <div className={styles.desk}>
      <button
        type="button"
        aria-label="Toggle dark mode"
        className={styles.switch}
        onClick={toggle}
      >
        <Image
          className={styles.light}
          src="/switch_light.png"
          alt=""
          width={67}
          height={104}
          loading="eager"
        />
        <Image
          className={styles.dark}
          src="/switch_dark.png"
          alt=""
          width={67}
          height={104}
          loading="eager"
        />
      </button>
      <Image
        className={styles.light}
        src="/desk_light.png"
        alt="Illustration of Alfie working at a desk"
        width={1652}
        height={816}
        loading="eager"
        sizes="(max-width: 768px) 100vw, 600px"
      />
      <Image
        className={styles.dark}
        src="/desk_dark.png"
        alt="Illustration of Alfie working at a desk"
        width={1652}
        height={816}
        loading="eager"
        sizes="(max-width: 768px) 100vw, 600px"
      />
    </div>
  )
}
