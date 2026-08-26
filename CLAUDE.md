# Working in this repo

Marketing site for Core Stack. Next.js App Router, plain JavaScript, Tailwind
v4. No database, no auth, no environment variables — every page is static.

Read `README.md` first for what the site is and what is still a placeholder.

---

## Ground rules

**Content lives in `app/_lib/*-data.js`, never inline in a page.** Solutions,
industries and homepage sections are arrays. A page maps over them. Adding a
service means editing one array, and the nav, footer, homepage, contact
dropdown and static routes all update on their own.

**`nav-data.js` derives from the other data modules.** Do not hand-maintain a
parallel list of links — it will drift.

**Identity is data.** Business name, tagline, contact details and social links
are in `siteConfig.js`. Nothing else hardcodes them.

**`_components/ui/` must not know what the business is.** If a component
mentions solutions, industries or clients, it belongs in `site/` or `home/`.
The test: could this be copied into an unrelated project unchanged?

**Colour tokens are named by role, not hue.** `--color-primary`, not
`--color-blue`. A rebrand should be a token swap in `globals.css`.

**Tailwind v4 gotcha:** `@apply` can only reference real utilities, not another
custom class. `.btn-primary` cannot `@apply .btn`. Each component class in
`@layer components` is written out in full.

---

## Verifying a change

`npm run build` before every commit. On a JavaScript project it is the only
type check there is, and it catches a typo'd import faster than anything else.

For anything that changes layout, **look at the screen** — do not rely on the
build passing. Start the server and screenshot at two widths minimum: a laptop
(1280px) and a phone (400px). A passing build is perfectly compatible with a
heading that wraps badly or a card grid that collapses wrong.

```bash
npm run build && npm run start
# then screenshot http://localhost:3000
```

Remember to stop the server afterwards.

---

## Content rules — important

This site's structure was informed by studying how comparable products present
themselves. **No copy, imagery, branding or client reference from any other
company's site may be used here.** In particular:

- Do not add testimonials or client logos belonging to another company. Naming
  someone else's clients as ours is a false-advertising problem, not just a
  copyright one.
- Do not paste marketing text from a competitor and reword it. Write it fresh.

**Only claim what can actually be delivered.** The six solutions on this site
were chosen against real shipped work. If a new service page is added, there
should be something behind it.

---

## Still to do

- `siteConfig.js` holds dummy contact details.
- The contact form does not submit anywhere.
- No testimonials section exists yet — add one only with real, consenting
  clients.
