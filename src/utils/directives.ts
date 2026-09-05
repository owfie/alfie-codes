/**
 * Maps the article directives onto HTML, so markdown can stay prose-shaped:
 *
 *   ## Switch Coffee :in[Chuo City]   ->  <h2>Switch Coffee<label>…</label></h2>
 *   ::lines[H T G]                    ->  <span class="lines"><i data-line="H">…
 *
 * A ::lines directly beneath a heading is hoisted into it, so the café, the
 * ward and the train badges share one row.
 *
 * The badge placeholders are swapped for SVGs afterwards by
 * replaceMetroLineBadges, which runs on the stringified HTML.
 */

interface Node {
  type: string
  name?: string
  value?: string
  children?: Node[]
  data?: Record<string, unknown>
}

const WHITESPACE = /\s+/

function textOf(node: Node): string {
  if (typeof node.value === 'string') return node.value
  return (node.children ?? []).map(textOf).join('')
}

function visit(node: Node, fn: (node: Node) => void) {
  fn(node)
  for (const child of node.children ?? []) visit(child, fn)
}

export function remarkArticleDirectives() {
  return (tree: Node) => {
    visit(tree, (node) => {
      // :in[Chuo City] — the greyed ward beside a heading
      if (node.type === 'textDirective' && node.name === 'in') {
        node.data = { ...node.data, hName: 'label' }
        return
      }

      // ::lines[H T G] — a row of train-line badges
      if (node.type === 'leafDirective' && node.name === 'lines') {
        const codes = textOf(node).trim().split(WHITESPACE).filter(Boolean)

        node.data = {
          ...node.data,
          hName: 'span',
          hProperties: { className: ['lines'] },
          hChildren: codes.map((code) => ({
            type: 'element',
            tagName: 'i',
            properties: { dataLine: code },
            children: [],
          })),
        }
      }
    })

    hoistLinesIntoHeadings(tree)
  }
}

/**
 * ::lines is authored on its own line to keep the markdown prose-shaped, but it
 * belongs to the heading above it. Moving it inside lets the heading's flex row
 * lay out the name, the ward and the badges together.
 */
function hoistLinesIntoHeadings(tree: Node) {
  const children = tree.children ?? []

  // Backwards, so splicing a directive out can't shift an index we've yet to see
  for (let i = children.length - 1; i > 0; i--) {
    const node = children[i]
    const heading = children[i - 1]

    if (node.type !== 'leafDirective' || node.name !== 'lines') continue
    if (heading.type !== 'heading') continue

    heading.children = [...(heading.children ?? []), node]
    children.splice(i, 1)
  }
}
