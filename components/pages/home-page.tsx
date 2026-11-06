import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icon";
import type { Locale } from "@/lib/i18n";
import { siteRoutes } from "@/lib/i18n";

const content = {
  en: {
    heroEyebrow: "Textile sorting · International trade",
    heroTitle: "Second hand, sorted like first class.",
    heroText: "TexGrade sorts regionally collected used textiles in Melle and supplies customers in Germany, Europe and worldwide.",
    servicesButton: "View service",
    contactLink: "Contact us",
    factsLabel: "TexGrade at a glance",
    facts: [["7.5+ million kg", "Textiles sorted every year"], ["30+ years", "Experience in the market"], ["Worldwide", "Customers in Germany, Europe and beyond"]],
    audienceEyebrow: "For suppliers and buyers",
    audienceTitle: "Two ways to work together. One reliable partner.",
    audienceIntro: "Whether you want to supply collected textiles or purchase finished assortments, we discuss your requirements directly and personally.",
    audiences: [
      { icon: "truck" as const, label: "For collectors and suppliers", title: "Offer unsorted textiles", text: "Do you collect used textiles and need a reliable buyer? TexGrade is your direct point of contact.", button: "Offer textiles" },
      { icon: "pack" as const, label: "For traders and buyers", title: "Source sorted goods", text: "Do you need sorted textiles aligned with quality, season and target market? We prepare suitable assortments for national and international customers.", button: "Enquire about sorted goods" },
    ],
    missionEyebrow: "Our mission",
    missionTitle: "Preserving the value of textiles.",
    missionText: "Our goal is to give well-preserved textiles a second life. Through careful manual sorting, we separate reusable clothing according to quality and intended use and return it to the goods cycle in a targeted manner. Textiles that are no longer suitable for reuse are sent for material recycling. In this way, we create reliable qualities for our partners and make a responsible contribution to conserving valuable resources.",
    missionStatement: "Reuse responsibly. Recycle with foresight.",
    flowEyebrow: "The textile flow",
    flowTitle: "From collection to a new use.",
    flowIntro: "A transparent process turns mixed textile streams into clearly defined goods and directs each material to the most suitable next stage.",
    flowLabel: "TexGrade textile flow",
    flowSteps: [
      { icon: "collect" as const, title: "Donation & collection", text: "Used clothing enters established collection systems." },
      { icon: "truck" as const, title: "Regional collection", text: "Collectors gather and consolidate the textiles." },
      { icon: "sort" as const, title: "Manual sorting", text: "Experienced TexGrade teams assess every item by article, quality and season." },
      { icon: "grade" as const, title: "Customer specification", text: "Reusable goods are grouped for the relevant market and order." },
      { icon: "pack" as const, title: "Packing", text: "Finished assortments are prepared for onward transport." },
    ],
    outcomesLabel: "The next stage",
    outcomes: [
      { icon: "reuse" as const, title: "Back into circulation", text: "Reusable clothing is prepared for national and international textile markets." },
      { icon: "recycle" as const, title: "Material recycling", text: "Non-reusable textiles are passed on for further recycling and material recovery." },
    ],
    contactEyebrow: "Direct contact",
    contactTitle: "Would you like to supply textiles or purchase sorted goods?",
    contactText: "Speak directly with Reinhold Thate about volumes, specifications and the next steps.",
    callButton: "Call now",
    contactButton: "Contact details",
    heroImageAlt: "Sorted and packed textiles in the TexGrade warehouse in Melle",
    galleryEyebrow: "Inside TexGrade",
    galleryTitle: "Where textiles get their second life.",
    galleryAlts: ["Production hall in the TexGrade warehouse", "Stacked textile bales ready for shipment", "Strapped bale of sorted textiles"],
  },
  de: {
    heroEyebrow: "Textilsortierung · Internationaler Handel",
    heroTitle: "Second Hand, sortiert wie First Class.",
    heroText: "TexGrade sortiert regional erfasste Alttextilien in Melle und beliefert Kunden in Deutschland, Europa und weltweit.",
    servicesButton: "Service ansehen",
    contactLink: "Kontakt aufnehmen",
    factsLabel: "TexGrade auf einen Blick",
    facts: [["7,5+ Mio. kg", "Sortierte Textilien pro Jahr"], ["30+ Jahre", "Erfahrung im Markt"], ["Weltweit", "Kunden in Deutschland, Europa und darüber hinaus"]],
    audienceEyebrow: "Für Lieferanten und Abnehmer",
    audienceTitle: "Zwei Wege zur Zusammenarbeit. Ein verlässlicher Partner.",
    audienceIntro: "Ob Sie erfasste Alttextilien anbieten oder fertige Sortimente beziehen möchten: Wir stimmen die Anforderungen direkt und persönlich mit Ihnen ab.",
    audiences: [
      { icon: "truck" as const, label: "Für Sammler und Lieferanten", title: "Rohware anbieten", text: "Sie sammeln Alttextilien und suchen einen zuverlässigen Abnehmer? TexGrade ist Ihr direkter Ansprechpartner.", button: "Rohware anbieten" },
      { icon: "pack" as const, label: "Für Händler und Abnehmer", title: "Sortierte Ware beziehen", text: "Sie suchen sortierte Textilien nach Qualität, Saison und Absatzmarkt? Wir stellen passende Sortimente für unsere nationalen und internationalen Kunden bereit.", button: "Sortierte Ware anfragen" },
    ],
    missionEyebrow: "Unsere Mission",
    missionTitle: "Den Wert von Textilien bewahren.",
    missionText: "Unser Ziel ist es, gut erhaltenen Textilien ein zweites Leben zu ermöglichen. Durch sorgfältige Handsortierung trennen wir wiederverwendbare Kleidung nach Qualität und Verwendungszweck und führen sie gezielt zurück in den Warenkreislauf. Textilien, die sich nicht mehr zur Wiederverwendung eignen, geben wir in die stoffliche Verwertung. So schaffen wir verlässliche Qualitäten für unsere Partner und leisten einen verantwortungsvollen Beitrag zur Schonung wertvoller Ressourcen.",
    missionStatement: "Wiederverwenden mit Verantwortung. Recyceln mit Weitblick.",
    flowEyebrow: "Der Textilstrom",
    flowTitle: "Von der Sammlung zur neuen Nutzung.",
    flowIntro: "Ein transparenter Prozess macht aus gemischten Textilströmen klar definierte Waren und führt jedes Material dem passenden nächsten Weg zu.",
    flowLabel: "TexGrade Textilstrom",
    flowSteps: [
      { icon: "collect" as const, title: "Abgabe & Sammlung", text: "Nicht mehr benötigte Kleidung gelangt in etablierte Sammelsysteme." },
      { icon: "truck" as const, title: "Regionale Erfassung", text: "Sammler erfassen und bündeln die Textilien." },
      { icon: "sort" as const, title: "Manuelle Sortierung", text: "Erfahrene TexGrade-Teams prüfen jedes Stück nach Artikel, Qualität und Saison." },
      { icon: "grade" as const, title: "Kundenspezifikation", text: "Wiederverwendbare Ware wird passend zu Markt und Auftrag zusammengestellt." },
      { icon: "pack" as const, title: "Verpackung", text: "Die fertigen Sortimente werden für den Weitertransport vorbereitet." },
    ],
    outcomesLabel: "Der nächste Weg",
    outcomes: [
      { icon: "reuse" as const, title: "Zurück in den Kreislauf", text: "Wiederverwendbare Kleidung wird für nationale und internationale Textilmärkte vorbereitet." },
      { icon: "recycle" as const, title: "Stoffliche Verwertung", text: "Nicht wiederverwendbare Textilien werden zum Recycling und zur Rohstoffgewinnung weitergegeben." },
    ],
    contactEyebrow: "Direkter Kontakt",
    contactTitle: "Sie möchten Rohware anbieten oder sortierte Ware beziehen?",
    contactText: "Sprechen Sie mit Reinhold Thate direkt über Mengen, Spezifikationen und die nächsten Schritte.",
    callButton: "Jetzt anrufen",
    contactButton: "Kontaktdaten",
    heroImageAlt: "Sortierte und verpackte Textilien im TexGrade-Lager in Melle",
    galleryEyebrow: "Einblick in TexGrade",
    galleryTitle: "Wo Textilien ihr zweites Leben beginnen.",
    galleryAlts: ["Produktionshalle im TexGrade-Lager", "Gestapelte Textilballen für den Versand", "Verschnürter Ballen sortierter Textilien"],
  },
  fr: {
    heroEyebrow: "Tri textile · Commerce international",
    heroTitle: "Seconde main, triée comme en première classe.",
    heroText: "TexGrade trie à Melle des textiles usagés collectés dans la région et approvisionne des clients en Allemagne, en Europe et dans le monde entier.",
    servicesButton: "Voir le service",
    contactLink: "Nous contacter",
    factsLabel: "TexGrade en bref",
    facts: [["7,5+ millions de kg", "Textiles triés chaque année"], ["30+ ans", "D’expérience sur le marché"], ["International", "Clients en Allemagne, en Europe et au-delà"]],
    audienceEyebrow: "Pour les fournisseurs et les acheteurs",
    audienceTitle: "Deux façons de collaborer. Un partenaire fiable.",
    audienceIntro: "Que vous souhaitiez proposer des textiles collectés ou acheter des assortiments triés, nous étudions directement vos besoins avec vous.",
    audiences: [
      { icon: "truck" as const, label: "Pour les collecteurs et fournisseurs", title: "Proposer des textiles bruts", text: "Vous collectez des textiles usagés et recherchez un acheteur fiable ? TexGrade est votre interlocuteur direct.", button: "Proposer des textiles" },
      { icon: "pack" as const, label: "Pour les négociants et acheteurs", title: "Acheter des produits triés", text: "Vous recherchez des textiles triés selon la qualité, la saison et le marché cible ? Nous préparons des assortiments adaptés à nos clients nationaux et internationaux.", button: "Demander des produits triés" },
    ],
    missionEyebrow: "Notre mission",
    missionTitle: "Préserver la valeur des textiles.",
    missionText: "Notre objectif est de donner une seconde vie aux textiles bien conservés. Grâce à un tri manuel minutieux, nous séparons les vêtements réutilisables selon leur qualité et leur usage et les réintroduisons de manière ciblée dans le circuit commercial. Les textiles qui ne sont plus adaptés à la réutilisation sont orientés vers la valorisation matière. Nous créons ainsi des qualités fiables pour nos partenaires tout en contribuant de manière responsable à la préservation de ressources précieuses.",
    missionStatement: "Réutiliser de manière responsable. Recycler avec discernement.",
    flowEyebrow: "Le flux textile",
    flowTitle: "De la collecte à une nouvelle utilisation.",
    flowIntro: "Un processus transparent transforme des flux textiles mixtes en marchandises clairement définies et oriente chaque matière vers la solution la plus adaptée.",
    flowLabel: "Flux textile TexGrade",
    flowSteps: [
      { icon: "collect" as const, title: "Dépôt & collecte", text: "Les vêtements qui ne sont plus utilisés rejoignent les systèmes de collecte établis." },
      { icon: "truck" as const, title: "Collecte régionale", text: "Les collecteurs regroupent et consolident les textiles." },
      { icon: "sort" as const, title: "Tri manuel", text: "Les équipes expérimentées de TexGrade évaluent chaque article selon le type, la qualité et la saison." },
      { icon: "grade" as const, title: "Spécification client", text: "Les produits réutilisables sont regroupés selon le marché et la commande." },
      { icon: "pack" as const, title: "Conditionnement", text: "Les assortiments terminés sont préparés pour la suite du transport." },
    ],
    outcomesLabel: "L’étape suivante",
    outcomes: [
      { icon: "reuse" as const, title: "Retour dans le circuit", text: "Les vêtements réutilisables sont préparés pour les marchés textiles nationaux et internationaux." },
      { icon: "recycle" as const, title: "Valorisation matière", text: "Les textiles non réutilisables sont transmis pour être recyclés et valorisés comme matières premières." },
    ],
    contactEyebrow: "Contact direct",
    contactTitle: "Vous souhaitez proposer des textiles ou acheter des produits triés ?",
    contactText: "Échangez directement avec Reinhold Thate au sujet des volumes, des spécifications et des prochaines étapes.",
    callButton: "Appeler maintenant",
    contactButton: "Coordonnées",
    heroImageAlt: "Textiles triés et emballés dans l’entrepôt TexGrade à Melle",
    galleryEyebrow: "Au cœur de TexGrade",
    galleryTitle: "Là où les textiles commencent leur seconde vie.",
    galleryAlts: ["Hall de production de l’entrepôt TexGrade", "Balles de textiles empilées prêtes à l’expédition", "Balle de textiles triés cerclée"],
  },
} as const;

