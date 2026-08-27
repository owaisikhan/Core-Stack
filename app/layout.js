import "@/app/_styles/globals.css";
import { Header } from "@/app/_components/layout/Header";
import { Footer } from "@/app/_components/layout/Footer";
import { siteConfig } from "@/app/_lib/siteConfig";

export const metadata = {
  title: `${siteConfig.name} — Omnichannel Commerce Platform`,
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
