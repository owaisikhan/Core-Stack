export const capabilities = [
  {
    title: "Rules live in the database",
    text: "A ledger that cannot be edited, a balance that cannot go negative, a booking that cannot overlap — enforced by Postgres constraints and triggers, so a second client or a future refactor cannot walk past them.",
  },
  {
    title: "Every total computed once",
    text: "Anything that adds up comes from a single database function. Two screens showing the same month can never disagree, because they are asking the same question.",
  },
  {
    title: "Offline is a first-class option",
    text: "Because the rules sit in the database rather than the interface, the same system can ship as a web app, an offline desktop install, or a phone app that works with no signal.",
  },
  {
    title: "Errors written for the person reading them",
    text: "When the system refuses an entry, it names the record and the figures at stake in a sentence — not a constraint name from a log file.",
  },
];

export const channels = [
  {
    title: "At the counter",
    text: "A point of sale that updates stock as it sells and balances against the drawer at close.",
  },
  {
    title: "On the web",
    text: "A server-rendered storefront that loads fast on a phone and is readable by search engines.",
  },
  {
    title: "On a phone",
    text: "Installable apps that hold their data on the device and keep working without a connection.",
  },
  {
    title: "On one laptop",
    text: "A desktop install with its own bundled database, for businesses whose books should not leave the premises.",
  },
];

export const platformFeatures = [
  {
    title: "Role-based access",
    text: "Owners, managers and staff see different things — enforced in the database, not merely hidden from a menu.",
  },
  {
    title: "Auditable records",
    text: "Corrections are written as opposing entries. Nothing is quietly deleted, and every total still adds up.",
  },
  {
    title: "Multi-location ready",
    text: "Several branches, warehouses or entities under one roll-up, without a separate system per site.",
  },
  {
    title: "Reports built for checking",
    text: "Monthly summaries and exportable workbooks laid out the way your bookkeeper already reads them.",
  },
  {
    title: "White-labelled from the start",
    text: "Business name, logo, currency and contact details live in one config file, so branding is an edit rather than a rewrite.",
  },
  {
    title: "Documented and handed over",
    text: "The code, the database and the build process are yours, written down so you are never tied to one developer.",
  },
];

export const process = [
  {
    step: "01",
    title: "See what you use today",
    text: "The spreadsheet, the register, the software you are replacing. Matching the words and column order you already use is what lets your staff switch on day one.",
  },
  {
    step: "02",
    title: "Agree the rules",
    text: "What must never happen — a negative balance, an edited ledger, a double booking. These become database constraints before any screen is designed.",
  },
  {
    step: "03",
    title: "Build one screen end to end",
    text: "Read, render, save. One real screen working with real figures settles the patterns before breadth gets built on top of them.",
  },
  {
    step: "04",
    title: "Ship, then hand over",
    text: "Deployed, documented, with a backup and restore that has actually been tested — not assumed.",
  },
];

export const faqs = [
  {
    q: "Do I own the code?",
    a: "Yes. The source and the database are yours, along with documentation covering how to build and deploy it. There is no platform you are locked into and no per-feature upgrade path.",
  },
  {
    q: "Can it work without an internet connection?",
    a: "Yes, for a lot of cases. We ship desktop applications with their own bundled database and mobile apps that store data on the device, both of which work with no connection at all. Whether that suits your business is one of the first things worth deciding, because it affects the design.",
  },
  {
    q: "What is it built with?",
    a: "Next.js and React for web, React Native for mobile, Electron for desktop, and Postgres for the data. Web projects typically deploy to Vercel with Supabase providing Postgres, authentication and row-level security.",
  },
  {
    q: "Can you replace the spreadsheet we already use?",
    a: "That is usually the best starting point. We ask for a copy first and keep your column order and your terminology, because matching what people already know is worth more than any improvement we could invent.",
  },
  {
    q: "Do you work with businesses outside your area?",
    a: "Yes. Projects run remotely, with regular check-ins and working software to look at throughout rather than a single reveal at the end.",
  },
  {
    q: "What happens after launch?",
    a: "Support and changes are agreed up front. Because everything is documented and the code is yours, you are also free to take it to another developer at any point.",
  },
];
