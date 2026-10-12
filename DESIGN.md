---
version: 2
name: plivo-design
description: "Plivo's design language for everything it ships: the product console, internal tools such as Glance, and plivo.com. Monochrome-first. A white (or near-black) canvas, zinc neutrals, and a near-black ink (#0F1729) that doubles as the action fill. One accent, Plivo blue (#323DFE), which is the colour an ink control converges to on hover and the mark for focus, live and selected states. It is never decoration. Sora sets display type, Inter sets reading type, and JetBrains Mono is the voice of controls and metadata: buttons speak in 11px mono uppercase. Every container takes a 2px chamfer. Depth is a surface step plus a 1px hairline; shadow is reserved for layers that float. Light and dark are both first-class. Two registers share one system: a dense product register for operators and an editorial site register for plivo.com and documents."

colors:
  action: "#0F1729"
  action-foreground: "#FAFAFA"
  brand: "#323DFE"
  brand-foreground: "#FFFFFF"
  brand-text-dark: "#4D6AFF"
  canvas: "#FFFFFF"
  surface: "#FAFAFA"
  surface-2: "#F4F4F5"
  hover: "#E9E9EC"
  hairline: "#E4E4E7"
  hairline-strong: "#C9C9CF"
  code: "#F4F4F5"
  code-foreground: "#1C1C22"
  ink: "#0F1729"
  ink-muted: "#48566A"
  ink-subtle: "#71717A"
  ink-disabled: "#94A3B8"
  link: "#3396FF"
  status-success: "#1BA74E"
  status-warning: "#D28004"
  status-danger: "#D52020"
  status-progress: "#0B7ED0"
  status-neutral: "#8996A9"
  dark-canvas: "#09090B"
  dark-surface: "#111317"
  dark-surface-2: "#181A20"
  dark-hover: "#27272A"
  dark-hairline: "#27272A"
  dark-hairline-strong: "#40444F"
  dark-ink: "#FFFFFF"
  dark-ink-muted: "#A0A1AB"
  dark-ink-subtle: "#A1A1AA"
  dark-action: "#FAFAFA"
  dark-action-foreground: "#0F1729"

typography:
  display:
    fontFamily: Sora
    fontSize: clamp(2.25rem, 1.6rem + 2.6vw, 3.25rem)
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: -0.04em
  headline:
    fontFamily: Sora
    fontSize: clamp(2rem, 1.5rem + 2.2vw, 3rem)
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: -0.035em
  title:
    fontFamily: Sora
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.015em
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  xl-500:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: -0.035em
  h1-500:
    fontFamily: Sora
    fontSize: 26px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: -0.01em
  h2-500:
    fontFamily: Sora
    fontSize: 22px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: -0.01em
  h3-500:
    fontFamily: Sora
    fontSize: 18px
    fontWeight: 500
    lineHeight: 26px
    letterSpacing: -0.01em
  h4-500:
    fontFamily: Sora
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -0.01em
  p-400:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22px
  p-500:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 22px
  s-400:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  s-500:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 500
    lineHeight: 20px
  xs-400:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 400
    lineHeight: 17px
  xs-500:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 17px
  xs-600:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 17px
  label:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 500
    lineHeight: 14px
    letterSpacing: 0.08em
    textTransform: uppercase
  kicker:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.12em
    textTransform: uppercase
  cta:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 600
    lineHeight: 14px
    letterSpacing: 0.14em
    textTransform: uppercase
  stat:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1
    fontFeature: tabular-nums

rounded:
  DEFAULT: 2px
  sm: 2px
  md: 2px
  lg: 2px
  xl: 2px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 48px

