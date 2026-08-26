export const industries = [
  {
    slug: "fuel-and-energy",
    navTitle: "Fuel & Energy",
    summary:
      "Nozzle readings, fuel purchases, stock gain and loss, customer credit and the monthly profit figure.",
    heroTitle: "Software for a forecourt that has to balance every night",
    intro:
      "A petrol pump has a daily routine that generic accounting software has never heard of. We have built for it.",
    points: [
      "Daily nozzle readings with the previous close carried forward, so a missed day is visible rather than silently absorbed.",
      "Fuel purchases, tank stock and the gain or loss between what was delivered and what was sold.",
      "Lubricant and shop sales alongside fuel, in the same day's takings.",
      "Customer credit accounts, with statements a customer will accept.",
      "Banking and cash reconciliation, so the drawer and the books agree.",
      "A monthly profit report the owner can check line by line.",
    ],
  },
  {
    slug: "retail",
    navTitle: "Retail",
    summary:
      "Counter sales, stock across locations, and an online store that shares the same catalog.",
    heroTitle: "One catalog behind the counter and the website",
    intro:
      "Retailers lose money in the gap between what the shelf says and what the website says. We close it.",
    points: [
      "A till that updates stock as it sells, across as many branches as you run.",
      "One product record feeding the counter, the website and the app.",
      "Purchase orders and supplier tracking, so reordering is not guesswork.",
      "Customer accounts and credit for the regulars who settle monthly.",
      "Reporting on what actually sells, by branch and by hour.",
      "Stock counts done with a scanner instead of a clipboard.",
    ],
  },
  {
    slug: "food-and-beverage",
    navTitle: "Food & Beverage",
    summary:
      "Fast ordering, online menus, and stock that reflects what the kitchen actually used.",
    heroTitle: "Built for the rush, not for a quiet afternoon",
    intro:
      "Cafés, bakeries and takeaways need a system that keeps up at the busiest twenty minutes of the day.",
    points: [
      "An order screen designed for speed, with modifiers and repeat orders in a tap.",
      "Online ordering and a menu you update yourself, without calling anyone.",
      "Ingredient-level stock, so a sold item draws down what it actually consumed.",
      "Daily takings reconciled against the drawer at close.",
      "Repeat-customer records and simple loyalty, without a separate subscription.",
      "Reports on waste and margin per item, not just total revenue.",
    ],
  },
  {
    slug: "hospitality",
    navTitle: "Hospitality",
    summary: "Bookings, room or table availability, and the billing behind them.",
    heroTitle: "Availability, bookings and billing that agree with each other",
    intro:
      "Hotels and venues run on a calendar and a ledger. Both need to be right, and they need to be the same right.",
    points: [
      "Availability that cannot be double-booked, enforced by the database rather than by hope.",
      "Bookings taken online and at the desk, into the same calendar.",
      "Guest records with stay history and outstanding balances.",
      "Billing, deposits and refunds recorded as an auditable trail.",
      "Occupancy and revenue reporting by period.",
      "Staff roles, so front desk and management see different things.",
    ],
  },
  {
    slug: "professional-services",
    navTitle: "Professional Services",
    summary:
      "Appointments, client records, invoicing, and the recurring payments behind them.",
    heroTitle: "For businesses that sell time and expertise",
    intro:
      "Salons, clinics, workshops and consultancies need scheduling and billing that are the same system, not two.",
    points: [
      "Appointment booking online and in person, without overlap.",
      "Client records with history, notes and outstanding balances.",
      "Invoicing and receipts, issued and tracked automatically.",
      "Recurring plans and instalments where clients pay over time.",
      "Staff schedules and per-staff performance reporting.",
      "Reminders that cut down on no-shows.",
    ],
  },
];

export function getIndustryBySlug(slug) {
  return industries.find((item) => item.slug === slug);
}
