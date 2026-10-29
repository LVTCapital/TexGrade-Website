import type { Locale } from "@/lib/i18n";

export function LegalNoticePage({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <section className="legal-page section">
        <div className="shell legal-content">
          <span className="eyebrow">Legal</span>
          <h1>Legal notice</h1>
          <div className="draft-notice"><strong>Draft for the private preview</strong><p>The information is based on the current TexGrade letterhead. Before public release, it will be reviewed again and supplemented with the relevant tax information.</p></div>
          <h2>Provider</h2><p>TexGrade GmbH &amp; Co. KG<br />Bismarckstraße 30<br />49324 Melle<br />Germany</p>
          <h2>Representation</h2><p>Registered office in Düsseldorf. Represented by its personally liable partner, TexGrade Beteiligungs-GmbH, registered office in Düsseldorf. Managing Director: Reinhold Thate.</p>
          <h2>Commercial register</h2><p>TexGrade GmbH &amp; Co. KG: Düsseldorf Local Court, HRA 28754.<br />TexGrade Beteiligungs-GmbH: Düsseldorf Local Court, HRB 113801.</p>
          <h2>Contact</h2><p>Contact: Reinhold Thate<br />Telephone: +49 171 4706260<br />A business email address will be added before the website is made public.</p>
          <h2>Tax information</h2><p>The VAT identification number will be added once issued.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="legal-page section">
      <div className="shell legal-content">
        <span className="eyebrow">Rechtliches</span>
        <h1>Impressum</h1>
        <div className="draft-notice"><strong>Entwurf für die private Vorschau</strong><p>Die Angaben stammen aus dem aktuellen TexGrade-Briefbogen. Vor der öffentlichen Veröffentlichung werden sie noch einmal rechtlich geprüft und um die steuerlichen Angaben ergänzt.</p></div>
        <h2>Anbieter</h2><p>TexGrade GmbH &amp; Co. KG<br />Bismarckstraße 30<br />49324 Melle<br />Deutschland</p>
        <h2>Vertretung</h2><p>Sitz Düsseldorf. Vertreten durch die persönlich haftende Gesellschafterin TexGrade Beteiligungs-GmbH, Sitz Düsseldorf. Geschäftsführer: Reinhold Thate.</p>
        <h2>Registerangaben</h2><p>TexGrade GmbH &amp; Co. KG: Amtsgericht Düsseldorf, HRA 28754.<br />TexGrade Beteiligungs-GmbH: Amtsgericht Düsseldorf, HRB 113801.</p>
        <h2>Kontakt</h2><p>Ansprechpartner: Reinhold Thate<br />Telefon: +49 171 4706260<br />Eine geschäftliche E-Mail-Adresse wird vor der öffentlichen Freischaltung ergänzt.</p>
        <h2>Steuerliche Angaben</h2><p>Die Umsatzsteuer-Identifikationsnummer wird nach Zuteilung ergänzt.</p>
      </div>
    </section>
  );
}

export function PrivacyPage({ locale }: { locale: Locale }) {
  const copy = locale === "de"
    ? { eyebrow: "Rechtliches", title: "Datenschutz", noticeTitle: "Entwurf für die private Vorschau", noticeText: "Diese Seite ist noch keine abschließend geprüfte Datenschutzerklärung und darf so nicht öffentlich veröffentlicht werden.", statusTitle: "Technischer Stand der Vorschau", statusText: "Die Website setzt in der aktuellen Version keine Analyse- oder Marketing-Cookies ein. Es werden keine Angaben über ein Kontaktformular erfasst; die Kontaktaufnahme erfolgt direkt per Telefon.", hostingTitle: "Hosting", hostingText: "Die finalen Angaben zum Hostinganbieter und zur Verarbeitung technischer Zugriffsdaten werden nach Abschluss der Bereitstellung ergänzt." }
    : { eyebrow: "Legal", title: "Privacy", noticeTitle: "Draft for the private preview", noticeText: "This page is not yet a legally reviewed privacy policy and must not be published in its current form.", statusTitle: "Technical status of the preview", statusText: "The current version of this website does not use analytics or marketing cookies. No information is collected through a contact form; contact is made directly by telephone.", hostingTitle: "Hosting", hostingText: "Final information about the hosting provider and the processing of technical access data will be added once deployment has been completed." };

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
