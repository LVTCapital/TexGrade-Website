import Link from "next/link";
import { Logo } from "./logo";
import type { Locale } from "@/lib/i18n";
import { siteRoutes } from "@/lib/i18n";

const copy = {
  en: {
    description: "Carefully sorted second-hand textiles for international business customers.",
    company: "Company",
    services: "Purchasing & Sales",
    about: "About TexGrade",
    contact: "Contact",
    legal: "Legal",
    legalNotice: "Legal notice",
    privacy: "Privacy",
    location: "Location",
    place: "Melle, Germany",
    claim: "Collected regionally. Circulated internationally.",
  },
  de: {
    description: "Sorgfältig sortierte Secondhand-Textilien für internationale Geschäftskunden.",
    company: "Unternehmen",
    services: "Ankauf & Verkauf",
    about: "Über TexGrade",
    contact: "Kontakt",
    legal: "Rechtliches",
    legalNotice: "Impressum",
    privacy: "Datenschutz",
    location: "Standort",
    place: "Melle, Deutschland",
    claim: "Regional erfasst. International im Kreislauf.",
  },
  fr: {
    description: "Des textiles de seconde main soigneusement triés pour les professionnels internationaux.",
    company: "Entreprise",
    services: "Achat & Vente",
    about: "À propos de TexGrade",
    contact: "Contact",
    legal: "Informations légales",
    legalNotice: "Mentions légales",
    privacy: "Confidentialité",
    location: "Site",
    place: "Melle, Allemagne",
    claim: "Collectés localement. Remis en circulation dans le monde.",
  },
} as const;

export function Footer({ locale }: { locale: Locale }) {
  const content = copy[locale];
  const routes = siteRoutes[locale];

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Logo locale={locale} />
          <p className="footer-copy">{content.description}</p>
        </div>
        <div>
          <p className="footer-heading">{content.company}</p>
          <Link href={routes.services}>{content.services}</Link>
          <Link href={routes.company}>{content.about}</Link>
          <Link href={routes.contact}>{content.contact}</Link>
        </div>
        <div>
          <p className="footer-heading">{content.legal}</p>
          <Link href={routes.legal}>{content.legalNotice}</Link>
          <Link href={routes.privacy}>{content.privacy}</Link>
        </div>
        <div>
          <p className="footer-heading">{content.location}</p>
          <p>{content.place}</p>
          <a href="tel:+491714706260">Reinhold Thate</a>
          <a href="tel:+491714706260">+49 171 470 62 60</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} TexGrade GmbH &amp; Co. KG</span>
        <span>{content.claim}</span>
      </div>
    </footer>
  );
}
