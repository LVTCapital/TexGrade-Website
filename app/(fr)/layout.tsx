import type { Metadata } from "next";
import "../globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { fontClassName } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://texgrade.com"),
  title: {
    default: "TexGrade GmbH & Co. KG | Tri textile pour les marchés internationaux",
    template: "%s | TexGrade",
  },
  description: "TexGrade trie avec soin des textiles usagés collectés dans la région et les prépare à être réutilisés sur les marchés textiles internationaux.",
};

export default function FrenchRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={fontClassName}>
      <body>
        <a className="skip-link" href="#main-content">Aller au contenu</a>
        <Header locale="fr" />
        <main id="main-content">{children}</main>
        <Footer locale="fr" />
      </body>
    </html>
  );
}
