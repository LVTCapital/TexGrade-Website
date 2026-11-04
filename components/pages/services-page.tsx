import Link from "next/link";
import { Icon } from "@/components/icon";
import type { Locale } from "@/lib/i18n";
import { siteRoutes } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Purchasing & Sales",
    title: "Two ways to work together. One reliable partner.",
    intro: "TexGrade combines the direct intake of regionally collected textiles with the preparation of sorted goods for national and international markets.",
    pathways: [
      { icon: "truck" as const, label: "For collectors and suppliers", title: "Supply unsorted textiles", text: "If you collect used textiles and are looking for a reliable buyer, TexGrade is your direct point of contact. We coordinate the details personally and look forward to hearing from you.", bullets: ["Direct business contact", "Coordination of volumes and delivery"], button: "Offer unsorted textiles" },
      { icon: "pack" as const, label: "For traders and buyers", title: "Purchase sorted goods", text: "If you are looking for sorted textiles that meet your requirements, we prepare assortments by article, quality, season and target market for national and international distribution.", bullets: ["Customer-specific article lists", "Quality and seasonal specifications", "Flexible delivery tailored to your needs"], button: "Enquire about sorted goods" },
    ],
    contactLabel: "Direct point of contact",
    contactText: "Discuss raw materials, finished assortments and the next steps directly with Reinhold Thate.",
    call: "Call +49 171 470 62 60",
    qualityEyebrow: "Quality in sorting",
    qualityTitle: "Careful manual sorting by experienced specialists.",
    qualityIntro: "Our sorters inspect each textile individually by hand. Drawing on their experience, they assess the type of article, condition, quality and season and assign each item to the appropriate product category. This creates reliable assortments that are precisely tailored to our customers’ requirements.",
    qualityPoints: [
      ["Experienced manual sorting", "Each textile is inspected individually, assessed professionally and assigned to the appropriate category according to its characteristics."],
      ["Defined criteria", "Quality, season and article structure are coordinated before production begins."],
      ["Order-specific control", "The finished assortment is based on the specific customer specification."],
    ],
    structureEyebrow: "Individual assortments",
    structureTitle: "Compiled to suit your market.",
    structureIntro: "From numerous articles and quality grades, we compile the right assortment for your needs.",
    structureDimensions: "Article · Quality · Season · Packaging",
    ctaEyebrow: "For customers and suppliers",
    ctaTitle: "Let us discuss categories, volumes, target market or delivery.",
    ctaButton: "Contact Reinhold Thate",
  },
  de: {
    eyebrow: "Ankauf & Verkauf",
    title: "Zwei Wege zur Zusammenarbeit. Ein verlässlicher Partner.",
    intro: "TexGrade verbindet die direkte Annahme regional erfasster Alttextilien mit der Bereitstellung sortierter Ware für nationale und internationale Märkte.",
    pathways: [
      { icon: "truck" as const, label: "Für Sammler und Lieferanten", title: "Rohware anbieten", text: "Wenn Sie Alttextilien sammeln und einen zuverlässigen Abnehmer suchen, ist TexGrade Ihr direkter Ansprechpartner. Wir stimmen die Einzelheiten persönlich ab und freuen uns auf den ersten Kontakt.", bullets: ["Direkter geschäftlicher Ansprechpartner", "Abstimmung von Mengen und Anlieferung"], button: "Rohware anbieten" },
      { icon: "pack" as const, label: "Für Händler und Abnehmer", title: "Sortierte Ware beziehen", text: "Wenn Sie sortierte Textilien nach Ihren Anforderungen suchen, stellen wir Sortimente nach Artikel, Qualität, Saison und Zielmarkt für den nationalen und internationalen Vertrieb zusammen.", bullets: ["Kundenspezifische Artikellisten", "Qualitäts- und Saisonvorgaben", "Flexible Lieferung ganz nach Ihrem Bedarf"], button: "Sortierte Ware anfragen" },
    ],
    contactLabel: "Direkter Ansprechpartner",
    contactText: "Besprechen Sie Rohware, fertige Sortimente und die nächsten Schritte direkt mit Reinhold Thate.",
    call: "+49 171 470 62 60 anrufen",
    qualityEyebrow: "Qualität in der Sortierung",
    qualityTitle: "Sorgfältige Handsortierung durch erfahrene Fachkräfte.",
    qualityIntro: "Unsere Sortiererinnen und Sortierer prüfen jedes Textil einzeln von Hand. Mit ihrer Erfahrung beurteilen sie Artikelart, Zustand, Qualität und Saison und ordnen jedes Stück der passenden Produktkategorie zu. So entstehen verlässliche Sortierungen, die genau auf die Anforderungen unserer Kunden abgestimmt sind.",
    qualityPoints: [
      ["Erfahrene Handsortierung", "Jedes Textil wird einzeln geprüft, fachkundig beurteilt und anhand seiner Eigenschaften der passenden Kategorie zugeordnet."],
      ["Definierte Kriterien", "Qualität, Saison und Artikelstruktur werden vor Produktionsbeginn gemeinsam abgestimmt."],
      ["Auftragsbezogene Kontrolle", "Die fertige Zusammenstellung richtet sich nach der konkreten Kundenspezifikation."],
    ],
    structureEyebrow: "Individuelle Sortimente",
    structureTitle: "Passend für Ihren Markt zusammengestellt.",
    structureIntro: "Aus zahlreichen Artikeln und Qualitätsstufen stellen wir die passende Sortierung für Ihren Bedarf zusammen.",
    structureDimensions: "Artikel · Qualität · Saison · Verpackung",
    ctaEyebrow: "Für Kunden und Lieferanten",
    ctaTitle: "Lassen Sie uns Kategorien, Mengen, Zielmarkt oder Anlieferung besprechen.",
    ctaButton: "Reinhold Thate kontaktieren",
  },
  fr: {
    eyebrow: "Achat & Vente",
    title: "Deux façons de collaborer. Un partenaire fiable.",
    intro: "TexGrade associe l’achat direct de textiles usagés collectés dans la région à la préparation de produits triés pour les marchés nationaux et internationaux.",
    pathways: [
      { icon: "truck" as const, label: "Pour les collecteurs et fournisseurs", title: "Proposer des textiles bruts", text: "Si vous collectez des textiles usagés et recherchez un acheteur fiable, TexGrade est votre interlocuteur direct. Nous convenons personnellement des détails et nous réjouissons de votre premier contact.", bullets: ["Interlocuteur commercial direct", "Accord sur les volumes et la livraison"], button: "Proposer des textiles" },
      { icon: "pack" as const, label: "Pour les négociants et acheteurs", title: "Acheter des produits triés", text: "Si vous recherchez des textiles triés selon vos exigences, nous préparons des assortiments par article, qualité, saison et marché cible pour la distribution nationale et internationale.", bullets: ["Listes d’articles spécifiques au client", "Critères de qualité et de saison", "Livraison flexible selon vos besoins"], button: "Demander des produits triés" },
    ],
    contactLabel: "Interlocuteur direct",
    contactText: "Discutez directement avec Reinhold Thate des matières brutes, des assortiments finis et des prochaines étapes.",
    call: "Appeler le +49 171 470 62 60",
    qualityEyebrow: "Qualité du tri",
    qualityTitle: "Un tri manuel minutieux réalisé par des spécialistes expérimentés.",
    qualityIntro: "Nos trieuses et trieurs contrôlent chaque textile individuellement à la main. Grâce à leur expérience, ils évaluent le type d’article, l’état, la qualité et la saison, puis attribuent chaque pièce à la catégorie de produit correspondante. Nous obtenons ainsi des assortiments fiables, précisément adaptés aux exigences de nos clients.",
    qualityPoints: [
      ["Tri manuel expérimenté", "Chaque textile est contrôlé individuellement, évalué avec expertise et attribué à la catégorie appropriée selon ses caractéristiques."],
      ["Critères définis", "La qualité, la saison et la structure des articles sont convenues ensemble avant le début de la production."],
      ["Contrôle selon la commande", "La composition finale est basée sur les spécifications concrètes du client."],
    ],
    structureEyebrow: "Assortiments individuels",
    structureTitle: "Composés pour votre marché.",
    structureIntro: "À partir de nombreux articles et niveaux de qualité, nous composons le tri adapté à vos besoins.",
    structureDimensions: "Article · Qualité · Saison · Conditionnement",
    ctaEyebrow: "Pour les clients et fournisseurs",
    ctaTitle: "Parlons des catégories, des volumes, du marché cible ou de la livraison.",
    ctaButton: "Contacter Reinhold Thate",
  },
} as const;

