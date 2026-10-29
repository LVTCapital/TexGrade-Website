import Image from "next/image";
import Link from "next/link";
import { HeroVisual } from "@/components/hero-visual";
import { Icon } from "@/components/icon";
import { MarketExplorer } from "@/components/market-explorer";
import type { Locale } from "@/lib/i18n";
import { siteRoutes } from "@/lib/i18n";

const content = {
  de: {
    heroEyebrow: "Textile sorting · International trade",
    heroTitle: "Textilien klar sortiert. Für Märkte weltweit.",
    heroText: "TexGrade verarbeitet regional erfasste Altkleider, sortiert sie in definierte Artikelkategorien und stellt bedarfsgerechte Sortimente für internationale Märkte zusammen.",
    servicesButton: "Leistungen ansehen",
    contactLink: "Kontakt aufnehmen",
    factsLabel: "TexGrade Schwerpunkte",
    facts: [["7,5+ Mio. kg", "Sortiermenge pro Jahr"], ["30+ Jahre", "Erfahrung im Markt"], ["3 Kontinente", "Europa, Afrika und Asien"]],
    serviceEyebrow: "Vom Textilstrom zum Sortiment",
    serviceTitle: "Eine klare Struktur für jede Bestellung.",
    serviceIntro: "Wir machen aus regional erfassten Gebrauchttextilien nachvollziehbare, handelbare Produktgruppen.",
    services: [
      { icon: "sort" as const, title: "Artikelgenaue Sortierung", text: "Gebrauchtkleidung wird in klar definierte Artikelkategorien aufgeteilt." },
      { icon: "grade" as const, title: "Kundenspezifisches Grading", text: "Qualität, Saison und Zusammenstellung richten sich nach vereinbarten Anforderungen." },
      { icon: "pack" as const, title: "Exportgerechte Verpackung", text: "Sortierte Ware wird strukturiert für Transport und Weiterverkauf vorbereitet." },
    ],
    processLink: "Den gesamten Ablauf kennenlernen",
    marketsEyebrow: "International ausgerichtet",
    marketsTitle: "Von Europa über Afrika bis nach Asien.",
    marketsIntro: "Klicke auf einen Markt, um zu sehen, wie TexGrade die Sortierung darauf ausrichtet.",
    storageAlt: "Lager mit vorsortierten Textilien in Transportbehältern",
    principleEyebrow: "Unser Grundsatz",
    principleTitle: "Sortierung beginnt mit dem Zielmarkt.",
    principleText: "Nicht jeder Markt benötigt dieselbe Zusammenstellung. Deshalb arbeitet TexGrade auf Basis klarer Artikel-, Qualitäts- und Saisonvorgaben.",
    checks: ["Kategorien nach Kundenanforderung", "Transparente Abstimmung vor Produktionsbeginn", "Koordinierte Vorbereitung für den internationalen Versand"],
    companyLink: "TexGrade kennenlernen",
    cycleEyebrow: "Textilien im Kreislauf",
    cycleTitle: "Wiederverwenden, wo es möglich ist. Recyceln, wo es notwendig ist.",
    cycleText: ["Mehr als 7.500.000 Kilogramm Altkleider werden von TexGrade jedes Jahr verarbeitet und sortiert. Wiederverwendbare Kleidung wird für internationale Absatzmärkte vorbereitet.", "Textilien, die nicht mehr für eine Wiederverwendung geeignet sind, geben wir an spezialisierte Recyclingpartner weiter, damit auch diese Materialien sinnvoll weiterverarbeitet werden können."],
    ctaEyebrow: "Für Kunden und Lieferanten",
    ctaTitle: "Sie möchten Ware beziehen oder Altkleider anliefern?",
    ctaButton: "Gespräch starten",
  },
  en: {
    heroEyebrow: "Textile sorting · International trade",
    heroTitle: "Clearly sorted textiles. For markets worldwide.",
    heroText: "TexGrade processes regionally collected used textiles, sorts them into defined article categories and prepares tailored assortments for international markets.",
    servicesButton: "View our services",
    contactLink: "Contact us",
    factsLabel: "TexGrade at a glance",
    facts: [["7.5+ million kg", "Sorting volume per year"], ["30+ years", "Market experience"], ["3 continents", "Europe, Africa and Asia"]],
    serviceEyebrow: "From textile stream to assortment",
    serviceTitle: "A clear structure for every order.",
    serviceIntro: "We turn regionally collected used textiles into transparent, marketable product groups.",
    services: [
      { icon: "sort" as const, title: "Article-specific sorting", text: "Used clothing is separated into clearly defined article categories." },
      { icon: "grade" as const, title: "Customer-specific grading", text: "Quality, season and composition are aligned with agreed requirements." },
      { icon: "pack" as const, title: "Export-ready packaging", text: "Sorted goods are prepared systematically for transport and resale." },
    ],
    processLink: "Explore the complete process",
    marketsEyebrow: "Internationally focused",
    marketsTitle: "From Europe to Africa and Asia.",
    marketsIntro: "Select a market to see how TexGrade aligns its sorting process with local requirements.",
    storageAlt: "Storage area with pre-sorted textiles in transport containers",
    principleEyebrow: "Our principle",
    principleTitle: "Sorting starts with the target market.",
    principleText: "Every market requires a different composition. TexGrade therefore works with clearly defined article, quality and seasonal specifications.",
    checks: ["Categories based on customer requirements", "Transparent coordination before production begins", "Coordinated preparation for international shipping"],
    companyLink: "Discover TexGrade",
    cycleEyebrow: "Keeping textiles in circulation",
    cycleTitle: "Reuse wherever possible. Recycle wherever necessary.",
    cycleText: ["TexGrade processes and sorts more than 7,500,000 kilograms of used textiles every year. Reusable clothing is prepared for international sales markets.", "Textiles that are no longer suitable for reuse are passed on to specialised recycling partners so that these materials can also be put to productive use."],
    ctaEyebrow: "For customers and suppliers",
    ctaTitle: "Would you like to purchase sorted goods or supply used textiles?",
    ctaButton: "Start a conversation",
  },
} as const;

