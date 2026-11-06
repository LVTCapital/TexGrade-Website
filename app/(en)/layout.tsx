import type { Metadata } from "next";
import "../globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { fontClassName } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://texgrade.com"),
  title: {
    default: "TexGrade GmbH & Co. KG | Textile sorting for international markets",
    template: "%s | TexGrade",
  },
  description: "TexGrade carefully sorts regionally collected used textiles and prepares them for reuse in international textile markets.",
};

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontClassName}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header locale="en" />
        <main id="main-content">{children}</main>
        <Footer locale="en" />
      </body>
    </html>
  );
}
