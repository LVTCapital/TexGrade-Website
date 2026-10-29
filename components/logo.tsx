import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { siteRoutes } from "@/lib/i18n";

const homeLabels: Record<Locale, string> = {
  en: "TexGrade home page",
  de: "TexGrade Startseite",
  fr: "Accueil TexGrade",
};

export function Logo({ locale = "en" }: { locale?: Locale }) {
  return (
    <Link
      className="logo"
      href={siteRoutes[locale].home}
      aria-label={homeLabels[locale]}
    >
      <span className="logo-word">
        <span className="logo-tex">Tex</span>
        <span className="logo-grade">Grade</span>
      </span>
      <small>GmbH &amp; Co. KG</small>
    </Link>
  );
}
