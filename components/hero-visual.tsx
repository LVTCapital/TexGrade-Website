import Image from "next/image";
import type { Locale } from "@/lib/i18n";

export function HeroVisual({ locale }: { locale: Locale }) {
  const copy = locale === "de"
    ? {
        alt: "Ballenpresse in einem Textilsortierbetrieb",
        eyebrow: "Verarbeitung in Melle",
        fact: "Mehr als 7,5 Mio. kg Altkleider pro Jahr",
      }
    : {
        alt: "Baling press in a textile sorting facility",
        eyebrow: "Processing in Melle",
        fact: "More than 7.5 million kg of used textiles per year",
      };

  return (
    <div className="hero-visual hero-photo">
      <Image
        src="/images/sorting-press.webp"
        alt={copy.alt}
        fill
        priority
        sizes="(max-width: 980px) 100vw, 48vw"
      />
      <div className="hero-photo-info">
        <span>{copy.eyebrow}</span>
        <strong>{copy.fact}</strong>
      </div>
      <div className="visual-stamp">SORT<br /><span>MELLE</span></div>
    </div>
  );
}
