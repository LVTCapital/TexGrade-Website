import Image from "next/image";
import type { Locale } from "@/lib/i18n";

const alt = {
  en: "Packed textile bales in the TexGrade warehouse",
  de: "Verpackte Textilballen im TexGrade-Lager",
  fr: "Balles de textiles emballées dans l’entrepôt TexGrade",
} as const;

export function HeroVisual({ locale }: { locale: Locale }) {
  return (
    <div className="hero-visual hero-photo">
      <Image
        src="/images/warehouse/home-hero.webp"
        alt={alt[locale]}
        fill
        priority
        sizes="(max-width: 980px) 100vw, 46vw"
      />
    </div>
  );
}