export function HomePage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const routes = siteRoutes[locale];

  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{copy.heroEyebrow}</span>
            <h1>{copy.heroTitle}</h1>
            <p>{copy.heroText}</p>
            <div className="hero-actions">
              <Link className="button primary" href={routes.services}>{copy.servicesButton} <Icon name="arrow" /></Link>
              <Link className="text-link" href={routes.contact}>{copy.contactLink} <Icon name="arrow" /></Link>
            </div>
            <div className="hero-facts" aria-label={copy.factsLabel}>
              {copy.facts.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
          </div>
          <HeroVisual locale={locale} />
        </div>
      </section>

      <section className="section service-intro">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">{copy.serviceEyebrow}</span><h2>{copy.serviceTitle}</h2></div>
            <p>{copy.serviceIntro}</p>
          </div>
          <div className="service-grid">
            {copy.services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-number">0{index + 1}</div>
                <Icon name={service.icon} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
          <Link className="inline-cta" href={routes.services}>{copy.processLink} <Icon name="arrow" /></Link>
        </div>
      </section>

      <section className="section dark-section">
        <div className="shell">
          <div className="section-heading split-heading light-heading">
            <div><span className="eyebrow light">{copy.marketsEyebrow}</span><h2>{copy.marketsTitle}</h2></div>
            <p>{copy.marketsIntro}</p>
          </div>
          <MarketExplorer locale={locale} />
        </div>
      </section>

      <section className="section principle-section">
        <div className="shell principle-grid">
          <div className="principle-visual">
            <Image src="/images/textile-storage.webp" alt={copy.storageAlt} fill sizes="(max-width: 980px) 100vw, 50vw" />
            <div className="bale-label">Sorted by article.<br />Prepared for trade.</div>
          </div>
          <div className="principle-copy">
            <span className="eyebrow">{copy.principleEyebrow}</span>
            <h2>{copy.principleTitle}</h2>
            <p>{copy.principleText}</p>
            <ul className="check-list">
              {copy.checks.map((item) => <li key={item}><Icon name="check" /> {item}</li>)}
            </ul>
            <Link className="button secondary" href={routes.company}>{copy.companyLink}</Link>
          </div>
        </div>
      </section>

      <section className="section cycle-section">
        <div className="shell cycle-grid">
          <div><span className="eyebrow">{copy.cycleEyebrow}</span><h2>{copy.cycleTitle}</h2></div>
          <div className="cycle-copy">{copy.cycleText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section className="cta-section">
        <div className="shell cta-inner">
          <div><span className="eyebrow light">{copy.ctaEyebrow}</span><h2>{copy.ctaTitle}</h2></div>
          <Link className="button light-button" href={routes.contact}>{copy.ctaButton} <Icon name="arrow" /></Link>
        </div>
      </section>
    </>
  );
}
