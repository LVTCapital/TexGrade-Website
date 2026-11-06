import Link from "next/link";
import { company } from "@/lib/company";
import { siteRoutes } from "@/lib/i18n";
import { privacyContent, type PrivacySection } from "@/components/pages/privacy-content";
import type { Locale } from "@/lib/i18n";

const legalCopy = {
  de: {
    eyebrow: "Rechtliches",
    title: "Impressum",
    basis: "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)",
    translationNote: null,
    provider: "Diensteanbieter",
    country: "Deutschland",
    registeredOffice: "Sitz der Gesellschaft",
    register: "Registergericht",
    registerNumber: "Registernummer",
    partner: "Persönlich haftende Gesellschafterin",
    managingDirectors: "Geschäftsführer",
    contact: "Kontakt",
    phone: "Telefon",
    email: "E-Mail",
    tax: "Steuerliche Angaben",
    vatId: "Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG",
    economicId: "Wirtschafts-Identifikationsnummer gemäß § 139c AO",
    responsible: "Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV",
    sameAddress: "Anschrift wie oben",
    dispute: "Verbraucherstreitbeilegung",
    disputeText: "Unser Angebot richtet sich ausschließlich an Unternehmer. Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
  },
  en: {
    eyebrow: "Legal",
    title: "Legal notice",
    basis: "Information pursuant to Section 5 of the German Digital Services Act (DDG)",
    translationNote: "This is a translation provided for convenience. Only the German version is legally binding.",
    provider: "Service provider",
    country: "Germany",
    registeredOffice: "Registered office",
    register: "Register court",
    registerNumber: "Register number",
    partner: "General partner (personally liable)",
    managingDirectors: "Managing director",
    contact: "Contact",
    phone: "Telephone",
    email: "Email",
    tax: "Tax information",
    vatId: "VAT identification number pursuant to Section 27a of the German VAT Act (UStG)",
    economicId: "Business identification number pursuant to Section 139c of the German Fiscal Code (AO)",
    responsible: "Responsible for content pursuant to Section 18 (2) of the German State Media Treaty (MStV)",
    sameAddress: "Address as above",
    dispute: "Consumer dispute resolution",
    disputeText: "Our services are directed exclusively at businesses. We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.",
  },
  fr: {
    eyebrow: "Informations légales",
    title: "Mentions légales",
    basis: "Informations conformément à l’article 5 de la loi allemande sur les services numériques (DDG)",
    translationNote: "Cette traduction est fournie à titre indicatif. Seule la version allemande fait foi.",
    provider: "Prestataire",
    country: "Allemagne",
    registeredOffice: "Siège social",
    register: "Tribunal d’enregistrement",
    registerNumber: "Numéro d’immatriculation",
    partner: "Associée commanditée (indéfiniment responsable)",
    managingDirectors: "Gérant",
    contact: "Contact",
    phone: "Téléphone",
    email: "E-mail",
    tax: "Informations fiscales",
    vatId: "Numéro d’identification à la TVA selon l’article 27a de la loi allemande sur la TVA (UStG)",
    economicId: "Numéro d’identification économique selon l’article 139c du code fiscal allemand (AO)",
    responsible: "Responsable du contenu selon l’article 18, alinéa 2 du traité inter-États allemand sur les médias (MStV)",
    sameAddress: "Adresse indiquée ci-dessus",
    dispute: "Règlement des litiges de consommation",
    disputeText: "Notre offre s’adresse exclusivement aux professionnels. Nous ne sommes ni tenus ni disposés à participer à une procédure de règlement des litiges devant un organisme de médiation de la consommation.",
  },
} as const;

