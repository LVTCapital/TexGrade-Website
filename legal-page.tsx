import type { Locale } from "@/lib/i18n";

const legalCopy = {
  en: {
    eyebrow: "Legal",
    title: "Legal notice",
    noticeTitle: "Draft for the private preview",
    noticeText: "The information is based on the current TexGrade letterhead. Before public release, it will be reviewed again and supplemented with the relevant tax information.",
    provider: "Provider",
    providerText: <>TexGrade GmbH &amp; Co. KG<br />Bismarckstraße 30<br />49324 Melle<br />Germany</>,
    representation: "Representation",
    representationText: "Registered office in Düsseldorf. Represented by its personally liable partner, TexGrade Beteiligungs-GmbH, registered office in Düsseldorf. Managing Director: Reinhold Thate.",
    register: "Commercial register",
    registerText: <>TexGrade GmbH &amp; Co. KG: Düsseldorf Local Court, HRA 28754.<br />TexGrade Beteiligungs-GmbH: Düsseldorf Local Court, HRB 113801.</>,
    contact: "Contact",
    contactText: <>Contact: Reinhold Thate<br />Telephone: +49 171 470 62 60<br />A business email address will be added before the website is made public.</>,
    tax: "Tax information",
    taxText: "The VAT identification number will be added once issued.",
  },
  de: {
    eyebrow: "Rechtliches",
    title: "Impressum",
    noticeTitle: "Entwurf für die private Vorschau",
    noticeText: "Die Angaben stammen aus dem aktuellen TexGrade-Briefbogen. Vor der öffentlichen Veröffentlichung werden sie noch einmal rechtlich geprüft und um die steuerlichen Angaben ergänzt.",
    provider: "Anbieter",
    providerText: <>TexGrade GmbH &amp; Co. KG<br />Bismarckstraße 30<br />49324 Melle<br />Deutschland</>,
    representation: "Vertretung",
    representationText: "Sitz Düsseldorf. Vertreten durch die persönlich haftende Gesellschafterin TexGrade Beteiligungs-GmbH, Sitz Düsseldorf. Geschäftsführer: Reinhold Thate.",
    register: "Registerangaben",
    registerText: <>TexGrade GmbH &amp; Co. KG: Amtsgericht Düsseldorf, HRA 28754.<br />TexGrade Beteiligungs-GmbH: Amtsgericht Düsseldorf, HRB 113801.</>,
    contact: "Kontakt",
    contactText: <>Ansprechpartner: Reinhold Thate<br />Telefon: +49 171 470 62 60<br />Eine geschäftliche E-Mail-Adresse wird vor der öffentlichen Freischaltung ergänzt.</>,
    tax: "Steuerliche Angaben",
    taxText: "Die Umsatzsteuer-Identifikationsnummer wird nach Zuteilung ergänzt.",
  },
  fr: {
    eyebrow: "Informations légales",
    title: "Mentions légales",
    noticeTitle: "Projet pour l’aperçu privé",
    noticeText: "Ces informations sont basées sur le papier à en-tête actuel de TexGrade. Avant la mise en ligne publique, elles seront à nouveau vérifiées et complétées par les informations fiscales nécessaires.",
    provider: "Éditeur",
    providerText: <>TexGrade GmbH &amp; Co. KG<br />Bismarckstraße 30<br />49324 Melle<br />Allemagne</>,
    representation: "Représentation",
    representationText: "Siège social à Düsseldorf. Représentée par son associée personnellement responsable, TexGrade Beteiligungs-GmbH, dont le siège est à Düsseldorf. Gérant : Reinhold Thate.",
    register: "Registre du commerce",
    registerText: <>TexGrade GmbH &amp; Co. KG : tribunal d’instance de Düsseldorf, HRA 28754.<br />TexGrade Beteiligungs-GmbH : tribunal d’instance de Düsseldorf, HRB 113801.</>,
    contact: "Contact",
    contactText: <>Interlocuteur : Reinhold Thate<br />Téléphone : +49 171 470 62 60<br />Une adresse e-mail professionnelle sera ajoutée avant la mise en ligne publique.</>,
    tax: "Informations fiscales",
    taxText: "Le numéro d’identification à la TVA sera ajouté dès qu’il aura été attribué.",
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

  return (
    <section className="legal-page section">
      <div className="shell legal-content">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h1>{copy.title}</h1>
        <div className="draft-notice"><strong>{copy.noticeTitle}</strong><p>{copy.noticeText}</p></div>
        <h2>{copy.provider}</h2><p>{copy.providerText}</p>
        <h2>{copy.representation}</h2><p>{copy.representationText}</p>
        <h2>{copy.register}</h2><p>{copy.registerText}</p>
        <h2>{copy.contact}</h2><p>{copy.contactText}</p>
        <h2>{copy.tax}</h2><p>{copy.taxText}</p>
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
