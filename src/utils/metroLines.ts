import fs from 'node:fs'
import path from 'node:path'

const BADGE_DIR = path.join(process.cwd(), 'src/components/MetroLine')

const badgeCache = new Map<string, string>()

export function getMetroLineBadge(line: string): string {
  const upper = line.toUpperCase()

  const cached = badgeCache.get(upper)
  if (cached !== undefined) {
    return cached
  }

  const svgPath = path.join(BADGE_DIR, `${upper}.svg`)
  const badge = fs.existsSync(svgPath)
    ? fs.readFileSync(svgPath, 'utf-8').trim()
    : ''

  badgeCache.set(upper, badge)
  return badge
}

export function replaceMetroLineBadges(html: string): string {
  return html.replace(
    /<span class="lines">([\s\S]*?)<\/span>/g,
    (_, inner: string) => {
      const badges = inner.replace(
        /<i data-line="([^"]+)"><\/i>/g,
        (_match, line: string) => getMetroLineBadge(line),
      )
      return `<span class="lines">${badges}</span>`
    },
  )
}
