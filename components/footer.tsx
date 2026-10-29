import Link from "next/link";
import { Logo } from "./logo";
import type { Locale } from "@/lib/i18n";
import { siteRoutes } from "@/lib/i18n";

const copy = {
  de: {
    description: "Sortierte Secondhand-Textilien für internationale Geschäftskunden.",
    company: "Unternehmen",
    services: "Leistungen",
    about: "Über TexGrade",
    contact: "Kontakt",
    legal: "Rechtliches",
    legalNotice: "Impressum",
    privacy: "Datenschutz",
    location: "Standort",
    place: "Melle, Deutschland",
    claim: "Regional erfasst. International im Kreislauf.",
  },
  en: {
    description: "Sorted second-hand textiles for international business customers.",
    company: "Company",
    services: "Services",
    about: "About TexGrade",
    contact: "Contact",
    legal: "Legal",
    legalNotice: "Legal notice",
    privacy: "Privacy",
    location: "Location",
    place: "Melle, Germany",
    claim: "Collected regionally. Circulated internationally.",
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
          <a href="tel:+491714706260">+49 171 4706260</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} TexGrade GmbH &amp; Co. KG</span>
        <span>{content.claim}</span>
      </div>
    </footer>
  );
}
