import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import type { Locale } from "@/lib/i18n";
import { siteRoutes } from "@/lib/i18n";

const content = {
  de: {
    eyebrow: "Leistungen",
    title: "Vom Eingang bis zur versandfertigen Kategorie.",
    intro: "Mehr als 7.500.000 Kilogramm regional erfasster Altkleider werden jährlich verarbeitet, sortiert und dem passenden weiteren Weg zugeführt.",
    steps: [
      { icon: "sort" as const, title: "Eingang & Vorsortierung", text: "Regional erfasste Altkleider werden aufgenommen und für den weiteren Sortierprozess vorbereitet." },
      { icon: "grade" as const, title: "Sortierung & Grading", text: "Erfahrene Teams ordnen die Textilien nach Artikel, Qualität, Saison und vereinbarter Spezifikation." },
      { icon: "pack" as const, title: "Bündelung & Verpackung", text: "Die fertigen Kategorien werden strukturiert und transportgerecht verpackt." },
      { icon: "ship" as const, title: "Export & Recycling", text: "Wiederverwendbare Ware wird für Europa, Afrika und Asien vorbereitet. Nicht wiederverwendbare Textilien gehen an spezialisierte Recyclingpartner." },
    ],
    sortingAlt: "Mitarbeiterin beim Sortieren von Gebrauchtkleidung",
    sortingCaption: "Manuelle Sortierung nach Artikel und Qualität",
    teamAlt: "Mitarbeiter bei der Verarbeitung erfasster Altkleider",
    teamCaption: "Verarbeitung und Vorbereitung im Betrieb",
    qualityEyebrow: "Qualität in der Sortierung",
    qualityTitle: "Artikel und Qualitätsstufe werden getrennt betrachtet.",
    qualityPoints: [
      ["Manuelle Sichtprüfung", "Textilien werden visuell beurteilt und der vereinbarten Kategorie zugeordnet."],
      ["Definierte Kriterien", "Qualität, Saison und Artikelstruktur werden vor Produktionsbeginn abgestimmt."],
      ["Auftragsbezogene Kontrolle", "Die fertige Zusammenstellung wird an der konkreten Kundenspezifikation ausgerichtet."],
    ],
    structureEyebrow: "Flexible Produktstruktur",
    structureTitle: "Sortimente werden nicht von der Stange zusammengestellt.",
    structureIntro: "Die genaue Artikelliste wird mit dem Kunden abgestimmt. Typische Sortierdimensionen sind:",
    categories: [
      { title: "Nach Artikel", items: ["Oberteile", "Hosen & Denim", "Shorts", "Weitere Bekleidungskategorien"] },
      { title: "Nach Saison", items: ["Sommerware", "Übergangssortimente", "Winterware", "Marktbezogene Kombinationen"] },
      { title: "Nach Spezifikation", items: ["Qualitätsstufen", "Kundeneigene Artikellisten", "Auftragsbezogene Mischung", "Verpackungsanforderungen"] },
    ],
    ctaEyebrow: "Für Kunden und Lieferanten",
    ctaTitle: "Wir klären Kategorien, Mengen, Zielmarkt oder Anlieferung gemeinsam.",
    ctaButton: "Reinhold Thate kontaktieren",
  },
  en: {
    eyebrow: "Services",
    title: "From intake to shipment-ready categories.",
    intro: "More than 7,500,000 kilograms of regionally collected used textiles are processed, sorted and directed to the appropriate next stage every year.",
    steps: [
      { icon: "sort" as const, title: "Intake & pre-sorting", text: "Regionally collected used textiles are received and prepared for the main sorting process." },
      { icon: "grade" as const, title: "Sorting & grading", text: "Experienced teams classify textiles by article, quality, season and agreed specification." },
      { icon: "pack" as const, title: "Bundling & packaging", text: "Finished categories are organised and packaged for efficient transport." },
      { icon: "ship" as const, title: "Export & recycling", text: "Reusable goods are prepared for Europe, Africa and Asia. Non-reusable textiles are passed on to specialised recycling partners." },
    ],
    sortingAlt: "Employee sorting used clothing",
    sortingCaption: "Manual sorting by article and quality",
    teamAlt: "Employees processing collected used textiles",
    teamCaption: "Processing and preparation at our facility",
    qualityEyebrow: "Quality in sorting",
    qualityTitle: "Article and quality grade are assessed separately.",
    qualityPoints: [
      ["Manual visual inspection", "Textiles are assessed visually and assigned to the agreed category."],
      ["Defined criteria", "Quality, season and article structure are agreed before production begins."],
      ["Order-specific control", "The finished assortment is aligned with the customer’s specific requirements."],
    ],
    structureEyebrow: "Flexible product structure",
    structureTitle: "Our assortments are never one-size-fits-all.",
    structureIntro: "The exact article list is agreed with each customer. Typical sorting dimensions include:",
    categories: [
      { title: "By article", items: ["Tops", "Trousers & denim", "Shorts", "Additional clothing categories"] },
      { title: "By season", items: ["Summer wear", "Transitional assortments", "Winter wear", "Market-specific combinations"] },
      { title: "By specification", items: ["Quality grades", "Customer-specific article lists", "Order-specific mixes", "Packaging requirements"] },
    ],
    ctaEyebrow: "For customers and suppliers",
    ctaTitle: "Together, we define categories, volumes, target market and delivery requirements.",
    ctaButton: "Contact Reinhold Thate",
  },
} as const;

export function ServicesPage({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <>
      <section className="page-hero">
        <div className="shell narrow-left"><span className="eyebrow">{copy.eyebrow}</span><h1>{copy.title}</h1><p>{copy.intro}</p></div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="process-list">
            {copy.steps.map((step, index) => (
              <article className="process-step" key={step.title}>
                <div className="process-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="process-icon"><Icon name={step.icon} /></div>
                <div><h2>{step.title}</h2><p>{step.text}</p></div>
              </article>
            ))}
          </div>
          <div className="process-gallery">
            <figure>
              <Image src="/images/sorting-table.webp" alt={copy.sortingAlt} width={380} height={252} sizes="(max-width: 760px) 100vw, 42vw" />
              <figcaption>{copy.sortingCaption}</figcaption>
            </figure>
            <figure>
              <Image src="/images/sorting-team.webp" alt={copy.teamAlt} width={680} height={451} sizes="(max-width: 760px) 100vw, 58vw" />
              <figcaption>{copy.teamCaption}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="quality-band">
        <div className="shell quality-grid">
          <div className="quality-intro"><span className="eyebrow light">{copy.qualityEyebrow}</span><h2>{copy.qualityTitle}</h2></div>
          <div className="quality-points">
            {copy.qualityPoints.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="shell">
          <div className="section-heading"><span className="eyebrow">{copy.structureEyebrow}</span><h2>{copy.structureTitle}</h2><p>{copy.structureIntro}</p></div>
          <div className="category-grid">
            {copy.categories.map((group) => <article className="category-card" key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
          </div>
        </div>
      </section>

      <section className="section compact-cta">
        <div className="shell compact-cta-inner">
          <div><span className="eyebrow">{copy.ctaEyebrow}</span><h2>{copy.ctaTitle}</h2></div>
          <Link className="button primary" href={siteRoutes[locale].contact}>{copy.ctaButton}</Link>
        </div>
      </section>
    </>
  );
}
