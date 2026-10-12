# @plivo/tokens

Plivo's design tokens: colours, type ramp, radius, font stacks and motion, in
the shapes consumers actually need. No React, no components, no framework.

| Consumer | Use |
|---|---|
| Tailwind v4 projects | `colors.css` + `tailwind.css` |
| Tailwind v3 projects | the preset + `colors.css` |
| Non-Tailwind projects (Vue, Astro, plain pages, email) | `colors.css` + `type.css` |
| Figma plugins, generators, docs | `type.json` |

Same class names in every shape, so markup copied between projects keeps working.
[DESIGN.md](DESIGN.md) is the design language these tokens encode.

## Use

**Tailwind v4:**

```css
@import 'tailwindcss';
@import '@plivo/tokens/colors.css';    /* the custom properties */
@import '@plivo/tokens/tailwind.css';  /* colours, radius, type, families as utilities */
@custom-variant dark (&:where(.dark, .dark *));
```

**Tailwind v3:**

```js
// tailwind.config.cjs
module.exports = {
  presets: [require('@plivo/tokens/tailwind')],
  content: ['./src/**/*.{ts,tsx}'],
}
```

**Without Tailwind:**

```css
@import '@plivo/tokens/colors.css';  /* the custom properties */
@import '@plivo/tokens/type.css';    /* .text-p-400, .text-display, … */
```

```html
<p class="text-p-400 text-foreground bg-surface rounded-lg">…</p>
```

`colors.css` is required in every case. Both Tailwind shapes map colours onto
`hsl(var(--token))`, so without the custom properties every colour resolves to
nothing. It ships `:root` and `.dark`.

## What's in the palette

Two layers, one stylesheet:

- **The product palette** is extracted from Plivo's console. It is the shadcn-shaped
  set (`--background`, `--primary`, `--border`, …), the status marks, the chart
  ramp and the product greys.
- **The plivo.com kit** is authored in `src/kit.css`. It adds the parts of the
  site theme the console has not adopted yet: the `--surface` / `--surface-2`
  elevation ladder, `--border-strong`, `--code`, the CTA voice, and motion
  durations. It also corrects the brand blue to exactly `#323dfe`.

`--primary` is **ink**, the action fill. The blue is `--brand` for fills and
`--brand-text` for text, which lifts to `#4d6aff` on dark.

## The type ramp

The product ramp is `<role>-<weight>`: `p-400` is 14px/22px at weight 400, and
`s-600` is 13px/20px at 600. Roles are `h1`–`h4`, `p`, `s`, `xs`, `xxs` and `xl`,
plus `pi`/`xsi` (italic) and `label`.

The site ramp comes from the kit: `display`, `headline`, `title`, `body-lg`,
`body`, `body-sm`, `caption`, `kicker`, `cta` and `stat`. `display` and
`headline` are fluid (`clamp()`). There are 35 tokens in all.

`label` is why `type.json` exists rather than a raw Tailwind config. It is 11px
mono uppercase with `0.08em` tracking, and a Tailwind v3 `fontSize` tuple cannot
carry `font-family` or `text-transform`. Upstream, every call site has to write
`text-label font-jetbrains uppercase` by hand. The CSS builds carry all three:

```css
/* dist/type.css — complete */        /* v3 preset's .text-label — partial */
.text-label {                          .text-label {
  font-size: 11px;                       font-size: 11px;
  line-height: 14px;                     line-height: 14px;
  font-weight: 500;                      letter-spacing: 0.08em;
  letter-spacing: 0.08em;                font-weight: 500
  font-family: var(--font-mono, …);    }
  text-transform: uppercase;
}
```

The v4 stylesheet carries them too, as `@utility` additions. It names a family
only on role tokens (display sizes take Sora; `label`, `kicker`, `cta` and
`stat` take JetBrains Mono). Body tokens inherit Inter, so `font-mono` on a
`text-p-400` element still wins.

Every named radius step maps to `var(--radius)` on purpose: one corner
everywhere. Only `rounded-full` stays round.

## Provenance

The product palette is extracted, not authored: its source of truth is still
Plivo's internal console, which is mid-way through adopting the plivo.com kit.

```sh
node scripts/extract.mjs <console-repo> <git-ref>   # Plivo engineers only
node build.mjs
node --test
```

The repo path and ref are arguments and are never committed. Generated files
record only the extraction date.

`extract.mjs` `require()`s the upstream Tailwind config and reads its theme
object rather than parsing it, so it survives edits upstream. Re-run it when the
branch moves and diff `src/`.

| File | Kind | Edit by |
|---|---|---|
| `src/colors.css`, `src/type.json`, `src/theme.json`, `src/meta.json` | extracted | re-running `extract.mjs`, never by hand |
| `src/kit.css`, `src/kit.json` | authored | hand |

The build appends the kit after the extraction and refuses to start if
`kit.json` redefines an extracted name. When upstream adopts a kit token, the
build fails, and the kit copy should be deleted. Direction of truth reverses once
the console consumes this package instead.

`dist/` is committed so the package installs straight from git with no build
step. `npm run check-dist` fails if it has drifted from `src/`.

## Known gaps

- `src/colors.css` is a faithful copy: 209 light vars and 104 dark. Some are
  product-specific rather than brand (channel and agent colours). Pruning needs
  the design owner, not a guess.
- One product-only colour group is excluded from the Tailwind mapping;
  `sidebar.*`, `bubble.*` and `call.*` still ship.
- Upstream still has three HSL spellings (`0deg 0% 100%`, `240 5.9% 90%`,
  `189, 85%, 92%, 1`). The comma form carries a baked-in alpha, so Tailwind v3's
  `bg-x/50` opacity syntax breaks on those. Tailwind v4 uses `color-mix()` and
  is unaffected.
- Product and site still disagree on a few neutrals. See *Known gaps* in
  [DESIGN.md](DESIGN.md).
- The Tailwind outputs are verified by hand, not in CI:

  ```sh
  bunx tailwindcss -c tailwind.config.cjs -i in.css -o out.css   # v3
  bunx @tailwindcss/cli -i in.css -o out.css                     # v4
  ```

## License

MIT
