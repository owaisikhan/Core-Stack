export const solutions = [
  {
    slug: "point-of-sale",
    navTitle: "Point of Sale",
    cardTitle: "Point of Sale",
    tagline: "A till that keeps stock, credit and cash honest.",
    heroTitle: "A checkout counter that never loses track of stock",
    intro:
      "Ring up a sale in seconds, take any payment type, and end the day with a till that reconciles against the cash in the drawer.",
    highlights: [
      {
        title: "Quick at the counter",
        text: "A screen built for speed — scan, tender, done. New staff are serving customers within a shift, not a week.",
      },
      {
        title: "Cash, card and credit in one till",
        text: "Including customer credit accounts, so a regular who pays at month end is recorded properly rather than scribbled in a book.",
      },
      {
        title: "Stock updates as you sell",
        text: "Every sale moves inventory immediately, so the figure on screen matches what is on the shelf.",
      },
      {
        title: "Day-end that balances",
        text: "A closing report that reconciles takings against cash counted, and flags the difference rather than hiding it.",
      },
      {
        title: "Permissions by role",
        text: "Decide who may discount, refund or view reports. Enforced in the database, not just hidden from the menu.",
      },
      {
        title: "Runs when the internet doesn't",
        text: "The counter keeps working through an outage and catches up once the connection returns.",
      },
    ],
  },
  {
    slug: "business-management",
    navTitle: "Business Management Software",
    cardTitle: "Business Management Software",
    tagline: "Daily takings, stock, credit and monthly profit in one place.",
    heroTitle: "The system your business actually runs on",
    intro:
      "Custom software for the numbers a business checks against cash in a drawer — daily readings, stock counts, customer credit, banking and the monthly profit report.",
    highlights: [
      {
        title: "Built around your day, not a generic template",
        text: "We start from the spreadsheet or register you already use, keep the same column order and the same words, so your staff can switch on day one.",
      },
      {
        title: "Money rules enforced in the database",
        text: "A ledger that cannot be edited, a balance that cannot go negative, one entry per day per item — held by Postgres constraints and triggers, not by a check in the interface that a future change can walk past.",
      },
      {
        title: "Totals computed once",
        text: "Every figure that adds up comes from a single database function, so two screens can never disagree about the same month.",
      },
      {
        title: "Role-based access",
        text: "Owners, managers and staff each see what they need. Row-level security in Postgres backs it up independently of the app.",
      },
      {
        title: "Reports you can hand to an accountant",
        text: "Monthly summaries and exportable workbooks, formatted the way your bookkeeper already expects them.",
      },
      {
        title: "Readable errors",
        text: "When the system refuses an entry it says why, in a sentence, naming the record and the figures involved.",
      },
    ],
  },
  {
    slug: "online-store",
    navTitle: "Online Store",
    cardTitle: "Online Store",
    tagline: "A fast, search-friendly storefront that you control.",
    heroTitle: "An online store built to load fast and sell",
    intro:
      "Server-rendered storefronts on Next.js — quick on a phone, indexable by search engines, and yours to run without a monthly platform fee per feature.",
    highlights: [
      {
        title: "Fast on a phone",
        text: "Pages render on the server and arrive ready to read, which is what most of your customers are actually waiting on.",
      },
      {
        title: "Search-engine ready from day one",
        text: "Proper metadata, clean URLs and real HTML — not a blank page that only fills in after JavaScript runs.",
      },
      {
        title: "A catalog you manage yourself",
        text: "Products, variants, pricing and stock live in your own database, editable from an admin section built for the person who actually updates it.",
      },
      {
        title: "Checkout and payments",
        text: "Card and wallet payments through an established provider, with order confirmations and invoices sent automatically.",
      },
      {
        title: "Delivery options that match how you work",
        text: "Shipping, pickup, or local delivery — configured to your business rather than forced into a fixed template.",
      },
      {
        title: "Yours to keep",
        text: "The code and the database are yours. No platform lock-in and no per-feature upgrade path.",
      },
    ],
  },
  {
    slug: "mobile-app",
    navTitle: "Mobile Apps",
    cardTitle: "Mobile Apps",
    tagline: "Android and iOS apps that keep working without a signal.",
    heroTitle: "Mobile apps that don't stop when the signal does",
    intro:
      "React Native apps that hold their data on the device, so the work continues in a basement, a warehouse or a village with no coverage.",
    highlights: [
      {
        title: "Offline first",
        text: "The app keeps its records in a database on the phone. No connection needed to record a sale, a reading, or a payment.",
      },
      {
        title: "Same rules as the desktop version",
        text: "When an app is a companion to a desktop or web system, it carries the identical constraints, so both refuse the same bad entry.",
      },
      {
        title: "Designed for a working phone",
        text: "Big touch targets, readable numbers, and screens that work in one hand — tested with real figures, not placeholder text.",
      },
      {
        title: "Ships as a real installable app",
        text: "Signed builds for the Play Store, or distributed directly as an APK when a business would rather not go through a store.",
      },
      {
        title: "Syncs when you want it to",
        text: "Optional sync back to a central system, on your schedule, rather than a constant connection requirement.",
      },
      {
        title: "Built to be handed over",
        text: "Documented, with the build process written down, so you are not tied to whoever wrote it.",
      },
    ],
  },
  {
    slug: "offline-desktop",
    navTitle: "Offline Desktop Apps",
    cardTitle: "Offline Desktop Apps",
    tagline: "Installs like a normal program. No internet, no cloud account.",
    heroTitle: "Software that runs on one laptop and needs nothing else",
    intro:
      "For businesses that can't rely on a connection, or would rather their books never left the premises — a proper installer, a bundled database, and no monthly bill.",
    highlights: [
      {
        title: "No internet required, ever",
        text: "The database ships inside the application. Unplug the network cable and everything still works.",
      },
      {
        title: "A normal installer",
        text: "Windows, macOS or Linux. Double-click, next, finish — no Docker, no command line, no cloud sign-up.",
      },
      {
        title: "Your data stays on your machine",
        text: "Nothing is uploaded anywhere. For some businesses that is the whole reason for choosing this over a web app.",
      },
      {
        title: "Same codebase as the web version",
        text: "Because the rules live in the database rather than in the interface, a web app and its desktop build stay identical in behaviour.",
      },
      {
        title: "Backups you can actually find",
        text: "One-click backup to a file you can copy to a USB stick, and a restore that has been tested.",
      },
      {
        title: "Updates on your terms",
        text: "Signed releases you choose to install, not automatic changes that arrive mid-shift.",
      },
    ],
  },
  {
    slug: "ai-assistants",
    navTitle: "AI Assistants",
    cardTitle: "AI Assistants & Automation",
    tagline: "Assistants that answer from your data, not from guesswork.",
    heroTitle: "AI that knows your catalog, your orders and your hours",
    intro:
      "Chat assistants and automations wired into your actual systems, so answers come from your records instead of being invented.",
    highlights: [
      {
        title: "Answers grounded in your data",
        text: "The assistant reads your real product catalog, order status and business hours, so it does not make things up.",
      },
      {
        title: "Knows when to hand over",
        text: "Routine questions are handled automatically; anything sensitive or unclear is passed to a person with the context attached.",
      },
      {
        title: "Sits where your customers already are",
        text: "On your website, inside your app, or through a messaging channel your customers already use.",
      },
      {
        title: "Automations behind the scenes",
        text: "Order updates, follow-ups and routine data entry handled without someone re-typing it.",
      },
      {
        title: "Cost you can see",
        text: "Usage is metered and reported, so you know what it costs before it becomes a surprise.",
      },
      {
        title: "Scoped deliberately",
        text: "We define what the assistant may and may not do up front, and keep it there.",
      },
    ],
  },
];

export function getSolutionBySlug(slug) {
  return solutions.find((item) => item.slug === slug);
}
