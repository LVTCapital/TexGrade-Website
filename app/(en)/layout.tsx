import type { Metadata } from "next";
import "../globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://texgrade.com"),
  title: {
    default: "TexGrade GmbH & Co. KG | Textile sorting for international markets",
    template: "%s | TexGrade",
  },
  description: "TexGrade processes regionally collected used textiles, sorts them into defined article categories and directs them to reuse or recycling.",
};

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header locale="en" />
        <main id="main-content">{children}</main>
        <Footer locale="en" />
      </body>
    </html>
  );
}
