export type Locale = "de" | "en";

export const siteRoutes = {
  de: {
    home: "/",
    services: "/leistungen",
    company: "/unternehmen",
    contact: "/kontakt",
    legal: "/impressum",
    privacy: "/datenschutz",
  },
  en: {
    home: "/en",
    services: "/en/services",
    company: "/en/company",
    contact: "/en/contact",
    legal: "/en/legal-notice",
    privacy: "/en/privacy",
  },
} as const;

const routePairs = Object.keys(siteRoutes.de).map((key) => {
  const routeKey = key as keyof typeof siteRoutes.de;
  return [siteRoutes.de[routeKey], siteRoutes.en[routeKey]] as const;
});

export function alternateLanguagePath(pathname: string, targetLocale: Locale) {
  const pair = routePairs.find(([dePath, enPath]) => pathname === dePath || pathname === enPath);
  if (!pair) return siteRoutes[targetLocale].home;
  return targetLocale === "de" ? pair[0] : pair[1];
}