export function HomePage({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const routes = siteRoutes[locale];

  return (
    <>
      <section className="home-hero">
        <Image className="home-hero-image" src="/images/warehouse/company-02.webp" alt={copy.heroImageAlt} fill priority sizes="100vw" />
        <div className="shell home-hero-inner">
          <div className="home-hero-copy">
            <span className="eyebrow light">{copy.heroEyebrow}</span>
            <h1>{copy.heroTitle}</h1>
            <p>{copy.heroText}</p>
            <div className="hero-actions">
              <Link className="button primary" href={routes.services}>{copy.servicesButton} <Icon name="arrow" /></Link>
              <Link className="button glass" href={routes.contact}>{copy.contactLink} <Icon name="arrow" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label={copy.factsLabel}>
        <div className="shell">
          <dl className="stats-grid">
            {copy.facts.map(([value, label]) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="section audience-section">
        <div className="shell">
          <div className="section-heading split-heading reveal">
            <div><span className="eyebrow">{copy.audienceEyebrow}</span><h2>{copy.audienceTitle}</h2></div>
            <p>{copy.audienceIntro}</p>
          </div>
          <div className="audience-paths reveal">
            {copy.audiences.map((audience) => (
              <article className="audience-path" key={audience.title}>
                <div className="audience-path-icon"><Icon name={audience.icon} /></div>
                <span>{audience.label}</span>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
                <Link className="inline-cta" href={routes.contact}>{audience.button} <Icon name="arrow" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="shell">
          <div className="section-heading reveal"><span className="eyebrow">{copy.galleryEyebrow}</span><h2>{copy.galleryTitle}</h2></div>
          <div className="mosaic reveal">
            {["company-03", "home-hero", "company-05"].map((name, index) => (
              <figure key={name}>
                <Image src={`/images/warehouse/${name}.webp`} alt={copy.galleryAlts[index]} fill sizes={index === 0 ? "(max-width: 760px) 100vw, 60vw" : "(max-width: 760px) 50vw, 30vw"} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="shell mission-grid reveal">
          <div><span className="eyebrow light">{copy.missionEyebrow}</span><h2>{copy.missionTitle}</h2></div>
          <div className="mission-copy"><p>{copy.missionText}</p><strong>{copy.missionStatement}</strong></div>
        </div>
      </section>

      <section className="section flow-section">
        <div className="shell">
          <div className="section-heading split-heading reveal">
            <div><span className="eyebrow">{copy.flowEyebrow}</span><h2>{copy.flowTitle}</h2></div>
            <p>{copy.flowIntro}</p>
          </div>
          <div className="textile-flow reveal" aria-label={copy.flowLabel}>
            {copy.flowSteps.map((step, index) => (
              <article className="flow-step" key={step.title}>
                <span className="flow-number">0{index + 1}</span>
                <div className="flow-icon"><Icon name={step.icon} /></div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="flow-outcomes reveal">
            <span className="outcomes-label">{copy.outcomesLabel}</span>
            <div className="outcomes-grid">
              {copy.outcomes.map((outcome) => (
                <article key={outcome.title}>
                  <Icon name={outcome.icon} />
                  <div><h3>{outcome.title}</h3><p>{outcome.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section contact-cta">
        <div className="shell contact-cta-grid">
          <div><span className="eyebrow light">{copy.contactEyebrow}</span><h2>{copy.contactTitle}</h2><p>{copy.contactText}</p></div>
          <div className="contact-person-cta">
            <span>Reinhold Thate</span>
            <a href="tel:+491714706260">+49 171 470 62 60</a>
            <div>
              <a className="button light-button" href="tel:+491714706260">{copy.callButton}</a>
              <Link className="button outline-light" href={routes.contact}>{copy.contactButton}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
