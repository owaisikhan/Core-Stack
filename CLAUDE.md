@AGENTS.md

# Working in this repo

This is a static, content-driven marketing site (a Baseer.ca clone, soon to
be rebranded Core Stack) — no database, no auth, no Server Actions. See
README.md for what it is and where the content comes from.

- **Every page's copy and images live in `app/_lib/site-content.js`**, keyed
  by route (`"home"`, `"solutions/pos"`, `"grocery-pos-system"`, ...). Don't
  hand-edit prose inline in a component — find the key in that file.
- **The real styling is `app/_styles/globals.css`**, not Tailwind utility
  classes. Components use the site's actual production class names
  (`.primary_cta`, `.section_padding`, `.banner`, `.new_icon_card`, ...).
  When adding markup, reuse an existing class before inventing a new one —
  check `globals.css` first.
- **`app/_components/sections/Section.js`** dispatches on `s.kind`
  (`tabstrip`, `split`, `features`, `cardgrid`, `showcase`, `pills`,
  `logowall`, `faq`, `list`, or a plain "statement" fallback) to render each
  page's section list. A new page template usually means a new `kind` here,
  not a new one-off page component.
- **Routing**: `app/solutions/[slug]`, `app/industries/[slug]`, and the
  catch-all `app/[slug]` (the 27 business-type pages) all read from
  `site-content.js` via `generateStaticParams`. The handful of pages with
  real interactivity (contact form, blog, legal tabs, live-demo picker) have
  their own route folder and component under `app/_components/pages/`.
- **Images**: `SiteImage` (`app/_components/ui/SiteImage.js`) renders a
  captured filename from `public/assets/img/` or a tinted placeholder tile
  when `src` is null — that null is intentional (an image the scrape
  couldn't retrieve), not a bug to silently paper over.
- **Icons**: one module, `app/_components/ui/icons.js`. The source site has
  no icon font or SVG library — only a handful of hand-authored chrome SVGs
  (caret, close X, FAQ plus/minus, submenu arrows). Don't reach for an icon
  package; if a new glyph is needed, add it there.
- Verify a layout change by building (`npm run build`) and looking at it —
  screenshot at a phone width (~400px) and a laptop width (~1440px). The mega
  menu, mobile drawer, tab strips, accordions and FAQ are all interactive
  client components; click through them, don't just eyeball a static render.