components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.action-foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.DEFAULT}"
    height: 36px
    padding: 0 16px
    hover: background {colors.brand}, text {colors.brand-foreground}
    active: translateY(1px)
    shadow: none
  button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: 1px solid {colors.hairline}
    typography: "{typography.label}"
    rounded: "{rounded.DEFAULT}"
    height: 36px
    padding: 0 16px
    hover: background {colors.brand}, border {colors.brand}, text {colors.brand-foreground}
    active: translateY(1px)
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.DEFAULT}"
    height: 36px
    padding: 0 16px
    hover: background {colors.surface-2}
  button-destructive:
    backgroundColor: "{colors.status-danger}"
    textColor: "{colors.action-foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.DEFAULT}"
    height: 36px
    padding: 0 16px
  button-sm:
    height: 30px
    padding: 0 12px
  button-xs:
    height: 24px
    padding: 0 8px
    typography: "{typography.xs-500}"
  site-cta:
    backgroundColor: "{colors.action}"
    textColor: "{colors.action-foreground}"
    typography: "{typography.cta}"
    rounded: "{rounded.DEFAULT}"
    padding: 10px 16px
    hover: background {colors.brand}, text {colors.brand-foreground}
    active: translateY(1px)
  text-input:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    border: 1px solid {colors.hairline}
    typography: "{typography.p-400}"
    rounded: "{rounded.DEFAULT}"
    height: 36px
    padding: 4px 12px
    shadow: none
  text-input-focused:
    ring: 2px {colors.ink} offset 2px
  field-label:
    textColor: "{colors.ink-muted}"
    typography: "{typography.s-500}"
  card:
    backgroundColor: "{colors.canvas}"
    border: 1px solid {colors.hairline}
    rounded: "{rounded.DEFAULT}"
    padding: 24px
    shadow: none
  panel:
    backgroundColor: "{colors.surface}"
    border: 1px solid {colors.hairline}
    rounded: "{rounded.DEFAULT}"
    padding: 12px
  code-block:
    backgroundColor: "{colors.code}"
    textColor: "{colors.code-foreground}"
    border: 1px solid {colors.hairline}
    rounded: "{rounded.DEFAULT}"
  sidebar:
    backgroundColor: "{colors.canvas}"
    borderRight: 1px solid {colors.hairline}
    textColor: "{colors.ink-muted}"
    typography: "{typography.s-400}"
  sidebar-item-active:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.s-500}"
  table-header-cell:
    height: 48px
    padding: 0 16px
    textColor: "{colors.ink-subtle}"
    typography: "{typography.label}"
    borderBottom: 1px solid {colors.hairline}
  table-cell:
    padding: 16px
    typography: "{typography.p-400}"
  table-row-hover:
    backgroundColor: "{colors.surface}"
  tag:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.DEFAULT}"
    padding: 2px 8px
  status-tag:
    backgroundColor: status mark at 12%
    textColor: status mark
    typography: "{typography.xs-600}"
    rounded: "{rounded.DEFAULT}"
    padding: 2px 10px
  section-kicker:
    textColor: "{colors.ink-subtle}"
    typography: "{typography.kicker}"
---

## Overview

One system, two registers.

- **Product** is the console and every internal tool built like it (Glance included). It is dense, for operators who keep it open all day: 14px body, 36px controls, a compact `h1-500`…`xs-400` ramp.
- **Site** is plivo.com and anything editorial: landing pages, reports, documents. It is spacious: a 52px `display` headline, 16px `body`, and technical texture in the form of numbered kickers, a dotted grid and bracket frames.

Both registers share the same palette, families, corner, elevation model and control voice. Something built in either register should look like it came from the same company.

