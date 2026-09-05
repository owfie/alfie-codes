'use client'

import { useEffect } from 'react'
import { canPlay, hoverTick, unlock } from '@/utils/haptics'

const UNLOCK_EVENTS = ['pointerdown', 'keydown'] as const
const TARGETS = 'a, button'

/**
 * Listens at the document so markdown-rendered article links are covered
 * too — those never pass through a React component.
 */
export const Haptics = () => {
  useEffect(() => {
    if (!canPlay()) return

    for (const type of UNLOCK_EVENTS) {
      window.addEventListener(type, unlock, { passive: true, capture: true })
    }

    // pointerover bubbles from child nodes, so track the element we're on
    // to avoid re-firing as the cursor moves within one link.
    let current: Element | null = null
    const onPointerOver = (event: PointerEvent) => {
      const target =
        event.target instanceof Element ? event.target.closest(TARGETS) : null
      if (target === current) return
      current = target
      if (target) hoverTick()
    }

    document.addEventListener('pointerover', onPointerOver, { passive: true })

    return () => {
      for (const type of UNLOCK_EVENTS) {
        window.removeEventListener(type, unlock, { capture: true })
      }
      document.removeEventListener('pointerover', onPointerOver)
    }
  }, [])

  return null
}
