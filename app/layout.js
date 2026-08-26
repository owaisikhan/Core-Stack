import "@/app/_styles/globals.css";
import Header from "@/app/_components/site/Header";
import Footer from "@/app/_components/site/Footer";
import { siteConfig } from "@/app/_lib/siteConfig";

export const metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Custom point of sale, online stores, mobile apps and offline desktop software, built around the way your business already works.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