**Monochrome first.** The canvas is white in light (`{colors.canvas}`) and near-black in dark (`{colors.dark-canvas}`). Neutrals are zinc. Text is ink, `{colors.ink}` (#0F1729): a slightly blue-shifted near-black, never pure #000.

**Ink is the action colour.** A primary button is an ink fill with near-white text. In dark it is a near-white fill with ink text.

**Plivo blue (`{colors.brand}`, #323DFE) is the one accent.** It is what a control converges to on hover, and it marks focus, live, selected and key-data moments. It does not paint chrome, and it never appears as a gradient. One flat blue, used sparingly, reads as trustworthy. Blue scattered everywhere reads as cheap.

**Type has three families with three jobs.** Sora is display: headings and heroes. Inter is reading: body, tables, forms. JetBrains Mono is the voice of the interface: button labels, eyebrows, column headers, IDs and numbers.

**Every container takes a 2px chamfer.** Buttons, inputs, cards, panels, tags, tables and code blocks all use one radius token. Only true circles (avatars, status dots) stay round.

**Depth is a surface step plus a hairline.** `canvas → surface → surface-2`, each with a 1px border. Shadow is reserved for layers that leave the page: menus, popovers, dialogs, toasts.

**Key characteristics:**
- **Light and dark are both first-class.** They are designed together, not inverted.
- **Ink controls, blue on hover.** A primary or outline button converges to solid brand blue with white text when hovered, and presses down 1px when clicked.
- **Mono uppercase is the control voice.** Buttons, table headers, tags and eyebrows all use 11px JetBrains Mono, uppercase, tracked.
- **Everything is 2px.** Don't reach for 8px or 12px corners.
- **No shadow on things that sit on the page.** That includes buttons, cards, inputs and panels.
- **Status is a mark, not a surface.** Dots, icons and text use `--status-*`, and tags use the same mark at a 12% wash. Never paint a region with a semantic colour.
- **Technical texture instead of decorative colour.** Use kickers, the dotted grid, hairlines and terminal panels.

## Colors

All colours ship as CSS custom properties in `dist/colors.css` (`:root` and `.dark`). They are stored as **HSL channel triplets**, so they compose with `hsl(var(--x) / <alpha>)`. Tailwind maps them onto utilities: `bg-background`, `text-foreground`, `border-border`, `bg-surface`, `text-brand-text`.

### Action & brand

| Role | Token | Light | Dark |
|---|---|---|---|
| Action fill (primary button, ink) | `--primary` | `#0F1729` | `#FAFAFA` |
| Text on action | `--primary-foreground` | `#FAFAFA` | `#0F1729` |
| Brand fill: hover, focus accent, live dot, waveform | `--brand` | `#323DFE` | `#323DFE` |
| Brand **text** and links on brand moments | `--brand-text` | `#323DFE` | `#4D6AFF` |
| Text on brand | `--brand-foreground` | `#FFFFFF` | `#FFFFFF` |
| Inline link in body copy | `--link` | `#3396FF` | `#3396FF` |

**Blue text lifts on dark.** `#323DFE` is a strong fill but measures about 3:1 as text on the dark canvas. Blue *text* therefore uses `--brand-text`, which lifts to `#4D6AFF` (4.5:1) in dark. Fills, buttons, dots and bars keep `--brand`.

**`--primary` is ink, not blue.** This is the product's convention, and it matches the stock shadcn naming. plivo.com's own stylesheet uses `--primary` for its blue. When porting site markup into a product, map site `primary` to `brand` here.

### Surfaces

| Role | Token | Light | Dark |
|---|---|---|---|
| Page and card ground | `--background` / `--card` | `#FFFFFF` | `#09090B` |
| First lift: panels, rails, hovered rows | `--surface` | `#FAFAFA` | `#111317` |
| Second lift: popover bodies, table heads, tab tracks, bands | `--surface-2` | `#F4F4F5` | `#181A20` |
| Quiet fill: inert chips, menu hover | `--muted` / `--accent` | `#F4F4F5` | `#27272A` |
| Hairline: the default 1px border | `--border` / `--input` | `#E4E4E7` | `#27272A` |
| Emphasis hairline: hovered inputs, focused panels | `--border-strong` | `#C9C9CF` | `#40444F` |
| Code and terminal body | `--code` / `--code-foreground` | `#F4F4F5` / `#1C1C22` | `#181A20` / `#E4E4E7` |

The steps are deliberately close. The ladder separates regions; it does not create depth. The product palette also ships finer grey steps (`bg1–3`, `hv1–3`, `st1–2`) for dense chrome. Reach for `surface` / `surface-2` first.

### Text

| Role | Token | Light | Dark |
|---|---|---|---|
| Headings, primary body | `--foreground` | `#0F1729` | `#FFFFFF` |
| Secondary body, field labels, sidebar items | `--secondary` | `#48566A` | `#A0A1AB` |
| Helper text, table headers, eyebrows, timestamps | `--muted-foreground` | `#71717A` | `#A1A1AA` |
| Disabled, placeholder | `--tertiary` | `#94A3B8` | `#5A5B63` |

### Semantic

Status is a **mark**: a solid colour for dots, icons, bars and state text, with its own vivid value per theme.

| State | Token | Light | Dark |
|---|---|---|---|
| Success | `--status-success` | `#1BA74E` | `#30D96E` |
| Warning | `--status-warning` | `#D28004` | `#FBBD2D` |
| Danger (also `--destructive`) | `--status-danger` | `#D52020` | `#F86868` |
| In progress | `--status-progress` | `#0B7ED0` | `#48B2F9` |
| Neutral, idle | `--status-neutral` | `#8996A9` | `#8A919E` |

A **status tag** is the same mark at a 12% wash with the mark as text: `bg-status-success/[0.12] text-status-success`. This works on both grounds with no dark pair to maintain. The older tint pairs (`--success`, `--warning`, `--danger`, `--progress`, each with `-foreground`) still ship for alerts and banners. Note that their *foreground* half means "text on that fill" and inverts in dark, so never use it standalone.

`--destructive-foreground` flips in dark (`#09090B` on the light-red fill), because white on `#F86868` fails contrast.

### Channel & data colours

The palette also ships channel tints (voice, messaging, chat, WhatsApp) as pale-bg plus dark-ink pairs. Charts get an 11-step `--chart-*` ramp with named roles (`--chart-positive`, `--chart-negative`, `--chart-neutral`, …) and a 5-step heat scale. `--chart-1` is the brand blue. Charts pull from `--chart-*` by role and never pick a hex.

### Retired

- **Purple** (`#CD3EF9`, and the console's old `--secondary-color` violet) is retired as a brand colour.
- **Brand gradients** are retired, including the pink-to-blue "vibing" gradient. Both of its stops now resolve to the one brand blue, so existing consumers render flat.
- **The old Plivo blue** `#0040E4` (`--primary-color` and its 1–8 ramp) survives only for legacy logo lockups. It is not the brand accent.

## Typography

### Families
- **Sora** (`--font-display`): display and headings. Geometric and slightly wide.
- **Inter** (`--font-sans`): everything you read. Body, tables, forms, help text.
- **JetBrains Mono** (`--font-mono`): the interface's voice. Button labels, eyebrows, column headers, tags, IDs, timestamps, numbers. Always `tabular-nums` for figures.

Families are referenced by **role**, never by name: `var(--font-display, var(--font-sans, system-ui, sans-serif))`. A consumer that doesn't load Sora degrades to Inter, then to the system stack, with no layout break. Load Inter and Sora at 400, 500 and 600, and JetBrains Mono at 400, 500 and 600. A missing 600 renders as a synthesised bold.

### Product ramp
Named `<role>-<weight>`, and the name *is* the token: `p-400` is 14px/22px at weight 400.

| Token | Size / Line | Weight | Use |
|---|---|---|---|
| `xl-500` | 32px / 1.04 | 500, −0.035em | Page hero. One per screen at most. |
| `h1-500` | 26px / 32px | 500 | Page title. |
| `h2-500` | 22px / 32px | 500 | Section title. |
| `h3-500` | 18px / 26px | 500 | Card or panel title. |
| `h4-500` | 16px / 24px | 500 | Sub-section, dialog title. |
| `p-400` / `p-500` / `p-600` | 14px / 22px | 400 / 500 / 600 | Body, control text, emphasis. |
| `s-400` / `s-500` / `s-600` | 13px / 20px | 400 / 500 / 600 | Tables, sidebars, dense lists. |
| `xs-400` / `xs-500` / `xs-600` | 12px / 17px | 400 / 500 / 600 | Helper text, metadata. |
| `xxs-400` / `xxs-600` | 10px / 13px | 400 / 600 | Badges, chart axis labels. |
| `pi-400` / `xsi-400` | 14px / 12px | 400 italic | Quoted or system-generated text. |
| `label` | 11px / 14px | 500, +0.08em, uppercase mono | Buttons, column headers, tags, eyebrows. |

Product headings cap at 500: at compact sizes 600 reads heavier than the page title above it. The `/600` heading rungs exist for compatibility only.

### Site ramp

| Token | Size / Line | Weight | Use |
|---|---|---|---|
| `display` | 36→52px fluid / 1.04 | 400, −0.04em | Page hero. |
| `headline` | 32→48px fluid / 1.04 | 400, −0.035em | Section headline. |
| `title` | 20px / 1.3 | 600, −0.015em | Card title, spec-list name. |
| `body-lg` | 18px / 1.6 | 400 | Lede paragraph. |
| `body` | 16px / 1.6 | 400 | Long-form body. |
| `body-sm` | 14px / 1.5 | 400 | Card body, captions under figures. |
| `caption` | 12px / 1.4 | 400 | Footnotes, fine print. |
| `kicker` | 11px / 1.25 | 500, +0.12em, uppercase mono | The numbered eyebrow that opens a section. |
| `cta` | 11px / 14px | 600, +0.14em, uppercase mono | Site call-to-action buttons. |
| `stat` | 20px / 1 | 600 mono, tabular | Big numbers in a stat strip. |

The signature site headline is **Sora at 400 with tight negative tracking**. Weight does not carry a headline; size and tracking do.

### The control voice
Every button-like control speaks in 11px JetBrains Mono, uppercase:
- **Site CTAs** use `cta`: weight 600, +0.14em. This is the airy, editorial version.
- **Product buttons** use `label` with tracking tightened to +0.05em (`--cta-tracking-dense`). Dense rows of controls need the tighter set. The smallest `xs` buttons (24px) drop to `xs-500` title case, because uppercase mono at that size stops being legible.

### Principles
- Weight carries emphasis inside a block before size does: go `p-400` → `p-600` before `p-400` → `h4-500`.
- Never invent a size between steps. If 15px feels right, the layout is wrong.
- One `h1-500` (product) or `display` (site) per page. Don't skip levels going down.
- Mono is for labels and data, not prose. Never set a sentence in mono, and never set the mono label styles in sentence case: the tracking exists for caps.
- Numbers that sit together share decimal places, padded with trailing zeros: `$0.0046` beside `$0.0070`.

## Layout

### Spacing
The package does **not** ship a spacing scale. Consumers stay on Tailwind's default 4px scale. In practice:

- `2px`: icon-to-label inside a tag.
- `4px`: label-to-field, tag-to-tag.
- `8px`: between controls in a row, list-item padding.
- `12px`: panel padding, form row gap.
- `16px`: card padding (dense), group gap.
- `24px`: card padding (default), between cards.
- `32–48px`: between product sections. Site sections use `py-12` to `py-24`.

### Product density
Buttons and inputs are **36px** tall: 30px compact, 24px inline. Table rows land near 50px with 16px cell padding; compact tables drop cell padding to 8px. A full-width content column caps around 1280px. Forms cap around 640px and stay left-aligned, not centred.

A screen is a left sidebar (fixed, hairline right edge), then a page header (title plus primary action, right-aligned), then content. Filters sit in a hairline bar directly above tables, never in a floating card.

### Site rhythm
The container is centred with a max width of about 1228px and `px-4 sm:px-6` gutters. Sections are separated by top hairlines (`border-t border-border`), not by colour blocks. Card grids fill the container flush with the section heading. When a heading is centred, its description gets `mx-auto` too.

## Elevation & depth

The surface ladder and hairlines do the work:

1. `background`: the page.
2. `surface` plus `border`: the first lift (panels, rails, cards on a busy page).
3. `surface-2` plus `border`: the second lift (popover bodies, table heads, dark bands).

**Shadow is only for layers that float off the page:**
- `--shadow-1`: dropdowns, popovers, the command palette.
- `--shadow-2`: toasts, drag previews.

Buttons, cards, inputs, panels and table containers carry **no shadow**. To separate two regions, change the surface step or draw a border; don't add a shadow level. To force a dark band onto a light page (a pre-footer, for example), put `.dark` on the band: every token resolves dark inside it.

## Shapes

### Radius
One token: `--radius: 2px`. Every Tailwind radius utility maps to it, so `rounded-lg` and `rounded-sm` are identical by design, and a consumer can re-theme every corner by overriding one variable. `rounded-full` survives for avatars, status dots, toggle thumbs and progress pills.

This is the most identifiable trait of the system. A 12px-rounded card does not look like Plivo.

Device illustrations on the site (phone bezels, chat bubbles with a tail corner) keep their real-world radii. They are pictures of things, not containers.

### Iconography
16px line icons (Lucide) at 1.5–2px stroke, inheriting `currentColor`. Icons sit at `--muted-foreground` in chrome and inherit ink in content. Inside a mono button they drop to 14px.

## Components

### Buttons
Height is 36px with 16px horizontal padding, 2px corners and **no shadow**. Labels are mono uppercase (see *The control voice*).

| Variant | Rest | Hover |
|---|---|---|
| primary | ink fill, near-white text | **brand blue fill, white text** |
| outline | canvas, hairline border, ink text | **brand fill and border, white text** |
| secondary | `--secondary` fill (slate), near-white text | 80% fill |
| tertiary | `st2` fill, ink text | 80% fill |
| ghost | transparent, ink text | `surface-2` fill |
| destructive | `status-danger` fill, `destructive-foreground` text | 90% fill |
| link | ink text | underline |

- **Sizes:** `xs` 24px, `sm` 30px, default 36px, `lg` 40px, `xl` 48px. Icon-only buttons are square at the same heights.
- **Press:** a click presses the button down `--press-offset` (1px) over `--duration-press` (50ms). Colour changes take `--duration-fast` (150ms).
- **Disabled:** 50% opacity with pointer events off.
- **Focus:** a 2px ring with a 2px offset.
- Use one primary button per view. A row of actions is one primary and N outlines.
- On a site, a filled CTA carries a transparent 1px border so it matches the height of an outline CTA beside it.

### Inputs & forms
The label sits above the field in `s-500` at `--secondary`, with a 4px gap. The field is **36px tall**, transparent, with a 1px `--input` hairline, 14px text, 12px horizontal padding, 2px corners and **no shadow**. Its border steps to `--border-strong` on hover.

- **Placeholder:** `--tertiary`.
- **Focus:** the same 2px offset ring as buttons. No glow.
- **Error:** border and helper text switch to `--status-danger`. Helper text is `xs-400` at `--muted-foreground` and reserves its line, so the layout doesn't jump.
- **Validation** shows after interaction, never on the first render of an empty form.
- **Checkboxes, radios and switches** fill with the brand blue when on. They are selected states, which is what the accent marks.

### Cards & panels
- **Card:** canvas fill, hairline border, 2px corners, 24px padding, no shadow. An optional `h3-500` title sits above a `p-400` description at `--secondary`.
- **Panel:** a `--surface` fill for a secondary region such as a config rail or summary sidebar.
- **Nesting:** cards don't nest more than one level. A nested region drops to a surface fill without its own border.
- **Hover:** an interactive panel steps its border to `--border-strong`. It doesn't lift.

### Tables
- **Header cells:** 48px tall, 16px padding, in `label` (mono uppercase) at `--muted-foreground`, with a hairline rule beneath.
- **Body cells:** 16px padding at `p-400`, one hairline rule per row, `--surface` on hover and on selection.
- **Values:** numeric columns right-align in mono `tabular-nums`. Status renders as a tag or a dot, never as coloured row text.

### Tags & status
- **Neutral tag:** `--surface-2` fill (`hv1` in dense chrome), `label` type, `--secondary` text, 2px corners, 2px × 8px padding.
- **Status tag:** the status mark at a 12% wash, with mark-coloured `xs-600` text.
- **Status dot:** an 8px `rounded-full` mark, preferred when the label is already in the row. A live state can pulse.
- Every status has a colour and a word. Colour is never the only signal.

### Navigation
- **Sidebar:** the page's own canvas with a hairline right edge. Items are `s-400` at `--secondary`; the active item sits on `--surface-2` at `s-500` ink. Active is a surface change, never a coloured fill.
- **Top bar:** sticky, canvas at 80% with a backdrop blur, and a hairline bottom edge.
- **Tabs:** either an underline (2px ink under the active tab) or a `--muted` track with the active tab on canvas and a hairline.

### Section kicker (site)
Most site sections open with a mono row: a two-digit index, a short rule, the label, then a dashed hairline that fills the row.

```
01 —— VOICE AI - - - - - - - - - - - - - - - - - -
```

Use `text-kicker` at `--muted-foreground`, with the index in `tabular-nums` at 70% ink. Product surfaces use the same device, quieter, for section headers.

### Texture (site)
- **Dotted grid:** a radial-dot lattice behind a hero, `radial-gradient(circle, hsl(var(--muted-foreground) / 0.55) 1.25px, transparent 1.25px)` on a 28px cell (or 1px on 16px for fine). Apply it at low opacity with a fade-out mask.
- **TechFrame:** L-bracket corners, tick-mark edge strips and a centre crosshair over a hero, in `currentColor`. Hide the ticks below 640px and the corners below 480px.
- **Terminal panel:** a titlebar with a live dot or three dots, a mono title and a `--code` body. Use it for code, calls and API demos.

### Empty & loading states
- **Empty state:** a `label` eyebrow, an `h4-500` line, an `xs-400` explanation at `--muted-foreground`, and one primary action.
- **Loading:** skeleton blocks in `--surface-2` that match the final layout's dimensions. No spinners for page loads.

## Motion

Motion is restrained and quick. The tokens ship in `colors.css`:

| Token | Value | Use |
|---|---|---|
| `--duration-press` | 50ms | Button press (`translateY(var(--press-offset))`). |
| `--duration-fast` | 150ms | Colour and border transitions on hover. |
| `--duration-base` | 200ms | Overlays: menus, dialogs, sheets. |
| `--duration-reveal` | 500ms | On-load reveal (fade plus a 10px rise). |
| `--stagger-reveal` | 95ms | Delay between items in a revealed list. |
| `--ease-standard` | `ease` | Default timing. |

Hover is a colour change, not a lift. Respect `prefers-reduced-motion`: drop reveals and loops, and render a static frame for live canvases.

## Do's and Don'ts

### Do
- Reference tokens (`hsl(var(--border))`, `text-p-400`, `bg-surface`) instead of literal colour or size values.
- Keep every container on the `--radius` token so a consumer can re-theme corners in one line.
- Build hierarchy with weight, surface steps and the ink ramp before reaching for colour.
- Make the primary control ink and let hover bring the blue.
- Use `--brand-text` for blue text so it lifts on dark, and `--brand` for blue fills.
- Give every status both a colour and a word.
- Let `--font-display`, `--font-sans` and `--font-mono` fall back; never hard-code `Sora` in a component.

### Don't
- Don't paint a control blue at rest to make it look important. Ink is the action colour.
- Don't use 8px or 12px corners, and don't shape buttons as pills.
- Don't add shadow to a button, card, input, panel or table container, and don't stack shadow levels.
- Don't paint a whole surface with a semantic colour. Semantics live in tags, dots and 1px bars.
- Don't use the retired purple or any gradient text, fill or button.
- Don't invent type sizes between steps. Product body text doesn't go above 14px.
- Don't set the mono label styles in sentence case.
- Don't pick chart hexes by hand. Use the `--chart-*` roles.
- Don't use em or en dashes in interface copy. Use a comma or a hyphen.

## Responsive behaviour

- Breakpoints follow Tailwind defaults: `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536.
- The product is desktop-first. Below `lg` the sidebar collapses to icons, and below `md` it becomes a sheet.
- Touch targets grow to 40px minimum below `md`. Padding grows; type does not.
- Product tables become stacked key/value cards below `md` rather than scrolling horizontally.
- Product type is fixed-size. Only `xl-500` steps down to `h1-500` on small screens. The site ramp's `display` and `headline` are fluid.

## Using these tokens

Not on npm yet. Install from git:

```bash
npm i github:plivo/design-tokens   # or #<tag> / #<sha> to pin
```

**Tailwind v4:**

```css
@import 'tailwindcss';
@import '@plivo/tokens/colors.css';
@import '@plivo/tokens/tailwind.css';
@custom-variant dark (&:where(.dark, .dark *));
```

**Tailwind v3:**

```js
module.exports = { presets: [require('@plivo/tokens/tailwind')] }
```

**No Tailwind:**

```css
@import '@plivo/tokens/colors.css';
@import '@plivo/tokens/type.css';
```

Every shape yields the class names this document uses: `text-p-400`, `text-label`, `text-display`, `bg-surface`, `border-border-strong`, `text-brand-text`. Load Inter, Sora and JetBrains Mono yourself. Without them, the role variables fall back cleanly.

## Known gaps

- **Product and site disagree on three neutrals.** Ink is `#0F1729` in product and `#09090B` on the site. Muted text is `#71717A` in product and `#67676F` on the site. The dark canvas is zinc `#09090B` in product and `#0A0C0F` on the site. In the shared names the product values ship; the kit adds only names the product lacked. The dark `surface` steps come from the site, so they carry its slight cool cast. The difference is below a just-noticeable difference beside the zinc canvas, but it is a difference.
- **The focus ring differs.** It is ink in product (`--ring`) and brand blue on the site.
- **No spacing scale ships.** The values above are observed practice, not enforced tokens.
- **Three HSL spellings coexist upstream** (`240 6% 95%`, `240deg 6% 95%`, `189, 85%, 92%, 1`). All compose in Tailwind v4, which uses `color-mix()`. The comma form breaks Tailwind v3's `/alpha` syntax.
- **Product-specific colours are still in the palette.** These are channel tints and agent-status colours that a general consumer won't need.
- **The legacy palette has no dark variant.** This covers `--gray-*` and `--primary-color-*`.
- **The brand blue is corrected in the kit layer.** It is not yet corrected upstream, where `237 99% 60%` renders `#343EFE`. Once upstream is fixed, delete the override from `src/kit.css`.
- **Component values here are read from the console and plivo.com implementations**, not from tokens. Heights, padding and motion can drift. Colours, type and radius cannot, because they come from `dist/`.
