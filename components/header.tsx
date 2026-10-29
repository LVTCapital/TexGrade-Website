"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./logo";
import { alternateLanguagePath, type Locale, siteRoutes } from "@/lib/i18n";

const copy = {
  en: {
    links: [
      { href: siteRoutes.en.home, label: "Home" },
      { href: siteRoutes.en.services, label: "Services" },
      { href: siteRoutes.en.company, label: "Company" },
      { href: siteRoutes.en.contact, label: "Contact" },
    ],
    navigation: "Main navigation",
    open: "Open navigation",
    close: "Close navigation",
    cta: "Send enquiry",
    languages: "Select language",
  },
  de: {
    links: [
      { href: siteRoutes.de.home, label: "Startseite" },
      { href: siteRoutes.de.services, label: "Leistungen" },
      { href: siteRoutes.de.company, label: "Unternehmen" },
      { href: siteRoutes.de.contact, label: "Kontakt" },
    ],
    navigation: "Hauptnavigation",
    open: "Navigation öffnen",
    close: "Navigation schließen",
    cta: "Anfrage senden",
    languages: "Sprache wählen",
  },
  fr: {
    links: [
      { href: siteRoutes.fr.home, label: "Accueil" },
      { href: siteRoutes.fr.services, label: "Services" },
      { href: siteRoutes.fr.company, label: "Entreprise" },
      { href: siteRoutes.fr.contact, label: "Contact" },
    ],
    navigation: "Navigation principale",
    open: "Ouvrir la navigation",
    close: "Fermer la navigation",
    cta: "Envoyer une demande",
    languages: "Choisir la langue",
  },
} as const;

const languages: Array<{ locale: Locale; code: string; flag: string; label: string }> = [
  { locale: "en", code: "EN", flag: "🇬🇧", label: "English" },
  { locale: "de", code: "DE", flag: "🇩🇪", label: "Deutsch" },
  { locale: "fr", code: "FR", flag: "🇫🇷", label: "Français" },
];

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const content = copy[locale];

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Logo locale={locale} />
        <button
          className="menu-button"
          type="button"
          aria-label={open ? content.close : content.open}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <nav className={open ? "main-nav is-open" : "main-nav"} aria-label={content.navigation}>
          {content.links.map((link) => (
            <Link
              key={link.href}
              className={pathname === link.href ? "active" : undefined}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="language-switch" aria-label={content.languages}>
            {languages.map((language) => (
              <Link
                key={language.locale}
                className={locale === language.locale ? "active" : undefined}
                href={alternateLanguagePath(pathname, language.locale)}
                hrefLang={language.locale}
                lang={language.locale}
                aria-label={language.label}
                aria-current={locale === language.locale ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                <span aria-hidden="true">{language.flag}</span>
                <span>{language.code}</span>
              </Link>
            ))}
          </div>
          <Link className="nav-cta" href={siteRoutes[locale].contact} onClick={() => setOpen(false)}>
            {content.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
