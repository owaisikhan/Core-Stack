import { solutions } from "./solutions-data";
import { industries } from "./industries-data";

export const solutionLinks = solutions.map(({ navTitle, slug }) => ({
  title: navTitle,
  href: `/solutions/${slug}`,
}));

export const industryLinks = industries.map(({ navTitle, slug }) => ({
  title: navTitle,
  href: `/industries/${slug}`,
}));

export const resourceLinks = [
  { title: "About Us", href: "/about-us" },
  { title: "Contact Us", href: "/contact-us" },
];
