// Checks the authored plivo.com kit layer against the plivo.com site itself, the way
// extract.mjs keeps the product layer honest against the console. Reads the site's theme
// blocks (src/styles/global.css), the Instrument Panel recipe (instrument-panel.css) and the
// type table in its DESIGN.md, and compares each with what dist/ ships.
//
// Kit tokens must match exactly; a mismatch exits 1. Names both systems define print as NOTE:
// the console value ships there by design (DESIGN.md › Known gaps).
//
//   node scripts/compare-site.mjs <website-repo-path>
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const [site] = process.argv.slice(2)
if (!site) {
  console.error('usage: node scripts/compare-site.mjs <website-repo-path>')
  process.exit(1)
}
const own = (p) => readFileSync(new URL(`../${p}`, import.meta.url), 'utf8')
const theirs = (p) => readFileSync(join(site, p), 'utf8')

/** Effective custom properties for an element matching `selectors`, replaying dist/colors.css
    in source order — a later :root can beat an earlier .dark on <html class="dark">. */
const blocks = [...own('dist/colors.css').replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/([^{}]+)\{([^}]*)\}/g)]
const resolve = (selectors) => {
  const out = {}
  for (const [, sel, body] of blocks)
    if (selectors.includes(sel.trim())) for (const [, k, v] of body.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) out[k] = v.trim()
  return out
}
const ours = { light: resolve([':root']), dark: resolve([':root', '.dark']) }

/** The brace-matched block opened by the last `opener` before `marker` in the site's CSS. */
const css = theirs('src/styles/global.css')
const blockBefore = (opener, marker) => {
  let i = css.indexOf('{', css.lastIndexOf(opener, css.indexOf(marker)))
  const from = i + 1
  for (let depth = 0; i < css.length; i++) {
    if (css[i] === '{') depth++
    else if (css[i] === '}' && --depth === 0) break
  }
  const body = css.slice(from, i).replace(/\/\*[\s\S]*?\*\//g, '')
  return Object.fromEntries([...body.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]))
}
const siteLight = blockBefore(':root {', '----- LIGHT -----')
const theirsByTheme = { light: siteLight, dark: { ...siteLight, ...blockBefore('.dark {', '----- DARK') } }
const brandHex = /--color-plivo-blue:\s*(#[0-9a-f]{6})/i.exec(css)?.[1]
const darkTextLift = /\.dark \.text-primary,[\s\S]*?color:\s*(#[0-9a-f]{6})/i.exec(css)?.[1]

const hex = (v) => {
  if (!v) return 'missing'
  if (/^#[0-9a-f]{6}$/i.test(v)) return v.toLowerCase()
  const [h, s, l] = v.replace(/deg/g, '').split(/\s+/).map(parseFloat)
  const k = (n) => (n + h / 30) % 12
  const a = (s / 100) * Math.min(l / 100, 1 - l / 100)
  const f = (n) => l / 100 - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return `#${[0, 8, 4].map((n) => Math.round(f(n) * 255).toString(16).padStart(2, '0')).join('')}`
}
const value = (theme, name) => {
  let v = ours[theme][name]
  for (let i = 0; i < 5 && /^var\(--[\w-]+\)$/.test(v ?? ''); i++) v = ours[theme][v.slice(4, -1)]
  return hex(v)
}

let failed = 0
const line = (status, label, detail) => {
  if (status === 'FAIL') failed++
  console.log(`${status.padEnd(5)} ${label.padEnd(18)} ${detail}`)
}
const both = (name, siteValue) =>
  ['light', 'dark'].map((t) => ({ t, site: siteValue(t), ours: value(t, name) }))
const report = (name, rows, mustMatch) => {
  const same = rows.every((r) => r.site === r.ours)
  const detail = rows.map((r) => `${r.t} ${r.site} → ${r.ours}`).join('   ')
  line(same ? 'PASS' : mustMatch ? 'FAIL' : 'NOTE', name, same || mustMatch ? detail : `${detail}   (console value ships)`)
}

console.log('colours: plivo.com → @plivo/tokens')
for (const name of ['--surface', '--surface-2', '--border-strong', '--code', '--code-foreground'])
  report(name, both(name, (t) => hex(theirsByTheme[t][name])), true)
report('--brand', both('--brand', () => hex(brandHex)), true)
report('--brand-text', both('--brand-text', (t) => hex(t === 'dark' ? darkTextLift : brandHex)), true)
for (const name of ['--background', '--foreground', '--card', '--popover', '--muted', '--muted-foreground', '--border'])
  report(name, both(name, (t) => hex(theirsByTheme[t][name])), false)

// The site ramp, against the type table in plivo.com's DESIGN.md frontmatter.
console.log('\ntype: plivo.com DESIGN.md → @plivo/tokens')
const front = theirs('DESIGN.md').split('\n---')[0]
const table = front.slice(front.indexOf('\ntypography:'), front.indexOf('\nrounded:'))
const doc = Object.fromEntries(
  [...table.matchAll(/^ {2}([\w-]+):\n((?: {4}[^\n]*\n?)+)/gm)].map((m) => [
    m[1],
    Object.fromEntries([...m[2].matchAll(/ {4}(\w+):\s*"?([^"\n]+)"?/g)].map((x) => [x[1], x[2].trim()])),
  ])
)
const ramp = JSON.parse(own('dist/type.json'))
const px = (v) => (/rem$/.test(v) ? `${parseFloat(v) * 16}px` : v)
const size = (v) => {
  const c = /^clamp\(([^,]+),[^,]+,([^)]+)\)$/.exec(v)
  return c ? px(c[2].trim()) : px(v) // a fluid size is documented by its desktop end
}
const face = (t) => ({ sora: 'Sora', jetbrains: 'JetBrains Mono' })[t.family] ?? 'Inter'
for (const [token, name] of [['display', 'display'], ['headline', 'headline'], ['title', 'card-title'], ['body-lg', 'body-lg'], ['body', 'body'], ['body-sm', 'body-sm'], ['caption', 'caption'], ['kicker', 'kicker'], ['stat', 'mono-stat']]) {
  const d = doc[name]
  const t = ramp[token]
  const theirsT = [d.fontFamily, px(d.fontSize), d.fontWeight, d.lineHeight, d.letterSpacing].filter(Boolean).join(' ')
  const oursT = [face(t), size(t.size), t.weight, d.lineHeight && t.line, d.letterSpacing && t.tracking].filter(Boolean).join(' ')
  line(theirsT === oursT ? 'PASS' : 'FAIL', token, `${theirsT} → ${oursT}`)
}

// The CTA voice and the corner come from the Instrument Panel layer, not DESIGN.md's table.
const ip = theirs('src/styles/instrument-panel.css')
const cta = `${/--ip-cta-tracking:\s*([\d.]+em)/.exec(ip)?.[1]} ${/font-weight:\s*(\d+)\s*!important;\s*font-size:\s*11px/.exec(ip)?.[1]}`
const oursCta = `${ramp.cta.tracking} ${ramp.cta.weight}`
line(cta === oursCta ? 'PASS' : 'FAIL', 'cta', `tracking+weight ${cta} → ${oursCta}`)
const corner = /border-radius:\s*(2px)\s*!important/.exec(ip)?.[1]
line(corner === ours.light['--radius'] ? 'PASS' : 'FAIL', '--radius', `${corner} → ${ours.light['--radius']}`)

console.log(failed ? `\n${failed} kit value(s) drifted from plivo.com` : '\nkit layer matches plivo.com')
process.exit(failed ? 1 : 0)
