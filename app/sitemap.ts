import type { MetadataRoute } from "next";
import { siteRoutes, siteUrl } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const pageKeys = Object.keys(siteRoutes.en) as Array<keyof typeof siteRoutes.en>;
  const locales = Object.keys(siteRoutes) as Array<keyof typeof siteRoutes>;

  return pageKeys.flatMap((key) => {
    const languages = Object.fromEntries(locales.map((locale) => [locale, `${siteUrl}${siteRoutes[locale][key]}`]));

    return locales.map((locale) => ({
      url: `${siteUrl}${siteRoutes[locale][key]}`,
      alternates: { languages },
    }));
  });
}
