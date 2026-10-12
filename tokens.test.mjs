import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'

const file = (path) => readFileSync(new URL(path, import.meta.url), 'utf8')
const type = JSON.parse(file('dist/type.json'))
const kit = JSON.parse(file('src/kit.json'))
const css = file('dist/type.css')
const colorsCss = file('dist/colors.css')
const v4 = file('dist/tailwind.css')
const preset = (await import(new URL('dist/tailwind.cjs', import.meta.url))).default

/** The palette is flat `selector { --x: y; }` blocks. Replaying them in source
    order over the selectors an element matches gives its effective values —
    which is how a later :root can silently beat an earlier .dark. */
const blocks = [...colorsCss.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/([^{}]+)\{([^}]*)\}/g)].map((m) => ({
  selector: m[1].trim(),
  decls: [...m[2].matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map((d) => [d[1], d[2].trim()]),
}))
const resolve = (selectors) => {
  const out = {}
  for (const b of blocks) if (selectors.includes(b.selector)) for (const [k, v] of b.decls) out[k] = v
  return out
}
const light = resolve([':root'])
const darkRoot = resolve([':root', '.dark']) // <html class="dark">

const hex = (triplet) => {
  const [h, s, l] = triplet.replace(/deg/g, '').split(/\s+/).map(parseFloat)
  const k = (n) => (n + h / 30) % 12
  const a = (s / 100) * Math.min(l / 100, 1 - l / 100)
  const f = (n) => l / 100 - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return `#${[0, 8, 4].map((n) => Math.round(f(n) * 255).toString(16).padStart(2, '0')).join('')}`
}

test('every token reaches both outputs under the same name', () => {
  for (const name of Object.keys(type)) {
    assert.ok(css.includes(`.text-${name} {`), `missing .text-${name} in type.css`)
    assert.ok(preset.theme.extend.fontSize[name], `missing ${name} in the tailwind preset`)
    assert.ok(v4.includes(`--text-${name}: `), `missing --text-${name} in tailwind.css`)
  }
  assert.equal(Object.keys(preset.theme.extend.fontSize).length, Object.keys(type).length)
})

test('the CSS build carries what a Tailwind fontSize tuple cannot', () => {
  // `label` is the reason type.json exists rather than a raw Tailwind config.
  const label = css.slice(css.indexOf('.text-label {'))
  assert.match(label, /font-family: var\(--font-mono/)
  assert.match(label, /text-transform: uppercase/)
  assert.equal(preset.theme.extend.fontSize.label[1].fontFamily, undefined)
})

test('radius collapses to a single token', () => {
  const radii = Object.entries(preset.theme.extend.borderRadius).filter(([k]) => k !== 'none' && k !== 'full')
  assert.ok(radii.every(([, v]) => v === 'var(--radius)'), 'every named radius should be var(--radius)')
})

test('families resolve by role, and the three stacks ship', () => {
  const root = css.slice(css.indexOf(':root {'), css.indexOf('}'))
  assert.match(root, /--font-sans: Inter/)
  assert.match(root, /--font-display: Sora/)
  assert.match(root, /--font-mono: 'JetBrains Mono'/)
  // Display sizes take Sora, body sizes take Inter.
  assert.match(root, /--text-h1-500:[^;]*--font-display/)
  assert.match(root, /--text-p-400:[^;]*--font-sans/)
  assert.match(root, /--text-label:[^;]*--font-mono/)
  // Kit tokens declare their role explicitly rather than by name.
  assert.match(root, /--text-display:[^;]*--font-display/)
  assert.match(root, /--text-cta:[^;]*--font-mono/)
})

test('the brand blue is exact, and blue text still lifts on dark', () => {
  assert.equal(hex(light['--brand']), '#323dfe')
  assert.equal(hex(darkRoot['--brand']), '#323dfe')
  assert.equal(hex(light['--brand-text']), '#323dfe')
  assert.equal(hex(darkRoot['--brand-text']), '#4d6aff')
})

test('the kit surfaces are the production plivo.com values in both themes', () => {
  const expected = {
    '--surface': ['#fafafa', '#111317'],
    '--surface-2': ['#f4f4f5', '#181a20'],
    '--border-strong': ['#c9c9cf', '#40444f'],
    '--code': ['#f4f4f5', '#181a20'],
    '--code-foreground': ['#1c1c22', '#e4e4e7'],
  }
  for (const [name, [l, d]] of Object.entries(expected)) {
    assert.equal(hex(light[name]), l, `${name} light`)
    assert.equal(hex(darkRoot[name]), d, `${name} dark`)
  }
})

test('every variable a Tailwind colour points at is declared', () => {
  const refs = [...v4.matchAll(/--color-[\w-]+: ([^;]+);/g)].flatMap((m) => [...m[1].matchAll(/var\((--[\w-]+)\)/g)].map((r) => r[1]))
  assert.ok(refs.length > 50)
  for (const name of new Set(refs)) assert.ok(name in light, `${name} is mapped but never declared`)
})

test('the kit layers over the extraction without redefining it', () => {
  const extracted = JSON.parse(file('src/type.json'))
  assert.deepEqual(
    Object.keys(type),
    [...Object.keys(extracted), ...Object.keys(kit.type)],
    'kit type tokens are appended, never merged into extracted names'
  )
  for (const name of Object.keys(kit.colors)) assert.ok(preset.theme.extend.colors[name], `${name} missing from preset`)
})

test('the v4 stylesheet maps colours, one corner, and role families', () => {
  for (const name of ['background', 'primary-foreground', 'surface', 'surface-2', 'border-strong', 'brand-text', 'status-danger']) {
    assert.match(v4, new RegExp(`--color-${name}: `), `--color-${name}`)
  }
  for (const step of ['--radius', '--radius-xs', '--radius-lg', '--radius-4xl']) {
    assert.match(v4, new RegExp(`\\s${step}: var\\(--radius\\);`), step)
  }
  // Radius and type are utilities only: emitting --radius: var(--radius) would
  // be a cycle, and --text-<name> belongs to type.css.
  assert.match(v4, /@theme inline reference \{\s+--radius: var\(--radius\);/)
  assert.match(v4, /@utility text-label \{\s+font-family: var\(--font-mono\);\s+text-transform: uppercase;/)
  assert.match(v4, /@utility text-h1-500 \{\s+font-family: var\(--font-display\);/)
  // A body token naming a family would sort after font-mono and undo it.
  assert.doesNotMatch(v4, /@utility text-p-400 /)
})
