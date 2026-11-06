export type Locale = "en" | "de" | "fr";

export const siteUrl = "https://texgrade.com";

export const siteRoutes = {
  en: {
    home: "/",
    services: "/services",
    company: "/company",
    contact: "/contact",
    legal: "/legal-notice",
    privacy: "/privacy",
  },
  de: {
    home: "/de",
    services: "/de/leistungen",
    company: "/de/unternehmen",
    contact: "/de/kontakt",
    legal: "/de/impressum",
    privacy: "/de/datenschutz",
  },
  fr: {
    home: "/fr",
    services: "/fr/services",
    company: "/fr/entreprise",
    contact: "/fr/contact",
    legal: "/fr/mentions-legales",
    privacy: "/fr/confidentialite",
  },
} as const;

const routeKeys = Object.keys(siteRoutes.en) as Array<keyof typeof siteRoutes.en>;

export function alternateLanguagePath(pathname: string, targetLocale: Locale) {
  const routeKey = routeKeys.find((key) =>
    Object.values(siteRoutes).some((routes) => routes[key] === pathname),
  );

  return routeKey ? siteRoutes[targetLocale][routeKey] : siteRoutes[targetLocale].home;
}
