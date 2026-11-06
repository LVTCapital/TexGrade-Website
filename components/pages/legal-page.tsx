import Link from "next/link";
import { company } from "@/lib/company";
import { siteRoutes } from "@/lib/i18n";
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

const privacyCopy = {
  en: {
    eyebrow: "Legal",
    title: "Privacy",
    noticeTitle: "Draft for the private preview",
    noticeText: "This page is not yet a legally reviewed privacy policy and must not be published in its current form.",
    statusTitle: "Technical status of the preview",
    statusText: "The current version does not use analytics or marketing cookies. No information is collected through a contact form; contact is made directly by telephone.",
    hostingTitle: "Hosting",
    hostingText: "The final information about the hosting provider and the processing of technical access data will be added after the deployment setup has been completed.",
  },
  de: {
    eyebrow: "Rechtliches",
    title: "Datenschutz",
    noticeTitle: "Entwurf für die private Vorschau",
    noticeText: "Diese Seite ist noch keine abschließend geprüfte Datenschutzerklärung und darf so nicht öffentlich veröffentlicht werden.",
    statusTitle: "Technischer Stand der Vorschau",
    statusText: "Die Website setzt in der aktuellen Version keine Analyse- oder Marketing-Cookies ein. Es werden keine Angaben über ein Kontaktformular erfasst; die Kontaktaufnahme erfolgt direkt per Telefon.",
    hostingTitle: "Hosting",
    hostingText: "Die finalen Angaben zum Hostinganbieter und zur Verarbeitung technischer Zugriffsdaten werden nach Abschluss der Bereitstellung ergänzt.",
  },
  fr: {
    eyebrow: "Informations légales",
    title: "Confidentialité",
    noticeTitle: "Projet pour l’aperçu privé",
    noticeText: "Cette page ne constitue pas encore une politique de confidentialité juridiquement vérifiée et ne doit pas être publiée dans sa forme actuelle.",
    statusTitle: "État technique de l’aperçu",
    statusText: "La version actuelle du site n’utilise aucun cookie d’analyse ou de marketing. Aucune donnée n’est recueillie par un formulaire de contact ; la prise de contact s’effectue directement par téléphone.",
    hostingTitle: "Hébergement",
    hostingText: "Les informations définitives concernant l’hébergeur et le traitement des données techniques d’accès seront ajoutées une fois la mise en place terminée.",
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
  const copy = privacyCopy[locale];

  return (
    <section className="legal-page section">
      <div className="shell legal-content">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h1>{copy.title}</h1>
        <div className="draft-notice"><strong>{copy.noticeTitle}</strong><p>{copy.noticeText}</p></div>
        <h2>{copy.statusTitle}</h2><p>{copy.statusText}</p>
        <h2>{copy.hostingTitle}</h2><p>{copy.hostingText}</p>
      </div>
    </section>
  );
}
