import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    label: "Manual textile sorting in Melle",
    eyebrow: "Processing in Melle",
    fact: "More than 7.5 million kg every year",
    tags: ["Article", "Quality", "Season"],
  },
  de: {
    label: "Manuelle Textilsortierung in Melle",
    eyebrow: "Verarbeitung in Melle",
    fact: "Mehr als 7,5 Mio. kg pro Jahr",
    tags: ["Artikel", "Qualität", "Saison"],
  },
  fr: {
    label: "Tri manuel de textiles à Melle",
    eyebrow: "Traitement à Melle",
    fact: "Plus de 7,5 millions de kg par an",
    tags: ["Article", "Qualité", "Saison"],
  },
} as const;

export function HeroVisual({ locale }: { locale: Locale }) {
  const content = copy[locale];

  return (
    <div className="hero-visual textile-visual" role="img" aria-label={content.label}>
      <div className="fabric fabric-one" />
      <div className="fabric fabric-two" />
      <div className="fabric fabric-three" />
      {content.tags.map((tag, index) => (
        <div className={`grade-card grade-card-${["one", "two", "three"][index]}`} key={tag}>
          <span>0{index + 1}</span>
          <strong>{tag}</strong>
          <small>TexGrade</small>
        </div>
      ))}
      <div className="hero-photo-info">
        <span>{content.eyebrow}</span>
        <strong>{content.fact}</strong>
      </div>
      <div className="visual-stamp">SORT<br /><span>MELLE</span></div>
    </div>
  );
}
