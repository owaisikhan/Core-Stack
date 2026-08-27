# Core Stack

A full clone of the [Baseer](https://baseer.ca) marketing site (~45 pages), built as
a real Next.js app from a Claude Design handoff bundle. The brand is currently
**Baseer** — name, logo and colors kept as-is intentionally — and will be
rebranded to **Core Stack** in a follow-up pass. Rebranding should mostly mean
editing `app/_lib/siteConfig.js` and the two logo files in `public/assets/`.

## What this is

Baseer is a cloud-based omnichannel commerce platform: POS, ecommerce web,
customer mobile app, warehouse management (WMS) and ERP in one system. This
repo recreates its public marketing site — home, 5 solution pages, 5 industry
pages, 27 business-type pages (POS/ecommerce/app × grocery, clothing, bakery,
cafe, barbershop, beauty salon, tyre shop, pet services, cleaning services),
blog, contact, live demo, about, and legal pages — pixel-close to production,
using the real captured copy, images, fonts and CSS values.

There is no backend here (no database, no auth) — every page is a static,
content-driven marketing page. See `app/_lib/site-content.js` for the copy.

## Where things come from

- Original design-system bundle (tokens, components, the source React
  prototype, and the scrape it was built from) is in a companion project —
  ask if you need to see `scraps/site.css`, `scraps/home.html`, etc.
- `app/_lib/site-content.js` and `app/_lib/nav.js` are generated 1:1 from that
  bundle's `content.js` / `nav.js` (converted from `window.X = {...}` globals
  to ES module exports — no data was retyped by hand).
- `app/_styles/globals.css` concatenates the design system's token files,
  webfont declarations, and a filtered subset of the live site's own
  production CSS (real class names: `.primary_cta`, `.section_padding`,
  `.banner`, etc.) — that CSS is the pixel-perfect source of truth for
  spacing, color and type, not Tailwind utilities.

## Known gaps (carried forward from the design system, not fixed here)

- **FAQ questions** are only captured for the home page; other pages show an
  in-page note and render answers only.
- **Client review carousel** is omitted — its content is client-rendered on
  the live site and wasn't in the scrape.
- **Legal page bodies** (privacy, terms) show real section headings only —
  paragraph text is client-rendered on the live site.
- **11 business-type images** weren't retrievable; those slots render a
  tinted dashed placeholder (`.kit_img_ph`).
- **Aeonik font files** (`public/assets/fonts/AeonikPro-*.otf`) are the live
  site's **TRIAL** builds — replace with licensed files before shipping.

## Routes

```
/                                  home
/solutions/[slug]                  pos, ecommerce, mobile-app, erp, warehouse-management
/industries/[slug]                 retail, food, health-beauty, automotive, services
/[slug]                            the 27 business-type pages
/about-us  /features  /livedemo  /contact-us  /blog  /privacy-policy  /terms-conditions
```

## Development

```bash
npm run dev      # http://localhost:3000
npm run build    # production build — also the closest thing to a type check
```
