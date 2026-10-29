import type { Locale } from "@/lib/i18n";

const content = {
  de: {
    eyebrow: "Kontakt",
    title: "Ihre Anlaufstelle für Einkauf und Lieferung.",
    intro: "Ob Sie sortierte Secondhand-Textilien beziehen oder regional erfasste Altkleider anliefern möchten: Sprechen Sie uns direkt an.",
    personEyebrow: "Ihr Ansprechpartner",
    role: "Geschäftsführer · TexGrade GmbH & Co. KG",
    location: "Standort",
    country: "Deutschland",
    call: "Reinhold Thate anrufen",
    customer: "Für Kunden",
    customerTitle: "Sortierte Ware beziehen",
    customerText: "Wir sprechen mit Ihnen über Zielmarkt, gewünschte Artikelkategorien, Qualität, Saison und geplante Mengen.",
    supplier: "Für Lieferanten",
    supplierTitle: "Altkleider anliefern",
    supplierText: "Lieferanten regional erfasster Altkleider können Mengen, Qualität, Abholung oder Anlieferung direkt mit uns abstimmen.",
  },
  en: {
    eyebrow: "Contact",
    title: "Your point of contact for purchasing and supply.",
    intro: "Whether you want to purchase sorted second-hand textiles or supply regionally collected used textiles, contact us directly.",
    personEyebrow: "Your contact",
    role: "Managing Director · TexGrade GmbH & Co. KG",
    location: "Location",
    country: "Germany",
    call: "Call Reinhold Thate",
    customer: "For customers",
    customerTitle: "Purchase sorted goods",
    customerText: "We discuss your target market, required article categories, quality, season and planned volumes.",
    supplier: "For suppliers",
    supplierTitle: "Supply used textiles",
    supplierText: "Suppliers of regionally collected used textiles can coordinate volumes, quality, collection or delivery directly with us.",
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
            <div className="contact-block"><span>{copy.location}</span><p>Bismarckstraße 30<br />49324 Melle<br />{copy.country}</p></div>
            <a className="button primary" href="tel:+491714706260">{copy.call}</a>
          </div>
          <div className="contact-audience">
            <article className="audience-card"><span>{copy.customer}</span><h2>{copy.customerTitle}</h2><p>{copy.customerText}</p></article>
            <article className="audience-card"><span>{copy.supplier}</span><h2>{copy.supplierTitle}</h2><p>{copy.supplierText}</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
