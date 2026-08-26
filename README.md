# Core Stack

Marketing site for Core Stack — a software studio building point of sale,
online stores, mobile apps, offline desktop software and AI assistants for
small and mid-sized businesses.

Built with Next.js (App Router, plain JavaScript) and Tailwind CSS v4.
Deploys to Vercel.

---

## The service lineup

Six solutions, each with its own page under `/solutions/<slug>`:

| Solution | Slug |
|---|---|
| Point of Sale | `point-of-sale` |
| Business Management Software | `business-management` |
| Online Store | `online-store` |
| Mobile Apps | `mobile-app` |
| Offline Desktop Apps | `offline-desktop` |
| AI Assistants & Automation | `ai-assistants` |

Five industries, each under `/industries/<slug>`: fuel and energy, retail,
food and beverage, hospitality, professional services.

Both sets are generated from data modules, so adding a solution or an industry
is an edit to one array — the navigation, the footer, the homepage cards, the
contact form's dropdown and the static routes all follow.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # always run this before committing
```

There is no database and no environment configuration. Every page is static.

---

## Before this goes live

Three things are deliberately left as placeholders:

1. **`app/_lib/siteConfig.js`** — the contact email, phone number and address
   are dummy values. Business name, tagline and social links live here too.
   Changing the name should be one edit, not a grep.
2. **The contact form** (`app/contact-us/page.js`) posts nowhere. Wire it to an
   email service or a Server Action.
3. **Testimonials and client logos** — there is no such section yet, on purpose.
   Add one only when there are real clients who have agreed to be named.

---

## Structure

```
app/
  layout.js  page.js  not-found.js
  _components/
    ui/            SectionHeading — knows nothing about the business
    site/          Header, Footer
    home/          SolutionTabs, FaqList
  _lib/
    siteConfig.js       identity as data
    solutions-data.js   the six solutions
    industries-data.js  the five industries
    home-data.js        homepage section content
    nav-data.js         derives menus from the two data modules above
  _styles/globals.css   @theme tokens, then @layer components
  solutions/[slug]/
  industries/[slug]/
  about-us/  contact-us/
```

Colour tokens in `globals.css` are named by role (`--color-primary`,
`--color-surface`, `--color-border`), not by hue, so a rebrand is a token swap
rather than a search across the markup.

---

## A note on the content

Every line of copy here is original. The site's structure was informed by
looking at how comparable products organise their marketing, but no text,
imagery, branding or client reference has been taken from any other company's
site — and in particular, no other company's testimonials or client logos
appear here.
