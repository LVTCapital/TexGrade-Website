import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { siteRoutes } from "@/lib/i18n";

export function Logo({ locale = "de" }: { locale?: Locale }) {
  return (
    <Link
      className="logo"
      href={siteRoutes[locale].home}
      aria-label={locale === "de" ? "TexGrade Startseite" : "TexGrade home page"}
    >
      <span className="logo-word">
        <span className="logo-tex">Tex</span>
        <span className="logo-grade">Grade</span>
      </span>
      <small>GmbH &amp; Co. KG</small>
    </Link>
  );
}
