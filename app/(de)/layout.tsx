import type { Metadata } from "next";
import "../globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://texgrade.com"),
  title: {
    default: "TexGrade GmbH & Co. KG | Textilsortierung für internationale Märkte",
    template: "%s | TexGrade",
  },
  description: "TexGrade verarbeitet regional erfasste Altkleider, sortiert sie in definierte Artikelkategorien und führt sie der Wiederverwendung oder dem Recycling zu.",
};

export default function GermanRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>
        <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
        <Header locale="de" />
        <main id="main-content">{children}</main>
        <Footer locale="de" />
      </body>
    </html>
  );
}
