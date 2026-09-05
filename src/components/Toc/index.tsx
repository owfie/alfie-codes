'use client'

import { useEffect, useState } from 'react'
import styles from './index.module.scss'

export interface TocItem {
  id: string
  title: string
}

const SPY_OFFSET = 120

export const Toc = ({ items }: { items: TocItem[] }) => {
  const [active, setActive] = useState('')

  useEffect(() => {
    const spy = () => {
      let current = ''
      for (const item of items) {
        if (!item.id) continue
        const heading = document.getElementById(item.id)
        if (heading && heading.getBoundingClientRect().top <= SPY_OFFSET) {
          current = item.id
        }
      }
      setActive(current)
    }
    spy()
    window.addEventListener('scroll', spy, { passive: true })
    window.addEventListener('resize', spy)
    return () => {
      window.removeEventListener('scroll', spy)
      window.removeEventListener('resize', spy)
    }
  }, [items])

  return (
    <nav className={styles.Toc}>
      {items.map((item) => (
        <a
          key={item.id || 'intro'}
          href={item.id ? `#${item.id}` : '#'}
          data-active={active === item.id || undefined}
        >
          {item.title}
        </a>
      ))}
    </nav>
  )
}
