import Link from "next/link";
import { Icon } from "@/components/icon";
import type { Locale } from "@/lib/i18n";
import { siteRoutes } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Services",
    title: "Two requirements. One reliable partner.",
    intro: "TexGrade combines the direct intake of regionally collected textiles with the preparation of sorted goods for international markets.",
    pathways: [
      { icon: "truck" as const, label: "For collectors and suppliers", title: "Supply unsorted textiles", text: "If you collect used textiles and need a reliable buyer, TexGrade is your direct point of contact. We coordinate the details personally and can connect you with our collection networks where required.", bullets: ["Direct business contact", "Coordination of volumes and delivery", "Connection to collection networks where required"], button: "Offer unsorted textiles" },
      { icon: "pack" as const, label: "For traders and buyers", title: "Purchase sorted goods", text: "If you need sorted textiles tailored to your requirements, we prepare assortments by article, quality, season and target market for international distribution.", bullets: ["Customer-specific article lists", "Quality and seasonal specifications", "Preparation for international markets"], button: "Enquire about sorted goods" },
    ],
    contactLabel: "Direct point of contact",
    contactText: "Discuss raw materials, finished assortments and the next steps directly with Reinhold Thate.",
    call: "Call +49 171 470 62 60",
    processEyebrow: "Our process",
    processTitle: "From intake to shipment-ready categories.",
    processIntro: "More than 7.5 million kilograms of regionally collected used textiles pass through this process every year.",
    steps: [
      { icon: "truck" as const, title: "Intake & preparation", text: "Regionally collected used textiles are received and prepared for the sorting process." },
      { icon: "sort" as const, title: "Manual sorting", text: "Experienced teams assess each item by article, quality, season and agreed specification." },
      { icon: "grade" as const, title: "Order-specific grading", text: "Reusable goods are combined according to the requirements of the customer and target market." },
      { icon: "pack" as const, title: "Packing & dispatch preparation", text: "Finished categories are organised and packed for efficient onward transport." },
      { icon: "recycle" as const, title: "Recycling stream", text: "Textiles that are no longer suitable for reuse are directed to material recycling." },
    ],
    qualityEyebrow: "Quality in sorting",
    qualityTitle: "Article and quality grade are assessed separately.",
    qualityPoints: [
      ["Manual visual inspection", "Textiles are assessed individually and assigned to the agreed category."],
      ["Defined criteria", "Quality, season and article structure are coordinated before production begins."],
      ["Order-specific control", "The finished assortment is aligned with the customer’s concrete requirements."],
    ],
    structureEyebrow: "Flexible product structure",
    structureTitle: "Assortments aligned with market and demand.",
    structureIntro: "The exact article list is agreed with each customer. Typical sorting dimensions include:",
    categories: [
      { title: "By article", items: ["Tops", "Trousers & denim", "Shorts", "Additional clothing categories"] },
      { title: "By season", items: ["Summer wear", "Transitional assortments", "Winter wear", "Market-specific combinations"] },
      { title: "By specification", items: ["Quality grades", "Customer-specific article lists", "Order-specific mixes", "Packaging requirements"] },
    ],
    ctaEyebrow: "For customers and suppliers",
    ctaTitle: "Let us discuss categories, volumes, target market or delivery.",
    ctaButton: "Contact Reinhold Thate",
  },
  de: {
    eyebrow: "Leistungen",
    title: "Zwei Anforderungen. Ein verlässlicher Partner.",
    intro: "TexGrade verbindet die direkte Annahme regional erfasster Alttextilien mit der Bereitstellung sortierter Ware für internationale Märkte.",
    pathways: [
      { icon: "truck" as const, label: "Für Sammler und Lieferanten", title: "Rohware anbieten", text: "Wenn Sie Alttextilien sammeln und einen zuverlässigen Abnehmer suchen, ist TexGrade Ihr direkter Ansprechpartner. Wir stimmen die Einzelheiten persönlich ab und vermitteln bei Bedarf Kontakte innerhalb unserer Sammlernetzwerke.", bullets: ["Direkter geschäftlicher Ansprechpartner", "Abstimmung von Mengen und Anlieferung", "Vermittlung in Sammlernetzwerke bei Bedarf"], button: "Rohware anbieten" },
      { icon: "pack" as const, label: "Für Händler und Abnehmer", title: "Sortierte Ware beziehen", text: "Wenn Sie sortierte Textilien nach Ihren Anforderungen suchen, stellen wir Sortimente nach Artikel, Qualität, Saison und Zielmarkt für den internationalen Vertrieb zusammen.", bullets: ["Kundenspezifische Artikellisten", "Qualitäts- und Saisonvorgaben", "Vorbereitung für internationale Märkte"], button: "Sortierte Ware anfragen" },
    ],
    contactLabel: "Direkter Ansprechpartner",
    contactText: "Besprechen Sie Rohware, fertige Sortimente und die nächsten Schritte direkt mit Reinhold Thate.",
    call: "+49 171 470 62 60 anrufen",
    processEyebrow: "Unser Prozess",
    processTitle: "Vom Eingang bis zur versandfertigen Kategorie.",
    processIntro: "Mehr als 7,5 Millionen Kilogramm regional erfasster Alttextilien durchlaufen diesen Prozess jedes Jahr.",
    steps: [
      { icon: "truck" as const, title: "Annahme & Vorbereitung", text: "Regional erfasste Alttextilien werden aufgenommen und für den Sortierprozess vorbereitet." },
      { icon: "sort" as const, title: "Manuelle Sortierung", text: "Erfahrene Teams beurteilen jedes Stück nach Artikel, Qualität, Saison und vereinbarter Spezifikation." },
      { icon: "grade" as const, title: "Auftragsbezogenes Grading", text: "Wiederverwendbare Ware wird passend zu den Anforderungen von Kunde und Zielmarkt zusammengestellt." },
      { icon: "pack" as const, title: "Verpackung & Versandvorbereitung", text: "Die fertigen Kategorien werden strukturiert und transportgerecht verpackt." },
      { icon: "recycle" as const, title: "Recyclingstrom", text: "Textilien, die nicht mehr für eine Wiederverwendung geeignet sind, werden der stofflichen Verwertung zugeführt." },
    ],
    qualityEyebrow: "Qualität in der Sortierung",
    qualityTitle: "Artikel und Qualitätsstufe werden getrennt betrachtet.",
    qualityPoints: [
      ["Manuelle Sichtprüfung", "Textilien werden einzeln beurteilt und der vereinbarten Kategorie zugeordnet."],
      ["Definierte Kriterien", "Qualität, Saison und Artikelstruktur werden vor Produktionsbeginn abgestimmt."],
      ["Auftragsbezogene Kontrolle", "Die fertige Zusammenstellung richtet sich nach der konkreten Kundenspezifikation."],
    ],
    structureEyebrow: "Flexible Produktstruktur",
    structureTitle: "Sortimente passend zu Markt und Bedarf.",
    structureIntro: "Die genaue Artikelliste wird mit dem Kunden abgestimmt. Typische Sortierdimensionen sind:",
    categories: [
      { title: "Nach Artikel", items: ["Oberteile", "Hosen & Denim", "Shorts", "Weitere Bekleidungskategorien"] },
      { title: "Nach Saison", items: ["Sommerware", "Übergangssortimente", "Winterware", "Marktbezogene Kombinationen"] },
      { title: "Nach Spezifikation", items: ["Qualitätsstufen", "Kundeneigene Artikellisten", "Auftragsbezogene Mischung", "Verpackungsanforderungen"] },
    ],
    ctaEyebrow: "Für Kunden und Lieferanten",
    ctaTitle: "Lassen Sie uns Kategorien, Mengen, Zielmarkt oder Anlieferung besprechen.",
    ctaButton: "Reinhold Thate kontaktieren",
  },
  fr: {
    eyebrow: "Services",
    title: "Deux besoins. Un partenaire fiable.",
    intro: "TexGrade associe l’achat direct de textiles usagés collectés dans la région à la préparation de produits triés pour les marchés internationaux.",
    pathways: [
      { icon: "truck" as const, label: "Pour les collecteurs et fournisseurs", title: "Proposer des textiles bruts", text: "Si vous collectez des textiles usagés et recherchez un acheteur fiable, TexGrade est votre interlocuteur direct. Nous convenons personnellement des détails et pouvons, si nécessaire, vous mettre en relation avec nos réseaux de collecte.", bullets: ["Interlocuteur commercial direct", "Accord sur les volumes et la livraison", "Mise en relation avec des réseaux de collecte si nécessaire"], button: "Proposer des textiles" },
      { icon: "pack" as const, label: "Pour les négociants et acheteurs", title: "Acheter des produits triés", text: "Si vous recherchez des textiles triés selon vos exigences, nous préparons des assortiments par article, qualité, saison et marché cible pour la distribution internationale.", bullets: ["Listes d’articles spécifiques au client", "Critères de qualité et de saison", "Préparation pour les marchés internationaux"], button: "Demander des produits triés" },
    ],
    contactLabel: "Interlocuteur direct",
    contactText: "Discutez directement avec Reinhold Thate des matières brutes, des assortiments finis et des prochaines étapes.",
    call: "Appeler le +49 171 470 62 60",
    processEyebrow: "Notre processus",
    processTitle: "De la réception aux catégories prêtes à expédier.",
    processIntro: "Plus de 7,5 millions de kilogrammes de textiles usagés collectés dans la région suivent ce processus chaque année.",
    steps: [
      { icon: "truck" as const, title: "Réception & préparation", text: "Les textiles usagés collectés dans la région sont réceptionnés et préparés pour le processus de tri." },
      { icon: "sort" as const, title: "Tri manuel", text: "Des équipes expérimentées évaluent chaque pièce selon l’article, la qualité, la saison et les spécifications convenues." },
      { icon: "grade" as const, title: "Classement selon la commande", text: "Les produits réutilisables sont regroupés selon les besoins du client et du marché cible." },
      { icon: "pack" as const, title: "Conditionnement & préparation", text: "Les catégories terminées sont organisées et emballées pour la suite du transport." },
      { icon: "recycle" as const, title: "Flux de recyclage", text: "Les textiles qui ne peuvent plus être réutilisés sont orientés vers la valorisation matière." },
    ],
    qualityEyebrow: "Qualité du tri",
    qualityTitle: "L’article et le niveau de qualité sont évalués séparément.",
    qualityPoints: [
      ["Contrôle visuel manuel", "Les textiles sont évalués individuellement et affectés à la catégorie convenue."],
      ["Critères définis", "La qualité, la saison et la structure des articles sont convenues avant le début de la production."],
      ["Contrôle selon la commande", "L’assortiment final est adapté aux exigences concrètes du client."],
    ],
    structureEyebrow: "Structure de produit flexible",
    structureTitle: "Des assortiments adaptés au marché et à la demande.",
    structureIntro: "La liste exacte des articles est convenue avec chaque client. Les principaux critères de tri sont :",
    categories: [
      { title: "Par article", items: ["Hauts", "Pantalons & denim", "Shorts", "Autres catégories de vêtements"] },
      { title: "Par saison", items: ["Vêtements d’été", "Assortiments de mi-saison", "Vêtements d’hiver", "Combinaisons selon le marché"] },
      { title: "Par spécification", items: ["Niveaux de qualité", "Listes d’articles du client", "Mélanges selon la commande", "Exigences de conditionnement"] },
    ],
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

      <section className="section soft-section">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">{copy.processEyebrow}</span><h2>{copy.processTitle}</h2></div>
            <p>{copy.processIntro}</p>
          </div>
          <div className="process-list">
            {copy.steps.map((step, index) => (
              <article className="process-step" key={step.title}>
                <div className="process-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="process-icon"><Icon name={step.icon} /></div>
                <div><h2>{step.title}</h2><p>{step.text}</p></div>
              </article>
            ))}
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
          <Link className="button primary" href={contactRoute}>{copy.ctaButton}</Link>
        </div>
      </section>
    </>
  );
}
