import type { Locale } from "@/lib/i18n";
import Image from "next/image";

const content = {
  de: {
    eyebrow: "Kontakt",
    title: "Ihre Anlaufstelle für Einkauf und Lieferung.",
    intro: "Ob Sie sortierte Secondhand-Textilien beziehen oder regional erfasste Altkleider anliefern möchten: Sprechen Sie uns direkt an.",
    personEyebrow: "Ihr Ansprechpartner",
    role: "Geschäftsführer · TexGrade GmbH & Co. KG",
    email: "E-Mail",
    location: "Standort",
    country: "Deutschland",
    call: "Reinhold Thate anrufen",
    customer: "Für Kunden",
    customerTitle: "Sortierte Ware beziehen",
    customerText: "Wir sprechen mit Ihnen über Zielmarkt, gewünschte Artikelkategorien, Qualität, Saison und geplante Mengen.",
    supplier: "Für Lieferanten",
    supplierTitle: "Altkleider anliefern",
    supplierText: "Lieferanten regional erfasster Altkleider können Mengen, Qualität, Abholung oder Anlieferung direkt mit uns abstimmen.",
    imageAlt: "Warenkorb im TexGrade-Lager",
  },
  en: {
    eyebrow: "Contact",
    title: "Your point of contact for purchasing and supply.",
    intro: "Whether you want to purchase sorted second-hand textiles or supply regionally collected used textiles, contact us directly.",
    personEyebrow: "Your contact",
    role: "Managing Director · TexGrade GmbH & Co. KG",
    email: "Email",
    location: "Location",
    country: "Germany",
    call: "Call Reinhold Thate",
    customer: "For customers",
    customerTitle: "Purchase sorted goods",
    customerText: "We discuss your target market, required article categories, quality, season and planned volumes.",
    supplier: "For suppliers",
    supplierTitle: "Supply used textiles",
    supplierText: "Suppliers of regionally collected used textiles can coordinate volumes, quality, collection or delivery directly with us.",
    imageAlt: "Goods trolley in the TexGrade warehouse",
  },
  fr: {
    eyebrow: "Contact",
    title: "Votre interlocuteur pour l’achat et la fourniture.",
    intro: "Que vous souhaitiez acheter des textiles de seconde main triés ou proposer des textiles usagés collectés dans la région, contactez-nous directement.",
    personEyebrow: "Votre interlocuteur",
    role: "Gérant · TexGrade GmbH & Co. KG",
    email: "E-mail",
    location: "Site",
    country: "Allemagne",
    call: "Appeler Reinhold Thate",
    customer: "Pour les clients",
    customerTitle: "Acheter des produits triés",
    customerText: "Nous échangeons avec vous sur le marché cible, les catégories d’articles, la qualité, la saison et les volumes prévus.",
    supplier: "Pour les fournisseurs",
    supplierTitle: "Proposer des textiles usagés",
    supplierText: "Les fournisseurs de textiles usagés collectés dans la région peuvent convenir directement avec nous des volumes, de la qualité, de l’enlèvement ou de la livraison.",
    imageAlt: "Chariot de marchandises dans l’entrepôt TexGrade",
  },
} as const;

export function ContactPage({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <>
      <section className="page-hero contact-hero">
        <div className="shell narrow-left"><span className="eyebrow">{copy.eyebrow}</span><h1>{copy.title}</h1><p>{copy.intro}</p></div>
      </section>
      <section className="section">
        <div className="shell contact-grid">
          <div className="contact-details">
            <span className="eyebrow">{copy.personEyebrow}</span>
            <h2>Reinhold Thate</h2>
            <p className="contact-role">{copy.role}</p>
            <a className="contact-phone" href="tel:+491714706260">+49 171 4706260</a>
            <div className="contact-block"><span>{copy.email}</span><p><a href="mailto:info@texgrade.com">info@texgrade.com</a></p></div>
            <div className="contact-block"><span>{copy.location}</span><p>Bismarckstraße 30<br />49324 Melle<br />{copy.country}</p></div>
            <a className="button primary" href="tel:+491714706260">{copy.call}</a>
          </div>
          <div className="contact-audience">
            <div className="contact-image-panel">
              <Image src="/images/warehouse/contact-visual.webp" alt={copy.imageAlt} fill sizes="(max-width: 980px) 100vw, 55vw" />
            </div>
            <article className="audience-card"><span>{copy.customer}</span><h2>{copy.customerTitle}</h2><p>{copy.customerText}</p></article>
            <article className="audience-card"><span>{copy.supplier}</span><h2>{copy.supplierTitle}</h2><p>{copy.supplierText}</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