export function ServicesPage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const contactRoute = siteRoutes[locale].contact;

  return (
    <>
      <section className="page-hero">
        <div className="shell narrow-left"><span className="eyebrow">{copy.eyebrow}</span><h1>{copy.title}</h1><p>{copy.intro}</p></div>
      </section>

      <section className="section service-path-section">
        <div className="shell">
          <div className="service-path-grid">
            {copy.pathways.map((pathway) => (
              <article className="service-path-card" key={pathway.title}>
                <div className="service-path-top"><Icon name={pathway.icon} /><span>{pathway.label}</span></div>
                <h2>{pathway.title}</h2>
                <p>{pathway.text}</p>
                <ul>{pathway.bullets.map((bullet) => <li key={bullet}><Icon name="check" />{bullet}</li>)}</ul>
                <Link className="button primary" href={contactRoute}>{pathway.button}<Icon name="arrow" /></Link>
              </article>
            ))}
          </div>
          <div className="service-contact-band">
            <div><span>{copy.contactLabel}</span><strong>Reinhold Thate</strong><p>{copy.contactText}</p></div>
            <a href="tel:+491714706260">{copy.call}</a>
          </div>
        </div>
      </section>

      <section className="quality-band">
        <div className="shell quality-grid">
          <div className="quality-intro"><span className="eyebrow light">{copy.qualityEyebrow}</span><h2>{copy.qualityTitle}</h2><p>{copy.qualityIntro}</p></div>
          <div className="quality-points">
            {copy.qualityPoints.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="shell">
          <div className="section-heading"><span className="eyebrow">{copy.structureEyebrow}</span><h2>{copy.structureTitle}</h2><p>{copy.structureIntro}</p></div>
          <p className="assortment-dimensions">{copy.structureDimensions}</p>
        </div>
      </section>

      <section className="section compact-cta">
        <div className="shell compact-cta-inner">
          <div><span className="eyebrow">{copy.ctaEyebrow}</span><h2>{copy.ctaTitle}</h2></div>
          <Link className="button primary" href={contactRoute}>{copy.ctaButton}</Link>
        </div>
      </section>
    </>
  );
}
