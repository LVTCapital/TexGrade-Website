import Link from "next/link";
import { Icon } from "@/components/icon";
import type { Locale } from "@/lib/i18n";
import { siteRoutes } from "@/lib/i18n";

const content = {
  de: {
    eyebrow: "Unternehmen",
    title: "Sortierkompetenz mit internationalem Blick.",
    intro: "TexGrade verbindet mehr als 30 Jahre Markterfahrung mit der Verarbeitung regional erfasster Altkleider und internationalem Vertrieb.",
    storyEyebrow: "Was wir tun",
    storyTitle: "Wir schaffen klare Produktgruppen aus heterogenen Textilien.",
    story: ["Am Standort Melle verarbeitet TexGrade regional erfasste Altkleider und sortiert sie nach Artikeln und abgestimmten Qualitätsanforderungen. Jährlich durchlaufen mehr als 7.500.000 Kilogramm Textilien unseren Betrieb.", "Wiederverwendbare Kleidung bereiten wir für den Export innerhalb Europas sowie nach Afrika und Asien vor. Nicht wiederverwendbare Textilien werden geeigneten Recyclingwegen zugeführt."],
    valuesEyebrow: "Arbeitsweise",
    valuesTitle: "Pragmatisch. Klar. Verlässlich.",
    values: [
      ["Mehr als 30 Jahre Erfahrung", "Langjährige Marktkenntnis bildet die Grundlage unserer Sortierung und des internationalen Vertriebs."],
      ["Über 7,5 Mio. kg pro Jahr", "Diese Menge an Altkleidern wird jährlich verarbeitet, sortiert und in passende Verwertungswege gebracht."],
      ["Europa, Afrika und Asien", "Wir beliefern professionelle Abnehmer in europäischen und internationalen Absatzmärkten."],
    ],
    locationEyebrow: "Standort Deutschland",
    locationTitle: "Regional erfasst. In Melle sortiert. International vertrieben.",
    locationText: "Der Standort in Niedersachsen verbindet die Verarbeitung regional erfasster Ware mit Absatzmärkten in Europa, Afrika und Asien.",
    contact: "Kontakt aufnehmen",
  },
  en: {
    eyebrow: "Company",
    title: "Sorting expertise with an international perspective.",
    intro: "TexGrade combines more than 30 years of market experience with the processing of regionally collected used textiles and international distribution.",
    storyEyebrow: "What we do",
    storyTitle: "We create clear product groups from diverse textile streams.",
    story: ["At our facility in Melle, TexGrade processes regionally collected used textiles and sorts them by article and agreed quality requirements. More than 7,500,000 kilograms of textiles pass through our facility every year.", "We prepare reusable clothing for export within Europe and to Africa and Asia. Textiles that are not suitable for reuse are directed to appropriate recycling channels."],
    valuesEyebrow: "How we work",
    valuesTitle: "Practical. Clear. Reliable.",
    values: [
      ["More than 30 years of experience", "Long-standing market knowledge forms the basis of our sorting operations and international distribution."],
      ["Over 7.5 million kg per year", "This volume of used textiles is processed, sorted and directed to suitable recovery channels each year."],
      ["Europe, Africa and Asia", "We supply professional buyers in European and international sales markets."],
    ],
    locationEyebrow: "Location in Germany",
    locationTitle: "Collected regionally. Sorted in Melle. Distributed internationally.",
    locationText: "Our facility in Lower Saxony connects the processing of regionally collected goods with sales markets in Europe, Africa and Asia.",
    contact: "Contact us",
  },
} as const;

export function CompanyPage({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <>
      <section className="page-hero company-hero">
        <div className="shell narrow-left"><span className="eyebrow">{copy.eyebrow}</span><h1>{copy.title}</h1><p>{copy.intro}</p></div>
      </section>

      <section className="section">
        <div className="shell story-grid">
          <div className="story-title"><span className="eyebrow">{copy.storyEyebrow}</span><h2>{copy.storyTitle}</h2></div>
          <div className="story-copy">{copy.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section className="section dark-section values-section">
        <div className="shell">
          <div className="section-heading light-heading"><span className="eyebrow light">{copy.valuesEyebrow}</span><h2>{copy.valuesTitle}</h2></div>
          <div className="values-grid">
            {copy.values.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section location-section">
        <div className="shell location-grid">
          <div className="location-map"><span>52.20° N</span><strong>MELLE</strong><span>8.34° E</span><div className="map-dot" /></div>
          <div><span className="eyebrow">{copy.locationEyebrow}</span><h2>{copy.locationTitle}</h2><p>{copy.locationText}</p><Link className="text-link" href={siteRoutes[locale].contact}>{copy.contact} <Icon name="arrow" /></Link></div>
        </div>
      </section>
    </>
  );
}