export function LegalNoticePage({ locale }: { locale: Locale }) {
  const copy = legalCopy[locale];
  const partner = company.generalPartner;

  return (
    <section className="legal-page section">
      <div className="shell legal-content">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h1>{copy.title}</h1>
        <p className="legal-lead">{copy.basis}</p>
        {copy.translationNote && (
          <p className="legal-note">
            {copy.translationNote} <Link href={siteRoutes.de.legal} hrefLang="de" lang="de">Impressum (Deutsch)</Link>
          </p>
        )}

        <div className="legal-grid">
          <section className="legal-card legal-card-wide">
            <h2>{copy.provider}</h2>
            <address>
              <strong>{company.name}</strong><br />
              {company.street}<br />
              {company.postalCode} {company.city}<br />
              {copy.country}
            </address>
            <dl>
              <div><dt>{copy.registeredOffice}</dt><dd>{company.registeredOffice}</dd></div>
              <div><dt>{copy.register}</dt><dd>{company.registerCourt}</dd></div>
              <div><dt>{copy.registerNumber}</dt><dd>{company.registerNumber}</dd></div>
            </dl>
          </section>

          <section className="legal-card legal-card-wide">
            <h2>{copy.partner}</h2>
            <p><strong>{partner.name}</strong></p>
            <dl>
              <div><dt>{copy.registeredOffice}</dt><dd>{partner.registeredOffice}</dd></div>
              <div><dt>{copy.register}</dt><dd>{partner.registerCourt}</dd></div>
              <div><dt>{copy.registerNumber}</dt><dd>{partner.registerNumber}</dd></div>
              <div><dt>{copy.managingDirectors}</dt><dd>{partner.managingDirectors.join(", ")}</dd></div>
            </dl>
          </section>

          <section className="legal-card">
            <h2>{copy.contact}</h2>
            <dl>
              <div><dt>{copy.phone}</dt><dd><a href={company.phone.href}>{company.phone.display}</a></dd></div>
              <div><dt>{copy.email}</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>
            </dl>
          </section>

          <section className="legal-card">
            <h2>{copy.responsible}</h2>
            <p>{company.contentResponsible}<br />{copy.sameAddress}</p>
          </section>

          {(company.vatId || company.economicId) && (
            <section className="legal-card legal-card-wide">
              <h2>{copy.tax}</h2>
              <dl>
                {company.vatId && <div><dt>{copy.vatId}</dt><dd>{company.vatId}</dd></div>}
                {company.economicId && <div><dt>{copy.economicId}</dt><dd>{company.economicId}</dd></div>}
              </dl>
            </section>
          )}

          <section className="legal-card legal-card-wide">
            <h2>{copy.dispute}</h2>
            <p>{copy.disputeText}</p>
          </section>
        </div>
      </div>
    </section>
  );
}

export function PrivacyPage({ locale }: { locale: Locale }) {
  const copy = privacyContent[locale];
  const partner = company.generalPartner;
  const sections: readonly PrivacySection[] = copy.sections;

  return (
    <section className="legal-page section">
      <div className="shell legal-content">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h1>{copy.title}</h1>
        <p className="legal-lead">{copy.lead}</p>
        {copy.translationNote && (
          <p className="legal-note">
            {copy.translationNote} <Link href={siteRoutes.de.privacy} hrefLang="de" lang="de">Datenschutzerklärung (Deutsch)</Link>
          </p>
        )}

        <div className="legal-grid">
          <section className="legal-card legal-card-wide">
            <h2>{copy.controllerTitle}</h2>
            <p>{copy.controllerIntro}</p>
            <address>
              <strong>{company.name}</strong><br />
              {copy.representedBy} {partner.name}, {copy.managingDirector}: {partner.managingDirectors.join(", ")}<br />
              {company.street}, {company.postalCode} {company.city}, {copy.country}
            </address>
            <dl>
              <div><dt>{copy.phone}</dt><dd><a href={company.phone.href}>{company.phone.display}</a></dd></div>
              <div><dt>{copy.email}</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>
            </dl>
          </section>
        </div>

        <div className="privacy-sections">
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.blocks.map((block, index) =>
                typeof block === "string" ? <p key={index}>{block}</p>
                : "list" in block ? <ul key={index}>{block.list.map((item) => <li key={item}>{item}</li>)}</ul>
                : <p key={index} className="privacy-highlight">{block.highlight}</p>,
              )}
            </section>
          ))}
        </div>

        <p className="legal-updated">{copy.updated}</p>
      </div>
    </section>
  );
}
